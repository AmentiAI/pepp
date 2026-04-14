'use client'
import Link from 'next/link'
import { ArrowRight, ExternalLink, CheckCircle, Activity, Zap, Shield, FlaskConical } from 'lucide-react'
import { AFFILIATE_BASE, AFFILIATE_PRODUCT } from '@/lib/products'
import RelatedLinks from '@/components/RelatedLinks'

const healingTargets = [
  {
    area: 'Tendon & Ligament',
    color: '#d4a843',
    icon: <Zap size={20} />,
    headline: 'Fastest tendon healing ever documented in animal models',
    detail:
      'BPC-157 upregulates FAK (focal adhesion kinase) and paxillin signaling in tendon fibroblasts — the specific pathway responsible for extracellular matrix remodeling and collagen fiber realignment. Studies demonstrate measurable tendon-to-bone healing acceleration within 7 days that exceeds all other known peptide interventions. Tendon fibroblast proliferation and outgrowth are dramatically enhanced even under conditions of mechanical disruption.',
    citation: 'Brcic et al. (2018). J Orthop Res — Tendon healing in transected Achilles tendon model.',
  },
  {
    area: 'Gut & GI Tract',
    color: '#34d399',
    icon: <Shield size={20} />,
    headline: 'Systemic GI repair: leaky gut, IBD, gastric ulcers, NSAID damage',
    detail:
      'BPC-157 is naturally found in gastric juice at low concentrations — it was first isolated from the human stomach. Its cytoprotective effect on the GI mucosa is well-documented across models of gastric ulcer, NSAID-induced enteropathy, and inflammatory bowel disease. It restores tight junction protein expression (occludin, ZO-1) that defines gut permeability, reduces gut wall inflammation via NF-κB downregulation, and reverses mucosal atrophy. Oral administration is uniquely effective for GI targeting — the peptide is acid-stable at gastric pH.',
    citation: 'Sikiric et al. (2018). Curr Pharm Des — BPC-157 cytoprotection in GI tract models.',
  },
  {
    area: 'Muscle',
    color: '#a78bfa',
    icon: <Activity size={20} />,
    headline: 'Satellite cell activation and accelerated muscle fiber repair',
    detail:
      'In muscle crush and laceration models, BPC-157 significantly accelerates functional recovery through satellite cell (muscle stem cell) activation, angiogenesis at the wound site via VEGF upregulation, and anti-inflammatory remodeling of damaged fiber architecture. Nitric oxide pathway activation increases blood flow to injured tissue, delivering oxygen and substrates essential for repair. Myotendinous junction injuries — notorious for their poor healing prognosis — show particularly notable response.',
    citation: 'Chang et al. (2011). Regul Pept — Muscle fiber repair and satellite cell activation model.',
  },
  {
    area: 'Neurological',
    color: '#22d3ee',
    icon: <FlaskConical size={20} />,
    headline: 'Motor neuron repair, neuroprotection, and crush injury recovery',
    detail:
      'BPC-157 demonstrates neuroprotective properties that extend beyond peripheral tissue. In sciatic nerve crush injury models, it significantly accelerates functional motor recovery — an outcome few compounds achieve in neuroscience. It promotes neurite outgrowth, protects against dopaminergic lesion-induced neurodegeneration, and has shown anti-seizure activity in CNS models. The nitric oxide pathway is again central: NO modulation in neural tissue affects both inflammation and neural plasticity.',
    citation: 'Sikiric et al. (2014). CNS Neurosci Ther — BPC-157 neuroprotection and crush injury models.',
  },
]

