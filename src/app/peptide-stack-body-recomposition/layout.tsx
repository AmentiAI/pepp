import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Peptides for Body Recomposition — Lose Fat & Build Muscle Simultaneously',
  description:
    'The complete peptide stack for body recomposition: IGF-1 LR3 for muscle hyperplasia, CJC-1295/Ipamorelin for GH axis, BPC-157 for recovery, and GLP-1 stacking for muscle preservation. Tiered protocols.',
  keywords: [
    'peptides for body recomposition',
    'body recomp peptide stack',
    'best peptide stack lean muscle',
    'semaglutide muscle preservation stack',
    'peptide stack fat loss muscle gain',
    'igf-1 lr3 recomp',
    'cjc ipamorelin body recomposition',
    'peptide recomp protocol',
  ],
  openGraph: {
    title: 'Peptides for Body Recomposition — Lose Fat & Build Muscle Simultaneously',
    description:
      'The complete peptide stack for body recomposition: IGF-1 LR3, CJC-1295/Ipamorelin, BPC-157, and GLP-1 stacking for muscle preservation. Tiered beginner to advanced protocols.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Peptides for Body Recomposition' }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Peptides for Body Recomposition — Lose Fat & Build Muscle Simultaneously',
    description:
      'IGF-1 LR3, CJC-1295/Ipamorelin, BPC-157, and GLP-1 stacking for muscle preservation. Complete tiered recomp protocols.',
    images: ['/og-image.jpg'],
  },
  alternates: { canonical: 'https://www.stackspeptide.com/peptide-stack-body-recomposition' },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Peptides for Body Recomposition — Lose Fat & Build Muscle Simultaneously',
  description:
    'The complete peptide stack for body recomposition: IGF-1 LR3 for muscle hyperplasia, CJC-1295/Ipamorelin for GH axis, BPC-157 for recovery, and GLP-1 stacking for muscle preservation. Tiered protocols.',
  author: { '@type': 'Organization', name: 'StacksPeptide', url: 'https://www.stackspeptide.com' },
  publisher: { '@type': 'Organization', name: 'StacksPeptide', url: 'https://www.stackspeptide.com' },
  datePublished: '2025-01-01',
  dateModified: '2026-03-01',
  url: 'https://www.stackspeptide.com/peptide-stack-body-recomposition',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.stackspeptide.com/peptide-stack-body-recomposition',
  },
  about: [
    { '@type': 'Thing', name: 'Body Recomposition' },
    { '@type': 'Thing', name: 'IGF-1 LR3' },
    { '@type': 'Thing', name: 'CJC-1295' },
    { '@type': 'Thing', name: 'Ipamorelin' },
    { '@type': 'Thing', name: 'BPC-157' },
    { '@type': 'Thing', name: 'Muscle Hyperplasia' },
    { '@type': 'Thing', name: 'Fat Loss' },
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
