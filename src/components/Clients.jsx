import React from 'react'

// Each logo file is paired to its real brand explicitly (verified against the
// image), not by index. The heading stays honest: these are organisations our
// consultants have delivered for, not Noviform's own client roster.
const logos = [
  { name: 'Pitcher Partners', src: '/assets/clients/nova1.png' },
  { name: 'Coles', src: '/assets/clients/nova2.png' },
  { name: 'Kiandra', src: '/assets/clients/nova3.png' },
  { name: 'Royal Australasian College of Surgeons', src: '/assets/clients/nova4.png' },
  { name: 'NETSOL Technologies', src: '/assets/clients/nova5.png' },
  { name: 'ME Bank', src: '/assets/clients/nova6.png' },
  { name: 'Philip Morris International', src: '/assets/clients/nova7.png' },
  { name: 'CNH Industrial', src: '/assets/clients/nova8.png' },
  { name: 'China Minsheng Bank', src: '/assets/clients/nova9.png' },
  { name: 'EY', src: '/assets/clients/nova10.png' },
  { name: 'MIT', src: '/assets/clients/nova11.png' },
  { name: 'UiPath', src: '/assets/clients/nova12.png' },
  { name: 'Victoria University', src: '/assets/clients/nova13.png' },
  { name: 'University of East London', src: '/assets/clients/nova14.png' },
  { name: 'RSA Insurance', src: '/assets/clients/nova15.png' },
  { name: 'Hampshire Trust Bank', src: '/assets/clients/nova16.png' },
  { name: 'Bupa', src: '/assets/clients/nova17.png' },
].map((logo) => ({
  ...logo,
  alt: logo.name,
  width: 281,
  height: 100,
}))

export default function Clients() {
  return (
    <section className="clients-section" aria-label="Organisations our consultants have worked with">
      <div className="container">
        <p className="clients-label">Our consultants are trusted by</p>
      </div>

      <div className="marquee-wrapper">
        <div className="marquee-track">
          {/* Duplicate for seamless loop */}
          {[...logos, ...logos].map((logo, idx) => (
            <div
              className="logo-item"
              key={idx}
              data-name={logo.name}
              title={logo.name}
              aria-label={idx < logos.length ? logo.name : undefined}
              aria-hidden={idx >= logos.length ? 'true' : undefined}
              tabIndex={idx < logos.length ? 0 : -1}
            >
              <img
                src={logo.src}
                alt={idx < logos.length ? logo.alt : ''}
                width={logo.width}
                height={logo.height}
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx="true">{`
        .clients-section {
          padding: 48px 0;
          background-color: var(--bg-secondary);
          border-top: 1px solid var(--border-color);
          border-bottom: 1px solid var(--border-color);
          overflow: hidden;
          transition: background-color 0.5s ease, border-color 0.5s ease;
        }

        .clients-label {
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--text-secondary);
          text-align: center;
          margin-bottom: 2rem;
        }

        .marquee-wrapper {
          width: 100%;
          overflow: hidden;
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 8%,
            black 92%,
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 8%,
            black 92%,
            transparent 100%
          );
        }

        .marquee-track {
          display: flex;
          align-items: center;
          gap: 1rem;
          width: max-content;
          animation: marquee-scroll 40s linear infinite;
        }

        .marquee-wrapper:hover .marquee-track,
        .marquee-wrapper:focus-within .marquee-track {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
            flex-wrap: wrap;
            justify-content: center;
            width: 100%;
            padding: 0 2rem;
          }
        }

        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        .logo-item {
          flex-shrink: 0;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 176px;
          height: 76px;
          padding: 0.9rem 1.2rem;
          border-radius: var(--border-radius-md);
          background-color: rgba(255, 255, 255, 0.92);
          border: 1px solid rgba(14, 18, 25, 0.08);
          box-shadow: 0 10px 26px rgba(14, 18, 25, 0.05);
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        }

        [data-theme="dark"] .logo-item {
          background-color: rgba(255, 255, 255, 0.90);
          border-color: rgba(255, 255, 255, 0.10);
          box-shadow: 0 14px 30px rgba(0, 0, 0, 0.16);
        }

        .logo-item img {
          max-width: 138px;
          max-height: 44px;
          width: 100%;
          height: auto;
          object-fit: contain;
          opacity: 0.9;
          filter: grayscale(100%) contrast(1.18);
          image-rendering: auto;
          transform: translateZ(0);
          transition: opacity 0.25s ease, filter 0.25s ease;
        }

        .logo-item::after {
          content: attr(data-name);
          position: absolute;
          left: 50%;
          bottom: calc(100% + 0.65rem);
          transform: translate(-50%, 6px);
          min-width: max-content;
          max-width: 220px;
          padding: 0.45rem 0.7rem;
          border-radius: 999px;
          background-color: var(--text-primary);
          color: var(--bg-primary);
          box-shadow: var(--glass-shadow);
          font-size: 0.72rem;
          font-weight: 700;
          line-height: 1.2;
          text-align: center;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.2s ease, transform 0.2s ease;
          z-index: 4;
        }

        .logo-item:hover,
        .logo-item:focus-within {
          transform: translateY(-2px);
          border-color: var(--accent-gold);
          box-shadow: 0 16px 34px rgba(14, 18, 25, 0.10);
        }

        .logo-item:hover img,
        .logo-item:focus-within img {
          opacity: 1;
          filter: grayscale(100%) contrast(1.28);
        }

        .logo-item:hover::after,
        .logo-item:focus-within::after {
          opacity: 1;
          transform: translate(-50%, 0);
        }
      `}</style>
    </section>
  )
}
