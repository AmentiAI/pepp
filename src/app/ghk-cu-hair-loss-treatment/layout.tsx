import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GHK-Cu for Hair Loss & Beard Growth — Clinical Evidence & Protocol | StacksPeptide',
  description:
    'GHK-Cu copper peptide increases hair follicle size by 121%, reverses miniaturization, and stimulates VEGF-driven angiogenesis to the scalp. Full protocol for hair regrowth, beard densification, and eyebrow restoration.',
  keywords: [
    'ghk-cu hair loss',
    'ghk-cu hair growth',
    'copper peptide hair regrowth',
    'ghk-cu beard growth',
    'ghk copper peptide hair follicle',
    'ghk-cu scalp treatment',
    'copper peptide hair loss treatment',
    'ghk-cu hair before after',
    'looksmaxxing hair peptides',
    'hair follicle peptide protocol',
  ],
  openGraph: {
    title: 'GHK-Cu for Hair Loss & Beard Growth — Clinical Evidence & Protocol',
    description:
      'GHK-Cu increases hair follicle size by 121%, reverses androgenetic miniaturization, and outperforms minoxidil in follicle activation. Full protocol and timeline.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'GHK-Cu Hair Growth Protocol' }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GHK-Cu for Hair Loss & Beard Growth — Clinical Evidence & Protocol',
    description: 'GHK-Cu increases follicle size 121%, reverses miniaturization. Full scalp + beard protocol.',
    images: ['/og-image.jpg'],
  },
  alternates: { canonical: 'https://www.stackspeptide.com/ghk-cu-hair-loss-treatment' },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'GHK-Cu for Hair Loss & Beard Growth — Clinical Evidence & Protocol',
  description:
    'GHK-Cu copper peptide increases hair follicle size by 121%, reverses androgenetic miniaturization, and stimulates VEGF-driven angiogenesis to the scalp. Full protocol for hair regrowth, beard densification, and eyebrow restoration.',
  author: { '@type': 'Organization', name: 'StacksPeptide', url: 'https://www.stackspeptide.com' },
  publisher: { '@type': 'Organization', name: 'StacksPeptide', url: 'https://www.stackspeptide.com' },
  datePublished: '2026-04-06',
  dateModified: '2026-04-06',
  url: 'https://www.stackspeptide.com/ghk-cu-hair-loss-treatment',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.stackspeptide.com/ghk-cu-hair-loss-treatment' },
  about: [
    { '@type': 'Thing', name: 'GHK-Cu Copper Peptide' },
    { '@type': 'Thing', name: 'Hair Loss Treatment' },
    { '@type': 'Thing', name: 'Beard Growth' },
    { '@type': 'Thing', name: 'Hair Follicle Stimulation' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long does GHK-Cu take to show hair regrowth results?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most users notice decreased shedding and improved scalp texture within 4–6 weeks. Visible density improvement typically appears at 10–14 weeks. Maximum regrowth assessment requires a full 6-month protocol. Hair follicles operate on a 3-month anagen cycle, so results compound over successive cycles rather than appearing linearly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can GHK-Cu regrow hair on a completely bald scalp?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GHK-Cu is most effective for reversing miniaturization in follicles that are dormant or producing vellus (thin) hairs — it stimulates these back into terminal hair production. Completely bald areas where follicles have been absent for more than 5–7 years have lower response rates because the follicular units are atrophied. The best candidates are thinning areas where follicles are still present but miniaturized.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does GHK-Cu work better topically or systemically for hair?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For hair specifically, topical application directly to the scalp delivers the highest local concentration to follicular units. Pickart\'s foundational research used topical formulations. Systemic subcutaneous administration (for skin, collagen, and other benefits) adds a secondary signal but should not replace direct scalp application for hair goals. Combine both for maximum effect: topical GHK-Cu applied 5–7 days per week to the scalp, plus systemic dosing for broader collagen and VEGF benefits.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can GHK-Cu be used with minoxidil or finasteride?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — GHK-Cu works through completely different mechanisms than both minoxidil and finasteride and is additive rather than redundant. Minoxidil drives vasodilation (increased blood flow), GHK-Cu drives VEGF upregulation and direct follicle enlargement. Finasteride reduces DHT conversion; GHK-Cu does not act on the androgen pathway. Combining all three addresses different aspects of androgenetic alopecia simultaneously: hormonal signal reduction, blood supply, and follicle tissue quality.',
      },
    },
    {
      '@type': 'Question',
      name: 'What GHK-Cu concentration is effective for scalp application?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Research formulations typically use 0.1% to 2% GHK-Cu concentrations topically. Most commercial copper peptide serums sit at 0.5–1%. For DIY reconstitution from lyophilized powder, a common protocol is dissolving 5–10mg in a carrier vehicle (distilled water, serum base, or hyaluronic acid solution) for direct scalp massage. Avoid high-pH environments that degrade copper coordination — use a slightly acidic or neutral carrier.',
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
