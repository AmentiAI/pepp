'use client'
import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, ExternalLink, DollarSign, AlertCircle, ChevronDown, ChevronUp, CheckCircle, TrendingUp, Zap } from 'lucide-react'
import { AFFILIATE_BASE } from '@/lib/products'
import RelatedLinks from '@/components/RelatedLinks'

const tiers = [
  {
    tier: 'Tier 1',
    budget: '$50',
    label: 'Single-Compound Foundation',
    color: '#34d399',
    badgeBg: 'rgba(52,211,153,0.12)',
    compounds: ['GHK-Cu 50mg'],
    cost: 'GHK-Cu 50mg ≈ $50',
    bestFor: 'Complete beginners who want to validate the protocol with the single highest-ROI compound before committing further.',
    outcomes: [
      'Collagen synthesis begins within 2–3 weeks',
      'Skin texture improvements visible at 6–8 weeks',
      'Measurable dermal thickening at 12 weeks',
      'Foundation-level skin quality improvement with no injection required',
    ],
    note: 'GHK-Cu alone is a legitimate protocol. It is the single highest-ROI compound in a looksmaxxing stack — more effective per dollar than any other peptide available. Start here and assess before adding anything.',
  },
  {
    tier: 'Tier 2',
    budget: '$100',
    label: 'Topical Core Stack',
    color: '#d4a843',
    badgeBg: 'rgba(212,168,67,0.12)',
    compounds: ['GHK-Cu 50mg', 'SNAP-8 10mg'],
    cost: 'GHK-Cu ≈ $50 + SNAP-8 ≈ $45 = ~$95',
    bestFor: 'Anyone ready to add the neuromuscular expression-line component. Expression lines are the second most visible aging signal — SNAP-8 addresses this with no additional complexity.',
    outcomes: [
      'GHK-Cu for collagen density and skin thickness',
      'SNAP-8 reduces dynamic expression line depth by up to 35%',
      'Zero injections — full topical-only protocol',
      'Complete morning routine established in one stack',
    ],
    note: 'This two-compound topical combination addresses the two primary visible aging mechanisms: collagen loss (structural) and neuromuscular expression lines (dynamic). It is a complete protocol for many users.',
  },
  {
    tier: 'Tier 3',
    budget: '$150',
    label: 'Full Topical Setup',
    color: '#a78bfa',
    badgeBg: 'rgba(167,139,250,0.12)',
    compounds: ['GHK-Cu 50mg', 'SNAP-8 10mg', 'Bacteriostatic Water', 'Application tools'],
    cost: 'GHK-Cu + SNAP-8 + bac water + supplies = ~$115–130',
    bestFor: 'The user who wants a complete, self-sufficient topical peptide setup including all required reconstitution and application supplies.',
    outcomes: [
      'Fully equipped to reconstitute and apply both topical peptides',
      'Multiple month supply of both core compounds',
      'No clinic visits, no injections, no prescriptions',
      'Full morning and evening topical routine covered',
    ],
    note: 'Bacteriostatic water (bac water) is required for lyophilized peptide reconstitution — do not use regular sterile water (no preservative) or tap water. This tier represents everything needed to run the protocol independently.',
  },
  {
    tier: 'Tier 4',
    budget: '$300+',
    label: 'Topical + First Injectable',
    color: '#fb923c',
    badgeBg: 'rgba(251,146,60,0.12)',
    compounds: ['GHK-Cu 50mg', 'SNAP-8 10mg', 'CJC-1295 (or Ipamorelin)', 'Bacteriostatic Water', 'Insulin syringes'],
    cost: 'Full topical setup + CJC-1295 ≈ $40–60 + Ipamorelin ≈ $40–60 + supplies',
    bestFor: 'Users who have run at least one full 12-week topical cycle and want to add the overnight GH secretagogue component for body composition, sleep quality, and skin quality amplification.',
    outcomes: [
      'All Tier 3 topical outcomes plus:',
      'GH pulse amplification 4–8× above baseline',
      'Body composition improvement (fat loss + lean mass)',
      'Enhanced overnight skin regeneration through GH-mediated collagen and IGF-1',
      'Improved sleep architecture and recovery',
    ],
    note: 'Do not jump to Tier 4 before validating your response to topicals at Tier 2–3. Knowing how your body and skin respond to GHK-Cu and SNAP-8 gives you a baseline. Injectables add complexity, supply chain requirements, and technique — earn Tier 4 by completing a topical cycle first.',
  },
]

