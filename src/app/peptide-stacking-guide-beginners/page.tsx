'use client'
import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  ExternalLink,
  AlertCircle,
  CheckCircle,
  XCircle,
  ChevronDown,
  ChevronUp,
  ChevronRight,
  BookOpen,
  Target,
  FlaskConical,
  Shield,
  Zap,
  Activity,
  Clock,
  AlertTriangle,
  TrendingUp,
  Layers,
} from 'lucide-react'
import { AFFILIATE_BASE } from '@/lib/products'
import RelatedLinks from '@/components/RelatedLinks'

const goldenRules = [
  {
    number: '01',
    color: '#d4a843',
    title: 'One New Compound at a Time',
    body: 'Add compounds one by one so you can isolate response. If you start with 4 compounds simultaneously and experience water retention or sleep disturbance, you have no way to identify the cause. Sequential introduction gives you a clean data picture.',
  },
  {
    number: '02',
    color: '#a78bfa',
    title: 'Complementary Mechanisms Only',
    body: "Don't hit the same receptor twice. CJC-1295 and CJC-1295 with DAC both work on GHRH receptors — stacking them is receptor redundancy, not synergy. Stack across different pathways: GHRH + GHRP, or GH axis + tissue repair, or GLP-1 + GH preservation.",
  },
  {
    number: '03',
    color: '#34d399',
    title: 'Start Low, Go Slow',
    body: 'Use the lower end of dose ranges for the first cycle. The published dose ranges exist because individual response varies considerably. A 50% response at the low end is still a response. Calibrate first, optimize later.',
  },
  {
    number: '04',
    color: '#22d3ee',
    title: 'Match Complexity to Experience Level',
    body: 'Beginners: 2 compounds maximum for the first cycle. Intermediate researchers: 3 compounds. The Elite Stack is not a first stack — it is a destination earned through cycles of progressively complex protocols with documented response data.',
  },
]

const decisionTree = [
  {
    goal: 'Better Skin & Anti-Aging',
    icon: <Zap size={22} />,
    color: '#a78bfa',
    recommendation: 'GHK-Cu → GHK-Cu + CJC-1295/Ipamorelin',
    detail: 'Start with GHK-Cu for skin collagen, texture, and regeneration. Once tolerability is established, the Aesthetic Starter Stack adds GH axis optimization for systemic anti-aging.',
    link: '/stacks/aesthetic-starter',
    linkText: 'Aesthetic Starter Stack',
  },
  {
    goal: 'Fat Loss',
    icon: <TrendingUp size={22} />,
    color: '#fb923c',
    recommendation: 'Semaglutide or Tirzepatide (not both)',
    detail: 'GLP-1 agonists are the most effective researched compounds for fat loss. Choose one based on your protocol goals. Tirzepatide adds GIP receptor agonism for enhanced metabolic effect. Never stack two GLP-1 agonists.',
    link: '/categories/metabolic-fat-loss',
    linkText: 'Metabolic & Fat Loss Category',
  },
  {
    goal: 'Muscle & Body Composition',
    icon: <Activity size={22} />,
    color: '#d4a843',
    recommendation: 'CJC-1295/Ipamorelin (foundation)',
    detail: 'GH axis optimization drives both fat loss and muscle protein synthesis. The pulsatile pre-sleep timing amplifies the largest natural GH pulse. This is the entry point for body composition research.',
    link: '/stacks/body-recomp',
    linkText: 'Body Recomp Stack',
  },
  {
    goal: 'Injury Recovery',
    icon: <Shield size={22} />,
    color: '#34d399',
    recommendation: 'BPC-157 + TB-500 (Wolverine Stack)',
    detail: 'BPC-157 drives local tissue repair via VEGF and collagen synthesis. TB-500 (Thymosin Beta-4) provides systemic healing via actin binding. Together they cover both local and systemic repair pathways — the most studied healing combination.',
    link: '/wolverine-stack-bpc-157-tb-500',
    linkText: 'The Wolverine Stack',
  },
  {
    goal: 'Longevity & Anti-Aging',
    icon: <Clock size={22} />,
    color: '#22d3ee',
    recommendation: 'Epithalon + NAD+',
    detail: "Epithalon activates telomerase and resets epigenetic markers of aging. NAD+ precursors support mitochondrial function and DNA repair pathways. The longevity stack's unique protocol: 10 days on, 6+ months off for Epithalon.",
    link: '/stacks/longevity',
    linkText: 'Longevity Stack',
  },
  {
    goal: 'Everything at Once',
    icon: <AlertTriangle size={22} />,
    color: '#9090a8',
    recommendation: 'Start with ONE goal.',
    detail: "Don't start with 5 compounds. You won't know what's working, what's causing issues, or how to adjust. Pick your primary goal, run it for a full cycle, document your response, then layer in the next objective. This is how experienced researchers build complex protocols.",
    link: '/stacks',
    linkText: 'View All Stacks →',
    isWarning: true,
  },
]

