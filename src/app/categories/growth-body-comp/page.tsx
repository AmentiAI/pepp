'use client'
import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'
import ProductCard from '@/components/ProductCard'
import RelatedLinks from '@/components/RelatedLinks'
import { products, AFFILIATE_BASE } from '@/lib/products'

const catProducts = products.filter(p => p.categorySlug === 'growth-body-comp')

const compounds = [
  {
    name: 'CJC-1295',
    receptor: 'GHRH-R (Growth Hormone Releasing Hormone Receptor)',
    stat: '4–8× GH pulse amplitude',
    color: '#60a5fa',
    borderColor: 'rgba(96,165,250,0.35)',
    bg: 'rgba(96,165,250,0.06)',
    slug: 'cjc1295-ipamorelin',
    body: 'CJC-1295 is a synthetic analog of GHRH that binds and activates pituitary somatotroph cells via the cAMP/PKA signaling cascade. Its DAC (Drug Affinity Complex) modification extends half-life to 7–10 days, producing sustained baseline GH elevation without disrupting natural pulsatility. Clinical studies demonstrate 4–8× amplification of mean GH pulse amplitude and dose-dependent increases in IGF-1 serum levels over 28-day protocols.',
  },
  {
    name: 'Ipamorelin',
    receptor: 'GHSR-1a (Growth Hormone Secretagogue Receptor)',
    stat: 'Selective: zero cortisol / prolactin',
    color: '#a78bfa',
    borderColor: 'rgba(167,139,250,0.35)',
    bg: 'rgba(167,139,250,0.06)',
    slug: 'cjc1295-ipamorelin',
    body: 'Ipamorelin is a pentapeptide ghrelin mimetic acting exclusively at GHSR-1a to trigger calcium-mediated GH exocytosis from pituitary somatotrophs. Unlike older secretagogues (GHRP-2, GHRP-6), it produces no measurable elevation in cortisol, prolactin, or ACTH — making it the most selective GH pulse driver identified. Paired with CJC-1295 it exploits both GHRH-R and GHSR-1a simultaneously for synergistic, supra-physiological GH output.',
  },
  {
    name: 'IGF-1 LR3',
    receptor: 'IGF1R (Type 1 IGF Receptor)',
    stat: '~3× potency vs native IGF-1',
    color: '#d4a843',
    borderColor: 'rgba(212,168,67,0.35)',
    bg: 'rgba(212,168,67,0.06)',
    slug: 'igf-1lr3',
    body: 'IGF-1 LR3 is a long-acting recombinant IGF-1 analog with a 13-amino-acid N-terminal extension that blocks IGF Binding Protein sequestration — elevating bioavailability ~3× vs native IGF-1 and extending half-life to 20–30 hours. It activates PI3K/Akt/mTOR and Ras/MAPK pathways to drive muscle satellite cell proliferation and differentiation, producing genuine myofiber hyperplasia (new fiber creation) rather than hypertrophy alone. Post-workout injection routes the anabolic signal directly to recently stressed tissue.',
  },
]

const trainingSchedule = {
  training: [
    { time: 'Morning (fasted)', entries: [] as { compound: string; dose: string; color: string }[], note: 'Low GH baseline — no injection needed' },
    { time: 'Pre-Workout', entries: [{ compound: 'CJC-1295 + Ipamorelin', dose: '100mcg / 100mcg', color: '#60a5fa' }], note: 'Optional — prime GH axis pre-session' },
    { time: 'Post-Workout', entries: [{ compound: 'IGF-1 LR3', dose: '150mcg', color: '#d4a843' }], note: 'Peak muscle uptake window — critical timing' },
    { time: 'Pre-Sleep', entries: [{ compound: 'CJC-1295 + Ipamorelin', dose: '100mcg / 100mcg', color: '#a78bfa' }], note: 'Amplifies natural GH surge during slow-wave sleep' },
  ],
  rest: [
    { time: 'Morning', entries: [] as { compound: string; dose: string; color: string }[], note: 'Skip — no anabolic demand signal' },
    { time: 'Afternoon', entries: [] as { compound: string; dose: string; color: string }[], note: 'Skip' },
    { time: 'Pre-Sleep', entries: [{ compound: 'CJC-1295 + Ipamorelin', dose: '100mcg / 100mcg', color: '#a78bfa' }], note: 'Sustain GH axis during recovery and tissue remodeling' },
    { time: '', entries: [] as { compound: string; dose: string; color: string }[], note: '' },
  ],
}

