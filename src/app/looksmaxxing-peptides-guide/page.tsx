'use client'
import Link from 'next/link'
import {
  ArrowRight,
  ExternalLink,
  Sparkles,
  Zap,
  TrendingUp,
  Activity,
  FlaskConical,
  AlertCircle,
  CheckCircle,
  Star,
} from 'lucide-react'
import { AFFILIATE_BASE } from '@/lib/products'
import RelatedLinks from '@/components/RelatedLinks'

const goalMatrix = [
  {
    goal: 'Skin Collagen & Texture',
    peptide: 'GHK-Cu',
    mechanism: 'Modulates 4,000+ genes for collagen I, III, elastin',
    timeline: '4–12 weeks',
    color: '#a78bfa',
  },
  {
    goal: 'Expression Wrinkles',
    peptide: 'SNAP-8',
    mechanism: 'Inhibits acetylcholine at neuromuscular junction',
    timeline: '4–8 weeks',
    color: '#a78bfa',
  },
  {
    goal: 'Muscle Hyperplasia',
    peptide: 'IGF-1 LR3',
    mechanism: 'Activates satellite cells, 3× native IGF-1 potency',
    timeline: '8–12 weeks',
    color: '#fb923c',
  },
  {
    goal: 'GH Optimization',
    peptide: 'CJC-1295 + Ipamorelin',
    mechanism: '4–8× GH pulse amplification during sleep',
    timeline: '8–16 weeks',
    color: '#fb923c',
  },
  {
    goal: 'Fat Loss & Vascularity',
    peptide: 'Retatrutide',
    mechanism: 'Triple GLP-1/GIP/Glucagon agonist, 24.2% weight loss',
    timeline: '12–24 weeks',
    color: '#d4a843',
  },
  {
    goal: 'Recovery & Healing',
    peptide: 'BPC-157',
    mechanism: 'VEGF upregulation, tendon and gut repair',
    timeline: '4–8 weeks',
    color: '#22d3ee',
  },
]

