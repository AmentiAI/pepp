'use client'
import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, ExternalLink, AlertCircle, ChevronDown, ChevronUp, Activity, Clock, Zap, Shield, TrendingUp } from 'lucide-react'
import { AFFILIATE_PRODUCT, AFFILIATE_BASE } from '@/lib/products'
import RelatedLinks from '@/components/RelatedLinks'

const purple = '#a78bfa'
const purpleDim = 'rgba(167,139,250,0.12)'
const purpleBorder = 'rgba(167,139,250,0.25)'

const mechanismCards = [
  {
    peptide: 'Ipamorelin',
    type: 'GHRP — Ghrelin Receptor Agonist',
    color: purple,
    halfLife: '~2 hours',
    selectivity: 'GH-selective only',
    mechanism: 'Binds the GHSR-1a (ghrelin receptor) on anterior pituitary somatotrophs, triggering rapid, pulsatile GH release. Unlike GHRP-2 and GHRP-6, Ipamorelin is highly selective — it does not elevate cortisol, prolactin, or ACTH, making it the cleanest GHRP available.',
    advantage: 'No cortisol, no prolactin, no ACTH. Pure GH signal.',
    icon: <Zap size={20} />,
  },
  {
    peptide: 'CJC-1295 (no DAC)',
    type: 'GHRH Analog — Mod GRF 1-29',
    color: '#60a5fa',
    halfLife: '~30 minutes',
    selectivity: 'Physiological pulse pattern',
    mechanism: 'A stabilized analog of endogenous GHRH (1-29), modified to resist DPP-IV enzymatic cleavage. Binds GHRH receptors on pituitary somatotrophs, amplifying and extending the GH pulse duration. The 30-minute half-life preserves the natural episodic GH secretion pattern — a critical distinction from DAC variants.',
    advantage: 'Pulsatile kinetics. Preferred for daily protocols targeting natural GH rhythm.',
    icon: <Activity size={20} />,
  },
]

const dacComparison = [
  { property: 'Half-life', noDac: '~30 minutes', withDac: '8–12 days' },
  { property: 'Injection frequency', noDac: 'Daily (with Ipamorelin)', withDac: '1–2x per week' },
  { property: 'GH pattern', noDac: 'Pulsatile — mimics natural', withDac: 'Sustained elevation — blunts episodic pattern' },
  { property: 'Preferred for', noDac: 'Body recomposition, sleep protocol', withDac: 'Convenience, set-and-forget approach' },
  { property: 'Pituitary receptor sensitization', noDac: 'Preserved (pulse gaps allow reset)', withDac: 'Risk of GHRH receptor downregulation' },
  { property: 'Protocol complexity', noDac: 'Higher — daily injection required', withDac: 'Lower — weekly dosing' },
]

const outcomes = [
  {
    title: 'Body Composition',
    icon: <TrendingUp size={22} />,
    color: purple,
    stat: '↓ Fat Mass, ↑ Lean Mass',
    detail: 'Clinical trials of GH secretagogues and exogenous GH demonstrate consistent reductions in fat mass (particularly visceral adipose) and increases in lean body mass over 12-week cycles. GH activates hormone-sensitive lipase and promotes free fatty acid mobilization while stimulating protein synthesis via IGF-1.',
    citation: 'Sigalos & Pastuszak (2018), Sexual Medicine Reviews',
  },
  {
    title: 'Recovery',
    icon: <Activity size={22} />,
    color: '#34d399',
    stat: 'Accelerated Tissue Repair',
    detail: 'GH stimulates satellite cell activation and myoblast proliferation — the cellular machinery responsible for muscle repair between training sessions. Elevated overnight GH via secretagogues accelerates the repair cycle, allowing higher training frequency and reduced DOMS duration.',
    citation: 'Godfrey et al. (2003), Journal of Clinical Endocrinology & Metabolism',
  },
  {
    title: 'Skin Quality',
    icon: <Shield size={22} />,
    color: '#f59e0b',
    stat: '↑ Collagen, Dermal Thickness',
    detail: 'GH downstream signaling through IGF-1 stimulates fibroblast proliferation and collagen type I and III synthesis. Studies of GH replacement in deficient adults show measurable increases in skin thickness, collagen content, and dermal water-binding capacity within 6–12 months.',
    citation: 'Lange et al. (2001), European Journal of Endocrinology',
  },
  {
    title: 'Sleep Architecture',
    icon: <Clock size={22} />,
    color: '#60a5fa',
    stat: 'Deeper SWS, Improved Quality',
    detail: 'The GH-sleep axis is bidirectional: GH pulses are amplified during slow-wave sleep, and GH itself promotes deeper NREM sleep architecture. Ipamorelin users consistently report improved sleep quality, longer deep sleep stages, and subjective improvements in restorative sleep within the first 2–3 weeks.',
    citation: 'Van Cauter et al. (2000), JAMA',
  },
  {
    title: 'Metabolic Health',
    icon: <Zap size={22} />,
    color: '#fb923c',
    stat: '↑ Insulin Sensitivity, ↓ Hepatic Fat',
    detail: 'Optimized GH pulsatility improves hepatic insulin sensitivity and reduces intrahepatic lipid accumulation. Tesamorelin (a related GHRH analog) demonstrated significant visceral fat reduction and improved lipid profiles in HIV-associated lipodystrophy trials — effects attributed to GH axis restoration.',
    citation: 'Falutz et al. (2010), New England Journal of Medicine',
  },
]

