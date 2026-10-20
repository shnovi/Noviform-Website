import React from 'react';
import { motion } from 'framer-motion';
import MotCard from './MotCard';

const heroContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const heroItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const motAreas = [
  { name: 'Operations', score: 3 },
  { name: 'Revenue', score: 2 },
  { name: 'Finance', score: 4 },
  { name: 'Customer experience', score: 2 },
  { name: 'People & knowledge', score: 3 },
  { name: 'Data & systems', score: 1 },
];

export default function Hero() {
  return (
    <motion.section className="hero-section" variants={heroContainerVariants} initial="hidden" animate="visible">
      <div className="hero-grid container">
        <div className="hero-content">
          <motion.div className="section-tag animate-tag hero-eyebrow" variants={heroItemVariants}>Less Theatre. More Outcomes.</motion.div>

          <motion.h1 className="hero-headline" variants={heroItemVariants}>
            The tools are switched on. The return isn&rsquo;t.{' '}
            <span className="gold-text">We close that gap.</span>
          </motion.h1>

          <motion.p className="hero-paragraph" variants={heroItemVariants}>
            Most organisations have switched on AI tools, bought an automation platform or run a pilot or
            two. Most have nothing measurable to show for it. The tools are not the problem. Nobody has decided what to use
            them on, what to fix first, or how to get a team to change the way it works. Noviform does the
            AI work, from finding the use case to building and running it, and the harder part that most
            people skip: getting it used, controlled and measured.
          </motion.p>

          <div className="hero-ctas">
            <a
              href="https://calendly.com/asheikh-noviform/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-hero-primary"
            >
              <span>Book a Call</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
              </svg>
            </a>
            <a href="#services" className="btn btn-hero-secondary">
              <span>Start with the AI MOT</span>
            </a>
          </div>

          <motion.p className="hero-proof" variants={heroItemVariants}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
            £3.85 back for every £1 invested, with Year 1 savings already delivered, on a UK university automation programme we lead today. Senior-led, measured, no slideware.
          </motion.p>

        </div>

        {/* Hero Right Visual Column: sample AI MOT scorecard */}
        <div className="hero-visual-wrapper reveal-on-scroll revealed">
          <MotCard
            areas={motAreas}
            footer="Illustrative. The 12-point check is the standard; the six areas are named in your sector's language."
          />
        </div>
      </div>

      <style jsx="true">{`
        .hero-section {
          position: relative;
          padding-top: 160px;
          padding-bottom: 80px;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        @media (max-width: 992px) {
          .hero-section {
            padding-top: 130px;
            padding-bottom: 60px;
          }
        }

        .hero-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 4rem;
          align-items: center;
        }

        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }

        .hero-eyebrow {
          border: 1px solid var(--border-color-hover);
          border-radius: 999px;
          padding: 0.45rem 1rem;
          color: var(--eyebrow);
        }

        .hero-headline {
          font-size: clamp(2.5rem, 4.8vw, 4rem);
          color: var(--text-primary);
          line-height: 1.05;
          letter-spacing: -0.02em;
          margin-bottom: 1.5rem;
        }

        .gold-text {
          color: var(--accent-gold);
        }

        .hero-paragraph {
          font-size: clamp(1.05rem, 1.3vw, 1.2rem);
          line-height: 1.7;
          margin-bottom: 2.5rem;
          max-width: 600px;
        }

        .hero-ctas {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .btn-hero-primary,
        .btn-hero-secondary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 1rem;
          padding: 0.95rem 2rem;
          border-radius: 999px;
          text-decoration: none;
          transition: var(--transition-fast);
        }

        .btn-hero-primary {
          background-color: var(--ink);
          color: var(--panel-dark-text);
        }

        .btn-hero-primary:hover {
          transform: translateY(-2px);
          background-color: hsl(220, 17%, 14%);
        }

        .btn-hero-secondary {
          border: 1px solid var(--ink);
          color: var(--text-primary);
        }

        .btn-hero-secondary:hover {
          transform: translateY(-2px);
          color: var(--accent-gold);
          border-color: var(--accent-gold);
        }

        .hero-proof {
          display: flex;
          align-items: flex-start;
          gap: 0.55rem;
          margin-top: 1.5rem;
          margin-bottom: 0;
          font-size: 0.9rem;
          line-height: 1.5;
          font-weight: 500;
          color: var(--text-secondary);
          max-width: 560px;
        }

        .hero-proof svg {
          flex-shrink: 0;
          margin-top: 0.15rem;
          color: var(--accent-gold);
        }

        .hero-visual-wrapper {
          display: flex;
          justify-content: center;
          position: relative;
        }

        .animate-tag {
          animation: slideDownFade 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes slideDownFade {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </motion.section>
  )
}
