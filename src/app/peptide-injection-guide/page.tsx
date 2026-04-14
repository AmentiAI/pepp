'use client'
import Link from 'next/link'
import {
  ArrowRight,
  ExternalLink,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Syringe,
  ShieldCheck,
  RotateCcw,
  Trash2,
  Zap,
} from 'lucide-react'
import { AFFILIATE_BASE } from '@/lib/products'

const equipment = [
  {
    title: 'Insulin Syringes',
    sub: 'U-100 · 29–31 gauge · 0.5 ml or 1 ml',
    body: 'The gold standard for subcutaneous peptide injections. The fine gauge minimises tissue trauma, and the fixed needle reduces dead-space volume so none of your compound is wasted in the hub.',
    color: '#22d3ee',
    badge: 'Recommended',
  },
  {
    title: 'Needles — SC',
    sub: '31g × 5/16" (8 mm)',
    body: 'Ideal for subcutaneous injections into the abdomen, thigh, and upper arm. The short length targets the fat layer without penetrating muscle. Fine gauge means minimal discomfort on insertion.',
    color: '#34d399',
    badge: 'SC Protocol',
  },
  {
    title: 'Needles — IM',
    sub: '25g × 1" (25 mm)',
    body: 'Required for intramuscular injections into the vastus lateralis or deltoid. The longer shaft ensures the tip reaches deep into muscle belly, not subcutaneous fat. Use only when IM is specifically indicated.',
    color: '#a78bfa',
    badge: 'IM Protocol',
  },
  {
    title: 'Alcohol Swabs',
    sub: '70% isopropyl alcohol — pre-saturated',
    body: 'Used to disinfect vial rubber stoppers and injection sites before each use. Allow 30 seconds to air-dry before inserting the needle — wet alcohol can sting and introduce unnecessary irritation.',
    color: '#fb923c',
    badge: 'Safety',
  },
  {
    title: 'Sharps Container',
    sub: 'Puncture-resistant · FDA-cleared',
    body: 'Mandatory for safe needle disposal. Never recap and discard used syringes into household bins — this creates a biohazard risk. Many pharmacies offer free sharps containers and mail-back programs.',
    color: '#ef4444',
    badge: 'Disposal',
  },
]

const scSteps = [
  {
    step: 1,
    title: 'Wash hands thoroughly',
    body: 'Scrub with antibacterial soap for a minimum of 30 seconds, covering all surfaces including between fingers and under nails. This is the single most effective contamination-prevention step and must never be skipped.',
    highlight: false,
  },
  {
    step: 2,
    title: 'Draw air into syringe equal to dose volume',
    body: 'Before inserting the needle into the vial, pull the plunger back to draw in air equal to your target dose (e.g., 0.1 ml). This creates positive pressure inside the vial when injected, making it easier to withdraw the solution.',
    highlight: false,
  },
  {
    step: 3,
    title: 'Wipe vial top, inject air, draw peptide',
    body: 'Wipe the rubber stopper of the reconstituted peptide vial with a fresh alcohol swab. Allow 30 seconds to dry. Insert the needle, inject the air, then invert the vial and slowly withdraw your target dose. Keep the needle tip submerged in solution throughout.',
    highlight: true,
  },
  {
    step: 4,
    title: 'Remove air bubbles',
    body: 'Hold the syringe needle-up and gently tap the barrel to encourage bubbles to rise. Depress the plunger very slightly to expel any air from the tip. Small bubbles are not dangerous but cause discomfort and reduce dose accuracy.',
    highlight: false,
  },
  {
    step: 5,
    title: 'Choose injection site and prepare skin',
    body: 'Select your injection site (see rotation map below). Clean the area with an alcohol swab and allow it to dry. Pinch 1–2 inches of subcutaneous fat between your thumb and forefinger to lift it away from underlying muscle.',
    highlight: false,
  },
  {
    step: 6,
    title: 'Insert needle at correct angle',
    body: 'For individuals with adequate subcutaneous fat: insert at 90°. For lean individuals with minimal SC tissue: use a 45° angle to avoid inadvertently hitting muscle. The needle should slide in smoothly without resistance.',
    highlight: true,
  },
  {
    step: 7,
    title: 'Inject slowly — 10+ seconds for 0.5 ml',
    body: 'Depress the plunger at a controlled, steady rate. For a standard 0.5 ml dose, take at least 10 seconds. Rushing the injection forces solution into the tissue under pressure, increasing pain, bleeding, and local inflammation.',
    highlight: true,
  },
  {
    step: 8,
    title: 'Remove needle and apply gentle pressure',
    body: 'Withdraw the needle at the same angle of insertion. Apply gentle pressure with a clean swab for 10–15 seconds. Do NOT rub the site — rubbing disperses the solution before it can be absorbed and disrupts the local depot.',
    highlight: false,
  },
  {
    step: 9,
    title: 'Dispose in sharps container immediately',
    body: 'Place the used syringe directly into the sharps container without recapping. Never set a used needle down on a surface. Sharps injuries are a real risk and fully preventable with immediate disposal.',
    highlight: false,
  },
]