const starterStacks = [
  {
    label: 'Most Popular Beginner Entry',
    name: 'Stack A: Sleep & Skin Starter',
    color: '#d4a843',
    duration: '8 Weeks',
    compounds: [
      { name: 'CJC-1295 (no DAC)', dose: '100mcg', timing: 'Pre-sleep' },
      { name: 'Ipamorelin', dose: '200mcg', timing: 'Pre-sleep' },
    ],
    week12: 'Better sleep quality, possible vivid dreams. This is the GH pulse working during slow-wave sleep.',
    week38: 'Body composition begins shifting — mild fat loss, improved muscle tone, better skin quality.',
    week68: 'Measurable improvements in body composition, energy, and recovery. Some researchers report skin texture improvement by week 8.',
    mechanism: 'The pre-sleep timing is critical. GH naturally peaks during slow-wave sleep. CJC-1295 + Ipamorelin synchronize a larger, sharper pulse with this window — amplifying an existing physiological process rather than introducing a foreign hormonal signal pattern.',
    link: '/products/cjc1295-ipamorelin',
  },
  {
    label: 'Acute Recovery Protocol',
    name: 'Stack B: Recovery Starter',
    color: '#34d399',
    duration: '6–12 Weeks',
    compounds: [
      { name: 'BPC-157', dose: '250mcg', timing: '2× daily' },
    ],
    week12: 'Reduced local inflammation in target tissue. Researchers often note this first.',
    week23: 'Reduced joint discomfort, improved range of motion in injured areas.',
    week46: 'Measurable improvement in tissue integrity for acute injuries. Chronic injuries may require the full 12-week protocol.',
    mechanism: 'BPC-157 (Body Protection Compound) upregulates VEGF (vascular endothelial growth factor), stimulating new blood vessel formation into damaged tissue. This improves nutrient delivery and waste removal from the repair site — the fundamental bottleneck in tissue healing.',
    link: '/products/bpc157-10mg',
    note: '6–8 weeks for acute injuries; 12 weeks for chronic conditions.',
  },
  {
    label: 'Collagen & Skin Protocol',
    name: 'Stack C: Skin Starter',
    color: '#a78bfa',
    duration: '12 Weeks',
    compounds: [
      { name: 'GHK-Cu', dose: '1mg daily', timing: 'Topical or subQ' },
    ],
    week12: 'Hydration improvement, mild skin plumping from increased hyaluronic acid expression.',
    week24: 'Texture improvement, reduced appearance of fine lines.',
    week68: 'Collagen density increases. Wound healing accelerated. Skin elasticity measurably improved.',
    mechanism: 'GHK-Cu modulates over 4,000 human genes — the majority involved in skin regeneration, collagen I/III/IV synthesis, elastin, and inflammation reduction. It effectively resets the gene expression profile of aging skin toward a younger biological state.',
    link: '/products/ghk-cu',
    note: '12 weeks minimum for full collagen restructuring. Topical application is the most common route for skin-specific goals.',
  },
]

