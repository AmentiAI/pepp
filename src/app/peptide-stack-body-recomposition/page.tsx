'use client'
import Link from 'next/link'
import {
  ArrowRight,
  ExternalLink,
  Zap,
  Activity,
  TrendingUp,
  Shield,
  Layers,
  AlertCircle,
  CheckCircle,
  FlaskConical,
  Target,
  ChevronRight,
} from 'lucide-react'
import { AFFILIATE_BASE, AFFILIATE_PRODUCT } from '@/lib/products'
import RelatedLinks from '@/components/RelatedLinks'

const mechanisms = [
  {
    icon: <Zap size={24} />,
    color: '#fb923c',
    label: 'IGF-1 LR3',
    title: 'Muscle Hyperplasia',
    body: 'Not just hypertrophy — actual new muscle fiber creation via satellite cell activation. IGF-1 LR3 binds the IGF-1 receptor at 3× the potency of native IGF-1 and has a 20–30 hour half-life, sustaining anabolic signaling far beyond endogenous pulses. Satellite cells proliferate and fuse with existing fibers, increasing the total number of myonuclei. This is what separates IGF-1 LR3 from other anabolic approaches — the gains in fiber number are permanent structural changes.',
    slug: 'igf-1lr3',
  },
  {
    icon: <Activity size={24} />,
    color: '#d4a843',
    label: 'CJC-1295 / Ipamorelin',
    title: 'GH Axis Optimization',
    body: '4–8× GH pulse amplification drives both lipolysis AND muscle protein synthesis — GH is inherently dual-purpose. CJC-1295 (no DAC) acts on GHRH receptors; Ipamorelin mimics ghrelin at the GHS-R1a receptor. The two signals are additive and synergistic: the GHRH analog extends the pulse duration while the GHRP increases pulse amplitude. Timed pre-sleep, these peptides amplify the largest natural GH pulse of the 24-hour cycle, maximizing fat mobilization from adipose tissue and driving muscle protein synthesis during recovery.',
    slug: 'cjc1295-ipamorelin',
  },
  {
    icon: <TrendingUp size={24} />,
    color: '#22d3ee',
    label: 'GLP-1 Agonists',
    title: 'Fat Oxidation Enhancement',
    body: 'Metabolic hormone signaling reduces adipose tissue while preserving metabolically active lean mass. GLP-1 receptor agonists slow gastric emptying, reduce appetite signaling centrally, and improve glucose disposal — all of which create the caloric environment for fat loss. When stacked with GH-axis peptides, the dual signal creates a genuine recomposition environment: GLP-1 handles the fat side, growth hormone handles the muscle side. Retatrutide\'s additional glucagon agonism adds direct lipolytic signaling to adipocytes.',
    slug: 'glp-3r-10mg',
  },
  {
    icon: <Shield size={24} />,
    color: '#34d399',
    label: 'BPC-157',
    title: 'Recovery Optimization',
    body: 'Training frequency × volume = results. BPC-157 accelerates inter-session recovery by upregulating VEGF (vascular endothelial growth factor), increasing tendon fibroblast proliferation, reducing local inflammation, and modulating the nitric oxide system. In practical terms: joint discomfort decreases, training sessions that previously required 48–72 hours of recovery can be repeated in 24–36 hours. Higher total training load over a cycle means more mechanical stimulus for muscle protein synthesis and greater total energy expenditure — both essential for recomposition.',
    slug: 'bpc157-10mg',
  },
]

