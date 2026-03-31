export interface Tool {
  name: string
  category: 'thinking' | 'writing' | 'organising' | 'building'
  iconUrl: string | null
  monogramFallback: string
  brandColor: string
  role: string
}

export interface Workflow {
  id: string
  situation: string
  action: string
  output: string
  outputType: 'text' | 'image' | 'both'
  outputExpanded: string
}

export interface ImpactItem {
  id: string
  label: string
  before: string
  after: string
  metric: string | null
}

export interface PersonalItem {
  id: string
  situation: string
  action: string
  output: string
  outputType: 'text' | 'image' | 'both'
  outputExpanded: string
}

export interface SectionStat {
  label: string
  value: string
}

export interface TileConfig {
  id: string
  label: string
  title: string
  description: string
  accentColor: string
  colSpan: 1 | 2
  stats: SectionStat[]
}

export const tools: Tool[] = [
  {
    name: 'Claude Projects',
    category: 'thinking',
    iconUrl: 'https://cdn.simpleicons.org/anthropic/E91E78',
    monogramFallback: 'CP',
    brandColor: '#E91E78',
    role: 'Context-loaded AI projects with personal style guide for high-quality results',
  },
  {
    name: 'AI Coaching',
    category: 'thinking',
    iconUrl: null,
    monogramFallback: 'AC',
    brandColor: '#40E0D0',
    role: 'Surfacing habits, patterns, and bottlenecks for professional and personal growth',
  },
  {
    name: 'AI-Written Docs',
    category: 'writing',
    iconUrl: null,
    monogramFallback: 'AD',
    brandColor: '#FF6B9D',
    role: 'All documentation routed through AI with style guide and context loaded',
  },
  {
    name: 'Dictation',
    category: 'writing',
    iconUrl: null,
    monogramFallback: 'DI',
    brandColor: '#E91E78',
    role: 'Speaking to AI instead of typing — faster and more natural for emails and conversations',
  },
  {
    name: 'Claude Code',
    category: 'building',
    iconUrl: 'https://cdn.simpleicons.org/anthropic/E91E78',
    monogramFallback: 'CC',
    brandColor: '#E91E78',
    role: 'Building landing pages, web apps, and interactive tools',
  },
  {
    name: 'Google AI Studio',
    category: 'building',
    iconUrl: 'https://cdn.simpleicons.org/google/40E0D0',
    monogramFallback: 'GA',
    brandColor: '#40E0D0',
    role: 'Prototyping, experimenting with models, and testing prompts at speed',
  },
  {
    name: 'Super Prompts',
    category: 'building',
    iconUrl: null,
    monogramFallback: 'SP',
    brandColor: '#FF6B9D',
    role: 'Structured prompts for frameworks, deep analysis, and expert playbooks',
  },
  {
    name: 'Specialist Chains',
    category: 'building',
    iconUrl: null,
    monogramFallback: 'SC',
    brandColor: '#E91E78',
    role: 'Breaking down complex areas for deep, systematic understanding',
  },
  {
    name: 'Deep Research Tools',
    category: 'organising',
    iconUrl: null,
    monogramFallback: 'DR',
    brandColor: '#40E0D0',
    role: 'Expert-level knowledge acquisition faster than manual research',
  },
  {
    name: 'Solving Framework',
    category: 'organising',
    iconUrl: null,
    monogramFallback: 'SF',
    brandColor: '#FF6B9D',
    role: 'Structured approach to social media marketing challenges from day one',
  },
]

export const workflows: Workflow[] = [
  {
    id: 'social-strategy',
    situation: 'Starting a new role in social media marketing with no established framework.',
    action: 'Used the "solving" framework with Super Prompts to create a structured approach to each area of social media marketing. Planning to use Specialist Chains to break down each area for deep understanding.',
    output: 'Complete social media strategy framework built from day one.',
    outputType: 'text',
    outputExpanded: 'Created a comprehensive framework covering all areas of social media marketing using the solving approach. The timing was deliberate — starting the role with this structured mindset means every decision builds on a systematic foundation rather than ad-hoc reactions. Specialist Chains are planned to go deeper into each area.',
  },
  {
    id: 'context-loaded-projects',
    situation: 'AI results were generic and required constant re-explanation of context.',
    action: 'Set up Claude Projects loaded with personal style guide, role context, and project-specific information.',
    output: 'Single biggest improvement in AI usefulness — results now match my voice and context.',
    outputType: 'text',
    outputExpanded: 'Having a personal style guide and a whole project loaded with context about me has been one of the single biggest differences in how useful AI is. Instead of generic responses, everything comes back tailored to my specific situation, role, and communication style. This approach has been replicated across multiple projects.',
  },
  {
    id: 'ai-first-docs',
    situation: 'Writing documentation manually was time-consuming and inconsistent.',
    action: 'Routed all documentation through AI with style guide and context pre-loaded.',
    output: 'All docs now written faster and in a consistent voice.',
    outputType: 'text',
    outputExpanded: 'Everything goes through AI now. With the style guide and context loaded, documents come back in my voice — not generic AI output. This covers briefs, reports, internal comms, and planning documents. The consistency improvement is noticeable across all output.',
  },
]

