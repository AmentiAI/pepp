import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Buy Epithalon | Telomere Extension & Longevity Guide — Trusted, Verified | StacksPeptide',
  description:
    'Buy Epithalon (Epitalon) for sale — trusted, verified. Complete guide: telomerase activation, telomere extension, 40+ years of St. Petersburg Institute data, and longevity protocol.',
  keywords: [
    'buy epithalon',
    'epithalon for sale',
    'epitalon telomere extension',
    'epithalon telomerase activation',
    'epithalon longevity guide',
    'epitalon anti-aging',
    'khavinson epithalon research',
    'epithalon st petersburg institute',
    'epithalon hTERT',
    'buy epitalon peptide',
  ],
  openGraph: {
    title: 'Buy Epithalon | Telomere Extension & Longevity Guide — Trusted, Verified | StacksPeptide',
    description:
      'Buy Epithalon (Epitalon) for sale — trusted, verified. Complete guide: telomerase activation, telomere extension, 40+ years of St. Petersburg Institute data, and longevity protocol.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Buy Epithalon | Telomere Extension & Longevity Guide — Trusted, Verified | StacksPeptide',
    description:
      'Buy Epithalon (Epitalon) for sale — trusted, verified. Complete guide: telomerase activation, telomere extension, 40+ years of St. Petersburg Institute data, and longevity protocol.',
    images: ['/og-image.jpg'],
  },
  alternates: { canonical: 'https://www.stackspeptide.com/epithalon-longevity-guide' },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Epithalon Complete Longevity Guide — Telomere Extension & Telomerase Activation',
  description:
    'Buy Epithalon (Epitalon) for sale — trusted, verified. Complete guide: telomerase activation, telomere extension, 40+ years of St. Petersburg Institute data, and longevity protocol.',
  author: { '@type': 'Organization', name: 'StacksPeptide', url: 'https://www.stackspeptide.com' },
  publisher: { '@type': 'Organization', name: 'StacksPeptide', url: 'https://www.stackspeptide.com' },
  datePublished: '2025-01-01',
  dateModified: '2026-04-13',
  url: 'https://www.stackspeptide.com/epithalon-longevity-guide',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.stackspeptide.com/epithalon-longevity-guide',
  },
  about: [
    { '@type': 'Thing', name: 'Epithalon' },
    { '@type': 'Thing', name: 'Telomere Biology' },
    { '@type': 'Thing', name: 'Telomerase Activation' },
    { '@type': 'Thing', name: 'Khavinson Research' },
    { '@type': 'Thing', name: 'Longevity Science' },
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
