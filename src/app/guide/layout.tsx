import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Complete Peptide Stacking & Protocol Guide — Beginner to Advanced',
  description:
    'The complete peptide stacking guide: reconstitution, dosing frameworks, storage, compound selection, and 24+ documented protocols. Start here today.',
  keywords: [
    'peptide guide',
    'peptide stacking guide',
    'peptide beginners guide',
    'how to use peptides',
    'peptide reconstitution guide',
    'peptide storage guide',
    'peptide dosing',
    'peptide lab protocols',
    'what are peptides',
    'peptide stacking protocols',
  ],
  openGraph: {
    title: 'Complete Peptide Stacking & Protocol Guide | StacksPeptide',
    description:
      'The complete peptide stacking guide: reconstitution, dosing frameworks, storage, compound selection, and 24+ documented protocols.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'StacksPeptide Peptide Guide' }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Complete Peptide Stacking & Protocol Guide',
    description: 'Reconstitution, dosing frameworks, compound selection, and 24+ peptide stacking protocols — all in one guide.',
    images: ['/og-image.jpg'],
  },
  alternates: { canonical: 'https://www.stackspeptide.com/guide' },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'The Complete Peptide Stacking & Protocol Guide',
  description: 'Beginner-to-advanced guide covering reconstitution, dosing, storage, compound selection, stacking principles, and 24+ documented peptide protocols.',
  author: { '@type': 'Organization', name: 'StacksPeptide', url: 'https://www.stackspeptide.com' },
  publisher: { '@type': 'Organization', name: 'StacksPeptide', url: 'https://www.stackspeptide.com' },
  datePublished: '2024-06-01',
  dateModified: '2025-03-01',
  url: 'https://www.stackspeptide.com/guide',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.stackspeptide.com/guide' },
  about: [
    { '@type': 'Thing', name: 'Peptide Science' },
    { '@type': 'Thing', name: 'Peptide Stacking Protocols' },
    { '@type': 'Thing', name: 'BPC-157' },
    { '@type': 'Thing', name: 'GHK-Cu' },
    { '@type': 'Thing', name: 'Retatrutide' },
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