const protocols = [
  {
    label: 'A',
    name: 'Sleep-Only Protocol',
    freq: 'Once daily — bedtime',
    dose: '200mcg Ipamorelin + 200mcg CJC-1295 (no DAC)',
    timing: '30–60 min before sleep, 2–3 hrs post-meal',
    level: 'Beginner / Most Common',
    color: purple,
    pros: ['Highest GH pulse efficiency per injection — aligns with natural overnight GH window', 'Simplest protocol — single daily injection', 'Insulin at nadir during sleep = maximum GH response', 'Low disruption to daily schedule'],
    cons: ['Single daily pulse only — advanced users may want more', 'No morning GH contribution to daytime recovery'],
  },
  {
    label: 'B',
    name: '2x Daily Protocol',
    freq: 'Morning (fasted) + Bedtime',
    dose: '200mcg each peptide per injection',
    timing: 'Morning: fasted, 30+ min before eating. Bedtime: 2–3 hrs post-meal',
    level: 'Intermediate',
    color: '#60a5fa',
    pros: ['Two GH pulses per day — morning pulse supports daytime lipolysis and muscle protein synthesis', 'Accelerated body recomposition vs single-pulse protocol', 'Morning fasted pulse promotes fat oxidation during workout'],
    cons: ['Requires morning fasting window discipline', 'Morning injection may not be practical for all schedules', 'Slightly higher peptide consumption'],
  },
  {
    label: 'C',
    name: '3x Daily Protocol',
    freq: 'Morning (fasted) + Afternoon + Bedtime',
    dose: '200mcg each peptide per injection',
    timing: 'Space injections evenly — minimum 3–4 hrs between. All injections fasted or 2+ hrs post-meal.',
    level: 'Advanced',
    color: '#34d399',
    pros: ['Maximum GH pulse frequency — 3 amplified pulses per day', 'Aggressive body recomposition and anti-aging profile', 'Mimics protocols used in anti-aging and HRT-adjacent clinical settings'],
    cons: ['Highest peptide cost per cycle', 'Requires disciplined fasting windows around 3 daily injections', 'Afternoon injection timing can be difficult to schedule around meals', 'Not necessary for most users — diminishing returns vs 2x protocol'],
  },
]

const weeklySchedule = [
  {
    weeks: 'Weeks 1–4',
    phase: 'Loading / Dose Titration',
    color: purple,
    dose: '100–150mcg each peptide once daily (bedtime)',
    focus: 'Allow pituitary receptors to sensitize. Some users start at half dose (100mcg) for the first 1–2 weeks to assess tolerance. GH-related side effects (fluid retention, tingling) are most common in week 1–2 and typically resolve. Begin tracking: sleep quality, morning appetite, body composition photos.',
    markers: ['Sleep quality improvement (week 1–2)', 'Increased appetite (normal — GH stimulates ghrelin)', 'Possible mild water retention (temporary)'],
  },
  {
    weeks: 'Weeks 5–8',
    phase: 'Full Dose',
    color: '#60a5fa',
    dose: '200mcg each peptide — chosen protocol (1x, 2x, or 3x daily)',
    focus: 'Advance to full dose and chosen injection frequency. This is the primary GH-stimulation window. Body composition changes become measurable. Subcutaneous fat loss (particularly abdominal) accelerates after weeks 6–7. Muscle fullness and recovery improvements are commonly reported.',
    markers: ['Measurable fat loss (weeks 6–8)', 'Improved training recovery', 'Enhanced skin texture (collagen deposition begins)'],
  },
  {
    weeks: 'Weeks 9–12',
    phase: 'Peak Response',
    color: '#34d399',
    dose: '200mcg each peptide — maintain chosen protocol',
    focus: 'Peak cumulative GH effects. IGF-1 levels are sustained at highest point of cycle. Fat loss trajectory continues; lean mass gains are consolidating. Skin quality improvements are typically visible by week 10–12. Prepare for off-cycle transition — do not abruptly stop; you may taper over the final week.',
    markers: ['Maximum fat loss progress', 'Visible skin quality changes', 'Lean mass retention or gain', 'Strong sleep architecture and recovery'],
  },
  {
    weeks: 'Off-Cycle (12 weeks)',
    phase: 'Recovery / Receptor Reset',
    color: '#fb923c',
    dose: 'No secretagogues',
    focus: 'Equal off-cycle duration (12 weeks) maintains GHRH and ghrelin receptor sensitivity for the next cycle. Natural GH production is fully intact — Ipamorelin/CJC-1295 do not suppress endogenous GH axis. Maintain training, nutrition, and sleep optimization. Many users report retained body composition benefits during off-cycle.',
    markers: ['Natural GH axis fully preserved', 'No PCT (post-cycle therapy) required', 'Retain strength and composition gains from on-cycle'],
  },
]

