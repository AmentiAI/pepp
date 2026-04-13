'use client'
import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, ExternalLink, Calendar, AlertCircle, ChevronDown, ChevronUp, Activity, RefreshCw } from 'lucide-react'
import { AFFILIATE_BASE } from '@/lib/products'
import RelatedLinks from '@/components/RelatedLinks'

// Calendar data: 12 months, each compound's status per month
// GH secretagogues: 12 on / 4 off = roughly 3 cycles per year
// IGF-1 LR3: 4 on / 4 off alternating
// Epithalon: 10 days in March, 10 days in September
// GLP-1: continuous
// GHK-Cu: continuous

const compoundColors = {
  ghSecretagogues: '#a78bfa',
  igf1: '#fb923c',
  epithalon: '#34d399',
  glp1: '#22d3ee',
  ghkCu: '#d4a843',
}

type MonthStatus = 'on' | 'off' | 'partial' | 'continuous'

interface MonthData {
  month: string
  short: string
  ghSecretagogues: MonthStatus
  igf1: MonthStatus
  epithalon: MonthStatus
  glp1: MonthStatus
  ghkCu: MonthStatus
}

const months: MonthData[] = [
  { month: 'January', short: 'JAN', ghSecretagogues: 'on', igf1: 'on', epithalon: 'off', glp1: 'continuous', ghkCu: 'continuous' },
  { month: 'February', short: 'FEB', ghSecretagogues: 'on', igf1: 'off', epithalon: 'off', glp1: 'continuous', ghkCu: 'continuous' },
  { month: 'March', short: 'MAR', ghSecretagogues: 'on', igf1: 'on', epithalon: 'partial', glp1: 'continuous', ghkCu: 'continuous' },
  { month: 'April', short: 'APR', ghSecretagogues: 'off', igf1: 'off', epithalon: 'off', glp1: 'continuous', ghkCu: 'continuous' },
  { month: 'May', short: 'MAY', ghSecretagogues: 'on', igf1: 'on', epithalon: 'off', glp1: 'continuous', ghkCu: 'continuous' },
  { month: 'June', short: 'JUN', ghSecretagogues: 'on', igf1: 'off', epithalon: 'off', glp1: 'continuous', ghkCu: 'continuous' },
  { month: 'July', short: 'JUL', ghSecretagogues: 'on', igf1: 'on', epithalon: 'off', glp1: 'continuous', ghkCu: 'continuous' },
  { month: 'August', short: 'AUG', ghSecretagogues: 'off', igf1: 'off', epithalon: 'off', glp1: 'continuous', ghkCu: 'continuous' },
  { month: 'September', short: 'SEP', ghSecretagogues: 'on', igf1: 'on', epithalon: 'partial', glp1: 'continuous', ghkCu: 'continuous' },
  { month: 'October', short: 'OCT', ghSecretagogues: 'on', igf1: 'off', epithalon: 'off', glp1: 'continuous', ghkCu: 'continuous' },
  { month: 'November', short: 'NOV', ghSecretagogues: 'on', igf1: 'on', epithalon: 'off', glp1: 'continuous', ghkCu: 'continuous' },
  { month: 'December', short: 'DEC', ghSecretagogues: 'off', igf1: 'off', epithalon: 'off', glp1: 'continuous', ghkCu: 'continuous' },
]

