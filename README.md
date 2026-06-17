# Noviform Website

React single page marketing site for Noviform, a UK AI and automation consultancy.

For AI agents: read `AI_HANDOFF.md` first. It is the concise canonical project brief. This README is intentionally short to avoid duplicated context.

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Firecrawl

```bash
cp .env.example .env
npm run scrape -- https://www.noviform.ai --output data/firecrawl
npm run scrape -- https://www.noviform.ai/services/ --formats markdown,html --output data/firecrawl
```

Use `FIRECRAWL_API_KEY` in `.env` or the shell. Do not expose it in client code.

## Current Launch Blocker

`src/components/Contact.jsx` still simulates submission. Wire it to a real endpoint before launch.
