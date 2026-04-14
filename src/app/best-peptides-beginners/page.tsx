'use client'
import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  ExternalLink,
  CheckCircle,
  XCircle,
  ChevronDown,
  ChevronUp,
  Shield,
  Zap,
  Activity,
  Clock,
  AlertTriangle,
  FlaskConical,
  Star,
  Target,
  Microscope,
} from 'lucide-react'
import { AFFILIATE_PRODUCT } from '@/lib/products'
import RelatedLinks from '@/components/RelatedLinks'

// ── DATA ──────────────────────────────────────────────────────────────────────

const heroQualities = [
  {
    icon: <Shield size={20} />,
    color: '#d4a843',
    title: 'Extensive Safety Data',
    body: 'Decades of animal studies and growing human research — known tolerability profiles, established dose-response curves, and no hidden cardiovascular or endocrine risk at standard research doses.',
  },
  {
    icon: <Target size={20} />,
    color: '#34d399',
    title: 'Simple Protocols',
    body: 'Once-daily dosing, predictable half-lives, no complex timing windows or food interactions. Beginner compounds should fit into normal routines without demanding lab-level precision.',
  },
  {
    icon: <Activity size={20} />,
    color: '#22d3ee',
    title: 'Low Side-Effect Profile',
    body: 'Minimal hormonal disruption, no receptor down-regulation at normal doses, and reversible effects. If something feels wrong, stopping the compound resolves it cleanly.',
  },
  {
    icon: <FlaskConical size={20} />,
    color: '#a78bfa',
    title: 'Well-Characterized Dosing',
    body: 'Published research that makes dosing ranges clear — not extrapolations from a single animal study. Narrow dose windows exist for advanced compounds; beginner compounds have forgiving ranges.',
  },
]

