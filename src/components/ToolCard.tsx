import { motion } from 'framer-motion'
import { ToolIcon } from './ToolIcon'
import type { Tool } from '../data/content'

interface ToolCardProps {
  tool: Tool
  index: number
}

export function ToolCard({ tool, index }: ToolCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.06, ease: 'easeOut' }}
      whileHover={{ y: -3, boxShadow: '0 8px 25px -5px rgba(233, 30, 120, 0.12)' }}
      className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-5 transition-colors duration-150 cursor-default dark:border-gray-700 dark:bg-surface-dim"
    >
      <ToolIcon
        iconUrl={tool.iconUrl}
        monogramFallback={tool.monogramFallback}
        brandColor={tool.brandColor}
        name={tool.name}
      />
      <div>
        <p className="text-sm font-medium text-text-main dark:text-text-light">{tool.name}</p>
        <p className="text-sm text-text-muted">{tool.role}</p>
      </div>
    </motion.div>
  )
}