const timelineStages = [
  {
    range: 'Week 1–2',
    phase: 'Acute Response',
    dotColor: '#22d3ee',
    bgColor: 'rgba(34,211,238,0.06)',
    borderColor: 'rgba(34,211,238,0.22)',
    happening: 'Nitric oxide pathway activation begins immediately — increasing local blood flow and oxygen delivery to injured tissue. VEGF (vascular endothelial growth factor) upregulation initiates angiogenesis: new capillary formation begins at the injury site within 48–72 hours of first administration.',
    notice: 'Reduction in acute inflammation at the injury site. Pain and swelling begin to decrease faster than unassisted healing. Range of motion begins returning to joints. GI users typically notice gut discomfort improving within the first week.',
    clinical: 'FAK/paxillin signaling in tendon fibroblasts is measurably elevated in the first 7 days — the mechanistic driver of the rapid early tendon healing effect seen in animal studies.',
    note: 'The early anti-inflammatory effect is not simple pain masking — it reflects genuine downstream modulation of inflammatory cascade signaling at the wound site.',
  },
  {
    range: 'Week 3–4',
    phase: 'Active Tissue Repair',
    dotColor: '#34d399',
    bgColor: 'rgba(52,211,153,0.06)',
    borderColor: 'rgba(52,211,153,0.22)',
    happening: 'Collagen synthesis in tendon and connective tissue is meaningfully elevated. Fibroblast proliferation is in full swing — new extracellular matrix is being laid down. In muscle models, satellite cell activation and myofiber regeneration are at peak activity during this window.',
    notice: 'Tendon and ligament injuries: returning functional strength. Active tissue feel — the area of injury begins to feel less fragile. Gut healing subjects: significant improvement in digestive comfort, stool regularity, and mucosal sensitivity.',
    clinical: 'The VEGF-driven angiogenesis initiated in weeks 1–2 is now producing a functional new vascular network at the injury site — this is the structural basis for accelerated tissue oxygenation that underpins the healing speed advantage.',
    note: 'This is the window where local injection protocols (injecting near the injury site) show the greatest advantage over systemic protocols — localized VEGF and fibroblast signaling is highest here.',
  },
  {
    range: 'Week 6–8',
    phase: 'Remodeling',
    dotColor: '#d4a843',
    bgColor: 'rgba(212,168,67,0.07)',
    borderColor: 'rgba(212,168,67,0.28)',
    happening: 'Collagen fiber remodeling and alignment. New collagen laid down in weeks 3–4 begins undergoing organizational remodeling — fibers align along lines of mechanical stress, increasing tensile strength. The tissue transitions from scar-like repair toward functional tissue architecture.',
    notice: 'Tendon/ligament: returning to load-bearing activity. Strength approaching pre-injury baseline. Muscle: functional strength recovery largely complete. Neural: progressive motor function return in nerve injury protocols.',
    clinical: 'At the 6-week mark in published tendon models, BPC-157-treated tissue demonstrates superior collagen fiber organization and tensile strength compared to controls — not just faster healing, but better quality repair.',
    note: 'For chronic injuries (tendinopathies that have been present for months or years), the 6–8 week window may correspond to the first meaningful tissue-level change rather than full recovery.',
  },
  {
    range: 'Week 12+',
    phase: 'Consolidation',
    dotColor: '#a78bfa',
    bgColor: 'rgba(167,139,250,0.06)',
    borderColor: 'rgba(167,139,250,0.22)',
    happening: 'Tissue consolidation, maturation of collagen matrix, and normalization of tissue architecture. In neurological recovery protocols, continued progressive improvement in motor function as axonal regrowth and remyelination proceed. GI mucosal integrity is fully restored.',
    notice: 'Full or near-full return to pre-injury functional capacity for most injury types. For severe injuries or surgical recovery protocols, this marks the window of return to full training or competitive activity.',
    clinical: 'Full 12-week cycles are recommended for severe injuries, surgical recovery, or chronic tendinopathies. Mild-to-moderate acute injuries often complete their primary healing response by weeks 6–8, allowing dose reduction or discontinuation.',
    note: 'Cycle lengths of 4–6 weeks are appropriate for minor injuries. 8–12 weeks for moderate-to-severe injuries or post-surgical repair. Continuous use beyond 12 weeks is not validated in published models.',
  },
]

const dosingProtocols = [
  {
    name: 'Systemic Protocol',
    color: '#d4a843',
    dose: '250–500 mcg',
    frequency: 'Daily',
    route: 'Subcutaneous injection',
    site: 'Belly fat (umbilical region)',
    cycle: '4–12 weeks',
    bestFor: 'Gut healing, general recovery, neurological protocols, systemic anti-inflammatory effect',
    notes: 'Lower 250 mcg dose for gut-focused protocols and first-time users. 500 mcg for active injury recovery with higher healing demand.',
  },
  {
    name: 'Local Injection Protocol',
    color: '#22d3ee',
    dose: '250 mcg',
    frequency: 'Daily',
    route: 'Subcutaneous near injury site',
    site: 'Subcutaneous fat adjacent to injury',
    cycle: '4–8 weeks',
    bestFor: 'Tendon, ligament, and muscle injuries — maximum local tissue concentration',
    notes: 'Inject into the subcutaneous layer as close to the injury site as safely possible. Do not inject directly into tendon tissue. Local delivery maximizes fibroblast signaling at the site of injury.',
  },
]

const mechanismPathways = [
  {
    pathway: 'Nitric Oxide (NO) Pathway',
    color: '#d4a843',
    action: 'Upregulated',
    detail: 'BPC-157 is a potent nitric oxide system modulator. It acts as an eNOS activator — increasing endothelial nitric oxide production which drives vasodilation, increased blood flow, and oxygen delivery to injured tissue. The NO pathway also mediates its neuroprotective and gut-protective effects.',
  },
  {
    pathway: 'VEGF Upregulation',
    color: '#34d399',
    action: 'Upregulated',
    detail: 'Vascular endothelial growth factor (VEGF) drives angiogenesis — the formation of new blood vessels. BPC-157 significantly upregulates VEGF expression, producing new capillary networks in damaged tissue within the first 72 hours of administration. This vascular restoration is the structural basis for accelerated tissue repair.',
  },
  {
    pathway: 'FAK / Paxillin Signaling',
    color: '#a78bfa',
    action: 'Activated',
    detail: 'Focal adhesion kinase (FAK) and paxillin are the central signaling nodes for tendon fibroblast behavior — governing cell migration, proliferation, and extracellular matrix production. BPC-157 dramatically upregulates FAK/paxillin activity in tendon fibroblasts, which is the primary mechanism behind its industry-leading tendon healing speed.',
  },
  {
    pathway: 'Growth Hormone Receptor',
    color: '#fb923c',
    action: 'Upregulated',
    detail: 'BPC-157 upregulates growth hormone receptor expression — sensitizing tissues to endogenous GH and IGF-1 signaling. This amplifies the anabolic and regenerative signaling environment without directly raising GH levels, explaining its efficacy in muscle and bone repair contexts.',
  },
  {
    pathway: 'NF-κB Inflammatory Pathway',
    color: '#22d3ee',
    action: 'Downregulated',
    detail: 'Nuclear factor kappa-light-chain-enhancer of activated B cells (NF-κB) is the master regulator of inflammatory gene expression. BPC-157 downregulates NF-κB activity — reducing production of pro-inflammatory cytokines (TNF-α, IL-6, IL-1β) that drive chronic inflammation and impede tissue repair.',
  },
]

