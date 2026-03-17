import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Looksmaxxing Peptides — Complete Science-Backed Guide',
  description:
    'Best peptides for looksmaxxing: GHK-Cu modulates 4,000+ genes for skin. IGF-1 LR3 drives muscle hyperplasia 3× over native IGF-1. Explore protocols now.',
  keywords: [
    'looksmaxxing peptides',
    'peptide looksmax guide',
    'ghk-cu looksmaxxing',
    'igf-1 looksmaxxing',
    'peptide aesthetics stack',
    'physical optimization peptides',
    'skin peptides looksmaxing',
    'muscle growth peptides',
    'peptide protocol guide',
  ],
  alternates: { canonical: 'https://www.stackspeptide.com/looksmaxxing' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
