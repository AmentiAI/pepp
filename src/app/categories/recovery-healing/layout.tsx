import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Healing Peptides — BPC-157 & TB-500 Recovery Guide',
  description:
    'BPC-157 has 120+ published studies on tendon, gut, and neural repair. TB-500 accelerates systemic tissue regeneration. Explore top healing peptides now.',
  keywords: [
    'bpc-157 peptide',
    'tb-500 peptide',
    'bpc157 healing peptide',
    'tb500 tissue repair peptide',
    'recovery peptides science',
    'healing peptide science',
    'tissue repair peptide',
    'musculoskeletal recovery peptide',
    'gut healing peptide science',
    'neural repair peptide',
    'buy bpc-157',
    'buy tb-500 peptide',
  ],
  openGraph: {
    title: 'BPC-157 & TB-500 Recovery Peptides — 120+ Published Studies | StacksPeptide',
    description:
      'BPC-157 repairs tendons, gut, and nerves. TB-500 accelerates systemic tissue regeneration. Shop the most studied healing peptides — third-party verified.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Recovery & Healing Peptides — BPC-157 & TB-500' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Recovery Peptides — BPC-157 & TB-500 (120+ Studies)',
    description: 'BPC-157 for tendon, gut and neural repair. TB-500 for systemic tissue regeneration. 120+ published studies.',
    images: ['/og-image.jpg'],
  },
  alternates: { canonical: 'https://www.stackspeptide.com/categories/recovery-healing' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
