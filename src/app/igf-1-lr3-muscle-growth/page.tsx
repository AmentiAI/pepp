import Link from 'next/link'
import {
  ArrowRight,
  ExternalLink,
  Zap,
  Activity,
  TrendingUp,
  Shield,
  FlaskConical,
  ChevronRight,
  Clock,
  Target,
  Layers,
  CheckCircle,
  AlertCircle,
} from 'lucide-react'
import { AFFILIATE_BASE, AFFILIATE_PRODUCT } from '@/lib/products'
import RelatedLinks from '@/components/RelatedLinks'

export const metadata = {
  title: 'Buy IGF-1 LR3 | Muscle Growth & Body Recomposition Guide — Verified Peptide | StacksPeptide',
  description:
    'Buy IGF-1 LR3 for sale — trusted, verified >98% purity. Complete muscle growth guide: satellite cell activation, hyperplasia vs hypertrophy, dosing protocol, and cycle timing.',
  alternates: {
    canonical: 'https://www.stackspeptide.com/igf-1-lr3-muscle-growth',
  },
}

const ORANGE = '#fb923c'
const ORANGE_DIM = 'rgba(251,146,60,0.12)'
const ORANGE_BORDER = 'rgba(251,146,60,0.25)'

const pathwayCards = [
  {
    icon: <Target size={22} />,
    title: 'IGF-1R Binding',
    body: 'IGF-1 LR3 binds the IGF-1 receptor with roughly 3× the potency of native IGF-1. The modified arginine substitution at position 3 prevents binding to IGF Binding Proteins (IGFBPs) — so nearly all circulating peptide remains bioavailable.',
  },
  {
    icon: <Zap size={22} />,
    title: 'PI3K / Akt / mTOR',
    body: 'The primary anabolic cascade. PI3K phosphorylates PIP2→PIP3, activating Akt, which phosphorylates and activates mTORC1 — the master regulator of muscle protein synthesis, ribosome biogenesis, and cell growth.',
  },
  {
    icon: <TrendingUp size={22} />,
    title: 'Ras / MAPK / ERK',
    body: 'The proliferation cascade runs in parallel. Ras activates RAF→MEK→ERK signaling, driving satellite cell proliferation and differentiation. This is what makes IGF-1 LR3 unique — it activates both growth AND new cell creation simultaneously.',
  },
  {
    icon: <Activity size={22} />,
    title: 'Satellite Cell Activation',
    body: 'The most consequential downstream effect. IGF-1 LR3 promotes myosatellite cell (resident muscle stem cells) to exit quiescence, proliferate, and fuse with existing myofibers — donating nuclei and creating new fibers. This is hyperplasia.',
  },
]

const comparisonRows = [
  {
    compound: 'IGF-1 LR3',
    halfLife: '20–30 hours',
    mechanism: 'Direct IGF-1R agonist',
    receptor: 'IGF-1R (direct)',
    useCase: 'Satellite cell activation, hyperplasia, sustained anabolic signaling',
    color: ORANGE,
  },
  {
    compound: 'Native IGF-1',
    halfLife: '10–20 minutes',
    mechanism: 'Direct IGF-1R agonist (IGFBP-limited)',
    receptor: 'IGF-1R (direct)',
    useCase: 'Physiological anabolic signaling, IGFBP binding limits circulating fraction',
    color: '#a78bfa',
  },
  {
    compound: 'Ipamorelin / CJC-1295',
    halfLife: 'Ipa: 2h / CJC: 30min',
    mechanism: 'Indirect — GH pulse → liver IGF-1',
    receptor: 'GHS-R1a / GHRH-R',
    useCase: 'GH axis amplification, systemic IGF-1 elevation, lipolysis',
    color: '#d4a843',
  },
]

const timingCards = [
  {
    icon: <Activity size={20} />,
    window: 'Post-Workout',
    why: 'Mechanical loading upregulates IGF-1R density in trained muscle. Administration in this window exploits elevated receptor sensitivity — local uptake is maximized, systemic side effects are minimized.',
    priority: 'Primary',
    color: ORANGE,
  },
  {
    icon: <Clock size={20} />,
    window: 'Fasted State',
    why: 'Insulin suppresses IGFBP levels. In a fasted or low-insulin state, circulating IGFBP-3 is reduced, meaning a greater fraction of administered IGF-1 LR3 remains free and bioavailable — though the LR3 modification already addresses much of this.',
    priority: 'Secondary',
    color: '#d4a843',
  },
  {
    icon: <Shield size={20} />,
    window: 'Pre-Sleep',
    why: 'Natural GH secretion peaks in the first slow-wave sleep cycle (~90 min after sleep onset). Endogenous GH drives hepatic IGF-1 production; exogenous IGF-1 LR3 in this window may synergize with the natural GH pulse for amplified downstream signaling.',
    priority: 'Optional',
    color: '#a78bfa',
  },
]

