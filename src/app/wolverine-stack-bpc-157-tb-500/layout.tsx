import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Wolverine Stack — BPC-157 + TB-500 Recovery Protocol',
  description:
    'The Wolverine Stack: BPC-157 + TB-500 combined for maximum tissue repair. Complementary mechanisms, full dosing protocol, loading vs maintenance phases. The most studied healing peptide combination.',
  keywords: [
    'wolverine stack peptide',
    'bpc-157 tb-500 stack',
    'bpc-157 tb-500 together',
    'bpc-157 vs tb-500 which is better',
    'healing peptide stack protocol',
    'wolverine stack dosing',
    'bpc-157 tb-500 for tendons',
  ],
  openGraph: {
    title: 'The Wolverine Stack — BPC-157 + TB-500 Recovery Protocol',
    description:
      'The Wolverine Stack: BPC-157 + TB-500 combined for maximum tissue repair. Complementary mechanisms, full dosing protocol, loading vs maintenance phases.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'The Wolverine Stack — BPC-157 + TB-500 Recovery Protocol' }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Wolverine Stack — BPC-157 + TB-500 Recovery Protocol',
    description: 'BPC-157 + TB-500: complementary mechanisms, full loading and maintenance protocol. The most studied healing peptide combination.',
    images: ['/og-image.jpg'],
  },
  alternates: { canonical: 'https://www.stackspeptide.com/wolverine-stack-bpc-157-tb-500' },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'The Wolverine Stack — BPC-157 + TB-500 Recovery Protocol',
  description:
    'The Wolverine Stack: BPC-157 + TB-500 combined for maximum tissue repair. Complementary mechanisms, full dosing protocol, loading vs maintenance phases. The most studied healing peptide combination.',
  author: { '@type': 'Organization', name: 'StacksPeptide', url: 'https://www.stackspeptide.com' },
  publisher: { '@type': 'Organization', name: 'StacksPeptide', url: 'https://www.stackspeptide.com' },
  datePublished: '2024-06-01',
  dateModified: '2025-03-01',
  url: 'https://www.stackspeptide.com/wolverine-stack-bpc-157-tb-500',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.stackspeptide.com/wolverine-stack-bpc-157-tb-500',
  },
  about: [
    { '@type': 'Thing', name: 'BPC-157' },
    { '@type': 'Thing', name: 'TB-500' },
    { '@type': 'Thing', name: 'Tissue Repair' },
    { '@type': 'Thing', name: 'Recovery' },
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
