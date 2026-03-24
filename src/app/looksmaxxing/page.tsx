'use client'
import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, ExternalLink, CheckCircle, Sparkles, Zap, Activity, TrendingUp } from 'lucide-react'
import { AFFILIATE_BASE } from '@/lib/products'
import RelatedLinks from '@/components/RelatedLinks'

const pillars = [
  {
    icon: <Sparkles size={22} />,
    color: '#a78bfa',
    title: 'Skin & Facial Structure',
    compounds: ['GHK-Cu', 'SNAP-8', 'Epithalon'],
    description: 'GHK-Cu modulates 4,000+ genes to reset aging skin biology. SNAP-8 reduces expression wrinkles at the neuromuscular level — not just the surface. Epithalon restores telomere length for cellular longevity.',
    stat: '70%',
    statLabel: 'Wrinkle depth reduction in photoaged models',
    href: '/categories/skin-anti-aging',
    stackName: 'Aesthetic Starter Stack',
    stackHref: '/stacks/aesthetic-starter',
  },
  {
    icon: <Zap size={22} />,
    color: '#fb923c',
    title: 'Muscle & Body Composition',
    compounds: ['IGF-1 LR3', 'CJC-1295', 'Ipamorelin'],
    description: 'IGF-1 LR3 activates satellite cells for true muscle hyperplasia — new fiber creation, not just hypertrophy. CJC/Ipamorelin amplifies GH pulses 4–8× with zero cortisol spike.',
    stat: '4–8×',
    statLabel: 'GH pulse amplification vs baseline',
    href: '/categories/growth-body-comp',
    stackName: 'Body Recomposition Stack',
    stackHref: '/stacks/body-recomposition',
  },
  {
    icon: <TrendingUp size={22} />,
    color: '#d4a843',
    title: 'Fat Loss & Vascularity',
    compounds: ['Retatrutide', 'Tirzepatide', 'Semaglutide'],
    description: 'Retatrutide produced 24.2% body weight reduction in NEJM Phase 2 trials — the highest ever documented for a pharmacological fat loss compound. Triple receptor co-agonism redefines what is possible.',
    stat: '24.2%',
    statLabel: 'Body weight reduction — NEJM 2023',
    href: '/categories/metabolic-fat-loss',
    stackName: 'Metabolic Shred Stack',
    stackHref: '/stacks/metabolic-shred',
  },
  {
    icon: <Activity size={22} />,
    color: '#22d3ee',
    title: 'Recovery & Healing',
    compounds: ['BPC-157', 'TB-500'],
    description: 'Faster recovery between sessions means more consistent training stimulus. BPC-157 accelerates tendon, joint, and gut healing. TB-500 enhances systemic tissue repair and angiogenesis throughout the body.',
    stat: '2×',
    statLabel: 'Faster tendon healing vs control groups',
    href: '/categories/recovery-healing',
    stackName: 'Recovery & Repair Stack',
    stackHref: '/stacks/recovery-repair',
  },
]

const timelineSteps = [
  {
    range: 'Week 1–2',
    title: 'Foundation Established',
    body: 'Peptide serum levels stabilize. Sleep architecture improves as GH secretagogues sync with natural circadian pulsatility. Initial anti-inflammatory cascade begins.',
    color: '#a78bfa',
  },
  {
    range: 'Week 3–4',
    title: 'Visible Skin Changes',
    body: 'GHK-Cu collagen gene expression is measurable. Skin texture improvement becomes visible under lighting. GH pulse amplitude is now 4–8× above pre-protocol baseline.',
    color: '#fb923c',
  },
  {
    range: 'Week 6–8',
    title: 'Body Composition Shifts',
    body: 'Collagen synthesis rate is quantifiably elevated. Satellite cell activation drives lean mass accretion. Adipose tissue lipolysis accelerates — body fat distribution begins to change.',
    color: '#d4a843',
  },
  {
    range: 'Week 10–12',
    title: 'Full Compound Synergy',
    body: 'All target systems operating in concert. Measurable changes in facial skin quality, body composition, recovery speed, and subjective wellbeing. Full protocol results become apparent.',
    color: '#22d3ee',
  },
]

