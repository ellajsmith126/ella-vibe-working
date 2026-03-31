import { workflows } from '../data/content'
import { WorkflowCard } from './WorkflowCard'

export function WorkflowsTab() {
  return (
    <div className="space-y-6">
      {workflows.map((workflow) => (
        <WorkflowCard key={workflow.id} item={workflow} />
      ))}
    </div>
  )
}
