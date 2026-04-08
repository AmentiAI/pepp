'use client'
import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, ExternalLink, Clock, Sun, Moon, Zap, AlertCircle, ChevronDown, ChevronUp, Activity } from 'lucide-react'
import { AFFILIATE_BASE } from '@/lib/products'
import RelatedLinks from '@/components/RelatedLinks'

const timelineSlots = [
  {
    time: '6–7 AM',
    label: 'Wake Up',
    color: '#fb923c',
    icon: <Sun size={20} />,
    bgColor: 'rgba(251,146,60,0.08)',
    borderColor: 'rgba(251,146,60,0.3)',
    items: [
      'Do NOT eat immediately — GH secretagogue fasting window should be maintained through morning',
      'Drink 500ml water with electrolytes on waking',
      'Check last night\'s GH secretagogue timing (should be 9–10 hours prior)',
      'Light movement or stretching — does not break fasting window for peptide purposes',
    ],
    note: 'This window is about protecting the overnight GH pulse — not disrupting it with early insulin spikes.',
  },
  {
    time: '8–9 AM',
    label: 'Morning Protocol',
    color: '#d4a843',
    icon: <Zap size={20} />,
    bgColor: 'rgba(212,168,67,0.08)',
    borderColor: 'rgba(212,168,67,0.3)',
    items: [
      'Cleanse face thoroughly — remove any overnight serum residue',
      'Apply GHK-Cu topical serum to face, neck, and décolletage on clean dry skin',
      'Apply SNAP-8 serum to expression zones: forehead, crow\'s feet, glabellar — leave 5 minutes to absorb',
      'SPF 30–50 on top of all topicals — UV is the primary collagen degradation mechanism',
      'First meal window opens here — ideal for protein-forward breakfast',
    ],
    note: 'Topicals absorb best on freshly cleansed skin before any oils, moisturizers, or makeup. Apply peptide serums first, actives second, moisturizer third.',
  },
  {
    time: '12–1 PM',
    label: 'Midday / Pre-Workout',
    color: '#22d3ee',
    icon: <Activity size={20} />,
    bgColor: 'rgba(34,211,238,0.08)',
    borderColor: 'rgba(34,211,238,0.25)',
    items: [
      'BPC-157 administration (if using) — timing is flexible, pre-workout is ideal for active injury sites',
      'Pre-workout nutrition window — stop eating 2–3 hours before pre-sleep GH secretagogue if training ends before 6 PM',
      'Hydration maintenance — peptide transport to target tissues is hydration-dependent',
      'GLP-1 agonists (Retatrutide, Semaglutide, etc.) if on weekly dosing — any day of the week, any time',
    ],
    note: 'BPC-157 is the most timing-flexible peptide in any stack. Administer it when convenient relative to any active injury sites — morning or midday both work well.',
  },
  {
    time: '7–8 PM',
    label: 'Evening',
    color: '#a78bfa',
    icon: <Clock size={20} />,
    bgColor: 'rgba(167,139,250,0.08)',
    borderColor: 'rgba(167,139,250,0.25)',
    items: [
      'Final meal of the day — must be completed by this window to allow 2–3 hour fast before GH secretagogue',
      'This is your protein optimization window — prioritize leucine-rich protein sources for overnight muscle protein synthesis',
      'Begin winding down light exposure — blue light suppresses melatonin, which is foundational to GH pulse timing',
      'Evening cleanse if heavy makeup or SPF worn — prepares skin for overnight peptide applications',
    ],
    note: 'Insulin and GH are antagonistic hormones. The final meal timing here determines how clean your pre-sleep GH window will be. A 2.5–3 hour gap is the minimum.',
  },
  {
    time: '9–10 PM',
    label: 'Pre-Sleep Protocol',
    color: '#34d399',
    icon: <Moon size={20} />,
    bgColor: 'rgba(52,211,153,0.08)',
    borderColor: 'rgba(52,211,153,0.25)',
    items: [
      'Cleanse face — overnight application of GHK-Cu works best on clean skin',
      'Apply GHK-Cu topical serum — higher concentration overnight application if available',
      'Administer GH secretagogues subcutaneously (CJC-1295 + Ipamorelin or equivalent) — fasted, 2–3+ hours post-last-meal',
      'Epithalon if on a 10-day cycle — also pre-sleep timing for pineal/circadian synergy',
      'Magnesium glycinate 200–400mg — supports deep NREM sleep architecture (the GH-dominant sleep phase)',
    ],
    note: 'This is the highest-leverage window in the daily protocol. GH secretagogues must be administered fasted and pre-sleep to amplify the body\'s own natural GH pulse. Eating after this point negates the effect.',
  },
  {
    time: '10–11 PM',
    label: 'Sleep',
    color: '#60a5fa',
    icon: <Moon size={20} />,
    bgColor: 'rgba(96,165,250,0.08)',
    borderColor: 'rgba(96,165,250,0.25)',
    items: [
      'Target 7–9 hours of sleep — GH pulse amplitude scales directly with sleep duration and NREM quality',
      'Cool room temperature (65–68°F / 18–20°C) enhances deep sleep architecture',
      'Darkness and minimal light exposure — melatonin → serotonin → sleep architecture cascade',
      'Avoid sleep disruptions in the first 90 minutes — this is when the primary GH pulse occurs',
    ],
    note: 'Skin cell turnover peaks at night. GHK-Cu applied pre-sleep enters a tissue environment primed for regeneration — overnight is genuinely the highest-efficacy application window for collagen gene modulation.',
  },
]

