import { ToolIcon } from './ToolIcon'
import type { Tool } from '../data/content'

interface ToolCardProps {
  tool: Tool
}

export function ToolCard({ tool }: ToolCardProps) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-5 transition-shadow duration-150 hover:shadow-md dark:border-gray-700 dark:bg-surface-dark">
      <ToolIcon
        iconUrl={tool.iconUrl}
        monogramFallback={tool.monogramFallback}
        brandColor={tool.brandColor}
        name={tool.name}
      />
      <div>
        <p className="text-sm font-medium text-text dark:text-text-dark">{tool.name}</p>
        <p className="text-sm text-text-muted">{tool.role}</p>
      </div>
    </div>
  )
}
