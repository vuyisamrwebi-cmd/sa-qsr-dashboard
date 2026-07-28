import TrendBadge from './TrendBadge'

function GaugeArc({ percent = 0, color = '#F4A125' }) {
  // Signature element: a small dial, echoing a drive-thru order-timer /
  // speed-of-service display rather than a generic sparkline.
  const clamped = Math.max(0, Math.min(100, percent))
  const radius = 22
  const circumference = Math.PI * radius // half circle
  const offset = circumference * (1 - clamped / 100)

  return (
    <svg width="56" height="32" viewBox="0 0 56 32" className="shrink-0">
      <path
        d="M 6 30 A 22 22 0 0 1 50 30"
        fill="none"
        stroke="#252C3B"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M 6 30 A 22 22 0 0 1 50 30"
        fill="none"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
      />
    </svg>
  )
}

export default function KPICard({ label, value, momChange, insight, icon: Icon, invert = false, gaugePercent, gaugeColor, decimals = 1, className = '' }) {
  return (
    <div className={`bg-base-surface border border-base-border rounded-2xl p-5 shadow-card flex flex-col gap-3 min-w-0 ${className}`}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2 text-text-secondary">
          {Icon && <Icon size={16} strokeWidth={2} />}
          <span className="text-xs font-medium uppercase tracking-wide">{label}</span>
        </div>
        {typeof gaugePercent === 'number' && <GaugeArc percent={gaugePercent} color={gaugeColor} />}
      </div>

      <div className="flex items-baseline gap-2 flex-wrap">
        <span className="font-mono text-2xl font-semibold text-text-primary tracking-tight">{value}</span>
        {momChange !== undefined && <TrendBadge value={momChange} invert={invert} decimals={decimals} />}
      </div>

      {insight && <p className="text-xs text-text-muted leading-relaxed">{insight}</p>}
    </div>
  )
}
