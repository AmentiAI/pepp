'use client'
import Link from 'next/link'
import { ArrowRight, ExternalLink, Clock, Layers, Zap, FlaskConical, Leaf, Activity, Star, AlertCircle, ChevronRight } from 'lucide-react'
import { AFFILIATE_BASE, AFFILIATE_PRODUCT } from '@/lib/products'
import RelatedLinks from '@/components/RelatedLinks'

const timelineStages = [
  {
    range: 'Week 1–2',
    phase: 'Initial Phase',
    dotColor: '#a78bfa',
    bgColor: 'rgba(167,139,250,0.07)',
    borderColor: 'rgba(167,139,250,0.25)',
    happening: 'GHK-Cu begins binding copper ions; initial gene activation cascade starts. Antioxidant gene upregulation initiates — particularly SOD (superoxide dismutase), a primary ROS-scavenging enzyme.',
    notice: 'Subtle improvement in skin hydration. Skin may feel more supple and plump. Most subjects report no dramatic visible change at this stage.',
    clinical: 'Early antioxidant gene upregulation documented in gene expression studies. The biological cascade is initializing — this window is about laying the molecular groundwork, not visible transformation.',
    note: 'Nothing dramatic yet. The downstream collagen synthesis changes require the antioxidant and signaling infrastructure to be established first.',
  },
  {
    range: 'Week 3–4',
    phase: 'Early Response',
    dotColor: '#c084fc',
    bgColor: 'rgba(192,132,252,0.07)',
    borderColor: 'rgba(192,132,252,0.25)',
    happening: 'Collagen synthesis genes begin upregulating. Fibroblast activation increases. TIMP-1 and TIMP-2 (tissue inhibitors of metalloproteinases — collagen breakdown inhibitors) begin elevating, protecting existing collagen from enzymatic degradation.',
    notice: 'Improved skin texture becoming perceptible. Pores may appear finer. Early glow effect as hydration improves at the dermal level. Topical users typically notice hydration improvements first at this stage.',
    clinical: 'TIMP-1 and TIMP-2 elevation documented in fibroblast studies. This marks the protective phase — stopping further collagen breakdown while new synthesis begins to ramp up.',
    note: 'Topical users notice hydration and texture improvements earliest. Injectable users may observe more systemic skin quality changes beginning here.',
  },
  {
    range: 'Week 6–8',
    phase: 'Active Remodeling',
    dotColor: '#d4a843',
    bgColor: 'rgba(212,168,67,0.07)',
    borderColor: 'rgba(212,168,67,0.3)',
    happening: 'Collagen type I and type III synthesis measurably increasing. Elastin gene upregulation intensifies. The extracellular matrix begins active structural remodeling — new collagen fibers are being laid down and organized.',
    notice: 'Fine lines begin to appear softened. Skin feels firmer to the touch. Improved elasticity becomes noticeable when skin is pinched. Improved bounce-back speed.',
    clinical: 'This window corresponds to early collagen matrix remodeling documented in Pickart et al. studies. Decorin synthesis begins elevating — the proteoglycan responsible for organizing collagen fibers into properly aligned bundles.',
    note: 'Hair follicle application users (scalp protocol): may notice reduced shedding beginning at this window as follicle vascularization improves.',
  },
  {
    range: 'Week 10–12',
    phase: 'Peak Response',
    dotColor: '#34d399',
    bgColor: 'rgba(52,211,153,0.07)',
    borderColor: 'rgba(52,211,153,0.25)',
    happening: '28% collagen increase documented at the 12-week mark in Pickart et al. studies. Decorin upregulation is now organizing new collagen into a structured, well-aligned matrix — producing measurable improvements in skin density rather than merely surface effects.',
    notice: 'Measurable reduction in fine line depth. Improved skin density — skin feels substantively thicker. Better wound healing speed. Hair thickness improvements in follicle protocol users. Improvements in under-eye dermal quality and jawline skin tightening.',
    clinical: 'The 28% collagen increase at 12 weeks is the benchmark finding from Pickart research. Skin density improvements at 3 months were documented in 51% of subjects in clinical cohorts. This is the primary endpoint window that most GHK-Cu studies use.',
    note: 'Looksmaxxing applications: skin texture improvements, under-eye area improvements, jawline definition through skin tightening over bone structure are all most pronounced at this stage.',
  },
  {
    range: 'Week 12+',
    phase: 'Maintenance',
    dotColor: '#22d3ee',
    bgColor: 'rgba(34,211,238,0.07)',
    borderColor: 'rgba(34,211,238,0.25)',
    happening: 'Continued collagen remodeling and maturation. Antioxidant protection sustained. The epigenetic changes initiated in earlier weeks persist — gene expression shifts toward a younger transcriptional profile have been shown to continue after dosing cessation in some models.',
    notice: 'Results consolidate and continue gradually improving. The collagen matrix continues maturing, which means structural improvements compound over time.',
    clinical: 'Gene expression changes have an epigenetic component — methylation pattern changes outlast the dosing period. This is a key differentiator from topical cosmetic actives that require continuous application for any effect.',
    note: 'Maintenance protocol: continue daily dosing, or reduce to 5 days/week. Optional 4-week break before repeating to preserve receptor sensitivity.',
  },
]