const eliteCompounds = [
  { name: 'Retatrutide', role: 'Triple-Receptor Fat Loss', color: '#d4a843' },
  { name: 'IGF-1 LR3', role: 'Muscle Hyperplasia', color: '#fb923c' },
  { name: 'GHK-Cu', role: 'Skin Gene Modulation', color: '#a78bfa' },
  { name: 'BPC-157', role: 'Systemic Recovery', color: '#22d3ee' },
  { name: 'Epithalon', role: 'Cellular Longevity', color: '#86efac' },
]

const protocols = [
  {
    name: 'The Aesthetic Starter Stack',
    level: 'Beginner',
    compounds: ['GHK-Cu', 'CJC-1295 + Ipamorelin'],
    goal: 'Skin quality + overnight GH optimization',
    color: '#a78bfa',
    injections: '5× / week',
    href: '/stacks/aesthetic-starter',
  },
  {
    name: 'The Body Recomposition Stack',
    level: 'Intermediate',
    compounds: ['IGF-1 LR3', 'CJC-1295 + Ipamorelin', 'BPC-157'],
    goal: 'Muscle hyperplasia + GH amplification + recovery',
    color: '#fb923c',
    injections: '7× / week',
    href: '/stacks/body-recomposition',
  },
  {
    name: 'The Elite Optimization Stack',
    level: 'Advanced',
    compounds: ['Retatrutide', 'IGF-1 LR3', 'GHK-Cu', 'BPC-157', 'Epithalon'],
    goal: 'Fat loss + growth + skin + recovery + longevity',
    color: '#d4a843',
    injections: '7–10× / week',
    href: '/stacks/elite-optimization',
  },
]

const stats = [
  { n: '4,000+', l: 'Genes Modulated', c: '#a78bfa', sub: 'GHK-Cu skin studies' },
  { n: '24.2%', l: 'Peak Fat Loss', c: '#d4a843', sub: 'Retatrutide NEJM 2023' },
  { n: '4–8×', l: 'GH Amplification', c: '#fb923c', sub: 'CJC-1295 / Ipamorelin' },
  { n: '120+', l: 'Recovery Studies', c: '#22d3ee', sub: 'BPC-157 literature base' },
]

const biologyPoints = [
  'Gene-level action — peptides modulate the precise genes responsible for collagen synthesis, GH secretion, and adipose metabolism',
  'Receptor-specific targeting — each compound binds exactly the pathway you intend to activate, with no off-target hormonal interference',
  'Decades of peer-reviewed evidence — not anecdotal claims, but randomized controlled trials and mechanistic studies',
  'True synergy when stacked — each compound layer amplifies the results of the others through complementary biological mechanisms',
]

