import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight, ExternalLink, Dna, Shield, Zap, Activity, Layers,
  AlertCircle, BookOpen, Clock, Star, FlaskConical,
} from 'lucide-react'
import { AFFILIATE_BASE, AFFILIATE_PRODUCT } from '@/lib/products'
import RelatedLinks from '@/components/RelatedLinks'
import FaqAccordion from '@/components/FaqAccordion'

const canonical = 'https://www.stackspeptide.com/epithalon-longevity-guide'
const pageTitle = 'Epithalon Longevity Guide — Telomere Extension, Khavinson Protocol & Research | StacksPeptide'
const pageDesc = 'Complete Epithalon (Epitalon) longevity guide: hTERT telomerase activation, in vivo telomere elongation, Khavinson 10-day cycle protocol, and 40+ years of published research.'

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDesc,
  alternates: { canonical },
  openGraph: {
    title: pageTitle,
    description: pageDesc,
    url: canonical,
    type: 'article',
    siteName: 'StacksPeptide',
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDesc,
  },
}

const mechanisms = [
  {
    icon: <Dna size={22} />,
    color: '#34d399',
    title: 'Telomerase Activation',
    mechanism: 'hTERT Gene Upregulation',
    detail:
      'Epithalon upregulates hTERT — the catalytic subunit gene of telomerase — enabling the enzyme complex to rebuild telomeric repeat sequences (TTAGGG) at chromosome ends. This is the direct molecular basis for the documented in vivo telomere elongation observed in human somatic cells. Without adequate hTERT expression, every somatic cell division shortens telomeres until critical threshold triggers replicative senescence or apoptosis.',
  },
  {
    icon: <Activity size={22} />,
    color: '#a78bfa',
    title: 'Pineal Gland Restoration',
    mechanism: 'Melatonin Production Normalization',
    detail:
      'Epithalon is a synthetic analog of Epithalamin — a natural peptide produced by the pineal gland. Aging progressively impairs pineal function and reduces melatonin output, disrupting circadian regulation and antioxidant defense. Khavinson\'s studies document that Epithalon normalizes melatonin synthesis in aged subjects — a finding consistent across multiple rodent studies and mirrored in clinical observations of improved sleep architecture.',
  },
  {
    icon: <Shield size={22} />,
    color: '#34d399',
    title: 'Antioxidant Upregulation',
    mechanism: 'SOD, Catalase & Lipid Peroxidation Reduction',
    detail:
      'Reactive oxygen species (ROS) directly damage telomeric DNA — guanine-rich sequences are disproportionately vulnerable to oxidative attack. Epithalon has been shown to increase superoxide dismutase (SOD) and catalase activity in multiple tissue models, while simultaneously reducing markers of lipid peroxidation. This antioxidant shield effect preserves existing telomere length by reducing the rate of oxidative shortening between cell divisions.',
  },
  {
    icon: <Zap size={22} />,
    color: '#d4a843',
    title: 'Oncostatic Effect',
    mechanism: 'p53 and Bcl-2 Tumor Suppressor Regulation',
    detail:
      'Epithalon has demonstrated oncostatic properties across multiple animal model studies — including documented reductions in spontaneous mammary tumor incidence in rodents. The proposed mechanism involves normalization of tumor suppressor gene expression, particularly p53 (the "guardian of the genome") and Bcl-2 (which governs the apoptosis-survival balance). This makes the compound interesting not only as a longevity agent but as part of a broader cellular quality-control framework.',
  },
  {
    icon: <Clock size={22} />,
    color: '#22d3ee',
    title: 'Circadian Rhythm Restoration',
    mechanism: 'Cortisol & Melatonin Cycle Normalization',
    detail:
      'Aging is associated with flattening of the cortisol awakening response and blunting of the nocturnal melatonin surge — both contribute to poor sleep quality, elevated baseline inflammation, and impaired cognitive function. Epithalon\'s action on the pineal-hypothalamic axis helps restore the amplitude and timing of these hormonal rhythms. Khavinson cohort studies document measurably improved circadian marker profiles in elderly subjects treated with Epithalon-class peptides.',
  },
  {
    icon: <Layers size={22} />,
    color: '#a78bfa',
    title: 'Gene Expression Reset',
    mechanism: 'Epigenetic Methylation & Transcriptional Rejuvenation',
    detail:
      'As cells age, the transcriptional landscape drifts from developmental set-points — pro-inflammatory genes upregulate, regenerative genes downregulate. Epithalon functions as a peptide bioregulator, directly interacting with chromatin to partially reverse this drift. Methylation studies from the Khavinson group document measurable shifts in gene expression profiles toward patterns more consistent with younger tissue — including genes governing cell cycle progression, mitochondrial biogenesis, and extracellular matrix maintenance.',
  },
  {
    icon: <Star size={22} />,
    color: '#34d399',
    title: 'Immune Function Normalization',
    mechanism: 'Thymic Peptide Balance & Immune Senescence',
    detail:
      'Immune senescence — the age-related decline in adaptive immunity — is both a consequence and a driver of accelerated aging. The thymus involutes progressively after puberty, reducing output of naïve T-cells. Epithalon studies document normalization of thymic peptide profiles and improvements in immune function markers in elderly cohorts, consistent with broader findings from Khavinson\'s bioregulator research program across pineal, thymus, and other glandular peptides.',
  },
]

