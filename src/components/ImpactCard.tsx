import { motion } from 'framer-motion'
import type { ImpactItem } from '../data/content'

interface ImpactCardProps {
  item: ImpactItem
  index: number
}

export function ImpactCard({ item, index }: ImpactCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.1, ease: 'easeOut' }}
      whileHover={{ y: -2, boxShadow: '0 6px 20px -4px rgba(233, 30, 120, 0.08)' }}
      className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-surface-dim"
    >
      <div className="px-6 pt-5 pb-1">
        <p className="text-base font-semibold text-text-main dark:text-text-light">{item.label}</p>
      </div>

      <div className="mx-6 mt-3 mb-4 grid grid-cols-2 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700" style={{ gap: '1px' }}>
        <div className="bg-gray-50 p-4 dark:bg-bg-deep">
          <p className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-2">
            Before
          </p>
          <p className="text-sm leading-relaxed text-text-muted dark:text-gray-400">
            {item.before}
          </p>
        </div>
        <div className="p-4" style={{ backgroundColor: 'rgba(233, 30, 120, 0.06)' }}>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
            After
          </p>
          <p className="text-sm font-medium leading-relaxed text-text-main dark:text-text-light">
            {item.after}
          </p>
        </div>
      </div>

      {item.metric && (
        <div className="mx-6 mb-5">
          <motion.div
            className="rounded-lg bg-gray-100 py-2 text-center dark:bg-bg-deep"
            whileHover={{ backgroundColor: 'rgba(233, 30, 120, 0.08)', scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <p className="text-sm font-semibold text-primary">{item.metric}</p>
          </motion.div>
        </div>
      )}
    </motion.div>
  )
}