const compounds = [
  { key: 'ghkCu' as const, label: 'GHK-Cu (Topical)', color: compoundColors.ghkCu, cycle: 'Continuous — no cycling needed', offPeriod: 'None required', why: 'GHK-Cu is a naturally occurring tripeptide in human plasma. No receptor desensitization occurs with continuous topical use. Optional 4-week break before reassessment.' },
  { key: 'glp1' as const, label: 'GLP-1 Agonists', color: compoundColors.glp1, cycle: 'Continuous — weekly dose', offPeriod: 'None (clinical protocol)', why: 'GLP-1 receptor agonists are continuous-use compounds. Weight regain occurs rapidly on cessation — dose titration down (not cessation) is the standard approach for long-term management.' },
  { key: 'ghSecretagogues' as const, label: 'GH Secretagogues', color: compoundColors.ghSecretagogues, cycle: '12 weeks on / 4 weeks off', offPeriod: '4 weeks (mandatory)', why: 'GHRH and ghrelin receptors can desensitize with chronic stimulation. The 4-week off period allows receptor density and sensitivity to restore. Without off periods, diminishing pulse amplification occurs by week 14–16.' },
  { key: 'igf1' as const, label: 'IGF-1 LR3', color: compoundColors.igf1, cycle: '4 weeks on / 4 weeks off', offPeriod: '4 weeks (mandatory)', why: 'IGF-1 receptor downregulation occurs rapidly with continuous use. IGF-1 LR3 has a longer half-life than native IGF-1, making receptor saturation more likely. 4-week alternating cycles maintain sensitivity and minimize side effect risk.' },
  { key: 'epithalon' as const, label: 'Epithalon', color: compoundColors.epithalon, cycle: '10 days on / 6 months off', offPeriod: '6 months between cycles', why: 'Epithalon\'s mechanism (telomerase activation and pineal gland normalization) is suited to pulsed administration. The epigenetic and telomere-lengthening effects persist for months after a 10-day cycle. Two cycles per year (spring and fall) reflects traditional protocol timing.' },
]

const cyclingRules = [
  { compound: 'GHK-Cu', cycleOn: 'Continuous', cycleOff: 'None required', reason: 'Natural plasma peptide — no desensitization mechanism', flexibility: 'Optional 4-wk break for reassessment' },
  { compound: 'SNAP-8', cycleOn: 'Continuous', cycleOff: 'None required', reason: 'Local neuromuscular mechanism — no systemic receptor concern', flexibility: 'Optional 4-wk break to assess baseline' },
  { compound: 'CJC-1295', cycleOn: '12 weeks', cycleOff: '4 weeks', reason: 'GHRH receptor desensitization risk at 14–16 weeks', flexibility: 'Some users extend to 16 weeks with diminishing returns' },
  { compound: 'Ipamorelin', cycleOn: '12 weeks', cycleOff: '4 weeks', reason: 'GHS-R1a ghrelin receptor desensitization', flexibility: 'Cycle in sync with CJC-1295' },
  { compound: 'IGF-1 LR3', cycleOn: '4 weeks', cycleOff: '4 weeks', reason: 'IGF-1 receptor downregulation — rapid onset', flexibility: 'Strictly observe — IGF-1 has significant growth effects' },
  { compound: 'Epithalon', cycleOn: '10 days', cycleOff: '6 months', reason: 'Epigenetic effects persist. Pineal normalization effect is durable.', flexibility: 'March and September timing is traditional, not mandatory' },
  { compound: 'BPC-157', cycleOn: '4–8 weeks (as needed)', cycleOff: 'None required', reason: 'No receptor desensitization — used therapeutically until healing occurs', flexibility: 'Discontinue when target outcome is achieved' },
  { compound: 'GLP-1 Agonists', cycleOn: 'Continuous', cycleOff: 'None (clinical protocol)', reason: 'Cessation causes rapid weight regain — designed for continuous use', flexibility: 'Dose titration down, not cessation, for management' },
]

