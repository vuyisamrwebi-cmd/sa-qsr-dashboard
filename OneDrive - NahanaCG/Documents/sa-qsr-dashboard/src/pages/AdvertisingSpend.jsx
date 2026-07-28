import { useMemo } from 'react'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LineChart, Line, Cell, Legend } from 'recharts'
import ChartCard from '../components/ChartCard'
import { adSpendByBrand, marketingSpendByChannel, monthlyAdSpendTrend } from '../data/mockData'
import { formatZAR } from '../utils/format'
import { chartTooltipStyle, axisTickStyle, CHART_COLORS, BRAND_PALETTE } from '../utils/chartTheme'

export default function AdvertisingSpend({ filters }) {
  const brandData = useMemo(() => {
    const filtered = filters.brand === 'All Brands'
      ? adSpendByBrand
      : adSpendByBrand.filter(b => b.brand === filters.brand)
    return [...filtered].sort((a, b) => b.adSpend - a.adSpend)
  }, [filters.brand])

  const channelData = useMemo(
    () => [...marketingSpendByChannel].sort((a, b) => b.spend - a.spend),
    []
  )

  return (
    <div className="flex flex-col gap-4">
      <ChartCard title="Total Ad Spend by Brand" subtitle="12-month trailing, ZAR">
        <ResponsiveContainer width="100%" height={Math.max(280, brandData.length * 32)}>
          <BarChart data={brandData} layout="vertical" margin={{ left: 30 }}>
            <CartesianGrid stroke={CHART_COLORS.grid} horizontal={false} />
            <XAxis type="number" tick={axisTickStyle} axisLine={false} tickLine={false} tickFormatter={v => formatZAR(v, { compact: true })} />
            <YAxis type="category" dataKey="brand" tick={axisTickStyle} axisLine={false} tickLine={false} width={120} />
            <Tooltip {...chartTooltipStyle} formatter={(v) => formatZAR(v, { compact: true })} />
            <Bar dataKey="adSpend" radius={[0, 6, 6, 0]}>
              {brandData.map((_, i) => <Cell key={i} fill={BRAND_PALETTE[i % BRAND_PALETTE.length]} />)}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ChartCard title="Marketing Spend by Channel" subtitle="Current month, ZAR">
          <ResponsiveContainer width="100%" height={340}>
            <BarChart data={channelData} margin={{ bottom: 40 }}>
              <CartesianGrid stroke={CHART_COLORS.grid} vertical={false} />
              <XAxis
                dataKey="channel"
                tick={{ ...axisTickStyle, fontSize: 10 }}
                axisLine={{ stroke: '#252C3B' }}
                tickLine={false}
                angle={-35}
                textAnchor="end"
                interval={0}
              />
              <YAxis tick={axisTickStyle} axisLine={false} tickLine={false} tickFormatter={v => formatZAR(v, { compact: true })} />
              <Tooltip {...chartTooltipStyle} formatter={(v) => formatZAR(v, { compact: true })} />
              <Bar dataKey="spend" radius={[6, 6, 0, 0]}>
                {channelData.map((d, i) => (
                  <Cell key={i} fill={d.isDigital ? CHART_COLORS.amber : CHART_COLORS.blue} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <div className="flex items-center gap-4 mt-2 justify-center text-xs text-text-secondary">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full inline-block" style={{ background: CHART_COLORS.amber }} /> Digital</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full inline-block" style={{ background: CHART_COLORS.blue }} /> Traditional</span>
          </div>
        </ChartCard>

        <ChartCard title="Monthly Ad Spend Trend" subtitle="ZAR millions">
          <ResponsiveContainer width="100%" height={340}>
            <LineChart data={monthlyAdSpendTrend}>
              <CartesianGrid stroke={CHART_COLORS.grid} vertical={false} />
              <XAxis dataKey="month" tick={{ ...axisTickStyle, fontSize: 10 }} axisLine={{ stroke: '#252C3B' }} tickLine={false} />
              <YAxis tick={axisTickStyle} axisLine={false} tickLine={false} tickFormatter={v => `R${v}m`} />
              <Tooltip {...chartTooltipStyle} formatter={(v) => [`R${v}m`]} />
              <Line type="monotone" dataKey="total" stroke={CHART_COLORS.amber} strokeWidth={2.5} dot={false} name="Total spend" />
              <Line type="monotone" dataKey="digital" stroke={CHART_COLORS.blue} strokeWidth={2} dot={false} name="Digital" strokeDasharray="4 3" />
              <Legend wrapperStyle={{ fontSize: 12, color: '#8B93A7' }} />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
    </div>
  )
}
