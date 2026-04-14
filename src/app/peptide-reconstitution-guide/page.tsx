'use client'
import Link from 'next/link'
import {
  ArrowRight,
  ExternalLink,
  CheckCircle,
  AlertCircle,
  FlaskConical,
  Zap,
  AlertTriangle,
  XCircle,
  Droplets,
  Clock,
  Thermometer,
  Package,
} from 'lucide-react'
import { AFFILIATE_BASE, AFFILIATE_PRODUCT } from '@/lib/products'
import RelatedLinks from '@/components/RelatedLinks'

// ── DATA ─────────────────────────────────────────────────────────────────────

const supplyItems = [
  {
    icon: <Droplets size={20} />,
    title: 'Bacteriostatic Water (BAC Water)',
    body: 'The only correct diluent for multi-dose peptide research. BAC water contains 0.9% benzyl alcohol — a bacteriostatic preservative that inhibits microbial growth and allows safe repeated needle access over the solution\'s shelf life. Do NOT substitute regular sterile water (WFI). Sterile water has zero preservative: the moment you insert a needle a second time, you create a contamination pathway. BAC water is inexpensive and available from any compounding or research supplier.',
    color: '#22d3ee',
    warning: false,
  },
  {
    icon: <FlaskConical size={20} />,
    title: 'Insulin Syringes — U-100, 29–31 Gauge',
    body: 'U-100 insulin syringes are the universal standard for peptide dosing. The "100" means 100 units equals exactly 1mL. This makes the math straightforward: 10 units on the barrel = 0.1mL. Use 29, 30, or 31 gauge needles — fine enough for subcutaneous administration. Half-unit markings (on 1/2cc or 1cc syringes) make precise micro-dosing reliable. Never reuse a syringe — the needle tip dulls after a single use and introduces contamination risk.',
    color: '#d4a843',
    warning: false,
  },
  {
    icon: <CheckCircle size={20} />,
    title: '70% Isopropyl Alcohol Swabs',
    body: 'Required to sterilize both vial stoppers (peptide vial and BAC water vial) before every needle insertion. 70% IPA is the optimal concentration — 100% alcohol evaporates too fast, below 60% does not reliably denature proteins on microbial cell walls. Wipe, then allow at least 60 seconds to air-dry before puncturing. Wet IPA on a stopper can carry into your solution.',
    color: '#34d399',
    warning: false,
  },
  {
    icon: <Package size={20} />,
    title: 'Your Peptide Vial (Lyophilized)',
    body: 'Research peptides ship as lyophilized (freeze-dried) powder, sealed under vacuum in amber glass vials. The powder will appear as a white or off-white cake or fine powder at the bottom of the vial. Do not open the vial or remove the rubber stopper — all reconstitution is done by needle through the stopper. Allow the vial to reach room temperature (15–20 minutes) before reconstituting if it has been refrigerated or frozen.',
    color: '#a78bfa',
    warning: false,
  },
]

const reconstitutionSteps = [
  {
    step: 1,
    title: 'Wipe both vial tops — wait 60 seconds',
    body: 'Use a fresh alcohol swab to wipe the rubber stopper of the peptide vial and the BAC water vial. Let them air-dry for a full 60 seconds. This is not optional — wet IPA on a rubber stopper can be aspirated into your syringe. Allow evaporation to complete before any needle insertion.',
    highlight: false,
    warning: false,
  },
  {
    step: 2,
    title: 'Draw your calculated volume of BAC water',
    body: 'Using a sterile insulin syringe, insert the needle through the BAC water vial stopper and draw the volume you calculated (typically 1mL or 2mL — see the calculation table below). Pull the plunger slowly and check the barrel for air bubbles. Tap out any bubbles and re-draw if needed. Withdraw the needle cleanly.',
    highlight: false,
    warning: false,
  },
  {
    step: 3,
    title: 'Inject BAC water slowly down the inner glass wall',
    body: 'Insert the needle through the peptide vial stopper at a slight angle so the needle tip rests against the inner glass wall of the vial — not pointing directly at the powder cake. Depress the plunger slowly and steadily so the water runs down the glass surface and pools beneath or around the powder. This prevents mechanical disruption of the lyophilized matrix. Take 20–30 seconds to fully empty the syringe.',
    highlight: true,
    warning: false,
  },
  {
    step: 4,
    title: 'Gently swirl — NEVER shake',
    body: 'Remove the needle and gently roll the vial between your palms, or make slow circular swirling motions for 30–60 seconds. The lyophilized cake will gradually dissolve. If it is slow to dissolve, allow it to sit for 2–3 minutes, then swirl again. Some compounds (like TB-500) can take longer. Shaking is never acceptable — the mechanical shear forces generated physically sever peptide bonds. This degradation is permanent and irreversible.',
    highlight: true,
    warning: false,
  },
  {
    step: 5,
    title: 'Check: solution must be clear',
    body: 'Hold the vial against a bright light or white background and examine the solution. It should be completely clear and free of floating particles. Most peptides produce a colourless solution; GHK-Cu will have a characteristic faint blue tint — that is normal. Any cloudiness, white haze, or visible particulates indicates either contamination or incomplete dissolution. Do not use a cloudy solution — discard it.',
    highlight: false,
    warning: false,
  },
  {
    step: 6,
    title: 'Label with compound, concentration, and reconstitution date',
    body: 'Before refrigerating, write on the vial label (or attach a small adhesive label): the compound name, the concentration you mixed (e.g. "5mg/1mL = 5000mcg/mL"), the date of reconstitution, and the use-by date (28–42 days from today for most peptides with BAC water). Store immediately in the refrigerator at 2–8°C.',
    highlight: false,
    warning: false,
  },
]