const timingRules = [
  {
    rule: 'Fast 2–3 hours before injection',
    color: purple,
    detail: 'The single most critical rule. Residual insulin from any meal — protein or carbohydrate — directly blunts GH pulse amplitude through somatostatin activation and GHRH receptor interference. Clinical data: insulin at 40–60 mIU/L reduces GH secretagogue response by 50–70% vs fasted state.',
    icon: <Clock size={18} />,
  },
  {
    rule: 'No carbohydrates within 2 hours',
    color: '#fb923c',
    detail: 'Carbohydrates are the strongest insulin-stimulating macronutrient. Even a moderate carbohydrate intake (30–50g) can sustain elevated insulin for 2+ hours postprandially. If your last meal was protein-only or fat-only, 90–120 minutes may be sufficient. If it included carbohydrates, wait the full 2–3 hours minimum.',
    icon: <AlertCircle size={18} />,
  },
  {
    rule: 'Ideal state: true fasted (5+ hours)',
    color: '#34d399',
    detail: 'The maximum GH response occurs from a fully fasted state — 5 or more hours since any macronutrient intake. The bedtime injection after an early dinner (6–7 PM meal, 10 PM injection) reliably achieves this. Morning injections after overnight fast are also ideal.',
    icon: <Zap size={18} />,
  },
  {
    rule: 'No eating for 20–30 minutes post-injection',
    color: '#60a5fa',
    detail: 'Allow 20–30 minutes post-injection before consuming any food. This window allows the peptides to initiate receptor binding and early pituitary signaling before insulin rises. Eating immediately after injection negates the fasting preparation.',
    icon: <Activity size={18} />,
  },
  {
    rule: 'Avoid alcohol on injection days',
    color: '#ef4444',
    detail: 'Alcohol directly suppresses GH secretion and impairs NREM slow-wave sleep architecture — the sleep phase responsible for the primary overnight GH pulse. Even moderate alcohol (2 drinks) reduces overnight GH output by up to 75%. On injection days, especially pre-sleep dosing days, alcohol is counterproductive.',
    icon: <Shield size={18} />,
  },
]

