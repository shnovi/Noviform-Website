// Pre-renders the sector pages to static HTML after the client build.
//
//   npm run build  ->  vite build && vite build --ssr src/entry-server.jsx --outDir dist-ssr && node scripts/prerender.mjs
//
// For each sector it takes dist/index.html (which already links the hashed CSS and JS),
// swaps the <head> metadata for that sector's, injects the rendered markup into #root,
// and writes dist/<slug>/index.html. Vercel serves that file at /<slug>/ (trailingSlash: true).
// The client bundle then hydrates it (see src/main.jsx).

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const ssrDir = path.join(root, 'dist-ssr')
const SITE = 'https://www.noviform.ai'

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')
const ssrEntry = fs.readdirSync(ssrDir).find((f) => f.startsWith('entry-server') && f.endsWith('.js'))
if (!ssrEntry) throw new Error('SSR bundle not found in dist-ssr')
const { render, sectorSlugs } = await import(pathToFileURL(path.join(ssrDir, ssrEntry)).href)

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

function headFor(sector) {
  const url = `${SITE}/${sector.slug}/`
  const title = sector.seo.title
  const desc = sector.seo.description
  const faq = {
    '@type': 'FAQPage',
    '@id': `${url}#faq`,
    mainEntity: sector.faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a }
    }))
  }
  const crumbs = {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Sectors', item: `${SITE}/#sectors` },
      { '@type': 'ListItem', position: 3, name: sector.navLabel, item: url }
    ]
  }
  const page = {
    '@type': 'WebPage',
    '@id': url,
    url,
    name: title,
    description: desc,
    isPartOf: { '@id': `${SITE}/#website` },
    about: { '@id': `${SITE}/#organisation` }
  }
  const ld = JSON.stringify({ '@context': 'https://schema.org', '@graph': [page, crumbs, faq] }, null, 2)
  return { url, title, desc, ld }
}

for (const slug of sectorSlugs) {
  const { html, sector } = render(slug)
  const { url, title, desc, ld } = headFor(sector)

  let out = template
  const swaps = [
    [/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`],
    [/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${esc(desc)}" />`],
    [/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${url}" />`],
    [/<link rel="alternate" hreflang="en-GB" href="[^"]*" \/>/, `<link rel="alternate" hreflang="en-GB" href="${url}" />`],
    [/<link rel="alternate" hreflang="x-default" href="[^"]*" \/>/, `<link rel="alternate" hreflang="x-default" href="${url}" />`],
    [/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${url}" />`],
    [/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${esc(title)}" />`],
    [/<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${esc(desc)}" />`],
    [/<meta name="twitter:url" content="[^"]*" \/>/, `<meta name="twitter:url" content="${url}" />`],
    [/<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${esc(title)}" />`],
    [/<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${esc(desc)}" />`],
    // Replace the homepage structured data block with the sector's own.
    [/<script type="application\/ld\+json">[\s\S]*?<\/script>/, `<script type="application/ld+json">\n${ld}\n    </script>`],
    [/<div id="root"><\/div>/, `<div id="root">${html}</div>`]
  ]
  for (const [re, rep] of swaps) {
    if (!re.test(out)) throw new Error(`prerender: pattern not found in template: ${re}`)
    out = out.replace(re, () => rep)
  }

  // renderToString HTML-escapes the text inside <style> elements (e.g. [data-theme="dark"]
  // becomes [data-theme=&quot;dark&quot;]), but browsers treat <style> contents as raw text and
  // never decode entities, so the DOM text would not match what React renders on the client
  // and hydration would fall back to a full client render. Restore the literal characters.
  out = out.replace(/(<style[^>]*>)([\s\S]*?)(<\/style>)/g, (m, open, css, close) =>
    open + css.replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&gt;/g, '>').replace(/&lt;/g, '<').replace(/&amp;/g, '&') + close
  )

  const dir = path.join(dist, slug)
  fs.mkdirSync(dir, { recursive: true })
  fs.writeFileSync(path.join(dir, 'index.html'), out)
  console.log(`prerendered /${slug}/ (${(out.length / 1024).toFixed(0)} KB)`)
}

fs.rmSync(ssrDir, { recursive: true, force: true })