const calcRows = [
  { vial: '2mg', water: '1mL', concPerMl: '2000mcg/mL', concPer10u: '200mcg / 10 units' },
  { vial: '5mg', water: '1mL', concPerMl: '5000mcg/mL', concPer10u: '500mcg / 10 units' },
  { vial: '5mg', water: '2mL', concPerMl: '2500mcg/mL', concPer10u: '250mcg / 10 units' },
  { vial: '10mg', water: '1mL', concPerMl: '10,000mcg/mL', concPer10u: '1000mcg / 10 units' },
  { vial: '10mg', water: '2mL', concPerMl: '5000mcg/mL', concPer10u: '500mcg / 10 units' },
  { vial: '10mg', water: '5mL', concPerMl: '2000mcg/mL', concPer10u: '200mcg / 10 units' },
]

const mistakes = [
  {
    icon: <XCircle size={20} />,
    title: 'Shaking the vial',
    body: 'The most common and most damaging error. Shaking generates high-frequency mechanical shear forces that physically break peptide bonds through a process called mechanical denaturation. The solution may still appear clear, but a meaningful fraction of your peptide is now structurally compromised and biologically inactive. Always swirl — never shake.',
    color: '#ef4444',
  },
  {
    icon: <XCircle size={20} />,
    title: 'Using sterile water instead of BAC water',
    body: 'Sterile water (WFI) has no bacteriostatic preservative. Any needle insertion after the first use introduces contamination risk. Bacteria can establish a colony in a sterile water reconstituted solution within hours of second access. BAC water\'s 0.9% benzyl alcohol content makes it the correct choice for any multi-dose protocol.',
    color: '#ef4444',
  },
  {
    icon: <XCircle size={20} />,
    title: 'Spraying water directly onto the powder cake',
    body: 'Forcing BAC water directly onto the lyophilized powder at pressure disrupts the porous cake structure. It can cause incomplete dissolution, foaming, and in some peptides, denaturation. Always angle the needle against the glass wall and let the water flow down slowly.',
    color: '#ef4444',
  },
  {
    icon: <XCircle size={20} />,
    title: 'Storing reconstituted peptide at room temperature',
    body: 'At room temperature, peptide hydrolysis rates increase significantly and any bacteria introduced during access can double every 20 minutes. A correctly prepared reconstituted vial must go straight into the refrigerator at 2–8°C after use. Even leaving it out for a few hours repeatedly will shorten its effective shelf life.',
    color: '#ef4444',
  },
  {
    icon: <XCircle size={20} />,
    title: 'Freezing a reconstituted solution',
    body: 'Ice crystal formation physically fragments peptide chains. Unlike lyophilized powder (which is deliberately frozen under controlled conditions), a liquid reconstituted solution subjected to normal freezer temperatures will form ice crystals that mechanically damage the peptide structure. The solution may thaw clear, but potency loss can be substantial.',
    color: '#ef4444',
  },
  {
    icon: <XCircle size={20} />,
    title: 'Reusing needles or sharing equipment',
    body: 'A needle tip is microscopically barbed after first use and will cause significantly more tissue trauma on re-insertion. More critically, any needle that has contacted biological tissue must not re-enter a shared vial — this creates a contamination vector. Use a fresh sterile syringe for every draw.',
    color: '#ef4444',
  },
]

