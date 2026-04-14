import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Buy Fat Loss Peptides | Complete Comparison Guide — Trusted, Verified | StacksPeptide',
  description:
    'Best peptides for fat loss, ranked by clinical evidence. Buy trusted, verified: Retatrutide (24.2%), Tirzepatide (21%), Semaglutide (15%), and more. Complete mechanism guide.',
  keywords: [
    'peptides for fat loss',
    'best fat loss peptide',
    'retatrutide weight loss',
    'tirzepatide fat loss',
    'semaglutide weight loss',
    'GLP-1 peptide comparison',
    'ipamorelin CJC-1295 fat loss',
    'buy fat loss peptides',
  ],
  openGraph: {
    title: 'Buy Fat Loss Peptides | Complete Comparison Guide — Trusted, Verified | StacksPeptide',
    description:
      'Best peptides for fat loss, ranked by clinical evidence. Retatrutide (24.2%), Tirzepatide (21%), Semaglutide (15%), and more. Complete mechanism guide.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Peptides for Fat Loss — Complete Guide' }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Buy Fat Loss Peptides | Complete Comparison Guide | StacksPeptide',
    description:
      'Ranked by clinical evidence: Retatrutide 24.2%, Tirzepatide 21%, Semaglutide 15%. Full mechanism and stack guide.',
    images: ['/og-image.jpg'],
  },
  alternates: { canonical: 'https://www.stackspeptide.com/peptides-for-fat-loss' },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Peptides for Fat Loss — Complete Comparison Guide',
  description:
    'Best peptides for fat loss, ranked by clinical evidence. Retatrutide (24.2%), Tirzepatide (21%), Semaglutide (15%), and more. Full mechanism, stacking, and timeline guide.',
  author: { '@type': 'Organization', name: 'StacksPeptide', url: 'https://www.stackspeptide.com' },
  publisher: { '@type': 'Organization', name: 'StacksPeptide', url: 'https://www.stackspeptide.com' },
  datePublished: '2024-08-01',
  dateModified: '2025-04-01',
  url: 'https://www.stackspeptide.com/peptides-for-fat-loss',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.stackspeptide.com/peptides-for-fat-loss',
  },
  about: [
    { '@type': 'Thing', name: 'Retatrutide' },
    { '@type': 'Thing', name: 'Tirzepatide' },
    { '@type': 'Thing', name: 'Semaglutide' },
    { '@type': 'Thing', name: 'Ipamorelin' },
    { '@type': 'Thing', name: 'GLP-1 Receptor Agonist' },
    { '@type': 'Thing', name: 'Fat Loss' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which peptide causes the most fat loss?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Retatrutide produced the highest recorded pharmacological weight loss — 24.2% body weight reduction in the NEJM Phase 2 trial (2023). This surpasses both semaglutide (~14.9% in STEP-1) and tirzepatide (~21% in SURMOUNT-1). The difference is attributable to glucagon receptor co-agonism, which adds direct thermogenic activity.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is GLP-1 receptor activation different from stimulants?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GLP-1R activation mimics a natural postprandial satiety hormone, acting on hypothalamic appetite centres, delaying gastric emptying, restoring leptin sensitivity, and improving insulin signalling — without catecholamine surge or rapid receptor desensitisation that characterises stimulant-based appetite suppression.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do GLP-1 peptides cause muscle loss?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — all GLP-1 agonists carry a lean mass loss risk because the caloric deficit induced is tissue-agnostic. Studies suggest ~25–40% of total weight lost may be lean mass rather than fat. Stacking a GH secretagogue (CJC-1295 + Ipamorelin) is best practice to counter this, as elevated GH promotes lean tissue preservation during energy restriction.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best fat loss peptide stack?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For pure fat loss: Retatrutide (24.2% WL) or Tirzepatide (21% WL) alone. For recomposition: Semaglutide + Ipamorelin/CJC-1295. For aggressive fat loss with muscle preservation: Retatrutide or Tirzepatide + Ipamorelin/CJC-1295.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does GHK-Cu fit into a fat loss stack?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GHK-Cu is a supporting compound that modulates adipokine signalling, lipid metabolism genes, and inflammatory cytokines elevated in obesity. It is not a primary fat loss agent but addresses the inflammatory component of metabolic dysfunction that GLP-1 compounds do not directly target.',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  )
}