const compoundTimingRules = [
  { compound: 'GHK-Cu (topical)', timing: 'Morning + Evening', rule: 'On clean skin before other products. UV protection required in AM.', flexible: false },
  { compound: 'SNAP-8 (topical)', timing: 'Morning (expression zones)', rule: 'Forehead, crow\'s feet, glabellar area. Allow 5 min to absorb before SPF.', flexible: false },
  { compound: 'BPC-157', timing: 'Flexible — AM or midday', rule: 'No fasting requirement. Administer near target injury site if site-specific use.', flexible: true },
  { compound: 'CJC-1295 / Ipamorelin', timing: 'Pre-sleep only', rule: 'MUST be fasted 2–3+ hours. Pre-sleep timing aligns with natural GH pulse.', flexible: false },
  { compound: 'Epithalon', timing: 'Pre-sleep (10-day cycles)', rule: 'Evening administration for circadian/pineal synergy. Twice yearly cycles.', flexible: false },
  { compound: 'GLP-1 agonists', timing: 'Once weekly, any time', rule: 'No timing constraints. Same day each week for consistency.', flexible: true },
  { compound: 'IGF-1 LR3', timing: 'Post-workout or AM', rule: 'Most effective when administered post-exercise or in AM fasted state.', flexible: false },
  { compound: 'TB-500', timing: 'Flexible — 2–3x/week', rule: 'Systemic — no strict timing requirement. Consistent dosing interval matters more than time of day.', flexible: true },
]

