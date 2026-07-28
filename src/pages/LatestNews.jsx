import { useState, useEffect, useCallback } from 'react'
import { Newspaper, ExternalLink, RefreshCw, AlertCircle, KeyRound } from 'lucide-react'
import ChartCard from '../components/ChartCard'
import { fetchLatestNews, hasApiKey } from '../services/mediastackApi'

const QSR_KEYWORDS = 'fast food,quick service restaurant,KFC,Nando\'s,Steers,Debonairs,restaurant industry'

const SAMPLE_ARTICLES = [
  {
    title: 'Sample headline — connect your mediastack API key to see live articles',
    source: 'Sample source',
    published_at: new Date().toISOString(),
    description: 'This is a placeholder card shown because no live news feed is connected yet. Add your mediastack API key to a local .env file to replace this with real, current South African QSR industry news.',
    url: null,
    isSample: true
  },
  {
    title: 'Sample headline — real articles will show real outlets, dates, and links',
    source: 'Sample source',
    published_at: new Date(Date.now() - 86400000).toISOString(),
    description: 'Once connected, this page pulls from mediastack, filtered to South African sources and QSR-related keywords, sorted by most recently published.',
    url: null,
    isSample: true
  }
]

function formatDate(iso) {
  if (!iso) return ''
  try {
    return new Date(iso).toLocaleDateString('en-ZA', { day: 'numeric', month: 'short', year: 'numeric' })
  } catch {
    return iso
  }
}

export default function LatestNews() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [status, setStatus] = useState(null) // { ok, reason, message }

  const load = useCallback(async () => {
    setLoading(true)
    if (!hasApiKey()) {
      setStatus({ ok: false, reason: 'no-key' })
      setArticles(SAMPLE_ARTICLES)
      setLoading(false)
      return
    }
    const result = await fetchLatestNews({ keywords: QSR_KEYWORDS, limit: 12 })
    setStatus(result)
    setArticles(result.ok && result.articles.length ? result.articles : SAMPLE_ARTICLES)
    setLoading(false)
  }, [])

  useEffect(() => { load() }, [load])

  const showSetupNotice = !loading && status && !status.ok

  return (
    <div className="flex flex-col gap-4">
      {showSetupNotice && (
        <div className="bg-accent-amberDim/20 border border-accent-amberDim rounded-2xl p-4 flex items-start gap-3">
          <KeyRound size={18} className="text-accent-amber shrink-0 mt-0.5" />
          <div className="text-sm text-text-secondary">
            {status.reason === 'no-key' ? (
              <>
                <p className="text-text-primary font-medium mb-1">No mediastack API key found</p>
                <p>Copy <code className="text-accent-amber">.env.example</code> to <code className="text-accent-amber">.env</code>, add your key from{' '}
                  <a href="https://mediastack.com/" target="_blank" rel="noreferrer" className="underline">mediastack.com</a>, then restart <code className="text-accent-amber">npm run dev</code>. Showing sample cards below in the meantime.</p>
              </>
            ) : (
              <>
                <p className="text-text-primary font-medium mb-1">Couldn't load live news</p>
                <p>{status.message || 'The mediastack request failed.'} Showing sample cards below in the meantime.</p>
              </>
            )}
          </div>
        </div>
      )}

      <ChartCard
        title="Latest QSR Industry News"
        subtitle={status?.ok ? 'Live from mediastack, South African sources, sorted by most recent' : 'Sample placeholder — connect mediastack for live articles'}
        actions={
          <button
            onClick={load}
            className="flex items-center gap-1.5 text-xs font-medium text-text-secondary hover:text-text-primary bg-base-elevated hover:bg-base-border rounded-lg px-3 py-2 transition-colors"
          >
            <RefreshCw size={14} className={loading ? 'animate-spin' : ''} /> Refresh
          </button>
        }
      >
        {loading ? (
          <div className="py-10 text-center text-text-muted text-sm">Loading latest articles…</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {articles.map((a, i) => (
              <div key={i} className={`bg-base-elevated border border-base-border rounded-xl p-4 flex flex-col gap-2 ${a.isSample ? 'opacity-70' : ''}`}>
                <div className="flex items-start justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-text-muted">
                    <Newspaper size={13} /> {a.source || 'Unknown source'}
                  </span>
                  <span className="text-xs font-mono text-text-muted">{formatDate(a.published_at)}</span>
                </div>
                <h4 className="text-sm font-semibold text-text-primary leading-snug">{a.title}</h4>
                {a.description && (
                  <p className="text-xs text-text-secondary leading-relaxed line-clamp-3">{a.description}</p>
                )}
                {a.url ? (
                  <a
                    href={a.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-accent-amber hover:underline mt-1"
                  >
                    Read full article <ExternalLink size={12} />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-text-muted mt-1">
                    <AlertCircle size={12} /> No link — sample entry
                  </span>
                )}
              </div>
            ))}
          </div>
        )}
      </ChartCard>
    </div>
  )
}
