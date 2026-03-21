import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Epithalon Protocol — The Complete Longevity Cycle Guide',
  description:
    'The complete Epithalon protocol: 10-day vs 20-day cycles, 5mg vs 10mg dosing, AM vs PM timing, the Khavinson longevity research origin, and stacking with NAD+. 40+ years of telomere data.',
  keywords: [
    'epithalon protocol',
    'epithalon longevity cycle',
    'epitalon protocol',
    'epithalon dosing schedule',
    'epithalon telomere results',
    'epithalon nad+ stack',
    'epithalon 10 day cycle',
    'epithalon anti-aging dosing',
    'khavinson peptide protocol',
    'epithalon before bed',
  ],
  openGraph: {
    title: 'Epithalon Protocol — The Complete Longevity Cycle Guide',
    description:
      'The complete Epithalon protocol: 10-day vs 20-day cycles, 5mg vs 10mg dosing, AM vs PM timing, the Khavinson longevity research origin, and stacking with NAD+. 40+ years of telomere data.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Epithalon Protocol — The Complete Longevity Cycle Guide',
    description:
      'The complete Epithalon protocol: 10-day vs 20-day cycles, 5mg vs 10mg dosing, AM vs PM timing, the Khavinson longevity research origin, and stacking with NAD+. 40+ years of telomere data.',
    images: ['/og-image.jpg'],
  },
  alternates: { canonical: 'https://www.stackspeptide.com/epithalon-protocol-longevity-cycle' },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Epithalon Protocol — The Complete Longevity Cycle Guide',
  description:
    'The complete Epithalon protocol: 10-day vs 20-day cycles, 5mg vs 10mg dosing, AM vs PM timing, the Khavinson longevity research origin, and stacking with NAD+. 40+ years of telomere data.',
  author: { '@type': 'Organization', name: 'StacksPeptide', url: 'https://www.stackspeptide.com' },
  publisher: { '@type': 'Organization', name: 'StacksPeptide', url: 'https://www.stackspeptide.com' },
  datePublished: '2025-01-01',
  dateModified: '2026-03-01',
  url: 'https://www.stackspeptide.com/epithalon-protocol-longevity-cycle',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.stackspeptide.com/epithalon-protocol-longevity-cycle',
  },
  about: [
    { '@type': 'Thing', name: 'Epithalon' },
    { '@type': 'Thing', name: 'Telomere Biology' },
    { '@type': 'Thing', name: 'Longevity Science' },
    { '@type': 'Thing', name: 'Khavinson Research' },
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
