# Noviform — Improvements: What to Fix and Why

**Prepared:** 2026-06-16 · Reviewed with: `ui-ux-pro-max`, `seo-aeo-best-practices`, `find-skills`
**Scope:** the single-page site in `src/`, checked on desktop (1440px) and mobile (390px), light + dark themes.

**How to read this:** every item has three parts — **Issue** (what's wrong), **Fix** (what to do, with file + code), **Why** (the reason it matters). The content is already strong; these are sharpenings. Do the **P1** items first. After any change: `npm run build` and redeploy `dist/` — the live site serves the built bundle, and the `dist/` on disk is currently older than `src/`.

---

## Priority at a glance
- **P1 (must fix):** broken contact form · mismatched client logos · theme flash on load · broken sitemap · no FAQ.
- **P2 (high value):** gold contrast in light mode · empty gaps in Services · hidden flip cards · cookie banner over CTAs · thin structured data.
- **P3 (polish):** mobile touch targets · form accessibility · heading hierarchy · copy/proof/photo.

---

# P1 — Must fix

## P1.1 Contact form sends nothing
**Issue.** `src/components/Contact.jsx` (~lines 40–50) shows a success screen after a fake 1.5s timeout — it never sends. The success copy promises *"someone senior will reply within one business day,"* but every enquiry is silently lost.
```js
// NOTE: this does NOT send anywhere yet…
setTimeout(() => setStatus('success'), 1500)
```
**Fix.** Wire `handleSubmit` to a real endpoint (Formspree/Formspark/own API), and add an **error** state with retry + `mailto:hello@noviform.ai` fallback:
```js
const res = await fetch('https://formspree.io/f/<FORM_ID>', {
  method: 'POST',
  headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
})
if (!res.ok) throw new Error('failed')   // -> setStatus('error')
```
If no endpoint yet, replace the form with a `mailto:`/Calendly link so no promise is broken.
**Why.** It's the primary lead-capture path. A form that drops every message — while telling the user it was received — loses real business and damages trust the moment someone follows up and gets silence.

## P1.2 Client logos don't match their names
**Issue.** `src/components/Clients.jsx` maps a list of company names to image files **by index** (`nova1.png`, `nova2.png`, …). The files don't line up with the names — e.g. a "Kiandra" logo renders, yet "Kiandra" isn't in the list. So the `alt`, hover tooltip and `aria-label` announce the **wrong company**.
**Fix.** Pair each file to its real brand explicitly (not index math); open each `public/assets/clients/nova*.png` to confirm which logo it is:
```js
const logos = [
  { name: 'Bupa',  src: '/assets/clients/nova4.png' },
  { name: 'Coles', src: '/assets/clients/nova6.png' },
  // …one verified entry per file…
].map(l => ({ ...l, alt: l.name, width: 281, height: 100 }))
```
Also confirm each logo is licensed for display, and keep the heading *"Our consultants are trusted by"* honest (prior employers ≠ Noviform's own clients).
**Why.** Showing the wrong brand under a "trusted by" banner is a credibility and potential legal/trademark risk, and screen readers reading the wrong name is an accessibility defect.

## P1.3 Theme flash on first load (FOUC)
**Issue.** `index.html` ships `data-theme="light"`, but `Header.jsx` defaults to **dark** and applies it only after React mounts — so first-time visitors see a light flash that snaps to dark.
**Fix.** Set the theme before React mounts, with an inline script early in `<head>` of `index.html`, and make the static default match:
```html
<script>
  try { document.documentElement.setAttribute('data-theme', localStorage.getItem('theme') || 'dark'); }
  catch (e) { document.documentElement.setAttribute('data-theme', 'dark'); }
</script>
```
**Why.** The flash looks broken/unpolished and is jarring — a first impression problem on a site whose whole pitch is "less theatre, more polish."

## P1.4 Sitemap is wrong
**Issue.** `sitemap.xml` lists in-page anchors (`/#services`, `/#contact`) that aren't real pages, and omits the real `/privacy/` page.
**Fix.** List only real URLs:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://www.noviform.ai/</loc><lastmod>2026-06-16</lastmod><priority>1.0</priority></url>
  <url><loc>https://www.noviform.ai/privacy/</loc><lastmod>2026-06-16</lastmod><priority>0.3</priority></url>
</urlset>
```
**Why.** Anchor URLs in a sitemap are invalid signals to crawlers; omitting `/privacy/` means a real page goes undiscovered. A clean sitemap helps Google index the site correctly.

## P1.5 No FAQ / Q&A content
**Issue.** The site has no question-and-answer content anywhere.
**Fix.** Add `src/components/FAQ.jsx` (a `<section id="faq">` with `<h2>` questions and `<p>` answers, ~6–10 items), render it in `App.jsx` between `Trust` and `Contact`, and add `FAQPage` JSON-LD (see P2.10). Suggested questions: *What does Noviform do? · How is this different from a big consultancy? · How fast can we see value? (90-day accelerator) · Do you work in regulated/financial services? · What happens after go-live? · Who actually does the work? · How do you price engagements?* Lead each answer with the direct answer in 40–60 words.
**Why.** AI answer engines (ChatGPT, Perplexity, Google AI Overviews) and featured snippets pull from concise Q&A. It's the single highest-leverage addition for being *cited* by AI, and it also pre-empts buyer objections.

---

# P2 — High value

## P2.6 Gold text contrast in light mode
**Issue.** `src/index.css` light-mode `--accent-gold: hsl(35,70%,45%)` is used for the "More Outcomes." headline and many small gold labels on light/white backgrounds — borderline for WCAG AA (small text needs ≥4.5:1).
**Fix.** Darken gold for text use in light mode (e.g. ~`hsl(35,78%,38%)`), or reserve gold for large text/icons and use `--text-primary` for small labels. Leave dark-mode gold as is.
**Why.** Low-contrast text is hard to read (especially for low-vision users and in bright light) and fails accessibility standards — a real risk for a site selling to regulated, compliance-minded buyers.

## P2.7 Empty vertical gaps in the Services section
**Issue.** `src/components/Services.jsx` has large blank bands (between the `SPRINT FIRST · EVIDENCE LED · BUILT TO LAND` strapline and the "Fractional Chief AI Officer" band, and below the support cards), caused by stacked margins + padding. It reads as "something failed to load."
**Fix.** Tighten the rhythm — reduce `.services-header` bottom margin and the surrounding block margins so spacing is consistent (~24–48px), not stacked 52px + 80px.
**Why.** Unexplained empty space looks like a rendering bug and pushes key content below the fold, weakening the section's flow.

## P2.8 Flip cards hide the best content
**Issue.** The Services stage/support cards flip to reveal a "You walk away with" deliverables list — the strongest sales content — but the only hint is a faint 15px icon (`opacity 0.55`). Most visitors never discover it; on mobile there's no hover cue at all.
**Fix.** Make the affordance explicit (a "Flip for deliverables →" label, higher icon opacity, hover lift on desktop), or show the headline deliverable on the card front so value isn't gated behind interaction.
**Why.** Hidden value = lost persuasion. The deliverables are exactly what converts a considered B2B buyer; they shouldn't depend on a discovery most users won't make.

## P2.9 Cookie banner overlaps the hero CTAs
**Issue.** On first load, `CookieBanner.jsx` sits over the hero "Book a Call / See Services" buttons (desktop and mobile), blocking the main conversion path until dismissed.
**Fix.** Dock it as a slim bottom bar that doesn't cover the CTAs, or reserve space while it's visible. Keep Decline/Accept balanced and the Privacy link present.
**Why.** Anything covering the primary CTA on arrival directly costs conversions and creates friction at the worst possible moment.

## P2.10 Structured data is thin
**Issue.** `index.html` has a single minimal `Organization` block: `sameAs` is empty despite an active LinkedIn page, `logo` points at a favicon SVG, and there's no founder, services, or FAQ markup.
**Fix.** Upgrade to `ProfessionalService` with `serviceType`, a `founder` Person (Ahmed Sheikh + LinkedIn), a filled `sameAs` (LinkedIn company URL), a real raster `logo`/`image`, and a separate `FAQPage` block whose text matches the on-page FAQ:
```html
<script type="application/ld+json">
{ "@context":"https://schema.org","@type":"ProfessionalService","name":"Noviform Ltd",
  "url":"https://www.noviform.ai","logo":"https://www.noviform.ai/assets/og-image.png",
  "areaServed":"GB","serviceType":["AI Strategy","Enterprise Automation","AI Governance","Managed AI Operations","Fractional Chief AI Officer"],
  "founder":{"@type":"Person","name":"Ahmed Sheikh","jobTitle":"Founder","sameAs":["https://www.linkedin.com/in/ahmedsheikh1/"]},
  "sameAs":["https://www.linkedin.com/company/noviform/"] }
</script>
```
**Why.** Richer, accurate structured data is how Google and AI engines understand *who* Noviform is, *what* it offers, and *who* runs it — improving rich results, entity recognition, and the odds of being surfaced/cited.

---

# P3 — Polish

## P3.11 Mobile header touch targets
**Issue.** `Header.jsx` theme-toggle and hamburger buttons are 40×40px (below the 44px minimum) and sit near the screen edge.
**Fix.** Increase to ≥44×44px and respect the safe area (`padding-right: env(safe-area-inset-right)`).
**Why.** Sub-44px targets near the edge cause mis-taps on phones; 44px is the accessibility/usability standard.

## P3.12 Form accessibility
**Issue.** `Contact.jsx` field errors render visually but aren't announced to screen readers, and focus isn't moved to the first invalid field on submit.
**Fix.** Add `role="alert"` (or an `aria-live` region) to `.field-error`, and focus the first invalid field on failed submit. (The success card already has `role="status"` ✅.)
**Why.** Screen-reader users currently get no feedback on what went wrong — a WCAG failure and a frustrating dead-end.

## P3.13 Heading hierarchy
**Issue.** Need to confirm exactly one `<h1>` (the hero) and no skipped heading levels — especially once the FAQ is added.
**Fix.** Audit the outline; sections go `<h2>` then `<h3>`.
**Why.** Clean heading structure helps SEO, AI parsing, and screen-reader navigation.

## P3.14 Copy, proof, and photo
**Issue / Fix / Why.**
- **CTA labels** are inconsistent ("Book a Call" vs "Book a call", "Send an Enquiry" vs "Send Enquiry"). → Standardise. → Consistency reads as polish and reduces cognitive load.
- **Hero is abstract** ("Less Theatre. More Outcomes."). → Add one concrete, honest proof near the CTA (a metric or crisp specificity). → Specific proof builds credibility faster than a slogan.
- **Founder photo** (`Trust.jsx`) is heavily grayscaled/contrasted and tightly cropped, looking dark on mobile. → Lighten the filter, re-check the crop. → A clear founder face strengthens trust (EEAT); a murky one undercuts it.
- **Social proof / footer trust** → Add an anonymised mini-case or client quote, and real company details (Ltd no., London address) in the footer. → Concrete evidence and verifiable identity boost both buyer trust and search/AI trust signals.

---

## Suggested order
1. P1 functional/SEO: form (P1.1) · logos (P1.2) · FOUC (P1.3) · sitemap (P1.4).
2. AEO content: FAQ + schema (P1.5, P2.10).
3. UI: Services spacing (P2.7) · flip affordance (P2.8) · cookie/CTA overlap (P2.9).
4. Contrast & a11y: gold (P2.6) · touch targets (P3.11) · form a11y (P3.12) · headings (P3.13).
5. Content/trust: hero proof, case/testimonial, footer details, copy (P3.14).
6. `npm run build` and redeploy so the live site reflects the changes.

## Already good (leave as-is)
Self-hosted fonts · inline SVG icons (no emoji) · `prefers-reduced-motion` handled · flip cards keyboard-operable · valid title/meta/canonical/OG/Twitter/`lang="en-GB"` · correct `robots.txt` · solid mobile layout (stacking, full-screen drawer, full-width buttons) · working light/dark theming on body sections.
