'use client'
import Link from 'next/link'
import { ArrowRight, ExternalLink, CheckCircle, Layers, Zap, Activity, Sparkles, TrendingUp, Shield, ChevronRight, Users, FlaskConical, Clock } from 'lucide-react'
import { AFFILIATE_BASE } from '@/lib/products'
import { useState } from 'react'

interface Compound {
  name: string
  role: string
  dose: string
  href: string
}

interface Stack {
  id: string
  name: string
  level: string
  levelColor: string
  color: string
  tagline: string
  compounds: Compound[]
  benefits: string[]
  duration: string
  stat: string
  statLabel: string
  goal: string
}

const stacks: Stack[] = [
  {
    id: 'aesthetic-starter',
    name: 'Aesthetic Starter',
    level: 'Beginner',
    levelColor: '#a78bfa',
    color: '#a78bfa',
    goal: 'Skin & Sleep Quality',
    tagline: 'Maximum skin quality + overnight GH optimization with minimal complexity',
    compounds: [
      { name: 'GHK-Cu', role: 'Skin regeneration & collagen', dose: '1–2mg/day topical or subQ', href: '/products/ghk-cu' },
      { name: 'CJC-1295', role: 'GHRH analog — GH pulse', dose: '100mcg pre-sleep', href: '/products/cjc1295-ipamorelin' },
      { name: 'Ipamorelin', role: 'GHRP — GH release', dose: '200mcg pre-sleep', href: '/products/cjc1295-ipamorelin' },
    ],
    benefits: [
      'Improved skin texture and tone within 4–6 weeks',
      'Deeper, more restorative sleep',
      '4–8× GH pulse amplification overnight',
      'Collagen and elastin upregulation',
    ],
    duration: '8–12 weeks',
    stat: '4–8×',
    statLabel: 'GH amplification',
  },
  {
    id: 'fat-loss',
    name: 'Fat Loss',
    level: 'Intermediate',
    levelColor: '#d4a843',
    color: '#d4a843',
    goal: 'Maximum Fat Oxidation',
    tagline: 'Triple-receptor GLP-1 agonism + GH axis for maximum fat oxidation',
    compounds: [
      { name: 'Retatrutide', role: 'GLP-1/GIP/Glucagon tri-agonist', dose: '2–12mg/week escalating', href: '/products/glp-3r-10mg' },
      { name: 'CJC-1295', role: 'GH axis preservation', dose: '100mcg 2× daily', href: '/products/cjc1295-ipamorelin' },
      { name: 'Ipamorelin', role: 'Lean mass protection', dose: '200mcg 2× daily', href: '/products/cjc1295-ipamorelin' },
      { name: 'BPC-157', role: 'Gut health during deficit', dose: '250mcg 2× daily', href: '/products/bpc157-10mg' },
    ],
    benefits: [
      'Up to 24.2% total body weight reduction (NEJM Phase 2)',
      'Preserved lean muscle mass during deficit',
      'Improved insulin sensitivity and lipid profile',
      'BPC-157 supports gut barrier integrity during caloric restriction',
    ],
    duration: '12–24 weeks',
    stat: '24.2%',
    statLabel: 'Body weight reduction',
  },
  {
    id: 'body-recomp',
    name: 'Body Recomposition',
    level: 'Intermediate',
    levelColor: '#fb923c',
    color: '#fb923c',
    goal: 'Muscle & Body Recomp',
    tagline: 'True muscle hyperplasia + GH amplification + accelerated recovery',
    compounds: [
      { name: 'IGF-1 LR3', role: 'Satellite cell activation / hyperplasia', dose: '50–100mcg post-training', href: '/products/igf-1lr3' },
      { name: 'CJC-1295', role: 'Sustained GH elevation', dose: '100mcg 2× daily', href: '/products/cjc1295-ipamorelin' },
      { name: 'Ipamorelin', role: 'GH pulse amplification', dose: '200mcg 2× daily', href: '/products/cjc1295-ipamorelin' },
      { name: 'BPC-157', role: 'Recovery & joint protection', dose: '250–500mcg daily', href: '/products/bpc157-10mg' },
    ],
    benefits: [
      'Muscle hyperplasia — new fiber creation beyond normal hypertrophy',
      '4–8× GH pulse amplification',
      'Faster recovery between training sessions',
      'Joint and connective tissue protection',
    ],
    duration: '8–12 weeks',
    stat: '4–8×',
    statLabel: 'GH pulse amplification',
  },
  {
    id: 'recovery',
    name: 'Recovery',
    level: 'Beginner–Intermediate',
    levelColor: '#22d3ee',
    color: '#22d3ee',
    goal: 'Tissue Repair & Healing',
    tagline: 'Systemic tissue repair, angiogenesis, and tendon/joint healing',
    compounds: [
      { name: 'BPC-157', role: 'Tendon, joint & gut healing', dose: '250–500mcg daily', href: '/products/bpc157-10mg' },
      { name: 'TB-500', role: 'Systemic tissue repair', dose: '2–5mg 2× per week', href: '/products/tb500-10mg' },
    ],
    benefits: [
      '2× faster tendon healing vs control groups',
      'Angiogenesis — improved blood supply to injured tissue',
      'Anti-inflammatory signaling without cortisol suppression',
      'Gut barrier repair and microbiome support',
    ],
    duration: '4–8 weeks acute / 8–12 weeks chronic',
    stat: '2×',
    statLabel: 'Faster tendon healing',
  },
  {
    id: 'longevity',
    name: 'Longevity',
    level: 'Advanced',
    levelColor: '#a78bfa',
    color: '#a78bfa',
    goal: 'Anti-Aging & Lifespan',
    tagline: 'Telomere extension, epigenetic reset, and cellular rejuvenation',
    compounds: [
      { name: 'Epithalon', role: 'Telomerase activation / lifespan', dose: '5–10mg daily × 10 days', href: '/products/epithalon-50mg' },
      { name: 'GHK-Cu', role: 'Gene expression reset', dose: '1–2mg daily', href: '/products/ghk-cu' },
    ],
    benefits: [
      'Telomere lengthening documented in human subjects',
      'Modulates 4,000+ genes toward youthful expression',
      'Improved sleep architecture and circadian rhythm',
      'Antioxidant upregulation and DNA repair enhancement',
    ],
    duration: '10-day cycles, 2× per year',
    stat: '4,000+',
    statLabel: 'Genes modulated',
  },
  {
    id: 'elite-optimization',
    name: 'Elite Optimization',
    level: 'Advanced',
    levelColor: '#d4a843',
    color: '#d4a843',
    goal: 'Full-Spectrum Optimization',
    tagline: 'Total physical optimization — fat loss, growth, skin, recovery, and longevity',
    compounds: [
      { name: 'Retatrutide', role: 'Fat loss & metabolic optimization', dose: '4–8mg/week', href: '/products/glp-3r-10mg' },
      { name: 'IGF-1 LR3', role: 'Muscle hyperplasia', dose: '50–100mcg post-training', href: '/products/igf-1lr3' },
      { name: 'GHK-Cu', role: 'Skin & gene expression', dose: '1–2mg daily', href: '/products/ghk-cu' },
      { name: 'BPC-157', role: 'Recovery & gut health', dose: '250–500mcg daily', href: '/products/bpc157-10mg' },
      { name: 'Epithalon', role: 'Longevity & telomeres', dose: '5–10mg daily × 10 days', href: '/products/epithalon-50mg' },
    ],
    benefits: [
      'Simultaneous fat loss + muscle gain + skin improvement',
      'Full-spectrum biological optimization',
      'GH axis enhancement without exogenous GH',
      'Cellular longevity alongside physical performance',
    ],
    duration: '12–16 weeks',
    stat: '5',
    statLabel: 'Biological systems targeted',
  },
]

