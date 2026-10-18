import React from 'react';

const modules = [
  {
    id: 'mot',
    num: '01',
    short: 'AI MOT',
    name: 'The Organisational AI MOT',
    time: '2 weeks · Fixed scope · Start here',
    line: 'Your organisation tested against our 12-point framework. Where AI and automation pay, and what is in the way.',
    walkaway: ['A scored report across six areas of your organisation', 'A ranked shortlist of fixes with the numbers attached', 'A clear go or no-go on each']
  },
  {
    id: 'ai101',
    num: '02',
    short: 'AI 101',
    name: 'AI 101, The Foundations Day',
    time: 'One day · Whole team',
    line: 'Your whole team working safely and usefully with AI, in one day, on your real tasks and your real policies.',
    walkaway: ['Hands-on skills practised on your own work, not demos', 'Guardrails everyone understands', 'A shortlist of uses your teams wrote themselves']
  },
  {
    id: 'ai102',
    num: '03',
    short: 'AI 102',
    name: 'AI 102, Role Deep Dives',
    time: 'Half a day per team · After 101',
    line: 'Each team goes deeper on the work they actually do, and leaves with it working.',
    walkaway: ['Role-specific AI workflows, live', 'An automation shortlist per team', 'Before-and-after numbers']
  },
  {
    id: 'leaders',
    num: '04',
    short: 'Leaders',
    name: 'AI for Leaders & Boards',
    time: 'Half a day · SLT and board',
    line: 'The decisions only leadership can take: policy, risk appetite, licensing and approval routes.',
    walkaway: ['Acceptable-use policy and risk matrix templates, shaped in the room', 'A licensing position agreed or scheduled with an owner', 'An agreed route for approving new AI ideas']
  },
  {
    id: 'assurance',
    num: '05',
    short: 'Assurance',
    name: 'AI Assurance',
    time: '3 to 6 week set-up, then ongoing',
    line: 'Is this AI tool safe to switch on? Answered the same way every time, for every tool.',
    walkaway: ['Every tool tested against seven areas, from data to law', 'A light route for low-risk tools, deep review for the few', 'A register and playbook your own team runs']
  },
  {
    id: 'build',
    num: '06',
    short: 'Build',
    name: 'Automation & Agent Build',
    time: 'Scoped',
    line: 'Agents, copilots and automations, shipped into live workflows.',
    walkaway: ['Working agents and automations, live', 'Adopted by the team', 'Built in sprints, not a sandbox demo']
  },
  {
    id: 'managed',
    num: '07',
    short: 'Operations',
    name: 'Managed AI Operations',
    time: 'Monthly',
    line: 'We run it, hold the controls, and prove the benefits.',
    walkaway: ['Kept live and reliable', 'Guardrails held as models change', 'Issues flagged before they bite']
  }
];

