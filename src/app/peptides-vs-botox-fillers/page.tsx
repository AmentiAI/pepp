'use client'
import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, ExternalLink, CheckCircle, AlertCircle, TrendingUp, DollarSign, ChevronDown, ChevronUp, Zap } from 'lucide-react'
import { AFFILIATE_BASE } from '@/lib/products'
import RelatedLinks from '@/components/RelatedLinks'

const criteria = [
  {
    name: 'Upfront Cost',
    botox: 1,
    fillers: 1,
    peptides: 5,
    note: 'Peptides cost $170–250/year vs $1,200–2,400/year for injectables',
  },
  {
    name: 'Longevity of Effect',
    botox: 2,
    fillers: 2,
    peptides: 5,
    note: 'Botox lasts 3–4 months. Peptide benefits compound over 12–24 months and persist after dosing',
  },
  {
    name: 'Mechanism Depth',
    botox: 2,
    fillers: 1,
    peptides: 5,
    note: 'Peptides work at gene expression level. Botox blocks nerve signals. Fillers are purely volumetric',
  },
  {
    name: 'Reversibility',
    botox: 4,
    fillers: 3,
    peptides: 5,
    note: 'Peptides are fully reversible — simply stop. Botox wears off. Fillers can be dissolved but require a procedure',
  },
  {
    name: 'Downtime',
    botox: 3,
    fillers: 2,
    peptides: 5,
    note: 'Peptides have zero downtime. Botox has mild bruising risk. Fillers can cause swelling for 1–2 weeks',
  },
  {
    name: 'Risk Profile',
    botox: 2,
    fillers: 1,
    peptides: 5,
    note: 'Fillers carry vascular occlusion risk. Botox carries migration risk. Peptides have no comparable systemic risks at research dosing',
  },
  {
    name: 'Compounding Benefit',
    botox: 1,
    fillers: 1,
    peptides: 5,
    note: 'Each peptide cycle builds on the last. Procedures provide a fixed effect that disappears without repeat treatment',
  },
  {
    name: 'Long-Term ROI',
    botox: 1,
    fillers: 1,
    peptides: 5,
    note: 'Over 5 years: Botox+Fillers = $12,000–24,000. Peptides = $850–1,250. Peptide benefits also improve over time',
  },
]