export default function LooksMaxingPage() {
  const [hoveredPillar, setHoveredPillar] = useState<string | null>(null)
  const [hoveredProtocol, setHoveredProtocol] = useState<string | null>(null)

  return (
    <div style={{ background: '#ffffff', minHeight: '100vh', fontFamily: 'inherit' }}>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <div style={{
        position: 'relative',
        background: 'linear-gradient(165deg, #0c0a18 0%, #13101f 55%, #0a0e14 100%)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        padding: '6rem 2rem 5.5rem',
        overflow: 'hidden',
      }}>
        {/* Dot-grid background pattern */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: 'radial-gradient(circle, rgba(167,139,250,0.18) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)',
        }} />
        {/* Soft glow orb */}
        <div style={{
          position: 'absolute', top: '-120px', right: '-80px',
          width: 520, height: 520, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212,168,67,0.09) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
          <div style={{ maxWidth: 860 }}>
            {/* Small-caps eyebrow */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.18em',
              textTransform: 'uppercase', color: '#d4a843',
              marginBottom: '1.5rem',
            }}>
              <span style={{ display: 'inline-block', width: 28, height: 1, background: '#d4a843', opacity: 0.7 }} />
              The Science of Physical Optimization
              <span style={{ display: 'inline-block', width: 28, height: 1, background: '#d4a843', opacity: 0.7 }} />
            </div>

            <h1 style={{
              fontSize: 'clamp(2.6rem, 6vw, 4.5rem)',
              fontWeight: 900,
              lineHeight: 1.08,
              letterSpacing: '-0.04em',
              color: '#ffffff',
              marginBottom: '1.5rem',
            }}>
              The Complete<br />
              <span style={{
                background: 'linear-gradient(90deg, #d4a843 0%, #f5d07a 50%, #d4a843 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                LooksMaxing Peptide Guide
              </span>
            </h1>

            <p style={{
              fontSize: '1.2rem', color: 'rgba(255,255,255,0.65)',
              lineHeight: 1.85, marginBottom: '2.75rem', maxWidth: 680,
            }}>
              LooksMaxing has entered the lab. Elite practitioners use research peptides to optimize every axis of physical appearance — skin quality, facial definition, body composition, and cellular recovery — at the molecular level. This is the definitive protocol guide, grounded in peer-reviewed science.
            </p>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href={AFFILIATE_BASE} target="_blank" rel="nofollow noopener noreferrer" className="btn-primary">
                Shop All Compounds <ExternalLink size={14} />
              </a>
              <Link href="/stacks" className="btn-secondary">
                View Stacking Protocols <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── STAT BANNER ──────────────────────────────────────────── */}
      <div style={{
        background: '#fafafa',
        borderBottom: '1px solid rgba(0,0,0,0.07)',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
            {stats.map((s, i) => (
              <div key={s.l} style={{
                padding: '2rem 2.5rem',
                borderRight: i < stats.length - 1 ? '1px solid rgba(0,0,0,0.07)' : 'none',
                position: 'relative',
              }}>
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: 2,
                  background: `linear-gradient(90deg, ${s.c}, transparent)`,
                }} />
                <div style={{
                  fontSize: '2.4rem', fontWeight: 900, color: s.c,
                  letterSpacing: '-0.04em', lineHeight: 1, marginBottom: '0.4rem',
                }}>{s.n}</div>
                <div style={{ fontWeight: 700, color: '#0a0a14', fontSize: '0.875rem', marginBottom: '0.2rem' }}>{s.l}</div>
                <div style={{ fontSize: '0.78rem', color: '#9090a8', letterSpacing: '0.02em' }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>

        {/* ── 4 PILLARS ────────────────────────────────────────────── */}
        <section style={{ padding: '5rem 0' }}>
          <div style={{ marginBottom: '3.5rem' }}>
            <div className="section-label">The Four Pillars</div>
            <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '0.75rem' }}>
              Optimize Every Axis of Physical Appearance
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#666688', maxWidth: 560 }}>
              Each pillar targets a distinct biological system. Stack them for compounding, measurable results.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '1.5rem' }}>
            {pillars.map(p => (
              <div
                key={p.title}
                style={{
                  background: '#fff',
                  border: `1px solid ${hoveredPillar === p.title ? p.color + '40' : 'rgba(0,0,0,0.08)'}`,
                  borderRadius: 20,
                  padding: '2rem',
                  cursor: 'pointer',
                  transition: 'border-color 0.2s, box-shadow 0.2s',
                  boxShadow: hoveredPillar === p.title ? `0 8px 32px ${p.color}12` : '0 1px 4px rgba(0,0,0,0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                onMouseEnter={() => setHoveredPillar(p.title)}
                onMouseLeave={() => setHoveredPillar(null)}
              >
                <Link href={p.href} style={{ textDecoration: 'none', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{
                    width: 46, height: 46, borderRadius: 14,
                    background: `${p.color}12`, border: `1px solid ${p.color}25`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: p.color, marginBottom: '1.25rem', flexShrink: 0,
                  }}>
                    {p.icon}
                  </div>
                  <h3 style={{ fontWeight: 800, color: '#0a0a14', fontSize: '1.05rem', marginBottom: '0.6rem' }}>{p.title}</h3>
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: '0.875rem' }}>
                    {p.compounds.map(c => (
                      <span key={c} style={{
                        fontSize: '0.72rem', fontWeight: 700, color: p.color,
                        background: `${p.color}10`, border: `1px solid ${p.color}22`,
                        padding: '2px 9px', borderRadius: 100, letterSpacing: '0.03em',
                      }}>{c}</span>
                    ))}
                  </div>
                  <p style={{ fontSize: '0.92rem', color: '#555570', lineHeight: 1.7, marginBottom: '1.25rem', flex: 1 }}>
                    {p.description}
                  </p>
                  {/* Key stat */}
                  <div style={{
                    background: `${p.color}08`, border: `1px solid ${p.color}18`,
                    borderRadius: 12, padding: '0.875rem 1rem', marginBottom: '1rem',
                  }}>
                    <div style={{ fontSize: '1.8rem', fontWeight: 900, color: p.color, letterSpacing: '-0.04em', lineHeight: 1 }}>{p.stat}</div>
                    <div style={{ fontSize: '0.75rem', color: '#9090a8', marginTop: 3 }}>{p.statLabel}</div>
                  </div>
                </Link>

                {/* Stack recommendation */}
                <Link href={p.stackHref} style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  background: `${p.color}08`, border: `1px solid ${p.color}22`,
                  borderRadius: 10, padding: '0.625rem 0.875rem', textDecoration: 'none',
                  transition: 'background 0.15s',
                }}>
                  <div>
                    <div style={{ fontSize: '0.62rem', fontWeight: 700, color: p.color, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Recommended Stack</div>
                    <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0a0a14' }}>{p.stackName}</div>
                  </div>
                  <ArrowRight size={13} style={{ color: p.color, flexShrink: 0 }} />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* ── WHAT TO EXPECT TIMELINE ──────────────────────────────── */}
        <section style={{ padding: '4rem 0', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
          <div style={{ marginBottom: '3rem' }}>
            <div className="section-label">Protocol Timeline</div>
            <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '0.75rem' }}>
              What to Expect — Week by Week
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#666688', maxWidth: 540 }}>
              Peptide results are progressive, not overnight. Here is the biological sequence of what happens inside the body on a full protocol.
            </p>
          </div>

          {/* Timeline track */}
          <div style={{ position: 'relative' }}>
            {/* Horizontal connector line */}
            <div style={{
              position: 'absolute',
              top: 22,
              left: '3.5%',
              right: '3.5%',
              height: 2,
              background: 'linear-gradient(90deg, #a78bfa, #fb923c, #d4a843, #22d3ee)',
              borderRadius: 2,
              zIndex: 0,
            }} />

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1.5rem',
              position: 'relative',
              zIndex: 1,
            }}>
              {timelineSteps.map((step, i) => (
                <div key={step.range} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  {/* Dot + number */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1.25rem' }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: '50%',
                      background: '#ffffff',
                      border: `2.5px solid ${step.color}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontWeight: 900, fontSize: '1rem', color: step.color,
                      boxShadow: `0 0 0 4px ${step.color}14`,
                      flexShrink: 0,
                    }}>
                      {i + 1}
                    </div>
                  </div>

                  <div style={{
                    background: '#f9f9fd',
                    border: '1px solid rgba(0,0,0,0.08)',
                    borderRadius: 16,
                    padding: '1.5rem',
                    width: '100%',
                    borderTop: `3px solid ${step.color}`,
                  }}>
                    <div style={{
                      fontSize: '0.68rem', fontWeight: 800, color: step.color,
                      textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.4rem',
                    }}>
                      {step.range}
                    </div>
                    <h3 style={{ fontWeight: 800, color: '#0a0a14', fontSize: '0.97rem', marginBottom: '0.625rem' }}>
                      {step.title}
                    </h3>
                    <p style={{ fontSize: '0.875rem', color: '#555570', lineHeight: 1.7 }}>
                      {step.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ELITE STACK FEATURE ──────────────────────────────────── */}
        <section style={{ padding: '4rem 0', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
          <div style={{
            background: 'linear-gradient(135deg, #fffbee 0%, #fef9f0 50%, #fffdf7 100%)',
            border: '1px solid rgba(212,168,67,0.25)',
            borderRadius: 24,
            padding: '3.5rem',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Subtle background accent */}
            <div style={{
              position: 'absolute', bottom: -60, right: -60,
              width: 300, height: 300, borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(212,168,67,0.08) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 7,
                fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.14em',
                textTransform: 'uppercase', color: '#d4a843',
                background: 'rgba(212,168,67,0.1)', border: '1px solid rgba(212,168,67,0.2)',
                padding: '4px 12px', borderRadius: 100, marginBottom: '1.5rem',
              }}>
                Complete LooksMaxing Protocol
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '4rem', alignItems: 'center' }}>
                <div>
                  <h2 style={{
                    fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 900,
                    color: '#0a0a14', letterSpacing: '-0.03em', lineHeight: 1.15,
                    marginBottom: '1rem',
                  }}>
                    The Elite<br />
                    <span style={{ color: '#d4a843' }}>Optimization Stack</span>
                  </h2>
                  <p style={{ fontSize: '1rem', color: '#555570', lineHeight: 1.8, marginBottom: '2rem', maxWidth: 400 }}>
                    Five synergistic compounds targeting every pillar simultaneously — fat loss, lean mass, skin regeneration, recovery acceleration, and cellular longevity. The complete protocol for serious practitioners.
                  </p>
                  <Link href="/stacks/elite-optimization" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: 'linear-gradient(135deg, #d4a843, #e8c060)',
                    color: '#0a0a14', fontWeight: 800, fontSize: '0.92rem',
                    padding: '0.8rem 1.75rem', borderRadius: 50,
                    textDecoration: 'none', letterSpacing: '0.01em',
                  }}>
                    Full Protocol Details <ArrowRight size={14} />
                  </Link>
                </div>

                {/* Compound visual */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {eliteCompounds.map((compound, i) => (
                    <div key={compound.name} style={{
                      display: 'flex', alignItems: 'center', gap: '1rem',
                      background: 'rgba(255,255,255,0.7)',
                      border: `1px solid ${compound.color}28`,
                      borderRadius: 14, padding: '0.875rem 1.25rem',
                      backdropFilter: 'blur(4px)',
                    }}>
                      <div style={{
                        width: 32, height: 32, borderRadius: '50%',
                        background: `${compound.color}15`,
                        border: `1.5px solid ${compound.color}40`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontWeight: 900, fontSize: '0.75rem', color: compound.color, flexShrink: 0,
                      }}>
                        {i + 1}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 800, color: '#0a0a14', fontSize: '0.925rem' }}>{compound.name}</div>
                        <div style={{ fontSize: '0.75rem', color: '#888', marginTop: 1 }}>{compound.role}</div>
                      </div>
                      <div style={{
                        width: 8, height: 8, borderRadius: '50%', background: compound.color, flexShrink: 0,
                      }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY THIS WORKS: THE BIOLOGY ──────────────────────────── */}
        <section style={{ padding: '4rem 0', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label" style={{ marginBottom: '0.75rem' }}>Why Peptides for LooksMaxing</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '3rem' }}>
            The Biology Behind the Results
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>
            {/* Left — editorial blockquote */}
            <div>
              <blockquote style={{
                margin: 0,
                padding: '2.5rem',
                background: 'linear-gradient(135deg, #0c0a18, #13101f)',
                borderRadius: 20,
                borderLeft: '4px solid #d4a843',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute', top: -20, right: -20,
                  width: 140, height: 140, borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(167,139,250,0.08) 0%, transparent 70%)',
                  pointerEvents: 'none',
                }} />
                <div style={{
                  fontSize: '3.5rem', lineHeight: 1, color: '#d4a843', fontWeight: 900,
                  opacity: 0.4, marginBottom: '-0.5rem', fontFamily: 'Georgia, serif',
                }}>"</div>
                <p style={{
                  fontSize: '1.15rem', color: 'rgba(255,255,255,0.88)',
                  lineHeight: 1.8, fontStyle: 'italic', margin: '0 0 1.5rem',
                  position: 'relative',
                }}>
                  Surface-level approaches treat symptoms. Peptides address the biological root causes of suboptimal appearance — declining collagen production, suppressed GH output, excess adiposity, and impaired cellular repair.
                </p>
                <div style={{
                  fontSize: '0.72rem', fontWeight: 700, color: '#d4a843',
                  textTransform: 'uppercase', letterSpacing: '0.12em',
                }}>
                  Core Principle — Biology, Not Aesthetics
                </div>
              </blockquote>

              <div style={{ marginTop: '1.75rem', padding: '1.5rem', background: '#f9f9fd', border: '1px solid rgba(0,0,0,0.07)', borderRadius: 16 }}>
                <p style={{ fontSize: '0.95rem', color: '#555570', lineHeight: 1.75, margin: 0 }}>
                  Every compound in these protocols was selected for documented, mechanistic evidence — not anecdote. The result is a system where each biological lever you pull amplifies the others, creating compounding returns that no single intervention can produce alone.
                </p>
              </div>
            </div>

            {/* Right — bullet list */}
            <div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {biologyPoints.map((pt, i) => (
                  <div key={i} style={{
                    display: 'flex', gap: '1rem', alignItems: 'flex-start',
                    padding: '1.25rem 1.5rem',
                    background: '#f9f9fd',
                    border: '1px solid rgba(0,0,0,0.07)',
                    borderRadius: 14,
                  }}>
                    <CheckCircle size={18} style={{ color: '#d4a843', flexShrink: 0, marginTop: 2 }} />
                    <span style={{ fontSize: '0.95rem', color: '#444458', lineHeight: 1.7 }}>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── PROTOCOLS ────────────────────────────────────────────── */}
        <section style={{ padding: '4rem 0', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div className="section-label">Stacking Protocols</div>
              <h2 className="heading-lg" style={{ color: '#0a0a14' }}>Evidence-Backed Stacks by Goal</h2>
            </div>
            <Link href="/stacks" className="btn-secondary" style={{ fontSize: '0.95rem' }}>
              View All Stacks <ArrowRight size={13} />
            </Link>
          </div>

          {/* Table header */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '2fr 2fr 2.5fr 1fr 80px',
            gap: '1rem',
            padding: '0.5rem 1.75rem',
            marginBottom: '0.5rem',
          }}>
            {['Protocol', 'Level', 'Goal', 'Time Investment', ''].map(h => (
              <div key={h} style={{
                fontSize: '0.65rem', fontWeight: 800, color: '#9090a8',
                textTransform: 'uppercase', letterSpacing: '0.1em',
              }}>{h}</div>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
            {protocols.map(p => (
              <div
                key={p.name}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '2fr 2fr 2.5fr 1fr 80px',
                  gap: '1rem',
                  alignItems: 'center',
                  padding: '1.5rem 1.75rem',
                  background: hoveredProtocol === p.name ? `${p.color}06` : '#f9f9fd',
                  border: `1px solid ${hoveredProtocol === p.name ? p.color + '30' : 'rgba(0,0,0,0.08)'}`,
                  borderRadius: 18,
                  transition: 'all 0.2s',
                  cursor: 'default',
                }}
                onMouseEnter={() => setHoveredProtocol(p.name)}
                onMouseLeave={() => setHoveredProtocol(null)}
              >
                {/* Name */}
                <div>
                  <div style={{ fontWeight: 800, color: '#0a0a14', fontSize: '0.97rem' }}>{p.name}</div>
                  <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap', marginTop: '0.5rem' }}>
                    {p.compounds.map(c => (
                      <span key={c} style={{
                        fontSize: '0.68rem', fontWeight: 600, color: '#555570',
                        background: '#ffffff', border: '1px solid rgba(0,0,0,0.1)',
                        padding: '2px 8px', borderRadius: 100,
                      }}>{c}</span>
                    ))}
                  </div>
                </div>
                {/* Level */}
                <div style={{
                  display: 'inline-flex', alignItems: 'center', width: 'fit-content',
                  fontSize: '0.7rem', fontWeight: 700, color: p.color,
                  background: `${p.color}12`, border: `1px solid ${p.color}25`,
                  padding: '4px 10px', borderRadius: 100, textTransform: 'uppercase', letterSpacing: '0.08em',
                }}>{p.level}</div>
                {/* Goal */}
                <div style={{ fontSize: '0.875rem', color: '#555570', lineHeight: 1.5 }}>{p.goal}</div>
                {/* Time investment */}
                <div>
                  <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#9090a8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 2 }}>Injections</div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#0a0a14' }}>{p.injections}</div>
                </div>
                {/* Link */}
                <Link href={p.href} style={{
                  display: 'flex', alignItems: 'center', gap: 4,
                  fontSize: '0.82rem', fontWeight: 700, color: p.color, textDecoration: 'none',
                  whiteSpace: 'nowrap',
                }}>
                  Protocol <ArrowRight size={12} />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Internal links */}
        <section style={{ padding: '0 0 1rem' }}>
          <RelatedLinks currentPath="/looksmaxxing" />
        </section>

        {/* ── CTA ──────────────────────────────────────────────────── */}
        <section style={{ padding: '2rem 0 5.5rem' }}>
          <div style={{
            background: 'linear-gradient(135deg, #0c0a18 0%, #13101f 100%)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: 24,
            padding: '4rem 3.5rem',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', inset: 0, pointerEvents: 'none',
              backgroundImage: 'radial-gradient(circle, rgba(212,168,67,0.12) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
              maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black 0%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black 0%, transparent 100%)',
            }} />

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 7,
                fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.14em',
                textTransform: 'uppercase', color: '#d4a843',
                background: 'rgba(212,168,67,0.1)', border: '1px solid rgba(212,168,67,0.2)',
                padding: '4px 12px', borderRadius: 100, marginBottom: '1.5rem',
              }}>
                Get Started Today
              </div>
              <h2 style={{
                fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 900, color: '#ffffff',
                letterSpacing: '-0.03em', marginBottom: '0.875rem',
              }}>
                Source Every Compound from our supplier
              </h2>
              <p style={{
                color: 'rgba(255,255,255,0.6)', marginBottom: '2.25rem',
                fontSize: '1rem', maxWidth: 540, margin: '0 auto 2.25rem',
                lineHeight: 1.75,
              }}>
                Every peptide in this guide is available — independently tested, pharmaceutical-grade, with CoA documentation on every order. The most complete research peptide catalog available.
              </p>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href={AFFILIATE_BASE} target="_blank" rel="nofollow noopener noreferrer" className="btn-primary" style={{ fontSize: '1rem', padding: '0.9rem 2.5rem' }}>
                  Shop Now <ExternalLink size={15} />
                </a>
                <Link href="/stacks" className="btn-secondary" style={{ fontSize: '1rem', padding: '0.9rem 2rem' }}>
                  Compare All Stacks <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
