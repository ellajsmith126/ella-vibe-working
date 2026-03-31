import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import type { Workflow, PersonalItem } from '../data/content'

interface WorkflowCardProps {
  item: Workflow | PersonalItem
}

export function WorkflowCard({ item }: WorkflowCardProps) {
  const [expanded, setExpanded] = useState(false)

  const showToggle = item.outputExpanded && item.outputExpanded.length > 0

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-surface-dark">
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
          <p className="text-sm font-medium text-text dark:text-text-dark">{item.output}</p>
        </div>

        {expanded && (
          <div className="rounded-lg border-l-4 border-primary bg-surface p-4 dark:bg-bg-dark">
            <p className="whitespace-pre-line text-sm text-text-muted dark:text-gray-400">
              {item.outputExpanded}
            </p>
          </div>
        )}
      </div>

      {showToggle && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex w-full items-center justify-center gap-2 border-t border-gray-200 px-6 py-3 text-sm font-medium text-primary transition-colors duration-150 hover:bg-surface dark:border-gray-700 dark:hover:bg-bg-dark"
          aria-expanded={expanded}
          style={{ minHeight: 44 }}
        >
          {expanded ? (
            <>
              <ChevronUp size={16} /> Hide full output
            </>
          ) : (
            <>
              <ChevronDown size={16} /> View full output
            </>
          )}
        </button>
      )}
    </div>
  )
}
