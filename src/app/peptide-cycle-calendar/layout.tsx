import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Peptide Cycle Calendar — On/Off Periods, Receptor Reset & 12-Month Protocol | StacksPeptide',
  description:
    'Running peptides continuously without cycling blunts receptor sensitivity and diminishes ROI. Complete 12-month peptide cycle calendar: on/off windows, bloodwork timing, receptor reset protocols, and compound-specific cycling rules.',
  keywords: [
    'peptide cycle calendar',
    'peptide on off cycle',
    'peptide cycling guide',
    'gh secretagogue cycling',
    'igf-1 lr3 cycle off period',
    'peptide receptor desensitization',
    'peptide break protocol',
    'peptide 12 month calendar',
    'how long to cycle peptides',
    'looksmaxxing peptide cycling',
  ],
  openGraph: {
    title: 'Peptide Cycle Calendar — On/Off Periods, Receptor Reset & 12-Month Protocol',
    description:
      'Complete 12-month peptide cycle calendar. GH secretagogues: 12 weeks on, 4 weeks off. IGF-1 LR3: 4 weeks on, 4 weeks off. Epithalon: 10-day burst, 6 months off. All rules explained.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Peptide Cycle Calendar Guide' }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Peptide Cycle Calendar — On/Off Periods, Receptor Reset & 12-Month Protocol',
    description: '12-month peptide cycle calendar. On/off windows, receptor reset, bloodwork timing — full protocol.',
    images: ['/og-image.jpg'],
  },
  alternates: { canonical: 'https://www.stackspeptide.com/peptide-cycle-calendar' },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Peptide Cycle Calendar — On/Off Periods, Receptor Reset & 12-Month Protocol',
  description:
    'Complete 12-month peptide cycling guide covering on/off windows for each compound type, receptor desensitization mechanisms, bloodwork timing, and a full annual protocol calendar.',
  author: { '@type': 'Organization', name: 'StacksPeptide', url: 'https://www.stackspeptide.com' },
  publisher: { '@type': 'Organization', name: 'StacksPeptide', url: 'https://www.stackspeptide.com' },
  datePublished: '2026-04-06',
  dateModified: '2026-04-06',
  url: 'https://www.stackspeptide.com/peptide-cycle-calendar',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.stackspeptide.com/peptide-cycle-calendar' },
  about: [
    { '@type': 'Thing', name: 'Peptide Cycling' },
    { '@type': 'Thing', name: 'Peptide Protocol Calendar' },
    { '@type': 'Thing', name: 'Receptor Desensitization' },
    { '@type': 'Thing', name: 'GH Secretagogue Cycling' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What happens if I run GH secretagogues continuously without cycling?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Continuous administration of GHRH analogs (CJC-1295) and GHRPs (Ipamorelin) without cycling leads to progressive desensitization of pituitary GH receptors. The first sign is blunted GH pulse amplitude — the same dose produces a smaller response. Over 16–20 weeks of continuous use without breaks, baseline GH output can actually decrease as the pituitary downregulates its own GHRH receptor expression. A 4-week off period fully restores receptor sensitivity. This is why the standard protocol is 12 weeks on, 4 weeks off — not because the compounds become dangerous, but because cycling maintains efficacy.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does GHK-Cu need to be cycled?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No — GHK-Cu does not require cycling and is more effective when used continuously. Unlike GH secretagogues, GHK-Cu does not signal through a receptor that desensitizes with continuous activation. Its mechanism involves direct modulation of gene expression networks rather than receptor-ligand dynamics. Collagen synthesis benefits are cumulative over time. Long-term continuous users report ongoing improvements in skin quality for 12–24+ months of use. Topical GHK-Cu can be used indefinitely as a daily skincare protocol.',
      },
    },
    {
      '@type': 'Question',
      name: 'What bloodwork should I get before and after a peptide cycle?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pre-cycle baseline: IGF-1 (primary GH axis marker), fasting insulin and glucose (metabolic baseline, critical if using GLP-1 agonists), CBC, comprehensive metabolic panel, testosterone and estradiol (sex hormone baseline), and TSH (thyroid). Post-cycle (at 4-week off period): IGF-1 to confirm GH axis recovery to baseline, fasting glucose, and HbA1c if you ran GLP-1 agonists. IGF-1 is the key marker — if your post-cycle IGF-1 is significantly above pre-cycle baseline, this is a normal and expected outcome of a successful GH secretagogue cycle. If your IGF-1 does not return toward baseline during the off period, consider a longer break.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I run multiple cycles per year?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — the standard framework for GH secretagogues allows for 3 cycles per year: three 12-week on periods with three 4-week off periods. This fills 48 of 52 weeks. IGF-1 LR3 allows 6 cycles per year: six 4-week on periods with 4-week off periods between each. Epithalon runs as 2 cycles per year (10-day burst in spring, 10-day burst in fall). GLP-1 agonists (Retatrutide, Tirzepatide, Semaglutide) follow continuous dosing models based on clinical protocols — they are titrated and maintained rather than cycled with receptor-reset logic.',
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
