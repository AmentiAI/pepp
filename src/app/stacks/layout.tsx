import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Peptide Stacking Protocols — Proven Stack Guide',
  description:
    'Proven peptide stack protocols for every goal. CJC-1295/Ipamorelin for 4-8× GH amplification, BPC-157 + TB-500 for recovery. Build your ideal stack today.',
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
  ],
  alternates: { canonical: 'https://stackspeptide.com/stacks' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
