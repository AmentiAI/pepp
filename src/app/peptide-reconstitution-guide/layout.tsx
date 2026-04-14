import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Buy Peptides | Complete Reconstitution Guide — How to Reconstitute Peptides | StacksPeptide',
  description:
    'How to reconstitute peptides with bacteriostatic water. Step-by-step guide: calculations, dilution math, storage after mixing, and dosing with insulin syringes.',
  keywords: [
    'how to reconstitute peptides',
    'peptide reconstitution guide',
    'bacteriostatic water peptides',
    'peptide dilution calculator',
    'insulin syringe peptide dosing',
    'bpc 157 reconstitution',
    'tb 500 reconstitution',
    'ghk cu reconstitution',
    'lyophilized peptide mixing',
    'peptide reconstitution math',
  ],
  openGraph: {
    title: 'Complete Peptide Reconstitution Guide — How to Reconstitute Peptides',
    description:
      'Step-by-step: how to reconstitute lyophilized peptides with bacteriostatic water. Includes dilution math, dosing table, and compound-specific notes.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Peptide Reconstitution Guide' }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Complete Peptide Reconstitution Guide — StacksPeptide',
    description:
      'How to reconstitute lyophilized peptides with bacteriostatic water: dilution math, dosing with insulin syringes, and storage rules.',
    images: ['/og-image.jpg'],
  },
  alternates: { canonical: 'https://www.stackspeptide.com/peptide-reconstitution-guide' },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Complete Peptide Reconstitution Guide — How to Reconstitute Lyophilized Peptides',
  description:
    'How to reconstitute peptides with bacteriostatic water. Step-by-step guide: calculations, dilution math, storage after mixing, and dosing with insulin syringes.',
  author: { '@type': 'Organization', name: 'StacksPeptide', url: 'https://www.stackspeptide.com' },
  publisher: { '@type': 'Organization', name: 'StacksPeptide', url: 'https://www.stackspeptide.com' },
  datePublished: '2024-07-01',
  dateModified: '2025-04-01',
  url: 'https://www.stackspeptide.com/peptide-reconstitution-guide',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.stackspeptide.com/peptide-reconstitution-guide',
  },
  about: [
    { '@type': 'Thing', name: 'Peptide Reconstitution' },
    { '@type': 'Thing', name: 'Bacteriostatic Water' },
    { '@type': 'Thing', name: 'Lyophilized Peptides' },
    { '@type': 'Thing', name: 'Insulin Syringe Dosing' },
    { '@type': 'Thing', name: 'BPC-157' },
    { '@type': 'Thing', name: 'TB-500' },
    { '@type': 'Thing', name: 'GHK-Cu' },
  ],
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Reconstitute Lyophilized Peptides with Bacteriostatic Water',
  description:
    'Step-by-step protocol for reconstituting lyophilized peptide powder with bacteriostatic water including dilution calculations and safe dosing.',
  totalTime: 'PT10M',
  supply: [
    { '@type': 'HowToSupply', name: 'Bacteriostatic water (BAC water, 0.9% benzyl alcohol)' },
    { '@type': 'HowToSupply', name: 'Insulin syringe (U-100, 29–31 gauge)' },
    { '@type': 'HowToSupply', name: '70% isopropyl alcohol swabs' },
    { '@type': 'HowToSupply', name: 'Lyophilized peptide vial' },
  ],
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Sanitize vial tops',
      text: 'Wipe both the peptide vial stopper and the BAC water vial stopper with a fresh 70% isopropyl alcohol swab. Allow to air-dry for at least 60 seconds before inserting any needle.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Draw bacteriostatic water',
      text: 'Using a sterile insulin syringe, draw the calculated volume of bacteriostatic water — typically 1mL or 2mL depending on your target concentration.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Inject water down the vial wall',
      text: 'Insert the needle into the peptide vial at an angle so the tip rests against the inner glass wall. Slowly depress the plunger so BAC water runs down the side — never spray it directly onto the lyophilized powder cake.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Gently swirl until dissolved',
      text: 'Roll the vial gently between your palms or swirl in slow circular motions for 30–60 seconds. The powder should dissolve completely. Never shake the vial — shaking generates mechanical shear forces that can sever peptide bonds.',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Verify solution clarity',
      text: 'Hold the vial up to a light source. The solution should be clear and colourless (GHK-Cu may show a faint blue tint). Any cloudiness or visible particulates indicates a problem — discard and start fresh.',
    },
    {
      '@type': 'HowToStep',
      position: 6,
      name: 'Label and refrigerate immediately',
      text: 'Label the vial with compound name, concentration (mcg/mL), reconstitution date, and expiry. Refrigerate at 2–8°C immediately. Never leave reconstituted peptide at room temperature.',
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
