/**
 * build-links.ts
 * Generates src/data/link-map.json at build time.
 * Run via: npx tsx scripts/build-links.ts
 * Auto-runs via the "prebuild" npm script.
 *
 * Algorithm:
 *  1. Build a page registry — every page with its keyword set.
 *  2. For each page, score all other pages by keyword overlap.
 *  3. Emit the top 4 highest-scoring matches per page.
 * The output is deterministic — it won't change unless this script is re-run.
 */

import { writeFileSync, mkdirSync } from 'fs'
import { join } from 'path'
import { products } from '../src/lib/products'
import { stacks } from '../src/lib/stacks'

interface PageEntry {
  path: string
  title: string
  keywords: string[]
}

interface LinkEntry {
  path: string
  title: string
}

// Words too common to signal semantic similarity
const STOP_WORDS = new Set([
  'for', 'the', 'and', 'of', 'to', 'a', 'in', 'on', 'with', 'is', 'at',
  'by', 'from', 'as', 'or', 'an', 'its', 'this', 'that', 'it', 'be',
  'are', 'was', 'not', 'but', 'all', 'can', 'has', 'via',
])

function tokenize(keywords: string[]): Set<string> {
  const tokens = new Set<string>()
  for (const kw of keywords) {
    for (const word of kw.toLowerCase().split(/[\s\-_/]+/)) {
      if (!STOP_WORDS.has(word) && word.length > 2) tokens.add(word)
    }
  }
  return tokens
}

function scorePages(a: PageEntry, b: PageEntry): number {
  const tokensA = tokenize(a.keywords)
  const tokensB = tokenize(b.keywords)

  // Word-level overlap
  let wordScore = 0
  Array.from(tokensA).forEach(t => {
    if (tokensB.has(t)) wordScore++
  })

  // Exact phrase bonus (3× weight)
  let phraseScore = 0
  for (const kwA of a.keywords) {
    for (const kwB of b.keywords) {
      if (kwA.toLowerCase() === kwB.toLowerCase()) phraseScore++
    }
  }

  return wordScore + phraseScore * 3
}

// ─── PAGE REGISTRY ──────────────────────────────────────────────────────────

const pages: PageEntry[] = []

// — Product pages —
for (const p of products) {
  pages.push({
    path: `/products/${p.slug}`,
    title: p.shortName,
    keywords: [
      ...p.keywords,
      p.category.toLowerCase(),
      p.shortName.toLowerCase(),
      p.categorySlug,
      ...p.idealFor.map(s => s.toLowerCase()),
    ],
  })
}

// — Category pages —
const categoryKeywordsMap: Record<string, string[]> = {}
for (const p of products) {
  if (!categoryKeywordsMap[p.categorySlug]) categoryKeywordsMap[p.categorySlug] = []
  categoryKeywordsMap[p.categorySlug].push(...p.keywords)
}

const categoryMeta: { slug: string; title: string; extraKeywords: string[] }[] = [
  { slug: 'skin-anti-aging',   title: 'Skin & Anti-Aging Peptides',   extraKeywords: ['skin peptides', 'anti-aging peptides', 'collagen peptides', 'looksmax skin'] },
  { slug: 'longevity',         title: 'Longevity Peptides',           extraKeywords: ['longevity peptides', 'telomere peptides', 'anti-aging science', 'lifespan extension'] },
  { slug: 'recovery-healing',  title: 'Recovery & Healing Peptides',  extraKeywords: ['recovery peptides', 'healing peptides', 'tissue repair', 'injury recovery'] },
  { slug: 'growth-body-comp',  title: 'Growth & Body Composition',    extraKeywords: ['growth peptides', 'body composition', 'muscle peptides', 'anabolic peptides'] },
  { slug: 'metabolic-fat-loss', title: 'Metabolic & Fat Loss Peptides', extraKeywords: ['fat loss peptides', 'metabolic peptides', 'weight loss peptides', 'glp-1 peptides'] },
]

for (const { slug, title, extraKeywords } of categoryMeta) {
  const allKws = Array.from(new Set([...(categoryKeywordsMap[slug] ?? []), ...extraKeywords]))
  pages.push({ path: `/categories/${slug}`, title, keywords: allKws.slice(0, 25) })
}

// — Stack pages —
for (const s of stacks) {
  const keywords = [
    'peptide stack',
    'peptide protocol',
    s.level.toLowerCase(),
    ...s.compounds.map(c => c.name.toLowerCase()),
    ...s.compounds.map(c => c.role.toLowerCase()),
    ...s.tagline.toLowerCase().split(/\s+/).filter(w => w.length > 3),
    ...s.benefits.flatMap(b => b.toLowerCase().split(/\s+/).filter(w => w.length > 3)),
    s.seoTitle.toLowerCase(),
  ]
  pages.push({
    path: `/stacks/${s.id}`,
    title: s.name,
    keywords: Array.from(new Set(keywords)),
  })
}

// — Static pages —
pages.push({
  path: '/stacks',
  title: 'Peptide Stacks & Protocols',
  keywords: ['peptide stacks', 'stacking protocols', 'peptide combinations', 'research stacks', 'peptide protocol', 'stack guide', 'peptide cycling'],
})

pages.push({
  path: '/guide',
  title: 'Peptide Science Guide',
  keywords: ['peptide guide', 'how to use peptides', 'purity', 'coa', 'reconstitution', 'storage', 'dosing', 'stacking', 'mechanism', 'research peptides', 'peptide science', 'certificate of analysis', 'peptide basics', 'peptide education'],
})

