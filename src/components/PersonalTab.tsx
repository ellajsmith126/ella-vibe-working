import { personalItems, personalIntroCopy } from '../data/content'
import { WorkflowCard } from './WorkflowCard'

export function PersonalTab() {
  return (
    <div className="space-y-6">
      <p className="text-base leading-relaxed text-text-muted">
        {personalIntroCopy}
      </p>
      {personalItems.map((item) => (
        <WorkflowCard key={item.id} item={item} />
      ))}
    </div>
  )
}