const chooseCards = [
  {
    question: 'New to Peptides?',
    guidance: 'Start with a single-goal protocol. Master the basics before adding complexity.',
    stacks: ['aesthetic-starter', 'recovery'],
    color: '#22d3ee',
    level: 'Beginner',
  },
  {
    question: 'Ready to Push Further?',
    guidance: 'You have peptide experience and a clear physique goal in mind.',
    stacks: ['fat-loss', 'body-recomp'],
    color: '#fb923c',
    level: 'Intermediate',
  },
  {
    question: 'Total Optimization?',
    guidance: 'Experienced users pursuing multi-axis biological enhancement.',
    stacks: ['longevity', 'elite-optimization'],
    color: '#d4a843',
    level: 'Advanced',
  },
]

const stackMap = Object.fromEntries(stacks.map(s => [s.id, s]))

export default function StacksPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const [hoveredRow, setHoveredRow] = useState<string | null>(null)

  return (
    <div style={{ background: '#ffffff', minHeight: '100vh', fontFamily: 'inherit' }}>

      {/* ── Hero ── */}
      <div style={{
        background: 'linear-gradient(170deg, #faf8ff 0%, #f9fbff 60%, #ffffff 100%)',
        borderBottom: '1px solid rgba(0,0,0,0.07)',
        padding: '5rem 2rem 4rem',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ maxWidth: 760 }}>
            {/* Label */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.14em',
              textTransform: 'uppercase', color: '#a78bfa',
              background: 'rgba(167,139,250,0.08)', border: '1px solid rgba(167,139,250,0.18)',
              borderRadius: 100, padding: '5px 14px', marginBottom: '1.5rem',
            }}>
              <FlaskConical size={11} /> Peptide Stacking Protocols
            </div>

            <h1 style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
              fontWeight: 900,
              color: '#0a0a14',
              lineHeight: 1.12,
              letterSpacing: '-0.03em',
              marginBottom: '1.25rem',
            }}>
              Evidence-Based<br />
              <span style={{
                background: 'linear-gradient(135deg, #d4a843, #f0c96e)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>Peptide Stacking Protocols</span>
            </h1>

            <p style={{
              fontSize: '1.15rem', color: '#555570', lineHeight: 1.75,
              marginBottom: '2rem', maxWidth: 640,
            }}>
              Six research-derived protocols spanning beginner to advanced — each engineered for synergistic action across distinct biological pathways.
            </p>

            {/* Stat strip */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 0,
              background: '#f5f5fa',
              border: '1px solid rgba(0,0,0,0.09)',
              borderRadius: 100,
              overflow: 'hidden',
              fontSize: '0.78rem',
              fontWeight: 700,
            }}>
              {[
                { icon: <Layers size={12} />, text: '6 Protocols' },
                { icon: <Users size={12} />, text: 'Beginner to Advanced' },
                { icon: <FlaskConical size={12} />, text: 'Based on Published Science' },
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  padding: '8px 18px',
                  color: '#444458',
                  borderRight: i < 2 ? '1px solid rgba(0,0,0,0.09)' : 'none',
                }}>
                  <span style={{ color: '#a78bfa' }}>{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>

        {/* ── Section 1: Comparison Overview Table ── */}
        <section style={{ padding: '4rem 0 2rem' }}>
          <div style={{ marginBottom: '1.75rem' }}>
            <div style={{
              fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.14em',
              textTransform: 'uppercase', color: '#9090a8', marginBottom: '0.5rem',
            }}>
              All Protocols at a Glance
            </div>
            <h2 style={{
              fontSize: 'clamp(1.4rem, 3vw, 2rem)',
              fontWeight: 900, color: '#0a0a14',
              letterSpacing: '-0.02em', margin: 0,
            }}>
              Find Your Stack
            </h2>
          </div>

          <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch', marginLeft: '-0.5rem', marginRight: '-0.5rem', paddingLeft: '0.5rem', paddingRight: '0.5rem' }}>
            <table style={{
              borderCollapse: 'separate',
              borderSpacing: 0,
              width: '100%',
              minWidth: 900,
              border: '1px solid rgba(0,0,0,0.09)',
              borderRadius: 16,
              overflow: 'hidden',
              background: '#fff',
            }}>
              {/* Stack column headers */}
              <thead>
                <tr>
                  {/* Row label header cell */}
                  <th style={{
                    background: '#f7f7fb',
                    borderRight: '1px solid rgba(0,0,0,0.08)',
                    borderBottom: '1px solid rgba(0,0,0,0.09)',
                    padding: '1rem 1.25rem',
                    textAlign: 'left',
                    width: 140,
                  }}>
                    <span style={{ fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#9090a8' }}>Protocol</span>
                  </th>
                  {stacks.map((s, i) => (
                    <th
                      key={s.id}
                      onMouseEnter={() => setHoveredRow(s.id)}
                      onMouseLeave={() => setHoveredRow(null)}
                      style={{
                        borderRight: i < stacks.length - 1 ? '1px solid rgba(0,0,0,0.07)' : 'none',
                        borderBottom: '2px solid ' + s.color,
                        padding: 0,
                        verticalAlign: 'bottom',
                        transition: 'background 0.15s',
                        background: hoveredRow === s.id ? `${s.color}08` : '#fff',
                        cursor: 'default',
                      }}
                    >
                      {/* Colored top accent bar */}
                      <div style={{
                        background: `linear-gradient(135deg, ${s.color}22, ${s.color}10)`,
                        borderBottom: `2px solid ${s.color}40`,
                        padding: '1rem 1rem 0.75rem',
                        textAlign: 'center',
                      }}>
                        <div style={{
                          display: 'inline-block',
                          fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.12em',
                          textTransform: 'uppercase', color: s.levelColor,
                          background: `${s.levelColor}18`,
                          border: `1px solid ${s.levelColor}30`,
                          borderRadius: 100, padding: '2px 8px',
                          marginBottom: '0.4rem',
                        }}>
                          {s.level}
                        </div>
                        <div style={{
                          fontSize: '0.92rem', fontWeight: 900, color: '#0a0a14',
                          lineHeight: 1.25,
                        }}>
                          {s.name}
                        </div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {/* Row: Primary Goal */}
                {[
                  {
                    label: 'Primary Goal',
                    render: (s: Stack) => (
                      <span style={{ fontSize: '0.82rem', fontWeight: 700, color: s.color }}>
                        {s.goal}
                      </span>
                    ),
                  },
                  {
                    label: '# Compounds',
                    render: (s: Stack) => (
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                        <span style={{
                          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                          width: 28, height: 28, borderRadius: '50%',
                          background: `${s.color}15`, border: `1px solid ${s.color}30`,
                          fontSize: '0.85rem', fontWeight: 900, color: s.color,
                        }}>
                          {s.compounds.length}
                        </span>
                      </div>
                    ),
                  },
                  {
                    label: 'Duration',
                    render: (s: Stack) => (
                      <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                        <Clock size={11} style={{ color: '#9090a8', flexShrink: 0 }} />
                        <span style={{ fontSize: '0.78rem', color: '#555570', fontWeight: 600 }}>{s.duration}</span>
                      </div>
                    ),
                  },
                  {
                    label: 'Key Stat',
                    render: (s: Stack) => (
                      <div>
                        <div style={{ fontSize: '1.2rem', fontWeight: 900, color: s.color, lineHeight: 1, letterSpacing: '-0.03em' }}>{s.stat}</div>
                        <div style={{ fontSize: '0.68rem', color: '#9090a8', marginTop: 2, fontWeight: 600 }}>{s.statLabel}</div>
                      </div>
                    ),
                  },
                  {
                    label: 'Protocol',
                    render: (s: Stack) => (
                      <Link
                        href={`/stacks/${s.id}`}
                        style={{
                          display: 'inline-flex', alignItems: 'center', gap: 5,
                          fontSize: '0.75rem', fontWeight: 800, color: s.color,
                          textDecoration: 'none',
                          padding: '5px 10px',
                          background: `${s.color}10`,
                          border: `1px solid ${s.color}30`,
                          borderRadius: 8,
                          transition: 'background 0.15s',
                        }}
                      >
                        View <ChevronRight size={10} />
                      </Link>
                    ),
                  },
                ].map((row, rowIdx, arr) => (
                  <tr key={row.label}>
                    <td style={{
                      padding: '0.875rem 1.25rem',
                      background: '#f7f7fb',
                      borderRight: '1px solid rgba(0,0,0,0.08)',
                      borderBottom: rowIdx < arr.length - 1 ? '1px solid rgba(0,0,0,0.06)' : 'none',
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      color: '#6b6b88',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      whiteSpace: 'nowrap',
                    }}>
                      {row.label}
                    </td>
                    {stacks.map((s, i) => (
                      <td
                        key={s.id}
                        onMouseEnter={() => setHoveredRow(s.id)}
                        onMouseLeave={() => setHoveredRow(null)}
                        style={{
                          padding: '0.875rem 1rem',
                          borderRight: i < stacks.length - 1 ? '1px solid rgba(0,0,0,0.06)' : 'none',
                          borderBottom: rowIdx < arr.length - 1 ? '1px solid rgba(0,0,0,0.06)' : 'none',
                          textAlign: 'center',
                          transition: 'background 0.15s',
                          background: hoveredRow === s.id ? `${s.color}06` : '#fff',
                          verticalAlign: 'middle',
                        }}
                      >
                        {row.render(s)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Section 2: Detailed Stack Cards ── */}
        <section style={{ padding: '3rem 0' }}>
          <div style={{ marginBottom: '2rem' }}>
            <div style={{
              fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.14em',
              textTransform: 'uppercase', color: '#9090a8', marginBottom: '0.5rem',
            }}>
              Full Protocol Details
            </div>
            <h2 style={{
              fontSize: 'clamp(1.4rem, 3vw, 2rem)',
              fontWeight: 900, color: '#0a0a14',
              letterSpacing: '-0.02em', margin: 0,
            }}>
              Detailed Stack Protocols
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 580px), 1fr))',
            gap: '1.75rem',
          }}>
            {stacks.map(s => (
              <div
                key={s.id}
                id={s.id}
                onMouseEnter={() => setHoveredCard(s.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  background: '#fff',
                  border: '1px solid rgba(0,0,0,0.09)',
                  borderLeft: `4px solid ${s.color}`,
                  borderRadius: 16,
                  overflow: 'hidden',
                  scrollMarginTop: 80,
                  transition: 'box-shadow 0.2s, transform 0.2s',
                  boxShadow: hoveredCard === s.id
                    ? `0 12px 40px ${s.color}18, 0 4px 16px rgba(0,0,0,0.06)`
                    : '0 2px 12px rgba(0,0,0,0.05)',
                  transform: hoveredCard === s.id ? 'translateY(-2px)' : 'none',
                }}
              >
                {/* Card header bar */}
                <div style={{
                  background: `linear-gradient(135deg, ${s.color}12, ${s.color}05)`,
                  borderBottom: `1px solid ${s.color}20`,
                  padding: '1.25rem 1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  flexWrap: 'wrap',
                }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: '0.3rem' }}>
                      <span style={{
                        fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.12em',
                        textTransform: 'uppercase', color: s.levelColor,
                        background: `${s.levelColor}18`, border: `1px solid ${s.levelColor}30`,
                        borderRadius: 100, padding: '2px 9px',
                      }}>
                        {s.level}
                      </span>
                      <span style={{ fontSize: '0.75rem', color: '#9090a8', fontWeight: 600 }}>
                        {s.duration}
                      </span>
                    </div>
                    <h3 style={{
                      fontSize: '1.2rem', fontWeight: 900, color: '#0a0a14',
                      margin: 0, letterSpacing: '-0.02em',
                    }}>
                      {s.name} Stack
                    </h3>
                  </div>
                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <div style={{ fontSize: '1.75rem', fontWeight: 900, color: s.color, letterSpacing: '-0.04em', lineHeight: 1 }}>
                      {s.stat}
                    </div>
                    <div style={{ fontSize: '0.68rem', color: '#9090a8', fontWeight: 600, marginTop: 2, maxWidth: 110 }}>
                      {s.statLabel}
                    </div>
                  </div>
                </div>

                {/* Card body: two columns */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
                  {/* Left: tagline + benefits */}
                  <div style={{
                    padding: '1.5rem',
                    borderRight: '1px solid rgba(0,0,0,0.07)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.25rem',
                  }}>
                    <p style={{
                      fontSize: '0.88rem', color: '#555570', lineHeight: 1.65,
                      fontStyle: 'italic', margin: 0,
                      borderLeft: `2px solid ${s.color}40`,
                      paddingLeft: '0.75rem',
                    }}>
                      {s.tagline}
                    </p>

                    <div>
                      <div style={{
                        fontSize: '0.62rem', fontWeight: 800, letterSpacing: '0.12em',
                        textTransform: 'uppercase', color: '#9090a8', marginBottom: '0.75rem',
                      }}>
                        Documented Outcomes
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                        {s.benefits.map(b => (
                          <div key={b} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                            <CheckCircle size={13} style={{ color: s.color, flexShrink: 0, marginTop: 2 }} />
                            <span style={{ fontSize: '0.8rem', color: '#444458', lineHeight: 1.55 }}>{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: Compound timeline */}
                  <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0' }}>
                    <div style={{
                      fontSize: '0.62rem', fontWeight: 800, letterSpacing: '0.12em',
                      textTransform: 'uppercase', color: '#9090a8', marginBottom: '1rem',
                    }}>
                      Protocol Compounds
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 0, position: 'relative' }}>
                      {s.compounds.map((c, idx) => (
                        <div key={c.name} style={{ display: 'flex', gap: '0.75rem', alignItems: 'stretch', position: 'relative' }}>
                          {/* Timeline track */}
                          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, width: 28 }}>
                            {/* Number node */}
                            <div style={{
                              width: 24, height: 24, borderRadius: '50%',
                              background: `${s.color}18`, border: `2px solid ${s.color}`,
                              display: 'flex', alignItems: 'center', justifyContent: 'center',
                              fontSize: '0.65rem', fontWeight: 900, color: s.color,
                              flexShrink: 0, zIndex: 1,
                              boxShadow: `0 0 0 3px ${s.color}10`,
                            }}>
                              {idx + 1}
                            </div>
                            {/* Vertical line connecting to next */}
                            {idx < s.compounds.length - 1 && (
                              <div style={{
                                width: 2,
                                flex: 1,
                                minHeight: 16,
                                background: `linear-gradient(to bottom, ${s.color}60, ${s.color}20)`,
                                margin: '2px 0',
                              }} />
                            )}
                          </div>

                          {/* Compound info */}
                          <Link
                            href={c.href}
                            style={{
                              flex: 1,
                              paddingBottom: idx < s.compounds.length - 1 ? '0.875rem' : 0,
                              textDecoration: 'none',
                              display: 'block',
                            }}
                          >
                            <div style={{
                              background: '#f9f9fd',
                              border: '1px solid rgba(0,0,0,0.07)',
                              borderRadius: 10,
                              padding: '0.6rem 0.75rem',
                              transition: 'border-color 0.15s, background 0.15s',
                            }}>
                              <div style={{ fontWeight: 800, color: s.color, fontSize: '0.85rem', marginBottom: '0.15rem' }}>
                                {c.name}
                              </div>
                              <div style={{ fontSize: '0.72rem', color: '#555570', marginBottom: '0.2rem' }}>{c.role}</div>
                              <div style={{
                                fontSize: '0.68rem', color: '#9090a8', fontWeight: 700,
                                fontFamily: 'monospace', letterSpacing: '0.02em',
                              }}>
                                {c.dose}
                              </div>
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card footer */}
                <div style={{
                  borderTop: '1px solid rgba(0,0,0,0.07)',
                  padding: '1rem 1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '0.75rem',
                  background: '#fafafa',
                  flexWrap: 'wrap',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <Clock size={12} style={{ color: '#9090a8' }} />
                    <span style={{ fontSize: '0.78rem', color: '#6b6b88', fontWeight: 600 }}>
                      {s.duration}
                    </span>
                  </div>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
                    <a
                      href={AFFILIATE_BASE}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: 5,
                        fontSize: '0.75rem', fontWeight: 700,
                        color: '#555570',
                        textDecoration: 'none',
                        padding: '6px 12px',
                        border: '1px solid rgba(0,0,0,0.12)',
                        borderRadius: 8,
                        background: '#fff',
                      }}
                    >
                      Source Compounds <ExternalLink size={10} />
                    </a>
                    <Link
                      href={`/stacks/${s.id}`}
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: 5,
                        fontSize: '0.75rem', fontWeight: 800,
                        color: '#fff',
                        textDecoration: 'none',
                        padding: '6px 14px',
                        background: s.color,
                        borderRadius: 8,
                      }}
                    >
                      View Full Protocol <ArrowRight size={10} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Section 3: How to Choose ── */}
        <section style={{ padding: '3rem 0' }}>
          {/* Divider */}
          <div style={{
            borderTop: '1px solid rgba(0,0,0,0.08)',
            marginBottom: '3rem',
          }} />

          <div style={{ marginBottom: '2rem' }}>
            <div style={{
              fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.14em',
              textTransform: 'uppercase', color: '#9090a8', marginBottom: '0.5rem',
            }}>
              Decision Guide
            </div>
            <h2 style={{
              fontSize: 'clamp(1.4rem, 3vw, 2rem)',
              fontWeight: 900, color: '#0a0a14',
              letterSpacing: '-0.02em', margin: 0,
            }}>
              How to Choose Your Protocol
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))',
            gap: '1.25rem',
          }}>
            {chooseCards.map(card => (
              <div
                key={card.question}
                style={{
                  border: '1px solid rgba(0,0,0,0.09)',
                  borderTop: `3px solid ${card.color}`,
                  borderRadius: 14,
                  padding: '1.75rem',
                  background: '#fff',
                }}
              >
                {/* Level badge */}
                <div style={{
                  display: 'inline-block',
                  fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.12em',
                  textTransform: 'uppercase', color: card.color,
                  background: `${card.color}12`, border: `1px solid ${card.color}25`,
                  borderRadius: 100, padding: '2px 10px', marginBottom: '0.875rem',
                }}>
                  {card.level}
                </div>

                <h3 style={{
                  fontSize: '1.15rem', fontWeight: 900, color: '#0a0a14',
                  letterSpacing: '-0.02em', marginBottom: '0.6rem',
                }}>
                  {card.question}
                </h3>

                <p style={{
                  fontSize: '0.875rem', color: '#555570', lineHeight: 1.65,
                  marginBottom: '1.25rem',
                }}>
                  {card.guidance}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {card.stacks.map(sid => {
                    const s = stackMap[sid]
                    return (
                      <Link
                        key={sid}
                        href={`/stacks/${sid}`}
                        style={{
                          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                          padding: '0.75rem 1rem',
                          background: `${s.color}08`,
                          border: `1px solid ${s.color}20`,
                          borderRadius: 10,
                          textDecoration: 'none',
                        }}
                      >
                        <span style={{ fontSize: '0.88rem', fontWeight: 800, color: s.color }}>
                          {s.name} Stack
                        </span>
                        <ChevronRight size={14} style={{ color: s.color, flexShrink: 0 }} />
                      </Link>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ padding: '2rem 0 5rem' }}>
          <div style={{
            background: 'linear-gradient(135deg, #fffbf0 0%, #f7f8fc 100%)',
            border: '1px solid rgba(212,168,67,0.22)',
            borderRadius: 20,
            padding: '3.5rem 2.5rem',
            textAlign: 'center',
          }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.14em',
              textTransform: 'uppercase', color: '#d4a843',
              background: 'rgba(212,168,67,0.1)', border: '1px solid rgba(212,168,67,0.22)',
              borderRadius: 100, padding: '4px 14px', marginBottom: '1.25rem',
            }}>
              <FlaskConical size={10} /> Source Every Compound
            </div>

            <h2 style={{
              fontSize: 'clamp(1.4rem, 3vw, 2rem)',
              fontWeight: 900, color: '#0a0a14',
              letterSpacing: '-0.02em',
              marginBottom: '0.75rem',
            }}>
              All Stack Compounds at our supplier
            </h2>

            <p style={{
              color: '#555570', fontSize: '1rem', lineHeight: 1.7,
              maxWidth: 520, margin: '0 auto 2rem',
            }}>
              Every peptide in every protocol — independently third-party tested, premium grade, with full CoA documentation on every order.
            </p>

            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href={AFFILIATE_BASE}
                target="_blank"
                rel="nofollow noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  fontSize: '0.95rem', fontWeight: 800,
                  color: '#0a0a14',
                  textDecoration: 'none',
                  padding: '0.9rem 2.25rem',
                  background: 'linear-gradient(135deg, #d4a843, #f0c96e)',
                  borderRadius: 12,
                  boxShadow: '0 4px 16px rgba(212,168,67,0.3)',
                }}
              >
                Shop Now <ExternalLink size={15} />
              </a>
              <Link
                href="/guide"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  fontSize: '0.95rem', fontWeight: 800,
                  color: '#444458',
                  textDecoration: 'none',
                  padding: '0.9rem 2rem',
                  background: '#fff',
                  border: '1px solid rgba(0,0,0,0.12)',
                  borderRadius: 12,
                }}
              >
                Read the Peptide Guide <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
