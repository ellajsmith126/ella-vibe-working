import { useState } from 'react';

interface BeforeAfterData {
  accentColor: string;
  title: string;
  before: string[];
  after: string[];
  footer: string;
}

const cards: BeforeAfterData[] = [
  {
    accentColor: '#0ea5e9',
    title: 'AI Capability & Output Quality',
    before: ['Basic text gen only', 'Constant re-explaining context', 'Generic AI responses'],
    after: ['Builds apps & pages', 'Context loaded once, used always', 'Output in my voice'],
    footer: 'From zero to builder',
  },
  {
    accentColor: '#10b981',
    title: 'Learning & Knowledge Speed',
    before: ['Months to learn new areas', 'Knowledge bottleneck everywhere', 'Starting from scratch each time'],
    after: ['Expert knowledge in hours', 'Every output builds on the last', 'Compounding system'],
    footer: 'Bottleneck gone entirely',
  },
  {
    accentColor: '#f59e0b',
    title: 'Self-Awareness & Growth',
    before: ['Blind to own habits & patterns', 'Self-doubt with no structure', 'No way to track improvement'],
    after: ['Coaching surfaces bottlenecks', 'Patterns identified & addressed', 'Can see improvement, not just hope'],
    footer: 'From guessing to knowing',
  },
  {
    accentColor: '#ec4899',
    title: 'Building Tools & Software',
    before: ["Couldn't build tools or software", 'Dependent on developers', 'Ideas stuck as ideas'],
    after: ['Landing pages, web apps, tools', 'Built this portfolio solo', 'Ideas become real software'],
    footer: 'Non-developer who now builds software',
  },
];

function BeforeAfterCard({ card }: { card: BeforeAfterData }) {
  const [showAfter, setShowAfter] = useState(false);
  const items = showAfter ? card.after : card.before;

  return (
    <div className="ba-card">
      <div className="ba-area-label">
        <span className="ba-accent" style={{ background: card.accentColor }} />
        <span className="ba-area-title">{card.title}</span>
      </div>
      <div className="ba-toggle-row">
        <div
          className={`ba-switch${showAfter ? ' ba-switch-after' : ''}`}
          onClick={() => setShowAfter(!showAfter)}
        >
          <div className="ba-switch-slider" />
          <span className="ba-switch-label ba-switch-label-before">Before</span>
          <span className="ba-switch-label ba-switch-label-after">After</span>
        </div>
      </div>
      <div className="ba-content-wrap">
        <div
          className="ba-content"
          key={showAfter ? 'after' : 'before'}
        >
          <ul>
            {items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="ba-footer">{card.footer}</div>
    </div>
  );
}

export function Impact() {
  return (
    <section className="section" id="impact">
      <div className="eyebrow">Impact</div>
      <h2 className="sec-title">Before &rarr; After</h2>
      <p className="sec-sub">What actually changed</p>

      <div className="stats-strip">
        <div className="big-stat bs1">
          <div className="big-num">
            4<span style={{ color: '#0ea5e9' }}>&times;</span>
          </div>
          <div className="big-label">Faster output</div>
        </div>
        <div className="big-stat bs2">
          <div className="big-num">
            <span style={{ color: '#ec4899' }}>&uarr;</span>89%
          </div>
          <div className="big-label">Confidence (self-assessed)</div>
        </div>
        <div className="big-stat bs3">
          <div className="big-num">
            10<span style={{ color: '#10b981' }}>+</span>
          </div>
          <div className="big-label">Systems built</div>
        </div>
      </div>

      <div className="impact-row">
        <BeforeAfterCard card={cards[0]} />
        <BeforeAfterCard card={cards[1]} />
      </div>
      <div className="impact-row" style={{ marginBottom: 0 }}>
        <BeforeAfterCard card={cards[2]} />
        <BeforeAfterCard card={cards[3]} />
      </div>
    </section>
  );
}
