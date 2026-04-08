'use client'
import Link from 'next/link'
import { useState } from 'react'
import { ArrowRight, ExternalLink, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react'
import RelatedLinks from '@/components/RelatedLinks'
import { AFFILIATE_BASE } from '@/lib/products'

const ageBrackets = [
  {
    label: '20s',
    range: 'Ages 18–29',
    color: '#34d399',
    tagline: 'Amplify a robust baseline',
    description: 'In your 20s, GH output is at its lifetime peak — roughly 500–700mcg/day secreted. Collagen synthesis is still high. The goal here is optimization and foundation-setting, not restoration.',
    biologicalContext: [
      'GH output: ~500–700mcg/day (peak lifetime levels)',
      'Collagen synthesis: high, but UV and oxidative stress begin accumulating',
      'Telomere attrition rate: low — Epithalon not a priority yet',
      'Body fat distribution: easiest decade for body recomposition',
      'Recovery capacity: fastest — BPC-157 prevents injury from high training loads',
    ],
    stack: [
      { compound: 'GHK-Cu (topical)', role: 'Skin quality baseline — establish before damage accumulates', priority: 'High' },
      { compound: 'CJC-1295 / Ipamorelin', role: 'Amplify existing GH output for body composition', priority: 'High' },
      { compound: 'BPC-157', role: 'Joint and tissue maintenance under high training volume', priority: 'Medium' },
      { compound: 'IGF-1 LR3 (optional)', role: 'Body recomposition if hypertrophy is primary goal', priority: 'Optional' },
      { compound: 'Epithalon', role: 'Skip — low ROI before 35', priority: 'Low' },
    ],
    expectedResults: 'Body composition changes within 8–12 weeks. Skin quality improvement (texture, glow) within 6–10 weeks. Hair improvement with scalp GHK-Cu from week 10+.',
    monthlyBudget: '$80–150',
  },
  {
    label: '30s',
    range: 'Ages 30–39',
    color: '#d4a843',
    tagline: 'Counter the first measurable declines',
    description: 'GH output has declined 14–20% from peak by age 30. Collagen synthesis is down 1–1.5% per year since age 25. Fine lines become visible. This decade determines your 40s baseline.',
    biologicalContext: [
      'GH output: ~420–560mcg/day — 14–20% below peak by age 35',
      'Collagen: down ~8–15% from peak by age 35',
      'Skin elasticity: first measurable decline in elastin cross-linking',
      'Muscle protein synthesis efficiency: beginning to decline at ~1% per year',
      'Telomere attrition: beginning to accelerate — Epithalon becomes worthwhile at 35+',
    ],
    stack: [
      { compound: 'GHK-Cu (topical + systemic)', role: 'Offset collagen synthesis decline proactively', priority: 'Critical' },
      { compound: 'CJC-1295 / Ipamorelin', role: 'Restore GH output toward 20s baseline', priority: 'Critical' },
      { compound: 'SNAP-8 (topical)', role: 'Address emerging fine lines before they deepen', priority: 'High' },
      { compound: 'BPC-157', role: 'Recovery maintenance — recovery speed begins declining', priority: 'High' },
      { compound: 'Epithalon (from age 35)', role: 'Biannual 10-day cycles — begin telomere support', priority: 'Medium' },
      { compound: 'Retatrutide / GLP-1 (if fat loss goal)', role: 'Metabolic support as fat accumulation rate increases', priority: 'Situational' },
    ],
    expectedResults: 'Significant reduction in fine line progression within 12 weeks. Body composition improvement comparable to 20s with GH secretagogue support. Hair quality improvement with GHK-Cu.',
    monthlyBudget: '$120–220',
  },
  {
    label: '40s',
    range: 'Ages 40–49',
    color: '#a78bfa',
    tagline: 'Active restoration becomes primary',
    description: 'By 40, GH output is roughly 40–50% of peak. Collagen is down 20–25%. Perimenopause begins affecting women. This is the decade where the peptide advantage becomes most visible.',
    biologicalContext: [
      'GH output: ~300–400mcg/day — roughly half of peak',
      'Collagen: down 20–25% from peak — visible in skin laxity and texture',
      'Bone density: begins measurable decline, especially in women',
      'Muscle mass: losing 0.5–1% per year without intervention (sarcopenia onset)',
      'Telomere length: ~10–15% shortened from young adult — Epithalon high priority',
    ],
    stack: [
      { compound: 'GHK-Cu (topical + systemic)', role: 'Collagen restoration — working against real deficit now', priority: 'Critical' },
      { compound: 'CJC-1295 / Ipamorelin', role: 'GH restoration from 50% deficit baseline', priority: 'Critical' },
      { compound: 'Epithalon (biannual)', role: 'Telomere maintenance and pineal restoration', priority: 'Critical' },
      { compound: 'SNAP-8 (topical daily)', role: 'Expression line management — deeper wrinkles forming', priority: 'Critical' },
      { compound: 'IGF-1 LR3', role: 'Combat sarcopenia onset and preserve lean mass', priority: 'High' },
      { compound: 'BPC-157', role: 'Joint recovery — accumulating wear and tear', priority: 'High' },
      { compound: 'NAD+ (if adding)', role: 'Sirtuin pathway support — significant longevity ROI in 40s', priority: 'High' },
    ],
    expectedResults: 'Highly visible improvements because baseline is more depleted. Users in their 40s on full stacks often report the most dramatic subjective improvements — skin, energy, body composition, sleep quality all show change within 12–16 weeks.',
    monthlyBudget: '$200–350',
  },
  {
    label: '50s+',
    range: 'Ages 50 and over',
    color: '#22d3ee',
    tagline: 'Combat real biological aging across all systems',
    description: 'GH is at roughly 40% of peak. Collagen down 35–45%. Telomeres shortened 20–25%. Women are post-menopausal — estrogen-driven skin protection is gone. Men experience andropause. The biological case for a comprehensive stack is strongest here.',
    biologicalContext: [
      'GH output: ~200–280mcg/day — 40–55% of peak',
      'Collagen: down 35–45% from peak — significant visible skin laxity',
      'Telomere length: ~20–25% shorter than young adult baseline',
      'Bone density: accelerated loss, especially women post-menopause',
      'NAD+ levels: reduced 40–50% from young adult, driving mitochondrial decline',
    ],
    stack: [
      { compound: 'GHK-Cu (topical + systemic)', role: 'Maximum dose collagen restoration', priority: 'Critical' },
      { compound: 'CJC-1295 / Ipamorelin', role: 'GH restoration from severe deficit', priority: 'Critical' },
      { compound: 'Epithalon (biannual)', role: 'Telomere length maintenance — highest ROI at 50+', priority: 'Critical' },
      { compound: 'NAD+', role: 'Mitochondrial function, sirtuin activation, cellular energy', priority: 'Critical' },
      { compound: 'SNAP-8 (topical daily)', role: 'Deep expression line management', priority: 'High' },
      { compound: 'BPC-157', role: 'Systemic repair support and GH receptor upregulation', priority: 'High' },
      { compound: 'IGF-1 LR3', role: 'Anti-sarcopenic — lean mass preservation critical now', priority: 'High' },
    ],
    expectedResults: 'Khavinson\'s Epithalon research included subjects aged 60–80 showing telomere elongation, improved melatonin profiles, and reduced biomarkers of aging. GH secretagogues produce more dramatic baseline-relative improvements in the 50s than any other decade.',
    monthlyBudget: '$280–450',
  },
]

const faqItems = [
  { q: 'What is the best peptide stack for someone in their 20s?', a: 'In your 20s, the highest-ROI stack is GHK-Cu topical for skin quality, CJC-1295/Ipamorelin for body composition, and BPC-157 for joint maintenance under high training loads. Skip Epithalon — telomere attrition is low in your 20s and the compound is better deployed from age 35 onward when the biological payoff is highest.' },
  { q: 'Do peptides work less effectively as you get older?', a: 'No — in many cases, peptides provide more measurable benefit as you age because you are working against a steeper baseline deficit. A 45-year-old using CJC-1295/Ipamorelin elevates GH from a 50% depleted baseline, producing more noticeable changes in body composition and skin quality than a 25-year-old amplifying an already-robust output.' },
  { q: 'When should I add Epithalon to my stack?', a: 'Epithalon is most strategically deployed starting in your mid-to-late 30s, when telomere attrition rate begins accelerating and pineal melatonin output measurably declines. Before 35, the ROI of Epithalon is lower. After 35–40, biannual 10-day Epithalon cycles provide meaningful intervention in the two biological clocks most affecting aesthetic aging: cellular senescence and circadian rhythm degradation.' },
  { q: 'Can someone over 50 achieve meaningful results with peptides?', a: "Yes — and with more dramatic baseline-relative changes than younger users. Khavinson's Epithalon research includes subjects in their 60s and 70s showing telomere elongation, improved sleep architecture, and reduced biomarkers of cellular aging. GH secretagogues at 50+ are addressing a real and severe GH deficit, producing highly visible body composition, skin, and energy improvements." },
]

export default function LooksmaxxingByAgePage() {
  const [activeTab, setActiveTab] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const bracket = ageBrackets[activeTab]

  return (
    <div style={{ background: '#ffffff', minHeight: '100vh' }}>

      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg, #0a0a14 0%, #12121f 50%, #0f0f1a 100%)', padding: '5rem 2rem 4rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', background: 'rgba(212,168,67,0.1)', border: '1px solid rgba(212,168,67,0.25)', borderRadius: 100, marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#d4a843', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Age-Calibrated Protocol</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', fontWeight: 900, color: '#ffffff', lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: '1.25rem' }}>
            Looksmaxxing Peptides by Age: The Decade-by-Decade Protocol Guide
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#9090a8', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: 720, margin: '0 auto 2.5rem' }}>
            GH output declines 14% per decade. Collagen synthesis falls 1.5% annually after 25. Your optimal peptide stack is different at 25 than at 45 — and using a 20-year-old's stack at 45 leaves the most important compounds off the table.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/looksmaxxing" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '0.875rem 1.75rem', background: 'linear-gradient(135deg, #d4a843, #a07c2e)', color: '#000', fontWeight: 900, fontSize: '0.97rem', borderRadius: 12, textDecoration: 'none' }}>
              Full Looksmaxxing Guide <ArrowRight size={15} />
            </Link>
            <Link href="/looksmaxxing-starter-stack-budget" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '0.875rem 1.75rem', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: '#ffffff', fontWeight: 700, fontSize: '0.97rem', borderRadius: 12, textDecoration: 'none' }}>
              Budget Stack Guide <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div style={{ background: '#0e0e1a', padding: '2rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem' }}>
          {[
            { stat: '14%', label: 'GH decline per decade after 20' },
            { stat: '1.5%', label: 'Annual collagen loss after age 25' },
            { stat: '40%', label: 'GH output remaining at age 50' },
            { stat: '4×', label: 'More visible results in 40s vs 20s' },
            { stat: '35', label: 'Optimal age to start Epithalon' },
          ].map(s => (
            <div key={s.stat} style={{ textAlign: 'center', padding: '1rem' }}>
              <div style={{ fontSize: '2rem', fontWeight: 900, color: '#d4a843', letterSpacing: '-0.04em' }}>{s.stat}</div>
              <div style={{ fontSize: '0.78rem', color: '#60608080', marginTop: 4, lineHeight: 1.4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '4rem 2rem' }}>

        {/* Why age matters intro */}
        <section style={{ marginBottom: '4rem' }}>
          <div className="section-label">Why Age Matters</div>
          <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)', fontWeight: 900, color: '#0a0a14', letterSpacing: '-0.03em', marginBottom: '1rem' }}>
            The Biology of Aesthetic Aging — What Actually Changes by Decade
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#555570', lineHeight: 1.85, marginBottom: '1.5rem' }}>
            Aesthetic aging is not one process. It is the convergence of at least six parallel biological trajectories: growth hormone output decline, collagen and elastin matrix degradation, telomere attrition, cellular NAD+ depletion, mitochondrial efficiency reduction, and inflammatory signaling upregulation. Each trajectory has a different timeline and a different optimal peptide intervention window.
          </p>
          <p style={{ fontSize: '1.05rem', color: '#555570', lineHeight: 1.85, marginBottom: '1.5rem' }}>
            The fundamental mistake in looksmaxxing peptide protocols is treating age as irrelevant and applying a generic stack regardless of biological context. A 22-year-old does not need Epithalon — their telomeres are still long. A 48-year-old running only topical GHK-Cu is leaving 80% of the available biology on the table. Calibrating your stack to your decade maximizes ROI on every compound.
          </p>
          <p style={{ fontSize: '1.05rem', color: '#555570', lineHeight: 1.85 }}>
            Use the decade selector below to see the age-appropriate stack, biological context, expected results, and budget framework for your current phase. Then use the protocol as a baseline — add or remove compounds based on your specific goals (body composition, skin, hair, longevity) and budget constraints.
          </p>
        </section>

        {/* Unique component: Age bracket tabs */}
        <section style={{ marginBottom: '5rem' }}>
          <div className="section-label">Decade Selector</div>
          <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)', fontWeight: 900, color: '#0a0a14', letterSpacing: '-0.03em', marginBottom: '2rem' }}>
            Your Age-Specific Peptide Protocol
          </h2>
          {/* Tabs */}
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', background: '#f7f8fc', padding: '0.5rem', borderRadius: 14, border: '1px solid rgba(0,0,0,0.07)' }}>
            {ageBrackets.map((b, i) => (
              <button key={b.label} onClick={() => setActiveTab(i)} style={{ flex: 1, padding: '0.75rem 0.5rem', borderRadius: 10, border: 'none', cursor: 'pointer', fontWeight: 700, fontSize: '1rem', background: activeTab === i ? b.color : 'transparent', color: activeTab === i ? '#0a0a14' : '#9090a8', transition: 'all 0.2s' }}>
                {b.label}
                <div style={{ fontSize: '0.7rem', fontWeight: 500, marginTop: 2, color: activeTab === i ? 'rgba(0,0,0,0.6)' : '#9090a8' }}>{b.range}</div>
              </button>
            ))}
          </div>

          {/* Active bracket content */}
          <div style={{ background: '#f7f8fc', borderRadius: 20, border: '1px solid rgba(0,0,0,0.07)', padding: '2.5rem', borderTop: `3px solid ${bracket.color}` }}>
            <div className="rg-2col" style={{ gap: '2.5rem', marginBottom: '2rem' }}>
              <div>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, color: bracket.color, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Strategy for {bracket.range}</div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#0a0a14', marginBottom: '0.75rem' }}>{bracket.tagline}</h3>
                <p style={{ fontSize: '0.97rem', color: '#555570', lineHeight: 1.75 }}>{bracket.description}</p>
              </div>
              <div>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#9090a8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>Biological Context</div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {bracket.biologicalContext.map(ctx => (
                    <li key={ctx} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                      <div style={{ width: 5, height: 5, borderRadius: '50%', background: bracket.color, marginTop: 7, flexShrink: 0 }} />
                      <span style={{ fontSize: '0.9rem', color: '#555570', lineHeight: 1.55 }}>{ctx}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#9090a8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>Recommended Stack</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {bracket.stack.map(item => (
                  <div key={item.compound} style={{ display: 'grid', gridTemplateColumns: '200px 1fr 100px', gap: '1rem', padding: '0.75rem 1rem', background: '#fff', borderRadius: 10, border: '1px solid rgba(0,0,0,0.06)', alignItems: 'center' }}>
                    <div style={{ fontWeight: 700, fontSize: '0.93rem', color: '#0a0a14' }}>{item.compound}</div>
                    <div style={{ fontSize: '0.87rem', color: '#666688' }}>{item.role}</div>
                    <div style={{ textAlign: 'right' }}>
                      <span style={{ fontSize: '0.72rem', fontWeight: 700, padding: '3px 10px', borderRadius: 100, background: item.priority === 'Critical' ? 'rgba(212,168,67,0.15)' : item.priority === 'High' ? 'rgba(52,211,153,0.12)' : item.priority === 'Medium' ? 'rgba(167,139,250,0.12)' : 'rgba(144,144,168,0.1)', color: item.priority === 'Critical' ? '#d4a843' : item.priority === 'High' ? '#34d399' : item.priority === 'Medium' ? '#a78bfa' : '#9090a8' }}>
                        {item.priority}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rg-2col" style={{ gap: '1rem' }}>
              <div style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.07)', borderRadius: 12, padding: '1rem 1.25rem' }}>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#9090a8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>Expected Results</div>
                <p style={{ fontSize: '0.9rem', color: '#555570', lineHeight: 1.6 }}>{bracket.expectedResults}</p>
              </div>
              <div style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.07)', borderRadius: 12, padding: '1rem 1.25rem' }}>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#9090a8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>Monthly Budget</div>
                <div style={{ fontSize: '2rem', fontWeight: 900, color: bracket.color, letterSpacing: '-0.03em' }}>{bracket.monthlyBudget}</div>
                <div style={{ fontSize: '0.82rem', color: '#9090a8' }}>per cycle</div>
              </div>
            </div>
          </div>
        </section>

        {/* Universal truth section */}
        <section style={{ marginBottom: '5rem' }}>
          <div className="section-label">Universal Principles</div>
          <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)', fontWeight: 900, color: '#0a0a14', letterSpacing: '-0.03em', marginBottom: '1rem' }}>
            What Stays Constant Regardless of Age
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#555570', lineHeight: 1.85, marginBottom: '1.5rem' }}>
            While compound selection and dosing strategy shift by decade, three principles remain constant across all age groups: compound-specific cycling (GH secretagogues 12 weeks on, 4 weeks off — receptor desensitization is age-independent), fasted pre-sleep GH secretagogue timing (insulin antagonism of GH is age-independent), and topical GHK-Cu as a foundational non-cycled daily compound (no receptor downregulation mechanism, benefits are cumulative regardless of age).
          </p>
          <p style={{ fontSize: '1.05rem', color: '#555570', lineHeight: 1.85, marginBottom: '1.5rem' }}>
            The other constant is that results are always relative to your baseline. A 50-year-old with significantly depleted GH, collagen, and telomere baseline will see more dramatic baseline-relative changes from the same compounds than a 25-year-old who is amplifying an already-robust system. This is not a consolation — it is a genuine advantage that older users have in interpreting their results.
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            <Link href="/peptide-cycle-calendar" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '0.75rem 1.5rem', background: 'rgba(212,168,67,0.1)', border: '1px solid rgba(212,168,67,0.25)', color: '#d4a843', borderRadius: 10, textDecoration: 'none', fontWeight: 700, fontSize: '0.93rem' }}>
              Cycle Calendar Guide <ArrowRight size={14} />
            </Link>
            <Link href="/epithalon-protocol-longevity-cycle" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '0.75rem 1.5rem', background: 'rgba(167,139,250,0.1)', border: '1px solid rgba(167,139,250,0.25)', color: '#a78bfa', borderRadius: 10, textDecoration: 'none', fontWeight: 700, fontSize: '0.93rem' }}>
              Epithalon Protocol <ArrowRight size={14} />
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ marginBottom: '4rem' }}>
          <div className="section-label">Research FAQ</div>
          <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)', fontWeight: 900, color: '#0a0a14', letterSpacing: '-0.03em', marginBottom: '2rem' }}>
            Age & Peptide Questions Answered
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {faqItems.map((item, i) => (
              <div key={i} style={{ border: '1px solid rgba(0,0,0,0.08)', borderRadius: 14, overflow: 'hidden' }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.25rem 1.5rem', background: openFaq === i ? '#f7f8fc' : '#fff', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
                  <span style={{ fontWeight: 700, color: '#0a0a14', fontSize: '1rem', lineHeight: 1.4, paddingRight: '1rem' }}>{item.q}</span>
                  {openFaq === i ? <ChevronUp size={18} style={{ color: '#d4a843', flexShrink: 0 }} /> : <ChevronDown size={18} style={{ color: '#9090a8', flexShrink: 0 }} />}
                </button>
                {openFaq === i && (
                  <div style={{ padding: '0 1.5rem 1.5rem', background: '#f7f8fc' }}>
                    <p style={{ fontSize: '0.97rem', color: '#555570', lineHeight: 1.8 }}>{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: 'linear-gradient(135deg, #0a0a14, #12121f)', borderRadius: 24, padding: '3rem', textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 900, color: '#fff', marginBottom: '0.75rem' }}>Build Your Age-Calibrated Stack</h2>
          <p style={{ color: '#9090a8', marginBottom: '2rem', maxWidth: 500, margin: '0 auto 2rem' }}>All compounds third-party HPLC tested. Certificate of Analysis with every order.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={AFFILIATE_BASE} target="_blank" rel="sponsored noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '1rem 2rem', background: 'linear-gradient(135deg, #d4a843, #a07c2e)', color: '#000', fontWeight: 900, fontSize: '1rem', borderRadius: 12, textDecoration: 'none' }}>
              Shop All Peptides <ExternalLink size={16} />
            </a>
            <Link href="/looksmaxxing-peptide-stack-protocol" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '1rem 2rem', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', fontWeight: 700, borderRadius: 12, textDecoration: 'none', fontSize: '1rem' }}>
              Full Stack Protocol <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        <RelatedLinks currentPath="/looksmaxxing-by-age" />
      </div>
    </div>
  )
}
