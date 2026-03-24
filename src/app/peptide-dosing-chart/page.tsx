'use client'
import Link from 'next/link'
import {
  ArrowRight,
  ExternalLink,
  Thermometer,
  Droplets,
  Clock,
  Shield,
  FlaskConical,
  AlertCircle,
  CheckCircle,
  Calculator,
  BookOpen,
} from 'lucide-react'
import { AFFILIATE_BASE } from '@/lib/products'
import RelatedLinks from '@/components/RelatedLinks'

const dosingData = [
  {
    compound: 'GHK-Cu',
    slug: '/products/ghk-cu',
    category: 'Skin / Anti-Aging',
    color: '#a78bfa',
    vialSize: '50mg',
    bacWater: '5mL',
    concentration: '10mg/mL',
    dosePerInjection: '1–2mg (100–200μL)',
    frequency: 'Daily',
    cycleLength: '8–12 weeks',
    storageLife: '30 days',
  },
  {
    compound: 'SNAP-8',
    slug: '/products/snap-8',
    category: 'Skin / Anti-Aging',
    color: '#a78bfa',
    vialSize: '10mg',
    bacWater: '2mL',
    concentration: '5mg/mL',
    dosePerInjection: '0.1mg (20μL)',
    frequency: '2× daily topical',
    cycleLength: '4–8 weeks',
    storageLife: '28 days',
  },
  {
    compound: 'Epithalon',
    slug: '/products/epithalon-50mg',
    category: 'Longevity',
    color: '#34d399',
    vialSize: '50mg',
    bacWater: '5mL',
    concentration: '10mg/mL',
    dosePerInjection: '5–10mg (500μL–1mL)',
    frequency: 'Daily',
    cycleLength: '10-day cycles',
    storageLife: '30 days',
  },
  {
    compound: 'BPC-157',
    slug: '/products/bpc157-10mg',
    category: 'Recovery',
    color: '#22d3ee',
    vialSize: '10mg',
    bacWater: '2mL',
    concentration: '5mg/mL',
    dosePerInjection: '250–500μg (50–100μL)',
    frequency: '1–2× daily',
    cycleLength: '4–12 weeks',
    storageLife: '28 days',
  },
  {
    compound: 'TB-500',
    slug: '/products/tb500-10mg',
    category: 'Recovery',
    color: '#22d3ee',
    vialSize: '10mg',
    bacWater: '2mL',
    concentration: '5mg/mL',
    dosePerInjection: '2–5mg (400μL–1mL)',
    frequency: '2× weekly',
    cycleLength: '4–8 weeks',
    storageLife: '28 days',
  },
  {
    compound: 'IGF-1 LR3',
    slug: '/products/igf-1lr3',
    category: 'Growth',
    color: '#fb923c',
    vialSize: '1mg',
    bacWater: '1mL',
    concentration: '1mg/mL',
    dosePerInjection: '50–100μg (50–100μL)',
    frequency: 'Post-training',
    cycleLength: '4–6 weeks',
    storageLife: '21 days',
  },
  {
    compound: 'CJC-1295 / Ipamorelin',
    slug: '/products/cjc1295-ipamorelin',
    category: 'Growth',
    color: '#fb923c',
    vialSize: '5mg / 5mg',
    bacWater: '2mL each',
    concentration: '2.5mg/mL',
    dosePerInjection: 'CJC: 100μg / Ipa: 200μg',
    frequency: 'Pre-sleep',
    cycleLength: '8–16 weeks',
    storageLife: '28 days',
  },
  {
    compound: 'Semaglutide',
    slug: '/products/glp-1s-5mg',
    category: 'Metabolic',
    color: '#d4a843',
    vialSize: '5mg',
    bacWater: '2mL',
    concentration: '2.5mg/mL',
    dosePerInjection: '0.25–2.4mg (100–960μL)',
    frequency: 'Weekly',
    cycleLength: '12–24 weeks',
    storageLife: '28 days',
  },
  {
    compound: 'Tirzepatide',
    slug: '/products/glp-2t-15m',
    category: 'Metabolic',
    color: '#d4a843',
    vialSize: '15mg',
    bacWater: '3mL',
    concentration: '5mg/mL',
    dosePerInjection: '2.5–15mg (500μL–3mL)',
    frequency: 'Weekly',
    cycleLength: '12–24 weeks',
    storageLife: '28 days',
  },
  {
    compound: 'Retatrutide',
    slug: '/products/glp-3r-10mg',
    category: 'Metabolic',
    color: '#d4a843',
    vialSize: '10mg',
    bacWater: '2mL',
    concentration: '5mg/mL',
    dosePerInjection: '0.5–12mg (100μL–2.4mL)',
    frequency: 'Weekly',
    cycleLength: '12–24 weeks',
    storageLife: '28 days',
  },
]

