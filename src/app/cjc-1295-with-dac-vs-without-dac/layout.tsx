import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CJC-1295 With DAC vs. Without DAC — Which Form Should You Use?',
  description:
    'CJC-1295 with DAC vs without DAC (Mod GRF 1-29): half-life, GH pulse pattern, dosing frequency, and which to choose for your protocol. Full science comparison.',
  keywords: [
    'cjc-1295 with dac vs without dac',
    'modified grf 1-29 vs cjc-1295',
    'cjc 1295 no dac',
    'mod grf 1-29 protocol',
    'cjc-1295 dac half life',
    'which cjc-1295 to use',
    'cjc-1295 ipamorelin dac',
  ],
  openGraph: {
    title: 'CJC-1295 With DAC vs. Without DAC — Which Form Should You Use?',
    description:
      'CJC-1295 with DAC vs without DAC (Mod GRF 1-29): half-life, GH pulse pattern, dosing frequency, and which to choose for your protocol.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'CJC-1295 With DAC vs Without DAC Comparison' }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CJC-1295 With DAC vs. Without DAC — Which Form Should You Use?',
    description: 'CJC-1295 with DAC vs without DAC: half-life, GH pulse, dosing frequency, and which to choose for your protocol.',
    images: ['/og-image.jpg'],
  },
  alternates: { canonical: 'https://www.stackspeptide.com/cjc-1295-with-dac-vs-without-dac' },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'CJC-1295 With DAC vs. Without DAC — Which Form Should You Use?',
  description:
    'CJC-1295 with DAC vs without DAC (Mod GRF 1-29): half-life, GH pulse pattern, dosing frequency, and which to choose for your protocol. Full science comparison.',
  author: { '@type': 'Organization', name: 'StacksPeptide', url: 'https://www.stackspeptide.com' },
  publisher: { '@type': 'Organization', name: 'StacksPeptide', url: 'https://www.stackspeptide.com' },
  datePublished: '2024-06-01',
  dateModified: '2025-03-01',
  url: 'https://www.stackspeptide.com/cjc-1295-with-dac-vs-without-dac',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.stackspeptide.com/cjc-1295-with-dac-vs-without-dac',
  },
  about: [
    { '@type': 'Thing', name: 'CJC-1295' },
    { '@type': 'Thing', name: 'Mod GRF 1-29' },
    { '@type': 'Thing', name: 'Growth Hormone Secretagogue' },
    { '@type': 'Thing', name: 'Ipamorelin' },
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
