import React from 'react';

export default function Services() {
  const stages = [
    {
      num: "01",
      name: "AI & Automation Readiness",
      front: "Where AI pays off, and if your foundations can take it.",
      timeline: "2 to 3 weeks",
      back: ["Ranked use-case shortlist", "Readiness score: data, governance, skills", "A clear go / no-go"]
    },
    {
      num: "02",
      name: "AI Operating Model",
      front: "Governance, guardrails and decision-rights. Not build scoping.",
      timeline: "2 to 4 weeks",
      back: ["Target operating model", "Approval & prioritisation gates", "Guardrails and controls"]
    },
    {
      num: "03",
      name: "Automation & Agent Build",
      front: "Agents, copilots and automations, shipped into live workflows.",
      timeline: "Scoped",
      back: ["Working agents & automations, live", "Adopted by the team", "Built in sprints, not a sandbox demo"]
    },
    {
      num: "04",
      name: "Managed AI Operations",
      front: "We run it, hold the controls, and prove the benefits.",
      timeline: "Monthly",
      back: ["Kept live and reliable", "Guardrails held as models change", "Issues flagged before they bite"]
    }
  ];

  const support = [
    {
      key: "bc",
      name: "Business Case & Benefits",
      front: "Tie AI spend to a return you can defend.",
      meta: "Plugs into any stage",
      back: ["Board-ready business case", "Benefits-realisation framework", "ROI tracked against baseline"]
    },
    {
      key: "hc",
      name: "Programme Health Check",
      front: "Re-enter here if a programme stalls.",
      meta: "10 to 15 days",
      back: ["Why it stalled, honestly", "Prioritised recovery actions", "A plan to get moving again"]
    }
  ];

  const [flipped, setFlipped] = React.useState({});
  const toggle = (i) => setFlipped((p) => ({ ...p, [i]: !p[i] }));
  const onKey = (e, i) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle(i);
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
            Noviform builds AI and automation into your real workflows and proves what it&rsquo;s saving. The business case, not the demo.
          </p>
          <div className="delivery-strap" aria-label="Sprint first, Evidence Led, Built to Land">
            <span>Sprint first</span><span className="strap-sep" aria-hidden="true">&middot;</span>
            <span>Evidence Led</span><span className="strap-sep" aria-hidden="true">&middot;</span>
            <span>Built to Land</span>
          </div>
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

        <div className="journey">
          {stages.map((s, i) => (
            <React.Fragment key={s.num}>
              <div className={`stage-flip${flipped[i] ? ' is-flipped' : ''}`}>
                <div
                  className="stage-inner"
                  role="button"
                  tabIndex={0}
                  aria-label={`${s.name}. Activate to flip and see what you walk away with.`}
                  onClick={() => toggle(i)}
                  onKeyDown={(e) => onKey(e, i)}
                >
                  <div className="stage-face stage-front">
                    <div className="stage-top">
                      <span className="stage-num">{s.num}</span>
                      <svg className="flip-hint" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v4h4"/></svg>
                    </div>
                    <h3 className="stage-name">{s.name}</h3>
                    <p className="stage-front-desc">{s.front}</p>
                    <div className="stage-foot">
                      <span className="stage-time">{s.timeline}</span>
                      <span className="flip-cue">
                        Deliverables
                        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v4h4"/></svg>
                      </span>
                    </div>
                  </div>
                  <div className="stage-face stage-back">
                    <div className="stage-top">
                      <span className="stage-back-h">You walk away with</span>
                      <svg className="flip-hint" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v4h4"/></svg>
                    </div>
                    <ul className="stage-back-list">
                      {s.back.map((b) => <li key={b}>{b}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
              {i < stages.length - 1 && (
                <div className="journey-arrow" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="accel-band reveal-on-scroll">
          <div className="accel-main">
            <span className="accel-pill">Express lane</span>
            <div className="accel-text">
              <span className="accel-name">90 Day Accelerator</span>
              <span className="accel-sub">Readiness &rarr; build &rarr; proof of value, compressed into one quarter.</span>
            </div>
          </div>
          <span className="accel-time">12 weeks</span>
        </div>

        <div className="support-row reveal-on-scroll">
          {support.map((s) => (
            <div className={`stage-flip support-flip${flipped[s.key] ? ' is-flipped' : ''}`} key={s.key}>
              <div
                className="stage-inner"
                role="button"
                tabIndex={0}
                aria-label={`${s.name}. Activate to flip and see what you walk away with.`}
                onClick={() => toggle(s.key)}
                onKeyDown={(e) => onKey(e, s.key)}
              >
                <div className="stage-face stage-front">
                  <div className="stage-top">
                    <span className="support-name">{s.name}</span>
                    <svg className="flip-hint" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v4h4"/></svg>
                  </div>
                  <p className="stage-front-desc">{s.front}</p>
                  <div className="stage-foot">
                    <span className="stage-time">{s.meta}</span>
                    <span className="flip-cue">
                      Deliverables
                      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v4h4"/></svg>
                    </span>
                  </div>
                </div>
                <div className="stage-face stage-back">
                  <div className="stage-top">
                    <span className="stage-back-h">You walk away with</span>
                    <svg className="flip-hint" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v4h4"/></svg>
                  </div>
                  <ul className="stage-back-list">
                    {s.back.map((b) => <li key={b}>{b}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="advisory-trust-seal reveal-on-scroll">
          <svg className="seal-icon" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            <path d="m9 11 2 2 4-4"/>
          </svg>
          <span className="seal-text">
            Most work starts as a sprint. We extend only when the work is earning its keep and adoption is real.
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
          background-color: var(--bg-secondary);
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
          background-color: var(--accent-gold);
          color: hsl(220, 18%, 8%);
          padding: 0.05em 0.32em;
          border-radius: 7px;
          box-decoration-break: clone;
          -webkit-box-decoration-break: clone;
        }

        .delivery-strap {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.7rem;
          margin-top: 1.5rem;
          font-family: var(--font-heading);
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.09em;
          text-transform: uppercase;
          color: var(--text-secondary);
        }

        .strap-sep {
          color: var(--accent-gold);
          font-weight: 700;
        }

        .lead-band {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.25rem;
          padding: 1.2rem 1.75rem;
          border-radius: var(--border-radius-md);
          background-color: var(--bg-card);
          border: 2px solid var(--accent-gold);
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
          font-size: 1.1rem;
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
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: hsl(220, 18%, 8%);
          background-color: var(--accent-gold);
          padding: 0.4rem 0.85rem;
          border-radius: 50px;
          white-space: nowrap;
        }

        .journey {
          display: flex;
          align-items: stretch;
          gap: 0.6rem;
          margin-bottom: 1.5rem;
        }

        .stage-flip {
          flex: 1;
          min-width: 0;
          perspective: 1200px;
        }

        .stage-inner {
          position: relative;
          width: 100%;
          height: 266px;
          transition: transform 0.55s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
          cursor: pointer;
          border-radius: var(--border-radius-md);
        }

        .stage-flip.is-flipped .stage-inner {
          transform: rotateY(180deg);
        }

        .stage-inner:focus-visible {
          outline: 2px solid var(--accent-gold);
          outline-offset: 3px;
        }

        .stage-face {
          position: absolute;
          inset: 0;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          border-radius: var(--border-radius-md);
          background-color: var(--bg-card);
          border: 1px solid var(--border-color);
          padding: 1.4rem 1.5rem;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: border-color 0.3s ease;
        }

        .stage-flip {
          transition: transform 0.3s ease;
        }

        @media (hover: hover) {
          .stage-flip:not(.is-flipped):hover {
            transform: translateY(-4px);
          }
        }

        .stage-flip:hover .stage-face {
          border-color: var(--accent-gold);
        }

        .stage-back {
          transform: rotateY(180deg);
        }

        .stage-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.55rem;
        }

        .stage-num {
          font-family: var(--font-heading);
          font-size: 1.85rem;
          font-weight: 700;
          color: var(--accent-gold);
          line-height: 1;
        }

        .flip-hint {
          color: var(--accent-gold);
          opacity: 0.85;
          flex-shrink: 0;
        }

        .stage-foot {
          margin-top: auto;
          padding-top: 0.7rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
        }

        .flip-cue {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: var(--accent-gold);
          background-color: var(--accent-gold-glow);
          padding: 0.28rem 0.6rem;
          border-radius: 50px;
          white-space: nowrap;
          transition: background-color 0.25s ease, transform 0.25s ease;
        }

        .stage-flip:hover .flip-cue {
          transform: translateX(2px);
        }

        .stage-name {
          font-family: var(--font-heading);
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.25;
          margin-bottom: 0.5rem;
        }

        .stage-front-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .stage-time {
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          color: var(--accent-gold);
        }

        .stage-back-h {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: var(--accent-gold);
        }

        .stage-back-list {
          list-style: none;
          padding: 0;
          margin: 0.7rem 0 0;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .stage-back-list li {
          font-size: 0.9rem;
          color: var(--text-primary);
          line-height: 1.35;
          display: flex;
          gap: 0.55rem;
          align-items: flex-start;
        }

        .stage-back-list li::before {
          content: "";
          width: 0.4rem;
          height: 0.4rem;
          border-radius: 50%;
          background-color: var(--accent-gold);
          margin-top: 0.42rem;
          flex-shrink: 0;
        }

        .journey-arrow {
          display: flex;
          align-items: center;
          color: var(--accent-gold);
          opacity: 0.5;
          flex-shrink: 0;
        }

        .accel-band {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.25rem;
          padding: 1.1rem 1.75rem;
          border-radius: var(--border-radius-md);
          background-color: var(--bg-card);
          border: 1px solid var(--border-color);
          border-left: 4px solid var(--accent-gold);
          margin-bottom: 2rem;
        }

        .accel-main {
          display: flex;
          align-items: center;
          gap: 1rem;
          min-width: 0;
        }

        .accel-pill {
          flex-shrink: 0;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: var(--accent-gold);
          background-color: var(--accent-gold-glow);
          padding: 0.4rem 0.85rem;
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
          font-size: 1.1rem;
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
          color: var(--accent-gold);
          white-space: nowrap;
        }

        .support-row {
          display: flex;
          gap: 1.25rem;
          margin-bottom: 2.5rem;
        }

        .support-flip .stage-inner {
          height: 200px;
        }

        .support-name {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1rem;
          color: var(--text-primary);
        }

        .advisory-trust-seal {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          padding: 1.25rem 2.5rem;
          border-radius: 100px;
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
          max-width: max-content;
          margin: 0 auto 3rem;
          box-shadow: var(--glass-shadow);
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
          padding-top: 1.5rem;
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
          background-color: var(--accent-gold);
          color: hsl(220, 18%, 8%);
        }

        .micro-contact-btn:hover {
          transform: translateY(-2px);
          filter: brightness(1.06);
        }

        .micro-call-btn {
          background-color: transparent;
          color: var(--text-primary);
          border: 1px solid var(--border-color-hover);
        }

        .micro-call-btn:hover {
          transform: translateY(-2px);
          border-color: var(--accent-gold);
          color: var(--accent-gold);
        }

        @media (max-width: 980px) {
          .journey {
            flex-wrap: wrap;
            gap: 1rem;
          }
          .stage-flip {
            flex: 1 1 calc(50% - 0.5rem);
          }
          .journey-arrow {
            display: none;
          }
        }

        @media (max-width: 640px) {
          .stage-flip {
            flex: 1 1 100%;
          }
          .lead-band,
          .accel-band {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.85rem;
          }
          .support-row {
            flex-direction: column;
          }
          .advisory-trust-seal {
            border-radius: 16px;
            padding: 1rem 1.5rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .stage-inner {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}
