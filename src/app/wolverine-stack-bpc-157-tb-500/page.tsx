'use client'
import Link from 'next/link'
import { ArrowRight, ExternalLink, Zap, Activity, Shield, CheckCircle, AlertCircle, Target } from 'lucide-react'
import { AFFILIATE_BASE } from '@/lib/products'
import RelatedLinks from '@/components/RelatedLinks'

const comparisonRows = [
  { feature: 'Primary action', bpc: 'Local healing', tb: 'Systemic repair' },
  { feature: 'Studies', bpc: '120+ published', tb: '50+ published' },
  { feature: 'Half-life', bpc: 'Short (hours)', tb: 'Moderate (days)' },
  { feature: 'Route', bpc: 'Oral, subQ, or IM', tb: 'subQ or IM' },
  { feature: 'Best for', bpc: 'Tendon / gut / neural', tb: 'Muscle / systemic' },
  { feature: 'Dose', bpc: '250–500 mcg/day', tb: '2–5 mg 2×/week' },
]

const useCaseCards = [
  {
    icon: <Target size={22} />,
    color: '#22d3ee',
    title: 'Acute Injury — Tendon or Ligament',
    detail:
      'BPC-157 administered locally (subQ near injury site or IM) to drive VEGF upregulation and accelerate collagen fiber remodeling at the injury site. TB-500 injected systemically to mobilize actin-regulating repair signals throughout the body. Combined, this creates both a localized and systemic healing response simultaneously.',
    compounds: ['BPC-157 500mcg subQ near site', 'TB-500 5mg subQ — any site'],
  },
  {
    icon: <Shield size={22} />,
    color: '#34d399',
    title: 'Gut Healing & GI Repair',
    detail:
      'BPC-157 administered orally (dissolved in water, swallowed) for direct GI mucosa exposure. This is one of the only peptide administration routes where oral delivery is considered effective due to the compound\'s stability at low pH. TB-500 subQ for systemic anti-inflammatory support.',
    compounds: ['BPC-157 250–500mcg oral in water', 'TB-500 2–5mg subQ 2×/week'],
  },
  {
    icon: <Zap size={22} />,
    color: '#d4a843',
    title: 'General Training Recovery',
    detail:
      'Both compounds at maintenance doses support accelerated recovery between training sessions. BPC-157 addresses micro-tears in tendons and connective tissue that accumulate from repeated loading. TB-500 manages the broader systemic inflammatory load and facilitates muscle fiber repair throughout the body.',
    compounds: ['BPC-157 250mcg daily subQ', 'TB-500 2mg weekly subQ'],
  },
]

