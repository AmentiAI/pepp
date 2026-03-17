import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Complete Peptide Guide — Beginner to Advanced Science',
  description:
    'Our complete beginner-to-advanced peptide guide covers reconstitution, dosing, storage, compound selection & 24+ documented protocols. Start here today.',
  keywords: [
    'peptide guide',
    'peptide beginners guide',
    'how to use peptides',
    'peptide reconstitution guide',
    'peptide storage guide',
    'peptide dosing',
    'peptide lab protocols',
    'what are peptides',
  ],
  alternates: { canonical: 'https://stackspeptide.com/guide' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
