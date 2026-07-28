import {
  LayoutDashboard, Megaphone, Hash, Zap, Users, GitCompareArrows,
  Lightbulb, UtensilsCrossed, Newspaper, X, Menu
} from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard },
  { id: 'advertising', label: 'Advertising Spend', icon: Megaphone },
  { id: 'social', label: 'Social Trends', icon: Hash },
  { id: 'loadshedding', label: 'Load-Shedding Impact', icon: Zap },
  { id: 'consumer', label: 'Consumer Behaviour', icon: Users },
  { id: 'brands', label: 'Brand Comparison', icon: GitCompareArrows },
  { id: 'news', label: 'Latest News', icon: Newspaper },
  { id: 'insights', label: 'Insights', icon: Lightbulb }
]

export default function Sidebar({ activePage, onNavigate }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleNavigate = (id) => {
    onNavigate(id)
    setMobileOpen(false)
  }

  return (
    <>
      {/* Mobile top bar */}
      <div className="lg:hidden flex items-center justify-between bg-base-surface border-b border-base-border px-4 py-3 sticky top-0 z-30">
        <div className="flex items-center gap-2">
          <UtensilsCrossed className="text-accent-amber" size={20} />
          <span className="font-display text-sm font-semibold text-text-primary">SA QSR Intelligence</span>
        </div>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-text-secondary p-1.5 rounded-lg hover:bg-base-elevated"
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:sticky top-0 left-0 h-screen w-64 bg-base-surface border-r border-base-border
          flex flex-col z-40 transition-transform duration-200
          ${mobileOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0
        `}
      >
        <div className="hidden lg:flex items-center gap-2 px-6 py-6 border-b border-base-border">
          <UtensilsCrossed className="text-accent-amber" size={22} />
          <div>
            <p className="font-display text-sm font-semibold text-text-primary leading-tight">SA QSR Intelligence</p>
            <p className="text-[11px] text-text-muted">Market dashboard</p>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
          {navItems.map(item => {
            const Icon = item.icon
            const active = activePage === item.id
            return (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`
                  w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors
                  ${active
                    ? 'bg-accent-amber/15 text-accent-amber'
                    : 'text-text-secondary hover:bg-base-elevated hover:text-text-primary'}
                `}
              >
                <Icon size={17} strokeWidth={2} />
                {item.label}
              </button>
            )
          })}
        </nav>

        <div className="px-4 py-4 border-t border-base-border">
          <p className="text-[11px] text-text-muted leading-relaxed">
            Data refreshed monthly. All figures are illustrative mock data pending live API integration.
          </p>
        </div>
      </aside>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  )
}
