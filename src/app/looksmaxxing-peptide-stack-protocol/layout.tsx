import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The 12-Week Looksmaxxing Peptide Stack Protocol — Phase-by-Phase Guide',
  description:
    'The complete 12-week looksmaxxing peptide stack: Phase 1 skin foundation (GHK-Cu + SNAP-8), Phase 2 GH axis (CJC-1295/Ipamorelin), Phase 3 advanced layer (IGF-1 LR3, Retatrutide). Full dosing table and timeline.',
  keywords: [
    'looksmaxxing peptide stack',
    '12 week peptide protocol looksmaxxing',
    'looksmaxxing peptide cycle',
    'best peptide stack looksmaxxing 2026',
    'peptide protocol aesthetics',
    'ghk-cu snap-8 cjc-1295 stack',
    'looksmaxxing peptide stack beginner',
    'looksmaxxing stack protocol guide',
    'peptide cycle for looks',
    'peptide aesthetic stack 12 weeks',
    'how to stack peptides looksmaxxing',
  ],
  openGraph: {
    title: 'The 12-Week Looksmaxxing Peptide Stack Protocol — Phase-by-Phase Guide',
    description:
      'Phase 1 skin foundation, Phase 2 GH axis optimization, Phase 3 advanced compounds. Full dosing table, timing guide, and expected results timeline.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The 12-Week Looksmaxxing Peptide Stack Protocol — Phase-by-Phase Guide',
    description:
      'The complete 12-week looksmaxxing stack: GHK-Cu, SNAP-8, CJC-1295/Ipamorelin, IGF-1 LR3. Phase-by-phase protocol with full dosing table.',
    images: ['/og-image.jpg'],
  },
  alternates: { canonical: 'https://www.stackspeptide.com/looksmaxxing-peptide-stack-protocol' },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'The 12-Week Looksmaxxing Peptide Stack Protocol — Phase-by-Phase Guide',
  description:
    'The complete 12-week looksmaxxing peptide stack: Phase 1 skin foundation (GHK-Cu + SNAP-8), Phase 2 GH axis (CJC-1295/Ipamorelin), Phase 3 advanced layer (IGF-1 LR3, Retatrutide). Full dosing table and timeline.',
  author: { '@type': 'Organization', name: 'StacksPeptide', url: 'https://www.stackspeptide.com' },
  publisher: { '@type': 'Organization', name: 'StacksPeptide', url: 'https://www.stackspeptide.com' },
  datePublished: '2026-03-25',
  dateModified: '2026-03-25',
  url: 'https://www.stackspeptide.com/looksmaxxing-peptide-stack-protocol',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.stackspeptide.com/looksmaxxing-peptide-stack-protocol',
  },
  about: [
    { '@type': 'Thing', name: 'Looksmaxxing' },
    { '@type': 'Thing', name: 'Peptide Stack' },
    { '@type': 'Thing', name: 'GHK-Cu' },
    { '@type': 'Thing', name: 'SNAP-8' },
    { '@type': 'Thing', name: 'CJC-1295' },
    { '@type': 'Thing', name: 'Ipamorelin' },
    { '@type': 'Thing', name: 'IGF-1 LR3' },
  ],
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Run a 12-Week Looksmaxxing Peptide Stack',
  description: 'A phased approach to aesthetic optimization using research peptides: skin foundation, GH axis, and advanced compounds.',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Phase 1 — Skin Foundation (Weeks 1–4)',
      text: 'Begin with GHK-Cu (topical twice daily or 500mcg–1mg injectable 3–5x/week) and SNAP-8 (topical twice daily to expression line areas). Establish collagen synthesis and SNARE inhibition baseline. No injectable GH axis compounds yet.',
    },
    {
      '@type': 'HowToStep',
      name: 'Phase 2 — GH Axis Activation (Weeks 5–12)',
      text: 'Add CJC-1295 (no DAC) 100mcg + Ipamorelin 100–200mcg pre-sleep, 5 days on/2 off. Continue GHK-Cu and SNAP-8. Sleep-timed GHRH/GHRP stack drives 4–8x GH pulse amplification nightly for lean tissue and bone density optimization.',
    },
    {
      '@type': 'HowToStep',
      name: 'Phase 3 — Advanced Layer (Weeks 9–16, optional)',
      text: 'For intermediate/advanced subjects: add IGF-1 LR3 20–40mcg post-workout for satellite cell activation. Or add Retatrutide (GLP-3R) if submental fat reduction is primary goal. Introduce only one advanced compound at a time.',
    },
    {
      '@type': 'HowToStep',
      name: 'Post-Cycle',
      text: 'Complete 4-week minimum off-period after 12+ week cycle. Maintain GHK-Cu topical application during off-period if desired (no receptor desensitization risk). Assess results at weeks 4, 8, and 12 with standardized photography.',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best peptide stack for looksmaxxing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most comprehensive looksmaxxing peptide stack targets all four aesthetic levers simultaneously: GHK-Cu for collagen and skin tightening, SNAP-8 for expression line reduction, CJC-1295 + Ipamorelin for GH axis optimization (lean tissue, bone density, reduced facial bloat), and optionally Retatrutide for fat loss and IGF-1 LR3 for muscle density. A phased approach — starting with skin compounds, then adding the GH axis layer — is safer and more effective than beginning all compounds simultaneously.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long should a looksmaxxing peptide cycle be?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The standard looksmaxxing peptide cycle is 12 weeks for GH secretagogue compounds (CJC-1295/Ipamorelin), followed by a 4-week minimum off-period. GHK-Cu can run for 12 weeks with a 4-week break, or be used topically with more flexibility. SNAP-8 requires ongoing daily application for maintained results. GLP-1 agonists like Retatrutide follow longer clinical titration schedules. Most users run two 12-week GH axis cycles per year.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can beginners run a full looksmaxxing peptide stack?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Beginners should start with the Phase 1 skin foundation only: GHK-Cu + SNAP-8 topically. This represents the lowest-risk, high-impact entry point — no injectable peptides, no GH axis compounds, no receptor desensitization concern. After completing one full skin protocol cycle (12 weeks), add CJC-1295/Ipamorelin as the second layer. Advanced compounds like IGF-1 LR3 should only be introduced after at least one complete GH secretagogue cycle.',
      },
    },
  ],
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  )
}
