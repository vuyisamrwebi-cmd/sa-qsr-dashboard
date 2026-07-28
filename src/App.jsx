import { useState, useMemo } from 'react'
import Sidebar from './components/Sidebar'
import FilterBar from './components/FilterBar'
import Overview from './pages/Overview'
import AdvertisingSpend from './pages/AdvertisingSpend'
import SocialTrends from './pages/SocialTrends'
import LoadSheddingImpact from './pages/LoadSheddingImpact'
import ConsumerBehaviour from './pages/ConsumerBehaviour'
import BrandComparison from './pages/BrandComparison'
import Insights from './pages/Insights'
import { adSpendByBrand, socialTrends } from './data/mockData'

const defaultFilters = {
  dateRange: 'Last 12 months',
  brand: 'All Brands',
  province: 'All Provinces',
  channelType: 'All Channels',
  platform: 'All Platforms',
  priceTier: 'All Tiers',
  lsmSegment: 'All Segments'
}

const pageMeta = {
  overview: { title: 'Overview', description: 'Executive KPIs and market snapshot' },
  advertising: { title: 'Advertising Spend', description: 'Ad and marketing investment across brands and channels' },
  social: { title: 'Social Trends', description: 'QSR conversation across Meta, X, and TikTok' },
  loadshedding: { title: 'Load-Shedding Impact', description: 'How power cuts shift channel demand and revenue' },
  consumer: { title: 'Consumer Behaviour', description: 'Channel preference and intent by LSM segment' },
  brands: { title: 'Brand Comparison', description: 'Cross-brand spend, sentiment, and momentum' },
  insights: { title: 'Insights', description: 'Automatically generated observations and summary' }
}

function toCsv(rows) {
  if (!rows.length) return ''
  const headers = Object.keys(rows[0])
  const lines = [headers.join(',')]
  rows.forEach(row => {
    lines.push(headers.map(h => JSON.stringify(row[h] ?? '')).join(','))
  })
  return lines.join('\n')
}

function downloadFile(filename, content, type = 'text/csv') {
  const blob = new Blob([content], { type })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

export default function App() {
  const [activePage, setActivePage] = useState('overview')
  const [filters, setFilters] = useState(defaultFilters)
  const [search, setSearch] = useState('')

  const meta = pageMeta[activePage]

  const searchPlaceholder = useMemo(() => {
    if (activePage === 'social') return 'Search hashtags or topics...'
    if (activePage === 'brands') return 'Search brands...'
    return 'Search...'
  }, [activePage])

  const handleExportCsv = () => {
    const dataset = activePage === 'social' ? socialTrends : adSpendByBrand
    const csv = toCsv(dataset)
    downloadFile(`sa-qsr-dashboard-${activePage}.csv`, csv)
  }

  const handleDownloadReport = () => {
    const report = [
      'SOUTH AFRICAN QSR MARKET INTELLIGENCE DASHBOARD',
      `Section: ${meta.title}`,
      `Generated: ${new Date().toLocaleString('en-ZA')}`,
      '',
      `Active filters: ${JSON.stringify(filters, null, 2)}`
    ].join('\n')
    downloadFile(`sa-qsr-dashboard-report-${activePage}.txt`, report, 'text/plain')
  }

  const showSearch = activePage === 'social' || activePage === 'brands'

  const renderPage = () => {
    switch (activePage) {
      case 'overview': return <Overview />
      case 'advertising': return <AdvertisingSpend filters={filters} />
      case 'social': return <SocialTrends filters={filters} search={search} />
      case 'loadshedding': return <LoadSheddingImpact filters={filters} />
      case 'consumer': return <ConsumerBehaviour />
      case 'brands': return <BrandComparison filters={filters} search={search} />
      case 'insights': return <Insights />
      default: return <Overview />
    }
  }

  return (
    <div className="min-h-screen flex bg-base-bg">
      <Sidebar activePage={activePage} onNavigate={setActivePage} />

      <div className="flex-1 min-w-0">
        <main className="p-4 sm:p-6 lg:p-8 flex flex-col gap-6 max-w-[1600px] mx-auto">
          <header>
            <h1 className="font-display text-xl sm:text-2xl font-semibold text-text-primary">
              South African QSR Market Intelligence Dashboard
            </h1>
            <p className="text-sm text-text-secondary mt-1">
              {meta.title} — {meta.description}
            </p>
          </header>

          <FilterBar
            filters={filters}
            onChange={setFilters}
            onExportCsv={handleExportCsv}
            onDownloadReport={handleDownloadReport}
            searchValue={showSearch ? search : undefined}
            onSearchChange={showSearch ? setSearch : undefined}
            searchPlaceholder={searchPlaceholder}
          />

          {renderPage()}
        </main>
      </div>
    </div>
  )
}
