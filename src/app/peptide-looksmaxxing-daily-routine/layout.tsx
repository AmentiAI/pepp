import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Peptide Looksmaxxing Daily Routine — Morning & Night Protocol Schedule | StacksPeptide',
  description:
    'Administration timing is as critical as compound selection. GH secretagogues must be taken fasted, pre-sleep to amplify the largest natural GH pulse. GHK-Cu topical works best post-cleansing with clean skin. Full 24-hour looksmaxxing peptide schedule.',
  keywords: [
    'peptide daily routine looksmaxxing',
    'when to take peptides',
    'peptide morning routine',
    'peptide night routine looksmaxxing',
    'gh secretagogue timing',
    'ghk-cu daily application',
    'peptide administration timing',
    'pre-sleep peptide protocol',
    'looksmaxxing daily schedule',
    'peptide routine morning night',
  ],
  openGraph: {
    title: 'Peptide Looksmaxxing Daily Routine — Morning & Night Protocol Schedule',
    description:
      'GH secretagogues fasted, pre-sleep. GHK-Cu post-cleansing. Retatrutide weekly. Full 24-hour timing protocol for maximum looksmaxxing results.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Peptide Looksmaxxing Daily Routine' }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Peptide Looksmaxxing Daily Routine — Morning & Night Protocol Schedule',
    description: 'Full 24-hr timing protocol. GH secretagogues pre-sleep fasted. GHK-Cu post-cleansing. Maximise every dose.',
    images: ['/og-image.jpg'],
  },
  alternates: { canonical: 'https://www.stackspeptide.com/peptide-looksmaxxing-daily-routine' },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Peptide Looksmaxxing Daily Routine — Morning & Night Protocol Schedule',
  description:
    'Complete 24-hour peptide administration timing protocol for looksmaxxing. Covers GH secretagogues, GHK-Cu topical, SNAP-8, BPC-157, and weekly compound scheduling.',
  author: { '@type': 'Organization', name: 'StacksPeptide', url: 'https://www.stackspeptide.com' },
  publisher: { '@type': 'Organization', name: 'StacksPeptide', url: 'https://www.stackspeptide.com' },
  datePublished: '2026-04-06',
  dateModified: '2026-04-06',
  url: 'https://www.stackspeptide.com/peptide-looksmaxxing-daily-routine',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.stackspeptide.com/peptide-looksmaxxing-daily-routine' },
  about: [
    { '@type': 'Thing', name: 'Peptide Daily Routine' },
    { '@type': 'Thing', name: 'Peptide Timing Protocol' },
    { '@type': 'Thing', name: 'Looksmaxxing Schedule' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why must GH secretagogues be taken fasted and before sleep?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Insulin and growth hormone are mutually antagonistic. Elevated insulin (postprandial state) directly suppresses pituitary GH release, meaning taking CJC-1295/Ipamorelin within 2–3 hours of eating significantly reduces the GH pulse amplitude. Sleep-timing capitalizes on the largest natural GH pulse, which occurs 60–90 minutes after sleep onset in NREM deep sleep. Administering GH secretagogues 30–45 minutes before bed while fasted (3+ hours since last meal) allows the compound to arrive at the pituitary simultaneously with the circadian GH signal, producing a stacked and amplified pulse rather than a standalone pharmacological signal.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I apply GHK-Cu topically every day?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — daily topical GHK-Cu application is both safe and more effective than intermittent use. GHK-Cu\'s gene modulation and collagen signaling benefits are cumulative and concentration-dependent. Apply to clean skin after cleansing, morning and/or night. The most evidence-supported regimen is evening application after cleansing — skin permeability increases at night due to circadian-driven transepidermal uptake, and there is no UV exposure to oxidize the copper coordination complex. Morning use is acceptable and can be layered under sunscreen. Pair with vitamin C serum (applied first, separate from GHK-Cu by 20–30 minutes to avoid copper-vitamin C oxidation).',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I take BPC-157 in the morning or does timing matter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'BPC-157 for systemic recovery purposes has flexible timing — morning administration is perfectly acceptable and some researchers prefer it because BPC-157 stimulates VEGF production and angiogenesis, processes that benefit from active circulation. If BPC-157 is being used for a specific injury, administering it closest to the tissue in question (local injection site) and nearest to training/loading sessions maximizes local VEGF response. The compound is not circadian-dependent like GH secretagogues. Morning, pre-training, or before bed are all viable; the most important factor is consistency of frequency rather than precise hour-level timing.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I structure a week when some peptides are injected daily vs weekly?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Build your routine around anchor points: daily injectables (CJC-1295 without DAC, Ipamorelin, BPC-157) are administered every day pre-sleep or as scheduled. Weekly injectables (Retatrutide, Semaglutide, Tirzepatide, CJC-1295 with DAC) are pinned once on the same day each week — pick Sunday or Monday for clean weekly tracking. Biannual compounds (Epithalon) run as a 10-consecutive-day burst protocol twice per year. Monthly compounds (IGF-1 LR3 run in 4-week cycles with 4 weeks off) are tracked calendar-month. Layer topicals (GHK-Cu, SNAP-8) every day independent of injectable timing.',
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
