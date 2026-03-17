import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GLP-1 Fat Loss Peptides — Retatrutide & Semaglutide',
  description:
    'Retatrutide achieved 24.2% weight loss in NEJM 2023 Phase 2 trials — the highest ever recorded. Compare GLP-1 & triple agonist options. Find yours now.',
  keywords: [
    'retatrutide peptide',
    'tirzepatide science',
    'semaglutide peptide',
    'glp-1 peptide science',
    'fat loss peptides',
    'triple agonist peptide',
    'metabolic peptides',
    'glp-1 glp-2 gcg agonist',
    'best fat loss peptide science',
    '24.2% weight loss peptide',
    'weight loss compounds',
  ],
  openGraph: {
    title: 'Fat Loss Peptides: Retatrutide Achieved 24.2% Weight Reduction — NEJM 2023 | StacksPeptide',
    description:
      'Triple receptor agonism. Retatrutide produced the highest pharmacological weight loss ever recorded in a clinical trial. Compare all GLP agonist generations.',
  },
  alternates: { canonical: 'https://www.stackspeptide.com/categories/metabolic-fat-loss' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
