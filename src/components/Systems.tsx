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
    title: 'Claude Projects With Personal Style Guide',
    bullets: [
      'AI Results Were Generic — Needed Constant Re-Explaining',
      'Loaded Claude Projects With Style Guide, Role Context, Project Info',
      'Everything Comes Back In My Voice, Not Generic AI Output',
      'Replicated Across 4 Active Projects',
    ],
    output: '→ Single Biggest Improvement In AI Usefulness',
  },
  {
    cardClass: 'wfc2', numClass: 'wn2', outputClass: 'wo2', num: 2,
    title: 'All Documentation Routed Through AI',
    bullets: [
      'Writing Docs Manually Was Slow And Inconsistent',
      'Everything Now Goes Through AI With Style Guide Pre-Loaded',
      'Covers Briefs, Reports, Internal Comms, Planning Docs',
      'Consistent Voice Across Every Piece Of Output',
    ],
    output: '→ Docs Take 20 Mins Not 90',
  },
  {
    cardClass: 'wfc3', numClass: 'wn3', outputClass: 'wo3', num: 3,
    title: 'Specialist Chains For Deep Learning',
    bullets: [
      'Complex Areas Are Hard To Learn End-To-End From A Single Prompt',
      'Specialist Chains Break Topics Into Components And Go Deep On Each',
      'Systematic Understanding Built Layer By Layer',
      'Used Across Social Media, Marketing Strategy, And AI Tooling',
    ],
    output: '→ Expert-Level Understanding Without A Course Or A Book',
  },
  {
    cardClass: 'wfc4', numClass: 'wn4', outputClass: 'wo4', num: 4,
    title: 'PRDs To Build Software',
    bullets: [
      'Had Ideas For Tools But No Developer Background',
      'Wrote Product Requirement Docs With AI, Then Used Claude Code To Build',
      'Turned Concepts Into Working Software — Including This Portfolio',
      'Closed The Gap Between Idea And Real Working Product',
    ],
    output: '→ Non-Developer Building Real Software',
  },
  {
    cardClass: 'wfc5', numClass: 'wn5', outputClass: 'wo5', num: 5,
    title: 'Social Media Strategy Framework',
    wip: true,
    bullets: [
      'Using Solving Framework + Super Prompts To Work Through Social Media As An Area',
      'Breaking Down Each Component Systematically Rather Than Ad-Hoc',
      'Specialist Chains Planned To Go Deeper Into Each Area',
      'Every Session Builds On The Last',
    ],
    output: '→ Ongoing — Structured From Day One, Not Reactive',
  },
];

export function Systems() {
  return (
    <section className="section" id="systems">
      <div className="eyebrow">Workflows & Outputs</div>
      <h2 className="sec-title">Systems I Built</h2>
      <p className="sec-sub">Real Processes Running In My Work Today</p>

      <div className="wf-list">
        {workflows.map((wf) => (
          <div className={`wf-card ${wf.cardClass}`} key={wf.num}>
            <div className="wf-top">
              <div className={`wf-num ${wf.numClass}`}>{wf.num}</div>
              <div>
                <div className="wf-title">
                  {wf.title}
                  {wf.wip && <span className="wip-tag">In Progress</span>}
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