const peptideNotes = [
  {
    compound: 'GHK-Cu',
    slug: 'ghk-cu',
    color: '#a78bfa',
    volumes: '1mg vial: add 1mL BAC water = 1000mcg/mL. 5mg vial: add 2mL = 2500mcg/mL',
    notes: 'GHK-Cu reconstitutes quickly and cleanly. The solution will appear faintly blue — this is normal and expected due to the copper chelation. Common research dosing is 1–2mg per session. Some researchers prefer higher concentrations (2mg/mL) to minimise injection volume. Stable 60+ days refrigerated — one of the more stable reconstituted peptides.',
  },
  {
    compound: 'BPC-157',
    slug: 'bpc-157',
    color: '#34d399',
    volumes: '5mg vial: add 2mL BAC water = 2500mcg/mL. Add 5mL = 1000mcg/mL',
    notes: 'BPC-157 dissolves readily. A 5mg/2mL reconstitution gives 2500mcg/mL — at 250mcg per dose, that is 10 doses per vial. For lower doses (100–200mcg range), some researchers prefer 5mg/5mL for easier syringe measurement. Stable approximately 28 days refrigerated. BPC-157 is one of the most commonly reconstituted peptides and tolerates the standard protocol well.',
  },
  {
    compound: 'TB-500',
    slug: 'tb-500',
    color: '#22d3ee',
    volumes: '10mg vial: add 2mL BAC water = 5000mcg/mL. Add 5mL = 2000mcg/mL',
    notes: 'TB-500 (Thymosin Beta-4 fragment) can take longer to dissolve than other peptides — allow 3–5 minutes of gentle swirling. Do not rush reconstitution by shaking. The standard research protocol often uses 2–10mg doses, so a 10mg/2mL reconstitution (5000mcg/mL) is common. If targeting doses of 2mg, 10 units on a U-100 syringe delivers exactly 500mcg — a half-dose from this concentration. Stable 28–42 days refrigerated.',
  },
  {
    compound: 'Ipamorelin / CJC-1295 Blend',
    slug: 'ipamorelin',
    color: '#fb923c',
    volumes: 'Ipamorelin 2mg + CJC 2mg (combo vial): add 2mL BAC water = 1000mcg/mL of each',
    notes: 'When using a pre-blended Ipamorelin/CJC-1295 vial, reconstitution follows the same standard protocol. Common research dosing is 100–300mcg of each compound per session, typically 2–3x per day. At 1000mcg/mL, 10 units = 100mcg — a convenient base unit for titration. These GHRP/GHRH combinations dissolve cleanly. Stable approximately 30 days refrigerated. Some researchers split into separate vials for more granular dose control.',
  },
]

// ── COMPONENT ─────────────────────────────────────────────────────────────────