const faqs = [
  {
    q: 'Why is Ipamorelin considered superior to GHRP-2 and GHRP-6?',
    a: 'Ipamorelin is highly selective for the GH axis — it activates GHSR-1a (ghrelin receptors) on pituitary somatotrophs to stimulate GH release without significantly elevating cortisol, prolactin, or ACTH. GHRP-2 produces meaningful cortisol and prolactin elevation, particularly at higher doses. GHRP-6 similarly raises cortisol and, due to its strong ghrelin mimicry in peripheral tissues, causes significant appetite stimulation and gastric motility changes. Ipamorelin produces the cleanest, most targeted GH signal of any GHRP, with the lowest side effect profile — making it the preferred GHRP for long-term protocols.',
  },
  {
    q: 'Can Ipamorelin and CJC-1295 be mixed in the same syringe?',
    a: 'Yes. Both peptides are water-soluble and chemically compatible. The standard practice is to reconstitute each peptide separately with bacteriostatic water, then draw the desired dose of each into the same insulin syringe. This reduces injection frequency and is widely used in clinical and research settings. The combined solution is stable at room temperature for up to 30–60 minutes, though storing reconstituted peptides in the refrigerator (2–8°C) and drawing from vials at injection time is optimal.',
  },
  {
    q: 'What does the 4–8x GH pulse amplification actually mean?',
    a: 'Baseline GH pulse amplitude during the first slow-wave sleep cycle is approximately 0.5–2 ng/mL in healthy adults (lower in older adults). With Ipamorelin and CJC-1295 combined, documented GH secretion studies show pulse amplitudes of 4–8x the individual baseline — meaning the same hypothalamic GHRH/ghrelin signal that normally produces a 1 ng/mL pulse produces a 4–8 ng/mL pulse when both receptors are simultaneously saturated by the secretagogues. This amplification derives from the synergistic receptor co-activation: GHRH analog occupying GHRH receptors + ghrelin mimetic occupying GHSR-1a simultaneously produces greater GH output than either alone.',
  },
  {
    q: 'Do Ipamorelin and CJC-1295 suppress natural GH production?',
    a: 'No. Unlike exogenous GH (rhGH), which suppresses endogenous GH production through IGF-1 negative feedback, GH secretagogues work by amplifying the pituitary\'s response to endogenous signals. The pituitary somatotrophs are still producing GH in response to hypothalamic GHRH and ghrelin — the secretagogues simply make the response larger. When you stop Ipamorelin/CJC-1295, the pituitary returns to its baseline responsiveness immediately. No post-cycle therapy is required, and there is no suppression of the GH axis to recover from.',
  },
  {
    q: 'What results should I expect and on what timeline?',
    a: 'Week 1–2: Improved sleep quality (most commonly reported early effect). Increased appetite and possible mild fluid retention (temporary, resolves within 1–2 weeks). Weeks 3–6: Improved training recovery, muscle fullness, and early subjective body composition changes. Weeks 6–10: Measurable fat loss (particularly abdominal/visceral), visible muscle definition improvements, early skin quality changes. Weeks 10–12: Maximum cumulative effect — peak body composition improvements, measurable lean mass retention or gain, skin quality and texture improvements. Individual results vary significantly with training quality, nutrition, sleep architecture, and age.',
  },
  {
    q: 'Is the Ipamorelin/CJC-1295 blend vial the most convenient option?',
    a: 'Yes. Pre-blended vials containing both Ipamorelin and CJC-1295 (no DAC) in a single vial eliminate the need to draw from two separate vials per injection. Each dose from the blend delivers a pre-measured ratio of both peptides, simplifying reconstitution and reducing injection volume. For users running daily pre-sleep injections over a 12-week cycle, the blend format is significantly more practical than managing two separate vials and dosing calculations.',
  },
]

