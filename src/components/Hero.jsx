import React from 'react';
import { motion } from 'framer-motion';
import heroAgenticAi from '../assets/hero-agentic-ai.webp';

const heroContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const heroItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Hero() {
  return (
    <motion.section className="hero-section" variants={heroContainerVariants} initial="hidden" animate="visible">
      <div className="hero-aurora" aria-hidden="true">
        <span className="aurora-gold"></span>
        <span className="aurora-teal"></span>
      </div>
      <div className="hero-grid container">
        <div className="hero-content">
          <motion.div className="section-tag animate-tag" variants={heroItemVariants}>AI &amp; Automation for Complex Organisations</motion.div>

          <motion.h1 className="hero-headline" variants={heroItemVariants}>
            Less Theatre. <br />
            <span className="gold-text">More Outcomes.</span>
          </motion.h1>

          <motion.p className="hero-paragraph" variants={heroItemVariants}>
            Noviform helps organisations get provable outcomes from AI, automation and change.
            We work best where the environment is complex, the controls matter and the status deck is no
            longer enough. Clear scope, senior delivery and adoption built in from the first conversation.
          </motion.p>

          <div className="hero-ctas">
            <a
              href="https://calendly.com/asheikh-noviform/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <span>Book a Call</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
              </svg>
            </a>
            <a href="#services" className="btn btn-secondary">
              <span>See Services</span>
            </a>
          </div>

          <motion.p className="hero-proof" variants={heroItemVariants}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
            Senior-led delivery for banks, insurers and universities — outcomes you can measure, not slideware.
          </motion.p>

        </div>

        {/* Hero Right Visual Column */}
        <div className="hero-visual-wrapper reveal-on-scroll revealed">
          <div className="image-frame-gold">
            <img
              src={heroAgenticAi}
              alt="Noviform enterprise AI strategy and automation consulting visualisation for financial institutions"
              className="hero-main-image"
              width="896"
              height="1200"
              fetchpriority="high"
              decoding="async"
            />
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .hero-section {
          position: relative;
          padding-top: 160px;
          padding-bottom: 100px;
          min-height: 100vh;
          display: flex;
          align-items: center;
          background: var(--gradient-hero);
          overflow: hidden;
        }

        .hero-grid {
          position: relative;
          z-index: 1;
        }

        @media (max-width: 992px) {
          .hero-section {
            padding-top: 130px;
            padding-bottom: 60px;
          }
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 4rem;
          align-items: center;
        }

        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 3.5rem;
          }
        }

        .hero-headline {
          font-size: clamp(2.8rem, 5.5vw, 4.5rem);
          color: var(--text-primary);
          line-height: 1.1;
          margin-bottom: 1.5rem;
        }

        .gold-text {
          background: linear-gradient(135deg, var(--accent-gold) 0%, hsl(35, 90%, 65%) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-paragraph {
          font-size: clamp(1.05rem, 1.3vw, 1.25rem);
          line-height: 1.7;
          margin-bottom: 2.5rem;
          max-width: 620px;
        }

        .hero-ctas {
          display: flex;
          gap: 1.25rem;
          margin-bottom: 0;
          flex-wrap: wrap;
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
          max-width: 480px;
        }

        .hero-proof svg {
          flex-shrink: 0;
          margin-top: 0.15rem;
          color: var(--accent-teal);
        }

        .hero-visual-wrapper {
          display: flex;
          justify-content: center;
          position: relative;
        }

        .image-frame-gold {
          position: relative;
          border-radius: var(--border-radius-xl);
          padding: 12px;
          background: linear-gradient(135deg, var(--border-color) 0%, var(--accent-gold-glow) 100%);
          border: 1px solid var(--border-color);
          box-shadow: var(--glass-shadow), 0 20px 50px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease;
          overflow: hidden;
          will-change: transform;
          max-width: 480px;
          width: 100%;
          aspect-ratio: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-main-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: calc(var(--border-radius-xl) - 8px);
          transition: transform 0.3s ease;
        }

        .image-frame-gold:hover {
          transform: scale(1.05);
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
