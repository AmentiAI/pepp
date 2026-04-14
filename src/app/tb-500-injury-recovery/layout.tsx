import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Buy TB-500 | Thymosin Beta-4 Injury Recovery Guide — Systemic Healing Protocol | StacksPeptide',
  description:
    'Buy TB-500 (Thymosin Beta-4) for sale — trusted, verified >98% purity. Complete injury recovery guide: tendon, muscle, cardiac, neural healing protocol and dosing.',
  keywords: [
    'buy tb-500',
    'tb-500 for sale',
    'thymosin beta-4',
    'tb-500 injury recovery',
    'tb-500 dosing protocol',
    'tb-500 vs bpc-157',
    'tb-500 tendon healing',
    'tb-500 muscle recovery',
    'tb-500 cardiac healing',
    'systemic healing peptide',
    'wolverine stack',
    'tb-500 peptide',
  ],
  openGraph: {
    title: 'Buy TB-500 | Thymosin Beta-4 Injury Recovery Guide | StacksPeptide',
    description:
      'TB-500 (Thymosin Beta-4) — the systemic healing peptide. Complete guide: mechanism, tissue applications, recovery timeline, dosing protocol, and comparison with BPC-157.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'TB-500 Thymosin Beta-4 Injury Recovery Guide' }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TB-500 Complete Injury Recovery Guide — Systemic Healing Protocol',
    description:
      'TB-500 (Thymosin Beta-4): actin-binding mechanism, tendon/muscle/cardiac/neural healing, dosing protocol, and BPC-157 comparison.',
    images: ['/og-image.jpg'],
  },
  alternates: { canonical: 'https://www.stackspeptide.com/tb-500-injury-recovery' },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'TB-500 (Thymosin Beta-4) Complete Injury Recovery Guide — Systemic Healing Protocol',
  description:
    'TB-500 (Thymosin Beta-4): complete guide covering actin-binding mechanism, tissue applications across tendon, muscle, cardiac, and neural tissue, recovery timeline, dosing protocol, and BPC-157 comparison.',
  author: { '@type': 'Organization', name: 'StacksPeptide', url: 'https://www.stackspeptide.com' },
  publisher: { '@type': 'Organization', name: 'StacksPeptide', url: 'https://www.stackspeptide.com' },
  datePublished: '2025-01-01',
  dateModified: '2026-04-13',
  url: 'https://www.stackspeptide.com/tb-500-injury-recovery',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.stackspeptide.com/tb-500-injury-recovery',
  },
  about: [
    { '@type': 'Thing', name: 'TB-500' },
    { '@type': 'Thing', name: 'Thymosin Beta-4' },
    { '@type': 'Thing', name: 'Tissue Repair' },
    { '@type': 'Thing', name: 'Injury Recovery' },
    { '@type': 'Thing', name: 'Actin-Binding Mechanism' },
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