const faqs = [
  {
    q: 'Can peptides actually replace Botox for wrinkle reduction?',
    a: 'For dynamic expression lines — the primary indication for Botox — SNAP-8 addresses the same neuromuscular mechanism as Botox but through a less complete signal blockade. Clinical research shows a 35% reduction in wrinkle depth with SNAP-8 vs approximately 80–90% with Botox at standard clinical doses. Peptides are not identical to Botox in effect magnitude, but they deliver meaningful wrinkle reduction without the paralysis, cost, or downtime. For mild-to-moderate dynamic lines, peptides can be a viable primary intervention. For deep-set expression lines, the optimal strategy is using peptides to maintain results between Botox appointments — reducing frequency from quarterly to semi-annually.',
  },
  {
    q: 'What about dermal fillers — can peptides replace volume loss?',
    a: 'Dermal fillers and peptides address the same problem from opposite directions. Fillers provide immediate volumetric correction by physically occupying space. Peptides — particularly GHK-Cu — restore the dermal scaffold that, when present at youthful density, provides natural volume and structural support. GHK-Cu\'s documented 28% collagen density increase over 12 weeks translates to meaningful dermal thickening, especially in thin-skinned areas like the periorbital region. Peptides will not replace the dramatic immediate effect of 1–2 syringes of filler, but they address the root cause rather than the symptom — and the improvements continue to build rather than degrade.',
  },
  {
    q: 'Is it safe to use peptides while also getting Botox or fillers?',
    a: 'There are no documented pharmacological interactions between research peptides and cosmetic injectables. GHK-Cu used topically during Botox or filler recovery may actually accelerate healing by upregulating VEGF (vascular endothelial growth factor) and wound repair genes. BPC-157 has documented benefit on vascular integrity and healing. The main practical consideration is timing: avoid applying GHK-Cu topical directly to injection sites for 48 hours post-procedure to prevent any theoretical interference with the intended depot placement of filler.',
  },
  {
    q: 'How much does a comparable peptide stack cost vs procedures?',
    a: 'A full topical peptide stack — GHK-Cu 50mg + SNAP-8 10mg + bacteriostatic water + application tools — runs approximately $100–130 for a 3–4 month supply, or $170–250 annually. Botox at standard clinical pricing runs $300–600 per session every 3–4 months, totaling $1,200–2,400 annually. Hyaluronic acid fillers run $600–1,200 per syringe, with most subjects requiring 1–2 syringes twice per year, totaling $1,200–2,400 annually. Over 5 years, the combined procedure cost reaches $12,000–24,000. The peptide protocol over 5 years costs $850–1,250 — and the effects compound rather than degrade.',
  },
  {
    q: 'When do procedures clearly win over peptides?',
    a: 'Procedures have clear advantages in three scenarios: (1) Immediate result required — before an event, photoshoot, or for dramatic rapid change. Peptides take 8–12 weeks to show peak effect. (2) Severe volume loss — significant fat pad atrophy in the midface or temples that has reached a level no amount of dermal thickening can meaningfully address. Structural filler placement here is appropriate. (3) Deep nasolabial folds or marionette lines — where the depth of the fold exceeds what dermal remodeling alone can address. In these cases, peptides as maintenance + periodic targeted procedures represents the optimal hybrid approach.',
  },
  {
    q: 'Do the peptide scores in the comparison table seem biased?',
    a: 'The scoring reflects mechanism depth, not popularity or physician endorsement. Procedures score lower on longevity because their effects objectively last 3–4 months before disappearing, while peptide-induced collagen density changes persist. They score lower on compounding benefit because each procedure resets to baseline rather than building on the prior treatment. The scores on mechanism depth reflect that Botox blocks a signal (treating the symptom of dynamic wrinkles), fillers occupy volume (treating a symptom of volume loss), while peptides address the underlying biology of dermal collagen loss. None of this means procedures are bad — the hybrid strategy section in this article is the most practical real-world application.',
  },
]

export default function PeptidesVsBotoxFillersPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  function ScoreBar({ score, color }: { score: number; color: string }) {
    return (
      <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
        {[1, 2, 3, 4, 5].map(i => (
          <div key={i} style={{
            width: 28,
            height: 10,
            borderRadius: 3,
            background: i <= score ? color : 'rgba(0,0,0,0.08)',
            transition: 'background 0.2s',
          }} />
        ))}
        <span style={{ marginLeft: 6, fontSize: '0.82rem', fontWeight: 700, color }}>{score}/5</span>
      </div>
    )
  }

  return (
    <div style={{ background: '#ffffff', minHeight: '100vh' }}>

      {/* Hero */}
      <div style={{
        background: 'linear-gradient(160deg, #0f1a2e 0%, #0a1220 50%, #07090f 100%)',
        padding: '5.5rem 2rem 5rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          background: 'radial-gradient(ellipse 60% 50% at 70% 50%, rgba(212,168,67,0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
          <div style={{ maxWidth: 820 }}>
            <div className="section-label" style={{ color: '#d4a843' }}>Comparison Analysis</div>
            <h1 className="heading-xl" style={{ color: '#ffffff', marginBottom: '1.25rem' }}>
              Peptides vs Botox vs <span className="gold-text">Dermal Fillers</span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: 680 }}>
              An honest, mechanism-based comparison across 8 criteria. The real cost analysis, the biological tradeoffs, and when each approach genuinely wins.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: '2rem' }}>
              <a href={AFFILIATE_BASE} target="_blank" rel="sponsored noopener noreferrer" className="btn-primary">
                View Peptides <ExternalLink size={14} />
              </a>
              <Link href="/looksmaxxing-peptides-guide" className="btn-secondary" style={{ color: 'rgba(255,255,255,0.75)', borderColor: 'rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.05)' }}>
                Looksmaxxing Guide <ArrowRight size={14} />
              </Link>
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 14px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 100, fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)' }}>
              <AlertCircle size={12} style={{ color: '#fb923c' }} />
              For laboratory and research use only. Not for human consumption.
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div style={{ background: '#0a0a14', padding: '1.5rem 2rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
          {[
            { val: '$12K–24K', label: 'Botox + Fillers over 5 years' },
            { val: '$850–1,250', label: 'Peptide stack over 5 years' },
            { val: '35%', label: 'SNAP-8 wrinkle depth reduction' },
            { val: '28%', label: 'GHK-Cu collagen density increase' },
          ].map(s => (
            <div key={s.label}>
              <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#d4a843', letterSpacing: '-0.03em' }}>{s.val}</div>
              <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)', marginTop: 2 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>

        {/* Why Mechanism Matters */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label">Foundational Principle</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '1.25rem' }}>
            Why Mechanism Matters — Not Just <span className="gold-text">Symptoms</span>
          </h2>
          <div className="rg-2col" style={{ gap: '4rem', alignItems: 'start' }}>
            <div>
              <p style={{ color: '#444458', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '1.05rem' }}>
                The fundamental problem with evaluating anti-aging interventions by their visible results alone is that identical surface effects can be achieved through radically different mechanisms — with dramatically different long-term implications. A face that appears wrinkle-free after Botox injection and a face that appears wrinkle-free after 24 months of GHK-Cu plus SNAP-8 usage look similar in a photograph but represent entirely different biological states.
              </p>
              <p style={{ color: '#444458', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '1.05rem' }}>
                Botox achieves its effect by blocking acetylcholine release at the neuromuscular junction, temporarily paralyzing the target muscle. When the toxin degrades — typically at 3–4 months — the muscle function returns fully, and the wrinkle returns to its prior depth. Nothing about the underlying biology has changed. The skin has not thickened, the collagen has not increased, the dermis has not remodeled. The procedure is effective, but it addresses a symptom without modifying the disease process.
              </p>
              <p style={{ color: '#444458', lineHeight: 1.85, fontSize: '1.05rem' }}>
                Hyaluronic acid fillers work by a purely mechanical mechanism: a gel substance occupies volume in the tissue, creating the appearance of restored fullness. When the HA is degraded by hyaluronidase enzymes — typically over 6–18 months depending on product and placement — the volume disappears. Again, nothing about the underlying biology changes. In some cases, repeated filler injections may actually suppress the fibroblast activity responsible for natural collagen synthesis by mechanically compressing the tissue environment.
              </p>
            </div>
            <div>
              <p style={{ color: '#444458', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '1.05rem' }}>
                Peptides operate at a fundamentally different level. GHK-Cu modulates over 4,000 human genes, including direct upregulation of collagen type I, collagen type III, elastin, decorin, VEGF, and antioxidant defense enzymes. When a peptide cycle produces a 28% increase in dermal collagen density, that collagen is real structural tissue that has been synthesized — not an injected substance that will be degraded. The gene expression changes have an epigenetic component, meaning some transcriptional shifts persist beyond the dosing period.
              </p>
              <p style={{ color: '#444458', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '1.05rem' }}>
                SNAP-8 targets the same neuromuscular mechanism as Botox — reducing acetylcholine vesicle docking at the synaptic terminal — but with less complete blockade, producing a meaningful reduction in muscle contraction without full paralysis. The 35% wrinkle depth reduction documented in clinical assessments is real and measurable, achieved through the same signaling pathway as Botox but at a fraction of the cost and risk.
              </p>
              <p style={{ color: '#444458', lineHeight: 1.85, fontSize: '1.05rem' }}>
                This mechanism-depth distinction is why the comparison table scores diverge so sharply on long-term ROI and compounding benefit. Procedures require continuous repetition to maintain a static result. Peptides produce biology that compounds — each cycle building incrementally on the tissue quality established by prior cycles.
              </p>
              <div style={{ display: 'flex', gap: 12, marginTop: '1.5rem', flexWrap: 'wrap' }}>
                <Link href="/ghk-cu-results-timeline" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#d4a843', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>
                  GHK-Cu Results Timeline <ArrowRight size={14} />
                </Link>
                <Link href="/snap-8-vs-botox-looksmaxxing" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#a78bfa', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>
                  SNAP-8 vs Botox Deep Dive <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Scoring Table */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label">Scoring Matrix</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '0.5rem' }}>
            8-Criteria Comparison <span className="gold-text">Score Table</span>
          </h2>
          <p style={{ color: '#666688', fontSize: '1.05rem', marginBottom: '2.5rem', maxWidth: 640 }}>
            Each criterion scored 1–5. Lower scores are not inherently bad — they reflect relative position on that specific dimension.
          </p>

          {/* Column Headers */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '1rem', marginBottom: '1rem', padding: '0 1.5rem' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#888', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Criterion</div>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#888', textTransform: 'uppercase', letterSpacing: '0.1em', textAlign: 'center' }}>Botox</div>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#888', textTransform: 'uppercase', letterSpacing: '0.1em', textAlign: 'center' }}>Fillers</div>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#d4a843', textTransform: 'uppercase', letterSpacing: '0.1em', textAlign: 'center' }}>Peptides</div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {criteria.map((c, i) => (
              <div key={c.name} style={{
                background: i % 2 === 0 ? '#f9f9fd' : '#ffffff',
                border: '1px solid rgba(0,0,0,0.07)',
                borderRadius: 14,
                padding: '1.25rem 1.5rem',
              }}>
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '1rem', alignItems: 'center', marginBottom: '0.6rem' }}>
                  <div style={{ fontWeight: 700, color: '#0a0a14', fontSize: '0.97rem' }}>{c.name}</div>
                  <div style={{ display: 'flex', justifyContent: 'center' }}><ScoreBar score={c.botox} color="#fb923c" /></div>
                  <div style={{ display: 'flex', justifyContent: 'center' }}><ScoreBar score={c.fillers} color="#a78bfa" /></div>
                  <div style={{ display: 'flex', justifyContent: 'center' }}><ScoreBar score={c.peptides} color="#d4a843" /></div>
                </div>
                <p style={{ color: '#666688', fontSize: '0.88rem', margin: 0, lineHeight: 1.6 }}>{c.note}</p>
              </div>
            ))}
          </div>

          {/* Score Totals */}
          <div className="rg-3col" style={{ marginTop: '2rem' }}>
            {[
              { label: 'Botox Total', score: criteria.reduce((a, c) => a + c.botox, 0), color: '#fb923c', max: 40 },
              { label: 'Fillers Total', score: criteria.reduce((a, c) => a + c.fillers, 0), color: '#a78bfa', max: 40 },
              { label: 'Peptides Total', score: criteria.reduce((a, c) => a + c.peptides, 0), color: '#d4a843', max: 40 },
            ].map(t => (
              <div key={t.label} style={{
                padding: '1.5rem',
                background: '#0a0a14',
                borderRadius: 16,
                textAlign: 'center',
                border: `2px solid ${t.color}22`,
              }}>
                <div style={{ fontSize: '2.8rem', fontWeight: 900, color: t.color, letterSpacing: '-0.03em' }}>{t.score}<span style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.3)' }}>/{t.max}</span></div>
                <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.88rem', marginTop: 4 }}>{t.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Cost Analysis */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label">Financial Analysis</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '1.25rem' }}>
            5-Year Cost Analysis: <span className="gold-text">Real Numbers</span>
          </h2>
          <p style={{ color: '#444458', lineHeight: 1.85, marginBottom: '2.5rem', fontSize: '1.05rem', maxWidth: 720 }}>
            Cosmetic procedures are rarely evaluated on a multi-year cost basis. When you calculate the cumulative spend required to maintain a procedure-dependent result versus the cumulative spend on a compounding peptide protocol, the financial divergence is striking.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {[
              {
                label: 'Botox Only',
                annual: '$1,200–2,400/year',
                fiveYear: '$6,000–12,000',
                sessions: '3–4 sessions/year at $300–600 each',
                color: '#fb923c',
                note: 'Zero residual benefit if you stop. Results disappear within 4 months of last treatment.',
              },
              {
                label: 'Fillers Only',
                annual: '$1,200–2,400/year',
                fiveYear: '$6,000–12,000',
                sessions: '2 sessions/year at $600–1,200 per syringe',
                color: '#a78bfa',
                note: 'Filler degrades and must be repeated. Potential for cumulative tissue changes with long-term use.',
              },
              {
                label: 'Botox + Fillers',
                annual: '$2,400–4,800/year',
                fiveYear: '$12,000–24,000',
                sessions: 'Combined quarterly Botox + biannual filler sessions',
                color: '#ef4444',
                note: 'Full maintenance of a combined procedure program over 5 years. Does not include consultation fees, touch-ups, or complication costs.',
              },
              {
                label: 'Peptide Stack',
                annual: '$170–250/year',
                fiveYear: '$850–1,250',
                sessions: 'Daily topical protocol. No clinic visits required.',
                color: '#d4a843',
                note: 'Benefits compound over time. Collagen synthesized in year 1 does not disappear — it continues maturing and organizing in years 2–5.',
              },
            ].map(item => (
              <div key={item.label} style={{
                padding: '1.75rem',
                background: '#f9f9fd',
                border: '1px solid rgba(0,0,0,0.07)',
                borderTop: `4px solid ${item.color}`,
                borderRadius: 18,
              }}>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0a0a14', marginBottom: '0.75rem' }}>{item.label}</div>
                <div style={{ fontSize: '2rem', fontWeight: 900, color: item.color, letterSpacing: '-0.03em', marginBottom: '0.25rem' }}>{item.fiveYear}</div>
                <div style={{ fontSize: '0.82rem', color: '#888', marginBottom: '0.75rem' }}>over 5 years</div>
                <div style={{ fontSize: '0.9rem', color: '#444458', marginBottom: '0.75rem', fontWeight: 600 }}>{item.annual}/year</div>
                <div style={{ fontSize: '0.85rem', color: '#666688', lineHeight: 1.6, marginBottom: '0.75rem' }}>{item.sessions}</div>
                <div style={{ fontSize: '0.85rem', color: '#555570', lineHeight: 1.6, borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '0.75rem' }}>{item.note}</div>
              </div>
            ))}
          </div>
        </section>

        {/* When Procedures Win */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label">Honest Assessment</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '1.25rem' }}>
            When Procedures Genuinely <span className="gold-text">Win</span>
          </h2>
          <p style={{ color: '#444458', lineHeight: 1.85, marginBottom: '2rem', fontSize: '1.05rem', maxWidth: 720 }}>
            An honest comparison requires acknowledging the scenarios where procedural intervention is the clearly superior option. Peptides do not replace procedures in every context. Here is where each shines clearly:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
            {[
              {
                title: 'Immediate Result Required',
                icon: <Zap size={20} />,
                color: '#fb923c',
                body: 'Peptides require 8–12 weeks to show peak effect. If you need visible improvement for a specific event, photoshoot, or social situation within days, Botox or fillers provide results that peptides physically cannot match in that timeframe. Speed is a genuine procedural advantage.',
              },
              {
                title: 'Severe Structural Volume Loss',
                icon: <TrendingUp size={20} />,
                color: '#a78bfa',
                body: 'Significant midface fat pad atrophy or temporal hollowing that has reached advanced stages may require structural filler placement that no amount of dermal thickening can address. When the subcutaneous fat compartments have substantially deflated, mechanical volume restoration is appropriate.',
              },
              {
                title: 'Deep Set Folds and Creases',
                icon: <CheckCircle size={20} />,
                color: '#34d399',
                body: 'Nasolabial folds and marionette lines at advanced depth — particularly where the fold shadow is caused by anatomical positioning rather than skin quality alone — may require filler placement to lift the tissue. Peptides improve skin quality but do not re-position facial fat compartments.',
              },
              {
                title: 'Professional Photography / Media',
                icon: <DollarSign size={20} />,
                color: '#22d3ee',
                body: 'For individuals whose income depends on their appearance under studio lighting and camera — models, actors, on-camera talent — the precision and predictability of Botox for expression line control may justify the ongoing cost as a professional investment. This is a use-case-specific argument.',
              },
            ].map(item => (
              <div key={item.title} style={{
                padding: '1.75rem',
                background: '#f9f9fd',
                border: '1px solid rgba(0,0,0,0.07)',
                borderLeft: `4px solid ${item.color}`,
                borderRadius: '0 16px 16px 0',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '0.75rem', color: item.color }}>
                  {item.icon}
                  <span style={{ fontWeight: 800, color: '#0a0a14', fontSize: '1rem' }}>{item.title}</span>
                </div>
                <p style={{ color: '#444458', lineHeight: 1.8, margin: 0, fontSize: '0.97rem' }}>{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Optimal Combination Strategy */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label">Advanced Strategy</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '1.25rem' }}>
            The Optimal Combination <span className="gold-text">Strategy</span>
          </h2>
          <p style={{ color: '#444458', lineHeight: 1.85, marginBottom: '2rem', fontSize: '1.05rem', maxWidth: 720 }}>
            The most sophisticated approach does not choose between peptides and procedures — it uses each for what it does best. Peptides as the continuous biological foundation. Procedures as targeted, infrequent structural corrections. This combination reduces procedure frequency, extends results, and lowers lifetime cost significantly.
          </p>
          <div className="rg-2col" style={{ gap: '3rem' }}>
            <div>
              <h3 style={{ fontWeight: 800, color: '#0a0a14', fontSize: '1.2rem', marginBottom: '1rem' }}>Layer 1: Continuous Peptide Foundation</h3>
              <p style={{ color: '#444458', lineHeight: 1.8, marginBottom: '1rem', fontSize: '0.97rem' }}>
                GHK-Cu applied topically daily improves dermal collagen density, skin thickness, and elastin content. This creates a higher-quality tissue bed that responds better to procedures when they are performed, extends the duration of filler results (better tissue structure = better filler support), and reduces the severity of expression lines over time — decreasing the Botox dose required.
              </p>
              <p style={{ color: '#444458', lineHeight: 1.8, fontSize: '0.97rem' }}>
                SNAP-8 applied daily to expression-prone zones (forehead, periorbital, glabellar) reduces dynamic line formation continuously, meaning that when Botox wears off at 3–4 months, the lines have not progressed to the same depth they would reach without peptide support. This allows Botox intervals to extend from 12 weeks to 16–20 weeks in many subjects.
              </p>
            </div>
            <div>
              <h3 style={{ fontWeight: 800, color: '#0a0a14', fontSize: '1.2rem', marginBottom: '1rem' }}>Layer 2: Targeted Procedural Correction</h3>
              <p style={{ color: '#444458', lineHeight: 1.8, marginBottom: '1rem', fontSize: '0.97rem' }}>
                With a strong peptide foundation, procedures become less frequent corrective tools rather than ongoing maintenance requirements. Botox sessions extend from quarterly to semi-annual. Filler amounts required per session decrease as the dermis provides more natural structural support. Over 5 years, this hybrid approach may cost $3,000–6,000 — far less than the $12,000–24,000 of a procedure-only program, while producing superior long-term tissue quality.
              </p>
              <p style={{ color: '#444458', lineHeight: 1.8, fontSize: '0.97rem' }}>
                Post-procedure, GHK-Cu accelerates healing through VEGF upregulation and wound repair gene activation. BPC-157 during recovery from any facial procedure reduces healing time through its documented effects on angiogenesis and tissue repair. The peptide-procedure hybrid approach is not a compromise — it is the highest-ROI strategy available.
              </p>
              <div style={{ marginTop: '1.5rem', display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Link href="/looksmaxxing-peptide-stack-protocol" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#d4a843', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>
                  Full Stack Protocol <ArrowRight size={14} />
                </Link>
                <Link href="/peptide-looksmaxxing-daily-routine" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#a78bfa', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>
                  Daily Routine Guide <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Product CTA */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {[
              { name: 'GHK-Cu', desc: 'Collagen density, skin thickness, dermal remodeling — the core anti-aging peptide.', href: '/products/ghk-cu', color: '#d4a843' },
              { name: 'SNAP-8', desc: 'The peptide Botox alternative — reduces neuromuscular expression line formation.', href: '/products/snap-8', color: '#a78bfa' },
              { name: 'BPC-157', desc: 'Systemic healing and recovery support for skin and tissue regeneration.', href: '/products/bpc-157', color: '#34d399' },
            ].map(p => (
              <div key={p.name} style={{ padding: '1.75rem', background: '#f9f9fd', border: '1px solid rgba(0,0,0,0.07)', borderTop: `3px solid ${p.color}`, borderRadius: 18 }}>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0a0a14', marginBottom: '0.5rem' }}>{p.name}</div>
                <p style={{ color: '#666688', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '1rem' }}>{p.desc}</p>
                <div style={{ display: 'flex', gap: 10 }}>
                  <Link href={p.href} style={{ display: 'inline-flex', alignItems: 'center', gap: 5, color: p.color, textDecoration: 'none', fontWeight: 600, fontSize: '0.88rem' }}>
                    Learn More <ArrowRight size={12} />
                  </Link>
                  <a href={AFFILIATE_BASE} target="_blank" rel="sponsored noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 5, color: '#888', textDecoration: 'none', fontWeight: 600, fontSize: '0.88rem' }}>
                    Buy <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label">FAQ</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '2rem' }}>
            Common Questions
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxWidth: 800 }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ border: '1px solid rgba(0,0,0,0.08)', borderRadius: 14, overflow: 'hidden' }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.25rem 1.5rem', background: openFaq === i ? '#f9f9fd' : '#ffffff', border: 'none', cursor: 'pointer', textAlign: 'left', gap: '1rem' }}
                >
                  <span style={{ fontWeight: 700, color: '#0a0a14', fontSize: '1rem', lineHeight: 1.4 }}>{faq.q}</span>
                  {openFaq === i ? <ChevronUp size={18} style={{ color: '#d4a843', flexShrink: 0 }} /> : <ChevronDown size={18} style={{ color: '#888', flexShrink: 0 }} />}
                </button>
                {openFaq === i && (
                  <div style={{ padding: '0 1.5rem 1.25rem', background: '#f9f9fd' }}>
                    <p style={{ color: '#444458', lineHeight: 1.8, margin: 0, fontSize: '0.97rem' }}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Dark CTA */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div style={{ background: 'linear-gradient(135deg, #0a0a14 0%, #1a0a2e 100%)', borderRadius: 24, padding: '3.5rem', textAlign: 'center' }}>
            <div className="section-label" style={{ color: '#d4a843', justifyContent: 'center' }}>Start the Protocol</div>
            <h2 style={{ color: '#ffffff', fontSize: '2rem', fontWeight: 900, marginBottom: '1rem' }}>
              The Peptide Foundation Is <span className="gold-text">$170/Year</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: 560, margin: '0 auto 2rem' }}>
              GHK-Cu and SNAP-8 together cost less per year than a single Botox session. The biology compounds. The cost doesn't.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={AFFILIATE_BASE} target="_blank" rel="sponsored noopener noreferrer" className="btn-primary">
                Shop Peptides <ExternalLink size={14} />
              </a>
              <Link href="/looksmaxxing-starter-stack-budget" className="btn-secondary" style={{ color: 'rgba(255,255,255,0.75)', borderColor: 'rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.06)' }}>
                Budget Stack Guide <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        <RelatedLinks currentPath="/peptides-vs-botox-fillers" />
      </div>
    </div>
  )
}
