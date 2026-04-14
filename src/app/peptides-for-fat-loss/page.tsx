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
  FlaskConical,
  Target,
  Flame,
  BarChart3,
} from 'lucide-react'
import { AFFILIATE_BASE, AFFILIATE_PRODUCT } from '@/lib/products'
import RelatedLinks from '@/components/RelatedLinks'

const GOLD = '#d4a843'

// ── DATA ─────────────────────────────────────────────────────────────────────

const tiers = [
  {
    tier: 'Tier 1',
    label: 'Triple Agonist',
    name: 'Retatrutide',
    slug: 'retatrutide-10mg',
    weightLoss: '24.2%',
    trial: 'NEJM Phase 2, 2023',
    mechanism: 'GLP-1 + GIP + Glucagon receptors',
    color: GOLD,
    tagColor: GOLD,
    status: 'Research Phase',
    description:
      'The highest pharmacological weight loss ever recorded in a controlled clinical trial. Retatrutide\'s third receptor — glucagon — adds direct thermogenesis, increasing resting caloric expenditure beyond what appetite suppression alone achieves. For researchers seeking the ceiling of fat loss science.',
    icon: <Flame size={20} />,
    candidate: 'Obese / metabolic syndrome / aggressive research protocols',
  },
  {
    tier: 'Tier 1',
    label: 'Dual Agonist',
    name: 'Tirzepatide',
    slug: 'tirzepatide-15mg',
    weightLoss: '21%',
    trial: 'SURMOUNT-1 trial',
    mechanism: 'GLP-1 + GIP dual receptors',
    color: '#a78bfa',
    tagColor: '#a78bfa',
    status: 'FDA Approved',
    description:
      'GIP co-agonism adds insulin sensitization and superior fat mobilization over semaglutide. SURMOUNT-1 showed 21% mean body weight reduction — unprecedented for an FDA-approved compound at the time of approval. The highest-efficacy approved option available.',
    icon: <TrendingUp size={20} />,
    candidate: 'Significant overweight / metabolic syndrome / maximum approved efficacy',
  },
  {
    tier: 'Tier 2',
    label: 'Mono Agonist',
    name: 'Semaglutide',
    slug: 'semaglutide-6mg',
    weightLoss: '14.9%',
    trial: 'STEP-1 trial',
    mechanism: 'GLP-1 receptor (mono)',
    color: '#34d399',
    tagColor: '#34d399',
    status: 'FDA Approved',
    description:
      'The pioneer of modern metabolic peptide therapy. Semaglutide defined the GLP-1 era with robust safety data from thousands of participants and a well-characterised side-effect profile. The rational first-time choice and the benchmark every newer compound is measured against.',
    icon: <Shield size={20} />,
    candidate: 'First-time users / proven safety priority / stepwise protocol',
  },
  {
    tier: 'Tier 2',
    label: 'GH Secretagogue',
    name: 'Ipamorelin / CJC-1295',
    slug: 'ipamorelin-cjc-1295-blend-10mg',
    weightLoss: 'Indirect — body recomp',
    trial: 'Multiple GH/IGF-1 studies',
    mechanism: 'GHRP + GHRH — pulsatile GH release',
    color: '#38bdf8',
    tagColor: '#38bdf8',
    status: 'Research Phase',
    description:
      'Elevates endogenous GH 4–8× above baseline through synergistic GHRP + GHRH action. Pulsatile GH drives lipolysis in adipose tissue, preferentially sparing lean mass during a caloric deficit. The cornerstone of any stacked recomposition or muscle-preservation protocol on GLP-1 therapy.',
    icon: <Activity size={20} />,
    candidate: 'Athletic recomp / lean mass preservation during GLP-1 protocol / body recomposition',
  },
  {
    tier: 'Tier 3',
    label: 'Supporting',
    name: 'GHK-Cu',
    slug: null,
    weightLoss: 'Gene-level modulation',
    trial: 'Gene expression studies',
    mechanism: 'Copper peptide — 4,000+ gene targets',
    color: '#f97316',
    tagColor: '#f97316',
    status: 'Research Phase',
    description:
      'GHK-Cu modulates adipokine signalling, lipid metabolism genes, and inflammatory pathways linked to fat distribution and metabolic efficiency. Acts as a supporting compound for protocols targeting systemic metabolic optimisation rather than acute weight loss alone.',
    icon: <Zap size={20} />,
    candidate: 'Advanced protocols / metabolic optimisation / adjunct to primary fat loss compound',
  },
]

