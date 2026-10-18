import insurance from './insurance.js'
import charities from './charities.js'
import higherEducation from './higher-education.js'
import financialServices from './financial-services.js'

// Order here is the order of the sector switcher on every sector page.
export const sectors = [insurance, charities, higherEducation, financialServices]

export function getSector(slug) {
  return sectors.find((s) => s.slug === slug) || null
}

// Pre-render targets (used by tools/prerender.mjs and main.jsx routing).
export const sectorSlugs = sectors.map((s) => s.slug)
