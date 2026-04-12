'use client'
import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, ExternalLink, Clock, Dna, Shield, Zap, FlaskConical, ChevronDown, ChevronUp, Activity, Layers, Star, AlertCircle, BookOpen } from 'lucide-react'
import { AFFILIATE_BASE, AFFILIATE_PRODUCT } from '@/lib/products'
import RelatedLinks from '@/components/RelatedLinks'

const faqs = [
  {
    q: 'How often should you cycle Epithalon?',
    a: 'The Khavinson protocol and subsequent clinical adaptations consistently recommend a maximum of 2 cycles per year — typically timed in spring and fall. More frequent cycling has not been validated in published studies and is not supported by the existing research base. Annual cycling (once per year using a 20-day cycle) is also practiced by some researchers following the extended protocol.',
  },
  {
    q: 'Can Epithalon be combined with other longevity peptides?',
    a: 'Yes. Epithalon is mechanistically distinct from most longevity compounds, making it well-suited for stacking. The primary validated combination in longevity research contexts is Epithalon with NAD+ — these compounds address telomere protection (Epithalon via telomerase activation) and sirtuin pathway restoration (NAD+ via SIRT1/SIRT3 activation) through entirely non-overlapping mechanisms. GHK-Cu is another non-overlapping stack — it operates via gene expression modulation in the extracellular matrix rather than the telomeric machinery.',
  },
  {
    q: 'What is the difference between 5mg and 10mg dosing?',
    a: 'Both doses appear in published research. The 5mg dose is considered appropriate for an initial 10-day cycle, particularly for researchers working with Epithalon for the first time. The 10mg dose has been used in advanced clinical research contexts and in the extended 20-day protocol format. The practical difference in terms of total cycle dose: a standard 10-day cycle at 5mg/day equals 50mg total; at 10mg/day it equals 100mg total. our supplier supplies Epithalon in 50mg vials — one vial covers a full 10-day cycle at 5mg/day.',
  },
]