const injectionSites = [
  {
    site: 'Abdomen',
    detail: '2 inches from navel — all quadrants',
    body: 'The preferred primary site for most peptide research protocols. The abdomen has a large, consistent SC fat depot that provides reliable absorption. Avoid the 2-inch zone immediately surrounding the navel where blood vessels and nerves are denser.',
    color: '#22d3ee',
    preferred: true,
  },
  {
    site: 'Outer Thigh',
    detail: 'Upper outer quadrant of thigh',
    body: 'An excellent secondary site. Target the middle third of the outer thigh where SC fat is consistent. Avoid the inner thigh and the area near the knee. Easy to access for self-injection.',
    color: '#34d399',
    preferred: false,
  },
  {
    site: 'Glute',
    detail: 'Upper outer quadrant',
    body: 'Suitable for SC injection when enough fat is present. Divide the buttock into four quadrants mentally and inject in the upper outer quadrant only — avoiding the inner quadrants where the sciatic nerve runs.',
    color: '#a78bfa',
    preferred: false,
  },
  {
    site: 'Upper Arm',
    detail: 'Posterior surface (back of arm)',
    body: 'The posterior tricep region is a common SC site. Best administered by a second person or with the arm braced against a surface. Less commonly used for self-injection due to access difficulty.',
    color: '#fb923c',
    preferred: false,
  },
]

const imSites = [
  {
    site: 'Vastus Lateralis',
    detail: 'Outer quadriceps — preferred IM site',
    body: 'The outer quad is the safest and most accessible IM site for self-injection. Divide the thigh into thirds — inject into the middle third of the outer surface. Contains no major nerves or vessels in the lateral compartment.',
  },
  {
    site: 'Deltoid',
    detail: 'Upper outer arm — small volumes only',
    body: 'Suitable for small volumes (0.5 ml or less). Target the inverted triangle below the acromion process, avoiding the area near the axillary nerve. Best for volumes where the vastus lateralis may produce more discomfort.',
  },
]

const painTips = [
  {
    n: 1,
    tip: 'Let reconstituted peptide warm to room temperature',
    detail: 'Remove the vial from the refrigerator 10–15 minutes before injecting. Cold solution injected directly into tissue is a primary cause of burning and cramping at the injection site.',
  },
  {
    n: 2,
    tip: 'Inject slowly — never rush',
    detail: 'The rate of injection directly determines discomfort. A slow, controlled depression of the plunger (10–15 seconds for 0.5 ml) gives tissue time to accommodate the fluid volume without pressure-driven pain.',
  },
  {
    n: 3,
    tip: 'Use a fresh needle every single injection',
    detail: 'A needle becomes dull after a single use. Reused needles cause significantly more pain, drag against tissue, and carry contamination risk. Always use a new syringe for each injection session.',
  },
  {
    n: 4,
    tip: 'Ensure SC placement — not intramuscular for SC protocols',
    detail: 'Injecting into muscle when SC is intended causes sharp pain and alters the pharmacokinetic profile of the peptide. Pinch the fat correctly and maintain the appropriate angle to stay in the SC layer.',
  },
  {
    n: 5,
    tip: 'Choose the finest gauge appropriate',
    detail: 'A 31g needle causes less tissue damage than a 25g needle for SC injections. Use the finest gauge that still allows practical draw and injection times for your compound and volume.',
  },
  {
    n: 6,
    tip: 'Rotate injection sites every session',
    detail: 'Injecting repeatedly into the same site causes scar tissue formation, inflammation, and local lipodystrophy. Systematic rotation across sites preserves tissue integrity and maintains consistent absorption.',
  },
]

