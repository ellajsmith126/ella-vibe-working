import { useState } from 'react';

interface TileData {
  abbr: string;
  name: string;
  bullets: string[];
  outcome: string;
}

interface CategoryData {
  label: string;
  catClass: string;
  tileClass: string;
  tiles: TileData[];
}

const categories: CategoryData[] = [
  {
    label: 'Thinking',
    catClass: 'cat-t',
    tileClass: 'tile-t',
    tiles: [
      { abbr: 'CP', name: 'Claude Projects', bullets: ['Context + style guide loaded', 'Remembers role & preferences', 'Replicated across 4 projects'], outcome: '→ 3× more relevant output' },
      { abbr: 'AC', name: 'AI Coaching', bullets: ['Surfaces habits & patterns', 'Structured self-reflection', 'Flags self-doubt as a pattern'], outcome: '→ Bottlenecks spotted & fixed' },
      { abbr: 'SF', name: 'Solving Framework', bullets: ['Structured problem approach', 'Applied from day one at JLS', 'Removes ad-hoc decisions'], outcome: '→ Systematic from the start' },
      { abbr: 'SC', name: 'Specialist Chains', bullets: ['Breaks complex areas into components', 'Goes deep on each layer', 'Used for social media & strategy'], outcome: '→ Expert depth, no course needed' },
      { abbr: 'DR', name: 'Deep Research', bullets: ['Expert-level knowledge fast', 'No more reading bottleneck', 'Hours not months to learn'], outcome: '→ Knowledge on demand' },
    ],
  },
  {
    label: 'Writing & Docs',
    catClass: 'cat-w',
    tileClass: 'tile-w',
    tiles: [
      { abbr: 'AD', name: 'AI-Written Docs', bullets: ['All docs routed through AI', 'Style guide pre-loaded', 'Briefs, reports, comms, plans'], outcome: '→ 20 mins not 90' },
      { abbr: 'DI', name: 'Dictation', bullets: ['Speak instead of type', 'Faster for emails & long comms', 'More natural, less friction'], outcome: '→ Faster, more natural input' },
      { abbr: 'SP', name: 'Super Prompts', bullets: ['Structured for deep analysis', 'Expert frameworks on demand', 'Consistent output every time'], outcome: '→ Expert output, first draft' },
    ],
  },
  {
    label: 'Building',
    catClass: 'cat-b',
    tileClass: 'tile-b',
    tiles: [
      { abbr: 'CC', name: 'Claude Code', bullets: ['Landing pages & web apps', 'Built this portfolio solo', 'PRDs → working product'], outcome: '→ Non-developer who builds' },
      { abbr: 'GA', name: 'Google AI Studio', bullets: ['Prototype & test prompts fast', 'Experiment with models', 'Low-friction testing environment'], outcome: '→ Fast experimentation' },
    ],
  },
];

function Tile({ tile, tileClass, open, onToggle }: { tile: TileData; tileClass: string; open: boolean; onToggle: () => void }) {
  return (
    <div
      className={`tile ${tileClass}${open ? ' open' : ''}`}
      onClick={onToggle}
    >
      <div className="tile-header">
        <div className="tile-icon">{tile.abbr}</div>
        <div className="tile-name">{tile.name}</div>
        <div className="tile-chev">&#9662;</div>
      </div>
      <div className="tile-body">
        <ul>
          {tile.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
        <div className="tile-outcome">{tile.outcome}</div>
      </div>
    </div>
  );
}

export function Toolkit() {
  const [openTile, setOpenTile] = useState<string | null>(null);

  return (
    <section className="section" id="stack">
      <div className="eyebrow">Tools & Stack</div>
      <h2 className="sec-title">My AI Toolkit</h2>
      <p className="sec-sub">
        10 tools across thinking, writing, building &amp; organising — click any
        to expand
      </p>

      {categories.map((cat, ci) => (
        <div
          className="cat-row"
          key={ci}
          style={ci === categories.length - 1 ? { marginBottom: 0 } : undefined}
        >
          <div className={`cat-label ${cat.catClass}`}>{cat.label}</div>
          <div className="tiles-row">
            {cat.tiles.map((tile, ti) => {
              const key = `${ci}-${ti}`;
              return (
                <Tile
                  key={ti}
                  tile={tile}
                  tileClass={cat.tileClass}
                  open={openTile === key}
                  onToggle={() => setOpenTile(openTile === key ? null : key)}
                />
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
}
