import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Looksmaxxing Peptides — Best Science-Backed Protocol Guide',
  description:
    'The best peptides for looksmaxxing: GHK-Cu modulates 4,000+ genes for skin regeneration, IGF-1 LR3 drives true muscle hyperplasia. Full protocol guide — start now.',
  keywords: [
    'looksmaxxing peptides',
    'best looksmaxxing peptides',
    'peptide looksmax guide',
    'ghk-cu looksmaxxing',
    'igf-1 looksmaxxing',
    'peptide aesthetics stack',
    'physical optimization peptides',
    'skin peptides looksmaxxing',
    'muscle growth peptides',
    'peptide protocol guide',
    'aesthetic peptide stack',
  ],
  openGraph: {
    title: 'Looksmaxxing with Peptides — Best Science-Backed Protocol Guide | StacksPeptide',
    description:
      'GHK-Cu modulates 4,000+ genes for skin. IGF-1 LR3 triggers muscle hyperplasia. Retatrutide for fat loss. The complete science-backed looksmaxxing peptide protocol.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Looksmaxxing with Peptides Guide' }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Looksmaxxing Peptides — Best Science-Backed Protocol Guide',
    description: 'GHK-Cu, IGF-1 LR3, Retatrutide — the complete science-backed looksmaxxing peptide protocol.',
    images: ['/og-image.jpg'],
  },
  alternates: { canonical: 'https://www.stackspeptide.com/looksmaxxing' },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Looksmaxxing with Peptides — Best Science-Backed Protocol Guide',
  description: 'The complete science-backed looksmaxxing peptide protocol. GHK-Cu for skin, IGF-1 LR3 for muscle hyperplasia, Retatrutide for fat loss, BPC-157 for recovery.',
  author: { '@type': 'Organization', name: 'StacksPeptide', url: 'https://www.stackspeptide.com' },
  publisher: { '@type': 'Organization', name: 'StacksPeptide', url: 'https://www.stackspeptide.com' },
  datePublished: '2024-06-01',
  dateModified: '2025-03-01',
  url: 'https://www.stackspeptide.com/looksmaxxing',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.stackspeptide.com/looksmaxxing' },
  about: [
    { '@type': 'Thing', name: 'Looksmaxxing' },
    { '@type': 'Thing', name: 'GHK-Cu Peptide' },
    { '@type': 'Thing', name: 'IGF-1 LR3 Peptide' },
    { '@type': 'Thing', name: 'Aesthetic Optimization' },
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
