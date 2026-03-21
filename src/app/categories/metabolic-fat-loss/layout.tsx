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
    title: 'Fat Loss Peptides: Retatrutide 24.2% Weight Loss — NEJM 2023 | StacksPeptide',
    description:
      'Retatrutide produced the highest pharmacological weight loss ever recorded. Compare all GLP agonist generations and shop third-party tested compounds.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Metabolic & Fat Loss Peptides' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fat Loss Peptides — Retatrutide, Tirzepatide & Semaglutide',
    description: 'Retatrutide: 24.2% weight loss (NEJM 2023). Compare all GLP agonist generations.',
    images: ['/og-image.jpg'],
  },
  alternates: { canonical: 'https://www.stackspeptide.com/categories/metabolic-fat-loss' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
