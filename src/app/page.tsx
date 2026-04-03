import type { Metadata } from 'next'
import HomeClient from './HomeClient'
import ResearchFeed from '@/components/ResearchFeed'

export const metadata: Metadata = {
  title: 'StacksPeptide — Premium Peptide Stacking Protocols & Science Guide',
  description:
    'The #1 peptide stacking resource. 24 third-party tested compounds — GHK-Cu, BPC-157, Retatrutide, Epithalon, IGF-1 LR3 & more. Certificate of Analysis every order. Shop our supplier.',
  alternates: {
    canonical: 'https://www.stackspeptide.com',
  },
  openGraph: {
    url: 'https://www.stackspeptide.com',
    type: 'website',
    title: 'StacksPeptide — Premium Peptide Stacking Protocols & Science Guide',
    description:
      'The #1 peptide stacking resource. 24 third-party tested compounds with full CoA documentation.',
  },
}

export default function HomePage() {
  return (
    <>
      <HomeClient />
      <ResearchFeed />
    </>
  )
}