export default function Services() {
  const [selected, setSelected] = React.useState(0);
  const tabRefs = React.useRef([]);

  const pressPreset = (i) => {
    setSelected(i);
    const el = tabRefs.current[i];
    if (el) el.focus({ preventScroll: true });
  };

  const onKeyNav = (e, i) => {
    let next = null;
    if (e.key === 'ArrowRight') next = (i + 1) % modules.length;
    if (e.key === 'ArrowLeft') next = (i - 1 + modules.length) % modules.length;
    if (e.key === 'Home') next = 0;
    if (e.key === 'End') next = modules.length - 1;
    if (next !== null) {
      e.preventDefault();
      setSelected(next);
      const el = tabRefs.current[next];
      if (el) el.focus();
    }
  };

  return (
    <section id="services" className="services-section relative-container">
      <div className="container">
        <div className="services-header reveal-on-scroll">
          <span className="section-tag">What You Can Buy</span>
          <h2 className="section-title proof-title">
            Most AI spend can&rsquo;t be traced to a return. We make yours{' '}
            <span className="proof-highlight">impossible to argue with</span>.
          </h2>
          <p className="section-desc">
            Each preset answers one of the three reasons above. Start with the MOT and we will tell you which of the others you actually need. Seven ways in, one console. Press a preset.
          </p>
        </div>

        <div className="reason-map reveal-on-scroll" aria-label="Which preset answers which reason">
          <button type="button" className="reason-key" onClick={() => pressPreset(0)}>
            <span className="reason-label">Reason 01 &middot; where to point it</span>
            <span className="reason-answer">The AI MOT</span>
          </button>
          <button type="button" className="reason-key" onClick={() => pressPreset(3)}>
            <span className="reason-label">Reason 02 &middot; what is allowed</span>
            <span className="reason-answer">Leaders &amp; Boards &middot; AI Assurance</span>
          </button>
          <button type="button" className="reason-key" onClick={() => pressPreset(1)}>
            <span className="reason-label">Reason 03 &middot; how the team works</span>
            <span className="reason-answer">AI 101 &middot; AI 102 &middot; Build &middot; Managed Ops</span>
          </button>
        </div>

        <div className="lead-band reveal-on-scroll">
          <div className="lead-band-main">
            <svg className="lead-icon" viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
              <circle cx="11" cy="8" r="3.5"/>
              <path d="M4 20c0-3.6 3.2-5.5 7-5.5"/>
              <path d="m17.5 13 1 2 2.2.3-1.6 1.6.4 2.2-2-1.1-2 1.1.4-2.2-1.6-1.6 2.2-.3z"/>
            </svg>
            <div className="lead-text">
              <span className="lead-name">Fractional Chief AI Officer</span>
              <span className="lead-sub">A senior AI leader in the seat, owning the agenda across every stage.</span>
            </div>
          </div>
          <span className="lead-pill">Ongoing leadership</span>
        </div>

        <div className="service-console reveal-on-scroll">
          <div className="console-strip">
            <span className="console-title">Noviform Service Console</span>
            <span className="console-lights" aria-hidden="true">
              <span className="console-light"></span>
              <span className="console-light"></span>
              <span className="console-light on"></span>
            </span>
          </div>

          <div className="console-display">
            {modules.map((m, i) => (
              <div
                key={m.id}
                id={`console-panel-${m.id}`}
                role="tabpanel"
                aria-labelledby={`console-tab-${m.id}`}
                hidden={selected !== i}
                className="console-panel"
              >
                <div className="console-panel-main">
                  <span className="console-time">{m.time}</span>
                  <h3 className="console-name">{m.name}</h3>
                  <p className="console-line">{m.line}</p>
                </div>
                <div className="console-walkaway">
                  <span className="console-walkaway-h">You walk away with</span>
                  <ul className="console-walkaway-list">
                    {m.walkaway.map((w) => <li key={w}>{w}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="console-presets" role="tablist" aria-label="Noviform services">
            {modules.map((m, i) => (
              <button
                key={m.id}
                id={`console-tab-${m.id}`}
                role="tab"
                type="button"
                aria-selected={selected === i}
                aria-controls={`console-panel-${m.id}`}
                tabIndex={selected === i ? 0 : -1}
                ref={(el) => { tabRefs.current[i] = el; }}
                className={`console-preset${selected === i ? ' pressed' : ''}`}
                onClick={() => setSelected(i)}
                onKeyDown={(e) => onKeyNav(e, i)}
              >
                <span className="preset-num">{m.num}</span>
                <span className="preset-short">{m.short}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="console-index reveal-on-scroll" aria-hidden="true">
          {modules.map((m) => (
            <span key={m.id}><strong>{m.num}</strong> {m.id === 'mot' ? 'The AI MOT' : m.id === 'leaders' ? 'Leaders & Boards' : m.id === 'managed' ? 'Managed Operations' : m.short === 'Assurance' ? 'AI Assurance' : m.short}</span>
          ))}
        </div>

        <div className="accel-band reveal-on-scroll">
          <div className="accel-main">
            <span className="accel-pill">Express lane</span>
            <div className="accel-text">
              <span className="accel-name">90 Day Accelerator</span>
              <span className="accel-sub">MOT &rarr; build &rarr; proof of value, compressed into one quarter.</span>
            </div>
          </div>
          <span className="accel-time">12 weeks</span>
        </div>

        <div className="support-row reveal-on-scroll">
          <div className="support-card">
            <div className="support-top">
              <span className="support-name">AI Operating Model</span>
              <span className="support-meta">2 to 4 weeks</span>
            </div>
            <p className="support-desc">Governance, guardrails and decision-rights. Target operating model, approval and prioritisation gates, controls.</p>
          </div>
          <div className="support-card">
            <div className="support-top">
              <span className="support-name">Programme Health Check</span>
              <span className="support-meta">10 to 15 days</span>
            </div>
            <p className="support-desc">Re-enter here if a programme stalls. Why it stalled, honestly, prioritised recovery actions and a plan to get moving again.</p>
          </div>
        </div>

        <div className="advisory-trust-seal reveal-on-scroll">
          <svg className="seal-icon" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            <path d="m9 11 2 2 4-4"/>
          </svg>
          <span className="seal-text">
            Most work starts as a sprint. We extend only when the work is earning its keep, and we only recommend what pays for itself within twelve months.
          </span>
        </div>

        <div className="micro-services reveal-on-scroll">
          <div className="micro-cta">
            <span className="section-tag">More Ways We Help</span>
            <h3 className="micro-title">Or just clear one blocker</h3>
            <p className="micro-desc">
              Not every problem needs a programme. We also run short, targeted pieces that plug into any stage. Tell us what you need and we&rsquo;ll point you to the right one.
            </p>
            <div className="micro-actions">
              <a className="micro-contact-btn" href="mailto:hello@noviform.ai?subject=Clearing%20one%20blocker">
                <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
                Get in touch
              </a>
              <a className="micro-call-btn" href="https://calendly.com/asheikh-noviform/30min" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>
                Book a Call
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .services-section {
          padding: 80px 0;
          background-color: var(--bg-primary);
          border-top: 2px solid var(--ink);
          transition: background-color 0.5s ease;
        }

        .services-header {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 2.5rem;
        }

        .proof-title {
          font-size: clamp(1.7rem, 3vw, 2.5rem);
          line-height: 1.22;
          max-width: 820px;
        }

        .proof-highlight {
          border-bottom: 4px solid var(--accent-gold);
          padding-bottom: 0.05em;
        }

        .lead-band {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.25rem;
          padding: 1.1rem 1.6rem;
          border-radius: var(--border-radius-md);
          background-color: var(--bg-card);
          border: 1px solid var(--border-color);
          border-left: 4px solid var(--accent-gold);
          margin-bottom: 1.5rem;
        }

        .lead-band-main {
          display: flex;
          align-items: center;
          gap: 1rem;
          min-width: 0;
        }

        .lead-icon {
          color: var(--accent-gold);
          flex-shrink: 0;
        }

        .lead-text {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }

        .lead-name {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.05rem;
          color: var(--text-primary);
          line-height: 1.3;
        }

        .lead-sub {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .lead-pill {
          flex-shrink: 0;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--panel-dark-text);
          background-color: var(--ink);
          padding: 0.4rem 0.9rem;
          border-radius: 50px;
          white-space: nowrap;
        }

        .service-console {
          background-color: var(--bg-card);
          border: 2px solid var(--ink);
          border-radius: 20px;
          box-shadow: 6px 6px 0 rgba(15, 17, 21, 0.14);
          overflow: hidden;
          margin-bottom: 1.1rem;
        }

        .console-strip {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 0.75rem 1.5rem;
          border-bottom: 2px solid var(--ink);
          background-color: var(--accent-gold-bright);
        }

        .console-title {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 0.85rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--ink);
        }

        .console-lights {
          display: inline-flex;
          gap: 6px;
        }

        .console-light {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: 1px solid var(--ink);
          display: inline-block;
        }

        .console-light.on {
          background-color: var(--ink);
        }

        .console-display {
          background-color: var(--panel-dark);
          padding: 1.75rem 2rem;
          min-height: 215px;
          display: flex;
          align-items: stretch;
        }

        .console-panel {
          display: flex;
          flex-wrap: wrap;
          gap: 2.25rem;
          width: 100%;
        }

        .console-panel[hidden] {
          display: none;
        }

        .console-panel-main {
          flex: 999 1 380px;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .console-time {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--accent-gold-bright);
        }

        .console-name {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: clamp(1.3rem, 2vw, 1.7rem);
          color: var(--panel-dark-text);
          line-height: 1.2;
          margin: 0;
        }

        .console-line {
          font-size: 0.95rem;
          color: var(--panel-dark-muted);
          max-width: 520px;
          margin: 0;
        }

        .console-walkaway {
          flex: 1 1 300px;
          min-width: 0;
          border-left: 1px solid rgba(244, 237, 224, 0.15);
          padding-left: 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
        }

        @media (max-width: 720px) {
          .console-walkaway {
            border-left: 0;
            padding-left: 0;
            border-top: 1px solid rgba(244, 237, 224, 0.15);
            padding-top: 1rem;
          }
        }

        .console-walkaway-h {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--accent-gold-bright);
        }

        .console-walkaway-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .console-walkaway-list li {
          font-size: 0.9rem;
          color: var(--panel-dark-text);
          line-height: 1.4;
          display: flex;
          gap: 0.6rem;
          align-items: flex-start;
        }

        .console-walkaway-list li::before {
          content: "\\2192";
          color: var(--accent-gold-bright);
          font-weight: 700;
          flex-shrink: 0;
        }

        .console-presets {
          display: flex;
          gap: 0.85rem;
          padding: 1.3rem 1.5rem 1.5rem;
          border-top: 2px solid var(--ink);
          background-color: var(--bg-card);
          flex-wrap: wrap;
        }

        .console-preset {
          flex: 1;
          min-width: 104px;
          text-align: center;
          padding: 0.75rem 0.5rem 0.6rem;
          background-color: var(--bg-card);
          color: var(--ink);
          border: 2px solid var(--ink);
          border-radius: 12px;
          box-shadow: 0 4px 0 var(--ink);
          cursor: pointer;
          transition: transform 0.12s ease, box-shadow 0.12s ease, background-color 0.12s ease;
          font-family: var(--font-heading);
        }

        .console-preset:hover {
          background-color: var(--bg-secondary);
        }

        .console-preset:focus-visible {
          outline: 2px solid var(--accent-gold);
          outline-offset: 3px;
        }

        .console-preset.pressed {
          background-color: var(--accent-gold-bright);
          box-shadow: 0 1px 0 var(--ink);
          transform: translateY(3px);
        }

        .preset-num {
          display: block;
          font-weight: 800;
          font-size: 1.05rem;
          line-height: 1.2;
        }

        .preset-short {
          display: block;
          font-weight: 600;
          font-size: 0.7rem;
          line-height: 1.25;
        }

        .console-index {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem 1.75rem;
          justify-content: center;
          margin-bottom: 1.5rem;
          font-size: 0.82rem;
          color: var(--text-secondary);
        }

        .console-index strong {
          color: var(--accent-gold);
          font-weight: 700;
        }

        .accel-band {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.25rem;
          padding: 1rem 1.6rem;
          border-radius: var(--border-radius-md);
          background-color: var(--bg-card);
          border: 1px solid var(--border-color);
          border-left: 4px solid var(--accent-gold);
          margin-bottom: 1.5rem;
        }

        .accel-main {
          display: flex;
          align-items: center;
          gap: 1rem;
          min-width: 0;
          flex-wrap: wrap;
        }

        .accel-pill {
          flex-shrink: 0;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--eyebrow);
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color-hover);
          padding: 0.35rem 0.8rem;
          border-radius: 50px;
          white-space: nowrap;
        }

        .accel-text {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }

        .accel-name {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.02rem;
          color: var(--text-primary);
          line-height: 1.3;
        }

        .accel-sub {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .accel-time {
          flex-shrink: 0;
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--eyebrow);
          white-space: nowrap;
        }

        .support-row {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1.25rem;
          margin-bottom: 2rem;
        }

        .support-card {
          background-color: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-md);
          padding: 1.3rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .support-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }

        .support-name {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.02rem;
          color: var(--text-primary);
        }

        .support-meta {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--text-secondary);
          white-space: nowrap;
        }

        .support-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.55;
          margin: 0;
        }

        .advisory-trust-seal {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          padding: 1rem 2rem;
          border-radius: 100px;
          background-color: var(--bg-card);
          border: 1px solid var(--border-color);
          max-width: max-content;
          margin: 0 auto 3rem;
        }

        .seal-icon {
          color: var(--accent-gold);
          flex-shrink: 0;
        }

        .seal-text {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .micro-services {
          padding-top: 1rem;
        }

        .micro-cta {
          max-width: 640px;
          margin: 0 auto;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .micro-title {
          color: var(--text-primary);
          font-size: clamp(1.6rem, 2.4vw, 2.25rem);
          margin: 0.6rem 0 1rem;
        }

        .micro-desc {
          font-size: 1.05rem;
          color: var(--text-secondary);
          line-height: 1.7;
          max-width: 560px;
        }

        .micro-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.85rem;
          margin-top: 1.75rem;
          flex-wrap: wrap;
        }

        .micro-contact-btn,
        .micro-call-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.8rem 1.6rem;
          border-radius: 50px;
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.95rem;
          text-decoration: none;
          transition: var(--transition-fast);
        }

        .micro-contact-btn {
          background-color: var(--ink);
          color: var(--panel-dark-text);
        }

        .micro-contact-btn:hover {
          transform: translateY(-2px);
          background-color: hsl(220, 17%, 14%);
        }

        .micro-call-btn {
          background-color: transparent;
          color: var(--text-primary);
          border: 1px solid var(--ink);
        }

        .micro-call-btn:hover {
          transform: translateY(-2px);
          border-color: var(--accent-gold);
          color: var(--accent-gold);
        }

        @media (max-width: 720px) {
          .console-display {
            padding: 1.4rem 1.3rem;
          }
          .console-presets {
            gap: 0.6rem;
          }
          .console-preset {
            min-width: calc(25% - 0.6rem);
          }
          .support-row {
            grid-template-columns: 1fr;
          }
          .lead-band,
          .accel-band {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.85rem;
          }
          .advisory-trust-seal {
            border-radius: 16px;
            padding: 1rem 1.5rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .console-preset {
            transition: none;
          }
        }

        .reason-map {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.9rem;
          margin: -1.5rem 0 2rem;
        }

        .reason-key {
          text-align: left;
          font-family: inherit;
          cursor: pointer;
          background-color: var(--bg-card);
          border: 2px solid var(--ink);
          border-radius: 12px;
          box-shadow: 4px 4px 0 rgba(15, 17, 21, 0.12);
          padding: 0.85rem 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          transition: var(--transition-fast);
        }

        .reason-key:hover,
        .reason-key:focus-visible {
          background-color: var(--accent-gold-bright);
          transform: translateY(-2px);
        }

        .reason-label {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--eyebrow);
        }

        .reason-answer {
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--text-primary);
        }

        @media (max-width: 768px) {
          .reason-map {
            grid-template-columns: 1fr;
            margin-top: -0.5rem;
          }
        }
      `}</style>
    </section>
  );
}
