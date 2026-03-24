'use client'
import Link from 'next/link'
import { ArrowRight, ExternalLink, Clock, Zap, CheckCircle, AlertCircle, Activity, ChevronRight } from 'lucide-react'
import { AFFILIATE_BASE } from '@/lib/products'
import RelatedLinks from '@/components/RelatedLinks'

const tableRows = [
  { feature: 'Half-life', withDac: '6–8 days', withoutDac: '29–30 minutes' },
  { feature: 'GH release pattern', withDac: 'Sustained elevation', withoutDac: 'Sharp pulsatile' },
  { feature: 'Dosing frequency', withDac: '1–2× per week', withoutDac: '1–3× daily' },
  { feature: 'Pair with Ipamorelin', withDac: 'Not typically', withoutDac: 'Yes — optimal combination' },
  { feature: 'Mimics natural GH secretion', withDac: 'No', withoutDac: 'Yes' },
  { feature: 'Ideal for', withDac: 'Sustained elevation studies', withoutDac: 'Pulsatile GH studies' },
]

const scenarioCards = [
  {
    icon: <Zap size={22} />,
    color: '#d4a843',
    scenario: 'Pulsatile GH + natural sleep cycle optimization',
    recommendation: 'Without DAC (Mod GRF 1-29)',
    detail:
      'Pair 100mcg Mod GRF 1-29 with 200mcg Ipamorelin pre-sleep. This delivers a sharp, synchronized GH pulse that mirrors physiological secretion during slow-wave sleep — the most anabolically favorable window.',
    tag: 'Recommended',
  },
  {
    icon: <Activity size={22} />,
    color: '#a78bfa',
    scenario: 'Maximum sustained GH elevation for study purposes',
    recommendation: 'With DAC',
    detail:
      'CJC-1295 with DAC maintains elevated IGF-1 levels throughout the week with once or twice weekly injections. Useful for research models requiring consistently elevated GH without frequent administration.',
    tag: 'Sustained',
  },
  {
    icon: <CheckCircle size={22} />,
    color: '#22d3ee',
    scenario: 'Best of both — combined approach',
    recommendation: 'Without DAC as primary + DAC periodically',
    detail:
      'Use Mod GRF 1-29 / Ipamorelin as the daily pulsatile driver, and layer in low-dose CJC-1295 DAC (0.5–1mg) once every 1–2 weeks as a sustained baseline amplifier. Advanced research protocol.',
    tag: 'Advanced',
  },
]

