'use client'
import Link from 'next/link'
import { ArrowRight, ExternalLink, Layers, Zap, TrendingDown, Sparkles, FlaskConical, AlertCircle, ChevronRight } from 'lucide-react'
import { AFFILIATE_BASE, AFFILIATE_PRODUCT } from '@/lib/products'
import RelatedLinks from '@/components/RelatedLinks'

const levers = [
  {
    lever: 'Periosteal Bone Density',
    icon: '◈',
    color: '#fb923c',
    bg: 'rgba(251,146,60,0.07)',
    border: 'rgba(251,146,60,0.25)',
    description: 'The mandibular angle, gonial angle, and chin projection that create a structurally defined jaw.',
    peptides: 'CJC-1295 + Ipamorelin, IGF-1 LR3',
    mechanism: 'GH/IGF-1 axis optimization supports osteoblast activity and periosteal bone maintenance via insulin-like growth factor signaling in bone tissue.',
    timeline: '12–24 weeks (long-arc)',
    impact: 'Moderate — preserves and modestly improves density, not growth-level remodeling',
  },
  {
    lever: 'Masseter Muscle Density',
    icon: '▲',
    color: '#34d399',
    bg: 'rgba(52,211,153,0.07)',
    border: 'rgba(52,211,153,0.25)',
    description: 'Jaw muscle fullness and definition along the mandibular border — adds squareness and width.',
    peptides: 'IGF-1 LR3, CJC-1295 + Ipamorelin',
    mechanism: 'IGF-1 LR3 activates satellite cells in skeletal muscle including masseter, driving hyperplasia and hypertrophy with resistance from functional jaw loading.',
    timeline: '8–12 weeks',
    impact: 'High — visible jaw width and squareness improvement with consistent use',
  },
  {
    lever: 'Submental Fat Reduction',
    icon: '◎',
    color: '#d4a843',
    bg: 'rgba(212,168,67,0.07)',
    border: 'rgba(212,168,67,0.3)',
    description: 'Fat beneath the chin and around the jawline that obscures the mandibular border and reduces perceived sharpness.',
    peptides: 'Retatrutide (GLP-3R), Tirzepatide (GLP-2T)',
    mechanism: 'Triple GLP-1/GIP/glucagon agonism (Retatrutide) drives systemic fat oxidation including submental deposits. Non-site-specific but highly effective for overall fat reduction.',
    timeline: '8–24 weeks',
    impact: 'Very High — submental fat removal is the single greatest visible change to jaw sharpness',
  },
  {
    lever: 'Overlying Skin Quality',
    icon: '✦',
    color: '#a78bfa',
    bg: 'rgba(167,139,250,0.07)',
    border: 'rgba(167,139,250,0.25)',
    description: 'Collagen density, elasticity, and skin tightness along the jaw and neck. Laxity blurs mandibular definition.',
    peptides: 'GHK-Cu',
    mechanism: 'Modulates 4,000+ genes including collagen I, III, elastin, TIMP-1/2. Tightens and thickens dermis, reducing laxity that softens the jawline edge.',
    timeline: '8–12 weeks',
    impact: 'High — especially in older subjects; skin tightening markedly sharpens the mandibular silhouette',
  },
]

