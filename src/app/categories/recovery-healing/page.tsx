'use client'
import { useState } from 'react'
import Link from 'next/link'
import { ExternalLink, ArrowRight } from 'lucide-react'
import ProductCard from '@/components/ProductCard'
import { products, AFFILIATE_BASE } from '@/lib/products'

const catProducts = products.filter(p => p.categorySlug === 'recovery-healing')

const systems = [
  {
    system: 'Musculoskeletal',
    icon: '🦴',
    compound: 'BPC-157 + TB-500',
    color: '#22d3ee',
    bg: '#f0fffe',
    border: 'rgba(34,211,238,0.25)',
    detail: 'BPC-157 upregulates tendon fibroblast growth factor receptors; TB-500 drives actin polymerization and rapid cell migration — together accelerating tendon-to-bone healing 2× faster than controls.',
  },
  {
    system: 'Gastrointestinal',
    icon: '🫁',
    compound: 'BPC-157',
    color: '#34d399',
    bg: '#f0fff8',
    border: 'rgba(52,211,153,0.25)',
    detail: 'Isolated from gastric juice, BPC-157 demonstrates exceptional potency healing fistulas, IBD lesions, and NSAID-induced intestinal damage with direct mucosal cytoprotection.',
  },
  {
    system: 'Neurological',
    icon: '🧠',
    compound: 'BPC-157',
    color: '#a78bfa',
    bg: '#faf5ff',
    border: 'rgba(167,139,250,0.25)',
    detail: 'BPC-157 protects dopaminergic and serotonergic neurons, reverses drug-induced neurotoxicity, and shows promising outcomes in traumatic brain injury and spinal cord lesion models.',
  },
  {
    system: 'Cardiovascular',
    icon: '❤️',
    compound: 'TB-500',
    color: '#f87171',
    bg: '#fff5f5',
    border: 'rgba(248,113,113,0.25)',
    detail: 'TB-500 activates cardiac stem cells and directs cardiomyocyte migration toward infarcted tissue. Its potent angiogenic properties restore blood supply to ischemic regions post-infarction.',
  },
]

const timeline = [
  {
    week: 'Week 1',
    num: '01',
    color: '#22d3ee',
    bg: '#f0fffe',
    title: 'Anti-Inflammatory Cascade',
    points: [
      'Acute pain signaling reduced via COX pathway modulation',
      'VEGF upregulation initiates new vessel sprouting',
      'Inflammatory cytokine profiles begin normalizing',
      'Cellular debris clearance accelerated',
    ],
  },
  {
    week: 'Week 2',
    num: '02',
    color: '#34d399',
    bg: '#f0fff8',
    title: 'Fibroblast Activation',
    points: [
      'Tendon fibroblast proliferation peaks, ECM deposition begins',
      'Tendon-to-bone interface healing accelerated vs controls',
      'Actin-driven cell motility populates injury scaffold',
      'Visible tissue remodeling begins histologically',
    ],
  },
  {
    week: 'Week 4',
    num: '03',
    color: '#a78bfa',
    bg: '#faf5ff',
    title: 'Angiogenesis Established',
    points: [
      'Functional capillary networks supplying injured tissue',
      'Collagen crosslinking density approaching normal',
      '60–80% structural healing complete in most models',
      'Pain scores near baseline in human case reports',
    ],
  },
  {
    week: 'Week 8',
    num: '04',
    color: '#f59e0b',
    bg: '#fffbeb',
    title: 'Full Structural Integrity',
    points: [
      'Connective tissue density normalized to pre-injury',
      'Biomechanical load tolerance restored',
      'Neural re-innervation of repaired tissue complete',
      'Residual inflammation markers below detection threshold',
    ],
  },
]