const beginnerPeptides = [
  {
    rank: '01',
    name: 'BPC-157',
    subtitle: 'Body Protection Compound',
    slug: 'bpc-157-10mg',
    color: '#d4a843',
    badge: '#1 for Beginners',
    badgeBg: 'rgba(212,168,67,0.12)',
    icon: <Shield size={22} />,
    mechanism:
      'BPC-157 is a 15-amino-acid peptide derived from a protective gastric protein. It upregulates VEGF (vascular endothelial growth factor), stimulates nitric oxide production, activates fibroblasts, and modulates the FAK-paxillin and MAPK pathways — driving angiogenesis into damaged tissue and accelerating collagen matrix repair.',
    whyBeginner:
      'Oral bioavailability (unlike most peptides), a forgiving dosing window, no known serious adverse events across decades of animal and human research, and a mechanism that works locally — meaning effects are targeted rather than systemic. No hormonal disruption, no receptor saturation risk.',
    dose: '250–500 mcg/day',
    route: 'Oral capsule or subcutaneous injection',
    cycle: '4–8 weeks (acute); up to 12 weeks (chronic)',
    expect:
      'Reduced inflammation and improved range of motion in target tissue within weeks 1–2. Measurable tissue integrity improvement by weeks 4–6. Gut health improvements (if relevant) often noticed within the first week.',
  },
  {
    rank: '02',
    name: 'GHK-Cu',
    subtitle: 'Copper Peptide Tripeptide',
    slug: 'ghk-cu-50mg',
    color: '#34d399',
    badge: 'Skin & Anti-Aging',
    badgeBg: 'rgba(52,211,153,0.12)',
    icon: <Zap size={22} />,
    mechanism:
      'GHK-Cu (glycyl-L-histidyl-L-lysine copper II) modulates over 4,000 human genes — the majority involved in collagen I/III/IV synthesis, elastin, hyaluronic acid production, antioxidant enzyme expression, and anti-inflammatory gene regulation. It effectively shifts gene expression in aging tissue toward a younger biological profile.',
    whyBeginner:
      'Available topically — no injection required for skin goals. No systemic hormonal effects. No dose-response cliff. The mechanism is well-characterized, the tolerability profile in topical use is excellent, and results accumulate steadily over a 12-week protocol without dramatic swings in biomarkers.',
    dose: '200–400 mcg/day (subQ); topical cream per product instructions',
    route: 'Topical application or subcutaneous injection',
    cycle: '8–12 weeks minimum for full collagen restructuring',
    expect:
      'Improved skin hydration and plumping by weeks 1–2. Texture refinement and reduced fine-line appearance by weeks 3–5. Measurable collagen density improvement and wound-healing acceleration by weeks 8–12.',
  },
  {
    rank: '03',
    name: 'Ipamorelin / CJC-1295',
    subtitle: 'GH Secretagogue Blend',
    slug: 'ipamorelin-cjc-1295-blend-10mg',
    color: '#a78bfa',
    badge: 'Sleep & Body Composition',
    badgeBg: 'rgba(167,139,250,0.12)',
    icon: <Clock size={22} />,
    mechanism:
      'Ipamorelin is a selective GHS-R1a agonist (growth hormone secretagogue receptor), producing a clean GH pulse without cortisol or prolactin elevation — the critical distinction from GHRP-6. CJC-1295 (no DAC) is a GHRH analog that acts on a separate receptor. Together they produce synergistic 4–8× GH pulse amplification through two complementary pathways.',
    whyBeginner:
      'Ipamorelin specifically does not elevate cortisol or prolactin at standard doses — making it far better tolerated than GHRP-6 for beginners. Pre-sleep timing is intuitive and aligns with the natural GH peak during slow-wave sleep. Effects build gradually and predictably. The blend format simplifies administration.',
    dose: '200–300 mcg of each compound (blend handles this)',
    route: 'Subcutaneous injection 30–45 minutes before sleep',
    cycle: '8–12 weeks',
    expect:
      'Improved sleep quality and vivid dreams in weeks 1–2 (GH pulse working during slow-wave sleep). Improved recovery and mild body composition shifts by weeks 4–6. Measurable fat loss and muscle tone improvement by weeks 8–12.',
  },
  {
    rank: '04',
    name: 'Epithalon',
    subtitle: 'Tetrapeptide / Telomerase Activator',
    slug: 'epitalon-50mg',
    color: '#22d3ee',
    badge: 'Longevity',
    badgeBg: 'rgba(34,211,238,0.12)',
    icon: <Star size={22} />,
    mechanism:
      'Epithalon (Epitalon) is a synthetic tetrapeptide (Ala-Glu-Asp-Gly) originally developed by the St. Petersburg Institute of Bioregulation. It activates telomerase — the enzyme responsible for maintaining telomere length — and resets epigenetic aging markers in multiple cell types, including pineal gland peptides that regulate melatonin production.',
    whyBeginner:
      'The protocol is uniquely simple: a short 10-day course run 2–3 times per year. No daily injections year-round. The side-effect profile in published research is exceptionally gentle — no hormonal disruption, no receptor saturation. Effects are slow and cumulative by design, which reduces the need for precise dose management.',
    dose: '5–10 mg every other day during the 10-day course',
    route: 'Subcutaneous injection',
    cycle: '10 consecutive days, 2–3 courses per year (minimum 4 months between courses)',
    expect:
      'Effects are cumulative and subtle — improved sleep quality, enhanced sense of wellbeing, and gradually improved biomarkers of aging over multiple annual courses. Not a rapid-result compound — a long-term longevity investment.',
  },
  {
    rank: '05',
    name: 'TB-500',
    subtitle: 'Thymosin Beta-4 Fragment',
    slug: 'tb-500-10mg',
    color: '#fb923c',
    badge: 'Athletic Recovery',
    badgeBg: 'rgba(251,146,60,0.12)',
    icon: <Activity size={22} />,
    mechanism:
      'TB-500 is a synthetic fragment of Thymosin Beta-4 that binds actin — the structural protein in all cells. This binding promotes cell migration, new blood vessel formation, and systemic tissue repair across connective tissue, muscle, tendons, and ligaments. Unlike BPC-157 which acts more locally, TB-500 distributes systemically.',
    whyBeginner:
      'Excellent choice for active researchers or athletes with multiple tissue repair targets. The dosing schedule is simple (twice weekly), the mechanism is well-understood, and the tolerability profile is clean. Works synergistically with BPC-157 (together called the Wolverine Stack) — but works independently as a standalone beginner choice.',
    dose: '2.5–5 mg twice per week',
    route: 'Subcutaneous injection',
    cycle: '4–6 weeks (acute); 8–10 weeks (chronic or multiple injury sites)',
    expect:
      'Reduced systemic inflammation and improved recovery speed within weeks 1–2. Improved tendon and ligament flexibility by weeks 3–4. Measurable tissue repair in chronic injury sites by weeks 6–8.',
  },
]

