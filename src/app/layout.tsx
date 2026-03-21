import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ChatWidget from '@/components/ChatWidget'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-inter',
})

const siteUrl = 'https://www.stackspeptide.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'StacksPeptide — Peptide Stacking Guide & Protocols',
    template: '%s | StacksPeptide',
  },
  description:
    'StacksPeptide is the #1 peptide stacking guide. GHK-Cu, BPC-157, Retatrutide, Epithalon & 24+ compounds — third-party tested, CoA included.',
  keywords: [
    'stackspeptide',
    'stacks peptide',
    'peptide stacks',
    'peptide stacking protocols',
    'peptides',
    'buy peptides',
    'ghk-cu copper peptide',
    'bpc-157 science',
    'retatrutide science',
    'tirzepatide peptide',
    'semaglutide peptide',
    'epithalon telomere peptide',
    'igf-1 lr3 science',
    'cjc-1295 ipamorelin stack',
    'tb-500 healing peptide',
    'snap-8 anti-aging peptide',
    'anti-aging peptides',
    'fat loss peptides',
    'body recomposition peptides',
    'longevity peptides',
    'looksmaxxing peptides',
    'peptide compounds',
    'third-party tested peptides',
    'apollo peptide sciences',
  ],
  authors: [{ name: 'StacksPeptide Editorial Team' }],
  creator: 'StacksPeptide',
  publisher: 'StacksPeptide',
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'StacksPeptide',
    title: 'StacksPeptide — Peptide Stacking Guide & Protocols',
    description:
      'StacksPeptide is the #1 peptide stacking guide. GHK-Cu, BPC-157, Retatrutide, Epithalon & 24+ compounds — third-party tested, CoA included.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'StacksPeptide — Premium Peptide Catalog',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StacksPeptide — Premium Peptides for Peak Human Optimization',
    description:
      'Shop 24+ premium peptides. GHK-Cu, BPC-157, Retatrutide, Epithalon & more. Third-party HPLC tested.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  alternates: { canonical: '/' },
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'StacksPeptide',
  url: siteUrl,
  description:
    'Premium peptide supplier guide. Covering GHK-Cu, BPC-157, Retatrutide, Epithalon, IGF-1 LR3, and 24+ more compounds.',
  sameAs: [],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'StacksPeptide',
  url: siteUrl,
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: `${siteUrl}/products?q={search_term_string}` },
    'query-input': 'required name=search_term_string',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  )
}
