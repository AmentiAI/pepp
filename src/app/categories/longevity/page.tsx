'use client'
import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'
import ProductCard from '@/components/ProductCard'
import { products, AFFILIATE_BASE } from '@/lib/products'

const catProducts = products.filter(p => p.categorySlug === 'longevity')

const hallmarks = [
  {
    aging: 'Telomere Attrition',
    compound: 'Epithalon',
    compoundColor: '#a78bfa',
    detail:
      'Telomeres shorten with every cell division, eventually triggering replicative senescence. Epithalon reactivates telomerase enzyme in somatic cells — the only research peptide with published human telomerase activation data — enabling telomere maintenance and continued healthy cell division.',
  },
  {
    aging: 'Mitochondrial Dysfunction',
    compound: 'NAD+',
    compoundColor: '#34d399',
    detail:
      'NAD+ levels decline 50% between ages 40 and 60, collapsing mitochondrial electron transport and ATP output. NAD+ restoration via NMN or NR directly fuels the sirtuin pathway and PGC-1α-driven mitochondrial biogenesis, recovering cellular energy capacity.',
  },
  {
    aging: 'Epigenetic Alterations',
    compound: 'NAD+',
    compoundColor: '#34d399',
    detail:
      'Age-related epigenetic drift silences longevity genes and activates inflammatory programs. SIRT1/SIRT3 — NAD+-dependent deacetylases — perform the epigenetic reprogramming required to reverse this drift, correcting histone acetylation patterns toward a younger epigenome.',
  },
  {
    aging: 'Cellular Senescence',
    compound: 'GHK-Cu',
    compoundColor: '#60a5fa',
    detail:
      'Senescent cells accumulate with age and release pro-inflammatory SASP factors that damage surrounding tissue. GHK-Cu peptide upregulates over 31 anti-aging and tissue-remodeling genes while suppressing NF-κB-driven inflammatory senescence cascades.',
  },
]

const ageGroups = [
  {
    decade: '30s',
    focus: 'Prevention & Foundation',
    color: '#34d399',
    bg: 'rgba(52,211,153,0.07)',
    border: 'rgba(52,211,153,0.25)',
    description:
      'Telomeres are still relatively intact. This decade is about establishing the sirtuin pathway and protecting against the first wave of NAD+ decline.',
    compounds: ['NMN / NR — NAD+ restoration', 'GHK-Cu — collagen & gene expression', 'Low-dose Epithalon — preventive telomere support'],
    protocol: 'Light maintenance cycle',
  },
  {
    decade: '40s',
    focus: 'Acceleration & Repair',
    color: '#a78bfa',
    bg: 'rgba(167,139,250,0.07)',
    border: 'rgba(167,139,250,0.25)',
    description:
      'NAD+ has declined significantly. Telomere shortening accelerates. Mitochondrial dysfunction becomes measurable. This is the most critical intervention window.',
    compounds: ['High-dose NAD+ precursors', 'Epithalon 10mg loading cycle 2× per year', 'GHK-Cu for senescent cell management'],
    protocol: 'Active intervention cycle',
  },
  {
    decade: '50s+',
    focus: 'Intensive Protocol',
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.07)',
    border: 'rgba(245,158,11,0.25)',
    description:
      'Multiple hallmarks are active simultaneously. Comprehensive multi-compound stacking addresses telomere attrition, NAD+ depletion, and epigenetic alterations in parallel.',
    compounds: ['Full Khavinson Protocol (see below)', 'NAD+ daily + Pterostilbene co-factor', 'Quarterly GHK-Cu tissue remodeling cycles'],
    protocol: 'Full Khavinson stack',
  },
]

