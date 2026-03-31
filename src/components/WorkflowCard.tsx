import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import type { Workflow, PersonalItem } from '../data/content'

interface WorkflowCardProps {
  item: Workflow | PersonalItem
  index: number
}

export function WorkflowCard({ item, index }: WorkflowCardProps) {
  const [expanded, setExpanded] = useState(false)

  const showToggle = item.outputExpanded && item.outputExpanded.length > 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.1, ease: 'easeOut' }}
      whileHover={{ boxShadow: '0 4px 20px -4px rgba(233, 30, 120, 0.1)' }}
      className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-surface-dim"
    >
      <div className="p-6 space-y-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-1">
            Situation
          </p>
          <p className="text-sm text-text-muted dark:text-gray-400">{item.situation}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-1">
            What I Did
          </p>
          <p className="text-sm text-text-muted dark:text-gray-400">{item.action}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-1">
            Output
          </p>
          <p className="text-sm font-medium text-text-main dark:text-text-light">{item.output}</p>
        </div>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="rounded-lg border-l-4 border-primary bg-surface p-4 dark:bg-bg-deep">
                <p className="whitespace-pre-line text-sm text-text-muted dark:text-gray-400">
                  {item.outputExpanded}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {showToggle && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex w-full items-center justify-center gap-2 border-t border-gray-200 px-6 py-3 text-sm font-medium text-primary transition-colors duration-150 hover:bg-surface dark:border-gray-700 dark:hover:bg-bg-deep"
          aria-expanded={expanded}
          style={{ minHeight: 44 }}
        >
          <motion.span
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.25 }}
            className="flex items-center"
          >
            <ChevronDown size={16} />
          </motion.span>
          {expanded ? 'Hide full output' : 'View full output'}
        </button>
      )}
    </motion.div>
  )
}