const compounds = [
  {
    name: 'CJC-1295 + Ipamorelin',
    slug: 'cjc1295-ipamorelin',
    category: 'GH Secretagogue Stack',
    color: '#34d399',
    bg: 'rgba(52,211,153,0.08)',
    border: 'rgba(52,211,153,0.3)',
    role: 'GH axis optimization — bone density maintenance, lean tissue, reduced facial bloat',
    mechanism: 'CJC-1295 (GHRH analog) extends and amplifies GH pulse duration. Ipamorelin (GHRP) stimulates GHS-R1a at the pituitary for additive GH release. Together produce 4–8× native GH pulse amplitude timed during deep sleep.',
    jawEffect: 'Supports periosteal IGF-1 signaling for bone modeling. Reduces visceral/facial fat over time. Improves lean tissue retention in the jaw musculature.',
    dosing: 'CJC-1295 (no DAC): 100mcg + Ipamorelin: 100–200mcg, pre-sleep, 5 days on / 2 off',
    cycle: '12–16 weeks, 4 weeks off',
    priority: 'Foundation',
  },
  {
    name: 'IGF-1 LR3',
    slug: 'igf-1lr3',
    category: 'Growth Factor',
    color: '#fb923c',
    bg: 'rgba(251,146,60,0.08)',
    border: 'rgba(251,146,60,0.3)',
    role: 'Satellite cell activation — masseter hypertrophy, muscle fiber hyperplasia',
    mechanism: 'Long-Arg3 modification extends half-life to 20–30 hrs vs native IGF-1 at <10 min. Activates IGF-1R on skeletal muscle satellite cells, driving de novo myofiber formation (hyperplasia). Roughly 3× the potency of native IGF-1 due to reduced IGFBP binding.',
    jawEffect: 'Most direct mechanism for masseter muscle size and density. Paired with functional jaw loading (chewing, jaw exercises), drives meaningful masseter hypertrophy that widens and defines the lower third.',
    dosing: '20–40mcg subcutaneous, post-workout or morning fasted, 5 days on / 2 off',
    cycle: '4–6 weeks on, 4–6 weeks off (not for beginners)',
    priority: 'Intermediate',
  },
  {
    name: 'GHK-Cu Copper Peptide',
    slug: 'ghk-cu',
    category: 'Skin & Anti-Aging',
    color: '#a78bfa',
    bg: 'rgba(167,139,250,0.08)',
    border: 'rgba(167,139,250,0.25)',
    role: 'Skin tightening — collagen density, elasticity, mandibular skin laxity reduction',
    mechanism: 'Tripeptide-copper complex modulates over 4,000 human genes. Upregulates collagen I, III, elastin, and TIMP-1/2 (collagen breakdown inhibitors). Thickens the dermis and restores elasticity, reducing the skin laxity that blurs the jawline edge.',
    jawEffect: 'Topical application along the jaw and neck tightens skin, reduces jowling, and sharpens the mandibular silhouette. Most impactful for subjects 30+ where skin laxity contributes meaningfully to jaw softness.',
    dosing: 'Topical: apply to jaw, neck, and jowl area 1–2×/day. Injectable: 500mcg–1mg subQ, 3–5×/week',
    cycle: '12 weeks, 4 weeks off',
    priority: 'Foundation',
  },
  {
    name: 'Retatrutide (GLP-3R)',
    slug: 'glp-3r-10mg',
    category: 'Metabolic & Fat Loss',
    color: '#d4a843',
    bg: 'rgba(212,168,67,0.07)',
    border: 'rgba(212,168,67,0.3)',
    role: 'Submental fat reduction — the greatest single change to perceived jaw definition',
    mechanism: 'Triple GIP/GLP-1/glucagon agonist. GLP-1 component suppresses appetite and slows gastric emptying. GIP enhances insulin sensitivity and fat metabolism. Glucagon receptor agonism directly stimulates hepatic fat oxidation and thermogenesis. Phase 2 trials: 24.2% average body weight reduction at 48 weeks.',
    jawEffect: 'Systemic fat loss including submental deposits. Uncovering the mandibular border from submental fat is the most rapid and high-impact single change to jaw visual definition available through peptide research.',
    dosing: 'Initiate at 0.5mg/week SQ, titrate up per tolerance (clinical protocol); long titration period',
    cycle: 'Follows clinical GLP-1 titration schedule',
    priority: 'Advanced / Goal-Dependent',
  },
  {
    name: 'BPC-157',
    slug: 'bpc157-10mg',
    category: 'Recovery & Healing',
    color: '#22d3ee',
    bg: 'rgba(34,211,238,0.07)',
    border: 'rgba(34,211,238,0.25)',
    role: 'Jaw joint / masseter tendon repair — enables higher jaw loading without TMJ damage',
    mechanism: 'Upregulates VEGF (vascular endothelial growth factor), accelerating angiogenesis and tendon-to-bone repair. Stabilizes nitric oxide system. Reduces neuroinflammation. Documented effects on ligament, tendon, and muscle-junction healing.',
    jawEffect: 'Supports temporomandibular joint (TMJ) health during increased jaw loading. Allows harder mewing protocol, chewing exercises, and jaw training without cumulative joint damage — an enabling compound for the masseter development phase.',
    dosing: '250–500mcg subQ or oral, 1–2×/day',
    cycle: '8–12 weeks, 4 weeks off',
    priority: 'Supportive',
  },
]