const mistakes = [
  {
    mistake: 'Buying a multi-compound bundle before validating tolerance',
    fix: 'Start with GHK-Cu alone for 4–6 weeks before adding anything. If you buy 5 compounds simultaneously and experience an unexpected response, you cannot isolate which compound caused it.',
    color: '#ef4444',
  },
  {
    mistake: 'Prioritizing the most popular compound over the highest ROI compound',
    fix: 'BPC-157 is frequently the first compound beginners ask about because it is heavily discussed. But for looksmaxxing and skin quality specifically, GHK-Cu has more clinical evidence per dollar. Start with what has the best evidence, not the largest community discussion.',
    color: '#fb923c',
  },
  {
    mistake: 'Skipping bacteriostatic water and using regular water',
    fix: 'Regular sterile water has no antimicrobial preservative. Reconstituted peptides in non-bacteriostatic water degrade within 24–48 hours and risk bacterial contamination. Bacteriostatic water (0.9% benzyl alcohol) extends reconstituted peptide stability to 4–6 weeks refrigerated.',
    color: '#d97706',
  },
  {
    mistake: 'Using procedures before establishing a peptide baseline',
    fix: 'Getting Botox or fillers before running a peptide protocol means you have no baseline understanding of what peptides alone achieve. This makes it impossible to assess the additional value of procedures. Establish your peptide foundation first — then decide whether procedures add meaningfully to your results.',
    color: '#7c3aed',
  },
  {
    mistake: 'Judging results at 4 weeks',
    fix: 'The collagen synthesis cascade requires 8–12 weeks to produce visible dermal changes. Many users abandon the protocol at 4–6 weeks before peak response occurs. Commit to a full 12-week cycle before evaluating compound efficacy.',
    color: '#0891b2',
  },
]

const resultsByTier = [
  { tier: 'Tier 1 ($50)', result6wk: 'Subtle hydration and texture improvement', result12wk: 'Measurable skin density increase, pore refinement, improved glow', color: '#34d399' },
  { tier: 'Tier 2 ($100)', result6wk: 'Texture + early softening of expression lines', result12wk: 'Significant expression line reduction + dermal thickening. Full topical looksmaxxing effect.', color: '#d4a843' },
  { tier: 'Tier 3 ($150)', result6wk: 'Same as Tier 2 — full supply and convenience', result12wk: 'Same as Tier 2 with multi-month supply sustainability', color: '#a78bfa' },
  { tier: 'Tier 4 ($300+)', result6wk: 'Tier 2 results + improved sleep quality within 2 weeks', result12wk: 'Tier 2 results + measurable body composition shift, enhanced skin quality from GH-mediated effects', color: '#fb923c' },
]