export default function LooksmaxxingGuide() {
  return (
    <div style={{ background: '#ffffff', minHeight: '100vh' }}>

      {/* ── Hero ── */}
      <div style={{
        background: 'linear-gradient(160deg, #0a0a14 0%, #1a1a2e 60%, #0f0f1f 100%)',
        padding: '6rem 2rem 5rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Decorative glow */}
        <div style={{
          position: 'absolute', top: '-80px', right: '-80px',
          width: 480, height: 480,
          background: 'radial-gradient(circle, rgba(167,139,250,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '-60px', left: '40%',
          width: 320, height: 320,
          background: 'radial-gradient(circle, rgba(212,168,67,0.09) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
          <div style={{ maxWidth: 820 }}>
            <div className="section-label" style={{ color: '#a78bfa' }}>
              Looksmaxxing Science
            </div>
            <h1 className="heading-xl" style={{ color: '#ffffff', marginBottom: '1.5rem' }}>
              The Complete<br />
              <span className="gold-text">Looksmaxxing Peptide Guide</span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: '#9090a8', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: 680 }}>
              A science-backed approach to aesthetic optimization using research peptides.
              Goal-to-peptide matrix, mechanism deep-dives, and beginner stack recommendations — all grounded in published data.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link href="/stacks" className="btn-primary">
                View All Protocols <ArrowRight size={14} />
              </Link>
              <a href={AFFILIATE_BASE} target="_blank" rel="nofollow noopener noreferrer" className="btn-secondary"
                style={{ color: '#e0e0f0', borderColor: 'rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.05)' }}>
                Shop Compounds <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>

        {/* ── Goal Matrix ── */}
        <section style={{ padding: '4rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label">Goal-to-Peptide Reference</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '0.75rem' }}>
            Peptide by Looksmaxxing Goal
          </h2>
          <p style={{ color: '#555570', fontSize: '1.05rem', marginBottom: '2.5rem', maxWidth: 680 }}>
            Map your primary objective to the compound with the most direct mechanistic match. This matrix reflects published preclinical and clinical research data.
          </p>
          <div style={{ overflowX: 'auto', borderRadius: 18, border: '1px solid rgba(0,0,0,0.08)', background: '#fff' }}>
            <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0, fontSize: '0.97rem' }}>
              <thead>
                <tr style={{ background: '#f7f8fc' }}>
                  {['Goal', 'Primary Peptide', 'Mechanism', 'Timeline'].map((h, i) => (
                    <th key={h} style={{
                      padding: '0.9rem 1.25rem',
                      textAlign: 'left',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: '#888898',
                      borderBottom: '1px solid rgba(0,0,0,0.07)',
                      borderRight: i < 3 ? '1px solid rgba(0,0,0,0.05)' : 'none',
                    }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {goalMatrix.map((row, idx) => (
                  <tr key={row.goal} style={{ background: idx % 2 === 1 ? 'rgba(0,0,0,0.015)' : 'transparent' }}>
                    <td style={{ padding: '1rem 1.25rem', borderBottom: idx < goalMatrix.length - 1 ? '1px solid rgba(0,0,0,0.04)' : 'none', borderRight: '1px solid rgba(0,0,0,0.05)', fontWeight: 700, color: '#0a0a14' }}>
                      {row.goal}
                    </td>
                    <td style={{ padding: '1rem 1.25rem', borderBottom: idx < goalMatrix.length - 1 ? '1px solid rgba(0,0,0,0.04)' : 'none', borderRight: '1px solid rgba(0,0,0,0.05)' }}>
                      <span style={{
                        display: 'inline-block',
                        padding: '3px 10px',
                        background: `${row.color}12`,
                        border: `1px solid ${row.color}30`,
                        borderRadius: 100,
                        fontSize: '0.88rem',
                        fontWeight: 700,
                        color: row.color,
                      }}>{row.peptide}</span>
                    </td>
                    <td style={{ padding: '1rem 1.25rem', borderBottom: idx < goalMatrix.length - 1 ? '1px solid rgba(0,0,0,0.04)' : 'none', borderRight: '1px solid rgba(0,0,0,0.05)', color: '#444458', lineHeight: 1.6 }}>
                      {row.mechanism}
                    </td>
                    <td style={{ padding: '1rem 1.25rem', borderBottom: idx < goalMatrix.length - 1 ? '1px solid rgba(0,0,0,0.04)' : 'none', color: '#555570', fontWeight: 600, whiteSpace: 'nowrap' }}>
                      {row.timeline}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Skin Pillar ── */}
        <section style={{ padding: '4rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.6rem' }}>
            <div style={{
              width: 42, height: 42, borderRadius: 12,
              background: 'rgba(167,139,250,0.1)',
              border: '1px solid rgba(167,139,250,0.25)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#a78bfa', flexShrink: 0,
            }}>
              <Sparkles size={20} />
            </div>
            <div className="section-label" style={{ color: '#a78bfa', marginBottom: 0 }}>Pillar 1</div>
          </div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '0.75rem' }}>
            Skin & Facial Aesthetics
          </h2>
          <p style={{ color: '#555570', fontSize: '1.05rem', marginBottom: '3rem', maxWidth: 720 }}>
            Skin quality is the single highest-leverage aesthetic variable. These two compounds operate at different layers of the skin biology stack — GHK-Cu at the gene expression level, SNAP-8 at the neuromuscular junction — and are highly synergistic when combined.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(440px, 1fr))', gap: '1.5rem' }}>

            {/* GHK-Cu Card */}
            <div style={{
              background: '#fff',
              border: '1px solid rgba(167,139,250,0.2)',
              borderTop: '3px solid #a78bfa',
              borderRadius: 20,
              padding: '2rem',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#a78bfa', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Skin / Anti-Aging</div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#0a0a14' }}>GHK-Cu</h3>
                  <div style={{ fontSize: '0.9rem', color: '#9090a8', marginTop: '0.15rem' }}>Copper Tripeptide-1</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 900, color: '#a78bfa', lineHeight: 1, letterSpacing: '-0.04em' }}>4,000+</div>
                  <div style={{ fontSize: '0.72rem', fontWeight: 600, color: '#9090a8', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Genes modulated</div>
                </div>
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#888898', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Mechanism</div>
                <p style={{ fontSize: '1rem', color: '#444458', lineHeight: 1.7 }}>
                  GHK-Cu forms stable complexes with copper ions that enter cells and modulate TGF-β signaling. This cascade activates over 4,000 genes — upregulating collagen type I and III synthesis, elastin production, and a suite of antioxidant enzymes (SOD, catalase, glutathione peroxidase). Simultaneously, it downregulates inflammatory and pro-aging gene expression patterns associated with photoaged skin.
                </p>
              </div>

              <div style={{ background: 'rgba(167,139,250,0.06)', border: '1px solid rgba(167,139,250,0.15)', borderRadius: 12, padding: '1rem', marginBottom: '1.25rem' }}>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#a78bfa', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>Clinical Evidence</div>
                <p style={{ fontSize: '0.97rem', color: '#444458', lineHeight: 1.65 }}>
                  Double-blind trials in photoaged skin documented a <strong>28% increase in collagen density at 3 months</strong> vs placebo, with measurable improvements in skin thickness, tightness, and reduction in fine-line depth. Fibroblast proliferation rates increased 70% in vitro at physiological concentrations.
                </p>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#888898', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Looksmaxxing Application</div>
                <p style={{ fontSize: '1rem', color: '#444458', lineHeight: 1.7 }}>
                  For facial aesthetics, GHK-Cu is the foundational skin compound. It addresses the root cause of aging skin — degraded extracellular matrix — rather than surface symptoms. Daily subQ or topical application begins rebuilding the collagen scaffold that gives skin its structural density, smoothness, and elasticity. Skin quality improvements are cumulative and continue accelerating through 12 weeks.
                </p>
              </div>

              <Link href="/products/ghk-cu" className="btn-secondary hover-lift" style={{ width: '100%', justifyContent: 'center' }}>
                View GHK-Cu Profile <ArrowRight size={14} />
              </Link>
            </div>

            {/* SNAP-8 Card */}
            <div style={{
              background: '#fff',
              border: '1px solid rgba(167,139,250,0.2)',
              borderTop: '3px solid #a78bfa',
              borderRadius: 20,
              padding: '2rem',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#a78bfa', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Expression Lines</div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#0a0a14' }}>SNAP-8</h3>
                  <div style={{ fontSize: '0.9rem', color: '#9090a8', marginTop: '0.15rem' }}>Acetyl Octapeptide-3</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 900, color: '#a78bfa', lineHeight: 1, letterSpacing: '-0.04em' }}>35%</div>
                  <div style={{ fontSize: '0.72rem', fontWeight: 600, color: '#9090a8', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Wrinkle depth reduction</div>
                </div>
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#888898', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Mechanism</div>
                <p style={{ fontSize: '1rem', color: '#444458', lineHeight: 1.7 }}>
                  SNAP-8 is an 8-amino-acid peptide that mimics the N-terminal fragment of SNAP-25, a component of the SNARE complex responsible for neurotransmitter vesicle docking. By competitively inhibiting acetylcholine release at the neuromuscular junction, SNAP-8 reduces the repetitive micro-contractions that carve expression lines — the same mechanism as botulinum toxin, but through peptide competition rather than enzymatic cleavage.
                </p>
              </div>

              <div style={{ background: 'rgba(167,139,250,0.06)', border: '1px solid rgba(167,139,250,0.15)', borderRadius: 12, padding: '1rem', marginBottom: '1.25rem' }}>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#a78bfa', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>Clinical Evidence</div>
                <p style={{ fontSize: '0.97rem', color: '#444458', lineHeight: 1.65 }}>
                  A double-blind, placebo-controlled trial at 10 ppm concentration showed a <strong>35% reduction in wrinkle depth at 28 days</strong> in the crow's feet area. Profilometric measurements confirmed statistically significant improvement in skin smoothness scores. Results were visible at 2 weeks in the higher-concentration group.
                </p>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#888898', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Looksmaxxing Application</div>
                <p style={{ fontSize: '1rem', color: '#444458', lineHeight: 1.7 }}>
                  SNAP-8 specifically targets the forehead, glabella (between brows), and crow's feet — the expression lines that most degrade facial aesthetic scores in the 25–45 age range. Applied twice daily topically, it progressively softens dynamic lines without the frozen look associated with neurotoxins. Pairs directly with GHK-Cu for a complete two-vector skin protocol: collagen rebuilding + expression line smoothing.
                </p>
              </div>

              <Link href="/products/snap-8" className="btn-secondary hover-lift" style={{ width: '100%', justifyContent: 'center' }}>
                View SNAP-8 Profile <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* ── Body Composition Pillar ── */}
        <section style={{ padding: '4rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.6rem' }}>
            <div style={{
              width: 42, height: 42, borderRadius: 12,
              background: 'rgba(251,146,60,0.1)',
              border: '1px solid rgba(251,146,60,0.25)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#fb923c', flexShrink: 0,
            }}>
              <Zap size={20} />
            </div>
            <div className="section-label" style={{ color: '#fb923c', marginBottom: 0 }}>Pillar 2</div>
          </div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '0.75rem' }}>
            Muscle & Body Composition
          </h2>
          <p style={{ color: '#555570', fontSize: '1.05rem', marginBottom: '3rem', maxWidth: 720 }}>
            True looksmaxxing requires structural changes to body composition — not just weight loss, but the ratio of muscle volume to body fat that creates aesthetically ideal proportions. These two peptide axes target complementary mechanisms: satellite cell activation for new muscle fiber creation, and GH amplification for the anabolic and lipolytic environment.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(440px, 1fr))', gap: '1.5rem' }}>

            {/* IGF-1 LR3 Card */}
            <div style={{
              background: '#fff',
              border: '1px solid rgba(251,146,60,0.2)',
              borderTop: '3px solid #fb923c',
              borderRadius: 20,
              padding: '2rem',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#fb923c', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Muscle Hyperplasia</div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#0a0a14' }}>IGF-1 LR3</h3>
                  <div style={{ fontSize: '0.9rem', color: '#9090a8', marginTop: '0.15rem' }}>Long R3 Insulin-Like Growth Factor-1</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 900, color: '#fb923c', lineHeight: 1, letterSpacing: '-0.04em' }}>3×</div>
                  <div style={{ fontSize: '0.72rem', fontWeight: 600, color: '#9090a8', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Native IGF-1 potency</div>
                </div>
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#888898', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Mechanism: True Hyperplasia</div>
                <p style={{ fontSize: '1rem', color: '#444458', lineHeight: 1.7 }}>
                  IGF-1 LR3 activates quiescent satellite cells — the muscle stem cells responsible for generating entirely new muscle fibers (hyperplasia), not just enlarging existing ones (hypertrophy). The LR3 modification replaces glutamic acid at position 3 with arginine, preventing IGF binding protein inactivation and extending plasma half-life from minutes to 20–30 hours. The result is 3× binding potency versus native IGF-1 with sustained receptor occupancy. Downstream activation of PI3K/Akt drives protein synthesis while MAPK pathway stimulation governs satellite cell proliferation.
                </p>
              </div>

              <div style={{ background: 'rgba(251,146,60,0.06)', border: '1px solid rgba(251,146,60,0.15)', borderRadius: 12, padding: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#fb923c', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>Looksmaxxing Application</div>
                <p style={{ fontSize: '0.97rem', color: '#444458', lineHeight: 1.65 }}>
                  Post-training administration (within 30 minutes of resistance exercise) capitalizes on maximal satellite cell sensitivity. In the context of looksmaxxing, IGF-1 LR3 enables the structural muscle development that underpins ideal proportions — broader shoulders, more defined arms, fuller chest — changes that are not achievable through training stimulus alone at natural GH/IGF-1 levels.
                </p>
              </div>

              <Link href="/products/igf-1lr3" className="btn-secondary hover-lift" style={{ width: '100%', justifyContent: 'center' }}>
                View IGF-1 LR3 Profile <ArrowRight size={14} />
              </Link>
            </div>

            {/* CJC-1295/Ipamorelin Card */}
            <div style={{
              background: '#fff',
              border: '1px solid rgba(251,146,60,0.2)',
              borderTop: '3px solid #fb923c',
              borderRadius: 20,
              padding: '2rem',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#fb923c', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>GH Optimization</div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#0a0a14' }}>CJC-1295 / Ipamorelin</h3>
                  <div style={{ fontSize: '0.9rem', color: '#9090a8', marginTop: '0.15rem' }}>GHRH + GHRP Combination</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 900, color: '#fb923c', lineHeight: 1, letterSpacing: '-0.04em' }}>4–8×</div>
                  <div style={{ fontSize: '0.72rem', fontWeight: 600, color: '#9090a8', textTransform: 'uppercase', letterSpacing: '0.08em' }}>GH pulse amplification</div>
                </div>
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#888898', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Dual Mechanism: GHRH + GHRP Synergy</div>
                <p style={{ fontSize: '1rem', color: '#444458', lineHeight: 1.7 }}>
                  CJC-1295 binds growth hormone releasing hormone receptors in the anterior pituitary, stimulating GH synthesis and release. Its DAC (Drug Affinity Complex) modification covalently binds to albumin, extending half-life to 6–8 days versus the natural GHRH half-life of 7 minutes. Ipamorelin operates through the complementary ghrelin receptor (GHSR), amplifying the GH pulse created by CJC-1295. Together, the combination produces 4–8× the GH release of either compound alone — and critically, Ipamorelin is highly selective with no significant cortisol or prolactin stimulation.
                </p>
              </div>

              <div style={{ background: 'rgba(251,146,60,0.06)', border: '1px solid rgba(251,146,60,0.15)', borderRadius: 12, padding: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#fb923c', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>Anabolic Window Pre-Sleep</div>
                <p style={{ fontSize: '0.97rem', color: '#444458', lineHeight: 1.65 }}>
                  Pre-sleep administration synchronizes with the body's natural GH secretion pattern — the largest GH pulse occurs 60–90 minutes after sleep onset. Amplifying this pulse with CJC/Ipamorelin creates an extended anabolic window during slow-wave sleep when protein synthesis, fat mobilization, and tissue repair peak simultaneously. The result is accelerated body recomposition: lean mass accretion alongside adipose reduction.
                </p>
              </div>

              <Link href="/products/cjc1295-ipamorelin" className="btn-secondary hover-lift" style={{ width: '100%', justifyContent: 'center' }}>
                View CJC-1295/Ipamorelin Profile <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* ── Fat Loss Pillar ── */}
        <section style={{ padding: '4rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.6rem' }}>
            <div style={{
              width: 42, height: 42, borderRadius: 12,
              background: 'rgba(212,168,67,0.1)',
              border: '1px solid rgba(212,168,67,0.25)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#d4a843', flexShrink: 0,
            }}>
              <TrendingUp size={20} />
            </div>
            <div className="section-label" style={{ color: '#d4a843', marginBottom: 0 }}>Pillar 3</div>
          </div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '0.75rem' }}>
            Fat Loss & Vascularity
          </h2>
          <p style={{ color: '#555570', fontSize: '1.05rem', marginBottom: '3rem', maxWidth: 720 }}>
            Body fat percentage is the primary determinant of facial bone visibility, vascular definition, and the aesthetic sharpness that separates average from optimal. Retatrutide represents a category-defining advancement in the pharmacology of fat loss.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.5rem' }}>

            <div style={{
              background: '#fff',
              border: '1px solid rgba(212,168,67,0.2)',
              borderTop: '3px solid #d4a843',
              borderRadius: 20,
              padding: '2rem',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#d4a843', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Triple Agonist</div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#0a0a14' }}>Retatrutide</h3>
                  <div style={{ fontSize: '0.9rem', color: '#9090a8', marginTop: '0.15rem' }}>GLP-1 / GIP / Glucagon Tri-Agonist</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 900, color: '#d4a843', lineHeight: 1, letterSpacing: '-0.04em' }}>24.2%</div>
                  <div style={{ fontSize: '0.72rem', fontWeight: 600, color: '#9090a8', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Weight loss — NEJM 2023</div>
                </div>
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#888898', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Triple Receptor Mechanism</div>
                <p style={{ fontSize: '1rem', color: '#444458', lineHeight: 1.7 }}>
                  Retatrutide is the first triple incretin receptor agonist to reach Phase 2 trials. It co-activates GLP-1 receptors (appetite suppression, insulin sensitization), GIP receptors (enhanced incretin response, adipogenesis inhibition), and glucagon receptors (direct hepatic lipolysis stimulation, energy expenditure increase). This triple mechanism explains why its weight loss results exceed any single or dual agonist by a significant margin — the pathways are additive and synergistic.
                </p>
              </div>

              <div style={{ background: 'rgba(212,168,67,0.06)', border: '1px solid rgba(212,168,67,0.15)', borderRadius: 12, padding: '1rem', marginBottom: '1.25rem' }}>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#d4a843', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>NEJM Phase 2 Data (2023)</div>
                <p style={{ fontSize: '0.97rem', color: '#444458', lineHeight: 1.65 }}>
                  The Phase 2 trial published in the New England Journal of Medicine (Jastreboff et al., 2023) documented 24.2% total body weight reduction at 24 weeks in the highest-dose cohort. This surpasses semaglutide (15–17%) and tirzepatide (20–22%) in head-to-head timeline comparisons, establishing Retatrutide as the most potent pharmacological fat loss compound studied in controlled human trials to date.
                </p>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#888898', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Comparison to Other GLP-1s</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  {[
                    { name: 'Semaglutide', pct: '15–17%', receptors: 'GLP-1' },
                    { name: 'Tirzepatide', pct: '20–22%', receptors: 'GLP-1 + GIP' },
                    { name: 'Retatrutide', pct: '24.2%', receptors: 'GLP-1 + GIP + Glucagon', highlight: true },
                  ].map(c => (
                    <div key={c.name} style={{
                      background: c.highlight ? 'rgba(212,168,67,0.08)' : '#f7f8fc',
                      border: c.highlight ? '1px solid rgba(212,168,67,0.25)' : '1px solid rgba(0,0,0,0.06)',
                      borderRadius: 10,
                      padding: '0.75rem',
                      textAlign: 'center',
                    }}>
                      <div style={{ fontSize: '0.78rem', fontWeight: 700, color: c.highlight ? '#d4a843' : '#888898', marginBottom: '0.3rem' }}>{c.name}</div>
                      <div style={{ fontSize: '1.25rem', fontWeight: 900, color: c.highlight ? '#d4a843' : '#444458', letterSpacing: '-0.03em' }}>{c.pct}</div>
                      <div style={{ fontSize: '0.7rem', color: '#9090a8', marginTop: '0.25rem' }}>{c.receptors}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <Link href="/products/glp-3r-10mg" className="btn-secondary hover-lift" style={{ flex: 1, justifyContent: 'center' }}>
                  View Retatrutide <ArrowRight size={14} />
                </Link>
                <Link href="/semaglutide-vs-tirzepatide-vs-retatrutide" className="btn-secondary hover-lift" style={{ flex: 1, justifyContent: 'center', fontSize: '0.9rem' }}>
                  Full Comparison <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <div style={{
              background: 'linear-gradient(160deg, #fffbf0 0%, #f7f8fc 100%)',
              border: '1px solid rgba(212,168,67,0.15)',
              borderRadius: 20,
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
            }}>
              <div>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#d4a843', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>Why Fat Loss is Central to Looksmaxxing</div>
                <p style={{ fontSize: '1rem', color: '#444458', lineHeight: 1.7 }}>
                  Facial aesthetics research consistently identifies low body fat as the highest-impact variable for perceived attractiveness. At 10–13% body fat, cheekbone prominence, jawline definition, and orbital bone structure become visible — structural features that cannot be improved through any other intervention.
                </p>
              </div>
              <div>
                <p style={{ fontSize: '1rem', color: '#444458', lineHeight: 1.7 }}>
                  Vascularity — visible veins and muscle striations — is an aesthetic signal of extreme leanness that is only achievable in the 8–12% body fat range. Retatrutide's combination of appetite suppression and direct lipolysis makes it uniquely effective at reaching and maintaining these levels.
                </p>
              </div>
              <div style={{ background: 'rgba(212,168,67,0.08)', border: '1px solid rgba(212,168,67,0.2)', borderRadius: 12, padding: '1rem' }}>
                <div style={{ fontWeight: 700, color: '#d4a843', marginBottom: '0.4rem', fontSize: '0.97rem' }}>Protocol Note</div>
                <p style={{ fontSize: '0.95rem', color: '#555570', lineHeight: 1.6 }}>
                  All GLP-1 class compounds require gradual dose escalation starting at 0.25–0.5mg to minimize GI adaptation period. Never begin at the maximum dose. See the full <Link href="/peptide-dosing-chart" style={{ color: '#d4a843', textDecoration: 'none', fontWeight: 700 }}>Dosing Chart</Link> for escalation schedules.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Recovery Pillar ── */}
        <section style={{ padding: '4rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.6rem' }}>
            <div style={{
              width: 42, height: 42, borderRadius: 12,
              background: 'rgba(34,211,238,0.1)',
              border: '1px solid rgba(34,211,238,0.25)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#22d3ee', flexShrink: 0,
            }}>
              <Activity size={20} />
            </div>
            <div className="section-label" style={{ color: '#22d3ee', marginBottom: 0 }}>Pillar 4</div>
          </div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '0.75rem' }}>
            Recovery & Training Frequency
          </h2>
          <p style={{ color: '#555570', fontSize: '1.05rem', marginBottom: '3rem', maxWidth: 720 }}>
            The aesthetic results from a looksmaxxing protocol compound over time with consistency. Recovery rate is the rate-limiting factor — BPC-157 directly addresses this by accelerating healing at the cellular level, enabling higher training frequency and more consistent stimulus.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(440px, 1fr))', gap: '1.5rem' }}>
            <div style={{
              background: '#fff',
              border: '1px solid rgba(34,211,238,0.2)',
              borderTop: '3px solid #22d3ee',
              borderRadius: 20,
              padding: '2rem',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#22d3ee', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Recovery</div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#0a0a14' }}>BPC-157</h3>
                  <div style={{ fontSize: '0.9rem', color: '#9090a8', marginTop: '0.15rem' }}>Body Protection Compound-157</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 900, color: '#22d3ee', lineHeight: 1, letterSpacing: '-0.04em' }}>2×</div>
                  <div style={{ fontSize: '0.72rem', fontWeight: 600, color: '#9090a8', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Tendon healing rate</div>
                </div>
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#888898', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>VEGF Angiogenesis & Tendon Repair</div>
                <p style={{ fontSize: '1rem', color: '#444458', lineHeight: 1.7 }}>
                  BPC-157 upregulates VEGF (Vascular Endothelial Growth Factor), stimulating new blood vessel formation (angiogenesis) in damaged tissue. This accelerates nutrient and oxygen delivery to injury sites, dramatically shortening repair timelines for tendons, ligaments, and muscle. It also activates FAK-paxillin signaling through the growth hormone receptor, promoting fibroblast migration and collagen deposition at wound sites. Multiple rodent studies document 2× faster tendon healing versus control groups.
                </p>
              </div>

              <div style={{ background: 'rgba(34,211,238,0.06)', border: '1px solid rgba(34,211,238,0.15)', borderRadius: 12, padding: '1rem', marginBottom: '1.25rem' }}>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#22d3ee', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>Gut-Skin Axis</div>
                <p style={{ fontSize: '0.97rem', color: '#444458', lineHeight: 1.65 }}>
                  BPC-157 was originally isolated from gastric juice and has profound gut-healing effects — repairing the intestinal epithelial barrier and reducing intestinal permeability. This matters for skin aesthetics: gut microbiome health and intestinal integrity directly influence systemic inflammation levels, which in turn affect skin clarity, texture, and baseline collagen turnover rates. BPC-157 improves both recovery and the gut-skin axis simultaneously.
                </p>
              </div>

              <Link href="/products/bpc157-10mg" className="btn-secondary hover-lift" style={{ width: '100%', justifyContent: 'center' }}>
                View BPC-157 Profile <ArrowRight size={14} />
              </Link>
            </div>

            <div style={{
              background: '#f7f8fc',
              border: '1px solid rgba(0,0,0,0.07)',
              borderRadius: 20,
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
            }}>
              <div style={{ fontWeight: 800, color: '#0a0a14', fontSize: '1.15rem' }}>Why Recovery Is a Looksmaxxing Variable</div>
              <p style={{ fontSize: '1rem', color: '#444458', lineHeight: 1.7 }}>
                Training consistency compounds. An athlete who can train a muscle group every 48 hours instead of every 72 hours accumulates 50% more training volume over a 12-week period — a difference that translates directly into measurable structural changes.
              </p>
              <p style={{ fontSize: '1rem', color: '#444458', lineHeight: 1.7 }}>
                Beyond frequency, injury prevention is critical. A shoulder or knee injury that forces a 4–8 week training break erases months of compound progress. BPC-157 administered at early signs of joint stress (before full injury) is one of the highest-ROI applications in a looksmaxxing protocol.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {[
                  'Accelerated tendon, ligament & muscle repair',
                  'Gut-skin axis improvement via intestinal barrier repair',
                  'VEGF-driven angiogenesis in target tissue',
                  'Anti-inflammatory via nitric oxide modulation',
                  'Protective effect on joint cartilage',
                ].map(point => (
                  <div key={point} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                    <CheckCircle size={16} style={{ color: '#22d3ee', flexShrink: 0, marginTop: 3 }} />
                    <span style={{ fontSize: '0.97rem', color: '#444458', lineHeight: 1.6 }}>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Starter Stack ── */}
        <section style={{ padding: '4rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label">Recommended Starting Point</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '2rem' }}>
            The Beginner Looksmaxxing Stack
          </h2>
          <div style={{
            background: 'linear-gradient(135deg, #fffbf0 0%, #fdf6e3 100%)',
            border: '2px solid rgba(212,168,67,0.3)',
            borderRadius: 24,
            padding: '2.5rem',
            maxWidth: 860,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.75rem' }}>
              <Star size={22} style={{ color: '#d4a843' }} />
              <h3 style={{ fontSize: '1.35rem', fontWeight: 900, color: '#0a0a14' }}>GHK-Cu + CJC-1295/Ipamorelin — 8-Week Foundation</h3>
            </div>

            <p style={{ fontSize: '1.05rem', color: '#555570', lineHeight: 1.75, marginBottom: '2rem' }}>
              For looksmaxxing beginners, the highest-ROI first protocol combines skin-level collagen rebuilding (GHK-Cu) with GH pulse amplification during sleep (CJC-1295/Ipamorelin). This two-compound stack addresses facial skin quality and the anabolic environment simultaneously — two of the highest-leverage aesthetic variables — with a straightforward administration protocol and well-characterized safety profile in published literature.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
              {[
                {
                  phase: 'Weeks 1–8',
                  color: '#d4a843',
                  label: 'Foundation Stack',
                  items: ['GHK-Cu: 1–2mg daily (topical or subQ)', 'CJC-1295: 100μg pre-sleep', 'Ipamorelin: 200μg pre-sleep', 'BPC-157 (optional): 250μg daily if training'],
                },
                {
                  phase: 'Week 9+',
                  color: '#fb923c',
                  label: 'Add IGF-1 LR3',
                  items: ['Continue GHK-Cu daily', 'Continue CJC/Ipamorelin pre-sleep', 'Add IGF-1 LR3: 50–100μg post-training', 'Run IGF-1 LR3 for 4–6 week cycles only'],
                },
              ].map(phase => (
                <div key={phase.phase} style={{
                  background: '#fff',
                  border: `1px solid ${phase.color}30`,
                  borderRadius: 16,
                  padding: '1.5rem',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
                    <span style={{
                      display: 'inline-block',
                      padding: '2px 10px',
                      background: `${phase.color}12`,
                      border: `1px solid ${phase.color}30`,
                      borderRadius: 100,
                      fontSize: '0.78rem',
                      fontWeight: 800,
                      color: phase.color,
                      letterSpacing: '0.05em',
                    }}>{phase.phase}</span>
                    <span style={{ fontWeight: 700, color: '#0a0a14', fontSize: '0.97rem' }}>{phase.label}</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {phase.items.map(item => (
                      <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <div style={{ width: 5, height: 5, borderRadius: '50%', background: phase.color, flexShrink: 0, marginTop: 7 }} />
                        <span style={{ fontSize: '0.92rem', color: '#444458', lineHeight: 1.55 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <Link href="/stacks" className="btn-primary">
                View All Protocol Stacks <ArrowRight size={14} />
              </Link>
              <Link href="/peptide-dosing-chart" className="btn-secondary hover-lift">
                Full Dosing Chart <FlaskConical size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* ── Disclaimer ── */}
        <section style={{ padding: '2rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div style={{
            display: 'flex', gap: '0.75rem', alignItems: 'flex-start',
            background: '#f7f8fc',
            border: '1px solid rgba(0,0,0,0.07)',
            borderRadius: 14,
            padding: '1.25rem 1.5rem',
          }}>
            <AlertCircle size={16} style={{ color: '#9090a8', flexShrink: 0, marginTop: 2 }} />
            <p style={{ fontSize: '0.85rem', color: '#9090a8', lineHeight: 1.65 }}>
              <strong style={{ color: '#666680' }}>Research Use Only.</strong> All peptides referenced on this page are sold exclusively for in-vitro laboratory and research purposes. They are not approved by the FDA or any regulatory agency for human consumption, diagnosis, treatment, or prevention of any disease or condition. This content is educational and informational only. Consult a licensed medical professional before making any health-related decisions.
            </p>
          </div>
        </section>

        {/* ── Related Links ── */}
        <section style={{ padding: '2rem 0' }}>
          <RelatedLinks currentPath="/looksmaxxing-peptides-guide" />
        </section>

        {/* ── CTA ── */}
        <section style={{ padding: '2rem 0 5rem' }}>
          <div style={{
            background: 'linear-gradient(135deg, #fffbf0 0%, #f7f8fc 100%)',
            border: '1px solid rgba(212,168,67,0.2)',
            borderRadius: 24,
            padding: '3.5rem',
            textAlign: 'center',
          }}>
            <div className="section-label" style={{ justifyContent: 'center', display: 'flex' }}>Source Premium Grade Compounds</div>
            <h2 className="heading-md" style={{ color: '#0a0a14', marginBottom: '0.75rem' }}>
              Every Compound in This Guide Available at our supplier
            </h2>
            <p style={{ color: '#555570', marginBottom: '2rem', fontSize: '1rem', maxWidth: 560, margin: '0 auto 2rem' }}>
              Third-party HPLC tested, ≥98% purity, with full Certificate of Analysis documentation on every order. The benchmark for peptide purity in the scientific community.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={AFFILIATE_BASE} target="_blank" rel="nofollow noopener noreferrer" className="btn-primary" style={{ fontSize: '1rem', padding: '0.9rem 2.5rem' }}>
                Shop Now <ExternalLink size={16} />
              </a>
              <Link href="/stacks" className="btn-secondary" style={{ fontSize: '1rem', padding: '0.9rem 2rem' }}>
                View All Protocols <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
