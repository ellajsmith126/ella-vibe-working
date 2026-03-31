import { tools, CATEGORY_LABELS } from '../data/content'
import { ToolCard } from './ToolCard'
import type { Tool } from '../data/content'

const CATEGORIES: Tool['category'][] = ['thinking', 'writing', 'building', 'organising']

export function ToolsTab() {
  return (
    <div className="space-y-10">
      {CATEGORIES.map((category) => {
        const categoryTools = tools.filter((t) => t.category === category)
        if (categoryTools.length === 0) return null
        return (
          <section key={category}>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-text-muted">
              {CATEGORY_LABELS[category]}
            </h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {categoryTools.map((tool) => (
                <ToolCard key={tool.name} tool={tool} />
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}
