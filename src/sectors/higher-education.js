// Higher education sector page. Copy approved 18 Oct 2026 from the review doc and mockup.
// University figures: £3.85 cleared in writing by the client sponsor. The £1.13m Year 1 figure
// is held until confirmed as savings achieved; business case total and investment are never published.
export default {
  slug: 'higher-education',
  navLabel: 'Higher education',
  num: '03',
  seo: {
    title: 'AI and Automation for Universities | Noviform',
    description: 'Senior-led AI, RPA and automation for UK universities. Find where automation pays back across admissions, registry, student services and finance, with benefits Finance will sign off.'
  },
  hero: {
    eyebrow: 'Higher education',
    h1: 'Universities are being asked to do more with less.',
    h1Gold: 'Automation should be the part that adds up.',
    intro: 'Recruitment is volatile, international income is under pressure and professional services teams are stretched. Noviform helps universities find where automation and AI genuinely pay back across the student lifecycle, build it with your teams, and measure the benefit in a way your Finance team will sign off.',
    primary: 'Book a 30-minute call',
    secondary: 'See how the AI MOT works for universities',
    proof: 'Built and scaled a university automation programme from first idea to Finance-endorsed benefits, including a first end-to-end automation on the student records system.'
  },
  mot: {
    title: 'The AI MOT · Universities',
    areas: [
      { name: 'Admissions and recruitment', score: 3 },
      { name: 'Registry and academic admin', score: 2 },
      { name: 'Student services', score: 2 },
      { name: 'Finance and fees', score: 4 },
      { name: 'International office', score: 1 },
      { name: 'Professional services and IT', score: 3 }
    ],
    footer: 'Illustrative. Volumes, peaks, systems and risk across six areas of the student lifecycle and professional services.'
  },
  problem: {
    heading: 'Most universities already have automation. Few can prove what it is worth.',
    paras: [
      'The pattern is familiar. A handful of bots were built a few years ago, usually in one department. Some still run, some quietly broke when a system changed, and nobody is quite sure who owns them. Meanwhile staff are already using AI tools to draft emails and summarise documents, with or without a policy, and suppliers are pitching AI for admissions and student support.',
      'When the efficiency programme asks what RPA and automation have actually saved, the answer is usually an estimate of hours, not a number Finance recognises. That makes the next investment hard to approve and easy to cut.'
    ],
    cards: [
      { title: 'Busy seasons break the model', text: 'Clearing, enrolment, results and fee deadlines put huge, predictable spikes on small teams. Those peaks are exactly where well-built automation earns its keep, and exactly where badly built automation fails in public.' },
      { title: 'The student record is the hard part', text: 'Most of the value sits in or around the student records system. Many programmes stop at the edges because touching the core feels risky.' },
      { title: 'AI raises the stakes', text: 'Anything that affects an offer, a fee, a progression decision or a wellbeing case lands on a real student. That needs clear rules about what AI can draft and what a person must decide.' }
    ]
  },
  help: {
    heading: 'Start with an honest check. Build what pays back. Prove it.',
    intro: 'Every engagement uses the same five building blocks. For a university, they look like this.',
    modules: [
      { name: 'AI MOT for universities', does: 'A short, structured check across six areas: admissions and recruitment, registry and academic administration, student services, finance and fees, international office, and professional services including IT. We look at volumes, peaks, systems and risk, not just enthusiasm.', get: 'A scored picture of where automation and AI will pay back first, what to leave alone, and a sequenced plan your leadership team can approve.' },
      { name: 'AI 101 for professional services staff', does: 'Practical, hands-on training for the people who will work alongside automation and AI every day. Plain English, real university examples, no jargon.', get: 'Staff who know what the tools can and cannot do, how to use them safely with student data, and how to spot the next good idea.' },
      { name: 'AI 102 for process owners and builders', does: 'A deeper session for the people who will own, design or test automations. Covers choosing the right tool, writing a good requirement and checking AI output properly.', get: 'A pipeline of well-defined ideas and people confident enough to own them after we leave.' },
      { name: 'AI for leaders and governors', does: 'A focused session for senior leaders, Council or committee members. Covers opportunity, risk, governance and what good oversight looks like.', get: 'Leaders who can ask the right questions, approve with confidence and hold the programme to account.' },
      { name: 'AI Assurance', does: 'An independent review of AI and automation already in place or being bought, including supplier AI in admissions and student-facing tools.', get: 'A clear view of what is working, what is exposed and what needs a control, written for an audit committee rather than a technical team.' }
    ],
    under: 'Where it makes sense, we go further. We build the first automations with your teams, set up a light product council so ideas are prioritised on value, and can provide a fractional Automation Lead to run the programme until you are ready to own it.',
    rules: {
      title: 'Our simple rules for AI in a university',
      intro: 'Most of the value in a university is still in plain, reliable automation. We are honest about which work is which, and label it accordingly.',
      items: [
        { label: 'Rule 1', text: 'The task is rules-based, on structured data.', verdict: 'Automate it' },
        { label: 'Rule 2', text: 'It involves documents, language or judgement.', verdict: 'AI drafts, a person checks' },
        { label: 'Rule 3', text: 'Getting it wrong lands on a student.', verdict: 'A person decides', hot: true }
      ]
    }
  },
  controls: {
    heading: 'Governance is part of the design, not a gate at the end.',
    intro: 'Universities answer to students, regulators, funders and their own governing body. We design with those obligations from day one.',
    rows: [
      { k: 'UK GDPR and student data', v: 'Every automation and AI use case starts with what data it touches. Where needed we prepare the inputs for a Data Protection Impact Assessment so your Data Protection Officer can review early, not at go-live.' },
      { k: 'Fair and transparent decisions', v: 'Anything affecting admissions, progression, fees or support keeps a person accountable for the decision. AI may draft or triage; it does not decide.' },
      { k: 'Office for Students and consumer protection', v: 'We check that automated communications and processes stay accurate, clear and fair to students, especially around offers, fees and changes.' },
      { k: 'Supplier and vendor AI', v: 'AI built into the systems you buy is still your risk. We help you ask suppliers the right questions and record the answers.' },
      { k: 'Audit and Finance', v: 'Benefits are defined before build and confirmed after go-live using a method your Finance team agrees, so the numbers survive scrutiny.' },
      { k: 'Accessibility and inclusion', v: 'Student-facing changes are checked so they work for every student, not just the typical one.' }
    ],
    boundary: 'We provide templates, guidance and practical controls. We do not write your institutional policies or provide legal advice, and we do not carry out penetration testing. Where security testing is needed we specify it and your chosen provider runs it. Any output that reaches a student is signed off by a person at your university.'
  },
  experience: {
    heading: 'We have done this inside a university, not just advised on it.',
    cards: [
      { who: 'A UK university', title: 'A programme that pays for itself', text: 'We led an automation programme to a portfolio of live automations across professional services, with benefits tracked against an agreed method, and Year 1 savings already delivered.', stats: [{ v: '£3.85', l: 'back for every £1 invested' }, { v: 'Year 1', l: 'savings delivered, Finance-confirmed' }] },
      { who: 'Registry', title: 'Into the student record', text: "We delivered the institution's first end-to-end automation on its student records system, the part of the estate most programmes avoid, with the controls and testing the registry team needed to trust it." },
      { who: 'Finance', title: 'Benefits Finance will sign off', text: 'We worked with Finance to agree a two-stage benefits method: an estimate approved before build, then a confirmed figure after go-live. That made the numbers credible to the executive and the audit committee.' },
      { who: 'Governance', title: 'Ideas prioritised on value', text: 'We set up a product council so departments could put forward ideas, and decisions on what to build next were made on value and readiness rather than who shouted loudest.' }
    ],
    footnote: 'Client names are withheld unless the client has agreed to be named.'
  },
  faq: [
    { q: 'Is AI safe to use in admissions?', a: 'It can help, but it should not decide. AI can sort enquiries, draft replies and check documents for completeness. Decisions about offers, conditions and fee status stay with a person, and any supplier AI in your admissions tools should be reviewed before it goes live.' },
    { q: 'Staff are already using AI tools on their own. Is that a problem?', a: 'It is a signal, not a problem. It tells you where the demand is. The risk is student data in unmanaged tools and no agreed rules. We put the rules in, point the use at the work that pays, and make it something the university can stand behind.' },
    { q: 'We already have some bots. Do we need to start again?', a: 'Rarely. The AI MOT looks at what you already have, what is still earning its keep and what should be fixed or retired. Most universities get more value from tidying and scaling what exists than from starting over.' },
    { q: 'Can you work with our student records system?', a: 'Yes. We have delivered end-to-end automation on a university student records system. We work alongside your registry and IT teams, follow your change and testing processes, and design so the automation can be supported after we leave.' },
    { q: 'How do you make sure the savings are real?', a: 'We agree the benefits method with Finance before anything is built: what counts, how it is measured and who confirms it. After go-live the benefit is checked against that method, so the figure in the report is one Finance already recognises.' },
    { q: 'Our staff are worried AI will replace them. How do you handle that?', a: 'Honestly. In most universities the aim is to take repetitive work off stretched teams so they can spend time on students, not to cut roles. Training comes first, staff help choose what to automate, and we are clear about the purpose from the start.' },
    { q: 'Where does strategy fit in the AI MOT?', a: 'Across all six areas, rather than as a box of its own. The MOT finishes with a roadmap that ties your scores to what you do first, next and later.' },
    { q: 'How quickly can we see results?', a: 'The AI MOT gives you a prioritised plan within weeks. First automations are usually aimed at a known peak, such as clearing, enrolment or fee deadlines, so the benefit is visible in the first cycle.' }
  ],
  cta: {
    heading: 'Find out where automation will pay back at your university.',
    body: 'Start with a 30-minute conversation. We will talk through your priorities, what you already have and whether an AI MOT is the right first step. No obligation and no sales pitch.',
    primary: 'Book a 30-minute call',
    secondary: 'Send us a message'
  }
}
