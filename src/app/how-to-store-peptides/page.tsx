'use client'
import Link from 'next/link'
import {
  ArrowRight,
  ExternalLink,
  Thermometer,
  Droplets,
  Package,
  Clock,
  AlertTriangle,
  CheckCircle,
  XCircle,
  FlaskConical,
  Sun,
  Plane,
  RefrigeratorIcon,
  ShieldCheck,
} from 'lucide-react'
import { AFFILIATE_BASE } from '@/lib/products'
import RelatedLinks from '@/components/RelatedLinks'

const quickStats = [
  {
    icon: <Package size={22} />,
    label: 'Lyophilized',
    value: '30–90 days',
    sub: 'Stable at room temperature',
    color: '#fb923c',
  },
  {
    icon: <RefrigeratorIcon size={22} />,
    label: 'Refrigerated',
    value: '6 months',
    sub: 'At 2–8°C (powder form)',
    color: '#22d3ee',
  },
  {
    icon: <Thermometer size={22} />,
    label: 'Frozen',
    value: '12–24 months',
    sub: 'At −20°C (powder only)',
    color: '#a78bfa',
  },
  {
    icon: <Droplets size={22} />,
    label: 'Reconstituted',
    value: '28–60 days',
    sub: 'Refrigerated at 2–8°C',
    color: '#34d399',
  },
]

const lyophilizedSteps = [
  {
    icon: <Package size={18} />,
    title: 'What lyophilized means',
    body: 'Lyophilization (freeze-drying) removes water from the peptide under vacuum at sub-zero temperatures. The result is a dry, stable powder that is far more resistant to degradation than any liquid form. This is the standard shipping and storage format for research peptides.',
    color: '#fb923c',
  },
  {
    icon: <Thermometer size={18} />,
    title: 'Temperature guidelines by duration',
    body: 'Short-term (under 30 days): room temperature is acceptable if kept stable and away from heat sources. Medium-term (up to 6 months): refrigerate at 2–8°C. Long-term (6 months to 2+ years): freeze at −20°C in an airtight container with desiccant.',
    color: '#22d3ee',
  },
  {
    icon: <Sun size={18} />,
    title: 'UV light protection is critical',
    body: 'Ultraviolet radiation degrades peptide bonds directly. Keep all peptides in their original amber glass vials or UV-protective storage. Never leave vials on countertops near windows or under fluorescent lab lighting for extended periods.',
    color: '#d4a843',
  },
  {
    icon: <ShieldCheck size={18} />,
    title: 'Keep desiccant until use',
    body: 'Moisture is the primary enemy of lyophilized peptides. The silica gel desiccant supplied with your vials should remain in the container until you are ready to reconstitute. Even brief exposure to humid air can initiate hydrolytic degradation.',
    color: '#a78bfa',
  },
  {
    icon: <Droplets size={18} />,
    title: 'Never open in humid environments',
    body: 'When you are ready to reconstitute, work in a dry, low-humidity environment. Avoid opening vials directly after removing from a cold fridge (condensation risk). Allow the closed vial to reach room temperature before opening.',
    color: '#34d399',
  },
]