const mechanismRows = [
  { label: 'Receptors targeted', reta: 'GLP-1 + GIP + Glucagon', tirz: 'GLP-1 + GIP', sema: 'GLP-1', ipa: 'GHRH-R + GHS-R', ghk: 'Copper-binding / gene' },
  { label: 'Primary mechanism', reta: 'Appetite + insulin + thermogenesis', tirz: 'Appetite + insulin sensitization', sema: 'Appetite suppression', ipa: 'Pulsatile GH → lipolysis', ghk: 'Adipokine / gene modulation' },
  { label: 'Clinical WL data', reta: '24.2%', tirz: '21%', sema: '14.9%', ipa: 'Body recomp', ghk: 'Indirect' },
  { label: 'Study citation', reta: 'NEJM 2023', tirz: 'SURMOUNT-1', sema: 'STEP-1', ipa: 'Multiple GH trials', ghk: 'Gene expression studies' },
  { label: 'Best candidate', reta: 'Obese / metabolic', tirz: 'Overweight / metabolic', sema: 'First-time / stepwise', ipa: 'Athletic / recomp', ghk: 'Advanced adjunct' },
]

const timelineRows = [
  { week: 'Week 2', reta: '~1.5%', tirz: '~1.2%', sema: '~0.8%', ipa: 'Baseline GH elevated', ghk: 'Gene upregulation begins' },
  { week: 'Week 4', reta: '~3.5%', tirz: '~2.8%', sema: '~1.8%', ipa: 'Visible recomp shift', ghk: 'Metabolic shift underway' },
  { week: 'Week 8', reta: '~7.5%', tirz: '~6.2%', sema: '~4.2%', ipa: 'Fat loss accelerates', ghk: 'Adipokine regulation active' },
  { week: 'Week 12', reta: '~13%', tirz: '~10.5%', sema: '~7.2%', ipa: 'Lean mass preserved', ghk: 'Full support role' },
  { week: 'Week 24', reta: '~20–24%', tirz: '~17–21%', sema: '~12–15%', ipa: 'Sustained recomp', ghk: 'Sustained support' },
]

const stacks = [
  {
    title: 'Stack A — Pure Metabolic',
    subtitle: 'Maximum fat loss, single compound',
    color: GOLD,
    icon: <Flame size={22} />,
    compounds: ['Retatrutide 10mg (primary)', 'OR Tirzepatide 15mg (FDA-approved alternative)'],
    rationale:
      'For researchers targeting maximum weight reduction without added complexity. Retatrutide delivers the highest recorded fat loss through triple-receptor action including direct thermogenesis. Tirzepatide is the approved-pathway alternative with near-equivalent efficacy and the best safety data of the dual-agonist class.',
    ideal: 'BMI >30, metabolic syndrome, aggressive research protocol',
  },
  {
    title: 'Stack B — Recomposition',
    subtitle: 'Fat loss + lean mass simultaneous',
    color: '#38bdf8',
    icon: <Activity size={22} />,
    compounds: ['Semaglutide 6mg (GLP-1 fat loss)', 'Ipamorelin / CJC-1295 10mg (GH secretagogue)'],
    rationale:
      'GLP-1 drives the caloric deficit via appetite suppression and gastric emptying delay. Simultaneously, pulsatile GH elevation from Ipamorelin/CJC promotes lipolysis and lean tissue anabolism — directly counteracting the muscle loss that all GLP-1 caloric deficits produce. The recomposition gold standard.',
    ideal: 'Athletic population, lean recomp goal, muscle preservation priority',
  },
  {
    title: 'Stack C — Lean Preservation',
    subtitle: 'Preserve muscle while losing fat on aggressive GLP-1',
    color: '#a78bfa',
    icon: <Shield size={22} />,
    compounds: ['Retatrutide or Tirzepatide (aggressive GLP-1)', 'Ipamorelin / CJC-1295 10mg (GH secretagogue)'],
    rationale:
      'For researchers combining Tier 1 GLP-1 compounds with GH secretagogue therapy to specifically address the lean mass attrition risk. The larger the caloric deficit (and Retatrutide produces very large deficits), the more important GH-driven anabolism becomes. This stack maximises fat loss while minimising muscle loss.',
    ideal: 'Advanced protocols, Tier 1 GLP-1 + muscle preservation, experienced researchers',
  },
]