const commonMistakes = [
  {
    mistake: 'Injecting into wrong tissue type',
    consequence: 'Incorrect pharmacokinetics, reduced efficacy, increased pain. SC peptides injected IM are absorbed faster and may produce suboptimal results.',
    severity: 'high',
  },
  {
    mistake: 'Reusing needles',
    consequence: 'Blunted tips cause mechanical tissue damage and significantly increased injection pain. Reuse also introduces contamination risk from skin flora into the vial.',
    severity: 'high',
  },
  {
    mistake: 'Not rotating injection sites',
    consequence: 'Repeated injection into the same location causes lipodystrophy — localised fat atrophy or hypertrophy — and uneven scar tissue that impairs absorption over time.',
    severity: 'high',
  },
  {
    mistake: 'Injecting cold solution',
    consequence: 'Cold peptide solution causes burning, cramping, and increased local inflammation. Always allow vials to reach room temperature before drawing the dose.',
    severity: 'medium',
  },
  {
    mistake: 'Not removing air bubbles',
    consequence: 'While air bubbles in SC injections are not medically dangerous (unlike IV), they cause discomfort, produce a burning sensation, and reduce dose accuracy.',
    severity: 'low',
  },
  {
    mistake: 'Touching the needle',
    consequence: 'Any contact with the needle tip — including with the vial rubber after the first puncture — introduces surface contamination. Never touch the needle; use new sterile technique each time.',
    severity: 'high',
  },
  {
    mistake: 'Not wiping vial tops with alcohol',
    consequence: 'The rubber stopper accumulates environmental contamination between uses. Wiping with 70% isopropyl before each access is a critical sterility step that must not be skipped.',
    severity: 'high',
  },
  {
    mistake: 'Rushing the injection',
    consequence: 'Rapid depression of the plunger forces solution under pressure into tissue, causing pain, bruising, and local bleeding. It also increases the chance of solution tracking back along the needle track.',
    severity: 'medium',
  },
]

const severityColor: Record<string, string> = {
  high: '#ef4444',
  medium: '#f59e0b',
  low: '#22d3ee',
}
const severityLabel: Record<string, string> = {
  high: 'High Risk',
  medium: 'Moderate',
  low: 'Low Risk',
}

