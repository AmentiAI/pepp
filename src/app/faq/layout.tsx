import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Peptide FAQ — Reconstitution, Dosing & Purity Answered',
  description:
    'Answers to the most common peptide questions: reconstitution, interpreting a CoA, storage, stack selection, and verifying HPLC purity. Find your answer.',
  keywords: [
    'peptide faq',
    'peptide questions answers',
    'what is a certificate of analysis',
    'peptide purity standard',
    'how to store peptides',
    'peptide shipping',
    'peptide reconstitution faq',
  ],
  alternates: { canonical: 'https://stackspeptide.com/faq' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
