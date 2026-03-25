'use client'
import Link from 'next/link'
import { ArrowRight, ExternalLink, Sparkles, Zap, Activity, FlaskConical, AlertCircle, CheckCircle, Star, TrendingUp } from 'lucide-react'
import { AFFILIATE_BASE, AFFILIATE_PRODUCT } from '@/lib/products'
import RelatedLinks from '@/components/RelatedLinks'

const tiers = [
  {
    tier: 'Beginner',
    label: 'Phase 1 Only',
    color: '#a78bfa',
    bg: 'rgba(167,139,250,0.07)',
    border: 'rgba(167,139,250,0.25)',
    icon: <Sparkles size={18} />,
    compounds: ['GHK-Cu (topical)', 'SNAP-8 (topical)'],
    description: 'No injectable peptides. No GH axis compounds. Topical-only protocol for skin collagen and expression line reduction. Ideal for anyone new to peptide research or under 25.',
    risk: 'Very Low',
    expectedChanges: 'Improved skin texture, collagen density, softer expression lines at 8–12 weeks',
  },
  {
    tier: 'Intermediate',
    label: 'Phase 1 + 2',
    color: '#34d399',
    bg: 'rgba(52,211,153,0.07)',
    border: 'rgba(52,211,153,0.25)',
    icon: <TrendingUp size={18} />,
    compounds: ['GHK-Cu (topical or injectable)', 'SNAP-8 (topical)', 'CJC-1295 (no DAC) + Ipamorelin'],
    description: 'Adds sleep-timed GH secretagogue stack to the skin foundation. GH axis optimization drives lean tissue preservation, reduced facial bloat, and indirect bone density support. Suitable after completing one skin-only cycle.',
    risk: 'Low–Moderate',
    expectedChanges: 'All beginner changes plus: leaner facial contour, improved lean tissue, jaw/cheekbone definition through fat reduction',
  },
  {
    tier: 'Advanced',
    label: 'Full Stack',
    color: '#d4a843',
    bg: 'rgba(212,168,67,0.07)',
    border: 'rgba(212,168,67,0.3)',
    icon: <Star size={18} />,
    compounds: ['GHK-Cu', 'SNAP-8', 'CJC-1295 (no DAC) + Ipamorelin', 'IGF-1 LR3 (add one compound at a time)', 'Retatrutide (if fat loss is goal)'],
    description: 'Adds IGF-1 LR3 for direct satellite cell activation (masseter/muscle density) and optionally Retatrutide for submental fat clearance. For experienced researchers only — requires prior bloodwork and cycle history.',
    risk: 'Moderate',
    expectedChanges: 'All intermediate changes plus: measurable muscle density improvements, significant fat reduction, structural jaw/facial definition changes',
  },
]

