import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Peptide Dosing Chart — Complete Reconstitution & Dosage Reference',
  description:
    'The complete peptide dosing and reconstitution chart: every compound, BAC water volume, concentration, injection dose, and cycle length. Download-ready reference for 11+ peptides.',
  keywords: [
    'peptide dosing chart',
    'peptide dosage guide',
    'how to reconstitute peptides',
    'peptide cheat sheet 2026',
    'bpc-157 dosing',
    'semaglutide dosing chart',
    'peptide reconstitution calculator',
    'peptide dosage by weight',
  ],
  openGraph: {
    title: 'Peptide Dosing Chart — Complete Reconstitution & Dosage Reference',
    description:
      'The complete peptide dosing and reconstitution chart: every compound, BAC water volume, concentration, injection dose, and cycle length. Download-ready reference for 11+ peptides.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Peptide Dosing Chart — Complete Reconstitution & Dosage Reference',
    description:
      'The complete peptide dosing and reconstitution chart: every compound, BAC water volume, concentration, injection dose, and cycle length. Download-ready reference for 11+ peptides.',
    images: ['/og-image.jpg'],
  },
  alternates: { canonical: 'https://www.stackspeptide.com/peptide-dosing-chart' },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Reconstitute Research Peptides',
  description: 'Step-by-step guide for reconstituting lyophilized peptides for laboratory use',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Reach Room Temperature',
      text: 'Allow vial to reach room temperature',
    },
    {
      '@type': 'HowToStep',
      name: 'Draw BAC Water',
      text: 'Draw bacteriostatic water into sterile syringe',
    },
    {
      '@type': 'HowToStep',
      name: 'Inject Along Vial Wall',
      text: 'Inject BAC water slowly down the vial wall',
    },
    {
      '@type': 'HowToStep',
      name: 'Dissolve Gently',
      text: 'Gently swirl — never shake',
    },
    {
      '@type': 'HowToStep',
      name: 'Store Properly',
      text: 'Store reconstituted peptide at 2–8°C',
    },
  ],
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      {children}
    </>
  )
}
