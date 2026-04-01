interface WorkflowData {
  cardClass: string;
  numClass: string;
  outputClass: string;
  num: number;
  title: string;
  wip?: boolean;
  bullets: string[];
  output: string;
}

const workflows: WorkflowData[] = [
  {
    cardClass: 'wfc1', numClass: 'wn1', outputClass: 'wo1', num: 1,
    title: 'Claude Projects with personal style guide',
    bullets: [
      'AI results were generic — needed constant re-explaining',
      'Loaded Claude Projects with style guide, role context, project info',
      'Everything comes back in my voice, not generic AI output',
      'Replicated across 4 active projects',
    ],
    output: '→ Single biggest improvement in AI usefulness',
  },
  {
    cardClass: 'wfc2', numClass: 'wn2', outputClass: 'wo2', num: 2,
    title: 'All documentation routed through AI',
    bullets: [
      'Writing docs manually was slow and inconsistent',
      'Everything now goes through AI with style guide pre-loaded',
      'Covers briefs, reports, internal comms, planning docs',
      'Consistent voice across every piece of output',
    ],
    output: '→ Docs take 20 mins not 90',
  },
  {
    cardClass: 'wfc3', numClass: 'wn3', outputClass: 'wo3', num: 3,
    title: 'Specialist Chains for deep learning',
    bullets: [
      'Complex areas are hard to learn end-to-end from a single prompt',
      'Specialist Chains break topics into components and go deep on each',
      'Systematic understanding built layer by layer',
      'Used across social media, marketing strategy, and AI tooling',
    ],
    output: '→ Expert-level understanding without a course or a book',
  },
  {
    cardClass: 'wfc4', numClass: 'wn4', outputClass: 'wo4', num: 4,
    title: 'PRDs to build software',
    bullets: [
      'Had ideas for tools but no developer background',
      'Wrote Product Requirement Docs with AI, then used Claude Code to build',
      'Turned concepts into working software — including this portfolio',
      'Closed the gap between idea and real working product',
    ],
    output: '→ Non-developer building real software',
  },
  {
    cardClass: 'wfc5', numClass: 'wn5', outputClass: 'wo5', num: 5,
    title: 'Social media strategy framework',
    wip: true,
    bullets: [
      'Using Solving framework + Super Prompts to work through social media as an area',
      'Breaking down each component systematically rather than ad-hoc',
      'Specialist Chains planned to go deeper into each area',
      'Every session builds on the last',
    ],
    output: '→ Ongoing — structured from day one, not reactive',
  },
];

export function Systems() {
  return (
    <section className="section" id="systems">
      <div className="eyebrow">Workflows &amp; Outputs</div>
      <h2 className="sec-title">Systems I built</h2>
      <p className="sec-sub">Real processes running in my work today</p>

      <div className="wf-list">
        {workflows.map((wf) => (
          <div className={`wf-card ${wf.cardClass}`} key={wf.num}>
            <div className="wf-top">
              <div className={`wf-num ${wf.numClass}`}>{wf.num}</div>
              <div>
                <div className="wf-title">
                  {wf.title}
                  {wf.wip && <span className="wip-tag">In progress</span>}
                </div>
                <ul className="wf-bullets">
                  {wf.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={`wf-output ${wf.outputClass}`}>{wf.output}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
