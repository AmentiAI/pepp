import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Peptides for Dark Circles & Under-Eye Area — Periorbital Protocol | StacksPeptide',
  description:
    'Dark circles have 4 distinct causes — pigmentation, vascularity, structural shadowing, and volume loss — and each requires a different peptide approach. Complete periorbital protocol with GHK-Cu, SNAP-8, and BPC-157.',
  keywords: [
    'peptides for dark circles',
    'under eye peptides looksmaxxing',
    'periorbital peptide protocol',
    'ghk-cu dark circles',
    'under eye hollow peptides',
    'peptides for tear trough',
    'copper peptide under eye',
    'dark circle peptide treatment',
    'under eye skin peptides',
    'looksmaxxing periorbital area',
  ],
  openGraph: {
    title: 'Peptides for Dark Circles & Under-Eye Area — Periorbital Protocol',
    description:
      '4 causes of dark circles, 4 peptide solutions. GHK-Cu for structural volume, SNAP-8 for expression lines, BPC-157 for vascular repair. Full periorbital protocol.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Periorbital Peptide Protocol for Dark Circles' }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Peptides for Dark Circles & Under-Eye Area — Periorbital Protocol',
    description: '4 causes of dark circles. 4 peptide solutions. Full under-eye area optimization protocol.',
    images: ['/og-image.jpg'],
  },
  alternates: { canonical: 'https://www.stackspeptide.com/periorbital-peptides-dark-circles' },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Peptides for Dark Circles & Under-Eye Area — Periorbital Protocol',
  description:
    'Complete periorbital peptide protocol addressing all 4 causes of dark circles and under-eye hollowing: pigmentation, vascularity, structural shadowing, and volume loss.',
  author: { '@type': 'Organization', name: 'StacksPeptide', url: 'https://www.stackspeptide.com' },
  publisher: { '@type': 'Organization', name: 'StacksPeptide', url: 'https://www.stackspeptide.com' },
  datePublished: '2026-04-06',
  dateModified: '2026-04-06',
  url: 'https://www.stackspeptide.com/periorbital-peptides-dark-circles',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.stackspeptide.com/periorbital-peptides-dark-circles' },
  about: [
    { '@type': 'Thing', name: 'Dark Circles Treatment' },
    { '@type': 'Thing', name: 'Periorbital Skin' },
    { '@type': 'Thing', name: 'GHK-Cu Under Eye' },
    { '@type': 'Thing', name: 'Under Eye Looksmaxxing' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can GHK-Cu actually reduce dark circles?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GHK-Cu addresses the structural causes of dark circles — thinning skin and reduced collagen density that make the underlying vasculature and orbicularis oculi muscle more visible. By stimulating collagen type I and III synthesis and increasing dermal thickness, GHK-Cu can reduce the translucency of periorbital skin over 8–16 weeks, diminishing the vascular shadow appearance. It does not directly address hyperpigmentation (melanin deposits) or true vascular pooling, but for the majority of users whose dark circles are primarily structural, GHK-Cu provides measurable improvement.',
      },
    },
    {
      '@type': 'Question',
      name: 'What type of dark circle is caused by thin skin vs pigmentation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can distinguish them with the "stretch test": gently pull the skin under the eye taut. If the darkness fades or disappears when stretched, it is primarily structural/vascular (thin skin allowing the underlying vessels and muscle to show through). If the darkness remains even when the skin is stretched, it is primarily pigmentary (melanin deposits, post-inflammatory hyperpigmentation, or Fitzpatrick phototype-related periorbital melanosis). Peptides are most effective for structural dark circles. Pigmentary dark circles require additional interventions: kojic acid, tranexamic acid, or targeted laser treatments.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the under-eye area safe for subcutaneous peptide injection?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No — subcutaneous injection directly into the periorbital area is not recommended. The periorbital tissue is thin, highly vascularized, and adjacent to the orbital septum. Topical application is the appropriate route for under-eye peptide delivery. Use GHK-Cu serum or cream formulations patted gently into the orbital bone rim and tear trough area. SNAP-8 can be applied to the crow\'s feet and outer orbital lines topically. For systemic collagen and GH axis support (which benefits periorbital skin through systemic mechanisms), subcutaneous injection in conventional sites (abdomen, thigh) is appropriate.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long to see results with peptides for under-eye hollowing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tear trough hollowing caused by volume loss and thin skin responds slowly to topical peptides because collagen remodeling is an incremental process. Expect a 12–24 week timeline for meaningful improvement. Early signs of response (weeks 4–8): improved skin texture and reduced crepiness in the orbital area. Mid-cycle (weeks 8–16): measurable increase in skin thickness under dermoscopy. Full result assessment at 6 months. If structural hollowing is severe, peptides are best combined with professional tear trough filler for immediate volume correction while the peptide protocol addresses ongoing tissue quality.',
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
