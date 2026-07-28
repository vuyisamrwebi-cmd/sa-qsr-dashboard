import { Search, Download, FileDown } from 'lucide-react'
import { provinces, qsrBrands, channelTypeNames, lsmSegments, priceTiers } from '../data/mockData'

const dateRanges = ['Last 3 months', 'Last 6 months', 'Last 12 months', 'Year to date']
const platforms = ['All Platforms', 'Meta', 'X', 'TikTok']

function Select({ label, value, onChange, options }) {
  return (
    <div className="flex flex-col gap-1 min-w-[140px]">
      <label className="text-[11px] text-text-muted uppercase tracking-wide">{label}</label>
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        className="bg-base-elevated border border-base-border rounded-lg px-2.5 py-1.5 text-sm text-text-primary focus:outline-none focus:border-accent-amber"
      >
        {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
      </select>
    </div>
  )
}

export default function FilterBar({ filters, onChange, onExportCsv, onDownloadReport, searchValue, onSearchChange, searchPlaceholder }) {
  const update = (key, value) => onChange({ ...filters, [key]: value })

  return (
    <div className="bg-base-surface border border-base-border rounded-2xl p-4 flex flex-wrap items-end gap-4">
      <Select label="Date Range" value={filters.dateRange} onChange={v => update('dateRange', v)} options={dateRanges} />
      <Select label="Brand" value={filters.brand} onChange={v => update('brand', v)} options={['All Brands', ...qsrBrands]} />
      <Select label="Province" value={filters.province} onChange={v => update('province', v)} options={['All Provinces', ...provinces]} />
      <Select label="Channel Type" value={filters.channelType} onChange={v => update('channelType', v)} options={['All Channels', ...channelTypeNames]} />
      <Select label="Platform" value={filters.platform} onChange={v => update('platform', v)} options={platforms} />
      <Select label="Price Tier" value={filters.priceTier} onChange={v => update('priceTier', v)} options={['All Tiers', ...priceTiers]} />
      <Select label="LSM Segment" value={filters.lsmSegment} onChange={v => update('lsmSegment', v)} options={['All Segments', ...lsmSegments]} />

      {onSearchChange && (
        <div className="flex flex-col gap-1 min-w-[180px] flex-1">
          <label className="text-[11px] text-text-muted uppercase tracking-wide">Search</label>
          <div className="relative">
            <Search size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-text-muted" />
            <input
              type="text"
              value={searchValue}
              onChange={e => onSearchChange(e.target.value)}
              placeholder={searchPlaceholder || 'Search...'}
              className="w-full bg-base-elevated border border-base-border rounded-lg pl-8 pr-2.5 py-1.5 text-sm text-text-primary focus:outline-none focus:border-accent-amber placeholder:text-text-muted"
            />
          </div>
        </div>
      )}

      <div className="flex items-center gap-2 ml-auto">
        {onExportCsv && (
          <button
            onClick={onExportCsv}
            className="flex items-center gap-1.5 text-xs font-medium text-text-secondary hover:text-text-primary bg-base-elevated hover:bg-base-border rounded-lg px-3 py-2 transition-colors"
          >
            <FileDown size={14} /> Export CSV
          </button>
        )}
        {onDownloadReport && (
          <button
            onClick={onDownloadReport}
            className="flex items-center gap-1.5 text-xs font-medium text-base-bg bg-accent-amber hover:bg-accent-amber/90 rounded-lg px-3 py-2 transition-colors"
          >
            <Download size={14} /> Download Report
          </button>
        )}
      </div>
    </div>
  )
}
