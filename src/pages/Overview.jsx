import { Megaphone, Wallet, Smartphone, Timer, Receipt, Zap, ChefHat, Leaf, TrendingDown } from 'lucide-react'
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell, Legend } from 'recharts'
import KPICard from '../components/KPICard'
import ChartCard from '../components/ChartCard'
import { executiveKpis, monthlyAdSpendTrend, marketingSpendByChannel, whatChangedThisMonth } from '../data/mockData'
import { formatZAR, formatPercent } from '../utils/format'
import { chartTooltipStyle, axisTickStyle, CHART_COLORS } from '../utils/chartTheme'

export default function Overview() {
  const k = executiveKpis

  const digitalTotal = marketingSpendByChannel.filter(c => c.isDigital).reduce((s, c) => s + c.spend, 0)
  const traditionalTotal = marketingSpendByChannel.filter(c => !c.isDigital).reduce((s, c) => s + c.spend, 0)
  const splitData = [
    { name: 'Digital', value: digitalTotal },
    { name: 'Traditional', value: traditionalTotal }
  ]

  return (
    <div className="flex flex-col gap-6">
      {/* KPI Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <KPICard
          label="Total Ad Spend"
          value={formatZAR(k.totalAdSpend, { compact: true })}
          momChange={k.totalAdSpendMom}
          insight="12-month trailing spend across all tracked brands"
          icon={Megaphone}
        />
        <KPICard
          label="Total Marketing Spend"
          value={formatZAR(k.totalMarketingSpend, { compact: true })}
          momChange={k.totalMarketingSpendMom}
          insight="Includes above and below-the-line activity"
          icon={Wallet}
        />
        <KPICard
          label="Digital Ad Spend Share"
          value={formatPercent(k.digitalAdSpendShare * 100)}
          momChange={k.digitalAdSpendShareMom}
          insight="Share of spend across digital channels"
          icon={Smartphone}
        />
        <KPICard
          label="Avg Speed of Service"
          value={`${k.avgSpeedOfServiceSeconds}s`}
          momChange={k.avgSpeedOfServiceMom}
          invert
          insight="Blended drive-thru order-to-collection time"
          icon={Timer}
        />
        <KPICard
          label="Average Order Value"
          value={formatZAR(k.avgOrderValue, { decimals: 2 })}
          momChange={k.avgOrderValueMom}
          insight="Blended across dine-in, drive-thru, and delivery"
          icon={Receipt}
          gaugePercent={68}
          gaugeColor={CHART_COLORS.amber}
        />
        <KPICard
          label="Digital Order Mix"
          value={formatPercent(k.digitalOrderMixShare * 100)}
          momChange={k.digitalOrderMixShareMom}
          insight="Share of orders placed via app, web, or aggregator"
          icon={Smartphone}
          gaugePercent={41}
          gaugeColor={CHART_COLORS.blue}
        />
        <KPICard
          label="Load-Shedding Stage"
          value={`Stage ${k.currentLoadSheddingStage.toFixed(1)}`}
          momChange={k.loadSheddingStageMomChange}
          invert
          insight="National average stage, current month"
          icon={Zap}
        />
        <KPICard
          label="Combo / Value Meal Interest"
          value={`${k.comboPurchaseInterest}/100`}
          momChange={k.comboPurchaseInterestMom}
          insight="Purchase-intent score across value meal campaigns"
          icon={ChefHat}
        />
      </div>

      {/* Affordability index + What changed */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <KPICard
          label="Value Meal Affordability Index"
          value={`${executiveKpis.valueMealAffordabilityIndex}/100`}
          momChange={executiveKpis.valueMealAffordabilityIndexMom}
          invert
          insight="Blended affordability across LSM segments and menu price tiers"
          icon={TrendingDown}
          className="lg:col-span-1"
        />
        <div className="lg:col-span-2 bg-base-surface border border-base-border rounded-2xl p-5 shadow-card">
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
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <ChartCard title="Monthly Ad Spend Trend" subtitle="ZAR millions, digital vs traditional" className="lg:col-span-2">
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={monthlyAdSpendTrend}>
              <CartesianGrid stroke={CHART_COLORS.grid} vertical={false} />
              <XAxis dataKey="month" tick={axisTickStyle} axisLine={{ stroke: '#252C3B' }} tickLine={false} />
              <YAxis tick={axisTickStyle} axisLine={false} tickLine={false} tickFormatter={v => `R${v}m`} />
              <Tooltip {...chartTooltipStyle} formatter={(v) => [`R${v}m`]} />
              <Area type="monotone" dataKey="traditional" stackId="1" stroke={CHART_COLORS.blue} fill={CHART_COLORS.blue} fillOpacity={0.25} name="Traditional" />
              <Area type="monotone" dataKey="digital" stackId="1" stroke={CHART_COLORS.amber} fill={CHART_COLORS.amber} fillOpacity={0.3} name="Digital" />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Digital vs Traditional Split" subtitle="Share of total marketing spend">
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie
                data={splitData}
                dataKey="value"
                nameKey="name"
                innerRadius={60}
                outerRadius={95}
                paddingAngle={2}
              >
                <Cell fill={CHART_COLORS.amber} />
                <Cell fill={CHART_COLORS.blue} />
              </Pie>
              <Tooltip {...chartTooltipStyle} formatter={(v) => formatZAR(v, { compact: true })} />
              <Legend wrapperStyle={{ fontSize: 12, color: '#8B93A7' }} />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
    </div>
  )
}