const contraindicated = [
  {
    title: 'Multiple GLP-1 Agonists',
    compounds: 'Semaglutide + Tirzepatide + Retatrutide',
    why: 'All three hit the same GLP-1 receptor cascade. Stacking them produces redundant receptor signaling — not enhanced effect — alongside amplified side effects (severe nausea, vomiting, gastroparesis risk). Clinical trials always study these as monotherapy or in discrete receptor combinations. They are not designed to be co-administered.',
    correct: 'Choose one GLP-1 agonist. If escalating, switch compounds rather than combining. Tirzepatide adds GIP; Retatrutide adds glucagon — choose the receptor profile you need, not all of them simultaneously.',
  },
  {
    title: 'Multiple GHRH Analogs',
    compounds: 'CJC-1295 (no DAC) + CJC-1295 with DAC + Sermorelin',
    why: 'All GHRH analogs work through the same GHRH receptor. Stacking them saturates the receptor without proportionally increasing GH output. You get diminishing returns on GH release plus the sustained elevation risk of combining a short-acting GHRH analog with a long-acting one.',
    correct: 'One GHRH analog + one GHRP. The canonical combination: CJC-1295 (no DAC) paired with Ipamorelin. One receptor type each, additive and synergistic amplification of GH pulse.',
  },
  {
    title: 'IGF-1 LR3 on a First Cycle',
    compounds: 'IGF-1 LR3 as compound #1',
    why: 'IGF-1 LR3 binds the IGF-1 receptor at 3× native potency with a 20–30 hour half-life. It drives satellite cell activation, glucose uptake, and anabolic signaling at a magnitude that requires established baseline data to interpret responses correctly. Without prior research experience, dose-response becomes impossible to characterize.',
    correct: 'Establish your baseline with CJC-1295/Ipamorelin for one full cycle. Document body composition changes, sleep quality, recovery markers. IGF-1 LR3 is the next tier — earn it with data.',
  },
  {
    title: '4+ Compounds as a First Stack',
    compounds: 'IGF-1 LR3 + CJC + Ipamorelin + BPC-157 + Epithalon',
    why: "Starting with the advanced stack means starting without any individual compound response data. If you retain water, experience fatigue, or see unexpected results — you have no way to identify which compound is responsible. You cannot troubleshoot what you cannot isolate.",
    correct: 'Start with 1–2 compounds. Add the third on your second cycle. The full advanced stack is a multi-cycle destination, not a starting point.',
  },
]

const cyclingProtocol = [
  { stack: '8-week stacks', on: '8 weeks', off: '4 weeks minimum', notes: 'Acute injury recovery, skin starter, short-cycle GH optimization' },
  { stack: '12-week stacks', on: '12 weeks', off: '4–6 weeks', notes: 'Body composition, intermediate GH axis work, BPC-157 for chronic conditions' },
  { stack: '16-week stacks', on: '16 weeks', off: '6–8 weeks', notes: 'Advanced recomp protocols, IGF-1 LR3 cycles' },
  { stack: 'Epithalon', on: '10 days', off: '6+ months', notes: 'Unique protocol — short intensive cycle, extended recovery period' },
  { stack: 'GLP-1 agonists', on: 'Continuous (clinical)', off: 'Protocol-dependent', notes: 'Consult published clinical trial data for specific agonist — not typical off-cycle model' },
]

const beginnerMistakes = [
  {
    number: 1,
    title: 'Not Running Bloodwork Before Starting',
    body: "Baseline IGF-1, fasting glucose, HbA1c, and a lipid panel are the minimum data points before starting any peptide research. Without baseline numbers, you can't measure change — and you can't distinguish compound effects from coincidental variation in biomarkers. Run labs before cycle 1. Run them again at the midpoint and at the end. This is how you build a research dataset.",
  },
  {
    number: 2,
    title: 'Starting with Too Many Compounds',
    body: "Covered above in the contraindicated section, but it bears repeating because it is the single most common mistake: researchers see the advanced stack and start there. When something doesn't feel right, they have no baseline to reference and no way to isolate the variable. 2 compounds maximum for cycle 1. No exceptions.",
  },
  {
    number: 3,
    title: 'Incorrect Reconstitution Technique',
    body: "Peptides are reconstituted by injecting bacteriostatic water slowly down the side of the vial — never directly onto the lyophilized cake. Never shake. Swirl gently. Shaking denatures the peptide structure, destroying bioactivity. Use bacteriostatic water (0.9% benzyl alcohol) for multi-use vials. Use sterile water for single-use. Agitation is the most common source of degraded product.",
  },
  {
    number: 4,
    title: 'Improper Storage',
    body: "Lyophilized (freeze-dried) peptides are stable at room temperature for weeks and refrigerated for months to years. Reconstituted peptides must be refrigerated immediately and used within 28–30 days for bacteriostatic water preparations. Never freeze reconstituted peptides — the ice crystal formation damages the peptide chain. Never leave reconstituted peptides at room temperature between uses. Cold chain discipline is non-negotiable for peptide integrity.",
  },
  {
    number: 5,
    title: 'Not Tracking Anything',
    body: "A research log is not optional — it is the research. Document: compound, dose, timing, route, subjective response (sleep quality, energy, recovery), and objective markers (weight, body composition estimates, any bloodwork). Researchers who log systematically can identify response patterns that non-loggers attribute to noise. The log is also your safety data — if something changes, you have a timeline.",
  },
]