export default function PeptideReconstitutionGuidePage() {
  return (
    <main style={{ background: '#fff', color: '#1a1a2a' }}>

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section
        style={{
          background: 'linear-gradient(135deg, #fef9ec 0%, #fffdf5 50%, #f7f8fc 100%)',
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
            background: 'radial-gradient(ellipse, rgba(212,168,67,0.1) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ position: 'relative', maxWidth: 820, margin: '0 auto' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>
            <FlaskConical size={14} style={{ marginRight: 6 }} />
            Practical Guide
          </div>
          <h1
            className="heading-xl"
            style={{ color: '#0a0a14', marginBottom: '0.75rem', marginTop: '0.5rem' }}
          >
            Complete Peptide Reconstitution Guide
          </h1>
          <p className="heading-md gold-text" style={{ marginBottom: '1rem', fontWeight: 700 }}>
            How to reconstitute lyophilized peptides — step-by-step
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
            Reconstitution is the process of dissolving a lyophilized (freeze-dried) peptide powder into
            a liquid solution ready for use. Done correctly, it takes under 5 minutes and preserves full
            peptide integrity. Done wrong, it silently destroys what you just purchased.
          </p>

          {/* Lyophilized vs liquid shelf life callout */}
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '2.5rem',
            }}
          >
            {[
              { label: 'Lyophilized powder', value: '12–24 months', sub: 'Frozen at −20°C', color: '#a78bfa' },
              { label: 'Lyophilized powder', value: '6–12 months', sub: 'Refrigerated 2–8°C', color: '#22d3ee' },
              { label: 'Reconstituted (BAC water)', value: '28–60 days', sub: 'Refrigerated — never frozen', color: '#d4a843' },
              { label: 'Reconstituted (sterile water)', value: 'Hours', sub: 'Single use only', color: '#ef4444' },
            ].map((stat) => (
              <div
                key={stat.label + stat.value}
                style={{
                  background: '#fff',
                  border: `1px solid ${stat.color}30`,
                  borderRadius: 14,
                  padding: '1rem 1.25rem',
                  textAlign: 'center',
                  minWidth: 160,
                }}
              >
                <div style={{ fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#9090a8', marginBottom: '0.3rem' }}>
                  {stat.label}
                </div>
                <div style={{ fontSize: '1.5rem', fontWeight: 900, color: stat.color, letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#9090a8', marginTop: '0.25rem' }}>{stat.sub}</div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href={AFFILIATE_BASE}
              target="_blank"
              rel="sponsored noopener noreferrer"
              className="btn-primary"
            >
              Shop Peptides at Apollo <ExternalLink size={15} />
            </a>
            <Link href="/how-to-store-peptides" className="btn-secondary">
              Storage Guide <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY RECONSTITUTION MATTERS ────────────────────────────────── */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 1.5rem', background: '#fff' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div className="section-label">Why It Matters</div>
          <h2 className="heading-lg" style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>
            Lyophilized vs. Liquid Peptides
          </h2>
          <p style={{ color: '#555570', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1.25rem' }}>
            Nearly all research peptides are supplied in lyophilized (freeze-dried) form, not as pre-mixed
            liquids. This is not a limitation — it is a deliberate design choice for maximum stability and
            potency preservation. The freeze-drying process removes essentially all water from the peptide
            structure under high vacuum at sub-zero temperatures, leaving a dry, stable powder that can
            survive shipping and storage for months to years when handled correctly.
          </p>
          <p style={{ color: '#555570', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1.25rem' }}>
            Pre-mixed liquid peptide solutions, by contrast, are inherently less stable. Water promotes
            hydrolysis — the chemical breakdown of peptide bonds — and supports microbial growth.
            A pre-mixed 5mg/mL peptide solution will degrade meaningfully within weeks even under
            refrigeration, while the same compound lyophilized and refrigerated retains potency for
            12+ months.
          </p>
          <p style={{ color: '#555570', lineHeight: 1.8, fontSize: '1.05rem' }}>
            Reconstitution is therefore the researcher&apos;s responsibility: you receive the compound in its
            most stable form and reconstitute only the amount you plan to use within the next 4–6 weeks.
            The steps are simple, but each has a specific rationale — understanding why each step exists
            is what separates a researcher who gets consistent results from one who wastes compounds through
            avoidable errors.
          </p>
        </div>
      </section>

      {/* ── SUPPLY CHECKLIST ──────────────────────────────────────────── */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 1.5rem', background: '#f7f8fc' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div className="section-label">Before You Start</div>
          <h2 className="heading-lg" style={{ marginTop: '0.5rem', marginBottom: '0.75rem' }}>
            What You Need
          </h2>
          <p style={{ color: '#555570', lineHeight: 1.75, marginBottom: '2rem', fontSize: '1.05rem' }}>
            Four items. Nothing more is required for a sterile, accurate reconstitution. Do not substitute
            or improvise — each item serves a specific and critical function.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {supplyItems.map((item, i) => (
              <div
                key={i}
                style={{
                  background: '#fff',
                  border: `1px solid ${item.color}20`,
                  borderLeft: `3px solid ${item.color}60`,
                  borderRadius: 14,
                  padding: '1.5rem',
                  display: 'flex',
                  gap: '1.25rem',
                  alignItems: 'flex-start',
                }}
              >
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 12,
                    background: `${item.color}12`,
                    border: `1px solid ${item.color}30`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    color: item.color,
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0a0a14', marginBottom: '0.4rem' }}>
                    {item.title}
                  </h3>
                  <p style={{ color: '#555570', fontSize: '0.95rem', lineHeight: 1.7 }}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* BAC water warning box */}
          <div
            style={{
              marginTop: '1.5rem',
              background: 'rgba(251,146,60,0.05)',
              border: '1px solid rgba(251,146,60,0.3)',
              borderRadius: 14,
              padding: '1.25rem 1.5rem',
              display: 'flex',
              gap: '1rem',
              alignItems: 'flex-start',
            }}
          >
            <AlertTriangle size={20} style={{ color: '#fb923c', flexShrink: 0, marginTop: 2 }} />
            <div>
              <div style={{ fontWeight: 700, color: '#c2410c', fontSize: '0.95rem', marginBottom: '0.3rem' }}>
                BAC Water vs. Sterile Water — This Distinction Is Critical
              </div>
              <p style={{ color: '#7c4b20', fontSize: '0.92rem', lineHeight: 1.65 }}>
                Sterile water (WFI — Water for Injection) is sterile at time of purchase but contains{' '}
                <strong>no preservative</strong>. The moment you insert a needle through the stopper,
                you introduce a contamination pathway. Any bacteria introduced can establish a colony
                within hours. Bacteriostatic water&apos;s 0.9% benzyl alcohol content continuously
                suppresses microbial growth across the multi-week shelf life of your reconstituted vial.
                Always use BAC water for any peptide you plan to dose more than once from a single vial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── STEP-BY-STEP RECONSTITUTION ───────────────────────────────── */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 1.5rem', background: '#fff' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div className="section-label" style={{ color: '#d4a843' }}>Step-by-Step</div>
          <h2 className="heading-lg" style={{ marginTop: '0.5rem', marginBottom: '0.75rem' }}>
            Reconstitution Protocol
          </h2>
          <p style={{ color: '#555570', lineHeight: 1.75, marginBottom: '2rem', fontSize: '1.05rem' }}>
            Follow each step in sequence. The entire process takes 3–5 minutes. Rushing or skipping
            steps is where errors occur.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {reconstitutionSteps.map((step) => (
              <div
                key={step.step}
                style={{
                  background: step.highlight ? 'rgba(212,168,67,0.04)' : '#fff',
                  border: step.highlight
                    ? '1px solid rgba(212,168,67,0.25)'
                    : '1px solid rgba(0,0,0,0.08)',
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
                    background: step.highlight ? 'rgba(212,168,67,0.15)' : 'rgba(0,0,0,0.05)',
                    border: step.highlight ? '1px solid rgba(212,168,67,0.35)' : '1px solid rgba(0,0,0,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    fontSize: '0.9rem',
                    fontWeight: 900,
                    color: step.highlight ? '#d4a843' : '#9090a8',
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
                      marginBottom: '0.4rem',
                    }}
                  >
                    {step.title}
                  </h3>
                  <p style={{ color: '#555570', fontSize: '0.95rem', lineHeight: 1.7 }}>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CALCULATION TABLE ─────────────────────────────────────────── */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 1.5rem', background: '#f7f8fc' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <div className="section-label" style={{ color: '#d4a843' }}>
            <Zap size={13} style={{ marginRight: 6 }} />
            Most Important Section
          </div>
          <h2 className="heading-lg" style={{ marginTop: '0.5rem', marginBottom: '0.75rem' }}>
            Reconstitution Calculation Table
          </h2>
          <p style={{ color: '#555570', lineHeight: 1.75, marginBottom: '1rem', fontSize: '1.05rem', maxWidth: 760 }}>
            The math behind reconstitution is straightforward once you understand two facts: (1) 1mL of
            solution = 100 units on a U-100 insulin syringe, therefore 0.1mL = 10 units; (2) 1mg =
            1000mcg. Using these two conversions, you can calculate exactly how many micrograms are in
            any given syringe reading.
          </p>

          {/* Math explainer box */}
          <div
            style={{
              background: 'rgba(212,168,67,0.06)',
              border: '1px solid rgba(212,168,67,0.25)',
              borderRadius: 14,
              padding: '1.25rem 1.5rem',
              marginBottom: '1.75rem',
            }}
          >
            <div style={{ fontWeight: 700, color: '#92600a', fontSize: '0.9rem', marginBottom: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              The Formula
            </div>
            <p style={{ color: '#555570', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '0.75rem' }}>
              <strong style={{ color: '#0a0a14' }}>Concentration (mcg/mL)</strong> = Vial amount (mg) × 1000 ÷ BAC water added (mL)
            </p>
            <p style={{ color: '#555570', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '0.75rem' }}>
              <strong style={{ color: '#0a0a14' }}>Dose per 10 units</strong> = Concentration (mcg/mL) × 0.1
            </p>
            <p style={{ color: '#7c6010', fontSize: '0.88rem', lineHeight: 1.65 }}>
              Example: 5mg vial + 2mL BAC water = (5 × 1000) ÷ 2 = 2500mcg/mL. At 10 units (0.1mL)
              you are drawing 250mcg. At 20 units (0.2mL) you are drawing 500mcg.
            </p>
          </div>

          <div style={{ overflowX: 'auto', borderRadius: 16, border: '1px solid rgba(0,0,0,0.08)', background: '#fff' }}>
            <table className="data-table" style={{ minWidth: 620 }}>
              <thead>
                <tr style={{ background: '#f7f8fc' }}>
                  <th>Vial Size</th>
                  <th>BAC Water Added</th>
                  <th>Concentration (mcg/mL)</th>
                  <th style={{ color: '#d4a843' }}>Dose per 10 units (0.1mL)</th>
                </tr>
              </thead>
              <tbody>
                {calcRows.map((row, i) => (
                  <tr key={i}>
                    <td style={{ fontWeight: 700, color: '#0a0a14' }}>{row.vial}</td>
                    <td>{row.water}</td>
                    <td style={{ color: '#555570' }}>{row.concPerMl}</td>
                    <td style={{ color: '#d4a843', fontWeight: 700 }}>{row.concPer10u}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: '0.82rem', color: '#9090a8', marginTop: '1rem', lineHeight: 1.6 }}>
            All values assume complete reconstitution in the stated volume. "10 units" refers to the
            10-unit marking on a U-100 insulin syringe, which equals exactly 0.1mL. Adjust syringe
            markings proportionally for your target dose.
          </p>

          {/* Practical dose example */}
          <div
            style={{
              marginTop: '1.5rem',
              background: '#fff',
              border: '1px solid rgba(34,211,238,0.2)',
              borderLeft: '3px solid rgba(34,211,238,0.5)',
              borderRadius: '0 14px 14px 0',
              padding: '1.25rem 1.5rem',
            }}
          >
            <div style={{ fontWeight: 700, color: '#0891b2', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
              Worked Example: BPC-157 at 250mcg per dose
            </div>
            <p style={{ color: '#555570', fontSize: '0.93rem', lineHeight: 1.7 }}>
              You have a 5mg BPC-157 vial. Add 2mL of BAC water. Concentration = 5000 ÷ 2 = 2500mcg/mL.
              Target dose = 250mcg. Volume needed = 250 ÷ 2500 = 0.1mL = 10 units on U-100 syringe.
              At this concentration, your 5mg vial contains 20 × 250mcg doses.
            </p>
          </div>
        </div>
      </section>

      {/* ── DOSING WITH INSULIN SYRINGES ──────────────────────────────── */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 1.5rem', background: '#fff' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div className="section-label">Dosing Precision</div>
          <h2 className="heading-lg" style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>
            Using Insulin Syringes Correctly
          </h2>
          <p style={{ color: '#555570', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1.5rem' }}>
            U-100 insulin syringes are the universal standard for peptide research dosing. Understanding
            the barrel markings eliminates dosing errors entirely.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '1.25rem',
              marginBottom: '1.5rem',
            }}
          >
            {[
              {
                icon: <FlaskConical size={18} />,
                title: 'What "U-100" means',
                body: 'U-100 means the syringe is calibrated so that 100 units equals exactly 1 millilitre (1mL). This is a fixed, universal relationship. It does not change based on what is in the syringe. 100 units = 1.0mL. 50 units = 0.5mL. 10 units = 0.1mL. 1 unit = 0.01mL. Memorise the 10-unit relationship — 10 units = 0.1mL — because most reconstitution calculations revolve around it.',
                color: '#d4a843',
              },
              {
                icon: <Zap size={18} />,
                title: 'Reading the barrel markings',
                body: 'Standard 1cc (1mL) U-100 syringes are marked in 2-unit increments from 0 to 100. The major lines are at every 10 units (0.1mL). Half-unit syringes (0.5cc) are marked in 1-unit increments — these are ideal for small-dose precision. Always read the bottom of the plunger stopper (the flat surface closer to the needle), not the top.',
                color: '#22d3ee',
              },
              {
                icon: <CheckCircle size={18} />,
                title: 'Drawing without bubbles',
                body: 'After drawing your dose, hold the syringe needle-up and tap the barrel to float any air bubbles to the top. Gently depress the plunger to expel the air until a small bead of liquid appears at the needle tip. Re-check the volume marking and adjust if needed. Air bubbles do not affect potency but do affect dose accuracy — 5 units of air in a 10-unit draw halves your dose.',
                color: '#34d399',
              },
              {
                icon: <Clock size={18} />,
                title: 'Gauge selection',
                body: '29, 30, and 31 gauge needles are all appropriate for subcutaneous (subQ) injections. Higher gauge numbers mean thinner needles — 31G causes minimal discomfort. Avoid anything below 27G for subQ peptide administration. The 5/16 inch (8mm) needle length is standard for subQ; longer needles are unnecessary and risk intramuscular injection in leaner individuals.',
                color: '#a78bfa',
              },
            ].map((card, i) => (
              <div
                key={i}
                style={{
                  background: '#f7f8fc',
                  border: `1px solid ${card.color}18`,
                  borderRadius: 14,
                  padding: '1.25rem 1.5rem',
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'flex-start',
                }}
              >
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 10,
                    background: `${card.color}12`,
                    border: `1px solid ${card.color}28`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    color: card.color,
                  }}
                >
                  {card.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '0.97rem', fontWeight: 700, color: '#0a0a14', marginBottom: '0.35rem' }}>
                    {card.title}
                  </h3>
                  <p style={{ color: '#555570', fontSize: '0.88rem', lineHeight: 1.65 }}>{card.body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick conversion reference */}
          <div
            style={{
              background: 'rgba(212,168,67,0.05)',
              border: '1px solid rgba(212,168,67,0.2)',
              borderRadius: 14,
              padding: '1.25rem 1.5rem',
            }}
          >
            <div style={{ fontWeight: 700, color: '#92600a', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>
              U-100 Quick Conversion — Units to mL
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
                gap: '0.5rem',
              }}
            >
              {[
                { units: '5 units', ml: '0.05 mL' },
                { units: '10 units', ml: '0.10 mL' },
                { units: '15 units', ml: '0.15 mL' },
                { units: '20 units', ml: '0.20 mL' },
                { units: '25 units', ml: '0.25 mL' },
                { units: '30 units', ml: '0.30 mL' },
                { units: '40 units', ml: '0.40 mL' },
                { units: '50 units', ml: '0.50 mL' },
              ].map((row) => (
                <div
                  key={row.units}
                  style={{
                    background: '#fff',
                    border: '1px solid rgba(0,0,0,0.07)',
                    borderRadius: 8,
                    padding: '0.5rem 0.75rem',
                    textAlign: 'center',
                  }}
                >
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#d4a843' }}>{row.units}</div>
                  <div style={{ fontSize: '0.78rem', color: '#9090a8', marginTop: '0.15rem' }}>{row.ml}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STORAGE AFTER RECONSTITUTION ──────────────────────────────── */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 1.5rem', background: '#f7f8fc' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div className="section-label" style={{ color: '#22d3ee' }}>After Mixing</div>
          <h2 className="heading-lg" style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>
            Storage After Reconstitution
          </h2>
          <p style={{ color: '#555570', lineHeight: 1.75, fontSize: '1.05rem', marginBottom: '2rem' }}>
            The reconstituted vial is now the most vulnerable form of your peptide. The following rules
            are non-negotiable for maintaining potency across the solution&apos;s shelf life.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              {
                icon: <Thermometer size={18} />,
                title: 'Refrigerate at 2–8°C immediately',
                body: 'The reconstituted vial goes straight into the refrigerator — not a countertop, not a drawer. Standard refrigerator temperature (2–8°C) dramatically slows both hydrolysis and any potential microbial activity. Even with BAC water\'s benzyl alcohol preservative, room-temperature storage is not acceptable for more than the time needed to draw a dose.',
                color: '#22d3ee',
                warn: false,
              },
              {
                icon: <Clock size={18} />,
                title: 'Use within 28–42 days (60 days for GHK-Cu)',
                body: 'BAC water preserves the solution, it does not halt degradation entirely. Hydrolysis continues slowly even at refrigerator temperatures. Most peptides are considered reliably stable for 28–42 days post-reconstitution. GHK-Cu is more chemically stable and commonly cited to 60 days. When in doubt, reconstitute smaller volumes from your lyophilized stock more frequently — this is always preferable to using degraded solution.',
                color: '#d4a843',
                warn: false,
              },
              {
                icon: <Package size={18} />,
                title: 'Protect from light',
                body: 'UV and visible light degrade peptide bonds through photolysis. Amber glass vials provide partial protection, but additional measures are worthwhile: keep vials in their original box, in a dark corner of the refrigerator, or wrapped loosely in aluminium foil if stored in a clear vial. Never leave reconstituted peptide vials on an illuminated countertop.',
                color: '#fb923c',
                warn: false,
              },
              {
                icon: <AlertTriangle size={18} />,
                title: 'NEVER freeze a reconstituted solution',
                body: 'This is the single most damaging storage error for reconstituted peptides. Freezing causes ice crystal formation within the solution. Ice crystals physically puncture and fragment peptide chains through a mechanical process that cannot be reversed. The solution will thaw and appear normal, but peptide chain fragmentation has already occurred — potency is compromised. Only freeze lyophilized powder, never liquid solutions.',
                color: '#ef4444',
                warn: true,
              },
              {
                icon: <CheckCircle size={18} />,
                title: 'Label clearly and discard after expiry',
                body: 'Label every vial with compound name, concentration, reconstitution date, and calculated use-by date. If a vial is past its use-by date or shows any cloudiness, particulate matter, or colour change — discard it. The cost of a replacement vial is far lower than the cost of proceeding with a degraded or contaminated solution.',
                color: '#34d399',
                warn: false,
              },
            ].map((rule, i) => (
              <div
                key={i}
                style={{
                  background: rule.warn ? 'rgba(239,68,68,0.03)' : '#fff',
                  border: rule.warn ? '1px solid rgba(239,68,68,0.18)' : '1px solid rgba(0,0,0,0.07)',
                  borderRadius: 14,
                  padding: '1.25rem 1.5rem',
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'flex-start',
                }}
              >
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 10,
                    background: `${rule.color}12`,
                    border: `1px solid ${rule.color}28`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    color: rule.color,
                  }}
                >
                  {rule.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '0.97rem', fontWeight: 700, color: '#0a0a14', marginBottom: '0.35rem' }}>
                    {rule.title}
                  </h3>
                  <p style={{ color: '#555570', fontSize: '0.92rem', lineHeight: 1.7 }}>{rule.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMON MISTAKES ───────────────────────────────────────────── */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 1.5rem', background: '#fff' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div className="section-label" style={{ color: '#ef4444' }}>
            <AlertCircle size={14} style={{ marginRight: 6 }} />
            Avoid These Errors
          </div>
          <h2 className="heading-lg" style={{ marginTop: '0.5rem', marginBottom: '0.75rem' }}>
            Common Reconstitution Mistakes
          </h2>
          <p style={{ color: '#555570', lineHeight: 1.75, fontSize: '1.05rem', marginBottom: '2rem' }}>
            Each of the following errors is both common and avoidable. Most peptide failures in research
            protocols can be traced to one of these six mistakes — and most of them leave no visible sign
            that anything went wrong.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {mistakes.map((m, i) => (
              <div
                key={i}
                style={{
                  background: 'rgba(239,68,68,0.02)',
                  border: '1px solid rgba(239,68,68,0.12)',
                  borderLeft: '3px solid rgba(239,68,68,0.4)',
                  borderRadius: '0 14px 14px 0',
                  padding: '1.25rem 1.5rem',
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'flex-start',
                }}
              >
                <div style={{ color: '#ef4444', flexShrink: 0, marginTop: 2 }}>{m.icon}</div>
                <div>
                  <h3 style={{ fontSize: '0.97rem', fontWeight: 700, color: '#0a0a14', marginBottom: '0.35rem' }}>
                    {m.title}
                  </h3>
                  <p style={{ color: '#555570', fontSize: '0.92rem', lineHeight: 1.7 }}>{m.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PEPTIDE-SPECIFIC NOTES ────────────────────────────────────── */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 1.5rem', background: '#f7f8fc' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div className="section-label">Compound-Specific</div>
          <h2 className="heading-lg" style={{ marginTop: '0.5rem', marginBottom: '0.75rem' }}>
            Reconstitution Notes by Peptide
          </h2>
          <p style={{ color: '#555570', lineHeight: 1.75, fontSize: '1.05rem', marginBottom: '2rem' }}>
            The standard protocol above applies to all peptides. These notes cover the most common
            compounds researchers work with — typical volumes used, any compound-specific quirks,
            and practical concentration choices.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {peptideNotes.map((pep) => (
              <div
                key={pep.compound}
                style={{
                  background: '#fff',
                  border: `1px solid ${pep.color}20`,
                  borderRadius: 18,
                  padding: '1.75rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 11,
                        background: `${pep.color}14`,
                        border: `1px solid ${pep.color}30`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: pep.color,
                      }}
                    >
                      <FlaskConical size={18} />
                    </div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0a0a14' }}>
                      {pep.compound}
                    </h3>
                  </div>
                  <a
                    href={AFFILIATE_PRODUCT(pep.slug)}
                    target="_blank"
                    rel="sponsored noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6,
                      background: `${pep.color}12`,
                      border: `1px solid ${pep.color}30`,
                      borderRadius: 8,
                      padding: '0.35rem 0.9rem',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      color: pep.color,
                      textDecoration: 'none',
                    }}
                  >
                    Buy {pep.compound} <ExternalLink size={12} />
                  </a>
                </div>
                <div
                  style={{
                    background: `${pep.color}08`,
                    border: `1px solid ${pep.color}18`,
                    borderRadius: 10,
                    padding: '0.75rem 1rem',
                    marginBottom: '0.9rem',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    color: '#444460',
                  }}
                >
                  <span style={{ color: pep.color, fontWeight: 700 }}>Common volumes: </span>{pep.volumes}
                </div>
                <p style={{ color: '#555570', fontSize: '0.93rem', lineHeight: 1.7 }}>{pep.notes}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA / SHOP SECTION ────────────────────────────────────────── */}
      <section
        style={{
          padding: 'clamp(3rem, 6vw, 5rem) 1.5rem',
          background: 'linear-gradient(135deg, #0a0a14 0%, #12122a 100%)',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <div
            className="section-label"
            style={{ justifyContent: 'center', color: '#d4a843', borderColor: 'rgba(212,168,67,0.3)', background: 'rgba(212,168,67,0.1)' }}
          >
            Ready to Start
          </div>
          <h2
            className="heading-lg"
            style={{ color: '#fff', marginTop: '0.75rem', marginBottom: '0.75rem' }}
          >
            Source Your Peptides from Apollo Peptide Sciences
          </h2>
          <p
            style={{
              color: 'rgba(255,255,255,0.65)',
              lineHeight: 1.75,
              fontSize: '1.05rem',
              marginBottom: '2rem',
            }}
          >
            Every compound on this site ships as lyophilized powder — the most stable form for research.
            Third-party tested, certificate of analysis included. Use this guide, source quality material,
            and your reconstitution results will be consistent.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href={AFFILIATE_BASE}
              target="_blank"
              rel="sponsored noopener noreferrer"
              className="btn-primary"
            >
              Shop Apollo Peptide Sciences <ExternalLink size={15} />
            </a>
            <Link href="/peptide-dosing-chart" className="btn-secondary" style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.75)' }}>
              Dosing Chart <ArrowRight size={16} />
            </Link>
          </div>
          <p style={{ marginTop: '1.25rem', fontSize: '0.78rem', color: 'rgba(255,255,255,0.3)', lineHeight: 1.6 }}>
            Affiliate disclosure: links on this page are affiliate links. We may earn a commission at no
            additional cost to you. All content reflects independent research guidance only.
          </p>
        </div>
      </section>

      {/* ── RELATED LINKS ─────────────────────────────────────────────── */}
      <section style={{ padding: 'clamp(2rem, 4vw, 3rem) 1.5rem', background: '#fff' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <RelatedLinks currentPath="/peptide-reconstitution-guide" />
        </div>
      </section>

    </main>
  )
}
