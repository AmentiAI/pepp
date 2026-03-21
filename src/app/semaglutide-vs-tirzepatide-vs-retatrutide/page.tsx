'use client'
import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Zap,
  TrendingUp,
  Activity,
  Shield,
  AlertTriangle,
  CheckCircle,
  FlaskConical,
} from 'lucide-react'
import { AFFILIATE_BASE, AFFILIATE_PRODUCT } from '@/lib/products'
import RelatedLinks from '@/components/RelatedLinks'

const generationCards = [
  {
    gen: '1st Generation',
    name: 'Semaglutide',
    mechanism: 'GLP-1 mono-agonist',
    weightLoss: '~15%',
    trial: 'STEP / SUSTAIN trials',
    color: '#34d399',
    description:
      'The pioneer of modern GLP-1 therapy. Proven safety record across thousands of patients. FDA-approved as Ozempic and Wegovy. The benchmark against which all newer agents are measured.',
    status: 'FDA Approved',
    statusColor: '#34d399',
  },
  {
    gen: '2nd Generation',
    name: 'Tirzepatide',
    mechanism: 'GLP-1 + GIP dual agonist',
    weightLoss: '~22.5%',
    trial: 'SURMOUNT-1 trial',
    color: '#a78bfa',
    description:
      'Added GIP co-agonism delivers superior insulin sensitization and greater fat mobilization than semaglutide alone. Represents a meaningful step forward in efficacy with a well-tolerated side effect profile.',
    status: 'FDA Approved',
    statusColor: '#34d399',
  },
  {
    gen: '3rd Generation',
    name: 'Retatrutide',
    mechanism: 'GLP-1 + GIP + Glucagon triple agonist',
    weightLoss: '~24.2%',
    trial: 'NEJM Phase 2, 2023',
    color: '#d4a843',
    description:
      'The addition of glucagon receptor agonism introduces direct thermogenic activity — increasing caloric expenditure at rest. The highest pharmacological weight loss ever recorded. Research phase compound.',
    status: 'Research Phase',
    statusColor: '#d4a843',
  },
]

const mechanismRows = [
  { label: 'Receptor targets', sema: 'GLP-1', tirz: 'GLP-1 + GIP', reta: 'GLP-1 + GIP + Glucagon' },
  { label: 'Generation', sema: '1st', tirz: '2nd', reta: '3rd' },
  { label: 'Best clinical weight loss', sema: '~15%', tirz: '~22.5%', reta: '~24.2%' },
  {
    label: 'FDA approval status',
    sema: 'Approved (Ozempic/Wegovy)',
    tirz: 'Approved (Mounjaro/Zepbound)',
    reta: 'Research phase',
  },
  { label: 'Dosing frequency', sema: 'Weekly', tirz: 'Weekly', reta: 'Weekly' },
  {
    label: 'Primary metabolic effect',
    sema: 'Appetite suppression',
    tirz: 'Appetite + insulin sensitization',
    reta: 'Appetite + insulin + thermogenesis',
  },
]

const decisionCards = [
  {
    scenario: 'Starting out / proven safety',
    recommendation: 'Semaglutide',
    reason:
      'Extensive long-term safety data, wide clinical familiarity, and strong efficacy for first-time GLP-1 users. The lowest risk on-ramp to GLP-1 therapy.',
    href: '/products/glp-1s-5mg',
    color: '#34d399',
    icon: <Shield size={20} />,
  },
  {
    scenario: 'Maximum weight loss, FDA-approved',
    recommendation: 'Tirzepatide',
    reason:
      'The highest efficacy among currently approved options. Dual receptor synergy provides a meaningfully better outcome than semaglutide with an established safety profile.',
    href: '/products/glp-2t-15m',
    color: '#a78bfa',
    icon: <TrendingUp size={20} />,
  },
  {
    scenario: 'Maximum weight loss research protocol',
    recommendation: 'Retatrutide',
    reason:
      'The highest recorded pharmacological fat loss compound in existence. For research purposes only. Triple-receptor mechanism adds thermogenesis no other GLP-1 can match.',
    href: '/products/glp-3r-10mg',
    color: '#d4a843',
    icon: <FlaskConical size={20} />,
  },
]