const reconstitutionSteps = [
  {
    step: 1,
    title: 'Allow vial to reach room temperature',
    body: 'Remove the sealed peptide vial from refrigeration and allow it to equilibrate to room temperature for 15–20 minutes before opening. Cold glass can cause condensation and micro-shock to the lyophilized matrix.',
  },
  {
    step: 2,
    title: 'Use only bacteriostatic water (BAC water)',
    body: 'BAC water contains 0.9% benzyl alcohol, which inhibits bacterial growth and allows multi-use access over the shelf life of the reconstituted solution. Regular sterile water contains no preservative — it is suitable for single-use injections only and will support bacterial growth within hours if accessed more than once.',
    highlight: true,
  },
  {
    step: 3,
    title: 'Clean vial top with alcohol swab',
    body: 'Wipe the rubber stopper with a fresh 70% isopropyl alcohol swab. Allow to air dry for 30 seconds before inserting a needle. This eliminates surface contamination.',
  },
  {
    step: 4,
    title: 'Draw BAC water into sterile syringe',
    body: 'Using a sterile insulin syringe, draw the calculated volume of bacteriostatic water. Common reconstitution volumes are 1mL or 2mL depending on your target concentration. For example: 5mg peptide + 1mL BAC water = 5mg/mL (5000mcg/mL).',
  },
  {
    step: 5,
    title: 'Inject slowly down the vial wall',
    body: 'Angle the needle against the inner glass wall and inject the BAC water slowly, allowing it to run down the side and pool beneath the lyophilized cake. Never inject directly onto the powder — this creates turbulence and can cause mechanical damage to peptide chains.',
    highlight: true,
  },
  {
    step: 6,
    title: 'Gently swirl — NEVER shake',
    body: 'Swirl the vial gently in a circular motion for 30–60 seconds. The powder should dissolve without agitation. Shaking generates mechanical shear forces that can sever peptide bonds, permanently denaturing a portion of your compound. If powder is slow to dissolve, continue gentle swirling and allow more time.',
    highlight: true,
  },
  {
    step: 7,
    title: 'Verify the solution is clear',
    body: 'Hold the vial against a light source. A correctly reconstituted solution should be clear and colourless (some compounds like GHK-Cu may have a faint blue tint). Any cloudiness, particulate matter, or unusual colour indicates contamination or degradation.',
  },
  {
    step: 8,
    title: 'Label with reconstitution date',
    body: 'Write the compound name, concentration (mg/mL), date of reconstitution, and expiry date directly on the vial label or a small adhesive label. Refrigerate immediately at 2–8°C. Never leave reconstituted solution at room temperature.',
  },
]

const shelfLifeData = [
  { compound: 'BPC-157', roomTemp: '60–90 days', fridge: '12 months', reconstituted: '28 days' },
  { compound: 'TB-500', roomTemp: '30–60 days', fridge: '6 months', reconstituted: '28–42 days' },
  { compound: 'GHK-Cu', roomTemp: '90+ days', fridge: '18 months', reconstituted: '60 days' },
  { compound: 'CJC-1295', roomTemp: '60 days', fridge: '12 months', reconstituted: '30 days' },
  { compound: 'Ipamorelin', roomTemp: '60 days', fridge: '12 months', reconstituted: '30 days' },
  { compound: 'Retatrutide', roomTemp: '60 days', fridge: '12 months', reconstituted: '42 days' },
  { compound: 'Epithalon', roomTemp: '90+ days', fridge: '24 months', reconstituted: '28 days' },
]

const mistakes = [
  {
    icon: <XCircle size={22} />,
    title: 'Shaking instead of swirling',
    body: 'Shaking a reconstituted peptide vial generates mechanical shear forces that physically break peptide bonds. This is irreversible. Always swirl gently. If you have been shaking your vials, your compound may be partially denatured.',
    color: '#ef4444',
  },
  {
    icon: <XCircle size={22} />,
    title: 'Using sterile water instead of BAC water',
    body: 'Sterile water contains no bacteriostatic agent. Any needle insertion after the first use introduces a contamination risk. Sterile water reconstituted solutions are technically single-use and will begin to support bacterial growth almost immediately upon second access.',
    color: '#ef4444',
  },
  {
    icon: <XCircle size={22} />,
    title: 'Freezing reconstituted solution',
    body: 'Freezing a liquid peptide solution causes ice crystal formation. Ice crystals physically puncture and fragment peptide chains, causing irreversible structural damage and potency loss. Reconstituted peptides must always be stored refrigerated — never frozen.',
    color: '#ef4444',
  },
]

