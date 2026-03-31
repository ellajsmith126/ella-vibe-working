import { motion } from 'framer-motion'
import type { TileConfig } from '../data/content'
import { tools } from '../data/content'

interface BentoTileProps {
  tile: TileConfig
  index: number
  onClick: () => void
}

function ToolIcons() {
  const preview = tools.slice(0, 5)
  const remaining = tools.length - preview.length
  return (
    <div className="flex gap-2 mt-4 flex-wrap">
      {preview.map((tool) => (
        <motion.div
          key={tool.name}
          whileHover={{ scale: 1.15 }}
          className="w-[38px] h-[38px] rounded-[10px] flex items-center justify-center text-[11px] font-bold"
          style={{
            backgroundColor: `${tool.brandColor}20`,
            color: `${tool.brandColor}cc`,
          }}
        >
          {tool.monogramFallback}
        </motion.div>
      ))}
      {remaining > 0 && (
        <div
          className="w-[38px] h-[38px] rounded-[10px] flex items-center justify-center text-[11px] font-bold"
          style={{ backgroundColor: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.3)' }}
        >
          +{remaining}
        </div>
      )}
    </div>
  )
}

function ImpactPreview() {
  return (
    <div className="flex gap-4 mt-4">
      <div>
        <span className="text-[28px] font-black leading-none" style={{ color: '#E91E78' }}>4×</span>
        <span className="block text-[10px] mt-0.5" style={{ color: 'rgba(255,255,255,0.4)' }}>Faster output</span>
      </div>
      <div>
        <span className="text-[28px] font-black leading-none" style={{ color: '#40E0D0' }}>↑89%</span>
        <span className="block text-[10px] mt-0.5" style={{ color: 'rgba(255,255,255,0.4)' }}>Confidence</span>
      </div>
    </div>
  )
}

function PersonalTags() {
  return (
    <div className="flex gap-1.5 flex-wrap mt-3">
      {['Running', 'Routines', 'Decisions'].map((tag) => (
        <span
          key={tag}
          className="px-2.5 py-1 rounded-xl text-[10px]"
          style={{ background: 'rgba(255,107,157,0.1)', color: '#FF6B9D' }}
        >
          {tag}
        </span>
      ))}
    </div>
  )
}

function DemoPlaceholder() {
  return (
    <div
      className="mt-4 flex-1 rounded-xl flex items-center justify-center text-[13px]"
      style={{
        border: '2px dashed rgba(64,224,208,0.2)',
        color: 'rgba(255,255,255,0.25)',
        minHeight: 80,
      }}
    >
      ⟡ Embedded demo goes here
    </div>
  )
}

const TILE_EXTRAS: Record<string, () => React.JSX.Element> = {
  tools: ToolIcons,
  impact: ImpactPreview,
  personal: PersonalTags,
  demo: DemoPlaceholder,
}

export function BentoTile({ tile, index, onClick }: BentoTileProps) {
  const ExtraContent = TILE_EXTRAS[tile.id]

  return (
    <motion.div
      className="rounded-2xl p-6 relative overflow-hidden cursor-pointer flex flex-col justify-between"
      style={{
        gridColumn: tile.colSpan === 2 ? 'span 2' : 'span 1',
        background: `${tile.accentColor}0a`,
        border: `1px solid ${tile.accentColor}1f`,
        minHeight: tile.id === 'demo' ? 200 : 180,
      }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{
        y: -4,
        boxShadow: `0 12px 40px ${tile.accentColor}15`,
        borderColor: `${tile.accentColor}40`,
      }}
      onClick={onClick}
    >
      {/* Background blob decoration */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none rounded-full"
        style={{
          width: 120,
          height: 120,
          bottom: -30,
          right: -20,
          background: `radial-gradient(ellipse, ${tile.accentColor}18, transparent 70%)`,
          filter: 'blur(30px)',
          animation: 'tile-blob-pulse 8s ease-in-out infinite',
        }}
      />

      <div className="relative z-10">
        <p
          className="text-[10px] font-semibold uppercase tracking-[2px]"
          style={{ color: tile.accentColor }}
        >
          {tile.label}
        </p>
        <h3 className="text-xl font-extrabold text-white mt-1.5 leading-tight">{tile.title}</h3>
        <p className="text-[13px] mt-2 leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
          {tile.description}
        </p>
        {ExtraContent && <ExtraContent />}
      </div>

      <p
        className="relative z-10 text-[13px] mt-auto pt-3 transition-colors"
        style={{ color: 'rgba(255,255,255,0.3)' }}
      >
        Click to explore →
      </p>
    </motion.div>
  )
}
