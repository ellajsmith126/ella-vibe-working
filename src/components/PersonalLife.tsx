interface PersonalCard {
  cardClass: string;
  iconBg: string;
  emoji: string;
  title: string;
  bullets: string[];
  outcome: string;
}

const cards: PersonalCard[] = [
  {
    cardClass: 'pc1',
    iconBg: 'rgba(236,72,153,0.15)',
    emoji: '\uD83C\uDF19',
    title: 'Evening closure ritual',
    bullets: [
      'Difficulty switching off after work',
      'AI coaching reframed it as a closure problem, not a discipline one',
      'Built a daily ritual: review, capture, close',
    ],
    outcome: '→ Evenings noticeably better',
  },
  {
    cardClass: 'pc2',
    iconBg: 'rgba(14,165,233,0.15)',
    emoji: '\uD83E\uDDB5',
    title: 'Knee rehab programme',
    bullets: [
      "Sore knee from running — physio wasn't helping",
      'Loaded symptoms, history & goals into AI',
      'Built a personalised strength programme where physio had failed',
    ],
    outcome: '→ Back running with a programme that actually worked',
  },
  {
    cardClass: 'pc3',
    iconBg: 'rgba(16,185,129,0.15)',
    emoji: '\uD83E\uDDE0',
    title: 'Personal decisions',
    bullets: [
      'Decision fatigue from daily personal admin',
      'Same process as work: load context, talk it through',
      'Meal planning, travel, big purchases — all faster',
    ],
    outcome: '→ Less mental overhead daily',
  },
];

export function PersonalLife() {
  return (
    <section className="section" id="life">
      <div className="eyebrow">Beyond Work</div>
      <h2 className="sec-title">Personal life</h2>
      <p className="sec-sub">
        The same habits I use at work are already part of how I live outside it
        too.
      </p>

      <div className="personal-grid">
        {cards.map((card, i) => (
          <div className={`p-card ${card.cardClass}`} key={i}>
            <div className="p-icon" style={{ background: card.iconBg }}>
              {card.emoji}
            </div>
            <div className="p-title">{card.title}</div>
            <ul className="p-bullets">
              {card.bullets.map((b, bi) => (
                <li key={bi}>{b}</li>
              ))}
            </ul>
            <div className="p-outcome">{card.outcome}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