export default function HowToStorePeptidesPage() {
  return (
    <main style={{ background: '#fff', color: '#1a1a2a' }}>

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section
        style={{
          background: 'linear-gradient(135deg, #eef4ff 0%, #f0f8ff 50%, #f7f8fc 100%)',
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
            background: 'radial-gradient(ellipse, rgba(34,211,238,0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ position: 'relative', maxWidth: 820, margin: '0 auto' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Practical Guide</div>
          <h1
            className="heading-xl"
            style={{ color: '#0a0a14', marginBottom: '0.75rem', marginTop: '0.5rem' }}
          >
            How to Store Peptides
          </h1>
          <p className="heading-md gold-text" style={{ marginBottom: '1rem', fontWeight: 700 }}>
            From powder to reconstitution — the complete storage guide
          </p>
          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.15rem)',
              color: '#555570',
              maxWidth: 580,
              margin: '0 auto 2.5rem',
              lineHeight: 1.7,
            }}
          >
            Whether you just received your first order or want to maximize shelf life:
            every storage variable explained.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/guide" className="btn-primary">
              Complete Peptide Guide <ArrowRight size={16} />
            </Link>
            <a
              href={AFFILIATE_BASE}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Shop Peptides <ExternalLink size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* ── QUICK REFERENCE STATS ────────────────────────────────────── */}
      <section style={{ padding: 'clamp(2.5rem, 5vw, 4rem) 1.5rem', background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Quick Reference</div>
            <h2 className="heading-lg" style={{ marginTop: '0.5rem' }}>Storage at a Glance</h2>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {quickStats.map((stat) => (
              <div
                key={stat.label}
                className="hover-card-border"
                style={{
                  background: '#fff',
                  border: '1px solid rgba(0,0,0,0.08)',
                  borderRadius: 18,
                  padding: '1.75rem',
                  textAlign: 'center',
                  transition: 'border-color 0.2s, box-shadow 0.2s, transform 0.2s',
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 14,
                    background: `${stat.color}15`,
                    border: `1px solid ${stat.color}30`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem',
                    color: stat.color,
                  }}
                >
                  {stat.icon}
                </div>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#9090a8', marginBottom: '0.4rem' }}>
                  {stat.label}
                </div>
                <div style={{ fontSize: '1.6rem', fontWeight: 900, color: stat.color, lineHeight: 1, letterSpacing: '-0.03em', marginBottom: '0.4rem' }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.82rem', color: '#9090a8', lineHeight: 1.5 }}>{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LYOPHILIZED STORAGE ──────────────────────────────────────── */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 1.5rem', background: '#f7f8fc' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div className="section-label">Before You Open</div>
          <h2 className="heading-lg" style={{ marginTop: '0.5rem', marginBottom: '0.75rem' }}>
            Lyophilized Powder Storage
          </h2>
          <p style={{ color: '#555570', lineHeight: 1.75, marginBottom: '2rem', fontSize: '1.05rem' }}>
            All research peptides arrive as lyophilized (freeze-dried) powder. This form is deliberately
            chosen for maximum stability during shipping and storage. Here is everything you need to know
            before opening a vial.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {lyophilizedSteps.map((step, i) => (
              <div
                key={i}
                style={{
                  background: '#fff',
                  border: '1px solid rgba(0,0,0,0.07)',
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
                    background: `${step.color}12`,
                    border: `1px solid ${step.color}28`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    color: step.color,
                  }}
                >
                  {step.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0a0a14', marginBottom: '0.35rem' }}>
                    {step.title}
                  </h3>
                  <p style={{ color: '#555570', fontSize: '0.95rem', lineHeight: 1.65 }}>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RECONSTITUTION STEPS ─────────────────────────────────────── */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 1.5rem', background: '#fff' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div className="section-label" style={{ color: '#22d3ee' }}>Step-by-Step</div>
          <h2 className="heading-lg" style={{ marginTop: '0.5rem', marginBottom: '0.75rem' }}>
            Reconstitution Protocol
          </h2>
          <p style={{ color: '#555570', lineHeight: 1.75, marginBottom: '2rem', fontSize: '1.05rem' }}>
            Follow each step precisely. Errors during reconstitution are the most common source of
            peptide degradation and contamination.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {reconstitutionSteps.map((step) => (
              <div
                key={step.step}
                style={{
                  background: step.highlight ? 'rgba(34,211,238,0.04)' : '#fff',
                  border: step.highlight ? '1px solid rgba(34,211,238,0.2)' : '1px solid rgba(0,0,0,0.07)',
                  borderRadius: 14,
                  padding: '1.25rem 1.5rem',
                  display: 'flex',
                  gap: '1.25rem',
                  alignItems: 'flex-start',
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    background: step.highlight ? 'rgba(34,211,238,0.12)' : 'rgba(0,0,0,0.05)',
                    border: step.highlight ? '1px solid rgba(34,211,238,0.3)' : '1px solid rgba(0,0,0,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    fontSize: '0.88rem',
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

      {/* ── BAC WATER VS STERILE WATER ───────────────────────────────── */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 1.5rem', background: '#f7f8fc' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div className="section-label">Critical Decision</div>
          <h2 className="heading-lg" style={{ marginTop: '0.5rem', marginBottom: '1.5rem' }}>
            Bacteriostatic Water vs. Sterile Water
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {/* BAC Water */}
            <div
              style={{
                background: '#fff',
                border: '2px solid rgba(52,211,153,0.3)',
                borderRadius: 18,
                padding: '2rem',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 16,
                  right: 16,
                  background: 'rgba(52,211,153,0.12)',
                  border: '1px solid rgba(52,211,153,0.3)',
                  borderRadius: 100,
                  padding: '0.2rem 0.75rem',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: '#34d399',
                }}
              >
                Correct Choice
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1.25rem' }}>
                <CheckCircle size={22} style={{ color: '#34d399' }} />
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0a0a14' }}>Bacteriostatic Water</h3>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {[
                  'Contains 0.9% benzyl alcohol (bacteriostatic agent)',
                  'Inhibits bacterial growth on repeated needle access',
                  'Preserves reconstituted solution 28–60 days',
                  'Safe for multi-use vial access',
                  'Standard of practice for research peptides',
                ].map((point, i) => (
                  <li key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', fontSize: '0.93rem', color: '#444460' }}>
                    <CheckCircle size={15} style={{ color: '#34d399', marginTop: 3, flexShrink: 0 }} />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Sterile Water */}
            <div
              style={{
                background: '#fff',
                border: '1px solid rgba(239,68,68,0.2)',
                borderRadius: 18,
                padding: '2rem',
                position: 'relative',
                opacity: 0.85,
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 16,
                  right: 16,
                  background: 'rgba(239,68,68,0.08)',
                  border: '1px solid rgba(239,68,68,0.2)',
                  borderRadius: 100,
                  padding: '0.2rem 0.75rem',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: '#ef4444',
                }}
              >
                Avoid for Multi-Use
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1.25rem' }}>
                <XCircle size={22} style={{ color: '#ef4444' }} />
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0a0a14' }}>Sterile Water</h3>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {[
                  'No preservative — no bacteriostatic agent',
                  'Single-use only — second access risks contamination',
                  'Degrades within hours of first needle access',
                  'Only acceptable for single-injection protocols',
                  'Not appropriate for multi-dose vials',
                ].map((point, i) => (
                  <li key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', fontSize: '0.93rem', color: '#6a5a5a' }}>
                    <XCircle size={15} style={{ color: '#ef4444', marginTop: 3, flexShrink: 0 }} />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── POST-RECONSTITUTION STORAGE ──────────────────────────────── */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 1.5rem', background: '#fff' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div className="section-label" style={{ color: '#22d3ee' }}>After Reconstitution</div>
          <h2 className="heading-lg" style={{ marginTop: '0.5rem', marginBottom: '1.5rem' }}>
            Post-Reconstitution Storage Rules
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '1rem',
            }}
          >
            {[
              {
                icon: <RefrigeratorIcon size={18} />,
                title: 'Refrigerate immediately at 2–8°C',
                body: 'The moment reconstitution is complete, the solution must be stored at refrigerator temperature. Room temperature reconstituted peptide solutions degrade significantly faster — even a few hours at room temperature accelerates hydrolysis and bacterial risk.',
                color: '#22d3ee',
              },
              {
                icon: <Clock size={18} />,
                title: 'Use within 28–60 days',
                body: 'Even with BAC water, reconstituted peptide solutions have a finite shelf life. Most compounds are stable for 28–42 days; more stable peptides like GHK-Cu can last 60 days. When in doubt, reconstitute smaller volumes more frequently rather than large volumes that may expire.',
                color: '#d4a843',
              },
              {
                icon: <Sun size={18} />,
                title: 'Protect from light',
                body: 'UV and visible light degrade reconstituted peptides faster than lyophilized powder. Keep vials in their original amber glass container or wrap in aluminium foil inside the refrigerator if using clear vials.',
                color: '#fb923c',
              },
              {
                icon: <Thermometer size={18} />,
                title: 'Never freeze reconstituted solutions',
                body: 'This is the single most damaging mistake. Ice crystal formation physically fragments peptide chains and cannot be reversed. The solution may still appear clear after thawing but potency will be significantly compromised. Freeze only lyophilized powder.',
                color: '#ef4444',
                warning: true,
              },
              {
                icon: <FlaskConical size={18} />,
                title: 'Avoid repeated temperature cycling',
                body: 'Each freeze-thaw or warm-cool cycle stresses peptide bonds. If you remove your reconstituted vial from the fridge for use, return it promptly. Do not leave it at room temperature longer than necessary.',
                color: '#a78bfa',
              },
            ].map((rule, i) => (
              <div
                key={i}
                style={{
                  background: rule.warning ? 'rgba(239,68,68,0.03)' : '#f7f8fc',
                  border: rule.warning ? '1px solid rgba(239,68,68,0.15)' : '1px solid rgba(0,0,0,0.06)',
                  borderRadius: 14,
                  padding: '1.25rem 1.5rem',
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
                    background: `${rule.color}12`,
                    border: `1px solid ${rule.color}25`,
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
                  <p style={{ color: '#555570', fontSize: '0.9rem', lineHeight: 1.65 }}>{rule.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SHELF LIFE TABLE ─────────────────────────────────────────── */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 1.5rem', background: '#f7f8fc' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div className="section-label">Compound Reference</div>
          <h2 className="heading-lg" style={{ marginTop: '0.5rem', marginBottom: '1.5rem' }}>
            Shelf Life by Compound
          </h2>
          <div style={{ overflowX: 'auto', borderRadius: 16, border: '1px solid rgba(0,0,0,0.07)', background: '#fff' }}>
            <table className="data-table" style={{ minWidth: 600 }}>
              <thead>
                <tr style={{ background: '#f7f8fc' }}>
                  <th>Compound</th>
                  <th>Lyophilized (room temp)</th>
                  <th>Lyophilized (fridge 2–8°C)</th>
                  <th>Reconstituted</th>
                </tr>
              </thead>
              <tbody>
                {shelfLifeData.map((row, i) => (
                  <tr key={i}>
                    <td style={{ fontWeight: 700, color: '#0a0a14' }}>{row.compound}</td>
                    <td>{row.roomTemp}</td>
                    <td>{row.fridge}</td>
                    <td style={{ color: '#22d3ee', fontWeight: 600 }}>{row.reconstituted}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: '0.82rem', color: '#9090a8', marginTop: '1rem', lineHeight: 1.6 }}>
            Shelf life estimates assume optimal storage conditions: original sealed vials, consistent
            temperature, protected from light, with desiccant. Real-world conditions may reduce these
            figures. When in doubt, reconstitute only what you plan to use within the shorter estimate.
          </p>
        </div>
      </section>

      {/* ── TRAVELING WITH PEPTIDES ──────────────────────────────────── */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 1.5rem', background: '#fff' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 14,
                background: 'rgba(167,139,250,0.1)',
                border: '1px solid rgba(167,139,250,0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                color: '#a78bfa',
              }}
            >
              <Plane size={24} />
            </div>
            <div>
              <div className="section-label" style={{ color: '#a78bfa' }}>Practical Advice</div>
              <h2 className="heading-lg" style={{ marginTop: '0.25rem' }}>Traveling with Peptides</h2>
            </div>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {[
              {
                title: 'Lyophilized powder: room temperature during transit',
                body: 'Lyophilized peptides are stable enough to ship and travel at room temperature for the duration of typical journeys (up to 5–7 days). Standard postal and courier shipping is appropriate. Keep away from direct sunlight in packaging.',
                color: '#34d399',
              },
              {
                title: 'Reconstituted: must stay cold',
                body: 'If you must travel with reconstituted peptides, use an insulated case with gel ice packs capable of maintaining 2–8°C for the journey duration. Dry ice is not recommended — it can over-freeze and damage the solution.',
                color: '#22d3ee',
              },
              {
                title: 'Carry-on vs. checked baggage',
                body: 'Checked luggage holds can reach temperatures well below freezing at altitude — which would damage reconstituted solutions. Lyophilized powder in sealed vials tolerates cold better, but carry-on is still recommended for all peptides to maintain consistent conditions.',
                color: '#d4a843',
              },
              {
                title: 'Customs and legal considerations',
                body: 'Research peptides occupy a regulatory grey area in many jurisdictions. While personal possession laws vary by country, these compounds are sold strictly for laboratory research purposes. Consult the customs regulations for your destination country before international travel. Carry original packaging and invoices.',
                color: '#fb923c',
                note: true,
              },
            ].map((tip, i) => (
              <div
                key={i}
                style={{
                  background: tip.note ? 'rgba(251,146,60,0.04)' : '#f7f8fc',
                  border: tip.note ? '1px solid rgba(251,146,60,0.18)' : '1px solid rgba(0,0,0,0.06)',
                  borderRadius: 14,
                  padding: '1.35rem 1.5rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: '0.6rem' }}>
                  {tip.note
                    ? <AlertTriangle size={16} style={{ color: '#fb923c', flexShrink: 0 }} />
                    : <CheckCircle size={16} style={{ color: tip.color, flexShrink: 0 }} />
                  }
                  <h3 style={{ fontSize: '0.97rem', fontWeight: 700, color: '#0a0a14', lineHeight: 1.3 }}>
                    {tip.title}
                  </h3>
                </div>
                <p style={{ color: '#555570', fontSize: '0.92rem', lineHeight: 1.65 }}>{tip.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMON MISTAKES ──────────────────────────────────────────── */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 1.5rem', background: '#0a0a14' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div className="section-label" style={{ color: '#ef4444' }}>Avoid These</div>
          <h2 className="heading-lg" style={{ marginTop: '0.5rem', marginBottom: '1.5rem', color: '#fff' }}>
            The 3 Most Common Storage Mistakes
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {mistakes.map((mistake, i) => (
              <div
                key={i}
                style={{
                  background: 'rgba(239,68,68,0.05)',
                  border: '1px solid rgba(239,68,68,0.18)',
                  borderRadius: 16,
                  padding: '1.5rem 1.75rem',
                  display: 'flex',
                  gap: '1.25rem',
                  alignItems: 'flex-start',
                }}
              >
                <div style={{ color: '#ef4444', flexShrink: 0, marginTop: 2 }}>{mistake.icon}</div>
                <div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>
                    {mistake.title}
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                    {mistake.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED LINKS ────────────────────────────────────────────── */}
      <section style={{ padding: '2rem 1.5rem 0.5rem', maxWidth: 860, margin: '0 auto' }}>
        <RelatedLinks currentPath="/how-to-store-peptides" />
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────── */}
      <section
        style={{
          padding: 'clamp(3.5rem, 7vw, 6rem) 1.5rem',
          background: 'linear-gradient(135deg, #eef4ff 0%, #f7f8fc 100%)',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Next Steps</div>
          <h2 className="heading-lg" style={{ marginTop: '0.5rem', marginBottom: '1rem', color: '#0a0a14' }}>
            Ready to Go Deeper?
          </h2>
          <p style={{ color: '#555570', marginBottom: '2rem', lineHeight: 1.7 }}>
            Now that you know how to store peptides correctly, check the dosing reference chart
            or browse research-grade compounds from Apollo Peptide Sciences.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/peptide-dosing-chart" className="btn-primary">
              Peptide Dosing Chart <ArrowRight size={16} />
            </Link>
            <a
              href={AFFILIATE_BASE}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Shop Apollo Peptide Sciences <ExternalLink size={15} />
            </a>
          </div>
          <p style={{ marginTop: '2rem', fontSize: '0.78rem', color: '#b0b0c8', lineHeight: 1.6 }}>
            For research and laboratory use only. Not intended for human consumption.
            These statements have not been evaluated by the FDA.
          </p>
        </div>
      </section>
    </main>
  )
}
