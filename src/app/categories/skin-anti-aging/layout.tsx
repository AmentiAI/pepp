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
    title: 'Anti-Aging Peptides: GHK-Cu (4,000+ Genes), Epithalon & SNAP-8 Science | StacksPeptide',
    description:
      'The most clinically documented skin and anti-aging peptides. GHK-Cu resets aging gene expression. Epithalon elongates telomeres. SNAP-8 blocks wrinkle-forming muscle contractions.',
  },
  alternates: { canonical: 'https://www.stackspeptide.com/categories/skin-anti-aging' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
