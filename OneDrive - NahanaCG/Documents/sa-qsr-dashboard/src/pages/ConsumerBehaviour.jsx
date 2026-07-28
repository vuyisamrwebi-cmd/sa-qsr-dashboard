import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import ChartCard from '../components/ChartCard'
import DataTable from '../components/DataTable'
import { consumerSegments, channelIntent } from '../data/mockData'
import { chartTooltipStyle, axisTickStyle, CHART_COLORS } from '../utils/chartTheme'

export default function ConsumerBehaviour() {
  const segmentColumns = [
    { key: 'segment', label: 'LSM Segment' },
    { key: 'dineIn', label: 'Dine-in', render: r => `${r.dineIn}/100` },
    { key: 'driveThru', label: 'Drive-Thru', render: r => `${r.driveThru}/100` },
    { key: 'delivery', label: 'Delivery', render: r => `${r.delivery}/100` },
    { key: 'takeaway', label: 'Takeaway', render: r => `${r.takeaway}/100` }
  ]

  const intentColumns = [
    { key: 'group', label: 'Consumer Group' },
    { key: 'dineIn', label: 'Dine-in', render: r => `${r.dineIn}/100` },
    { key: 'driveThru', label: 'Drive-Thru', render: r => `${r.driveThru}/100` },
    { key: 'delivery', label: 'Delivery', render: r => `${r.delivery}/100` },
    { key: 'takeaway', label: 'Takeaway', render: r => `${r.takeaway}/100` }
  ]

  return (
    <div className="flex flex-col gap-4">
      <ChartCard title="Channel Preference by LSM Segment" subtitle="Preference index, 0–100">
        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={consumerSegments} margin={{ bottom: 10 }}>
            <CartesianGrid stroke={CHART_COLORS.grid} vertical={false} />
            <XAxis dataKey="segment" tick={{ ...axisTickStyle, fontSize: 10 }} axisLine={{ stroke: '#252C3B' }} tickLine={false} />
            <YAxis tick={axisTickStyle} axisLine={false} tickLine={false} domain={[0, 100]} />
            <Tooltip {...chartTooltipStyle} />
            <Legend wrapperStyle={{ fontSize: 12, color: '#8B93A7' }} />
            <Bar dataKey="dineIn" name="Dine-in" fill={CHART_COLORS.amber} radius={[4, 4, 0, 0]} />
            <Bar dataKey="driveThru" name="Drive-Thru" fill={CHART_COLORS.blue} radius={[4, 4, 0, 0]} />
            <Bar dataKey="delivery" name="Delivery" fill={CHART_COLORS.green} radius={[4, 4, 0, 0]} />
            <Bar dataKey="takeaway" name="Takeaway" fill={CHART_COLORS.purple} radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ChartCard title="Channel Preference — Detail" subtitle="By LSM segment">
          <DataTable columns={segmentColumns} rows={consumerSegments} keyField="segment" />
        </ChartCard>
        <ChartCard title="Channel Intent by Consumer Group" subtitle="Score 0–100">
          <DataTable columns={intentColumns} rows={channelIntent} keyField="group" />
        </ChartCard>
      </div>
    </div>
  )
}
