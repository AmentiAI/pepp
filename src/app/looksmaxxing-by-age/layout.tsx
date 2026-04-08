import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Looksmaxxing Peptides by Age — 20s, 30s, 40s & 50+ Protocol Guide | StacksPeptide',
  description:
    'Your optimal peptide stack changes with age. GH output declines 14% per decade. Collagen synthesis falls 1.5% annually after 25. Telomere attrition accelerates at 35. Age-specific stacks, dosing, and expected results — by decade.',
  keywords: [
    'looksmaxxing peptides by age',
    'peptide stack for 30s',
    'peptide stack for 40s',
    'peptide protocol by age',
    'anti-aging peptides age guide',
    'peptides in your 20s',
    'looksmaxxing over 40',
    'best peptides for 50s',
    'age-specific peptide protocol',
    'collagen decline by age peptides',
  ],
  openGraph: {
    title: 'Looksmaxxing Peptides by Age — 20s, 30s, 40s & 50+ Protocol Guide',
    description:
      'GH output drops 14% per decade. Collagen falls 1.5% annually after 25. Age-calibrated peptide stacks with decade-specific dosing, compounds, and results timelines.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Looksmaxxing Peptides by Age Guide' }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Looksmaxxing Peptides by Age — 20s, 30s, 40s & 50+ Protocol Guide',
    description: 'Age-calibrated peptide stacks for every decade. GH decline, collagen loss, and how to offset both.',
    images: ['/og-image.jpg'],
  },
  alternates: { canonical: 'https://www.stackspeptide.com/looksmaxxing-by-age' },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Looksmaxxing Peptides by Age — 20s, 30s, 40s & 50+ Protocol Guide',
  description:
    'Age-calibrated peptide stacks with decade-specific dosing, compounds, and results timelines. GH output declines 14% per decade; collagen synthesis falls 1.5% annually after 25.',
  author: { '@type': 'Organization', name: 'StacksPeptide', url: 'https://www.stackspeptide.com' },
  publisher: { '@type': 'Organization', name: 'StacksPeptide', url: 'https://www.stackspeptide.com' },
  datePublished: '2026-04-06',
  dateModified: '2026-04-06',
  url: 'https://www.stackspeptide.com/looksmaxxing-by-age',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.stackspeptide.com/looksmaxxing-by-age' },
  about: [
    { '@type': 'Thing', name: 'Looksmaxxing' },
    { '@type': 'Thing', name: 'Age-Specific Peptide Protocol' },
    { '@type': 'Thing', name: 'Anti-Aging Peptides' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best peptide stack for someone in their 20s?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In your 20s, GH output is still high so GH secretagogues provide amplification rather than replacement. The highest-ROI stack for 20s looksmaxxing is GHK-Cu for skin quality, body composition optimization via IGF-1 LR3 or CJC-1295/Ipamorelin, and BPC-157 for injury prevention and joint health. Avoid Epithalon and telomere compounds — the telomere attrition rate at 20 is low and the compound is better deployed in the 40s and 50s when the payoff is highest.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do peptides work less effectively as you get older?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No — in many cases, peptides provide more measurable benefit as you age because you are working against a steeper baseline deficit. A 25-year-old using CJC-1295/Ipamorelin amplifies an already-robust GH output. A 45-year-old using the same stack elevates GH from a 55–60% depleted baseline, producing more noticeable changes in body composition and skin quality. The compounds remain pharmacologically active across age groups; the relative benefit simply increases as baseline deteriorates.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should I add Epithalon to my stack?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Epithalon is most strategically deployed starting in your mid-to-late 30s, when telomere attrition rate begins accelerating and pineal melatonin output measurably declines. Before 35, the ROI of Epithalon is lower because telomere length is still relatively maintained. After 35–40, biannual 10-day Epithalon cycles (the Khavinson protocol) provide meaningful intervention in the two biological clocks that most affect aesthetic aging: cellular senescence and circadian rhythm degradation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can someone over 50 achieve meaningful results with peptides?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — and with more dramatic baseline-relative changes than younger users. At 50+, GH output has fallen to roughly 40% of peak, collagen synthesis is down 40–45%, and telomere length has shortened by approximately 20–25% from young adult levels. GH secretagogues, GHK-Cu, and Epithalon are addressing real and measurable deficits. Published Epithalon research includes subjects in their 60s and 70s demonstrating telomere elongation, improved sleep architecture, and reduced biomarkers of cellular aging.',
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