const looksmaxxingApps = [
  {
    area: 'Under-Eye Hollowing',
    color: '#a78bfa',
    icon: <Star size={16} />,
    mechanism: 'GHK-Cu drives collagen synthesis in the thin periorbital dermis. Improved dermal thickness reduces the shadow created by hollow tear troughs, improving under-eye appearance without filler.',
  },
  {
    area: 'Skin Texture',
    color: '#d4a843',
    icon: <Layers size={16} />,
    mechanism: 'Collagen matrix remodeling tightens the dermal scaffold, reducing pore appearance. As dermal collagen density increases, surface irregularities smooth — producing the "glass skin" texture effect.',
  },
  {
    area: 'Post-Acne Scarring',
    color: '#fb923c',
    icon: <Activity size={16} />,
    mechanism: 'GHK-Cu accelerates wound remodeling and upregulates decorin — which organizes scar tissue collagen into normal, aligned fiber patterns. Depressed scars respond to increased collagen density from below.',
  },
  {
    area: 'Jawline Definition',
    color: '#34d399',
    icon: <Zap size={16} />,
    mechanism: 'Skin tightening effect over bone structure. As dermal collagen density and elastin content improve, skin adheres more tightly to the underlying mandibular bone structure — enhancing definition.',
  },
]

export default function GHKCuResultsTimelinePage() {
  return (
    <div style={{ background: '#ffffff', minHeight: '100vh' }}>

      {/* Hero */}
      <div style={{
        background: 'linear-gradient(160deg, #1a0a2e 0%, #120820 50%, #0a0a14 100%)',
        padding: '5.5rem 2rem 5rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          background: 'radial-gradient(ellipse 60% 50% at 70% 50%, rgba(167,139,250,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
          <div style={{ maxWidth: 820 }}>
            <div className="section-label" style={{ color: '#a78bfa' }}>
              Skin Science
            </div>
            <h1 className="heading-xl" style={{ color: '#ffffff', marginBottom: '1.25rem' }}>
              GHK-Cu <span className="gold-text">Results Timeline</span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: 680 }}>
              What peer-reviewed data says to expect — week by week — from GHK-Cu copper peptide research. From first gene activation to measurable collagen density changes.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: '2rem' }}>
              <Link href="/products/ghk-cu-50mg" className="btn-primary">
                View GHK-Cu <ArrowRight size={14} />
              </Link>
              <a href="#timeline" className="btn-secondary" style={{ color: 'rgba(255,255,255,0.75)', borderColor: 'rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.05)' }}>
                Jump to Timeline <ChevronRight size={14} />
              </a>
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 14px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 100, fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)' }}>
              <AlertCircle size={12} style={{ color: '#fb923c' }} />
              For laboratory and research use only. Not for human consumption.
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>

        {/* Clinical Foundation Stats */}
        <section style={{ padding: '4rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div style={{ marginBottom: '2rem' }}>
            <div className="section-label">Clinical Foundation</div>
            <h2 className="heading-lg" style={{ color: '#0a0a14' }}>Published Research Data</h2>
            <p style={{ color: '#555570', marginTop: '0.75rem', maxWidth: 640, fontSize: '1.05rem' }}>
              GHK-Cu is one of the most studied copper-binding peptides in dermatological science. These are benchmarks from peer-reviewed research.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {[
              {
                stat: '28%',
                label: 'Collagen Production Increase',
                detail: 'Documented at 12 weeks in Pickart et al. studies — the primary published benchmark for GHK-Cu collagen induction.',
                color: '#a78bfa',
              },
              {
                stat: '4,000+',
                label: 'Genes Modulated',
                detail: 'GHK-Cu modulates over 4,000 human genes — the majority involved in skin regeneration, collagen synthesis, and anti-inflammatory pathways.',
                color: '#d4a843',
              },
              {
                stat: '51%',
                label: 'Subjects with Significant Improvement',
                detail: 'Of subjects showed significant improvement in skin density at 3 months in published clinical assessment cohorts.',
                color: '#34d399',
              },
            ].map(item => (
              <div key={item.label} style={{
                padding: '2rem',
                background: '#f9f9fd',
                border: '1px solid rgba(0,0,0,0.07)',
                borderTop: `3px solid ${item.color}`,
                borderRadius: 18,
              }}>
                <div style={{ fontSize: '3rem', fontWeight: 900, color: item.color, lineHeight: 1, letterSpacing: '-0.04em', marginBottom: '0.5rem' }}>{item.stat}</div>
                <div style={{ fontWeight: 800, color: '#0a0a14', fontSize: '1rem', marginBottom: '0.5rem' }}>{item.label}</div>
                <div style={{ color: '#666688', fontSize: '0.97rem', lineHeight: 1.65 }}>{item.detail}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Mechanism Section */}
        <section style={{ padding: '4rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="rg-2col" style={{ gap: '4rem', alignItems: 'center' }}>
            <div>
              <div className="section-label">Mechanism of Action</div>
              <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '1.25rem' }}>
                Why GHK-Cu Results<br /><span className="gold-text">Take Time</span>
              </h2>
              <p style={{ color: '#444458', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '1.05rem' }}>
                GHK-Cu works at the gene expression level — not through surface moisturization or temporary plumping. It upregulates collagen type I, type III, elastin, decorin, and antioxidant genes while simultaneously downregulating inflammatory pathways associated with aging.
              </p>
              <p style={{ color: '#444458', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '1.05rem' }}>
                Gene expression changes accumulate over weeks. Each day of dosing adds to the transcriptional shift — fibroblasts require sustained signaling to meaningfully increase their collagen output. This is why the results timeline is progressive, not immediate: you are not applying a topical effect, you are rewiring cellular behavior.
              </p>
              <p style={{ color: '#444458', lineHeight: 1.85, fontSize: '1.05rem' }}>
                Naturally occurring GHK-Cu levels drop from approximately <strong style={{ color: '#0a0a14' }}>200 ng/mL at age 20</strong> to under <strong style={{ color: '#0a0a14' }}>80 ng/mL by age 60</strong>. This decline correlates directly with the loss of skin quality, wound healing capacity, and hair follicle vitality observed with aging. Exogenous GHK-Cu replenishment restores the signaling environment that youthful skin depends on.
              </p>
            </div>
            <div>
              {[
                { gene: 'Collagen I & III', action: 'Upregulated', desc: 'Structural skin proteins — increasing dermal thickness and firmness', color: '#a78bfa' },
                { gene: 'Elastin', action: 'Upregulated', desc: 'Skin elasticity and recoil — reduces fine lines and improves bounce-back', color: '#d4a843' },
                { gene: 'Decorin', action: 'Upregulated', desc: 'Collagen fiber organization — essential for structured, healthy matrix architecture', color: '#34d399' },
                { gene: 'SOD / Antioxidant Genes', action: 'Upregulated', desc: 'Protection of collagen from ROS-mediated degradation', color: '#22d3ee' },
                { gene: 'Inflammatory Pathways', action: 'Downregulated', desc: 'Chronic inflammation is the primary driver of dermal collagen loss', color: '#fb923c' },
              ].map(item => (
                <div key={item.gene} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  padding: '1rem 1.25rem',
                  marginBottom: '0.625rem',
                  background: '#f9f9fd',
                  border: '1px solid rgba(0,0,0,0.06)',
                  borderLeft: `3px solid ${item.color}`,
                  borderRadius: '0 12px 12px 0',
                }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: '0.2rem' }}>
                      <span style={{ fontWeight: 800, color: '#0a0a14', fontSize: '0.97rem' }}>{item.gene}</span>
                      <span style={{ fontSize: '0.72rem', fontWeight: 700, padding: '2px 8px', borderRadius: 100, background: `${item.color}15`, color: item.color, border: `1px solid ${item.color}30` }}>{item.action}</span>
                    </div>
                    <div style={{ fontSize: '0.92rem', color: '#666688', lineHeight: 1.55 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Week-by-Week Timeline */}
        <section id="timeline" style={{ padding: '4rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)', scrollMarginTop: 80 }}>
          <div className="section-label">The Centerpiece</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '0.75rem' }}>
            Week-by-Week <span className="gold-text">GHK-Cu Timeline</span>
          </h2>
          <p style={{ color: '#555570', fontSize: '1.05rem', marginBottom: '3rem', maxWidth: 680 }}>
            Based on published clinical data and documented gene expression timelines. All statements refer to published research findings, not claims about individual outcomes. For laboratory use only.
          </p>

          <div style={{ position: 'relative' }}>
            {/* Vertical line */}
            <div style={{
              position: 'absolute',
              left: 20,
              top: 24,
              bottom: 24,
              width: 2,
              background: 'linear-gradient(180deg, #a78bfa 0%, #c084fc 25%, #d4a843 50%, #34d399 75%, #22d3ee 100%)',
              borderRadius: 2,
            }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {timelineStages.map((stage, i) => (
                <div key={stage.range} style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
                  {/* Dot */}
                  <div style={{
                    width: 42,
                    height: 42,
                    borderRadius: '50%',
                    background: stage.dotColor,
                    border: `3px solid #fff`,
                    boxShadow: `0 0 0 2px ${stage.dotColor}40, 0 4px 16px ${stage.dotColor}30`,
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1,
                  }}>
                    <span style={{ color: '#fff', fontWeight: 900, fontSize: '0.72rem' }}>{i + 1}</span>
                  </div>
                  {/* Content */}
                  <div style={{
                    flex: 1,
                    padding: '1.75rem 2rem',
                    background: stage.bgColor,
                    border: `1px solid ${stage.borderColor}`,
                    borderRadius: 20,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                      <span style={{ fontWeight: 900, color: stage.dotColor, fontSize: '1.25rem', letterSpacing: '-0.02em' }}>{stage.range}</span>
                      <span style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        padding: '3px 10px',
                        borderRadius: 100,
                        background: `${stage.dotColor}15`,
                        color: stage.dotColor,
                        border: `1px solid ${stage.dotColor}30`,
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                      }}>{stage.phase}</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      {[
                        { label: "What's Happening", text: stage.happening, icon: <FlaskConical size={14} /> },
                        { label: 'What You May Notice', text: stage.notice, icon: <Activity size={14} /> },
                        { label: 'Clinical Context', text: stage.clinical, icon: <Layers size={14} /> },
                      ].map(row => (
                        <div key={row.label} style={{ display: 'flex', gap: '0.75rem' }}>
                          <div style={{ paddingTop: 3, color: stage.dotColor, flexShrink: 0 }}>{row.icon}</div>
                          <div>
                            <div style={{ fontSize: '0.78rem', fontWeight: 700, color: stage.dotColor, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.2rem' }}>{row.label}</div>
                            <div style={{ fontSize: '0.97rem', color: '#444458', lineHeight: 1.75 }}>{row.text}</div>
                          </div>
                        </div>
                      ))}
                      <div style={{
                        marginTop: '0.25rem',
                        padding: '0.75rem 1rem',
                        background: `${stage.dotColor}08`,
                        border: `1px solid ${stage.dotColor}20`,
                        borderRadius: 10,
                        fontSize: '0.92rem',
                        color: '#555570',
                        fontStyle: 'italic',
                        lineHeight: 1.65,
                      }}>
                        {stage.note}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Topical vs Injectable */}
        <section style={{ padding: '4rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label">Delivery Method</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '0.75rem' }}>
            Topical vs. <span className="gold-text">Injectable</span> GHK-Cu
          </h2>
          <p style={{ color: '#555570', fontSize: '1.05rem', marginBottom: '2.5rem', maxWidth: 640 }}>
            Both delivery routes are used in GHK-Cu research. The choice depends on the application target and desired depth of effect.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {[
              {
                method: 'Topical Application',
                color: '#a78bfa',
                pros: [
                  'Convenient for skin-focused protocols',
                  'Effective for surface collagen and texture improvements',
                  'Direct delivery to epidermal and upper dermal layers',
                  'No reconstitution required for cream/serum formulations',
                ],
                cons: [
                  'Transdermal delivery limits depth of penetration',
                  'Slower onset compared to subcutaneous injection',
                  'Less systemic effect — localized to application area',
                  'Bioavailability dependent on formulation quality',
                ],
                timing: 'Results typically begin appearing at week 4–6 for topical applications.',
              },
              {
                method: 'Subcutaneous Injection',
                color: '#d4a843',
                pros: [
                  'Higher bioavailability — direct systemic circulation',
                  'Faster gene modulation at target tissues',
                  'Preferred route for systemic anti-aging protocols',
                  'Deeper tissue effects — dermis and subdermis',
                ],
                cons: [
                  'Requires reconstitution and sterile technique',
                  'Injection site selection affects local tissue distribution',
                  'More complex protocol administration',
                  'Higher dose precision required',
                ],
                timing: 'Gene modulation effects detectable earlier — often by week 2–3.',
              },
            ].map(item => (
              <div key={item.method} style={{
                padding: '2rem',
                background: '#f9f9fd',
                border: `1px solid ${item.color}30`,
                borderTop: `3px solid ${item.color}`,
                borderRadius: 20,
              }}>
                <h3 style={{ fontWeight: 900, color: '#0a0a14', fontSize: '1.2rem', marginBottom: '1.5rem' }}>{item.method}</h3>
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#34d399', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>Advantages</div>
                  {item.pros.map(p => (
                    <div key={p} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#34d399', flexShrink: 0, marginTop: 7 }} />
                      <span style={{ fontSize: '0.97rem', color: '#444458', lineHeight: 1.65 }}>{p}</span>
                    </div>
                  ))}
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#fb923c', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>Limitations</div>
                  {item.cons.map(c => (
                    <div key={c} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#fb923c', flexShrink: 0, marginTop: 7 }} />
                      <span style={{ fontSize: '0.97rem', color: '#444458', lineHeight: 1.65 }}>{c}</span>
                    </div>
                  ))}
                </div>
                <div style={{ padding: '0.875rem 1.1rem', background: `${item.color}08`, border: `1px solid ${item.color}20`, borderRadius: 10, fontSize: '0.92rem', color: '#555570', fontStyle: 'italic' }}>
                  {item.timing}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Hair Regrowth Application */}
        <section style={{ padding: '4rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="rg-2col" style={{ gap: '4rem', alignItems: 'center' }}>
            <div>
              <div className="section-label" style={{ color: '#34d399' }}>Hair Application</div>
              <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '1.25rem' }}>
                GHK-Cu for<br /><span className="gold-text">Hair Regrowth</span>
              </h2>
              <p style={{ color: '#444458', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '1.05rem' }}>
                GHK-Cu has dual-use applications in both skin and hair follicle science. Research demonstrates that GHK-Cu stimulates hair follicle stem cell activity, enlarges follicle size, and reduces follicle miniaturization — the primary mechanism in androgenic hair loss.
              </p>
              <p style={{ color: '#444458', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '1.05rem' }}>
                The mechanism involves copper-mediated activation of follicle vascularization (via VEGF upregulation), increased keratinocyte proliferation, and downregulation of the inflammatory signals that accelerate follicle regression in the catagen phase.
              </p>
              <p style={{ color: '#444458', lineHeight: 1.85, marginBottom: '2rem', fontSize: '1.05rem' }}>
                Timeline for follicle effects runs longer than skin effects: <strong style={{ color: '#0a0a14' }}>3–6 months for follicle enlargement</strong> and documented thickness improvements. Follicle enlargement from miniaturized to terminal caliber takes time — the follicle must complete full growth cycles.
              </p>
              <Link href="/products/ghk-cu-50mg" className="btn-primary">
                View GHK-Cu <ArrowRight size={14} />
              </Link>
            </div>
            <div>
              {[
                { title: 'Follicle Stem Cell Activation', detail: 'GHK-Cu upregulates signaling pathways that activate quiescent follicle stem cells, promoting entry into the anagen (growth) phase.' },
                { title: 'Follicle Size Enlargement', detail: 'Documented enlargement of follicle diameter in research models. Miniaturized follicles show measurable increase in caliber with sustained protocol.' },
                { title: 'Reduced Follicle Miniaturization', detail: 'Anti-inflammatory effects reduce the DHT-mediated inflammatory signaling that drives progressive follicle miniaturization in androgenic patterns.' },
                { title: 'Scalp Vascularization', detail: 'VEGF upregulation improves blood supply to the dermal papilla — restoring the nutrient delivery capacity essential for terminal hair production.' },
              ].map((item, i) => (
                <div key={item.title} style={{
                  display: 'flex',
                  gap: '1rem',
                  padding: '1.25rem 1.5rem',
                  marginBottom: '0.75rem',
                  background: '#f9f9fd',
                  border: '1px solid rgba(52,211,153,0.2)',
                  borderRadius: 16,
                }}>
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#34d399', fontWeight: 900, fontSize: '0.82rem', flexShrink: 0 }}>{i + 1}</div>
                  <div>
                    <div style={{ fontWeight: 800, color: '#0a0a14', fontSize: '0.97rem', marginBottom: '0.3rem' }}>{item.title}</div>
                    <div style={{ fontSize: '0.92rem', color: '#666688', lineHeight: 1.65 }}>{item.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Looksmaxxing Applications */}
        <section style={{ padding: '4rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label">Aesthetic Applications</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '0.75rem' }}>
            Looksmaxxing with <span className="gold-text">GHK-Cu</span>
          </h2>
          <p style={{ color: '#555570', fontSize: '1.05rem', marginBottom: '2.5rem', maxWidth: 680 }}>
            GHK-Cu maps directly to specific aesthetic goals through its collagen and dermal remodeling mechanisms. Each application area has a distinct biological rationale rooted in published research.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
            {looksmaxxingApps.map(app => (
              <div key={app.area} style={{
                padding: '1.75rem',
                background: '#f9f9fd',
                border: '1px solid rgba(0,0,0,0.07)',
                borderRadius: 18,
                transition: 'border-color 0.2s',
              }} className="hover-card-border">
                <div style={{ width: 40, height: 40, borderRadius: 10, background: `${app.color}12`, border: `1px solid ${app.color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: app.color, marginBottom: '1rem' }}>
                  {app.icon}
                </div>
                <h3 style={{ fontWeight: 800, color: '#0a0a14', fontSize: '1.05rem', marginBottom: '0.6rem' }}>{app.area}</h3>
                <p style={{ fontSize: '0.97rem', color: '#555570', lineHeight: 1.7 }}>{app.mechanism}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Protocol Card */}
        <section style={{ padding: '4rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label">Reference Protocol</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '2rem' }}>
            GHK-Cu <span className="gold-text">Protocol Guide</span>
          </h2>
          <div style={{
            padding: '2.5rem',
            background: 'linear-gradient(135deg, #fffbf0, #f7f8fc)',
            border: '2px solid rgba(212,168,67,0.25)',
            borderRadius: 24,
            maxWidth: 760,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.75rem' }}>
              <FlaskConical size={20} style={{ color: '#d4a843' }} />
              <span style={{ fontWeight: 900, color: '#0a0a14', fontSize: '1.1rem' }}>Standard Research Protocol</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem', marginBottom: '1.75rem' }}>
              {[
                { label: 'Dose', value: '1–2 mg daily' },
                { label: 'Route', value: 'SubQ or topical' },
                { label: 'Cycle Length', value: '12 weeks' },
                { label: 'Break', value: '4 weeks optional' },
              ].map(item => (
                <div key={item.label} style={{ padding: '1rem 1.25rem', background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(212,168,67,0.15)', borderRadius: 12 }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#9090a8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.3rem' }}>{item.label}</div>
                  <div style={{ fontWeight: 900, color: '#0a0a14', fontSize: '1.05rem' }}>{item.value}</div>
                </div>
              ))}
            </div>
            <div style={{ padding: '1rem 1.25rem', background: 'rgba(212,168,67,0.06)', border: '1px solid rgba(212,168,67,0.15)', borderRadius: 12, fontSize: '0.92rem', color: '#666688', lineHeight: 1.7 }}>
              <strong style={{ color: '#0a0a14' }}>Lab Use Only.</strong> All protocols and dosing references are derived from published research literature. GHK-Cu is sold strictly for in-vitro and laboratory research purposes. Not for human consumption or clinical use.
            </div>
          </div>
        </section>

        {/* Product CTA */}
        <section style={{ padding: '4rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div style={{
            background: 'linear-gradient(135deg, #1a0a2e 0%, #0a0a14 100%)',
            borderRadius: 24,
            padding: '3.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
            flexWrap: 'wrap',
          }}>
            <div>
              <div className="section-label" style={{ color: '#a78bfa' }}>Source Premium Grade</div>
              <h2 className="heading-md" style={{ color: '#ffffff', marginBottom: '0.75rem' }}>GHK-Cu Copper Peptide 50mg</h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1rem', maxWidth: 480, lineHeight: 1.7 }}>
                Third-party tested, ≥98% HPLC purity, full Certificate of Analysis. The benchmark compound for collagen-focused research protocols.
              </p>
              <div style={{ marginTop: '0.75rem', fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)' }}>
                For laboratory and research use only.
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'flex-start' }}>
              <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#d4a843', letterSpacing: '-0.04em', lineHeight: 1 }}>$50.00</div>
              <Link href="/products/ghk-cu-50mg" className="btn-primary" style={{ fontSize: '1rem', padding: '0.9rem 2rem' }}>
                View Product <ArrowRight size={16} />
              </Link>
              <a href={AFFILIATE_PRODUCT('ghk-cu')} target="_blank" rel="sponsored noopener noreferrer" style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.45)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 }}>
                Buy Now <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </section>

        {/* Related Links */}
        <section style={{ padding: '2rem 0' }}>
          <RelatedLinks currentPath="/ghk-cu-results-timeline" />
        </section>

        {/* Final CTA */}
        <section style={{ padding: '2rem 0 5rem' }}>
          <div style={{ background: 'linear-gradient(135deg, #fffbf0, #f7f8fc)', border: '1px solid rgba(212,168,67,0.2)', borderRadius: 24, padding: '3.5rem', textAlign: 'center' }}>
            <div className="section-label" style={{ justifyContent: 'center', display: 'flex' }}>Premium Grade Source</div>
            <h2 className="heading-md" style={{ color: '#0a0a14', marginBottom: '0.75rem' }}>Source GHK-Cu from our supplier</h2>
            <p style={{ color: '#555570', marginBottom: '2rem', fontSize: '1rem', maxWidth: 560, margin: '0 auto 2rem' }}>
              Third-party tested. Certificate of Analysis on every order. The reference standard for research-grade copper peptides.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={AFFILIATE_BASE} target="_blank" rel="sponsored noopener noreferrer" className="btn-primary" style={{ fontSize: '1rem', padding: '0.9rem 2.5rem' }}>
                Shop Now <ExternalLink size={16} />
              </a>
              <Link href="/products/ghk-cu-50mg" className="btn-secondary" style={{ fontSize: '1rem', padding: '0.9rem 2rem' }}>
                View GHK-Cu Profile <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