export default function RecoveryPage() {
  const [hoverBpc, setHoverBpc] = useState(false)
  const [hoverTb, setHoverTb] = useState(false)
  const [hoverCta, setHoverCta] = useState(false)

  return (
    <div style={{ background: '#ffffff', minHeight: '100vh' }}>

      {/* ── HERO ── */}
      <div style={{
        background: 'linear-gradient(160deg, #f0fffe 0%, #f0fff8 50%, #ffffff 100%)',
        borderBottom: '1px solid rgba(0,0,0,0.07)',
        padding: '5rem 2rem 4rem',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ maxWidth: 780 }}>
            {/* Section label */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.12em',
              textTransform: 'uppercase', color: '#22d3ee', marginBottom: '1.25rem',
            }}>
              <span style={{ width: 20, height: 2, background: '#22d3ee', borderRadius: 2, display: 'inline-block' }} />
              Healing Science · Recovery & Repair
            </div>

            <h1 style={{
              fontSize: 'clamp(2rem, 5vw, 3.25rem)', fontWeight: 900,
              color: '#0a0a14', lineHeight: 1.1, letterSpacing: '-0.03em',
              marginBottom: '1.25rem',
            }}>
              Medical-Grade Tissue Repair:<br />
              <span style={{ color: '#22d3ee' }}>BPC-157</span>
              <span style={{ color: '#9090a8', fontWeight: 400, fontSize: '0.7em' }}> &amp; </span>
              <span style={{ color: '#34d399' }}>TB-500</span>
            </h1>

            <p style={{
              fontSize: '1.08rem', color: '#555570', lineHeight: 1.75,
              marginBottom: '2rem', maxWidth: 660,
            }}>
              The most clinically documented healing peptides in existence. Operating through
              complementary mechanisms — <strong style={{ color: '#22d3ee' }}>VEGF angiogenesis</strong>,{' '}
              <strong style={{ color: '#34d399' }}>actin cell motility</strong>, fibroblast activation,
              and neural protection — for comprehensive multi-system tissue repair across every major body system.
            </p>

            {/* Inline stat pills */}
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: '2rem' }}>
              {[
                { label: '120+ Studies', color: '#22d3ee', bg: 'rgba(34,211,238,0.1)' },
                { label: '4 Body Systems', color: '#34d399', bg: 'rgba(52,211,153,0.1)' },
                { label: '2× Faster Healing', color: '#a78bfa', bg: 'rgba(167,139,250,0.1)' },
              ].map(pill => (
                <span key={pill.label} style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  padding: '0.35rem 0.9rem', borderRadius: 999,
                  background: pill.bg, color: pill.color,
                  fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.04em',
                  border: `1px solid ${pill.color}33`,
                }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: pill.color, display: 'inline-block' }} />
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
                  padding: '0.75rem 1.6rem',
                  background: 'linear-gradient(135deg, #22d3ee, #0891b2)',
                  color: '#fff', fontWeight: 700, fontSize: '0.92rem',
                  borderRadius: 10, textDecoration: 'none', letterSpacing: '0.02em',
                  boxShadow: '0 4px 20px rgba(34,211,238,0.3)',
                }}
              >
                Shop Recovery Peptides <ExternalLink size={14} />
              </a>
              <Link
                href="/products"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  padding: '0.75rem 1.4rem',
                  border: '1.5px solid rgba(0,0,0,0.12)',
                  color: '#0a0a14', fontWeight: 600, fontSize: '0.92rem',
                  borderRadius: 10, textDecoration: 'none',
                }}
              >
                All Compounds <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── BPC-157 vs TB-500 SPLIT COMPARISON ── */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '4rem 2rem 0' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.12em',
            textTransform: 'uppercase', color: '#22d3ee', marginBottom: '0.75rem',
          }}>
            <span style={{ width: 20, height: 2, background: '#22d3ee', borderRadius: 2, display: 'inline-block' }} />
            Mechanism Comparison
            <span style={{ width: 20, height: 2, background: '#22d3ee', borderRadius: 2, display: 'inline-block' }} />
          </div>
          <h2 style={{
            fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontWeight: 900,
            color: '#0a0a14', letterSpacing: '-0.025em', lineHeight: 1.15,
          }}>
            Complementary Healing Protocols
          </h2>
          <p style={{ color: '#9090a8', fontSize: '0.95rem', marginTop: '0.6rem' }}>
            Localized repair meets systemic regeneration — two peptides, one complete healing system
          </p>
        </div>

        {/* Split panels container */}
        <div style={{
          borderRadius: 24, overflow: 'hidden',
          border: '1px solid rgba(0,0,0,0.08)',
          boxShadow: '0 8px 40px rgba(0,0,0,0.07)',
        }}>
          {/* Two-panel row */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr' }}>

            {/* LEFT — BPC-157 */}
            <div
              style={{
                background: hoverBpc ? '#e6fbfe' : '#f0fffe',
                padding: '2.5rem 2.5rem 2rem',
                transition: 'background 0.25s',
                cursor: 'default',
              }}
              onMouseEnter={() => setHoverBpc(true)}
              onMouseLeave={() => setHoverBpc(false)}
            >
              {/* Compound name */}
              <div style={{ marginBottom: '1.5rem' }}>
                <span style={{
                  display: 'inline-block', padding: '0.25rem 0.75rem',
                  background: 'rgba(34,211,238,0.12)', color: '#0891b2',
                  borderRadius: 6, fontSize: '0.73rem', fontWeight: 700,
                  letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.6rem',
                }}>
                  Localized Healing
                </span>
                <div style={{
                  fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900,
                  color: '#22d3ee', letterSpacing: '-0.04em', lineHeight: 1,
                }}>
                  BPC-157
                </div>
                <div style={{ fontSize: '0.82rem', color: '#9090a8', marginTop: '0.3rem', fontWeight: 600 }}>
                  Body Protection Compound · Pentadecapeptide
                </div>
              </div>

              {/* Key stat badges */}
              <div style={{ display: 'flex', gap: 8, marginBottom: '1.75rem', flexWrap: 'wrap' }}>
                {['15 amino acids', 'Gastric origin', '120+ studies'].map(s => (
                  <span key={s} style={{
                    padding: '0.25rem 0.6rem', borderRadius: 6,
                    background: 'rgba(34,211,238,0.1)', color: '#0891b2',
                    fontSize: '0.75rem', fontWeight: 600,
                    border: '1px solid rgba(34,211,238,0.2)',
                  }}>{s}</span>
                ))}
              </div>

              {/* Mechanisms */}
              <div style={{ marginBottom: '1.75rem' }}>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', color: '#9090a8', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                  Primary Mechanisms
                </div>
                {[
                  { mech: 'VEGF upregulation', detail: 'Stimulates vascular endothelial growth factor for angiogenesis at injury sites' },
                  { mech: 'Fibroblast activation', detail: 'Upregulates TGF-β receptors and accelerates ECM collagen deposition' },
                  { mech: 'COX pathway modulation', detail: 'Reduces prostaglandin-mediated inflammation without COX-2 suppression' },
                  { mech: 'Nitric oxide synthesis', detail: 'eNOS activation promotes vasodilation and oxygen delivery to healing tissue' },
                  { mech: 'GI cytoprotection', detail: 'Direct mucosal protection from NSAID damage and inflammatory bowel lesions' },
                ].map(item => (
                  <div key={item.mech} style={{
                    display: 'flex', gap: 10, marginBottom: '0.85rem', alignItems: 'flex-start',
                  }}>
                    <span style={{
                      width: 18, height: 18, borderRadius: '50%',
                      background: 'rgba(34,211,238,0.15)', color: '#0891b2',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '0.6rem', fontWeight: 900, flexShrink: 0, marginTop: 2,
                    }}>✓</span>
                    <div>
                      <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0a0a14', marginBottom: '0.15rem' }}>{item.mech}</div>
                      <div style={{ fontSize: '0.8rem', color: '#777790', lineHeight: 1.5 }}>{item.detail}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Key stat highlight */}
              <div style={{
                background: 'rgba(34,211,238,0.08)', borderRadius: 12,
                padding: '1rem 1.25rem', borderLeft: '3px solid #22d3ee',
              }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#22d3ee', letterSpacing: '-0.02em' }}>2×</div>
                <div style={{ fontSize: '0.8rem', color: '#0a0a14', fontWeight: 600, marginTop: '0.15rem' }}>Tendon healing speed vs untreated controls</div>
                <div style={{ fontSize: '0.75rem', color: '#9090a8', marginTop: '0.1rem' }}>University of Zagreb histological studies</div>
              </div>

              {/* Product link */}
              <div style={{ marginTop: '1.5rem' }}>
                <Link href="/products/bpc157-10mg" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  color: '#0891b2', fontWeight: 700, fontSize: '0.85rem',
                  textDecoration: 'none', borderBottom: '1.5px solid rgba(34,211,238,0.35)',
                  paddingBottom: '0.1rem',
                }}>
                  View BPC-157 Product <ArrowRight size={13} />
                </Link>
              </div>
            </div>

            {/* CENTER DIVIDER */}
            <div style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              justifyContent: 'center', padding: '2rem 0',
              background: '#ffffff', width: 56, gap: 12,
              borderLeft: '1px solid rgba(0,0,0,0.07)',
              borderRight: '1px solid rgba(0,0,0,0.07)',
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: '50%',
                background: 'linear-gradient(135deg, #22d3ee, #34d399)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#fff', fontSize: '1.1rem', fontWeight: 900,
                boxShadow: '0 4px 16px rgba(34,211,238,0.35)',
              }}>+</div>
              <div style={{
                writingMode: 'vertical-rl', textOrientation: 'mixed',
                transform: 'rotate(180deg)',
                fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em',
                textTransform: 'uppercase', color: '#c8c8d8',
              }}>
                Synergistic Stack
              </div>
            </div>

            {/* RIGHT — TB-500 */}
            <div
              style={{
                background: hoverTb ? '#e6fef5' : '#f0fff8',
                padding: '2.5rem 2.5rem 2rem',
                transition: 'background 0.25s',
                cursor: 'default',
              }}
              onMouseEnter={() => setHoverTb(true)}
              onMouseLeave={() => setHoverTb(false)}
            >
              {/* Compound name */}
              <div style={{ marginBottom: '1.5rem' }}>
                <span style={{
                  display: 'inline-block', padding: '0.25rem 0.75rem',
                  background: 'rgba(52,211,153,0.12)', color: '#059669',
                  borderRadius: 6, fontSize: '0.73rem', fontWeight: 700,
                  letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.6rem',
                }}>
                  Systemic Repair
                </span>
                <div style={{
                  fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900,
                  color: '#34d399', letterSpacing: '-0.04em', lineHeight: 1,
                }}>
                  TB-500
                </div>
                <div style={{ fontSize: '0.82rem', color: '#9090a8', marginTop: '0.3rem', fontWeight: 600 }}>
                  Thymosin Beta-4 Fragment · Synthetic Analogue
                </div>
              </div>

              {/* Key stat badges */}
              <div style={{ display: 'flex', gap: 8, marginBottom: '1.75rem', flexWrap: 'wrap' }}>
                {['43 amino acids', 'Thymic peptide', 'Systemic range'].map(s => (
                  <span key={s} style={{
                    padding: '0.25rem 0.6rem', borderRadius: 6,
                    background: 'rgba(52,211,153,0.1)', color: '#059669',
                    fontSize: '0.75rem', fontWeight: 600,
                    border: '1px solid rgba(52,211,153,0.2)',
                  }}>{s}</span>
                ))}
              </div>

              {/* Mechanisms */}
              <div style={{ marginBottom: '1.75rem' }}>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', color: '#9090a8', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                  Primary Mechanisms
                </div>
                {[
                  { mech: 'Actin sequestration', detail: 'Binds G-actin monomers, modulates cytoskeletal dynamics for rapid cell migration' },
                  { mech: 'Stem cell activation', detail: 'Mobilizes resident cardiac and skeletal muscle stem cell populations' },
                  { mech: 'Anti-apoptotic signaling', detail: 'ILK-mediated survival signaling prevents programmed death in stressed cells' },
                  { mech: 'Lymphangiogenesis', detail: 'Promotes lymphatic vessel formation for superior drainage of inflammatory mediators' },
                  { mech: 'Cardiac repair', detail: 'Directs cardiomyocyte migration toward infarcted tissue, restoring contractile function' },
                ].map(item => (
                  <div key={item.mech} style={{
                    display: 'flex', gap: 10, marginBottom: '0.85rem', alignItems: 'flex-start',
                  }}>
                    <span style={{
                      width: 18, height: 18, borderRadius: '50%',
                      background: 'rgba(52,211,153,0.15)', color: '#059669',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '0.6rem', fontWeight: 900, flexShrink: 0, marginTop: 2,
                    }}>✓</span>
                    <div>
                      <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0a0a14', marginBottom: '0.15rem' }}>{item.mech}</div>
                      <div style={{ fontSize: '0.8rem', color: '#777790', lineHeight: 1.5 }}>{item.detail}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Key stat highlight */}
              <div style={{
                background: 'rgba(52,211,153,0.08)', borderRadius: 12,
                padding: '1rem 1.25rem', borderLeft: '3px solid #34d399',
              }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#34d399', letterSpacing: '-0.02em' }}>Systemic</div>
                <div style={{ fontSize: '0.8rem', color: '#0a0a14', fontWeight: 600, marginTop: '0.15rem' }}>Whole-body cell migration and repair signaling</div>
                <div style={{ fontSize: '0.75rem', color: '#9090a8', marginTop: '0.1rem' }}>Circulating via bloodstream to all injury sites</div>
              </div>

              {/* Product link */}
              <div style={{ marginTop: '1.5rem' }}>
                <Link href="/products/tb500-10mg" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  color: '#059669', fontWeight: 700, fontSize: '0.85rem',
                  textDecoration: 'none', borderBottom: '1.5px solid rgba(52,211,153,0.35)',
                  paddingBottom: '0.1rem',
                }}>
                  View TB-500 Product <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div style={{
            background: 'linear-gradient(135deg, #0891b2 0%, #059669 100%)',
            padding: '1.25rem 2.5rem',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: '1rem', flexWrap: 'wrap',
          }}>
            <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)' }}>
              Together
            </span>
            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem' }}>·</span>
            <span style={{ color: '#fff', fontWeight: 700, fontSize: '0.92rem', textAlign: 'center' }}>
              Complete healing coverage: localized fibroblast repair + systemic cell migration + angiogenesis
            </span>
            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem' }}>·</span>
            <a href={AFFILIATE_BASE} target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: 5,
              background: 'rgba(255,255,255,0.15)', color: '#fff',
              padding: '0.4rem 1rem', borderRadius: 8, fontWeight: 700,
              fontSize: '0.82rem', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)',
              whiteSpace: 'nowrap',
            }}>
              Shop the Stack <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>

      {/* ── WEEK-BY-WEEK HEALING TIMELINE ── */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '4rem 2rem 0' }}>
        <div style={{ marginBottom: '2.5rem' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.12em',
            textTransform: 'uppercase', color: '#22d3ee', marginBottom: '0.75rem',
          }}>
            <span style={{ width: 20, height: 2, background: '#22d3ee', borderRadius: 2, display: 'inline-block' }} />
            Clinical Progression
          </div>
          <h2 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 900,
            color: '#0a0a14', letterSpacing: '-0.025em', lineHeight: 1.2,
            marginBottom: '0.5rem',
          }}>
            Week-by-Week Healing Timeline
          </h2>
          <p style={{ color: '#9090a8', fontSize: '0.92rem' }}>
            Mechanistic progression of BPC-157 + TB-500 combined protocol based on published study data
          </p>
        </div>

        {/* Timeline cards — 4-column grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
          {timeline.map((phase, idx) => (
            <TimelineCard key={phase.week} phase={phase} isLast={idx === timeline.length - 1} />
          ))}
        </div>

        {/* Connecting line visual */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 0,
          margin: '1.5rem 0 0', padding: '0 1rem',
        }}>
          {timeline.map((phase, idx) => (
            <div key={phase.week} style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
              <div style={{
                width: 10, height: 10, borderRadius: '50%',
                background: phase.color, flexShrink: 0,
                boxShadow: `0 0 0 3px ${phase.color}33`,
              }} />
              {idx < timeline.length - 1 && (
                <div style={{
                  flex: 1, height: 2,
                  background: `linear-gradient(90deg, ${phase.color}, ${timeline[idx + 1].color})`,
                  opacity: 0.4,
                }} />
              )}
            </div>
          ))}
        </div>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.25rem',
          marginTop: '0.5rem', paddingRight: '0.5rem',
        }}>
          {timeline.map(phase => (
            <div key={phase.week} style={{ fontSize: '0.72rem', fontWeight: 700, color: phase.color, letterSpacing: '0.04em' }}>
              {phase.week}
            </div>
          ))}
        </div>
      </div>

      {/* ── 4 BODY SYSTEMS — 2×2 GRID ── */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '4rem 2rem 0' }}>
        <div style={{ marginBottom: '2.5rem' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.12em',
            textTransform: 'uppercase', color: '#22d3ee', marginBottom: '0.75rem',
          }}>
            <span style={{ width: 20, height: 2, background: '#22d3ee', borderRadius: 2, display: 'inline-block' }} />
            System Coverage
          </div>
          <h2 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 900,
            color: '#0a0a14', letterSpacing: '-0.025em', lineHeight: 1.2,
            marginBottom: '0.5rem',
          }}>
            4 Body Systems. One Protocol.
          </h2>
          <p style={{ color: '#9090a8', fontSize: '0.92rem' }}>
            No other peptide combination addresses this breadth of tissue repair across human physiology
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
          {systems.map(s => <SystemCard key={s.system} system={s} />)}
        </div>
      </div>

      {/* ── PRODUCTS GRID ── */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '4rem 2rem 0' }}>
        <div style={{
          display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
          marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem',
        }}>
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.12em',
              textTransform: 'uppercase', color: '#22d3ee', marginBottom: '0.5rem',
            }}>
              <span style={{ width: 20, height: 2, background: '#22d3ee', borderRadius: 2, display: 'inline-block' }} />
              Recovery Catalog
            </div>
            <h2 style={{
              fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 900,
              color: '#0a0a14', letterSpacing: '-0.025em', margin: 0,
            }}>
              Shop Recovery Peptides
            </h2>
          </div>
          <a
            href={AFFILIATE_BASE}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '0.6rem 1.2rem',
              background: 'linear-gradient(135deg, #22d3ee, #0891b2)',
              color: '#fff', fontWeight: 700, fontSize: '0.88rem',
              borderRadius: 9, textDecoration: 'none',
            }}
          >
            Shop at Apollo <ExternalLink size={13} />
          </a>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1.25rem' }}>
          {catProducts.map(p => <ProductCard key={p.slug} product={p} />)}
        </div>
      </div>

      {/* ── CTA ── */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '3rem 2rem 5rem' }}>
        <div style={{
          background: 'linear-gradient(135deg, #0891b2 0%, #06b6d4 40%, #34d399 100%)',
          borderRadius: 24, padding: '3.5rem 2.5rem', textAlign: 'center',
          boxShadow: '0 20px 60px rgba(34,211,238,0.25)',
          position: 'relative', overflow: 'hidden',
        }}>
          {/* Decorative circles */}
          <div style={{
            position: 'absolute', top: -40, right: -40,
            width: 200, height: 200, borderRadius: '50%',
            background: 'rgba(255,255,255,0.07)',
          }} />
          <div style={{
            position: 'absolute', bottom: -60, left: -30,
            width: 280, height: 280, borderRadius: '50%',
            background: 'rgba(255,255,255,0.05)',
          }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)',
              color: '#fff', padding: '0.35rem 1rem', borderRadius: 999,
              fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.08em',
              textTransform: 'uppercase', marginBottom: '1.25rem',
            }}>
              🔬 Independently Lab-Tested · Premium Grade
            </div>

            <h2 style={{
              fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)', fontWeight: 900,
              color: '#fff', letterSpacing: '-0.025em', lineHeight: 1.15,
              marginBottom: '0.75rem',
            }}>
              Build Your Complete Recovery Stack
            </h2>
            <p style={{
              color: 'rgba(255,255,255,0.8)', marginBottom: '2rem',
              fontSize: '0.95rem', maxWidth: 520, margin: '0 auto 2rem',
            }}>
              BPC-157 and TB-500 sourced from Apollo Peptide Sciences — COA-verified,
              independently tested, fast domestic shipping.
            </p>
            <a
              href={AFFILIATE_BASE}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoverCta(true)}
              onMouseLeave={() => setHoverCta(false)}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '0.9rem 2.5rem',
                background: hoverCta ? 'rgba(255,255,255,0.97)' : '#fff',
                color: '#0891b2', fontWeight: 800, fontSize: '1rem',
                borderRadius: 12, textDecoration: 'none', letterSpacing: '0.02em',
                boxShadow: '0 4px 24px rgba(0,0,0,0.15)',
                transition: 'background 0.2s, transform 0.2s',
                transform: hoverCta ? 'translateY(-2px)' : 'translateY(0)',
              }}
            >
              Shop Apollo Peptide Sciences <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>

    </div>
  )
}