const protocol = [
  {
    phase: 'Phase 1',
    weeks: 'Weeks 1–4',
    label: 'Foundation',
    color: '#a78bfa',
    compounds: ['GHK-Cu (topical or injectable)', 'BPC-157 (oral or subQ)'],
    focus: 'Establish skin collagen synthesis and joint/tissue resilience. Begin jaw loading protocol (functional chewing, mewing). No GH axis compounds yet — build the recovery and skin foundation first.',
  },
  {
    phase: 'Phase 2',
    weeks: 'Weeks 5–12',
    label: 'Core Stack',
    color: '#34d399',
    compounds: ['GHK-Cu (continue)', 'CJC-1295 (no DAC) + Ipamorelin (pre-sleep)', 'BPC-157 (continue or taper)'],
    focus: 'GH axis optimization begins. Sleep-timed GHRH/GHRP stack drives 4–8× GH pulse amplification nightly. Periosteal and soft tissue benefits accumulate. Lean tissue preservation prevents facial fat from replacing muscle. Continue jaw loading.',
  },
  {
    phase: 'Phase 3',
    weeks: 'Weeks 9–16 (Optional add-on)',
    label: 'Advanced Layer',
    color: '#d4a843',
    compounds: ['All above compounds', 'IGF-1 LR3 (intermediate/advanced only)', 'Retatrutide (if submental fat is primary target)'],
    focus: 'IGF-1 LR3 activates satellite cells directly for masseter hypertrophy. Retatrutide accelerates submental fat clearance. Do not start both simultaneously — add one at a time to isolate variables.',
  },
]

