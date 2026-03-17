import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Muscle Growth Peptides — IGF-1 LR3 & CJC-1295 Guide',
  description:
    'IGF-1 LR3 delivers 3× native IGF-1 potency for muscle hyperplasia. CJC-1295/Ipamorelin amplifies GH pulses 4-8× with no cortisol spike. Build your stack.',
  keywords: [
    'igf-1 lr3 peptide',
    'cjc-1295 ipamorelin stack',
    'ipamorelin peptide',
    'growth hormone peptide science',
    'ghrh peptide science',
    'muscle building peptide science',
    'body composition peptides',
    'satellite cell activation peptide',
    'gh secretagogue peptide',
    'growth peptide stack',
    'cjc1295 dac science',
    'body recomposition peptide',
  ],
  openGraph: {
    title: 'Growth & Body Comp Peptides: IGF-1 LR3, CJC-1295/Ipamorelin Stack | StacksPeptide',
    description:
      'IGF-1 LR3 triggers satellite cell activation for muscle hyperplasia. CJC-1295/Ipamorelin amplifies GH pulses 4–8× with zero cortisol. Elite body composition peptides.',
  },
  alternates: { canonical: 'https://www.stackspeptide.com/categories/growth-body-comp' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