const faqs = [
  {
    q: 'Which GLP-1 peptide causes the most weight loss?',
    a: 'Retatrutide — producing 24.2% mean body weight reduction in the 2023 NEJM Phase 2 trial. This is the highest ever recorded for any pharmacological compound in a controlled clinical setting. For context, semaglutide achieved ~15% in STEP trials and tirzepatide ~22.5% in SURMOUNT-1. The difference is attributable to retatrutide\'s third receptor target: glucagon, which adds direct thermogenic activity that neither semaglutide nor tirzepatide possess.',
  },
  {
    q: 'Does semaglutide cause muscle loss?',
    a: 'Yes — all GLP-1 agonists carry a lean mass loss risk alongside fat loss, because the caloric deficit induced is agnostic to tissue type. Studies on semaglutide suggest roughly 25–40% of total weight lost may come from lean mass rather than adipose tissue. This is why stacking a GH secretagogue (CJC-1295 + Ipamorelin) is considered best practice on any GLP-1 protocol. Elevated GH levels directly promote lean tissue preservation and anabolism during energy restriction.',
  },
  {
    q: 'Can you stack GLP-1 peptides with other compounds?',
    a: 'The most clinically rational combination is a GLP-1 agonist + GH secretagogue stack. GLP-1 agonists drive fat loss through appetite suppression and metabolic modulation, while CJC-1295 + Ipamorelin amplifies GH pulses 4–8× above baseline — supporting lean mass retention, overnight recovery, and body recomposition. This combination specifically addresses the muscle preservation problem inherent to aggressive caloric restriction protocols. For research purposes only.',
  },
]