export default function CjcDacPage() {
  return (
    <div style={{ background: '#ffffff', minHeight: '100vh', fontFamily: 'inherit' }}>

      {/* ── HERO ───────────────────────────────────────────────────── */}
      <div style={{
        background: 'linear-gradient(160deg, #e8f4fd 0%, #f0f6ff 40%, #f7f8fc 100%)',
        borderBottom: '1px solid rgba(0,0,0,0.07)',
        padding: '5.5rem 2rem 5rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Decorative grid */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: 'radial-gradient(circle, rgba(34,211,238,0.12) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
          maskImage: 'radial-gradient(ellipse 75% 75% at 50% 50%, black 10%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 75% 75% at 50% 50%, black 10%, transparent 100%)',
        }} />
        <div style={{
          position: 'absolute', top: '-100px', right: '-60px',
          width: 480, height: 480, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212,168,67,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative' }}>
          <div className="section-label" style={{ color: '#0891b2', borderColor: 'rgba(8,145,178,0.3)' }}>
            Growth Hormone Science
          </div>

          <h1 style={{
            fontSize: 'clamp(2.2rem, 5.5vw, 4rem)',
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            color: '#0a0a14',
            margin: '1.25rem 0 1.5rem',
            maxWidth: 780,
          }}>
            CJC-1295:{' '}
            <span style={{
              background: 'linear-gradient(90deg, #d4a843 0%, #f5d07a 50%, #d4a843 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              With DAC vs. Without DAC
            </span>
          </h1>

          <p style={{
            fontSize: '1.15rem',
            color: '#444460',
            lineHeight: 1.8,
            marginBottom: '2.5rem',
            maxWidth: 680,
          }}>
            The DAC vs. no-DAC question is the most common point of confusion in GH peptide research. They share a name but behave entirely differently — different half-lives, different GH release patterns, different ideal pairing compounds, and different research applications. This guide covers the full science.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/products/cjc1295-ipamorelin" className="btn-primary">
              View CJC-1295 / Ipamorelin <ArrowRight size={14} />
            </Link>
            <a href="#comparison" className="btn-secondary">
              Jump to Comparison <ChevronRight size={14} />
            </a>
          </div>

          <div style={{
            marginTop: '2rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '0.45rem 0.9rem',
            background: 'rgba(255,255,255,0.7)',
            border: '1px solid rgba(0,0,0,0.1)',
            borderRadius: 6,
            fontSize: '0.75rem',
            color: '#9090a8',
          }}>
            <AlertCircle size={12} style={{ color: '#fb923c' }} />
            For laboratory and research use only. Not for human consumption.
          </div>
        </div>
      </div>

      {/* ── TL;DR QUICK ANSWER ─────────────────────────────────────── */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '3.5rem 2rem 0' }}>
        <div style={{
          border: '2px solid rgba(212,168,67,0.35)',
          borderLeft: '4px solid #d4a843',
          borderRadius: '0 16px 16px 0',
          background: 'linear-gradient(135deg, rgba(212,168,67,0.04) 0%, rgba(212,168,67,0.02) 100%)',
          padding: '2rem 2.25rem',
        }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 8,
            fontSize: '0.65rem', fontWeight: 800, color: '#d4a843',
            textTransform: 'uppercase', letterSpacing: '0.16em', marginBottom: '1rem',
          }}>
            <CheckCircle size={14} />
            TL;DR — Quick Answer
          </div>
          <p style={{ fontSize: '1.05rem', color: '#0a0a14', lineHeight: 1.75, margin: 0, fontWeight: 500 }}>
            For pre-sleep pulsatile GH protocols, use{' '}
            <strong style={{ color: '#0891b2' }}>without DAC (Mod GRF 1-29)</strong>. For sustained GH elevation studies, use{' '}
            <strong style={{ color: '#a78bfa' }}>with DAC</strong>. Most protocols pair without-DAC with Ipamorelin for the most natural GH pulse pattern, achieving{' '}
            <strong style={{ color: '#d4a843' }}>4–8× GH amplification</strong> over baseline with minimal side-effect profile.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem' }}>

        {/* ── WHAT IS DAC? ──────────────────────────────────────────── */}
        <section style={{ padding: '4.5rem 0 3.5rem' }}>
          <div className="section-label">The Science of DAC</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', margin: '1rem 0 1.25rem' }}>
            What is the Drug Affinity Complex?
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
            <div>
              <p style={{ fontSize: '1.05rem', color: '#444460', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                DAC stands for <strong style={{ color: '#0a0a14' }}>Drug Affinity Complex</strong> — a lysine-maleimide linker chemically bonded to the CJC-1295 peptide chain. This molecular addition fundamentally changes how the compound behaves in the bloodstream.
              </p>
              <p style={{ fontSize: '1.05rem', color: '#444460', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                When injected, the maleimide group covalently binds to the cysteine-34 residue on circulating serum albumin — the most abundant protein in blood plasma. This albumin-binding mechanism shields the peptide from enzymatic degradation and renal clearance.
              </p>
              <p style={{ fontSize: '1.05rem', color: '#444460', lineHeight: 1.8 }}>
                The result: a half-life extension from approximately <strong style={{ color: '#a78bfa' }}>30 minutes to 6–8 days</strong>. The same GHRH analog that would otherwise be cleared in less than an hour becomes a week-long GH secretagogue.
              </p>
            </div>
            <div>
              <div style={{
                background: '#f7f8fc',
                border: '1px solid rgba(0,0,0,0.07)',
                borderRadius: 16,
                padding: '1.75rem',
              }}>
                <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#9090a8', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '1.25rem' }}>
                  DAC Mechanism — Step by Step
                </div>
                {[
                  { step: '1', text: 'CJC-1295 + DAC injected subcutaneously', color: '#d4a843' },
                  { step: '2', text: 'Maleimide group in DAC linker encounters serum albumin', color: '#fb923c' },
                  { step: '3', text: 'Covalent bond forms with Cys-34 on albumin molecule', color: '#a78bfa' },
                  { step: '4', text: 'Albumin-peptide complex circulates with albumin half-life (~19 days)', color: '#22d3ee' },
                  { step: '5', text: 'Peptide slowly releases and activates pituitary GHRH receptors over 6–8 days', color: '#34d399' },
                ].map(item => (
                  <div key={item.step} style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', alignItems: 'flex-start' }}>
                    <div style={{
                      width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
                      background: item.color,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '0.7rem', fontWeight: 800, color: '#ffffff',
                    }}>
                      {item.step}
                    </div>
                    <p style={{ fontSize: '0.92rem', color: '#444460', lineHeight: 1.6, margin: 0 }}>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── COMPARISON TABLE ──────────────────────────────────────── */}
        <section id="comparison" style={{ padding: '0 0 4rem' }}>
          <div className="section-label">Side-by-Side</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', margin: '1rem 0 2rem' }}>
            With DAC vs. Without DAC — Full Comparison
          </h2>
          <div style={{ overflowX: 'auto', borderRadius: 16, border: '1px solid rgba(0,0,0,0.08)', boxShadow: '0 2px 20px rgba(0,0,0,0.05)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 520 }}>
              <thead>
                <tr>
                  <th style={{ padding: '1rem 1.5rem', background: '#0a0a14', color: '#9090a8', fontWeight: 700, fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.1em', textAlign: 'left' }}>
                    Feature
                  </th>
                  <th style={{ padding: '1rem 1.5rem', background: '#0a0a14', color: '#a78bfa', fontWeight: 700, fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.1em', textAlign: 'left', borderLeft: '1px solid rgba(255,255,255,0.07)' }}>
                    With DAC
                  </th>
                  <th style={{ padding: '1rem 1.5rem', background: '#0a0a14', color: '#22d3ee', fontWeight: 700, fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.1em', textAlign: 'left', borderLeft: '1px solid rgba(255,255,255,0.07)' }}>
                    Without DAC (Mod GRF 1-29)
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row, i) => (
                  <tr key={row.feature} style={{ background: i % 2 === 0 ? '#ffffff' : '#f9fafb' }}>
                    <td style={{ padding: '1rem 1.5rem', fontSize: '0.92rem', fontWeight: 600, color: '#0a0a14', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                      {row.feature}
                    </td>
                    <td style={{ padding: '1rem 1.5rem', fontSize: '0.92rem', color: '#555570', borderTop: '1px solid rgba(0,0,0,0.06)', borderLeft: '1px solid rgba(0,0,0,0.06)' }}>
                      {row.withDac}
                    </td>
                    <td style={{ padding: '1rem 1.5rem', fontSize: '0.92rem', color: '#555570', borderTop: '1px solid rgba(0,0,0,0.06)', borderLeft: '1px solid rgba(0,0,0,0.06)' }}>
                      {row.withoutDac}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── HALF-LIFE DEEP DIVE ──────────────────────────────────── */}
        <section style={{ padding: '0 0 4.5rem' }}>
          <div className="section-label">Pharmacokinetics</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', margin: '1rem 0 2rem' }}>
            Half-Life Deep Dive
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>

            {/* With DAC card */}
            <div style={{
              border: '1px solid rgba(167,139,250,0.25)',
              borderTop: '3px solid #a78bfa',
              borderRadius: 16,
              padding: '2rem',
              background: 'linear-gradient(135deg, rgba(167,139,250,0.03) 0%, #ffffff 100%)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1.25rem' }}>
                <div style={{ width: 38, height: 38, borderRadius: 10, background: 'rgba(167,139,250,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Clock size={18} style={{ color: '#a78bfa' }} />
                </div>
                <div>
                  <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#a78bfa', textTransform: 'uppercase', letterSpacing: '0.12em' }}>With DAC</div>
                  <div style={{ fontWeight: 800, color: '#0a0a14', fontSize: '1.1rem' }}>6–8 Day Half-Life</div>
                </div>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                {[
                  'Albumin-binding mechanism extends circulation dramatically',
                  'Produces a blunted but sustained elevation in GH levels across the week',
                  'IGF-1 levels remain measurably elevated for up to 2 weeks post-injection',
                  'Reduced injection burden — 1 to 2 injections per week maintains coverage',
                  'Consideration: chronic elevation may downregulate somatotroph sensitivity over time — receptor desensitization is a documented concern with prolonged use',
                ].map(point => (
                  <li key={point} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: '0.92rem', color: '#555570', lineHeight: 1.65 }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#a78bfa', flexShrink: 0, marginTop: '0.45em' }} />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Without DAC card */}
            <div style={{
              border: '1px solid rgba(34,211,238,0.25)',
              borderTop: '3px solid #22d3ee',
              borderRadius: 16,
              padding: '2rem',
              background: 'linear-gradient(135deg, rgba(34,211,238,0.03) 0%, #ffffff 100%)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1.25rem' }}>
                <div style={{ width: 38, height: 38, borderRadius: 10, background: 'rgba(34,211,238,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Zap size={18} style={{ color: '#22d3ee' }} />
                </div>
                <div>
                  <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#22d3ee', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Without DAC (Mod GRF 1-29)</div>
                  <div style={{ fontWeight: 800, color: '#0a0a14', fontSize: '1.1rem' }}>29–30 Minute Half-Life</div>
                </div>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                {[
                  'Rapid clearance produces a sharp, physiological GH peak matching natural GHRH pulse patterns',
                  'GH peaks within 15–30 minutes of injection — mirrors the body\'s own pulsatile secretion rhythm',
                  'Maintains pituitary sensitivity through natural on/off cycling',
                  'Synergistic pairing: Ipamorelin (GHSR agonist) amplifies the GH pulse 4–8× above the response of either peptide alone',
                  'Pre-sleep administration aligns with the largest natural nocturnal GH pulse for maximum anabolic signaling',
                ].map(point => (
                  <li key={point} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: '0.92rem', color: '#555570', lineHeight: 1.65 }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22d3ee', flexShrink: 0, marginTop: '0.45em' }} />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── DOSING PROTOCOLS ─────────────────────────────────────── */}
        <section style={{ padding: '0 0 4.5rem' }}>
          <div className="section-label">Research Protocols</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', margin: '1rem 0 2rem' }}>
            Dosing Protocols
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>

            {/* Without DAC Protocol */}
            <div style={{
              background: 'linear-gradient(160deg, #0a0a14 0%, #131320 100%)',
              border: '1px solid rgba(34,211,238,0.2)',
              borderRadius: 20,
              padding: '2.25rem',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                background: 'linear-gradient(90deg, #22d3ee, transparent)',
              }} />
              <div style={{ fontSize: '0.65rem', fontWeight: 800, color: '#22d3ee', textTransform: 'uppercase', letterSpacing: '0.16em', marginBottom: '0.75rem' }}>
                Protocol A — Pulsatile
              </div>
              <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.5rem' }}>
                Without DAC (Mod GRF 1-29)
              </div>
              {[
                { label: 'CJC-1295 (No DAC)', dose: '100 mcg' },
                { label: 'Ipamorelin', dose: '200 mcg' },
                { label: 'Timing', dose: 'Pre-sleep injection' },
                { label: 'Frequency', dose: '5 days on / 2 days off' },
                { label: 'Administration', dose: 'Subcutaneous' },
              ].map(item => (
                <div key={item.label} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '0.6rem 0', borderBottom: '1px solid rgba(255,255,255,0.06)',
                }}>
                  <span style={{ fontSize: '0.87rem', color: 'rgba(255,255,255,0.55)' }}>{item.label}</span>
                  <span style={{ fontSize: '0.87rem', fontWeight: 700, color: '#22d3ee' }}>{item.dose}</span>
                </div>
              ))}
              <div style={{
                marginTop: '1.25rem',
                padding: '0.75rem 1rem',
                background: 'rgba(34,211,238,0.07)',
                borderRadius: 8,
                fontSize: '0.82rem',
                color: 'rgba(255,255,255,0.5)',
                lineHeight: 1.65,
              }}>
                Administer 20–30 minutes after last meal, immediately before sleep. Fasted state maximizes GH pulse amplitude.
              </div>
            </div>

            {/* With DAC Protocol */}
            <div style={{
              background: 'linear-gradient(160deg, #0a0a14 0%, #131320 100%)',
              border: '1px solid rgba(167,139,250,0.2)',
              borderRadius: 20,
              padding: '2.25rem',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                background: 'linear-gradient(90deg, #a78bfa, transparent)',
              }} />
              <div style={{ fontSize: '0.65rem', fontWeight: 800, color: '#a78bfa', textTransform: 'uppercase', letterSpacing: '0.16em', marginBottom: '0.75rem' }}>
                Protocol B — Sustained
              </div>
              <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.5rem' }}>
                With DAC
              </div>
              {[
                { label: 'CJC-1295 (With DAC)', dose: '1–2 mg' },
                { label: 'Ipamorelin (optional)', dose: '200 mcg' },
                { label: 'Frequency', dose: '1× per week' },
                { label: 'Alternative frequency', dose: '0.5–1mg twice weekly' },
                { label: 'Administration', dose: 'Subcutaneous' },
              ].map(item => (
                <div key={item.label} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '0.6rem 0', borderBottom: '1px solid rgba(255,255,255,0.06)',
                }}>
                  <span style={{ fontSize: '0.87rem', color: 'rgba(255,255,255,0.55)' }}>{item.label}</span>
                  <span style={{ fontSize: '0.87rem', fontWeight: 700, color: '#a78bfa' }}>{item.dose}</span>
                </div>
              ))}
              <div style={{
                marginTop: '1.25rem',
                padding: '0.75rem 1rem',
                background: 'rgba(167,139,250,0.07)',
                borderRadius: 8,
                fontSize: '0.82rem',
                color: 'rgba(255,255,255,0.5)',
                lineHeight: 1.65,
              }}>
                The long half-life means timing is less critical. Consistent same-day weekly injection maintains stable serum levels.
              </div>
            </div>
          </div>
        </section>

        {/* ── WHICH SHOULD YOU CHOOSE ─────────────────────────────── */}
        <section style={{ padding: '0 0 4.5rem' }}>
          <div className="section-label">Decision Guide</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', margin: '1rem 0 0.75rem' }}>
            Which Should You Choose?
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#666688', lineHeight: 1.75, marginBottom: '2.25rem', maxWidth: 620 }}>
            The correct form depends entirely on the research objective. Three common scenarios and the optimal approach for each:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {scenarioCards.map(card => (
              <div key={card.scenario} style={{
                border: `1px solid rgba(${card.color === '#d4a843' ? '212,168,67' : card.color === '#a78bfa' ? '167,139,250' : '34,211,238'},0.25)`,
                borderTop: `3px solid ${card.color}`,
                borderRadius: 16,
                padding: '1.75rem',
                background: '#ffffff',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 10,
                    background: `rgba(${card.color === '#d4a843' ? '212,168,67' : card.color === '#a78bfa' ? '167,139,250' : '34,211,238'},0.1)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: card.color,
                  }}>
                    {card.icon}
                  </div>
                  <span style={{
                    fontSize: '0.65rem', fontWeight: 800, color: card.color,
                    textTransform: 'uppercase', letterSpacing: '0.12em',
                    background: `rgba(${card.color === '#d4a843' ? '212,168,67' : card.color === '#a78bfa' ? '167,139,250' : '34,211,238'},0.08)`,
                    padding: '0.25rem 0.6rem', borderRadius: 20,
                  }}>
                    {card.tag}
                  </span>
                </div>
                <div style={{ fontSize: '0.78rem', color: '#9090a8', marginBottom: '0.4rem', fontStyle: 'italic' }}>
                  &ldquo;{card.scenario}&rdquo;
                </div>
                <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0a0a14', marginBottom: '0.9rem' }}>
                  → {card.recommendation}
                </div>
                <p style={{ fontSize: '0.88rem', color: '#666688', lineHeight: 1.7, margin: 0 }}>
                  {card.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── PRODUCT SECTION ──────────────────────────────────────── */}
        <section style={{ padding: '0 0 4rem' }}>
          <div style={{
            background: 'linear-gradient(135deg, #f0f6ff 0%, #f7f8fc 100%)',
            border: '1px solid rgba(34,211,238,0.15)',
            borderRadius: 20,
            padding: '2.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
          }}>
            <div>
              <div className="section-label">Featured Product</div>
              <h3 className="heading-md" style={{ color: '#0a0a14', margin: '0.75rem 0 0.75rem' }}>
                CJC-1295 / Ipamorelin Stack
              </h3>
              <p style={{ fontSize: '1rem', color: '#555570', lineHeight: 1.75, maxWidth: 640 }}>
                The without-DAC pairing is the most studied GH secretagogue combination in research literature. CJC-1295 (Mod GRF 1-29) provides the GHRH signal while Ipamorelin provides the ghrelin-mimetic pulse — together they activate both GH secretagogue pathways simultaneously for synergistic 4–8× GH amplification with minimal interference with cortisol or prolactin.
              </p>
            </div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link href="/products/cjc1295-ipamorelin" className="btn-primary">
                View Product Details <ArrowRight size={14} />
              </Link>
              <a href={AFFILIATE_BASE} target="_blank" rel="nofollow noopener noreferrer" className="btn-secondary">
                Shop Now <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </section>

        {/* ── RELATED LINKS ─────────────────────────────────────────── */}
        <RelatedLinks currentPath="/cjc-1295-with-dac-vs-without-dac" />

        {/* ── FINAL CTA ─────────────────────────────────────────────── */}
        <section style={{ padding: '3.5rem 0 5rem' }}>
          <div style={{
            background: 'linear-gradient(160deg, #0a0a14 0%, #131320 100%)',
            borderRadius: 24,
            padding: '3.5rem',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', top: '-60px', left: '50%', transform: 'translateX(-50%)',
              width: 400, height: 400, borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(212,168,67,0.1) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />
            <div style={{ position: 'relative' }}>
              <div style={{
                fontSize: '0.65rem', fontWeight: 800, color: '#d4a843',
                textTransform: 'uppercase', letterSpacing: '0.16em', marginBottom: '1.25rem',
              }}>
                our supplier
              </div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.75rem)', fontWeight: 900, color: '#ffffff', lineHeight: 1.2, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
                Source Research-Grade{' '}
                <span style={{
                  background: 'linear-gradient(90deg, #d4a843 0%, #f5d07a 50%, #d4a843 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  CJC-1295
                </span>
              </h2>
              <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.5)', maxWidth: 480, margin: '0 auto 2rem', lineHeight: 1.7 }}>
                Third-party tested. Certificate of analysis available. For laboratory research use only.
              </p>
              <a
                href={AFFILIATE_BASE}
                target="_blank"
                rel="nofollow noopener noreferrer"
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
