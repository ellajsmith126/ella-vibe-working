import { motion } from 'framer-motion'
import { personalItems, personalIntroCopy } from '../data/content'
import { WorkflowCard } from './WorkflowCard'

export function PersonalTab() {
  return (
    <div className="space-y-6">
      <motion.p
        className="text-base leading-relaxed text-text-muted"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {personalIntroCopy}
      </motion.p>
      {personalItems.map((item, index) => (
        <WorkflowCard key={item.id} item={item} index={index} />
      ))}
    </div>
  )
}
