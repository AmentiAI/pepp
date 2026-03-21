import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GHK-Cu Results Timeline — What to Expect Week by Week',
  description:
    'GHK-Cu results timeline: skin texture changes by week 4, collagen density at week 8, measurable wrinkle reduction at week 12. Clinical data + real-world protocol guide.',
  keywords: [
    'ghk-cu before after results',
    'ghk-cu results timeline',
    'copper peptide before after',
    'ghk-cu 12 week results',
    'ghk-cu collagen results',
    'ghk-cu injectable vs topical',
    'ghk-cu hair regrowth results',
    'copper peptide skin timeline',
  ],
  openGraph: {
    title: 'GHK-Cu Results Timeline — What to Expect Week by Week',
    description:
      'GHK-Cu results timeline: skin texture changes by week 4, collagen density at week 8, measurable wrinkle reduction at week 12. Clinical data + real-world protocol guide.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GHK-Cu Results Timeline — What to Expect Week by Week',
    description:
      'GHK-Cu results timeline: skin texture changes by week 4, collagen density at week 8, measurable wrinkle reduction at week 12. Clinical data + real-world protocol guide.',
    images: ['/og-image.jpg'],
  },
  alternates: { canonical: 'https://www.stackspeptide.com/ghk-cu-results-timeline' },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'GHK-Cu Results Timeline — What to Expect Week by Week',
  description:
    'GHK-Cu results timeline: skin texture changes by week 4, collagen density at week 8, measurable wrinkle reduction at week 12. Clinical data + real-world protocol guide.',
  author: { '@type': 'Organization', name: 'StacksPeptide', url: 'https://www.stackspeptide.com' },
  publisher: { '@type': 'Organization', name: 'StacksPeptide', url: 'https://www.stackspeptide.com' },
  datePublished: '2025-01-01',
  dateModified: '2026-03-01',
  url: 'https://www.stackspeptide.com/ghk-cu-results-timeline',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.stackspeptide.com/ghk-cu-results-timeline',
  },
  about: [
    { '@type': 'Thing', name: 'GHK-Cu' },
    { '@type': 'Thing', name: 'Skin Science' },
    { '@type': 'Thing', name: 'Collagen Synthesis' },
  ],
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {children}
    </>
  )
}
