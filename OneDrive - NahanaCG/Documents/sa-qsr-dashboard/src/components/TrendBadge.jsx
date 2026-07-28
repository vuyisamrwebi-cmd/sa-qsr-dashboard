import { ArrowUp, ArrowDown, Minus } from 'lucide-react'
import { formatSigned } from '../utils/format'

export default function TrendBadge({ value, invert = false, decimals = 1 }) {
  const isFlat = Math.abs(value) < 0.05
  const isPositive = value > 0
  const good = invert ? !isPositive : isPositive

  const colorClass = isFlat
    ? 'text-text-secondary bg-base-elevated'
    : good
      ? 'text-accent-green bg-accent-greenDim/40'
      : 'text-accent-red bg-accent-redDim/40'

  const Icon = isFlat ? Minus : isPositive ? ArrowUp : ArrowDown

  return (
    <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-mono font-medium ${colorClass}`}>
      <Icon size={12} strokeWidth={2.5} />
      {formatSigned(value, decimals)}
    </span>
  )
}