const avoidList = [
  {
    compound: 'IGF-1 LR3',
    color: '#ef4444',
    reason:
      'IGF-1 LR3 binds the IGF-1 receptor at 3× native potency with a 20–30 hour half-life. Without an established baseline of IGF-1 levels, diet, and body composition data, dosing becomes guesswork. Hypoglycemia risk requires dietary precision that inexperienced researchers often underestimate. This is a second- or third-cycle compound — not a starting point.',
    instead: 'Establish your GH axis baseline with Ipamorelin/CJC-1295 for one full cycle first.',
  },
  {
    compound: 'GLP-1 Agonists (Semaglutide / Tirzepatide)',
    color: '#ef4444',
    reason:
      'GLP-1 agonists are powerful and well-studied for metabolic conditions, but they require baseline metabolic labs (HbA1c, fasting glucose, insulin), careful dose titration, and monitoring for GI side effects that beginners frequently mismanage. The therapeutic window and titration schedules are not beginner-friendly without medical oversight.',
    instead: 'Consult a healthcare provider before starting GLP-1 agonist protocols. These are not unguided starter compounds.',
  },
  {
    compound: 'GHRP-6',
    color: '#f97316',
    reason:
      'GHRP-6 is a GH secretagogue that also significantly elevates cortisol and prolactin — unlike Ipamorelin. Prolactin elevation is an undesirable side effect for most researchers and is entirely avoidable. Ipamorelin was specifically developed as a cleaner alternative with identical GH-stimulating mechanism and none of the hormonal side effects.',
    instead: 'Use Ipamorelin/CJC-1295 instead. Same GH pulse result, without the cortisol and prolactin elevation.',
  },
  {
    compound: 'Follistatin (344 / 315)',
    color: '#f97316',
    reason:
      'Follistatin inhibits myostatin and activin, theoretically enabling muscle growth beyond genetic set points. However, its mechanism is complex, human data is extremely limited, half-life is very short requiring precise timing, and off-target inhibition of FSH and other activin-dependent pathways introduces hormonal disruption risk that is poorly characterized at research doses.',
    instead: 'Establish a thorough baseline of GH axis response before considering compounds with limited human safety data.',
  },
]

const starterProtocol = [
  {
    week: 'Week 1–2',
    color: '#d4a843',
    title: 'Foundation Phase',
    items: [
      'BPC-157: 250 mcg subcutaneous or oral, once daily (morning)',
      'GHK-Cu: topical application to target skin area, morning and evening',
      'Log: energy, sleep quality, any injection site response, gut comfort',
      'Baseline photos if tracking skin goals',
    ],
  },
  {
    week: 'Week 3–4',
    color: '#34d399',
    title: 'Response Assessment',
    items: [
      'Continue same protocol — no changes',
      'Note: local tissue changes in target area (injury, gut, skin)',
      'Log objective markers: any pain scale change, range of motion',
      'Assess tolerability — any unexpected response? Stop and document.',
    ],
  },
  {
    week: 'Week 5–6',
    color: '#22d3ee',
    title: 'Continuation Phase',
    items: [
      'BPC-157: can increase to 500 mcg if tolerating well and goal warrants it',
      'GHK-Cu: continue topical, optionally add subQ 200 mcg if skin goal is primary',
      'Midpoint progress assessment: compare to baseline photos and notes',
      'Optional: run midpoint bloodwork if tracking systemic markers',
    ],
  },
  {
    week: 'Week 7–8',
    color: '#a78bfa',
    title: 'Completion & Evaluation',
    items: [
      'Complete the cycle — do not extend without documented reason',
      'Final assessment: compare all logged markers to baseline',
      'Off period: minimum 4 weeks before starting next cycle',
      'Plan next cycle: consider adding Ipamorelin/CJC-1295 or TB-500 based on goals',
    ],
  },
]

