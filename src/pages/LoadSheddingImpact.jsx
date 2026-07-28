import { Zap, TrendingDown, TrendingUp, ShieldCheck } from 'lucide-react'
import { ResponsiveContainer, LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell } from 'recharts'
import KPICard from '../components/KPICard'
import ChartCard from '../components/ChartCard'
import { loadSheddingTrend, currentLoadSheddingStage, loadSheddingStageMomChange, channelImpact } from '../data/mockData'
import { chartTooltipStyle, axisTickStyle, CHART_COLORS } from '../utils/chartTheme'

const directionIcon = { increase: TrendingUp, decrease: TrendingDown, resilient: ShieldCheck }
const directionColor = { increase: CHART_COLORS.green, decrease: CHART_COLORS.red, resilient: CHART_COLORS.blue }

export default function LoadSheddingImpact() {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard
          label="Current Stage"
          value={`Stage ${currentLoadSheddingStage.toFixed(1)}`}
          momChange={loadSheddingStageMomChange}
          invert
          insight="National average, current month"
          icon={Zap}
        />
        {channelImpact.map(c => {
          const Icon = directionIcon[c.direction]
          return (
            <KPICard
              key={c.channelType}
              label={c.channelType}
              value={`${c.estimatedRevenueImpact > 0 ? '+' : ''}${c.estimatedRevenueImpact}%`}
              insight={`Estimated revenue impact at current stage · ${c.backupPowerDependency}% backup-power dependency`}
              icon={Icon}
            />
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ChartCard title="Load-Shedding Stage Trend" subtitle="National average stage, 12 months">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={loadSheddingTrend}>
              <CartesianGrid stroke={CHART_COLORS.grid} vertical={false} />
              <XAxis dataKey="month" tick={{ ...axisTickStyle, fontSize: 10 }} axisLine={{ stroke: '#252C3B' }} tickLine={false} />
              <YAxis tick={axisTickStyle} axisLine={false} tickLine={false} domain={[0, 6]} />
              <Tooltip {...chartTooltipStyle} formatter={(v) => [`Stage ${v}`]} />
              <Line type="monotone" dataKey="avgStage" stroke={CHART_COLORS.red} strokeWidth={2.5} dot={false} name="Avg stage" />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Estimated Revenue Impact by Channel" subtitle="Per load-shedding stage, current month">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={channelImpact}>
              <CartesianGrid stroke={CHART_COLORS.grid} vertical={false} />
              <XAxis dataKey="channelType" tick={axisTickStyle} axisLine={{ stroke: '#252C3B' }} tickLine={false} />
              <YAxis tick={axisTickStyle} axisLine={false} tickLine={false} tickFormatter={v => `${v}%`} />
              <Tooltip {...chartTooltipStyle} formatter={(v) => [`${v}%`]} />
              <Bar dataKey="estimatedRevenueImpact" radius={[6, 6, 0, 0]}>
                {channelImpact.map((c, i) => <Cell key={i} fill={directionColor[c.direction]} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      <ChartCard title="Reading the impact model" subtitle="How the estimate is built">
        <p className="text-sm text-text-secondary leading-relaxed">
          Estimated revenue impact = load-shedding stage × channel sensitivity. Dine-in and drive-thru are
          most exposed, since both depend heavily on grid power for kitchens, POS systems, and ambience.
          Delivery is more resilient and can gain share as consumers cook less at home — though restaurant
          kitchens still need power to fulfil delivery orders. These are illustrative sensitivities; replace
          with real POS and Eskom schedule data via the Data Sources connectors once available.
        </p>
      </ChartCard>
    </div>
  )
}