const protocolRows = [
  {
    approach: 'Systemic SC',
    dose: '40–80 mcg',
    frequency: 'Daily',
    site: 'Subcutaneous (abdomen)',
    duration: '4 weeks on / 4 weeks off',
    notes: 'Standard research protocol. Off-cycle mandatory to prevent receptor desensitization.',
  },
  {
    approach: 'Local IM (MGF-like)',
    dose: '20–40 mcg',
    frequency: 'Post-workout only',
    site: 'IM into trained muscle group',
    duration: 'Up to 4 weeks',
    notes: 'Targets satellite cell activation locally. Lower systemic exposure. Preferred for site-specific research.',
  },
]

const stackItems = [
  {
    compound: 'IGF-1 LR3',
    dose: '50 mcg post-training (SC or IM)',
    role: 'Direct anabolic + satellite cell activation',
    slug: 'igf-1-lr3-1mg',
    color: ORANGE,
  },
  {
    compound: 'Ipamorelin',
    dose: '200 mcg pre-sleep',
    role: 'GHS-R1a agonist — amplifies GH pulse amplitude',
    slug: 'ipamorelin-cjc-1295-blend-10mg',
    color: '#d4a843',
  },
  {
    compound: 'CJC-1295 (no DAC)',
    dose: '100 mcg pre-sleep',
    role: 'GHRH-R agonist — extends GH pulse duration',
    slug: 'ipamorelin-cjc-1295-blend-10mg',
    color: '#d4a843',
  },
]

