import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CookieBanner from '../components/CookieBanner'
import MotCard from '../components/MotCard'
import { sectors } from '../sectors/index.js'

const BOOK = 'https://calendly.com/asheikh-noviform/30min'

const Tick = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
)

// One template for all four sector pages, driven by src/sectors/*.js.
// Rendered to static HTML at build time (tools/prerender.mjs) and hydrated on the client,
// so the full copy is in the HTML for search engines. No reveal-on-scroll classes here:
// the page must be fully visible before any JavaScript runs.
export default function SectorPage({ sector }) {
  const s = sector

  return (
    <div className="noviform-app sector-page">
      <Header />
      <CookieBanner />

      <main id="main-content">
        <div className="container">
          <nav className="sp-crumb" aria-label="Breadcrumb">
            <a href="/">Home</a> <span aria-hidden="true">›</span> <a href="/#sectors">Sectors</a> <span aria-hidden="true">›</span> <span aria-current="page">{s.navLabel}</span>
          </nav>

          {/* Hero */}
          <section className="sp-hero">
            <div>
              <span className="sp-eyebrow">{s.hero.eyebrow}</span>
              <h1 className="sp-h1">{s.hero.h1} <span className="sp-gold">{s.hero.h1Gold}</span></h1>
              <p className="sp-lead">{s.hero.intro}</p>
              <div className="sp-ctas">
                <a href={BOOK} target="_blank" rel="noopener noreferrer" className="sp-btn sp-btn-ink">
                  {s.hero.primary}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                </a>
                <a href="#help" className="sp-btn sp-btn-line">{s.hero.secondary}</a>
              </div>
              <p className="sp-proof"><Tick />{s.hero.proof}</p>
            </div>
            <div className="sp-hero-visual">
              <MotCard title={s.mot.title} areas={s.mot.areas} footer={s.mot.footer} />
            </div>
          </section>

          {/* Sector switcher */}
          <nav className="sp-deck" aria-label="Sectors">
            <div className="sp-deck-label">Select<br />sector</div>
            {sectors.map((x) => (
              <a key={x.slug} href={`/${x.slug}/`} className={`sp-key${x.slug === s.slug ? ' on' : ''}`} aria-current={x.slug === s.slug ? 'page' : undefined}>
                <small>{x.num}</small><b>{x.navLabel}</b>
              </a>
            ))}
          </nav>

          {/* The problem */}
          <section className="sp-sec">
            <p className="sp-tag">The problem</p>
            <h2 className="sp-h2">{s.problem.heading}</h2>
            {s.problem.stats && (
              <>
                <div className="sp-bigstats">
                  {s.problem.stats.map((st) => (
                    <div className="sp-bs" key={st.l}><b>{st.v}</b><span>{st.l}</span></div>
                  ))}
                </div>
                <p className="sp-src">{s.problem.statsSource} {s.problem.statsSourceHref && <a href={s.problem.statsSourceHref} target="_blank" rel="noopener noreferrer">Charity Digital Skills Report 2026</a>}</p>
              </>
            )}
            <div className="sp-body">
              {s.problem.paras.map((p) => <p key={p}>{p}</p>)}
            </div>
            {s.problem.chips && (
              <div className="sp-chips" aria-label="Existing regimes that apply to AI">
                {s.problem.chips.map((c) => <span className="sp-chip" key={c}>{c}</span>)}
              </div>
            )}
            {s.problem.paras2 && (
              <div className="sp-body">
                {s.problem.paras2.map((p) => <p key={p}>{p}</p>)}
              </div>
            )}
            <div className={`sp-cards${s.problem.cards.length === 3 ? ' three' : ''}`}>
              {s.problem.cards.map((c, i) => (
                <div className="sp-card" key={c.title}>
                  <span className="sp-num">0{i + 1}</span>
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                </div>
              ))}
            </div>
            {s.problem.closing && <p className="sp-closing">{s.problem.closing}</p>}
            {s.problem.quote && (
              <figure className="sp-quote">
                <span className="sp-qm" aria-hidden="true">&ldquo;</span>
                <div>
                  <blockquote><p>{s.problem.quote.text}</p></blockquote>
                  <figcaption>{s.problem.quote.by}</figcaption>
                </div>
              </figure>
            )}
          </section>

          {/* How we help */}
          <section className="sp-sec" id="help">
            <p className="sp-tag">How we help</p>
            <h2 className="sp-h2">{s.help.heading}</h2>
            <p className="sp-body" style={{ margin: 0 }}>{s.help.intro}</p>
            {s.help.routes && (
              <div className="sp-path" aria-label="Common starting routes">
                {s.help.routes.map((r) => (
                  <div className="sp-step" key={r.label}><small>{r.label}</small><b>{r.value}</b></div>
                ))}
              </div>
            )}
            <div className="sp-mods">
              <div className="sp-mrow head" aria-hidden="true"><span>Module</span><span>What it does</span><span>You walk away with</span></div>
              {s.help.modules.map((m) => (
                <div className="sp-mrow" key={m.name}>
                  <div>
                    <h3>{m.name}</h3>
                    {m.chip && <span className="sp-mchip">{m.chip}</span>}
                  </div>
                  <div><span className="sp-mlabel">What it does</span><p>{m.does}</p></div>
                  <div><span className="sp-mlabel">You walk away with</span><p className="sp-out">{m.get}</p></div>
                </div>
              ))}
            </div>
            <p className="sp-under"><Tick />{s.help.under}</p>

            {s.help.band && (
              <div className="sp-band">
                <b>{s.help.band.title}</b>
                <p>{s.help.band.text}</p>
              </div>
            )}

            {s.help.rules && (
              <div className="sp-rules">
                <div>
                  <h3>{s.help.rules.title}</h3>
                  <p>{s.help.rules.intro}</p>
                </div>
                <div className="sp-rlist">
                  {s.help.rules.items.map((r) => (
                    <div className={`sp-rule${r.hot ? ' hot' : ''}`} key={r.label}>
                      <small>{r.label}</small>
                      <p>{r.text}</p>
                      <b>{r.verdict}</b>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>

          {/* Controls */}
          <section className="sp-sec">
            <div className="sp-ctrl">
              <p className="sp-tag">Controls are design inputs</p>
              <h2 className="sp-h2">{s.controls.heading}</h2>
              {s.controls.intro && <p className="sp-ctrl-intro">{s.controls.intro}</p>}
              <div className="sp-crows">
                {s.controls.rows.map((r) => (
                  <div className="sp-crow" key={r.k}><b>{r.k}</b><span>{r.v}</span></div>
                ))}
              </div>
              <div className="sp-bound"><b>Our boundary, stated plainly.</b> {s.controls.boundary}</div>
            </div>
          </section>

          {/* Experience */}
          <section className="sp-sec">
            <p className="sp-tag">Experience</p>
            <h2 className="sp-h2">{s.experience.heading}</h2>
            {s.experience.intro && <p className="sp-body" style={{ margin: 0 }}>{s.experience.intro}</p>}
            <div className={`sp-xp${s.experience.cards.length === 1 ? ' one' : ''}`}>
              {s.experience.cards.map((c) => (
                <div className="sp-xcard" key={c.title}>
                  <span className="sp-who">{c.who}</span>
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                  {c.stats && (
                    <div className="sp-stats">
                      {c.stats.map((st) => (
                        <div className="sp-stat" key={st.l}><b>{st.v}</b><span>{st.l}</span></div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            {s.experience.under && <p className="sp-under"><Tick />{s.experience.under}</p>}
            {s.experience.footnote && <p className="sp-fn">{s.experience.footnote}</p>}
          </section>

          {/* FAQ */}
          <section className="sp-sec">
            <p className="sp-tag">{s.navLabel} FAQ</p>
            <h2 className="sp-h2">Questions {s.slug === 'charities' ? 'charities' : s.slug === 'higher-education' ? 'universities' : s.slug === 'financial-services' ? 'banks and lenders' : 'insurers'} ask us.</h2>
            <div className="sp-faq">
              {s.faq.map((f, i) => (
                <details key={f.q} open={i === 0 ? true : undefined}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* Closing CTA */}
          <section className="sp-cta">
            <div>
              <h2>{s.cta.heading}</h2>
              <p>{s.cta.body}</p>
            </div>
            <div className="sp-ctas col">
              <a href={BOOK} target="_blank" rel="noopener noreferrer" className="sp-btn sp-btn-ink">{s.cta.primary}</a>
              <a href="/#contact" className="sp-btn sp-btn-line">{s.cta.secondary}</a>
            </div>
          </section>
        </div>
      </main>

      <Footer />

      <style jsx="true">{`
        .sector-page main { padding-top: 96px; }
        .sp-crumb { font-size: 0.82rem; color: var(--text-secondary); margin-bottom: 0.5rem; }
        .sp-crumb a { color: var(--text-secondary); text-decoration: none; }
        .sp-crumb a:hover { color: var(--accent-gold); }

        .sp-hero { display: grid; grid-template-columns: 1.25fr 0.75fr; gap: 3.5rem; align-items: center; padding: 2.5rem 0 4rem; }
        .sp-eyebrow { display: inline-block; border: 1px solid var(--border-color-hover); border-radius: 999px; padding: 0.4rem 0.9rem; font-size: 0.75rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: var(--eyebrow); }
        .sp-h1 { font-size: clamp(2.3rem, 4.4vw, 3.6rem); line-height: 1.06; letter-spacing: -0.02em; margin: 1.4rem 0 1.4rem; font-weight: 700; color: var(--text-primary); }
        .sp-gold { color: var(--accent-gold); }
        .sp-lead { font-size: clamp(1.05rem, 1.3vw, 1.15rem); line-height: 1.7; color: var(--text-secondary); max-width: 620px; margin: 0 0 2rem; }
        .sp-ctas { display: flex; gap: 0.9rem; flex-wrap: wrap; }
        .sp-ctas.col { flex-direction: column; align-items: stretch; }
        .sp-btn { display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem; min-height: 48px; padding: 0 1.6rem; border-radius: 999px; font-family: var(--font-heading); font-weight: 600; font-size: 0.98rem; text-decoration: none; transition: var(--transition-fast); }
        .sp-btn-ink { background-color: var(--ink); color: var(--panel-dark-text); }
        .sp-btn-ink:hover { transform: translateY(-2px); color: var(--accent-gold-bright); }
        .sp-btn-line { border: 1.5px solid var(--ink); color: var(--text-primary); }
        .sp-btn-line:hover { transform: translateY(-2px); color: var(--accent-gold); border-color: var(--accent-gold); }
        .sp-proof { display: flex; gap: 0.6rem; margin: 1.5rem 0 0; font-size: 0.9rem; font-weight: 500; color: var(--text-secondary); max-width: 560px; line-height: 1.5; }
        .sp-proof svg, .sp-under svg { flex-shrink: 0; margin-top: 0.2rem; color: var(--accent-gold); }
        .sp-hero-visual { display: flex; justify-content: center; }

        .sp-deck { background-color: var(--panel-dark); border-radius: 18px; padding: 1.1rem; display: grid; grid-template-columns: auto repeat(4, minmax(0, 1fr)); gap: 0.75rem; align-items: stretch; }
        .sp-deck-label { color: var(--panel-dark-muted); font-size: 0.68rem; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; display: flex; align-items: center; padding: 0 0.6rem 0 0.4rem; line-height: 1.4; }
        .sp-key { display: flex; flex-direction: column; gap: 0.2rem; justify-content: center; min-height: 64px; padding: 0.6rem 1rem; border-radius: 10px; background-color: #1C1F26; border: 1px solid #2E323B; color: var(--panel-dark-text); text-decoration: none; box-shadow: 0 4px 0 #000; transition: var(--transition-fast); }
        .sp-key:hover { color: var(--accent-gold-bright); transform: translateY(-1px); }
        .sp-key small { font-size: 0.68rem; color: var(--panel-dark-muted); letter-spacing: 0.12em; }
        .sp-key b { font-family: var(--font-heading); font-size: 0.95rem; font-weight: 600; }
        .sp-key.on { background-color: var(--accent-gold-bright); color: var(--ink); border-color: var(--accent-gold-bright); box-shadow: 0 1px 0 #000; transform: translateY(3px); }
        .sp-key.on small { color: var(--text-secondary); }

        .sp-sec { padding: 6rem 0 0; }
        .sp-tag { font-size: 0.75rem; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; color: var(--eyebrow); margin: 0 0 0.9rem; }
        .sp-h2 { font-size: clamp(1.9rem, 3vw, 2.5rem); line-height: 1.12; letter-spacing: -0.015em; margin: 0 0 1.25rem; font-weight: 700; max-width: 820px; color: var(--text-primary); }
        .sp-body { max-width: 760px; color: var(--text-primary); }
        .sp-body p { margin: 0 0 1rem; }
        .sp-closing { max-width: 760px; margin: 1.75rem 0 0; font-size: 1.1rem; font-weight: 500; }

        .sp-bigstats { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.25rem; margin: 1.5rem 0 0; max-width: 760px; }
        .sp-bs { border: 2px solid var(--ink); border-radius: 16px; background-color: var(--bg-card); padding: 1.4rem 1.6rem; box-shadow: var(--glass-shadow); }
        .sp-bs b { display: block; font-family: var(--font-heading); font-size: 3rem; line-height: 1; color: var(--accent-gold); font-weight: 800; }
        .sp-bs span { display: block; margin-top: 0.5rem; font-size: 0.9rem; }
        .sp-src { font-size: 0.78rem; color: var(--text-secondary); margin: 0.75rem 0 1.75rem; }
        .sp-src a { color: var(--text-secondary); }

        .sp-chips { display: flex; flex-wrap: wrap; gap: 0.6rem; margin: 0.25rem 0 1.5rem; }
        .sp-chip { border: 1.5px solid var(--ink); border-radius: 999px; padding: 0.35rem 0.9rem; font-size: 0.82rem; font-weight: 600; background-color: var(--bg-card); }

        .sp-cards { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.25rem; margin-top: 2.25rem; }
        .sp-cards.three { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        .sp-card { background-color: var(--bg-card); border: 1.5px solid var(--border-color); border-radius: 16px; padding: 1.6rem; }
        .sp-card h3 { font-size: 1.1rem; margin: 0 0 0.5rem; line-height: 1.3; }
        .sp-card p { margin: 0; color: var(--text-secondary); font-size: 0.95rem; }
        .sp-num { display: inline-flex; width: 30px; height: 30px; border-radius: 50%; background-color: var(--ink); color: var(--accent-gold-bright); font-size: 0.72rem; font-weight: 700; align-items: center; justify-content: center; margin-bottom: 0.9rem; font-family: var(--font-heading); }

        .sp-quote { margin: 2.5rem 0 0; background-color: var(--panel-dark); color: var(--panel-dark-text); border-radius: 18px; padding: 2.25rem 2.5rem; display: grid; grid-template-columns: auto 1fr; gap: 1.5rem; align-items: start; }
        .sp-qm { font-family: var(--font-heading); font-size: 4.5rem; line-height: 0.8; color: var(--accent-gold-bright); font-weight: 800; }
        .sp-quote blockquote { margin: 0; }
        .sp-quote blockquote p { margin: 0; font-family: var(--font-heading); font-size: 1.5rem; line-height: 1.4; font-weight: 600; color: var(--panel-dark-text); }
        .sp-quote figcaption { margin-top: 0.9rem; color: var(--panel-dark-muted); font-size: 0.82rem; font-weight: 500; }

        .sp-path { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); margin-top: 2rem; border: 2px solid var(--ink); border-radius: 16px; overflow: hidden; background-color: var(--bg-card); }
        .sp-step { padding: 1.1rem 1.4rem; border-left: 1px solid var(--border-color); }
        .sp-step:first-child { border-left: 0; }
        .sp-step small { display: block; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--eyebrow); }
        .sp-step b { font-family: var(--font-heading); font-size: 1rem; }

        .sp-mods { margin-top: 2.25rem; border: 2px solid var(--ink); border-radius: 18px; overflow: hidden; background-color: var(--bg-card); box-shadow: var(--glass-shadow); }
        .sp-mrow { display: grid; grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.3fr) minmax(0, 1.1fr); gap: 1.75rem; padding: 1.6rem 1.75rem; border-top: 1px solid var(--border-color); }
        .sp-mrow.head { background-color: var(--panel-dark); color: var(--panel-dark-muted); font-size: 0.68rem; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; padding: 0.9rem 1.75rem; border-top: 0; }
        .sp-mrow h3 { font-size: 1.15rem; margin: 0 0 0.5rem; line-height: 1.25; }
        .sp-mchip { display: inline-block; font-size: 0.75rem; font-weight: 600; color: var(--eyebrow); background-color: var(--accent-gold-glow); border-radius: 999px; padding: 0.2rem 0.65rem; }
        .sp-mrow p { margin: 0; font-size: 0.95rem; color: var(--text-primary); }
        .sp-mrow .sp-out { font-weight: 500; }
        .sp-mlabel { display: none; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--eyebrow); margin-bottom: 0.25rem; }
        .sp-under { margin: 1.4rem 0 0; font-size: 0.95rem; font-weight: 500; display: flex; gap: 0.6rem; max-width: 900px; }

        .sp-band { margin-top: 2.25rem; display: grid; grid-template-columns: auto 1fr; gap: 1.75rem; align-items: center; background-color: var(--accent-gold-bright); border: 2px solid var(--ink); border-radius: 18px; padding: 1.75rem 2rem; box-shadow: var(--glass-shadow); }
        .sp-band b { font-family: var(--font-heading); font-size: 1.6rem; line-height: 1.1; font-weight: 800; max-width: 220px; }
        .sp-band p { margin: 0; font-size: 0.95rem; color: var(--ink); }

        .sp-rules { margin-top: 2.5rem; display: grid; grid-template-columns: minmax(0, 0.8fr) minmax(0, 2fr); gap: 2rem; background-color: var(--bg-card); border: 2px solid var(--ink); border-radius: 18px; padding: 2.25rem; box-shadow: var(--glass-shadow); }
        .sp-rules h3 { font-size: 1.5rem; line-height: 1.2; margin: 0 0 0.6rem; }
        .sp-rules > div > p { margin: 0; font-size: 0.9rem; color: var(--text-secondary); }
        .sp-rlist { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 0.9rem; }
        .sp-rule { border-radius: 14px; padding: 1.25rem; border: 1.5px solid var(--border-color); background-color: var(--bg-primary); }
        .sp-rule small { display: block; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--eyebrow); margin-bottom: 0.4rem; }
        .sp-rule p { margin: 0 0 0.75rem; font-size: 0.9rem; }
        .sp-rule b { display: inline-block; font-family: var(--font-heading); font-size: 0.95rem; background-color: var(--ink); color: var(--accent-gold-bright); border-radius: 999px; padding: 0.25rem 0.75rem; }
        .sp-rule.hot { background-color: var(--panel-dark); border-color: var(--panel-dark); }
        .sp-rule.hot p { color: var(--panel-dark-text); }
        .sp-rule.hot small { color: var(--accent-gold-bright); }
        .sp-rule.hot b { background-color: var(--accent-gold-bright); color: var(--ink); }

        .sp-ctrl { background-color: var(--panel-dark); color: var(--panel-dark-text); border-radius: 24px; padding: 4rem 3.5rem; }
        .sp-ctrl .sp-tag { color: var(--accent-gold-bright); }
        .sp-ctrl .sp-h2 { color: var(--panel-dark-text); }
        .sp-ctrl-intro { margin: 0 0 0.5rem; color: #D9D0BE; max-width: 760px; }
        .sp-crows { margin-top: 1.75rem; }
        .sp-crow { display: grid; grid-template-columns: minmax(0, 0.8fr) minmax(0, 2fr); gap: 2rem; padding: 1.4rem 0; border-top: 1px solid #2E323B; }
        .sp-crow b { font-family: var(--font-heading); color: var(--accent-gold-bright); font-size: 1.05rem; }
        .sp-crow span { color: #D9D0BE; font-size: 0.95rem; }
        .sp-bound { color: var(--panel-dark-text); margin-top: 2rem; border: 1.5px dashed var(--panel-dark-muted); border-radius: 14px; padding: 1.4rem 1.6rem; font-size: 0.95rem; }
        .sp-bound b { color: var(--accent-gold-bright); }

        .sp-xp { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.4rem; margin-top: 2.25rem; }
        .sp-xp.one { grid-template-columns: minmax(0, 1fr); }
        .sp-xcard { background-color: var(--bg-card); border: 2px solid var(--ink); border-radius: 18px; padding: 1.9rem; box-shadow: var(--glass-shadow); }
        .sp-who { font-size: 0.72rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--eyebrow); }
        .sp-xcard h3 { font-size: 1.35rem; margin: 0.5rem 0 0.75rem; line-height: 1.25; }
        .sp-xcard p { margin: 0; font-size: 0.95rem; }
        .sp-stats { display: flex; gap: 1.75rem; flex-wrap: wrap; margin-top: 1.4rem; padding-top: 1.1rem; border-top: 1px solid var(--border-color); }
        .sp-stat b { display: block; font-family: var(--font-heading); font-size: 2rem; line-height: 1.1; color: var(--accent-gold); font-weight: 800; }
        .sp-stat span { font-size: 0.82rem; color: var(--text-secondary); }
        .sp-fn { margin-top: 1rem; font-size: 0.82rem; color: var(--text-secondary); }

        .sp-faq { margin-top: 2rem; border-top: 2px solid var(--ink); }
        .sp-faq details { border-bottom: 1px solid var(--border-color-hover); }
        .sp-faq summary { cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center; gap: 1.25rem; min-height: 44px; padding: 1.4rem 0.25rem; font-family: var(--font-heading); font-size: 1.1rem; font-weight: 600; }
        .sp-faq summary::-webkit-details-marker { display: none; }
        .sp-faq summary::after { content: '+'; font-size: 1.6rem; color: var(--accent-gold); font-weight: 500; line-height: 1; flex-shrink: 0; }
        .sp-faq details[open] summary::after { content: '\\2212'; }
        .sp-faq details p { margin: 0 0.25rem 1.5rem; max-width: 820px; }

        .sp-cta { margin: 6rem 0 0; background-color: var(--accent-gold-bright); border: 2px solid var(--ink); border-radius: 24px; box-shadow: 6px 6px 0 var(--ink); padding: 3.5rem; display: grid; grid-template-columns: 1.4fr auto; gap: 2.5rem; align-items: center; }
        .sp-cta h2 { font-size: clamp(1.7rem, 2.6vw, 2.25rem); line-height: 1.15; margin: 0 0 0.75rem; font-weight: 700; color: var(--ink); }
        .sp-cta p { margin: 0; color: var(--ink); max-width: 620px; }
        .sp-cta .sp-btn-line { border-color: var(--ink); color: var(--ink); }
        .sp-cta .sp-btn-line:hover { color: var(--ink); border-color: var(--ink); background-color: var(--bg-card); }

        .sector-page .site-footer { margin-top: 6rem; }

        @media (max-width: 992px) {
          .sp-hero { grid-template-columns: 1fr; gap: 2.25rem; padding-top: 1.5rem; }
          .sp-deck { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .sp-deck-label { grid-column: 1 / -1; }
          .sp-cards, .sp-cards.three, .sp-xp, .sp-bigstats, .sp-path, .sp-rlist, .sp-rules, .sp-band { grid-template-columns: 1fr; }
          .sp-rules { padding: 1.5rem; }
          .sp-step { border-left: 0; border-top: 1px solid var(--border-color); }
          .sp-step:first-child { border-top: 0; }
          .sp-mrow { grid-template-columns: 1fr; gap: 0.75rem; }
          .sp-mrow.head { display: none; }
          .sp-mlabel { display: block; }
          .sp-ctrl { padding: 2.5rem 1.5rem; }
          .sp-crow { grid-template-columns: 1fr; gap: 0.4rem; }
          .sp-cta { grid-template-columns: 1fr; padding: 2rem 1.5rem; }
          .sp-quote { grid-template-columns: 1fr; padding: 1.75rem 1.5rem; }
          .sp-sec { padding-top: 4.5rem; }
          .sector-page main { padding-top: 84px; }
        }
      `}</style>
    </div>
  )
}