const stackOverview = [
  { name: 'All Stacks', path: '/stacks', color: '#d4a843' },
  { name: 'Aesthetic Starter', path: '/stacks/aesthetic-starter', color: '#a78bfa' },
  { name: 'Body Recomposition', path: '/stacks/body-recomp', color: '#fb923c' },
  { name: 'Wolverine Stack', path: '/wolverine-stack-bpc-157-tb-500', color: '#34d399' },
  { name: 'Longevity Stack', path: '/stacks/longevity', color: '#22d3ee' },
  { name: 'Fat Loss Stack', path: '/stacks/fat-loss', color: '#fb923c' },
]

const faqs = [
  {
    q: 'What is the best peptide stack for beginners?',
    a: 'CJC-1295 (no DAC) + Ipamorelin is the canonical beginner stack. It targets GH axis optimization through two complementary receptor pathways — GHRH and GHS-R1a — producing a synergistic GH pulse amplification of 4–8×. Timed pre-sleep, it works with the largest natural GH pulse of the day rather than against it. The tolerability profile is well-studied, the mechanism is clearly understood, and it forms the foundation of most multi-compound recomposition protocols. If you are new to peptide research, this is your entry point.',
  },
  {
    q: 'Can you stack BPC-157 with CJC-1295/Ipamorelin?',
    a: 'Yes — and it is one of the most common intermediate beginner combinations precisely because the mechanisms do not overlap. CJC-1295 and Ipamorelin operate through GHRH and GHS-R1a receptors for GH pulse amplification. BPC-157 operates through VEGF upregulation, nitric oxide signaling, and fibroblast proliferation for tissue repair. There is no receptor redundancy, no competing signaling, and no documented antagonism. The combination is additive: GH optimization improves body composition, BPC-157 accelerates recovery allowing higher training load, which amplifies the recomposition stimulus.',
  },
  {
    q: 'How long should a peptide cycle be?',
    a: 'For most stacks: 8–12 weeks on, minimum 4-week off period. Shorter cycles (6–8 weeks) are used for acute injury recovery with BPC-157. Standard body composition and GH axis stacks typically run 8–12 weeks. The 16-week advanced protocol with IGF-1 LR3 requires 6–8 weeks off. Epithalon is a unique case: 10 consecutive days, then 6+ months off — the protocol matches its mechanism of telomerase activation and epigenetic reset. GLP-1 agonists follow clinical protocols that often involve continuous administration without traditional on/off cycling.',
  },
  {
    q: 'What should you look for in a peptide supplier?',
    a: "Third-party HPLC purity testing with publicly available certificates of analysis (COA). Mass spectrometry verification of the correct molecular weight and sequence. Sterility testing for injectable preparations. Proper lyophilization and cold chain handling from manufacturer to customer. Batch traceability. A supplier that does not publish COAs or cannot provide them on request is not a supplier you should source research compounds from. Purity directly impacts both safety and research validity — an impure compound produces unreliable data.",
  },
]

