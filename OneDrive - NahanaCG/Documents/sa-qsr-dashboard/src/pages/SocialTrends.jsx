import { useMemo } from 'react'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell } from 'recharts'
import ChartCard from '../components/ChartCard'
import DataTable from '../components/DataTable'
import { socialTrends } from '../data/mockData'
import { formatNumber } from '../utils/format'
import { chartTooltipStyle, axisTickStyle, CHART_COLORS } from '../utils/chartTheme'

function sentimentColor(s) {
  if (s > 0.3) return CHART_COLORS.green
  if (s < -0.1) return CHART_COLORS.red
  return CHART_COLORS.blue
}

export default function SocialTrends({ filters, search }) {
  const filtered = useMemo(() => {
    let rows = socialTrends
    if (filters.platform !== 'All Platforms') {
      rows = rows.filter(r => r.platform === filters.platform)
    }
    if (filters.brand !== 'All Brands') {
      rows = rows.filter(r => r.relatedBrands.includes(filters.brand))
    }
    if (search) {
      const q = search.toLowerCase()
      rows = rows.filter(r =>
        r.topic.toLowerCase().includes(q) ||
        r.hashtag.toLowerCase().includes(q) ||
        r.relatedBrands.some(b => b.toLowerCase().includes(q))
      )
    }
    return [...rows].sort((a, b) => b.mentions - a.mentions)
  }, [filters.platform, filters.brand, search])

  const columns = [
    { key: 'hashtag', label: 'Hashtag / Topic', render: r => (
      <div>
        <p className="text-text-primary font-medium">{r.hashtag}</p>
        <p className="text-xs text-text-muted">{r.topic}</p>
      </div>
    ) },
    { key: 'platform', label: 'Platform' },
    { key: 'mentions', label: 'Mentions', render: r => formatNumber(r.mentions) },
    { key: 'sentiment', label: 'Sentiment', render: r => (
      <span style={{ color: sentimentColor(r.sentiment) }}>{r.sentiment > 0 ? '+' : ''}{r.sentiment.toFixed(2)}</span>
    ) },
    { key: 'growth', label: '4-wk Growth', render: r => `+${r.growth.toFixed(1)}%` },
    { key: 'relatedBrands', label: 'Related Brands', render: r => r.relatedBrands.join(', ') }
  ]

  return (
    <div className="flex flex-col gap-4">
      <ChartCard title="Top Trending Topics" subtitle="By mentions, current filters applied">
        <ResponsiveContainer width="100%" height={Math.max(280, filtered.length * 30)}>
          <BarChart data={filtered} layout="vertical" margin={{ left: 10 }}>
            <CartesianGrid stroke={CHART_COLORS.grid} horizontal={false} />
            <XAxis type="number" tick={axisTickStyle} axisLine={false} tickLine={false} tickFormatter={v => formatNumber(v)} />
            <YAxis type="category" dataKey="hashtag" tick={{ ...axisTickStyle, fontSize: 10 }} axisLine={false} tickLine={false} width={150} />
            <Tooltip {...chartTooltipStyle} formatter={(v) => formatNumber(v)} />
            <Bar dataKey="mentions" radius={[0, 6, 6, 0]}>
              {filtered.map((d, i) => <Cell key={i} fill={sentimentColor(d.sentiment)} />)}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Topic Detail" subtitle={`${filtered.length} topics matching current filters`}>
        <DataTable columns={columns} rows={filtered} keyField="hashtag" />
      </ChartCard>
    </div>
  )
}
