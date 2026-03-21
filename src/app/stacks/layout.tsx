import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Peptide Stacking Protocols — Proven Stack Guide',
  description:
    'Proven peptide stack protocols for every goal. CJC-1295/Ipamorelin for 4–8× GH amplification, BPC-157 + TB-500 for recovery, Retatrutide for fat loss. Build your stack today.',
  keywords: [
    'peptide stacks',
    'peptide stack protocols',
    'cjc-1295 ipamorelin stack',
    'ghk-cu epithalon stack',
    'bpc-157 tb-500 stack',
    'fat loss peptide stack',
    'anti-aging peptide stack',
    'body recomposition stack',
    'peptide combination guide',
    'retatrutide stack',
  ],
  openGraph: {
    title: 'Peptide Stacking Protocols — Proven Stack Guide | StacksPeptide',
    description:
      'Proven peptide stack protocols for every goal. CJC-1295/Ipamorelin, BPC-157 + TB-500, Retatrutide, and more. Beginner to advanced.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Peptide Stacking Protocols' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Peptide Stacking Protocols — Proven Stack Guide',
    description: 'CJC-1295/Ipamorelin, BPC-157 + TB-500, Retatrutide — proven peptide stacks for every goal.',
    images: ['/og-image.jpg'],
  },
  alternates: { canonical: 'https://www.stackspeptide.com/stacks' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