const comparisonRows = [
  { feature: 'Primary mechanism', bpc: 'FAK/paxillin, NO pathway, VEGF', tb: 'Actin regulation (Thymosin β4), systemic repair' },
  { feature: 'Published studies', bpc: '120+ studies', tb: '50+ studies' },
  { feature: 'Half-life', bpc: 'Short (hours) — requires daily dosing', tb: 'Moderate (days) — 2x/week sufficient' },
  { feature: 'Best injury type', bpc: 'Tendon, gut, neural, local tissue', tb: 'Muscle, systemic, widespread injury' },
  { feature: 'Administration', bpc: 'Oral (gut), subQ, or IM', tb: 'SubQ or IM only' },
  { feature: 'Standard dose', bpc: '250–500 mcg/day', tb: '2–5 mg twice weekly' },
  { feature: 'Gut healing', bpc: 'Yes — primary indication', tb: 'Limited gut evidence' },
  { feature: 'Angiogenesis', bpc: 'Strong via VEGF', tb: 'Moderate via thymosin mechanism' },
  { feature: 'Neural repair', bpc: 'Yes — motor neuron studies', tb: 'Limited neural evidence' },
  { feature: 'Stack benefit', bpc: 'Local healing + gut', tb: 'Systemic + muscle sweep' },
]