const faqs = [
  {
    q: 'Why is timing as important as the compounds themselves?',
    a: 'For GH secretagogues, timing is pharmacologically determinative — not just a preference. Administering CJC-1295/Ipamorelin in a fed state (high circulating insulin) results in dramatically blunted GH release because insulin and GH are antagonistic hormones. Clinical data shows that insulin levels of 40–60 mIU/L can suppress GH release by 50–70%. A correctly timed fasted pre-sleep dose can amplify the natural GH pulse 4–8×. A poorly timed fed dose may amplify it by less than 1.5×. The same compound, administered 3 hours differently, produces a 4–6× difference in response. For topicals, timing determines whether you are applying to clean, receptive skin or to skin covered in SPF, oils, and prior products that reduce absorption.',
  },
  {
    q: 'Can I administer GH secretagogues in the morning instead of pre-sleep?',
    a: 'Morning GH secretagogue administration is suboptimal for two reasons. First, morning dosing misses the body\'s own natural GH pulse, which peaks 60–90 minutes after sleep onset in the deep NREM phase — peptides amplify an existing pulse most effectively when they overlap with the natural pulsatility window. Second, morning administration typically occurs in a fed or semi-fed state, with residual insulin from prior meals attenuating the response. Pre-sleep fasted administration leverages both the natural GH pulse timing AND the low-insulin environment of an overnight fast. Some advanced users add a second morning fasted dose, but pre-sleep should always be the primary administration time.',
  },
  {
    q: 'How strictly do I need to follow the fasting window before GH secretagogues?',
    a: 'The minimum is 2 hours post-last-meal. At 2 hours, insulin levels are declining but may not be fully basal in carbohydrate-sensitive individuals. The optimal window is 3+ hours, at which point most people have returned to near-basal insulin levels. If your last meal was high in refined carbohydrates or contained >60g of carbs, allow the full 3 hours or more. The easiest way to ensure compliance is to make your last meal a moderate-protein, lower-carbohydrate dinner before 7 PM, then administer GH secretagogues at 9:30–10 PM — giving a comfortable 2.5–3 hour window without effort.',
  },
  {
    q: 'What if my schedule doesn\'t allow for a 10 PM pre-sleep administration?',
    a: 'The 9–10 PM window is illustrative for a standard schedule. The principle is: administer GH secretagogues as close to your actual sleep onset as possible, in a fasted state, consistently. If you sleep at midnight, administer at 10:30–11 PM. If you sleep at 9 PM, administer at 7:30–8 PM. The non-negotiable elements are: (1) fasted state, (2) within ~60 minutes of planned sleep onset. The specific clock time is irrelevant — the biological relationship between administration, sleep onset, and the GH pulse is what matters.',
  },
  {
    q: 'Do topical peptides need to be applied daily or can I skip days?',
    a: 'Daily topical application produces the most consistent gene expression signaling. GHK-Cu works through cumulative gene upregulation — fibroblasts respond to sustained receptor activation, not intermittent bolus exposure. Missing occasional days does not undo progress, but consistent daily application is meaningfully superior to irregular application at higher doses. If you must simplify the protocol, morning application of GHK-Cu is the single highest-ROI daily action. SNAP-8 can be applied to expression zones once daily in the morning as a convenient combined step.',
  },
  {
    q: 'What is the weekly schedule structure for daily vs weekly compounds?',
    a: 'Think of compounds in three categories: (1) Daily — GHK-Cu topical, SNAP-8 topical. These are applied every morning without cycling. (2) Frequent — BPC-157 administered daily to every-other-day during active injury or recovery periods, typically for 4–8 week cycles. GH secretagogues 5 nights per week (take weekends off, or cycle 5 on / 2 off). (3) Weekly — GLP-1 agonists once weekly on a fixed day. Epithalon in 10-day concentrated cycles twice yearly. IGF-1 LR3 daily during 4-week on cycles. The weekly schedule has topicals running continuously while injectable peptides follow structured on/off patterns for receptor sensitivity management.',
  },
]

