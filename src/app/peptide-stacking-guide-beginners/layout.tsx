import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Peptide Stacking Guide for Beginners — Decision Tree + What NOT to Stack",
  description:
    'Complete beginners peptide stacking guide: goal-based decision tree, safe combinations, contraindicated stacks, cycle protocols, and the 5 most common beginner mistakes. Start your first stack correctly.',
  keywords: [
    'peptide stacking guide for beginners',
    'beginner peptide stack',
    'first peptide stack',
    'how to cycle peptides',
    'what peptides can you stack together',
    'safe peptide combinations',
    'peptide stacking mistakes',
    'peptide stack for beginners 2026',
  ],
  openGraph: {
    title: "Peptide Stacking Guide for Beginners — Decision Tree + What NOT to Stack",
    description:
      'Goal-based decision tree, safe combinations, contraindicated stacks, cycle protocols, and the 5 most common beginner mistakes. The complete first-stack guide.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Peptide Stacking Guide for Beginners' }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Peptide Stacking Guide for Beginners — Decision Tree + What NOT to Stack",
    description:
      'Goal-based decision tree, safe combinations, contraindicated stacks, cycle protocols, and the 5 most common beginner mistakes.',
    images: ['/og-image.jpg'],
  },
  alternates: { canonical: 'https://www.stackspeptide.com/peptide-stacking-guide-beginners' },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Peptide Stacking Guide for Beginners — Decision Tree + What NOT to Stack',
  description:
    'Complete beginners peptide stacking guide: goal-based decision tree, safe combinations, contraindicated stacks, cycle protocols, and the 5 most common beginner mistakes.',
  author: { '@type': 'Organization', name: 'StacksPeptide', url: 'https://www.stackspeptide.com' },
  publisher: { '@type': 'Organization', name: 'StacksPeptide', url: 'https://www.stackspeptide.com' },
  datePublished: '2025-01-01',
  dateModified: '2026-03-01',
  url: 'https://www.stackspeptide.com/peptide-stacking-guide-beginners',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.stackspeptide.com/peptide-stacking-guide-beginners',
  },
  about: [
    { '@type': 'Thing', name: 'Peptide Stacking' },
    { '@type': 'Thing', name: 'BPC-157' },
    { '@type': 'Thing', name: 'CJC-1295' },
    { '@type': 'Thing', name: 'Ipamorelin' },
    { '@type': 'Thing', name: 'GHK-Cu' },
    { '@type': 'Thing', name: 'Peptide Cycling' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best peptide stack for beginners?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best beginner peptide stack is CJC-1295 (no DAC) + Ipamorelin for GH axis optimization. This pairing is well-studied, has a strong tolerability profile, targets multiple recomposition pathways simultaneously (GH drives both lipolysis and muscle protein synthesis), and is timed pre-sleep to amplify the largest natural GH pulse of the day. It is the foundation of most multi-compound stacks and a clean entry point for anyone new to peptide research.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you stack BPC-157 with CJC-1295/Ipamorelin?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — BPC-157 and CJC-1295/Ipamorelin are one of the most common beginner combinations precisely because they have complementary mechanisms with no receptor overlap. CJC-1295/Ipamorelin works on GHRH and GHS-R1a receptors for GH axis optimization. BPC-157 works on VEGF pathways and nitric oxide signaling for tissue repair and recovery. The two compounds do not compete and are additive in their effects: GH axis optimization improves body composition while BPC-157 accelerates recovery, enabling higher training load.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long should you cycle peptides?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most peptide stacks run 8–12 weeks with a minimum 4-week off period between cycles. Shorter stacks (8 weeks) suit acute goals like injury recovery. Longer stacks (12–16 weeks) are used for body composition and GH axis optimization. Epithalon is a notable exception: the standard protocol is 10 consecutive days, followed by 6+ months off. GLP-1 agonists like semaglutide and tirzepatide follow clinical protocols which often involve continuous use — consult published clinical trial data for protocol specifics.',
      },
    },
    {
      '@type': 'Question',
      name: 'What peptides should beginners avoid stacking?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Beginners should avoid stacking multiple GLP-1 agonists (semaglutide + tirzepatide + retatrutide all hit the same receptor cascade — redundant signaling with amplified side effects). Avoid multiple GHRH analogs simultaneously (CJC-1295 with and without DAC together, or CJC-1295 + Sermorelin — one GHRH analog paired with one GHRP is the correct approach). Avoid IGF-1 LR3 on a first cycle — it is potent and not appropriate without baseline data. And avoid starting with 4+ compounds. You cannot isolate what is working or causing issues in a complex first stack.',
      },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  )
}
