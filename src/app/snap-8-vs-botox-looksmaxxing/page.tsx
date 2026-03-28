'use client'
import Link from 'next/link'
import { ArrowRight, ExternalLink, Zap, FlaskConical, AlertCircle, CheckCircle, Star } from 'lucide-react'
import { AFFILIATE_BASE, AFFILIATE_PRODUCT } from '@/lib/products'
import RelatedLinks from '@/components/RelatedLinks'

const comparison = [
  {
    attribute: 'Administration',
    botox: 'Injectable — clinic procedure, needle delivery into targeted muscles',
    snap8: 'Topical serum or cream — self-applied to expression line areas',
    advantage: 'snap8',
    note: 'SNAP-8 requires no clinician, no injections, no procedure',
  },
  {
    attribute: 'Mechanism',
    botox: 'Cleaves SNAP-25 (SNARE protein) → irreversible acetylcholine blockade → full local paralysis',
    snap8: 'Competitively inhibits SNAP-25 binding domain → partial, reversible acetylcholine reduction → reduced contraction force',
    advantage: 'neutral',
    note: 'Both target the same SNARE complex — different depth of inhibition',
  },
  {
    attribute: 'Onset of Effect',
    botox: '3–5 days for initial effect, full effect at 10–14 days',
    snap8: 'Gradual softening at 4–6 weeks, maximal results at 8–12 weeks',
    advantage: 'botox',
    note: 'Botox is significantly faster for acute results',
  },
  {
    attribute: 'Duration',
    botox: '3–6 months per treatment, then repeat injection required',
    snap8: 'Maintained with ongoing daily application; no loading-then-lapse dynamic',
    advantage: 'snap8',
    note: 'SNAP-8 does not wear off — effects persist with continued use',
  },
  {
    attribute: 'Effect Magnitude',
    botox: 'High — can fully eliminate expression line movement; risk of "frozen" look with over-treatment',
    snap8: 'Moderate — reduces line depth and movement; preserves natural facial expression',
    advantage: 'neutral',
    note: 'Trade-off: Botox is more powerful; SNAP-8 is more subtle and natural-looking',
  },
  {
    attribute: 'Skin Regeneration',
    botox: 'None — acts only on neuromuscular junction, no dermal remodeling',
    snap8: 'None alone — but pairs synergistically with GHK-Cu for collagen remodeling',
    advantage: 'snap8',
    note: 'SNAP-8 + GHK-Cu stack addresses both muscular tension AND dermal structure',
  },
  {
    attribute: 'Accessibility',
    botox: 'Requires medical professional, clinic visit, prescription (in some jurisdictions)',
    snap8: 'Research peptide — available without prescription for laboratory research use',
    advantage: 'snap8',
    note: 'Accessibility advantage varies by jurisdiction',
  },
  {
    attribute: 'Reversibility',
    botox: 'Irreversible per treatment — wears off as SNAP-25 regenerates over 3–6 months',
    snap8: 'Immediately reversible — stop application and effect dissipates',
    advantage: 'snap8',
    note: 'SNAP-8 can be discontinued at any time without lasting effect',
  },
]

const timelineStages = [
  {
    week: 'Week 1–2',
    phase: 'Initiation',
    color: '#a78bfa',
    snap8: 'SNAP-8 begins competitive inhibition of SNAP-25 binding sites. Acetylcholine vesicle fusion efficiency begins reducing. No visible changes at this stage — the molecular groundwork is being established.',
    ghkcu: 'GHK-Cu initiates antioxidant gene upregulation (SOD, catalase). Copper binding and gene modulation cascade begins. Early hydration improvements in some subjects.',
    notice: 'Subjective improvement in skin hydration. No visible line changes yet.',
  },
  {
    week: 'Week 3–4',
    phase: 'Early Response',
    color: '#c084fc',
    snap8: 'Cumulative reduction in acetylcholine activity begins visibly softening micro-expression tension. Lines appear slightly less etched at rest. Most noticeable in areas of highest daily muscle use (forehead, crow\'s feet).',
    ghkcu: 'Collagen I and III gene upregulation begins. TIMP-1 and TIMP-2 elevation slows collagen breakdown. Skin texture and tone improvements becoming visible.',
    notice: 'Slight softening of expression lines at rest. Improved skin texture and hydration.',
  },
  {
    week: 'Week 6–8',
    phase: 'Visible Results',
    color: '#d4a843',
    snap8: 'Established inhibition cycle producing clear reduction in dynamic line depth. Forehead lines, glabellar lines (11s), and crow\'s feet all respond to consistent twice-daily application. Expression movement preserved but amplitude reduced.',
    ghkcu: 'Active collagen matrix remodeling. Dermis thickening measurable. Fine lines and skin texture significantly improved. Elastin upregulation improving skin rebound speed.',
    notice: 'Clear softening of expression lines. Improved skin firmness and reduced fine line depth.',
  },
  {
    week: 'Week 10–12',
    phase: 'Maximal Effect',
    color: '#34d399',
    snap8: 'Maximal SNAP-8 efficacy window. Continued twice-daily application maintains and deepens results. Some subjects note additional improvement beyond week 8 as the compound establishes consistent inhibition pattern.',
    ghkcu: 'Dermal collagen and elastin at peak remodeling phase. Measurable reduction in wrinkle depth and improved skin density. Skin appears thicker, firmer, more luminous.',
    notice: 'Best combined results of the stack. Expression lines significantly softened. Skin collagen density measurably improved.',
  },
]

