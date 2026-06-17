# Noviform AI Handoff (Compact)

## Product & Audience
- AI & automation consultancy website (single‑page Vite + React).
- Target: senior buyers in banks, insurers, regulated orgs, higher‑ed and digital teams.

## Tone & Copy
- British English, direct, premium, practical.
- Avoid filler words ("unlock", "seamless", etc.).
- Use outcome‑focused language.

## Stack
- **React 18**, **Vite 5** (plain JSX).
- Component‑scoped CSS via `<style jsx="true">` (renders global `<style>`; class names must stay unique).
- Shared design tokens in `src/index.css`. Motion/interaction polish lives in `src/index.css` §8.
- Framer Motion (`framer-motion`, v11) used in `Hero.jsx` and `ScrollProgress.jsx`. Do **not** add `motion/react` — never mix the two packages.
- No router – single page, hash anchors only. Real static page: `public/privacy/index.html`.
- Theme: `data-theme` on `<html>` + `localStorage.theme`; set pre‑mount by an inline script in `index.html` to avoid FOUC.

## Key Components (brief)
- `Header.jsx` – fixed header, theme toggle, mobile nav.
- `Hero.jsx` – hero copy, CTAs, proof‑point cards, hero image.
- `Clients.jsx` – logo marquee (auto, no manual redraw).
- `Services.jsx` – four offers + always‑visible “More Ways We Help”.
- `Products.jsx` – How We Work section, operations image, sprint process visual.
- `Simulator.jsx` – AI Adoption Readiness Check, live summary, CTA.
- `Contact.jsx` – consultation form (name & work email required, validation added).
- `CookieBanner.jsx` – UK cookie consent.

## UX Rules (must‑keep)
- Header uses uniform glass on scroll, no gradient or hard divider.
- Proof‑point cards stay compact, uniform.
- How‑We‑Work image overlays real HTML text.
- Sprint model pure HTML/CSS, no SVG connector, stacks below 760px.
- Founder quote uses balanced CSS quotes.
- Readiness Check stays practical – no fake ROI or scoring.
- No corporate registration in UI; only on privacy page.
- Cards must feel useful/premium, not decorative.
- Full light/dark theme support, responsive.

## Copy Guidelines
- British English.
- Direct, premium, concrete language.
- No visible em/en‑dashes in customer‑facing copy.
- Preferred terms: outcomes, controls, adoption, decision rights, backlog, benefits tracking, operating model.

## Firecrawl Integration
- Use `FIRECRAWL_API_KEY` from `.env` (never embed in React).
- Scrape commands (example):
  ```bash
  npm run scrape -- https://www.noviform.ai --output data/firecrawl
  npm run scrape -- https://www.noviform.ai/services/ --formats markdown,html --output data/firecrawl
  ```
- Scrape output ignored by git.

## Current Caveats & Verification
- `Contact.jsx` now does a real async POST to `VITE_CONTACT_ENDPOINT` with `error`/retry state; when the env var is unset it falls back to a `mailto:` compose (no false "received" promise). See Deployment Notes for wiring.
- Build passes (`npm run build`) with no console errors.
- Hero/operations images are WebP; the broken `/src/...` hero preload was removed.
- No hidden accordions, no fake ROI, no invented testimonials.

---

## Best Practices This App Must Follow

Keep these intact on every change. They reflect decisions already implemented — don't regress them.

### SEO (technical)
- Exactly **one `<h1>`** (the hero). Sections go `<h2>` → `<h3>`, never skip levels.
- Keep the **canonical** (`https://www.noviform.ai/`), `hreflang` (`en-GB` + `x-default`), and `og:`/`twitter:` tags in sync with real content. `lang="en-GB"` on `<html>`.
- `robots` meta must keep `max-image-preview:large, max-snippet:-1, max-video-preview:-1`.
- **Sitemap = real URLs only** (`/` and `/privacy/`). Never list `#anchors`. Keep root `sitemap.xml` and `public/sitemap.xml` identical; bump `lastmod` on meaningful changes.
- `robots.txt` (root + `public/` copy must match) allows all + explicitly welcomes AI crawlers (GPTBot, OAI‑SearchBot, ClaudeBot, PerplexityBot, Google‑Extended, Applebot‑Extended); disallows `/assets/clients/`.
- Every page needs a unique `<title>` (~50–60 chars, brand + intent) and `meta description` (~120–160 chars). The `/privacy/` page has its own.
- Descriptive `alt` on every meaningful image; `alt=""` + `aria-hidden` on decorative ones.

### AEO / GEO (AI answer engines)
- Keep the on‑page **FAQ** (`FAQ.jsx`) and the **`FAQPage` JSON‑LD** in `index.html` **word‑for‑word identical**. Update both together or neither.
- Structured data is a single `@graph` in `index.html`: `ProfessionalService` (with `legalName`, UK company no. `16728474`, `contactPoint`, `slogan`, `hasOfferCatalog` of the real services) → `WebSite` → `WebPage` → `FAQPage`, linked by `@id`. Validate after edits (Google Rich Results / `schema.org` validator). Never add schema for content not visibly on the page.
- Lead each FAQ answer with the direct answer in ~40–60 words.

### Accessibility (WCAG 2.2 AA — non‑negotiable)
- Contrast ≥ **4.5:1** for body text, **3:1** for large text / UI. Light‑mode gold is intentionally darkened (`hsl(35,85%,34%)`, ~4.9:1 on white) — do not lighten it for small text.
- All interactive targets ≥ **44×44px** (header buttons, footer links, FAQ rows). Respect `env(safe-area-inset-*)`.
- Icon‑only buttons need `aria-label`; decorative SVGs get `aria-hidden="true"`.
- Forms: visible `<label>` per field, `aria-invalid` + `role="alert"` on errors, focus moves to the first invalid field on submit.
- Accordions: `aria-expanded` on the trigger, `aria-hidden` on the collapsed panel; never trap or hide focusable content.
- Keep `:focus-visible` rings — never `outline: none` without a replacement. Active nav uses `aria-current`.
- **Everything animated must be gated by `prefers-reduced-motion: reduce`** (aurora, hero float, scroll reveals/stagger, FAQ open/close, CTA arrows).

