import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Peptides for Women — Female Looksmaxxing Protocol, Dosing & Safety | StacksPeptide',
  description:
    'Women respond differently to peptides than men: lower body weight requires dose adjustment, estrogen cross-talk affects GH axis response, and cycle timing determines optimal administration windows. Complete female-specific peptide looksmaxxing protocol.',
  keywords: [
    'peptides for women looksmaxxing',
    'female peptide stack',
    'women peptide protocol',
    'ghk-cu women skin',
    'looksmaxxing women peptides',
    'peptides female body composition',
    'best peptides for women',
    'female anti-aging peptide stack',
    'women igf-1 lr3 dosing',
    'peptides for female skin',
  ],
  openGraph: {
    title: 'Peptides for Women — Female Looksmaxxing Protocol, Dosing & Safety',
    description:
      'Women require sex-specific dosing and timing strategies. Estrogen cross-talk with GH axis, cycle-aware administration, and female-optimized compound selection — full protocol.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Female Peptide Looksmaxxing Protocol' }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Peptides for Women — Female Looksmaxxing Protocol, Dosing & Safety',
    description: 'Sex-specific dosing, estrogen cross-talk with GH axis, cycle-aware timing. Complete female peptide protocol.',
    images: ['/og-image.jpg'],
  },
  alternates: { canonical: 'https://www.stackspeptide.com/peptides-for-women-looksmaxxing' },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Peptides for Women — Female Looksmaxxing Protocol, Dosing & Safety',
  description:
    'Women require sex-specific dosing and timing strategies for peptide protocols. Estrogen cross-talk with GH axis, cycle-aware administration windows, and female-optimized compound selection.',
  author: { '@type': 'Organization', name: 'StacksPeptide', url: 'https://www.stackspeptide.com' },
  publisher: { '@type': 'Organization', name: 'StacksPeptide', url: 'https://www.stackspeptide.com' },
  datePublished: '2026-04-06',
  dateModified: '2026-04-06',
  url: 'https://www.stackspeptide.com/peptides-for-women-looksmaxxing',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.stackspeptide.com/peptides-for-women-looksmaxxing' },
  about: [
    { '@type': 'Thing', name: 'Female Peptide Protocol' },
    { '@type': 'Thing', name: 'Women Looksmaxxing' },
    { '@type': 'Thing', name: 'Peptides for Women' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do women need lower peptide doses than men?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — for most peptide compounds, female starting doses are 20–30% lower than male doses, primarily due to lower average body weight and higher baseline GH sensitivity. Women naturally produce GH in larger but more irregular pulses than men, and GH secretagogues like CJC-1295/Ipamorelin should be initiated at 100–150mcg (versus 200–300mcg for men) to assess individual response before titrating upward. IGF-1 LR3 doses for women typically start at 20–30mcg versus 50–80mcg for men. GHK-Cu topical and subcutaneous dosing is broadly similar between sexes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it safe to use peptides during menstrual cycle?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Topical peptides (GHK-Cu applied to skin/scalp, SNAP-8 applied to face) are considered safe throughout the entire menstrual cycle. For injectable GH secretagogues, the follicular phase (days 1–14) is generally preferred for initiation because estrogen levels are rising and estrogen is a positive modulator of GH axis sensitivity — meaning the same dose produces a stronger signal. Avoid starting new injectable protocols during the luteal phase when progesterone dominates and may blunt GH receptor sensitivity.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can women use Retatrutide for fat loss looksmaxxing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — and women may experience superior fat loss results with Retatrutide relative to men because women have a higher proportion of visceral and subcutaneous fat as a percentage of body mass, and GLP-1/GIP/glucagon triple agonism targets both visceral and subcutaneous depots effectively. Start at 2mg weekly (versus 4mg for men) and titrate at 2-week intervals. Women in the NEJM Phase 2 Retatrutide trial showed 22–26% body weight reductions at 48 weeks on the 12mg dose, consistent with male cohort outcomes.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best peptide stack for women over 35?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'After 35, female GH output begins declining more steeply as estrogen levels start shifting toward perimenopause. The highest-ROI stack for women 35+ is: GHK-Cu (skin, collagen, hair — consistent benefit throughout life), CJC-1295/Ipamorelin at female doses (GH axis restoration), and Epithalon introduced at biannual 10-day cycles (telomere and pineal support, increasingly important as estrogen-driven circadian regulation weakens). If body composition is a primary goal, add a low-dose GLP-1 agonist (Semaglutide 0.5–1mg weekly) for metabolic support.',
      },
    },
  ],
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  )
}
