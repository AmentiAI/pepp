import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ExternalLink, CheckCircle, TrendingUp, Zap, Shield } from 'lucide-react'
import { AFFILIATE_BASE, AFFILIATE_PRODUCT } from '@/lib/products'
import RelatedLinks from '@/components/RelatedLinks'

export const metadata: Metadata = {
  title: 'Buy Retatrutide | Triple Agonist Weight Loss Guide — 24.2% Body Weight Reduction | StacksPeptide',
  description:
    'Buy Retatrutide for sale — trusted, verified. Complete guide to the triple GLP-1/GIP/GCG agonist: 24.2% weight reduction documented in NEJM 2023. Protocol, dosing, and mechanism.',
  alternates: { canonical: 'https://www.stackspeptide.com/retatrutide-weight-loss-guide' },
  openGraph: {
    title: 'Retatrutide Weight Loss Guide — 24.2% Body Weight Reduction (NEJM 2023)',
    description:
      'Complete mechanism and research protocol guide for the triple GLP-1/GIP/GCG agonist retatrutide — the highest pharmacological weight loss compound ever documented.',
    url: 'https://www.stackspeptide.com/retatrutide-weight-loss-guide',
    type: 'article',
  },
}

const receptorCards = [
  {
    receptor: 'GLP-1R',
    name: 'Glucagon-Like Peptide-1 Receptor',
    color: '#d4a843',
    icon: <Shield size={22} />,
    effects: [
      'Appetite suppression via hypothalamic arcuate nucleus signaling',
      'Slows gastric emptying — extends satiety window significantly',
      'Glucose-dependent insulin secretion from pancreatic β-cells',
      'Reduces post-meal glucagon release',
      'Improves insulin sensitivity in peripheral tissues',
    ],
    summary:
      'The foundational receptor of modern GLP-1 therapy. Proven across thousands of patients in semaglutide and tirzepatide trials. Drives the core appetite suppression that initiates weight loss in every GLP-1 class compound.',
  },
  {
    receptor: 'GIP-R',
    name: 'Glucose-Dependent Insulinotropic Polypeptide Receptor',
    color: '#f59e0b',
    icon: <TrendingUp size={22} />,
    effects: [
      'Additive appetite suppression — stacks on top of GLP-1 signaling',
      'Lipid metabolism improvement and fat cell size reduction',
      'Enhanced insulin sensitization in adipose tissue',
      'Reduced triglyceride accumulation in fat depots',
      'Synergistic insulin secretion when combined with GLP-1R activation',
    ],
    summary:
      'Added by tirzepatide as the second receptor target. GIP co-agonism delivers a meaningful step up in efficacy over GLP-1 alone — contributing to tirzepatide\'s ~21% weight loss vs. semaglutide\'s ~15%. In retatrutide, this additive effect stacks with both GLP-1 and glucagon signaling.',
  },
  {
    receptor: 'GCGR',
    name: 'Glucagon Receptor',
    color: '#fb923c',
    icon: <Zap size={22} />,
    effects: [
      'Increases resting energy expenditure via thermogenesis',
      'Directly stimulates hepatic fat oxidation and reduction of liver fat',
      'Activates brown adipose tissue (BAT) thermogenic programs',
      'Elevates basal metabolic rate independent of caloric restriction',
      'Promotes lipolysis in adipose depots',
    ],
    summary:
      'The third receptor — and the reason retatrutide stands alone. No other approved or research-phase GLP-1 agonist activates GCGR. Glucagon receptor agonism adds direct thermogenic activity: the body burns more calories at rest. This is not more appetite suppression — it is an entirely different metabolic lever.',
  },
]

const generationRows = [
  {
    compound: 'Semaglutide',
    generation: '1st',
    receptors: 'GLP-1R only',
    mechanism: 'Mono-agonist',
    weightLoss: '~15%',
    trial: 'STEP 1 (NEJM 2021)',
    color: '#34d399',
    status: 'FDA Approved',
  },
  {
    compound: 'Tirzepatide',
    generation: '2nd',
    receptors: 'GLP-1R + GIP-R',
    mechanism: 'Dual agonist',
    weightLoss: '~21%',
    trial: 'SURMOUNT-1 (NEJM 2022)',
    color: '#a78bfa',
    status: 'FDA Approved',
  },
  {
    compound: 'Retatrutide',
    generation: '3rd',
    receptors: 'GLP-1R + GIP-R + GCGR',
    mechanism: 'Triple agonist',
    weightLoss: '24.2%',
    trial: 'NEJM Phase 2 (2023)',
    color: '#d4a843',
    status: 'Research Phase',
    highlight: true,
  },
]

