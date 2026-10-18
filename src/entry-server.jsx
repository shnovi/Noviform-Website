import React from 'react'
import { renderToString } from 'react-dom/server'
import SectorPage from './pages/SectorPage.jsx'
import { getSector, sectorSlugs } from './sectors/index.js'

// Build-time only. scripts/prerender.mjs imports this from the SSR bundle and writes
// dist/<slug>/index.html for each sector so crawlers get the full page without JavaScript.
export { sectorSlugs }

export function render(slug) {
  const sector = getSector(slug)
  if (!sector) throw new Error(`Unknown sector: ${slug}`)
  const html = renderToString(<SectorPage sector={sector} />)
  return { html, sector }
}
