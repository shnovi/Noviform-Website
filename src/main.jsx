import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import SectorPage from './pages/SectorPage.jsx'
import { getSector } from './sectors/index.js'
import { Analytics } from '@vercel/analytics/react'

// Self-hosted fonts (latin subset only) — no Google Fonts dependency
import '@fontsource/inter/latin-400.css'
import '@fontsource/inter/latin-500.css'
import '@fontsource/inter/latin-600.css'
import '@fontsource/plus-jakarta-sans/latin-400.css'
import '@fontsource/plus-jakarta-sans/latin-500.css'
import '@fontsource/plus-jakarta-sans/latin-600.css'
import '@fontsource/plus-jakarta-sans/latin-700.css'

import './assets/css/animations.css';
import './index.css'

// Routing without a router: the homepage is the SPA at "/", and each sector page is a
// pre-rendered static HTML file at "/<slug>/" (see tools/prerender.mjs). The sector
// pages ship with their markup already in the HTML, so we hydrate rather than render.
const slug = window.location.pathname.replace(/^\/+|\/+$/g, '')
const sector = slug ? getSector(slug) : null
const root = document.getElementById('root')

if (sector) {
  ReactDOM.hydrateRoot(
    root,
    <React.StrictMode>
      <SectorPage sector={sector} />
      <Analytics />
    </React.StrictMode>,
  )
} else {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
      <Analytics />
    </React.StrictMode>,
  )
}
