import React, { useState, useEffect } from 'react'

// Values stored in localStorage under this key:
//   'accepted': user accepted optional cookies
//   'declined': user declined optional cookies
//   null/absent: no decision yet (show banner)
export const CONSENT_KEY = 'noviform-cookie-consent'

// Usage:
//   const { consent, accept, decline } = useCookieConsent()
//
// To load analytics when accepted, add your init call inside accept() below.
// Example for Plausible (no cookies, no consent needed, just drop the script):
//   <script defer data-domain="noviform.ai" src="https://plausible.io/js/script.js" />
//
// Example for GA4 (needs consent, call window.gtag inside accept()):
//   accept() → window.gtag('consent', 'update', { analytics_storage: 'granted' })
export function useCookieConsent() {
  const [consent, setConsent] = useState(() =>
    typeof window !== 'undefined' ? localStorage.getItem(CONSENT_KEY) : null
  )

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted')
    setConsent('accepted')
    // PLUG IN ANALYTICS HERE
    // Plausible: no action needed, just add the script tag to index.html
    // GA4 example:
    //   if (window.gtag) window.gtag('consent', 'update', { analytics_storage: 'granted' })
  }

  const decline = () => {
    localStorage.setItem(CONSENT_KEY, 'declined')
    setConsent('declined')
    // ANALYTICS BLOCKED
    // If using GA4, ensure gtag consent default is 'denied' in index.html
    // before the GA script loads. This component declining = no change needed.
  }

  const reset = () => {
    localStorage.removeItem(CONSENT_KEY)
    setConsent(null)
  }

  return { consent, accept, decline, reset }
}

export default function CookieBanner() {
  const { consent, accept, decline } = useCookieConsent()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Small delay avoids a banner flash on fast connections
    const timer = setTimeout(() => {
      if (!localStorage.getItem(CONSENT_KEY)) setVisible(true)
    }, 800)
    return () => clearTimeout(timer)
  }, [])

  // Hide once decision made or not yet shown
  if (!visible || consent) return null

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Cookie consent"
      aria-live="polite"
      className="cookie-banner"
    >
      <div className="cookie-inner">
        {/* Icon */}
        <span className="cookie-icon" aria-hidden="true">🍪</span>

        {/* Copy */}
        <div className="cookie-text">
          <p className="cookie-heading">We use cookies</p>
          <p className="cookie-desc">
            Essential cookies keep the site working; analytics cookies (with your
            consent) help us improve it.{' '}
            <a href="/privacy/" className="cookie-link">Privacy Policy</a>.
          </p>
        </div>

        {/* Actions use equal visual weight for UK ICO requirements */}
        <div className="cookie-actions">
          <button
            className="cookie-btn cookie-btn-decline"
            onClick={decline}
            aria-label="Decline optional cookies"
          >
            Decline
          </button>
          <button
            className="cookie-btn cookie-btn-accept"
            onClick={accept}
            aria-label="Accept all cookies"
          >
            Accept
          </button>
        </div>
      </div>

      <style jsx="true">{`
        /* Slim bar docked flush to the very bottom so it never covers the
           hero CTAs on arrival (desktop or mobile). */
        .cookie-banner {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          width: 100%;
          z-index: 9999;
          background-color: var(--glass-bg);
          border-top: 1px solid var(--border-color);
          box-shadow: 0 -8px 30px rgba(0, 0, 0, 0.12);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          padding-bottom: env(safe-area-inset-bottom);
          animation: cookieSlideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes cookieSlideUp {
          from {
            opacity: 0;
            transform: translateY(100%);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .cookie-inner {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          width: 100%;
          max-width: var(--max-width);
          margin: 0 auto;
          padding: 0.9rem 2rem;
        }

        @media (max-width: 680px) {
          .cookie-inner {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.7rem;
            padding: 0.85rem 1.25rem;
          }
          .cookie-icon {
            display: none;
          }
          .cookie-heading {
            margin-bottom: 0.15rem;
          }
        }

        .cookie-icon {
          font-size: 1.5rem;
          flex-shrink: 0;
          line-height: 1;
        }

        .cookie-text {
          flex: 1;
          min-width: 0;
        }

        .cookie-heading {
          font-family: var(--font-heading);
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.3rem;
        }

        .cookie-desc {
          font-size: 0.82rem;
          line-height: 1.55;
          color: var(--text-secondary);
          margin: 0;
        }

        .cookie-link {
          color: var(--accent-gold);
          text-decoration: underline;
          text-underline-offset: 2px;
          transition: var(--transition-fast);
        }

        .cookie-link:hover {
          opacity: 0.8;
        }

        .cookie-actions {
          display: flex;
          gap: 0.75rem;
          flex-shrink: 0;
        }

        @media (max-width: 680px) {
          .cookie-actions {
            width: 100%;
          }
          .cookie-btn {
            flex: 1;
          }
        }

        /* Both buttons same height and padding because ICO requires equal prominence */
        .cookie-btn {
          padding: 0.6rem 1.4rem;
          border-radius: 100px;
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition-fast);
          white-space: nowrap;
          font-family: var(--font-body);
        }

        .cookie-btn-decline {
          background: transparent;
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
        }

        .cookie-btn-decline:hover {
          border-color: var(--border-color-hover);
          color: var(--text-primary);
          background-color: var(--bg-secondary);
        }

        .cookie-btn-accept {
          background-color: var(--accent-gold);
          border: 1px solid var(--accent-gold);
          color: #fff;
        }

        .cookie-btn-accept:hover {
          opacity: 0.88;
          transform: translateY(-1px);
        }

        .cookie-btn:focus-visible {
          outline: 2px solid var(--accent-gold);
          outline-offset: 2px;
        }
      `}</style>
    </div>
  )
}
