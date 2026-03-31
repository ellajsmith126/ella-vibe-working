import { impactItems } from '../data/content'
import { ImpactCard } from './ImpactCard'

export function ImpactTab() {
  return (
    <div className="space-y-4">
      {impactItems.map((item) => (
        <ImpactCard key={item.id} item={item} />
      ))}
    </div>
  )
}
