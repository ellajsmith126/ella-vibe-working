import { useState, useCallback } from 'react'

export type TabId = 'tools' | 'workflows' | 'impact' | 'personal'

const VALID_TABS: TabId[] = ['tools', 'workflows', 'impact', 'personal']

function getInitialTab(): TabId {
  const params = new URLSearchParams(window.location.search)
  const tab = params.get('tab')
  if (tab && VALID_TABS.includes(tab as TabId)) {
    return tab as TabId
  }
  return 'tools'
}

export function useTabState() {
  const [activeTab, setActiveTabState] = useState<TabId>(getInitialTab)

  const setActiveTab = useCallback((tab: TabId) => {
    setActiveTabState(tab)
    window.history.replaceState({}, '', `?tab=${tab}`)
  }, [])

  return { activeTab, setActiveTab }
}