const reconstitutionSteps = [
  {
    num: '01',
    icon: <Thermometer size={20} />,
    title: 'Allow Vial to Reach Room Temperature',
    body: 'Remove the vial from cold storage and allow it to equilibrate to room temperature (approximately 20–25°C) for 15–30 minutes before opening. This prevents thermal shock to the lyophilized peptide structure and reduces the risk of incomplete reconstitution.',
    color: '#d4a843',
  },
  {
    num: '02',
    icon: <Droplets size={20} />,
    title: 'Draw BAC Water into Sterile Syringe',
    body: 'Using a sterile insulin syringe or reconstitution syringe, draw the precise volume of bacteriostatic water (BAC water) required for your target concentration. BAC water contains 0.9% benzyl alcohol, which inhibits microbial growth and extends reconstituted shelf life to 28–60 days vs 7–14 days for sterile water.',
    color: '#22d3ee',
  },
  {
    num: '03',
    icon: <FlaskConical size={20} />,
    title: 'Inject Slowly Down the Vial Wall',
    body: 'Insert the syringe needle through the rubber septum and angle it so the BAC water flows slowly down the inner wall of the vial — not directly onto the peptide cake. Direct high-velocity injection onto the powder can damage peptide tertiary structure. The slow wall-flow method ensures gentle dissolution.',
    color: '#fb923c',
  },
  {
    num: '04',
    icon: <Shield size={20} />,
    title: 'Gently Swirl — Never Shake',
    body: 'Gently roll and swirl the vial between your fingers to facilitate complete dissolution. Never shake or vortex the reconstituted peptide — mechanical agitation can break peptide bonds and create aggregates that reduce bioactivity. Most peptides will dissolve completely within 2–5 minutes of gentle swirling. The solution should be clear; cloudiness may indicate incomplete dissolution or degradation.',
    color: '#a78bfa',
  },
  {
    num: '05',
    icon: <Clock size={20} />,
    title: 'Label with Date & Store at 2–8°C',
    body: 'Label the vial immediately with the date of reconstitution and the concentration (mg/mL). Store in the refrigerator at 2–8°C (never freeze reconstituted peptides — ice crystal formation destroys peptide structure). Keep away from direct light. Use within the compound\'s specified shelf life — typically 28–60 days depending on the peptide class.',
    color: '#34d399',
  },
]