const phases = [
  {
    phase: 'Phase 1',
    weeks: 'Weeks 1–4',
    title: 'Skin Foundation',
    color: '#a78bfa',
    gradient: 'linear-gradient(135deg, rgba(167,139,250,0.1) 0%, rgba(167,139,250,0.03) 100%)',
    border: 'rgba(167,139,250,0.25)',
    goal: 'Establish collagen synthesis and SNARE inhibition baseline before introducing injectable compounds.',
    compounds: [
      {
        name: 'GHK-Cu',
        slug: 'ghk-cu',
        dose: 'Topical: apply twice daily to face/neck. Injectable: 500mcg–1mg subQ, 3–5×/week',
        timing: 'Morning + evening topical, or morning injectable',
        mechanism: 'Initiates collagen I/III gene upregulation, SOD antioxidant activation, TIMP-1/2 elevation to reduce collagen breakdown',
      },
      {
        name: 'SNAP-8',
        slug: 'snap-8',
        dose: 'Topical: apply twice daily to expression line target areas (forehead, crow\'s feet, glabellar)',
        timing: 'Morning + evening — apply 10–15 min after GHK-Cu absorption',
        mechanism: 'Competitive SNAP-25 inhibition reduces acetylcholine vesicle fusion at neuromuscular junction — reduces muscular micro-tension that creates expression lines',
      },
    ],
    expect: 'By week 4: improved skin hydration and texture, early SNAP-8 expression line softening, GHK-Cu collagen cycle established. No dramatic visible changes yet — biological foundations are being laid.',
  },
  {
    phase: 'Phase 2',
    weeks: 'Weeks 5–12',
    title: 'GH Axis Activation',
    color: '#34d399',
    gradient: 'linear-gradient(135deg, rgba(52,211,153,0.1) 0%, rgba(52,211,153,0.03) 100%)',
    border: 'rgba(52,211,153,0.25)',
    goal: 'Sleep-timed GH pulse amplification for lean tissue optimization, bone density support, and systemic anti-aging effects.',
    compounds: [
      {
        name: 'CJC-1295 (no DAC) + Ipamorelin',
        slug: 'cjc1295-ipamorelin',
        dose: 'CJC-1295: 100mcg + Ipamorelin: 100–200mcg, combined in same injection',
        timing: '30–60 minutes before sleep, 5 days on / 2 days off (no weekends)',
        mechanism: 'CJC-1295 (GHRH analog) extends GH pulse duration. Ipamorelin (GHRP, GHS-R1a agonist) amplifies GH pulse amplitude. Combined: 4–8× native GH pulse during deep sleep. Downstream IGF-1 elevation drives lean tissue, bone modeling, lipolysis.',
      },
      {
        name: 'GHK-Cu (continue)',
        slug: 'ghk-cu',
        dose: 'Continue same protocol from Phase 1',
        timing: 'Same as Phase 1 — morning + evening topical or injectable',
        mechanism: 'Ongoing collagen remodeling, skin thickening, and antioxidant defense. GH axis activation from Phase 2 compounds synergistically amplifies skin repair during sleep.',
      },
      {
        name: 'SNAP-8 (continue)',
        slug: 'snap-8',
        dose: 'Continue same protocol from Phase 1',
        timing: 'Same as Phase 1 — twice daily to expression areas',
        mechanism: 'Continued SNARE inhibition. By weeks 6–8, established inhibition cycle produces visible softening of dynamic expression lines.',
      },
    ],
    expect: 'By week 8: clearly visible expression line softening (SNAP-8), collagen-driven skin firmness (GHK-Cu), early lean tissue improvements and facial fat reduction from GH axis activation. By week 12: peak Phase 2 results — sharper facial contour, measurably improved skin texture, reduced facial puffiness.',
  },
  {
    phase: 'Phase 3',
    weeks: 'Weeks 9–16 (Advanced, Optional)',
    title: 'Advanced Layer',
    color: '#d4a843',
    gradient: 'linear-gradient(135deg, rgba(212,168,67,0.1) 0%, rgba(212,168,67,0.03) 100%)',
    border: 'rgba(212,168,67,0.3)',
    goal: 'Direct satellite cell activation for muscle density, or accelerated fat reduction for structural definition. Add ONE compound at a time.',
    compounds: [
      {
        name: 'IGF-1 LR3 (intermediate/advanced only)',
        slug: 'igf-1lr3',
        dose: '20–40mcg subQ, post-workout, 5 days on / 2 off',
        timing: 'Post-workout (within 30 min) for optimal satellite cell signaling in worked muscle groups',
        mechanism: 'Long-Arg3 modification extends IGF-1 half-life to 20–30 hours. Activates IGF-1R on skeletal muscle satellite cells — drives myofiber hyperplasia (new fiber formation) beyond what GH secretagogues achieve alone. 3× potency of native IGF-1.',
      },
      {
        name: 'Retatrutide (GLP-3R, if fat loss is goal)',
        slug: 'glp-3r-10mg',
        dose: 'Begin at 0.5mg/week SQ, titrate per clinical protocol',
        timing: 'Once weekly subcutaneous injection — consistent day/time each week',
        mechanism: 'Triple GIP/GLP-1/glucagon agonism. GLP-1: appetite suppression, gastric emptying delay. GIP: fat metabolism, insulin sensitivity. Glucagon: hepatic fat oxidation, thermogenesis. Phase 2 trial: 24.2% avg body weight reduction at 48 weeks.',
      },
    ],
    expect: 'IGF-1 LR3 (4–6 week mini-cycle): measurable muscle density improvements in worked muscle groups, including masseter hypertrophy with jaw loading. Retatrutide: significant fat loss including submental deposits by weeks 8–12 of dosing. Dramatic improvement in jaw definition from fat clearance.',
  },
]

