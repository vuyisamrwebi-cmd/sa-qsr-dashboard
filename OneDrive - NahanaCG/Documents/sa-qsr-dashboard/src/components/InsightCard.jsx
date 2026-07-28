import { TrendingUp, TrendingDown, CircleDot } from 'lucide-react'

const toneStyles = {
  positive: { icon: TrendingUp, color: 'text-accent-green', bg: 'bg-accent-greenDim/30' },
  negative: { icon: TrendingDown, color: 'text-accent-red', bg: 'bg-accent-redDim/30' },
  neutral: { icon: CircleDot, color: 'text-accent-blue', bg: 'bg-accent-blueDim/30' }
}

export default function InsightCard({ title, body, tag, tone = 'neutral' }) {
  const { icon: Icon, color, bg } = toneStyles[tone] || toneStyles.neutral

  return (
    <div className="bg-base-surface border border-base-border rounded-2xl p-5 shadow-card flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${bg} ${color}`}>
          <Icon size={16} strokeWidth={2} />
        </span>
        <span className="text-[11px] font-mono uppercase tracking-wide text-text-muted border border-base-border rounded-full px-2 py-0.5">
          {tag}
        </span>
      </div>
      <h4 className="font-display text-sm font-semibold text-text-primary">{title}</h4>
      <p className="text-sm text-text-secondary leading-relaxed">{body}</p>
    </div>
  )
}
