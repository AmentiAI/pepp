import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Longevity Peptides — Epithalon & Telomere Science',
  description:
    'Epithalon is the only peptide with 40+ years of telomere elongation data. NAD+ restores sirtuin and mitochondrial function. Explore longevity compounds.',
  keywords: [
    'epithalon telomere peptide',
    'nad+ longevity science',
    'longevity peptides science',
    'telomere extension peptide',
    'sirtuin pathway nad+',
    'anti-aging longevity compound',
    'epithalon anti-aging science',
    'cellular aging peptide',
    'lifespan extension peptide',
    'mitochondrial health peptide',
    'nad+ compound',
  ],
  openGraph: {
    title: 'Longevity Peptides: Epithalon (Telomere Extension) & NAD+ — 40+ Years Data | StacksPeptide',
    description:
      'Epithalon activates telomerase. NAD+ restores sirtuin pathways. The two most validated longevity compounds backed by 40+ years of published data.',
  },
  alternates: { canonical: 'https://www.stackspeptide.com/categories/longevity' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