const tiers = [
  {
    level: 'Beginner',
    color: '#34d399',
    border: '#34d399',
    duration: '8–12 Weeks',
    compounds: [
      { name: 'CJC-1295 (no DAC)', dose: '100mcg pre-sleep' },
      { name: 'Ipamorelin', dose: '200mcg pre-sleep' },
    ],
    goal: 'GH axis calibration, improved sleep quality, early body composition shifts',
    expect: 'Improved body composition over 8–12 weeks, noticeably better sleep and recovery quality, subtle fat loss particularly around the midsection. A well-tolerated entry point with a strong tolerability profile for first-time users.',
  },
  {
    level: 'Intermediate',
    color: '#d4a843',
    border: '#d4a843',
    duration: '8–12 Weeks',
    compounds: [
      { name: 'CJC-1295 (no DAC)', dose: '100mcg pre-sleep' },
      { name: 'Ipamorelin', dose: '200mcg pre-sleep' },
      { name: 'BPC-157', dose: '250mcg 2× daily' },
    ],
    goal: 'Add recovery optimization to support higher training frequency and volume',
    expect: 'Faster inter-session recovery, reduced joint discomfort by weeks 2–3, improved training continuity. The GH axis foundation from the beginner stack is still driving body composition — the addition of BPC-157 allows the training load to increase, amplifying the recomp stimulus.',
  },
  {
    level: 'Advanced',
    color: '#a78bfa',
    border: '#a78bfa',
    duration: '12–16 Weeks',
    compounds: [
      { name: 'IGF-1 LR3', dose: '50–100mcg post-training' },
      { name: 'CJC-1295 (no DAC)', dose: '100mcg pre-sleep' },
      { name: 'Ipamorelin', dose: '200mcg pre-sleep' },
      { name: 'BPC-157', dose: '250mcg 2× daily' },
    ],
    goal: 'True muscle hyperplasia via satellite cell activation + sustained GH optimization + recovery',
    expect: 'Measurable lean mass gains alongside continued fat reduction, strength increases from increased myonuclei density. IGF-1 LR3 is dosed post-training to exploit the window of elevated local IGF-1 sensitivity in trained muscles. This is a research-grade protocol for experienced users with baseline data.',
  },
]

const timelinePhases = [
  { phase: 'Foundation', weeks: 'Weeks 1–4', stack: 'CJC-1295/Ipamorelin only', goal: 'GH axis calibration, baseline response assessment' },
  { phase: 'Building', weeks: 'Weeks 5–12', stack: '+ BPC-157', goal: 'Add recovery optimization, increase training load' },
  { phase: 'Advanced', weeks: 'Weeks 13–16', stack: '+ IGF-1 LR3', goal: 'Muscle hyperplasia, maximal recomp effect' },
  { phase: 'Maintenance', weeks: 'Post-cycle', stack: 'Reduced CJC/Ipa 3× weekly', goal: 'Preserve structural gains during off-cycle period' },
]

const keyProducts = [
  { name: 'IGF-1 LR3', slug: 'igf-1lr3', path: '/products/igf-1lr3', color: '#fb923c', role: 'Muscle Hyperplasia' },
  { name: 'CJC-1295/Ipamorelin', slug: 'cjc1295-ipamorelin', path: '/products/cjc1295-ipamorelin', color: '#d4a843', role: 'GH Axis Optimization' },
  { name: 'BPC-157', slug: 'bpc157-10mg', path: '/products/bpc157-10mg', color: '#34d399', role: 'Recovery' },
  { name: 'Retatrutide', slug: 'glp-3r-10mg', path: '/products/glp-3r-10mg', color: '#22d3ee', role: 'Fat Oxidation' },
]

