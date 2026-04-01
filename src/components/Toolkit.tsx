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
      { abbr: 'CP', name: 'Claude Projects', bullets: ['Context + Style Guide Loaded', 'Remembers Role & Preferences', 'Replicated Across 4 Projects'], outcome: '→ 3× More Relevant Output' },
      { abbr: 'AC', name: 'AI Coaching', bullets: ['Surfaces Habits & Patterns', 'Structured Self-Reflection', 'Flags Self-Doubt As A Pattern'], outcome: '→ Bottlenecks Spotted & Fixed' },
      { abbr: 'SF', name: 'Solving Framework', bullets: ['Structured Problem Approach', 'Applied From Day One At JLS', 'Removes Ad-Hoc Decisions'], outcome: '→ Systematic From The Start' },
      { abbr: 'SC', name: 'Specialist Chains', bullets: ['Breaks Complex Areas Into Components', 'Goes Deep On Each Layer', 'Used For Social Media & Strategy'], outcome: '→ Expert Depth, No Course Needed' },
      { abbr: 'DR', name: 'Deep Research', bullets: ['Expert-Level Knowledge Fast', 'No More Reading Bottleneck', 'Hours Not Months To Learn'], outcome: '→ Knowledge On Demand' },
    ],
  },
  {
    label: 'Writing & Docs',
    catClass: 'cat-w',
    tileClass: 'tile-w',
    tiles: [
      { abbr: 'AD', name: 'AI-Written Docs', bullets: ['All Docs Routed Through AI', 'Style Guide Pre-Loaded', 'Briefs, Reports, Comms, Plans'], outcome: '→ 20 Mins Not 90' },
      { abbr: 'DI', name: 'Dictation', bullets: ['Speak Instead Of Type', 'Faster For Emails & Long Comms', 'More Natural, Less Friction'], outcome: '→ Faster, More Natural Input' },
      { abbr: 'SP', name: 'Super Prompts', bullets: ['Structured For Deep Analysis', 'Expert Frameworks On Demand', 'Consistent Output Every Time'], outcome: '→ Expert Output, First Draft' },
    ],
  },
  {
    label: 'Building',
    catClass: 'cat-b',
    tileClass: 'tile-b',
    tiles: [
      { abbr: 'CC', name: 'Claude Code', bullets: ['Landing Pages & Web Apps', 'Built This Portfolio Solo', 'PRDs → Working Product'], outcome: '→ Non-Developer Who Builds' },
      { abbr: 'GA', name: 'Google AI Studio', bullets: ['Prototype & Test Prompts Fast', 'Experiment With Models', 'Low-Friction Testing Environment'], outcome: '→ Fast Experimentation' },
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
        10 Tools Across Thinking, Writing, Building & Organising — Click Any
        To Expand
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