const protocol = [
  {
    step: '01',
    time: 'Morning',
    title: 'Cleanse + GHK-Cu',
    color: '#a78bfa',
    instructions: 'Cleanse face with gentle, pH-balanced cleanser. Apply GHK-Cu serum to entire face and neck. Allow to fully absorb (10–15 minutes). The aqueous copper peptide solution penetrates the stratum corneum and begins interaction with fibroblasts in the dermis.',
    note: 'GHK-Cu applied first — its smaller molecular penetration pathway should be established before SNAP-8 layer',
  },
  {
    step: '02',
    time: 'Morning (after absorption)',
    title: 'SNAP-8 Application',
    color: '#d4a843',
    instructions: 'Apply SNAP-8 serum or cream to expression line target areas: forehead horizontal lines, glabellar lines (between brows), crow\'s feet, perioral lines. Massage gently into skin with upward strokes. Allow to fully dry before applying sunscreen.',
    note: 'Focus application on areas of highest facial muscle activity — these respond fastest',
  },
  {
    step: '03',
    time: 'Evening',
    title: 'Double Application',
    color: '#34d399',
    instructions: 'Repeat the same sequence: GHK-Cu first, then SNAP-8 after absorption. Evening application benefits from longer dwell time on skin and interaction with overnight skin repair processes. Growth hormone peaks during deep sleep — this is when GHK-Cu\'s collagen signals are most effectively amplified.',
    note: 'Twice-daily application is critical for SNAP-8 efficacy — single daily application produces significantly weaker results',
  },
  {
    step: '04',
    time: 'Weekly',
    title: 'Assessment + Consistency',
    color: '#22d3ee',
    instructions: 'Take standardized reference photos in consistent lighting (same lamp position, same facial expression) at weeks 0, 4, 8, 12. Assess line depth at rest and in expression. Most subjects see clear visible improvement by week 8; maximal results at week 12.',
    note: 'Consistency is the primary variable — irregular application significantly reduces efficacy',
  },
]

