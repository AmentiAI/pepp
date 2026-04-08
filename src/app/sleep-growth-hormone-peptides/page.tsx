'use client'
import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, ExternalLink, Moon, Zap, AlertCircle, ChevronDown, ChevronUp, Activity, Clock, CheckCircle } from 'lucide-react'
import { AFFILIATE_BASE } from '@/lib/products'
import RelatedLinks from '@/components/RelatedLinks'

const sleepPhases = [
  { phase: 'NREM Stage 1-2', time: '10:00 PM', duration: '30 min', ghLevel: 15, desc: 'Light sleep transition. GH pulse building.', color: '#a78bfa' },
  { phase: 'NREM Stage 3 (SWS)', time: '10:30 PM', duration: '60–90 min', ghLevel: 95, desc: 'Peak GH release — slow-wave deep sleep. The primary pulsatile GH event of the night.', color: '#d4a843' },
  { phase: 'REM Sleep', time: '12:00 AM', duration: '20–30 min', ghLevel: 25, desc: 'First REM cycle. Insulin at nadir. GH beginning secondary pulse.', color: '#22d3ee' },
  { phase: 'NREM/REM Cycling', time: '12:30 AM', duration: 'Remainder of night', ghLevel: 40, desc: 'Secondary GH pulses during NREM windows. Smaller than first pulse.', color: '#34d399' },
  { phase: 'Early Morning (5–6 AM)', time: '5:00 AM', duration: '—', ghLevel: 20, desc: 'Cortisol begins rising. GH pulse activity declining. End of primary GH window.', color: '#fb923c' },
]

const preSleepRoutine = [
  { time: '7:00 PM', action: 'Last meal completed', detail: 'Complete your final meal. This begins the minimum 2.5–3 hour fasting window before GH secretagogue administration.', color: '#fb923c', icon: <Clock size={18} /> },
  { time: '8:30 PM', action: 'Wind down light exposure', detail: 'Reduce blue light exposure significantly. Blue light at 470nm wavelength suppresses melatonin production — the hormone that signals sleep onset to the suprachiasmatic nucleus.', color: '#d4a843', icon: <Moon size={18} /> },
  { time: '9:00 PM', action: 'Evening skin protocol', detail: 'Cleanse face. Apply GHK-Cu serum to face, neck, and under-eye area on clean skin. This overnight application coincides with peak keratinocyte and fibroblast mitotic activity.', color: '#a78bfa', icon: <Zap size={18} /> },
  { time: '9:30 PM', action: 'Sleep supplements', detail: 'Magnesium glycinate 200–400mg (supports deep NREM sleep architecture). L-theanine 200mg optional (alpha wave induction, reduces sleep onset latency).', color: '#34d399', icon: <Activity size={18} /> },
  { time: '9:45–10:00 PM', action: 'GH Secretagogue administration', detail: 'Administer CJC-1295 + Ipamorelin subcutaneously, fasted. Abdomen or thigh rotation. Both can be mixed in the same syringe. This must be your final administration before sleep.', color: '#22d3ee', icon: <Zap size={18} /> },
  { time: '10:00–10:30 PM', action: 'Sleep onset target', detail: 'Fall asleep within 30–45 minutes of secretagogue administration. The peptides are now positioned to amplify the natural GH pulse that will peak 60–90 minutes after sleep onset.', color: '#60a5fa', icon: <Moon size={18} /> },
]