const trialData = [
  { group: 'Placebo', dose: '—', weightLoss: '−2.1%', note: 'Baseline control' },
  { group: 'Low dose', dose: '1 mg/week', weightLoss: '−8.7%', note: '' },
  { group: 'Mid dose A', dose: '4 mg/week', weightLoss: '−17.3%', note: '' },
  { group: 'Mid dose B', dose: '8 mg/week', weightLoss: '−22.8%', note: '' },
  { group: 'High dose', dose: '12 mg/week', weightLoss: '−24.2%', note: 'Highest ever recorded' },
]

const timelineMonths = [
  {
    period: 'Month 1–2',
    headline: 'Appetite Suppression Initiates',
    weightLoss: '3–5% body weight',
    color: '#d4a843',
    details: [
      'GLP-1R activation reduces hunger signals within days of first dose',
      'Gastric emptying slows — meals feel more filling with smaller portions',
      'GIP-R co-activation begins amplifying appetite suppression',
      'GCGR thermogenesis starts contributing to resting caloric burn',
      'Nausea is most common during this titration window — dose escalation manages this',
    ],
  },
  {
    period: 'Month 3–4',
    headline: 'Metabolic Adaptation Deepens',
    weightLoss: '8–12% body weight',
    color: '#f59e0b',
    details: [
      'Full receptor saturation achieved at maintenance dose',
      'Insulin sensitivity measurably improved in research subjects',
      'Hepatic fat reduction documented via imaging in trial cohorts',
      'Body composition shifts — adipose-preferential loss pattern observed',
      'Plateau risk lower than mono/dual agonists due to thermogenic contribution',
    ],
  },
  {
    period: 'Month 6+',
    headline: 'Continued Loss — 15–24% Range',
    weightLoss: '15–24.2% body weight',
    color: '#fb923c',
    details: [
      'NEJM Phase 2 trial ran 48 weeks — primary endpoint reached at week 36',
      'Dose-response curve plateaus for most subjects in 15–24% range',
      '24.2% achieved at highest dose group (12mg/week, n=338 total trial)',
      'Lean mass preservation better than caloric restriction alone',
      'Cardiovascular markers (blood pressure, triglycerides) improved significantly',
    ],
  },
]

