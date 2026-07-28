import InsightCard from '../components/InsightCard'
import { insights, whatChangedThisMonth } from '../data/mockData'

export default function Insights() {
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-base-surface border border-base-border rounded-2xl p-5 shadow-card">
        <h3 className="font-display text-sm font-semibold text-text-primary mb-3">What changed this month?</h3>
        <p className="text-sm text-accent-amber font-medium mb-3">{whatChangedThisMonth.headline}</p>
        <ul className="space-y-2">
          {whatChangedThisMonth.points.map((p, i) => (
            <li key={i} className="text-sm text-text-secondary flex gap-2">
              <span className="text-text-muted mt-0.5">•</span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {insights.map(insight => (
          <InsightCard key={insight.id} {...insight} />
        ))}
      </div>
    </div>
  )
}