const sourcingPoints = [
  {
    icon: <FlaskConical size={18} />,
    color: '#d4a843',
    title: 'HPLC Certificate of Analysis',
    body: 'High-performance liquid chromatography (HPLC) testing quantifies purity and identifies contaminants. Every reputable supplier publishes batch-specific COAs. If a supplier cannot provide one on request, do not purchase.',
  },
  {
    icon: <CheckCircle size={18} />,
    color: '#34d399',
    title: '>98% Purity Certificate',
    body: 'Research-grade peptides should test at 98% or greater purity. Sub-95% purity means 5%+ of your compound is unknown — potentially bioactive impurities, oxidized amino acids, or synthesis byproducts that confound results.',
  },
  {
    icon: <Microscope size={18} />,
    color: '#22d3ee',
    title: 'Mass Spectrometry Confirmation',
    body: 'Mass spec (LCMS or MALDI-TOF) verifies molecular weight and confirms the correct amino acid sequence. HPLC alone can show a clean peak for the wrong compound — mass spec is the definitive identity check.',
  },
  {
    icon: <Shield size={18} />,
    color: '#a78bfa',
    title: 'Batch-Level Sterility Testing',
    body: 'For injectable preparations, endotoxin (LAL) testing and sterility cultures are non-negotiable. Bacterial contamination in injectable peptides is a serious risk — established suppliers test at the batch level, not just at manufacturing.',
  },
]

const faqs = [
  {
    q: 'Is BPC-157 safe for beginners?',
    a: "BPC-157 has one of the cleanest safety profiles in peptide research. Decades of animal studies across multiple species show no LD50 (no lethal dose has been found even at very high doses), no carcinogenicity, and no serious adverse event reports at standard research doses. The peptide is derived from a naturally occurring gastric protein — it is structurally related to a compound your digestive system already produces. For beginners, the oral route adds another layer of simplicity and reduces injection-associated risk. That said, \"safe\" in research compounds always means: start low, know your baseline, log your responses, and stop if something unexpected occurs.",
  },
  {
    q: 'Do I need to inject peptides, or are there oral options?',
    a: 'BPC-157 is unique among peptides in having meaningful oral bioavailability — it is the primary exception to the general rule that peptides are destroyed by stomach acid. GHK-Cu is effective topically for skin goals, meaning no injection needed for that application. Most other peptides (Ipamorelin, CJC-1295, TB-500, Epithalon) require subcutaneous injection for bioavailability. Subcutaneous injection with an insulin syringe is a straightforward skill — very fine needles (29–31 gauge), minimal discomfort, and a small volume (typically 0.1–0.2 mL per injection). If injections are a barrier, BPC-157 oral is the best entry point.',
  },
  {
    q: 'How do I reconstitute peptides correctly?',
    a: 'Peptides arrive as lyophilized (freeze-dried) powder in a sealed vial. To reconstitute: (1) wipe the rubber stopper with an alcohol swab and allow to dry. (2) Draw the appropriate volume of bacteriostatic water (BW) into a syringe — most researchers use 1–2 mL BW per vial. (3) Inject the BW slowly down the inner side of the vial, never directly onto the powder cake. (4) Do not shake — swirl gently. Shaking causes foaming and can denature (break) the peptide chain, destroying bioactivity. (5) Allow it to fully dissolve, then refrigerate immediately. Reconstituted peptides stored in BW are stable for 28–30 days refrigerated. Never freeze reconstituted peptides.',
  },
  {
    q: 'Can I stack multiple peptides as a beginner?',
    a: "The conservative answer is: run one compound first. The practical answer for beginners is: one or two complementary compounds is reasonable if you start at the lower dose end and are meticulous about logging. BPC-157 + GHK-Cu topical is a reasonable first combination because they have completely different mechanisms (tissue repair vs. gene expression modulation for skin), no receptor overlap, and no documented interaction. Three or more compounds on a first cycle significantly reduces your ability to isolate what's working — or what's causing any side effect. Run the simple protocol first. Add complexity on cycle two.",
  },
  {
    q: 'How long until I see results from beginner peptides?',
    a: 'Timeline varies by compound and goal. BPC-157 for acute injury: inflammation reduction often within 1–2 weeks; meaningful tissue repair by weeks 4–6. GHK-Cu for skin: hydration improvement within 2 weeks; collagen density changes by weeks 8–12. Ipamorelin/CJC-1295 for body composition: sleep quality shifts within week 1–2; body composition changes by weeks 6–8. Epithalon for longevity: cumulative effects across multiple annual courses — not a rapid-result protocol. The fundamental rule: match your timeline expectations to the mechanism. Compounds that work at the gene expression level (GHK-Cu, Epithalon) are slower than compounds that act acutely on injury sites (BPC-157, TB-500).',
  },
]

