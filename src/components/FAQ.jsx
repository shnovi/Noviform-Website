import React, { useState } from 'react'

// Keep these answers in sync with the FAQPage JSON-LD in index.html.
const faqs = [
  {
    q: 'What does Noviform do?',
    a: 'Noviform is a senior AI and automation consultancy. We help banks, insurers and other complex, controls-heavy organisations move from AI intent to adopted outcomes, covering strategy, operating model, delivery and managed operations, with the business case proven rather than assumed.'
  },
  {
    q: 'How is Noviform different from a big consultancy?',
    a: 'You work directly with the senior people who do the delivery, not a sales team or a junior bench. We keep scope tight, build adoption and controls in from the first conversation, and only extend work when it is earning its keep.'
  },
  {
    q: 'How fast can we see value?',
    a: 'Most engagements start as a short sprint of two to four weeks. Our 90-day accelerator compresses readiness, build and proof of value into a single quarter, so you have working automation and measured benefits inside three months.'
  },
  {
    q: 'Do you work in regulated or financial services?',
    a: 'Yes. Regulated, controls-heavy environments are where we do our best work. We treat risk, audit and compliance as design inputs from day one, across banking, insurance including the London Market, higher education and the third sector.'
  },
  {
    q: 'What happens after go-live?',
    a: 'We can run it for you through Managed AI Operations: keeping automations live and reliable, holding the guardrails as models change, tracking benefits against baseline and flagging issues before they bite.'
  },
  {
    q: 'Who actually does the work?',
    a: 'Senior practitioners. Founder Ahmed Sheikh and the senior team stay close to the work, unblocking decisions and delivering hands-on until it is shipped, measured and owned. We do not hand your account to junior consultants.'
  },
  {
    q: 'How do you price engagements?',
    a: 'Engagements are scoped to a clear outcome and timeline rather than open-ended day rates. Most begin with a fixed-scope sprint; ongoing leadership and managed operations are billed monthly. Book a call and we will give you a straight view on scope and cost.'
  }
]

export default function FAQ() {
  const [open, setOpen] = useState(0)
  const toggle = (i) => setOpen((prev) => (prev === i ? -1 : i))

  return (
    <section id="faq" className="faq-section relative-container">
      <div className="container">
        <div className="faq-header reveal-on-scroll">
          <span className="section-tag">Common Questions</span>
          <h2 className="section-title">Frequently asked questions</h2>
          <p className="section-desc faq-intro">
            Straight answers to what buyers ask us most. Still unsure? Book a call and ask directly.
          </p>
        </div>

        <div className="faq-list reveal-stagger">
          {faqs.map((item, i) => {
            const isOpen = open === i
            return (
              <div className="reveal-on-scroll" key={item.q}>
                <div className={`faq-item${isOpen ? ' is-open' : ''}`}>
                <h3 className="faq-question-heading">
                  <button
                    type="button"
                    className="faq-question"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                    id={`faq-question-${i}`}
                    onClick={() => toggle(i)}
                  >
                    <span>{item.q}</span>
                    <svg className="faq-chevron" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                </h3>
                <div
                  className="faq-answer"
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-question-${i}`}
                  aria-hidden={!isOpen}
                >
                  <div className="faq-answer-inner">
                    <p>{item.a}</p>
                  </div>
                </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <style jsx="true">{`
        .faq-section {
          padding: 80px 0;
          background-color: var(--bg-primary);
          transition: background-color 0.5s ease;
        }

        .faq-header {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 3rem;
        }

        .faq-intro {
          margin-bottom: 0;
        }

        .faq-list {
          max-width: 760px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .faq-item {
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-md);
          background-color: var(--bg-card);
          overflow: hidden;
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
        }

        .faq-item.is-open {
          border-color: var(--accent-gold);
          box-shadow: var(--glass-shadow);
        }

        .faq-question-heading {
          margin: 0;
          font-size: inherit;
          letter-spacing: normal;
        }

        .faq-question {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 1.35rem 1.5rem;
          background: transparent;
          cursor: pointer;
          text-align: left;
          font-family: var(--font-heading);
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--text-primary);
          transition: color 0.2s ease;
        }

        .faq-question:hover {
          color: var(--accent-gold);
          background-color: var(--accent-gold-glow);
        }

        .faq-chevron {
          flex-shrink: 0;
          color: var(--accent-gold);
          transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .faq-item.is-open .faq-chevron {
          transform: rotate(180deg);
        }

        /* Smooth open/close: animate the implicit grid row from 0fr to 1fr.
           No JS height measurement, no layout thrash — just transform-free
           reflow the browser handles cheaply. */
        .faq-answer {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.36s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .faq-item.is-open .faq-answer {
          grid-template-rows: 1fr;
        }

        .faq-answer-inner {
          overflow: hidden;
          min-height: 0;
        }

        .faq-answer p {
          margin: 0;
          padding: 0.25rem 1.5rem 1.5rem;
          font-size: 0.98rem;
          line-height: 1.65;
          color: var(--text-secondary);
          max-width: 64ch;
          opacity: 0;
          transform: translateY(-4px);
          transition: opacity 0.3s ease 0.04s, transform 0.3s cubic-bezier(0.22, 1, 0.36, 1) 0.04s;
        }

        .faq-item.is-open .faq-answer p {
          opacity: 1;
          transform: translateY(0);
        }

        @media (prefers-reduced-motion: reduce) {
          .faq-chevron,
          .faq-answer,
          .faq-answer p {
            transition: none;
          }
        }
      `}</style>
    </section>
  )
}
