export function formatZAR(value, { compact = false, decimals = 0 } = {}) {
  if (compact) {
    if (Math.abs(value) >= 1_000_000_000) return `R${(value / 1_000_000_000).toFixed(1)}bn`
    if (Math.abs(value) >= 1_000_000) return `R${(value / 1_000_000).toFixed(1)}m`
    if (Math.abs(value) >= 1_000) return `R${(value / 1_000).toFixed(1)}k`
  }
  return `R${value.toLocaleString('en-ZA', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}`
}

export function formatNumber(value, decimals = 0) {
  return value.toLocaleString('en-ZA', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
}

export function formatPercent(value, decimals = 1) {
  return `${value.toFixed(decimals)}%`
}

export function formatSigned(value, decimals = 1, suffix = '%') {
  const sign = value > 0 ? '+' : ''
  return `${sign}${value.toFixed(decimals)}${suffix}`
}