const sleepOptimization = [
  { factor: 'Temperature', optimal: '65–68°F (18–20°C)', why: 'Core body temperature must drop for deep NREM sleep to initiate. Cooler room temperature accelerates this drop and deepens slow-wave sleep — the GH-dominant sleep phase.', color: '#22d3ee' },
  { factor: 'Darkness', optimal: 'Complete darkness', why: 'Any light exposure during sleep suppresses melatonin and disrupts the circadian signal that drives GH pulsatility. Even low-level ambient light from electronics impairs sleep architecture.', color: '#a78bfa' },
  { factor: 'Consistency', optimal: 'Same bedtime ±30 min', why: 'The suprachiasmatic nucleus (SCU) — the brain\'s circadian clock — synchronizes GH pulse timing to habitual sleep onset. Irregular sleep timing desynchronizes this clock and reduces GH pulse amplitude.', color: '#d4a843' },
  { factor: 'Duration', optimal: '7–9 hours', why: 'GH pulse amplitude scales with sleep duration. Most secondary GH pulses occur in the later NREM cycles — cutting sleep short at 5–6 hours eliminates these pulses entirely.', color: '#34d399' },
  { factor: 'Alcohol avoidance', optimal: 'None within 3 hours of sleep', why: 'Alcohol is one of the most potent suppressors of GH secretion. Even moderate intake (2 standard drinks) reduces overnight GH release by up to 75% by disrupting NREM slow-wave sleep architecture.', color: '#fb923c' },
  { factor: 'Fasting', optimal: '3+ hours before sleep', why: 'The non-negotiable variable. Residual insulin from a late meal competes directly with GH release. A 3-hour minimum ensures near-basal insulin by sleep onset — maximizing the natural GH pulse amplitude.', color: '#ef4444' },
]

const faqs = [
  {
    q: 'Why is sleep the single most important variable in the GH protocol?',
    a: 'Growth hormone secretion in healthy adults is almost entirely concentrated in sleep — approximately 70–80% of the day\'s total GH output occurs during the overnight fast + slow-wave sleep combination. Unlike cortisol (which follows a relatively consistent diurnal rhythm), GH secretion is highly episodic, with the dominant pulse occurring 60–90 minutes after sleep onset during NREM Stage 3 (slow-wave sleep). This means that optimizing sleep quality is not just a complementary concern to GH secretagogue use — it is the primary mechanism through which secretagogues work. Secretagogues amplify an existing GH pulse. If the pulse is diminished or eliminated by poor sleep architecture, there is nothing to amplify.',
  },
  {
    q: 'How does insulin specifically antagonize GH release?',
    a: 'Insulin and GH are counter-regulatory hormones — they are part of the body\'s glucose regulation system, designed to oppose each other. Elevated insulin activates IRS-1 (insulin receptor substrate-1) signaling, which cross-inhibits GHRH receptor downstream signaling in pituitary somatotrophs. Additionally, insulin promotes somatostatin release from the hypothalamus — and somatostatin is the direct inhibitor of GH pulsatility. High insulin therefore suppresses GH through two parallel mechanisms: direct receptor interference at the pituitary and elevated somatostatin from the hypothalamus. Clinical data shows insulin levels of 40–60 mIU/L reduce GH release by 50–70% compared to fasted insulin levels of <15 mIU/L. This is why the pre-sleep fast is non-negotiable — it is the primary variable that determines whether the GH secretagogue has anything to amplify.',
  },
  {
    q: 'What is the exact timing for GH secretagogue administration relative to sleep?',
    a: 'Administer CJC-1295 + Ipamorelin 30–60 minutes before your planned sleep onset. This window allows the peptides to reach circulation and begin occupying GHRH and ghrelin receptors in the pituitary before the natural sleep-onset GH pulse initiates. Administration that is too early (2+ hours before sleep) means peak pituitary stimulation may occur before sleep onset, reducing the overlap with the natural GH pulse. Administration immediately at sleep onset provides less time for receptor occupancy before the pulse. The 30–60 minute pre-sleep window is the sweet spot that reliably overlaps peptide receptor activation with the natural slow-wave sleep GH pulse.',
  },
  {
    q: 'Can I get the same results from sleep optimization alone, without GH secretagogues?',
    a: 'Optimized sleep without secretagogues produces the maximum natural GH output your pituitary and GHRH-ghrelin axis can generate. For young, healthy adults (18–30) with optimal sleep, nutrition, and training, this natural output is already substantial. For adults over 30 — where somatotroph cell function and GHRH sensitivity both decline — or for anyone seeking above-baseline GH pulse amplitude for body composition and skin quality optimization, secretagogues provide a meaningful augmentation. The relationship is additive: secretagogues amplify natural GH pulses 4–8×, but that amplification only produces a proportional result if the natural pulse is present and robust. Sleep optimization is the prerequisite. Secretagogues are the multiplier applied to a strong foundation.',
  },
  {
    q: 'How does Epithalon improve sleep architecture through the pineal gland?',
    a: 'Epithalon (Epitalon / Epithalamin) is a tetrapeptide derived from the pineal gland\'s epithalamin that has documented effects on pineal gland function and melatonin synthesis. The pineal gland produces melatonin in response to darkness signals from the suprachiasmatic nucleus — and melatonin is the primary circadian hormone that drives the sleep architecture responsible for GH pulsatility. With age, pineal gland function declines: melatonin peak output decreases, the onset of melatonin secretion shifts later, and the duration of nocturnal melatonin elevation shortens. These changes directly impair NREM sleep quality and GH pulse amplitude. Epithalon has been shown in Russian research to restore pineal gland activity and normalize melatonin secretion patterns in aged animals and humans. In a 10-day cycle, Epithalon appears to reset pineal function — producing sustained improvements in sleep quality and the melatonin-driven circadian rhythm that supports GH pulsatility for weeks to months after the cycle ends.',
  },
  {
    q: 'What does the pre-sleep looksmaxxing night routine look like when all elements are combined?',
    a: 'The full pre-sleep looksmaxxing protocol is: (1) Final meal completed by 7 PM. (2) Blue light reduction from 8:30 PM onward. (3) Facial cleanse at 9 PM — remove sunscreen and products from the day. (4) GHK-Cu serum applied to face, neck, and under-eye area — overnight application on clean skin. (5) SNAP-8 optional — if running an evening topical protocol. (6) Magnesium glycinate 200–400mg at 9:30 PM. (7) CJC-1295 + Ipamorelin subcutaneous injection at 9:45–10 PM — fasted, pre-sleep. (8) Sleep onset at 10–10:30 PM in a cool (65–68°F), completely dark room. This combined routine maximizes three parallel systems: GHK-Cu overnight skin regeneration, natural circadian skin repair during peak mitotic activity, and amplified GH pulse during slow-wave sleep.',
  },
]

export default function SleepGrowthHormonePeptidesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const maxGH = 100

  return (
    <div style={{ background: '#ffffff', minHeight: '100vh' }}>

      {/* Hero */}
      <div style={{
        background: 'linear-gradient(160deg, #05080f 0%, #080a18 60%, #050810 100%)',
        padding: '5.5rem 2rem 5rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          background: 'radial-gradient(ellipse 70% 60% at 50% 60%, rgba(96,165,250,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
          <div style={{ maxWidth: 820 }}>
            <div className="section-label" style={{ color: '#60a5fa' }}>Sleep + GH Optimization</div>
            <h1 className="heading-xl" style={{ color: '#ffffff', marginBottom: '1.25rem' }}>
              Sleep, Growth Hormone &amp; <span className="gold-text">Pre-Sleep Peptides</span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: 680 }}>
              70–80% of your daily GH output occurs during sleep. GH secretagogues amplify this pulse 4–8× — but only when timed correctly with a fasted, pre-sleep protocol.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: '2rem' }}>
              <a href={AFFILIATE_BASE} target="_blank" rel="sponsored noopener noreferrer" className="btn-primary">
                Shop Peptides <ExternalLink size={14} />
              </a>
              <Link href="/peptide-looksmaxxing-daily-routine" className="btn-secondary" style={{ color: 'rgba(255,255,255,0.75)', borderColor: 'rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.05)' }}>
                Daily Routine Guide <ArrowRight size={14} />
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
            { val: '70–80%', label: 'Daily GH output concentrated in sleep' },
            { val: '60–90min', label: 'After sleep onset — peak natural GH pulse' },
            { val: '4–8×', label: 'GH pulse amplification with CJC-1295/Ipamorelin' },
            { val: '50–70%', label: 'GH blunting from insulin at 40–60 mIU/L' },
          ].map(s => (
            <div key={s.label}>
              <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#60a5fa', letterSpacing: '-0.03em' }}>{s.val}</div>
              <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)', marginTop: 2 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>

        {/* GH-Sleep Relationship */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label">Foundational Biology</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '1.25rem' }}>
            The GH-Sleep Relationship: Why Sleep Is <span className="gold-text">The Most Important Variable</span>
          </h2>
          <div className="rg-2col" style={{ gap: '4rem' }}>
            <div>
              <p style={{ color: '#444458', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '1.05rem' }}>
                Growth hormone (GH) secretion in humans is not continuous — it is episodic, occurring in discrete pulses regulated by a complex interplay between hypothalamic GHRH (growth hormone releasing hormone), somatostatin (the GH inhibitor), and ghrelin from the gut. In adults, the dominant GH pulse of the day occurs within 60–90 minutes of sleep onset, specifically during NREM Stage 3 slow-wave sleep. This pulse accounts for approximately 70–80% of the entire day's GH output.
              </p>
              <p style={{ color: '#444458', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '1.05rem' }}>
                The physiological coupling between slow-wave sleep and GH release is so tight that experimentally disrupting slow-wave sleep with noise — while maintaining total sleep time — dramatically reduces GH output. Conversely, enhancing slow-wave sleep through temperature optimization, magnesium, or GABA-ergic compounds meaningfully increases GH pulse amplitude without any exogenous peptide.
              </p>
              <p style={{ color: '#444458', lineHeight: 1.85, fontSize: '1.05rem' }}>
                This tight coupling has a profound implication for GH secretagogue users: secretagogues amplify an existing pulse — they do not create one independently. CJC-1295 (GHRH analog) and Ipamorelin (ghrelin mimetic) work by making the pituitary more responsive to the GHRH and ghrelin signals that already drive the sleep-associated GH pulse. If that pulse is blunted — by insulin, by poor sleep architecture, by alcohol, or by inconsistent sleep timing — the secretagogue has a diminished signal to amplify.
              </p>
            </div>
            <div>
              <p style={{ color: '#444458', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '1.05rem' }}>
                The age-related decline in GH output is significantly driven by changes in sleep architecture. Adults over 40 spend substantially less time in NREM Stage 3 slow-wave sleep than young adults — studies show a progressive decline from approximately 20% of total sleep time in young adults to 5–10% in adults over 60. This architectural shift is the primary reason GH output declines so dramatically with age, even in individuals with intact pituitary function. The GH axis is functioning — the slow-wave sleep window that drives GH pulsatility is shrinking.
              </p>
              <p style={{ color: '#444458', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '1.05rem' }}>
                GH secretagogues can partially compensate for this age-related architectural decline by amplifying the remaining GHRH-ghrelin signaling above what impaired receptor sensitivity would normally allow. But they cannot create slow-wave sleep — they can only amplify what exists. This is why sleep optimization is the prerequisite, and secretagogues are the multiplier.
              </p>
              <div style={{ padding: '1.25rem', background: 'rgba(96,165,250,0.07)', border: '1px solid rgba(96,165,250,0.2)', borderRadius: 14 }}>
                <p style={{ fontWeight: 700, color: '#0a0a14', margin: '0 0 0.5rem', fontSize: '0.95rem' }}>The Protocol Hierarchy</p>
                <p style={{ color: '#555570', margin: 0, fontSize: '0.9rem', lineHeight: 1.7 }}>
                  (1) Sleep quality first. (2) Fasting window second. (3) Secretagogue administration third. Reversing this order wastes the compound's potential.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Circadian GH Pulse Chart */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label">Circadian Chart</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '0.5rem' }}>
            Circadian GH Pulse Chart: <span className="gold-text">Sleep, Insulin &amp; Peptide Window</span>
          </h2>
          <p style={{ color: '#666688', fontSize: '1.05rem', marginBottom: '2.5rem', maxWidth: 640 }}>
            GH peaks 60–90 minutes after sleep onset during NREM Stage 3. Insulin must be at basal level for the peak to occur. Secretagogues amplify this window 4–8×.
          </p>

          {/* Custom Pulse Chart */}
          <div style={{ background: '#0a0a14', borderRadius: 20, padding: '2.5rem', marginBottom: '2rem' }}>
            {/* Chart Title Row */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
              <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.82rem', fontWeight: 600 }}>6:00 PM</div>
              <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem' }}>← Time Axis →</div>
              <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.82rem', fontWeight: 600 }}>6:00 AM</div>
            </div>

            {/* GH Pulse visualization bars */}
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#d4a843', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.875rem' }}>
                GH Pulse Amplitude (Natural)
              </div>
              <div style={{ display: 'flex', gap: 4, alignItems: 'flex-end', height: 80 }}>
                {sleepPhases.map((phase, i) => (
                  <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                    <div style={{
                      width: '100%',
                      height: `${(phase.ghLevel / maxGH) * 80}px`,
                      background: `linear-gradient(to top, ${phase.color}, ${phase.color}88)`,
                      borderRadius: '4px 4px 0 0',
                    }} />
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: 4, marginTop: 4 }}>
                {sleepPhases.map((phase, i) => (
                  <div key={i} style={{ flex: 1, height: 2, background: `${phase.color}44`, borderRadius: 1 }} />
                ))}
              </div>
            </div>

            {/* Amplified with Secretagogues */}
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#a78bfa', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.875rem' }}>
                GH Pulse Amplitude (with CJC-1295 + Ipamorelin — 4–8× amplification)
              </div>
              <div style={{ display: 'flex', gap: 4, alignItems: 'flex-end', height: 80 }}>
                {sleepPhases.map((phase, i) => {
                  const amplified = Math.min((phase.ghLevel / maxGH) * 80 * (i === 1 ? 4.5 : i === 0 ? 2 : 1.5), 80)
                  return (
                    <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                      <div style={{
                        width: '100%',
                        height: `${amplified}px`,
                        background: `linear-gradient(to top, #a78bfa, #a78bfa66)`,
                        borderRadius: '4px 4px 0 0',
                      }} />
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Insulin Curve */}
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#fb923c', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.875rem' }}>
                Insulin Level (drops during 3+ hour fast — enables GH peak)
              </div>
              <div style={{ display: 'flex', gap: 4, alignItems: 'flex-end', height: 40 }}>
                {[85, 60, 25, 15, 15, 10, 10, 10, 10, 10, 15, 20].map((level, i) => (
                  <div key={i} style={{ flex: 1 }}>
                    <div style={{
                      width: '100%',
                      height: `${(level / 100) * 40}px`,
                      background: `linear-gradient(to top, #fb923c, #fb923c66)`,
                      borderRadius: '4px 4px 0 0',
                    }} />
                  </div>
                ))}
              </div>
            </div>

            {/* Phase Labels */}
            <div style={{ display: 'flex', gap: 4 }}>
              {sleepPhases.map((phase, i) => (
                <div key={i} style={{ flex: 1, textAlign: 'center' }}>
                  <div style={{ fontSize: '0.65rem', color: phase.color, fontWeight: 700, marginBottom: 2, lineHeight: 1.3 }}>{phase.phase.split(' ').slice(0, 2).join(' ')}</div>
                  <div style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.35)', lineHeight: 1.3 }}>{phase.time}</div>
                </div>
              ))}
            </div>

            {/* Peptide Administration Marker */}
            <div style={{ marginTop: '1.5rem', padding: '0.875rem 1.25rem', background: 'rgba(167,139,250,0.12)', border: '1px solid rgba(167,139,250,0.25)', borderRadius: 10 }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#a78bfa', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.35rem' }}>
                ↑ Administer Secretagogues Here (9:30–10:00 PM)
              </div>
              <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.82rem' }}>
                30–60 minutes before sleep onset. Fasted state (3+ hrs post-meal). Peptides occupy GHRH and ghrelin receptors before the natural GH pulse initiates at NREM Stage 3 onset.
              </div>
            </div>
          </div>

          {/* Phase Detail Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {sleepPhases.map(phase => (
              <div key={phase.phase} style={{
                display: 'grid', gridTemplateColumns: '160px 1fr', gap: '1.5rem',
                padding: '1.25rem 1.5rem', background: '#f9f9fd',
                border: '1px solid rgba(0,0,0,0.07)', borderLeft: `4px solid ${phase.color}`,
                borderRadius: '0 14px 14px 0', alignItems: 'center',
              }}>
                <div>
                  <div style={{ fontWeight: 800, color: phase.color, fontSize: '0.9rem' }}>{phase.phase}</div>
                  <div style={{ fontSize: '0.78rem', color: '#888' }}>{phase.time}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 4 }}>
                    <div style={{ fontSize: '0.72rem', color: '#888' }}>GH Level:</div>
                    <div style={{ flex: 1, height: 6, background: '#f0f0f8', borderRadius: 3, maxWidth: 80 }}>
                      <div style={{ width: `${phase.ghLevel}%`, height: '100%', background: phase.color, borderRadius: 3 }} />
                    </div>
                  </div>
                </div>
                <p style={{ color: '#444458', fontSize: '0.92rem', lineHeight: 1.65, margin: 0 }}>{phase.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Fasting Is Non-Negotiable */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label">The Insulin Mechanism</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '1.25rem' }}>
            Why Pre-Sleep Fasting Is <span className="gold-text">Non-Negotiable</span>
          </h2>
          <div className="rg-2col" style={{ gap: '4rem' }}>
            <div>
              <p style={{ color: '#444458', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '1.05rem' }}>
                The most common reason GH secretagogue protocols fail to produce results is residual insulin from a late meal at the time of administration. This is not a minor efficiency reduction — it is a 50–70% suppression of GH release at insulin levels of 40–60 mIU/L.
              </p>
              <p style={{ color: '#444458', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '1.05rem' }}>
                The mechanism operates through two parallel pathways. First, elevated insulin activates IRS-1 (insulin receptor substrate-1) signaling in pituitary somatotrophs, which directly cross-inhibits the downstream signal from GHRH receptor activation. The pituitary cell is receiving both signals simultaneously and prioritizing the insulin (energy storage) signal over the GHRH (growth) signal. Second, insulin promotes somatostatin secretion from the hypothalamus — and somatostatin is the direct, potent inhibitor of GH release from the anterior pituitary. High insulin therefore produces high somatostatin, which blocks the GH pulse at the source.
              </p>
              <p style={{ color: '#444458', lineHeight: 1.85, fontSize: '1.05rem' }}>
                A meal containing 60+ grams of carbohydrates will keep insulin elevated at suppressive levels for 2–3 hours in insulin-sensitive individuals, and 3–4+ hours in those with any degree of insulin resistance. Protein also stimulates insulin release — though less dramatically than carbohydrates. The safest pre-sleep fasting approach is to complete a moderate protein, low-carbohydrate dinner no later than 7 PM if administering at 10 PM.
              </p>
            </div>
            <div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ padding: '1.5rem', background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: 14 }}>
                  <div style={{ fontWeight: 800, color: '#ef4444', marginBottom: '0.5rem' }}>Scenario: Late Carb Meal at 9 PM</div>
                  <p style={{ color: '#444458', fontSize: '0.92rem', lineHeight: 1.7, margin: 0 }}>
                    Administer CJC-1295/Ipamorelin at 10 PM — only 1 hour post-meal. Insulin at 60–80+ mIU/L. Somatostatin elevated. GH pulse suppressed 50–70%. Secretagogue effect: minimal. Same dose, same timing, different metabolic state = dramatically different result.
                  </p>
                </div>
                <div style={{ padding: '1.5rem', background: 'rgba(52,211,153,0.06)', border: '1px solid rgba(52,211,153,0.2)', borderRadius: 14 }}>
                  <div style={{ fontWeight: 800, color: '#059669', marginBottom: '0.5rem' }}>Scenario: Last Meal at 7 PM</div>
                  <p style={{ color: '#444458', fontSize: '0.92rem', lineHeight: 1.7, margin: 0 }}>
                    Administer at 10 PM — 3 hours post-meal. Insulin at 10–15 mIU/L (near-basal). Somatostatin at baseline. Natural GH pulse allowed to initiate fully. Secretagogues amplify 4–8×. Full protocol effect realized.
                  </p>
                </div>
                <div style={{ padding: '1.25rem', background: '#f9f9fd', border: '1px solid rgba(0,0,0,0.07)', borderRadius: 14 }}>
                  <p style={{ color: '#555570', fontSize: '0.88rem', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
                    These two scenarios use identical compounds at identical doses and differ only in meal timing. The result difference is not marginal — the fasted protocol can produce 4–6× greater GH release than the fed protocol with the same injection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sleep Quality Optimization */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label">Sleep Quality</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '1.25rem' }}>
            Sleep Quality Optimization: <span className="gold-text">6 Key Variables</span>
          </h2>
          <p style={{ color: '#444458', lineHeight: 1.85, marginBottom: '2rem', fontSize: '1.05rem', maxWidth: 720 }}>
            These environmental and behavioral variables directly determine NREM slow-wave sleep quality — and therefore the magnitude of the natural GH pulse that secretagogues amplify.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {sleepOptimization.map(s => (
              <div key={s.factor} style={{ padding: '1.75rem', background: '#f9f9fd', border: '1px solid rgba(0,0,0,0.07)', borderTop: `3px solid ${s.color}`, borderRadius: 18 }}>
                <div style={{ fontWeight: 800, color: '#0a0a14', marginBottom: '0.25rem' }}>{s.factor}</div>
                <div style={{ fontSize: '0.88rem', fontWeight: 700, color: s.color, marginBottom: '0.625rem' }}>Optimal: {s.optimal}</div>
                <p style={{ color: '#555570', fontSize: '0.88rem', lineHeight: 1.7, margin: 0 }}>{s.why}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Epithalon for Sleep Architecture */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label">Pineal Restoration</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '1.25rem' }}>
            Epithalon for Sleep Architecture via <span className="gold-text">Pineal Restoration</span>
          </h2>
          <div className="rg-2col" style={{ gap: '4rem' }}>
            <div>
              <p style={{ color: '#444458', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '1.05rem' }}>
                Epithalon (Epitalon) is a synthetic tetrapeptide (Ala-Glu-Asp-Gly) derived from epithalamin — a polypeptide secreted by the pineal gland. The pineal gland is the primary site of melatonin synthesis, and melatonin is the circadian hormone that drives the sleep architecture responsible for GH pulsatility.
              </p>
              <p style={{ color: '#444458', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '1.05rem' }}>
                With aging, the pineal gland undergoes progressive calcification and a decline in parenchymal cell function. This translates to reduced melatonin peak output, delayed onset of nocturnal melatonin elevation, and a shorter duration of melatonin-elevated hours during the night. Each of these changes directly impairs the circadian sleep signal that the hypothalamic-pituitary GH axis depends on for its nocturnal pulsatility.
              </p>
              <p style={{ color: '#444458', lineHeight: 1.85, fontSize: '1.05rem' }}>
                Russian gerontological research (Khavinson, Anisimov et al.) has documented that Epithalon administration in aged animals and humans restores pinealocyte activity, normalizes melatonin secretion amplitude and timing, and extends nocturnal melatonin elevation duration. These effects persist for weeks to months after a 10-day cycle, suggesting an epigenetic mechanism — Epithalon appears to restore the transcriptional activity of pineal cells rather than simply supplementing melatonin.
              </p>
            </div>
            <div>
              <p style={{ color: '#444458', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '1.05rem' }}>
                The implications for a GH secretagogue protocol are significant. If pineal dysfunction is contributing to poor sleep architecture and reduced melatonin amplitude — thereby blunting the NREM slow-wave sleep that drives GH pulsatility — Epithalon addresses this root cause rather than merely stacking another secretagogue on top of a compromised architecture.
              </p>
              <p style={{ color: '#444458', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '1.05rem' }}>
                Epithalon also has independently documented effects on telomerase activation — upregulating the enzyme responsible for maintaining telomere length in somatic cells. This longevity mechanism operates in parallel with its sleep architecture and melatonin normalization effects, making it a multi-mechanism compound for both sleep quality and cellular aging.
              </p>
              <div style={{ padding: '1.25rem', background: 'rgba(52,211,153,0.07)', border: '1px solid rgba(52,211,153,0.2)', borderRadius: 14 }}>
                <p style={{ fontWeight: 700, color: '#0a0a14', margin: '0 0 0.5rem', fontSize: '0.95rem' }}>Epithalon Protocol for Sleep</p>
                <p style={{ color: '#555570', margin: 0, fontSize: '0.9rem', lineHeight: 1.7 }}>10-day pre-sleep cycles twice yearly (traditionally March and September). Administer in the evening to coincide with natural melatonin onset. Effects on sleep architecture reported within the 10-day window and persisting for 4–12 weeks post-cycle.</p>
              </div>
              <Link href="/epithalon-protocol-longevity-cycle" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#34d399', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem', marginTop: '1.25rem' }}>
                Full Epithalon Protocol Guide <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* Full Pre-Sleep Routine */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label">Complete Protocol</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '1.25rem' }}>
            The Full Pre-Sleep <span className="gold-text">Looksmaxxing Night Routine</span>
          </h2>
          <p style={{ color: '#444458', lineHeight: 1.85, marginBottom: '2rem', fontSize: '1.05rem', maxWidth: 720 }}>
            Every element of this routine serves one of three objectives: GH pulse maximization, skin regeneration during peak mitotic window, or circadian architecture support.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', maxWidth: 800 }}>
            {preSleepRoutine.map((step, i) => (
              <div key={i} style={{
                display: 'grid', gridTemplateColumns: '90px 40px 1fr', gap: '1.25rem',
                alignItems: 'flex-start', padding: '1.25rem 1.5rem',
                background: '#f9f9fd', border: '1px solid rgba(0,0,0,0.07)', borderRadius: 14,
              }}>
                <div style={{ fontWeight: 900, color: step.color, fontSize: '0.95rem', lineHeight: 1.2 }}>{step.time}</div>
                <div style={{ color: step.color, paddingTop: 2 }}>{step.icon}</div>
                <div>
                  <div style={{ fontWeight: 800, color: '#0a0a14', marginBottom: '0.375rem' }}>{step.action}</div>
                  <p style={{ color: '#555570', fontSize: '0.88rem', lineHeight: 1.65, margin: 0 }}>{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '2rem', display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/peptide-looksmaxxing-daily-routine" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#60a5fa', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>
              Full 24-Hour Daily Routine <ArrowRight size={14} />
            </Link>
            <Link href="/peptide-cycle-calendar" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#d4a843', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>
              12-Month Cycle Calendar <ArrowRight size={14} />
            </Link>
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
                  {openFaq === i ? <ChevronUp size={18} style={{ color: '#60a5fa', flexShrink: 0 }} /> : <ChevronDown size={18} style={{ color: '#888', flexShrink: 0 }} />}
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
          <div style={{ background: 'linear-gradient(135deg, #05080f 0%, #0a0a14 100%)', borderRadius: 24, padding: '3.5rem', textAlign: 'center' }}>
            <div className="section-label" style={{ color: '#60a5fa', justifyContent: 'center' }}>Amplify the Pulse</div>
            <h2 style={{ color: '#ffffff', fontSize: '2rem', fontWeight: 900, marginBottom: '1rem' }}>
              The Overnight GH Window Is <span className="gold-text">Where It Happens</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: 560, margin: '0 auto 2rem' }}>
              Fast 3 hours. Sleep on time. Administer CJC-1295 + Ipamorelin pre-sleep. Then let the biology compound over 12 weeks.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={AFFILIATE_BASE} target="_blank" rel="sponsored noopener noreferrer" className="btn-primary">
                Shop Peptides <ExternalLink size={14} />
              </a>
              <Link href="/looksmaxxing-starter-stack-budget" className="btn-secondary" style={{ color: 'rgba(255,255,255,0.75)', borderColor: 'rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.06)' }}>
                Budget Starter Stack <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        <RelatedLinks currentPath="/sleep-growth-hormone-peptides" />
      </div>
    </div>
  )
}
