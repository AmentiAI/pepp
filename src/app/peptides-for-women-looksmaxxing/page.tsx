'use client'
import Link from 'next/link'
import { useState } from 'react'
import { ArrowRight, ExternalLink, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react'
import RelatedLinks from '@/components/RelatedLinks'
import { AFFILIATE_BASE } from '@/lib/products'

const cyclePhases = [
  { day: 'Days 1–5', name: 'Menstruation', color: '#fb923c', tip: 'Rest phase. Topical GHK-Cu and SNAP-8 daily. Avoid starting new injectable protocols. Focus on anti-inflammatory support.' },
  { day: 'Days 6–13', name: 'Follicular Phase', color: '#34d399', tip: 'Rising estrogen enhances GH sensitivity — ideal window for starting or resuming injectable GH secretagogues. Best response to CJC-1295/Ipamorelin in this phase. Body composition improvements more pronounced.' },
  { day: 'Day 14', name: 'Ovulation', color: '#d4a843', tip: 'Peak estrogen. GH pulse amplitude at monthly high. If administering IGF-1 LR3, this is the optimal cycle window — estrogen upregulates IGF-1 receptor density.' },
  { day: 'Days 15–28', name: 'Luteal Phase', color: '#a78bfa', tip: 'Rising progesterone may partially blunt GH receptor sensitivity. Maintain GH secretagogue protocol but do not initiate new compounds. Skin more reactive — reduce topical frequency if sensitivity increases.' },
]

const compounds = [
  {
    name: 'GHK-Cu',
    category: 'Skin & Hair',
    color: '#d4a843',
    femaleDose: '0.5mg topical daily, 0.5mg SC 3–4×/week',
    maleDose: '0.5–1mg topical daily, 1mg SC 3–5×/week',
    femaleNote: 'No sex-based differences in efficacy. Topical dose identical. Subcutaneous dose typically 20–30% lower due to bodyweight.',
    cycleDependent: false,
    priority: 'Critical',
    details: 'GHK-Cu is the most universally applicable looksmaxxing compound for women. Its collagen synthesis, skin repair, and hair follicle stimulation mechanisms operate independently of sex hormones. Women who are pregnant, breastfeeding, or using oral contraceptives should discuss with healthcare provider before starting subcutaneous protocols.',
  },
  {
    name: 'CJC-1295 / Ipamorelin',
    category: 'GH Axis',
    color: '#a78bfa',
    femaleDose: '100–150mcg Ipamorelin, 100mcg CJC-1295',
    maleDose: '200–300mcg Ipamorelin, 100–200mcg CJC-1295',
    femaleNote: 'Start at 100mcg Ipamorelin — women have higher natural GH pulse sensitivity. Assess tolerance before titrating to 150mcg. Follicular phase initiation preferred.',
    cycleDependent: true,
    priority: 'High',
    details: 'Women naturally produce GH in larger but more irregular pulses than men. GH secretagogues complement rather than replace this pattern. Estrogen is a positive modulator of GH axis sensitivity — meaning the same dose produces a stronger signal in women, especially in the follicular phase when estrogen is rising.',
  },
  {
    name: 'SNAP-8',
    category: 'Expression Lines',
    color: '#22d3ee',
    femaleDose: 'Topical daily to expression lines',
    maleDose: 'Topical daily to expression lines',
    femaleNote: 'Women typically develop expression lines earlier than men due to smaller subcutaneous fat volume in the dermis. SNAP-8 is often more impactful for women for this reason.',
    cycleDependent: false,
    priority: 'High',
    details: "Women's skin has 20–30% less sebaceous gland activity than men's, resulting in a thinner and drier dermis. This makes expression lines develop earlier and at less severe muscle contraction patterns. SNAP-8 topical applied nightly to crow's feet, forehead, and perioral lines reduces SNARE-mediated muscle contraction and limits line deepening.",
  },
  {
    name: 'Epithalon',
    category: 'Longevity',
    color: '#34d399',
    femaleDose: '10mg per day for 10 days, 2× per year',
    maleDose: '10mg per day for 10 days, 2× per year',
    femaleNote: 'Same protocol. Increasing relevance after 35, high priority after 40 when estrogen-driven circadian regulation begins declining toward perimenopause.',
    cycleDependent: false,
    priority: 'High at 35+',
    details: 'Epithalon benefits women specifically through its pineal gland action. Estrogen plays a protective role in circadian rhythm regulation throughout reproductive life. As estrogen declines in perimenopause and menopause, sleep quality, melatonin output, and circadian entrainment degrade more dramatically in women than men. Epithalon\'s restoration of pineal function addresses this sex-specific vulnerability directly.',
  },
  {
    name: 'Retatrutide / GLP-1',
    category: 'Metabolic',
    color: '#fb923c',
    femaleDose: 'Start at 2mg weekly (vs 4mg for men)',
    maleDose: 'Start at 4mg weekly',
    femaleNote: 'Women may experience stronger GLP-1 receptor response at lower doses. Start conservative. GLP-1 agonists do not affect reproductive hormones or fertility directly at standard doses.',
    cycleDependent: false,
    priority: 'Situational',
    details: 'For women whose primary looksmaxxing goal includes facial fat reduction (defining cheekbones, reducing buccal fat), GLP-1 agonists are highly effective. Women in the NEJM Retatrutide Phase 2 trial showed 22–26% total body weight reductions consistent with male cohort outcomes. The characteristic female fat distribution pattern (higher subcutaneous fat percentage) responds strongly to triple GLP-1/GIP/glucagon agonism.',
  },
]

const faqItems = [
  { q: 'Do women need lower peptide doses than men?', a: 'Yes — for most peptide compounds, female starting doses are 20–30% lower than male doses, primarily due to lower average body weight and higher baseline GH sensitivity. Women naturally produce GH in larger but more irregular pulses than men. GHK-Cu dosing is broadly similar between sexes. IGF-1 LR3 doses for women typically start at 20–30mcg versus 50–80mcg for men.' },
  { q: 'Is it safe to use peptides during menstrual cycle?', a: 'Topical peptides (GHK-Cu, SNAP-8) are considered safe throughout the entire cycle. For injectable GH secretagogues, the follicular phase (days 1–14) is generally preferred for initiation because estrogen levels are rising and positively modulate GH axis sensitivity. Avoid starting new injectable protocols during the luteal phase when progesterone dominates and may blunt GH receptor sensitivity.' },
  { q: 'Can women use Retatrutide for fat loss looksmaxxing?', a: 'Yes — and women may experience superior fat loss results with Retatrutide relative to men because women have a higher proportion of visceral and subcutaneous fat as a percentage of body mass, and triple GLP-1/GIP/glucagon agonism targets both depots effectively. Start at 2mg weekly and titrate at 2-week intervals. Women in the NEJM Phase 2 Retatrutide trial showed 22–26% body weight reductions consistent with male cohort outcomes.' },
  { q: 'What is the best peptide stack for women over 35?', a: 'After 35, female GH output begins declining more steeply as estrogen levels start shifting toward perimenopause. The highest-ROI stack for women 35+ is: GHK-Cu (skin, collagen, hair), CJC-1295/Ipamorelin at female doses (GH axis restoration), and Epithalon introduced at biannual 10-day cycles (telomere and pineal support). If body composition is a primary goal, add a low-dose GLP-1 agonist for metabolic support.' },
]

export default function PeptidesForWomenPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div style={{ background: '#ffffff', minHeight: '100vh' }}>

      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg, #0a0a14 0%, #12121f 50%, #0f0f1a 100%)', padding: '5rem 2rem 4rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', background: 'rgba(212,168,67,0.1)', border: '1px solid rgba(212,168,67,0.25)', borderRadius: 100, marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#d4a843', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Female-Specific Protocol</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', fontWeight: 900, color: '#ffffff', lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: '1.25rem' }}>
            Peptides for Women: Female Looksmaxxing Protocol, Dosing & Cycle Timing
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#9090a8', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: 720, margin: '0 auto 2.5rem' }}>
            Women respond differently to peptides than men. Estrogen cross-talk enhances GH axis sensitivity. Cycle timing determines optimal injection windows. Dermis thickness differences change topical response rates. Female-specific dosing, timing, and compound selection — all in one protocol.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={AFFILIATE_BASE} target="_blank" rel="sponsored noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '0.875rem 1.75rem', background: 'linear-gradient(135deg, #d4a843, #a07c2e)', color: '#000', fontWeight: 900, fontSize: '0.97rem', borderRadius: 12, textDecoration: 'none' }}>
              Shop Peptides <ExternalLink size={15} />
            </a>
            <Link href="/looksmaxxing-by-age" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '0.875rem 1.75rem', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: '#ffffff', fontWeight: 700, fontSize: '0.97rem', borderRadius: 12, textDecoration: 'none' }}>
              Protocol by Age <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div style={{ background: '#0e0e1a', padding: '2rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem' }}>
          {[
            { stat: '20–30%', label: 'Lower starting dose vs male protocols' },
            { stat: '2×', label: 'GH pulse frequency in women vs men' },
            { stat: '35', label: 'Age to introduce Epithalon for women' },
            { stat: '22–26%', label: 'Body weight loss in female Retatrutide trials' },
            { stat: 'Day 6', label: 'Optimal cycle day to start GH secretagogues' },
          ].map(s => (
            <div key={s.stat} style={{ textAlign: 'center', padding: '1rem' }}>
              <div style={{ fontSize: '2rem', fontWeight: 900, color: '#d4a843', letterSpacing: '-0.04em' }}>{s.stat}</div>
              <div style={{ fontSize: '0.78rem', color: '#60608080', marginTop: 4, lineHeight: 1.4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '4rem 2rem' }}>

        {/* Why women are different */}
        <section style={{ marginBottom: '5rem' }}>
          <div className="section-label">Biology First</div>
          <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)', fontWeight: 900, color: '#0a0a14', letterSpacing: '-0.03em', marginBottom: '1rem' }}>
            Why Applying a Male Peptide Protocol to Women Produces Suboptimal Results
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#555570', lineHeight: 1.85, marginBottom: '1.5rem' }}>
            The majority of published peptide protocol frameworks are derived from research conducted predominantly in male subjects. Women have meaningfully different pharmacodynamics for GH secretagogues, GLP-1 agonists, and even topical collagen peptides. Applying a standard male protocol without adjustment leads to two failure modes: over-dosing (producing side effects from compounds like IGF-1 LR3 that have narrower female therapeutic windows) or under-dosing relative to what is actually needed for the specific female biological context.
          </p>
          <p style={{ fontSize: '1.05rem', color: '#555570', lineHeight: 1.85, marginBottom: '1.5rem' }}>
            The most important structural difference is GH pulsatility. Women secrete GH in more frequent but smaller pulses than men, with roughly twice the pulse frequency. Estrogen enhances GH axis sensitivity through upregulation of hepatic GH receptors — meaning the same dose of CJC-1295/Ipamorelin produces a stronger IGF-1 response in an estrogen-replete woman than in a male with identical GH receptor density. This is why female protocols begin at lower doses and why cycle phase timing of GH secretagogue administration matters.
          </p>
          <p style={{ fontSize: '1.05rem', color: '#555570', lineHeight: 1.85, marginBottom: '1.5rem' }}>
            Dermis structure also differs between sexes. Women have less sebaceous gland activity, lower overall skin oil production, and thinner dermal layers — which means topical peptide penetration may actually be more efficient, but also means women develop certain expression lines earlier because the dermis has less natural padding. SNAP-8 for expression wrinkle reduction is often more impactful in women for exactly this reason.
          </p>
          <p style={{ fontSize: '1.05rem', color: '#555570', lineHeight: 1.85 }}>
            Body fat distribution creates a third difference: women store proportionally more subcutaneous fat (not just visceral) and in different anatomical locations. For looksmaxxing purposes, this means GLP-1 agonists for facial definition work through slightly different fat depot patterns — buccal fat, submental fat, and orbital fat respond at different rates than they do in men. The outcome (facial definition and jawline emergence) is the same, but the timeline and distribution of changes may differ.
          </p>
        </section>

        {/* Unique component: Menstrual cycle timing calendar */}
        <section style={{ marginBottom: '5rem' }}>
          <div className="section-label">Cycle Timing</div>
          <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)', fontWeight: 900, color: '#0a0a14', letterSpacing: '-0.03em', marginBottom: '0.75rem' }}>
            Menstrual Cycle-Aware Peptide Administration Protocol
          </h2>
          <p style={{ fontSize: '1rem', color: '#666688', lineHeight: 1.7, marginBottom: '2rem' }}>
            Hormone levels across the menstrual cycle create distinct windows where GH axis sensitivity, skin reactivity, and recovery rate differ. Align injectable peptide protocols with cycle phase to maximize efficacy and minimize side effects.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
            {cyclePhases.map(phase => (
              <div key={phase.day} style={{ background: '#f7f8fc', border: `1px solid ${phase.color}30`, borderTop: `3px solid ${phase.color}`, borderRadius: 16, padding: '1.5rem' }}>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, color: phase.color, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.3rem' }}>{phase.day}</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 900, color: '#0a0a14', marginBottom: '0.75rem' }}>{phase.name}</div>
                <p style={{ fontSize: '0.9rem', color: '#555570', lineHeight: 1.65 }}>{phase.tip}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '1rem', padding: '1rem 1.5rem', background: 'rgba(212,168,67,0.05)', border: '1px solid rgba(212,168,67,0.15)', borderRadius: 12 }}>
            <p style={{ fontSize: '0.9rem', color: '#666688', lineHeight: 1.65 }}>
              <strong style={{ color: '#d4a843' }}>Note:</strong> GHK-Cu topical, SNAP-8 topical, and Epithalon burst cycles are not cycle-phase dependent and can be administered consistently throughout the month. Only injectable GH secretagogues and IGF-1 LR3 benefit from follicular-phase preference timing.
            </p>
          </div>
        </section>

        {/* Compound table */}
        <section style={{ marginBottom: '5rem' }}>
          <div className="section-label">Female Dosing Reference</div>
          <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)', fontWeight: 900, color: '#0a0a14', letterSpacing: '-0.03em', marginBottom: '0.75rem' }}>
            Sex-Specific Dosing Reference: Female vs Male
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {compounds.map(c => (
              <div key={c.name} style={{ background: '#f7f8fc', border: '1px solid rgba(0,0,0,0.07)', borderRadius: 18, padding: '1.75rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.75rem' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <h3 style={{ fontSize: '1.15rem', fontWeight: 900, color: '#0a0a14' }}>{c.name}</h3>
                      <span style={{ fontSize: '0.72rem', fontWeight: 700, padding: '3px 10px', background: `${c.color}15`, color: c.color, borderRadius: 100 }}>{c.category}</span>
                    </div>
                    <div style={{ fontSize: '0.82rem', color: '#9090a8', marginTop: 3 }}>Priority: {c.priority} {c.cycleDependent ? '· Cycle-phase aware' : ''}</div>
                  </div>
                </div>
                <div className="rg-2col" style={{ gap: '1rem', marginBottom: '1rem' }}>
                  <div style={{ padding: '0.875rem', background: 'rgba(212,168,67,0.07)', border: '1px solid rgba(212,168,67,0.2)', borderRadius: 10 }}>
                    <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#d4a843', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.3rem' }}>Female Dose</div>
                    <div style={{ fontSize: '0.93rem', fontWeight: 700, color: '#0a0a14' }}>{c.femaleDose}</div>
                    <div style={{ fontSize: '0.8rem', color: '#666688', marginTop: '0.4rem', lineHeight: 1.5 }}>{c.femaleNote}</div>
                  </div>
                  <div style={{ padding: '0.875rem', background: 'rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.07)', borderRadius: 10 }}>
                    <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#9090a8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.3rem' }}>Male Dose (reference)</div>
                    <div style={{ fontSize: '0.93rem', color: '#666688' }}>{c.maleDose}</div>
                  </div>
                </div>
                <p style={{ fontSize: '0.93rem', color: '#555570', lineHeight: 1.7 }}>{c.details}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Starter stack */}
        <section style={{ marginBottom: '5rem', background: '#f7f8fc', borderRadius: 24, padding: '3rem' }}>
          <div className="section-label">Starter Protocol</div>
          <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)', fontWeight: 900, color: '#0a0a14', letterSpacing: '-0.03em', marginBottom: '1rem' }}>
            The Female Looksmaxxing Starter Stack
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#555570', lineHeight: 1.85, marginBottom: '1.5rem' }}>
            For women new to peptide protocols, begin topical-only for the first 4–6 weeks before adding any injectable compounds. This establishes baseline tolerance, provides clean data on topical response, and simplifies the initial learning curve.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
            {[
              { phase: 'Phase 1 (Weeks 1–6)', color: '#34d399', compounds: ['GHK-Cu topical 0.5mg/day — apply to face, neck, and scalp', 'SNAP-8 topical nightly to expression lines', 'Focus: establish skin baseline and tolerance'] },
              { phase: 'Phase 2 (Weeks 6–18)', color: '#d4a843', compounds: ['Add CJC-1295/Ipamorelin 100mcg each, pre-sleep, 5×/week', 'Initiate in follicular phase (day 6–13 of cycle)', 'Focus: body composition and GH axis support'] },
              { phase: 'Phase 3 (Month 6+)', color: '#a78bfa', compounds: ['Add Epithalon biannual 10-day cycle (if 35+)', 'Optional: BPC-157 if training volume is high', 'Optional: Low-dose GLP-1 if facial definition is goal'] },
            ].map(phase => (
              <div key={phase.phase} style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.07)', borderRadius: 14, padding: '1.5rem', borderTop: `3px solid ${phase.color}` }}>
                <div style={{ fontWeight: 700, fontSize: '0.97rem', color: '#0a0a14', marginBottom: '0.75rem' }}>{phase.phase}</div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {phase.compounds.map(c => (
                    <li key={c} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                      <CheckCircle size={13} style={{ color: phase.color, marginTop: 3, flexShrink: 0 }} />
                      <span style={{ fontSize: '0.87rem', color: '#555570', lineHeight: 1.55 }}>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section style={{ marginBottom: '4rem' }}>
          <div className="section-label">Research FAQ</div>
          <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)', fontWeight: 900, color: '#0a0a14', letterSpacing: '-0.03em', marginBottom: '2rem' }}>
            Female Peptide Questions Answered
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

        <section style={{ background: 'linear-gradient(135deg, #0a0a14, #12121f)', borderRadius: 24, padding: '3rem', textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 900, color: '#fff', marginBottom: '0.75rem' }}>Start the Female Looksmaxxing Stack</h2>
          <p style={{ color: '#9090a8', marginBottom: '2rem', maxWidth: 500, margin: '0 auto 2rem' }}>Third-party HPLC tested. Certificate of Analysis with every order.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={AFFILIATE_BASE} target="_blank" rel="sponsored noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '1rem 2rem', background: 'linear-gradient(135deg, #d4a843, #a07c2e)', color: '#000', fontWeight: 900, fontSize: '1rem', borderRadius: 12, textDecoration: 'none' }}>
              Shop All Peptides <ExternalLink size={16} />
            </a>
            <Link href="/skin-texture-pore-peptides" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '1rem 2rem', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', fontWeight: 700, borderRadius: 12, textDecoration: 'none', fontSize: '1rem' }}>
              Skin Texture Protocol <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        <RelatedLinks currentPath="/peptides-for-women-looksmaxxing" />
      </div>
    </div>
  )
}
