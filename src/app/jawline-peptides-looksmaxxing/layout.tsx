import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Peptides for Jawline Definition — Structural Looksmaxxing Science',
  description:
    'How peptides improve jawline definition: GH secretagogues for periosteal bone modeling, IGF-1 LR3 for masseter hypertrophy, Retatrutide for submental fat, GHK-Cu for skin tightening. Full protocol included.',
  keywords: [
    'peptides for jawline',
    'jawline looksmaxxing peptides',
    'peptides for facial structure',
    'jawline definition peptides',
    'igf-1 lr3 jawline',
    'cjc-1295 ipamorelin jawline',
    'peptides for bone density face',
    'submental fat peptides',
    'retatrutide jawline',
    'ghk-cu jawline looksmaxxing',
    'structural looksmaxxing peptides',
    'peptides jaw definition 2026',
  ],
  openGraph: {
    title: 'Peptides for Jawline Definition — Structural Looksmaxxing Science',
    description:
      'How peptides improve jawline definition: GH secretagogues for periosteal bone modeling, IGF-1 LR3 for masseter hypertrophy, Retatrutide for submental fat, GHK-Cu for skin tightening.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Peptides for Jawline Definition — Structural Looksmaxxing Science',
    description:
      'GH secretagogues, IGF-1 LR3, Retatrutide, GHK-Cu — the full science of peptide-driven jawline optimization.',
    images: ['/og-image.jpg'],
  },
  alternates: { canonical: 'https://www.stackspeptide.com/jawline-peptides-looksmaxxing' },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Peptides for Jawline Definition — Structural Looksmaxxing Science',
  description:
    'How peptides improve jawline definition: GH secretagogues for periosteal bone modeling, IGF-1 LR3 for masseter hypertrophy, Retatrutide for submental fat, GHK-Cu for skin tightening. Full protocol included.',
  author: { '@type': 'Organization', name: 'StacksPeptide', url: 'https://www.stackspeptide.com' },
  publisher: { '@type': 'Organization', name: 'StacksPeptide', url: 'https://www.stackspeptide.com' },
  datePublished: '2026-03-25',
  dateModified: '2026-03-25',
  url: 'https://www.stackspeptide.com/jawline-peptides-looksmaxxing',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.stackspeptide.com/jawline-peptides-looksmaxxing',
  },
  about: [
    { '@type': 'Thing', name: 'Looksmaxxing' },
    { '@type': 'Thing', name: 'Jawline Definition' },
    { '@type': 'Thing', name: 'IGF-1 LR3' },
    { '@type': 'Thing', name: 'CJC-1295' },
    { '@type': 'Thing', name: 'GHK-Cu' },
    { '@type': 'Thing', name: 'Retatrutide' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What peptide is best for jawline definition?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No single peptide targets the jawline in isolation — optimal results require addressing all four biological levers simultaneously. CJC-1295 + Ipamorelin (GH secretagogues) optimize the GH/IGF-1 axis for periosteal bone modeling and lean tissue retention. Retatrutide or a GLP-1 agonist reduces submental (under-chin) fat that obscures jaw definition. GHK-Cu tightens the overlying skin and reduces laxity. Together, these compounds address bone, fat, and skin — the three structural determinants of visible jaw definition.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can peptides change facial bone structure?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Peptides do not remodel bone the way puberty-driven growth does, but GH secretagogues and IGF-1 analogs can influence periosteal bone maintenance and density in adulthood. The primary mechanism is indirect: optimizing the GH/IGF-1 axis supports the bone remodeling cycle (osteoblast activity vs osteoclast resorption), helping preserve or modestly improve bone density over 12+ week cycles. More impactful jawline improvements typically come from fat reduction (submental fat loss dramatically changes perceived jaw angle) and skin tightening (reduced laxity improves jaw edge definition).',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Retatrutide reduce submental fat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Retatrutide, as a triple GIP/GLP-1/glucagon agonist, produces systemic fat loss including in submental (under-chin) fat deposits. In Phase 2 trials, Retatrutide produced 24.2% average body weight reduction over 48 weeks — fat loss is non-site-specific but individuals carrying submental fat deposits typically see significant reduction there. This is one of the most impactful single changes to perceived jaw definition available through peptide research.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a jawline peptide stack take to show results?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Timelines vary by mechanism. Submental fat reduction from GLP-1 agonists can become visible within 8–12 weeks. Skin tightening from GHK-Cu begins at 4–8 weeks with meaningful collagen remodeling at 8–12 weeks. GH axis optimization from CJC-1295/Ipamorelin is a longer-arc change — lean tissue improvements and reduced facial bloat become apparent at 8–16 weeks. Most users running a complete jawline stack report visible changes by week 10–12.',
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