export default function BodyRecompPage() {
  return (
    <div style={{ background: '#ffffff', minHeight: '100vh', fontFamily: 'inherit' }}>

      {/* ── HERO ── */}
      <div style={{
        background: 'linear-gradient(160deg, #1a0a00 0%, #1f1206 40%, #0a0a14 100%)',
        padding: '6rem 2rem 5.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: '-80px', right: '-80px',
          width: 500, height: 500,
          background: 'radial-gradient(circle, rgba(251,146,60,0.14) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '-60px', left: '35%',
          width: 360, height: 360,
          background: 'radial-gradient(circle, rgba(212,168,67,0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: 'radial-gradient(circle, rgba(251,146,60,0.06) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 10%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 10%, transparent 100%)',
        }} />

        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
          <div style={{ maxWidth: 860 }}>
            <div className="section-label" style={{ color: '#fb923c', borderColor: 'rgba(251,146,60,0.3)' }}>
              Body Recomposition Science
            </div>
            <h1 className="heading-xl" style={{ color: '#ffffff', marginBottom: '1.5rem', marginTop: '1rem' }}>
              Peptides for<br />
              <span className="gold-text">Body Recomposition</span>
            </h1>
            <p style={{ fontSize: '1.1rem', color: '#d4a843', fontWeight: 600, marginBottom: '0.75rem' }}>
              Lose Fat. Build Muscle. Simultaneously.
            </p>
            <p style={{ fontSize: '1.15rem', color: '#9090a8', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: 700 }}>
              True body recomposition — simultaneous fat loss and muscle gain — requires multiple biological
              pathways activated at once. Peptides are the research tool designed for exactly this.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link href="/stacks" className="btn-primary">
                View Stacks <ArrowRight size={14} />
              </Link>
              <a
                href={AFFILIATE_BASE}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ color: '#e0e0f0', borderColor: 'rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.05)' }}
              >
                Shop Compounds <ExternalLink size={14} />
              </a>
            </div>
            <p style={{ fontSize: '0.78rem', color: '#555570', marginTop: '2rem' }}>
              For research and laboratory use only. Not intended for human consumption. All protocols are educational references.
            </p>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>

        {/* ── WHAT IS BODY RECOMPOSITION ── */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label">The Biology</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '1rem' }}>
            What Is True Body Recomposition?
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', marginTop: '2.5rem' }}>
            <div>
              <p style={{ color: '#444460', lineHeight: 1.85, fontSize: '1.05rem', marginBottom: '1.25rem' }}>
                Most protocols optimize for either fat loss <em>or</em> muscle gain — rarely both. Traditional caloric restriction
                triggers muscle catabolism alongside fat loss. Traditional bulking adds fat alongside muscle. The metabolic conditions
                required for each are, on the surface, opposed.
              </p>
              <p style={{ color: '#444460', lineHeight: 1.85, fontSize: '1.05rem' }}>
                True body recomposition changes the equation by targeting four biological pathways simultaneously: anabolic
                signaling for muscle protein synthesis, lipolytic signaling for fat mobilization, growth hormone optimization
                (which drives both), and recovery optimization to allow continuous training stimulus. Peptide combinations
                are uniquely suited to this because each compound in a well-designed stack addresses a different piece of this puzzle.
              </p>
            </div>
            <div>
              <div style={{ background: '#f7f8fc', borderRadius: 16, padding: '2rem', border: '1px solid rgba(0,0,0,0.06)' }}>
                <div style={{ fontWeight: 700, color: '#0a0a14', marginBottom: '1.25rem', fontSize: '1rem' }}>
                  Recomposition Requires All 4 Pathways
                </div>
                {[
                  { label: 'Anabolic signaling', detail: 'Muscle protein synthesis via IGF-1, mTOR activation', color: '#fb923c' },
                  { label: 'Lipolytic signaling', detail: 'Fat mobilization from adipocytes via GH, GLP-1', color: '#d4a843' },
                  { label: 'GH axis optimization', detail: 'Growth hormone — the master dual-purpose signal', color: '#a78bfa' },
                  { label: 'Recovery optimization', detail: 'Higher training load = more total stimulus', color: '#34d399' },
                ].map(item => (
                  <div key={item.label} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.9rem', alignItems: 'flex-start' }}>
                    <div style={{
                      width: 8, height: 8, borderRadius: '50%', background: item.color,
                      marginTop: 8, flexShrink: 0,
                    }} />
                    <div>
                      <div style={{ fontWeight: 600, color: '#0a0a14', fontSize: '0.95rem' }}>{item.label}</div>
                      <div style={{ color: '#9090a8', fontSize: '0.88rem' }}>{item.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CORE MECHANISMS ── */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label">Mechanism Deep-Dives</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '0.75rem' }}>
            The Core Recomposition Mechanisms
          </h2>
          <p style={{ color: '#9090a8', fontSize: '1.05rem', marginBottom: '2.5rem', maxWidth: 680 }}>
            Each compound in the recomp stack operates through a distinct biological pathway — no receptor overlap, no redundant signaling.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {mechanisms.map(m => (
              <div
                key={m.label}
                className="hover-card-border"
                style={{
                  border: `1px solid rgba(0,0,0,0.08)`,
                  borderTop: `3px solid ${m.color}`,
                  borderRadius: 16,
                  padding: '1.75rem',
                  background: '#ffffff',
                  transition: 'box-shadow 0.2s',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 12,
                    background: `rgba(${m.color === '#fb923c' ? '251,146,60' : m.color === '#d4a843' ? '212,168,67' : m.color === '#22d3ee' ? '34,211,238' : '52,211,153'},0.12)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: m.color, flexShrink: 0,
                  }}>
                    {m.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.72rem', fontWeight: 700, color: m.color, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{m.label}</div>
                    <div className="heading-md" style={{ color: '#0a0a14', fontSize: '1.05rem' }}>{m.title}</div>
                  </div>
                </div>
                <p style={{ color: '#555570', lineHeight: 1.75, fontSize: '0.93rem', marginBottom: '1.25rem' }}>
                  {m.body}
                </p>
                <Link
                  href={`/products/${m.slug}`}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    color: m.color, fontSize: '0.88rem', fontWeight: 600, textDecoration: 'none',
                  }}
                  className="hover-gold"
                >
                  View Compound <ChevronRight size={13} />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* ── TIERED PROTOCOLS ── */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label">Research Protocols</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '0.75rem' }}>
            Tiered Stack Protocols
          </h2>
          <p style={{ color: '#9090a8', fontSize: '1.05rem', marginBottom: '2.5rem', maxWidth: 680 }}>
            Protocols progress in complexity. Each tier adds compounds only when the foundation is established — start where your research experience warrants.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.75rem' }}>
            {tiers.map(tier => (
              <div
                key={tier.level}
                style={{
                  border: `1px solid rgba(0,0,0,0.07)`,
                  borderLeft: `4px solid ${tier.border}`,
                  borderRadius: '0 16px 16px 0',
                  padding: '2rem',
                  background: '#fafafa',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: '1.15rem', color: '#0a0a14' }}>{tier.level} Recomp Stack</div>
                    <div style={{ fontSize: '0.8rem', color: '#9090a8', marginTop: 2 }}>{tier.duration}</div>
                  </div>
                  <div style={{
                    fontSize: '0.72rem', fontWeight: 700, color: tier.color,
                    background: `rgba(${tier.color === '#34d399' ? '52,211,153' : tier.color === '#d4a843' ? '212,168,67' : '167,139,250'},0.1)`,
                    padding: '4px 10px', borderRadius: 20, textTransform: 'uppercase', letterSpacing: '0.08em',
                  }}>
                    {tier.duration}
                  </div>
                </div>

                <div style={{ marginBottom: '1.25rem' }}>
                  {tier.compounds.map(c => (
                    <div key={c.name} style={{
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      padding: '0.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.05)',
                      gap: '0.5rem',
                    }}>
                      <div style={{ fontWeight: 600, color: '#0a0a14', fontSize: '0.93rem' }}>{c.name}</div>
                      <div style={{ color: '#9090a8', fontSize: '0.86rem', textAlign: 'right' }}>{c.dose}</div>
                    </div>
                  ))}
                </div>

                <div style={{ marginBottom: '0.75rem' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: tier.color, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>
                    Goal
                  </div>
                  <p style={{ color: '#555570', fontSize: '0.9rem', lineHeight: 1.65 }}>{tier.goal}</p>
                </div>

                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#9090a8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>
                    What to Expect
                  </div>
                  <p style={{ color: '#555570', fontSize: '0.88rem', lineHeight: 1.65 }}>{tier.expect}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── GLP-1 RECOMP STRATEGY ── */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label" style={{ color: '#22d3ee', borderColor: 'rgba(34,211,238,0.3)' }}>
            GLP-1 Muscle Preservation
          </div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '1rem' }}>
            Already on a GLP-1?<br />
            <span style={{ color: '#d4a843' }}>Here&rsquo;s How to Preserve Muscle</span>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
            <div>
              <div style={{
                background: 'linear-gradient(135deg, #0a0a14, #1a1a2e)',
                borderRadius: 16, padding: '2rem',
                border: '1px solid rgba(34,211,238,0.15)',
                marginBottom: '1.5rem',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <AlertCircle size={20} style={{ color: '#fb923c', flexShrink: 0 }} />
                  <div style={{ fontWeight: 700, color: '#ffffff', fontSize: '0.95rem' }}>The Problem</div>
                </div>
                <p style={{ color: '#9090a8', lineHeight: 1.8, fontSize: '0.93rem' }}>
                  Semaglutide, tirzepatide, and retatrutide can cause muscle wasting alongside fat loss —
                  clinical trial data shows up to 25–40% of total weight loss can come from lean mass.
                  In a pure fat loss context this is tolerated. In a recomposition context, lean mass
                  protection is non-negotiable.
                </p>
              </div>
              <div style={{
                background: 'linear-gradient(135deg, #0a140a, #0f1f0a)',
                borderRadius: 16, padding: '2rem',
                border: '1px solid rgba(52,211,153,0.15)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <CheckCircle size={20} style={{ color: '#34d399', flexShrink: 0 }} />
                  <div style={{ fontWeight: 700, color: '#ffffff', fontSize: '0.95rem' }}>The Solution</div>
                </div>
                <p style={{ color: '#9090a8', lineHeight: 1.8, fontSize: '0.93rem' }}>
                  Adding CJC-1295/Ipamorelin to a GLP-1 protocol creates a recomposition environment:
                  the GLP-1 handles fat loss, the GH axis handles muscle preservation and growth.
                  GH specifically stimulates muscle protein synthesis while simultaneously enhancing
                  lipolysis — complementary, not competing, with GLP-1 mechanisms.
                </p>
              </div>
            </div>

            <div>
              <p style={{ color: '#444460', lineHeight: 1.85, fontSize: '1.05rem', marginBottom: '1.5rem' }}>
                This combination is the basis of the Fat Loss &amp; Vascularity Stack. The research rationale
                is straightforward: GLP-1 receptor agonists create the caloric deficit environment, while
                elevated GH partitions available energy toward muscle preservation and fat oxidation rather
                than allowing indiscriminate lean mass catabolism.
              </p>
              <p style={{ color: '#444460', lineHeight: 1.85, fontSize: '1.05rem', marginBottom: '2rem' }}>
                For retatrutide specifically — the triple agonist — the additional glucagon receptor agonism
                adds direct adipocyte lipolytic signaling. Stacking with CJC-1295/Ipamorelin at this level
                creates one of the most potent body composition research protocols currently studied.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <Link
                  href="/products/cjc1295-ipamorelin"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    color: '#d4a843', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem',
                  }}
                >
                  <ChevronRight size={14} /> CJC-1295 / Ipamorelin — GH Axis Optimization
                </Link>
                <Link
                  href="/products/glp-3r-10mg"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    color: '#22d3ee', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem',
                  }}
                >
                  <ChevronRight size={14} /> Retatrutide — Triple GLP Agonist
                </Link>
                <Link
                  href="/stacks/fat-loss"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    color: '#fb923c', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem',
                  }}
                >
                  <ChevronRight size={14} /> Fat Loss &amp; Vascularity Stack
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── 6-MONTH TIMELINE ── */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label">Long-Form Protocol</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '0.75rem' }}>
            6-Month Protocol Timeline
          </h2>
          <p style={{ color: '#9090a8', fontSize: '1.05rem', marginBottom: '2.5rem', maxWidth: 680 }}>
            A phased approach builds the stack methodically — establishing response and tolerability at each stage before advancing. This is the approach experienced researchers use.
          </p>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 600 }}>
              <thead>
                <tr style={{ background: '#0a0a14' }}>
                  {['Phase', 'Duration', 'Stack', 'Primary Goal'].map(h => (
                    <th key={h} style={{
                      padding: '1rem 1.25rem', textAlign: 'left',
                      color: '#d4a843', fontSize: '0.78rem', fontWeight: 700,
                      textTransform: 'uppercase', letterSpacing: '0.1em',
                    }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {timelinePhases.map((row, i) => (
                  <tr key={row.phase} style={{ background: i % 2 === 0 ? '#ffffff' : '#f7f8fc', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                    <td style={{ padding: '1rem 1.25rem', fontWeight: 700, color: '#0a0a14', fontSize: '0.95rem' }}>{row.phase}</td>
                    <td style={{ padding: '1rem 1.25rem', color: '#d4a843', fontWeight: 600, fontSize: '0.9rem', whiteSpace: 'nowrap' }}>{row.weeks}</td>
                    <td style={{ padding: '1rem 1.25rem', color: '#555570', fontSize: '0.9rem' }}>{row.stack}</td>
                    <td style={{ padding: '1rem 1.25rem', color: '#555570', fontSize: '0.9rem' }}>{row.goal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── KEY PRODUCT LINKS ── */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label">Research Compounds</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '2.5rem' }}>
            The Recomposition Stack Compounds
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
            {keyProducts.map(p => (
              <div
                key={p.slug}
                className="hover-lift"
                style={{
                  border: '1px solid rgba(0,0,0,0.08)',
                  borderRadius: 14,
                  padding: '1.5rem',
                  background: '#fafafa',
                  display: 'flex', flexDirection: 'column', gap: '0.5rem',
                }}
              >
                <div style={{
                  fontSize: '0.72rem', fontWeight: 700, color: p.color,
                  textTransform: 'uppercase', letterSpacing: '0.1em',
                }}>
                  {p.role}
                </div>
                <div style={{ fontWeight: 800, fontSize: '1.05rem', color: '#0a0a14' }}>{p.name}</div>
                <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
                  <Link
                    href={p.path}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: 5,
                      color: p.color, textDecoration: 'none', fontWeight: 600, fontSize: '0.86rem',
                    }}
                  >
                    Learn More <ArrowRight size={12} />
                  </Link>
                  <a
                    href={AFFILIATE_PRODUCT(p.slug)}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: 5,
                      color: '#9090a8', textDecoration: 'none', fontWeight: 600, fontSize: '0.86rem',
                    }}
                  >
                    Shop <ExternalLink size={11} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── INTERNAL LINK TO STACK PAGE ── */}
        <section style={{ padding: '3rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div style={{
            background: 'linear-gradient(135deg, #0a0a14 0%, #1a1a2e 100%)',
            borderRadius: 20, padding: '2.5rem',
            border: '1px solid rgba(212,168,67,0.15)',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            flexWrap: 'wrap', gap: '1.5rem',
          }}>
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#d4a843', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>
                Full Protocol
              </div>
              <div style={{ fontWeight: 800, fontSize: '1.35rem', color: '#ffffff', marginBottom: '0.4rem' }}>
                Body Recomposition Stack
              </div>
              <p style={{ color: '#9090a8', fontSize: '0.93rem', maxWidth: 480 }}>
                The complete stack page with product-level details, exact dosing schedules, cycle timing, and what to expect week by week.
              </p>
            </div>
            <Link href="/stacks/body-recomp" className="btn-primary">
              View Full Stack <ArrowRight size={14} />
            </Link>
          </div>
        </section>

        {/* ── RELATED LINKS ── */}
        <section style={{ padding: '2rem 0 1rem' }}>
          <RelatedLinks currentPath="/peptide-stack-body-recomposition" />
        </section>

        {/* ── CTA ── */}
        <section style={{ padding: '3.5rem 0 5rem' }}>
          <div style={{
            background: 'linear-gradient(135deg, #1a0f00 0%, #2a1a00 100%)',
            borderRadius: 20, padding: '3rem 2.5rem',
            textAlign: 'center',
            border: '1px solid rgba(212,168,67,0.2)',
          }}>
            <div className="section-label" style={{ color: '#d4a843', justifyContent: 'center', marginBottom: '1rem' }}>
              <FlaskConical size={14} /> Research Compounds
            </div>
            <h2 className="heading-md" style={{ color: '#ffffff', marginBottom: '1rem' }}>
              Source Research-Grade Peptides
            </h2>
            <p style={{ color: '#9090a8', fontSize: '1rem', marginBottom: '2rem', maxWidth: 500, margin: '0 auto 2rem' }}>
              All compounds referenced in these protocols are available through our affiliate partner.
              Third-party tested, research-grade purity.
            </p>
            <a
              href={AFFILIATE_BASE}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Shop All Compounds <ExternalLink size={14} />
            </a>
            <p style={{ fontSize: '0.78rem', color: '#555570', marginTop: '1.5rem' }}>
              For research and laboratory use only. Not for human consumption.
            </p>
          </div>
        </section>

      </div>
    </div>
  )
}
