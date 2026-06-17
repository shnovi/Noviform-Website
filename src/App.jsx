import React, { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Clients from './components/Clients'
import Products from './components/Products'
import Trust from './components/Trust'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import CookieBanner from './components/CookieBanner'
import ScrollProgress from './components/ScrollProgress'
import logoUrl from './assets/noviform-logo-sm.webp'

export default function App() {
  
  // Set up the global scroll reveal engine using an IntersectionObserver hook
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal-on-scroll')
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      revealElements.forEach(el => el.classList.add('revealed'))
      return
    }

    const observerOptions = {
      root: null,
      threshold: 0.10,
      rootMargin: '0px 0px -40px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
        }
      })
    }, observerOptions)

    revealElements.forEach(el => {
      observer.observe(el)
    })

    return () => {
      revealElements.forEach(el => {
        observer.unobserve(el)
      })
    }
  }, [])

  return (
    <div className="noviform-app">
      <ScrollProgress />

      {/* Dynamic Header */}
      <Header />
      <CookieBanner />

      <main id="main-content">
        {/* Hero Landing */}
        <Hero />

        {/* B2B Services (What you can buy) */}
        <Services />

        {/* Client logo strip */}
        <Clients />

        {/* How We Work Section */}
        <Products />

        {/* About / Brand Truths Section */}
        <Trust />

        {/* Frequently asked questions (AEO + buyer objections) */}
        <FAQ />

        {/* Contact engagement desk */}
        <Contact />
      </main>

      {/* Corporate B2B Footer */}
      <footer id="footer" role="contentinfo" className="site-footer relative-container content-section-deferred">
        <div className="container footer-grid">
          
          {/* Logo & Pitch */}
          <div className="footer-brand-col">
            <a href="/" className="footer-logo" aria-label="Noviform, return to home">
              <img src={logoUrl} width="28" height="28" alt="Noviform Logo" />
              <span>noviform<span className="brand-sub">.ai</span></span>
            </a>
            <p className="footer-pitch">
              Senior AI and automation consultancy for complex, controls heavy organisations. Clear scope. Measurable outcomes. Work that lands.
            </p>
            <p className="footer-meta">Noviform Ltd &middot; Company No. 16728474 &middot; London, United Kingdom</p>
          </div>

          {/* Nav Links Pillar 1 */}
          <div className="footer-links-col">
            <span className="footer-pillar-title">Quick Links</span>
            <a href="#services" className="footer-link">Services</a>
            <a href="#how-we-work" className="footer-link">How We Work</a>
            <a href="#about" className="footer-link">About</a>
            <a href="#faq" className="footer-link">FAQ</a>
            <a href="#contact" className="footer-link">Contact</a>
          </div>

          {/* Nav Links Pillar 2 */}
          <div className="footer-links-col">
            <span className="footer-pillar-title">Work With Us</span>
            <a href="https://calendly.com/asheikh-noviform/30min" target="_blank" rel="noopener noreferrer" className="footer-link">Book a Call</a>
            <a href="#services" className="footer-link">Our Services</a>
            <a href="mailto:hello@noviform.ai" className="footer-link">Send Enquiry</a>
          </div>

          {/* Contact Links */}
          <div className="footer-links-col">
            <span className="footer-pillar-title">Reach Us</span>
            <a href="mailto:hello@noviform.ai" className="footer-link email-highlight">hello@noviform.ai</a>
            <a href="https://www.linkedin.com/company/noviform/" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
          </div>

        </div>

        <div className="container footer-bottom-row">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} Noviform. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="/privacy/" className="bottom-link">Privacy Policy</a>
            <a href="mailto:hello@noviform.ai" className="bottom-link">hello@noviform.ai</a>
          </div>
        </div>

        <style jsx="true">{`
          .site-footer {
            background-color: var(--bg-primary);
            border-top: 1px solid var(--border-color);
            padding: 60px 0 32px 0;
            transition: background-color 0.5s ease, border-color 0.5s ease;
          }

          .footer-grid {
            display: grid;
            grid-template-columns: 1.5fr 1fr 1fr 1.25fr;
            gap: 4rem;
            margin-bottom: 50px;
          }

          @media (max-width: 992px) {
            .footer-grid {
              grid-template-columns: 1.5fr 1fr 1.25fr;
              gap: 3rem;
            }
          }

          @media (max-width: 768px) {
            .footer-grid {
              grid-template-columns: 1fr;
              gap: 2.25rem;
            }
          }

          .footer-brand-col {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
          }

          .footer-logo {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-family: var(--font-heading);
            font-weight: 700;
            font-size: 1.15rem;
            color: var(--text-primary);
            letter-spacing: -0.02em;
          }

          .brand-sub {
            color: var(--accent-gold);
          }

          .footer-pitch {
            font-size: 0.85rem;
            line-height: 1.6;
            color: var(--text-secondary);
            max-width: 320px;
          }

          .footer-meta {
            font-size: 0.78rem;
            color: var(--text-secondary);
            opacity: 0.85;
          }

          .footer-links-col {
            display: flex;
            flex-direction: column;
            gap: 0.85rem;
          }

          .footer-pillar-title {
            font-size: 0.75rem;
            font-weight: 600;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            color: var(--text-primary);
            margin-bottom: 0.5rem;
          }

          .footer-link {
            font-size: 0.85rem;
            color: var(--text-secondary);
            transition: var(--transition-fast);
            width: fit-content;
          }

          .footer-link:hover {
            color: var(--accent-gold);
            transform: translateX(2px);
          }

          .email-highlight {
            font-weight: 600;
            color: var(--text-primary);
            border-bottom: 1.5px solid var(--accent-gold);
            width: max-content;
            padding-bottom: 2px;
          }

          .email-highlight:hover {
            color: var(--accent-gold);
            transform: none;
          }

          .footer-bottom-row {
            border-top: 1px solid var(--border-color);
            padding-top: 30px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 2rem;
            flex-wrap: wrap;
          }

          @media (max-width: 768px) {
            .footer-bottom-row {
              flex-direction: column;
              text-align: center;
              gap: 1rem;
            }
          }

          .copyright-text {
            font-size: 0.75rem;
            color: var(--text-secondary);
          }

          .footer-bottom-links {
            display: flex;
            gap: 1.5rem;
          }

          @media (max-width: 480px) {
            .footer-bottom-links {
              flex-direction: column;
              gap: 0.75rem;
              align-items: center;
            }
          }

          .bottom-link {
            font-size: 0.75rem;
            color: var(--text-secondary);
            transition: var(--transition-fast);
          }

          .bottom-link:hover {
            color: var(--text-primary);
          }

          /* ---- Mobile footer readability (placed last so it wins on source order) ---- */
          @media (max-width: 768px) {
            /* Larger body copy reads comfortably on phones */
            .footer-pitch {
              font-size: 1rem;
              line-height: 1.65;
              max-width: none;
            }

            .footer-meta {
              font-size: 0.85rem;
            }

            /* Each link group gets a divider so the footer scans as clear sections */
            .footer-links-col {
              gap: 0.25rem;
              border-top: 1px solid var(--border-color);
              padding-top: 1.75rem;
            }

            .footer-pillar-title {
              font-size: 0.82rem;
              margin-bottom: 0.6rem;
            }

            /* Bigger text + >=44px thumb-friendly tap targets */
            .footer-link {
              font-size: 1rem;
              min-height: 44px;
              padding: 0.4rem 0;
              display: inline-flex;
              align-items: center;
            }

            .email-highlight {
              min-height: 44px;
              padding-top: 0.4rem;
            }

            .copyright-text {
              font-size: 0.8rem;
            }

            .bottom-link {
              font-size: 0.85rem;
              min-height: 44px;
              padding: 0.25rem 0.5rem;
              display: inline-flex;
              align-items: center;
            }
          }
        `}</style>
      </footer>
    </div>
  )
}
