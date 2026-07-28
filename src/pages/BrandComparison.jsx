import { useMemo } from 'react'
import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ZAxis, Cell } from 'recharts'
import ChartCard from '../components/ChartCard'
import DataTable from '../components/DataTable'
import { adSpendByBrand } from '../data/mockData'
import { formatZAR, formatPercent } from '../utils/format'
import { chartTooltipStyle, axisTickStyle, CHART_COLORS, BRAND_PALETTE } from '../utils/chartTheme'

export default function BrandComparison({ filters, search }) {
  const filtered = useMemo(() => {
    let rows = adSpendByBrand
    if (filters.brand !== 'All Brands') {
      rows = rows.filter(b => b.brand === filters.brand)
    }
    if (search) {
      const q = search.toLowerCase()
      rows = rows.filter(b => b.brand.toLowerCase().includes(q))
    }
    return rows
  }, [filters.brand, search])

  const columns = [
    { key: 'brand', label: 'Brand' },
    { key: 'adSpend', label: 'Ad Spend', render: r => formatZAR(r.adSpend, { compact: true }) },
    { key: 'marketingSpend', label: 'Marketing Spend', render: r => formatZAR(r.marketingSpend, { compact: true }) },
    { key: 'digitalShare', label: 'Digital Share', render: r => formatPercent(r.digitalShare * 100) },
    { key: 'momChange', label: 'MoM Change', render: r => (
      <span style={{ color: r.momChange >= 0 ? CHART_COLORS.green : CHART_COLORS.red }}>
        {r.momChange >= 0 ? '+' : ''}{r.momChange.toFixed(1)}%
      </span>
    ) }
  ]

  return (
    <div className="flex flex-col gap-4">
      <ChartCard title="Spend vs Digital Share" subtitle="Bubble size = month-on-month spend growth">
        <ResponsiveContainer width="100%" height={360}>
          <ScatterChart margin={{ top: 10, right: 20, bottom: 10, left: 0 }}>
            <CartesianGrid stroke={CHART_COLORS.grid} />
            <XAxis
              type="number"
              dataKey="adSpend"
              name="Ad Spend"
              tick={axisTickStyle}
              axisLine={{ stroke: '#252C3B' }}
              tickLine={false}
              tickFormatter={v => formatZAR(v, { compact: true })}
            />
            <YAxis
              type="number"
              dataKey="digitalShare"
              name="Digital Share"
              tick={axisTickStyle}
              axisLine={false}
              tickLine={false}
              tickFormatter={v => `${Math.round(v * 100)}%`}
            />
            <ZAxis type="number" dataKey="momChange" range={[80, 500]} name="MoM Change" />
            <Tooltip
              {...chartTooltipStyle}
              formatter={(value, name) => {
                if (name === 'Ad Spend') return formatZAR(value, { compact: true })
                if (name === 'Digital Share') return `${Math.round(value * 100)}%`
                return `${value}%`
              }}
            />
            <Scatter data={filtered} fill={CHART_COLORS.amber}>
              {filtered.map((_, i) => <Cell key={i} fill={BRAND_PALETTE[i % BRAND_PALETTE.length]} />)}
            </Scatter>
          </ScatterChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Brand Scorecard" subtitle={`${filtered.length} brands matching current filters`}>
        <DataTable columns={columns} rows={filtered} keyField="brand" />
      </ChartCard>
    </div>
  )
}
