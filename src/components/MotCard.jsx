import React from 'react'

// The sample AI MOT scorecard. Used in the homepage hero and on every sector
// page hero, with the six areas named in that sector's language. Styles live
// here so the card renders identically wherever it is mounted (including the
// pre-rendered sector pages, which do not run the homepage reveal engine).
export default function MotCard({ title = 'The AI MOT', areas, footer }) {
  return (
    <div
      className="mot-sample-card"
      role="img"
      aria-label={`Illustrative sample of the Organisational AI MOT scorecard, six areas each rated out of five`}
    >
      <div className="mot-sample-head">
        <span className="mot-sample-title">{title}</span>
        <span className="mot-sample-pill">Sample</span>
      </div>
      <div className="mot-sample-rows">
        {areas.map((area) => (
          <div className="mot-sample-row" key={area.name}>
            <span className="mot-sample-area">{area.name}</span>
            <span className="mot-sample-dots" aria-hidden="true">
              {[1, 2, 3, 4, 5].map((i) => (
                <span key={i} className={`mot-dot${i <= area.score ? ' filled' : ''}`}></span>
              ))}
            </span>
          </div>
        ))}
      </div>
      <div className="mot-sample-strat">
        <span className="mot-strat-name">Strategic readiness</span>
        <span className="mot-strat-sub">Across all six &middot; sets your roadmap</span>
      </div>
      <div className="mot-sample-foot">{footer}</div>

      <style jsx="true">{`
        .mot-sample-card {
          width: 100%;
          max-width: 360px;
          background-color: var(--bg-card);
          border: 2px solid var(--ink);
          border-radius: 14px;
          box-shadow: var(--glass-shadow);
          overflow: hidden;
        }

        .mot-sample-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.75rem 1.15rem;
          border-bottom: 2px solid var(--ink);
          background-color: var(--accent-gold-bright);
        }

        .mot-sample-title {
          font-family: var(--font-heading);
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--ink);
        }

        .mot-sample-pill {
          font-size: 0.62rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--panel-dark-text);
          background-color: var(--ink);
          border-radius: 999px;
          padding: 0.2rem 0.6rem;
        }

        .mot-sample-rows {
          display: flex;
          flex-direction: column;
          gap: 0.7rem;
          padding: 1rem 1.15rem;
        }

        .mot-sample-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }

        .mot-sample-area {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .mot-sample-dots {
          display: inline-flex;
          gap: 4px;
          flex-shrink: 0;
        }

        .mot-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          border: 1px solid var(--border-color-hover);
          display: inline-block;
        }

        .mot-dot.filled {
          background-color: var(--accent-gold);
          border-color: var(--accent-gold);
        }

        .mot-sample-strat {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          margin: 0 1.15rem 0.9rem;
          padding: 0.6rem 0.85rem;
          border: 1.5px solid var(--ink);
          border-radius: 10px;
          background-color: var(--bg-primary);
          font-size: 0.78rem;
        }

        .mot-strat-name {
          font-family: var(--font-heading);
          font-weight: 700;
          color: var(--text-primary);
        }

        .mot-strat-sub {
          color: var(--text-secondary);
        }

        .mot-sample-foot {
          padding: 0.7rem 1.15rem 0.9rem;
          border-top: 1px solid var(--border-color);
          font-size: 0.7rem;
          line-height: 1.5;
          color: var(--text-secondary);
        }
      `}</style>
    </div>
  )
}
