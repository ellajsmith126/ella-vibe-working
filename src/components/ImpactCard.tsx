import type { ImpactItem } from '../data/content'

interface ImpactCardProps {
  item: ImpactItem
}

export function ImpactCard({ item }: ImpactCardProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-surface-dark">
      <div className="px-6 pt-5 pb-1">
        <p className="text-base font-semibold text-text dark:text-text-dark">{item.label}</p>
      </div>

      <div className="mx-6 mt-3 mb-4 grid grid-cols-2 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700" style={{ gap: '1px' }}>
        <div className="bg-gray-50 p-4 dark:bg-bg-dark">
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
          <p className="text-sm font-medium leading-relaxed text-text dark:text-text-dark">
            {item.after}
          </p>
        </div>
      </div>

      {item.metric && (
        <div className="mx-6 mb-5">
          <div className="rounded-lg bg-gray-100 py-2 text-center dark:bg-bg-dark">
            <p className="text-sm font-semibold text-primary">{item.metric}</p>
          </div>
        </div>
      )}
    </div>
  )
}
