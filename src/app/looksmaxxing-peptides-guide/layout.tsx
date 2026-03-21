import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Looksmaxxing Peptides — The Complete Science-Backed Stack Guide',
  description:
    'The complete looksmaxxing peptide guide: GHK-Cu for skin collagen, IGF-1 LR3 for muscle hyperplasia, Retatrutide for fat loss. Goal-to-peptide matrix + full protocols.',
  keywords: [
    'looksmaxxing peptides',
    'best peptides for looksmaxxing',
    'ghk-cu looksmaxxing',
    'igf-1 lr3 looksmaxxing',
    'snap-8 looksmaxxing',
    'peptide stack aesthetics',
    'looksmaxxing stack guide 2026',
    'peptides for jaw',
    'peptides for skin looksmaxxing',
    'facial aesthetics peptides',
  ],
  openGraph: {
    title: 'Looksmaxxing Peptides — The Complete Science-Backed Stack Guide',
    description:
      'The complete looksmaxxing peptide guide: GHK-Cu for skin collagen, IGF-1 LR3 for muscle hyperplasia, Retatrutide for fat loss. Goal-to-peptide matrix + full protocols.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Looksmaxxing Peptides — The Complete Science-Backed Stack Guide',
    description:
      'The complete looksmaxxing peptide guide: GHK-Cu for skin collagen, IGF-1 LR3 for muscle hyperplasia, Retatrutide for fat loss. Goal-to-peptide matrix + full protocols.',
    images: ['/og-image.jpg'],
  },
  alternates: { canonical: 'https://www.stackspeptide.com/looksmaxxing-peptides-guide' },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Looksmaxxing Peptides — The Complete Science-Backed Stack Guide',
  description:
    'The complete looksmaxxing peptide guide: GHK-Cu for skin collagen, IGF-1 LR3 for muscle hyperplasia, Retatrutide for fat loss. Goal-to-peptide matrix + full protocols.',
  author: { '@type': 'Organization', name: 'StacksPeptide', url: 'https://www.stackspeptide.com' },
  publisher: { '@type': 'Organization', name: 'StacksPeptide', url: 'https://www.stackspeptide.com' },
  datePublished: '2025-01-01',
  dateModified: '2026-03-01',
  url: 'https://www.stackspeptide.com/looksmaxxing-peptides-guide',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.stackspeptide.com/looksmaxxing-peptides-guide',
  },
  about: [
    { '@type': 'Thing', name: 'Looksmaxxing' },
    { '@type': 'Thing', name: 'Peptides' },
    { '@type': 'Thing', name: 'GHK-Cu' },
    { '@type': 'Thing', name: 'IGF-1 LR3' },
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