export default function BeginnerStackingGuide() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div style={{ background: '#ffffff', minHeight: '100vh', fontFamily: 'inherit' }}>

      {/* ── HERO ── */}
      <div style={{
        background: 'linear-gradient(160deg, #0a0a14 0%, #12121f 60%, #0a0a14 100%)',
        padding: '6rem 2rem 5.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: '-100px', right: '-60px',
          width: 520, height: 520,
          background: 'radial-gradient(circle, rgba(212,168,67,0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '-80px', left: '30%',
          width: 400, height: 400,
          background: 'radial-gradient(circle, rgba(167,139,250,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: 'radial-gradient(circle, rgba(212,168,67,0.05) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 10%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 10%, transparent 100%)',
        }} />

        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
          <div style={{ maxWidth: 840 }}>
            <div className="section-label" style={{ color: '#d4a843', borderColor: 'rgba(212,168,67,0.3)' }}>
              Beginner&rsquo;s Guide
            </div>
            <h1 className="heading-xl" style={{ color: '#ffffff', marginBottom: '1.5rem', marginTop: '1rem' }}>
              Peptide Stacking<br />
              <span className="gold-text">for Beginners</span>
            </h1>
            <p style={{ fontSize: '1.15rem', color: '#9090a8', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: 700 }}>
              How to choose your first stack, what to avoid, and how to cycle correctly — the complete decision guide.
              Goal-based decision tree, contraindicated combinations, cycle protocols, and the 5 mistakes that derail first-time researchers.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="#decision-tree" className="btn-primary">
                Jump to Decision Tree <ArrowRight size={14} />
              </a>
              <Link
                href="/stacks"
                className="btn-secondary"
                style={{ color: '#e0e0f0', borderColor: 'rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.05)' }}
              >
                View All Stacks <Layers size={14} />
              </Link>
            </div>
            <p style={{ fontSize: '0.78rem', color: '#555570', marginTop: '2rem' }}>
              For research and laboratory use only. Not intended for human consumption. All information is educational.
            </p>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>

        {/* ── GOLDEN RULES ── */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label">Before You Begin</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '0.75rem' }}>
            The Golden Rules of Stacking
          </h2>
          <p style={{ color: '#9090a8', fontSize: '1.05rem', marginBottom: '2.5rem', maxWidth: 680 }}>
            Read these before looking at any specific stack. Violating any one of them is the cause of most negative research experiences.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {goldenRules.map(rule => (
              <div
                key={rule.number}
                style={{
                  border: '1px solid rgba(0,0,0,0.07)',
                  borderTop: `3px solid ${rule.color}`,
                  borderRadius: 16,
                  padding: '1.75rem',
                  background: '#fafafa',
                }}
              >
                <div style={{
                  fontSize: '2.5rem', fontWeight: 900, color: rule.color,
                  opacity: 0.15, lineHeight: 1, marginBottom: '0.5rem',
                  fontVariantNumeric: 'tabular-nums',
                }}>
                  {rule.number}
                </div>
                <div style={{ fontWeight: 800, fontSize: '1rem', color: '#0a0a14', marginBottom: '0.75rem' }}>
                  {rule.title}
                </div>
                <p style={{ color: '#555570', fontSize: '0.92rem', lineHeight: 1.75 }}>
                  {rule.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── DECISION TREE ── */}
        <section id="decision-tree" style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)', scrollMarginTop: '80px' }}>
          <div className="section-label">Goal-Based Selection</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '0.75rem' }}>
            What&rsquo;s Your Research Goal?
          </h2>
          <p style={{ color: '#9090a8', fontSize: '1.05rem', marginBottom: '2.5rem', maxWidth: 680 }}>
            Find your primary objective and follow the recommended starting point. These are starting-point recommendations — not final stacks.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
            {decisionTree.map(item => (
              <div
                key={item.goal}
                className="hover-lift"
                style={{
                  border: item.isWarning ? '1px dashed rgba(144,144,168,0.35)' : '1px solid rgba(0,0,0,0.08)',
                  borderRadius: 16,
                  padding: '1.75rem',
                  background: item.isWarning ? '#fafafa' : '#ffffff',
                  opacity: item.isWarning ? 0.85 : 1,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <div style={{
                    width: 42, height: 42, borderRadius: 12, flexShrink: 0,
                    background: `rgba(${
                      item.color === '#a78bfa' ? '167,139,250' :
                      item.color === '#fb923c' ? '251,146,60' :
                      item.color === '#d4a843' ? '212,168,67' :
                      item.color === '#34d399' ? '52,211,153' :
                      item.color === '#22d3ee' ? '34,211,238' : '144,144,168'
                    },0.12)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: item.color,
                  }}>
                    {item.icon}
                  </div>
                  <div style={{ fontWeight: 800, fontSize: '1rem', color: '#0a0a14' }}>
                    {item.goal}
                  </div>
                </div>
                <div style={{
                  fontSize: '0.82rem', fontWeight: 700, color: item.color,
                  marginBottom: '0.6rem',
                  fontFamily: 'monospace',
                }}>
                  → {item.recommendation}
                </div>
                <p style={{ color: '#555570', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                  {item.detail}
                </p>
                <Link
                  href={item.link}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    color: item.color, textDecoration: 'none', fontWeight: 600, fontSize: '0.86rem',
                  }}
                >
                  {item.linkText} <ChevronRight size={13} />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* ── STARTER STACKS ── */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label">Beginner Protocols</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '0.75rem' }}>
            Beginner-Recommended Starter Stacks
          </h2>
          <p style={{ color: '#9090a8', fontSize: '1.05rem', marginBottom: '2.5rem', maxWidth: 680 }}>
            Three focused, well-characterized protocols for first-cycle researchers. Each is designed around a single primary mechanism with well-understood tolerability.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {starterStacks.map(stack => (
              <div
                key={stack.name}
                style={{
                  border: '1px solid rgba(0,0,0,0.08)',
                  borderLeft: `4px solid ${stack.color}`,
                  borderRadius: '0 16px 16px 0',
                  padding: '2rem',
                  background: '#fafafa',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div>
                    <div style={{ fontSize: '0.72rem', fontWeight: 700, color: stack.color, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>
                      {stack.label}
                    </div>
                    <div style={{ fontWeight: 800, fontSize: '1.2rem', color: '#0a0a14' }}>{stack.name}</div>
                  </div>
                  <div style={{
                    fontSize: '0.78rem', fontWeight: 700,
                    background: `rgba(${stack.color === '#d4a843' ? '212,168,67' : stack.color === '#34d399' ? '52,211,153' : '167,139,250'},0.1)`,
                    color: stack.color, padding: '5px 12px', borderRadius: 20,
                    textTransform: 'uppercase', letterSpacing: '0.08em',
                  }}>
                    {stack.duration}
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
                  <div>
                    <div style={{ fontWeight: 700, color: '#0a0a14', fontSize: '0.9rem', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      Compounds
                    </div>
                    {stack.compounds.map(c => (
                      <div key={c.name} style={{
                        display: 'flex', justifyContent: 'space-between',
                        padding: '0.6rem 0', borderBottom: '1px solid rgba(0,0,0,0.05)', alignItems: 'center',
                      }}>
                        <div style={{ fontWeight: 600, color: '#0a0a14', fontSize: '0.95rem' }}>{c.name}</div>
                        <div style={{ color: '#9090a8', fontSize: '0.88rem' }}>{c.dose} {c.timing}</div>
                      </div>
                    ))}
                    {stack.note && (
                      <p style={{ color: '#9090a8', fontSize: '0.82rem', marginTop: '0.6rem', fontStyle: 'italic' }}>
                        {stack.note}
                      </p>
                    )}
                  </div>

                  <div>
                    <div style={{ fontWeight: 700, color: '#0a0a14', fontSize: '0.9rem', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      Expected Timeline
                    </div>
                    {[
                      { label: 'Weeks 1–2', text: stack.week12 },
                      { label: 'Weeks 3–8', text: stack.week38 },
                      { label: 'Weeks 6–12', text: stack.week68 },
                    ].map(t => (
                      <div key={t.label} style={{ marginBottom: '0.6rem', display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                        <div style={{
                          fontSize: '0.72rem', fontWeight: 700, color: stack.color,
                          whiteSpace: 'nowrap', marginTop: 3,
                        }}>
                          {t.label}
                        </div>
                        <div style={{ color: '#555570', fontSize: '0.88rem', lineHeight: 1.6 }}>{t.text}</div>
                      </div>
                    ))}
                  </div>

                  <div>
                    <div style={{ fontWeight: 700, color: '#0a0a14', fontSize: '0.9rem', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      Mechanism
                    </div>
                    <p style={{ color: '#555570', fontSize: '0.9rem', lineHeight: 1.75, marginBottom: '1rem' }}>
                      {stack.mechanism}
                    </p>
                    <Link
                      href={stack.link}
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: 6,
                        color: stack.color, textDecoration: 'none', fontWeight: 600, fontSize: '0.88rem',
                      }}
                    >
                      Compound Details <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── WHAT NOT TO STACK ── */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label" style={{ color: '#fb923c', borderColor: 'rgba(251,146,60,0.3)' }}>
            Critical Reference
          </div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '0.5rem' }}>
            What NOT to Stack
          </h2>
          <p style={{ color: '#9090a8', fontSize: '1.05rem', marginBottom: '2.5rem', maxWidth: 680 }}>
            The section that every beginner guide skips. These are the combinations that produce no additional benefit and meaningful additional risk — documented through mechanism analysis and clinical data.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {contraindicated.map(item => (
              <div
                key={item.title}
                style={{
                  border: '1px solid rgba(251,146,60,0.2)',
                  borderLeft: '4px solid #fb923c',
                  borderRadius: '0 14px 14px 0',
                  padding: '1.75rem',
                  background: 'rgba(251,146,60,0.02)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '1rem' }}>
                  <XCircle size={20} style={{ color: '#fb923c', flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <div style={{ fontWeight: 800, fontSize: '1.05rem', color: '#0a0a14', marginBottom: 4 }}>
                      {item.title}
                    </div>
                    <div style={{ fontSize: '0.82rem', fontFamily: 'monospace', color: '#fb923c', fontWeight: 600 }}>
                      {item.compounds}
                    </div>
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
                  <div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#9090a8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6 }}>
                      Why Not
                    </div>
                    <p style={{ color: '#555570', fontSize: '0.91rem', lineHeight: 1.75 }}>{item.why}</p>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#34d399', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6 }}>
                      Correct Approach
                    </div>
                    <p style={{ color: '#555570', fontSize: '0.91rem', lineHeight: 1.75 }}>{item.correct}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CYCLING PROTOCOL ── */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label">Cycle Timing Reference</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '0.75rem' }}>
            Cycling Protocol — On/Off Timing
          </h2>
          <p style={{ color: '#9090a8', fontSize: '1.05rem', marginBottom: '2.5rem', maxWidth: 680 }}>
            Receptor sensitivity, receptor downregulation, and hormonal feedback loops all require adequate off-cycle periods. These are standard research protocols, not suggestions.
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 560 }}>
              <thead>
                <tr style={{ background: '#0a0a14' }}>
                  {['Protocol Type', 'On Period', 'Off Period', 'Notes'].map(h => (
                    <th key={h} style={{
                      padding: '0.9rem 1.25rem', textAlign: 'left',
                      color: '#d4a843', fontSize: '0.75rem', fontWeight: 700,
                      textTransform: 'uppercase', letterSpacing: '0.1em',
                    }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {cyclingProtocol.map((row, i) => (
                  <tr key={row.stack} style={{ background: i % 2 === 0 ? '#ffffff' : '#f7f8fc', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                    <td style={{ padding: '0.9rem 1.25rem', fontWeight: 700, color: '#0a0a14', fontSize: '0.93rem' }}>{row.stack}</td>
                    <td style={{ padding: '0.9rem 1.25rem', color: '#34d399', fontWeight: 600, fontSize: '0.88rem' }}>{row.on}</td>
                    <td style={{ padding: '0.9rem 1.25rem', color: '#fb923c', fontWeight: 600, fontSize: '0.88rem' }}>{row.off}</td>
                    <td style={{ padding: '0.9rem 1.25rem', color: '#555570', fontSize: '0.88rem' }}>{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── 5 BEGINNER MISTAKES ── */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label" style={{ color: '#a78bfa', borderColor: 'rgba(167,139,250,0.3)' }}>
            Avoid These
          </div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '0.75rem' }}>
            The 5 Biggest Beginner Mistakes
          </h2>
          <p style={{ color: '#9090a8', fontSize: '1.05rem', marginBottom: '2.5rem', maxWidth: 680 }}>
            These are the patterns that appear repeatedly in beginner research experiences. Each one is avoidable with information — which is the purpose of this section.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {beginnerMistakes.map(m => (
              <div
                key={m.number}
                style={{
                  display: 'flex', gap: '1.5rem', alignItems: 'flex-start',
                  border: '1px solid rgba(0,0,0,0.07)', borderRadius: 14, padding: '1.75rem',
                  background: '#fafafa',
                }}
              >
                <div style={{
                  width: 44, height: 44, borderRadius: '50%', flexShrink: 0,
                  background: 'linear-gradient(135deg, #d4a843, #a07c2e)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 900, color: '#000', fontSize: '1rem',
                }}>
                  {m.number}
                </div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '1.05rem', color: '#0a0a14', marginBottom: '0.6rem' }}>
                    {m.title}
                  </div>
                  <p style={{ color: '#555570', lineHeight: 1.8, fontSize: '0.95rem' }}>{m.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQ ACCORDIONS ── */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label">Common Questions</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '2.5rem' }}>
            Stacking FAQ
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxWidth: 860 }}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{
                  border: '1px solid rgba(0,0,0,0.08)',
                  borderRadius: 12,
                  overflow: 'hidden',
                  background: '#ffffff',
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '1.25rem 1.5rem', background: 'none', border: 'none',
                    cursor: 'pointer', textAlign: 'left', gap: '1rem',
                  }}
                >
                  <span style={{ fontWeight: 700, color: '#0a0a14', fontSize: '1rem', lineHeight: 1.4 }}>
                    {faq.q}
                  </span>
                  <span style={{ color: '#d4a843', flexShrink: 0 }}>
                    {openFaq === i ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </span>
                </button>
                {openFaq === i && (
                  <div style={{
                    padding: '0 1.5rem 1.5rem',
                    color: '#555570', lineHeight: 1.8, fontSize: '0.95rem',
                    borderTop: '1px solid rgba(0,0,0,0.05)',
                    paddingTop: '1rem',
                  }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── ALL STACKS OVERVIEW ── */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label">Full Protocol Library</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '1rem' }}>
            All Stack Protocols
          </h2>
          <p style={{ color: '#9090a8', fontSize: '1.05rem', marginBottom: '2rem', maxWidth: 680 }}>
            Each stack page includes full compound profiles, dosing protocols, cycle timing, and expected timelines.
            Once you&rsquo;ve chosen your starting goal from the decision tree above, the stack page is your detailed protocol reference.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {stackOverview.map(s => (
              <Link
                key={s.path}
                href={s.path}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '0.65rem 1.25rem',
                  border: `1px solid rgba(${
                    s.color === '#d4a843' ? '212,168,67' :
                    s.color === '#a78bfa' ? '167,139,250' :
                    s.color === '#fb923c' ? '251,146,60' :
                    s.color === '#34d399' ? '52,211,153' : '34,211,238'
                  },0.35)`,
                  borderRadius: 10,
                  color: s.color, textDecoration: 'none',
                  fontWeight: 600, fontSize: '0.9rem',
                  background: `rgba(${
                    s.color === '#d4a843' ? '212,168,67' :
                    s.color === '#a78bfa' ? '167,139,250' :
                    s.color === '#fb923c' ? '251,146,60' :
                    s.color === '#34d399' ? '52,211,153' : '34,211,238'
                  },0.05)`,
                }}
              >
                {s.name} <ChevronRight size={13} />
              </Link>
            ))}
          </div>
        </section>

        {/* ── RELATED LINKS ── */}
        <section style={{ padding: '2rem 0 1rem' }}>
          <RelatedLinks currentPath="/peptide-stacking-guide-beginners" />
        </section>

        {/* ── CTA ── */}
        <section style={{ padding: '3.5rem 0 5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            <div style={{
              background: 'linear-gradient(135deg, #1a0f00 0%, #2a1a00 100%)',
              borderRadius: 20, padding: '2.5rem',
              border: '1px solid rgba(212,168,67,0.2)',
              display: 'flex', flexDirection: 'column', gap: '1rem',
            }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#d4a843', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Research Compounds
              </div>
              <div style={{ fontWeight: 800, fontSize: '1.15rem', color: '#ffffff' }}>
                Shop Research-Grade Peptides
              </div>
              <p style={{ color: '#9090a8', fontSize: '0.9rem', lineHeight: 1.7 }}>
                Third-party tested, HPLC verified, COA available. All compounds referenced in these protocols.
              </p>
              <a
                href={AFFILIATE_BASE}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ alignSelf: 'flex-start' }}
              >
                Shop Compounds <ExternalLink size={14} />
              </a>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, #0a0a14 0%, #1a1a2e 100%)',
              borderRadius: 20, padding: '2.5rem',
              border: '1px solid rgba(167,139,250,0.2)',
              display: 'flex', flexDirection: 'column', gap: '1rem',
            }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#a78bfa', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Complete Reference
              </div>
              <div style={{ fontWeight: 800, fontSize: '1.15rem', color: '#ffffff' }}>
                Full Peptide Research Guide
              </div>
              <p style={{ color: '#9090a8', fontSize: '0.9rem', lineHeight: 1.7 }}>
                Reconstitution protocols, storage standards, dosing references, and the complete compound library.
              </p>
              <Link
                href="/guide"
                className="btn-secondary"
                style={{ alignSelf: 'flex-start', color: '#a78bfa', borderColor: 'rgba(167,139,250,0.3)', background: 'rgba(167,139,250,0.05)' }}
              >
                Read the Guide <BookOpen size={14} />
              </Link>
            </div>
          </div>

          <p style={{ fontSize: '0.78rem', color: '#9090a8', marginTop: '2rem', textAlign: 'center' }}>
            For research and laboratory use only. Not intended for human consumption. This guide is an educational resource.
          </p>
        </section>

      </div>
    </div>
  )
}