// ── COMPONENT ─────────────────────────────────────────────────────────────────

export default function BestPeptidesBeginners() {
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
        {/* Background decorations */}
        <div style={{
          position: 'absolute', top: '-80px', right: '-40px',
          width: 560, height: 560,
          background: 'radial-gradient(circle, rgba(212,168,67,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '-100px', left: '25%',
          width: 440, height: 440,
          background: 'radial-gradient(circle, rgba(52,211,153,0.07) 0%, transparent 70%)',
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
          <div style={{ maxWidth: 860 }}>
            <div className="section-label" style={{ color: '#d4a843', borderColor: 'rgba(212,168,67,0.3)' }}>
              Beginner&rsquo;s Guide
            </div>
            <h1 className="heading-xl" style={{ color: '#ffffff', marginBottom: '1.5rem', marginTop: '1rem' }}>
              Best Peptides<br />
              <span className="gold-text">for Beginners</span>
            </h1>
            <p style={{ fontSize: '1.15rem', color: '#9090a8', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: 720 }}>
              Not all peptides are created equal for first-time researchers. The best beginner compounds
              share four traits: extensive safety data, simple protocols, forgiving dosing windows, and
              low side-effect profiles. This guide covers the five you should know — and the four you should
              avoid until you have cycle experience.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="#top-5" className="btn-primary">
                See the Top 5 <ArrowRight size={14} />
              </a>
              <a href="#starter-protocol" className="btn-secondary"
                style={{ color: '#e0e0f0', borderColor: 'rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.05)' }}
              >
                8-Week Protocol <Shield size={14} />
              </a>
            </div>
            <p style={{ fontSize: '0.78rem', color: '#555570', marginTop: '2rem' }}>
              For research and laboratory use only. Not intended for human consumption. All information is educational.
            </p>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>

        {/* ── WHAT MAKES A BEGINNER PEPTIDE ── */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label">Selection Criteria</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '0.75rem' }}>
            What Separates Beginner-Appropriate Peptides
          </h2>
          <p style={{ color: '#9090a8', fontSize: '1.05rem', marginBottom: '2.5rem', maxWidth: 700 }}>
            The peptide research space spans hundreds of compounds — most are not appropriate starting points.
            The four qualities below define compounds that experienced researchers recommend for first cycles.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
          }}>
            {heroQualities.map((q, i) => (
              <div key={i} style={{
                border: '1px solid rgba(0,0,0,0.07)',
                borderTop: `3px solid ${q.color}`,
                borderRadius: 16,
                padding: '1.75rem',
                background: '#fafafa',
              }}>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  width: 44, height: 44, borderRadius: 12,
                  background: `${q.color}18`,
                  color: q.color,
                  marginBottom: '1rem',
                }}>
                  {q.icon}
                </div>
                <div style={{ fontWeight: 800, fontSize: '1rem', color: '#0a0a14', marginBottom: '0.6rem' }}>
                  {q.title}
                </div>
                <p style={{ color: '#555570', fontSize: '0.92rem', lineHeight: 1.75, margin: 0 }}>
                  {q.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── TOP 5 BEGINNER PEPTIDES ── */}
        <section id="top-5" style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)', scrollMarginTop: '80px' }}>
          <div className="section-label">Top Picks</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '0.75rem' }}>
            The 5 Best Peptides for Beginners
          </h2>
          <p style={{ color: '#9090a8', fontSize: '1.05rem', marginBottom: '3rem', maxWidth: 700 }}>
            Ranked by tolerability, simplicity, and depth of safety research. Every compound below has
            well-characterized dosing, a low side-effect profile, and clear mechanisms that make response
            interpretation straightforward.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {beginnerPeptides.map((p) => (
              <div key={p.slug} style={{
                border: `1px solid rgba(0,0,0,0.07)`,
                borderLeft: `4px solid ${p.color}`,
                borderRadius: 20,
                overflow: 'hidden',
                background: '#fff',
                boxShadow: '0 2px 16px rgba(0,0,0,0.04)',
              }}>
                {/* Card header */}
                <div style={{
                  padding: '2rem 2rem 1.5rem',
                  borderBottom: '1px solid rgba(0,0,0,0.05)',
                  background: `linear-gradient(135deg, ${p.color}06 0%, transparent 60%)`,
                }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap' }}>
                    <div style={{
                      fontSize: '3rem', fontWeight: 900, color: p.color,
                      opacity: 0.18, lineHeight: 1, minWidth: 56,
                    }}>
                      {p.rank}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '0.4rem' }}>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0a0a14', margin: 0 }}>
                          {p.name}
                        </h3>
                        <span style={{
                          fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.04em',
                          textTransform: 'uppercase', color: p.color,
                          background: p.badgeBg,
                          border: `1px solid ${p.color}40`,
                          borderRadius: 20, padding: '3px 10px',
                        }}>
                          {p.badge}
                        </span>
                      </div>
                      <div style={{ color: '#9090a8', fontSize: '0.9rem', fontStyle: 'italic' }}>
                        {p.subtitle}
                      </div>
                    </div>
                    <a
                      href={AFFILIATE_PRODUCT(p.slug)}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: 6,
                        background: p.color,
                        color: '#0a0a14',
                        fontWeight: 700, fontSize: '0.85rem',
                        padding: '0.6rem 1.25rem',
                        borderRadius: 10,
                        textDecoration: 'none',
                        whiteSpace: 'nowrap',
                        transition: 'opacity 0.15s',
                      }}
                    >
                      Buy {p.name} <ExternalLink size={13} />
                    </a>
                  </div>
                </div>

                {/* Card body — 2-col grid */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '0',
                }}>
                  {/* Left: mechanism + why beginner */}
                  <div style={{ padding: '1.75rem 2rem', borderRight: '1px solid rgba(0,0,0,0.05)' }}>
                    <div style={{ marginBottom: '1.5rem' }}>
                      <div style={{
                        fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em',
                        textTransform: 'uppercase', color: p.color, marginBottom: '0.5rem',
                      }}>
                        Mechanism
                      </div>
                      <p style={{ color: '#3a3a4a', fontSize: '0.9rem', lineHeight: 1.75, margin: 0 }}>
                        {p.mechanism}
                      </p>
                    </div>
                    <div>
                      <div style={{
                        fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em',
                        textTransform: 'uppercase', color: '#34d399', marginBottom: '0.5rem',
                      }}>
                        Why Beginner-Appropriate
                      </div>
                      <p style={{ color: '#3a3a4a', fontSize: '0.9rem', lineHeight: 1.75, margin: 0 }}>
                        {p.whyBeginner}
                      </p>
                    </div>
                  </div>

                  {/* Right: dosing + timing + cycle + expect */}
                  <div style={{ padding: '1.75rem 2rem' }}>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '1rem',
                      marginBottom: '1.25rem',
                    }}>
                      {[
                        { label: 'Standard Dose', value: p.dose },
                        { label: 'Route', value: p.route },
                        { label: 'Cycle Length', value: p.cycle },
                      ].map((field) => (
                        <div key={field.label} style={{
                          background: '#f7f7fb',
                          borderRadius: 10,
                          padding: '0.85rem 1rem',
                          gridColumn: field.label === 'Cycle Length' ? 'span 2' : 'span 1',
                        }}>
                          <div style={{
                            fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.07em',
                            textTransform: 'uppercase', color: '#9090a8', marginBottom: '0.3rem',
                          }}>
                            {field.label}
                          </div>
                          <div style={{ fontWeight: 700, fontSize: '0.88rem', color: '#0a0a14' }}>
                            {field.value}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div style={{
                      background: `${p.color}0d`,
                      border: `1px solid ${p.color}30`,
                      borderRadius: 12,
                      padding: '1rem 1.1rem',
                    }}>
                      <div style={{
                        fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.07em',
                        textTransform: 'uppercase', color: p.color, marginBottom: '0.4rem',
                      }}>
                        What to Expect
                      </div>
                      <p style={{ color: '#3a3a4a', fontSize: '0.88rem', lineHeight: 1.7, margin: 0 }}>
                        {p.expect}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── WHAT TO AVOID ── */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label">Know Your Limits</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '0.75rem' }}>
            What to Avoid as a Beginner
          </h2>
          <p style={{ color: '#9090a8', fontSize: '1.05rem', marginBottom: '2.5rem', maxWidth: 700 }}>
            These four compounds or categories come up frequently in beginner research. Each has legitimate
            applications — at the right experience level. Starting here is the most common way first-cycle
            researchers end up with uninterpretable results or avoidable side effects.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}>
            {avoidList.map((item, i) => (
              <div key={i} style={{
                border: '1px solid rgba(0,0,0,0.07)',
                borderTop: `3px solid ${item.color}`,
                borderRadius: 16,
                padding: '1.75rem',
                background: '#fff',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.85rem' }}>
                  <XCircle size={18} color={item.color} />
                  <div style={{ fontWeight: 800, fontSize: '1rem', color: '#0a0a14' }}>
                    {item.compound}
                  </div>
                </div>
                <p style={{ color: '#555570', fontSize: '0.9rem', lineHeight: 1.75, marginBottom: '1rem' }}>
                  {item.reason}
                </p>
                <div style={{
                  background: 'rgba(52,211,153,0.07)',
                  border: '1px solid rgba(52,211,153,0.2)',
                  borderRadius: 10,
                  padding: '0.75rem 0.9rem',
                }}>
                  <div style={{
                    display: 'flex', alignItems: 'flex-start', gap: '0.5rem',
                  }}>
                    <CheckCircle size={14} color="#34d399" style={{ marginTop: 2, flexShrink: 0 }} />
                    <p style={{ color: '#3a3a4a', fontSize: '0.85rem', lineHeight: 1.65, margin: 0 }}>
                      <strong style={{ color: '#34d399' }}>Instead:</strong> {item.instead}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── STARTER PROTOCOL ── */}
        <section id="starter-protocol" style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)', scrollMarginTop: '80px' }}>
          <div className="section-label">First Protocol</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '0.75rem' }}>
            Beginner Starter Protocol — 8 Weeks
          </h2>
          <p style={{ color: '#9090a8', fontSize: '1.05rem', marginBottom: '0.75rem', maxWidth: 700 }}>
            This protocol uses BPC-157 and GHK-Cu (topical) — two compounds with zero receptor overlap,
            no hormonal effects, and documented tolerability. Simple, trackable, and effective for introducing
            peptide research.
          </p>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            background: 'rgba(212,168,67,0.08)',
            border: '1px solid rgba(212,168,67,0.25)',
            borderRadius: 10,
            padding: '0.6rem 1rem',
            marginBottom: '2.5rem',
          }}>
            <AlertTriangle size={14} color="#d4a843" />
            <span style={{ fontSize: '0.85rem', color: '#d4a843', fontWeight: 600 }}>
              Run baseline bloodwork before starting. Document everything.
            </span>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.25rem',
          }}>
            {starterProtocol.map((phase, i) => (
              <div key={i} style={{
                border: '1px solid rgba(0,0,0,0.07)',
                borderTop: `3px solid ${phase.color}`,
                borderRadius: 16,
                padding: '1.6rem',
                background: '#fafafa',
              }}>
                <div style={{
                  fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em',
                  textTransform: 'uppercase', color: phase.color, marginBottom: '0.3rem',
                }}>
                  {phase.week}
                </div>
                <div style={{ fontWeight: 800, fontSize: '1rem', color: '#0a0a14', marginBottom: '1rem' }}>
                  {phase.title}
                </div>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {phase.items.map((item, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                      <div style={{
                        width: 6, height: 6, borderRadius: '50%',
                        background: phase.color, marginTop: 7, flexShrink: 0,
                      }} />
                      <span style={{ color: '#555570', fontSize: '0.875rem', lineHeight: 1.65 }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Tracking callout */}
          <div style={{
            marginTop: '2rem',
            background: 'linear-gradient(135deg, rgba(212,168,67,0.06) 0%, rgba(34,211,238,0.04) 100%)',
            border: '1px solid rgba(212,168,67,0.2)',
            borderRadius: 16,
            padding: '1.75rem 2rem',
          }}>
            <div style={{ fontWeight: 800, fontSize: '1rem', color: '#0a0a14', marginBottom: '0.75rem' }}>
              What to Track During This Protocol
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem',
            }}>
              {[
                { label: 'Daily Log', items: ['Sleep quality (1–10)', 'Energy level (1–10)', 'Injection site notes', 'Any unexpected response'] },
                { label: 'Weekly Assessment', items: ['Target tissue pain scale', 'Range of motion (if injury)', 'Skin texture / hydration notes', 'Body weight'] },
                { label: 'Cycle Endpoints', items: ['Before/after photos (skin goals)', 'Midpoint and final bloodwork', 'Overall tolerability summary', 'Goals met / partially met / not met'] },
              ].map((col, i) => (
                <div key={i}>
                  <div style={{
                    fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em',
                    textTransform: 'uppercase', color: '#d4a843', marginBottom: '0.6rem',
                  }}>
                    {col.label}
                  </div>
                  <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {col.items.map((item, j) => (
                      <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem' }}>
                        <CheckCircle size={13} color="#34d399" style={{ marginTop: 3, flexShrink: 0 }} />
                        <span style={{ color: '#555570', fontSize: '0.85rem', lineHeight: 1.6 }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SOURCING ── */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label">Quality Assurance</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '0.75rem' }}>
            Sourcing Considerations
          </h2>
          <p style={{ color: '#9090a8', fontSize: '1.05rem', marginBottom: '2.5rem', maxWidth: 680 }}>
            Purity directly determines both research validity and tolerability. A nominally correct peptide
            at 90% purity contains 10% unknowns — byproducts, oxidized fragments, or contaminants that
            confound results and introduce avoidable risk. These are the four verification checkpoints.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.25rem',
            marginBottom: '2.5rem',
          }}>
            {sourcingPoints.map((s, i) => (
              <div key={i} style={{
                border: '1px solid rgba(0,0,0,0.07)',
                borderRadius: 14,
                padding: '1.5rem',
                background: '#fafafa',
              }}>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  width: 38, height: 38, borderRadius: 10,
                  background: `${s.color}18`,
                  color: s.color,
                  marginBottom: '0.9rem',
                }}>
                  {s.icon}
                </div>
                <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#0a0a14', marginBottom: '0.5rem' }}>
                  {s.title}
                </div>
                <p style={{ color: '#555570', fontSize: '0.88rem', lineHeight: 1.72, margin: 0 }}>
                  {s.body}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{
            background: 'linear-gradient(135deg, #0a0a14 0%, #12121f 100%)',
            borderRadius: 20,
            padding: '2.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
            flexWrap: 'wrap',
          }}>
            <div>
              <div style={{ fontWeight: 800, fontSize: '1.15rem', color: '#fff', marginBottom: '0.4rem' }}>
                Apollo Peptide Sciences — HPLC-Verified, Batch-Tested
              </div>
              <p style={{ color: '#9090a8', fontSize: '0.92rem', margin: 0, maxWidth: 500 }}>
                Every product includes a third-party certificate of analysis. Batch-level purity testing
                published on each product page. The standard for research-grade sourcing.
              </p>
            </div>
            <a
              href="https://phiogen.is"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: '#d4a843',
                color: '#0a0a14',
                fontWeight: 700, fontSize: '0.9rem',
                padding: '0.85rem 1.75rem',
                borderRadius: 12,
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              Shop Apollo Peptides <ExternalLink size={14} />
            </a>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label">FAQ</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '0.75rem' }}>
            Frequently Asked Questions
          </h2>
          <p style={{ color: '#9090a8', fontSize: '1.05rem', marginBottom: '2.5rem', maxWidth: 660 }}>
            The most common questions from first-time peptide researchers.
          </p>

          <div style={{ maxWidth: 860, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{
                  border: '1px solid rgba(0,0,0,0.07)',
                  borderRadius: 14,
                  overflow: 'hidden',
                  background: '#fff',
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: '100%', textAlign: 'left',
                    padding: '1.35rem 1.5rem',
                    background: 'none', border: 'none', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem',
                  }}
                >
                  <span style={{ fontWeight: 700, fontSize: '0.98rem', color: '#0a0a14', lineHeight: 1.4 }}>
                    {faq.q}
                  </span>
                  <span style={{ color: '#d4a843', flexShrink: 0 }}>
                    {openFaq === i ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </span>
                </button>
                {openFaq === i && (
                  <div style={{
                    padding: '0 1.5rem 1.35rem',
                    borderTop: '1px solid rgba(0,0,0,0.05)',
                  }}>
                    <p style={{ color: '#555570', fontSize: '0.92rem', lineHeight: 1.8, margin: '1rem 0 0' }}>
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── RELATED LINKS ── */}
        <section style={{ padding: '4rem 0' }}>
          <RelatedLinks currentPath="/best-peptides-beginners" />
        </section>

      </div>
    </div>
  )
}