const studies = [
  {
    period: '1980s–1990s',
    color: '#34d399',
    title: 'Foundational Animal Lifespan Studies',
    findings: [
      'Khavinson group demonstrates 25–33% lifespan extension in mice treated with Epithalamin (the natural precursor) — one of the largest longevity effects documented in mammalian models of that era.',
      'Drosophila melanogaster studies confirm lifespan extension effects, establishing cross-species generalizability of the pineal peptide mechanism.',
      'Spontaneous tumor incidence reduced in treated rodent cohorts — early evidence for the oncostatic mechanism.',
    ],
  },
  {
    period: '2000s',
    color: '#a78bfa',
    title: 'Human Clinical Trials — Elderly Cohorts',
    findings: [
      'Khavinson\'s landmark 12-year follow-up study of elderly St. Petersburg subjects treated with Epithalamin and Epithalon-class peptides documents significantly reduced all-cause mortality in treated vs. control groups — a rare long-duration outcome measure.',
      'Antioxidant enzyme profiles (SOD, catalase) measurably improved in treated cohorts versus age-matched controls across multiple clinical studies.',
      'Retinal function improvement documented in elderly subjects with age-related retinal degeneration — a finding consistent with Epithalon\'s origins as a pineal gland-derived compound and its antioxidant mechanisms.',
    ],
  },
  {
    period: '2010s',
    color: '#d4a843',
    title: 'Telomere Biology Integration',
    findings: [
      'Cell model studies confirm Epithalon-induced hTERT upregulation in human fetal fibroblasts — directly linking the peptide to the telomerase enzyme complex at the molecular level.',
      'Oxidative stress biomarker reductions documented in multiple tissue types, with direct correlation to reduced telomere shortening rates in treated cells.',
      'Khavinson research begins to be cited in international telomere biology literature as Nobel Prize-winning telomere science (Blackburn, Greider, Szostak 2009) creates broader research context.',
    ],
  },
  {
    period: '2020s',
    color: '#22d3ee',
    title: 'Confirmed In Vivo Telomere Elongation',
    findings: [
      'A 2025 PMC-indexed review confirms documented telomere lengthening in human white blood cells following Epithalon treatment — elevating Epithalon to the only synthetic tetrapeptide with this documented in vivo effect in human somatic cells.',
      'Epigenetic methylation studies confirm gene expression profile shifts toward younger transcriptional patterns in treated cells — validating the bioregulatory mechanism proposed by Khavinson.',
      'The four decades of Khavinson findings are now recognized as having anticipated the telomere biology framework by nearly 20 years.',
    ],
  },
]

const faqs = [
  {
    q: 'What makes Epithalon unique among longevity peptides?',
    a: 'Epithalon is the only synthetic peptide with documented in vivo telomere elongation in human somatic cells. Most longevity compounds work upstream of telomere biology (antioxidants, mitochondrial support, NAD+ metabolism) or have only been studied in animal models. Epithalon directly activates telomerase via hTERT upregulation — the same enzyme system that makes germ cells and cancer cells effectively immortal — and has been validated across 40+ years of research including human clinical trials and a 12-year mortality follow-up.',
  },
  {
    q: 'How does oral Epithalon compare to subcutaneous injection?',
    a: 'Subcutaneous injection is the gold standard for Epithalon administration and the route used in all published research. Peptides are susceptible to proteolytic degradation in the GI tract — the same enzymes that digest dietary proteins will break down Epithalon\'s tetrapeptide sequence before meaningful systemic absorption can occur. Some researchers report using intranasal preparations as a middle ground, but the published clinical data comes exclusively from injectable protocols. Oral bioavailability is considered negligible.',
  },
  {
    q: 'Why is cycling 2x per year the research-validated frequency?',
    a: 'The 2-per-year (spring and fall) frequency emerges directly from Khavinson\'s original protocol design and has been used consistently across the clinical studies that generated the mortality and biomarker outcome data. More frequent cycling has not been validated in published studies. The rationale is that Epithalon\'s gene expression and epigenetic effects persist well beyond the 10-day cycle period — the body does not need continuous exposure to maintain the benefit, and the extended off-period may allow full expression of the epigenetic changes initiated during the cycle.',
  },
  {
    q: 'When can I expect to see measurable results from Epithalon?',
    a: 'Epithalon is not a fast-acting compound. Sleep quality and circadian rhythm improvements are often noted within the first cycle (10 days), consistent with its melatonin-modulating mechanism. Antioxidant biomarker changes may be measurable within weeks post-cycle. Telomere length changes, however, require months to years of consistent cycling to become measurable — telomere extension is a slow structural process. Researchers tracking objective outcomes typically use telomere length testing (blood spot or leukocyte assays) at 12-24 month intervals alongside antioxidant capacity panels.',
  },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Epithalon — Telomere Extension & Longevity Science',
  description: pageDesc,
  mainEntityOfPage: canonical,
  url: canonical,
  author: { '@type': 'Organization', name: 'StacksPeptide' },
  publisher: {
    '@type': 'Organization',
    name: 'StacksPeptide',
    logo: { '@type': 'ImageObject', url: 'https://www.stackspeptide.com/og-image.jpg' },
  },
  datePublished: '2026-03-20',
  dateModified: '2026-04-05',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.stackspeptide.com' },
    { '@type': 'ListItem', position: 2, name: 'Epithalon Longevity Guide', item: canonical },
  ],
}