### Performance / Core Web Vitals (a ranking factor)
- Targets: **LCP < 2.5s, INP < 200ms, CLS < 0.1**.
- **Images: WebP, compressed.** Hero/operations are WebP (~38KB / ~68KB). Any new raster asset → `cwebp -q 80` before importing. Never ship multi‑MB PNGs.
- Always set `width`/`height` (or `aspect-ratio`) on images to reserve space (no CLS). LCP image (hero) keeps `fetchpriority="high"`; lazy‑load below‑fold images (`loading="lazy"`).
- Animate **only `transform` / `opacity`** (and the FAQ `grid-template-rows` pattern). Never animate `width/height/top/left`.
- Don't add broken/dev‑path `<link rel="preload">` (e.g. `/src/...`) — they 404 in production.

### Motion (premium, restrained — matches "Less Theatre. More Outcomes.")
- Motion must communicate state or guide attention, never decorate for its own sake. Durations ~150–360ms, eased (`cubic-bezier(0.22,1,0.36,1)`); stagger steps ≤ 0.1s.
- Reveal engine: add `reveal-on-scroll` to elements; the `App.jsx` IntersectionObserver adds `.revealed`. For cascades use a `reveal-stagger` parent with `reveal-on-scroll` **direct children**.
- ⚠️ Never put `reveal-on-scroll` on an element whose `className` changes on re‑render — React drops the observer‑added `.revealed` class. Use a **stable wrapper** (see `FAQ.jsx`).

### Code conventions
- Match existing style: 2‑space indent, plain JSX (no TS), functional components + hooks.
- Component‑scoped styles via `<style jsx="true">`; reuse `--tokens` from `index.css` — no raw hex in components.
- Keep components self‑contained; no router, no new state libraries.
- Don't leave unused imports/assets. `Simulator.jsx` / `SimulatorTerminalBackup.jsx` / `FeatureCard.jsx` are not mounted in `App.jsx` — leave out unless wired in.

### Forms & content honesty
- The contact form must never silently drop a message: real POST to `VITE_CONTACT_ENDPOINT`, else `mailto:` fallback. Never show a fake success.
- No fabricated metrics, testimonials, client logos, ROI, ratings, or company details. Client logos under "trusted by" map **explicitly** (not by index) and must be licensed; names verified against the image.
- CTA labels are standardised: **"Book a Call"** and **"Send Enquiry"** everywhere.

### Security & deploy
- Never hardcode secrets/API keys/tokens in source — use `.env` / Vercel env vars (`VITE_*` only for values safe to expose client‑side).
- Security headers live in `vercel.json` (`X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`, `Permissions-Policy`, HSTS). **No CSP** is set on purpose — inline `<style jsx>`, the inline theme script, and Framer Motion inline styles require `'unsafe-inline'`; adding CSP needs nonces/hashes (a deliberate, tested change).
- External links use `target="_blank" rel="noopener noreferrer"`.
- After any change: `npm run build` must pass with **no console errors**; verify in the browser preview before shipping. Vercel rebuilds on push.

---

## Deployment & Handoff Notes (READ FIRST — vision)

**Target deployment:** GitHub (source) + Vercel (hosting). The plan is to host the repo on GitHub and connect it to Vercel for automatic deploys.

**This project is NOT a git repo yet.** It must be initialised so the recipient can push the codebase.
- The person receiving this likely needs help installing and configuring git — walk them through it, do not assume prior git knowledge.
- Steps to get them shipping:
  1. **Install git** — macOS: `xcode-select --install` (or `brew install git`); Windows: install Git for Windows from git-scm.com; Linux: `sudo apt install git`. Verify with `git --version`.
  2. **Configure identity (one-time):** `git config --global user.name "Their Name"` and `git config --global user.email "their@email.com"`.
  3. **Make it a repo:** from the project root run `git init`, then `git add .`, then `git commit -m "Initial commit"`. (`.gitignore` already excludes `node_modules`, `.env`, `dist`, scrape output.)
  4. **Create the GitHub repo** (private), then `git remote add origin <repo-url>` and `git push -u origin main`.
  5. **Connect Vercel** to the GitHub repo. A `vercel.json` is already committed (framework `vite`, build `npm run build`, output `dist`, `trailingSlash: true` to match canonicals, immutable caching for `/assets/*`, and security headers incl. HSTS), and `package.json` pins `engines.node` to `20.x`. Vercel will pick these up automatically — no manual settings needed. `.vercelignore` keeps `index.zip`/`data`/`scripts`/handoff docs out of the deploy.

**Email / contact form — do at deploy time (not before):**
- Email/contact delivery is intentionally deferred until deployment on Vercel + GitHub.
- To enable real form submissions: create a form endpoint (Formspree / Formspark / a Vercel serverless function), then add it as a **Vercel environment variable** `VITE_CONTACT_ENDPOINT` (also mirror locally in `.env`, see `.env.example`). Until that is set, the form safely falls back to opening the visitor's email client (`mailto:hello@noviform.ai`).
- `VITE_` prefix is required so Vite exposes it to the client bundle. Rebuild/redeploy after setting it.

**Redeploy reminder:** the live site serves the built `dist/` bundle. After any source change run `npm run build` (Vercel does this automatically on push) so `dist/` reflects `src/`.

---
*These notes are concise for AI consumption while retaining all critical information.*