export default function PeptideLooksmaxxingDailyRoutinePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div style={{ background: '#ffffff', minHeight: '100vh' }}>

      {/* Hero */}
      <div style={{
        background: 'linear-gradient(160deg, #0a1a0f 0%, #071210 50%, #050a0a 100%)',
        padding: '5.5rem 2rem 5rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          background: 'radial-gradient(ellipse 60% 50% at 30% 50%, rgba(34,211,238,0.09) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
          <div style={{ maxWidth: 820 }}>
            <div className="section-label" style={{ color: '#22d3ee' }}>Daily Protocol</div>
            <h1 className="heading-xl" style={{ color: '#ffffff', marginBottom: '1.25rem' }}>
              Peptide Looksmaxxing <span className="gold-text">Daily Routine</span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: 680 }}>
              A 24-hour administration schedule for every compound in a looksmaxxing stack — with the timing rationale that determines whether you get a 4× or 1× response from the same peptides.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: '2rem' }}>
              <a href={AFFILIATE_BASE} target="_blank" rel="sponsored noopener noreferrer" className="btn-primary">
                View Peptides <ExternalLink size={14} />
              </a>
              <Link href="/peptide-stacking-guide-beginners" className="btn-secondary" style={{ color: 'rgba(255,255,255,0.75)', borderColor: 'rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.05)' }}>
                Stacking Guide <ArrowRight size={14} />
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
            { val: '4–8×', label: 'GH pulse amplification when correctly timed' },
            { val: '60–90min', label: 'After sleep onset — peak GH pulse window' },
            { val: '2–3 hrs', label: 'Fasting minimum before GH secretagogues' },
            { val: '50–70%', label: 'GH blunting from elevated insulin (40–60 mIU/L)' },
          ].map(s => (
            <div key={s.label}>
              <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#22d3ee', letterSpacing: '-0.03em' }}>{s.val}</div>
              <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)', marginTop: 2 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>

        {/* Why Timing Matters */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label">Foundational Principle</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '1.25rem' }}>
            Why Timing Is as Important as <span className="gold-text">Compound Selection</span>
          </h2>
          <div className="rg-2col" style={{ gap: '4rem' }}>
            <div>
              <p style={{ color: '#444458', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '1.05rem' }}>
                Most discussions about peptide protocols focus on which compounds to use and at what doses. This is the wrong question to optimize first. For growth hormone secretagogues — the most transformative compounds in a looksmaxxing protocol — the timing of administration relative to food intake, sleep onset, and the body's natural hormonal rhythm determines 60–70% of the result, independent of the dose itself.
              </p>
              <p style={{ color: '#444458', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '1.05rem' }}>
                The mechanism is well-established endocrinology. Insulin and growth hormone are counter-regulatory hormones — when one is elevated, the other is suppressed. A meal that produces an insulin response of 40–60 mIU/L will blunt GH release by 50–70%, even when a GH secretagogue is present to stimulate GHRH and ghrelin receptors. The secretagogue is trying to amplify a signal that insulin is actively suppressing.
              </p>
              <p style={{ color: '#444458', lineHeight: 1.85, fontSize: '1.05rem' }}>
                Administered in the correct fasted, pre-sleep window, the same dose of CJC-1295/Ipamorelin amplifies the natural GH pulse 4–8× above baseline. This is not a marginal difference — it is the difference between a meaningful protocol and an expensive one.
              </p>
            </div>
            <div>
              <p style={{ color: '#444458', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '1.05rem' }}>
                For topical peptides, timing affects absorption quality. GHK-Cu applied to skin that has been cleansed and is free of barrier products penetrates to the dermis most effectively. Applied over SPF, moisturizer, or makeup — or to skin that retains overnight residue — a significant portion of the active compound is retained in or on the barrier layer rather than reaching fibroblasts.
              </p>
              <p style={{ color: '#444458', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '1.05rem' }}>
                Overnight application of GHK-Cu occurs during the skin's peak regenerative window. Skin cell turnover follows a circadian rhythm — mitotic activity in keratinocytes and fibroblasts peaks between 11 PM and 2 AM in most individuals. Applying GHK-Cu pre-sleep delivers the signaling compound precisely when the target cells are most mitotically active and receptive to gene expression modulation.
              </p>
              <div style={{ padding: '1.25rem', background: 'rgba(34,211,238,0.06)', border: '1px solid rgba(34,211,238,0.2)', borderRadius: 14 }}>
                <p style={{ color: '#0a0a14', fontWeight: 700, margin: '0 0 0.5rem', fontSize: '0.95rem' }}>Protocol Rule #1</p>
                <p style={{ color: '#444458', margin: 0, fontSize: '0.92rem', lineHeight: 1.7 }}>Topicals first on clean skin. GH secretagogues fasted, pre-sleep, every time. BPC-157 is the only compound where timing is genuinely flexible.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 24-Hour Timeline Component */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label">24-Hour Protocol</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '0.5rem' }}>
            The Complete <span className="gold-text">Daily Timeline</span>
          </h2>
          <p style={{ color: '#666688', fontSize: '1.05rem', marginBottom: '2.5rem', maxWidth: 640 }}>
            Six time windows. What to do in each — and why.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {timelineSlots.map((slot, i) => (
              <div key={slot.label} style={{
                display: 'grid',
                gridTemplateColumns: '140px 1fr',
                gap: '0',
                border: `1px solid ${slot.borderColor}`,
                borderRadius: 18,
                overflow: 'hidden',
                background: slot.bgColor,
              }}>
                {/* Time Column */}
                <div style={{
                  background: slot.color,
                  padding: '1.5rem 1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                }}>
                  <div style={{ color: 'rgba(255,255,255,0.85)' }}>{slot.icon}</div>
                  <div style={{ color: '#ffffff', fontWeight: 900, fontSize: '1.1rem', textAlign: 'center', lineHeight: 1.2 }}>{slot.time}</div>
                  <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.75rem', textAlign: 'center', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{slot.label}</div>
                </div>

                {/* Content Column */}
                <div style={{ padding: '1.5rem' }}>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1rem' }}>
                    {slot.items.map((item, j) => (
                      <li key={j} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                        <div style={{ width: 6, height: 6, borderRadius: '50%', background: slot.color, flexShrink: 0, marginTop: 7 }} />
                        <span style={{ color: '#333350', fontSize: '0.95rem', lineHeight: 1.65 }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div style={{ padding: '0.75rem 1rem', background: 'rgba(0,0,0,0.04)', borderRadius: 10, borderLeft: `3px solid ${slot.color}` }}>
                    <p style={{ color: '#555570', fontSize: '0.85rem', lineHeight: 1.65, margin: 0, fontStyle: 'italic' }}>{slot.note}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Morning Routine Detail */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label">Morning Deep Dive</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '1.25rem' }}>
            Morning Topical Routine: <span className="gold-text">Step by Step</span>
          </h2>
          <div className="rg-2col" style={{ gap: '4rem' }}>
            <div>
              <p style={{ color: '#444458', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '1.05rem' }}>
                The morning topical protocol is the most consistent daily action in a looksmaxxing stack. Unlike injectable peptides that require fasting, cycling, and precise timing, topicals simply require that you apply them correctly to clean skin every morning.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { step: '1', title: 'Cleanse', desc: 'Gentle cleanser — removes overnight sebum and any residual evening peptide serum. Pat dry.', color: '#fb923c' },
                  { step: '2', title: 'GHK-Cu Serum', desc: 'Apply 4–6 drops to face and neck. Gently press into skin — do not rub. Allow 90 seconds to absorb.', color: '#d4a843' },
                  { step: '3', title: 'SNAP-8 Serum', desc: 'Apply to forehead, crow\'s feet area, and between brows. Allow 3–5 minutes full absorption before next step.', color: '#a78bfa' },
                  { step: '4', title: 'Moisturizer (optional)', desc: 'If using, apply over peptide serums. Lightweight formulation preferred — heavy occlusives can reduce transdermal peptide penetration.', color: '#34d399' },
                  { step: '5', title: 'SPF 30–50', desc: 'Non-negotiable. UV radiation degrades collagen at a rate that outpaces peptide synthesis if unprotected. Any peptide protocol without SPF is counterproductive.', color: '#22d3ee' },
                ].map(s => (
                  <div key={s.step} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ width: 32, height: 32, borderRadius: '50%', background: s.color, color: '#fff', fontWeight: 900, fontSize: '0.9rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{s.step}</div>
                    <div>
                      <div style={{ fontWeight: 800, color: '#0a0a14', marginBottom: 4 }}>{s.title}</div>
                      <div style={{ color: '#555570', fontSize: '0.92rem', lineHeight: 1.65 }}>{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 style={{ fontWeight: 800, color: '#0a0a14', fontSize: '1.15rem', marginBottom: '1rem' }}>Application Zones Map</h3>
              <p style={{ color: '#444458', lineHeight: 1.85, marginBottom: '1rem', fontSize: '0.97rem' }}>
                GHK-Cu is applied to the full face, neck, and upper chest (décolletage) — these are the areas with the highest density of fibroblasts responsive to GHK-Cu signaling and the most visible collagen loss over time.
              </p>
              <p style={{ color: '#444458', lineHeight: 1.85, marginBottom: '1rem', fontSize: '0.97rem' }}>
                SNAP-8 is targeted specifically to expression zones — areas where dynamic muscle movement generates expression wrinkles. Primary zones: (1) Forehead — frontalis muscle horizontal lines. (2) Crow's feet — orbicularis oculi lateral expression lines. (3) Glabellar complex — procerus and corrugator muscles, the "11 lines" between the brows. (4) Perioral zone — lip lines in subjects with significant perioral wrinkling.
              </p>
              <p style={{ color: '#444458', lineHeight: 1.85, marginBottom: '1rem', fontSize: '0.97rem' }}>
                Under-eye application requires particular care. Periorbital skin is 0.5mm thick — approximately one-quarter of the skin thickness on the rest of the face. Apply GHK-Cu gently with the ring finger (lowest pressure digit) using a tapping motion rather than a rubbing motion. Never apply product to the inner corner of the eye where it can migrate into the conjunctival surface.
              </p>
              <div style={{ padding: '1.25rem', background: '#f9f9fd', border: '1px solid rgba(0,0,0,0.07)', borderRadius: 14 }}>
                <p style={{ fontWeight: 700, color: '#0a0a14', margin: '0 0 0.5rem' }}>Under-Eye Specific Protocol</p>
                <p style={{ color: '#555570', fontSize: '0.92rem', lineHeight: 1.65, margin: 0 }}>For periorbital dark circles and hollowing, see the dedicated under-eye protocol — which covers the 4 types of dark circles and different application strategies for each.</p>
                <Link href="/periorbital-peptides-dark-circles" style={{ display: 'inline-flex', alignItems: 'center', gap: 5, color: '#d4a843', textDecoration: 'none', fontWeight: 600, fontSize: '0.88rem', marginTop: '0.75rem' }}>
                  Under-Eye Peptide Guide <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Pre-Sleep Protocol */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label">Highest-Leverage Window</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '1.25rem' }}>
            Pre-Sleep Protocol: <span className="gold-text">GH Secretagogues</span>
          </h2>
          <div className="rg-2col" style={{ gap: '4rem' }}>
            <div>
              <p style={{ color: '#444458', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '1.05rem' }}>
                The pre-sleep GH secretagogue window is the single highest-leverage action in any looksmaxxing or body recomposition peptide protocol. Getting this right produces results. Getting it wrong — administering in a fed state, or at random times throughout the day — produces little more than expensive injections with no appreciable hormonal response.
              </p>
              <p style={{ color: '#444458', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '1.05rem' }}>
                CJC-1295 is a GHRH (growth hormone releasing hormone) analog — it binds to GHRH receptors on the pituitary gland, stimulating the synthesis and release of GH. Ipamorelin is a ghrelin mimetic — it binds to GHS-R1a receptors, providing the complementary ghrelin-pathway signal that the hypothalamus uses alongside GHRH to control GH pulsatility. Administered together, they activate both pathways simultaneously, producing a synergistic amplification of the GH pulse that exceeds what either compound produces alone.
              </p>
              <p style={{ color: '#444458', lineHeight: 1.85, fontSize: '1.05rem' }}>
                The pre-sleep protocol sequence is rigid for a reason: (1) Verify last meal was 2.5–3+ hours prior. (2) Cleanse and apply topical GHK-Cu. (3) Prepare injection — CJC-1295 and Ipamorelin can be mixed in the same syringe for subcutaneous administration. (4) Administer subcutaneously to the abdomen or thigh. (5) Go to sleep within 45–60 minutes. The administration-to-sleep window matters: falling asleep triggers the slow-wave NREM phase that produces the natural GH pulse, and the secretagogues are most effective when they are present in circulation at the time the hypothalamic-pituitary GH axis initiates this pulse.
              </p>
            </div>
            <div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { title: 'Fasting Verification', desc: 'Minimum 2.5 hours since last meal. Ideally 3+ hours. No protein shakes, no BCAAs — amino acids also stimulate insulin.', color: '#fb923c' },
                  { title: 'Evening Cleanse', desc: 'Remove SPF and makeup. GHK-Cu applied overnight on clean skin penetrates to dermis during peak regenerative hours.', color: '#d4a843' },
                  { title: 'GHK-Cu Application', desc: 'Higher concentration evening application if using morning/evening split. Apply to full face, neck, under-eye area.', color: '#a78bfa' },
                  { title: 'Secretagogue Administration', desc: 'CJC-1295 + Ipamorelin subcutaneous injection. Can be mixed in same syringe. Abdomen or thigh — rotate sites.', color: '#34d399' },
                  { title: 'Sleep Within 60 Minutes', desc: 'The secretagogues are positioning you to amplify the natural GH pulse. Sleep must follow promptly for this to work.', color: '#22d3ee' },
                  { title: 'No Eating After Administration', desc: 'The fast must continue through sleep. No pre-sleep snacking. Any insulin response at this point diminishes the overnight GH response.', color: '#60a5fa' },
                ].map((s, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1rem', padding: '1rem 1.25rem', background: '#f9f9fd', border: '1px solid rgba(0,0,0,0.06)', borderLeft: `3px solid ${s.color}`, borderRadius: '0 12px 12px 0' }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 700, color: '#0a0a14', marginBottom: 4, fontSize: '0.97rem' }}>{s.title}</div>
                      <div style={{ color: '#555570', fontSize: '0.88rem', lineHeight: 1.65 }}>{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '1.5rem' }}>
                <Link href="/sleep-growth-hormone-peptides" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#34d399', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>
                  Full Sleep + GH Peptide Guide <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Compound Timing Table */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label">Quick Reference</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '2rem' }}>
            Compound-Specific <span className="gold-text">Timing Rules</span>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
            {/* Header */}
            <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 2fr 100px', gap: '1rem', padding: '0.75rem 1.5rem', background: '#0a0a14', borderRadius: 10 }}>
              {['Compound', 'Optimal Timing', 'Rule', 'Flexible?'].map(h => (
                <div key={h} style={{ fontSize: '0.72rem', fontWeight: 700, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{h}</div>
              ))}
            </div>
            {compoundTimingRules.map((r, i) => (
              <div key={r.compound} style={{
                display: 'grid', gridTemplateColumns: '1.5fr 1fr 2fr 100px', gap: '1rem',
                padding: '1rem 1.5rem',
                background: i % 2 === 0 ? '#f9f9fd' : '#ffffff',
                border: '1px solid rgba(0,0,0,0.06)',
                borderRadius: 10,
                alignItems: 'start',
              }}>
                <div style={{ fontWeight: 700, color: '#0a0a14', fontSize: '0.95rem' }}>{r.compound}</div>
                <div style={{ color: '#d4a843', fontWeight: 600, fontSize: '0.88rem' }}>{r.timing}</div>
                <div style={{ color: '#555570', fontSize: '0.88rem', lineHeight: 1.6 }}>{r.rule}</div>
                <div>
                  <span style={{
                    display: 'inline-block', padding: '3px 10px', borderRadius: 100,
                    background: r.flexible ? 'rgba(52,211,153,0.12)' : 'rgba(251,146,60,0.12)',
                    color: r.flexible ? '#059669' : '#d97706',
                    fontSize: '0.75rem', fontWeight: 700,
                  }}>{r.flexible ? 'Flexible' : 'Strict'}</span>
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
                  {openFaq === i ? <ChevronUp size={18} style={{ color: '#d4a843', flexShrink: 0 }} /> : <ChevronDown size={18} style={{ color: '#888', flexShrink: 0 }} />}
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
          <div style={{ background: 'linear-gradient(135deg, #0a0a14 0%, #0a1a0f 100%)', borderRadius: 24, padding: '3.5rem', textAlign: 'center' }}>
            <div className="section-label" style={{ color: '#22d3ee', justifyContent: 'center' }}>Build Your Stack</div>
            <h2 style={{ color: '#ffffff', fontSize: '2rem', fontWeight: 900, marginBottom: '1rem' }}>
              The Daily Routine Starts With <span className="gold-text">The Right Compounds</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: 560, margin: '0 auto 2rem' }}>
              GHK-Cu, SNAP-8, and BPC-157 form the foundation of a daily looksmaxxing protocol. Source research-grade compounds for a consistent protocol.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={AFFILIATE_BASE} target="_blank" rel="sponsored noopener noreferrer" className="btn-primary">
                Shop Peptides <ExternalLink size={14} />
              </a>
              <Link href="/peptide-cycle-calendar" className="btn-secondary" style={{ color: 'rgba(255,255,255,0.75)', borderColor: 'rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.06)' }}>
                Cycle Calendar <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        <RelatedLinks currentPath="/peptide-looksmaxxing-daily-routine" />
      </div>
    </div>
  )
}
