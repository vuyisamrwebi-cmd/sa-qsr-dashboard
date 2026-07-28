export default function ChartCard({ title, subtitle, actions, children, className = '' }) {
  return (
    <div className={`bg-base-surface border border-base-border rounded-2xl p-5 shadow-card flex flex-col gap-4 min-w-0 ${className}`}>
      <div className="flex items-start justify-between gap-3 flex-wrap">
        <div>
          <h3 className="font-display text-sm font-semibold text-text-primary">{title}</h3>
          {subtitle && <p className="text-xs text-text-muted mt-0.5">{subtitle}</p>}
        </div>
        {actions && <div className="flex items-center gap-2">{actions}</div>}
      </div>
      <div className="min-w-0">{children}</div>
    </div>
  )
}