export default function LongevityPage() {
  const [hoveredPillar, setHoveredPillar] = useState<string | null>(null)
  const [hoveredCta, setHoveredCta] = useState(false)
  const [hoveredSecondary, setHoveredSecondary] = useState(false)

  return (
    <div style={{ background: '#ffffff', minHeight: '100vh', fontFamily: 'inherit' }}>

      {/* ── HERO ───────────────────────────────────────────────── */}
      <div style={{
        background: 'linear-gradient(160deg, #f0fff8 0%, #faf5ff 50%, #ffffff 100%)',
        borderBottom: '1px solid rgba(0,0,0,0.07)',
        padding: '5rem 2rem 4.5rem',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ maxWidth: 780 }}>

            {/* Institute label */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: '1.25rem' }}>
              <span style={{
                display: 'inline-block', width: 32, height: 2,
                background: 'linear-gradient(90deg, #34d399, #a78bfa)',
                borderRadius: 2,
              }} />
              <span style={{
                fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.18em',
                textTransform: 'uppercase', color: '#34d399',
              }}>Longevity Science Institute</span>
            </div>

            <h1 style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 900,
              color: '#0a0a14', lineHeight: 1.1, letterSpacing: '-0.03em',
              marginBottom: '0.5rem',
            }}>
              Epithalon &amp; NAD+:<br />
              <span style={{ color: '#34d399' }}>Longevity Peptide</span>{' '}
              <span style={{ color: '#a78bfa' }}>Science</span>
            </h1>

            {/* Attribution line */}
            <p style={{
              fontSize: '0.8rem', fontWeight: 500, color: '#9090a8',
              letterSpacing: '0.08em', textTransform: 'uppercase',
              marginBottom: '1.5rem', borderLeft: '2px solid #a78bfa',
              paddingLeft: '0.75rem',
            }}>
              Founded on 40 years of Russian longevity science ·{' '}
              St. Petersburg Institute of Bioregulation & Gerontology
            </p>

            <p style={{
              fontSize: '1.08rem', color: '#555570', lineHeight: 1.75,
              marginBottom: '2rem', maxWidth: 680,
            }}>
              Epithalon is the <strong style={{ color: '#0a0a14' }}>only peptide with published telomerase activation data</strong> in human somatic cells — backed by four decades of peer-reviewed research from Prof. Vladimir Khavinson. Combined with NAD+ restoration for sirtuin pathway reactivation, these compounds address the two most fundamental hallmarks of cellular aging: telomere attrition and mitochondrial collapse.
            </p>

            {/* Key Compound Pills */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', marginBottom: '1.75rem' }}>
              <span style={{ fontSize: '0.78rem', fontWeight: 600, color: '#9090a8', letterSpacing: '0.08em', textTransform: 'uppercase', marginRight: 4 }}>
                Key Compounds:
              </span>
              {[
                { label: 'Epithalon', bg: 'rgba(167,139,250,0.12)', color: '#a78bfa', border: 'rgba(167,139,250,0.35)' },
                { label: 'NAD+', bg: 'rgba(52,211,153,0.1)', color: '#059669', border: 'rgba(52,211,153,0.35)' },
                { label: 'GHK-Cu', bg: 'rgba(96,165,250,0.1)', color: '#3b82f6', border: 'rgba(96,165,250,0.35)' },
              ].map(pill => (
                <span key={pill.label} style={{
                  display: 'inline-block',
                  padding: '0.3rem 0.85rem',
                  background: pill.bg,
                  color: pill.color,
                  border: `1px solid ${pill.border}`,
                  borderRadius: 999,
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                }}>
                  {pill.label}
                </span>
              ))}
            </div>

            {/* CTA buttons */}
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a
                href={AFFILIATE_BASE}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '0.75rem 1.75rem',
                  background: hoveredCta
                    ? 'linear-gradient(135deg, #059669, #047857)'
                    : 'linear-gradient(135deg, #34d399, #059669)',
                  color: '#fff', fontWeight: 700, fontSize: '0.95rem',
                  borderRadius: 10, textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  transform: hoveredCta ? 'translateY(-1px)' : 'none',
                  boxShadow: hoveredCta ? '0 8px 24px rgba(52,211,153,0.35)' : '0 2px 8px rgba(52,211,153,0.2)',
                }}
                onMouseEnter={() => setHoveredCta(true)}
                onMouseLeave={() => setHoveredCta(false)}
              >
                Shop Longevity Peptides <ExternalLink size={14} />
              </a>
              <Link
                href="/products/epithalon-50mg"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '0.75rem 1.5rem',
                  background: hoveredSecondary ? 'rgba(167,139,250,0.12)' : 'transparent',
                  color: '#a78bfa', fontWeight: 700, fontSize: '0.95rem',
                  borderRadius: 10, textDecoration: 'none',
                  border: '1.5px solid rgba(167,139,250,0.45)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={() => setHoveredSecondary(true)}
                onMouseLeave={() => setHoveredSecondary(false)}
              >
                Epithalon Detail <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── TWO PILLARS OF CELLULAR AGING ─────────────────────── */}
      <div style={{ borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ padding: '4rem 0 0', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: '0.6rem' }}>
              <span style={{ display: 'inline-block', width: 28, height: 2, background: 'linear-gradient(90deg, #a78bfa, #34d399)', borderRadius: 2 }} />
              <span style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#9090a8' }}>
                Mechanistic Framework
              </span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 900, color: '#0a0a14', letterSpacing: '-0.02em' }}>
              Two Pillars of Cellular Aging
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 0, marginBottom: '4rem' }}>

            {/* Left Pillar: Telomere Attrition */}
            <div
              style={{
                padding: '2.5rem',
                background: hoveredPillar === 'telomere' ? 'rgba(167,139,250,0.06)' : '#faf5ff',
                borderRadius: '20px 0 0 20px',
                border: '1px solid rgba(167,139,250,0.2)',
                borderRight: 'none',
                transition: 'background 0.25s ease',
                cursor: 'default',
              }}
              onMouseEnter={() => setHoveredPillar('telomere')}
              onMouseLeave={() => setHoveredPillar(null)}
            >
              {/* DNA helix text art */}
              <div style={{
                fontFamily: 'monospace', fontSize: '0.72rem', lineHeight: 1.4,
                color: '#a78bfa', opacity: 0.6, letterSpacing: '0.05em',
                marginBottom: '1.5rem', userSelect: 'none',
              }}>
                {['A─T  ←  G─C', ' ╲       ╱ ', 'G─C  ←  A─T', ' ╲       ╱ ', 'T─A  ←  C─G', ' ╲       ╱ ', 'C─G  ←  T─A'].map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </div>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: '0.5rem' }}>
                <span style={{
                  fontSize: 'clamp(3rem, 6vw, 4.5rem)', fontWeight: 900,
                  color: '#a78bfa', letterSpacing: '-0.04em', lineHeight: 1,
                }}>40+</span>
                <span style={{ fontSize: '1rem', fontWeight: 600, color: '#7c5cbf' }}>years data</span>
              </div>

              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0a0a14', marginBottom: '1rem', letterSpacing: '-0.01em' }}>
                Telomere Shortening
              </h3>

              <p style={{ fontSize: '0.95rem', color: '#555570', lineHeight: 1.75, marginBottom: '0.75rem' }}>
                Every somatic cell division trims the telomeric TTAGGG repeat sequences capping chromosomes. After ~50 divisions (the Hayflick limit), critically short telomeres trigger permanent replicative senescence or apoptosis — the cellular clock of aging.
              </p>
              <p style={{ fontSize: '0.95rem', color: '#555570', lineHeight: 1.75, marginBottom: '0.75rem' }}>
                <strong style={{ color: '#a78bfa' }}>Telomerase activation</strong> via Epithalon (Ala-Glu-Asp-Gly tetrapeptide) resets this clock. Prof. Khavinson's published trials demonstrate measurable telomerase induction in human somatic cells — the first peptide with this validated mechanism.
              </p>
              <p style={{ fontSize: '0.95rem', color: '#555570', lineHeight: 1.75, marginBottom: '1.75rem' }}>
                In animal longevity models, Epithalon-treated subjects showed 33–68% lifespan extension correlated with preserved telomere length across generations of cell division.
              </p>

              <div style={{
                padding: '1rem 1.25rem',
                background: 'rgba(167,139,250,0.1)',
                borderRadius: 10,
                borderLeft: '3px solid #a78bfa',
              }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#a78bfa', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  → Solution:
                </span>
                <span style={{ fontSize: '0.9rem', color: '#555570', marginLeft: 8, fontWeight: 500 }}>
                  Epithalon tetrapeptide — Khavinson Protocol loading cycle
                </span>
              </div>
            </div>

            {/* Right Pillar: NAD+ Depletion */}
            <div
              style={{
                padding: '2.5rem',
                background: hoveredPillar === 'nad' ? 'rgba(52,211,153,0.06)' : '#f0fff8',
                borderRadius: '0 20px 20px 0',
                border: '1px solid rgba(52,211,153,0.2)',
                transition: 'background 0.25s ease',
                cursor: 'default',
              }}
              onMouseEnter={() => setHoveredPillar('nad')}
              onMouseLeave={() => setHoveredPillar(null)}
            >
              {/* Energy/mitochondria text art */}
              <div style={{
                fontFamily: 'monospace', fontSize: '0.72rem', lineHeight: 1.4,
                color: '#34d399', opacity: 0.6, letterSpacing: '0.05em',
                marginBottom: '1.5rem', userSelect: 'none',
              }}>
                {['NAD⁺ → NADH', '  ↓  SIRT1 ↑', 'PGC-1α ████', '  ↓  mito ↑', 'ATP  ████████', '  ↓  energy↑', 'LONGEVITY ✓'].map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </div>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: '0.5rem' }}>
                <span style={{
                  fontSize: 'clamp(3rem, 6vw, 4.5rem)', fontWeight: 900,
                  color: '#34d399', letterSpacing: '-0.04em', lineHeight: 1,
                }}>50%</span>
                <span style={{ fontSize: '1rem', fontWeight: 600, color: '#059669' }}>decline by 50</span>
              </div>

              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0a0a14', marginBottom: '1rem', letterSpacing: '-0.01em' }}>
                NAD+ Depletion
              </h3>

              <p style={{ fontSize: '0.95rem', color: '#555570', lineHeight: 1.75, marginBottom: '0.75rem' }}>
                NAD+ (nicotinamide adenine dinucleotide) is the central metabolic coenzyme fueling over 500 enzymatic reactions. From age 20 to 50, intracellular NAD+ levels drop approximately 50% — a decline now recognized as a primary driver of the aging phenotype.
              </p>
              <p style={{ fontSize: '0.95rem', color: '#555570', lineHeight: 1.75, marginBottom: '0.75rem' }}>
                The <strong style={{ color: '#34d399' }}>sirtuin pathway</strong> (SIRT1–SIRT7) requires NAD+ as an obligate substrate. When NAD+ falls, sirtuin activity collapses — halting epigenetic reprogramming, mitochondrial biogenesis via PGC-1α, and DNA repair. NAD+ restoration directly reactivates these longevity pathways.
              </p>
              <p style={{ fontSize: '0.95rem', color: '#555570', lineHeight: 1.75, marginBottom: '1.75rem' }}>
                NMN and NR are the two clinically studied NAD+ precursors that efficiently cross the cell membrane and boost intracellular NAD+ in human trials, with NMN showing superior bioavailability in recent head-to-head data.
              </p>

              <div style={{
                padding: '1rem 1.25rem',
                background: 'rgba(52,211,153,0.1)',
                borderRadius: 10,
                borderLeft: '3px solid #34d399',
              }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#059669', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  → Solution:
                </span>
                <span style={{ fontSize: '0.9rem', color: '#555570', marginLeft: 8, fontWeight: 500 }}>
                  NMN / NR — NAD+ restoration + sirtuin pathway activation
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── KHAVINSON PROTOCOL DETAIL ──────────────────────────── */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '4rem 2rem' }}>
        <div style={{
          background: '#fdfcf8',
          border: '1px solid rgba(52,211,153,0.25)',
          borderLeft: '5px solid #34d399',
          borderRadius: 16,
          overflow: 'hidden',
        }}>
          {/* Protocol header */}
          <div style={{
            padding: '2rem 2.5rem 1.5rem',
            borderBottom: '1px solid rgba(0,0,0,0.07)',
            background: 'rgba(52,211,153,0.04)',
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#9090a8', marginBottom: '0.4rem' }}>
                  Clinical Protocol Document
                </div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#0a0a14', letterSpacing: '-0.02em', marginBottom: '0.25rem' }}>
                  The Khavinson Epithalon Protocol
                </h2>
                <p style={{ fontSize: '0.8rem', color: '#9090a8', fontStyle: 'italic' }}>
                  Est. 1980 · St. Petersburg Institute of Bioregulation &amp; Gerontology · Prof. V.Kh. Khavinson, MD, DSc
                </p>
              </div>
              <div style={{
                padding: '0.5rem 1rem',
                background: 'rgba(52,211,153,0.12)',
                border: '1px solid rgba(52,211,153,0.3)',
                borderRadius: 8,
                fontSize: '0.78rem',
                fontWeight: 700,
                color: '#059669',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
              }}>
                Peer-Reviewed Protocol
              </div>
            </div>
          </div>

          {/* Protocol table */}
          <div style={{ padding: '2rem 2.5rem' }}>
            <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid rgba(52,211,153,0.25)' }}>
                    {['Parameter', 'Specification', 'Notes'].map(h => (
                      <th key={h} style={{
                        padding: '0.75rem 1rem', textAlign: 'left',
                        fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em',
                        textTransform: 'uppercase', color: '#9090a8',
                      }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      param: 'Loading Cycle Duration',
                      spec: '10 consecutive days',
                      note: 'Daily administration during loading phase',
                    },
                    {
                      param: 'Dose per Administration',
                      spec: '5–10 mg',
                      note: 'Subcutaneous or intranasal delivery',
                    },
                    {
                      param: 'Cycle Frequency',
                      spec: '2× per year',
                      note: 'Spring and autumn cycles common in Khavinson data',
                    },
                    {
                      param: 'Peptide Half-Life',
                      spec: '~30–60 minutes (plasma)',
                      note: 'Nuclear translocation occurs within minutes of dosing',
                    },
                    {
                      param: 'Storage Requirement',
                      spec: '−20°C lyophilized',
                      note: 'Stable 24–48h refrigerated once reconstituted',
                    },
                    {
                      param: 'Reconstitution',
                      spec: 'Bacteriostatic water (BW)',
                      note: '1–2 mg/mL working concentration',
                    },
                  ].map((row, i) => (
                    <tr key={row.param} style={{ borderBottom: '1px solid rgba(0,0,0,0.05)', background: i % 2 === 0 ? 'transparent' : 'rgba(52,211,153,0.025)' }}>
                      <td style={{ padding: '0.85rem 1rem', fontWeight: 700, color: '#0a0a14' }}>{row.param}</td>
                      <td style={{ padding: '0.85rem 1rem', fontWeight: 700, color: '#34d399', fontFamily: 'monospace' }}>{row.spec}</td>
                      <td style={{ padding: '0.85rem 1rem', color: '#555570' }}>{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Clinical Background */}
            <div style={{
              padding: '1.5rem',
              background: 'rgba(167,139,250,0.06)',
              border: '1px solid rgba(167,139,250,0.2)',
              borderRadius: 12,
            }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#a78bfa', marginBottom: '0.75rem' }}>
                Clinical Background
              </div>
              <p style={{ fontSize: '0.95rem', color: '#555570', lineHeight: 1.8, marginBottom: '0.75rem' }}>
                Professor Vladimir Khavinson, President of the European Association of Gerontology and Geriatrics, has led a 40-year research program at the St. Petersburg Institute of Bioregulation and Gerontology developing short-chain regulatory peptides (cytomedines and cytomaxes) as bioregulators of gene expression and aging.
              </p>
              <p style={{ fontSize: '0.95rem', color: '#555570', lineHeight: 1.8, marginBottom: '0.75rem' }}>
                Epithalon (tetrapeptide Ala-Glu-Asp-Gly) was isolated from the pineal gland and demonstrated in peer-reviewed publications to activate telomerase in human somatic cells, normalize melatonin secretion, suppress oncogene expression, and extend healthy lifespan in animal models by 33–68%. The mechanism involves direct nuclear translocation and binding to chromatin, triggering epigenetic reprogramming of gene expression patterns associated with cellular rejuvenation.
              </p>
              <p style={{ fontSize: '0.95rem', color: '#555570', lineHeight: 1.8 }}>
                The Khavinson Protocol represents the standard loading cycle derived from this research program — 10 days of daily Epithalon administration, twice yearly, as used in the clinical and pre-clinical studies producing the published lifespan data.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── HALLMARKS OF AGING DIAGNOSTIC ─────────────────────── */}
      <div style={{ background: '#f7f8fc', borderTop: '1px solid rgba(0,0,0,0.06)', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '4rem 2rem' }}>
          <div style={{ marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: '0.6rem' }}>
              <span style={{ display: 'inline-block', width: 28, height: 2, background: '#ef4444', borderRadius: 2 }} />
              <span style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#9090a8' }}>
                Hallmarks of Aging — Diagnostic Checklist
              </span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 900, color: '#0a0a14', letterSpacing: '-0.02em' }}>
              Hallmarks Addressed by This Protocol
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {hallmarks.map((h, i) => (
              <div key={h.aging} style={{
                display: 'grid',
                gridTemplateColumns: '1fr 2fr',
                gap: '0',
                background: '#ffffff',
                borderRadius: 14,
                border: '1px solid rgba(0,0,0,0.07)',
                overflow: 'hidden',
              }}>
                {/* Left: Aging label */}
                <div style={{
                  padding: '1.5rem',
                  borderRight: '1px solid rgba(0,0,0,0.07)',
                  background: 'rgba(239,68,68,0.03)',
                  display: 'flex', flexDirection: 'column', justifyContent: 'center',
                }}>
                  <div style={{
                    fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.16em',
                    textTransform: 'uppercase', color: '#ef4444', marginBottom: '0.4rem',
                  }}>
                    AGING:
                  </div>
                  <div style={{ fontWeight: 800, color: '#0a0a14', fontSize: '1rem', lineHeight: 1.3 }}>
                    {h.aging}
                  </div>
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: 4,
                    marginTop: '0.75rem',
                    padding: '0.25rem 0.6rem',
                    background: `${h.compoundColor}18`,
                    border: `1px solid ${h.compoundColor}40`,
                    borderRadius: 6,
                    width: 'fit-content',
                  }}>
                    <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#9090a8' }}>Hallmark #{i + 1}</span>
                  </div>
                </div>

                {/* Right: Treatment */}
                <div style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                    <span style={{
                      fontSize: '0.75rem', fontWeight: 800, color: h.compoundColor,
                      letterSpacing: '0.1em', textTransform: 'uppercase',
                    }}>
                      → ADDRESSED BY {h.compound}:
                    </span>
                    <span style={{
                      display: 'inline-block',
                      padding: '0.15rem 0.6rem',
                      background: `${h.compoundColor}18`,
                      color: h.compoundColor,
                      border: `1px solid ${h.compoundColor}40`,
                      borderRadius: 999,
                      fontSize: '0.72rem',
                      fontWeight: 700,
                    }}>
                      {h.compound}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.93rem', color: '#555570', lineHeight: 1.75, margin: 0 }}>
                    {h.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── WHEN TO START ──────────────────────────────────────── */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '4rem 2rem' }}>
        <div style={{ marginBottom: '2.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: '0.6rem' }}>
            <span style={{ display: 'inline-block', width: 28, height: 2, background: 'linear-gradient(90deg, #34d399, #a78bfa)', borderRadius: 2 }} />
            <span style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#9090a8' }}>
              Age-Based Protocol Guidance
            </span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 900, color: '#0a0a14', letterSpacing: '-0.02em' }}>
            When to Start a Longevity Protocol
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#9090a8', marginTop: '0.5rem', maxWidth: 580 }}>
            NAD+ decline and telomere shortening begin in your 20s. The optimal intervention window varies by decade.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
          {ageGroups.map(group => (
            <div key={group.decade} style={{
              padding: '2rem',
              background: group.bg,
              border: `1.5px solid ${group.border}`,
              borderRadius: 16,
              display: 'flex', flexDirection: 'column',
            }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: '0.5rem' }}>
                <span style={{
                  fontSize: '3rem', fontWeight: 900, color: group.color,
                  letterSpacing: '-0.04em', lineHeight: 1,
                }}>{group.decade}</span>
              </div>
              <div style={{
                fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.12em',
                textTransform: 'uppercase', color: group.color, marginBottom: '1rem',
              }}>
                {group.focus}
              </div>
              <p style={{ fontSize: '0.9rem', color: '#555570', lineHeight: 1.7, marginBottom: '1.25rem', flex: 1 }}>
                {group.description}
              </p>
              <div style={{ marginBottom: '1.25rem' }}>
                {group.compounds.map(c => (
                  <div key={c} style={{
                    display: 'flex', alignItems: 'flex-start', gap: 8,
                    marginBottom: '0.5rem', fontSize: '0.85rem', color: '#555570',
                  }}>
                    <span style={{ color: group.color, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>→</span>
                    <span>{c}</span>
                  </div>
                ))}
              </div>
              <div style={{
                padding: '0.5rem 0.85rem',
                background: `${group.color}18`,
                border: `1px solid ${group.border}`,
                borderRadius: 8,
                fontSize: '0.75rem',
                fontWeight: 700,
                color: group.color,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                width: 'fit-content',
              }}>
                {group.protocol}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── PRODUCT GRID ───────────────────────────────────────── */}
      <div style={{ background: '#f7f8fc', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '4rem 2rem' }}>
          <div style={{
            display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
            marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem',
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: '0.6rem' }}>
                <span style={{ display: 'inline-block', width: 28, height: 2, background: '#34d399', borderRadius: 2 }} />
                <span style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#9090a8' }}>
                  Longevity Catalog
                </span>
              </div>
              <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 900, color: '#0a0a14', letterSpacing: '-0.02em' }}>
                Shop Longevity Compounds
              </h2>
            </div>
            <a
              href={AFFILIATE_BASE}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '0.65rem 1.25rem',
                background: 'linear-gradient(135deg, #34d399, #059669)',
                color: '#fff', fontWeight: 700, fontSize: '0.88rem',
                borderRadius: 10, textDecoration: 'none',
              }}
            >
              Shop at Apollo <ExternalLink size={13} />
            </a>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1.25rem' }}>
            {catProducts.map(p => <ProductCard key={p.slug} product={p} />)}
          </div>
        </div>
      </div>

      {/* ── CTA ────────────────────────────────────────────────── */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '2rem 2rem 5rem' }}>
        <div style={{
          background: 'linear-gradient(135deg, #064e3b 0%, #065f46 40%, #1e1b4b 100%)',
          borderRadius: 24,
          padding: 'clamp(2rem, 5vw, 4rem)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Decorative rings */}
          <div style={{
            position: 'absolute', top: '-60px', right: '-60px',
            width: 300, height: 300,
            border: '1px solid rgba(52,211,153,0.15)',
            borderRadius: '50%',
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', top: '-20px', right: '-20px',
            width: 200, height: 200,
            border: '1px solid rgba(167,139,250,0.15)',
            borderRadius: '50%',
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', bottom: '-40px', left: '-40px',
            width: 220, height: 220,
            border: '1px solid rgba(52,211,153,0.1)',
            borderRadius: '50%',
            pointerEvents: 'none',
          }} />

          <div style={{
            fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em',
            textTransform: 'uppercase', color: '#34d399', marginBottom: '1.25rem',
            position: 'relative',
          }}>
            Longevity Protocol · Apollo Peptide Sciences
          </div>

          <h2 style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 900,
            color: '#ffffff', letterSpacing: '-0.03em', lineHeight: 1.15,
            marginBottom: '1rem', position: 'relative',
          }}>
            Begin Your Longevity Protocol
          </h2>

          <p style={{
            fontSize: '1rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7,
            maxWidth: 540, margin: '0 auto 2rem', position: 'relative',
          }}>
            Epithalon, NAD+ precursors, and GHK-Cu from Apollo Peptide Sciences — pharmaceutical-grade purity, independent CoA testing, and the complete Khavinson Protocol stack. Telomerase activation. Sirtuin pathway restoration. Epigenetic reprogramming.
          </p>

          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', position: 'relative' }}>
            <a
              href={AFFILIATE_BASE}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '0.9rem 2.25rem',
                background: 'linear-gradient(135deg, #34d399, #059669)',
                color: '#fff', fontWeight: 800, fontSize: '1rem',
                borderRadius: 12, textDecoration: 'none',
                boxShadow: '0 8px 32px rgba(52,211,153,0.35)',
                letterSpacing: '-0.01em',
              }}
            >
              Shop Apollo Peptide Sciences <ExternalLink size={15} />
            </a>
            <Link
              href="/products/epithalon-50mg"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '0.9rem 1.75rem',
                background: 'rgba(255,255,255,0.08)',
                color: 'rgba(255,255,255,0.85)', fontWeight: 700, fontSize: '0.95rem',
                borderRadius: 12, textDecoration: 'none',
                border: '1.5px solid rgba(255,255,255,0.2)',
                backdropFilter: 'blur(4px)',
              }}
            >
              Epithalon Detail <ArrowRight size={14} />
            </Link>
          </div>

          <p style={{
            fontSize: '0.78rem', color: 'rgba(255,255,255,0.35)',
            marginTop: '1.75rem', position: 'relative',
          }}>
            For research purposes only · Not intended to diagnose, treat, cure, or prevent any disease
          </p>
        </div>
      </div>

    </div>
  )
}