export default function GrowthPage() {
  const [hoverCompound, setHoverCompound] = useState<string | null>(null)

  return (
    <div style={{ background: '#ffffff', minHeight: '100vh' }}>

      {/* ── HERO ── */}
      <div style={{ background: 'linear-gradient(160deg, #fffaf0 0%, #fff7ed 50%, #ffffff 100%)', borderBottom: '1px solid rgba(0,0,0,0.07)', padding: '5rem 2rem 4rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '3rem', flexWrap: 'wrap' }}>

            {/* Left: headline */}
            <div style={{ flex: '1 1 420px', minWidth: 0 }}>
              <div className="section-label" style={{ color: '#fb923c' }}>
                <span style={{ background: '#fb923c' }}></span>
                Growth &amp; Body Composition Protocol
              </div>
              <h1 className="heading-xl" style={{ color: '#0a0a14', marginBottom: '1.25rem' }}>
                The IGF-1 LR3 &amp;<br />
                <span style={{ color: '#fb923c', WebkitTextFillColor: '#fb923c' }}>CJC-1295 / Ipamorelin</span>
                <br />Performance Blueprint
              </h1>
              <p style={{ fontSize: '1.1rem', color: '#555570', lineHeight: 1.75, marginBottom: '2rem', maxWidth: 560 }}>
                The most mechanistically documented anabolic peptide stack — dual-receptor GH amplification via CJC-1295/Ipamorelin driving{' '}
                <strong style={{ color: '#0a0a14' }}>4–8× pulse output</strong>, followed by IGF-1 LR3 converting that signal into{' '}
                <strong style={{ color: '#fb923c' }}>genuine myofiber hyperplasia</strong> and accelerated lipolysis. Zero cortisol elevation. Maximum tissue remodeling.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <a href={AFFILIATE_BASE} target="_blank" rel="sponsored noopener noreferrer" className="btn-primary"
                  style={{ background: 'linear-gradient(135deg, #fb923c, #ea580c)' }}>
                  Shop Growth Stack <ExternalLink size={14} />
                </a>
                <Link href="/products" className="btn-secondary">
                  All Compounds <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Right: At a Glance pill box */}
            <div style={{ flex: '0 0 auto', minWidth: 220 }}>
              <div style={{
                background: 'rgba(255,255,255,0.85)',
                border: '1.5px solid rgba(251,146,60,0.25)',
                borderRadius: 18,
                padding: '1.75rem 1.5rem',
                backdropFilter: 'blur(8px)',
                boxShadow: '0 4px 32px rgba(251,146,60,0.08)',
              }}>
                <div style={{ fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#fb923c', marginBottom: '1.1rem' }}>
                  At a Glance
                </div>
                {[
                  { value: '4–8×', label: 'GH Amplification', sub: 'CJC-1295 + Ipamorelin' },
                  { value: '~3×', label: 'IGF-1 LR3 Potency', sub: 'vs native IGF-1' },
                  { value: '0', label: 'Cortisol Elevation', sub: 'Ipamorelin selectivity' },
                ].map((s, i) => (
                  <div key={s.value} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.9rem',
                    padding: '0.75rem 1rem',
                    background: i % 2 === 0 ? 'rgba(251,146,60,0.06)' : 'transparent',
                    borderRadius: 10,
                    marginBottom: i < 2 ? '0.4rem' : 0,
                  }}>
                    <div style={{ fontSize: '1.55rem', fontWeight: 900, color: '#fb923c', letterSpacing: '-0.03em', lineHeight: 1, minWidth: 48, textAlign: 'center' }}>
                      {s.value}
                    </div>
                    <div>
                      <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0a0a14', lineHeight: 1.2 }}>{s.label}</div>
                      <div style={{ fontSize: '0.7rem', color: '#9090a8', marginTop: 2 }}>{s.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>

        {/* ── GH CASCADE DIAGRAM ── */}
        <section style={{ padding: '4rem 0 3rem' }}>
          <div className="section-label" style={{ color: '#fb923c' }}>Mechanism of Action</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '0.5rem' }}>The GH Cascade: How the Stack Works</h2>
          <p style={{ color: '#555570', fontSize: '1rem', marginBottom: '3rem', maxWidth: 580 }}>
            CJC-1295 and Ipamorelin attack the pituitary through two independent receptor pathways simultaneously — producing a synergistic GH output no single agent can match.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>

            {/* Row 1: Dual input boxes */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <div style={{
                background: 'rgba(96,165,250,0.07)',
                border: '2px solid rgba(96,165,250,0.4)',
                borderRadius: 14,
                padding: '1.25rem 1.75rem',
                textAlign: 'center',
                minWidth: 180,
              }}>
                <div style={{ fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#60a5fa', marginBottom: 6 }}>GHRH Receptor</div>
                <div style={{ fontSize: '1.15rem', fontWeight: 900, color: '#1e3a5f' }}>CJC-1295</div>
                <div style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: 4 }}>cAMP / PKA pathway</div>
              </div>
              <div style={{
                padding: '0.35rem 0.85rem',
                background: 'rgba(251,146,60,0.12)',
                border: '1px solid rgba(251,146,60,0.3)',
                borderRadius: 20,
                fontSize: '0.7rem',
                fontWeight: 800,
                color: '#fb923c',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
              }}>
                Dual Signal
              </div>
              <div style={{
                background: 'rgba(167,139,250,0.07)',
                border: '2px solid rgba(167,139,250,0.4)',
                borderRadius: 14,
                padding: '1.25rem 1.75rem',
                textAlign: 'center',
                minWidth: 180,
              }}>
                <div style={{ fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#a78bfa', marginBottom: 6 }}>GHSR-1a Receptor</div>
                <div style={{ fontSize: '1.15rem', fontWeight: 900, color: '#2e1065' }}>Ipamorelin</div>
                <div style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: 4 }}>Ca²⁺-mediated exocytosis</div>
              </div>
            </div>

            {/* Arrow 1 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0.25rem 0' }}>
              <div style={{ width: 2, height: 28, background: 'linear-gradient(180deg, rgba(251,146,60,0.4), rgba(251,146,60,0.8))' }} />
              <div style={{ width: 0, height: 0, borderLeft: '8px solid transparent', borderRight: '8px solid transparent', borderTop: '10px solid #fb923c' }} />
            </div>

            {/* Row 2: Pituitary */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(251,146,60,0.1), rgba(251,146,60,0.04))',
              border: '2px solid rgba(251,146,60,0.45)',
              borderRadius: 14,
              padding: '1.25rem 2.5rem',
              textAlign: 'center',
              minWidth: 260,
            }}>
              <div style={{ fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#fb923c', marginBottom: 6 }}>Amplified GH Pulse</div>
              <div style={{ fontSize: '1.2rem', fontWeight: 900, color: '#0a0a14' }}>Pituitary Gland</div>
              <div style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: 4 }}>Somatotroph cells release 4–8× GH output</div>
            </div>

            {/* Arrow 2 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0.25rem 0' }}>
              <div style={{ width: 2, height: 28, background: 'linear-gradient(180deg, rgba(251,146,60,0.8), rgba(212,168,67,0.8))' }} />
              <div style={{ width: 0, height: 0, borderLeft: '8px solid transparent', borderRight: '8px solid transparent', borderTop: '10px solid #d4a843' }} />
            </div>

            {/* Row 3: Liver */}
            <div style={{
              background: 'rgba(212,168,67,0.07)',
              border: '2px solid rgba(212,168,67,0.45)',
              borderRadius: 14,
              padding: '1.25rem 2.5rem',
              textAlign: 'center',
              minWidth: 260,
            }}>
              <div style={{ fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#d4a843', marginBottom: 6 }}>IGF-1 Synthesis</div>
              <div style={{ fontSize: '1.2rem', fontWeight: 900, color: '#0a0a14' }}>Liver + Peripheral Tissue</div>
              <div style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: 4 }}>GH receptor activation → hepatic IGF-1 production</div>
            </div>

            {/* Split arrow */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0.25rem 0' }}>
              <div style={{ width: 2, height: 20, background: 'rgba(212,168,67,0.7)' }} />
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ width: 2, height: 20, background: 'rgba(212,168,67,0.5)' }} />
                  <div style={{ width: 0, height: 0, borderLeft: '8px solid transparent', borderRight: '8px solid transparent', borderTop: '10px solid #d4a843' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ width: 2, height: 20, background: 'rgba(212,168,67,0.5)' }} />
                  <div style={{ width: 0, height: 0, borderLeft: '8px solid transparent', borderRight: '8px solid transparent', borderTop: '10px solid #d4a843' }} />
                </div>
              </div>
            </div>

            {/* Row 4: Dual outputs */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <div style={{
                background: 'rgba(34,197,94,0.06)',
                border: '2px solid rgba(34,197,94,0.35)',
                borderRadius: 14,
                padding: '1.25rem 1.5rem',
                textAlign: 'center',
                minWidth: 200,
                maxWidth: 240,
              }}>
                <div style={{ fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#16a34a', marginBottom: 6 }}>Hyperplasia via IGF-1 LR3</div>
                <div style={{ fontSize: '1rem', fontWeight: 900, color: '#0a0a14' }}>Muscle Satellite Cells</div>
                <div style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: 4 }}>PI3K/Akt/mTOR → new myofiber differentiation</div>
              </div>
              <div style={{
                background: 'rgba(251,146,60,0.06)',
                border: '2px solid rgba(251,146,60,0.35)',
                borderRadius: 14,
                padding: '1.25rem 1.5rem',
                textAlign: 'center',
                minWidth: 200,
                maxWidth: 240,
              }}>
                <div style={{ fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#fb923c', marginBottom: 6 }}>Lipolysis</div>
                <div style={{ fontSize: '1rem', fontWeight: 900, color: '#0a0a14' }}>Adipocytes (Fat Cells)</div>
                <div style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: 4 }}>HSL activation → free fatty acid mobilization</div>
              </div>
            </div>

          </div>
        </section>

        {/* ── TRAINING DAY PROTOCOL ── */}
        <section style={{ padding: '3rem 0', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label" style={{ color: '#fb923c' }}>Injection Timing Protocol</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '0.5rem' }}>Training Day Protocol</h2>
          <p style={{ color: '#555570', fontSize: '1rem', marginBottom: '2.5rem', maxWidth: 560 }}>
            Peptide timing is not optional — post-workout IGF-1 LR3 injection capitalizes on the acute satellite cell activation window. Pre-sleep CJC/Ipa exploits slow-wave GH surge.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>

            {/* Training Day */}
            <div style={{ background: '#f7f8fc', border: '1.5px solid rgba(251,146,60,0.2)', borderRadius: 18, overflow: 'hidden' }}>
              <div style={{ padding: '1.1rem 1.5rem', background: 'linear-gradient(135deg, rgba(251,146,60,0.12), rgba(251,146,60,0.04))', borderBottom: '1px solid rgba(251,146,60,0.15)', display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#fb923c' }} />
                <span style={{ fontWeight: 800, fontSize: '0.95rem', color: '#0a0a14', letterSpacing: '0.02em' }}>Training Day</span>
              </div>
              <div style={{ padding: '0.5rem 0' }}>
                {trainingSchedule.training.map((slot, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '0.9rem 1.5rem', borderBottom: i < trainingSchedule.training.length - 1 ? '1px solid rgba(0,0,0,0.05)' : 'none' }}>
                    <div style={{ minWidth: 110, fontSize: '0.72rem', fontWeight: 700, color: '#9090a8', textTransform: 'uppercase', letterSpacing: '0.07em', paddingTop: slot.entries.length > 0 ? 4 : 2 }}>
                      {slot.time}
                    </div>
                    <div style={{ flex: 1 }}>
                      {slot.entries.length > 0 ? (
                        slot.entries.map((e, j) => (
                          <div key={j} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                            <span style={{ fontSize: '0.82rem', fontWeight: 800, color: e.color }}>{e.compound}</span>
                            <span style={{ fontSize: '0.72rem', fontWeight: 700, background: `rgba(${e.color === '#d4a843' ? '212,168,67' : e.color === '#60a5fa' ? '96,165,250' : '167,139,250'},0.15)`, color: e.color, borderRadius: 6, padding: '2px 8px' }}>{e.dose}</span>
                          </div>
                        ))
                      ) : null}
                      <div style={{ fontSize: '0.75rem', color: '#9090a8', marginTop: slot.entries.length > 0 ? 2 : 0, fontStyle: slot.entries.length === 0 ? 'italic' : 'normal' }}>{slot.note}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Rest Day */}
            <div style={{ background: '#f7f8fc', border: '1.5px solid rgba(167,139,250,0.2)', borderRadius: 18, overflow: 'hidden' }}>
              <div style={{ padding: '1.1rem 1.5rem', background: 'linear-gradient(135deg, rgba(167,139,250,0.1), rgba(167,139,250,0.03))', borderBottom: '1px solid rgba(167,139,250,0.15)', display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#a78bfa' }} />
                <span style={{ fontWeight: 800, fontSize: '0.95rem', color: '#0a0a14', letterSpacing: '0.02em' }}>Rest Day</span>
              </div>
              <div style={{ padding: '0.5rem 0' }}>
                {trainingSchedule.rest.map((slot, i) => (
                  slot.time === '' ? null : (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '0.9rem 1.5rem', borderBottom: i < trainingSchedule.rest.length - 2 ? '1px solid rgba(0,0,0,0.05)' : 'none' }}>
                      <div style={{ minWidth: 110, fontSize: '0.72rem', fontWeight: 700, color: '#9090a8', textTransform: 'uppercase', letterSpacing: '0.07em', paddingTop: slot.entries.length > 0 ? 4 : 2 }}>
                        {slot.time}
                      </div>
                      <div style={{ flex: 1 }}>
                        {slot.entries.length > 0 ? (
                          slot.entries.map((e, j) => (
                            <div key={j} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                              <span style={{ fontSize: '0.82rem', fontWeight: 800, color: e.color }}>{e.compound}</span>
                              <span style={{ fontSize: '0.72rem', fontWeight: 700, background: 'rgba(167,139,250,0.15)', color: e.color, borderRadius: 6, padding: '2px 8px' }}>{e.dose}</span>
                            </div>
                          ))
                        ) : null}
                        <div style={{ fontSize: '0.75rem', color: '#9090a8', marginTop: slot.entries.length > 0 ? 2 : 0, fontStyle: slot.entries.length === 0 ? 'italic' : 'normal' }}>{slot.note}</div>
                      </div>
                    </div>
                  )
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ── WHY EACH COMPOUND ── */}
        <section style={{ padding: '3rem 0', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label" style={{ color: '#fb923c' }}>Compound Deep-Dive</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '0.5rem' }}>Why Each Compound</h2>
          <p style={{ color: '#555570', fontSize: '1rem', marginBottom: '2.5rem', maxWidth: 560 }}>
            Each agent in this stack is mechanistically irreplaceable — they operate on distinct receptors and downstream pathways with zero redundancy.
          </p>

          <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
            {compounds.map(c => (
              <div
                key={c.name}
                style={{
                  flex: '1 1 260px',
                  background: hoverCompound === c.name ? c.bg : '#f7f8fc',
                  border: `2px solid ${hoverCompound === c.name ? c.borderColor : 'rgba(0,0,0,0.07)'}`,
                  borderRadius: 18,
                  padding: '2rem 1.75rem',
                  cursor: 'default',
                  transition: 'background 0.2s, border-color 0.2s',
                }}
                onMouseEnter={() => setHoverCompound(c.name)}
                onMouseLeave={() => setHoverCompound(null)}
              >
                <div style={{ fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: c.color, marginBottom: 10 }}>
                  {c.receptor}
                </div>
                <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#0a0a14', letterSpacing: '-0.02em', marginBottom: 8, lineHeight: 1.1 }}>
                  {c.name}
                </div>
                <div style={{
                  display: 'inline-block',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  color: c.color,
                  background: c.bg,
                  border: `1px solid ${c.borderColor}`,
                  borderRadius: 8,
                  padding: '4px 12px',
                  marginBottom: 16,
                  letterSpacing: '0.03em',
                }}>
                  {c.stat}
                </div>
                <p style={{ fontSize: '0.85rem', color: '#555570', lineHeight: 1.7, margin: 0 }}>
                  {c.body}
                </p>
                <Link href={`/products/${c.slug}`}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: '1.25rem', fontSize: '0.8rem', fontWeight: 700, color: c.color, textDecoration: 'none' }}
                  onMouseEnter={e => (e.currentTarget.style.textDecoration = 'underline')}
                  onMouseLeave={e => (e.currentTarget.style.textDecoration = 'none')}
                >
                  View product <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* ── PRODUCT CARDS ── */}
        <section style={{ padding: '3rem 0', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div className="section-label" style={{ color: '#fb923c' }}>Growth Catalog</div>
              <h2 className="heading-lg" style={{ color: '#0a0a14' }}>Shop Growth Peptides</h2>
            </div>
            <a href={AFFILIATE_BASE} target="_blank" rel="sponsored noopener noreferrer" className="btn-primary"
              style={{ background: 'linear-gradient(135deg, #fb923c, #ea580c)', fontSize: '1.05rem', padding: '0.65rem 1.2rem' }}>
              Shop Now <ExternalLink size={13} />
            </a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1.25rem' }}>
            {catProducts.map(p => <ProductCard key={p.slug} product={p} />)}
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ padding: '2rem 0 5rem' }}>
          <div style={{
            background: 'linear-gradient(135deg, #fb923c 0%, #ea580c 55%, #c2410c 100%)',
            borderRadius: 22,
            padding: '3.5rem 3rem',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 70% 30%, rgba(255,255,255,0.12) 0%, transparent 60%)', pointerEvents: 'none' }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.75)', marginBottom: 12 }}>
                Research-Grade · Third-Party Tested
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 900, color: '#ffffff', marginBottom: '0.75rem', lineHeight: 1.2 }}>
                Source Your Complete Growth Stack
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '2rem', fontSize: '1rem', maxWidth: 520, margin: '0 auto 2rem' }}>
                IGF-1 LR3, CJC-1295, and Ipamorelin from our supplier — certificate of analysis on every batch, pharmaceutical-grade synthesis, discreet fast shipping.
              </p>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href={AFFILIATE_BASE} target="_blank" rel="sponsored noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '0.9rem 2.25rem', background: '#ffffff', color: '#ea580c', fontWeight: 800, fontSize: '1rem', borderRadius: 10, textDecoration: 'none', transition: 'opacity 0.15s' }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '0.9')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                >
                  Shop Now <ExternalLink size={15} />
                </a>
                <Link href="/products/igf-1lr3"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '0.9rem 1.75rem', background: 'rgba(255,255,255,0.15)', color: '#ffffff', fontWeight: 700, fontSize: '0.95rem', borderRadius: 10, textDecoration: 'none', border: '1.5px solid rgba(255,255,255,0.35)', transition: 'background 0.15s' }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.22)')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.15)')}
                >
                  IGF-1 LR3 Details <ArrowRight size={14} />
                </Link>
                <Link href="/products/cjc1295-ipamorelin"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '0.9rem 1.75rem', background: 'rgba(255,255,255,0.15)', color: '#ffffff', fontWeight: 700, fontSize: '0.95rem', borderRadius: 10, textDecoration: 'none', border: '1.5px solid rgba(255,255,255,0.35)', transition: 'background 0.15s' }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.22)')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.15)')}
                >
                  CJC-1295 / Ipa Details <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </section>

      <section style={{ padding: '1.5rem 2rem 0' }}>
        <RelatedLinks currentPath="/categories/growth-body-comp" />
      </section>

      </div>
    </div>
  )
}
