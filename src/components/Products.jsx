import React from 'react'
import operationsAgenticAi from '../assets/operations-agentic-ai.webp'

export default function Products() {
  const steps = [
    {
      title: "Get honest, fast",
      detail: "We surface what is actually blocking progress: priorities, data reality, ownership, governance and team capacity. You get the truth early enough to use it."
    },
    {
      title: "Make the right choices",
      detail: "We define outcomes, owners and boundaries. What is in, what is out, what has to wait and why. That is where delivery starts to speed up."
    },
    {
      title: "Ship and measure",
      detail: "We deliver in slices, track benefits from day one and treat adoption as part of delivery. Go live is only useful when people use the work confidently."
    },
  ]

  const sprintModel = [
    {
      title: "Sprint first",
      detail: "Short, focused engagement with clear deliverables and a defined timeline"
    },
    {
      title: "Evidence led",
      detail: "We use facts, data and observed delivery signals, not opinions"
    },
    {
      title: "Built to land",
      detail: "We align stakeholders, controls and ownership so outcomes stick"
    }
  ]

  return (
    <section id="how-we-work" className="products-section relative-container">
      <div className="glow-backdrop glow-2"></div>
      <div className="container">
        <div className="grid-2 products-layout-grid">
          <div className="products-visual reveal-on-scroll">
            <div className="dashboard-outer-frame">
              <div className="dashboard-header-bar">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
                <span className="window-title">Noviform Operations Engine</span>
              </div>
              <div className="dashboard-image-container">
                <img
                  src={operationsAgenticAi}
                  alt="Agentic AI workflow network organising enterprise delivery signals inside a boardroom"
                  className="dashboard-actual-img"
                  width="1024"
                  height="1024"
                  loading="lazy"
                  decoding="async"
                />
                <div className="operations-overlay" aria-hidden="true">
                  <span>Controlled delivery</span>
                  <strong>Signals. Decisions. Outcomes.</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="products-details reveal-on-scroll">
            <span className="section-tag">How We Work</span>
            <h2 className="section-title">A Simple Way of Working, Because Complexity Is Where Programmes Stall</h2>
            <p className="section-desc-left">
              We do not advise from altitude. We get into the detail, unblock decisions and help you ship. Clear outcomes, clear owners, clear trade offs and adoption built in from the start.
            </p>

            <div className="product-features-list">
              {steps.map((step, idx) => (
                <div key={step.title} className="product-feature-item">
                  <div className="feature-marker">
                    <span className="step-count-badge">{idx + 1}</span>
                  </div>
                  <div className="feature-text">
                    <h3 className="feature-title">{step.title}</h3>
                    <p className="feature-desc">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="products-action-row">
              <a
                href="https://calendly.com/asheikh-noviform/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent"
              >
                <span>Book a Call</span>
              </a>
              <a
                href="mailto:hello@noviform.ai"
                className="btn btn-secondary"
              >
                <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
                <span>Get in touch</span>
              </a>
            </div>
          </div>
        </div>

        <figure className="sprint-model reveal-on-scroll" aria-label="Noviform sprint based delivery model">
          <div className="sprint-model-header">
            <span className="sprint-model-label">Delivery model</span>
            <p>Three simple tests keep the work focused from first conversation to handover.</p>
          </div>

          <div className="sprint-track">
            {sprintModel.map((item, index) => (
              <article className="sprint-step-card" key={item.title}>
                <span className="sprint-step-index">0{index + 1}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </figure>

        <div className="dont-do-section reveal-on-scroll">
          <div className="dont-do-grid">
            <div className="dont-do-col">
              <h3 className="dont-do-heading">What we do</h3>
              <ul className="dont-do-list do-list">
                <li>Measure outcomes, not activity</li>
                <li>Tighten governance to speed up decisions</li>
                <li>Build controls in early so delivery stays safe</li>
                <li>Stay close to the work until it lands</li>
                <li>Tell you what is actually blocking progress</li>
                <li>Design adoption in from day one</li>
              </ul>
            </div>
            <div className="dont-do-divider" aria-hidden="true"></div>
            <div className="dont-do-col">
              <h3 className="dont-do-heading">What we do not do</h3>
              <ul className="dont-do-list dont-list">
                <li>Run change by PowerPoint</li>
                <li>Hide risk behind optimism</li>
                <li>Confuse busy teams with progress</li>
                <li>Disappear after go live</li>
                <li>Hand your account to junior consultants</li>
                <li>Extend work that is not earning its keep</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .products-section {
          padding: 80px 0;
          background-color: var(--bg-primary);
          transition: background-color 0.5s ease;
          overflow: hidden;
        }

        .products-layout-grid {
          gap: 5rem;
          align-items: center;
        }

        @media (max-width: 992px) {
          .products-layout-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
        }

        .products-visual {
          position: relative;
        }

        .dashboard-outer-frame, .sprint-model {
          border-radius: var(--border-radius-lg);
          border: 1px solid var(--border-color);
          background-color: var(--bg-secondary);
          box-shadow: var(--glass-shadow), 0 24px 60px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          transition: var(--transition-smooth);
        }

        .dashboard-outer-frame:hover {
          transform: scale(1.02);
          border-color: var(--accent-teal);
        }

        .dashboard-header-bar {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 0.75rem 1.25rem;
          background-color: var(--bg-primary);
          border-bottom: 1px solid var(--border-color);
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          display: inline-block;
        }

        .dot.red { background-color: #ff5f56; }
        .dot.yellow { background-color: #ffbd2e; }
        .dot.green { background-color: #27c93f; }

        .window-title {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-secondary);
          margin-left: 1rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .dashboard-image-container {
          padding: 10px;
          background-color: var(--bg-secondary);
          position: relative;
          overflow: hidden;
          border-radius: 0 0 var(--border-radius-lg) var(--border-radius-lg);
        }

        .dashboard-actual-img {
          width: 100%;
          height: auto;
          aspect-ratio: 1;
          display: block;
          border-radius: calc(var(--border-radius-lg) - 8px);
          object-fit: cover;
          transform: scale(1.035);
          transition: transform 0.6s ease;
        }

        .dashboard-outer-frame:hover .dashboard-actual-img {
          transform: scale(1.055);
        }

        .operations-overlay {
          position: absolute;
          left: clamp(1.4rem, 4vw, 2.1rem);
          bottom: clamp(1.4rem, 4vw, 2.1rem);
          max-width: min(78%, 360px);
          padding: 0.85rem 1rem;
          border-radius: var(--border-radius-md);
          background-color: rgba(12, 14, 18, 0.76);
          border: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: 0 16px 34px rgba(0, 0, 0, 0.26);
          backdrop-filter: blur(12px) saturate(160%);
          -webkit-backdrop-filter: blur(12px) saturate(160%);
        }

        .operations-overlay span {
          display: block;
          margin-bottom: 0.25rem;
          color: var(--accent-gold);
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .operations-overlay strong {
          display: block;
          color: #fff;
          font-family: var(--font-heading);
          font-size: clamp(1rem, 2vw, 1.22rem);
          line-height: 1.25;
          font-weight: 700;
        }

        @media (max-width: 480px) {
          .operations-overlay {
            left: 1.1rem;
            right: 1.1rem;
            bottom: 1.1rem;
            max-width: none;
          }
        }

        .section-desc-left {
          font-size: 1.1rem;
          line-height: 1.6;
          color: var(--text-secondary);
          margin-bottom: 2.5rem;
          max-width: 620px;
        }

        .product-features-list {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .product-feature-item {
          display: flex;
          gap: 1.25rem;
          align-items: flex-start;
        }

        .feature-marker {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background-color: var(--accent-teal-glow);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .step-count-badge {
          color: var(--accent-teal);
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1rem;
        }

        .feature-title {
          font-size: 1.25rem;
          margin-bottom: 0.25rem;
          color: var(--text-primary);
        }

        .feature-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .products-action-row {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .sprint-model {
          margin-top: 5rem;
          padding: clamp(1.25rem, 3vw, 2rem);
          position: relative;
          isolation: isolate;
          background-color: var(--bg-secondary);
        }

        .sprint-model-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 2rem;
          margin-bottom: clamp(1.5rem, 3vw, 2.25rem);
        }

        @media (max-width: 760px) {
          .sprint-model-header {
            flex-direction: column;
            gap: 0.75rem;
          }
        }

        .sprint-model-label {
          display: inline-flex;
          align-items: center;
          width: max-content;
          border-radius: 999px;
          padding: 0.45rem 0.85rem;
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
          color: var(--accent-gold);
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .sprint-model-header p {
          max-width: 520px;
          margin: 0;
          color: var(--text-secondary);
          font-size: 0.96rem;
          line-height: 1.55;
          text-align: right;
        }

        @media (max-width: 760px) {
          .sprint-model-header p {
            text-align: left;
          }
        }

        .sprint-track {
          position: relative;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: clamp(1rem, 2.5vw, 1.5rem);
        }

        @media (max-width: 760px) {
          .sprint-track {
            grid-template-columns: 1fr;
          }
        }

        .sprint-step-card {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 1rem;
          align-items: flex-start;
          min-height: 190px;
          padding: clamp(1.15rem, 2.4vw, 1.5rem);
          border-radius: var(--border-radius-lg);
          background-color: var(--bg-card);
          border: 1px solid var(--border-color);
          box-shadow: 0 16px 34px rgba(14, 18, 25, 0.06);
        }

        [data-theme="dark"] .sprint-step-card {
          box-shadow: 0 18px 38px rgba(0, 0, 0, 0.18);
        }

        .sprint-step-index {
          display: inline-flex;
          width: 2.55rem;
          height: 2.55rem;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border-radius: 50%;
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
          color: var(--accent-gold);
          font-family: var(--font-heading);
          font-size: 0.95rem;
          font-weight: 800;
          letter-spacing: 0.02em;
        }

        .sprint-step-card h3 {
          color: var(--text-primary);
          font-size: clamp(1.25rem, 2.2vw, 1.7rem);
          line-height: 1.15;
          margin-bottom: 0.75rem;
        }

        .sprint-step-card p {
          color: var(--text-secondary);
          font-size: 0.96rem;
          line-height: 1.55;
          margin: 0;
        }

        @media (max-width: 760px) {
          .sprint-step-card {
            min-height: auto;
          }
        }

        .dont-do-section {
          margin-top: 5rem;
          border-top: 1px solid var(--border-color);
          padding-top: 3.5rem;
        }

        .dont-do-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          align-items: stretch;
        }

        .dont-do-col {
          border-radius: var(--border-radius-md);
          padding: 1.6rem 1.9rem;
        }

        .dont-do-col:first-of-type {
          background-color: var(--bg-card);
          border: 1px solid var(--border-color);
        }

        .dont-do-col:last-of-type {
          background-color: var(--panel-dark);
        }

        .dont-do-col:last-of-type .dont-do-heading {
          color: var(--accent-gold-bright);
        }

        .dont-do-col:last-of-type .dont-do-list li {
          color: var(--panel-dark-text);
        }

        @media (max-width: 768px) {
          .dont-do-grid {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }
          .dont-do-divider { display: none; }
        }

        .dont-do-divider {
          display: none;
        }

        .dont-do-heading {
          font-family: var(--font-heading);
          font-size: 1rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: 1.25rem;
          color: var(--text-primary);
        }

        .dont-do-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .dont-do-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          font-size: 0.95rem;
          line-height: 1.5;
          color: var(--text-secondary);
        }

        .dont-do-list li::before {
          flex-shrink: 0;
          margin-top: 3px;
          font-size: 0.8rem;
          font-weight: 700;
        }

        .do-list li::before {
          content: "✓";
          color: var(--accent-gold);
        }

        .dont-list li::before {
          content: "×";
          color: var(--accent-gold-bright);
          opacity: 0.8;
        }
      `}</style>
    </section>
  )
}
