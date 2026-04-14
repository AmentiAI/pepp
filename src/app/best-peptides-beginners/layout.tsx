import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Buy Peptides for Beginners | Best Starter Peptides — Trusted, Verified Guide | StacksPeptide',
  description:
    'Best peptides for beginners to buy: trusted guide covering the safest, most studied starter compounds — BPC-157, GHK-Cu, Ipamorelin, and Epithalon. Verified protocols.',
  keywords: [
    'best peptides for beginners',
    'beginner peptides',
    'safest peptides to start with',
    'BPC-157 for beginners',
    'GHK-Cu beginner',
    'Ipamorelin beginners',
    'Epithalon beginner guide',
    'TB-500 beginners',
    'peptide starter protocol',
    'best peptides to buy 2026',
  ],
  openGraph: {
    title: 'Best Peptides for Beginners — Trusted Starter Guide | StacksPeptide',
    description:
      'The 5 best peptides for beginners: BPC-157, GHK-Cu, Ipamorelin/CJC-1295, Epithalon, and TB-500. Mechanism summaries, dosing, cycle lengths, and a complete 8-week starter protocol.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Best Peptides for Beginners' }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Peptides for Beginners — Trusted Starter Guide | StacksPeptide',
    description:
      'The 5 best peptides for beginners: BPC-157, GHK-Cu, Ipamorelin/CJC-1295, Epithalon, and TB-500. Mechanism summaries, dosing, cycle lengths, and a complete 8-week starter protocol.',
    images: ['/og-image.jpg'],
  },
  alternates: { canonical: 'https://www.stackspeptide.com/best-peptides-beginners' },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Best Peptides for Beginners — Trusted, Verified Starter Guide',
  description:
    'The 5 best peptides for beginners: BPC-157, GHK-Cu, Ipamorelin/CJC-1295, Epithalon, and TB-500 — with mechanism summaries, dosing, cycle lengths, what to avoid, and an 8-week starter protocol.',
  author: { '@type': 'Organization', name: 'StacksPeptide', url: 'https://www.stackspeptide.com' },
  publisher: { '@type': 'Organization', name: 'StacksPeptide', url: 'https://www.stackspeptide.com' },
  datePublished: '2025-01-01',
  dateModified: '2026-04-01',
  url: 'https://www.stackspeptide.com/best-peptides-beginners',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.stackspeptide.com/best-peptides-beginners',
  },
  about: [
    { '@type': 'Thing', name: 'BPC-157' },
    { '@type': 'Thing', name: 'GHK-Cu' },
    { '@type': 'Thing', name: 'Ipamorelin' },
    { '@type': 'Thing', name: 'Epithalon' },
    { '@type': 'Thing', name: 'TB-500' },
    { '@type': 'Thing', name: 'Peptide Research' },
    { '@type': 'Thing', name: 'Beginner Peptide Protocol' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is BPC-157 safe for beginners?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'BPC-157 has one of the cleanest safety profiles in peptide research. Decades of animal studies across multiple species show no LD50 (no lethal dose has been found even at very high doses), no carcinogenicity, and no serious adverse event reports at standard research doses. The peptide is derived from a naturally occurring gastric protein. For beginners, the oral route adds another layer of simplicity. Start low (250 mcg/day), log your responses, and stop if anything unexpected occurs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to inject peptides, or are there oral options?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'BPC-157 is the primary peptide with meaningful oral bioavailability. GHK-Cu works topically for skin goals. Most other peptides (Ipamorelin, CJC-1295, TB-500, Epithalon) require subcutaneous injection for bioavailability. Subcutaneous injection with a 29–31 gauge insulin syringe is straightforward — very fine needle, minimal discomfort, small volume. If injections are a barrier, BPC-157 oral is the best entry point.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I reconstitute peptides correctly?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wipe the rubber stopper with an alcohol swab. Draw bacteriostatic water into a syringe (typically 1–2 mL per vial). Inject the water slowly down the inner wall of the vial — never directly onto the powder cake. Do not shake — swirl gently. Shaking can denature the peptide. Allow to fully dissolve, then refrigerate immediately. Reconstituted peptides in bacteriostatic water are stable for 28–30 days refrigerated. Never freeze reconstituted peptides.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I stack multiple peptides as a beginner?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'One or two complementary compounds is reasonable for a first cycle if you start at the lower dose end and log carefully. BPC-157 + GHK-Cu topical is a reasonable first combination — completely different mechanisms, no receptor overlap, no documented interaction. Three or more compounds on a first cycle reduces your ability to isolate what is working or causing any side effect. Run the simple protocol first, add complexity on cycle two.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long until I see results from beginner peptides?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'BPC-157 for acute injury: inflammation reduction within 1–2 weeks, measurable tissue repair by weeks 4–6. GHK-Cu for skin: hydration improvement within 2 weeks, collagen density changes by weeks 8–12. Ipamorelin/CJC-1295 for body composition: sleep quality shifts within week 1–2, body composition changes by weeks 6–8. Epithalon for longevity: cumulative effects across multiple annual courses. Match your timeline expectations to the mechanism — gene expression compounds are slower than acute tissue repair compounds.',
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
