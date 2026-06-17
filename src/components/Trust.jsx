import React from 'react'
import founderPhoto from '../assets/Ahmed_Sheikh.jpg'

export default function Trust() {
  const brandTruths = [
    {
      title: "Outcomes over optics",
      detail: "We do not sell transformation theatre. We deliver work you can point to, through a metric, a risk reduction or a real change in behaviour."
    },
    {
      title: "Clarity is a delivery tool",
      detail: "Clear priorities beat big plans. We simplify scope, ownership and trade offs so decisions happen earlier."
    },
    {
      title: "Adoption is the finish line",
      detail: "If users do not adopt it, it did not land. We design change around the people who have to use it."
    },
    {
      title: "Controls are design inputs",
      detail: "Risk, audit and compliance are not enemies of pace. Build them in early and delivery becomes safer and cleaner."
    },
    {
      title: "Respect capacity",
      detail: "Change has to fit real teams, real bandwidth, real politics and real deadlines. Overloaded teams do not adopt more work."
    },
    {
      title: "Stay close to the work",
      detail: "We get hands on, unblock decisions and stay close until the work is shipped, measured and owned."
    }
  ]

  const sectors = [
    "Banking and financial services",
    "Insurance, including the London Market and personal lines",
    "Higher education",
    "Charities and the third sector"
  ]

  return (
    <section id="about" className="trust-section relative-container">
      <div className="container">
        <div className="trust-header reveal-on-scroll">
          <span className="section-tag">What We Stand For</span>
          <h2 className="section-title">Brand Truths</h2>
        </div>

        <div className="truths-grid reveal-stagger">
          {brandTruths.map((truth, idx) => (
            <article key={truth.title} className="card-glass truth-card reveal-on-scroll">
              <div className="truth-card-header">
                <span className="truth-num">0{idx + 1}</span>
                <h3 className="truth-title">{truth.title}</h3>
              </div>
              <p className="truth-detail">{truth.detail}</p>
            </article>
          ))}
        </div>

        <div className="where-grid reveal-on-scroll">
          <div>
            <span className="section-tag">Where We Deliver</span>
            <h3 className="where-title">We Work Where AI Is Hardest to Land</h3>
            <p className="where-desc">Most AI work goes hunting for easy wins. We are built for the opposite. The places where governance, controls and competing priorities stall most AI programmes are exactly where the value is locked up. That is the work we want.</p>
          </div>
          <div className="sector-list">
            {sectors.map((sector) => (
              <div className="sector-item" key={sector}>
                <span aria-hidden="true">✓</span>
                <p>{sector}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="founder-note card-glass reveal-on-scroll">
          <div className="founder-quote-col">
            <blockquote className="quote-text">
              <p>Boards do not need more excitement about AI. They need to know it works, who owns it, and what it actually saved. Proving that is our job, not impressing you.</p>
            </blockquote>
            <div className="quote-author-meta">
              <cite className="author-name">Ahmed Sheikh</cite>
              <span className="author-title">Founder, Noviform</span>
              <a href="https://www.linkedin.com/in/ahmedsheikh1/" target="_blank" rel="noopener noreferrer" className="author-link">Follow on LinkedIn</a>
            </div>
          </div>
          <div className="founder-photo-col">
            <img src={founderPhoto} alt="Ahmed Sheikh, Founder of Noviform" className="founder-photo" />
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .trust-section {
          padding: 80px 0 0 0;
          background-color: var(--bg-secondary);
          transition: background-color 0.5s ease;
        }

        .trust-header {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 4.5rem;
        }

        .truths-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-bottom: 5rem;
        }

        @media (max-width: 992px) {
          .truths-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }
        }

        @media (max-width: 600px) {
          .truths-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }

        .truth-card {
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          min-height: 240px;
        }

        .truth-card-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.25rem;
        }

        .truth-num {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.2rem;
          color: var(--accent-gold);
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .truth-title {
          font-size: 1.2rem;
          color: var(--text-primary);
        }

        .truth-detail {
          font-size: 0.9rem;
          line-height: 1.6;
          color: var(--text-secondary);
        }

        .where-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
          border-top: 1px solid var(--border-color);
          padding-top: 4rem;
          margin-bottom: 5rem;
        }

        @media (max-width: 900px) {
          .where-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }

        .where-title {
          color: var(--text-primary);
          font-size: clamp(1.6rem, 2.4vw, 2.25rem);
          line-height: 1.2;
        }

        .where-desc {
          margin-top: 1.25rem;
          font-size: 1rem;
          line-height: 1.7;
          color: var(--text-secondary);
          max-width: 480px;
        }

        .sector-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .sector-item {
          display: flex;
          gap: 0.85rem;
          align-items: flex-start;
          padding: 1rem 1.25rem;
          border-radius: var(--border-radius-md);
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
        }

        .sector-item span {
          color: var(--accent-teal);
          font-weight: 700;
        }

        .sector-item p {
          color: var(--text-primary);
          font-size: 0.95rem;
        }

        .founder-note {
          padding: clamp(1.75rem, 4vw, 3rem);
          max-width: 1000px;
          margin: 0 auto;
          position: relative;
          overflow: hidden;
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: clamp(1.5rem, 4vw, 3rem);
          align-items: center;
          background:
            radial-gradient(circle at 12% 14%, var(--accent-gold-glow), transparent 32%),
            var(--bg-card);
        }

        @media (max-width: 760px) {
          .founder-note {
            grid-template-columns: 1fr;
            text-align: center;
            padding: 2.25rem 1.5rem;
          }
        }

        .founder-quote-col {
          position: relative;
          z-index: 2;
        }

        .quote-text {
          margin: 0 0 1.75rem;
          padding-top: 2.4rem;
          font-size: clamp(1.2rem, 2.1vw, 1.5rem);
          line-height: 1.6;
          color: var(--text-primary);
          font-style: italic;
          font-weight: 500;
          position: relative;
        }

        .quote-text::before {
          content: "“";
          font-family: var(--font-heading);
          font-size: 4rem;
          font-weight: 700;
          line-height: 1;
          color: var(--accent-gold);
          opacity: 0.4;
          position: absolute;
          top: -0.5rem;
          left: -0.3rem;
        }

        .quote-author-meta {
          border-top: 1px solid var(--border-color);
          padding-top: 1.3rem;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .author-name {
          font-weight: 700;
          font-size: 1rem;
          color: var(--text-primary);
          font-style: normal;
        }

        .author-title {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .author-link {
          font-size: 0.85rem;
          color: var(--accent-gold);
          margin-top: 0.4rem;
          text-decoration: none;
          width: fit-content;
        }

        .founder-photo-col {
          position: relative;
          z-index: 2;
          display: flex;
          justify-content: center;
        }

        .founder-photo {
          width: 100%;
          max-width: 300px;
          aspect-ratio: 4 / 5;
          object-fit: cover;
          object-position: center 20%;
          border-radius: var(--border-radius-md);
          border: 1px solid var(--border-color);
          filter: grayscale(15%) contrast(1.02) brightness(1.05);
        }

        @media (max-width: 760px) {
          .quote-author-meta {
            align-items: center;
          }
          .author-link {
            margin-left: auto;
            margin-right: auto;
          }
          .quote-text {
            padding-top: 2.6rem;
          }
          .quote-text::before {
            left: 50%;
            transform: translateX(-50%);
          }
          .founder-photo {
            max-width: 240px;
          }
        }
      `}</style>
    </section>
  )
}
