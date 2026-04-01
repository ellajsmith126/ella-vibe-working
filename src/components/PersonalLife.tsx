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
    title: 'Evening Closure Ritual',
    bullets: [
      'Difficulty Switching Off After Work',
      'AI Coaching Reframed It As A Closure Problem, Not A Discipline One',
      'Built A Daily Ritual: Review, Capture, Close',
    ],
    outcome: '→ Evenings Noticeably Better',
  },
  {
    cardClass: 'pc2',
    iconBg: 'rgba(14,165,233,0.15)',
    emoji: '\uD83E\uDDB5',
    title: 'Knee Rehab Programme',
    bullets: [
      "Sore Knee From Running — Physio Wasn't Helping",
      'Loaded Symptoms, History & Goals Into AI',
      'Built A Personalised Strength Programme Where Physio Had Failed',
    ],
    outcome: '→ Back Running With A Programme That Actually Worked',
  },
  {
    cardClass: 'pc3',
    iconBg: 'rgba(16,185,129,0.15)',
    emoji: '\uD83E\uDDE0',
    title: 'Personal Decisions',
    bullets: [
      'Decision Fatigue From Daily Personal Admin',
      'Same Process As Work: Load Context, Talk It Through',
      'Meal Planning, Travel, Big Purchases — All Faster',
    ],
    outcome: '→ Less Mental Overhead Daily',
  },
];

export function PersonalLife() {
  return (
    <section className="section" id="life">
      <div className="eyebrow">Beyond Work</div>
      <h2 className="sec-title">Personal Life</h2>
      <p className="sec-sub">
        The Same Habits I Use At Work Are Already Part Of How I Live Outside It
        Too.
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