export default function PeptideInjectionGuidePage() {
  return (
    <main style={{ background: '#fff', color: '#1a1a2a' }}>

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section
        style={{
          background: 'linear-gradient(135deg, #edfcff 0%, #f0f8ff 50%, #f7f8fc 100%)',
          padding: 'clamp(5rem, 10vw, 8rem) 1.5rem clamp(4rem, 8vw, 6rem)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '10%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 700,
            height: 500,
            background: 'radial-gradient(ellipse, rgba(34,211,238,0.10) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ position: 'relative', maxWidth: 860, margin: '0 auto' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Step-by-Step Protocol</div>
          <h1
            className="heading-xl"
            style={{ color: '#0a0a14', marginBottom: '0.75rem', marginTop: '0.5rem' }}
          >
            Peptide Injection Guide
          </h1>
          <p className="heading-md gold-text" style={{ marginBottom: '1rem', fontWeight: 700 }}>
            Subcutaneous &amp; intramuscular technique — complete verified protocol
          </p>
          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.15rem)',
              color: '#555570',
              maxWidth: 620,
              margin: '0 auto 2rem',
              lineHeight: 1.75,
            }}
          >
            Two injection methods are used in peptide research: subcutaneous (SC) and intramuscular (IM).
            SC is the standard for the vast majority of peptides — it delivers compound into the fat layer
            below the skin for slower, sustained absorption. IM is reserved for specific compounds like
            TB-500 (deep tissue application) or localised IGF-1 LR3 protocols where proximity to target
            tissue is the objective. This guide covers both, step-by-step.
          </p>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              background: 'rgba(34,211,238,0.08)',
              border: '1px solid rgba(34,211,238,0.25)',
              borderRadius: 12,
              padding: '0.75rem 1.25rem',
              marginBottom: '2rem',
              fontSize: '0.92rem',
              color: '#0891b2',
              fontWeight: 600,
            }}
          >
            <ShieldCheck size={17} />
            For research use only — always follow applicable regulations in your jurisdiction
          </div>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/guide" className="btn-primary">
              Complete Peptide Guide <ArrowRight size={16} />
            </Link>
            <a
              href={AFFILIATE_BASE}
              target="_blank"
              rel="sponsored noopener noreferrer"
              className="btn-secondary"
            >
              Shop Peptides <ExternalLink size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* ── SC vs IM COMPARISON ──────────────────────────────────────── */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 1.5rem', background: '#fff' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Method Selection</div>
            <h2 className="heading-lg" style={{ marginTop: '0.5rem' }}>SC vs IM — When to Use Each</h2>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {/* SC */}
            <div
              style={{
                background: '#fff',
                border: '2px solid rgba(34,211,238,0.35)',
                borderRadius: 20,
                padding: '2rem',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 16,
                  right: 16,
                  background: 'rgba(34,211,238,0.10)',
                  border: '1px solid rgba(34,211,238,0.28)',
                  borderRadius: 100,
                  padding: '0.2rem 0.75rem',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: '#22d3ee',
                }}
              >
                Standard Choice
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1rem' }}>
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 12,
                    background: 'rgba(34,211,238,0.10)',
                    border: '1px solid rgba(34,211,238,0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#22d3ee',
                  }}
                >
                  <Syringe size={20} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0a0a14' }}>Subcutaneous (SC)</h3>
              </div>
              <p style={{ color: '#555570', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                Injection into the fat layer directly beneath the skin. The most common method for peptide
                research due to ease of self-administration, minimal discomfort, and predictable absorption
                kinetics from the SC depot.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                {[
                  'BPC-157, GHK-Cu, Ipamorelin, CJC-1295',
                  'Retatrutide, Semaglutide, Tirzepatide',
                  'Epithalon, Selank, Semax',
                  'Most growth hormone secretagogues',
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', fontSize: '0.9rem', color: '#444460' }}>
                    <CheckCircle size={14} style={{ color: '#22d3ee', marginTop: 3, flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* IM */}
            <div
              style={{
                background: '#fff',
                border: '1px solid rgba(167,139,250,0.3)',
                borderRadius: 20,
                padding: '2rem',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 16,
                  right: 16,
                  background: 'rgba(167,139,250,0.08)',
                  border: '1px solid rgba(167,139,250,0.22)',
                  borderRadius: 100,
                  padding: '0.2rem 0.75rem',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: '#a78bfa',
                }}
              >
                Specific Protocols
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1rem' }}>
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 12,
                    background: 'rgba(167,139,250,0.10)',
                    border: '1px solid rgba(167,139,250,0.22)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#a78bfa',
                  }}
                >
                  <Zap size={20} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0a0a14' }}>Intramuscular (IM)</h3>
              </div>
              <p style={{ color: '#555570', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                Injection directly into muscle belly. Used when rapid systemic uptake is desired or when
                localised delivery to deep tissue is the protocol objective. Requires longer needles and
                greater precision with site selection.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                {[
                  'TB-500 (deep tissue / systemic)',
                  'IGF-1 LR3 (localised intramuscular)',
                  'When systemic absorption speed is prioritised',
                  'Protocols specifying intramuscular delivery',
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', fontSize: '0.9rem', color: '#444460' }}>
                    <CheckCircle size={14} style={{ color: '#a78bfa', marginTop: 3, flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── EQUIPMENT ────────────────────────────────────────────────── */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 1.5rem', background: '#f7f8fc' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Before You Begin</div>
            <h2 className="heading-lg" style={{ marginTop: '0.5rem' }}>Equipment Overview</h2>
            <p style={{ color: '#555570', fontSize: '1rem', marginTop: '0.75rem', maxWidth: 540, margin: '0.75rem auto 0' }}>
              Using correct equipment for every injection is non-negotiable. Each component serves a specific function in maintaining sterility, accuracy, and safety.
            </p>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {equipment.map((eq) => (
              <div
                key={eq.title}
                className="hover-card-border"
                style={{
                  background: '#fff',
                  border: '1px solid rgba(0,0,0,0.08)',
                  borderRadius: 18,
                  padding: '1.75rem',
                  transition: 'border-color 0.2s, box-shadow 0.2s, transform 0.2s',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: `${eq.color}12`,
                      border: `1px solid ${eq.color}28`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: eq.color,
                    }}
                  >
                    <Syringe size={20} />
                  </div>
                  <span
                    style={{
                      background: `${eq.color}12`,
                      border: `1px solid ${eq.color}25`,
                      borderRadius: 100,
                      padding: '0.15rem 0.6rem',
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      color: eq.color,
                    }}
                  >
                    {eq.badge}
                  </span>
                </div>
                <div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#0a0a14', marginBottom: '0.2rem' }}>
                    {eq.title}
                  </h3>
                  <p style={{ fontSize: '0.78rem', color: eq.color, fontWeight: 600, marginBottom: '0.5rem' }}>
                    {eq.sub}
                  </p>
                  <p style={{ fontSize: '0.875rem', color: '#555570', lineHeight: 1.65 }}>{eq.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SC STEP BY STEP ──────────────────────────────────────────── */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 1.5rem', background: '#fff' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div className="section-label" style={{ color: '#22d3ee' }}>Subcutaneous Protocol</div>
          <h2 className="heading-lg" style={{ marginTop: '0.5rem', marginBottom: '0.75rem' }}>
            SC Injection — Step by Step
          </h2>
          <p style={{ color: '#555570', lineHeight: 1.75, marginBottom: '2rem', fontSize: '1.05rem' }}>
            Follow each step in sequence. The subcutaneous route is forgiving for most peptides,
            but technique still determines comfort, consistency, and sterility outcomes.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {scSteps.map((step) => (
              <div
                key={step.step}
                style={{
                  background: step.highlight ? 'rgba(34,211,238,0.04)' : '#fff',
                  border: step.highlight ? '1px solid rgba(34,211,238,0.22)' : '1px solid rgba(0,0,0,0.07)',
                  borderRadius: 14,
                  padding: '1.25rem 1.5rem',
                  display: 'flex',
                  gap: '1.25rem',
                  alignItems: 'flex-start',
                }}
              >
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 10,
                    background: step.highlight ? 'rgba(34,211,238,0.13)' : 'rgba(0,0,0,0.05)',
                    border: step.highlight ? '1px solid rgba(34,211,238,0.32)' : '1px solid rgba(0,0,0,0.09)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    fontSize: '0.95rem',
                    fontWeight: 900,
                    color: step.highlight ? '#22d3ee' : '#9090a8',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {step.step}
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: '#0a0a14',
                      marginBottom: '0.35rem',
                    }}
                  >
                    {step.title}
                  </h3>
                  <p style={{ color: '#555570', fontSize: '0.95rem', lineHeight: 1.65 }}>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INJECTION SITES MAP ──────────────────────────────────────── */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 1.5rem', background: '#f7f8fc' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div className="section-label" style={{ justifyContent: 'center', color: '#22d3ee' }}>Site Selection</div>
            <h2 className="heading-lg" style={{ marginTop: '0.5rem' }}>SC Injection Sites</h2>
            <p style={{ color: '#555570', fontSize: '1rem', marginTop: '0.75rem', maxWidth: 540, margin: '0.75rem auto 0' }}>
              Four primary subcutaneous sites are used in peptide research protocols. Each provides reliable
              SC access — rotation between them preserves tissue integrity.
            </p>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
              gap: '1.25rem',
              marginBottom: '2rem',
            }}
          >
            {injectionSites.map((site) => (
              <div
                key={site.site}
                style={{
                  background: '#fff',
                  border: site.preferred ? `2px solid ${site.color}40` : '1px solid rgba(0,0,0,0.08)',
                  borderRadius: 18,
                  padding: '1.5rem',
                  position: 'relative',
                }}
              >
                {site.preferred && (
                  <div
                    style={{
                      position: 'absolute',
                      top: 14,
                      right: 14,
                      background: `${site.color}12`,
                      border: `1px solid ${site.color}28`,
                      borderRadius: 100,
                      padding: '0.15rem 0.6rem',
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      color: site.color,
                    }}
                  >
                    Preferred
                  </div>
                )}
                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0a0a14', marginBottom: '0.25rem' }}>
                  {site.site}
                </h3>
                <p style={{ fontSize: '0.78rem', color: site.color, fontWeight: 600, marginBottom: '0.65rem' }}>
                  {site.detail}
                </p>
                <p style={{ fontSize: '0.88rem', color: '#555570', lineHeight: 1.65 }}>{site.body}</p>
              </div>
            ))}
          </div>

          {/* Rotation Protocol callout */}
          <div
            style={{
              background: 'rgba(34,211,238,0.05)',
              border: '1px solid rgba(34,211,238,0.22)',
              borderRadius: 16,
              padding: '1.5rem 2rem',
              display: 'flex',
              gap: '1.25rem',
              alignItems: 'flex-start',
            }}
          >
            <RotateCcw size={22} style={{ color: '#22d3ee', flexShrink: 0, marginTop: 3 }} />
            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#0a0a14', marginBottom: '0.4rem' }}>
                Rotation Protocol — Why It Matters
              </h3>
              <p style={{ color: '#555570', fontSize: '0.95rem', lineHeight: 1.7 }}>
                Injecting into the same site repeatedly causes localised tissue changes: scar formation,
                reduced SC fat, impaired vascularisation, and eventually lipodystrophy — a permanent
                change in the fat layer that alters absorption unpredictably. Rotate systematically across
                all four sites (abdomen quadrants, both thighs, both gluteal regions) so that no single
                spot receives consecutive injections. A simple numbered rotation log prevents accidental
                overuse of one area.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTRAMUSCULAR PROTOCOL ───────────────────────────────────── */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 1.5rem', background: '#fff' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div className="section-label" style={{ color: '#a78bfa' }}>IM Protocol</div>
          <h2 className="heading-lg" style={{ marginTop: '0.5rem', marginBottom: '0.75rem' }}>
            Intramuscular Injection Technique
          </h2>
          <p style={{ color: '#555570', lineHeight: 1.75, marginBottom: '1.5rem', fontSize: '1.05rem' }}>
            IM injections are used for compounds like TB-500 where systemic distribution via deep tissue
            uptake is the goal, or for localised IGF-1 LR3 protocols targeting specific muscle bellies.
            Technique differs meaningfully from SC — depth and angle must ensure the needle tip is
            fully within muscle, not in the overlying fat layer.
          </p>

          {/* IM Sites */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
            {imSites.map((site, i) => (
              <div
                key={i}
                style={{
                  background: 'rgba(167,139,250,0.04)',
                  border: '1px solid rgba(167,139,250,0.2)',
                  borderRadius: 14,
                  padding: '1.25rem 1.5rem',
                }}
              >
                <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#0a0a14', marginBottom: '0.2rem' }}>
                  {site.site}
                </h3>
                <p style={{ fontSize: '0.8rem', color: '#a78bfa', fontWeight: 600, marginBottom: '0.5rem' }}>
                  {site.detail}
                </p>
                <p style={{ color: '#555570', fontSize: '0.95rem', lineHeight: 1.65 }}>{site.body}</p>
              </div>
            ))}
          </div>

          {/* IM Technique steps */}
          <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0a0a14', marginBottom: '1rem' }}>
            IM Injection Technique
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2rem' }}>
            {[
              { n: 1, text: 'Use a 25g × 1" needle — a 31g insulin syringe will not reach muscle in most injection sites.' },
              { n: 2, text: 'Insert at a strict 90° angle. Unlike SC, there is no pinching — the skin and underlying fat should be relaxed and flat. Full needle depth is required.' },
              { n: 3, text: 'Aspirate briefly (pull plunger back slightly) — if blood appears, the needle has entered a vessel. Withdraw, apply pressure, and restart at a new site.' },
              { n: 4, text: 'Inject at a slow, controlled rate identical to SC protocol. Muscle tissue is more vascular than fat — slow injection reduces bruising.' },
            ].map((item) => (
              <div
                key={item.n}
                style={{
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'flex-start',
                  background: '#f7f8fc',
                  border: '1px solid rgba(0,0,0,0.06)',
                  borderRadius: 12,
                  padding: '1rem 1.25rem',
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 8,
                    background: 'rgba(167,139,250,0.12)',
                    border: '1px solid rgba(167,139,250,0.28)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    fontSize: '0.88rem',
                    fontWeight: 900,
                    color: '#a78bfa',
                  }}
                >
                  {item.n}
                </div>
                <p style={{ color: '#555570', fontSize: '0.93rem', lineHeight: 1.65, paddingTop: 4 }}>{item.text}</p>
              </div>
            ))}
          </div>

          {/* Z-Track */}
          <div
            style={{
              background: 'rgba(167,139,250,0.05)',
              border: '1px solid rgba(167,139,250,0.22)',
              borderRadius: 16,
              padding: '1.5rem 2rem',
            }}
          >
            <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#0a0a14', marginBottom: '0.5rem' }}>
              Z-Track Technique — Minimising Leakage
            </h3>
            <p style={{ color: '#555570', fontSize: '0.93rem', lineHeight: 1.7 }}>
              The Z-track method reduces solution tracking back along the needle path after withdrawal.
              Before inserting, use your non-dominant hand to pull the overlying skin 1–2 cm laterally
              (sideways), stretching it away from the intended injection site. Insert the needle, inject,
              wait 10 seconds, then withdraw — while still holding the skin displaced. Release the skin
              after the needle is out. This seals the needle track as the tissue realigns, preventing
              compound leakage into the SC layer or onto the skin surface.
            </p>
          </div>
        </div>
      </section>

      {/* ── PAIN MINIMISATION ────────────────────────────────────────── */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 1.5rem', background: '#f7f8fc' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Comfort Protocol</div>
            <h2 className="heading-lg" style={{ marginTop: '0.5rem' }}>Pain Minimisation</h2>
            <p style={{ color: '#555570', fontSize: '1rem', marginTop: '0.75rem', maxWidth: 520, margin: '0.75rem auto 0' }}>
              Proper technique makes injections nearly painless. These six practices address the main causes of injection discomfort.
            </p>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
              gap: '1rem',
            }}
          >
            {painTips.map((tip) => (
              <div
                key={tip.n}
                style={{
                  background: '#fff',
                  border: '1px solid rgba(0,0,0,0.07)',
                  borderRadius: 16,
                  padding: '1.5rem',
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'flex-start',
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    background: 'rgba(34,211,238,0.10)',
                    border: '1px solid rgba(34,211,238,0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    fontSize: '0.9rem',
                    fontWeight: 900,
                    color: '#22d3ee',
                  }}
                >
                  {tip.n}
                </div>
                <div>
                  <h3 style={{ fontSize: '0.97rem', fontWeight: 700, color: '#0a0a14', marginBottom: '0.35rem' }}>
                    {tip.tip}
                  </h3>
                  <p style={{ color: '#555570', fontSize: '0.88rem', lineHeight: 1.65 }}>{tip.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMON MISTAKES ──────────────────────────────────────────── */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 1.5rem', background: '#fff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div className="section-label" style={{ justifyContent: 'center', color: '#f59e0b' }}>What to Avoid</div>
            <h2 className="heading-lg" style={{ marginTop: '0.5rem' }}>Common Injection Mistakes</h2>
            <p style={{ color: '#555570', fontSize: '1rem', marginTop: '0.75rem', maxWidth: 520, margin: '0.75rem auto 0' }}>
              These eight errors are the most frequently observed in self-administered peptide injection protocols — along with their consequences.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {commonMistakes.map((item, i) => (
              <div
                key={i}
                style={{
                  background: '#fff',
                  border: `1px solid ${severityColor[item.severity]}22`,
                  borderLeft: `4px solid ${severityColor[item.severity]}`,
                  borderRadius: 14,
                  padding: '1.25rem 1.5rem',
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'flex-start',
                }}
              >
                <XCircle size={20} style={{ color: severityColor[item.severity], flexShrink: 0, marginTop: 2 }} />
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '0.35rem', flexWrap: 'wrap' }}>
                    <h3 style={{ fontSize: '0.97rem', fontWeight: 800, color: '#0a0a14' }}>{item.mistake}</h3>
                    <span
                      style={{
                        background: `${severityColor[item.severity]}12`,
                        border: `1px solid ${severityColor[item.severity]}28`,
                        borderRadius: 100,
                        padding: '0.12rem 0.55rem',
                        fontSize: '0.66rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        color: severityColor[item.severity],
                      }}
                    >
                      {severityLabel[item.severity]}
                    </span>
                  </div>
                  <p style={{ color: '#555570', fontSize: '0.9rem', lineHeight: 1.65 }}>{item.consequence}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SAFETY SECTION ───────────────────────────────────────────── */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 1.5rem', background: '#f7f8fc' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div className="section-label" style={{ color: '#f59e0b' }}>
            <AlertTriangle size={14} />
            Safety Protocol
          </div>
          <h2 className="heading-lg" style={{ marginTop: '0.5rem', marginBottom: '1.5rem' }}>
            Injection Site Reactions — What is Normal and What is Not
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.25rem',
              marginBottom: '1.5rem',
            }}
          >
            {/* Normal */}
            <div
              style={{
                background: '#fff',
                border: '1px solid rgba(52,211,153,0.25)',
                borderRadius: 18,
                padding: '1.75rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: '1rem' }}>
                <CheckCircle size={20} style={{ color: '#34d399' }} />
                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0a0a14' }}>Normal Reactions</h3>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {[
                  'Slight redness (erythema) at injection site — resolves within 30–60 min',
                  'Minor swelling or raised bump — normal SC bleb, absorbs within hours',
                  'Mild itching — common immune response, self-resolves',
                  'Small bruise or pinpoint bleeding — normal from capillary contact',
                  'Slight tenderness at site for 12–24 hours — expected with repeated injections',
                ].map((point, i) => (
                  <li key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', fontSize: '0.9rem', color: '#444460' }}>
                    <CheckCircle size={13} style={{ color: '#34d399', marginTop: 3, flexShrink: 0 }} />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Warning */}
            <div
              style={{
                background: 'rgba(245,158,11,0.04)',
                border: '1px solid rgba(245,158,11,0.3)',
                borderRadius: 18,
                padding: '1.75rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: '1rem' }}>
                <AlertTriangle size={20} style={{ color: '#f59e0b' }} />
                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0a0a14' }}>Watch Closely</h3>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {[
                  'Redness spreading beyond 2 cm from injection point — early infection sign',
                  'Warmth that persists or worsens after 24 hours',
                  'Increasing pain or tenderness rather than decreasing',
                  'Visible pus or discharge from injection site',
                  'Fever, chills, or systemic symptoms following injection',
                ].map((point, i) => (
                  <li key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', fontSize: '0.9rem', color: '#6a5a3a' }}>
                    <AlertTriangle size={13} style={{ color: '#f59e0b', marginTop: 3, flexShrink: 0 }} />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* When to seek help */}
          <div
            style={{
              background: 'rgba(239,68,68,0.04)',
              border: '1px solid rgba(239,68,68,0.22)',
              borderRadius: 16,
              padding: '1.5rem 2rem',
              display: 'flex',
              gap: '1.25rem',
              alignItems: 'flex-start',
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                background: 'rgba(239,68,68,0.10)',
                border: '1px solid rgba(239,68,68,0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                color: '#ef4444',
              }}
            >
              <AlertTriangle size={18} />
            </div>
            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#0a0a14', marginBottom: '0.4rem' }}>
                When to Seek Medical Attention
              </h3>
              <p style={{ color: '#555570', fontSize: '0.93rem', lineHeight: 1.7 }}>
                Any spreading redness, pus, fever, or systemic symptoms (chills, malaise, elevated heart
                rate) following an injection require prompt medical evaluation. These are signs of
                infection — most commonly from improper sterile technique. Do not attempt to self-treat
                apparent injection site infections. Cellulitis from contaminated injections can progress
                rapidly and may require antibiotic treatment or, in severe cases, surgical drainage.
                Prevention through strict sterile technique is always preferable to treatment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section
        style={{
          padding: 'clamp(4rem, 8vw, 6rem) 1.5rem',
          background: 'linear-gradient(135deg, #0a0a14 0%, #111128 100%)',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <div
            className="section-label"
            style={{
              justifyContent: 'center',
              color: '#22d3ee',
              border: '1px solid rgba(34,211,238,0.22)',
              background: 'rgba(34,211,238,0.08)',
            }}
          >
            <Syringe size={14} />
            Source Your Peptides
          </div>
          <h2
            className="heading-lg"
            style={{ color: '#fff', marginTop: '0.75rem', marginBottom: '1rem' }}
          >
            Ready to Run Your Protocol?
          </h2>
          <p style={{ color: '#9090b8', fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '2.5rem' }}>
            Apollo Peptide Sciences supplies research-grade peptides with third-party CoA testing,
            lyophilised powder for maximum stability, and the full range of compounds used in advanced
            research protocols — including BPC-157, TB-500, GHK-Cu, CJC-1295, Ipamorelin, and more.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href={AFFILIATE_BASE}
              target="_blank"
              rel="sponsored noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'linear-gradient(135deg, #22d3ee, #06b6d4)',
                color: '#fff',
                fontWeight: 700,
                fontSize: '1rem',
                padding: '0.875rem 2rem',
                borderRadius: 12,
                textDecoration: 'none',
                boxShadow: '0 4px 24px rgba(34,211,238,0.3)',
                transition: 'opacity 0.2s',
              }}
            >
              Shop Apollo Peptide Sciences <ExternalLink size={16} />
            </a>
            <Link
              href="/guide"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.15)',
                color: '#fff',
                fontWeight: 600,
                fontSize: '0.97rem',
                padding: '0.875rem 1.75rem',
                borderRadius: 12,
                textDecoration: 'none',
              }}
            >
              Full Peptide Guide <ArrowRight size={16} />
            </Link>
          </div>
          <p
            style={{
              marginTop: '1.5rem',
              fontSize: '0.78rem',
              color: '#5a5a78',
              lineHeight: 1.6,
            }}
          >
            Affiliate disclosure: StacksPeptide earns a commission on qualifying purchases at no additional
            cost to you. All content is for research and educational purposes only.
          </p>
        </div>
      </section>

    </main>
  )
}