const shelfLifeData = [
  { compound: 'GHK-Cu', lyophilized: '12 months (−20°C)', reconstituted: '30 days (2–8°C)', color: '#a78bfa' },
  { compound: 'SNAP-8', lyophilized: '12 months (−20°C)', reconstituted: '28 days (2–8°C)', color: '#a78bfa' },
  { compound: 'Epithalon', lyophilized: '24 months (−20°C)', reconstituted: '30 days (2–8°C)', color: '#34d399' },
  { compound: 'BPC-157', lyophilized: '12 months (−20°C)', reconstituted: '28 days (2–8°C)', color: '#22d3ee' },
  { compound: 'TB-500', lyophilized: '12 months (−20°C)', reconstituted: '28 days (2–8°C)', color: '#22d3ee' },
  { compound: 'IGF-1 LR3', lyophilized: '12 months (−20°C)', reconstituted: '21 days (2–8°C)', color: '#fb923c' },
  { compound: 'CJC-1295', lyophilized: '18 months (−20°C)', reconstituted: '28 days (2–8°C)', color: '#fb923c' },
  { compound: 'Ipamorelin', lyophilized: '18 months (−20°C)', reconstituted: '28 days (2–8°C)', color: '#fb923c' },
  { compound: 'Semaglutide', lyophilized: '24 months (−20°C)', reconstituted: '28 days (2–8°C)', color: '#d4a843' },
  { compound: 'Tirzepatide', lyophilized: '24 months (−20°C)', reconstituted: '28 days (2–8°C)', color: '#d4a843' },
  { compound: 'Retatrutide', lyophilized: '24 months (−20°C)', reconstituted: '28 days (2–8°C)', color: '#d4a843' },
]

