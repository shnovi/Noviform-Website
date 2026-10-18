import React from 'react'

// Homepage section between Hero and Services (added 18 Oct 2026).
// Cream, not dark, so the console's display window below still lands.
const reasons = [
  {
    num: '01',
    title: 'Nobody knows where to point it',
    text: 'Licences land on every desk. The work that would actually pay sits unidentified in three teams’ inboxes.'
  },
  {
    num: '02',
    title: 'Nobody has decided what is allowed',
    text: 'No policy, no risk appetite, no approval route. So the cautious do nothing and the keen do it quietly.'
  },
  {
    num: '03',
    title: 'Nobody changed how the team works',
    text: 'A one hour demo is not adoption. The process, the handoffs and the measures all stayed exactly as they were.'
  }
]

export default function WhyPilotsStall() {
  return (
    <section id="why" className="why-section relative-container">
      <div className="container">
        <div className="why-header reveal-on-scroll">
          <span className="section-tag">Why the pilots stall</span>
          <h2 className="section-title why-title">
            Building it is the easy half.{' '}
            <span className="why-gold">Getting it used is the half that pays.</span>
          </h2>
          <p className="why-desc">
            We build automation, agents and AI workflows. The difference is what happens next: we decide what to
            point them at, get the controls in place, and change how the team actually works, because that is
            where the return is. We have spent twenty five years doing exactly that, inside financial services,
            insurance, health, higher education and professional services, and as consultants across many more.
          </p>
        </div>

        <div className="why-stats reveal-on-scroll">
          <div className="why-stat">
            <span className="why-stat-num">80%+</span>
            <span className="why-stat-label">of organisations have explored or piloted general-purpose AI tools</span>
          </div>
          <div className="why-stat">
            <span className="why-stat-num">95%</span>
            <span className="why-stat-label">see no measurable business return</span>
          </div>
        </div>
        <p className="why-source reveal-on-scroll">
          Source: MIT NANDA, The GenAI Divide: State of AI in Business 2025 (Challapally, Pease, Raskar and Chari, July 2025).
        </p>

        <div className="why-grid reveal-stagger">
          {reasons.map((r) => (
            <article className="why-card reveal-on-scroll" key={r.num}>
              <span className="why-num">{r.num}</span>
              <h3 className="why-card-title">{r.title}</h3>
              <p className="why-card-text">{r.text}</p>
            </article>
          ))}
        </div>

        <p className="why-closing reveal-on-scroll">
          Adoption is the finish line. <span className="why-gold">If people do not use it, it did not land.</span>
        </p>
      </div>

      <style jsx="true">{`
        .why-section {
          padding: 40px 0 90px;
        }

        .why-header {
          max-width: 820px;
        }

        .why-title {
          margin-top: 1.25rem;
        }

        .why-gold {
          color: var(--accent-gold);
        }

        .why-desc {
          font-size: clamp(1rem, 1.2vw, 1.15rem);
          color: var(--text-secondary);
          max-width: 760px;
          margin: 0;
        }

        .why-stats {
          display: flex;
          gap: 3rem;
          flex-wrap: wrap;
          margin: 2.5rem 0 0.5rem;
        }

        .why-stat-num {
          display: block;
          font-family: var(--font-heading);
          font-size: clamp(2.8rem, 4.5vw, 3.6rem);
          line-height: 1;
          font-weight: 800;
          color: var(--accent-gold);
        }

        .why-stat-label {
          display: block;
          margin-top: 0.4rem;
          max-width: 260px;
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .why-source {
          font-size: 0.78rem;
          color: var(--text-secondary);
          margin: 0.75rem 0 0;
        }

        .why-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-top: 2.5rem;
        }

        .why-card {
          background-color: var(--bg-card);
          border: 2px solid var(--ink);
          border-radius: var(--border-radius-md);
          box-shadow: var(--glass-shadow);
          padding: 1.75rem;
        }

        .why-num {
          display: inline-flex;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background-color: var(--ink);
          color: var(--accent-gold-bright);
          font-family: var(--font-heading);
          font-size: 0.72rem;
          font-weight: 700;
          align-items: center;
          justify-content: center;
          margin-bottom: 0.9rem;
        }

        .why-card-title {
          font-size: 1.15rem;
          margin: 0 0 0.5rem;
        }

        .why-card-text {
          margin: 0;
          color: var(--text-secondary);
          font-size: 0.95rem;
        }

        .why-closing {
          margin: 2.25rem 0 0;
          font-family: var(--font-heading);
          font-size: clamp(1.2rem, 1.8vw, 1.5rem);
          font-weight: 700;
          color: var(--text-primary);
        }

        @media (max-width: 992px) {
          .why-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
