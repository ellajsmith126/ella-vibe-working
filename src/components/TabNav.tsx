import { useRef, useEffect } from 'react'
import { TABS } from '../data/content'
import { DarkModeToggle } from './DarkModeToggle'
import type { TabId } from '../hooks/useTabState'

interface TabNavProps {
  activeTab: TabId
  onTabChange: (tab: TabId) => void
}

export function TabNav({ activeTab, onTabChange }: TabNavProps) {
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({})

  useEffect(() => {
    tabRefs.current[activeTab]?.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest',
    })
  }, [activeTab])

  return (
    <nav className="sticky top-0 z-50 bg-white/90 dark:bg-bg-dark/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
      <div className="mx-auto flex max-w-4xl items-center px-6">
        <div
          className="flex flex-1 gap-1 overflow-x-auto"
          role="tablist"
          style={{ scrollbarWidth: 'none' }}
        >
          {TABS.map((tab) => (
            <button
              key={tab.id}
              ref={(el) => { tabRefs.current[tab.id] = el }}
              role="tab"
              aria-selected={activeTab === tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`whitespace-nowrap px-4 py-4 text-sm font-medium transition-colors duration-150 border-b-[3px] ${
                activeTab === tab.id
                  ? 'border-primary text-primary'
                  : 'border-transparent text-text-muted hover:text-text dark:hover:text-text-dark'
              }`}
              style={{ minHeight: 44 }}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <DarkModeToggle />
      </div>
    </nav>
  )
}