const dosingTable = [
  { compound: 'GHK-Cu', admin: 'Topical / SubQ', dose: 'Topical 2×/day or 500mcg–1mg subQ', timing: 'Morning + evening', phase: '1–3', cycle: '12 wk on / 4 wk off', color: '#a78bfa' },
  { compound: 'SNAP-8', admin: 'Topical', dose: 'Apply to expression areas 2×/day', timing: 'Morning + evening (after GHK-Cu)', phase: '1–3', cycle: 'Ongoing', color: '#a78bfa' },
  { compound: 'CJC-1295 (no DAC)', admin: 'SubQ injection', dose: '100mcg', timing: 'Pre-sleep, 5 on / 2 off', phase: '2–3', cycle: '12 wk on / 4 wk off', color: '#34d399' },
  { compound: 'Ipamorelin', admin: 'SubQ injection', dose: '100–200mcg (with CJC-1295)', timing: 'Pre-sleep, same injection', phase: '2–3', cycle: '12 wk on / 4 wk off', color: '#34d399' },
  { compound: 'IGF-1 LR3', admin: 'SubQ injection', dose: '20–40mcg', timing: 'Post-workout', phase: '3 only', cycle: '4–6 wk on / 4–6 wk off', color: '#d4a843' },
  { compound: 'Retatrutide', admin: 'SubQ injection', dose: 'Start 0.5mg/wk, titrate', timing: 'Once weekly', phase: '3 only', cycle: 'Clinical GLP protocol', color: '#fb923c' },
]

const resultsTimeline = [
  { week: 'Week 2–4', changes: ['Improved skin hydration and surface texture', 'Subtle expression line softening beginning', 'GHK-Cu antioxidant cascade established'], active: ['GHK-Cu', 'SNAP-8'] },
  { week: 'Week 5–6', changes: ['CJC-1295/Ipamorelin added — GH pulse amplification begins nightly', 'GHK-Cu collagen synthesis measurably increasing', 'Skin tone and pore refinement visible'], active: ['GHK-Cu', 'SNAP-8', 'CJC-1295/Ipamorelin'] },
  { week: 'Week 8', changes: ['Clear expression line softening (SNAP-8 peak early effect)', 'Facial fat beginning to reduce (GH axis)', 'Skin firmness and elasticity markedly improved', 'Reduced facial puffiness, sharper contour'], active: ['GHK-Cu', 'SNAP-8', 'CJC-1295/Ipamorelin'] },
  { week: 'Week 10–12', changes: ['Peak Phase 2 results — collagen density at highest point', 'Lean facial contour clearly visible', 'Expression lines significantly softened at rest and in motion', 'Jawline and cheekbone definition improved through fat reduction'], active: ['All Phase 2 compounds'] },
  { week: 'Week 12+ (Advanced)', changes: ['IGF-1 LR3 satellite cell activation — masseter density improving', 'Retatrutide submental fat clearance — jaw border sharpening', 'Full structural + skin + fat optimization in effect'], active: ['All Phase 3 compounds'] },
]

const donts = [
  { rule: 'Do not start all compounds simultaneously', reason: 'You cannot isolate what is working or what is causing any adverse response. Phase introduction is critical for clean data and safety.' },
  { rule: 'Do not use IGF-1 LR3 without prior cycle history', reason: 'IGF-1 LR3 is potent and not appropriate for beginners. Complete at least one full CJC-1295/Ipamorelin cycle first. Baseline bloodwork (IGF-1 serum levels) strongly recommended.' },
  { rule: 'Do not stack multiple GLP-1 agonists', reason: 'Combining semaglutide + tirzepatide + retatrutide creates redundant receptor agonism with amplified side effects and no additional benefit. Choose one.' },
  { rule: 'Do not skip the off-period', reason: 'GH axis compounds require a minimum 4-week off-period to allow receptor sensitivity to normalize. Running longer without a break diminishes returns and risks desensitization.' },
  { rule: 'Do not apply SNAP-8 and GHK-Cu simultaneously', reason: 'Apply GHK-Cu first, allow 10–15 minutes for absorption, then apply SNAP-8. Layer sequencing matters for topical penetration depth.' },
]