export const impactItems: ImpactItem[] = [
  {
    id: 'ai-capability',
    label: 'AI Capability Understanding',
    before: 'Limited understanding of what AI could actually do — mostly used for basic text generation.',
    after: 'Can build landing pages, web apps, Super Prompts, and Specialist Chains. Understands how to get the best results, not just what AI can produce.',
    metric: 'Confidence improved massively in weeks',
  },
  {
    id: 'knowledge-acquisition',
    label: 'Knowledge Acquisition Speed',
    before: 'Months of reading and experimenting to learn new areas. Knowledge bottleneck on every new topic.',
    after: 'Deep research tools provide expert-level knowledge fast. No more knowledge bottleneck.',
    metric: 'Removed the knowledge bottleneck entirely',
  },
  {
    id: 'self-awareness',
    label: 'Self-Awareness & Improvement',
    before: 'Unaware of specific habits, patterns, and bottlenecks affecting work quality.',
    after: 'Coaching and self-reflection docs surface actionable improvements. Self-doubt flagged as a pattern and addressed through structured output tracking.',
    metric: 'Can see improvement, not just hope for it',
  },
  {
    id: 'systems-thinking',
    label: 'Compounding Systems',
    before: 'Starting from scratch each time. No connection between projects or learnings.',
    after: 'Every doc, playbook, and prompt makes the next one better. The system compounds — building on everything already done.',
    metric: 'Every output improves the next',
  },
]

export const personalItems: PersonalItem[] = [
  {
    id: 'running',
    situation: 'Wanted a running programme tailored to actual fitness level and goals, not a generic plan from the internet.',
    action: 'Used AI to plan a personalised running programme — same principle as work: built around me specifically.',
    output: 'Custom programme that fits my actual starting point and goals.',
    outputType: 'text',
    outputExpanded: 'Same approach as the work tools — loaded context about my fitness level, goals, and constraints, then got a programme that was genuinely personalised. Not a one-size-fits-all plan off the internet.',
  },
  {
    id: 'daily-routine',
    situation: 'Difficulty switching off after work. Evenings felt unstructured and restless.',
    action: 'AI coaching helped build a daily structure (walk before work, focused stints, deep-thinking afternoons) and reframed the issue as a closure problem rather than a discipline problem.',
    output: 'Daily closing ritual that made evenings noticeably better.',
    outputType: 'text',
    outputExpanded: "The coaching reframed my difficulty switching off as a closure problem — I wasn't wrapping up the day properly, so my mind kept working. The daily closing ritual is simple but effective: review what got done, capture anything still open, and explicitly close the day. Evenings are noticeably better since implementing this.",
  },
  {
    id: 'decisions',
    situation: 'Decision fatigue from meal planning, travel logistics, personal admin, and big purchases.',
    action: "Applied the same Vibe Working approach to personal decisions — load context, talk it through, get to a better answer faster.",
    output: 'Faster, better-informed decisions with less mental overhead.',
    outputType: 'text',
    outputExpanded: 'Used AI to think through personal decisions and research big purchases. Meal planning, travel logistics, personal admin — all follow the same process. Load the context, talk it through, arrive at a better answer faster. Saves a surprising amount of decision fatigue.',
  },
]

export const personalIntroCopy =
  "This is where I took initiative and expanded Vibe Working beyond work — nobody asked me to do this, it just made sense once I saw how well it worked professionally."

export const CATEGORY_LABELS: Record<Tool['category'], string> = {
  thinking: 'Thinking',
  writing: 'Writing',
  organising: 'Organising',
  building: 'Building & Automating',
}

export const tileConfigs: TileConfig[] = [
  {
    id: 'tools',
    label: 'Tools & Stack',
    title: 'My AI Toolkit',
    description: '10 tools across thinking, writing, building & organising',
    accentColor: '#40E0D0',
    colSpan: 2,
    stats: [
      { label: 'Tools mastered', value: '10' },
      { label: 'Categories', value: '4' },
      { label: 'Usage frequency', value: 'Daily' },
    ],
  },
  {
    id: 'workflows',
    label: 'Workflows & Outputs',
    title: 'Systems I Built',
    description: 'Real outputs from AI-powered processes',
    accentColor: '#E91E78',
    colSpan: 1,
    stats: [
      { label: 'Workflows', value: '3' },
      { label: 'Outputs attached', value: 'Real' },
    ],
  },
  {
    id: 'impact',
    label: 'Impact',
    title: 'Before → After',
    description: 'How AI transformed key areas of my work',
    accentColor: '#FF6B9D',
    colSpan: 1,
    stats: [
      { label: 'Faster output', value: '4×' },
      { label: 'Confidence', value: '↑89%' },
      { label: 'Systems built', value: '10+' },
    ],
  },
  {
    id: 'demo',
    label: 'Live Demo',
    title: 'See It In Action',
    description: 'An embedded example of something built with AI',
    accentColor: '#40E0D0',
    colSpan: 2,
    stats: [],
  },
  {
    id: 'personal',
    label: 'Beyond Work',
    title: 'Personal Life',
    description: 'AI in running, routines & life decisions',
    accentColor: '#FF6B9D',
    colSpan: 1,
    stats: [
      { label: 'Areas', value: '3' },
      { label: 'Approach', value: 'Same system' },
    ],
  },
]