const faqs = [
  {
    q: 'Which peptide causes the most fat loss?',
    a: 'Retatrutide — recording 24.2% mean body weight reduction in the 2023 NEJM Phase 2 trial. This is the highest ever documented for any pharmacological compound in a controlled clinical setting. The mechanism responsible for this superiority is glucagon receptor agonism, which adds direct thermogenic activity (increased resting energy expenditure) that neither semaglutide nor tirzepatide possess.',
  },
  {
    q: 'Why is GLP-1 receptor activation different from stimulants?',
    a: 'Stimulants (amphetamines, phentermine, caffeine) reduce appetite through catecholamine release — a mechanism the body rapidly adapts to and that carries cardiovascular risks. GLP-1R activation mimics a natural postprandial satiety hormone, acting on hypothalamic appetite centres (arcuate nucleus), delaying gastric emptying, restoring leptin sensitivity, and improving insulin signalling — without catecholamine surge or receptor downregulation at therapeutic timescales.',
  },
  {
    q: 'Do GLP-1 peptides cause muscle loss?',
    a: 'Yes — all GLP-1 agonists produce lean mass loss alongside fat loss because the caloric deficit is tissue-agnostic. Data from semaglutide studies suggest ~25–40% of total weight lost may be lean mass rather than fat. This is why stacking a GH secretagogue (Ipamorelin/CJC-1295) is best practice on any GLP-1 protocol. Elevated GH directly promotes lipolysis and lean tissue preservation during energy restriction.',
  },
  {
    q: 'What is the clinical evidence hierarchy for fat loss peptides?',
    a: 'GLP-1 class compounds represent the highest level of evidence for pharmacological fat loss — superior to lifestyle interventions (~5–7% WL at best), and approaching the efficacy range of bariatric surgery (~25–30%) without surgical risk. The SURMOUNT, STEP, and SCALE trial programmes are among the largest obesity intervention RCTs ever conducted, including tens of thousands of participants across multiple years.',
  },
  {
    q: 'How does GHK-Cu fit into a fat loss stack?',
    a: 'GHK-Cu is not a primary fat loss agent. Its role is metabolic support: it modulates adipokine signalling, upregulates lipid metabolism genes, and suppresses inflammatory cytokines (TNF-α, IL-6) that are elevated in obesity and impede fat mobilisation. In an advanced stack, GHK-Cu addresses the inflammatory component of metabolic dysfunction that GLP-1 compounds do not directly target.',
  },
]

// ── PAGE ─────────────────────────────────────────────────────────────────────

