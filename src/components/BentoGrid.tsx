import { useState } from 'react'
import { BentoTile } from './BentoTile'
import { TileExpanded } from './TileExpanded'
import { tileConfigs } from '../data/content'
import type { TileConfig } from '../data/content'

export function BentoGrid() {
  const [expandedTile, setExpandedTile] = useState<TileConfig | null>(null)

  return (
    <>
      <div className="max-w-[1100px] mx-auto px-6 py-10">
        <div
          className="grid gap-4"
          style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}
        >
          {tileConfigs.map((tile, i) => (
            <BentoTile
              key={tile.id}
              tile={tile}
              index={i}
              onClick={() => setExpandedTile(tile)}
            />
          ))}
        </div>
      </div>

      <TileExpanded tile={expandedTile} onClose={() => setExpandedTile(null)} />
    </>
  )
}
