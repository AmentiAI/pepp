import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Skin & Anti-Aging Peptides — GHK-Cu, SNAP-8 Guide',
  description:
    'GHK-Cu modulates 4,000+ genes to boost collagen and reverse skin aging. Pair with SNAP-8 for expression wrinkles. Explore the science and get started.',
  keywords: [
    'ghk-cu copper peptide anti-aging',
    'epithalon telomere peptide',
    'snap-8 anti-wrinkle peptide',
    'anti-aging peptides science',
    'skin regeneration peptides',
    'collagen synthesis peptide',
    'peptide looksmaxxing',
    'dermal regeneration peptide',
    'wrinkle reduction peptide science',
    '4000 genes ghk-cu',
    'copper peptide skin studies',
  ],
  openGraph: {
    title: 'Anti-Aging Peptides: GHK-Cu (4,000+ Genes), Epithalon & SNAP-8 | StacksPeptide',
    description:
      'GHK-Cu resets aging skin biology at the gene level. Epithalon elongates telomeres. SNAP-8 blocks expression wrinkles. Shop third-party tested compounds.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Skin & Anti-Aging Peptides' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Skin & Anti-Aging Peptides — GHK-Cu, SNAP-8 & Epithalon',
    description: 'GHK-Cu modulates 4,000+ genes. Epithalon elongates telomeres. SNAP-8 reduces expression wrinkles. Third-party tested.',
    images: ['/og-image.jpg'],
  },
  alternates: { canonical: 'https://www.stackspeptide.com/categories/skin-anti-aging' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
