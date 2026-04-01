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
    before: ['Basic Text Gen Only', 'Constant Re-Explaining Context', 'Generic AI Responses'],
    after: ['Builds Apps & Pages', 'Context Loaded Once, Used Always', 'Output In My Voice'],
    footer: 'From Zero To Builder',
  },
  {
    accentColor: '#10b981',
    title: 'Learning & Knowledge Speed',
    before: ['Months To Learn New Areas', 'Knowledge Bottleneck Everywhere', 'Starting From Scratch Each Time'],
    after: ['Expert Knowledge In Hours', 'Every Output Builds On The Last', 'Compounding System'],
    footer: 'Bottleneck Gone Entirely',
  },
  {
    accentColor: '#f59e0b',
    title: 'Self-Awareness & Growth',
    before: ['Blind To Own Habits & Patterns', 'Self-Doubt With No Structure', 'No Way To Track Improvement'],
    after: ['Coaching Surfaces Bottlenecks', 'Patterns Identified & Addressed', 'Can See Improvement, Not Just Hope'],
    footer: 'From Guessing To Knowing',
  },
  {
    accentColor: '#ec4899',
    title: 'Building Tools & Software',
    before: ["Couldn't Build Tools Or Software", 'Dependent On Developers', 'Ideas Stuck As Ideas'],
    after: ['Landing Pages, Web Apps, Tools', 'Built This Portfolio Solo', 'Ideas Become Real Software'],
    footer: 'Non-Developer Who Now Builds Software',
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
      <p className="sec-sub">What Actually Changed</p>

      <div className="stats-strip">
        <div className="big-stat bs1">
          <div className="big-num">
            4<span style={{ color: '#0ea5e9' }}>&times;</span>
          </div>
          <div className="big-label">Faster Output</div>
        </div>
        <div className="big-stat bs2">
          <div className="big-num">
            <span style={{ color: '#ec4899' }}>&uarr;</span>89%
          </div>
          <div className="big-label">Confidence (Self-Assessed)</div>
        </div>
        <div className="big-stat bs3">
          <div className="big-num">
            10<span style={{ color: '#10b981' }}>+</span>
          </div>
          <div className="big-label">Systems Built</div>
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
