// Insurance sector page. Copy approved 18 Oct 2026 from the review doc and mockup.
export default {
  slug: 'insurance',
  navLabel: 'Insurance',
  num: '01',
  seo: {
    title: 'AI Governance and Automation for UK Insurers | Noviform',
    description: 'Make AI defensible under Consumer Duty and SM&CR. AI assurance, training and automation for insurers, MGAs and the London Market.'
  },
  hero: {
    eyebrow: 'Insurance and the London Market',
    h1: 'AI your board can defend,',
    h1Gold: 'and automation that pays its way.',
    intro: 'Your teams are already using AI, your vendors are switching it on inside the systems you rely on, and most of it has nothing measurable to show yet. The FCA has said it will not write new AI rules. Instead, Consumer Duty and SM&CR already apply. Noviform helps insurers, MGAs and London Market firms decide where AI and automation pay, put the controls in first, and evidence every decision to the people who will ask.',
    primary: 'Book a Call',
    secondary: 'See how the AI MOT works for insurers',
    proof: 'Led by a former insurance transformation director who has replaced a personal lines claims platform and run a large change portfolio.'
  },
  mot: {
    title: 'The AI MOT · Insurance',
    areas: [
      { name: 'Claims', score: 3 },
      { name: 'Underwriting support and policy admin', score: 2 },
      { name: 'Customer service and distribution', score: 3 },
      { name: 'Finance and operations', score: 4 },
      { name: 'Technology, data and change', score: 2 },
      { name: 'Risk, compliance and governance', score: 1 }
    ],
    footer: "Illustrative. The 12-point check across six areas, named in your operation's language. Scope it to one line of business if you prefer."
  },
  problem: {
    heading: 'AI and automation in insurance are a governance problem before they are a technology problem.',
    paras: [
      'Adoption is running ahead of control. Claims handlers are summarising files in public chat tools. Brokers expect faster answers. Your policy administration, claims and CRM vendors are adding AI features you did not ask for and cannot easily switch off.',
      "The regulator's position is clear. No new rules are coming, because the existing ones already apply."
    ],
    cards: [
      { title: 'Consumer Duty', text: 'Show good outcomes, including for customers in vulnerable circumstances. AI used in claims, pricing support or customer communications has to be monitored, explainable and auditable.' },
      { title: 'SM&CR', text: 'A named senior manager is on the hook for how a model behaves, whether you built it or bought it.' },
      { title: 'Record-keeping and data protection', text: "These apply to every prompt that contains a policyholder's details." },
      { title: "In the Lloyd's market", text: "The LMA's governance blueprint asks for clear ownership of each AI system, documented decisions, meaningful human review and proper due diligence on third-party AI vendors." }
    ],
    closing: 'Most firms are not short of AI ideas. They are short of a defensible way to say yes to the right ones, and no to the rest.',
    quote: { text: 'Minutes are margin in insurance. But a saving you cannot defend to the FCA is not a saving.', by: 'Ahmed Sheikh, Founder' }
  },
  help: {
    heading: 'Built for how an insurer actually works.',
    intro: 'Every module is the same Noviform method, run in your language, on your processes and against your obligations. Take them in any order.',
    modules: [
      { name: 'The AI MOT for insurance', chip: '2 weeks, fixed scope', does: 'Tests your operation against our 12-point framework across six areas: claims; underwriting support and policy administration; customer service and distribution; finance and operations; technology, data and change; risk, compliance and governance.', get: 'A scored report, a costed shortlist of fixes and a clear go or no-go on each. We only recommend what pays for itself within twelve months.' },
      { name: 'AI Assurance', chip: '3 to 6 week set-up, then ongoing', does: 'Answers one question for every AI tool, including the features your vendors switch on: is it safe to use here? Tools are tested against seven areas, from the data they touch to the regulation that applies.', get: 'A light route for low-risk tools, deep review for the few that need it, and a register and playbook your own team runs. Evidence ready for audit, the board and the regulator.' },
      { name: 'AI for Leaders and the Board', chip: 'Half a day', does: 'The decisions only leadership can take: risk appetite, accountability under SM&CR, licensing and the route for approving new AI ideas.', get: 'A board-readable risk matrix and acceptable-use policy templates, shaped by the decisions taken in the room. You own the final policy.' },
      { name: 'AI 101, the foundations day', chip: 'One day', does: 'Your teams working safely with AI on real insurance tasks: claims correspondence, renewal communications, MI packs, broker emails. Guardrails built on your policies and your FCA, PRA and ICO obligations.', get: 'Practical skills, guardrails people understand, and a shortlist of uses your teams wrote themselves.' },
      { name: 'AI 102, role deep dives', chip: 'Half a day per team', does: 'Each team goes deeper on its own work, from claims to underwriting support to customer service.', get: 'Working AI routines for that team, an automation shortlist and before-and-after numbers.' },
      { name: 'Automation build and managed operations', chip: 'Ongoing', does: 'The fixes, built into live workflows: claims document triage, renewals chasing, self-assembling MI packs, bordereaux checks. Rule-based automation where rules work, AI only where judgement helps.', get: 'Automations live and adopted, then kept reliable, monitored and reported monthly. If the service stops earning its place, you stop paying for it.' }
    ],
    under: 'A human signs off every customer-facing output, exactly as your regulator expects. AI supports underwriters; it never makes the pricing decision.'
  },
  controls: {
    heading: 'Regulation shapes the design from day one, not the sign-off at the end.',
    rows: [
      { k: 'Consumer Duty', v: 'Every recommendation is checked for customer outcome risk, including customers in vulnerable circumstances. Outcomes monitoring is designed in before anything goes live.' },
      { k: 'SM&CR', v: 'Each AI use and each automation has a named owner. The board session agrees who is accountable for what before tools are approved.' },
      { k: 'FCA, PRA and ICO expectations', v: 'Guardrails, training and assurance reviews are built on all three. Data protection is tested for every tool that touches policyholder data.' },
      { k: 'Third-party and vendor AI', v: 'AI Assurance covers the AI inside the products you buy: what data it uses, where it goes, who can switch it on and what the contract says.' },
      { k: 'Operational resilience', v: 'Automations are documented, monitored and owned, with a fallback when they stop. Nothing important depends on one person or one bot.' }
    ],
    boundary: 'We do not carry out penetration testing or red teaming. Where a tool needs security testing, we specify it, your security team or supplier runs it, and we review the results before the tool is approved.'
  },
  experience: {
    heading: 'We have run insurance operations, not just advised them.',
    intro: 'Noviform is led by Ahmed Sheikh, who spent years inside insurers as the person accountable for change. These are not Noviform clients. Two examples from roles he held before founding Noviform:',
    cards: [
      { who: 'Claims · a major UK and international insurer', title: 'A personal lines claims platform, replaced', text: 'Ahmed owned the replacement of the personal lines claims platform with Guidewire, inside a large change portfolio. The first tranche went live six months after he joined.', stats: [{ v: '30%', l: 'operational cost out' }, { v: '~15%', l: 'lower handling time' }, { v: '~10%', l: 'more straight-through' }] },
      { who: 'Private medical insurance · a global health insurer', title: 'Two questions every member asks, answered', text: "On a major customer and platform transformation, Ahmed designed and led the answer to: what am I covered for, and what will I pay? That became the insurer's member app and portal. Results over seven and a half years:", stats: [{ v: '+45', l: 'NPS points' }, { v: '22%', l: 'fewer complaints' }, { v: '14%', l: 'lower handle time' }] }
    ],
    under: 'London Market and personal lines, claims from FNOL to settlement, delegated authority and bordereaux, broker and aggregator journeys. We speak your operation’s language because we have run it.'
  },
  faq: [
    { q: 'Does the FCA have specific rules for AI in insurance?', a: 'Not at present. The FCA has said existing rules already apply, chiefly Consumer Duty and SM&CR, alongside data protection and operational resilience. That puts the burden on each firm to show its AI use is controlled, monitored and owned. Our assurance and board work is designed to produce exactly that evidence.' },
    { q: 'Our claims team has used AI for a year and we cannot show what it saved. Is that normal?', a: 'Yes, and it is the most common place we start. Use is high across the sector; measured return is rare. The AI MOT finds where the tools are earning their keep, where they are exposed under Consumer Duty, and what to fix first, in two weeks, with a measured estimate for each one and a method your Finance team has agreed.' },
    { q: 'Our vendors are adding AI to the systems we already use. Is that covered?', a: 'Yes, and it is often where the real exposure sits. AI Assurance reviews the AI inside the products you buy as well as the tools you choose: what data it uses, where that data goes, whether you can switch it off and what your contract allows.' },
    { q: 'Will AI make underwriting or claims decisions?', a: 'Not in anything we recommend. AI supports the work around the judgement: reading documents, drafting correspondence, assembling MI. The underwriter and the claims handler make the decision, and a person signs off every customer-facing output.' },
    { q: 'We are an MGA, not a large carrier. Is this too heavy for us?', a: 'No. The AI MOT can be scoped to one line of business or function, and the assurance set-up is sized to the number of tools you actually run. Smaller firms often need the evidence trail most, because capacity and binding authority owners will ask for it.' },
    { q: 'Is this AI or automation?', a: 'Both, labelled honestly. Much of the saving in insurance comes from rule-based automation, such as renewals chasing and data checks. We use AI only where judgement or language helps, and we will tell you which is which.' },
    { q: 'Where does strategy fit in the AI MOT?', a: 'Across all six areas, rather than as a box of its own. The MOT finishes with a roadmap that ties your scores to what you do first, next and later.' },
    { q: 'How quickly can we start?', a: 'Most firms start with a two-week MOT or a half-day board session. Either can begin within a few weeks of a first conversation.' }
  ],
  cta: {
    heading: 'Start with a conversation about one line of business.',
    body: 'Thirty minutes with the person who would do the work. Bring the use case you are least sure how to defend. If we are not the right fit, we will say so.',
    primary: 'Book a Call',
    secondary: 'Send an enquiry'
  }
}
