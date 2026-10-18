// Charities sector page. Copy approved 18 Oct 2026 from the review doc and mockup.
export default {
  slug: 'charities',
  navLabel: 'Charities',
  num: '02',
  seo: {
    title: 'AI for Charities: Policy, Training and Trustees | Noviform',
    description: 'Your staff already use AI. Help your trustees govern it, your teams use it safely, and your admin cost less. Built for UK charities.'
  },
  hero: {
    eyebrow: 'Charities and the third sector',
    h1: 'Your staff already use AI.',
    h1Gold: 'Now your trustees can govern it.',
    intro: 'Most charities now use AI routinely, often on personal accounts with no policy behind it. Noviform helps charities put sensible rules in place, get staff using AI safely on their real work, and take hours of admin off people whose time belongs with your beneficiaries, with simple automation where a rule does the job, and AI where it genuinely helps.',
    primary: 'Book a Call',
    secondary: 'See the training pathway',
    proof: 'Every hour of admin we remove is an hour back into the work your charity exists to do.'
  },
  mot: {
    title: 'The AI MOT · Charities',
    areas: [
      { name: 'Service delivery', score: 3 },
      { name: 'Fundraising', score: 2 },
      { name: 'Finance', score: 3 },
      { name: 'Communications', score: 4 },
      { name: 'Data and systems', score: 1 },
      { name: 'People and governance', score: 2 }
    ],
    footer: "Illustrative. The 12-point check across six areas, scored in your charity's language and framed as service delivered."
  },
  problem: {
    heading: 'AI arrived in your charity before your policy did.',
    stats: [
      { v: '79%', l: 'of charities now use AI routinely' },
      { v: '36%', l: 'of small charities have an AI policy' }
    ],
    statsSource: 'Source: Charity Digital Skills Report 2026. Boards are rated weakest of all on AI skills.',
    statsSourceHref: 'https://fundraising.co.uk/?p=340907',
    paras: ['That gap shows up in familiar ways:'],
    cards: [
      { title: 'Staff using free tools on personal accounts', text: 'Some of them learn from whatever is pasted in, including donor and beneficiary details.' },
      { title: 'Trustees asked to approve things they cannot assess', text: 'AI does not behave like other software. The same question can get a different answer, and a wrong answer looks exactly like a right one.' },
      { title: 'Funders and regulators starting to ask', text: 'How do you protect beneficiary data? Who checks what the AI wrote in that grant report?' },
      { title: 'Admin that still eats the week', text: 'Grant bids, funder reports, enquiry triage and rotas take time that should go to your beneficiaries.' }
    ],
    closing: 'The answer is not to ban AI, or to buy a platform. It is a clear set of rules your trustees own, staff who know how to use AI safely, and help with the repetitive work, whether that needs AI or a simple rule.',
    quote: { text: 'Cost saved is service delivered. Every hour of admin we take away goes back to the people you exist to serve.', by: 'Ahmed Sheikh, Founder' }
  },
  help: {
    heading: 'A pathway built for the way charities work.',
    intro: 'Take the modules in any order. Many charities start with the trustees or the MOT. The only dependency is that AI 102 follows AI 101.',
    routes: [
      { label: 'Start with the board', value: 'Leaders and Trustees, then AI 101' },
      { label: 'Start with the team', value: 'AI 101, then AI 102 per team' },
      { label: 'Start with the numbers', value: 'The AI MOT, then build' }
    ],
    modules: [
      { name: 'AI for Leaders and Trustees', chip: 'Half a day', does: 'Senior leaders and trustees learn why AI is unlike anything they have governed, see it work on your own published material, and make the decisions only they can make.', get: 'An agreed green-light test every AI proposal has to pass. Policy and risk register templates filled in with what you decided. Named owners for data and safeguarding. A decision on which AI tools you pay for.' },
      { name: 'AI 101, the foundations day', chip: 'One day, up to 15 people', does: 'Your whole team using AI safely on real charity work: grant bids, donor communications, rotas and reports. Everyone leaves with their privacy settings set correctly. Free tiers are fine; nothing needs buying.', get: "Your own prompt pack, a quick-wins list in your team's words, an acceptable-use policy starter and a trustee-readable risk matrix." },
      { name: 'AI 102, role deep dives', chip: 'Half a day per team', does: 'One team at a time rebuilds its week around AI: fundraising and income, service delivery, finance and operations, or communications.', get: 'A working assistant set up on your tools, a role playbook, honest before-and-after timings and a shortlist of steps better suited to simple automation.' },
      { name: 'The Organisational AI MOT', chip: '2 weeks, fixed scope', does: 'Tests your charity against our 12-point framework across six areas: service delivery, fundraising, finance, communications, data and systems, people and governance.', get: 'A scored report, a costed shortlist of fixes framed as service delivered, and a clear go or no-go on each. We only recommend what pays for itself within twelve months.' },
      { name: 'AI Assurance', chip: 'Sized to your charity', does: 'Checks each AI tool before you switch it on, including AI added to systems you already use, such as your CRM or finance software.', get: 'A simple route for approving tools, sized to your charity, and a register your own staff can keep up to date.' },
      { name: 'Automation build', chip: 'When you are ready', does: 'The repetitive work taken off desks: thank-you letters, Gift Aid checks, grant deadline reminders, volunteer and enquiry intake. Simple rules first; AI only where it genuinely helps.', get: 'Automations live, adopted and owned by your team.' }
    ],
    under: 'Not everything needs AI. Where a simple rule does the job better, we say so.'
  },
  controls: {
    heading: 'Safeguarding and data protection come first, not last.',
    rows: [
      { k: 'Beneficiary and donor data', v: 'Every module starts from your data protection policy. Staff learn which tools are safe for which information, and which free tools keep what they are given.' },
      { k: 'Safeguarding', v: 'Where it applies, safeguarding has a named owner in the AI rules, and no AI use touches vulnerable people without a person in the loop.' },
      { k: 'Trustee duties', v: 'Trustees get the knowledge to oversee AI, not just a briefing about it. Every decision leaves the room with a name and a date against it.' },
      { k: 'Funder conditions and reputation', v: 'AI use in grant bids and reports is covered by your rules, so you can answer a funder who asks how a document was produced.' },
      { k: 'The environmental question', v: 'We cover the real footprint of AI use honestly, so your trustees can decide what is proportionate.' }
    ],
    boundary: 'You own your policy. We bring the templates, the guidance and the questions; your trustees make the decisions and adopt the result. We will not draft, adopt or sign off your governance for you, and you should be wary of anyone who offers to.'
  },
  experience: {
    heading: 'Built for charities, by people who have done this in regulated organisations.',
    intro: 'Our charity pathway was designed from the ground up for the sector, with exercises built on grant bids, donor communications, rotas and reports, not adapted from a corporate course. It is led by Ahmed Sheikh, who has spent 25 years delivering change where controls matter.',
    cards: [
      { who: 'A UK specialist bank · a role held before Noviform', title: 'Automation that frees people, not jobs', text: "Ahmed led the deployment of software robots across operations, taking manual chasing and checking off people's desks. All of the capacity released was redeployed to other work rather than removed.", stats: [{ v: '7', l: "full-time roles' worth of capacity" }, { v: '100%', l: 'of it redeployed, not removed' }] }
    ]
  },
  faq: [
    { q: 'Do we need to buy AI tools first?', a: 'No. AI 101 runs on what you already have, and free tiers are fine. Many charities already have Microsoft Copilot Chat through their Microsoft 365 account, which keeps your data protected when staff sign in with a work login. AI 102 is different: a team assistant needs a paid licence, and we will tell you plainly whether it is worth it.' },
    { q: 'Our staff use AI already. What would a Noviform session add?', a: 'Direction and rules. Most charity AI use is individual and unplanned: useful for the person, invisible to the charity. The sessions turn that into agreed uses, safe settings, and a few routines the whole team runs, with the hours saved counted.' },
    { q: 'Will you write our AI policy for us?', a: 'No, and that is deliberate. Your trustees should own it. We bring a template with the key decisions already laid out, your leaders and trustees make each decision in the room, and you leave with it filled in and ready to finish and adopt.' },
    { q: 'Is our data safe during the training?', a: 'Yes. The leaders session runs on material you have already published, such as your annual report. Training exercises use tasks you choose to share, anonymised where needed. We never ask for access to your systems.' },
    { q: 'We are a small charity. Is this for us?', a: 'Yes. Smaller charities are the least likely to have an AI policy and the most stretched for time, so the gains are often largest. The modules work on their own, so you can start with one.' },
    { q: "What about AI's environmental impact?", a: 'It is a fair question and we cover it honestly in the trustees session, so your board can decide what level of use is proportionate.' },
    { q: 'Where does strategy fit in the AI MOT?', a: 'Across all six areas, rather than as a box of its own. The MOT finishes with a roadmap that ties your scores to what you do first, next and later.' },
    { q: 'What if a task does not need AI at all?', a: 'Then we say so. Plenty of charity admin is better handled by a simple automated rule, which is cheaper and more predictable than AI.' }
  ],
  cta: {
    heading: 'Start with your trustees, or start with one team.',
    body: 'Thirty minutes with the person who would run your sessions. Tell us where AI is already being used and what worries your board. If we are not the right fit, we will say so.',
    primary: 'Book a Call',
    secondary: 'Send an enquiry'
  }
}
