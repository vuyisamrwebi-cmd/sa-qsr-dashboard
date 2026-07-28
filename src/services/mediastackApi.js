// ============================================================================
// mediastack News API service
// Docs: https://mediastack.com/documentation
//
// Reads the API key from a local .env file (VITE_MEDIASTACK_API_KEY) — never
// hardcode a real key into this file. Free-tier mediastack keys only support
// plain HTTP, so this will work over http://localhost during development but
// will be blocked as "mixed content" if this app is ever served over HTTPS
// on a free plan. Upgrade to a paid mediastack plan for HTTPS support.
// ============================================================================

const MEDIASTACK_BASE_URL = 'http://api.mediastack.com/v1/news'

export function hasApiKey() {
  return Boolean(import.meta.env.VITE_MEDIASTACK_API_KEY)
}

/**
 * Fetch recent South African news articles matching the given keywords.
 * @param {Object} options
 * @param {string} options.keywords - comma-separated keywords, e.g. "restaurant,fast food"
 * @param {number} options.limit - max number of articles (mediastack allows up to 100)
 * @returns {Promise<{ok: boolean, articles: Array, reason?: string, message?: string}>}
 */
export async function fetchLatestNews({ keywords, limit = 12 } = {}) {
  const apiKey = import.meta.env.VITE_MEDIASTACK_API_KEY

  if (!apiKey) {
    return { ok: false, reason: 'no-key', message: 'No mediastack API key found in .env', articles: [] }
  }

  const params = new URLSearchParams({
    access_key: apiKey,
    countries: 'za',
    languages: 'en',
    sort: 'published_desc',
    limit: String(limit)
  })
  if (keywords) params.set('keywords', keywords)

  try {
    const response = await fetch(`${MEDIASTACK_BASE_URL}?${params.toString()}`)

    if (!response.ok) {
      return { ok: false, reason: 'http-error', message: `Request failed with status ${response.status}`, articles: [] }
    }

    const data = await response.json()

    if (data.error) {
      return { ok: false, reason: 'api-error', message: data.error.message || 'mediastack API returned an error', articles: [] }
    }

    return { ok: true, articles: data.data || [] }
  } catch (err) {
    // Likely a network/CORS issue, or mixed-content blocking on HTTPS pages
    return { ok: false, reason: 'network-error', message: err.message, articles: [] }
  }
}