export default function PeptidesForFatLossPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <main style={{ background: '#fff', color: '#1a1a2a' }}>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        style={{
          background: 'linear-gradient(135deg, #1a1000 0%, #201500 40%, #0a0a14 100%)',
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
            width: 700,
            height: 600,
            background: `radial-gradient(ellipse, ${GOLD}18 0%, transparent 70%)`,
            pointerEvents: 'none',
          }}
        />
        <div style={{ position: 'relative', maxWidth: 900, margin: '0 auto' }}>
          <div
            className="section-label"
            style={{ justifyContent: 'center', color: GOLD, marginBottom: '0.75rem' }}
          >
            <Flame size={14} /> Fat Loss Peptides — Complete Guide
          </div>
          <h1
            className="heading-xl"
            style={{ color: '#fff', marginBottom: '1.25rem', marginTop: '0.5rem' }}
          >
            Peptides for Fat Loss
            <br />
            <span style={{ color: GOLD }}>Ranked by Clinical Evidence</span>
          </h1>
          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              color: 'rgba(255,255,255,0.65)',
              maxWidth: 680,
              margin: '0 auto 1.5rem',
              lineHeight: 1.75,
            }}
          >
            GLP-1 class peptides have achieved fat loss outcomes previously only seen in bariatric surgery —
            up to <strong style={{ color: GOLD }}>24.2% body weight reduction</strong> in 48 weeks.
            This guide ranks every fat loss peptide by mechanism and clinical evidence.
          </p>

          {/* Key stats bar */}
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
              margin: '2rem auto',
              maxWidth: 720,
            }}
          >
            {[
              { val: '24.2%', label: 'Peak WL — Retatrutide (NEJM 2023)' },
              { val: '21%', label: 'Tirzepatide — SURMOUNT-1' },
              { val: '14.9%', label: 'Semaglutide — STEP-1' },
            ].map((s) => (
              <div
                key={s.val}
                style={{
                  background: `${GOLD}12`,
                  border: `1px solid ${GOLD}30`,
                  borderRadius: 14,
                  padding: '0.85rem 1.4rem',
                  textAlign: 'center',
                  flex: '1 1 160px',
                }}
              >
                <div style={{ fontSize: '1.85rem', fontWeight: 900, color: GOLD, lineHeight: 1 }}>{s.val}</div>
                <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', marginTop: '0.3rem', lineHeight: 1.4 }}>{s.label}</div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/categories/metabolic-fat-loss" className="btn-primary">
              View All Fat Loss Peptides <ArrowRight size={16} />
            </Link>
            <a
              href={AFFILIATE_BASE}
              target="_blank"
              rel="sponsored noopener noreferrer"
              className="btn-secondary"
              style={{
                color: 'rgba(255,255,255,0.7)',
                borderColor: 'rgba(255,255,255,0.15)',
                background: 'rgba(255,255,255,0.05)',
              }}
            >
              Shop Apollo Peptide Sciences <ExternalLink size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* ── EVIDENCE CONTEXT ─────────────────────────────────────────────── */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 1.5rem', background: '#f7f8fc' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div className="section-label" style={{ color: GOLD }}>
            <BarChart3 size={14} /> The Clinical Evidence Hierarchy
          </div>
          <h2 className="heading-lg" style={{ marginTop: '0.5rem', marginBottom: '1.25rem' }}>
            Why Peptides Are the Most Effective Fat Loss Tools Ever Studied
          </h2>
          <div
            style={{
              background: '#fff',
              borderRadius: 20,
              border: '1px solid rgba(0,0,0,0.07)',
              padding: '2rem 2.5rem',
              marginBottom: '2rem',
            }}
          >
            <p style={{ fontSize: '1.05rem', color: '#444460', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              Lifestyle interventions — diet and exercise — achieve roughly <strong>5–7% body weight reduction</strong> in
              controlled trials, with most participants regaining weight within two years due to compensatory hunger
              signalling. Bariatric surgery produces 25–30% WL but carries procedural risk, irreversibility, and
              significant nutritional management requirements.
            </p>
            <p style={{ fontSize: '1.05rem', color: '#444460', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              GLP-1 receptor agonist peptides now bridge this gap. Retatrutide (24.2%, NEJM 2023) and Tirzepatide
              (21%, SURMOUNT-1) achieve outcomes approaching surgery without surgical risk, operating through
              direct hypothalamic appetite regulation, gastric emptying modulation, and — uniquely in Retatrutide —
              glucagon-driven thermogenesis that increases resting metabolic expenditure.
            </p>
            <div
              style={{
                background: `${GOLD}0d`,
                border: `1px solid ${GOLD}25`,
                borderLeft: `4px solid ${GOLD}`,
                borderRadius: '0 12px 12px 0',
                padding: '1rem 1.5rem',
              }}
            >
              <p style={{ fontSize: '0.95rem', color: '#555570', lineHeight: 1.7, margin: 0 }}>
                <strong style={{ color: GOLD }}>Evidence tier:</strong> The SURMOUNT, STEP, and SCALE RCT programmes
                collectively enrolled over 30,000 participants — among the largest obesity intervention trials in
                history. GLP-1 class compounds represent the highest level of clinical evidence for pharmacological
                fat loss ever assembled.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAT LOSS TIERS ───────────────────────────────────────────────── */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 1.5rem', background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-label" style={{ justifyContent: 'center', color: GOLD }}>
              <Target size={14} /> Complete Compound Rankings
            </div>
            <h2 className="heading-lg" style={{ marginTop: '0.5rem' }}>
              Fat Loss Peptide Tiers
            </h2>
            <p style={{ color: '#555570', maxWidth: 560, margin: '0.75rem auto 0', fontSize: '1.05rem' }}>
              Every fat loss peptide ranked by mechanism, clinical weight loss data, and ideal candidate profile.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {tiers.map((t) => (
              <div
                key={t.name}
                style={{
                  background: '#fff',
                  border: `1px solid ${t.color}25`,
                  borderLeft: `5px solid ${t.color}`,
                  borderRadius: '0 20px 20px 0',
                  padding: '2rem 2.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
              >
                {/* Header row */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '0.75rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                    <span
                      style={{
                        fontSize: '0.7rem',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        letterSpacing: '0.12em',
                        color: t.color,
                        background: `${t.color}15`,
                        border: `1px solid ${t.color}35`,
                        borderRadius: 100,
                        padding: '0.25rem 0.8rem',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {t.tier}
                    </span>
                    <span
                      style={{
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        color: '#9090a8',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {t.label}
                    </span>
                  </div>
                  <span
                    style={{
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      color: t.status === 'FDA Approved' ? '#34d399' : t.color,
                    }}
                  >
                    {t.status}
                  </span>
                </div>

                {/* Name + mechanism */}
                <div>
                  <h3
                    style={{
                      fontSize: 'clamp(1.3rem, 3vw, 1.65rem)',
                      fontWeight: 800,
                      color: '#0a0a14',
                      letterSpacing: '-0.02em',
                      marginBottom: '0.2rem',
                    }}
                  >
                    {t.name}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: t.color, fontWeight: 600 }}>
                    {t.mechanism}
                  </p>
                </div>

                {/* Weight loss badge */}
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'baseline',
                    gap: '0.5rem',
                    background: `${t.color}10`,
                    border: `1px solid ${t.color}25`,
                    borderRadius: 12,
                    padding: '0.65rem 1.1rem',
                    alignSelf: 'flex-start',
                  }}
                >
                  <span style={{ fontSize: '2rem', fontWeight: 900, color: t.color, lineHeight: 1 }}>
                    {t.weightLoss}
                  </span>
                  <span style={{ fontSize: '0.78rem', color: '#9090a8', fontWeight: 600 }}>
                    {t.trial}
                  </span>
                </div>

                {/* Description */}
                <p style={{ fontSize: '0.97rem', color: '#555570', lineHeight: 1.7 }}>
                  {t.description}
                </p>

                {/* Candidate */}
                <div
                  style={{
                    fontSize: '0.85rem',
                    color: '#9090a8',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                  }}
                >
                  <Target size={13} style={{ color: t.color }} />
                  Best candidate: {t.candidate}
                </div>

                {/* CTA */}
                {t.slug && (
                  <div>
                    <a
                      href={AFFILIATE_PRODUCT(t.slug)}
                      target="_blank"
                      rel="sponsored noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        background: t.color,
                        color: t.tier === 'Tier 1' && t.label === 'Triple Agonist' ? '#1a1000' : '#fff',
                        fontWeight: 700,
                        fontSize: '0.9rem',
                        padding: '0.65rem 1.4rem',
                        borderRadius: 10,
                        textDecoration: 'none',
                        transition: 'opacity 0.2s',
                      }}
                    >
                      Buy {t.name} <ExternalLink size={14} />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MECHANISM TABLE ──────────────────────────────────────────────── */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 1.5rem', background: '#f7f8fc' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ marginBottom: '2.5rem' }}>
            <div className="section-label" style={{ color: GOLD }}>
              <BarChart3 size={14} /> Side-by-Side Breakdown
            </div>
            <h2 className="heading-lg" style={{ marginTop: '0.5rem' }}>
              Mechanism Comparison Table
            </h2>
          </div>
          <div style={{ overflowX: 'auto', borderRadius: 16, border: '1px solid rgba(0,0,0,0.07)' }}>
            <table className="data-table" style={{ minWidth: 780 }}>
              <thead>
                <tr style={{ background: '#f0f0f8' }}>
                  <th style={{ width: '20%' }}></th>
                  <th style={{ color: GOLD }}>Retatrutide</th>
                  <th style={{ color: '#a78bfa' }}>Tirzepatide</th>
                  <th style={{ color: '#34d399' }}>Semaglutide</th>
                  <th style={{ color: '#38bdf8' }}>Ipa / CJC</th>
                  <th style={{ color: '#f97316' }}>GHK-Cu</th>
                </tr>
              </thead>
              <tbody>
                {mechanismRows.map((row, i) => (
                  <tr key={i}>
                    <td style={{ fontWeight: 600, color: '#444460', fontSize: '0.88rem' }}>{row.label}</td>
                    <td style={{ fontWeight: i === 2 ? 700 : 400, color: i === 2 ? GOLD : '#3a3a5a' }}>{row.reta}</td>
                    <td style={{ color: '#3a3a5a' }}>{row.tirz}</td>
                    <td style={{ color: '#3a3a5a' }}>{row.sema}</td>
                    <td style={{ color: '#3a3a5a' }}>{row.ipa}</td>
                    <td style={{ color: '#3a3a5a' }}>{row.ghk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── GLP-1 RECEPTOR DEEP DIVE ─────────────────────────────────────── */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 1.5rem', background: '#fff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div className="section-label" style={{ color: GOLD }}>
            <Zap size={14} /> Mechanistic Deep Dive
          </div>
          <h2 className="heading-lg" style={{ marginTop: '0.5rem', marginBottom: '1.5rem' }}>
            Why GLP-1 Receptor Activation Is Different
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {[
              {
                title: 'Hypothalamic Appetite Signalling',
                body: 'GLP-1 receptors are densely expressed in the arcuate nucleus and paraventricular nucleus of the hypothalamus — the primary appetite regulation centres of the brain. Activation suppresses NPY/AgRP (hunger) neurons and stimulates POMC/CART (satiety) neurons, producing a sustained reduction in caloric intake that does not habituate at therapeutic timescales. This is fundamentally distinct from stimulant-based appetite suppression, which acts via catecholamine release and rapidly desensitises.',
                color: GOLD,
              },
              {
                title: 'Gastric Emptying Delay',
                body: 'GLP-1R activation slows gastric emptying, extending the duration of post-meal satiety signalling and blunting postprandial glucose spikes. This mechanical component of the effect means caloric reduction is reinforced at the gut level — nutrients remain in the stomach longer, peripheral satiety hormones (PYY, CCK) remain elevated longer, and the incentive to eat again is structurally delayed.',
                color: GOLD,
              },
              {
                title: 'Insulin Sensitisation',
                body: 'GLP-1R activation enhances glucose-dependent insulin secretion from pancreatic β-cells and improves peripheral insulin sensitivity. In GIP co-agonist compounds (Tirzepatide, Retatrutide), GIP receptor activation adds an additional insulin sensitisation pathway through adipose tissue, improving energy partitioning toward lean mass and away from fat storage.',
                color: GOLD,
              },
              {
                title: 'Leptin Sensitivity Restoration',
                body: 'Obesity is characterised by leptin resistance — the hypothalamus stops responding normally to leptin\'s satiety signal despite high circulating levels. GLP-1R agonists partially restore hypothalamic sensitivity to leptin, addressing a root-cause driver of hyperphagia in obese phenotypes. This is one reason GLP-1 compounds produce results that lifestyle interventions cannot — they address neurological signalling dysfunction, not just caloric intake behaviour.',
                color: GOLD,
              },
              {
                title: 'Glucagon Thermogenesis (Retatrutide only)',
                body: 'Retatrutide\'s third receptor — glucagon — introduces direct thermogenic activity. Glucagon receptor activation in the liver increases glycogenolysis and fatty acid oxidation, and in adipose tissue upregulates uncoupling protein expression, raising resting metabolic rate. No other approved or near-approved compound combines appetite suppression + insulin sensitisation + thermogenesis in a single agent. This is the mechanism responsible for Retatrutide\'s record 24.2% weight loss.',
                color: GOLD,
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  background: '#f7f8fc',
                  borderRadius: 16,
                  padding: '1.5rem 1.75rem',
                  borderLeft: `4px solid ${item.color}`,
                }}
              >
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0a0a14', marginBottom: '0.65rem' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#555570', lineHeight: 1.75, margin: 0 }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STACKING ─────────────────────────────────────────────────────── */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 1.5rem', background: '#f7f8fc' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-label" style={{ justifyContent: 'center', color: GOLD }}>
              <Flame size={14} /> Stack Protocols
            </div>
            <h2 className="heading-lg" style={{ marginTop: '0.5rem' }}>
              Stacking for Fat Loss
            </h2>
            <p style={{ color: '#555570', maxWidth: 560, margin: '0.75rem auto 0', fontSize: '1.05rem' }}>
              Three evidence-based stack configurations depending on your research objective.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {stacks.map((stack, i) => (
              <div
                key={i}
                style={{
                  background: '#fff',
                  border: `1px solid ${stack.color}25`,
                  borderTop: `4px solid ${stack.color}`,
                  borderRadius: '0 0 20px 20px',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: stack.color }}>
                  {stack.icon}
                  <div>
                    <div style={{ fontWeight: 800, fontSize: '1.05rem', color: '#0a0a14' }}>
                      {stack.title}
                    </div>
                    <div style={{ fontSize: '0.82rem', color: stack.color, fontWeight: 600 }}>
                      {stack.subtitle}
                    </div>
                  </div>
                </div>

                <div>
                  {stack.compounds.map((c, j) => (
                    <div
                      key={j}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.4rem 0',
                        borderBottom: j < stack.compounds.length - 1 ? '1px solid rgba(0,0,0,0.05)' : 'none',
                      }}
                    >
                      <div
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: '50%',
                          background: stack.color,
                          flexShrink: 0,
                        }}
                      />
                      <span style={{ fontSize: '0.9rem', color: '#3a3a5a', fontWeight: 500 }}>{c}</span>
                    </div>
                  ))}
                </div>

                <p style={{ fontSize: '0.92rem', color: '#555570', lineHeight: 1.7 }}>
                  {stack.rationale}
                </p>

                <div
                  style={{
                    fontSize: '0.8rem',
                    color: '#9090a8',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.4rem',
                  }}
                >
                  <Target size={12} style={{ color: stack.color, flexShrink: 0, marginTop: 2 }} />
                  {stack.ideal}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE TABLE ───────────────────────────────────────────────── */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 1.5rem', background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ marginBottom: '2.5rem' }}>
            <div className="section-label" style={{ color: GOLD }}>
              <TrendingUp size={14} /> Expected Results
            </div>
            <h2 className="heading-lg" style={{ marginTop: '0.5rem' }}>
              Timeline of Results by Compound
            </h2>
            <p style={{ color: '#555570', fontSize: '1rem', maxWidth: 600, marginTop: '0.5rem' }}>
              Approximate weight loss percentages based on published clinical trial data and pharmacokinetic modelling.
              Individual results will vary. For research reference only.
            </p>
          </div>
          <div style={{ overflowX: 'auto', borderRadius: 16, border: '1px solid rgba(0,0,0,0.07)' }}>
            <table className="data-table" style={{ minWidth: 740 }}>
              <thead>
                <tr style={{ background: '#f0f0f8' }}>
                  <th>Timepoint</th>
                  <th style={{ color: GOLD }}>Retatrutide</th>
                  <th style={{ color: '#a78bfa' }}>Tirzepatide</th>
                  <th style={{ color: '#34d399' }}>Semaglutide</th>
                  <th style={{ color: '#38bdf8' }}>Ipa / CJC</th>
                  <th style={{ color: '#f97316' }}>GHK-Cu</th>
                </tr>
              </thead>
              <tbody>
                {timelineRows.map((row, i) => (
                  <tr key={i}>
                    <td style={{ fontWeight: 700, color: '#444460' }}>{row.week}</td>
                    <td style={{ fontWeight: 700, color: GOLD }}>{row.reta}</td>
                    <td style={{ color: '#3a3a5a' }}>{row.tirz}</td>
                    <td style={{ color: '#3a3a5a' }}>{row.sema}</td>
                    <td style={{ color: '#3a3a5a' }}>{row.ipa}</td>
                    <td style={{ color: '#3a3a5a' }}>{row.ghk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── DECISION TREE ────────────────────────────────────────────────── */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 1.5rem', background: '#f7f8fc' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-label" style={{ justifyContent: 'center', color: GOLD }}>
              <Target size={14} /> Which Compound Is Right For You?
            </div>
            <h2 className="heading-lg" style={{ marginTop: '0.5rem' }}>
              Choosing the Right Compound
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              {
                condition: 'BMI >30 with metabolic syndrome / T2D markers',
                recommendation: 'Retatrutide',
                reason:
                  'Triple-agonist mechanism addresses all three pillars of metabolic dysfunction: appetite dysregulation, insulin resistance, and elevated resting energy expenditure. Highest fat loss ceiling of any research compound.',
                color: GOLD,
                href: AFFILIATE_PRODUCT('retatrutide-10mg'),
              },
              {
                condition: 'Significant overweight, FDA-approved protocol',
                recommendation: 'Tirzepatide',
                reason:
                  'Maximum approved efficacy with the strongest safety evidence of the dual-agonist class. The rational choice when FDA approval and efficacy are both priorities.',
                color: '#a78bfa',
                href: AFFILIATE_PRODUCT('tirzepatide-15mg'),
              },
              {
                condition: 'First time using a metabolic peptide',
                recommendation: 'Semaglutide',
                reason:
                  'The most extensively characterised GLP-1 compound in existence. Lowest-risk on-ramp to GLP-1 therapy with the deepest body of long-term safety and efficacy data.',
                color: '#34d399',
                href: AFFILIATE_PRODUCT('semaglutide-6mg'),
              },
              {
                condition: 'Athletic / lean recomp — not primarily obese',
                recommendation: 'Semaglutide + Ipamorelin/CJC-1295',
                reason:
                  'Semaglutide drives the fat loss via caloric restriction; Ipamorelin/CJC-1295 elevates GH to preserve and build lean mass during the deficit. The recomposition gold standard.',
                color: '#38bdf8',
                href: AFFILIATE_PRODUCT('ipamorelin-cjc-1295-blend-10mg'),
              },
              {
                condition: 'Advanced protocol — maximum fat loss + muscle preservation',
                recommendation: 'Retatrutide or Tirzepatide + Ipamorelin/CJC-1295',
                reason:
                  'Combines the highest-efficacy GLP-1 compound with GH secretagogue therapy to specifically counter lean mass attrition from aggressive caloric restriction. The most complete fat loss stack.',
                color: GOLD,
                href: AFFILIATE_PRODUCT('retatrutide-10mg'),
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  background: '#fff',
                  border: `1px solid ${item.color}20`,
                  borderLeft: `4px solid ${item.color}`,
                  borderRadius: '0 16px 16px 0',
                  padding: '1.5rem 2rem',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '1.25rem',
                  alignItems: 'flex-start',
                }}
              >
                <div style={{ flex: '1 1 260px' }}>
                  <div
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      color: '#9090a8',
                      marginBottom: '0.3rem',
                    }}
                  >
                    If:
                  </div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: '#0a0a14' }}>{item.condition}</div>
                </div>
                <div style={{ flex: '2 1 340px' }}>
                  <div style={{ fontSize: '1.05rem', fontWeight: 800, color: item.color, marginBottom: '0.4rem' }}>
                    → {item.recommendation}
                  </div>
                  <p style={{ fontSize: '0.9rem', color: '#555570', lineHeight: 1.65, margin: 0 }}>
                    {item.reason}
                  </p>
                </div>
                <div style={{ flexShrink: 0, alignSelf: 'center' }}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="sponsored noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      background: `${item.color}18`,
                      border: `1px solid ${item.color}40`,
                      color: item.color,
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      padding: '0.55rem 1.1rem',
                      borderRadius: 10,
                      textDecoration: 'none',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    Shop <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section
        style={{
          padding: 'clamp(3rem, 6vw, 5rem) 1.5rem',
          background: 'linear-gradient(135deg, #1a1000 0%, #201500 50%, #0a0a14 100%)',
        }}
      >
        <div style={{ maxWidth: 1050, margin: '0 auto', textAlign: 'center' }}>
          <div className="section-label" style={{ justifyContent: 'center', color: GOLD }}>
            <FlaskConical size={14} /> Apollo Peptide Sciences — Trusted, Verified
          </div>
          <h2
            className="heading-lg"
            style={{ color: '#fff', marginTop: '0.5rem', marginBottom: '1rem' }}
          >
            Shop Fat Loss Peptides
          </h2>
          <p
            style={{
              fontSize: '1.05rem',
              color: 'rgba(255,255,255,0.6)',
              maxWidth: 560,
              margin: '0 auto 3rem',
              lineHeight: 1.7,
            }}
          >
            All compounds available through Apollo Peptide Sciences — independently tested, certificate of analysis
            available, and shipped discreetly. For research purposes only.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.25rem',
              maxWidth: 900,
              margin: '0 auto 2.5rem',
            }}
          >
            {[
              {
                name: 'Retatrutide 10mg',
                sub: 'Triple Agonist — 24.2% WL (NEJM 2023)',
                color: GOLD,
                slug: 'retatrutide-10mg',
              },
              {
                name: 'Tirzepatide 15mg',
                sub: 'Dual Agonist — 21% WL (SURMOUNT-1)',
                color: '#a78bfa',
                slug: 'tirzepatide-15mg',
              },
              {
                name: 'Semaglutide 6mg',
                sub: 'Mono Agonist — 14.9% WL (STEP-1)',
                color: '#34d399',
                slug: 'semaglutide-6mg',
              },
            ].map((p) => (
              <a
                key={p.slug}
                href={AFFILIATE_PRODUCT(p.slug)}
                target="_blank"
                rel="sponsored noopener noreferrer"
                style={{
                  background: `${p.color}12`,
                  border: `1px solid ${p.color}35`,
                  borderRadius: 18,
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.6rem',
                  textDecoration: 'none',
                  transition: 'border-color 0.2s, box-shadow 0.2s',
                }}
              >
                <div style={{ fontSize: '1.2rem', fontWeight: 800, color: p.color }}>{p.name}</div>
                <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.55)', textAlign: 'center' }}>{p.sub}</div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    color: p.color,
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    marginTop: '0.5rem',
                  }}
                >
                  Buy Now <ExternalLink size={13} />
                </div>
              </a>
            ))}
          </div>

          <a
            href={AFFILIATE_BASE}
            target="_blank"
            rel="sponsored noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: GOLD,
              color: '#1a1000',
              fontWeight: 800,
              fontSize: '1rem',
              padding: '0.9rem 2.2rem',
              borderRadius: 12,
              textDecoration: 'none',
            }}
          >
            View All Research Peptides <ExternalLink size={16} />
          </a>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 1.5rem', background: '#f7f8fc' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <div style={{ marginBottom: '2.5rem' }}>
            <div className="section-label" style={{ color: GOLD }}>Frequently Asked Questions</div>
            <h2 className="heading-lg" style={{ marginTop: '0.5rem' }}>
              Fat Loss Peptides — Common Questions
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{
                  background: '#fff',
                  border: `1px solid ${openFaq === i ? GOLD + '40' : 'rgba(0,0,0,0.08)'}`,
                  borderRadius: 16,
                  overflow: 'hidden',
                  transition: 'border-color 0.2s',
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    padding: '1.25rem 1.5rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '1rem',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: '#0a0a14',
                  }}
                >
                  <span>{faq.q}</span>
                  <span style={{ color: GOLD, flexShrink: 0 }}>
                    {openFaq === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </span>
                </button>
                {openFaq === i && (
                  <div
                    style={{
                      padding: '0 1.5rem 1.5rem',
                      fontSize: '0.95rem',
                      color: '#555570',
                      lineHeight: 1.75,
                    }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DISCLAIMER ───────────────────────────────────────────────────── */}
      <section style={{ padding: '2rem 1.5rem', background: '#fff', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <p
            style={{
              fontSize: '0.8rem',
              color: '#9090a8',
              lineHeight: 1.7,
              textAlign: 'center',
            }}
          >
            <strong>Research Use Only.</strong> All peptides referenced on this page are for in vitro research
            purposes only. They are not intended for human consumption, medical diagnosis, or treatment of any
            condition. Clinical weight loss data cited is drawn from published peer-reviewed trials and is provided
            for informational purposes. StacksPeptide.com is an independent affiliate site and is not affiliated
            with any trial sponsor, regulatory body, or pharmaceutical manufacturer. Always consult a qualified
            healthcare professional before beginning any health protocol.
          </p>
        </div>
      </section>

      <RelatedLinks currentPath="/peptides-for-fat-loss" />
    </main>
  )
}