const offPeriodActivities = [
  { title: 'Get Bloodwork Done', desc: 'Off periods are the ideal time for comprehensive bloodwork. IGF-1, GH (AM fasted), glucose, HbA1c, lipid panel, thyroid panel, and a complete metabolic panel. Bloodwork during active cycling may show elevated IGF-1 from exogenous peptide use — off period values represent your true baseline.', color: '#d4a843' },
  { title: 'Maintain Topicals', desc: 'GHK-Cu and SNAP-8 continue without interruption during injectable off periods. Topicals are not subject to receptor desensitization — they continue building collagen and reducing expression lines throughout the off window.', color: '#a78bfa' },
  { title: 'Assess Results', desc: 'Use the off period to objectively assess the results from your completed cycle. Photograph in consistent lighting and position. Assess body composition changes. Document sleep quality changes. This data informs dosing decisions for the next cycle.', color: '#34d399' },
  { title: 'Optimize Nutrition and Training', desc: 'Results from the completed cycle continue to consolidate during the off period — particularly collagen remodeling, which matures over weeks after synthesis stops. Maintain training consistency and protein intake to preserve muscle tissue accreted during the on cycle.', color: '#22d3ee' },
  { title: 'Desensitization Reset', desc: 'The off period allows GHRH and ghrelin receptor density to recover. Do not shorten the off period based on "feeling good." The point is to restore the receptor sensitivity that makes the next cycle as effective as the first — not to feel effects from the current cycle.', color: '#fb923c' },
]

const desensitizationSigns = [
  'GH pulse no longer feels as pronounced (reduced sleep quality improvement)',
  'Body composition changes plateauing despite consistent protocol and nutrition',
  'Reduced morning hunger suppression compared to early in the cycle',
  'Sleep depth improvements that were present in weeks 2–4 becoming less noticeable',
  'Bloodwork showing IGF-1 levels that have not increased from your pre-cycle baseline',
]

const faqs = [
  {
    q: 'Why do GH secretagogues need to be cycled when they work through natural hormonal mechanisms?',
    a: 'Receptor desensitization is a fundamental biological response to sustained receptor activation — it affects virtually all receptor systems that are chronically stimulated. GHRH receptors on pituitary somatotrophs respond to the initial GHRH signal with a robust GH pulse, but with repeated daily stimulation over 14–16 weeks, the receptor expression density begins to downregulate. This means the same dose of CJC-1295 produces progressively smaller GH pulses. The 4-week off period allows the receptor population to recover to baseline density, restoring full sensitivity for the next cycle. Evidence for this in GH secretagogue research comes from studies showing that users who cycle report consistent response quality across multiple cycles, while continuous users report diminishing effects.',
  },
  {
    q: 'What happens if I accidentally extend the on-cycle beyond 12 weeks?',
    a: 'Extending to 13–14 weeks is unlikely to cause significant receptor downregulation — the recommended 12-week duration has a built-in buffer. If you extend to 16 weeks before taking an off period, you may notice the last 2–4 weeks producing less pronounced effects (reduced sleep quality improvement, blunted body composition response) compared to weeks 2–8. This is the early signature of receptor desensitization. In this case, take the 4-week off period as planned — the receptor population typically recovers within 3–4 weeks for the next cycle to begin with full sensitivity.',
  },
  {
    q: 'Can I run GHK-Cu and SNAP-8 continuously while taking an injectable off period?',
    a: 'Yes — and this is the recommended approach. Topical peptides like GHK-Cu and SNAP-8 work through local receptor mechanisms in the skin that do not exhibit the same desensitization dynamics as systemic hormonal peptides. GHK-Cu collagen synthesis signaling does not "adapt" in the same way that pituitary GHRH receptors do. SNAP-8\'s local neuromuscular effect similarly does not require cycling. Running topicals continuously through injectable off periods maintains skin quality progress and provides continuity to your overall looksmaxxing protocol.',
  },
  {
    q: 'What bloodwork should I get and when?',
    a: 'The ideal bloodwork timing is at the beginning and end of each injectable cycle, and during the off period (this represents your true baseline, free of exogenous peptide influence). Key markers to track: IGF-1 (the primary marker of GH axis activity), fasting glucose and insulin (GH can affect insulin sensitivity), HbA1c (long-term glucose management), lipid panel, complete metabolic panel (liver and kidney function), and CBC. For GLP-1 agonist users, add thyroid panel and consider periodic pancreatic enzyme monitoring. A pre-cycle baseline IGF-1 value is particularly valuable because it allows you to assess whether your secretagogue protocol is actually elevating IGF-1 above your natural baseline.',
  },
  {
    q: 'Is the Epithalon March/September timing essential or just traditional?',
    a: 'The March and September timing for Epithalon cycles is traditional rather than physiologically essential. The underlying logic is seasonal: spring (March) coincides with increasing daylight hours and circadian rhythm shifts, and fall (September) with decreasing light and the initiation of the melatonin-dependent sleep architecture changes that drive the autumn shift in biological rhythms. Epithalon\'s documented benefit on pineal gland function and melatonin regulation may have slightly enhanced efficacy when administered at these circadian transition points. However, the evidence for this seasonal optimization is anecdotal — Epithalon cycles scheduled 6 months apart regardless of season are expected to produce equivalent biological effects.',
  },
  {
    q: 'What is the maximum number of GH secretagogue cycles I can run per year?',
    a: 'With a 12-weeks-on / 4-weeks-off structure, the math produces approximately 3 complete cycles per year (12+4 = 16 weeks per cycle × 3 = 48 weeks, with approximately 4 weeks remaining for timing flexibility and bloodwork). This is the standard framework. Some advanced users run 4 shorter cycles (10 weeks on / 3–4 weeks off), but shortening the on period below 10 weeks reduces the cumulative stimulus. Running more than 4 cycles per year with less than 3-week off periods risks inadequate receptor recovery between cycles. Three full cycles with complete 4-week off periods consistently outperforms rushed cycling that compromises receptor sensitivity.',
  },
]