export default function EpithalonProtocolPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div style={{ background: '#ffffff', minHeight: '100vh' }}>

      {/* Hero */}
      <div style={{
        background: 'linear-gradient(160deg, #022c22 0%, #0a1f18 40%, #0a0a14 100%)',
        padding: '5.5rem 2rem 5rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          background: 'radial-gradient(ellipse 60% 50% at 65% 50%, rgba(52,211,153,0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
          <div style={{ maxWidth: 860 }}>
            <div className="section-label" style={{ color: '#34d399' }}>
              Longevity Science
            </div>
            <h1 className="heading-xl" style={{ color: '#ffffff', marginBottom: '1.25rem' }}>
              The <span className="gold-text">Epithalon Protocol</span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: 720 }}>
              40+ years of published telomere science. The most validated longevity peptide protocol in research history. Based on Dr. Vladimir Khavinson's landmark work at the St. Petersburg Institute of Bioregulation and Gerontology.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: '2rem' }}>
              <a href="#protocol" className="btn-primary">
                View Protocol <ArrowRight size={14} />
              </a>
              <Link href="/products/epitalon-50mg" className="btn-secondary" style={{ color: 'rgba(255,255,255,0.75)', borderColor: 'rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.05)' }}>
                Shop Epithalon <ExternalLink size={14} />
              </Link>
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 14px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 100, fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)' }}>
              <AlertCircle size={12} style={{ color: '#fb923c' }} />
              For laboratory and research use only. Not for human consumption.
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>

        {/* Origin Story */}
        <section style={{ padding: '4rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'flex-start' }}>
            <div>
              <div className="section-label" style={{ color: '#34d399' }}>Origin Story</div>
              <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '1.25rem' }}>
                The Khavinson<br /><span className="gold-text">Research Legacy</span>
              </h2>
              <p style={{ color: '#444458', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '1.05rem' }}>
                Dr. Vladimir Khavinson at the St. Petersburg Institute of Bioregulation and Gerontology began researching tetrapeptide sequences derived from the pineal gland in the 1980s — a period when Western longevity science was still largely theoretical. Epithalon (also written Epitalon; Ala-Glu-Asp-Gly) was the result of this work: a synthetic analog of epithalamin, a natural peptide produced by the pineal gland.
              </p>
              <p style={{ color: '#444458', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '1.05rem' }}>
                Over four decades of research — spanning animal models, cell studies, and human clinical trials across the Russian and international scientific literature — produced a consistent body of evidence: Epithalon activates telomerase, promotes telomere elongation, modulates gene expression toward more youthful patterns, and improves markers of cellular age.
              </p>
              <p style={{ color: '#444458', lineHeight: 1.85, fontSize: '1.05rem' }}>
                A 2025 PMC review confirmed telomere lengthening in human subjects, bringing Khavinson's four decades of findings into direct alignment with the modern telomere biology framework pioneered by Elizabeth Blackburn, Carol Greider, and Jack Szostak — the 2009 Nobel laureates who established telomere maintenance as a fundamental mechanism of cellular aging.
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
                  { label: 'Primary Target', value: 'Telomerase (TERT) activation' },
                ].map(item => (
                  <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '0.6rem 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', fontWeight: 600 }}>{item.label}</span>
                    <span style={{ fontSize: '0.92rem', color: '#34d399', fontWeight: 700, textAlign: 'right', maxWidth: 220 }}>{item.value}</span>
                  </div>
                ))}
              </div>
              <div style={{ padding: '1.25rem 1.5rem', background: '#f9f9fd', border: '1px solid rgba(52,211,153,0.15)', borderLeft: '3px solid #34d399', borderRadius: '0 12px 12px 0', fontSize: '0.97rem', color: '#444458', lineHeight: 1.75 }}>
                <strong style={{ color: '#0a0a14' }}>Spelling note:</strong> Both "Epithalon" and "Epitalon" refer to the identical compound (Ala-Glu-Asp-Gly). Epitalon is the original Russian transliteration from Soviet-era scientific literature; Epithalon is the Westernized spelling adopted in English-language publications. Same peptide, same sequence, same biological activity.
              </div>
            </div>
          </div>
        </section>

        {/* Mechanism Cards */}
        <section style={{ padding: '4rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label">Molecular Biology</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '0.75rem' }}>
            Mechanism of <span className="gold-text">Action</span>
          </h2>
          <p style={{ color: '#555570', fontSize: '1.05rem', marginBottom: '2.5rem', maxWidth: 640 }}>
            Epithalon operates through three distinct and well-characterized molecular mechanisms, each targeting a different dimension of cellular aging.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {[
              {
                icon: <Dna size={22} />,
                color: '#34d399',
                title: 'Telomerase Activation',
                mechanism: 'Telomerase Reverse Transcriptase (TERT)',
                detail: 'Epithalon increases expression of TERT — the catalytic subunit of telomerase, the enzyme responsible for adding telomeric repeat sequences (TTAGGG) to chromosome ends. Without adequate telomerase activity, each cell division shortens telomeres until critical length triggers senescence or apoptosis. Epithalon restores the capacity for telomere elongation, documented in multiple cell models and human subject studies.',
              },
              {
                icon: <Layers size={22} />,
                color: '#a78bfa',
                title: 'Gene Expression Modulation',
                mechanism: 'Epigenetic Bioregulation',
                detail: 'Epithalon functions as a bioregulator — a class of compounds identified by Khavinson that normalize gene expression in aging cells toward more youthful transcriptional patterns. In aging cells, gene expression drifts from developmental set-points. Epithalon\'s tetrapeptide sequence interacts with chromatin to partially reverse this drift, modulating hundreds of genes involved in cell cycle regulation, apoptosis resistance, and mitochondrial function.',
              },
              {
                icon: <Shield size={22} />,
                color: '#d4a843',
                title: 'Antioxidant Upregulation',
                mechanism: 'SOD, Catalase, GPx Activation',
                detail: 'Oxidative stress is a primary driver of telomere shortening — reactive oxygen species (ROS) directly damage telomeric DNA, which is particularly vulnerable due to its guanine-rich sequence. Epithalon increases activity of superoxide dismutase (SOD), catalase, and glutathione peroxidase — the three primary antioxidant enzymes. This reduces oxidative telomere damage and extends the functional life of existing telomere length.',
              },
            ].map(item => (
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

        {/* Research Data Stats */}
        <section style={{ padding: '4rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label">Published Evidence</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '2rem' }}>
            Key Research <span className="gold-text">Data Points</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
            {[
              {
                stat: '3',
                label: 'Human Clinical Studies',
                detail: 'Telomere length increase documented in at least 3 published human clinical studies — a rare benchmark for longevity peptides that are more commonly studied only in animal models.',
                color: '#34d399',
              },
              {
                stat: '40+',
                label: 'Years of Research',
                detail: 'Khavinson\'s research program spans over four decades, making Epithalon the most longitudinally studied synthetic tetrapeptide in longevity science.',
                color: '#a78bfa',
              },
              {
                stat: 'SOD↑',
                label: 'Antioxidant Enzymes Enhanced',
                detail: 'SOD, catalase, and glutathione peroxidase activity all documented as elevated vs. control groups — reducing oxidative telomere damage.',
                color: '#d4a843',
              },
              {
                stat: '≥1.5×',
                label: 'Melatonin Regulation Improvement',
                detail: 'Improved melatonin synthesis and sleep architecture documented in Khavinson studies — consistent with Epithalon\'s origin as a pineal-derived peptide analog.',
                color: '#22d3ee',
              },
            ].map(item => (
              <div key={item.label} style={{
                padding: '2rem',
                background: '#f9f9fd',
                border: '1px solid rgba(0,0,0,0.07)',
                borderRadius: 18,
              }}>
                <div style={{ fontSize: '2.8rem', fontWeight: 900, color: item.color, lineHeight: 1, letterSpacing: '-0.03em', marginBottom: '0.6rem' }}>{item.stat}</div>
                <div style={{ fontWeight: 800, color: '#0a0a14', fontSize: '1rem', marginBottom: '0.5rem' }}>{item.label}</div>
                <div style={{ color: '#666688', fontSize: '0.92rem', lineHeight: 1.65 }}>{item.detail}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Protocol Options */}
        <section id="protocol" style={{ padding: '4rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)', scrollMarginTop: 80 }}>
          <div className="section-label">Protocol Design</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '0.75rem' }}>
            The Protocol <span className="gold-text">Options</span>
          </h2>
          <p style={{ color: '#555570', fontSize: '1.05rem', marginBottom: '2.5rem', maxWidth: 640 }}>
            Two primary protocol structures emerge from the published literature. Both are derived from the Khavinson research tradition; the choice depends on research context and compound availability.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {[
              {
                name: 'Standard 10-Day Cycle',
                subtitle: 'Khavinson Protocol',
                color: '#34d399',
                recommended: true,
                specs: [
                  { label: 'Daily Dose', value: '5–10 mg/day' },
                  { label: 'Cycle Length', value: '10 consecutive days' },
                  { label: 'Cycles per Year', value: '2× (spring and fall)' },
                  { label: 'Total Dose (5mg)', value: '50mg per cycle' },
                  { label: 'Total Dose (10mg)', value: '100mg per cycle' },
                  { label: 'Timing', value: 'AM — consistent daily time' },
                ],
                notes: 'The foundational protocol from Khavinson\'s original research. Two-per-year frequency is validated across multiple study cohorts. One 50mg vial covers a full cycle at 5mg/day.',
              },
              {
                name: 'Extended 20-Day Cycle',
                subtitle: 'Advanced Protocol',
                color: '#a78bfa',
                recommended: false,
                specs: [
                  { label: 'Daily Dose', value: '5 mg/day' },
                  { label: 'Cycle Length', value: '20 consecutive days' },
                  { label: 'Cycles per Year', value: '1× per year' },
                  { label: 'Total Dose', value: '100mg per cycle' },
                  { label: 'Timing', value: 'AM — consistent daily time' },
                  { label: 'Research Context', value: 'Epigenetic reset focus' },
                ],
                notes: 'Preferred by researchers studying epigenetic bioregulation. The extended exposure period is hypothesized to produce deeper gene expression normalization. Less common in published clinical data than the 10-day protocol.',
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
                    position: 'absolute',
                    top: -12,
                    left: '1.5rem',
                    background: '#34d399',
                    color: '#fff',
                    fontSize: '0.72rem',
                    fontWeight: 900,
                    padding: '3px 12px',
                    borderRadius: 100,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  }}>
                    Most Validated
                  </div>
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
        </section>

        {/* Dosing Reference */}
        <section style={{ padding: '4rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label">Reference Card</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '2rem' }}>
            Dosing <span className="gold-text">Details</span>
          </h2>
          <div style={{ maxWidth: 760, padding: '2.5rem', background: 'linear-gradient(135deg, #fffbf0, #f7f8fc)', border: '2px solid rgba(212,168,67,0.25)', borderRadius: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
              <FlaskConical size={20} style={{ color: '#d4a843' }} />
              <span style={{ fontWeight: 900, color: '#0a0a14', fontSize: '1.1rem' }}>Reconstitution & Administration Reference</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
              {[
                { label: 'Dose Range', value: '5–10 mg per injection' },
                { label: 'Reconstitution', value: '50mg vial + 5mL BAC water = 10mg/mL' },
                { label: 'Volume at 5mg', value: '0.5mL (500μL)' },
                { label: 'Volume at 10mg', value: '1.0mL (1000μL)' },
                { label: 'Route', value: 'Subcutaneous injection' },
                { label: 'Timing', value: 'Morning — consistent daily time' },
                { label: 'Cycle Frequency', value: '2× per year maximum' },
              ].map(item => (
                <div key={item.label} style={{ padding: '1rem 1.25rem', background: 'rgba(255,255,255,0.75)', border: '1px solid rgba(212,168,67,0.15)', borderRadius: 12 }}>
                  <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#9090a8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.3rem' }}>{item.label}</div>
                  <div style={{ fontWeight: 800, color: '#0a0a14', fontSize: '0.97rem', lineHeight: 1.4 }}>{item.value}</div>
                </div>
              ))}
            </div>
            <div style={{ padding: '1rem 1.25rem', background: 'rgba(212,168,67,0.06)', border: '1px solid rgba(212,168,67,0.15)', borderRadius: 12, fontSize: '0.92rem', color: '#666688', lineHeight: 1.7 }}>
              <strong style={{ color: '#0a0a14' }}>Reconstitution note:</strong> Add BAC water slowly down the inner wall of the vial — not directly onto the lyophilized peptide. Swirl gently. Do not shake. Store reconstituted solution at 2–8°C and use within 28–30 days. For laboratory use only.
            </div>
          </div>
        </section>

        {/* NAD+ Stack */}
        <section style={{ padding: '4rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div style={{
            background: 'linear-gradient(135deg, #0a0a14 0%, #0d1a28 100%)',
            borderRadius: 24,
            padding: '3rem',
            border: '1px solid rgba(34,211,238,0.15)',
          }}>
            <div className="section-label" style={{ color: '#22d3ee' }}>Longevity Stack</div>
            <h2 className="heading-lg" style={{ color: '#ffffff', marginBottom: '1rem' }}>
              Epithalon + <span className="gold-text">NAD+</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2rem', maxWidth: 720 }}>
              These two compounds are mechanistically complementary at a deep biological level — addressing completely separate dimensions of the cellular aging process without any receptor overlap or redundancy.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
              {[
                {
                  compound: 'Epithalon',
                  color: '#34d399',
                  mechanism: 'Structural chromosome protection via telomerase activation. Addresses the progressive shortening of telomeres that occurs with each cell division — the biological clock at the chromosomal level.',
                  target: 'Telomere Length / TERT Expression',
                  timing: '10-day pulse cycle, 2× per year',
                },
                {
                  compound: 'NAD+',
                  color: '#22d3ee',
                  mechanism: 'Metabolic repair and gene expression regulation via sirtuin pathway restoration. NAD+ decline is the primary upstream cause of SIRT1/SIRT3 dysfunction — sirtuins govern hundreds of metabolic and epigenetic processes.',
                  target: 'Sirtuin Pathway / Mitochondrial Function',
                  timing: '30-day continuous protocol, 2–4× per year',
                },
              ].map(item => (
                <div key={item.compound} style={{
                  padding: '1.75rem',
                  background: 'rgba(255,255,255,0.04)',
                  border: `1px solid ${item.color}25`,
                  borderRadius: 18,
                }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: item.color, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.4rem' }}>{item.target}</div>
                  <h3 style={{ fontWeight: 900, color: '#ffffff', fontSize: '1.15rem', marginBottom: '0.875rem' }}>{item.compound}</h3>
                  <p style={{ fontSize: '0.97rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: '1rem' }}>{item.mechanism}</p>
                  <div style={{ fontSize: '0.85rem', color: item.color, fontWeight: 600 }}>{item.timing}</div>
                </div>
              ))}
            </div>
            <div style={{ padding: '1.25rem 1.5rem', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 14, fontSize: '0.97rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, marginBottom: '1.75rem' }}>
              <strong style={{ color: '#fff' }}>Suggested stacking protocol:</strong> Run Epithalon 10-day cycle as the first intervention. Upon completion, begin a 30-day NAD+ protocol. The rationale: Epithalon\'s telomere protection is best established before the metabolic reprogramming from NAD+ restoration adds additional cellular stress from upregulated repair processes.
            </div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link href="/products/epitalon-50mg" className="btn-primary">
                View Epithalon <ArrowRight size={14} />
              </Link>
              <Link href="/products/nad" className="btn-secondary" style={{ color: 'rgba(255,255,255,0.7)', borderColor: 'rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.05)' }}>
                View NAD+ <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* What Researchers Report */}
        <section style={{ padding: '4rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label">Published Findings</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '0.75rem' }}>
            What Researchers <span className="gold-text">Report</span>
          </h2>
          <p style={{ color: '#555570', fontSize: '1.05rem', marginBottom: '2.5rem', maxWidth: 640 }}>
            Across published study periods, a consistent pattern of findings emerges in the Epithalon literature. These represent documented research outcomes — not claims about individual use.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: 820 }}>
            {[
              {
                period: 'Days 1–3',
                color: '#34d399',
                findings: [
                  'Initial melatonin normalization begins — particularly notable in subjects with disrupted circadian rhythm markers',
                  'Telomerase gene expression upregulation detectable in cell models within 48–72 hours of first exposure',
                ],
              },
              {
                period: 'Days 4–7',
                color: '#a78bfa',
                findings: [
                  'Sleep quality improvements noted in published clinical observations — consistent with Epithalon\'s pineal gland origin and melatonin modulation effects',
                  'Antioxidant enzyme activity beginning to elevate — SOD and catalase upregulation documented in tissue samples',
                ],
              },
              {
                period: 'Days 8–10 (Cycle Completion)',
                color: '#d4a843',
                findings: [
                  'Antioxidant markers measurably improved by end of 10-day cycle in published biochemical assessments',
                  'Immune marker modulation toward more youthful profile documented in longitudinal cohort studies',
                  'Subjective reports of improved energy consistent with melatonin normalization and mitochondrial antioxidant protection',
                ],
              },
              {
                period: 'Post-Cycle (Weeks 2–8)',
                color: '#22d3ee',
                findings: [
                  'Telomere lengthening is a long-cycle process — structural chromosome changes require multiple cycles and months of time',
                  'Gene expression normalization effects documented as persisting beyond the cycle period — epigenetic changes are not immediately reversed upon cessation',
                  'Long-term longitudinal studies show cumulative benefit across repeated annual cycling protocols',
                ],
              },
            ].map(period => (
              <div key={period.period} style={{
                padding: '1.5rem 2rem',
                background: '#f9f9fd',
                border: '1px solid rgba(0,0,0,0.06)',
                borderLeft: `3px solid ${period.color}`,
                borderRadius: '0 16px 16px 0',
              }}>
                <div style={{ fontWeight: 900, color: period.color, fontSize: '1rem', marginBottom: '0.75rem' }}>{period.period}</div>
                {period.findings.map((f, i) => (
                  <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: i < period.findings.length - 1 ? '0.625rem' : 0 }}>
                    <Activity size={14} style={{ color: period.color, flexShrink: 0, marginTop: 4 }} />
                    <span style={{ fontSize: '0.97rem', color: '#444458', lineHeight: 1.75 }}>{f}</span>
                  </div>
                ))}
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
          <div style={{ maxWidth: 800, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{
                border: '1px solid rgba(0,0,0,0.08)',
                borderRadius: 16,
                overflow: 'hidden',
                background: '#ffffff',
                transition: 'border-color 0.2s',
              }} className="hover-card-border">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    padding: '1.25rem 1.5rem',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  <span style={{ fontWeight: 800, color: '#0a0a14', fontSize: '1rem', lineHeight: 1.4 }}>{faq.q}</span>
                  <div style={{ flexShrink: 0, color: '#d4a843' }}>
                    {openFaq === i ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                </button>
                {openFaq === i && (
                  <div style={{ padding: '0 1.5rem 1.5rem', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
                    <p style={{ fontSize: '0.97rem', color: '#555570', lineHeight: 1.8, paddingTop: '1rem' }}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Product CTA */}
        <section style={{ padding: '4rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div style={{
            background: 'linear-gradient(135deg, #022c22 0%, #0a1a14 100%)',
            borderRadius: 24,
            padding: '3.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
            flexWrap: 'wrap',
            border: '1px solid rgba(52,211,153,0.2)',
          }}>
            <div>
              <div className="section-label" style={{ color: '#34d399' }}>Source Premium Grade</div>
              <h2 className="heading-md" style={{ color: '#ffffff', marginBottom: '0.75rem' }}>Epithalon 50mg</h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem', maxWidth: 480, lineHeight: 1.7 }}>
                Third-party tested, ≥98% HPLC purity, full Certificate of Analysis. One vial covers a complete standard 10-day Khavinson cycle at 5mg/day.
              </p>
              <div style={{ marginTop: '0.75rem', fontSize: '0.85rem', color: 'rgba(255,255,255,0.35)' }}>
                For laboratory and research use only.
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'flex-start' }}>
              <Link href="/products/epitalon-50mg" className="btn-primary" style={{ fontSize: '1rem', padding: '0.9rem 2rem' }}>
                View Product <ArrowRight size={16} />
              </Link>
              <a href={AFFILIATE_PRODUCT('epithalon-50mg')} target="_blank" rel="sponsored noopener noreferrer" style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 }}>
                Buy Now <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </section>

        {/* Related Links */}
        <section style={{ padding: '2rem 0' }}>
          <RelatedLinks currentPath="/epithalon-protocol-longevity-cycle" />
        </section>

        {/* Final CTA */}
        <section style={{ padding: '2rem 0 5rem' }}>
          <div style={{ background: 'linear-gradient(135deg, #fffbf0, #f7f8fc)', border: '1px solid rgba(212,168,67,0.2)', borderRadius: 24, padding: '3.5rem', textAlign: 'center' }}>
            <div className="section-label" style={{ justifyContent: 'center', display: 'flex' }}>40+ Years of Research</div>
            <h2 className="heading-md" style={{ color: '#0a0a14', marginBottom: '0.75rem' }}>Source Epithalon at our supplier</h2>
            <p style={{ color: '#555570', marginBottom: '2rem', fontSize: '1rem', maxWidth: 560, margin: '0 auto 2rem' }}>
              Third-party tested. Certificate of Analysis on every order. The benchmark source for research-grade longevity peptides.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={AFFILIATE_BASE} target="_blank" rel="sponsored noopener noreferrer" className="btn-primary" style={{ fontSize: '1rem', padding: '0.9rem 2.5rem' }}>
                Shop Now <ExternalLink size={16} />
              </a>
              <Link href="/guide" className="btn-secondary" style={{ fontSize: '1rem', padding: '0.9rem 2rem' }}>
                Read the Protocol Guide <BookOpen size={16} />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
