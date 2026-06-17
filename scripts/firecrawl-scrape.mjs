import fs from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'

const DEFAULT_FORMATS = ['markdown']
const DEFAULT_OUTPUT_DIR = path.resolve('data/firecrawl')
const FIRECRAWL_SCRAPE_ENDPOINT = 'https://api.firecrawl.dev/v2/scrape'

function printUsage() {
  console.log(`Usage:
  npm run scrape -- <url> [--formats markdown,html] [--output data/firecrawl]

Examples:
  FIRECRAWL_API_KEY=fc-... npm run scrape -- https://www.noviform.ai
  npm run scrape:markdown -- https://www.noviform.ai --output data/firecrawl

Options:
  --formats  Comma-separated Firecrawl formats. Default: markdown
  --output   Directory for saved scrape files. Default: data/firecrawl
  --help     Show this help text`)
}

async function loadDotEnv(filePath = path.resolve('.env')) {
  try {
    const contents = await fs.readFile(filePath, 'utf8')

    for (const line of contents.split(/\r?\n/)) {
      const trimmed = line.trim()
      if (!trimmed || trimmed.startsWith('#') || !trimmed.includes('=')) continue

      const [rawKey, ...rawValueParts] = trimmed.split('=')
      const key = rawKey.trim()
      const value = rawValueParts.join('=').trim().replace(/^['"]|['"]$/g, '')

      if (key && process.env[key] === undefined) {
        process.env[key] = value
      }
    }
  } catch (error) {
    if (error.code !== 'ENOENT') throw error
  }
}

function parseArgs(argv) {
  const args = {
    url: null,
    formats: DEFAULT_FORMATS,
    outputDir: DEFAULT_OUTPUT_DIR,
    help: false,
  }

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index]

    if (arg === '--help' || arg === '-h') {
      args.help = true
      continue
    }

    if (arg === '--formats') {
      const value = argv[index + 1]
      if (!value) throw new Error('--formats requires a comma-separated value')
      args.formats = value.split(',').map(format => format.trim()).filter(Boolean)
      index += 1
      continue
    }

    if (arg.startsWith('--formats=')) {
      const value = arg.slice('--formats='.length)
      args.formats = value.split(',').map(format => format.trim()).filter(Boolean)
      continue
    }

    if (arg === '--output') {
      const value = argv[index + 1]
      if (!value) throw new Error('--output requires a directory path')
      args.outputDir = path.resolve(value)
      index += 1
      continue
    }

    if (arg.startsWith('--output=')) {
      args.outputDir = path.resolve(arg.slice('--output='.length))
      continue
    }

    if (!args.url) {
      args.url = arg
      continue
    }

    throw new Error(`Unexpected argument: ${arg}`)
  }

  return args
}

function validateUrl(url) {
  if (!url) throw new Error('Missing URL to scrape')

  const parsed = new URL(url)
  if (!['http:', 'https:'].includes(parsed.protocol)) {
    throw new Error('Only http and https URLs are supported')
  }

  return parsed
}

function buildOutputBase(url) {
  const parsed = new URL(url)
  const safePath = `${parsed.hostname}${parsed.pathname}`
    .replace(/^www\./, '')
    .replace(/[^a-z0-9]+/gi, '-')
    .replace(/^-|-$/g, '')
    .toLowerCase()
    .slice(0, 80)

  const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
  return `${safePath || 'scrape'}-${timestamp}`
}

async function main() {
  await loadDotEnv()

  const args = parseArgs(process.argv.slice(2))
  if (args.help) {
    printUsage()
    return
  }

  const parsedUrl = validateUrl(args.url)
  const apiKey = process.env.FIRECRAWL_API_KEY
  if (!apiKey) {
    throw new Error('FIRECRAWL_API_KEY is required. Add it to .env or export it before running the script.')
  }

  if (!args.formats.length) {
    throw new Error('At least one Firecrawl output format is required')
  }

  const response = await fetch(FIRECRAWL_SCRAPE_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      url: parsedUrl.href,
      formats: args.formats,
      onlyMainContent: true,
    }),
  })

  const responseText = await response.text()
  let scrapeResult
  try {
    scrapeResult = JSON.parse(responseText)
  } catch {
    scrapeResult = { message: responseText }
  }
  if (!response.ok || scrapeResult.success === false) {
    const message = scrapeResult.error || scrapeResult.message || `HTTP ${response.status}`
    throw new Error(message)
  }

  const scrapedData = scrapeResult.data || scrapeResult

  await fs.mkdir(args.outputDir, { recursive: true })

  const outputBase = path.join(args.outputDir, buildOutputBase(parsedUrl.href))
  const jsonPath = `${outputBase}.json`
  await fs.writeFile(jsonPath, `${JSON.stringify(scrapeResult, null, 2)}\n`, 'utf8')

  const savedFiles = [jsonPath]

  if (typeof scrapedData.markdown === 'string' && scrapedData.markdown.trim()) {
    const markdownPath = `${outputBase}.md`
    await fs.writeFile(markdownPath, `${scrapedData.markdown.trim()}\n`, 'utf8')
    savedFiles.push(markdownPath)
  }

  console.log(`Scraped ${parsedUrl.href}`)
  console.log(`Formats: ${args.formats.join(', ')}`)
  console.log('Saved:')
  for (const file of savedFiles) {
    console.log(`- ${path.relative(process.cwd(), file)}`)
  }
}

main().catch(error => {
  console.error(`Firecrawl scrape failed: ${error.message}`)
  process.exitCode = 1
})