function getStatusDisplay(status: MonthStatus, color: string) {
  if (status === 'continuous') {
    return { bg: `${color}22`, text: color, label: '●', borderColor: color }
  } else if (status === 'on') {
    return { bg: `${color}33`, text: color, label: 'ON', borderColor: color }
  } else if (status === 'partial') {
    return { bg: `${color}18`, text: color, label: '10d', borderColor: color }
  } else {
    return { bg: 'rgba(0,0,0,0.04)', text: '#ccc', label: '—', borderColor: 'transparent' }
  }
}

export default function PeptideCycleCalendarPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div style={{ background: '#ffffff', minHeight: '100vh' }}>

      {/* Hero */}
      <div style={{
        background: 'linear-gradient(160deg, #0a0a1e 0%, #0a0f1e 50%, #050810 100%)',
        padding: '5.5rem 2rem 5rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(167,139,250,0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
          <div style={{ maxWidth: 820 }}>
            <div className="section-label" style={{ color: '#a78bfa' }}>Cycle Planning</div>
            <h1 className="heading-xl" style={{ color: '#ffffff', marginBottom: '1.25rem' }}>
              12-Month Peptide <span className="gold-text">Cycle Calendar</span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: 680 }}>
              GH secretagogues, IGF-1 LR3, Epithalon, GLP-1 agonists, and continuous topicals — mapped out across a full year, with the cycling logic behind each compound.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: '2rem' }}>
              <a href={AFFILIATE_BASE} target="_blank" rel="sponsored noopener noreferrer" className="btn-primary">
                Shop Peptides <ExternalLink size={14} />
              </a>
              <Link href="/peptide-stacking-guide-beginners" className="btn-secondary" style={{ color: 'rgba(255,255,255,0.75)', borderColor: 'rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.05)' }}>
                Stacking Basics <ArrowRight size={14} />
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
            { val: '3×/year', label: 'GH secretagogue cycles (12 on / 4 off)' },
            { val: '6×/year', label: 'IGF-1 LR3 cycles (4 on / 4 off)' },
            { val: '2×/year', label: 'Epithalon cycles — 10 days each' },
            { val: 'Continuous', label: 'GHK-Cu and GLP-1 agonists — no cycling needed' },
          ].map(s => (
            <div key={s.label}>
              <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#a78bfa', letterSpacing: '-0.03em' }}>{s.val}</div>
              <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)', marginTop: 2 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>

        {/* Why Cycling Matters */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label">The Science of Cycling</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '1.25rem' }}>
            Why Cycling Matters: <span className="gold-text">Receptor Desensitization</span>
          </h2>
          <div className="rg-2col" style={{ gap: '4rem' }}>
            <div>
              <p style={{ color: '#444458', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '1.05rem' }}>
                Receptor desensitization is the biological mechanism by which a cell reduces its sensitivity to a chronically present signal. When a receptor is repeatedly stimulated by the same ligand over an extended period, the cell employs several adaptive strategies to reduce the magnitude of the downstream signaling response: receptor internalization (the receptor is pulled inside the cell and away from the membrane), receptor downregulation (the cell produces fewer new receptors), and post-receptor signaling attenuation (the intracellular cascade becomes less responsive to receptor activation).
              </p>
              <p style={{ color: '#444458', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '1.05rem' }}>
                For GH secretagogues, this plays out specifically at the pituitary somatotroph cells that respond to GHRH (targeted by CJC-1295) and at the ghrelin receptor (GHS-R1a) targeted by Ipamorelin. After approximately 12–14 weeks of daily stimulation, the pituitary's GH release response to the same dose begins to decline. Users who fail to cycle report that the sleep quality improvements, body composition changes, and general wellbeing effects that were prominent in weeks 2–8 gradually fade by weeks 14–18. This is not because the peptides have stopped working — it is because the receptor system has adapted.
              </p>
            </div>
            <div>
              <p style={{ color: '#444458', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '1.05rem' }}>
                The 4-week off period allows receptor density and sensitivity to recover. When the ligand is removed, the cell re-expresses surface receptors at normal density and the post-receptor signaling cascade returns to its baseline responsiveness. Users who return to GH secretagogues after a proper off period consistently report that the initial response — the vivid dream quality, the sleep depth improvement, the GH "flush" — returns at the same intensity as the beginning of the first cycle.
              </p>
              <p style={{ color: '#444458', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '1.05rem' }}>
                IGF-1 LR3 requires more aggressive cycling — 4 weeks on / 4 weeks off — because its modified structure extends the half-life from 15 minutes (native IGF-1) to approximately 20–30 hours, producing sustained IGF-1 receptor stimulation that leads to faster receptor downregulation than native hormone pulsatility would produce.
              </p>
              <p style={{ color: '#444458', lineHeight: 1.85, fontSize: '1.05rem' }}>
                Topical peptides like GHK-Cu and SNAP-8 do not require cycling because their mechanisms do not involve systemic receptor saturation in the same way. GHK-Cu signals through local fibroblast receptors — even with continuous daily application, the receptor system does not exhibit the same downregulation seen with systemic pituitary peptides.
              </p>
            </div>
          </div>
        </section>

        {/* 12-Month Calendar Component */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label">Visual Calendar</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '0.5rem' }}>
            12-Month Compound <span className="gold-text">Schedule Grid</span>
          </h2>
          <p style={{ color: '#666688', fontSize: '1rem', marginBottom: '2rem', maxWidth: 640 }}>
            Color-coded status for each compound across all 12 months. Green = on cycle. Grey = off period. Gold dot = continuous. 10d = 10-day Epithalon window.
          </p>

          {/* Legend */}
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
            {compounds.map(c => (
              <div key={c.key} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 14, height: 14, borderRadius: 3, background: c.color }} />
                <span style={{ fontSize: '0.82rem', color: '#444458', fontWeight: 600 }}>{c.label}</span>
              </div>
            ))}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 14, height: 14, borderRadius: 3, background: 'rgba(0,0,0,0.08)' }} />
              <span style={{ fontSize: '0.82rem', color: '#888', fontWeight: 600 }}>Off Period</span>
            </div>
          </div>

          {/* Calendar Grid */}
          <div style={{ overflowX: 'auto' }}>
            <div style={{ minWidth: 800 }}>
              {/* Header */}
              <div style={{ display: 'grid', gridTemplateColumns: '160px repeat(12, 1fr)', gap: '4px', marginBottom: '4px' }}>
                <div />
                {months.map(m => (
                  <div key={m.short} style={{ textAlign: 'center', fontSize: '0.72rem', fontWeight: 800, color: '#888', textTransform: 'uppercase', letterSpacing: '0.08em', padding: '6px 0' }}>
                    {m.short}
                  </div>
                ))}
              </div>

              {/* Compound Rows */}
              {compounds.map(compound => (
                <div key={compound.key} style={{ display: 'grid', gridTemplateColumns: '160px repeat(12, 1fr)', gap: '4px', marginBottom: '4px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', paddingRight: '0.75rem' }}>
                    <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#333350', lineHeight: 1.3 }}>{compound.label}</span>
                  </div>
                  {months.map(m => {
                    const status = m[compound.key]
                    const display = getStatusDisplay(status, compound.color)
                    return (
                      <div key={m.short} style={{
                        height: 44,
                        background: display.bg,
                        border: `1px solid ${display.borderColor}22`,
                        borderRadius: 8,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.78rem',
                        fontWeight: 800,
                        color: display.text,
                      }}>
                        {display.label}
                      </div>
                    )
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* Calendar Notes */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
            {[
              { label: 'OFF months', months: 'April, August, December', desc: 'GH secretagogue off periods — injectable break, topicals continue', color: '#a78bfa' },
              { label: 'Epithalon windows', months: 'March, September (10 days)', desc: '10-day concentrated cycles aligned with seasonal circadian shifts', color: '#34d399' },
              { label: 'IGF-1 off months', months: 'Feb, Apr, Jun, Aug, Oct, Dec', desc: '4-week alternating off periods — strict receptor sensitivity maintenance', color: '#fb923c' },
              { label: 'Always on', months: 'All 12 months', desc: 'GHK-Cu topical and GLP-1 agonists — continuous administration protocols', color: '#d4a843' },
            ].map(n => (
              <div key={n.label} style={{ padding: '1rem 1.25rem', background: '#f9f9fd', border: '1px solid rgba(0,0,0,0.07)', borderLeft: `3px solid ${n.color}`, borderRadius: '0 12px 12px 0' }}>
                <div style={{ fontWeight: 800, color: n.color, fontSize: '0.82rem', marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{n.label}</div>
                <div style={{ fontWeight: 600, color: '#0a0a14', fontSize: '0.88rem', marginBottom: '0.4rem' }}>{n.months}</div>
                <div style={{ color: '#666688', fontSize: '0.82rem', lineHeight: 1.6 }}>{n.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Compound-Specific Cycling Rules */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label">Reference Table</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '2rem' }}>
            Compound-Specific <span className="gold-text">Cycling Rules</span>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
            <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch', marginLeft: '-0.5rem', marginRight: '-0.5rem', paddingLeft: '0.5rem', paddingRight: '0.5rem' }}>
<div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 2fr 1.5fr', gap: '1rem', padding: '0.75rem 1.5rem', background: '#0a0a14', borderRadius: 10 }}>
              {['Compound', 'On Period', 'Off Period', 'Why Off?', 'Flexibility'].map(h => (
                <div key={h} style={{ fontSize: '0.72rem', fontWeight: 700, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{h}</div>
              ))}
            </div>
            {cyclingRules.map((r, i) => (
              <div key={r.compound} style={{
                display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 2fr 1.5fr', gap: '1rem',
                padding: '1rem 1.5rem', background: i % 2 === 0 ? '#f9f9fd' : '#ffffff',
                border: '1px solid rgba(0,0,0,0.06)', borderRadius: 10, alignItems: 'start',
              }}>
                <div style={{ fontWeight: 700, color: '#0a0a14', fontSize: '0.95rem' }}>{r.compound}</div>
                <div style={{ color: '#34d399', fontWeight: 600, fontSize: '0.88rem' }}>{r.cycleOn}</div>
                <div style={{ color: '#fb923c', fontWeight: 600, fontSize: '0.88rem' }}>{r.cycleOff}</div>
                <div style={{ color: '#555570', fontSize: '0.85rem', lineHeight: 1.6 }}>{r.reason}</div>
                <div style={{ color: '#666688', fontSize: '0.85rem', lineHeight: 1.6, fontStyle: 'italic' }}>{r.flexibility}</div>
              </div>
            ))}
            </div>{/* end scroll wrapper */}
          </div>
        </section>

        {/* Off Period Activities */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label">Off Period Protocol</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '1.25rem' }}>
            What to Do During <span className="gold-text">Off Periods</span>
          </h2>
          <p style={{ color: '#444458', lineHeight: 1.85, marginBottom: '2rem', fontSize: '1.05rem', maxWidth: 720 }}>
            The off period is not dead time — it is an active phase of the protocol with specific objectives. Use it strategically.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
            {offPeriodActivities.map(a => (
              <div key={a.title} style={{ padding: '1.75rem', background: '#f9f9fd', border: '1px solid rgba(0,0,0,0.07)', borderTop: `3px solid ${a.color}`, borderRadius: 18 }}>
                <div style={{ fontWeight: 800, color: '#0a0a14', marginBottom: '0.625rem', fontSize: '1rem' }}>{a.title}</div>
                <p style={{ color: '#555570', lineHeight: 1.75, margin: 0, fontSize: '0.92rem' }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Signs of Desensitization */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label">Warning Signs</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '1.25rem' }}>
            Signs of Receptor <span className="gold-text">Desensitization</span>
          </h2>
          <p style={{ color: '#444458', lineHeight: 1.85, marginBottom: '2rem', fontSize: '1.05rem', maxWidth: 720 }}>
            If you notice these signals while on cycle with GH secretagogues, it indicates that receptor desensitization is occurring and an off period should begin promptly — even if you haven't completed the planned 12 weeks.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxWidth: 720 }}>
            {desensitizationSigns.map((sign, i) => (
              <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', padding: '1rem 1.25rem', background: 'rgba(251,146,60,0.06)', border: '1px solid rgba(251,146,60,0.2)', borderRadius: 12 }}>
                <Activity size={16} style={{ color: '#fb923c', flexShrink: 0, marginTop: 3 }} />
                <span style={{ color: '#444458', fontSize: '0.95rem', lineHeight: 1.65 }}>{sign}</span>
              </div>
            ))}
          </div>
          <p style={{ color: '#666688', fontSize: '0.92rem', lineHeight: 1.7, marginTop: '1.5rem', maxWidth: 640, fontStyle: 'italic' }}>
            These signs do not indicate that the compound is ineffective or that your body has permanently adapted. They indicate that the 4-week receptor recovery window is needed. Treating these as signals to "push through" with dose increases typically worsens the desensitization rather than overcoming it.
          </p>
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
                  {openFaq === i ? <ChevronUp size={18} style={{ color: '#a78bfa', flexShrink: 0 }} /> : <ChevronDown size={18} style={{ color: '#888', flexShrink: 0 }} />}
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
          <div style={{ background: 'linear-gradient(135deg, #0a0a1e 0%, #0a0a14 100%)', borderRadius: 24, padding: '3.5rem', textAlign: 'center' }}>
            <div className="section-label" style={{ color: '#a78bfa', justifyContent: 'center' }}>Plan Your Year</div>
            <h2 style={{ color: '#ffffff', fontSize: '2rem', fontWeight: 900, marginBottom: '1rem' }}>
              Build Your <span className="gold-text">12-Month Protocol</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: 560, margin: '0 auto 2rem' }}>
              A full year of strategic peptide cycling delivers compounding results that no single cycle can match. Plan the calendar, source research-grade compounds, and execute consistently.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={AFFILIATE_BASE} target="_blank" rel="sponsored noopener noreferrer" className="btn-primary">
                Shop Peptides <ExternalLink size={14} />
              </a>
              <Link href="/epithalon-protocol-longevity-cycle" className="btn-secondary" style={{ color: 'rgba(255,255,255,0.75)', borderColor: 'rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.06)' }}>
                Epithalon Protocol <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        <RelatedLinks currentPath="/peptide-cycle-calendar" />
      </div>
    </div>
  )
}