export default function LooksmaxxingProtocolPage() {
  return (
    <div style={{ background: '#ffffff', minHeight: '100vh' }}>

      {/* Hero */}
      <div style={{
        background: 'linear-gradient(160deg, #0a0a14 0%, #141414 60%, #0a0a14 100%)',
        padding: '6rem 2rem 5rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: '-80px', right: '-80px',
          width: 520, height: 520,
          background: 'radial-gradient(circle, rgba(212,168,67,0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '-40px', left: '35%',
          width: 360, height: 360,
          background: 'radial-gradient(circle, rgba(167,139,250,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
          <div style={{ maxWidth: 840 }}>
            <div className="section-label" style={{ color: '#d4a843' }}>
              Looksmaxxing Protocol
            </div>
            <h1 className="heading-xl" style={{ color: '#ffffff', marginBottom: '1.5rem' }}>
              The 12-Week<br />
              <span className="gold-text">Looksmaxxing Peptide Stack</span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: '2rem', maxWidth: 720 }}>
              A phased, mechanistically-sound protocol for aesthetic optimization. Three tiers of intensity — from beginner topical-only to advanced full stack — each with clear entry criteria, dosing tables, and expected results by week.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: '2rem' }}>
              <Link href="/looksmaxxing-peptides-guide" className="btn-primary">
                Full Looksmaxxing Guide <ArrowRight size={14} />
              </Link>
              <a
                href={AFFILIATE_BASE}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="btn-secondary"
                style={{ color: '#e0e0f0', borderColor: 'rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.05)' }}
              >
                Shop All Compounds <ExternalLink size={14} />
              </a>
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
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            borderTop: '2px solid rgba(212,168,67,0.4)',
          }}>
            {[
              { stat: '3', label: 'Protocol phases', sub: 'skin → GH axis → advanced' },
              { stat: '12 wk', label: 'Standard full cycle length', sub: '+ 4-week off period' },
              { stat: '5', label: 'Compounds in full stack', sub: 'from topical to injectable' },
              { stat: '4–8×', label: 'GH pulse amplification', sub: 'from CJC-1295 + Ipamorelin' },
              { stat: 'Week 8', label: 'Visible results onset', sub: 'for intermediate stack' },
            ].map((item, i) => (
              <div key={i} style={{
                padding: '1.4rem 1.25rem',
                borderRight: i < 4 ? '1px solid rgba(255,255,255,0.06)' : 'none',
              }}>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#d4a843', lineHeight: 1 }}>
                  {item.stat}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', marginTop: 5, lineHeight: 1.5 }}>
                  {item.label}
                </div>
                <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.28)', marginTop: 2 }}>
                  {item.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>

        {/* Tier Selection */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
          <div className="section-label">Choose Your Level</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '0.75rem' }}>
            Three Protocol Tiers
          </h2>
          <p style={{ color: '#555570', fontSize: '1.05rem', marginBottom: '3rem', maxWidth: 720 }}>
            Select the tier that matches your experience level and goals. Do not jump to Advanced without completing prior cycles — the phased structure exists for a reason.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            {tiers.map((tier, i) => (
              <div key={i} style={{
                background: tier.bg,
                border: `1px solid ${tier.border}`,
                borderTop: `4px solid ${tier.color}`,
                borderRadius: 20,
                padding: '2rem',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1rem' }}>
                  <div style={{ color: tier.color }}>{tier.icon}</div>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: '1.05rem', color: '#0a0a14' }}>{tier.tier}</div>
                    <div style={{ fontSize: '0.78rem', color: tier.color, fontWeight: 600 }}>{tier.label}</div>
                  </div>
                </div>
                <p style={{ color: '#555570', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                  {tier.description}
                </p>
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#888898', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>Compounds</div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 5 }}>
                    {tier.compounds.map((c, j) => (
                      <li key={j} style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: '0.88rem', color: '#333348', fontWeight: 600 }}>
                        <div style={{ width: 5, height: 5, borderRadius: '50%', background: tier.color, flexShrink: 0 }} />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: `1px solid ${tier.border}` }}>
                  <div>
                    <div style={{ fontSize: '0.7rem', color: '#888898', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Risk Level</div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 700, color: tier.color }}>{tier.risk}</div>
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#888898', maxWidth: 160, textAlign: 'right', lineHeight: 1.5 }}>
                    {tier.expectedChanges.split(',')[0]}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Phase-by-Phase Breakdown */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
          <div className="section-label">Phase Breakdown</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '0.75rem' }}>
            Week-by-Week Protocol
          </h2>
          <p style={{ color: '#555570', fontSize: '1.05rem', marginBottom: '3rem', maxWidth: 720 }}>
            Each phase builds on the previous. Never introduce Phase 3 compounds before completing Phase 2. The sequenced approach allows you to isolate variables and understand what each compound contributes.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            {phases.map((phase, i) => (
              <div key={i} style={{
                background: phase.gradient,
                border: `1px solid ${phase.border}`,
                borderLeft: `5px solid ${phase.color}`,
                borderRadius: 22,
                padding: '2.5rem',
              }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 12, marginBottom: '0.75rem' }}>
                  <span style={{
                    fontSize: '0.72rem', fontWeight: 700,
                    padding: '3px 14px',
                    background: `${phase.color}15`,
                    border: `1px solid ${phase.color}35`,
                    borderRadius: 100,
                    color: phase.color,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                  }}>{phase.phase}</span>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0a0a14', margin: 0 }}>
                    {phase.weeks} — {phase.title}
                  </h3>
                </div>
                <p style={{ color: '#444458', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '2rem', maxWidth: 700 }}>
                  <strong>Goal:</strong> {phase.goal}
                </p>

                {/* Compound cards */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: '2rem' }}>
                  {phase.compounds.map((c, j) => (
                    <div key={j} style={{
                      background: 'rgba(255,255,255,0.75)',
                      border: '1px solid rgba(0,0,0,0.07)',
                      borderRadius: 16,
                      padding: '1.5rem',
                    }}>
                      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, marginBottom: '1rem' }}>
                        <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#0a0a14', margin: 0 }}>{c.name}</h4>
                        <a
                          href={AFFILIATE_PRODUCT(c.slug)}
                          target="_blank"
                          rel="nofollow noopener noreferrer"
                          style={{
                            display: 'inline-flex', alignItems: 'center', gap: 5,
                            padding: '5px 12px',
                            background: phase.color,
                            color: '#000',
                            borderRadius: 100,
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            textDecoration: 'none',
                          }}
                        >
                          View <ExternalLink size={11} />
                        </a>
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12 }}>
                        <div>
                          <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#888898', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>Dose</div>
                          <div style={{ fontSize: '0.88rem', color: '#333348', lineHeight: 1.6 }}>{c.dose}</div>
                        </div>
                        <div>
                          <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#888898', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>Timing</div>
                          <div style={{ fontSize: '0.88rem', color: '#333348', lineHeight: 1.6 }}>{c.timing}</div>
                        </div>
                        <div style={{ gridColumn: 'span 2' }}>
                          <div style={{ fontSize: '0.7rem', fontWeight: 700, color: phase.color, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>Mechanism</div>
                          <div style={{ fontSize: '0.85rem', color: '#555570', lineHeight: 1.7 }}>{c.mechanism}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{
                  padding: '1rem 1.25rem',
                  background: `${phase.color}0d`,
                  border: `1px solid ${phase.color}25`,
                  borderRadius: 12,
                }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: phase.color, textTransform: 'uppercase', letterSpacing: '0.1em' }}>What to Expect: </span>
                  <span style={{ fontSize: '0.9rem', color: '#555570', lineHeight: 1.7 }}>{phase.expect}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Dosing Reference Table */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
          <div className="section-label">Quick Reference</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '0.75rem' }}>
            Complete Dosing Table
          </h2>
          <p style={{ color: '#555570', fontSize: '1.05rem', marginBottom: '2.5rem', maxWidth: 720 }}>
            All compounds, doses, timing, and cycle structure in a single reference table.
          </p>
          <div style={{ overflowX: 'auto', borderRadius: 18, border: '1px solid rgba(0,0,0,0.08)' }}>
            <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0, fontSize: '0.9rem', background: '#fff' }}>
              <thead>
                <tr style={{ background: '#f7f8fc' }}>
                  {['Compound', 'Admin', 'Dose', 'Timing', 'Phase', 'Cycle'].map((h, i) => (
                    <th key={i} style={{
                      padding: '0.9rem 1.1rem',
                      textAlign: 'left',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: '#888898',
                      borderBottom: '1px solid rgba(0,0,0,0.07)',
                      borderRight: i < 5 ? '1px solid rgba(0,0,0,0.05)' : 'none',
                      whiteSpace: 'nowrap',
                    }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {dosingTable.map((row, idx) => (
                  <tr key={idx} style={{ background: idx % 2 === 1 ? 'rgba(0,0,0,0.015)' : 'transparent' }}>
                    <td style={{ padding: '0.9rem 1.1rem', borderBottom: idx < dosingTable.length - 1 ? '1px solid rgba(0,0,0,0.04)' : 'none', borderRight: '1px solid rgba(0,0,0,0.05)', fontWeight: 700, color: row.color }}>
                      {row.compound}
                    </td>
                    <td style={{ padding: '0.9rem 1.1rem', borderBottom: idx < dosingTable.length - 1 ? '1px solid rgba(0,0,0,0.04)' : 'none', borderRight: '1px solid rgba(0,0,0,0.05)', color: '#555570', whiteSpace: 'nowrap' }}>
                      {row.admin}
                    </td>
                    <td style={{ padding: '0.9rem 1.1rem', borderBottom: idx < dosingTable.length - 1 ? '1px solid rgba(0,0,0,0.04)' : 'none', borderRight: '1px solid rgba(0,0,0,0.05)', color: '#444458', lineHeight: 1.6 }}>
                      {row.dose}
                    </td>
                    <td style={{ padding: '0.9rem 1.1rem', borderBottom: idx < dosingTable.length - 1 ? '1px solid rgba(0,0,0,0.04)' : 'none', borderRight: '1px solid rgba(0,0,0,0.05)', color: '#555570', whiteSpace: 'nowrap' }}>
                      {row.timing}
                    </td>
                    <td style={{ padding: '0.9rem 1.1rem', borderBottom: idx < dosingTable.length - 1 ? '1px solid rgba(0,0,0,0.04)' : 'none', borderRight: '1px solid rgba(0,0,0,0.05)', textAlign: 'center' }}>
                      <span style={{
                        display: 'inline-block', padding: '2px 9px',
                        background: `${row.color}12`,
                        border: `1px solid ${row.color}30`,
                        borderRadius: 100,
                        fontSize: '0.75rem', fontWeight: 700,
                        color: row.color,
                        whiteSpace: 'nowrap',
                      }}>{row.phase}</span>
                    </td>
                    <td style={{ padding: '0.9rem 1.1rem', borderBottom: idx < dosingTable.length - 1 ? '1px solid rgba(0,0,0,0.04)' : 'none', color: '#555570', whiteSpace: 'nowrap' }}>
                      {row.cycle}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Results Timeline */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
          <div className="section-label">Expected Results</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '0.75rem' }}>
            What to Expect and When
          </h2>
          <p style={{ color: '#555570', fontSize: '1.05rem', marginBottom: '3rem', maxWidth: 720 }}>
            Realistic, mechanism-grounded expectations based on published compound data. Results vary significantly by individual baseline, dosing compliance, and lifestyle factors.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {resultsTimeline.map((stage, i) => (
              <div key={i} style={{
                display: 'flex', gap: 20,
                padding: '1.5rem 1.75rem',
                border: '1px solid rgba(0,0,0,0.07)',
                borderRadius: 16,
                background: '#fafafa',
                alignItems: 'flex-start',
              }}>
                <div style={{
                  background: '#0a0a14',
                  color: '#d4a843',
                  padding: '6px 14px',
                  borderRadius: 100,
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                  marginTop: 2,
                }}>
                  {stage.week}
                </div>
                <div style={{ flex: 1 }}>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 10 }}>
                    {stage.changes.map((change, j) => (
                      <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: '0.9rem', color: '#444458' }}>
                        <CheckCircle size={13} style={{ color: '#34d399', marginTop: 4, flexShrink: 0 }} />
                        {change}
                      </li>
                    ))}
                  </ul>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {stage.active.map((c, j) => (
                      <span key={j} style={{
                        fontSize: '0.72rem', fontWeight: 700,
                        padding: '2px 9px',
                        background: 'rgba(212,168,67,0.1)',
                        border: '1px solid rgba(212,168,67,0.25)',
                        borderRadius: 100,
                        color: '#d4a843',
                      }}>{c}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What NOT to do */}
        <section style={{ padding: '4rem 0', borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
          <div className="section-label">Protocol Rules</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '2.5rem' }}>
            What NOT to Do
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 900 }}>
            {donts.map((item, i) => (
              <div key={i} style={{
                display: 'flex', gap: 16,
                padding: '1.25rem 1.5rem',
                background: 'rgba(251,146,60,0.05)',
                border: '1px solid rgba(251,146,60,0.2)',
                borderLeft: '4px solid #fb923c',
                borderRadius: '0 14px 14px 0',
                alignItems: 'flex-start',
              }}>
                <AlertCircle size={16} style={{ color: '#fb923c', marginTop: 3, flexShrink: 0 }} />
                <div>
                  <div style={{ fontWeight: 700, color: '#0a0a14', fontSize: '0.95rem', marginBottom: 4 }}>{item.rule}</div>
                  <div style={{ color: '#555570', fontSize: '0.88rem', lineHeight: 1.65 }}>{item.reason}</div>
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
                q: 'What is the best peptide stack for looksmaxxing?',
                a: 'The most complete looksmaxxing stack addresses all four aesthetic levers: GHK-Cu for skin collagen, SNAP-8 for expression lines, CJC-1295/Ipamorelin for GH axis optimization, and optionally Retatrutide for fat loss or IGF-1 LR3 for muscle density. Use a phased approach — start with topical compounds (Phase 1), add GH secretagogues after week 4 (Phase 2), and only introduce advanced compounds after a complete prior cycle.',
              },
              {
                q: 'How long should a looksmaxxing peptide cycle be?',
                a: 'Standard: 12 weeks for GH axis compounds (CJC-1295/Ipamorelin), with a 4-week off-period minimum. GHK-Cu runs 12 weeks on / 4 off, or can be used topically more continuously. SNAP-8 requires ongoing daily application. Most users run two 12-week cycles per year with 4-week breaks between.',
              },
              {
                q: 'Can beginners run a full looksmaxxing peptide stack?',
                a: 'Start with Phase 1 only: topical GHK-Cu + SNAP-8. No injectables, no GH axis compounds. Complete one full 12-week skin cycle first. Then add CJC-1295/Ipamorelin as the second layer. Advanced compounds like IGF-1 LR3 require prior cycle history and baseline bloodwork.',
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
            background: 'linear-gradient(135deg, #0a0a14 0%, #111122 100%)',
            borderRadius: 24,
            padding: '3rem 2.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
          }}>
            <div style={{ maxWidth: 580 }}>
              <div className="section-label" style={{ color: '#d4a843' }}>Start the Protocol</div>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.75rem' }}>
                Build Your Looksmaxxing Stack
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem', lineHeight: 1.7, margin: 0 }}>
                All compounds HPLC-tested with CoA documentation. Start with Phase 1 topicals, or go straight to the full intermediate stack.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <a
                href={AFFILIATE_PRODUCT('ghk-cu')}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="btn-primary"
              >
                GHK-Cu — Start Phase 1 <ArrowRight size={14} />
              </a>
              <a
                href={AFFILIATE_PRODUCT('cjc1295-ipamorelin')}
                target="_blank"
                rel="nofollow noopener noreferrer"
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
                CJC-1295 + Ipamorelin — Phase 2 <ExternalLink size={12} />
              </a>
            </div>
          </div>
          <div style={{ marginTop: '2rem' }}>
            <RelatedLinks currentPath="/looksmaxxing-peptide-stack-protocol" />
          </div>
        </section>

      </div>
    </div>
  )
}