export default function RetatrutideWeightLossGuidePage() {
  return (
    <main style={{ background: '#fff', color: '#1a1a2a' }}>

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section
        style={{
          background: 'linear-gradient(135deg, #1a0d00 0%, #2a1500 40%, #1a0a00 100%)',
          padding: 'clamp(5rem, 10vw, 8rem) 1.5rem clamp(4rem, 8vw, 6rem)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Amber glow orb */}
        <div
          style={{
            position: 'absolute',
            top: '5%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 700,
            height: 500,
            background: 'radial-gradient(ellipse, rgba(212,168,67,0.15) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ position: 'relative', maxWidth: 860, margin: '0 auto' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.72rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.14em',
              color: '#d4a843',
              marginBottom: '1rem',
            }}
          >
            <Zap size={12} />
            Triple Agonist Research Compound
          </div>
          <h1
            style={{
              fontSize: 'clamp(2.2rem, 5.5vw, 3.8rem)',
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              color: '#fff',
              marginBottom: '1.25rem',
            }}
          >
            Retatrutide: The Triple Agonist<br />
            <span style={{ color: '#d4a843' }}>24.2% Body Weight Reduction</span>
          </h1>
          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              color: 'rgba(255,255,255,0.65)',
              maxWidth: 640,
              margin: '0 auto 1.25rem',
              lineHeight: 1.75,
            }}
          >
            Retatrutide is the only peptide to simultaneously activate GLP-1R, GIP-R, and the glucagon receptor —
            producing the highest pharmacological weight loss ever documented in a controlled clinical trial.
          </p>
          <p
            style={{
              fontSize: '0.95rem',
              color: 'rgba(212,168,67,0.8)',
              fontWeight: 600,
              marginBottom: '2.5rem',
            }}
          >
            NEJM 2023 Phase 2 Trial · n=338 · 48 Weeks · 24.2% Mean Body Weight Reduction (12mg group)
          </p>

          {/* Stat badges */}
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '2.5rem',
            }}
          >
            {[
              { label: 'Weight Reduction', value: '24.2%' },
              { label: 'Trial Duration', value: '48 Weeks' },
              { label: 'Receptors Targeted', value: '3' },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  background: 'rgba(212,168,67,0.1)',
                  border: '1px solid rgba(212,168,67,0.25)',
                  borderRadius: 14,
                  padding: '0.85rem 1.5rem',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#d4a843', lineHeight: 1 }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.5)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.3rem' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href={AFFILIATE_PRODUCT('retatrutide-10mg')}
              target="_blank"
              rel="sponsored noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: '#d4a843',
                color: '#1a0d00',
                fontWeight: 800,
                fontSize: '0.95rem',
                padding: '0.85rem 1.75rem',
                borderRadius: 100,
                textDecoration: 'none',
                letterSpacing: '-0.01em',
              }}
            >
              Buy Retatrutide 10mg <ExternalLink size={15} />
            </a>
            <a
              href={AFFILIATE_BASE}
              target="_blank"
              rel="sponsored noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(255,255,255,0.06)',
                color: 'rgba(255,255,255,0.7)',
                border: '1px solid rgba(255,255,255,0.15)',
                fontWeight: 600,
                fontSize: '0.95rem',
                padding: '0.85rem 1.75rem',
                borderRadius: 100,
                textDecoration: 'none',
              }}
            >
              Shop All Peptides <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* ── WHAT MAKES IT DIFFERENT ──────────────────────────────────────────── */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 1.5rem', background: '#fff' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div
            style={{
              fontSize: '0.72rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.14em',
              color: '#d4a843',
              marginBottom: '0.5rem',
            }}
          >
            Why It's Different
          </div>
          <h2
            style={{
              fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
              fontWeight: 800,
              letterSpacing: '-0.025em',
              color: '#0a0a14',
              marginBottom: '1.5rem',
            }}
          >
            Triple vs. Dual vs. Mono Agonism
          </h2>
          <div
            style={{
              background: 'linear-gradient(135deg, #fffbf0 0%, #fff8e8 100%)',
              border: '1px solid rgba(212,168,67,0.2)',
              borderLeft: '4px solid #d4a843',
              borderRadius: '0 16px 16px 0',
              padding: '2rem 2.25rem',
              marginBottom: '2rem',
            }}
          >
            <p style={{ color: '#444460', lineHeight: 1.8, marginBottom: '1rem', fontSize: '1.05rem' }}>
              Semaglutide targets one receptor. Tirzepatide targets two. Retatrutide targets three — and the
              relationship is not linear. Each additional receptor does not simply add its individual contribution;
              instead, the receptors interact through overlapping downstream signaling pathways, producing
              synergistic effects that exceed what arithmetic would predict.
            </p>
            <p style={{ color: '#444460', lineHeight: 1.8, marginBottom: '1rem', fontSize: '1.05rem' }}>
              The critical distinction is the glucagon receptor (GCGR). Glucagon is the counter-regulatory
              hormone to insulin — it promotes energy release, lipolysis, and thermogenesis. In the context of
              simultaneous GLP-1R and GIP-R activation (which manage glucose and appetite), glucagon receptor
              agonism adds a third dimension entirely absent from any other GLP-1 class compound: a direct
              increase in caloric expenditure at rest.
            </p>
            <p style={{ color: '#444460', lineHeight: 1.8, fontSize: '1.05rem' }}>
              This means retatrutide does not merely suppress appetite more than semaglutide or tirzepatide —
              it also makes the body burn more calories at baseline. The combination of reduced intake and
              increased expenditure, both sustained over 48 weeks, produced 24.2% mean body weight reduction
              in the highest dose group: the highest number ever recorded for any pharmacological agent in a
              controlled clinical trial.
            </p>
          </div>
        </div>
      </section>

      {/* ── TRIPLE RECEPTOR MECHANISM ────────────────────────────────────────── */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 1.5rem', background: '#f7f8fc' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div
              style={{
                fontSize: '0.72rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
                color: '#d4a843',
                marginBottom: '0.5rem',
              }}
            >
              Mechanism of Action
            </div>
            <h2
              style={{
                fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
                fontWeight: 800,
                letterSpacing: '-0.025em',
                color: '#0a0a14',
                marginBottom: '0.75rem',
              }}
            >
              Three Receptors. Three Mechanisms.
            </h2>
            <p style={{ color: '#555570', maxWidth: 560, margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.7 }}>
              Each receptor contributes a distinct metabolic lever. Together they produce an outcome no single
              or dual agonist can replicate.
            </p>
          </div>

          <div className="rg-3col" style={{ gap: '1.5rem' }}>
            {receptorCards.map((card) => (
              <div
                key={card.receptor}
                style={{
                  background: '#fff',
                  border: '1px solid rgba(0,0,0,0.07)',
                  borderTop: `4px solid ${card.color}`,
                  borderRadius: 20,
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
              >
                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: `${card.color}18`,
                      border: `1px solid ${card.color}30`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: card.color,
                      flexShrink: 0,
                    }}
                  >
                    {card.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        color: card.color,
                        marginBottom: '0.2rem',
                      }}
                    >
                      {card.receptor}
                    </div>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0a0a14', lineHeight: 1.3 }}>
                      {card.name}
                    </h3>
                  </div>
                </div>

                {/* Effects list */}
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {card.effects.map((effect, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                      <CheckCircle
                        size={14}
                        style={{ color: card.color, flexShrink: 0, marginTop: '0.2rem' }}
                      />
                      <span style={{ fontSize: '0.88rem', color: '#444460', lineHeight: 1.55 }}>{effect}</span>
                    </li>
                  ))}
                </ul>

                {/* Summary */}
                <p
                  style={{
                    fontSize: '0.88rem',
                    color: '#6b6b8a',
                    lineHeight: 1.65,
                    background: `${card.color}08`,
                    border: `1px solid ${card.color}15`,
                    borderRadius: 10,
                    padding: '0.85rem 1rem',
                    marginTop: 'auto',
                  }}
                >
                  {card.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GENERATION COMPARISON TABLE ──────────────────────────────────────── */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 1.5rem', background: '#fff' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ marginBottom: '2.5rem' }}>
            <div
              style={{
                fontSize: '0.72rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
                color: '#d4a843',
                marginBottom: '0.5rem',
              }}
            >
              Generation Comparison
            </div>
            <h2
              style={{
                fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
                fontWeight: 800,
                letterSpacing: '-0.025em',
                color: '#0a0a14',
              }}
            >
              Where Retatrutide Sits in the Landscape
            </h2>
          </div>

          <div style={{ overflowX: 'auto', borderRadius: 16, border: '1px solid rgba(0,0,0,0.07)' }}>
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                minWidth: 640,
                fontSize: '0.92rem',
              }}
            >
              <thead>
                <tr style={{ background: '#f7f8fc' }}>
                  {['Compound', 'Generation', 'Receptors Targeted', 'Mechanism', 'Clinical Weight Loss', 'Key Trial', 'Status'].map(
                    (header) => (
                      <th
                        key={header}
                        style={{
                          padding: '0.85rem 1.1rem',
                          textAlign: 'left',
                          fontSize: '0.78rem',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em',
                          color: '#6b6b8a',
                          borderBottom: '1px solid rgba(0,0,0,0.07)',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {header}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {generationRows.map((row, i) => (
                  <tr
                    key={row.compound}
                    style={{
                      background: row.highlight ? 'rgba(212,168,67,0.06)' : i % 2 === 1 ? '#fafafa' : '#fff',
                      borderBottom: '1px solid rgba(0,0,0,0.05)',
                    }}
                  >
                    <td style={{ padding: '1rem 1.1rem' }}>
                      <span style={{ fontWeight: 800, color: row.color, fontSize: '1rem' }}>
                        {row.compound}
                      </span>
                      {row.highlight && (
                        <span
                          style={{
                            marginLeft: 8,
                            fontSize: '0.65rem',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            color: '#d4a843',
                            background: 'rgba(212,168,67,0.12)',
                            border: '1px solid rgba(212,168,67,0.25)',
                            borderRadius: 100,
                            padding: '0.1rem 0.5rem',
                          }}
                        >
                          Peak
                        </span>
                      )}
                    </td>
                    <td style={{ padding: '1rem 1.1rem', color: '#555570', fontWeight: 600 }}>
                      {row.generation}
                    </td>
                    <td style={{ padding: '1rem 1.1rem', color: '#333348', fontWeight: row.highlight ? 700 : 400 }}>
                      {row.receptors}
                    </td>
                    <td style={{ padding: '1rem 1.1rem', color: '#555570' }}>{row.mechanism}</td>
                    <td
                      style={{
                        padding: '1rem 1.1rem',
                        fontWeight: 800,
                        color: row.color,
                        fontSize: row.highlight ? '1.05rem' : '0.92rem',
                      }}
                    >
                      {row.weightLoss}
                      {row.highlight && (
                        <div style={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#d4a843', marginTop: '0.1rem' }}>
                          Highest ever
                        </div>
                      )}
                    </td>
                    <td style={{ padding: '1rem 1.1rem', color: '#6b6b8a', fontSize: '0.85rem' }}>
                      {row.trial}
                    </td>
                    <td style={{ padding: '1rem 1.1rem' }}>
                      <span
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em',
                          color: row.status === 'FDA Approved' ? '#34d399' : '#d4a843',
                          background:
                            row.status === 'FDA Approved'
                              ? 'rgba(52,211,153,0.1)'
                              : 'rgba(212,168,67,0.1)',
                          border: `1px solid ${row.status === 'FDA Approved' ? 'rgba(52,211,153,0.2)' : 'rgba(212,168,67,0.2)'}`,
                          borderRadius: 100,
                          padding: '0.2rem 0.65rem',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── NEJM 2023 TRIAL DATA ─────────────────────────────────────────────── */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 1.5rem', background: '#f7f8fc' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ marginBottom: '2.5rem' }}>
            <div
              style={{
                fontSize: '0.72rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
                color: '#d4a843',
                marginBottom: '0.5rem',
              }}
            >
              Clinical Evidence
            </div>
            <h2
              style={{
                fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
                fontWeight: 800,
                letterSpacing: '-0.025em',
                color: '#0a0a14',
                marginBottom: '0.75rem',
              }}
            >
              NEJM 2023 Phase 2 Trial Breakdown
            </h2>
            <p style={{ color: '#555570', maxWidth: 680, fontSize: '1.02rem', lineHeight: 1.7 }}>
              Published in the New England Journal of Medicine (Jastreboff et al., 2023). Randomized, double-blind,
              placebo-controlled. 338 participants across multiple dose cohorts, 48-week duration. This was a Phase 2
              dose-finding study — not a Phase 3 registration trial — and all subjects are classified as research participants.
            </p>
          </div>

          <div className="rg-2col" style={{ gap: '2rem', marginBottom: '2.5rem' }}>
            {/* Key findings */}
            <div
              style={{
                background: '#fff',
                border: '1px solid rgba(0,0,0,0.07)',
                borderRadius: 20,
                padding: '2rem',
              }}
            >
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0a0a14', marginBottom: '1.25rem' }}>
                Key Findings
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {[
                  'Primary endpoint: 24.2% mean body weight reduction at 48 weeks (12mg cohort)',
                  'Clear dose-response curve across all active dose groups',
                  'Placebo group lost 2.1% — confirming drug effect of 22+ percentage points',
                  'All active doses statistically significant vs. placebo (p<0.001)',
                  'Waist circumference reduced by up to 25 cm in highest dose group',
                  'Triglycerides reduced by ~42%, LDL reduced by ~15%, blood pressure improved',
                  'Safety profile consistent with GLP-1 class — nausea most common (managed by titration)',
                  'No new safety signals not seen with semaglutide or tirzepatide',
                ].map((finding, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.7rem' }}>
                    <CheckCircle size={15} style={{ color: '#d4a843', flexShrink: 0, marginTop: '0.2rem' }} />
                    <span style={{ fontSize: '0.92rem', color: '#444460', lineHeight: 1.6 }}>{finding}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Dose-response table */}
            <div
              style={{
                background: '#fff',
                border: '1px solid rgba(0,0,0,0.07)',
                borderRadius: 20,
                padding: '2rem',
              }}
            >
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0a0a14', marginBottom: '1.25rem' }}>
                Dose-Response Curve
              </h3>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                  <thead>
                    <tr style={{ background: '#f7f8fc' }}>
                      {['Cohort', 'Weekly Dose', 'Weight Loss', 'Note'].map((h) => (
                        <th
                          key={h}
                          style={{
                            padding: '0.7rem 0.9rem',
                            textAlign: 'left',
                            fontSize: '0.72rem',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '0.08em',
                            color: '#6b6b8a',
                            borderBottom: '1px solid rgba(0,0,0,0.07)',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {trialData.map((row, i) => (
                      <tr
                        key={i}
                        style={{
                          background: row.note === 'Highest ever recorded' ? 'rgba(212,168,67,0.07)' : i % 2 === 1 ? '#fafafa' : '#fff',
                          borderBottom: '1px solid rgba(0,0,0,0.05)',
                        }}
                      >
                        <td style={{ padding: '0.7rem 0.9rem', color: '#444460', fontWeight: 600 }}>
                          {row.group}
                        </td>
                        <td style={{ padding: '0.7rem 0.9rem', color: '#555570' }}>{row.dose}</td>
                        <td
                          style={{
                            padding: '0.7rem 0.9rem',
                            fontWeight: row.note === 'Highest ever recorded' ? 800 : 600,
                            color: row.group === 'Placebo' ? '#9090a8' : '#d4a843',
                            fontSize: row.note === 'Highest ever recorded' ? '1rem' : '0.9rem',
                          }}
                        >
                          {row.weightLoss}
                        </td>
                        <td style={{ padding: '0.7rem 0.9rem', fontSize: '0.78rem', color: row.note === 'Highest ever recorded' ? '#d4a843' : '#9090a8', fontWeight: row.note ? 700 : 400 }}>
                          {row.note}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p style={{ fontSize: '0.8rem', color: '#9090a8', marginTop: '1rem', lineHeight: 1.6 }}>
                Source: Jastreboff et al., "Triple–Hormone-Receptor Agonist Retatrutide for Obesity," NEJM 2023.
                Data from Phase 2 randomized controlled trial. Research context only.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── RESEARCH PROTOCOL ────────────────────────────────────────────────── */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 1.5rem', background: '#fff' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div
            style={{
              fontSize: '0.72rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.14em',
              color: '#d4a843',
              marginBottom: '0.5rem',
            }}
          >
            Research Protocol
          </div>
          <h2
            style={{
              fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
              fontWeight: 800,
              letterSpacing: '-0.025em',
              color: '#0a0a14',
              marginBottom: '0.5rem',
            }}
          >
            Dosing &amp; Administration
          </h2>
          <p style={{ color: '#6b6b8a', fontSize: '0.9rem', marginBottom: '2rem' }}>
            For research purposes only. Based on published Phase 2 trial parameters from the NEJM 2023 study.
          </p>

          <div className="rg-2col" style={{ gap: '1.5rem', marginBottom: '2rem' }}>
            {/* Protocol card */}
            <div
              style={{
                background: 'linear-gradient(135deg, #fffbf0 0%, #fff8e8 100%)',
                border: '1px solid rgba(212,168,67,0.2)',
                borderRadius: 20,
                padding: '2rem',
              }}
            >
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0a0a14', marginBottom: '1.25rem' }}>
                Titration Schedule
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                {[
                  { phase: 'Weeks 1–4', dose: '2 mg/week', desc: 'Starting dose — establish tolerance' },
                  { phase: 'Weeks 5–8', dose: '4 mg/week', desc: 'First escalation — appetite suppression deepens' },
                  { phase: 'Weeks 9–12', dose: '4–8 mg/week', desc: 'Dose-find — assess individual response' },
                  { phase: 'Weeks 13+', dose: '8–12 mg/week', desc: 'Target maintenance range' },
                ].map((step) => (
                  <div
                    key={step.phase}
                    style={{
                      display: 'flex',
                      gap: '1rem',
                      alignItems: 'flex-start',
                      padding: '0.85rem 1rem',
                      background: '#fff',
                      border: '1px solid rgba(212,168,67,0.15)',
                      borderRadius: 12,
                    }}
                  >
                    <div
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        color: '#d4a843',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        whiteSpace: 'nowrap',
                        minWidth: 80,
                      }}
                    >
                      {step.phase}
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, color: '#1a1a2a', fontSize: '0.95rem' }}>{step.dose}</div>
                      <div style={{ fontSize: '0.83rem', color: '#6b6b8a', marginTop: '0.1rem' }}>{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Admin details */}
            <div
              style={{
                background: '#fff',
                border: '1px solid rgba(0,0,0,0.07)',
                borderRadius: 20,
                padding: '2rem',
              }}
            >
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0a0a14', marginBottom: '1.25rem' }}>
                Administration Details
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { label: 'Route', value: 'Subcutaneous injection (abdomen, thigh, or upper arm)' },
                  { label: 'Frequency', value: 'Once weekly — same day each week for consistency' },
                  { label: 'Dose escalation', value: 'Every 4 weeks, based on tolerance' },
                  { label: 'Target range', value: '4–12 mg weekly (trial highest: 12mg, mean WL 24.2%)' },
                  { label: 'Cycle length', value: '48 weeks (full study protocol) or ongoing research' },
                  { label: 'Storage', value: 'Refrigerated at 2–8°C, protected from light' },
                ].map((item) => (
                  <li key={item.label} style={{ display: 'flex', gap: '0.75rem' }}>
                    <div
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        background: '#d4a843',
                        flexShrink: 0,
                        marginTop: '0.55rem',
                      }}
                    />
                    <div>
                      <span style={{ fontWeight: 700, color: '#333348', fontSize: '0.9rem' }}>{item.label}: </span>
                      <span style={{ color: '#555570', fontSize: '0.9rem' }}>{item.value}</span>
                    </div>
                  </li>
                ))}
              </ul>

              <div
                style={{
                  marginTop: '1.5rem',
                  background: 'rgba(251,146,60,0.08)',
                  border: '1px solid rgba(251,146,60,0.2)',
                  borderRadius: 10,
                  padding: '0.85rem 1rem',
                  fontSize: '0.83rem',
                  color: '#7a4010',
                  lineHeight: 1.6,
                  display: 'flex',
                  gap: '0.6rem',
                  alignItems: 'flex-start',
                }}
              >
                <Shield size={14} style={{ flexShrink: 0, marginTop: '0.15rem', color: '#fb923c' }} />
                For research purposes only. Not intended for human use outside of clinical trial settings.
                Consult a qualified researcher or physician before any protocol.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT TO EXPECT TIMELINE ──────────────────────────────────────────── */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 1.5rem', background: '#f7f8fc' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div
              style={{
                fontSize: '0.72rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
                color: '#d4a843',
                marginBottom: '0.5rem',
              }}
            >
              Expected Timeline
            </div>
            <h2
              style={{
                fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
                fontWeight: 800,
                letterSpacing: '-0.025em',
                color: '#0a0a14',
              }}
            >
              What Happens at Each Stage
            </h2>
          </div>

          <div className="rg-3col" style={{ gap: '1.5rem' }}>
            {timelineMonths.map((month, i) => (
              <div
                key={month.period}
                style={{
                  background: '#fff',
                  border: '1px solid rgba(0,0,0,0.07)',
                  borderRadius: 20,
                  padding: '2rem',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Phase number */}
                <div
                  style={{
                    position: 'absolute',
                    top: '1.25rem',
                    right: '1.25rem',
                    fontSize: '3rem',
                    fontWeight: 900,
                    color: `${month.color}12`,
                    lineHeight: 1,
                  }}
                >
                  {i + 1}
                </div>

                <div
                  style={{
                    display: 'inline-block',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: month.color,
                    background: `${month.color}12`,
                    border: `1px solid ${month.color}25`,
                    borderRadius: 100,
                    padding: '0.2rem 0.75rem',
                    marginBottom: '0.85rem',
                  }}
                >
                  {month.period}
                </div>

                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0a0a14', marginBottom: '0.4rem' }}>
                  {month.headline}
                </h3>

                <div
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 900,
                    color: month.color,
                    marginBottom: '1.1rem',
                    lineHeight: 1,
                  }}
                >
                  {month.weightLoss}
                </div>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                  {month.details.map((detail, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem' }}>
                      <div
                        style={{
                          width: 5,
                          height: 5,
                          borderRadius: '50%',
                          background: month.color,
                          flexShrink: 0,
                          marginTop: '0.5rem',
                        }}
                      />
                      <span style={{ fontSize: '0.87rem', color: '#555570', lineHeight: 1.6 }}>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO RETATRUTIDE TARGETS ───────────────────────────────────────────── */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 1.5rem', background: '#fff' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div
            style={{
              fontSize: '0.72rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.14em',
              color: '#d4a843',
              marginBottom: '0.5rem',
            }}
          >
            Research Applications
          </div>
          <h2
            style={{
              fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
              fontWeight: 800,
              letterSpacing: '-0.025em',
              color: '#0a0a14',
              marginBottom: '1.5rem',
            }}
          >
            What Retatrutide Research Targets
          </h2>

          <div className="rg-2col" style={{ gap: '1.25rem' }}>
            {[
              {
                title: 'Obesity & Metabolic Syndrome Research',
                desc: 'The primary focus of the NEJM Phase 2 trial. Participants had BMI ≥27 with at least one weight-related comorbidity. Retatrutide produced the largest pharmacological body weight reduction ever documented in this population — 24.2% at 12mg over 48 weeks.',
                icon: <TrendingUp size={18} />,
              },
              {
                title: 'Type 2 Diabetes Metabolic Models',
                desc: 'Triple agonism addresses the full metabolic cascade in T2D: GLP-1R handles glucose-dependent insulin secretion, GIP-R enhances insulin sensitivity, and GCGR agonism reduces hepatic glucose output. The compound demonstrated significant HbA1c improvement across dose groups.',
                icon: <Shield size={18} />,
              },
              {
                title: 'Non-Alcoholic Fatty Liver Disease (NAFLD)',
                desc: 'Glucagon receptor activation directly reduces hepatic fat — a mechanism not available through GLP-1 or GIP agonism alone. Trial data showed significant hepatic fat reduction via imaging in treated subjects, positioning retatrutide as a candidate for NAFLD research models.',
                icon: <Zap size={18} />,
              },
              {
                title: 'Cardiovascular Risk Factor Research',
                desc: 'Secondary endpoints in the NEJM trial showed broad cardiometabolic improvement: systolic blood pressure reduced by up to 8 mmHg, triglycerides reduced 42%, and waist circumference reduced up to 25 cm. Cardiovascular outcome trials are a logical next Phase 3 target.',
                icon: <CheckCircle size={18} />,
              },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  background: '#fff',
                  border: '1px solid rgba(0,0,0,0.07)',
                  borderRadius: 16,
                  padding: '1.75rem',
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'flex-start',
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: 'rgba(212,168,67,0.1)',
                    border: '1px solid rgba(212,168,67,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#d4a843',
                    flexShrink: 0,
                  }}
                >
                  {card.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0a0a14', marginBottom: '0.5rem' }}>
                    {card.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#555570', lineHeight: 1.7 }}>{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <section
        style={{
          padding: 'clamp(4rem, 8vw, 6rem) 1.5rem',
          background: 'linear-gradient(135deg, #1a0d00 0%, #2a1500 50%, #1a0a00 100%)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '0%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 600,
            height: 400,
            background: 'radial-gradient(ellipse, rgba(212,168,67,0.15) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ position: 'relative', maxWidth: 680, margin: '0 auto' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.72rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.14em',
              color: '#d4a843',
              marginBottom: '1rem',
            }}
          >
            <Zap size={12} />
            Research Grade · Third-Party Tested
          </div>
          <h2
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              fontWeight: 900,
              color: '#fff',
              letterSpacing: '-0.025em',
              marginBottom: '1rem',
              lineHeight: 1.15,
            }}
          >
            Source Verified Retatrutide<br />
            <span style={{ color: '#d4a843' }}>for Your Research Protocol</span>
          </h2>
          <p
            style={{
              color: 'rgba(255,255,255,0.6)',
              fontSize: '1.05rem',
              lineHeight: 1.7,
              marginBottom: '0.75rem',
            }}
          >
            Apollo Peptide Sciences delivers research-grade retatrutide with full third-party verification.
            The same triple GLP-1/GIP/GCG agonist that produced 24.2% body weight reduction in the NEJM 2023
            Phase 2 trial — available for qualified research applications.
          </p>
          <p style={{ color: 'rgba(212,168,67,0.7)', fontSize: '0.88rem', marginBottom: '2.5rem' }}>
            Certificate of Analysis available · Lyophilized powder · Ships cold-packaged
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href={AFFILIATE_PRODUCT('retatrutide-10mg')}
              target="_blank"
              rel="sponsored noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                background: '#d4a843',
                color: '#1a0d00',
                fontWeight: 800,
                fontSize: '1rem',
                padding: '1rem 2rem',
                borderRadius: 100,
                textDecoration: 'none',
                letterSpacing: '-0.01em',
              }}
            >
              Buy Retatrutide 10mg <ExternalLink size={16} />
            </a>
            <Link
              href="/semaglutide-vs-tirzepatide-vs-retatrutide"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                background: 'rgba(255,255,255,0.07)',
                color: 'rgba(255,255,255,0.75)',
                border: '1px solid rgba(255,255,255,0.15)',
                fontWeight: 600,
                fontSize: '1rem',
                padding: '1rem 2rem',
                borderRadius: 100,
                textDecoration: 'none',
              }}
            >
              Full GLP-1 Comparison <ArrowRight size={16} />
            </Link>
          </div>

          <p
            style={{
              marginTop: '2rem',
              fontSize: '0.78rem',
              color: 'rgba(255,255,255,0.3)',
              lineHeight: 1.6,
              maxWidth: 520,
              margin: '2rem auto 0',
            }}
          >
            Affiliate disclosure: This page contains sponsored links to Apollo Peptide Sciences.
            All content is for educational and research reference purposes only. Not medical advice.
            Retatrutide is not FDA-approved for human use.
          </p>
        </div>
      </section>

      {/* ── RELATED LINKS ────────────────────────────────────────────────────── */}
      <section style={{ padding: 'clamp(2rem, 4vw, 3.5rem) 1.5rem', background: '#fff' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <RelatedLinks currentPath="/retatrutide-weight-loss-guide" />
        </div>
      </section>

    </main>
  )
}
