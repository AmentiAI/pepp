import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Longevity Peptides — Epithalon & Telomere Science',
  description:
    'Epithalon is the only peptide with 40+ years of telomere elongation data. NAD+ restores sirtuin and mitochondrial function. Shop longevity compounds now.',
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
    title: 'Longevity Peptides: Epithalon (Telomere Extension) & NAD+ | StacksPeptide',
    description:
      'Epithalon activates telomerase. NAD+ restores sirtuin pathways. The two most validated longevity compounds backed by 40+ years of published data.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Longevity Peptides — Epithalon & NAD+' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Longevity Peptides — Epithalon & NAD+',
    description: 'Epithalon activates telomerase. NAD+ restores sirtuin pathways. 40+ years of published longevity data.',
    images: ['/og-image.jpg'],
  },
  alternates: { canonical: 'https://www.stackspeptide.com/categories/longevity' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