export default function PeptideDosingChart() {
  return (
    <div style={{ background: '#ffffff', minHeight: '100vh' }}>

      {/* ── Hero ── */}
      <div style={{
        background: 'linear-gradient(180deg, #f0f8ff 0%, #f7f8fc 60%, #ffffff 100%)',
        borderBottom: '1px solid rgba(0,0,0,0.07)',
        padding: '5rem 2rem 4.5rem',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ maxWidth: 820 }}>
            <div className="section-label">Reference Guide</div>
            <h1 className="heading-xl" style={{ color: '#0a0a14', marginBottom: '1.25rem' }}>
              Peptide Dosing &<br /><span className="gold-text">Reconstitution Chart</span>
            </h1>
            <p style={{ fontSize: '1.15rem', color: '#555570', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: 680 }}>
              Complete reference for all 11 compounds — BAC water volumes, concentrations, injection doses, and cycle lengths. Bookmark this page for use in your research protocols.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="#chart" className="btn-primary">
                Jump to Chart <ArrowRight size={14} />
              </a>
              <a href={AFFILIATE_BASE} target="_blank" rel="nofollow noopener noreferrer" className="btn-secondary">
                Shop Compounds <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>

        {/* ── Quick Reference Cards ── */}
        <section style={{ padding: '3rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1rem' }}>
            {[
              {
                icon: <Shield size={20} />,
                color: '#d4a843',
                title: 'Purity Standard',
                value: '≥98% HPLC',
                sub: 'Minimum for research-grade compounds',
              },
              {
                icon: <Droplets size={20} />,
                color: '#22d3ee',
                title: 'Reconstitution Medium',
                value: 'BAC Water',
                sub: 'Bacteriostatic (0.9% benzyl alcohol)',
              },
              {
                icon: <Thermometer size={20} />,
                color: '#a78bfa',
                title: 'Storage Temperature',
                value: '2–8°C',
                sub: 'Reconstituted peptides (refrigerator)',
              },
              {
                icon: <Clock size={20} />,
                color: '#34d399',
                title: 'Shelf Life (Recon.)',
                value: '28–60 days',
                sub: 'Varies by compound — see chart below',
              },
            ].map(card => (
              <div key={card.title} style={{
                display: 'flex',
                gap: '1rem',
                padding: '1.5rem',
                background: '#f9f9fd',
                border: '1px solid rgba(0,0,0,0.07)',
                borderRadius: 16,
              }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: `${card.color}12`,
                  border: `1px solid ${card.color}25`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: card.color, flexShrink: 0,
                }}>
                  {card.icon}
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#9090a8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.2rem' }}>{card.title}</div>
                  <div style={{ fontSize: '1.3rem', fontWeight: 900, color: '#0a0a14', letterSpacing: '-0.03em', lineHeight: 1.2 }}>{card.value}</div>
                  <div style={{ fontSize: '0.85rem', color: '#888898', marginTop: '0.25rem', lineHeight: 1.5 }}>{card.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Main Dosing Chart ── */}
        <section id="chart" style={{ padding: '4rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)', scrollMarginTop: 80 }}>
          <div className="section-label">Complete Reference</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '0.75rem' }}>
            Complete Peptide Dosing Reference
          </h2>
          <p style={{ color: '#555570', fontSize: '1.05rem', marginBottom: '2.5rem', maxWidth: 680 }}>
            All 10 compounds. Standard reconstitution volumes assume a single vial with the specified BAC water to hit the listed concentration. Dose ranges reflect published literature and standard research protocols.
          </p>

          <div style={{ overflowX: 'auto', borderRadius: 20, border: '1px solid rgba(0,0,0,0.09)', background: '#fff', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
            <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0, fontSize: '0.94rem', minWidth: 860 }}>
              <thead>
                <tr>
                  {[
                    'Compound',
                    'Vial Size',
                    'BAC Water',
                    'Concentration',
                    'Dose per Injection',
                    'Frequency',
                    'Cycle Length',
                  ].map((h, i) => (
                    <th key={h} style={{
                      padding: '0.9rem 1rem',
                      textAlign: 'left',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: '#888898',
                      background: '#f7f8fc',
                      borderBottom: '2px solid rgba(0,0,0,0.07)',
                      borderRight: i < 6 ? '1px solid rgba(0,0,0,0.04)' : 'none',
                      position: 'sticky',
                      top: 0,
                      zIndex: 2,
                      whiteSpace: 'nowrap',
                    }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {dosingData.map((row, idx) => (
                  <tr key={row.compound} style={{ background: idx % 2 === 1 ? 'rgba(0,0,0,0.016)' : 'transparent' }}>
                    <td style={{
                      padding: '0.9rem 1rem',
                      borderBottom: idx < dosingData.length - 1 ? '1px solid rgba(0,0,0,0.04)' : 'none',
                      borderRight: '1px solid rgba(0,0,0,0.04)',
                    }}>
                      <Link href={row.slug} style={{ textDecoration: 'none' }}>
                        <div style={{ fontWeight: 800, color: '#0a0a14', fontSize: '0.97rem', marginBottom: '0.15rem' }}>{row.compound}</div>
                        <div style={{
                          display: 'inline-block',
                          padding: '1px 7px',
                          background: `${row.color}10`,
                          border: `1px solid ${row.color}25`,
                          borderRadius: 100,
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          color: row.color,
                          letterSpacing: '0.05em',
                        }}>{row.category}</div>
                      </Link>
                    </td>
                    <td style={{ padding: '0.9rem 1rem', borderBottom: idx < dosingData.length - 1 ? '1px solid rgba(0,0,0,0.04)' : 'none', borderRight: '1px solid rgba(0,0,0,0.04)', color: '#3a3a5a', fontWeight: 600, whiteSpace: 'nowrap' }}>
                      {row.vialSize}
                    </td>
                    <td style={{ padding: '0.9rem 1rem', borderBottom: idx < dosingData.length - 1 ? '1px solid rgba(0,0,0,0.04)' : 'none', borderRight: '1px solid rgba(0,0,0,0.04)', color: '#3a3a5a', whiteSpace: 'nowrap' }}>
                      {row.bacWater}
                    </td>
                    <td style={{ padding: '0.9rem 1rem', borderBottom: idx < dosingData.length - 1 ? '1px solid rgba(0,0,0,0.04)' : 'none', borderRight: '1px solid rgba(0,0,0,0.04)' }}>
                      <span style={{
                        display: 'inline-block',
                        padding: '2px 9px',
                        background: 'rgba(0,0,0,0.04)',
                        borderRadius: 6,
                        fontFamily: 'monospace',
                        fontSize: '0.88rem',
                        fontWeight: 700,
                        color: '#444458',
                        whiteSpace: 'nowrap',
                      }}>{row.concentration}</span>
                    </td>
                    <td style={{ padding: '0.9rem 1rem', borderBottom: idx < dosingData.length - 1 ? '1px solid rgba(0,0,0,0.04)' : 'none', borderRight: '1px solid rgba(0,0,0,0.04)', color: '#3a3a5a', fontSize: '0.9rem' }}>
                      {row.dosePerInjection}
                    </td>
                    <td style={{ padding: '0.9rem 1rem', borderBottom: idx < dosingData.length - 1 ? '1px solid rgba(0,0,0,0.04)' : 'none', borderRight: '1px solid rgba(0,0,0,0.04)', color: '#555570', fontWeight: 600, whiteSpace: 'nowrap' }}>
                      {row.frequency}
                    </td>
                    <td style={{ padding: '0.9rem 1rem', borderBottom: idx < dosingData.length - 1 ? '1px solid rgba(0,0,0,0.04)' : 'none', color: '#555570', fontWeight: 600, whiteSpace: 'nowrap' }}>
                      {row.cycleLength}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p style={{ fontSize: '0.82rem', color: '#9090a8', marginTop: '1rem', lineHeight: 1.6 }}>
            * Concentration values assume a single standard vial with the listed BAC water volume. Individual lots may vary — always verify with your Certificate of Analysis. All doses are for laboratory research use only.
          </p>
        </section>

        {/* ── Reconstitution Steps ── */}
        <section style={{ padding: '4rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label">Step-by-Step</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '0.75rem' }}>
            Reconstitution Protocol
          </h2>
          <p style={{ color: '#555570', fontSize: '1.05rem', marginBottom: '3rem', maxWidth: 680 }}>
            Correct reconstitution technique preserves peptide bioactivity. Follow this protocol for every compound regardless of experience level.
          </p>

          <div style={{
            border: '2px solid rgba(212,168,67,0.25)',
            borderRadius: 24,
            overflow: 'hidden',
            background: '#fff',
          }}>
            {reconstitutionSteps.map((step, idx) => (
              <div key={step.num} style={{
                display: 'grid',
                gridTemplateColumns: '72px 1fr',
                gap: 0,
                borderBottom: idx < reconstitutionSteps.length - 1 ? '1px solid rgba(0,0,0,0.06)' : 'none',
              }}>
                {/* Number + icon column */}
                <div style={{
                  background: `${step.color}08`,
                  borderRight: `1px solid rgba(0,0,0,0.06)`,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.4rem',
                  padding: '1.5rem 0',
                }}>
                  <div style={{ color: step.color }}>{step.icon}</div>
                  <div style={{ fontSize: '0.72rem', fontWeight: 900, color: step.color, letterSpacing: '0.05em' }}>{step.num}</div>
                </div>
                {/* Content column */}
                <div style={{ padding: '1.5rem 2rem' }}>
                  <div style={{ fontWeight: 800, color: '#0a0a14', fontSize: '1.05rem', marginBottom: '0.5rem' }}>
                    {step.title}
                  </div>
                  <p style={{ fontSize: '0.97rem', color: '#555570', lineHeight: 1.75 }}>
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── BAC Water Math ── */}
        <section style={{ padding: '4rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.6rem' }}>
            <div style={{
              width: 42, height: 42, borderRadius: 12,
              background: 'rgba(34,211,238,0.1)',
              border: '1px solid rgba(34,211,238,0.25)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#22d3ee', flexShrink: 0,
            }}>
              <Calculator size={20} />
            </div>
            <div className="section-label" style={{ color: '#22d3ee', marginBottom: 0 }}>Math Reference</div>
          </div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '0.75rem' }}>
            Calculating Your Concentration
          </h2>
          <p style={{ color: '#555570', fontSize: '1.05rem', marginBottom: '2.5rem', maxWidth: 680 }}>
            Understanding the concentration formula lets you customize reconstitution volumes for any vial size or target dose. This is the single most important calculation in peptide research.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '1.5rem', maxWidth: 960 }}>

            {/* Formula Card */}
            <div style={{
              background: '#0a0a14',
              border: '1px solid rgba(34,211,238,0.2)',
              borderRadius: 20,
              padding: '2rem',
            }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#22d3ee', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '1.25rem' }}>The Formula</div>
              <div style={{ fontFamily: 'monospace', fontSize: '1.1rem', color: '#ffffff', lineHeight: 2, marginBottom: '1.5rem' }}>
                <div style={{ color: '#9090a8', fontSize: '0.82rem', marginBottom: '0.5rem' }}>/* μg per μL = concentration */</div>
                <div>
                  <span style={{ color: '#22d3ee' }}>( vial_mg × 1000 )</span>
                </div>
                <div style={{ borderTop: '1px solid #333', margin: '0.25rem 0', width: 220 }} />
                <div>
                  <span style={{ color: '#a78bfa' }}>BAC_water_mL</span>
                  <span style={{ color: '#9090a8' }}> = </span>
                  <span style={{ color: '#d4a843' }}>μg / μL</span>
                </div>
              </div>
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.25rem' }}>
                <div style={{ fontSize: '0.82rem', color: '#9090a8', lineHeight: 1.7 }}>
                  <strong style={{ color: '#ffffff' }}>Why μg/μL?</strong> Because insulin syringes are measured in units (U) or μL. Knowing that 1μL of your solution = X μg of peptide lets you precisely dial any dose on any syringe.
                </div>
              </div>
            </div>

            {/* Worked Example Card */}
            <div style={{
              background: '#fff',
              border: '1px solid rgba(34,211,238,0.2)',
              borderTop: '3px solid #22d3ee',
              borderRadius: 20,
              padding: '2rem',
            }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#22d3ee', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '1.25rem' }}>Worked Example: BPC-157</div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { label: 'Vial size', value: '10mg', note: 'Standard BPC-157 vial' },
                  { label: 'BAC water added', value: '2mL', note: 'Into the vial' },
                  { label: 'Calculation', value: '(10 × 1000) ÷ 2', note: '= 5,000 ÷ 2' },
                  { label: 'Result', value: '5mg/mL = 5μg/μL', note: 'Concentration achieved', highlight: true },
                ].map(row => (
                  <div key={row.label} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0.6rem 0.9rem',
                    background: row.highlight ? 'rgba(34,211,238,0.07)' : '#f7f8fc',
                    border: row.highlight ? '1px solid rgba(34,211,238,0.2)' : '1px solid rgba(0,0,0,0.05)',
                    borderRadius: 10,
                  }}>
                    <div>
                      <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#9090a8' }}>{row.label}</div>
                      <div style={{ fontSize: '0.78rem', color: '#aaaacc' }}>{row.note}</div>
                    </div>
                    <div style={{
                      fontFamily: 'monospace',
                      fontWeight: 800,
                      fontSize: row.highlight ? '1rem' : '0.92rem',
                      color: row.highlight ? '#22d3ee' : '#3a3a5a',
                    }}>{row.value}</div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '1.25rem', background: 'rgba(34,211,238,0.05)', border: '1px solid rgba(34,211,238,0.15)', borderRadius: 10, padding: '0.9rem' }}>
                <div style={{ fontSize: '0.85rem', color: '#444458', lineHeight: 1.65 }}>
                  <strong>Applying the result:</strong> At 5μg/μL, a 500μg dose = 100μL (pull to 10U on an insulin syringe). A 250μg dose = 50μL (5U). This is why a 2mL reconstitution for a 10mg vial is convenient — the math stays clean.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Shelf Life Reference ── */}
        <section style={{ padding: '4rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label">Storage Reference</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '0.75rem' }}>
            Shelf Life by Compound
          </h2>
          <p style={{ color: '#555570', fontSize: '1.05rem', marginBottom: '2.5rem', maxWidth: 680 }}>
            Storage conditions dramatically affect peptide stability. These figures represent stable, bioactive shelf life under correct conditions — both pre- and post-reconstitution.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem' }}>
            {shelfLifeData.map(item => (
              <div key={item.compound} style={{
                background: '#fff',
                border: '1px solid rgba(0,0,0,0.07)',
                borderLeft: `3px solid ${item.color}`,
                borderRadius: '0 14px 14px 0',
                padding: '1.25rem 1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
              }}>
                <div style={{ fontWeight: 800, color: '#0a0a14', fontSize: '1.05rem' }}>{item.compound}</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                  <div>
                    <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#9090a8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.2rem' }}>Lyophilized</div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#444458' }}>{item.lyophilized}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.7rem', fontWeight: 700, color: item.color, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.2rem' }}>Reconstituted</div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0a0a14' }}>{item.reconstituted}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{
            display: 'flex', gap: '0.75rem', alignItems: 'flex-start',
            background: '#f7f8fc',
            border: '1px solid rgba(0,0,0,0.07)',
            borderRadius: 14,
            padding: '1.25rem 1.5rem',
            marginTop: '2rem',
          }}>
            <AlertCircle size={16} style={{ color: '#9090a8', flexShrink: 0, marginTop: 2 }} />
            <p style={{ fontSize: '0.88rem', color: '#9090a8', lineHeight: 1.65 }}>
              <strong style={{ color: '#666680' }}>Storage Note:</strong> These shelf life figures assume correct storage conditions — refrigerated at 2–8°C for reconstituted peptides, protected from UV light, and not subjected to repeated freeze-thaw cycles. Deviations from correct storage will reduce effective shelf life. When in doubt, discard and reconstitute fresh.
            </p>
          </div>
        </section>

        {/* ── Related Links ── */}
        <section style={{ padding: '2rem 0' }}>
          <RelatedLinks currentPath="/peptide-dosing-chart" />
        </section>

        {/* ── CTA ── */}
        <section style={{ padding: '2rem 0 5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1rem' }}>

            <div style={{
              background: 'linear-gradient(135deg, #fffbf0, #f7f8fc)',
              border: '1px solid rgba(212,168,67,0.2)',
              borderRadius: 24,
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}>
              <div className="section-label" style={{ marginBottom: 0 }}>Source Compounds</div>
              <h3 className="heading-md" style={{ color: '#0a0a14' }}>Shop Now</h3>
              <p style={{ color: '#555570', fontSize: '0.97rem', lineHeight: 1.7 }}>
                Every compound in this reference guide is available with third-party verified purity documentation and full CoA on every order.
              </p>
              <a href={AFFILIATE_BASE} target="_blank" rel="nofollow noopener noreferrer" className="btn-primary" style={{ alignSelf: 'flex-start' }}>
                Shop Now <ExternalLink size={14} />
              </a>
            </div>

            <div style={{
              background: '#f7f8fc',
              border: '1px solid rgba(0,0,0,0.07)',
              borderRadius: 24,
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}>
              <div style={{
                width: 44, height: 44, borderRadius: 12,
                background: 'rgba(167,139,250,0.1)',
                border: '1px solid rgba(167,139,250,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#a78bfa',
              }}>
                <BookOpen size={20} />
              </div>
              <h3 className="heading-md" style={{ color: '#0a0a14' }}>Read the Full Guide</h3>
              <p style={{ color: '#555570', fontSize: '0.97rem', lineHeight: 1.7 }}>
                Deep-dive into peptide mechanisms, stacking principles, purity standards, and how to design effective lab protocols from scratch.
              </p>
              <Link href="/guide" className="btn-secondary hover-lift" style={{ alignSelf: 'flex-start' }}>
                Read the Guide <ArrowRight size={14} />
              </Link>
            </div>

          </div>
        </section>

      </div>
    </div>
  )
}
