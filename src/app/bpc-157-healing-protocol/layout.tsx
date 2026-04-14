import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Buy BPC-157 | Complete Healing Protocol & Dosing Guide | StacksPeptide',
  description:
    'Buy BPC-157 for sale — trusted, verified >98% purity. Complete healing protocol: tendon, gut, muscle injury recovery timeline, dosing guide, and injection sites.',
  keywords: [
    'buy BPC-157',
    'BPC-157 healing protocol',
    'BPC-157 dosing guide',
    'BPC-157 tendon repair',
    'BPC-157 gut healing',
    'BPC-157 injection sites',
    'BPC-157 recovery timeline',
    'BPC-157 vs TB-500',
    'BPC-157 mechanism of action',
    'pentadecapeptide healing',
  ],
  openGraph: {
    title: 'Buy BPC-157 | Complete Healing Protocol & Dosing Guide | StacksPeptide',
    description:
      'Buy BPC-157 for sale — trusted, verified >98% purity. Complete healing protocol: tendon, gut, muscle injury recovery timeline, dosing guide, and injection sites.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Buy BPC-157 | Complete Healing Protocol & Dosing Guide | StacksPeptide',
    description:
      'Buy BPC-157 for sale — trusted, verified >98% purity. Complete healing protocol: tendon, gut, muscle injury recovery timeline, dosing guide, and injection sites.',
    images: ['/og-image.jpg'],
  },
  alternates: { canonical: 'https://www.stackspeptide.com/bpc-157-healing-protocol' },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'BPC-157 Complete Healing Protocol — Injury Recovery, Dosing & Mechanism',
  description:
    'Buy BPC-157 for sale — trusted, verified >98% purity. Complete healing protocol: tendon, gut, muscle injury recovery timeline, dosing guide, and injection sites.',
  author: { '@type': 'Organization', name: 'StacksPeptide', url: 'https://www.stackspeptide.com' },
  publisher: { '@type': 'Organization', name: 'StacksPeptide', url: 'https://www.stackspeptide.com' },
  datePublished: '2025-01-01',
  dateModified: '2026-04-01',
  url: 'https://www.stackspeptide.com/bpc-157-healing-protocol',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.stackspeptide.com/bpc-157-healing-protocol',
  },
  about: [
    { '@type': 'Thing', name: 'BPC-157' },
    { '@type': 'Thing', name: 'Peptide Healing' },
    { '@type': 'Thing', name: 'Tendon Repair' },
    { '@type': 'Thing', name: 'Gut Health' },
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