export default function Snap8VsBotoxPage() {
  return (
    <div style={{ background: '#ffffff', minHeight: '100vh' }}>

      {/* Hero */}
      <div style={{
        background: 'linear-gradient(160deg, #12080a 0%, #1a0a1a 50%, #0a0a14 100%)',
        padding: '6rem 2rem 5rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: '-60px', right: '-40px',
          width: 440, height: 440,
          background: 'radial-gradient(circle, rgba(167,139,250,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '-60px', left: '25%',
          width: 360, height: 360,
          background: 'radial-gradient(circle, rgba(212,168,67,0.09) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
          <div style={{ maxWidth: 840 }}>
            <div className="section-label" style={{ color: '#a78bfa' }}>
              Expression Line Science
            </div>
            <h1 className="heading-xl" style={{ color: '#ffffff', marginBottom: '1.5rem' }}>
              SNAP-8 vs Botox<br />
              <span className="gold-text">The Peptide Alternative</span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: 700 }}>
              Both target the SNARE complex. One is a botulinum toxin injected by a clinician. The other is an 8-amino-acid peptide applied topically. A head-to-head analysis of mechanism, efficacy, timeline, and cost — and the protocol that combines SNAP-8 with GHK-Cu for full expression line optimization.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: '2rem' }}>
              <a
                href={AFFILIATE_PRODUCT('snap-8')}
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="btn-primary"
              >
                View SNAP-8 <ExternalLink size={14} />
              </a>
              <Link href="/looksmaxxing-peptides-guide" className="btn-secondary"
                style={{ color: '#e0e0f0', borderColor: 'rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.05)' }}>
                Looksmaxxing Guide <ArrowRight size={14} />
              </Link>
            </div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '8px 14px',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 100,
              fontSize: '0.82rem',
              color: 'rgba(255,255,255,0.5)',
            }}>
              <AlertCircle size={12} style={{ color: '#fb923c' }} />
              For laboratory and research use only. Not for human consumption.
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div style={{ background: '#0a0a14', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            borderTop: '2px solid rgba(167,139,250,0.4)',
          }}>
            {[
              { stat: 'SNARE', label: 'Shared biological target', sub: 'both inhibit SNAP-25 activity' },
              { stat: '8 aa', label: 'SNAP-8 peptide length', sub: 'octapeptide — Ac-EEMQRR-NH₂ fragment' },
              { stat: '4–8 wk', label: 'SNAP-8 visible results onset', sub: 'vs 3–5 days for Botox' },
              { stat: '0', label: 'Injections required', sub: 'SNAP-8 is topically applied' },
            ].map((item, i) => (
              <div key={i} style={{
                padding: '1.5rem',
                borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none',
              }}>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#a78bfa', lineHeight: 1 }}>
                  {item.stat}
                </div>
                <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.55)', marginTop: 6, lineHeight: 1.5 }}>
                  {item.label}
                </div>
                <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.3)', marginTop: 3 }}>
                  {item.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>

        {/* Mechanism Section */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
          <div className="section-label">The Science</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '0.75rem' }}>
            How They Both Work — And Why They Differ
          </h2>
          <p style={{ color: '#555570', fontSize: '1.05rem', marginBottom: '3rem', maxWidth: 720 }}>
            SNAP-8 was specifically designed as a topical alternative to botulinum toxin by targeting the same downstream pathway — the SNARE protein complex responsible for acetylcholine vesicle fusion at the neuromuscular junction.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
            {/* Botox */}
            <div style={{
              background: 'rgba(251,146,60,0.05)',
              border: '1px solid rgba(251,146,60,0.2)',
              borderTop: '4px solid #fb923c',
              borderRadius: 20,
              padding: '2rem',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1.25rem' }}>
                <FlaskConical size={20} style={{ color: '#fb923c' }} />
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0a0a14', margin: 0 }}>Botulinum Toxin (Botox)</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div>
                  <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#888898', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>Mechanism</div>
                  <p style={{ color: '#444458', fontSize: '0.92rem', lineHeight: 1.7, margin: 0 }}>
                    Botulinum toxin type A (onabotulinumtoxinA) is a protein that irreversibly cleaves SNAP-25 — a key SNARE protein involved in acetylcholine vesicle docking and fusion at the presynaptic membrane. Once SNAP-25 is cleaved, the neuromuscular junction cannot release acetylcholine, and the targeted muscle is unable to contract.
                  </p>
                </div>
                <div>
                  <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#888898', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>Effect Duration</div>
                  <p style={{ color: '#444458', fontSize: '0.92rem', lineHeight: 1.7, margin: 0 }}>
                    Effect lasts until the nerve terminal synthesizes new SNAP-25 protein — typically 3–6 months. The muscle is functionally paralyzed for this period, then regenerates.
                  </p>
                </div>
                <div style={{
                  background: 'rgba(251,146,60,0.08)',
                  borderRadius: 10,
                  padding: '0.75rem 1rem',
                  display: 'flex', flexDirection: 'column', gap: 5,
                }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#fb923c' }}>Key Characteristic</div>
                  <div style={{ fontSize: '0.85rem', color: '#555570' }}>Irreversible per treatment. Full paralysis. Rapid onset (days).</div>
                </div>
              </div>
            </div>
            {/* SNAP-8 */}
            <div style={{
              background: 'rgba(167,139,250,0.05)',
              border: '1px solid rgba(167,139,250,0.2)',
              borderTop: '4px solid #a78bfa',
              borderRadius: 20,
              padding: '2rem',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1.25rem' }}>
                <Zap size={20} style={{ color: '#a78bfa' }} />
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0a0a14', margin: 0 }}>SNAP-8 (Acetyl Octapeptide-3)</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div>
                  <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#888898', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>Mechanism</div>
                  <p style={{ color: '#444458', fontSize: '0.92rem', lineHeight: 1.7, margin: 0 }}>
                    SNAP-8 (Ac-Glu-Glu-Met-Gln-Arg-Arg-Ala-Asp-NH₂) is an 8-amino-acid peptide fragment that mimics the N-terminal region of SNAP-25. It competitively inhibits SNAP-25 from participating in the SNARE complex, reducing — but not eliminating — acetylcholine vesicle fusion. The result is reduced neuromuscular activity, not full paralysis.
                  </p>
                </div>
                <div>
                  <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#888898', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>Effect Duration</div>
                  <p style={{ color: '#444458', fontSize: '0.92rem', lineHeight: 1.7, margin: 0 }}>
                    Effect is sustained through ongoing application. Competitive inhibition is reversible — when application stops, native SNAP-25 outcompetes the peptide and normal function resumes. Requires daily maintenance.
                  </p>
                </div>
                <div style={{
                  background: 'rgba(167,139,250,0.08)',
                  borderRadius: 10,
                  padding: '0.75rem 1rem',
                  display: 'flex', flexDirection: 'column', gap: 5,
                }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#a78bfa' }}>Key Characteristic</div>
                  <div style={{ fontSize: '0.85rem', color: '#555570' }}>Fully reversible. Partial inhibition. Gradual onset (weeks).</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Head-to-Head Comparison Table */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
          <div className="section-label">Head-to-Head</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '0.75rem' }}>
            Complete Comparison
          </h2>
          <p style={{ color: '#555570', fontSize: '1.05rem', marginBottom: '2.5rem', maxWidth: 720 }}>
            Eight dimensions compared across mechanism, practicality, timeline, and research profile.
          </p>
          <div style={{ overflowX: 'auto', borderRadius: 18, border: '1px solid rgba(0,0,0,0.08)' }}>
            <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0, fontSize: '0.92rem', background: '#fff' }}>
              <thead>
                <tr style={{ background: '#f7f8fc' }}>
                  {['Attribute', 'Botox', 'SNAP-8', ''].map((h, i) => (
                    <th key={i} style={{
                      padding: '0.9rem 1.25rem',
                      textAlign: 'left',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: '#888898',
                      borderBottom: '1px solid rgba(0,0,0,0.07)',
                      borderRight: i < 3 ? '1px solid rgba(0,0,0,0.05)' : 'none',
                      minWidth: i === 0 ? 140 : i === 3 ? 80 : 260,
                    }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, idx) => (
                  <tr key={idx} style={{ background: idx % 2 === 1 ? 'rgba(0,0,0,0.015)' : 'transparent' }}>
                    <td style={{ padding: '1rem 1.25rem', borderBottom: idx < comparison.length - 1 ? '1px solid rgba(0,0,0,0.04)' : 'none', borderRight: '1px solid rgba(0,0,0,0.05)', fontWeight: 700, color: '#0a0a14', verticalAlign: 'top' }}>
                      {row.attribute}
                    </td>
                    <td style={{ padding: '1rem 1.25rem', borderBottom: idx < comparison.length - 1 ? '1px solid rgba(0,0,0,0.04)' : 'none', borderRight: '1px solid rgba(0,0,0,0.05)', color: '#444458', lineHeight: 1.65, verticalAlign: 'top' }}>
                      {row.botox}
                    </td>
                    <td style={{ padding: '1rem 1.25rem', borderBottom: idx < comparison.length - 1 ? '1px solid rgba(0,0,0,0.04)' : 'none', borderRight: '1px solid rgba(0,0,0,0.05)', color: '#444458', lineHeight: 1.65, verticalAlign: 'top' }}>
                      {row.snap8}
                    </td>
                    <td style={{ padding: '1rem 1.25rem', borderBottom: idx < comparison.length - 1 ? '1px solid rgba(0,0,0,0.04)' : 'none', textAlign: 'center', verticalAlign: 'top' }}>
                      {row.advantage === 'snap8' && (
                        <span style={{ display: 'inline-block', padding: '3px 10px', background: 'rgba(167,139,250,0.12)', border: '1px solid rgba(167,139,250,0.3)', borderRadius: 100, fontSize: '0.72rem', fontWeight: 700, color: '#a78bfa', whiteSpace: 'nowrap' }}>SNAP-8 ✓</span>
                      )}
                      {row.advantage === 'botox' && (
                        <span style={{ display: 'inline-block', padding: '3px 10px', background: 'rgba(251,146,60,0.12)', border: '1px solid rgba(251,146,60,0.3)', borderRadius: 100, fontSize: '0.72rem', fontWeight: 700, color: '#fb923c', whiteSpace: 'nowrap' }}>Botox ✓</span>
                      )}
                      {row.advantage === 'neutral' && (
                        <span style={{ display: 'inline-block', padding: '3px 10px', background: 'rgba(0,0,0,0.05)', border: '1px solid rgba(0,0,0,0.1)', borderRadius: 100, fontSize: '0.72rem', fontWeight: 700, color: '#888898', whiteSpace: 'nowrap' }}>Neutral</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Timeline */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
          <div className="section-label">Timeline</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '0.75rem' }}>
            SNAP-8 + GHK-Cu: What to Expect
          </h2>
          <p style={{ color: '#555570', fontSize: '1.05rem', marginBottom: '3rem', maxWidth: 720 }}>
            The SNAP-8 + GHK-Cu combination is more powerful than either compound alone — SNAP-8 addresses the muscular tension that creates lines, GHK-Cu rebuilds the collagen matrix that gives skin its structure.
          </p>
          <div style={{ position: 'relative', paddingLeft: 32 }}>
            <div style={{
              position: 'absolute', left: 11, top: 0, bottom: 0,
              width: 2, background: 'linear-gradient(to bottom, #a78bfa, #d4a843, #34d399)',
              borderRadius: 2,
            }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
              {timelineStages.map((stage, i) => (
                <div key={i} style={{ position: 'relative' }}>
                  <div style={{
                    position: 'absolute', left: -32, top: 2,
                    width: 20, height: 20, borderRadius: '50%',
                    background: stage.color,
                    boxShadow: `0 0 0 4px ${stage.color}25`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }} />
                  <div style={{
                    border: '1px solid rgba(0,0,0,0.07)',
                    borderRadius: 18,
                    padding: '1.75rem',
                    background: '#fafafa',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: '1.25rem' }}>
                      <span style={{
                        fontSize: '0.82rem', fontWeight: 800, color: stage.color,
                        background: `${stage.color}12`,
                        border: `1px solid ${stage.color}30`,
                        borderRadius: 100, padding: '3px 12px',
                      }}>{stage.week}</span>
                      <span style={{ fontSize: '0.92rem', fontWeight: 700, color: '#0a0a14' }}>{stage.phase}</span>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
                      <div>
                        <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#a78bfa', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 6 }}>SNAP-8</div>
                        <p style={{ color: '#555570', fontSize: '0.88rem', lineHeight: 1.7, margin: 0 }}>{stage.snap8}</p>
                      </div>
                      <div>
                        <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#d4a843', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 6 }}>GHK-Cu</div>
                        <p style={{ color: '#555570', fontSize: '0.88rem', lineHeight: 1.7, margin: 0 }}>{stage.ghkcu}</p>
                      </div>
                    </div>
                    <div style={{
                      marginTop: '1rem',
                      padding: '0.75rem 1rem',
                      background: `${stage.color}08`,
                      border: `1px solid ${stage.color}20`,
                      borderRadius: 10,
                    }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, color: stage.color }}>What you notice: </span>
                      <span style={{ fontSize: '0.85rem', color: '#555570' }}>{stage.notice}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Protocol */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
          <div className="section-label">The Protocol</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '0.75rem' }}>
            SNAP-8 + GHK-Cu Daily Protocol
          </h2>
          <p style={{ color: '#555570', fontSize: '1.05rem', marginBottom: '3rem', maxWidth: 720 }}>
            Twice-daily application of both compounds — sequenced correctly for optimal penetration and synergistic effect. The most critical variable is consistency: irregular application significantly reduces efficacy.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {protocol.map((step, i) => (
              <div key={i} style={{
                display: 'flex', gap: 20,
                padding: '1.75rem',
                border: '1px solid rgba(0,0,0,0.07)',
                borderLeft: `4px solid ${step.color}`,
                borderRadius: 18,
                background: '#fafafa',
                alignItems: 'flex-start',
              }}>
                <div style={{
                  width: 40, height: 40, borderRadius: '50%',
                  background: `${step.color}15`,
                  border: `2px solid ${step.color}40`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.78rem', fontWeight: 800, color: step.color,
                  flexShrink: 0,
                }}>
                  {step.step}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                    <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#0a0a14', margin: 0 }}>{step.title}</h4>
                    <span style={{ fontSize: '0.78rem', color: '#888898', fontWeight: 600 }}>{step.time}</span>
                  </div>
                  <p style={{ color: '#555570', fontSize: '0.9rem', lineHeight: 1.7, margin: '0 0 0.75rem 0' }}>{step.instructions}</p>
                  <div style={{ display: 'flex', gap: 6, alignItems: 'flex-start' }}>
                    <CheckCircle size={13} style={{ color: step.color, marginTop: 3, flexShrink: 0 }} />
                    <span style={{ fontSize: '0.84rem', color: '#888898', fontStyle: 'italic' }}>{step.note}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: '4rem 0', borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
          <div className="section-label">FAQ</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '2.5rem' }}>
            Common Questions
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0, maxWidth: 860 }}>
            {[
              {
                q: 'Does SNAP-8 work like Botox?',
                a: 'They share the same SNARE complex target, but Botox cleaves SNAP-25 irreversibly causing full paralysis, while SNAP-8 competitively inhibits SNAP-25 causing partial, reversible reduction in neuromuscular activity. SNAP-8 produces a more subtle, natural softening of expression lines rather than elimination of movement.',
              },
              {
                q: 'How long does SNAP-8 take to show results?',
                a: 'Visible softening of expression lines typically appears at 4–6 weeks with twice-daily application. Maximal results are seen at 8–12 weeks. Unlike Botox (3–5 day onset), SNAP-8\'s gradual competitive inhibition requires consistent buildup over weeks.',
              },
              {
                q: 'Can you stack SNAP-8 with GHK-Cu?',
                a: 'Yes — they are fully synergistic with no mechanistic overlap. SNAP-8 reduces the muscular tension that creates and deepens expression lines. GHK-Cu rebuilds the collagen matrix and dermal thickness that determines skin texture. Apply GHK-Cu first, wait 10–15 minutes for absorption, then apply SNAP-8 to expression line areas.',
              },
              {
                q: 'Is SNAP-8 a replacement for Botox?',
                a: 'For looksmaxxing research purposes, SNAP-8 is a compelling alternative to study for the same biological pathway — particularly for those seeking a topical, reversible compound. For acute, high-magnitude reduction of deep expression lines, Botox\'s irreversible paralysis mechanism produces faster and more dramatic results. The choice depends on magnitude of desired effect, risk tolerance, and access preference.',
              },
            ].map((faq, i) => (
              <div key={i} style={{ padding: '1.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#0a0a14', marginBottom: 8 }}>{faq.q}</h4>
                <p style={{ color: '#555570', fontSize: '0.92rem', lineHeight: 1.75, margin: 0 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '4rem 0' }}>
          <div style={{
            background: 'linear-gradient(135deg, #12080a 0%, #1a0a1a 100%)',
            borderRadius: 24,
            padding: '3rem 2.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
          }}>
            <div style={{ maxWidth: 580 }}>
              <div className="section-label" style={{ color: '#a78bfa' }}>The Stack</div>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.75rem' }}>
                SNAP-8 + GHK-Cu Protocol
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem', lineHeight: 1.7, margin: 0 }}>
                The complete expression line protocol. Twice-daily topical application of both compounds — SNARE inhibition paired with collagen matrix remodeling. Third-party HPLC tested.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <a
                href={AFFILIATE_PRODUCT('snap-8')}
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="btn-primary"
              >
                SNAP-8 <ExternalLink size={14} />
              </a>
              <a
                href={AFFILIATE_PRODUCT('ghk-cu')}
                target="_blank"
                rel="sponsored noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  padding: '10px 20px', borderRadius: 100,
                  background: 'rgba(255,255,255,0.07)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  color: 'rgba(255,255,255,0.75)',
                  fontSize: '0.88rem', fontWeight: 600,
                  textDecoration: 'none',
                }}
              >
                GHK-Cu <ExternalLink size={12} />
              </a>
            </div>
          </div>
          <div style={{ marginTop: '2rem' }}>
            <RelatedLinks currentPath="/snap-8-vs-botox-looksmaxxing" />
          </div>
        </section>

      </div>
    </div>
  )
}