export default function IGF1LR3Page() {
  return (
    <div style={{ background: '#ffffff', minHeight: '100vh', fontFamily: 'inherit' }}>

      {/* ── HERO ── */}
      <div style={{
        background: 'linear-gradient(160deg, #1a0800 0%, #1f0e04 40%, #0a0a14 100%)',
        padding: '6rem 2rem 5.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* glow orbs */}
        <div style={{
          position: 'absolute', top: '-80px', right: '-80px',
          width: 520, height: 520,
          background: `radial-gradient(circle, ${ORANGE_DIM} 0%, transparent 70%)`,
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '-60px', left: '30%',
          width: 380, height: 380,
          background: 'radial-gradient(circle, rgba(167,139,250,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        {/* dot grid */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: `radial-gradient(circle, rgba(251,146,60,0.07) 1px, transparent 1px)`,
          backgroundSize: '36px 36px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 10%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 10%, transparent 100%)',
        }} />

        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
          <div style={{ maxWidth: 880 }}>
            <div className="section-label" style={{ color: ORANGE, borderColor: ORANGE_BORDER }}>
              Anabolic Peptide Science
            </div>
            <h1 className="heading-xl" style={{ color: '#ffffff', marginBottom: '1.5rem', marginTop: '1rem' }}>
              IGF-1 LR3 —<br />
              <span style={{ color: ORANGE }}>Satellite Cell Activation</span><br />
              &amp; True Muscle Hyperplasia
            </h1>
            <p style={{ fontSize: '1.1rem', color: ORANGE, fontWeight: 600, marginBottom: '0.75rem' }}>
              Long R3 IGF-1 · 83 Amino Acid Analog · 20–30 Hour Half-Life
            </p>
            <p style={{ fontSize: '1.15rem', color: '#9090a8', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: 720 }}>
              IGF-1 LR3 is the most potent anabolic peptide for actual new muscle fiber creation. By
              activating both the PI3K/Akt/mTOR and Ras/MAPK pathways simultaneously — and critically,
              by triggering resident satellite stem cells — it drives not just hypertrophy but true
              hyperplasia: permanent structural additions to muscle architecture.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a
                href={AFFILIATE_PRODUCT('igf-1-lr3-1mg')}
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="btn-primary"
                style={{ background: ORANGE, borderColor: ORANGE }}
              >
                Buy IGF-1 LR3 (1mg) <ExternalLink size={14} />
              </a>
              <a
                href={AFFILIATE_BASE}
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="btn-secondary"
                style={{ color: '#e0e0f0', borderColor: 'rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.05)' }}
              >
                Shop All Compounds <ArrowRight size={14} />
              </a>
            </div>
            <p style={{ fontSize: '0.78rem', color: '#555570', marginTop: '2rem' }}>
              For research and laboratory use only. Not intended for human consumption. All protocols are educational references.
            </p>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>

        {/* ── WHAT IS IGF-1 LR3 ── */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label" style={{ color: ORANGE, borderColor: ORANGE_BORDER }}>What It Is</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '1rem' }}>
            IGF-1 LR3 vs Native IGF-1 — Why the Modification Matters
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', marginTop: '2.5rem' }}>
            <div>
              <p style={{ color: '#444460', lineHeight: 1.85, fontSize: '1.05rem', marginBottom: '1.25rem' }}>
                <strong>Long R3 IGF-1 (IGF-1 LR3)</strong> is a synthetic analog of Insulin-like Growth Factor 1 with
                two key modifications to its 83 amino acid sequence: an N-terminal 13 amino acid extension and
                an arginine substitution at position 3. Together these changes reduce binding affinity for
                IGF Binding Proteins (IGFBPs) by approximately 1000-fold.
              </p>
              <p style={{ color: '#444460', lineHeight: 1.85, fontSize: '1.05rem', marginBottom: '1.25rem' }}>
                The clinical relevance: native IGF-1 has a plasma half-life of roughly 10–15 minutes in its free
                form because IGFBPs rapidly sequester it. IGF-1 LR3 resists IGFBP binding, extending its active
                half-life to <strong>20–30 hours</strong> — a 100× increase in circulating duration. Sustained
                receptor engagement is what drives the satellite cell proliferation effects that brief IGF-1 pulses cannot achieve.
              </p>
              <p style={{ color: '#444460', lineHeight: 1.85, fontSize: '1.05rem' }}>
                For research purposes, this extended half-life means a single daily administration can maintain
                IGF-1R stimulation throughout the recovery window — the entire period when muscle protein
                synthesis and satellite cell proliferation are most responsive.
              </p>
            </div>
            <div>
              <div style={{
                background: '#f7f8fc',
                borderRadius: 16,
                padding: '2rem',
                border: '1px solid rgba(0,0,0,0.06)',
                marginBottom: '1.25rem',
              }}>
                <div style={{ fontWeight: 700, color: '#0a0a14', marginBottom: '1.25rem', fontSize: '1rem' }}>
                  Key Structural Differences
                </div>
                {[
                  { label: 'Amino acid length', native: '70 aa', lr3: '83 aa (+13 N-terminal)', color: ORANGE },
                  { label: 'Position 3 residue', native: 'Glu (Glutamic acid)', lr3: 'Arg (Arginine)', color: ORANGE },
                  { label: 'IGFBP binding', native: 'High (sequesters rapidly)', lr3: '~1000× reduced', color: ORANGE },
                  { label: 'Free half-life', native: '10–15 minutes', lr3: '20–30 hours', color: ORANGE },
                  { label: 'IGF-1R potency', native: 'Baseline', lr3: '~3× higher', color: ORANGE },
                ].map(row => (
                  <div key={row.label} style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',
                    gap: '0.5rem',
                    padding: '0.6rem 0',
                    borderBottom: '1px solid rgba(0,0,0,0.05)',
                    alignItems: 'center',
                  }}>
                    <div style={{ color: '#9090a8', fontSize: '0.83rem', fontWeight: 600 }}>{row.label}</div>
                    <div style={{ color: '#555570', fontSize: '0.83rem' }}>{row.native}</div>
                    <div style={{ color: row.color, fontSize: '0.83rem', fontWeight: 700 }}>{row.lr3}</div>
                  </div>
                ))}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.5rem', paddingTop: '0.5rem' }}>
                  <div style={{ color: '#555', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase' }}></div>
                  <div style={{ color: '#9090a8', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase' }}>Native IGF-1</div>
                  <div style={{ color: ORANGE, fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase' }}>IGF-1 LR3</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── MECHANISM ── */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label" style={{ color: ORANGE, borderColor: ORANGE_BORDER }}>Mechanism of Action</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '0.75rem' }}>
            Dual Pathway Activation + Satellite Cell Cascade
          </h2>
          <p style={{ color: '#9090a8', fontSize: '1.05rem', marginBottom: '2.5rem', maxWidth: 700 }}>
            IGF-1 LR3 activates two distinct intracellular cascades simultaneously upon IGF-1R binding.
            This dual activation is the molecular basis of its unmatched anabolic profile.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {pathwayCards.map(card => (
              <div
                key={card.title}
                style={{
                  border: '1px solid rgba(0,0,0,0.08)',
                  borderTop: `3px solid ${ORANGE}`,
                  borderRadius: 16,
                  padding: '1.75rem',
                  background: '#ffffff',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 12,
                    background: ORANGE_DIM,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: ORANGE, flexShrink: 0,
                  }}>
                    {card.icon}
                  </div>
                  <div style={{ fontWeight: 700, color: '#0a0a14', fontSize: '1rem' }}>{card.title}</div>
                </div>
                <p style={{ color: '#555570', lineHeight: 1.75, fontSize: '0.93rem' }}>
                  {card.body}
                </p>
              </div>
            ))}
          </div>

          {/* Satellite cell detail callout */}
          <div style={{
            background: 'linear-gradient(135deg, #1a0800 0%, #1f0e04 100%)',
            borderRadius: 18,
            padding: '2.5rem',
            marginTop: '2.5rem',
            border: `1px solid ${ORANGE_BORDER}`,
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem', flexWrap: 'wrap' }}>
              <div style={{
                width: 52, height: 52, borderRadius: 14,
                background: ORANGE_DIM,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: ORANGE, flexShrink: 0,
              }}>
                <Layers size={26} />
              </div>
              <div style={{ flex: 1, minWidth: 260 }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: ORANGE, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>
                  Critical Distinction
                </div>
                <div style={{ fontWeight: 800, fontSize: '1.15rem', color: '#ffffff', marginBottom: '0.75rem' }}>
                  Satellite Cell Activation — Why It Sets IGF-1 LR3 Apart
                </div>
                <p style={{ color: '#9090a8', lineHeight: 1.8, fontSize: '0.97rem', marginBottom: '0.75rem' }}>
                  Satellite cells are the resident muscle stem cells that normally remain quiescent between
                  the basal lamina and sarcolemma of muscle fibers. Mechanical damage and anabolic signaling —
                  particularly sustained IGF-1R activation via the MAPK/ERK pathway — cause them to exit
                  quiescence, proliferate, and either fuse with damaged fibers (repair/hypertrophy) or
                  form entirely new fiber units (hyperplasia).
                </p>
                <p style={{ color: '#9090a8', lineHeight: 1.8, fontSize: '0.97rem' }}>
                  The extended half-life of IGF-1 LR3 maintains IGF-1R stimulation long enough to drive the
                  full satellite cell cycle from activation through differentiation — something the brief
                  native IGF-1 pulse cannot accomplish. This is the mechanistic basis for the hyperplastic
                  response unique to this compound.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── HYPERPLASIA VS HYPERTROPHY ── */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label" style={{ color: ORANGE, borderColor: ORANGE_BORDER }}>Fiber Biology</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '1rem' }}>
            Hyperplasia vs Hypertrophy —<br />
            <span style={{ color: ORANGE }}>Why New Fibers Change Everything</span>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2.5rem' }}>

            <div style={{
              border: '1px solid rgba(0,0,0,0.08)',
              borderRadius: 16, padding: '2rem',
              background: '#fafafa',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div style={{
                  width: 10, height: 10, borderRadius: '50%',
                  background: '#a78bfa', flexShrink: 0,
                }} />
                <div style={{ fontWeight: 800, fontSize: '1.05rem', color: '#0a0a14' }}>Hypertrophy</div>
              </div>
              <p style={{ color: '#555570', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: '1rem' }}>
                The classic muscle growth mechanism. Existing muscle fibers increase in cross-sectional area
                through additional myofibril accumulation, increased sarcoplasmic volume, and glycogen
                supercompensation. The number of fibers does not change — each fiber simply gets larger.
              </p>
              <div style={{ fontSize: '0.82rem', color: '#9090a8', fontStyle: 'italic', lineHeight: 1.6 }}>
                All resistance training and most anabolic compounds work through hypertrophy. Gains are
                real and substantial, but they are bounded by the existing fiber count established early
                in development.
              </div>
            </div>

            <div style={{
              border: `2px solid ${ORANGE_BORDER}`,
              borderRadius: 16, padding: '2rem',
              background: 'rgba(251,146,60,0.03)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div style={{
                  width: 10, height: 10, borderRadius: '50%',
                  background: ORANGE, flexShrink: 0,
                }} />
                <div style={{ fontWeight: 800, fontSize: '1.05rem', color: '#0a0a14' }}>Hyperplasia</div>
                <div style={{
                  fontSize: '0.68rem', fontWeight: 700, color: ORANGE,
                  background: ORANGE_DIM, padding: '2px 8px', borderRadius: 20,
                  textTransform: 'uppercase', letterSpacing: '0.08em',
                }}>IGF-1 LR3</div>
              </div>
              <p style={{ color: '#555570', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: '1rem' }}>
                The creation of entirely new muscle fibers via satellite cell proliferation and differentiation.
                Satellite cells — previously quiescent — are activated by sustained IGF-1R signaling, divide,
                and ultimately fuse to form new functional myofibers. The total fiber count increases.
              </p>
              <div style={{
                background: ORANGE_DIM,
                borderRadius: 10,
                padding: '0.9rem 1.1rem',
                fontSize: '0.88rem',
                color: '#c2540a',
                lineHeight: 1.65,
                fontWeight: 600,
              }}>
                Hyperplastic gains represent a permanent structural change in muscle architecture.
                New fibers, once established with their own nuclei, persist beyond the research cycle — they
                respond to training like any other fiber. This is why researchers consider IGF-1 LR3 to have
                the most durable anabolic effect of any studied peptide.
              </div>
            </div>

            <div style={{
              border: '1px solid rgba(0,0,0,0.08)',
              borderRadius: 16, padding: '2rem',
              background: '#fafafa',
            }}>
              <div style={{ fontWeight: 800, fontSize: '1.05rem', color: '#0a0a14', marginBottom: '1rem' }}>
                IGF-1 LR3 Drives Both
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                {[
                  { point: 'mTORC1 activation increases protein synthesis rate in existing fibers (hypertrophy)', checked: true },
                  { point: 'MAPK/ERK drives satellite cell proliferation (hyperplasia precursor)', checked: true },
                  { point: 'Anti-apoptotic signaling preserves newly formed fibers', checked: true },
                  { point: 'New myonuclei increase the \"nuclear domain\" — enabling greater future hypertrophy', checked: true },
                  { point: 'Satellite cell pool partially self-renews, maintaining stem cell reserve for future cycles', checked: true },
                ].map(item => (
                  <div key={item.point} style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start' }}>
                    <CheckCircle size={16} style={{ color: ORANGE, flexShrink: 0, marginTop: 3 }} />
                    <span style={{ color: '#555570', fontSize: '0.9rem', lineHeight: 1.65 }}>{item.point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── BODY RECOMPOSITION DUAL ACTION ── */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label" style={{ color: ORANGE, borderColor: ORANGE_BORDER }}>Dual Action</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '1rem' }}>
            Body Recomposition:<br />
            <span style={{ color: ORANGE }}>Anabolic + Lipolytic Simultaneously</span>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', marginTop: '2rem' }}>
            <div>
              <p style={{ color: '#444460', lineHeight: 1.85, fontSize: '1.05rem', marginBottom: '1.25rem' }}>
                Fat cells express IGF-1R. IGF-1R activation in adipocytes initiates a signaling cascade that
                increases hormone-sensitive lipase (HSL) activity and promotes lipolysis — the breakdown of
                stored triglycerides into free fatty acids for energy. This means IGF-1 LR3 is simultaneously
                anabolic to muscle and lipolytic to adipose tissue.
              </p>
              <p style={{ color: '#444460', lineHeight: 1.85, fontSize: '1.05rem', marginBottom: '1.25rem' }}>
                Additionally, the anti-catabolic effects of IGF-1 signaling — suppression of muscle protein
                breakdown via Akt-mediated FOXO phosphorylation — mean that even in an energy deficit,
                muscle protein degradation is blunted. This creates the essential precondition for
                true body recomposition: muscle gains despite reduced caloric availability.
              </p>
              <p style={{ color: '#444460', lineHeight: 1.85, fontSize: '1.05rem' }}>
                The combination of anabolic (muscle), anti-catabolic (muscle preservation), and lipolytic
                (fat) signaling makes IGF-1 LR3 the single most versatile body recomposition compound in
                research. No other peptide operates across all three axes from a single receptor.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                {
                  icon: <TrendingUp size={18} />,
                  label: 'Anabolic',
                  title: 'Muscle Protein Synthesis',
                  detail: 'mTORC1 activation drives protein synthesis in skeletal muscle. Satellite cell fusion increases myonuclei count, enabling greater protein synthetic capacity per fiber.',
                  color: ORANGE,
                },
                {
                  icon: <Shield size={18} />,
                  label: 'Anti-Catabolic',
                  title: 'Muscle Preservation',
                  detail: 'Akt phosphorylates FOXO transcription factors, preventing nuclear translocation and suppressing the atrogene program (MuRF-1, atrogin-1). Muscle breakdown is inhibited.',
                  color: '#34d399',
                },
                {
                  icon: <Zap size={18} />,
                  label: 'Lipolytic',
                  title: 'Fat Mobilization',
                  detail: 'Adipocyte IGF-1R activation increases HSL activity and promotes triglyceride breakdown. Free fatty acids are released for oxidation — simultaneously with muscle anabolism.',
                  color: '#a78bfa',
                },
              ].map(item => (
                <div key={item.label} style={{
                  border: '1px solid rgba(0,0,0,0.07)',
                  borderLeft: `4px solid ${item.color}`,
                  borderRadius: '0 12px 12px 0',
                  padding: '1.25rem 1.5rem',
                  background: '#fafafa',
                  display: 'flex', gap: '1rem', alignItems: 'flex-start',
                }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 9,
                    background: `${item.color}22`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: item.color, flexShrink: 0,
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.7rem', fontWeight: 700, color: item.color, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{item.label}</div>
                    <div style={{ fontWeight: 700, color: '#0a0a14', marginBottom: '0.35rem', fontSize: '0.95rem' }}>{item.title}</div>
                    <p style={{ color: '#555570', fontSize: '0.88rem', lineHeight: 1.65, margin: 0 }}>{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── RESEARCH PROTOCOL ── */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label" style={{ color: ORANGE, borderColor: ORANGE_BORDER }}>Research Protocol</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '0.75rem' }}>
            Administration Approaches &amp; Dosing
          </h2>
          <p style={{ color: '#9090a8', fontSize: '1.05rem', marginBottom: '1rem', maxWidth: 680 }}>
            Two primary protocols are used in IGF-1 LR3 research. Both require strict 4-week on / 4-week off
            cycling to prevent IGF-1R downregulation and maintain receptor sensitivity.
          </p>
          <div style={{
            background: 'rgba(251,146,60,0.06)',
            border: `1px solid ${ORANGE_BORDER}`,
            borderRadius: 12, padding: '1rem 1.25rem',
            marginBottom: '2rem',
            display: 'flex', alignItems: 'flex-start', gap: '0.75rem',
          }}>
            <AlertCircle size={18} style={{ color: ORANGE, flexShrink: 0, marginTop: 2 }} />
            <p style={{ color: '#7a3a10', fontSize: '0.9rem', lineHeight: 1.65, margin: 0 }}>
              <strong>Receptor Desensitization Warning:</strong> Continuous administration beyond 4 weeks causes
              IGF-1R downregulation. Efficacy diminishes and hypoglycemic risk increases. The 4-week off period
              allows receptor density and sensitivity to fully restore before the next cycle.
            </p>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 640 }}>
              <thead>
                <tr style={{ background: '#0a0a14' }}>
                  {['Approach', 'Dose', 'Frequency', 'Injection Site', 'Duration', 'Notes'].map(h => (
                    <th key={h} style={{
                      padding: '1rem 1.15rem', textAlign: 'left',
                      color: ORANGE, fontSize: '0.75rem', fontWeight: 700,
                      textTransform: 'uppercase', letterSpacing: '0.1em',
                    }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {protocolRows.map((row, i) => (
                  <tr key={row.approach} style={{
                    background: i % 2 === 0 ? '#ffffff' : '#f7f8fc',
                    borderBottom: '1px solid rgba(0,0,0,0.05)',
                  }}>
                    <td style={{ padding: '1rem 1.15rem', fontWeight: 700, color: '#0a0a14', fontSize: '0.92rem', whiteSpace: 'nowrap' }}>{row.approach}</td>
                    <td style={{ padding: '1rem 1.15rem', color: ORANGE, fontWeight: 700, fontSize: '0.9rem', whiteSpace: 'nowrap' }}>{row.dose}</td>
                    <td style={{ padding: '1rem 1.15rem', color: '#555570', fontSize: '0.9rem' }}>{row.frequency}</td>
                    <td style={{ padding: '1rem 1.15rem', color: '#555570', fontSize: '0.9rem' }}>{row.site}</td>
                    <td style={{ padding: '1rem 1.15rem', color: '#555570', fontSize: '0.9rem', whiteSpace: 'nowrap' }}>{row.duration}</td>
                    <td style={{ padding: '1rem 1.15rem', color: '#9090a8', fontSize: '0.85rem' }}>{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── TIMING ── */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label" style={{ color: ORANGE, borderColor: ORANGE_BORDER }}>Administration Timing</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '0.75rem' }}>
            When to Administer for Maximum Effect
          </h2>
          <p style={{ color: '#9090a8', fontSize: '1.05rem', marginBottom: '2.5rem', maxWidth: 680 }}>
            Because IGF-1 LR3 has a 20–30 hour half-life, the timing of administration has less acute
            impact than shorter-acting peptides — but the window you choose shapes which tissue receives
            the highest concentration during peak signaling periods.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {timingCards.map(card => (
              <div key={card.window} style={{
                border: '1px solid rgba(0,0,0,0.08)',
                borderTop: `3px solid ${card.color}`,
                borderRadius: 16,
                padding: '1.75rem',
                background: '#ffffff',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 11,
                    background: `${card.color}18`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: card.color, flexShrink: 0,
                  }}>
                    {card.icon}
                  </div>
                  <div>
                    <div style={{ fontWeight: 800, color: '#0a0a14', fontSize: '1rem' }}>{card.window}</div>
                    <div style={{
                      fontSize: '0.68rem', fontWeight: 700, color: card.color,
                      background: `${card.color}15`,
                      padding: '2px 7px', borderRadius: 20,
                      textTransform: 'uppercase', letterSpacing: '0.08em',
                      display: 'inline-block', marginTop: 2,
                    }}>
                      {card.priority}
                    </div>
                  </div>
                </div>
                <p style={{ color: '#555570', lineHeight: 1.75, fontSize: '0.92rem' }}>
                  {card.why}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── GH SECRETAGOGUE STACK ── */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label" style={{ color: ORANGE, borderColor: ORANGE_BORDER }}>Advanced Stack</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '1rem' }}>
            IGF-1 LR3 + GH Secretagogue Stack
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
            <div>
              <p style={{ color: '#444460', lineHeight: 1.85, fontSize: '1.05rem', marginBottom: '1.25rem' }}>
                The synergy rationale: Ipamorelin and CJC-1295 (no DAC) elevate pituitary GH secretion.
                Elevated GH drives the liver to produce IGF-1 — but this systemic IGF-1 is rapidly
                bound by IGFBPs and has a short half-life. Exogenous IGF-1 LR3 fills this gap with
                sustained, IGFBP-resistant IGF-1R stimulation.
              </p>
              <p style={{ color: '#444460', lineHeight: 1.85, fontSize: '1.05rem', marginBottom: '1.25rem' }}>
                The two signals are complementary rather than redundant: GH secretagogues optimize the
                upstream hormonal environment (GH pulse amplitude and duration, systemic IGF-1 elevation,
                lipolysis via GH&rsquo;s direct adipocyte effects), while IGF-1 LR3 delivers sustained,
                direct downstream receptor activation at the muscle fiber level.
              </p>
              <p style={{ color: '#444460', lineHeight: 1.85, fontSize: '1.05rem' }}>
                The combined protocol represents the most complete anabolic signaling environment
                achievable with peptides alone: upstream GH axis optimization paired with downstream
                IGF-1R saturation, driving both hypertrophy and satellite cell-mediated hyperplasia.
              </p>
            </div>

            <div>
              <div style={{
                background: 'linear-gradient(135deg, #0a0a14, #1a1a2e)',
                borderRadius: 16,
                padding: '2rem',
                border: `1px solid ${ORANGE_BORDER}`,
              }}>
                <div style={{ fontWeight: 700, color: '#ffffff', marginBottom: '1.5rem', fontSize: '1rem' }}>
                  Maximum Anabolic Stack — Research Protocol
                </div>
                {stackItems.map(item => (
                  <div key={item.compound} style={{
                    borderBottom: '1px solid rgba(255,255,255,0.07)',
                    paddingBottom: '1.1rem',
                    marginBottom: '1.1rem',
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem', flexWrap: 'wrap' }}>
                      <div style={{ fontWeight: 700, color: item.color, fontSize: '0.93rem' }}>{item.compound}</div>
                      <div style={{ color: '#9090a8', fontSize: '0.82rem', textAlign: 'right' }}>{item.dose}</div>
                    </div>
                    <div style={{ color: '#777790', fontSize: '0.82rem', marginTop: '0.2rem' }}>{item.role}</div>
                  </div>
                ))}
                <div style={{ marginTop: '1.25rem' }}>
                  <a
                    href={AFFILIATE_PRODUCT('igf-1-lr3-1mg')}
                    target="_blank"
                    rel="sponsored noopener noreferrer"
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: 7,
                      color: ORANGE, fontWeight: 700, fontSize: '0.93rem',
                      textDecoration: 'none',
                    }}
                  >
                    Shop IGF-1 LR3 <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── COMPARISON TABLE ── */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label" style={{ color: ORANGE, borderColor: ORANGE_BORDER }}>Compound Comparison</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '0.75rem' }}>
            IGF-1 LR3 vs Native IGF-1 vs Ipamorelin / CJC-1295
          </h2>
          <p style={{ color: '#9090a8', fontSize: '1.05rem', marginBottom: '2rem', maxWidth: 680 }}>
            Understanding the mechanistic differences clarifies why these compounds are complementary —
            not interchangeable — in an advanced anabolic research stack.
          </p>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 700 }}>
              <thead>
                <tr style={{ background: '#0a0a14' }}>
                  {['Compound', 'Half-Life', 'Mechanism', 'Primary Receptor', 'Research Use Case'].map(h => (
                    <th key={h} style={{
                      padding: '1rem 1.15rem', textAlign: 'left',
                      color: ORANGE, fontSize: '0.75rem', fontWeight: 700,
                      textTransform: 'uppercase', letterSpacing: '0.1em',
                    }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.compound} style={{
                    background: i === 0 ? `rgba(251,146,60,0.04)` : i % 2 === 0 ? '#ffffff' : '#f7f8fc',
                    borderBottom: '1px solid rgba(0,0,0,0.05)',
                    borderLeft: i === 0 ? `3px solid ${ORANGE}` : 'none',
                  }}>
                    <td style={{ padding: '1rem 1.15rem', fontWeight: 700, color: row.color, fontSize: '0.92rem', whiteSpace: 'nowrap' }}>{row.compound}</td>
                    <td style={{ padding: '1rem 1.15rem', color: '#555570', fontSize: '0.9rem', whiteSpace: 'nowrap' }}>{row.halfLife}</td>
                    <td style={{ padding: '1rem 1.15rem', color: '#555570', fontSize: '0.9rem' }}>{row.mechanism}</td>
                    <td style={{ padding: '1rem 1.15rem', color: '#555570', fontSize: '0.9rem' }}>{row.receptor}</td>
                    <td style={{ padding: '1rem 1.15rem', color: '#555570', fontSize: '0.88rem', lineHeight: 1.55 }}>{row.useCase}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── RELATED LINKS ── */}
        <section style={{ padding: '2rem 0 1rem' }}>
          <RelatedLinks currentPath="/igf-1-lr3-muscle-growth" />
        </section>

        {/* ── CTA ── */}
        <section style={{ padding: '3.5rem 0 5rem' }}>
          <div style={{
            background: 'linear-gradient(135deg, #1a0800 0%, #2a1200 100%)',
            borderRadius: 20,
            padding: '3rem 2.5rem',
            textAlign: 'center',
            border: `1px solid ${ORANGE_BORDER}`,
          }}>
            <div className="section-label" style={{ color: ORANGE, borderColor: ORANGE_BORDER, justifyContent: 'center', marginBottom: '1rem' }}>
              <FlaskConical size={14} /> Research-Grade · Verified Purity
            </div>
            <h2 className="heading-md" style={{ color: '#ffffff', marginBottom: '0.75rem' }}>
              Buy IGF-1 LR3 — &gt;98% Purity, Third-Party Verified
            </h2>
            <p style={{ color: '#9090a8', fontSize: '1rem', marginBottom: '2rem', maxWidth: 540, margin: '0 auto 2rem' }}>
              Apollo Peptide Sciences IGF-1 LR3 (1mg). Certificate of Analysis available.
              Research-grade purity verified by independent third-party laboratory testing.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href={AFFILIATE_PRODUCT('igf-1-lr3-1mg')}
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="btn-primary"
                style={{ background: ORANGE, borderColor: ORANGE }}
              >
                Buy IGF-1 LR3 (1mg) <ExternalLink size={14} />
              </a>
              <Link
                href="/products/igf-1-lr3-1mg"
                className="btn-secondary"
                style={{ color: '#e0e0f0', borderColor: 'rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.06)' }}
              >
                Product Details <ChevronRight size={14} />
              </Link>
            </div>
            <p style={{ fontSize: '0.78rem', color: '#555570', marginTop: '1.75rem' }}>
              For research and laboratory use only. Not for human consumption. Affiliate disclosure: we earn
              a commission on qualifying purchases at no additional cost to you.
            </p>
          </div>
        </section>

      </div>
    </div>
  )
}
