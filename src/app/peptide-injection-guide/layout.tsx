import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Peptide Injection Guide | How to Inject Peptides — Trusted, Verified Protocol | StacksPeptide',
  description:
    'Complete peptide injection guide: subcutaneous vs intramuscular technique, injection sites, syringe selection, step-by-step instructions, and safety protocol. Trusted guide.',
  keywords: [
    'peptide injection guide',
    'how to inject peptides',
    'subcutaneous peptide injection',
    'intramuscular peptide injection',
    'peptide injection sites',
    'insulin syringe peptides',
    'peptide injection technique',
    'SC vs IM injection peptides',
  ],
  openGraph: {
    title: 'Peptide Injection Guide | How to Inject Peptides — Trusted, Verified Protocol | StacksPeptide',
    description:
      'Complete peptide injection guide: subcutaneous vs intramuscular technique, injection sites, syringe selection, step-by-step instructions, and safety protocol.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Peptide Injection Guide' }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Peptide Injection Guide | How to Inject Peptides — StacksPeptide',
    description:
      'Subcutaneous vs intramuscular technique, injection sites, syringe selection, step-by-step instructions, and safety protocol.',
    images: ['/og-image.jpg'],
  },
  alternates: { canonical: 'https://www.stackspeptide.com/peptide-injection-guide' },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Peptide Injection Guide — Subcutaneous and Intramuscular Technique',
  description:
    'Complete peptide injection guide: subcutaneous vs intramuscular technique, injection sites, syringe selection, step-by-step instructions, and safety protocol.',
  author: { '@type': 'Organization', name: 'StacksPeptide', url: 'https://www.stackspeptide.com' },
  publisher: { '@type': 'Organization', name: 'StacksPeptide', url: 'https://www.stackspeptide.com' },
  datePublished: '2024-06-01',
  dateModified: '2025-04-01',
  url: 'https://www.stackspeptide.com/peptide-injection-guide',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.stackspeptide.com/peptide-injection-guide',
  },
  about: [
    { '@type': 'Thing', name: 'Peptide Injection' },
    { '@type': 'Thing', name: 'Subcutaneous Injection' },
    { '@type': 'Thing', name: 'Intramuscular Injection' },
    { '@type': 'Thing', name: 'Research Peptides' },
  ],
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Perform a Subcutaneous Peptide Injection',
  description:
    'Step-by-step guide to performing a subcutaneous (SC) peptide injection with correct technique, sterility, and site selection.',
  totalTime: 'PT5M',
  supply: [
    { '@type': 'HowToSupply', name: 'Insulin syringe (U-100, 29–31g, 0.5–1ml)' },
    { '@type': 'HowToSupply', name: '70% isopropyl alcohol swabs' },
    { '@type': 'HowToSupply', name: 'Reconstituted peptide in bacteriostatic water' },
    { '@type': 'HowToSupply', name: 'Sharps container' },
  ],
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Wash hands',
      text: 'Wash hands with antibacterial soap for at least 30 seconds before handling any injection equipment.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Draw air into syringe',
      text: 'Pull the plunger back to draw air equal to your target dose volume. This creates positive pressure in the vial when injected.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Wipe vial and draw peptide',
      text: 'Wipe the rubber stopper with a 70% isopropyl swab, inject the air into the inverted vial, and slowly withdraw your dose.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Remove air bubbles',
      text: 'Hold the syringe needle-up, tap gently to float bubbles to the top, then depress the plunger slightly to expel air.',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Prepare injection site',
      text: 'Clean the injection site with an alcohol swab. Pinch 1–2 inches of subcutaneous fat between your thumb and forefinger.',
    },
    {
      '@type': 'HowToStep',
      position: 6,
      name: 'Insert needle at correct angle',
      text: 'Insert needle at 45° (lean individuals) or 90° (adequate SC tissue). The needle should slide in smoothly without resistance.',
    },
    {
      '@type': 'HowToStep',
      position: 7,
      name: 'Inject slowly',
      text: 'Depress the plunger steadily over 10+ seconds for a 0.5 ml dose. Never rush the injection.',
    },
    {
      '@type': 'HowToStep',
      position: 8,
      name: 'Remove and apply pressure',
      text: 'Withdraw the needle at the same angle. Apply gentle pressure with a clean swab for 10–15 seconds. Do not rub.',
    },
    {
      '@type': 'HowToStep',
      position: 9,
      name: 'Dispose of syringe',
      text: 'Place the used syringe directly into a puncture-resistant sharps container. Never recap or discard in household bins.',
    },
  ],
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      {children}
    </>
  )
}