export default function IpamorelinCJC1295Page() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div style={{ background: '#ffffff', minHeight: '100vh' }}>

      {/* Hero */}
      <div style={{
        background: 'linear-gradient(160deg, #05080f 0%, #09060f 60%, #050810 100%)',
        padding: '5.5rem 2rem 5rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          background: 'radial-gradient(ellipse 70% 60% at 50% 60%, rgba(167,139,250,0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
          <div style={{ maxWidth: 840 }}>
            <div className="section-label" style={{ color: purple }}>GH Secretagogue Stack</div>
            <h1 className="heading-xl" style={{ color: '#ffffff', marginBottom: '1.25rem' }}>
              Ipamorelin + CJC-1295 — <span style={{ color: purple }}>The Gold Standard</span> GH Stack
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: '2rem', maxWidth: 700 }}>
              Ipamorelin fires the GH pulse. CJC-1295 extends and amplifies it. Together they target two independent pituitary receptor pathways simultaneously — producing 4–8× GH pulse amplification for body recomposition, recovery acceleration, and anti-aging.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
              <a
                href={AFFILIATE_PRODUCT('ipamorelin-cjc-1295-blend-10mg')}
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="btn-primary"
                style={{ background: purple, borderColor: purple }}
              >
                Buy Ipamorelin/CJC-1295 Blend <ExternalLink size={14} />
              </a>
              <Link href="/sleep-growth-hormone-peptides" className="btn-secondary" style={{ color: 'rgba(255,255,255,0.75)', borderColor: 'rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.05)' }}>
                Pre-Sleep GH Protocol <ArrowRight size={14} />
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
            { val: '4–8×', label: 'GH pulse amplification vs baseline', color: purple },
            { val: '12 weeks', label: 'Standard on-cycle duration', color: purple },
            { val: '200mcg', label: 'Standard dose per peptide per injection', color: purple },
            { val: 'Zero', label: 'Cortisol / prolactin / ACTH elevation (Ipamorelin)', color: '#34d399' },
          ].map(s => (
            <div key={s.label}>
              <div style={{ fontSize: '1.6rem', fontWeight: 900, color: s.color, letterSpacing: '-0.03em' }}>{s.val}</div>
              <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)', marginTop: 2 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>

        {/* Synergy Mechanism */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label">Mechanism of Synergy</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '1.25rem' }}>
            How Ipamorelin + CJC-1295 <span className="gold-text">Work Together</span>
          </h2>
          <div className="rg-2col" style={{ gap: '3rem', marginBottom: '3rem' }}>
            <div>
              <p style={{ color: '#444458', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '1.05rem' }}>
                GH secretion from pituitary somatotrophs is driven by two parallel hypothalamic signals: GHRH (growth hormone releasing hormone), which activates GHRH receptors, and ghrelin, which activates GHSR-1a (ghrelin receptors). These are distinct receptor systems — stimulating one produces a GH pulse, but stimulating both simultaneously produces a GH pulse dramatically larger than either alone.
              </p>
              <p style={{ color: '#444458', lineHeight: 1.85, fontSize: '1.05rem' }}>
                Ipamorelin occupies the GHSR-1a pathway. CJC-1295 (no DAC) occupies the GHRH receptor pathway. When injected together, both pathways are activated at the same moment — triggering synergistic GH release from the same pool of somatotroph cells. This is the mechanistic basis for the 4–8× amplification: two independent excitatory signals converging on the same GH release machinery.
              </p>
            </div>
            <div>
              <p style={{ color: '#444458', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '1.05rem' }}>
                The synergy also operates at the level of somatostatin — the GH inhibitor. Ghrelin receptor activation (Ipamorelin) suppresses hypothalamic somatostatin release, reducing the inhibitory brake on GH secretion. This allows the GHRH signal (CJC-1295) to elicit a stronger pituitary response than it would in the presence of normal somatostatin tone.
              </p>
              <div style={{ padding: '1.25rem', background: purpleDim, border: `1px solid ${purpleBorder}`, borderRadius: 14 }}>
                <p style={{ fontWeight: 700, color: '#0a0a14', margin: '0 0 0.5rem', fontSize: '0.95rem' }}>The Dual-Pathway Principle</p>
                <p style={{ color: '#555570', margin: 0, fontSize: '0.9rem', lineHeight: 1.7 }}>
                  Ipamorelin (GHSR-1a) + CJC-1295 (GHRH-R) = higher amplitude AND longer duration GH pulses than either peptide alone. Amplitude from receptor co-activation. Duration from GHRH analog extending the stimulation window.
                </p>
              </div>
            </div>
          </div>

          {/* Mechanism Side-by-Side Cards */}
          <div className="rg-2col" style={{ gap: '1.5rem' }}>
            {mechanismCards.map(card => (
              <div key={card.peptide} style={{
                padding: '2rem',
                background: '#f9f9fd',
                border: `1px solid rgba(0,0,0,0.07)`,
                borderTop: `3px solid ${card.color}`,
                borderRadius: 16,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1rem' }}>
                  <div style={{ color: card.color }}>{card.icon}</div>
                  <div>
                    <div style={{ fontWeight: 900, color: '#0a0a14', fontSize: '1.1rem' }}>{card.peptide}</div>
                    <div style={{ fontSize: '0.78rem', color: card.color, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{card.type}</div>
                  </div>
                </div>
                <p style={{ color: '#444458', lineHeight: 1.75, fontSize: '0.95rem', marginBottom: '1.25rem' }}>{card.mechanism}</p>
                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                  <div>
                    <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#999', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 2 }}>Half-Life</div>
                    <div style={{ fontWeight: 800, color: card.color, fontSize: '0.95rem' }}>{card.halfLife}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#999', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 2 }}>Profile</div>
                    <div style={{ fontWeight: 800, color: card.color, fontSize: '0.95rem' }}>{card.selectivity}</div>
                  </div>
                </div>
                <div style={{ padding: '0.75rem 1rem', background: `${card.color}18`, border: `1px solid ${card.color}30`, borderRadius: 10, fontSize: '0.85rem', color: '#444', fontWeight: 600 }}>
                  {card.advantage}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* DAC vs No DAC */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label">CJC-1295 Variant Comparison</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '1rem' }}>
            CJC-1295 With DAC vs Without DAC — <span className="gold-text">Which to Use</span>
          </h2>
          <p style={{ color: '#666688', fontSize: '1.05rem', marginBottom: '2rem', maxWidth: 680 }}>
            DAC (Drug Affinity Complex) is a lysine-maleimide modification that causes CJC-1295 to bind albumin, extending half-life from 30 minutes to 8–12 days. The choice fundamentally changes the GH release pattern.
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 560 }}>
              <thead>
                <tr style={{ background: '#0a0a14' }}>
                  <th style={{ padding: '0.875rem 1.25rem', textAlign: 'left', color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', width: '28%' }}>Property</th>
                  <th style={{ padding: '0.875rem 1.25rem', textAlign: 'left', color: purple, fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', width: '36%' }}>CJC-1295 No DAC (Preferred)</th>
                  <th style={{ padding: '0.875rem 1.25rem', textAlign: 'left', color: 'rgba(255,255,255,0.55)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', width: '36%' }}>CJC-1295 With DAC</th>
                </tr>
              </thead>
              <tbody>
                {dacComparison.map((row, i) => (
                  <tr key={row.property} style={{ background: i % 2 === 0 ? '#f9f9fd' : '#ffffff', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                    <td style={{ padding: '0.875rem 1.25rem', fontWeight: 700, color: '#0a0a14', fontSize: '0.9rem' }}>{row.property}</td>
                    <td style={{ padding: '0.875rem 1.25rem', color: '#333', fontSize: '0.9rem', fontWeight: 500 }}>
                      <span style={{ color: purple, fontWeight: 700 }}>{row.noDac}</span>
                    </td>
                    <td style={{ padding: '0.875rem 1.25rem', color: '#666', fontSize: '0.9rem' }}>{row.withDac}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ marginTop: '1.5rem', padding: '1.25rem 1.5rem', background: purpleDim, border: `1px solid ${purpleBorder}`, borderRadius: 14, maxWidth: 720 }}>
            <p style={{ fontWeight: 700, color: '#0a0a14', margin: '0 0 0.4rem', fontSize: '0.95rem' }}>Why No DAC is Preferred for Pulsatile Protocol</p>
            <p style={{ color: '#555570', margin: 0, fontSize: '0.9rem', lineHeight: 1.7 }}>
              The human body evolved with episodic GH pulsatility — not continuous elevation. No DAC preserves this architecture, maintaining receptor sensitivity and producing the sharp GH spikes that drive body composition changes. The blend vial at Apollo Peptide Sciences uses CJC-1295 no DAC, making it the appropriate choice for daily pre-sleep protocols.
            </p>
          </div>
        </section>

        {/* GH Pulse Amplification Explained */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label">The 4–8× Stat Explained</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '1.25rem' }}>
            What 4–8× GH Pulse Amplification <span className="gold-text">Actually Means</span>
          </h2>
          <div className="rg-2col" style={{ gap: '3rem', alignItems: 'start' }}>
            <div>
              <p style={{ color: '#444458', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '1.05rem' }}>
                In healthy adults, the primary nocturnal GH pulse — occurring 60–90 minutes after sleep onset during NREM Stage 3 — has a baseline amplitude of approximately 0.5–2 ng/mL in young adults and 0.2–0.8 ng/mL in adults over 40. This is the body's largest daily GH event, responsible for the majority of overnight anabolism and repair.
              </p>
              <p style={{ color: '#444458', lineHeight: 1.85, fontSize: '1.05rem' }}>
                GH secretion studies examining combined GHRH + ghrelin analog administration document pulse amplitudes at 4–8× the individual baseline measurement. A subject whose natural GH pulse peaks at 1 ng/mL would show a pulse of 4–8 ng/mL with optimally timed Ipamorelin/CJC-1295 administration — a meaningful difference in the downstream anabolic signaling cascade.
              </p>
            </div>
            <div>
              {/* Visual pulse comparison */}
              <div style={{ background: '#0a0a14', borderRadius: 18, padding: '2rem', marginBottom: '1.25rem' }}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>Natural GH Pulse (Baseline ~1 ng/mL)</div>
                  <div style={{ display: 'flex', alignItems: 'flex-end', gap: 3, height: 40 }}>
                    {[5, 8, 15, 40, 80, 100, 90, 60, 30, 15, 8, 5].map((h, i) => (
                      <div key={i} style={{ flex: 1, height: `${(h / 100) * 40}px`, background: 'rgba(255,255,255,0.25)', borderRadius: '2px 2px 0 0' }} />
                    ))}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: '0.7rem', fontWeight: 700, color: purple, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>With Ipamorelin + CJC-1295 (4–8× Amplified)</div>
                  <div style={{ display: 'flex', alignItems: 'flex-end', gap: 3, height: 80 }}>
                    {[5, 10, 25, 60, 95, 100, 95, 75, 45, 25, 12, 6].map((h, i) => (
                      <div key={i} style={{ flex: 1, height: `${(h / 100) * 80}px`, background: `linear-gradient(to top, ${purple}, ${purple}88)`, borderRadius: '2px 2px 0 0' }} />
                    ))}
                  </div>
                </div>
                <div style={{ marginTop: '1rem', fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)', lineHeight: 1.5 }}>
                  Schematic representation. Time axis: ~90-minute GH pulse window centered on NREM Stage 3.
                </div>
              </div>
              <div style={{ padding: '1rem 1.25rem', background: '#f9f9fd', border: '1px solid rgba(0,0,0,0.07)', borderRadius: 12, fontSize: '0.88rem', color: '#555570', lineHeight: 1.65 }}>
                The amplification is multiplicative because both the GHRH-R and GHSR-1a pathways converge on the same adenylyl cyclase / PKA signaling cascade inside somatotroph cells, producing an additive intracellular cAMP response that exceeds either pathway activated alone.
              </div>
            </div>
          </div>
        </section>

        {/* Outcome Cards */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label">Clinical Evidence</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '0.75rem' }}>
            What GH Optimization <span className="gold-text">Produces — 5 Outcomes</span>
          </h2>
          <p style={{ color: '#666688', fontSize: '1.05rem', marginBottom: '2.5rem', maxWidth: 680 }}>
            GH secretagogue protocols target five interrelated outcomes, each supported by clinical evidence from GH axis research.
          </p>
          <div className="rg-3col" style={{ gap: '1.25rem' }}>
            {outcomes.map(outcome => (
              <div key={outcome.title} style={{
                padding: '1.75rem',
                background: '#f9f9fd',
                border: '1px solid rgba(0,0,0,0.07)',
                borderTop: `3px solid ${outcome.color}`,
                borderRadius: 16,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '0.875rem' }}>
                  <div style={{ color: outcome.color }}>{outcome.icon}</div>
                  <div style={{ fontWeight: 900, color: '#0a0a14', fontSize: '1.05rem' }}>{outcome.title}</div>
                </div>
                <div style={{ fontWeight: 700, color: outcome.color, fontSize: '0.9rem', marginBottom: '0.875rem' }}>{outcome.stat}</div>
                <p style={{ color: '#555570', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: '1rem' }}>{outcome.detail}</p>
                <div style={{ fontSize: '0.75rem', color: '#999', fontStyle: 'italic', lineHeight: 1.5 }}>{outcome.citation}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Protocol Table */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label">Dosing Protocols</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '1rem' }}>
            3 Protocols — Choose by <span className="gold-text">Experience Level</span>
          </h2>
          <p style={{ color: '#666688', fontSize: '1.05rem', marginBottom: '2.5rem', maxWidth: 680 }}>
            All protocols use 200mcg Ipamorelin + 200mcg CJC-1295 (no DAC) per injection. The difference is injection frequency and the number of daily GH pulses targeted.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {protocols.map(protocol => (
              <div key={protocol.label} style={{
                border: `1px solid rgba(0,0,0,0.08)`,
                borderLeft: `4px solid ${protocol.color}`,
                borderRadius: '0 16px 16px 0',
                overflow: 'hidden',
              }}>
                <div style={{ padding: '1.5rem 1.75rem', background: '#f9f9fd', display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ minWidth: 180 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '0.5rem' }}>
                      <div style={{ width: 28, height: 28, borderRadius: '50%', background: protocol.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, color: '#fff', fontSize: '0.9rem', flexShrink: 0 }}>{protocol.label}</div>
                      <div style={{ fontWeight: 900, color: '#0a0a14', fontSize: '1.05rem' }}>{protocol.name}</div>
                    </div>
                    <div style={{ fontSize: '0.78rem', color: protocol.color, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>{protocol.level}</div>
                    <div style={{ fontSize: '0.85rem', color: '#666' }}>{protocol.freq}</div>
                  </div>
                  <div style={{ flex: 1, minWidth: 220 }}>
                    <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#999', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>Dose per injection</div>
                    <div style={{ fontWeight: 700, color: '#0a0a14', fontSize: '0.95rem', marginBottom: '0.5rem' }}>{protocol.dose}</div>
                    <div style={{ fontSize: '0.82rem', color: '#666' }}>{protocol.timing}</div>
                  </div>
                </div>
                <div style={{ padding: '1.25rem 1.75rem', background: '#ffffff', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                  <div>
                    <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#34d399', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>Advantages</div>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                      {protocol.pros.map((pro, j) => (
                        <li key={j} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', fontSize: '0.85rem', color: '#444458' }}>
                          <span style={{ color: '#34d399', fontWeight: 900, flexShrink: 0, marginTop: 1 }}>+</span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#fb923c', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>Considerations</div>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                      {protocol.cons.map((con, j) => (
                        <li key={j} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', fontSize: '0.85rem', color: '#444458' }}>
                          <span style={{ color: '#fb923c', fontWeight: 900, flexShrink: 0, marginTop: 1 }}>–</span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 12-Week Protocol */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label">12-Week Cycle Layout</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '1rem' }}>
            The 12-Week Protocol — <span className="gold-text">Month by Month</span>
          </h2>
          <p style={{ color: '#666688', fontSize: '1.05rem', marginBottom: '2.5rem', maxWidth: 680 }}>
            GH-mediated body composition changes are cumulative and time-dependent. The 12-week structure aligns with documented IGF-1 and GH tissue response timelines.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {weeklySchedule.map((block, i) => (
              <div key={block.weeks} style={{
                display: 'grid', gridTemplateColumns: '200px 1fr', gap: '2rem',
                padding: '1.75rem', background: '#f9f9fd',
                border: '1px solid rgba(0,0,0,0.07)',
                borderLeft: `4px solid ${block.color}`,
                borderRadius: '0 16px 16px 0',
              }}>
                <div>
                  <div style={{ fontWeight: 900, color: block.color, fontSize: '1rem', marginBottom: 4 }}>{block.weeks}</div>
                  <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#666', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>{block.phase}</div>
                  <div style={{ fontSize: '0.82rem', color: '#444', fontWeight: 600 }}>{block.dose}</div>
                </div>
                <div>
                  <p style={{ color: '#555570', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1rem' }}>{block.focus}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {block.markers.map((m, j) => (
                      <div key={j} style={{ padding: '4px 10px', background: `${block.color}18`, border: `1px solid ${block.color}30`, borderRadius: 100, fontSize: '0.75rem', color: '#444', fontWeight: 600 }}>
                        {m}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Timing Rules */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label">Timing &amp; Fasting Rules</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '1rem' }}>
            Injection Timing Rules — <span className="gold-text">Non-Negotiable</span>
          </h2>
          <p style={{ color: '#666688', fontSize: '1.05rem', marginBottom: '2.5rem', maxWidth: 680 }}>
            GH secretagogue efficacy is highly dependent on insulin state at the time of injection. These rules determine whether the peptide produces a strong or a blunted GH pulse.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', maxWidth: 820 }}>
            {timingRules.map((rule, i) => (
              <div key={i} style={{
                display: 'grid', gridTemplateColumns: '36px 1fr', gap: '1.25rem',
                alignItems: 'flex-start', padding: '1.25rem 1.5rem',
                background: '#f9f9fd', border: '1px solid rgba(0,0,0,0.07)', borderRadius: 14,
              }}>
                <div style={{ color: rule.color, paddingTop: 2 }}>{rule.icon}</div>
                <div>
                  <div style={{ fontWeight: 800, color: '#0a0a14', marginBottom: '0.375rem', fontSize: '0.97rem' }}>{rule.rule}</div>
                  <p style={{ color: '#555570', fontSize: '0.88rem', lineHeight: 1.65, margin: 0 }}>{rule.detail}</p>
                </div>
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
                  {openFaq === i ? <ChevronUp size={18} style={{ color: purple, flexShrink: 0 }} /> : <ChevronDown size={18} style={{ color: '#888', flexShrink: 0 }} />}
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
          <div style={{ background: 'linear-gradient(135deg, #05080f 0%, #09060f 100%)', borderRadius: 24, padding: '3.5rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
              background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(167,139,250,0.1) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />
            <div style={{ position: 'relative' }}>
              <div className="section-label" style={{ color: purple, justifyContent: 'center' }}>Get Started</div>
              <h2 style={{ color: '#ffffff', fontSize: '2rem', fontWeight: 900, marginBottom: '1rem' }}>
                The Gold Standard GH Stack — <span style={{ color: purple }}>Verified Source</span>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: 560, margin: '0 auto 2rem' }}>
                Ipamorelin/CJC-1295 Blend — both peptides in a single vial. 200mcg each per dose. Begin the 12-week protocol fasted, pre-sleep, and let the biology compound.
              </p>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                <a
                  href={AFFILIATE_PRODUCT('ipamorelin-cjc-1295-blend-10mg')}
                  target="_blank"
                  rel="sponsored noopener noreferrer"
                  className="btn-primary"
                  style={{ background: purple, borderColor: purple }}
                >
                  Buy Ipamorelin/CJC-1295 Blend <ExternalLink size={14} />
                </a>
                <Link href="/sleep-growth-hormone-peptides" className="btn-secondary" style={{ color: 'rgba(255,255,255,0.75)', borderColor: 'rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.06)' }}>
                  Pre-Sleep GH Protocol <ArrowRight size={14} />
                </Link>
              </div>
              <div style={{ marginTop: '1.5rem', fontSize: '0.78rem', color: 'rgba(255,255,255,0.3)' }}>
                For laboratory and research use only. Not for human consumption.
              </div>
            </div>
          </div>
        </section>

        <RelatedLinks currentPath="/ipamorelin-cjc-1295-growth-hormone" />
      </div>
    </div>
  )
}
