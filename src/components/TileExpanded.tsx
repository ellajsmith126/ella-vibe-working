import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { AnimatedCounter } from './AnimatedCounter'
import { ToolIcon } from './ToolIcon'
import { tools, workflows, impactItems, personalItems, personalIntroCopy, CATEGORY_LABELS } from '../data/content'
import type { TileConfig, SectionStat } from '../data/content'

interface TileExpandedProps {
  tile: TileConfig | null
  onClose: () => void
}

function StatsRow({ stats, accentColor }: { stats: SectionStat[]; accentColor: string }) {
  if (stats.length === 0) return null
  return (
    <div className="flex gap-6 mt-6 p-5 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <AnimatedCounter
            value={stat.value}
            className="text-4xl font-black block"
            style={{ background: `linear-gradient(135deg, ${accentColor}, #40E0D0)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
          />
          <span className="text-xs mt-1 block" style={{ color: 'rgba(255,255,255,0.4)' }}>{stat.label}</span>
        </div>
      ))}
    </div>
  )
}

function ToolsContent() {
  const categories = Object.entries(CATEGORY_LABELS) as [keyof typeof CATEGORY_LABELS, string][]
  return (
    <div className="mt-5 space-y-5">
      {categories.map(([key, label]) => {
        const catTools = tools.filter((t) => t.category === key)
        if (catTools.length === 0) return null
        return (
          <div key={key}>
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'rgba(255,255,255,0.35)' }}>
              {label}
            </p>
            <div className="space-y-2">
              {catTools.map((tool) => (
                <div key={tool.name} className="flex items-center gap-3 p-3 rounded-lg" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <ToolIcon iconUrl={tool.iconUrl} monogramFallback={tool.monogramFallback} brandColor={tool.brandColor} name={tool.name} />
                  <div>
                    <p className="text-sm font-bold text-white">{tool.name}</p>
                    <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{tool.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

function WorkflowsContent() {
  return (
    <div className="mt-5 space-y-3">
      {workflows.map((wf) => (
        <div key={wf.id} className="p-4 rounded-lg space-y-3" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest mb-1" style={{ color: 'rgba(233,30,120,0.7)' }}>Situation</p>
            <p className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>{wf.situation}</p>
          </div>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest mb-1" style={{ color: 'rgba(233,30,120,0.7)' }}>What I Did</p>
            <p className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>{wf.action}</p>
          </div>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest mb-1" style={{ color: 'rgba(233,30,120,0.7)' }}>Output</p>
            <p className="text-sm font-medium text-white">{wf.output}</p>
          </div>
          {wf.outputExpanded && (
            <div className="rounded-lg p-3 mt-2" style={{ background: 'rgba(233,30,120,0.06)', borderLeft: '3px solid rgba(233,30,120,0.3)' }}>
              <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>{wf.outputExpanded}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

function ImpactContent() {
  return (
    <div className="mt-5 space-y-3">
      {impactItems.map((item) => (
        <div key={item.id} className="p-4 rounded-lg" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
          <p className="text-sm font-bold text-white mb-3">{item.label}</p>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-lg" style={{ background: 'rgba(255,255,255,0.03)' }}>
              <p className="text-[10px] font-semibold uppercase tracking-widest mb-1" style={{ color: '#E91E78' }}>Before</p>
              <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>{item.before}</p>
            </div>
            <div className="p-3 rounded-lg" style={{ background: 'rgba(64,224,208,0.06)' }}>
              <p className="text-[10px] font-semibold uppercase tracking-widest mb-1" style={{ color: '#40E0D0' }}>After</p>
              <p className="text-xs leading-relaxed font-medium" style={{ color: 'rgba(255,255,255,0.7)' }}>{item.after}</p>
            </div>
          </div>
          {item.metric && (
            <div className="mt-3 py-2 text-center rounded-lg" style={{ background: 'rgba(233,30,120,0.08)' }}>
              <p className="text-xs font-semibold" style={{ color: '#E91E78' }}>{item.metric}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

function DemoContent() {
  return (
    <div className="mt-5">
      <div
        className="rounded-2xl flex items-center justify-center"
        style={{
          border: '2px dashed rgba(64,224,208,0.2)',
          minHeight: 300,
          color: 'rgba(255,255,255,0.2)',
          fontSize: 14,
        }}
      >
        Embedded demo placeholder — add your content here
      </div>
    </div>
  )
}

function PersonalContent() {
  return (
    <div className="mt-5">
      <p className="text-xs leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.45)' }}>
        {personalIntroCopy}
      </p>
      <div className="space-y-3">
        {personalItems.map((item) => (
          <div key={item.id} className="p-4 rounded-lg space-y-3" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest mb-1" style={{ color: 'rgba(255,107,157,0.7)' }}>Situation</p>
              <p className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>{item.situation}</p>
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest mb-1" style={{ color: 'rgba(255,107,157,0.7)' }}>What I Did</p>
              <p className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>{item.action}</p>
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest mb-1" style={{ color: 'rgba(255,107,157,0.7)' }}>Output</p>
              <p className="text-sm font-medium text-white">{item.output}</p>
            </div>
            {item.outputExpanded && (
              <div className="rounded-lg p-3 mt-2" style={{ background: 'rgba(255,107,157,0.06)', borderLeft: '3px solid rgba(255,107,157,0.3)' }}>
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>{item.outputExpanded}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

const SECTION_CONTENT: Record<string, () => React.JSX.Element> = {
  tools: ToolsContent,
  workflows: WorkflowsContent,
  impact: ImpactContent,
  demo: DemoContent,
  personal: PersonalContent,
}

export function TileExpanded({ tile, onClose }: TileExpandedProps) {
  const ContentComponent = tile ? SECTION_CONTENT[tile.id] : null

  return (
    <AnimatePresence>
      {tile && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-10"
          style={{ background: 'rgba(10,10,20,0.85)', backdropFilter: 'blur(8px)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
        >
          <motion.div
            className="relative w-full max-w-[800px] max-h-[80vh] overflow-y-auto rounded-2xl p-9"
            style={{
              background: 'linear-gradient(135deg, #1e1e36, #2a1f48)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)' }}
              aria-label="Close expanded view"
            >
              <X size={16} />
            </button>

            <p
              className="text-[11px] font-semibold uppercase tracking-[2px]"
              style={{ color: tile.accentColor }}
            >
              {tile.label}
            </p>
            <h2 className="text-3xl font-black text-white mt-2">{tile.title}</h2>
            <p className="text-sm mt-3" style={{ color: 'rgba(255,255,255,0.55)' }}>
              {tile.description}
            </p>

            <StatsRow stats={tile.stats} accentColor={tile.accentColor} />

            {ContentComponent && <ContentComponent />}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