export default function EpithalonLongevityGuidePage() {
  return (
    <div style={{ background: '#ffffff', minHeight: '100vh' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <div style={{
        background: 'linear-gradient(160deg, #022c22 0%, #0a1f18 40%, #0a0a14 100%)',
        padding: '5.5rem 2rem 5rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          background: 'radial-gradient(ellipse 65% 55% at 60% 45%, rgba(52,211,153,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
          <div style={{ maxWidth: 880 }}>
            <div className="section-label" style={{ color: '#34d399' }}>Complete Longevity Guide</div>
            <h1 className="heading-xl" style={{ color: '#ffffff', marginBottom: '1.25rem' }}>
              Epithalon — <span className="gold-text">Telomere Extension</span> & Longevity Science
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: '1.5rem', maxWidth: 740 }}>
              The only synthetic tetrapeptide with documented in vivo telomere elongation in human somatic cells. Alanine-Glutamic-Aspartic-Glycine (AEDG) — 40+ years of research from Professor Vladimir Khavinson at the St. Petersburg Institute of Gerontology.
            </p>
            <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
              {[
                { label: 'Research Origin', value: 'St. Petersburg Institute, 1980s' },
                { label: 'Primary Action', value: 'Telomerase (hTERT) Activation' },
                { label: 'Evidence Base', value: '40+ Years, Human Trials' },
              ].map(item => (
                <div key={item.label} style={{ padding: '0.625rem 1rem', background: 'rgba(52,211,153,0.08)', border: '1px solid rgba(52,211,153,0.2)', borderRadius: 10 }}>
                  <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'rgba(52,211,153,0.7)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 2 }}>{item.label}</div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 800, color: '#ffffff' }}>{item.value}</div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: '2rem' }}>
              <a href={AFFILIATE_PRODUCT('epitalon-50mg')} target="_blank" rel="sponsored noopener noreferrer" className="btn-primary">
                Buy Epithalon 50mg <ExternalLink size={14} />
              </a>
              <a href="#mechanisms" className="btn-secondary" style={{ color: 'rgba(255,255,255,0.75)', borderColor: 'rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.05)' }}>
                View 7 Mechanisms <ArrowRight size={14} />
              </a>
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 14px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 100, fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)' }}>
              <AlertCircle size={12} style={{ color: '#fb923c' }} />
              For laboratory and research use only. Not for human consumption.
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>

        {/* What Is Epithalon */}
        <section style={{ padding: '4rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="rg-2col" style={{ gap: '4rem', alignItems: 'flex-start' }}>
            <div>
              <div className="section-label" style={{ color: '#34d399' }}>Discovery & Identity</div>
              <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '1.25rem' }}>
                What Is <span className="gold-text">Epithalon?</span>
              </h2>
              <p style={{ color: '#444458', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '1.05rem' }}>
                Epithalon (also written Epitalon) is a synthetic tetrapeptide with the amino acid sequence Alanine-Glutamic-Aspartic-Glycine (AEDG). It was developed by Professor Vladimir Khavinson at the St. Petersburg Institute of Bioregulation and Gerontology in the 1980s as a synthetic analog of Epithalamin — a natural peptide complex produced by the pineal gland and isolated from bovine pineal tissue.
              </p>
              <p style={{ color: '#444458', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '1.05rem' }}>
                The driving logic behind its synthesis was the observation that the pineal gland functions as a master regulator of aging — controlling circadian rhythms, melatonin output, and what Khavinson termed "peptide bioregulation" of gene expression across multiple organ systems. By creating a purified, synthetic, and reproducible version of the active tetrapeptide fraction, Khavinson's team produced a research tool that could be studied with precision impossible using crude glandular extracts.
              </p>
              <p style={{ color: '#444458', lineHeight: 1.85, fontSize: '1.05rem' }}>
                Over four decades of subsequent research — spanning cell studies, invertebrate and mammalian animal models, and human clinical trials in elderly cohorts — produced a body of evidence culminating in the 2020s confirmation of in vivo telomere elongation in human white blood cells. This makes Epithalon the most extensively studied synthetic longevity tetrapeptide in existence.
              </p>
            </div>
            <div>
              <div style={{ padding: '2rem', background: 'linear-gradient(135deg, #022c22, #0a1a14)', border: '1px solid rgba(52,211,153,0.2)', borderRadius: 20, marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1.25rem' }}>
                  <Dna size={20} style={{ color: '#34d399' }} />
                  <span style={{ fontWeight: 900, color: '#ffffff', fontSize: '1.05rem' }}>Compound Identity</span>
                </div>
                {[
                  { label: 'Full Name', value: 'Epithalon (Epitalon)' },
                  { label: 'Sequence', value: 'Ala-Glu-Asp-Gly (AEDG)' },
                  { label: 'Type', value: 'Synthetic Tetrapeptide' },
                  { label: 'Natural Analog', value: 'Epithalamin (pineal gland)' },
                  { label: 'Research Origin', value: 'Khavinson, St. Petersburg, 1980s' },
                  { label: 'Primary Target', value: 'hTERT / Telomerase Activation' },
                  { label: 'Evidence Level', value: 'Human in vivo (PMC 2025)' },
                ].map(item => (
                  <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '0.6rem 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', fontWeight: 600 }}>{item.label}</span>
                    <span style={{ fontSize: '0.92rem', color: '#34d399', fontWeight: 700, textAlign: 'right', maxWidth: 220 }}>{item.value}</span>
                  </div>
                ))}
              </div>
              <div style={{ padding: '1.25rem 1.5rem', background: '#f9f9fd', border: '1px solid rgba(52,211,153,0.15)', borderLeft: '3px solid #34d399', borderRadius: '0 12px 12px 0', fontSize: '0.97rem', color: '#444458', lineHeight: 1.75 }}>
                <strong style={{ color: '#0a0a14' }}>Spelling note:</strong> "Epithalon" and "Epitalon" are identical compounds. Epitalon is the original Russian transliteration; Epithalon is the Westernized spelling in English publications. Same peptide, same sequence, same biological activity.
              </div>
            </div>
          </div>
        </section>

        {/* Telomere Connection */}
        <section style={{ padding: '4rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="rg-2col" style={{ gap: '4rem', alignItems: 'flex-start' }}>
            <div>
              <div className="section-label" style={{ color: '#34d399' }}>Core Science</div>
              <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '1.25rem' }}>
                The Telomere <span className="gold-text">Connection</span>
              </h2>
              <p style={{ color: '#444458', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '1.05rem' }}>
                Telomeres are protective nucleoprotein caps at the ends of every chromosome — structurally analogous to the plastic tip on a shoelace. Their function is to prevent chromosome end-degradation and end-to-end fusion. They consist of repetitive DNA sequences (TTAGGG in humans) bound by a specialized protein complex called shelterin.
              </p>
              <p style={{ color: '#444458', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '1.05rem' }}>
                The critical problem: every somatic cell division shortens telomeres by approximately 50–200 base pairs, because the DNA replication machinery cannot fully copy chromosome ends. This progressive shortening — bounded by the Hayflick limit — is a fundamental constraint of somatic cell biology. When telomeres become critically short, the cell enters replicative senescence (stops dividing) or apoptosis (dies). Accumulating senescent cells drive the inflammatory, degenerative phenotype we recognize as aging.
              </p>
              <p style={{ color: '#444458', lineHeight: 1.85, fontSize: '1.05rem' }}>
                Telomerase — the enzyme complex that rebuilds telomere length — is active in germ cells and some stem cells but largely silenced in adult somatic cells. This is the central vulnerability Epithalon addresses: by upregulating hTERT (the catalytic reverse transcriptase subunit of telomerase), it reactivates the cellular machinery capable of extending telomere length back toward youthful baselines. Documented in human white blood cell studies — the first and only synthetic tetrapeptide to achieve this in vivo in humans.
              </p>
            </div>
            <div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { step: '01', color: '#34d399', title: 'Telomere Shortening', desc: 'Each somatic cell division removes 50–200 bp of telomeric sequence. Over a lifetime of cell divisions, telomeres shorten from ~10,000 bp (newborn) to ~5,000 bp or less (elderly). This is the Hayflick limit — the molecular clock of cellular aging.' },
                  { step: '02', color: '#a78bfa', title: 'Critical Length Threshold', desc: 'When telomeres reach critical minimum length (~3,000–4,000 bp), the shelterin complex signals DNA damage response pathways. The cell either halts proliferation (senescence) or initiates apoptosis. Senescent cells accumulate and secrete pro-inflammatory cytokines — the SASP (senescence-associated secretory phenotype).' },
                  { step: '03', color: '#d4a843', title: 'hTERT Silencing in Soma', desc: 'In adult somatic cells, the hTERT gene is epigenetically silenced — telomerase is not expressed, so there is no natural mechanism to counteract telomere shortening. This silencing is the key upstream vulnerability.' },
                  { step: '04', color: '#34d399', title: 'Epithalon Reactivation', desc: 'Epithalon upregulates hTERT gene expression, reactivating telomerase in somatic cells. The telomerase complex then extends telomeres by adding TTAGGG repeats — documented in multiple cell models and confirmed in human white blood cells in vivo. This is the unique and primary mechanism that distinguishes Epithalon from every other longevity compound.' },
                ].map(item => (
                  <div key={item.step} style={{ display: 'flex', gap: '1.25rem', padding: '1.5rem', background: '#f9f9fd', border: '1px solid rgba(0,0,0,0.06)', borderRadius: 16 }}>
                    <div style={{ width: 40, height: 40, borderRadius: 10, background: `${item.color}15`, border: `1px solid ${item.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '0.85rem', color: item.color, flexShrink: 0 }}>{item.step}</div>
                    <div>
                      <div style={{ fontWeight: 800, color: '#0a0a14', fontSize: '1rem', marginBottom: '0.4rem' }}>{item.title}</div>
                      <div style={{ fontSize: '0.95rem', color: '#555570', lineHeight: 1.7 }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 7 Mechanisms */}
        <section id="mechanisms" style={{ padding: '4rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)', scrollMarginTop: 80 }}>
          <div className="section-label">Molecular Biology</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '0.75rem' }}>
            7 Documented <span className="gold-text">Mechanisms</span>
          </h2>
          <p style={{ color: '#555570', fontSize: '1.05rem', marginBottom: '2.5rem', maxWidth: 680 }}>
            Unlike most longevity compounds that target a single pathway, Epithalon operates across seven distinct and well-characterized biological mechanisms — each documented in peer-reviewed research from Khavinson's group and independent investigators.
          </p>
          <div className="rg-3col" style={{ gap: '1.25rem' }}>
            {mechanisms.map(item => (
              <div key={item.title} style={{
                padding: '2rem',
                background: '#f9f9fd',
                border: `1px solid ${item.color}25`,
                borderTop: `3px solid ${item.color}`,
                borderRadius: 20,
              }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: `${item.color}12`, border: `1px solid ${item.color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: item.color, marginBottom: '1.25rem' }}>
                  {item.icon}
                </div>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, color: item.color, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.4rem' }}>{item.mechanism}</div>
                <h3 style={{ fontWeight: 900, color: '#0a0a14', fontSize: '1.1rem', marginBottom: '0.875rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.97rem', color: '#555570', lineHeight: 1.75 }}>{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 40+ Years Data Summary */}
        <section style={{ padding: '4rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label">Published Evidence</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '0.75rem' }}>
            40+ Years of <span className="gold-text">Research Data</span>
          </h2>
          <p style={{ color: '#555570', fontSize: '1.05rem', marginBottom: '2.5rem', maxWidth: 680 }}>
            The Khavinson research program represents the longest continuous longevity peptide research effort in scientific history. Key findings across four decades:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {studies.map(study => (
              <div key={study.period} style={{
                padding: '2rem',
                background: '#f9f9fd',
                border: '1px solid rgba(0,0,0,0.06)',
                borderLeft: `3px solid ${study.color}`,
                borderRadius: '0 20px 20px 0',
              }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 800, color: study.color, background: `${study.color}15`, padding: '4px 12px', borderRadius: 100, border: `1px solid ${study.color}30` }}>{study.period}</div>
                  <div style={{ fontWeight: 900, color: '#0a0a14', fontSize: '1.1rem' }}>{study.title}</div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                  {study.findings.map((f, i) => (
                    <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                      <Activity size={14} style={{ color: study.color, flexShrink: 0, marginTop: 4 }} />
                      <span style={{ fontSize: '0.97rem', color: '#444458', lineHeight: 1.75 }}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {/* Key Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '2.5rem' }}>
            {[
              { stat: '25–33%', label: 'Lifespan Extension', detail: 'Documented in mouse models vs. control groups', color: '#34d399' },
              { stat: '12yr', label: 'Follow-up Duration', detail: 'Landmark human mortality outcomes study', color: '#a78bfa' },
              { stat: 'hTERT↑', label: 'Gene Confirmed', detail: 'Human in vivo telomerase activation documented', color: '#d4a843' },
              { stat: '≥98%', label: 'Purity Standard', detail: 'Research-grade HPLC purity, third-party tested', color: '#22d3ee' },
            ].map(item => (
              <div key={item.label} style={{ padding: '1.75rem', background: '#f9f9fd', border: '1px solid rgba(0,0,0,0.07)', borderRadius: 18 }}>
                <div style={{ fontSize: '2.6rem', fontWeight: 900, color: item.color, lineHeight: 1, letterSpacing: '-0.03em', marginBottom: '0.5rem' }}>{item.stat}</div>
                <div style={{ fontWeight: 800, color: '#0a0a14', fontSize: '0.97rem', marginBottom: '0.375rem' }}>{item.label}</div>
                <div style={{ color: '#666688', fontSize: '0.88rem', lineHeight: 1.6 }}>{item.detail}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Protocol Section */}
        <section id="protocol" style={{ padding: '4rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)', scrollMarginTop: 80 }}>
          <div className="section-label">Research Protocol</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '0.75rem' }}>
            Standard Research <span className="gold-text">Protocol</span>
          </h2>
          <p style={{ color: '#555570', fontSize: '1.05rem', marginBottom: '2.5rem', maxWidth: 680 }}>
            The protocol used in published Khavinson research and validated across subsequent clinical adaptations. Subcutaneous injection is the gold standard — oral bioavailability is not supported by the literature.
          </p>
          <div className="rg-2col" style={{ gap: '1.5rem', marginBottom: '2.5rem' }}>
            {[
              {
                name: 'Standard 10-Day Cycle',
                subtitle: 'Khavinson Protocol — Most Validated',
                color: '#34d399',
                recommended: true,
                specs: [
                  { label: 'Daily Dose', value: '5–10 mg/day' },
                  { label: 'Cycle Length', value: '10 consecutive days' },
                  { label: 'Cycles per Year', value: '2× (spring and fall)' },
                  { label: 'Route', value: 'Subcutaneous injection' },
                  { label: 'Timing', value: 'Morning — consistent daily time' },
                  { label: 'Total Dose (5mg)', value: '50mg per cycle' },
                  { label: 'Total Dose (10mg)', value: '100mg per cycle' },
                ],
                notes: 'The foundational protocol derived from Khavinson\'s original research design. One 50mg vial covers a complete 10-day cycle at 5mg/day. The spring-and-fall timing is traditional but not mechanistically required — any two cycles spaced roughly 6 months apart is functionally equivalent.',
              },
              {
                name: 'Extended 20-Day Cycle',
                subtitle: 'Advanced Protocol — Once Per Year',
                color: '#a78bfa',
                recommended: false,
                specs: [
                  { label: 'Daily Dose', value: '5 mg/day' },
                  { label: 'Cycle Length', value: '20 consecutive days' },
                  { label: 'Cycles per Year', value: '1× per year' },
                  { label: 'Route', value: 'Subcutaneous injection' },
                  { label: 'Timing', value: 'Morning — consistent daily time' },
                  { label: 'Total Dose', value: '100mg per cycle' },
                ],
                notes: 'Used in research contexts focused on deeper epigenetic bioregulation — the extended exposure period is hypothesized to produce more sustained gene expression normalization. Less common than the 10-day protocol in the published clinical literature, but the identical total dose (100mg) makes it a legitimate variant.',
              },
            ].map(protocol => (
              <div key={protocol.name} style={{
                padding: '2rem',
                background: '#f9f9fd',
                border: `2px solid ${protocol.color}${protocol.recommended ? '40' : '20'}`,
                borderRadius: 22,
                position: 'relative',
              }}>
                {protocol.recommended && (
                  <div style={{
                    position: 'absolute', top: -12, left: '1.5rem',
                    background: '#34d399', color: '#fff',
                    fontSize: '0.72rem', fontWeight: 900,
                    padding: '3px 12px', borderRadius: 100,
                    letterSpacing: '0.08em', textTransform: 'uppercase',
                  }}>Most Validated</div>
                )}
                <div style={{ marginBottom: '0.4rem', fontSize: '0.75rem', fontWeight: 700, color: protocol.color, textTransform: 'uppercase', letterSpacing: '0.12em' }}>{protocol.subtitle}</div>
                <h3 style={{ fontWeight: 900, color: '#0a0a14', fontSize: '1.2rem', marginBottom: '1.5rem' }}>{protocol.name}</h3>
                {protocol.specs.map(spec => (
                  <div key={spec.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '0.6rem 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                    <span style={{ fontSize: '0.85rem', color: '#888898', fontWeight: 600 }}>{spec.label}</span>
                    <span style={{ fontSize: '0.97rem', color: '#0a0a14', fontWeight: 800 }}>{spec.value}</span>
                  </div>
                ))}
                <p style={{ marginTop: '1.25rem', fontSize: '0.92rem', color: '#666688', lineHeight: 1.7, padding: '0.875rem 1rem', background: `${protocol.color}08`, border: `1px solid ${protocol.color}20`, borderRadius: 10 }}>
                  {protocol.notes}
                </p>
              </div>
            ))}
          </div>
          {/* Reconstitution Card */}
          <div style={{ maxWidth: 760, padding: '2.5rem', background: 'linear-gradient(135deg, #fffbf0, #f7f8fc)', border: '2px solid rgba(212,168,67,0.25)', borderRadius: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
              <FlaskConical size={20} style={{ color: '#d4a843' }} />
              <span style={{ fontWeight: 900, color: '#0a0a14', fontSize: '1.1rem' }}>Reconstitution & Administration Reference</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
              {[
                { label: 'Reconstitution', value: '50mg vial + 5mL BAC water = 10mg/mL' },
                { label: 'Volume at 5mg', value: '0.5mL (500μL)' },
                { label: 'Volume at 10mg', value: '1.0mL (1000μL)' },
                { label: 'Injection Route', value: 'Subcutaneous (SC)' },
                { label: 'Oral Bioavailability', value: 'Not supported (SC gold standard)' },
                { label: 'Storage (reconstituted)', value: '2–8°C, use within 28–30 days' },
              ].map(item => (
                <div key={item.label} style={{ padding: '1rem 1.25rem', background: 'rgba(255,255,255,0.75)', border: '1px solid rgba(212,168,67,0.15)', borderRadius: 12 }}>
                  <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#9090a8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.3rem' }}>{item.label}</div>
                  <div style={{ fontWeight: 800, color: '#0a0a14', fontSize: '0.97rem', lineHeight: 1.4 }}>{item.value}</div>
                </div>
              ))}
            </div>
            <div style={{ padding: '1rem 1.25rem', background: 'rgba(212,168,67,0.06)', border: '1px solid rgba(212,168,67,0.15)', borderRadius: 12, fontSize: '0.92rem', color: '#666688', lineHeight: 1.7 }}>
              <strong style={{ color: '#0a0a14' }}>Reconstitution note:</strong> Add BAC water slowly down the inner wall of the vial — not directly onto the lyophilized peptide cake. Swirl gently to dissolve. Do not shake vigorously. Store reconstituted solution refrigerated at 2–8°C and use within 28–30 days. For laboratory and research use only.
            </div>
          </div>
        </section>

        {/* Longevity Stacks */}
        <section style={{ padding: '4rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label" style={{ color: '#34d399' }}>Stack Protocols</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '0.75rem' }}>
            Epithalon <span className="gold-text">Longevity Stacks</span>
          </h2>
          <p style={{ color: '#555570', fontSize: '1.05rem', marginBottom: '2.5rem', maxWidth: 680 }}>
            Epithalon's mechanistic profile makes it well-suited for stacking — it addresses telomere biology directly, leaving GH optimization, metabolic repair, and extracellular remodeling to complementary compounds.
          </p>

          {/* Stack 1: Ipamorelin + CJC-1295 */}
          <div style={{
            background: 'linear-gradient(135deg, #0a0a14 0%, #0d1a28 100%)',
            borderRadius: 24, padding: '3rem',
            border: '1px solid rgba(52,211,153,0.15)',
            marginBottom: '1.5rem',
          }}>
            <div className="section-label" style={{ color: '#34d399' }}>Comprehensive Longevity Stack</div>
            <h3 style={{ fontWeight: 900, color: '#ffffff', fontSize: '1.5rem', marginBottom: '0.875rem' }}>
              Epithalon + Ipamorelin / <span style={{ color: '#34d399' }}>CJC-1295</span>
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2rem', maxWidth: 720 }}>
              GH secretagogue optimization (Ipamorelin/CJC-1295) + telomere protection (Epithalon) = a comprehensive longevity protocol addressing two entirely non-overlapping dimensions of cellular aging. GH pulse restoration drives tissue repair, body composition, and IGF-1-mediated cell regeneration. Epithalon secures the chromosomal substrate those regenerating cells will use — ensuring their telomere reserves support long-term division capacity.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
              {[
                { compound: 'Epithalon', color: '#34d399', target: 'Chromosomal Integrity', mechanism: 'Telomerase activation via hTERT upregulation. Protects and extends the telomere reserves of all regenerating cells — including those stimulated by GH restoration.', timing: '10-day pulse, 2× per year' },
                { compound: 'Ipamorelin', color: '#a78bfa', target: 'GH Pulse Optimization', mechanism: 'Selective GHRH receptor agonist. Amplifies natural GH pulses without significant cortisol or prolactin elevation. Drives tissue repair, lean mass, and IGF-1 production.', timing: '100–200mcg, 2–3× daily, 8–12 week cycle' },
                { compound: 'CJC-1295', color: '#22d3ee', target: 'GH Axis Baseline Elevation', mechanism: 'GHRH analog with DAC modification for extended half-life. Works synergistically with Ipamorelin — amplifying both pulse frequency and amplitude for maximal GH secretagogue effect.', timing: '1–2mg/week alongside Ipamorelin' },
              ].map(item => (
                <div key={item.compound} style={{ padding: '1.75rem', background: 'rgba(255,255,255,0.04)', border: `1px solid ${item.color}25`, borderRadius: 18 }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: item.color, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.4rem' }}>{item.target}</div>
                  <h4 style={{ fontWeight: 900, color: '#ffffff', fontSize: '1.1rem', marginBottom: '0.75rem' }}>{item.compound}</h4>
                  <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.58)', lineHeight: 1.75, marginBottom: '0.875rem' }}>{item.mechanism}</p>
                  <div style={{ fontSize: '0.83rem', color: item.color, fontWeight: 700 }}>{item.timing}</div>
                </div>
              ))}
            </div>
            <div style={{ padding: '1.25rem 1.5rem', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 14, fontSize: '0.97rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
              <strong style={{ color: '#fff' }}>Suggested sequencing:</strong> Run the Epithalon 10-day cycle first to establish chromosomal protection. Upon completion, begin the Ipamorelin/CJC-1295 stack. The rationale: the GH-driven tissue regeneration from GHRH secretagogues places higher demands on cell division capacity — having telomere protection established beforehand ensures the regenerating cell populations have maximal chromosomal reserve.
            </div>
          </div>

          {/* Stack 2: GHK-Cu */}
          <div style={{
            background: '#f9f9fd',
            borderRadius: 24, padding: '3rem',
            border: '1px solid rgba(52,211,153,0.2)',
          }}>
            <div className="section-label" style={{ color: '#34d399' }}>Skin & Cellular Longevity Stack</div>
            <h3 style={{ fontWeight: 900, color: '#0a0a14', fontSize: '1.5rem', marginBottom: '0.875rem' }}>
              Epithalon + <span className="gold-text">GHK-Cu</span>
            </h3>
            <p style={{ color: '#444458', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2rem', maxWidth: 720 }}>
              GHK-Cu (copper peptide) operates via extracellular matrix remodeling and wound healing gene expression — a completely non-overlapping mechanism to Epithalon's intranuclear telomere biology. Together they represent cellular longevity (Epithalon's chromosomal protection) paired with structural longevity (GHK-Cu's collagen synthesis, elastin production, and tissue repair gene activation).
            </p>
            <div className="rg-2col" style={{ gap: '1.25rem' }}>
              {[
                { compound: 'Epithalon', color: '#34d399', target: 'Intranuclear / Chromosomal', mechanism: 'Telomere extension, gene expression reset, antioxidant upregulation. Addresses aging at the fundamental level of chromosomal integrity and transcriptional fidelity.', timing: '10-day cycle, SC injection, 2× per year' },
                { compound: 'GHK-Cu', color: '#d4a843', target: 'Extracellular Matrix / Tissue', mechanism: 'Upregulates collagen synthesis, elastin production, and tissue remodeling genes. Documented gene expression effects across 4,000+ genes — one of the broadest transcriptional profiles of any peptide compound. Non-overlapping with Epithalon\'s intranuclear mechanism.', timing: 'Topical or SC, ongoing protocol, 4–8 week cycles' },
              ].map(item => (
                <div key={item.compound} style={{ padding: '1.75rem', background: '#ffffff', border: `1px solid ${item.color}25`, borderRadius: 18 }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: item.color, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.4rem' }}>{item.target}</div>
                  <h4 style={{ fontWeight: 900, color: '#0a0a14', fontSize: '1.1rem', marginBottom: '0.75rem' }}>{item.compound}</h4>
                  <p style={{ fontSize: '0.95rem', color: '#555570', lineHeight: 1.75, marginBottom: '0.875rem' }}>{item.mechanism}</p>
                  <div style={{ fontSize: '0.83rem', color: item.color, fontWeight: 700 }}>{item.timing}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What to Expect Over Time — Timeline */}
        <section style={{ padding: '4rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label">Research Timeline</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '0.75rem' }}>
            What to Expect <span className="gold-text">Over Time</span>
          </h2>
          <p style={{ color: '#555570', fontSize: '1.05rem', marginBottom: '2.5rem', maxWidth: 680 }}>
            Epithalon is not a fast-acting compound — it is a structural intervention at the chromosomal level. Understanding the timeline of its effects is essential for researchers tracking meaningful outcomes.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', maxWidth: 900 }}>
            {[
              {
                period: 'First Cycle (Days 1–10)',
                color: '#34d399',
                outcomes: [
                  { label: 'Sleep Quality', desc: 'Often the first subjective change reported — consistent with Epithalon\'s melatonin-modulating mechanism. Sleep architecture improvements (deeper sleep, more consistent onset) appear early in the cycle.' },
                  { label: 'Antioxidant Enzyme Activity', desc: 'SOD and catalase upregulation begins within days of first exposure — detectable in biochemical assays within the first week of the cycle period.' },
                  { label: 'hTERT Gene Upregulation', desc: 'Telomerase gene expression changes begin immediately — but structural telomere length changes require many cell divisions and months of consistent cycling to accumulate.' },
                ],
              },
              {
                period: 'Post-Cycle — Weeks 2–8',
                color: '#a78bfa',
                outcomes: [
                  { label: 'Circadian Rhythm Stabilization', desc: 'Cortisol and melatonin rhythm improvements typically consolidate in the weeks following cycle completion. Consistent sleep-wake timing and reduced sleep onset latency are the most commonly documented post-cycle improvements.' },
                  { label: 'Stress Resilience', desc: 'Improved stress resilience — consistent with normalized cortisol rhythms and antioxidant capacity — is reported in the post-cycle period and appears to persist across the inter-cycle gap.' },
                  { label: 'Gene Expression Persistence', desc: 'Khavinson research documents that epigenetic gene expression changes persist well beyond the cycle period. The transcriptional bioregulatory effect is not immediately reversed when Epithalon is discontinued.' },
                ],
              },
              {
                period: 'Year 1 — Multiple Cycles',
                color: '#d4a843',
                outcomes: [
                  { label: 'Measurable Biomarker Improvements', desc: 'After 2 cycles (standard spring/fall protocol), antioxidant capacity panels should show measurable improvement over pre-cycle baselines. Inflammatory marker panels (hs-CRP, IL-6) are relevant secondary tracking metrics.' },
                  { label: 'Immune Marker Normalization', desc: 'Clinical studies show measurable improvements in immune function markers — including thymic peptide profiles — after multiple Epithalon cycles in elderly cohorts. Changes may require the full first year to become clearly quantifiable.' },
                  { label: 'Retinal Function', desc: 'Improvement in retinal cell function was documented in clinical studies of elderly subjects with age-related retinal changes — typically apparent after the first year of consistent cycling.' },
                ],
              },
              {
                period: 'Year 2+ — Long-Duration Protocol',
                color: '#22d3ee',
                outcomes: [
                  { label: 'Telomere Length (Measurable)', desc: 'Telomere length testing (leukocyte telomere assay or blood spot telomere test) may show measurable changes after 18–24 months of consistent cycling. Single-cycle telomere changes are unlikely to exceed assay noise thresholds.' },
                  { label: 'All-Cause Mortality Data Context', desc: 'Khavinson\'s landmark 12-year human follow-up study documented significantly reduced all-cause mortality in the treated cohort — a magnitude of effect that inherently requires years to years to measure and validate.' },
                  { label: 'Cumulative Epigenetic Benefit', desc: 'The epigenetic bioregulatory effect of repeated cycling is hypothesized to be cumulative — each cycle building on the transcriptional normalization achieved by previous cycles. Long-duration researchers tracking biological age clocks may see measurable shifts at the 2–3 year mark.' },
                ],
              },
            ].map(period => (
              <div key={period.period} style={{
                padding: '2rem',
                background: '#f9f9fd',
                border: '1px solid rgba(0,0,0,0.06)',
                borderLeft: `3px solid ${period.color}`,
                borderRadius: '0 20px 20px 0',
              }}>
                <div style={{ fontWeight: 900, color: period.color, fontSize: '1.05rem', marginBottom: '1.25rem' }}>{period.period}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                  {period.outcomes.map(outcome => (
                    <div key={outcome.label} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: period.color, flexShrink: 0, marginTop: 8 }} />
                      <div>
                        <strong style={{ color: '#0a0a14', fontSize: '0.97rem' }}>{outcome.label}: </strong>
                        <span style={{ color: '#555570', fontSize: '0.97rem', lineHeight: 1.75 }}>{outcome.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: '4rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label">Quick Reference</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '2rem' }}>
            Frequently Asked <span className="gold-text">Questions</span>
          </h2>
          <FaqAccordion faqs={faqs} />
        </section>

        {/* CTA — Buy Epithalon */}
        <section style={{ padding: '4rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div style={{
            background: 'linear-gradient(135deg, #022c22 0%, #0a1a14 100%)',
            borderRadius: 24, padding: '3.5rem',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            gap: '2rem', flexWrap: 'wrap',
            border: '1px solid rgba(52,211,153,0.2)',
          }}>
            <div>
              <div className="section-label" style={{ color: '#34d399' }}>Source Research Grade</div>
              <h2 className="heading-md" style={{ color: '#ffffff', marginBottom: '0.75rem' }}>Epithalon 50mg — Buy Trusted & Verified</h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem', maxWidth: 520, lineHeight: 1.7, marginBottom: '0.875rem' }}>
                Third-party tested, ≥98% HPLC purity, Certificate of Analysis on every order. One 50mg vial covers a complete 10-day Khavinson cycle at 5mg/day — the most validated protocol in longevity peptide research.
              </p>
              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                {['≥98% HPLC Purity', 'Third-Party Tested', 'COA on Every Order', '40+ Years Research Base'].map(badge => (
                  <div key={badge} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)' }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#34d399' }} />
                    {badge}
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '0.875rem', fontSize: '0.85rem', color: 'rgba(255,255,255,0.35)' }}>
                For laboratory and research use only.
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', alignItems: 'flex-start' }}>
              <a
                href={AFFILIATE_PRODUCT('epitalon-50mg')}
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="btn-primary"
                style={{ fontSize: '1.05rem', padding: '1rem 2.25rem' }}
              >
                Buy Epithalon 50mg <ExternalLink size={16} />
              </a>
              <a href={AFFILIATE_BASE} target="_blank" rel="sponsored noopener noreferrer" style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 }}>
                View all products <ArrowRight size={12} />
              </a>
            </div>
          </div>
        </section>

        {/* Related Links */}
        <section style={{ padding: '2rem 0' }}>
          <RelatedLinks currentPath="/epithalon-longevity-guide" />
        </section>

        {/* Final CTA */}
        <section style={{ padding: '2rem 0 5rem' }}>
          <div style={{ background: 'linear-gradient(135deg, #fffbf0, #f7f8fc)', border: '1px solid rgba(212,168,67,0.2)', borderRadius: 24, padding: '3.5rem', textAlign: 'center' }}>
            <div className="section-label" style={{ justifyContent: 'center', display: 'flex' }}>40+ Years of Published Data</div>
            <h2 className="heading-md" style={{ color: '#0a0a14', marginBottom: '0.75rem' }}>The Most Studied Longevity Tetrapeptide in History</h2>
            <p style={{ color: '#555570', marginBottom: '2rem', fontSize: '1rem', maxWidth: 600, margin: '0 auto 2rem' }}>
              From Khavinson's founding research in 1980s St. Petersburg to the 2025 PMC confirmation of in vivo human telomere elongation — Epithalon's research legacy is unmatched among synthetic longevity peptides.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={AFFILIATE_PRODUCT('epitalon-50mg')} target="_blank" rel="sponsored noopener noreferrer" className="btn-primary" style={{ fontSize: '1rem', padding: '0.9rem 2.5rem' }}>
                Buy Epithalon <ExternalLink size={16} />
              </a>
              <Link href="/epithalon-protocol-longevity-cycle" className="btn-secondary" style={{ fontSize: '1rem', padding: '0.9rem 2rem' }}>
                View Protocol Guide <BookOpen size={16} />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
