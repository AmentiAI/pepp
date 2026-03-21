import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Peptide FAQ — Reconstitution, Dosing & Purity Answered',
  description:
    'Answers to the most common peptide questions: reconstitution, CoA interpretation, storage, compound selection, and HPLC purity verification. Find your answer now.',
  keywords: [
    'peptide faq',
    'peptide questions answers',
    'what is a certificate of analysis',
    'peptide purity standard',
    'how to store peptides',
    'peptide shipping',
    'peptide reconstitution faq',
    'peptide compound selection',
    'bpc-157 tb-500 questions',
  ],
  openGraph: {
    title: 'Peptide FAQ — Reconstitution, Dosing & Purity Answered | StacksPeptide',
    description:
      'Answers to the most common peptide questions: reconstitution, CoA interpretation, storage, compound selection, and HPLC purity verification.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'StacksPeptide Peptide FAQ' }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Peptide FAQ — Reconstitution, Dosing & Purity Answered',
    description: 'Reconstitution, CoA interpretation, storage, compound selection and HPLC purity — all answered.',
    images: ['/og-image.jpg'],
  },
  alternates: { canonical: 'https://www.stackspeptide.com/faq' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What purity standard should I look for in peptides?',
      acceptedAnswer: { '@type': 'Answer', text: 'The minimum acceptable standard for premium peptides is ≥98% purity as measured by High Performance Liquid Chromatography (HPLC). Below 98%, impurities — truncated sequences, residual solvents, or incorrect stereoisomers — may affect experimental integrity.' },
    },
    {
      '@type': 'Question',
      name: 'What is a Certificate of Analysis (CoA) and why does it matter?',
      acceptedAnswer: { '@type': 'Answer', text: 'A Certificate of Analysis (CoA) is third-party laboratory documentation verifying a specific peptide batch for purity, correct molecular weight, and compound identity. It includes HPLC purity percentage, mass spectrometry data, batch number, and the testing lab name. Never purchase peptides without a CoA.' },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between in-house testing and third-party testing?',
      acceptedAnswer: { '@type': 'Answer', text: 'In-house testing means the supplier runs their own purity tests — creating a conflict of interest. Third-party testing means an independent laboratory with no financial relationship to the supplier verifies the batch, providing objective verification.' },
    },
    {
      '@type': 'Question',
      name: 'What is HPLC and why is it the standard for purity testing?',
      acceptedAnswer: { '@type': 'Answer', text: 'High Performance Liquid Chromatography (HPLC) separates a sample\'s components and measures their concentrations, identifying the target peptide as a percentage of total sample mass. Combined with mass spectrometry (MS), HPLC provides comprehensive purity and identity verification.' },
    },
    {
      '@type': 'Question',
      name: 'How do I reconstitute a lyophilized peptide?',
      acceptedAnswer: { '@type': 'Answer', text: 'Use bacteriostatic water (BAC water — 0.9% benzyl alcohol). Inject it slowly down the inside wall of the vial — not directly onto the powder. Gently swirl, do not shake. Shaking can degrade peptide bonds through mechanical stress.' },
    },
    {
      '@type': 'Question',
      name: 'How should I store lyophilized (unreconstituted) peptides?',
      acceptedAnswer: { '@type': 'Answer', text: 'Short-term (up to 90 days): room temperature is acceptable for most peptides. Medium-term (up to 6 months): store at 2–8°C. Long-term (beyond 6 months): store at -20°C. Always protect from UV light and moisture.' },
    },
    {
      '@type': 'Question',
      name: 'How long do reconstituted peptides last?',
      acceptedAnswer: { '@type': 'Answer', text: 'Once reconstituted with bacteriostatic water, most peptides remain stable for 28–60 days when stored at 2–8°C. Avoid repeated freeze-thaw cycles of reconstituted solutions, as this can degrade the peptide structure.' },
    },
    {
      '@type': 'Question',
      name: 'Are peptides legal to purchase and ship?',
      acceptedAnswer: { '@type': 'Answer', text: 'Peptides are sold legally for in-vitro and laboratory use. They are not regulated as controlled substances in most jurisdictions. Regulatory status varies by country and compound. These compounds are not for human use or consumption.' },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between Semaglutide, Tirzepatide, and Retatrutide?',
      acceptedAnswer: { '@type': 'Answer', text: 'These are GLP-1 pathway compounds with increasing receptor targets. Semaglutide is a GLP-1 mono-agonist. Tirzepatide is a dual GLP-1/GIP co-agonist. Retatrutide is a triple GLP-1/GIP/Glucagon co-agonist. Retatrutide produced 24.2% body weight reduction in NEJM Phase 2 trials — the highest ever documented for a pharmacological fat loss compound.' },
    },
    {
      '@type': 'Question',
      name: 'Can BPC-157 and TB-500 be used together?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes — BPC-157 and TB-500 operate through complementary mechanisms. BPC-157 acts locally on gut, tendon, and joint tissue via VEGF and growth hormone receptor pathways. TB-500 promotes systemic tissue repair through actin regulation and angiogenesis signaling.' },
    },
    {
      '@type': 'Question',
      name: 'What makes IGF-1 LR3 different from standard IGF-1?',
      acceptedAnswer: { '@type': 'Answer', text: 'IGF-1 LR3 is a modified analog with an arginine substitution at position 3 and a 13 amino acid N-terminal extension. This reduces binding to IGF binding proteins, resulting in approximately 3× higher biological potency and a half-life extended from minutes to approximately 20–30 hours.' },
    },
    {
      '@type': 'Question',
      name: 'What does "for lab use only" mean?',
      acceptedAnswer: { '@type': 'Answer', text: '"Lab Use Only" means the compound is sold strictly for laboratory and in-vitro use. It is not approved by any regulatory agency for human use, consumption, or clinical application.' },
    },
  ],
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  )
}
