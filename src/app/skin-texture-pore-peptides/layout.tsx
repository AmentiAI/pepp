import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Peptides for Skin Texture & Pores — Pore Minimization Protocol | StacksPeptide',
  description:
    'Enlarged pores, rough skin texture, and acne scarring share a common root: degraded collagen scaffold and impaired dermal turnover. GHK-Cu rebuilds the structural framework that keeps pores tight. Full skin texture protocol.',
  keywords: [
    'peptides for skin texture',
    'peptides for large pores',
    'pore minimization peptides',
    'ghk-cu skin texture',
    'skin texture peptide protocol',
    'acne scar peptides',
    'looksmaxxing skin texture',
    'collagen peptides pores',
    'copper peptide skin texture',
    'smooth skin peptide stack',
  ],
  openGraph: {
    title: 'Peptides for Skin Texture & Pores — Pore Minimization Protocol',
    description:
      'Enlarged pores are a structural problem: degraded collagen around follicular walls. GHK-Cu restores the collagen scaffold. Full peptide protocol for smooth skin texture.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Skin Texture Peptide Protocol' }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Peptides for Skin Texture & Pores — Pore Minimization Protocol',
    description: 'Pores are a structural problem. GHK-Cu rebuilds the collagen scaffold that keeps them tight. Full protocol.',
    images: ['/og-image.jpg'],
  },
  alternates: { canonical: 'https://www.stackspeptide.com/skin-texture-pore-peptides' },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Peptides for Skin Texture & Pores — Pore Minimization Protocol',
  description:
    'Full peptide protocol for improving skin texture, minimizing pore appearance, and addressing acne scarring through collagen scaffold restoration and dermal remodeling.',
  author: { '@type': 'Organization', name: 'StacksPeptide', url: 'https://www.stackspeptide.com' },
  publisher: { '@type': 'Organization', name: 'StacksPeptide', url: 'https://www.stackspeptide.com' },
  datePublished: '2026-04-06',
  dateModified: '2026-04-06',
  url: 'https://www.stackspeptide.com/skin-texture-pore-peptides',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.stackspeptide.com/skin-texture-pore-peptides' },
  about: [
    { '@type': 'Thing', name: 'Skin Texture Improvement' },
    { '@type': 'Thing', name: 'Pore Minimization' },
    { '@type': 'Thing', name: 'GHK-Cu Collagen Peptide' },
    { '@type': 'Thing', name: 'Acne Scar Treatment' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can peptides actually make pores smaller?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pore size is largely determined by genetics, but the perceived size is heavily influenced by the structural collagen framework around each pore. As collagen degrades with age and UV exposure, this scaffold weakens and pores appear larger and looser — the "orange peel" texture. GHK-Cu restores collagen type I and III density around follicular walls, tightening the structural support that holds pore margins closed. Users typically see measurable texture improvement at 8–12 weeks. Pore size itself does not decrease, but the appearance of enlarged pores improves significantly as the surrounding collagen matrix tightens.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best peptide protocol for acne scars?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Acne scar tissue involves three problems: depressed collagen defects (atrophic scars), fibrous cross-links (ice-pick and boxcar scars), and post-inflammatory hyperpigmentation. GHK-Cu addresses all three mechanisms: it stimulates new collagen synthesis (filling atrophic defects), modulates matrix metalloproteinases (breaking down abnormal fibrous cross-links), and anti-inflammatory signaling reduces ongoing PIH. Protocol: GHK-Cu topical applied to scarred areas twice daily for a minimum 16-week cycle, combined with subcutaneous GHK-Cu for systemic collagen signal amplification. Pair with BPC-157 systemically for enhanced healing and VEGF-driven tissue repair.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does GHK-Cu work better than retinol for skin texture?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GHK-Cu and retinol (retinoids) work through complementary mechanisms with different risk profiles. Retinoids increase cellular turnover rate through RAR/RXR nuclear receptors and are very well-evidenced for texture improvement, but cause initial purging, photosensitivity, and irritation in 30–60% of new users. GHK-Cu has no purging phase, no photosensitivity, and no irritation profile — it works at the gene modulation level to stimulate collagen production without forcing accelerated cell turnover. The long-term collagen synthesis benefits of GHK-Cu likely exceed retinoids in dermal thickness improvement. Optimal protocol: use both, applying retinoid on alternate evenings and GHK-Cu on opposite evenings to avoid direct compound interaction.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I use peptides with microneedling for skin texture?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Microneedling creates controlled micro-channels in the dermis that dramatically increase topical peptide absorption — studies show up to 1,000× increased penetration depth immediately post-needling. Do NOT apply GHK-Cu during an active microneedling session (copper ions introduced to open channels can cause unexpected reactions). Instead, apply GHK-Cu serum 24–48 hours post-microneedling when the skin barrier has partially recovered but the micro-channels still have elevated permeability. The collagen synthesis signal from GHK-Cu is then delivered into a dermis that has already been primed for wound healing response — producing a synergistic remodeling effect. Run this combination once every 4–6 weeks for maximum skin texture improvement.',
      },
    },
  ],
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  )
}
