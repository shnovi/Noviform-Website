import React, { useState, useEffect } from 'react'
import logoUrl from '../assets/noviform-logo-sm.webp'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  // Single cream theme: pin data-theme to light so any stored preference renders identically
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'light')
    try { localStorage.setItem('theme', 'light') } catch (e) { /* storage unavailable */ }
  }, [])

  // Scroll-spy: highlight the nav item for the section currently in view
  useEffect(() => {
    const ids = ['services', 'how-we-work', 'about', 'faq', 'contact']
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const navClass = (id) => `nav-link${activeSection === id ? ' active' : ''}`
  const mobileNavClass = (id) => `mobile-link${activeSection === id ? ' active' : ''}`
  const ariaCurrent = (id) => (activeSection === id ? 'true' : undefined)

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 40)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <a href="#main-content" className="skip-to-content">Skip to main content</a>
      <div className="header-container">
        {/* Brand Logo - Rebuilt to exactly match your attached corporate branding */}
        <a href="/" className="brand-logo" aria-label="Noviform, return to home">
          <img src={logoUrl} className="logo-svg" width="50" height="35" alt="Noviform Logo" />
          <span className="brand-text">
            NOVIFORM<span className="brand-sub">.ai</span>
          </span>
        </a>

        {/* Desktop Navigation matching original site tabs */}
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#services" className={navClass('services')} aria-current={ariaCurrent('services')}>Services</a>
          <a href="#how-we-work" className={navClass('how-we-work')} aria-current={ariaCurrent('how-we-work')}>How We Work</a>
          <a href="#about" className={navClass('about')} aria-current={ariaCurrent('about')}>About</a>
          <a href="#contact" className={navClass('contact')} aria-current={ariaCurrent('contact')}>Contact</a>
          <a 
            href="https://calendly.com/asheikh-noviform/30min" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="nav-link highlight-contact"
          >
            Book a Call
          </a>
        </nav>

        {/* Actions (Menu Switcher) */}
        <div className="header-actions">
          <button
            className={`mobile-menu-trigger ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        id="mobile-nav-drawer"
        className={`mobile-nav-drawer ${mobileMenuOpen ? 'active' : ''}`}
        aria-hidden={!mobileMenuOpen}
        inert={!mobileMenuOpen ? '' : undefined}
      >
        <nav className="mobile-nav" aria-label="Mobile navigation">
          <a href="#services" className={mobileNavClass('services')} aria-current={ariaCurrent('services')} onClick={() => setMobileMenuOpen(false)}>Services</a>
          <a href="#how-we-work" className={mobileNavClass('how-we-work')} aria-current={ariaCurrent('how-we-work')} onClick={() => setMobileMenuOpen(false)}>How We Work</a>
          <a href="#about" className={mobileNavClass('about')} aria-current={ariaCurrent('about')} onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="#contact" className={mobileNavClass('contact')} aria-current={ariaCurrent('contact')} onClick={() => setMobileMenuOpen(false)}>Contact</a>
          <a 
            href="https://calendly.com/asheikh-noviform/30min" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mobile-link btn-mobile-cta"
            onClick={() => setMobileMenuOpen(false)}
          >
            Book a Call
          </a>
        </nav>
      </div>

      {/* Inline styles for Header layout and scroll animation dynamics */}
      <style jsx="true">{`
        .site-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          background-color: transparent;
          border-bottom: 0;
          height: 72px;
          display: flex;
          align-items: center;
          transition: background-color 0.4s cubic-bezier(0.25, 0.8, 0.25, 1),
                      box-shadow 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
        }

        .site-header.scrolled {
          background-color: var(--glass-bg);
          backdrop-filter: blur(12px) saturate(180%);
          -webkit-backdrop-filter: blur(12px) saturate(180%);
          box-shadow:
            0 16px 34px rgba(14, 18, 25, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.28);
        }

        [data-theme="dark"] .site-header.scrolled {
          box-shadow:
            0 18px 42px rgba(0, 0, 0, 0.30),
            inset 0 1px 0 rgba(255, 255, 255, 0.06);
        }

        .header-container {
          width: 100%;
          max-width: var(--max-width);
          margin: 0 auto;
          padding: 0 2rem;
          padding-right: max(2rem, env(safe-area-inset-right));
          padding-left: max(2rem, env(safe-area-inset-left));
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        @media (max-width: 768px) {
          .header-container {
            padding: 0 1.25rem;
            padding-right: max(1.25rem, env(safe-area-inset-right));
            padding-left: max(1.25rem, env(safe-area-inset-left));
          }
        }

        .brand-logo {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          font-weight: 700;
          font-family: var(--font-heading);
          font-size: 1.35rem;
          letter-spacing: 0.05em;
        }

        .logo-svg {
          width: 50px;
          height: 35px;
          transition: var(--transition-smooth);
        }

        @media (max-width: 768px) {
          .logo-svg {
            width: 46px;
            height: 32px;
          }
        }

        @media (max-width: 420px) {
          .brand-logo {
            gap: 0.65rem;
          }

          .logo-svg {
            width: 42px;
            height: 29px;
          }
        }

        .brand-logo:hover .logo-svg {
          transform: translateY(-1px) scale(1.03);
        }

        .brand-text {
          color: var(--text-primary);
          font-weight: 700;
          letter-spacing: 0.08em;
          font-family: var(--font-heading);
        }

        .brand-sub {
          color: var(--accent-gold);
          font-weight: 500;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 2.25rem;
        }

        @media (max-width: 900px) {
          .desktop-nav {
            display: none;
          }
        }

        .nav-link {
          font-size: 0.9rem;
          font-weight: 500;
          letter-spacing: 0.02em;
          color: var(--text-secondary);
          position: relative;
          padding: 0.5rem 0;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1.5px;
          background-color: var(--accent-gold);
          transition: var(--transition-fast);
        }

        .nav-link:hover {
          color: var(--text-primary);
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .highlight-contact {
          color: var(--text-primary);
          border: 1px solid var(--border-color);
          padding: 0.5rem 1.25rem;
          border-radius: 50px;
          background-color: var(--bg-secondary);
          transition: var(--transition-smooth);
        }

        .highlight-contact:hover {
          border-color: var(--accent-gold);
          background-color: var(--text-primary);
          color: var(--bg-primary);
        }

        .highlight-contact::after {
          display: none;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .theme-toggle-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .theme-toggle-btn:hover {
          background-color: var(--text-primary);
          color: var(--bg-primary);
          transform: scale(1.05);
        }

        .mobile-menu-trigger {
          display: none;
          flex-direction: column;
          gap: 6px;
          width: 44px;
          height: 44px;
          padding: 12px;
          border-radius: 50%;
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          cursor: pointer;
          align-items: center;
          justify-content: center;
          transition: var(--transition-smooth);
        }

        .mobile-menu-trigger span {
          display: block;
          width: 20px;
          height: 2px;
          background-color: var(--text-primary);
          transition: var(--transition-fast);
        }

        .mobile-menu-trigger.open span:nth-child(1) {
          transform: translateY(8px) rotate(45deg);
        }

        .mobile-menu-trigger.open span:nth-child(2) {
          opacity: 0;
        }

        .mobile-menu-trigger.open span:nth-child(3) {
          transform: translateY(-8px) rotate(-45deg);
        }

        @media (max-width: 900px) {
          .mobile-menu-trigger {
            display: flex;
          }
        }

        .mobile-nav-drawer {
          position: fixed;
          top: 90px;
          left: 0;
          width: 100%;
          height: 0;
          background-color: var(--bg-primary);
          backdrop-filter: blur(10px) saturate(160%);
          -webkit-backdrop-filter: blur(10px) saturate(160%);
          border-bottom: 0;
          overflow: hidden;
          transition: var(--transition-smooth);
          z-index: 999;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .site-header.scrolled + .mobile-nav-drawer {
          top: 70px;
        }

        .mobile-nav-drawer.active {
          height: calc(100vh - 90px);
          box-shadow: 0 24px 48px rgba(14, 18, 25, 0.10);
        }

        [data-theme="dark"] .mobile-nav-drawer.active {
          box-shadow: 0 24px 52px rgba(0, 0, 0, 0.32);
        }

        .site-header.scrolled .mobile-nav-drawer.active {
          height: calc(100vh - 70px);
        }

        .mobile-nav {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2.5rem;
          width: 100%;
          padding: 2rem;
        }

        .mobile-link {
          font-size: 1.5rem;
          font-family: var(--font-heading);
          font-weight: 500;
          color: var(--text-secondary);
        }

        .mobile-link:hover {
          color: var(--text-primary);
        }

        .btn-mobile-cta {
          margin-top: 1rem;
          background-color: var(--text-primary);
          color: var(--bg-primary);
          padding: 0.8rem 2.5rem;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 600;
          text-align: center;
        }
      `}</style>
    </header>
  )
}
