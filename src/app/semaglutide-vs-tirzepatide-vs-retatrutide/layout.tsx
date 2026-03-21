import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Semaglutide vs. Tirzepatide vs. Retatrutide — Complete GLP-1 Comparison',
  description:
    'Semaglutide vs tirzepatide vs retatrutide: mechanisms, clinical trial efficacy, side effects, and which to choose. Retatrutide achieved 24.2% weight loss in NEJM 2023 — the highest ever recorded.',
  keywords: [
    'retatrutide vs tirzepatide vs semaglutide',
    'best glp-1 peptide',
    'tirzepatide vs semaglutide comparison',
    'triple agonist vs dual agonist',
    'retatrutide weight loss',
    'glp-1 body recomposition',
    'semaglutide muscle loss prevention',
  ],
  openGraph: {
    title: 'Semaglutide vs. Tirzepatide vs. Retatrutide — Complete GLP-1 Comparison',
    description:
      'Semaglutide vs tirzepatide vs retatrutide: mechanisms, clinical trial efficacy, side effects, and which to choose. Retatrutide achieved 24.2% weight loss in NEJM 2023.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Semaglutide vs Tirzepatide vs Retatrutide Comparison' }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Semaglutide vs. Tirzepatide vs. Retatrutide — Complete GLP-1 Comparison',
    description:
      'Semaglutide vs tirzepatide vs retatrutide: mechanisms, clinical trial efficacy, side effects, and which to choose.',
    images: ['/og-image.jpg'],
  },
  alternates: { canonical: 'https://www.stackspeptide.com/semaglutide-vs-tirzepatide-vs-retatrutide' },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Semaglutide vs. Tirzepatide vs. Retatrutide — Complete GLP-1 Comparison',
  description:
    'Semaglutide vs tirzepatide vs retatrutide: mechanisms, clinical trial efficacy, side effects, and which to choose. Retatrutide achieved 24.2% weight loss in NEJM 2023 — the highest ever recorded.',
  author: { '@type': 'Organization', name: 'StacksPeptide', url: 'https://www.stackspeptide.com' },
  publisher: { '@type': 'Organization', name: 'StacksPeptide', url: 'https://www.stackspeptide.com' },
  datePublished: '2024-06-01',
  dateModified: '2025-03-01',
  url: 'https://www.stackspeptide.com/semaglutide-vs-tirzepatide-vs-retatrutide',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.stackspeptide.com/semaglutide-vs-tirzepatide-vs-retatrutide',
  },
  about: [
    { '@type': 'Thing', name: 'Semaglutide' },
    { '@type': 'Thing', name: 'Tirzepatide' },
    { '@type': 'Thing', name: 'Retatrutide' },
    { '@type': 'Thing', name: 'GLP-1 Receptor Agonist' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which GLP-1 peptide causes the most weight loss?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Retatrutide produced the highest recorded pharmacological weight loss — 24.2% body weight reduction in the NEJM Phase 2 trial published in 2023. This surpasses both semaglutide (~15% in STEP trials) and tirzepatide (~22.5% in SURMOUNT-1).',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between semaglutide and tirzepatide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Semaglutide is a GLP-1 mono-agonist — it targets only the GLP-1 receptor to suppress appetite and slow gastric emptying. Tirzepatide is a dual agonist targeting both GLP-1 and GIP receptors, adding enhanced insulin sensitization and greater metabolic effect, resulting in higher average weight loss (~22.5% vs ~15%).',
      },
    },
    {
      '@type': 'Question',
      name: 'Does retatrutide cause muscle loss?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Like all GLP-1 agonists, retatrutide can cause lean mass reduction alongside fat loss during aggressive caloric restriction. Stacking GH secretagogues — specifically CJC-1295 + Ipamorelin — during any GLP-1 protocol provides a meaningful mitigation strategy by amplifying growth hormone pulses, which actively supports lean tissue preservation and anabolism.',
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
