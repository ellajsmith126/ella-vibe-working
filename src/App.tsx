import { AnimatePresence, motion } from 'framer-motion'
import { ErrorBoundary } from './components/ErrorBoundary'
import { Hero } from './components/Hero'
import { TabNav } from './components/TabNav'
import { ToolsTab } from './components/ToolsTab'
import { WorkflowsTab } from './components/WorkflowsTab'
import { ImpactTab } from './components/ImpactTab'
import { PersonalTab } from './components/PersonalTab'
import { useTabState } from './hooks/useTabState'
import type { TabId } from './hooks/useTabState'

function TabContent({ activeTab }: { activeTab: TabId }) {
  switch (activeTab) {
    case 'tools':
      return <ToolsTab />
    case 'workflows':
      return <WorkflowsTab />
    case 'impact':
      return <ImpactTab />
    case 'personal':
      return <PersonalTab />
  }
}

export default function App() {
  const { activeTab, setActiveTab } = useTabState()

  return (
    <div className="min-h-screen bg-white dark:bg-bg-deep text-text-main dark:text-text-light transition-colors duration-150">
      <ErrorBoundary>
        <Hero />
        <TabNav activeTab={activeTab} onTabChange={setActiveTab} />
        <main className="mx-auto max-w-4xl px-6 py-10">
          <ErrorBoundary>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 16, scale: 0.99 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <TabContent activeTab={activeTab} />
              </motion.div>
            </AnimatePresence>
          </ErrorBoundary>
        </main>
        <footer className="mx-auto max-w-4xl px-6 py-8 text-center text-sm text-text-muted">
          Built with Vibe Working
        </footer>
      </ErrorBoundary>
    </div>
  )
}
