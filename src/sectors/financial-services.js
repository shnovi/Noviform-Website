// Financial services sector page. Copy approved 18 Oct 2026 from the review doc and mockup.
// Figures relate to roles held before Noviform; the bank is described, not named.
export default {
  slug: 'financial-services',
  navLabel: 'Financial services',
  num: '04',
  seo: {
    title: 'AI and Automation for Banks and Lenders | Noviform',
    description: 'Senior-led AI and automation for UK banks, building societies and specialist lenders. Practical delivery designed around Consumer Duty, SM&CR, model risk and operational resilience.'
  },
  hero: {
    eyebrow: 'Financial services',
    h1: 'AI that your board, your regulator',
    h1Gold: 'and your customers can live with.',
    intro: 'Banks, building societies and specialist lenders are under pressure to use AI and automation to cut cost and speed up decisions, and most have pilots running with little measurable return to show for them. They also answer to Consumer Duty, the Senior Managers regime and operational resilience rules that were not written with AI in mind. Noviform helps you move quickly on the work that pays back, with accountability, evidence and controls designed in from the start.',
    primary: 'Book a 30-minute call',
    secondary: 'See how AI Assurance works',
    proof: 'Our founder led automation across savings, development and specialist finance at a UK specialist bank, redeploying the equivalent of seven roles to higher-value work and cutting decision times from seven days to one.'
  },
  mot: {
    title: 'The AI MOT · Financial services',
    areas: [
      { name: 'Operations', score: 3 },
      { name: 'Lending and servicing', score: 2 },
      { name: 'Finance', score: 4 },
      { name: 'Customer experience', score: 3 },
      { name: 'People and knowledge', score: 2 },
      { name: 'Data and systems', score: 1 }
    ],
    footer: 'Illustrative. Volumes, decision points, controls and accountability, scored across six areas.'
  },
  problem: {
    heading: 'There are no AI rules for financial services. That is exactly the problem.',
    paras: ['The UK regulators have chosen not to write AI-specific rules. Instead, the rules you already follow apply to AI:'],
    chips: ['Consumer Duty', 'SM&CR', 'Model risk', 'Operational resilience', 'Third-party risk'],
    paras2: [
      'That sounds simple until someone asks which Senior Manager is accountable for a model nobody built in-house, or how you evidence good customer outcomes from a tool that drafts its own answers.',
      'The result is two kinds of stuck. Some firms hold back because nobody can say yes with confidence. Others press ahead in pockets, and the risk function finds out later.'
    ],
    cards: [
      { title: 'Accountability is unclear', text: 'There is no prescribed Senior Manager for AI. Without a clear owner, decisions drift or stall, and the evidence trail is thin when it matters.' },
      { title: 'Model risk was written before generative AI', text: 'Existing frameworks assume models you build, validate and control. Large language models and supplier AI do not fit neatly, and most AI use case inventories do not yet include them.' },
      { title: 'Customer outcomes are the test', text: 'Under Consumer Duty, speed and efficiency only count if customers are treated fairly. Any automation that touches lending decisions, vulnerable customers or complaints needs to show it.' }
    ]
  },
  help: {
    heading: 'Move quickly on what pays back. Be ready to show your working.',
    intro: 'Every engagement uses the same five building blocks. For a bank or lender, they look like this.',
    modules: [
      { name: 'AI MOT for financial services', does: 'A short, structured check across operations, lending and servicing, finance, customer experience, people and knowledge, and data and systems. We look at volumes, decision points, controls and accountability, not just appetite.', get: 'A scored view of where automation and AI will pay back first, where the regulatory exposure sits, and a sequenced plan your executive and risk committee can approve.' },
      { name: 'AI 101 for operational teams', does: 'Practical training for the people who will work with automation and AI every day, using real lending, savings and servicing examples.', get: 'Teams who use AI tools safely with customer data, know when to escalate, and can spot the next good use case.' },
      { name: 'AI 102 for process owners and change teams', does: 'A deeper session for those who will own, design or test automations, including how to write a requirement that risk and compliance can sign off.', get: 'Well-defined use cases with owners, controls and success measures attached from the start.' },
      { name: 'AI for boards and Senior Managers', does: 'A focused session for board members, Senior Managers and committee chairs on opportunity, accountability and what good oversight of AI looks like under SM&CR.', get: 'Leaders who can challenge with confidence, agree who owns what, and evidence reasonable steps.' },
      { name: 'AI Assurance', does: 'An independent review of AI and automation in use or being procured, including supplier and embedded AI, mapped to Consumer Duty, model risk, resilience and third-party expectations.', get: 'A clear, evidenced view of what is controlled, what is exposed and what to fix first, written for your risk committee and ready for internal audit.' }
    ],
    under: 'Where it helps, we go further. We deliver the first automations alongside your teams, set up the governance to run AI as a managed portfolio, and stay involved until your people can run it themselves.',
    band: { title: 'Redeploy, not remove.', text: 'Our experience is that the strongest business cases free people from repetitive processing so they can spend time on customers, complex cases and growth. We design for that from day one, and we measure it.' }
  },
  controls: {
    heading: 'Regulation shapes the design. It does not arrive at the end.',
    intro: 'The rules you already follow apply to AI. We build them into every use case from the first workshop.',
    rows: [
      { k: 'Consumer Duty', v: 'Each use case is checked for its effect on customer outcomes, including vulnerable customers, fair value and clear communication. Evidence is captured as we go, not reconstructed later.' },
      { k: 'Senior Managers and Certification Regime', v: 'Every AI use case has a named accountable owner and a clear line to the relevant Senior Manager, so reasonable steps can be shown.' },
      { k: 'Model risk management', v: 'AI and generative AI tools are added to your model inventory, risk-tiered and given proportionate validation and monitoring, extending your existing framework rather than replacing it.' },
      { k: 'Operational resilience', v: 'We map AI and automation against your important business services and impact tolerances, so a failing bot or a supplier outage does not become a customer incident.' },
      { k: 'Outsourcing and third-party risk', v: 'Supplier and embedded AI is treated as third-party risk, with the right questions asked at procurement and recorded for oversight.' },
      { k: 'Data protection and financial crime', v: 'Customer data, AML and fraud controls are designed in, with a person reviewing any decision that affects a customer.' }
    ],
    boundary: 'We provide frameworks, templates and practical controls. We do not write your policies, provide legal or regulatory advice, or replace your compliance and risk functions. We do not carry out penetration testing; where security testing is needed we specify it and your chosen provider runs it. Any output that reaches a customer is signed off by a person at your firm.'
  },
  experience: {
    heading: 'Built inside regulated lenders, not just advised from outside.',
    intro: 'These are not Noviform clients. They are organisations where our founder led change, in roles held before Noviform, including as a Material Risk Taker under the SMF24 Chief Operations function at a UK specialist bank.',
    cards: [
      { who: 'Specialist lending · a UK specialist bank', title: 'Automation across specialist lending', text: 'Led automation across savings, development finance and specialist finance, including AML checks and originations. Capacity was redeployed to higher-value work rather than removed.', stats: [{ v: '~20%', l: 'more processing capacity' }, { v: '7 roles', l: 'redeployed, not removed' }] },
      { who: 'Operations · a UK specialist bank', title: 'Faster decisions', text: 'Cut decision latency by redesigning the flow of work and automating the steps that did not need judgement.', stats: [{ v: '7 days to 1', l: 'decision latency' }] },
      { who: 'Core platform · a UK specialist bank', title: 'Platform change without customer harm', text: 'Delivered a core platform migration under FCA and PRA oversight with no customer detriment.', stats: [{ v: '~80%', l: 'lower licence costs' }, { v: 'Zero', l: 'customer detriment' }] },
      { who: 'International', title: 'Banking delivery beyond the UK', text: 'Earlier delivery work for banks and superannuation funds in Australia and for a major Chinese bank, bringing a wide view of how different institutions run operations and technology change.' }
    ],
    footnote: 'Figures relate to roles held before Noviform was founded. Client names are withheld unless the client has agreed to be named.'
  },
  faq: [
    { q: 'Are there specific AI rules for UK financial services?', a: 'Not as such. The FCA and PRA have said existing rules apply to AI, including Consumer Duty, SM&CR, model risk, operational resilience and third-party risk. That makes AI governance a question of applying what you already have, consistently and with evidence. We help you do that.' },
    { q: 'We have several AI pilots running. How do we know which to scale?', a: 'Score them. The AI MOT looks at each use case for return, exposure and ownership, so you scale the ones with a measurable return and a named Senior Manager, and stop the ones that have neither.' },
    { q: 'Who should be accountable for AI under SM&CR?', a: 'There is no prescribed Senior Manager for AI, so firms need to decide and document it. Typically accountability follows the business service the AI supports, with a clear owner for each use case and oversight at committee level. We help you set that up so it is proportionate and defensible.' },
    { q: 'Does generative AI belong in our model inventory?', a: 'In most cases, yes. Model risk expectations predate generative AI, but the principle of knowing what you use, tiering it by risk and monitoring it still applies. We help you extend your existing framework rather than build a parallel one.' },
    { q: 'We use AI inside supplier products. Is that our risk?', a: 'Yes. AI embedded in the systems you buy still affects your customers and your resilience. We help you ask the right questions at procurement and keep a record your risk function can rely on.' },
    { q: 'Can automation work alongside Consumer Duty?', a: 'It can strengthen it. Faster, more consistent processing helps customers, provided the design checks for vulnerable customers, fair outcomes and clear communication. We build those checks into each use case and capture the evidence as we go.' },
    { q: 'Where does strategy fit in the AI MOT?', a: 'Across all six areas, rather than as a box of its own. The MOT finishes with a roadmap that ties your scores to what you do first, next and later.' },
    { q: 'What does an AI Assurance review give our board?', a: 'An independent, evidenced view of the AI and automation you use or plan to use, what is well controlled, what is exposed and what to fix first. It is written for a risk committee and internal audit, not just a technical team.' }
  ],
  cta: {
    heading: 'Move faster on AI and automation, with the evidence to back it up.',
    body: 'Start with a 30-minute conversation. We will talk through where you are, what your risk and compliance teams need, and whether an AI MOT or an AI Assurance review is the right first step. No obligation and no sales pitch.',
    primary: 'Book a 30-minute call',
    secondary: 'Send us a message'
  }
}