export default function JawlinePeptidesPage() {
  return (
    <div style={{ background: '#ffffff', minHeight: '100vh' }}>

      {/* Hero */}
      <div style={{
        background: 'linear-gradient(160deg, #0a0a14 0%, #0f1a0f 50%, #0a0a14 100%)',
        padding: '6rem 2rem 5rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: '-60px', right: '-60px',
          width: 480, height: 480,
          background: 'radial-gradient(circle, rgba(52,211,153,0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '-40px', left: '30%',
          width: 360, height: 360,
          background: 'radial-gradient(circle, rgba(212,168,67,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
          <div style={{ maxWidth: 840 }}>
            <div className="section-label" style={{ color: '#34d399' }}>
              Structural Looksmaxxing
            </div>
            <h1 className="heading-xl" style={{ color: '#ffffff', marginBottom: '1.5rem' }}>
              Peptides for<br />
              <span className="gold-text">Jawline Definition</span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: 700 }}>
              The jawline is determined by four biological levers: periosteal bone density, masseter muscle mass, submental fat, and overlying skin quality. This guide maps the exact peptide mechanisms to each lever — and shows you how to stack them.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: '2rem' }}>
              <Link href="/looksmaxxing" className="btn-primary">
                Looksmaxxing Hub <ArrowRight size={14} />
              </Link>
              <a
                href={AFFILIATE_BASE}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="btn-secondary"
                style={{ color: '#e0e0f0', borderColor: 'rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.05)' }}
              >
                Shop Compounds <ExternalLink size={14} />
              </a>
            </div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '8px 14px',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 100,
              fontSize: '0.82rem',
              color: 'rgba(255,255,255,0.5)',
            }}>
              <AlertCircle size={12} style={{ color: '#fb923c' }} />
              For laboratory and research use only. Not for human consumption.
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div style={{ background: '#0a0a14', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            borderTop: '2px solid rgba(52,211,153,0.4)',
          }}>
            {[
              { stat: '4 Levers', label: 'Biological targets for jaw definition', sub: 'bone · muscle · fat · skin' },
              { stat: '24.2%', label: 'Avg body weight loss with Retatrutide', sub: 'Phase 2 trial data' },
              { stat: '4,000+', label: 'Genes modulated by GHK-Cu', sub: 'including collagen I, III, elastin' },
              { stat: '3×', label: 'IGF-1 LR3 potency vs native IGF-1', sub: 'reduced IGFBP binding' },
            ].map((item, i) => (
              <div key={i} style={{
                padding: '1.5rem',
                borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none',
              }}>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#34d399', lineHeight: 1 }}>
                  {item.stat}
                </div>
                <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.55)', marginTop: 6, lineHeight: 1.5 }}>
                  {item.label}
                </div>
                <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.3)', marginTop: 3 }}>
                  {item.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>

        {/* The 4 Biological Levers */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
          <div className="section-label">The Framework</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '0.75rem' }}>
            The 4 Biological Levers of Jaw Definition
          </h2>
          <p style={{ color: '#555570', fontSize: '1.05rem', marginBottom: '3rem', maxWidth: 720 }}>
            Jawline sharpness is not a single variable. It is the composite result of four independent biological systems. Optimizing only one produces diminishing returns. The research-backed approach addresses all four simultaneously, each with its own mechanistically matched compound.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            {levers.map((lever, i) => (
              <div key={i} style={{
                background: lever.bg,
                border: `1px solid ${lever.border}`,
                borderRadius: 20,
                padding: '1.75rem',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1rem' }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: '50%',
                    background: `${lever.color}18`,
                    border: `1px solid ${lever.color}35`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1rem', color: lever.color,
                  }}>
                    {lever.icon}
                  </div>
                  <div style={{ fontWeight: 800, color: lever.color, fontSize: '0.95rem' }}>
                    Lever {i + 1}
                  </div>
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0a0a14', marginBottom: '0.6rem' }}>
                  {lever.lever}
                </h3>
                <p style={{ color: '#555570', fontSize: '0.92rem', lineHeight: 1.65, marginBottom: '1rem' }}>
                  {lever.description}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                  <div style={{ fontSize: '0.8rem' }}>
                    <span style={{ color: '#888898', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '0.72rem' }}>Peptides: </span>
                    <span style={{ color: lever.color, fontWeight: 700 }}>{lever.peptides}</span>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#555570', lineHeight: 1.55 }}>
                    <span style={{ color: '#888898', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '0.72rem' }}>Mechanism: </span>
                    {lever.mechanism}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6 }}>
                    <span style={{ fontSize: '0.78rem', color: '#888898' }}>⏱ {lever.timeline}</span>
                    <span style={{
                      fontSize: '0.72rem', fontWeight: 700,
                      padding: '2px 9px',
                      background: `${lever.color}12`,
                      border: `1px solid ${lever.color}30`,
                      borderRadius: 100,
                      color: lever.color,
                    }}>{lever.impact.split(' — ')[0]}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Compound Deep-Dives */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
          <div className="section-label">Compound Analysis</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '0.75rem' }}>
            Peptide-by-Peptide Breakdown
          </h2>
          <p style={{ color: '#555570', fontSize: '1.05rem', marginBottom: '3rem', maxWidth: 720 }}>
            Each compound addresses a specific biological lever. Below is the mechanism, jaw-specific effect, and research-based dosing for each compound in the jawline optimization stack.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {compounds.map((c, i) => (
              <div key={i} style={{
                border: `1px solid ${c.border}`,
                borderLeft: `4px solid ${c.color}`,
                borderRadius: 18,
                padding: '2rem',
                background: c.bg,
              }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12, marginBottom: '1.25rem' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                      <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0a0a14', margin: 0 }}>
                        {c.name}
                      </h3>
                      <span style={{
                        fontSize: '0.72rem', fontWeight: 700,
                        padding: '2px 9px',
                        background: `${c.color}15`,
                        border: `1px solid ${c.color}35`,
                        borderRadius: 100,
                        color: c.color,
                      }}>{c.priority}</span>
                    </div>
                    <div style={{ fontSize: '0.82rem', color: '#888898' }}>{c.category}</div>
                  </div>
                  <a
                    href={AFFILIATE_PRODUCT(c.slug)}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: 6,
                      padding: '8px 16px',
                      background: c.color,
                      color: '#000',
                      borderRadius: 100,
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      textDecoration: 'none',
                    }}
                  >
                    View Compound <ExternalLink size={12} />
                  </a>
                </div>
                <p style={{ color: '#444458', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1rem', fontWeight: 600 }}>
                  Role: {c.role}
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
                  <div>
                    <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#888898', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 6 }}>Mechanism</div>
                    <p style={{ color: '#555570', fontSize: '0.88rem', lineHeight: 1.7, margin: 0 }}>{c.mechanism}</p>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.72rem', fontWeight: 700, color: c.color, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 6 }}>Jaw-Specific Effect</div>
                    <p style={{ color: '#555570', fontSize: '0.88rem', lineHeight: 1.7, margin: 0 }}>{c.jawEffect}</p>
                  </div>
                </div>
                <div style={{
                  marginTop: '1.25rem',
                  padding: '0.9rem 1.2rem',
                  background: 'rgba(255,255,255,0.7)',
                  borderRadius: 12,
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: 12,
                }}>
                  <div>
                    <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#888898', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 3 }}>Dosing</div>
                    <div style={{ fontSize: '0.88rem', color: '#333348', fontWeight: 600 }}>{c.dosing}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#888898', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 3 }}>Cycle</div>
                    <div style={{ fontSize: '0.88rem', color: '#333348', fontWeight: 600 }}>{c.cycle}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* The Protocol */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
          <div className="section-label">The Protocol</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '0.75rem' }}>
            The Jawline Optimization Stack
          </h2>
          <p style={{ color: '#555570', fontSize: '1.05rem', marginBottom: '3rem', maxWidth: 720 }}>
            A phased approach that builds the foundation first (skin + tissue resilience), adds the GH axis layer (bone + lean tissue), then applies advanced compounds for muscle and fat. Do not start all compounds simultaneously.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {protocol.map((phase, i) => (
              <div key={i} style={{
                border: `1px solid rgba(0,0,0,0.08)`,
                borderLeft: `4px solid ${phase.color}`,
                borderRadius: 18,
                padding: '2rem',
                background: '#fafafa',
              }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 12, marginBottom: '1.25rem' }}>
                  <span style={{
                    fontSize: '0.72rem', fontWeight: 700,
                    padding: '3px 12px',
                    background: `${phase.color}15`,
                    border: `1px solid ${phase.color}35`,
                    borderRadius: 100,
                    color: phase.color,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                  }}>{phase.phase}</span>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0a0a14', margin: 0 }}>
                    {phase.weeks} — {phase.label}
                  </h3>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
                  <div>
                    <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#888898', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>Compounds</div>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6 }}>
                      {phase.compounds.map((c, j) => (
                        <li key={j} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.92rem', color: '#333348', fontWeight: 600 }}>
                          <div style={{ width: 6, height: 6, borderRadius: '50%', background: phase.color, flexShrink: 0 }} />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#888898', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>Focus</div>
                    <p style={{ color: '#555570', fontSize: '0.92rem', lineHeight: 1.7, margin: 0 }}>{phase.focus}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Key Principles */}
        <section style={{ padding: '4rem 0', borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
          <div className="section-label">Important Notes</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '2rem' }}>
            What to Know Before Starting
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
            {[
              {
                icon: <Layers size={18} />,
                color: '#a78bfa',
                title: 'Fat loss yields the fastest visual result',
                body: 'Submental fat removal from a GLP-1 agonist produces the most dramatic and rapid change to perceived jaw sharpness — often more impactful than structural changes alone. If submental fat is present, address it first.',
              },
              {
                icon: <Zap size={18} />,
                color: '#34d399',
                title: 'IGF-1 LR3 is not a beginner compound',
                body: 'IGF-1 LR3 is potent and should only be added after completing at least one full CJC-1295/Ipamorelin cycle. Baseline bloodwork (IGF-1 levels) is strongly recommended before use.',
              },
              {
                icon: <TrendingDown size={18} />,
                color: '#d4a843',
                title: 'Jaw loading amplifies masseter results',
                body: 'IGF-1 LR3 and GH secretagogues drive satellite cell activation — but satellite cells respond to mechanical demand. Consistent jaw loading (hard chewing, jaw exercises) significantly amplifies masseter hypertrophy results.',
              },
              {
                icon: <Sparkles size={18} />,
                color: '#fb923c',
                title: 'GHK-Cu is the lowest-risk high-impact compound',
                body: 'For those new to peptide protocols, GHK-Cu topical application offers meaningful jaw skin tightening with an excellent tolerability profile. It is the most accessible entry point in the jawline stack.',
              },
            ].map((card, i) => (
              <div key={i} style={{
                padding: '1.5rem',
                border: '1px solid rgba(0,0,0,0.07)',
                borderTop: `3px solid ${card.color}`,
                borderRadius: 16,
                background: '#fafafa',
              }}>
                <div style={{ color: card.color, marginBottom: 10 }}>{card.icon}</div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0a0a14', marginBottom: 8 }}>{card.title}</h4>
                <p style={{ color: '#555570', fontSize: '0.88rem', lineHeight: 1.7, margin: 0 }}>{card.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: '4rem 0', borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
          <div className="section-label">FAQ</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '2.5rem' }}>
            Common Questions
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0, maxWidth: 860 }}>
            {[
              {
                q: 'What peptide is best for jawline definition?',
                a: 'No single peptide targets the jawline in isolation. Optimal results require addressing all four levers: CJC-1295 + Ipamorelin for GH axis (bone + lean tissue), Retatrutide or a GLP-1 agonist for submental fat, GHK-Cu for skin tightening, and optionally IGF-1 LR3 for direct masseter hypertrophy.',
              },
              {
                q: 'Can peptides actually change facial bone structure?',
                a: 'In adults, peptides do not produce puberty-level bone remodeling. GH secretagogues and IGF-1 support periosteal bone maintenance and the osteoblast/osteoclast remodeling cycle — helping preserve or modestly improve bone density over 12+ week cycles. More impactful visual changes come from fat reduction and skin tightening, which dramatically improve perceived jaw definition.',
              },
              {
                q: 'Does Retatrutide reduce submental fat?',
                a: 'Yes. Retatrutide produces systemic fat loss including submental deposits. Phase 2 trials showed 24.2% average body weight reduction at 48 weeks. Submental fat is among the first deposits to clear with significant weight loss, making GLP-1/triple agonist protocols highly effective for jaw definition.',
              },
              {
                q: 'How long does a jawline peptide stack take to show results?',
                a: 'Submental fat reduction: visible at 8–12 weeks. Skin tightening from GHK-Cu: meaningful changes at 8–12 weeks. GH axis improvements from CJC-1295/Ipamorelin: lean tissue benefits at 8–16 weeks. Most users on a complete stack report visible jaw definition changes by week 10–12.',
              },
            ].map((faq, i) => (
              <div key={i} style={{
                padding: '1.5rem 0',
                borderBottom: '1px solid rgba(0,0,0,0.07)',
              }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#0a0a14', marginBottom: 8 }}>
                  {faq.q}
                </h4>
                <p style={{ color: '#555570', fontSize: '0.92rem', lineHeight: 1.75, margin: 0 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '4rem 0' }}>
          <div style={{
            background: 'linear-gradient(135deg, #0a0a14 0%, #111122 100%)',
            borderRadius: 24,
            padding: '3rem 2.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
          }}>
            <div style={{ maxWidth: 580 }}>
              <div className="section-label" style={{ color: '#34d399' }}>Start Your Protocol</div>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.75rem' }}>
                Build the Complete Jawline Stack
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem', lineHeight: 1.7, margin: 0 }}>
                GHK-Cu, CJC-1295/Ipamorelin, IGF-1 LR3, and Retatrutide — all third-party HPLC tested with CoA documentation.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <a
                href={AFFILIATE_PRODUCT('ghk-cu')}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="btn-primary"
              >
                GHK-Cu — Foundation <ArrowRight size={14} />
              </a>
              <a
                href={AFFILIATE_PRODUCT('cjc1295-ipamorelin')}
                target="_blank"
                rel="nofollow noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  padding: '10px 20px', borderRadius: 100,
                  background: 'rgba(255,255,255,0.07)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  color: 'rgba(255,255,255,0.75)',
                  fontSize: '0.88rem', fontWeight: 600,
                  textDecoration: 'none',
                }}
              >
                CJC-1295 + Ipamorelin <ExternalLink size={12} />
              </a>
            </div>
          </div>
          <div style={{ marginTop: '2rem' }}>
            <RelatedLinks currentPath="/jawline-peptides-looksmaxxing" />
          </div>
        </section>

      </div>
    </div>
  )
}