export default function WolverineStackPage() {
  return (
    <div style={{ background: '#ffffff', minHeight: '100vh', fontFamily: 'inherit' }}>

      {/* ── HERO ───────────────────────────────────────────────────── */}
      <div style={{
        background: 'linear-gradient(160deg, #0891b2 0%, #0c4a6e 45%, #0a0a14 100%)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        padding: '6rem 2rem 5.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Grid pattern */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: 'radial-gradient(circle, rgba(34,211,238,0.2) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)',
        }} />
        {/* Glow orb */}
        <div style={{
          position: 'absolute', top: '-100px', right: '-80px',
          width: 540, height: 540, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(52,211,153,0.12) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '-80px', left: '-60px',
          width: 400, height: 400, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(34,211,238,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: '#22d3ee',
            marginBottom: '1.5rem',
          }}>
            <span style={{ display: 'inline-block', width: 28, height: 1, background: '#22d3ee', opacity: 0.7 }} />
            Recovery Protocol
            <span style={{ display: 'inline-block', width: 28, height: 1, background: '#22d3ee', opacity: 0.7 }} />
          </div>

          <h1 style={{
            fontSize: 'clamp(2.8rem, 6vw, 4.5rem)',
            fontWeight: 900,
            lineHeight: 1.08,
            letterSpacing: '-0.04em',
            color: '#ffffff',
            marginBottom: '1.25rem',
            maxWidth: 800,
          }}>
            The{' '}
            <span style={{
              background: 'linear-gradient(90deg, #22d3ee 0%, #34d399 50%, #22d3ee 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Wolverine Stack
            </span>
          </h1>

          <p style={{
            fontSize: '1.2rem',
            color: 'rgba(255,255,255,0.65)',
            lineHeight: 1.8,
            marginBottom: '2.75rem',
            maxWidth: 680,
          }}>
            BPC-157 + TB-500: The most studied combination in tissue repair science — two complementary mechanisms, one protocol. Local healing meets systemic recovery in a stack named for the most famous regenerator in fiction.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: '2rem' }}>
            <a href="#protocol" className="btn-primary">
              View Protocol <ArrowRight size={14} />
            </a>
            <a href={AFFILIATE_BASE} target="_blank" rel="sponsored noopener noreferrer" className="btn-secondary" style={{ color: '#22d3ee', borderColor: 'rgba(34,211,238,0.4)' }}>
              Shop Both Compounds <ExternalLink size={14} />
            </a>
          </div>

          {/* Stat pills */}
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            {[
              { n: '120+', l: 'BPC-157 Studies', c: '#22d3ee' },
              { n: '50+', l: 'TB-500 Studies', c: '#34d399' },
              { n: '2×', l: 'Faster Healing', c: '#d4a843' },
            ].map(s => (
              <div key={s.l} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.9rem', fontWeight: 900, color: s.c, letterSpacing: '-0.04em', lineHeight: 1 }}>{s.n}</div>
                <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.45)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.2rem' }}>{s.l}</div>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: '2.5rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '0.45rem 0.9rem',
            background: 'rgba(255,255,255,0.07)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: 6,
            fontSize: '0.75rem',
            color: 'rgba(255,255,255,0.4)',
          }}>
            <AlertCircle size={12} style={{ color: '#fb923c' }} />
            For laboratory and research use only. Not for human consumption.
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem' }}>

        {/* ── WHY "WOLVERINE STACK"? ───────────────────────────────── */}
        <section style={{ padding: '4.5rem 0 3.5rem' }}>
          <div className="section-label">Origin</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', margin: '1rem 0 1.5rem' }}>
            Why "Wolverine Stack"?
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'start' }}>
            <div>
              <p style={{ fontSize: '1.05rem', color: '#444460', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                The name originates in peptide research communities, borrowed from the Marvel character Wolverine — a mutant whose defining ability is accelerated, near-instantaneous tissue regeneration regardless of injury severity.
              </p>
              <p style={{ fontSize: '1.05rem', color: '#444460', lineHeight: 1.8 }}>
                Researchers began calling the BPC-157 + TB-500 combination the "Wolverine Stack" because it covers both primary axes of tissue repair: BPC-157 handles localized, targeted healing at specific injury sites while TB-500 provides broad systemic repair signaling throughout the body. Together, the two compounds leave few biological repair pathways uncovered.
              </p>
            </div>
            <div style={{
              background: 'linear-gradient(135deg, #0a0a14 0%, #131320 100%)',
              borderRadius: 20,
              padding: '2rem',
              border: '1px solid rgba(34,211,238,0.15)',
            }}>
              <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#22d3ee', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '1.25rem' }}>
                Stack Logic
              </div>
              {[
                { label: 'BPC-157', role: 'The local first responder — heals what you can point to', color: '#22d3ee' },
                { label: 'TB-500', role: 'The systemic amplifier — rebuilds everything everywhere', color: '#34d399' },
                { label: 'Combined', role: 'No repair pathway left unaddressed', color: '#d4a843' },
              ].map(item => (
                <div key={item.label} style={{ marginBottom: '1.1rem', paddingBottom: '1.1rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ fontWeight: 800, color: item.color, fontSize: '0.95rem', marginBottom: '0.25rem' }}>{item.label}</div>
                  <div style={{ fontSize: '0.87rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>{item.role}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY USE BOTH — COMPLEMENTARY MECHANISMS ─────────────── */}
        <section style={{ padding: '0 0 4.5rem' }}>
          <div className="section-label">Mechanisms</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', margin: '1rem 0 2rem' }}>
            Why Use Both? The Complementary Mechanisms
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>

            {/* BPC-157 */}
            <div style={{
              border: '1px solid rgba(34,211,238,0.2)',
              borderTop: '3px solid #22d3ee',
              borderRadius: 16,
              padding: '2rem',
              background: 'linear-gradient(135deg, rgba(34,211,238,0.02) 0%, #ffffff 100%)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: '1.5rem' }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: 'rgba(34,211,238,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Activity size={20} style={{ color: '#22d3ee' }} />
                </div>
                <div>
                  <div style={{ fontSize: '0.62rem', fontWeight: 800, color: '#22d3ee', textTransform: 'uppercase', letterSpacing: '0.14em' }}>Local Healing</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0a0a14' }}>BPC-157</div>
                </div>
              </div>
              <p style={{ fontSize: '0.92rem', color: '#555570', lineHeight: 1.75, marginBottom: '1.25rem' }}>
                Body Protective Compound 157 is a pentadecapeptide derived from a naturally occurring protein in gastric juice. It acts as a potent local healing agent at the specific site of administration.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem', marginBottom: '1.25rem' }}>
                {[
                  'VEGF upregulation — stimulates new blood vessel formation (angiogenesis) directly at injury site',
                  'Growth hormone receptor activation at the injury — amplifies local GH signaling',
                  'Tendon-to-bone healing pathway activation — accelerates collagen fiber remodeling',
                  'Gut mucosa repair — one of the only peptides with documented oral efficacy for GI healing',
                  'Neural repair — demonstrated neuroprotective and nerve healing effects in research models',
                ].map(point => (
                  <div key={point} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <CheckCircle size={14} style={{ color: '#22d3ee', flexShrink: 0, marginTop: '0.25em' }} />
                    <span style={{ fontSize: '0.87rem', color: '#555570', lineHeight: 1.6 }}>{point}</span>
                  </div>
                ))}
              </div>
              <div style={{
                background: 'rgba(34,211,238,0.06)',
                borderRadius: 8,
                padding: '0.75rem 1rem',
                fontSize: '0.82rem',
                color: '#0891b2',
                fontWeight: 600,
              }}>
                Best for: Targeted injury site, gut healing, nervous system support
              </div>
            </div>

            {/* TB-500 */}
            <div style={{
              border: '1px solid rgba(52,211,153,0.2)',
              borderTop: '3px solid #34d399',
              borderRadius: 16,
              padding: '2rem',
              background: 'linear-gradient(135deg, rgba(52,211,153,0.02) 0%, #ffffff 100%)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: '1.5rem' }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: 'rgba(52,211,153,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Zap size={20} style={{ color: '#34d399' }} />
                </div>
                <div>
                  <div style={{ fontSize: '0.62rem', fontWeight: 800, color: '#34d399', textTransform: 'uppercase', letterSpacing: '0.14em' }}>Systemic Repair</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0a0a14' }}>TB-500</div>
                </div>
              </div>
              <p style={{ fontSize: '0.92rem', color: '#555570', lineHeight: 1.75, marginBottom: '1.25rem' }}>
                TB-500 is a synthetic fragment of Thymosin Beta-4, a 43-amino acid protein found in high concentrations in blood platelets and wound fluid. It operates systemically — everywhere the bloodstream reaches.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem', marginBottom: '1.25rem' }}>
                {[
                  'Actin regulation — promotes cell migration into damaged tissue by upregulating actin polymerization',
                  'Systemic angiogenesis — stimulates blood vessel formation throughout the body, not just locally',
                  'Anti-inflammatory pathway modulation — reduces systemic inflammatory burden across all tissues',
                  'Muscle fiber repair — satellite cell activation for skeletal muscle regeneration',
                  'Broad distribution — travels systemically to address injuries that cannot be targeted locally',
                ].map(point => (
                  <div key={point} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <CheckCircle size={14} style={{ color: '#34d399', flexShrink: 0, marginTop: '0.25em' }} />
                    <span style={{ fontSize: '0.87rem', color: '#555570', lineHeight: 1.6 }}>{point}</span>
                  </div>
                ))}
              </div>
              <div style={{
                background: 'rgba(52,211,153,0.06)',
                borderRadius: 8,
                padding: '0.75rem 1rem',
                fontSize: '0.82rem',
                color: '#059669',
                fontWeight: 600,
              }}>
                Best for: Whole-body recovery, muscle repair, inflammation reduction
              </div>
            </div>
          </div>
        </section>

        {/* ── MECHANISM DIAGRAM ────────────────────────────────────── */}
        <section style={{ padding: '0 0 4.5rem' }}>
          <div style={{
            background: 'linear-gradient(135deg, #0a0a14 0%, #0f1420 100%)',
            borderRadius: 20,
            padding: '2.75rem',
            border: '1px solid rgba(255,255,255,0.06)',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', top: '-40px', right: '-40px',
              width: 300, height: 300, borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(52,211,153,0.08) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />
            <div style={{ position: 'relative' }}>
              <div className="section-label" style={{ color: '#34d399', marginBottom: '1rem' }}>How They Work Together</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff', marginBottom: '2rem', letterSpacing: '-0.02em' }}>
                Additive, Not Redundant
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
                {[
                  {
                    step: 'Injury occurs',
                    desc: 'Tissue damage triggers local and systemic inflammatory cascade. Both local fibroblasts and circulating repair cells are recruited.',
                    color: '#fb923c',
                    icon: '⚡',
                  },
                  {
                    step: 'BPC-157 activates locally',
                    desc: 'Administered near or at the injury site, BPC-157 upregulates VEGF and GH receptors locally. New capillaries form. Fibroblast migration accelerates. Collagen synthesis begins.',
                    color: '#22d3ee',
                    icon: '🎯',
                  },
                  {
                    step: 'TB-500 amplifies systemically',
                    desc: 'Circulating throughout the bloodstream, TB-500\'s actin-regulating action mobilizes cells from distant sites to the injury. Systemic inflammation is dampened. Muscle fibers begin rebuilding.',
                    color: '#34d399',
                    icon: '🌐',
                  },
                  {
                    step: 'Combined synergy',
                    desc: 'The result is a two-vector healing response: localized precision targeting from BPC-157 plus systemic support from TB-500. The pathways are genuinely additive — neither compound triggers the other\'s mechanism.',
                    color: '#d4a843',
                    icon: '✦',
                  },
                ].map(item => (
                  <div key={item.step} style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: `1px solid rgba(255,255,255,0.06)`,
                    borderTop: `2px solid ${item.color}`,
                    borderRadius: 12,
                    padding: '1.25rem',
                  }}>
                    <div style={{ fontSize: '1.25rem', marginBottom: '0.6rem' }}>{item.icon}</div>
                    <div style={{ fontSize: '0.82rem', fontWeight: 800, color: item.color, marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      {item.step}
                    </div>
                    <p style={{ fontSize: '0.84rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, margin: 0 }}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── BPC-157 vs TB-500 HEAD-TO-HEAD ──────────────────────── */}
        <section style={{ padding: '0 0 4.5rem' }}>
          <div className="section-label">Comparison</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', margin: '1rem 0 2rem' }}>
            BPC-157 vs. TB-500 — Head to Head
          </h2>
          <div style={{ overflowX: 'auto', borderRadius: 16, border: '1px solid rgba(0,0,0,0.08)', boxShadow: '0 2px 20px rgba(0,0,0,0.05)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 520 }}>
              <thead>
                <tr>
                  <th style={{ padding: '1rem 1.5rem', background: '#0a0a14', color: '#9090a8', fontWeight: 700, fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.1em', textAlign: 'left' }}>
                    Category
                  </th>
                  <th style={{ padding: '1rem 1.5rem', background: '#0a0a14', color: '#22d3ee', fontWeight: 700, fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.1em', textAlign: 'left', borderLeft: '1px solid rgba(255,255,255,0.07)' }}>
                    BPC-157
                  </th>
                  <th style={{ padding: '1rem 1.5rem', background: '#0a0a14', color: '#34d399', fontWeight: 700, fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.1em', textAlign: 'left', borderLeft: '1px solid rgba(255,255,255,0.07)' }}>
                    TB-500
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.feature} style={{ background: i % 2 === 0 ? '#ffffff' : '#f9fafb' }}>
                    <td style={{ padding: '1rem 1.5rem', fontSize: '0.92rem', fontWeight: 600, color: '#0a0a14', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                      {row.feature}
                    </td>
                    <td style={{ padding: '1rem 1.5rem', fontSize: '0.92rem', color: '#555570', borderTop: '1px solid rgba(0,0,0,0.06)', borderLeft: '1px solid rgba(0,0,0,0.06)' }}>
                      {row.bpc}
                    </td>
                    <td style={{ padding: '1rem 1.5rem', fontSize: '0.92rem', color: '#555570', borderTop: '1px solid rgba(0,0,0,0.06)', borderLeft: '1px solid rgba(0,0,0,0.06)' }}>
                      {row.tb}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: '0.82rem', color: '#9090a8', marginTop: '0.75rem', fontStyle: 'italic' }}>
            Note: Neither compound is superior — they target entirely different mechanisms. The Wolverine Stack uses both.
          </p>
        </section>

        {/* ── FULL WOLVERINE STACK PROTOCOL ───────────────────────── */}
        <section id="protocol" style={{ padding: '0 0 4.5rem' }}>
          <div className="section-label">Full Protocol</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', margin: '1rem 0 2rem' }}>
            The Wolverine Stack Protocol
          </h2>
          <div style={{
            background: 'linear-gradient(160deg, #0a0a14 0%, #111320 100%)',
            border: '2px solid rgba(212,168,67,0.25)',
            borderRadius: 24,
            padding: '2.75rem',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: 3,
              background: 'linear-gradient(90deg, #22d3ee, #34d399, #d4a843)',
            }} />
            <div style={{
              position: 'absolute', bottom: '-60px', right: '-40px',
              width: 300, height: 300, borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(212,168,67,0.07) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />

            <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              {/* Phase 1 */}
              <div>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: 'rgba(34,211,238,0.1)',
                  border: '1px solid rgba(34,211,238,0.2)',
                  borderRadius: 20, padding: '0.3rem 0.9rem',
                  fontSize: '0.7rem', fontWeight: 800, color: '#22d3ee',
                  textTransform: 'uppercase', letterSpacing: '0.12em',
                  marginBottom: '1.25rem',
                }}>
                  Phase 1 — Loading
                </div>
                <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', marginBottom: '1rem' }}>Weeks 1–4</div>
                {[
                  { compound: 'BPC-157', dose: '500 mcg', freq: '2× daily (morning + evening)', color: '#22d3ee' },
                  { compound: 'TB-500', dose: '5 mg', freq: '2× weekly', color: '#34d399' },
                ].map(item => (
                  <div key={item.compound} style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderLeft: `3px solid ${item.color}`,
                    borderRadius: '0 10px 10px 0',
                    padding: '1rem 1.25rem',
                    marginBottom: '0.75rem',
                  }}>
                    <div style={{ fontWeight: 800, color: item.color, fontSize: '0.95rem', marginBottom: '0.25rem' }}>{item.compound}</div>
                    <div style={{ fontSize: '1.2rem', fontWeight: 900, color: '#ffffff', marginBottom: '0.2rem' }}>{item.dose}</div>
                    <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)' }}>{item.freq}</div>
                  </div>
                ))}
                <div style={{
                  marginTop: '1rem', padding: '0.75rem 1rem',
                  background: 'rgba(34,211,238,0.06)', borderRadius: 8,
                  fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.65,
                }}>
                  Loading phase establishes tissue saturation. BPC-157 morning dose post-waking, evening dose pre-sleep. TB-500 any two non-consecutive days.
                </div>
              </div>

              {/* Phase 2 */}
              <div>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: 'rgba(212,168,67,0.1)',
                  border: '1px solid rgba(212,168,67,0.2)',
                  borderRadius: 20, padding: '0.3rem 0.9rem',
                  fontSize: '0.7rem', fontWeight: 800, color: '#d4a843',
                  textTransform: 'uppercase', letterSpacing: '0.12em',
                  marginBottom: '1.25rem',
                }}>
                  Phase 2 — Maintenance
                </div>
                <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', marginBottom: '1rem' }}>Weeks 5–8+</div>
                {[
                  { compound: 'BPC-157', dose: '250 mcg', freq: '1× daily', color: '#22d3ee' },
                  { compound: 'TB-500', dose: '2–5 mg', freq: '1× weekly', color: '#34d399' },
                ].map(item => (
                  <div key={item.compound} style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderLeft: `3px solid ${item.color}`,
                    borderRadius: '0 10px 10px 0',
                    padding: '1rem 1.25rem',
                    marginBottom: '0.75rem',
                  }}>
                    <div style={{ fontWeight: 800, color: item.color, fontSize: '0.95rem', marginBottom: '0.25rem' }}>{item.compound}</div>
                    <div style={{ fontSize: '1.2rem', fontWeight: 900, color: '#ffffff', marginBottom: '0.2rem' }}>{item.dose}</div>
                    <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)' }}>{item.freq}</div>
                  </div>
                ))}
                <div style={{
                  marginTop: '1rem', padding: '0.75rem 1rem',
                  background: 'rgba(212,168,67,0.06)', borderRadius: 8,
                  fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.65,
                }}>
                  Maintenance phase sustains healing environment at reduced injection burden. Reassess every 4 weeks based on research objectives.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── USE CASE DECISION GUIDE ──────────────────────────────── */}
        <section style={{ padding: '0 0 4.5rem' }}>
          <div className="section-label">Decision Guide</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', margin: '1rem 0 0.75rem' }}>
            Use Case Decision Guide
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#666688', lineHeight: 1.75, marginBottom: '2.25rem', maxWidth: 580 }}>
            The optimal Wolverine Stack application varies by target tissue and research objective. Three primary use cases:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {useCaseCards.map(card => (
              <div key={card.title} style={{
                border: `1px solid rgba(${card.color === '#22d3ee' ? '34,211,238' : card.color === '#34d399' ? '52,211,153' : '212,168,67'},0.2)`,
                borderTop: `3px solid ${card.color}`,
                borderRadius: 16,
                padding: '1.75rem',
                background: '#ffffff',
              }}>
                <div style={{
                  width: 42, height: 42, borderRadius: 11,
                  background: `rgba(${card.color === '#22d3ee' ? '34,211,238' : card.color === '#34d399' ? '52,211,153' : '212,168,67'},0.1)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: card.color, marginBottom: '1.1rem',
                }}>
                  {card.icon}
                </div>
                <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0a0a14', marginBottom: '0.75rem' }}>
                  {card.title}
                </div>
                <p style={{ fontSize: '0.88rem', color: '#666688', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                  {card.detail}
                </p>
                <div style={{
                  background: '#f7f8fc',
                  borderRadius: 8,
                  padding: '0.75rem 1rem',
                  display: 'flex', flexDirection: 'column', gap: '0.4rem',
                }}>
                  <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#9090a8', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.2rem' }}>Protocol</div>
                  {card.compounds.map(c => (
                    <div key={c} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ width: 5, height: 5, borderRadius: '50%', background: card.color, flexShrink: 0 }} />
                      <span style={{ fontSize: '0.82rem', color: '#444460', fontWeight: 500 }}>{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── PRODUCT LINKS ────────────────────────────────────────── */}
        <section style={{ padding: '0 0 4rem' }}>
          <div className="section-label">Shop the Stack</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', margin: '1rem 0 2rem' }}>
            Get Both Compounds
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>

            {/* BPC-157 */}
            <div style={{
              border: '1px solid rgba(34,211,238,0.2)',
              borderRadius: 16,
              padding: '2rem',
              background: 'linear-gradient(135deg, rgba(34,211,238,0.02) 0%, #f7f8fc 100%)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}>
              <div>
                <div style={{ fontSize: '0.62rem', fontWeight: 800, color: '#22d3ee', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '0.5rem' }}>
                  Local Healing Agent
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0a0a14', margin: '0 0 0.6rem' }}>BPC-157</h3>
                <p style={{ fontSize: '0.9rem', color: '#555570', lineHeight: 1.7, margin: 0 }}>
                  120+ published studies. Tendon, gut, neural, and vascular healing via VEGF upregulation and GH receptor activation at the injury site. Available in 10mg vials.
                </p>
              </div>
              <div style={{ marginTop: 'auto', display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <Link href="/products/bpc-157-10mg" className="btn-primary">
                  Product Details <ArrowRight size={13} />
                </Link>
              </div>
            </div>

            {/* TB-500 */}
            <div style={{
              border: '1px solid rgba(52,211,153,0.2)',
              borderRadius: 16,
              padding: '2rem',
              background: 'linear-gradient(135deg, rgba(52,211,153,0.02) 0%, #f7f8fc 100%)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}>
              <div>
                <div style={{ fontSize: '0.62rem', fontWeight: 800, color: '#34d399', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '0.5rem' }}>
                  Systemic Repair Agent
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0a0a14', margin: '0 0 0.6rem' }}>TB-500</h3>
                <p style={{ fontSize: '0.9rem', color: '#555570', lineHeight: 1.7, margin: 0 }}>
                  Thymosin Beta-4 fragment. Systemic actin regulation, angiogenesis, and anti-inflammatory signaling throughout the body. Muscle repair and whole-body recovery. 10mg vials.
                </p>
              </div>
              <div style={{ marginTop: 'auto', display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <Link href="/products/tb-500-10mg" className="btn-primary">
                  Product Details <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── RELATED LINKS ─────────────────────────────────────────── */}
        <RelatedLinks currentPath="/wolverine-stack-bpc-157-tb-500" />

        {/* ── FINAL CTA ─────────────────────────────────────────────── */}
        <section style={{ padding: '3.5rem 0 5rem' }}>
          <div style={{
            background: 'linear-gradient(160deg, #0a0a14 0%, #0c1420 100%)',
            borderRadius: 24,
            padding: '3.5rem',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', top: '-50px', left: '50%', transform: 'translateX(-50%)',
              width: 480, height: 480, borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(34,211,238,0.08) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />
            <div style={{ position: 'relative' }}>
              <div style={{
                fontSize: '0.65rem', fontWeight: 800, color: '#22d3ee',
                textTransform: 'uppercase', letterSpacing: '0.16em', marginBottom: '1.25rem',
              }}>
                our supplier
              </div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.75rem)', fontWeight: 900, color: '#ffffff', lineHeight: 1.2, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
                Source the Complete{' '}
                <span style={{
                  background: 'linear-gradient(90deg, #22d3ee 0%, #34d399 50%, #22d3ee 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  Wolverine Stack
                </span>
              </h2>
              <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.45)', maxWidth: 480, margin: '0 auto 2rem', lineHeight: 1.7 }}>
                BPC-157 and TB-500 available individually or as a stack. Third-party tested. Certificate of analysis available. For laboratory research use only.
              </p>
              <a
                href={AFFILIATE_BASE}
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="btn-primary"
                style={{ fontSize: '1rem', padding: '0.9rem 2rem' }}
              >
                Shop Now <ExternalLink size={15} />
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