export default function GlpComparisonPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <main style={{ background: '#fff', color: '#1a1a2a' }}>

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section
        style={{
          background: 'linear-gradient(135deg, #0a1a14 0%, #0d2018 40%, #0a0a14 100%)',
          padding: 'clamp(5rem, 10vw, 8rem) 1.5rem clamp(4rem, 8vw, 6rem)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '10%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 600,
            height: 600,
            background: 'radial-gradient(ellipse, rgba(52,211,153,0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ position: 'relative', maxWidth: 860, margin: '0 auto' }}>
          <div className="section-label" style={{ justifyContent: 'center', color: '#34d399' }}>
            GLP-1 Comparison
          </div>
          <h1
            className="heading-xl"
            style={{ color: '#fff', marginBottom: '1.25rem', marginTop: '0.5rem' }}
          >
            Semaglutide vs. Tirzepatide<br />
            <span className="gold-text">vs. Retatrutide</span>
          </h1>
          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              color: 'rgba(255,255,255,0.65)',
              maxWidth: 620,
              margin: '0 auto 2.5rem',
              lineHeight: 1.7,
            }}
          >
            A generation-by-generation comparison of GLP-1 agonists — mechanisms, clinical efficacy,
            and which to choose for your goal.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/categories/metabolic-fat-loss" className="btn-primary">
              View Metabolic Compounds <ArrowRight size={16} />
            </Link>
            <a href={AFFILIATE_BASE} target="_blank" rel="noopener noreferrer" className="btn-secondary"
              style={{ color: 'rgba(255,255,255,0.7)', borderColor: 'rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.05)' }}>
              Shop Research Peptides <ExternalLink size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* ── GENERATION OVERVIEW ──────────────────────────────────────── */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 1.5rem', background: '#f7f8fc' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Generation Overview</div>
            <h2 className="heading-lg" style={{ marginTop: '0.5rem' }}>Three Generations of GLP-1 Therapy</h2>
            <p style={{ color: '#555570', maxWidth: 560, margin: '0.75rem auto 0', fontSize: '1.05rem' }}>
              Each generation unlocked a new receptor, a new mechanism, and a new ceiling for metabolic outcomes.
            </p>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {generationCards.map((card) => (
              <div
                key={card.name}
                className="hover-card-border"
                style={{
                  background: '#fff',
                  border: '1px solid rgba(0,0,0,0.08)',
                  borderRadius: 20,
                  padding: '2rem',
                  transition: 'border-color 0.2s, box-shadow 0.2s, transform 0.2s',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em',
                      color: card.color,
                      background: `${card.color}18`,
                      border: `1px solid ${card.color}30`,
                      borderRadius: 100,
                      padding: '0.2rem 0.7rem',
                    }}
                  >
                    {card.gen}
                  </span>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      color: card.statusColor,
                    }}
                  >
                    {card.status}
                  </span>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0a0a14', letterSpacing: '-0.02em' }}>
                    {card.name}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: card.color, fontWeight: 600, marginTop: '0.2rem' }}>
                    {card.mechanism}
                  </p>
                </div>
                <div
                  style={{
                    background: `${card.color}10`,
                    border: `1px solid ${card.color}25`,
                    borderRadius: 12,
                    padding: '0.75rem 1rem',
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '0.5rem',
                  }}
                >
                  <span style={{ fontSize: '2rem', fontWeight: 900, color: card.color, lineHeight: 1 }}>
                    {card.weightLoss}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: '#9090a8', fontWeight: 600 }}>
                    body weight reduction · {card.trial}
                  </span>
                </div>
                <p style={{ fontSize: '0.95rem', color: '#555570', lineHeight: 1.65 }}>
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MECHANISM COMPARISON TABLE ───────────────────────────────── */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 1.5rem', background: '#fff' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ marginBottom: '2.5rem' }}>
            <div className="section-label">Mechanism Breakdown</div>
            <h2 className="heading-lg" style={{ marginTop: '0.5rem' }}>Side-by-Side Comparison</h2>
          </div>
          <div style={{ overflowX: 'auto', borderRadius: 16, border: '1px solid rgba(0,0,0,0.07)' }}>
            <table className="data-table" style={{ minWidth: 640 }}>
              <thead>
                <tr style={{ background: '#f7f8fc' }}>
                  <th style={{ width: '30%' }}></th>
                  <th style={{ color: '#34d399' }}>Semaglutide</th>
                  <th style={{ color: '#a78bfa' }}>Tirzepatide</th>
                  <th style={{ color: '#d4a843' }}>Retatrutide</th>
                </tr>
              </thead>
              <tbody>
                {mechanismRows.map((row, i) => (
                  <tr key={i}>
                    <td style={{ fontWeight: 600, color: '#444460', fontSize: '0.9rem' }}>{row.label}</td>
                    <td style={{ color: '#3a3a5a' }}>{row.sema}</td>
                    <td style={{ color: '#3a3a5a' }}>{row.tirz}</td>
                    <td style={{ color: '#3a3a5a', fontWeight: row.label === 'Best clinical weight loss' ? 700 : 400 }}>
                      {row.reta}
                      {row.label === 'Best clinical weight loss' && (
                        <span style={{ marginLeft: 6, fontSize: '0.72rem', color: '#d4a843', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                          Highest ever
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── DEEP DIVE: SEMAGLUTIDE ───────────────────────────────────── */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 1.5rem', background: '#f7f8fc' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div className="section-label" style={{ color: '#34d399' }}>1st Generation</div>
          <h2 className="heading-lg" style={{ marginTop: '0.5rem', marginBottom: '1.5rem' }}>
            Semaglutide: The Pioneer
          </h2>
          <div
            style={{
              background: '#fff',
              border: '1px solid rgba(52,211,153,0.2)',
              borderLeft: '4px solid #34d399',
              borderRadius: '0 16px 16px 0',
              padding: '2rem 2.25rem',
              marginBottom: '1.5rem',
            }}
          >
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0a0a14', marginBottom: '1rem' }}>
              Mechanism of Action
            </h3>
            <p style={{ color: '#555570', lineHeight: 1.75, marginBottom: '1rem' }}>
              Semaglutide is a synthetic analogue of GLP-1 (glucagon-like peptide-1), an incretin hormone
              naturally secreted by intestinal L-cells in response to food intake. It mimics GLP-1's actions
              with dramatically extended half-life — approximately 7 days vs. the native peptide's 2-minute
              half-life — achieved through fatty acid conjugation that binds albumin.
            </p>
            <p style={{ color: '#555570', lineHeight: 1.75, marginBottom: '1rem' }}>
              At the receptor level, semaglutide activates GLP-1R in multiple tissues: slowing gastric
              emptying (increasing satiety duration), suppressing appetite signaling in the hypothalamic
              arcuate nucleus, stimulating glucose-dependent insulin secretion from pancreatic beta cells,
              and reducing glucagon release. The net result is a powerful appetite-suppressive and
              glucose-lowering effect.
            </p>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0a0a14', margin: '1.5rem 0 0.75rem' }}>
              Dosing &amp; Clinical Data
            </h3>
            <p style={{ color: '#555570', lineHeight: 1.75, marginBottom: '1rem' }}>
              Standard dosing escalates from 0.25mg weekly over 16–20 weeks to the target maintenance
              dose of 2.4mg/week (Wegovy) for weight management. The STEP 1 trial demonstrated 14.9% mean
              weight loss vs. 2.4% placebo over 68 weeks. SUSTAIN trials confirmed cardiovascular benefit
              in T2D populations.
            </p>
            <div
              style={{
                background: 'rgba(255,165,0,0.06)',
                border: '1px solid rgba(255,165,0,0.15)',
                borderRadius: 10,
                padding: '0.85rem 1.1rem',
                display: 'flex',
                gap: '0.75rem',
                alignItems: 'flex-start',
              }}
            >
              <AlertTriangle size={16} style={{ color: '#fb923c', marginTop: 3, flexShrink: 0 }} />
              <p style={{ fontSize: '0.9rem', color: '#6a5a40', lineHeight: 1.6 }}>
                <strong>Muscle preservation concern:</strong> Studies suggest 25–40% of total weight lost
                on semaglutide may come from lean mass. Consider pairing with a GH secretagogue protocol
                for body recomposition goals.
              </p>
            </div>
          </div>
          <Link
            href="/products/glp-1s-5mg"
            className="hover-lift"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              color: '#34d399',
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: '0.95rem',
              transition: 'transform 0.15s',
            }}
          >
            View Semaglutide (GLP-1S 5mg) <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      {/* ── DEEP DIVE: TIRZEPATIDE ───────────────────────────────────── */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 1.5rem', background: '#fff' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div className="section-label" style={{ color: '#a78bfa' }}>2nd Generation</div>
          <h2 className="heading-lg" style={{ marginTop: '0.5rem', marginBottom: '1.5rem' }}>
            Tirzepatide: The Dual Agonist
          </h2>
          <div
            style={{
              background: '#fff',
              border: '1px solid rgba(167,139,250,0.2)',
              borderLeft: '4px solid #a78bfa',
              borderRadius: '0 16px 16px 0',
              padding: '2rem 2.25rem',
              marginBottom: '1.5rem',
            }}
          >
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0a0a14', marginBottom: '1rem' }}>
              GLP-1 + GIP Dual Mechanism
            </h3>
            <p style={{ color: '#555570', lineHeight: 1.75, marginBottom: '1rem' }}>
              Tirzepatide adds co-agonism at the GIP (glucose-dependent insulinotropic polypeptide) receptor
              alongside GLP-1R. GIP is the other major incretin hormone, and its receptor is expressed not
              only in the pancreas but in adipose tissue and the central nervous system. GIP receptor
              activation in adipocytes improves insulin sensitivity at the tissue level — directly enhancing
              glucose uptake efficiency in fat cells and muscle.
            </p>
            <p style={{ color: '#555570', lineHeight: 1.75, marginBottom: '1rem' }}>
              The practical result: tirzepatide achieves superior insulin sensitization relative to semaglutide,
              driving more efficient glucose disposal and reducing the baseline hyperinsulinemia that impairs
              fat mobilization. This two-receptor synergy is the mechanistic explanation for its outperformance
              vs. semaglutide.
            </p>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0a0a14', margin: '1.5rem 0 0.75rem' }}>
              SURMOUNT-1 Clinical Data
            </h3>
            <p style={{ color: '#555570', lineHeight: 1.75, marginBottom: '1rem' }}>
              In the SURMOUNT-1 trial (N=2,539 adults with obesity), tirzepatide 15mg achieved 22.5% mean
              body weight reduction over 72 weeks vs. 2.4% placebo. 57% of participants on the highest dose
              achieved ≥20% weight loss. GI tolerability was comparable to or slightly better than semaglutide,
              with most adverse events occurring during dose escalation.
            </p>
            <div
              style={{
                background: 'rgba(167,139,250,0.06)',
                border: '1px solid rgba(167,139,250,0.15)',
                borderRadius: 10,
                padding: '0.85rem 1.1rem',
                display: 'flex',
                gap: '0.75rem',
                alignItems: 'flex-start',
              }}
            >
              <CheckCircle size={16} style={{ color: '#a78bfa', marginTop: 3, flexShrink: 0 }} />
              <p style={{ fontSize: '0.9rem', color: '#4a4060', lineHeight: 1.6 }}>
                Currently the highest-efficacy FDA-approved option for weight management. Available as
                Mounjaro (T2D) and Zepbound (obesity) in approved clinical settings.
              </p>
            </div>
          </div>
          <Link
            href="/products/glp-2t-15m"
            className="hover-lift"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              color: '#a78bfa',
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: '0.95rem',
              transition: 'transform 0.15s',
            }}
          >
            View Tirzepatide (GLP-2T 15mg) <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      {/* ── DEEP DIVE: RETATRUTIDE ───────────────────────────────────── */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 1.5rem', background: '#0a0a14' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div className="section-label" style={{ color: '#d4a843' }}>3rd Generation</div>
          <h2 className="heading-lg" style={{ marginTop: '0.5rem', marginBottom: '0.5rem', color: '#fff' }}>
            Retatrutide: The Triple Agonist
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
            For research purposes only. Not FDA-approved.
          </p>
          <div
            style={{
              background: 'rgba(212,168,67,0.06)',
              border: '1px solid rgba(212,168,67,0.25)',
              borderLeft: '4px solid #d4a843',
              borderRadius: '0 16px 16px 0',
              padding: '2rem 2.25rem',
              marginBottom: '1.5rem',
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'rgba(212,168,67,0.12)',
                border: '1px solid rgba(212,168,67,0.3)',
                borderRadius: 100,
                padding: '0.35rem 1rem',
                marginBottom: '1.25rem',
              }}
            >
              <span style={{ fontSize: '1.5rem', fontWeight: 900, color: '#d4a843', lineHeight: 1 }}>24.2%</span>
              <span style={{ fontSize: '0.78rem', color: '#c8a84a', fontWeight: 600 }}>
                Mean body weight reduction — NEJM Phase 2, 2023
              </span>
            </div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#fff', marginBottom: '1rem' }}>
              GLP-1 + GIP + Glucagon: The Third Receptor
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, marginBottom: '1rem' }}>
              Retatrutide adds glucagon receptor (GCGR) agonism to the dual-agonist framework of tirzepatide.
              Glucagon's primary metabolic role is hepatic glucose production — but GCGR activation also
              increases thermogenesis: stimulating brown adipose tissue activity and elevating basal metabolic
              rate. This means retatrutide burns more calories at rest, independent of appetite effects.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, marginBottom: '1rem' }}>
              The triple co-agonism creates a tripartite metabolic intervention: GLP-1 suppresses appetite
              and slows gastric emptying, GIP enhances insulin sensitivity and fat cell glucose uptake, and
              glucagon amplifies thermogenic energy expenditure. No other single molecule achieves all three.
            </p>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#fff', margin: '1.5rem 0 0.75rem' }}>
              NEJM Phase 2 Trial (2023) — The Record
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, marginBottom: '1rem' }}>
              Published in the New England Journal of Medicine in June 2023, the Phase 2 dose-escalation
              trial of retatrutide demonstrated 24.2% mean body weight reduction at the highest dose (12mg)
              over 48 weeks. This is the highest pharmacological weight loss ever recorded in a controlled
              clinical trial — surpassing both semaglutide and tirzepatide. No other approved or
              investigational compound has replicated this outcome.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.75 }}>
              Retatrutide is currently in Phase 3 trials. It remains a research compound. All use is
              strictly for laboratory research purposes only.
            </p>
          </div>
          <a
            href={AFFILIATE_PRODUCT('glp-3r-10mg')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}
          >
            View Retatrutide (Research) <ExternalLink size={15} />
          </a>
        </div>
      </section>

      {/* ── MUSCLE PRESERVATION ─────────────────────────────────────── */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 1.5rem', background: '#f7f8fc' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div className="section-label">The Critical Variable</div>
          <h2 className="heading-lg" style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>
            The Muscle Loss Problem —{' '}
            <span className="gold-text">And How to Solve It</span>
          </h2>
          <p style={{ color: '#555570', lineHeight: 1.75, marginBottom: '1.5rem', fontSize: '1.05rem' }}>
            Every GLP-1 agonist carries the same fundamental risk: the caloric deficit they create is
            tissue-agnostic. When the body is in deep negative energy balance, it draws from both adipose
            tissue and lean muscle mass. Studies on semaglutide suggest as much as 25–40% of total weight
            lost may come from lean tissue — a significant outcome for anyone prioritising body composition
            rather than scale weight alone.
          </p>
          <div
            style={{
              background: '#fff',
              border: '1px solid rgba(212,168,67,0.2)',
              borderRadius: 20,
              padding: '2rem 2.25rem',
              marginBottom: '1.5rem',
            }}
          >
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: 'rgba(212,168,67,0.1)',
                  border: '1px solid rgba(212,168,67,0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  color: '#d4a843',
                }}
              >
                <Zap size={20} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0a0a14', marginBottom: '0.5rem' }}>
                  The GH Secretagogue Stack: CJC-1295 + Ipamorelin
                </h3>
                <p style={{ color: '#555570', lineHeight: 1.75, marginBottom: '1rem' }}>
                  The most effective evidence-based mitigation strategy is to co-administer a growth hormone
                  secretagogue alongside the GLP-1 protocol. CJC-1295 (a GHRH analogue) combined with
                  Ipamorelin (a selective GH secretagogue and ghrelin receptor agonist) amplifies endogenous
                  GH pulses 4–8× above baseline — without cortisol blunting or prolactin elevation.
                </p>
                <p style={{ color: '#555570', lineHeight: 1.75, marginBottom: '1rem' }}>
                  Elevated GH has well-established anabolic and anti-catabolic effects on skeletal muscle.
                  During caloric restriction, GH signalling helps partition energy utilisation toward fat
                  oxidation and away from lean tissue catabolism. The combination creates the conditions for
                  genuine body recomposition: concurrent fat loss and lean mass preservation, rather than
                  simply total weight reduction.
                </p>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <Link href="/products/cjc1295-ipamorelin" className="btn-primary" style={{ fontSize: '0.9rem', padding: '0.65rem 1.4rem' }}>
                    CJC-1295 + Ipamorelin Stack <ArrowRight size={14} />
                  </Link>
                  <Link href="/stacks/fat-loss" className="btn-secondary" style={{ fontSize: '0.9rem', padding: '0.65rem 1.4rem' }}>
                    View Fat Loss Stacks <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DECISION CARDS ───────────────────────────────────────────── */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 1.5rem', background: '#fff' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Decision Guide</div>
            <h2 className="heading-lg" style={{ marginTop: '0.5rem' }}>Which Should You Choose?</h2>
            <p style={{ color: '#555570', maxWidth: 520, margin: '0.75rem auto 0', fontSize: '1.05rem' }}>
              Match your goal and risk tolerance to the right generation.
            </p>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {decisionCards.map((card) => (
              <div
                key={card.recommendation}
                className="hover-card-border"
                style={{
                  background: '#fff',
                  border: '1px solid rgba(0,0,0,0.08)',
                  borderRadius: 20,
                  padding: '1.75rem',
                  transition: 'border-color 0.2s, box-shadow 0.2s, transform 0.2s',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: card.color, marginBottom: '0.25rem' }}>
                  {card.icon}
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    {card.scenario}
                  </span>
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0a0a14', letterSpacing: '-0.02em' }}>
                  {card.recommendation}
                </h3>
                <p style={{ color: '#555570', lineHeight: 1.65, fontSize: '0.95rem', flexGrow: 1 }}>
                  {card.reason}
                </p>
                <Link
                  href={card.href}
                  className="hover-gold"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    color: card.color,
                    textDecoration: 'none',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    marginTop: '0.25rem',
                    transition: 'color 0.15s',
                  }}
                >
                  View compound <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 1.5rem', background: '#f7f8fc' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>FAQ</div>
            <h2 className="heading-lg" style={{ marginTop: '0.5rem' }}>Common Questions</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{
                  background: '#fff',
                  border: `1px solid ${openFaq === i ? 'rgba(212,168,67,0.25)' : 'rgba(0,0,0,0.07)'}`,
                  borderRadius: 14,
                  overflow: 'hidden',
                  transition: 'border-color 0.2s',
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1.25rem 1.5rem',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    gap: '1rem',
                  }}
                >
                  <span style={{ fontWeight: 700, fontSize: '1rem', color: '#0a0a14', lineHeight: 1.4 }}>
                    {faq.q}
                  </span>
                  {openFaq === i
                    ? <ChevronUp size={18} style={{ color: '#d4a843', flexShrink: 0 }} />
                    : <ChevronDown size={18} style={{ color: '#9090a8', flexShrink: 0 }} />
                  }
                </button>
                {openFaq === i && (
                  <div style={{ padding: '0 1.5rem 1.5rem' }}>
                    <p style={{ color: '#555570', lineHeight: 1.75, fontSize: '0.97rem' }}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED LINKS ────────────────────────────────────────────── */}
      <section style={{ padding: '0 1.5rem 1rem', maxWidth: 860, margin: '0 auto' }}>
        <RelatedLinks currentPath="/semaglutide-vs-tirzepatide-vs-retatrutide" />
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────── */}
      <section
        style={{
          padding: 'clamp(3.5rem, 7vw, 6rem) 1.5rem',
          background: 'linear-gradient(135deg, #0a1a14 0%, #0a0a14 100%)',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: 620, margin: '0 auto' }}>
          <div className="section-label" style={{ justifyContent: 'center', color: '#34d399' }}>
            Next Step
          </div>
          <h2 className="heading-lg" style={{ color: '#fff', marginTop: '0.5rem', marginBottom: '1rem' }}>
            Ready to Explore GLP-1 Compounds?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', marginBottom: '2rem', lineHeight: 1.7 }}>
            Browse the full metabolic and fat loss category, or visit Apollo Peptide Sciences
            to source research-grade compounds for your protocol.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/categories/metabolic-fat-loss" className="btn-primary">
              Metabolic &amp; Fat Loss <ArrowRight size={16} />
            </Link>
            <a
              href={AFFILIATE_BASE}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{
                color: 'rgba(255,255,255,0.65)',
                borderColor: 'rgba(255,255,255,0.15)',
                background: 'rgba(255,255,255,0.05)',
              }}
            >
              Apollo Peptide Sciences <ExternalLink size={15} />
            </a>
          </div>
          <p style={{ marginTop: '2rem', fontSize: '0.78rem', color: 'rgba(255,255,255,0.3)', lineHeight: 1.6 }}>
            For research and laboratory use only. Not intended for human consumption.
            These statements have not been evaluated by the FDA.
          </p>
        </div>
      </section>
    </main>
  )
}