const faqs = [
  {
    q: 'Why start with GHK-Cu instead of a more talked-about compound like BPC-157 or CJC-1295?',
    a: 'For looksmaxxing applications specifically — skin quality, periorbital area, jawline definition through skin tightening — GHK-Cu has more published clinical evidence per dollar than any other peptide available. BPC-157 is extraordinarily valuable for tissue healing, injury recovery, and gut health, but its primary application is not skin aesthetics. CJC-1295 is transformative for body composition and overnight GH amplification, but it requires injection technique, fasting discipline, and costs more per unit. GHK-Cu is topical (no injection required), has exceptional safety data, and produces measurable skin quality improvements that are the core looksmaxxing outcome. For a budget-first approach, start with the compound that gives you the best visible looksmaxxing result per dollar.',
  },
  {
    q: 'Is a topical-only protocol (no injections) a legitimate approach or a compromise?',
    a: 'Topical-only is a legitimate complete protocol, not a compromise. GHK-Cu + SNAP-8 together address the two primary visible skin aging mechanisms: collagen loss and dynamic expression line formation. These are the same mechanisms addressed by the most common cosmetic procedures — Botox and filler. Many users achieve their full aesthetic goals with a Tier 2 topical-only protocol and never feel the need to add injectables. Adding injectable GH secretagogues at Tier 4 amplifies the results and adds body composition benefits, but the topical foundation is not inferior — it is a complete independent protocol for skin-focused looksmaxxing.',
  },
  {
    q: 'How long does a 50mg vial of GHK-Cu last?',
    a: 'At standard topical concentrations (0.1–0.2% solution), a 50mg vial reconstituted in 25–50ml of bacteriostatic water produces a 0.1–0.2% GHK-Cu serum. Applied at 4–6 drops per application twice daily (morning and evening), this quantity lasts approximately 8–16 weeks depending on application density and area covered. For a budget-optimized Tier 1 protocol, start at the lower end of concentration and application volume — you can always use more if you want to increase dose, but starting conservative preserves supply.',
  },
  {
    q: 'What is the ROI logic for starting with the highest-ROI compound before adding more?',
    a: 'The ROI-first philosophy is a risk management principle as much as a financial one. When you add multiple compounds simultaneously, you gain complexity without gaining information. If your skin improves dramatically, you cannot attribute the improvement to a specific compound. If you have a reaction, you cannot identify the cause. Starting with GHK-Cu alone for a full 4–6 week cycle gives you: (1) a clean baseline response to your highest-ROI compound, (2) confidence in your sourcing and reconstitution technique, (3) visible results to motivate continued investment, and (4) a clear before/after framework for evaluating each subsequent addition.',
  },
  {
    q: 'At what point should I add injectable peptides to the topical protocol?',
    a: 'The decision to add injectable GH secretagogues (CJC-1295/Ipamorelin) should be made after: (1) completing a full 12-week topical cycle with consistent daily use, (2) confirming good tolerance with no unexpected reactions, (3) establishing the injection technique and supply chain (bacteriostatic water, insulin syringes, alcohol swabs, rotation sites), and (4) committing to the fasting and pre-sleep timing protocol. Adding injectables without having mastered the topical protocol first means you are adding complexity to an unestablished foundation. Injectable GH secretagogues are the highest-leverage addition to the stack — but they require more from you in protocol discipline to work correctly.',
  },
  {
    q: 'Can I use GHK-Cu and SNAP-8 from the same source?',
    a: 'Yes — both GHK-Cu and SNAP-8 can be sourced as lyophilized powders, reconstituted separately in bacteriostatic water, and applied sequentially in the morning skincare routine. GHK-Cu goes first (allow 90 seconds to absorb), then SNAP-8 to expression zones (allow 3–5 minutes). They can also be purchased pre-formulated in solution form from some suppliers. Whether you use lyophilized or pre-formulated, the key quality markers are: third-party purity testing documentation, known concentration, and a verified track record from the supplier.',
  },
]

export default function LooksmaxxingStarterStackBudgetPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div style={{ background: '#ffffff', minHeight: '100vh' }}>

      {/* Hero */}
      <div style={{
        background: 'linear-gradient(160deg, #0a1a10 0%, #071510 50%, #050d08 100%)',
        padding: '5.5rem 2rem 5rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(52,211,153,0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
          <div style={{ maxWidth: 820 }}>
            <div className="section-label" style={{ color: '#34d399' }}>Budget Optimization</div>
            <h1 className="heading-xl" style={{ color: '#ffffff', marginBottom: '1.25rem' }}>
              Looksmaxxing Starter Stack: <span className="gold-text">Budget Guide</span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: 680 }}>
              Start with the highest ROI compound first. Build to the next tier only when you have validated your response. Four tiers from $50 to $300+ — with honest outcomes at each level.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: '2rem' }}>
              <a href={AFFILIATE_BASE} target="_blank" rel="sponsored noopener noreferrer" className="btn-primary">
                Shop Peptides <ExternalLink size={14} />
              </a>
              <Link href="/peptides-vs-botox-fillers" className="btn-secondary" style={{ color: 'rgba(255,255,255,0.75)', borderColor: 'rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.05)' }}>
                vs Botox &amp; Fillers <ArrowRight size={14} />
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
            { val: '$50', label: 'Entry point — GHK-Cu 50mg (highest ROI single compound)' },
            { val: '$95', label: 'Topical core stack — GHK-Cu + SNAP-8' },
            { val: '$115–130', label: 'Full topical setup with supplies' },
            { val: '$300+', label: 'Topical + first injectable GH secretagogue' },
          ].map(s => (
            <div key={s.label}>
              <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#34d399', letterSpacing: '-0.03em' }}>{s.val}</div>
              <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)', marginTop: 2 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>

        {/* ROI-First Philosophy */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label">Core Principle</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '1.25rem' }}>
            The ROI-First Philosophy: <span className="gold-text">Why Sequence Matters</span>
          </h2>
          <div className="rg-2col" style={{ gap: '4rem' }}>
            <div>
              <p style={{ color: '#444458', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '1.05rem' }}>
                The most common mistake in building a looksmaxxing peptide stack is not choosing the wrong compounds — it is choosing the right compounds in the wrong order. Beginners frequently jump to the most discussed or most dramatic-sounding compounds (Retatrutide, IGF-1 LR3, TB-500) before establishing the foundational compounds that deliver the highest aesthetic ROI per dollar.
              </p>
              <p style={{ color: '#444458', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '1.05rem' }}>
                The ROI-first principle is simple: before spending on Compound B, verify that Compound A is producing the results you expect. This gives you two things: (1) a validated baseline response, and (2) the diagnostic ability to attribute changes to specific additions. When you add five compounds simultaneously, you gain complexity without gaining information.
              </p>
              <p style={{ color: '#444458', lineHeight: 1.85, fontSize: '1.05rem' }}>
                For looksmaxxing applications, GHK-Cu is objectively the highest-ROI single compound. It is topical — requiring no injection technique. It has the most published clinical evidence in skin science. It produces measurable, visible improvements at the 8–12 week mark in the majority of users. And it costs approximately $50 for a 3–4 month supply. No other compound matches this combination of evidence quality, accessibility, and cost-effectiveness for skin-focused looksmaxxing.
              </p>
            </div>
            <div>
              <div style={{ padding: '1.75rem', background: 'rgba(52,211,153,0.06)', border: '1px solid rgba(52,211,153,0.2)', borderRadius: 18, marginBottom: '1.5rem' }}>
                <div style={{ fontWeight: 800, color: '#0a0a14', fontSize: '1.05rem', marginBottom: '0.75rem' }}>Tier Progression Rule</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {[
                    'Run Tier 1 for a minimum of 6 weeks before adding Tier 2',
                    'Document your baseline before you start (photos, skin assessment)',
                    'Add one compound at a time — never jump two tiers simultaneously',
                    'Evaluate at 12 weeks, not 4 weeks — collagen synthesis takes time',
                    'Confirm sourcing quality before committing to a full cycle',
                  ].map((rule, i) => (
                    <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                      <CheckCircle size={14} style={{ color: '#34d399', flexShrink: 0, marginTop: 3 }} />
                      <span style={{ color: '#444458', fontSize: '0.92rem', lineHeight: 1.6 }}>{rule}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Link href="/peptide-stacking-guide-beginners" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#34d399', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>
                  Beginner Stacking Guide <ArrowRight size={14} />
                </Link>
                <Link href="/peptide-looksmaxxing-daily-routine" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#d4a843', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>
                  Daily Routine <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Budget Tier Ladder */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label">The Tier Ladder</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '0.5rem' }}>
            Budget Tier Ladder: <span className="gold-text">$50 to $300+</span>
          </h2>
          <p style={{ color: '#666688', fontSize: '1.05rem', marginBottom: '2.5rem', maxWidth: 640 }}>
            Each tier builds on the previous. Ascend only after validating your response at the current level.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {[...tiers].reverse().map((tier, revI) => {
              const i = tiers.length - 1 - revI
              return (
                <div key={tier.tier} style={{
                  display: 'flex',
                  gap: '2rem',
                  alignItems: 'flex-start',
                  padding: '2rem',
                  background: i % 2 === 0 ? '#f9f9fd' : '#ffffff',
                  border: '1px solid rgba(0,0,0,0.07)',
                  borderBottom: revI === tiers.length - 1 ? '1px solid rgba(0,0,0,0.07)' : 'none',
                  borderRadius: revI === 0 ? '18px 18px 0 0' : revI === tiers.length - 1 ? '0 0 18px 18px' : '0',
                  borderLeft: `6px solid ${tier.color}`,
                }}>
                  <div style={{ flexShrink: 0, textAlign: 'center', minWidth: 100 }}>
                    <div style={{
                      display: 'inline-block', padding: '6px 16px',
                      background: tier.badgeBg, color: tier.color,
                      borderRadius: 100, fontWeight: 900, fontSize: '1.1rem',
                      marginBottom: '0.4rem',
                    }}>{tier.budget}</div>
                    <div style={{ fontSize: '0.7rem', fontWeight: 700, color: tier.color, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{tier.tier}</div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 900, color: '#0a0a14', fontSize: '1.1rem', marginBottom: '0.4rem' }}>{tier.label}</div>
                    <div style={{ fontSize: '0.85rem', color: '#888', marginBottom: '0.75rem', fontStyle: 'italic' }}>{tier.cost}</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: '0.875rem' }}>
                      {tier.compounds.map(c => (
                        <span key={c} style={{ padding: '4px 12px', background: `${tier.color}15`, color: tier.color, borderRadius: 100, fontSize: '0.82rem', fontWeight: 700 }}>{c}</span>
                      ))}
                    </div>
                    <div style={{ marginBottom: '0.875rem' }}>
                      <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#888', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>Expected Outcomes</div>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                        {tier.outcomes.map((o, j) => (
                          <li key={j} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                            <div style={{ width: 5, height: 5, borderRadius: '50%', background: tier.color, flexShrink: 0, marginTop: 8 }} />
                            <span style={{ color: '#444458', fontSize: '0.9rem', lineHeight: 1.6 }}>{o}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div style={{ fontWeight: 700, color: '#0a0a14', fontSize: '0.82rem', marginBottom: '0.3rem' }}>Best For</div>
                    <p style={{ color: '#555570', fontSize: '0.88rem', lineHeight: 1.65, margin: '0 0 0.75rem' }}>{tier.bestFor}</p>
                    <div style={{ padding: '0.75rem 1rem', background: 'rgba(0,0,0,0.04)', borderRadius: 10, borderLeft: `3px solid ${tier.color}` }}>
                      <p style={{ color: '#666688', fontSize: '0.85rem', lineHeight: 1.65, margin: 0, fontStyle: 'italic' }}>{tier.note}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Common Budget Mistakes */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label">Avoid These Errors</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '1.25rem' }}>
            Common Budget <span className="gold-text">Mistakes</span>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {mistakes.map((m, i) => (
              <div key={i} style={{ padding: '1.5rem', background: '#f9f9fd', border: '1px solid rgba(0,0,0,0.07)', borderLeft: `4px solid ${m.color}`, borderRadius: '0 16px 16px 0' }}>
                <div style={{ fontWeight: 800, color: '#0a0a14', marginBottom: '0.5rem', fontSize: '1rem' }}>✗ {m.mistake}</div>
                <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                  <CheckCircle size={14} style={{ color: '#34d399', flexShrink: 0, marginTop: 3 }} />
                  <p style={{ color: '#444458', lineHeight: 1.75, margin: 0, fontSize: '0.95rem' }}><strong>Fix:</strong> {m.fix}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Results by Tier */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label">Realistic Expectations</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '2rem' }}>
            Realistic Results <span className="gold-text">by Tier</span>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 2fr 2fr', gap: '1rem', padding: '0.75rem 1.5rem', background: '#0a0a14', borderRadius: 10 }}>
              {['Tier', 'At 6 Weeks', 'At 12 Weeks'].map(h => (
                <div key={h} style={{ fontSize: '0.72rem', fontWeight: 700, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{h}</div>
              ))}
            </div>
            {resultsByTier.map((r, i) => (
              <div key={r.tier} style={{
                display: 'grid', gridTemplateColumns: '1.5fr 2fr 2fr', gap: '1rem',
                padding: '1rem 1.5rem', background: i % 2 === 0 ? '#f9f9fd' : '#ffffff',
                border: '1px solid rgba(0,0,0,0.06)', borderRadius: 10, alignItems: 'start',
              }}>
                <div>
                  <span style={{ display: 'inline-block', padding: '4px 12px', background: `${r.color}15`, color: r.color, borderRadius: 100, fontSize: '0.82rem', fontWeight: 700 }}>{r.tier}</span>
                </div>
                <div style={{ color: '#555570', fontSize: '0.88rem', lineHeight: 1.6 }}>{r.result6wk}</div>
                <div style={{ color: '#333350', fontSize: '0.88rem', lineHeight: 1.6, fontWeight: 500 }}>{r.result12wk}</div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label">FAQ</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '2rem' }}>Common Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxWidth: 800 }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ border: '1px solid rgba(0,0,0,0.08)', borderRadius: 14, overflow: 'hidden' }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.25rem 1.5rem', background: openFaq === i ? '#f9f9fd' : '#ffffff', border: 'none', cursor: 'pointer', textAlign: 'left', gap: '1rem' }}
                >
                  <span style={{ fontWeight: 700, color: '#0a0a14', fontSize: '1rem', lineHeight: 1.4 }}>{faq.q}</span>
                  {openFaq === i ? <ChevronUp size={18} style={{ color: '#34d399', flexShrink: 0 }} /> : <ChevronDown size={18} style={{ color: '#888', flexShrink: 0 }} />}
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
          <div style={{ background: 'linear-gradient(135deg, #0a1a10 0%, #0a0a14 100%)', borderRadius: 24, padding: '3.5rem', textAlign: 'center' }}>
            <div className="section-label" style={{ color: '#34d399', justifyContent: 'center' }}>Start at Tier 1</div>
            <h2 style={{ color: '#ffffff', fontSize: '2rem', fontWeight: 900, marginBottom: '1rem' }}>
              <span className="gold-text">$50</span> Is All You Need to Start
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: 560, margin: '0 auto 2rem' }}>
              GHK-Cu alone is a complete protocol. Validate your response, build your foundation, and add tiers only when you have earned them.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={AFFILIATE_BASE} target="_blank" rel="sponsored noopener noreferrer" className="btn-primary">
                Shop GHK-Cu <ExternalLink size={14} />
              </a>
              <Link href="/looksmaxxing-by-age" className="btn-secondary" style={{ color: 'rgba(255,255,255,0.75)', borderColor: 'rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.06)' }}>
                Protocols by Age <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        <RelatedLinks currentPath="/looksmaxxing-starter-stack-budget" />
      </div>
    </div>
  )
}
