import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Store Peptides — Complete Guide: Powder to Reconstituted',
  description:
    'How to store peptides correctly: lyophilized powder storage, reconstitution steps, post-reconstitution refrigeration, shelf life by compound, and travel tips. The complete beginner guide.',
  keywords: [
    'how to store peptides',
    'peptide storage guide',
    'peptide storage after reconstitution',
    'bacteriostatic water vs sterile water',
    'how long do reconstituted peptides last',
    'traveling with peptides',
    'do peptides need to be refrigerated',
    'peptide storage temperature',
  ],
  openGraph: {
    title: 'How to Store Peptides — Complete Guide: Powder to Reconstituted',
    description:
      'How to store peptides correctly: lyophilized powder storage, reconstitution steps, post-reconstitution refrigeration, shelf life by compound, and travel tips.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'How to Store Peptides Guide' }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Store Peptides — Complete Guide: Powder to Reconstituted',
    description:
      'Lyophilized powder storage, reconstitution steps, bacteriostatic water, shelf life by compound, and travel tips.',
    images: ['/og-image.jpg'],
  },
  alternates: { canonical: 'https://www.stackspeptide.com/how-to-store-peptides' },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Store Peptides — Complete Guide: Powder to Reconstituted',
  description:
    'How to store peptides correctly: lyophilized powder storage, reconstitution steps, post-reconstitution refrigeration, shelf life by compound, and travel tips. The complete beginner guide.',
  author: { '@type': 'Organization', name: 'StacksPeptide', url: 'https://www.stackspeptide.com' },
  publisher: { '@type': 'Organization', name: 'StacksPeptide', url: 'https://www.stackspeptide.com' },
  datePublished: '2024-06-01',
  dateModified: '2025-03-01',
  url: 'https://www.stackspeptide.com/how-to-store-peptides',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.stackspeptide.com/how-to-store-peptides',
  },
  about: [
    { '@type': 'Thing', name: 'Peptide Storage' },
    { '@type': 'Thing', name: 'Lyophilized Peptides' },
    { '@type': 'Thing', name: 'Bacteriostatic Water' },
    { '@type': 'Thing', name: 'Peptide Reconstitution' },
  ],
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Reconstitute and Store Peptides',
  description: 'Step-by-step guide to reconstituting lyophilized peptide powder with bacteriostatic water and storing correctly.',
  totalTime: 'PT10M',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Allow vial to reach room temperature',
      text: 'Remove the peptide vial from cold storage and allow it to equilibrate to room temperature for 15–20 minutes. This prevents thermal shock to the lyophilized matrix.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Prepare bacteriostatic water',
      text: 'Use only bacteriostatic water (BAC water, 0.9% benzyl alcohol). Do not use regular sterile water — it contains no preservative and will allow bacterial growth within hours.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Sterilise the vial top',
      text: 'Wipe the rubber stopper of the peptide vial with a fresh 70% isopropyl alcohol swab. Allow to air dry for 30 seconds.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Draw bacteriostatic water into syringe',
      text: 'Using a sterile insulin syringe, draw the calculated volume of BAC water (typically 1–2mL depending on desired concentration).',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Inject slowly down the vial wall',
      text: 'Insert the needle into the vial and angle it so the BAC water runs slowly down the inner glass wall — never directly onto the lyophilized powder. Inject slowly over 30–60 seconds.',
    },
    {
      '@type': 'HowToStep',
      position: 6,
      name: 'Gently swirl — never shake',
      text: 'Gently swirl the vial in a circular motion for 30–60 seconds until fully dissolved. Never shake — shaking generates mechanical shear forces that denature peptide bonds.',
    },
    {
      '@type': 'HowToStep',
      position: 7,
      name: 'Verify clarity',
      text: 'The reconstituted solution should be clear and colourless (or very slightly coloured depending on the compound). Any cloudiness or particulate matter indicates a problem.',
    },
    {
      '@type': 'HowToStep',
      position: 8,
      name: 'Label and refrigerate',
      text: 'Label the vial with the compound name, concentration, reconstitution date, and expiry date (typically 28–60 days). Immediately refrigerate at 2–8°C. Never freeze a reconstituted solution.',
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