pages.push({
  path: '/faq',
  title: 'Peptide FAQ',
  keywords: ['peptide faq', 'frequently asked questions', 'quality', 'purity', 'storage', 'reconstitution', 'shipping', 'compound selection', 'research peptides', 'peptide storage', 'peptide quality'],
})

pages.push({
  path: '/looksmaxxing',
  title: 'Looksmaxxing with Peptides',
  keywords: ['looksmaxxing', 'aesthetic optimization', 'skin', 'muscle', 'fat loss', 'recovery', 'looksmax peptides', 'appearance optimization', 'looksmax skin peptide', 'looksmax recovery', 'anabolic peptide looksmax', 'body recomposition', 'looksmax guide'],
})

pages.push({
  path: '/products',
  title: 'All Peptides',
  keywords: ['all peptides', 'peptide catalog', 'buy peptides', 'research peptides', 'peptide compounds', 'peptide shop', 'premium peptides'],
})

pages.push({
  path: '/peptide-stacking-guide-beginners',
  title: 'Peptide Stacking Guide for Beginners',
  keywords: ['peptide stacking guide', 'beginner peptide stack', 'how to stack peptides', 'peptide stacking basics', 'first peptide stack', 'peptide cycling', 'peptide combinations', 'starter stack', 'peptide protocol beginner'],
})

pages.push({
  path: '/looksmaxxing-peptides-guide',
  title: 'Looksmaxxing Peptides Guide',
  keywords: ['looksmaxxing peptides', 'looksmax peptide guide', 'aesthetic peptides', 'skin peptides looksmax', 'fat loss peptides looksmax', 'body recomposition looksmax', 'ghk-cu looksmax', 'appearance optimization peptides'],
})

pages.push({
  path: '/semaglutide-vs-tirzepatide-vs-retatrutide',
  title: 'Semaglutide vs Tirzepatide vs Retatrutide',
  keywords: ['semaglutide vs tirzepatide', 'retatrutide vs tirzepatide vs semaglutide', 'glp-1 comparison', 'best fat loss peptide', 'glp-1 agonist comparison', 'retatrutide weight loss', 'tirzepatide vs semaglutide', 'metabolic peptides comparison'],
})

pages.push({
  path: '/wolverine-stack-bpc-157-tb-500',
  title: 'Wolverine Stack: BPC-157 + TB-500',
  keywords: ['wolverine stack peptide', 'bpc-157 tb-500 stack', 'bpc157 tb500 combination', 'recovery peptide stack', 'healing peptide stack', 'tissue repair stack', 'injury recovery peptides', 'bpc-157 and tb-500'],
})

pages.push({
  path: '/cjc-1295-with-dac-vs-without-dac',
  title: 'CJC-1295 With DAC vs Without DAC',
  keywords: ['cjc-1295 with dac vs without dac', 'cjc-1295 dac', 'mod grf 1-29', 'cjc-1295 half-life', 'cjc-1295 ipamorelin', 'growth hormone peptide', 'ghrh analog comparison', 'cjc-1295 dosing'],
})

pages.push({
  path: '/peptide-stack-body-recomposition',
  title: 'Peptide Stack for Body Recomposition',
  keywords: ['peptides for body recomposition', 'body recomposition peptide stack', 'muscle building fat loss peptides', 'recomp peptide protocol', 'igf-1 lr3 recomp', 'cjc-1295 ipamorelin muscle', 'peptide stack lean muscle', 'body composition peptides'],
})

pages.push({
  path: '/ghk-cu-results-timeline',
  title: 'GHK-Cu Results Timeline',
  keywords: ['ghk-cu before after', 'ghk-cu results timeline', 'copper peptide results', 'ghk-cu skin results', 'ghk-cu collagen timeline', 'ghk-cu hair growth', 'ghk copper peptide before after', 'ghk-cu dosing timeline'],
})

pages.push({
  path: '/epithalon-protocol-longevity-cycle',
  title: 'Epithalon Protocol & Longevity Cycle',
  keywords: ['epithalon protocol', 'epithalon dosing', 'epithalamin longevity', 'epithalon cycle', 'epitalon telomere', 'epithalon khavinson protocol', 'telomere extension peptide', 'longevity peptide cycle', 'epithalon 10 day cycle'],
})

pages.push({
  path: '/peptide-dosing-chart',
  title: 'Peptide Dosing Chart',
  keywords: ['peptide dosing chart', 'peptide dosage guide', 'peptide dosing reference', 'how to dose peptides', 'peptide reconstitution calculator', 'bac water peptide dosing', 'mcg to mg peptides', 'peptide dose table'],
})

pages.push({
  path: '/how-to-store-peptides',
  title: 'How to Store Peptides',
  keywords: ['how to store peptides', 'peptide storage guide', 'peptide refrigeration', 'lyophilized peptide storage', 'reconstituted peptide shelf life', 'bacteriostatic water storage', 'peptide freezer storage', 'peptide stability'],
})

// ─── BUILD LINK MAP ─────────────────────────────────────────────────────────

const linkMap: Record<string, LinkEntry[]> = {}

for (const page of pages) {
  const ranked = pages
    .filter(other => other.path !== page.path)
    .map(other => ({ path: other.path, title: other.title, score: scorePages(page, other) }))
    .filter(e => e.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 4)
    .map(({ path, title }) => ({ path, title }))

  linkMap[page.path] = ranked
}

// ─── WRITE OUTPUT ────────────────────────────────────────────────────────────

const outDir = join(process.cwd(), 'src', 'data')
mkdirSync(outDir, { recursive: true })
const outPath = join(outDir, 'link-map.json')
writeFileSync(outPath, JSON.stringify(linkMap, null, 2))

console.log(`✓ Link map generated: ${Object.keys(linkMap).length} pages → ${outPath}`)
