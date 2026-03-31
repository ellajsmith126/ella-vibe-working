import { motion } from 'framer-motion'
import { tools, CATEGORY_LABELS } from '../data/content'
import { ToolCard } from './ToolCard'
import type { Tool } from '../data/content'

const CATEGORIES: Tool['category'][] = ['thinking', 'writing', 'building', 'organising']

export function ToolsTab() {
  let globalIndex = 0

  return (
    <div className="space-y-10">
      {CATEGORIES.map((category, catIndex) => {
        const categoryTools = tools.filter((t) => t.category === category)
        if (categoryTools.length === 0) return null
        return (
          <motion.section
            key={category}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: catIndex * 0.1 }}
          >
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-text-muted">
              {CATEGORY_LABELS[category]}
            </h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {categoryTools.map((tool) => {
                const idx = globalIndex++
                return <ToolCard key={tool.name} tool={tool} index={idx} />
              })}
            </div>
          </motion.section>
        )
      })}
    </div>
  )
}