export default function BPC157HealingProtocolPage() {
  return (
    <div style={{ background: '#ffffff', minHeight: '100vh' }}>

      {/* Hero */}
      <div style={{
        background: 'linear-gradient(160deg, #0a1628 0%, #0d1f0d 50%, #0a0a14 100%)',
        padding: '5.5rem 2rem 5rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          background: 'radial-gradient(ellipse 60% 50% at 65% 50%, rgba(212,168,67,0.10) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
          <div style={{ maxWidth: 860 }}>
            <div className="section-label" style={{ color: '#d4a843' }}>
              Injury Recovery Science
            </div>
            <h1 className="heading-xl" style={{ color: '#ffffff', marginBottom: '1.25rem' }}>
              BPC-157 <span className="gold-text">Complete Healing Protocol</span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: '1.5rem', maxWidth: 720 }}>
              A pentadecapeptide of 15 amino acids naturally found in human gastric juice. BPC-157 is the most studied healing peptide in published literature — with 120+ peer-reviewed studies documenting its effect on tendon, gut, muscle, and neural repair through distinct, validated molecular pathways.
            </p>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, marginBottom: '2.5rem', maxWidth: 680 }}>
              Below: complete injection protocol, healing timeline by tissue type, mechanism of action, BPC-157 vs TB-500 comparison, and dosing guide based on published research.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: '2rem' }}>
              <a href={AFFILIATE_PRODUCT('bpc-157-10mg')} target="_blank" rel="sponsored noopener noreferrer" className="btn-primary">
                Buy BPC-157 <ExternalLink size={14} />
              </a>
              <a href="#protocol" className="btn-secondary" style={{ color: 'rgba(255,255,255,0.75)', borderColor: 'rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.05)' }}>
                Jump to Protocol <ArrowRight size={14} />
              </a>
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 14px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 100, fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)' }}>
              <CheckCircle size={12} style={{ color: '#34d399' }} />
              For laboratory and research use only. Not for human consumption.
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>

        {/* Key Stats */}
        <section style={{ padding: '4rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div style={{ marginBottom: '2rem' }}>
            <div className="section-label">Research Overview</div>
            <h2 className="heading-lg" style={{ color: '#0a0a14' }}>Why BPC-157 Is the Benchmark Healing Peptide</h2>
            <p style={{ color: '#555570', marginTop: '0.75rem', maxWidth: 680, fontSize: '1.05rem' }}>
              No other healing peptide has the published breadth of BPC-157. Its evidence base spans multiple tissue types, multiple species, and multiple research groups — independently replicated findings across decades.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
            {[
              {
                stat: '120+',
                label: 'Published Studies',
                detail: 'More peer-reviewed publications than any other healing peptide. Research spans tendon, gut, muscle, bone, neural, and cardiac tissue across multiple independent groups.',
                color: '#d4a843',
              },
              {
                stat: '15',
                label: 'Amino Acids',
                detail: 'BPC-157 is a pentadecapeptide — 15 amino acids — derived from the BPC (Body Protection Compound) sequence found in human gastric juice. Synthetic form identical to the endogenous sequence.',
                color: '#34d399',
              },
              {
                stat: '5',
                label: 'Tissue Types Validated',
                detail: 'Tendon, ligament, gut mucosa, muscle, and neural tissue — all with published mechanistic studies in peer-reviewed journals. No other single peptide spans this breadth of documented healing targets.',
                color: '#a78bfa',
              },
              {
                stat: '7 days',
                label: 'Tendon Healing Onset',
                detail: 'Measurable tendon fibroblast outgrowth and FAK/paxillin upregulation documented within 7 days of administration in transected Achilles tendon models — the fastest documented healing induction in this tissue.',
                color: '#22d3ee',
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

        {/* What BPC-157 Heals */}
        <section style={{ padding: '4rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label">Documented Healing Targets</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '0.75rem' }}>
            What BPC-157 <span className="gold-text">Heals</span>
          </h2>
          <p style={{ color: '#555570', fontSize: '1.05rem', marginBottom: '2.5rem', maxWidth: 680 }}>
            Each of the following has mechanistic and outcome data in peer-reviewed literature. BPC-157 does not operate via a single pathway — it recruits distinct signaling cascades depending on the tissue type.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {healingTargets.map(target => (
              <div key={target.area} style={{
                padding: '2rem',
                background: '#f9f9fd',
                border: `1px solid ${target.color}25`,
                borderTop: `3px solid ${target.color}`,
                borderRadius: 20,
              }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: `${target.color}12`,
                  border: `1px solid ${target.color}25`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: target.color, marginBottom: '1.25rem',
                }}>
                  {target.icon}
                </div>
                <h3 style={{ fontWeight: 900, color: '#0a0a14', fontSize: '1.1rem', marginBottom: '0.4rem' }}>{target.area}</h3>
                <p style={{ fontWeight: 700, color: target.color, fontSize: '0.92rem', marginBottom: '1rem', lineHeight: 1.5 }}>{target.headline}</p>
                <p style={{ fontSize: '0.97rem', color: '#444458', lineHeight: 1.75, marginBottom: '1rem' }}>{target.detail}</p>
                <div style={{
                  padding: '0.625rem 0.875rem',
                  background: `${target.color}08`,
                  border: `1px solid ${target.color}18`,
                  borderRadius: 8,
                  fontSize: '0.82rem',
                  color: '#888899',
                  fontStyle: 'italic',
                }}>
                  {target.citation}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Healing Timeline */}
        <section id="timeline" style={{ padding: '4rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)', scrollMarginTop: 80 }}>
          <div className="section-label">Recovery Timeline</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '0.75rem' }}>
            BPC-157 Healing <span className="gold-text">Week-by-Week Timeline</span>
          </h2>
          <p style={{ color: '#555570', fontSize: '1.05rem', marginBottom: '3rem', maxWidth: 700 }}>
            What is happening biologically versus what researchers and subjects observe — based on published mechanistic data from multiple injury models. Tendon and gut timelines are the most thoroughly documented.
          </p>

          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute',
              left: 20,
              top: 24,
              bottom: 24,
              width: 2,
              background: 'linear-gradient(180deg, #22d3ee 0%, #34d399 33%, #d4a843 66%, #a78bfa 100%)',
              borderRadius: 2,
            }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {timelineStages.map((stage, i) => (
                <div key={stage.range} style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
                  <div style={{
                    width: 42, height: 42, borderRadius: '50%',
                    background: stage.dotColor,
                    border: '3px solid #fff',
                    boxShadow: `0 0 0 2px ${stage.dotColor}40, 0 4px 16px ${stage.dotColor}30`,
                    flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    zIndex: 1,
                  }}>
                    <span style={{ color: '#fff', fontWeight: 900, fontSize: '0.72rem' }}>{i + 1}</span>
                  </div>
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
                        fontSize: '0.75rem', fontWeight: 700,
                        padding: '3px 10px', borderRadius: 100,
                        background: `${stage.dotColor}15`,
                        color: stage.dotColor,
                        border: `1px solid ${stage.dotColor}30`,
                        letterSpacing: '0.05em', textTransform: 'uppercase' as const,
                      }}>{stage.phase}</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      {[
                        { label: "What's Happening", text: stage.happening, icon: <FlaskConical size={14} /> },
                        { label: 'What You May Notice', text: stage.notice, icon: <Activity size={14} /> },
                        { label: 'Clinical Context', text: stage.clinical, icon: <Zap size={14} /> },
                      ].map(row => (
                        <div key={row.label} style={{ display: 'flex', gap: '0.75rem' }}>
                          <div style={{ paddingTop: 3, color: stage.dotColor, flexShrink: 0 }}>{row.icon}</div>
                          <div>
                            <div style={{ fontSize: '0.78rem', fontWeight: 700, color: stage.dotColor, textTransform: 'uppercase' as const, letterSpacing: '0.1em', marginBottom: '0.2rem' }}>{row.label}</div>
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

        {/* Dosing Protocol */}
        <section id="protocol" style={{ padding: '4rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)', scrollMarginTop: 80 }}>
          <div className="section-label">Dosing Reference</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '0.75rem' }}>
            BPC-157 <span className="gold-text">Dosing Protocol</span>
          </h2>
          <p style={{ color: '#555570', fontSize: '1.05rem', marginBottom: '2.5rem', maxWidth: 660 }}>
            Two primary protocols used in research contexts — systemic subcutaneous and local injection near the injury site. Both are documented in published literature. Protocol choice depends on the primary healing target.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
            {dosingProtocols.map(proto => (
              <div key={proto.name} style={{
                padding: '2.25rem',
                background: 'linear-gradient(135deg, #fffbf0, #f7f8fc)',
                border: `2px solid ${proto.color}30`,
                borderTop: `3px solid ${proto.color}`,
                borderRadius: 22,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.75rem' }}>
                  <FlaskConical size={18} style={{ color: proto.color }} />
                  <span style={{ fontWeight: 900, color: '#0a0a14', fontSize: '1.1rem' }}>{proto.name}</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.875rem', marginBottom: '1.5rem' }}>
                  {[
                    { label: 'Dose', value: proto.dose },
                    { label: 'Frequency', value: proto.frequency },
                    { label: 'Route', value: proto.route },
                    { label: 'Injection Site', value: proto.site },
                    { label: 'Cycle Length', value: proto.cycle },
                  ].map(item => (
                    <div key={item.label} style={{
                      padding: '0.875rem 1rem',
                      background: 'rgba(255,255,255,0.8)',
                      border: `1px solid ${proto.color}15`,
                      borderRadius: 10,
                      gridColumn: item.label === 'Cycle Length' ? '1 / -1' : 'auto',
                    }}>
                      <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#9090a8', textTransform: 'uppercase' as const, letterSpacing: '0.1em', marginBottom: '0.25rem' }}>{item.label}</div>
                      <div style={{ fontWeight: 800, color: '#0a0a14', fontSize: '0.97rem' }}>{item.value}</div>
                    </div>
                  ))}
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: 700, color: proto.color, textTransform: 'uppercase' as const, letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Best For</div>
                  <p style={{ fontSize: '0.95rem', color: '#444458', lineHeight: 1.65 }}>{proto.bestFor}</p>
                </div>
                <div style={{ padding: '0.875rem 1.1rem', background: `${proto.color}08`, border: `1px solid ${proto.color}18`, borderRadius: 10, fontSize: '0.92rem', color: '#555570', lineHeight: 1.65 }}>
                  {proto.notes}
                </div>
              </div>
            ))}
          </div>

          {/* Cycle length guide table */}
          <div style={{
            background: '#f9f9fd',
            border: '1px solid rgba(0,0,0,0.07)',
            borderRadius: 18,
            overflow: 'hidden',
          }}>
            <div style={{ padding: '1.25rem 1.75rem', borderBottom: '1px solid rgba(0,0,0,0.06)', background: 'rgba(212,168,67,0.04)' }}>
              <span style={{ fontWeight: 800, color: '#0a0a14', fontSize: '1rem' }}>Cycle Length by Injury Severity</span>
            </div>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                <thead>
                  <tr style={{ background: 'rgba(0,0,0,0.025)' }}>
                    {['Injury Type', 'Severity', 'Recommended Cycle', 'Notes'].map(h => (
                      <th key={h} style={{ padding: '0.875rem 1.25rem', textAlign: 'left', fontSize: '0.78rem', fontWeight: 700, color: '#888899', textTransform: 'uppercase' as const, letterSpacing: '0.08em', borderBottom: '1px solid rgba(0,0,0,0.07)', whiteSpace: 'nowrap' as const }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { type: 'Acute tendon/ligament', severity: 'Minor sprain/strain', cycle: '4–6 weeks', notes: 'Can discontinue when pain-free under load' },
                    { type: 'Muscle tear', severity: 'Moderate', cycle: '6–8 weeks', notes: 'Local injection preferred in first 2 weeks' },
                    { type: 'Tendon/ligament', severity: 'Severe (partial tear)', cycle: '8–12 weeks', notes: 'Full cycle recommended; consider stacking TB-500' },
                    { type: 'Post-surgical recovery', severity: 'Surgical repair', cycle: '12 weeks', notes: 'Begin as early as possible post-surgery; full cycle' },
                    { type: 'Chronic tendinopathy', severity: 'Chronic/longstanding', cycle: '10–12 weeks', notes: 'Allow extended time for collagen remodeling in chronic tissue' },
                    { type: 'Gut/GI healing', severity: 'Leaky gut / IBD', cycle: '6–12 weeks', notes: 'Oral administration; dose on low end (250 mcg)' },
                  ].map((row, i) => (
                    <tr key={row.type} style={{ background: i % 2 === 0 ? '#ffffff' : 'rgba(0,0,0,0.013)' }}>
                      <td style={{ padding: '1rem 1.25rem', fontSize: '0.95rem', fontWeight: 700, color: '#0a0a14', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>{row.type}</td>
                      <td style={{ padding: '1rem 1.25rem', fontSize: '0.95rem', color: '#555570', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>{row.severity}</td>
                      <td style={{ padding: '1rem 1.25rem', fontSize: '0.95rem', fontWeight: 800, color: '#d4a843', borderBottom: '1px solid rgba(0,0,0,0.05)', whiteSpace: 'nowrap' as const }}>{row.cycle}</td>
                      <td style={{ padding: '1rem 1.25rem', fontSize: '0.92rem', color: '#666688', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Injection Sites */}
        <section style={{ padding: '4rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="rg-2col" style={{ gap: '4rem', alignItems: 'flex-start' }}>
            <div>
              <div className="section-label" style={{ color: '#22d3ee' }}>Administration</div>
              <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '1.25rem' }}>
                Injection Sites &<br /><span className="gold-text">Administration Guide</span>
              </h2>
              <p style={{ color: '#444458', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '1.05rem' }}>
                BPC-157 is administered subcutaneously (SC) as the primary route in most published research protocols. The injection site selection depends on whether you are running a systemic protocol (general healing, gut, neural) or a local protocol (specific injury site targeting).
              </p>
              <p style={{ color: '#444458', lineHeight: 1.85, marginBottom: '1.5rem', fontSize: '1.05rem' }}>
                Intramuscular (IM) injection is used in some muscle-focused protocols and is documented in published models. For GI healing, oral administration dissolved in water is uniquely effective given BPC-157's acid stability — oral bioavailability for gut mucosa exposure is considered valid and is the preferred route for GI-specific protocols.
              </p>
              <div style={{ padding: '1.25rem 1.5rem', background: 'rgba(212,168,67,0.06)', border: '1px solid rgba(212,168,67,0.2)', borderRadius: 14, fontSize: '0.95rem', color: '#555570', lineHeight: 1.7 }}>
                <strong style={{ color: '#0a0a14' }}>Reconstitution:</strong> Reconstitute lyophilized BPC-157 powder with bacteriostatic water. Standard reconstitution for a 10mg vial: add 2 mL bacteriostatic water = 5,000 mcg/mL. Draw 0.05 mL for 250 mcg dose. Store reconstituted peptide refrigerated; use within 30 days.
              </div>
            </div>
            <div>
              {[
                {
                  site: 'Subcutaneous — Periumbilical (Belly Fat)',
                  color: '#d4a843',
                  use: 'Systemic protocol',
                  detail: 'Pinch belly fat in the umbilical region. Insert 29–31g insulin syringe at 45°. Inject slowly. This is the standard systemic injection site — provides reliable absorption into circulation for systemic healing protocols, gut healing, and neurological protocols.',
                  tag: 'Most Common',
                },
                {
                  site: 'Subcutaneous — Near Injury Site',
                  color: '#22d3ee',
                  use: 'Local protocol',
                  detail: 'Inject into subcutaneous fat tissue as close to the injury as possible. For Achilles tendon: inject into fat pad adjacent to the heel. For knee: inject into subcutaneous fat around the knee. Do not inject directly into tendon tissue. Local delivery maximizes fibroblast signaling concentration at the site.',
                  tag: 'Local Protocol',
                },
                {
                  site: 'Intramuscular (IM)',
                  color: '#a78bfa',
                  use: 'Muscle protocols, deep tissue',
                  detail: 'Inject into the belly of a large muscle (quad, glute, deltoid). Used in muscle repair protocols and when deep tissue penetration is desired. 27–29g needle recommended. IM delivery produces a depot effect — slower, sustained release over several hours.',
                  tag: 'Deep Tissue',
                },
                {
                  site: 'Oral (dissolved in water)',
                  color: '#34d399',
                  use: 'GI healing protocols only',
                  detail: 'Dissolve the dose in a small amount (5–10 mL) of sterile water. Swallow on an empty stomach. BPC-157 is stable at gastric pH — unlike most peptides, it is not degraded by stomach acid, making oral delivery genuinely effective for GI mucosal exposure. Not recommended as primary route for systemic or tendon protocols.',
                  tag: 'GI Protocol',
                },
              ].map(item => (
                <div key={item.site} style={{
                  display: 'flex', gap: '1rem',
                  padding: '1.25rem 1.5rem',
                  marginBottom: '0.75rem',
                  background: '#f9f9fd',
                  border: `1px solid ${item.color}20`,
                  borderLeft: `3px solid ${item.color}`,
                  borderRadius: '0 14px 14px 0',
                }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: '0.3rem', flexWrap: 'wrap' as const }}>
                      <span style={{ fontWeight: 800, color: '#0a0a14', fontSize: '0.97rem' }}>{item.site}</span>
                      <span style={{ fontSize: '0.72rem', fontWeight: 700, padding: '2px 8px', borderRadius: 100, background: `${item.color}15`, color: item.color, border: `1px solid ${item.color}30` }}>{item.tag}</span>
                    </div>
                    <div style={{ fontSize: '0.8rem', fontWeight: 700, color: item.color, marginBottom: '0.4rem', textTransform: 'uppercase' as const, letterSpacing: '0.07em' }}>{item.use}</div>
                    <div style={{ fontSize: '0.93rem', color: '#555570', lineHeight: 1.68 }}>{item.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mechanism */}
        <section style={{ padding: '4rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label">Mechanism of Action</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '0.75rem' }}>
            How BPC-157 <span className="gold-text">Works</span>
          </h2>
          <p style={{ color: '#555570', fontSize: '1.05rem', marginBottom: '2.5rem', maxWidth: 700 }}>
            BPC-157 recruits multiple molecular pathways simultaneously — which explains why it works across so many different tissue types. Its effect is not reducible to a single mechanism.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {mechanismPathways.map(item => (
              <div key={item.pathway} style={{
                display: 'flex', alignItems: 'flex-start', gap: '1rem',
                padding: '1.25rem 1.5rem',
                background: '#f9f9fd',
                border: '1px solid rgba(0,0,0,0.06)',
                borderLeft: `3px solid ${item.color}`,
                borderRadius: '0 14px 14px 0',
              }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '0.35rem', flexWrap: 'wrap' as const }}>
                    <span style={{ fontWeight: 800, color: '#0a0a14', fontSize: '1rem' }}>{item.pathway}</span>
                    <span style={{ fontSize: '0.72rem', fontWeight: 700, padding: '2px 8px', borderRadius: 100, background: `${item.color}15`, color: item.color, border: `1px solid ${item.color}30` }}>{item.action}</span>
                  </div>
                  <div style={{ fontSize: '0.97rem', color: '#444458', lineHeight: 1.75 }}>{item.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BPC-157 vs TB-500 Comparison */}
        <section style={{ padding: '4rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label">Compound Comparison</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '0.75rem' }}>
            BPC-157 vs TB-500 — <span className="gold-text">When to Use Which</span>
          </h2>
          <p style={{ color: '#555570', fontSize: '1.05rem', marginBottom: '1.5rem', maxWidth: 720 }}>
            BPC-157 and TB-500 (Thymosin Beta-4 fragment) are the two most frequently stacked healing peptides. They operate via entirely different molecular mechanisms and have distinct tissue preferences — making them highly complementary. Understanding when to use each, and when to stack both, is essential for an effective healing protocol.
          </p>

          <div style={{
            background: '#f9f9fd',
            border: '1px solid rgba(0,0,0,0.07)',
            borderRadius: 18,
            overflow: 'hidden',
            marginBottom: '2rem',
          }}>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                <thead>
                  <tr style={{ background: 'rgba(0,0,0,0.025)' }}>
                    <th style={{ padding: '1rem 1.25rem', textAlign: 'left', fontSize: '0.78rem', fontWeight: 700, color: '#888899', textTransform: 'uppercase' as const, letterSpacing: '0.08em', borderBottom: '1px solid rgba(0,0,0,0.07)' }}>Feature</th>
                    <th style={{ padding: '1rem 1.25rem', textAlign: 'left', fontSize: '0.78rem', fontWeight: 700, color: '#d4a843', textTransform: 'uppercase' as const, letterSpacing: '0.08em', borderBottom: '1px solid rgba(0,0,0,0.07)' }}>BPC-157</th>
                    <th style={{ padding: '1rem 1.25rem', textAlign: 'left', fontSize: '0.78rem', fontWeight: 700, color: '#a78bfa', textTransform: 'uppercase' as const, letterSpacing: '0.08em', borderBottom: '1px solid rgba(0,0,0,0.07)' }}>TB-500</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={row.feature} style={{ background: i % 2 === 0 ? '#ffffff' : 'rgba(0,0,0,0.013)' }}>
                      <td style={{ padding: '0.9rem 1.25rem', fontSize: '0.9rem', fontWeight: 700, color: '#555570', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>{row.feature}</td>
                      <td style={{ padding: '0.9rem 1.25rem', fontSize: '0.93rem', color: '#0a0a14', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>{row.bpc}</td>
                      <td style={{ padding: '0.9rem 1.25rem', fontSize: '0.93rem', color: '#0a0a14', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>{row.tb}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Stack recommendation */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {[
              {
                title: 'Use BPC-157 Alone When',
                color: '#d4a843',
                items: [
                  'Primary target is gut or GI healing (oral BPC is uniquely effective)',
                  'Localized tendon or ligament injury in a single site',
                  'Neurological recovery protocol (crush injury, neuropathy)',
                  'Budget constraints — BPC-157 is typically lower cost',
                  'First peptide healing protocol (simpler single-compound approach)',
                ],
              },
              {
                title: 'Use TB-500 Alone When',
                color: '#a78bfa',
                items: [
                  'Widespread muscle soreness or systemic recovery demand',
                  'Injuries distributed across multiple body areas simultaneously',
                  'Longer dosing intervals are preferred (2x/week vs daily)',
                  'Athlete general recovery — broad systemic anti-inflammatory effect',
                  'No gut pathology — TB-500 lacks meaningful GI targeting',
                ],
              },
              {
                title: 'Stack Both — The Wolverine Protocol',
                color: '#34d399',
                items: [
                  'Severe acute injury: tendon, ligament, or combined injury',
                  'Post-surgical recovery for fastest possible tissue healing',
                  'Chronic tendinopathy with systemic inflammatory component',
                  'High-volume athletic contexts with multiple concurrent stressors',
                  'BPC-157 handles local repair; TB-500 handles systemic sweep',
                ],
              },
            ].map(card => (
              <div key={card.title} style={{
                padding: '1.75rem',
                background: '#f9f9fd',
                border: `1px solid ${card.color}20`,
                borderTop: `3px solid ${card.color}`,
                borderRadius: 18,
              }}>
                <h3 style={{ fontWeight: 900, color: '#0a0a14', fontSize: '1rem', marginBottom: '1.25rem' }}>{card.title}</h3>
                {card.items.map(item => (
                  <div key={item} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', marginBottom: '0.6rem' }}>
                    <CheckCircle size={14} style={{ color: card.color, flexShrink: 0, marginTop: 3 }} />
                    <span style={{ fontSize: '0.93rem', color: '#444458', lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* Product CTA */}
        <section style={{ padding: '4rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div style={{
            background: 'linear-gradient(135deg, #0a1628 0%, #0a0a14 100%)',
            borderRadius: 24,
            padding: '3.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
            flexWrap: 'wrap' as const,
          }}>
            <div>
              <div className="section-label" style={{ color: '#d4a843' }}>Source Premium Grade</div>
              <h2 className="heading-md" style={{ color: '#ffffff', marginBottom: '0.75rem' }}>BPC-157 10mg — Research Grade</h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1rem', maxWidth: 480, lineHeight: 1.75 }}>
                Third-party HPLC tested. Greater than 98% purity. Full Certificate of Analysis. The reference standard for healing peptide research protocols — tendon, gut, muscle, and neural.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1.25rem' }}>
                {[
                  'Lyophilized powder — stable at room temperature',
                  'Sterile vial, ready for reconstitution with bacteriostatic water',
                  'Certificate of Analysis on every batch',
                ].map(pt => (
                  <div key={pt} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                    <CheckCircle size={13} style={{ color: '#34d399', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.6)' }}>{pt}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '1rem', fontSize: '0.82rem', color: 'rgba(255,255,255,0.35)' }}>
                For laboratory and research use only. Not for human consumption.
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', alignItems: 'flex-start' }}>
              <a href={AFFILIATE_PRODUCT('bpc-157-10mg')} target="_blank" rel="sponsored noopener noreferrer" className="btn-primary" style={{ fontSize: '1rem', padding: '0.9rem 2rem' }}>
                Buy BPC-157 <ExternalLink size={16} />
              </a>
              <a href={AFFILIATE_BASE} target="_blank" rel="sponsored noopener noreferrer" style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.45)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 }}>
                Browse all peptides <ArrowRight size={12} />
              </a>
            </div>
          </div>
        </section>

        {/* Related Links */}
        <section style={{ padding: '2rem 0' }}>
          <RelatedLinks currentPath="/bpc-157-healing-protocol" />
        </section>

        {/* Final CTA */}
        <section style={{ padding: '2rem 0 5rem' }}>
          <div style={{ background: 'linear-gradient(135deg, #fffbf0, #f7f8fc)', border: '1px solid rgba(212,168,67,0.2)', borderRadius: 24, padding: '3.5rem', textAlign: 'center' }}>
            <div className="section-label" style={{ justifyContent: 'center', display: 'flex' }}>120+ Published Studies</div>
            <h2 className="heading-md" style={{ color: '#0a0a14', marginBottom: '0.75rem' }}>
              BPC-157 — The Most Studied Healing Peptide
            </h2>
            <p style={{ color: '#555570', fontSize: '1rem', maxWidth: 560, margin: '0 auto 2rem', lineHeight: 1.75 }}>
              Verified purity. Certificate of Analysis on every order. The reference compound for tendon, gut, muscle, and neural repair research protocols.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' as const }}>
              <a href={AFFILIATE_PRODUCT('bpc-157-10mg')} target="_blank" rel="sponsored noopener noreferrer" className="btn-primary" style={{ fontSize: '1rem', padding: '0.9rem 2.5rem' }}>
                Buy BPC-157 <ExternalLink size={16} />
              </a>
              <Link href="/wolverine-stack-bpc-157-tb-500" className="btn-secondary" style={{ fontSize: '1rem', padding: '0.9rem 2rem' }}>
                Wolverine Stack Guide <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