/* ── Sub-components ── */

function TimelineCard({ phase, isLast }: { phase: typeof timeline[0]; isLast: boolean }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 16, overflow: 'hidden',
        border: `1.5px solid ${hovered ? phase.color + '55' : 'rgba(0,0,0,0.07)'}`,
        background: '#fff',
        boxShadow: hovered ? `0 8px 32px ${phase.color}22` : '0 2px 12px rgba(0,0,0,0.04)',
        transition: 'border-color 0.2s, box-shadow 0.2s',
      }}
    >
      {/* Header */}
      <div style={{
        background: hovered ? phase.color : phase.bg,
        padding: '1rem 1.25rem',
        display: 'flex', alignItems: 'center', gap: '0.75rem',
        transition: 'background 0.2s',
        borderBottom: `1px solid ${phase.color}22`,
      }}>
        <span style={{
          fontSize: '1.6rem', fontWeight: 900,
          color: hovered ? 'rgba(255,255,255,0.25)' : phase.color,
          lineHeight: 1, transition: 'color 0.2s',
          fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.04em',
        }}>{phase.num}</span>
        <div>
          <div style={{
            fontSize: '0.73rem', fontWeight: 700, letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: hovered ? 'rgba(255,255,255,0.7)' : '#9090a8',
            transition: 'color 0.2s',
          }}>{phase.week}</div>
          <div style={{
            fontSize: '0.9rem', fontWeight: 800,
            color: hovered ? '#fff' : '#0a0a14',
            lineHeight: 1.2, marginTop: '0.1rem',
            transition: 'color 0.2s',
          }}>{phase.title}</div>
        </div>
      </div>

      {/* Points */}
      <div style={{ padding: '1.1rem 1.25rem' }}>
        {phase.points.map((point, i) => (
          <div key={i} style={{
            display: 'flex', gap: 8, alignItems: 'flex-start',
            marginBottom: i < phase.points.length - 1 ? '0.6rem' : 0,
          }}>
            <span style={{
              width: 5, height: 5, borderRadius: '50%',
              background: phase.color, flexShrink: 0, marginTop: '0.45rem',
            }} />
            <span style={{ fontSize: '0.82rem', color: '#555570', lineHeight: 1.55 }}>{point}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function SystemCard({ system }: { system: typeof systems[0] }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 18, padding: '1.75rem',
        background: hovered ? system.bg : '#fff',
        border: `1.5px solid ${hovered ? system.color + '44' : 'rgba(0,0,0,0.07)'}`,
        boxShadow: hovered ? `0 8px 32px ${system.color}18` : '0 2px 12px rgba(0,0,0,0.04)',
        transition: 'background 0.2s, border-color 0.2s, box-shadow 0.2s',
      }}
    >
      {/* Icon + system name row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
        <div style={{
          width: 56, height: 56, borderRadius: 14,
          background: system.bg, border: `2px solid ${system.color}33`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1.75rem', flexShrink: 0,
          transition: 'transform 0.2s',
          transform: hovered ? 'scale(1.1)' : 'scale(1)',
        }}>
          {system.icon}
        </div>
        <div>
          <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0a0a14', lineHeight: 1.2 }}>
            {system.system}
          </div>
          <div style={{
            display: 'inline-block', marginTop: '0.3rem',
            padding: '0.15rem 0.55rem', borderRadius: 6,
            background: system.color + '18', color: system.color,
            fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.06em',
          }}>
            {system.compound}
          </div>
        </div>
      </div>
      <p style={{ fontSize: '0.86rem', color: '#555570', lineHeight: 1.65, margin: 0 }}>
        {system.detail}
      </p>
    </div>
  )
}
