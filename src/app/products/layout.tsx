import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Buy Research Peptides — Complete Peptide Catalog',
  description:
    'Browse our complete peptide catalog: 24+ HPLC-verified compounds — GHK-Cu, BPC-157, Retatrutide & IGF-1 LR3. >98% purity, CoA with every order. Shop now.',
  keywords: [
    'peptide catalog',
    'buy peptides',
    'ghk-cu for sale',
    'bpc-157 peptide',
    'retatrutide science',
    'tirzepatide peptide',
    'epithalon peptide',
    'igf-1 lr3 science',
    'tb-500 peptide',
    'third-party tested peptides',
    'hplc verified peptides',
  ],
  openGraph: {
    title: 'Peptide Catalog — 24+ Third-Party Tested Compounds | StacksPeptide',
    description:
      '24+ independently tested peptides — GHK-Cu, BPC-157, Retatrutide, Tirzepatide & more. All HPLC verified >98% purity with CoA documentation.',
  },
  alternates: { canonical: 'https://www.stackspeptide.com/products' },
}

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
