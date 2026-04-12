'use client'
import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, ExternalLink, Layers, AlertCircle, ChevronDown, ChevronUp, Activity, Zap, CheckCircle } from 'lucide-react'
import { AFFILIATE_BASE } from '@/lib/products'
import RelatedLinks from '@/components/RelatedLinks'

const skinLayers = [
  {
    layer: 'Stratum Corneum',
    depth: '0.01–0.02mm',
    color: '#e2e8f0',
    textColor: '#475569',
    width: '100%',
    description: 'The outermost layer — dead keratinocytes. Barrier function. Cleansers, acids, and exfoliants act here. Topical peptide absorption pathway begins here.',
    peptides: ['Topical application absorption route'],
    mechanism: 'Transepidermal penetration — how peptides access deeper targets',
    arrowColor: 'none',
  },
  {
    layer: 'Epidermis',
    depth: '0.05–0.1mm',
    color: '#fde68a',
    textColor: '#92400e',
    width: '100%',
    description: 'Living keratinocyte layers. Melanocytes (pigment) reside here. Retinoids work at epidermis-dermis boundary — accelerating keratinocyte turnover.',
    peptides: ['Retinoids (retinol → retinoic acid)'],
    mechanism: 'Keratinocyte turnover acceleration, melanocyte modulation',
    arrowColor: '#92400e',
  },
  {
    layer: 'Dermis',
    depth: '1–4mm',
    color: '#fca5a5',
    textColor: '#991b1b',
    width: '100%',
    description: 'Collagen, elastin, fibroblasts, and blood vessels. This is where structural skin quality is determined. Pore size is controlled by the collagen scaffold around follicle walls here.',
    peptides: ['GHK-Cu (primary target)', 'SNAP-8 (neuromuscular junction above surface)'],
    mechanism: 'Collagen I + III synthesis, MMP inhibition, elastin upregulation, VEGF',
    arrowColor: '#991b1b',
  },
  {
    layer: 'Hypodermis',
    depth: '1–10mm+',
    color: '#d8b4fe',
    textColor: '#6d28d9',
    width: '100%',
    description: 'Subcutaneous fat, larger vessels, and connective tissue. Deeper healing, angiogenesis, and tissue repair occur here. Fat compartment volume is maintained here.',
    peptides: ['BPC-157 (dermis / hypodermis boundary)', 'TB-500'],
    mechanism: 'Angiogenesis, wound healing, tissue repair cascade',
    arrowColor: '#6d28d9',
  },
]

const scarTypes = [
  {
    type: 'Ice Pick',
    description: 'Deep, narrow, sharp-bordered pit scar extending through full dermis',
    color: '#ef4444',
    ghkResponse: 'Limited with topicals alone. Benefits from GHK-Cu for collagen infill combined with subcision or TCA cross for structural correction.',
    timeline: '24+ weeks',
  },
  {
    type: 'Boxcar',
    description: 'Wide, flat-bottomed depressed scar with defined edges',
    color: '#fb923c',
    ghkResponse: 'Good response to GHK-Cu. Collagen scaffold restoration at base and edges. Microneedling + GHK-Cu protocol shows best results for this scar type.',
    timeline: '16–24 weeks',
  },
  {
    type: 'Rolling',
    description: 'Shallow, wave-like depression with soft edges — caused by fibrous tethering',
    color: '#d4a843',
    ghkResponse: 'Best topical response of the three types. GHK-Cu + BPC-157 addresses both collagen infill and the healing of fibrous tethering at the dermis-hypodermis boundary.',
    timeline: '12–20 weeks',
  },
]

const textureTimeline = [
  { period: 'Week 1–2', event: 'Initial receptor activation', detail: 'GHK-Cu binds fibroblast receptors. Antioxidant gene upregulation begins. No visible change.', color: '#a78bfa' },
  { period: 'Week 3–4', event: 'TIMP elevation', detail: 'Collagen breakdown inhibitors (TIMP-1, TIMP-2) elevate. Existing collagen now protected from MMP degradation.', color: '#c084fc' },
  { period: 'Week 6–8', event: 'Active remodeling begins', detail: 'New collagen fiber synthesis measurable. Skin hydration improves. Early texture refinement visible.', color: '#d4a843' },
  { period: 'Week 8–12', event: 'Pore and texture improvement', detail: 'Collagen scaffold around follicle walls thickens. Pores appear smaller as structural support improves.', color: '#34d399' },
  { period: 'Week 12+', event: 'Consolidation', detail: 'Collagen matrix matures. Decorin organizes fibers into aligned structure. Results compound with continued use.', color: '#22d3ee' },
]

const faqs = [
  {
    q: 'Why do pores get larger with age, and why is cleansing not the solution?',
    a: 'Pore size is primarily determined by the structural integrity of the collagen scaffold that surrounds the follicle wall in the dermis. When this collagen support is robust — as it is in young skin with high collagen density — the follicle walls are held tightly, minimizing the visible pore opening at the surface. As dermal collagen depletes with age, the structural support weakens, and the follicle walls relax and widen, expanding the visible pore diameter. This is an inside-out problem: the pore is opening because the scaffold beneath it has weakened, not because the surface is dirty. Cleansers and pore strips act at the surface — they cannot restore the dermal collagen scaffold that determines pore size. Only interventions that rebuild dermal collagen can achieve lasting pore reduction.',
  },
  {
    q: 'How exactly does GHK-Cu reduce pore size?',
    a: 'GHK-Cu upregulates collagen type I and type III gene expression in dermal fibroblasts — the cells responsible for maintaining the extracellular matrix that forms the collagen scaffold around follicle walls. As new collagen is synthesized and organized into the dermis, the structural support around each follicle strengthens. With a stronger collagen scaffold, the follicle walls are held more tightly, and the pore opening at the surface narrows. Additionally, GHK-Cu upregulates decorin — a proteoglycan that organizes collagen fibers into properly aligned bundles. Decorin elevation is particularly important for texture improvement because disorganized collagen (common in aged and sun-damaged skin) does not provide efficient mechanical support, even at normal density.',
  },
  {
    q: 'What is the microneedling + peptide synergy and why does it amplify results 1000x?',
    a: 'The 1000x figure refers to the increase in transdermal absorption of topical compounds that has been documented with microneedling, specifically for larger molecules that cannot readily pass through an intact stratum corneum. Peptides like GHK-Cu have a molecular weight and structure that limits passive transdermal penetration — only a fraction of topically applied GHK-Cu reaches fibroblasts in the dermis without a penetration enhancer. Microneedling creates temporary microchannels through the stratum corneum and epidermis that allow dramatically increased delivery of topical actives directly to the dermal target. Applied immediately post-microneedling (within 30 minutes while channels remain open), GHK-Cu reaches fibroblast targets at a concentration hundreds to thousands of times higher than passive transdermal application. The combined wound healing stimulus from microneedling + GHK-Cu gene activation produces a synergistic collagen induction response that significantly exceeds either intervention alone.',
  },
  {
    q: 'What is the difference between GHK-Cu and retinol for skin texture, and can they be combined?',
    a: 'GHK-Cu and retinol work through complementary but distinct mechanisms. Retinol (vitamin A) works primarily at the epidermis-dermis boundary by accelerating keratinocyte turnover — it drives the replacement of older, pigmented, irregularly shaped keratinocytes with fresher ones, improving surface texture and tone. It also has some collagen-stimulating effects through upregulation of collagen gene expression via retinoic acid receptor (RAR) signaling. GHK-Cu works primarily in the dermis — stimulating fibroblasts to produce new collagen, inhibiting MMP degradation, and organizing the extracellular matrix. These are distinct and complementary mechanisms that can be combined effectively. Apply GHK-Cu first in the evening to allow dermal absorption before retinol — they target different skin layers and should not interfere with each other when applied sequentially.',
  },
  {
    q: 'How does BPC-157 help with acne scarring specifically?',
    a: 'BPC-157\'s primary benefit in acne scarring is dual: it accelerates the healing of active lesions (reducing the severity of post-inflammatory tissue damage that forms scars in the first place) and it promotes the remodeling of existing scar tissue through its effects at the dermis-hypodermis boundary. BPC-157 upregulates growth factor expression (including EGF and VEGF), improves local angiogenesis, and reduces the fibrotic scar response by modulating the balance between pro-fibrotic and anti-fibrotic signaling. For atrophic acne scars, BPC-157 supports the healing and remodeling of the depressed scar tissue from the base up. When combined with GHK-Cu — which addresses collagen synthesis in the mid-dermis and MMP inhibition — the combination provides a comprehensive multi-layer scar remodeling protocol.',
  },
  {
    q: 'How long should I realistically expect to wait for pore and texture improvements?',
    a: 'The honest timeline for pore and texture improvements from GHK-Cu is: Week 3–4 for initial skin hydration and early texture improvement (the hydration component responds faster than structural collagen changes); Week 6–8 for meaningful texture refinement visible under normal lighting; Week 8–12 for measurable pore refinement as the collagen scaffold around follicle walls strengthens. The 12-week mark is the primary evaluation point — consistent daily topical application for 12 weeks produces results comparable to those documented in Pickart et al. collagen density studies. After 12 weeks, results continue to improve and consolidate as the collagen matrix matures, but the most dramatic rate of change occurs in the 6–12 week window.',
  },
]

export default function SkinTexturePorePeptidesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div style={{ background: '#ffffff', minHeight: '100vh' }}>

      {/* Hero */}
      <div style={{
        background: 'linear-gradient(160deg, #1a0f2e 0%, #110a1f 50%, #0a070f 100%)',
        padding: '5.5rem 2rem 5rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          background: 'radial-gradient(ellipse 60% 50% at 60% 50%, rgba(212,168,67,0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
          <div style={{ maxWidth: 820 }}>
            <div className="section-label" style={{ color: '#d4a843' }}>Skin Architecture</div>
            <h1 className="heading-xl" style={{ color: '#ffffff', marginBottom: '1.25rem' }}>
              Peptides for Skin Texture &amp; <span className="gold-text">Pore Minimization</span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: 680 }}>
              Pores are a structural problem — caused by weakening collagen scaffolding, not surface cleanliness. GHK-Cu and BPC-157 address the dermis where pore size is actually determined.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: '2rem' }}>
              <Link href="/products/ghk-cu-50mg" className="btn-primary">
                View GHK-Cu <ArrowRight size={14} />
              </Link>
              <a href={AFFILIATE_BASE} target="_blank" rel="sponsored noopener noreferrer" className="btn-secondary" style={{ color: 'rgba(255,255,255,0.75)', borderColor: 'rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.05)' }}>
                Shop Peptides <ExternalLink size={14} />
              </a>
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
            { val: '1000×', label: 'Increased peptide absorption with microneedling' },
            { val: '8–12wks', label: 'Texture improvement timeline' },
            { val: '28%', label: 'GHK-Cu collagen density increase at 12 weeks' },
            { val: '4 Layers', label: 'Skin depth targets — each requiring different mechanisms' },
          ].map(s => (
            <div key={s.label}>
              <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#d4a843', letterSpacing: '-0.03em' }}>{s.val}</div>
              <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)', marginTop: 2 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>

        {/* Why Pores Are Structural */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label">The Real Problem</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '1.25rem' }}>
            Why Pores Are a Structural Problem, <span className="gold-text">Not a Cleansing Problem</span>
          </h2>
          <div className="rg-2col" style={{ gap: '4rem' }}>
            <div>
              <p style={{ color: '#444458', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '1.05rem' }}>
                The cosmetic industry has spent decades convincing consumers that enlarged pores are a surface problem — solved by better cleansers, clay masks, salicylic acid, and pore strips. This is partially correct for temporary pore congestion from sebum and debris (blackheads and comedones), but completely wrong for the structural pore enlargement that worsens progressively with age.
              </p>
              <p style={{ color: '#444458', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '1.05rem' }}>
                A pore is the opening of a hair follicle at the skin surface. The visible size of this opening is determined by two factors: (1) the volume of sebum and material within the follicle, and (2) the structural support provided by the collagen scaffold that surrounds the follicle wall in the dermis. Factor 1 is what cleansers address. Factor 2 — the structural collagen scaffold — is what determines your baseline pore size independent of how clean your skin is.
              </p>
              <p style={{ color: '#444458', lineHeight: 1.85, fontSize: '1.05rem' }}>
                As dermal collagen depletes with age, UV damage, and chronic inflammation, the structural support around each follicle weakens. The follicle walls relax outward, and the pore opening at the surface widens. This is why pores typically appear larger in individuals with oilier skin (larger sebaceous glands, more follicular content), sun-damaged skin (UV accelerates collagen breakdown), and older skin (cumulative collagen loss). None of these situations is primarily addressed by cleansing — they require collagen scaffold restoration.
              </p>
            </div>
            <div>
              <p style={{ color: '#444458', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '1.05rem' }}>
                The clinical implication is significant: pore minimization requires a dermal intervention. Retinoids (retinol, tretinoin) work at the epidermis-dermis boundary and provide some collagen stimulation — this is why tretinoin-treated skin often shows improved pore appearance. But retinoids' primary mechanism is epidermal (keratinocyte turnover) rather than deep dermal. GHK-Cu targets the deep dermis directly — the collagen fibroblasts responsible for the scaffold that physically determines pore size.
              </p>
              <p style={{ color: '#444458', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '1.05rem' }}>
                Matrix metalloproteinases (MMPs) — collagen-degrading enzymes that are upregulated by UV exposure, inflammation, and aging — are the primary mechanism of pore widening over time. GHK-Cu's TIMP-1 and TIMP-2 upregulation inhibits these MMPs, protecting the follicle-surrounding collagen from degradation. This is both a restorative effect (building new collagen) and a protective effect (preventing the ongoing destruction of existing collagen) — a dual mechanism that makes it uniquely suited to the pore minimization problem.
              </p>
              <div style={{ padding: '1.25rem', background: 'rgba(212,168,67,0.07)', border: '1px solid rgba(212,168,67,0.2)', borderRadius: 14 }}>
                <p style={{ fontWeight: 700, color: '#0a0a14', margin: '0 0 0.5rem', fontSize: '0.95rem' }}>The Surface vs Structure Principle</p>
                <p style={{ color: '#555570', margin: 0, fontSize: '0.9rem', lineHeight: 1.7 }}>Cleansers empty the pore. GHK-Cu narrows it. Both are useful. Only one addresses the structural root cause of age-related pore enlargement.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Skin Layer Depth Chart */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label">Layer Depth Chart</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '0.5rem' }}>
            Skin Layer Targets: <span className="gold-text">Which Compound Reaches Which Depth</span>
          </h2>
          <p style={{ color: '#666688', fontSize: '1.05rem', marginBottom: '2.5rem', maxWidth: 640 }}>
            Each intervention targets a different skin layer. Understanding depth of action determines which compound addresses your specific concern.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', maxWidth: 900 }}>
            {skinLayers.map((layer, i) => (
              <div key={layer.layer} style={{
                display: 'grid',
                gridTemplateColumns: '160px 1fr',
                gap: '0',
                border: '1px solid rgba(0,0,0,0.08)',
                borderRadius: i === 0 ? '14px 14px 0 0' : i === skinLayers.length - 1 ? '0 0 14px 14px' : '0',
                overflow: 'hidden',
              }}>
                {/* Layer Color Block */}
                <div style={{
                  background: layer.color,
                  padding: '1.5rem 1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  gap: 4,
                }}>
                  <div style={{ fontWeight: 900, color: layer.textColor, fontSize: '1rem' }}>{layer.layer}</div>
                  <div style={{ fontSize: '0.72rem', color: layer.textColor, opacity: 0.7, fontWeight: 600 }}>Depth: {layer.depth}</div>
                </div>

                {/* Content Block */}
                <div className="rg-2col" style={{ padding: '1.25rem 1.5rem', background: '#fafafa' }}>
                  <div>
                    <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#888', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>Function</div>
                    <p style={{ color: '#333350', fontSize: '0.88rem', lineHeight: 1.65, margin: 0 }}>{layer.description}</p>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#d4a843', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>Compounds Targeting This Layer</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', marginBottom: '0.5rem' }}>
                      {layer.peptides.map((p, j) => (
                        <span key={j} style={{ fontSize: '0.85rem', color: '#333350', fontWeight: 600 }}>→ {p}</span>
                      ))}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: '#666688', lineHeight: 1.55, fontStyle: 'italic' }}>{layer.mechanism}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* GHK-Cu Mechanism */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label">Primary Mechanism</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '1.25rem' }}>
            GHK-Cu: Collagen Scaffold <span className="gold-text">Restoration</span>
          </h2>
          <div className="rg-2col" style={{ gap: '4rem' }}>
            <div>
              <p style={{ color: '#444458', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '1.05rem' }}>
                The GHK-Cu collagen restoration mechanism for pore and texture improvement operates through four parallel pathways: synthesis induction, degradation inhibition, organization improvement, and anti-inflammatory protection. These pathways work simultaneously — producing a net increase in collagen density, quality, and organization that the skin cannot achieve through any other topical compound.
              </p>
              <p style={{ color: '#444458', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '1.05rem' }}>
                Collagen synthesis induction: GHK-Cu binds to specific receptors on dermal fibroblasts and initiates a gene expression cascade that upregulates collagen type I (the primary structural collagen) and collagen type III (the pliable, flexible collagen that provides skin's softness and elasticity). The 28% collagen density increase documented at 12 weeks in Pickart et al. studies reflects the cumulative effect of this sustained synthesis upregulation — each day of GHK-Cu application adds to the transcript pool, and the structural collagen accumulates in the extracellular matrix over weeks.
              </p>
              <p style={{ color: '#444458', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '1.05rem' }}>
                MMP inhibition (degradation blocking): GHK-Cu simultaneously elevates TIMP-1 and TIMP-2 — tissue inhibitors of metalloproteinases. MMPs are the enzymes that degrade collagen, elastin, and other extracellular matrix components. In chronically inflamed, UV-damaged, or aged skin, MMP activity dramatically exceeds collagen synthesis — producing net collagen loss. By blocking MMP activity, GHK-Cu shifts the synthesis/degradation balance toward net accumulation.
              </p>
            </div>
            <div>
              <p style={{ color: '#444458', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '1.05rem' }}>
                Collagen organization via decorin: Beyond the quantity of collagen synthesized, the structural effectiveness of a collagen matrix depends on how the fibers are organized. GHK-Cu upregulates decorin — a small leucine-rich proteoglycan that binds to collagen fibrils and regulates their assembly into properly aligned, cross-linked bundles. Disorganized collagen (as seen in scar tissue and sun-damaged skin) provides poor mechanical support despite potentially normal density. Decorin elevation ensures that new collagen is assembled into a structured, mechanically effective matrix.
              </p>
              <p style={{ color: '#444458', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '1.05rem' }}>
                Anti-inflammatory protection: Chronic low-grade inflammation in the dermis is the primary ongoing driver of collagen loss in modern skin. GHK-Cu downregulates NF-κB-dependent inflammatory gene expression, reducing the continuous inflammatory signal that activates MMPs and suppresses fibroblast collagen synthesis. This anti-inflammatory effect is particularly relevant for acne-prone skin, where the inflammatory cycle (breakout → inflammation → MMP activation → collagen loss → scar formation) can be interrupted by GHK-Cu's upstream modulation.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: '1rem' }}>
                <Link href="/ghk-cu-results-timeline" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#d4a843', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>
                  GHK-Cu Timeline <ArrowRight size={14} />
                </Link>
                <Link href="/products/ghk-cu-50mg" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#a78bfa', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>
                  Product Page <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* BPC-157 for Acne Healing */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label">Active Healing</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '1.25rem' }}>
            BPC-157: Acne Healing &amp; <span className="gold-text">Scar Prevention</span>
          </h2>
          <div className="rg-2col" style={{ gap: '4rem' }}>
            <div>
              <p style={{ color: '#444458', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '1.05rem' }}>
                BPC-157 (Body Protection Compound 157) is a 15-amino acid peptide derived from a protein found in gastric juice, with extraordinary tissue healing properties. In the context of skin texture and acne scarring, BPC-157 serves two distinct functions: accelerating the healing of active inflammatory lesions before they can produce permanent scars, and promoting the remodeling of existing atrophic scar tissue.
              </p>
              <p style={{ color: '#444458', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '1.05rem' }}>
                BPC-157 significantly upregulates VEGF (vascular endothelial growth factor) expression, promoting angiogenesis — the formation of new blood vessels — in and around healing tissue. This vascular component is critical for acne scar resolution because depressed scar tissue (atrophic scars) is often poorly vascularized, limiting the delivery of nutrients, growth factors, and immune cells required for tissue remodeling. By improving vascularization at the dermis-hypodermis boundary, BPC-157 creates the biological environment needed for effective scar infill.
              </p>
              <p style={{ color: '#444458', lineHeight: 1.85, fontSize: '1.05rem' }}>
                BPC-157 also modulates the fibrotic response — the over-activation of fibroblasts that produces raised (hypertrophic) scar tissue. By regulating TGF-β signaling and NO (nitric oxide) pathways, BPC-157 promotes organized, anti-fibrotic healing rather than the collagen-dense, contracture-forming response associated with poor scar formation.
              </p>
            </div>
            <div>
              <h3 style={{ fontWeight: 800, color: '#0a0a14', fontSize: '1.1rem', marginBottom: '1rem' }}>Acne Scar Types and Response</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
                {scarTypes.map(s => (
                  <div key={s.type} style={{ padding: '1.25rem', background: '#f9f9fd', border: '1px solid rgba(0,0,0,0.07)', borderLeft: `4px solid ${s.color}`, borderRadius: '0 14px 14px 0' }}>
                    <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: '0.5rem' }}>
                      <span style={{ fontWeight: 800, color: s.color, fontSize: '0.95rem' }}>{s.type} Scar</span>
                      <span style={{ fontSize: '0.72rem', color: '#888', marginLeft: 'auto' }}>Timeline: {s.timeline}</span>
                    </div>
                    <p style={{ color: '#555570', fontSize: '0.85rem', lineHeight: 1.6, margin: '0 0 0.5rem' }}>{s.description}</p>
                    <p style={{ color: '#444458', fontSize: '0.85rem', lineHeight: 1.6, margin: 0, fontWeight: 500 }}>{s.ghkResponse}</p>
                  </div>
                ))}
              </div>
              <Link href="/products/bpc-157" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#fb923c', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>
                BPC-157 Product Page <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* Microneedling Synergy */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label">Amplification Protocol</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '1.25rem' }}>
            Microneedling + Peptide <span className="gold-text">Synergy Protocol</span>
          </h2>
          <div className="rg-2col" style={{ gap: '4rem' }}>
            <div>
              <p style={{ color: '#444458', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '1.05rem' }}>
                The microneedling and peptide combination represents the single highest-efficacy approach to skin texture and pore improvement available without prescription procedures. Microneedling (dermarolling or professional derma pen) creates controlled microchannels through the stratum corneum and epidermis. These microchannels perform two functions: (1) they directly stimulate the skin's wound healing response, activating fibroblasts through a separate mechanical stimulation mechanism, and (2) they dramatically increase transdermal absorption of topically applied actives.
              </p>
              <p style={{ color: '#444458', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '1.05rem' }}>
                GHK-Cu applied immediately post-microneedling (within 30 minutes while the microchannels remain open) penetrates to dermal fibroblasts at a dramatically higher concentration than passive transdermal application. The wound healing mechanism of microneedling and the gene activation mechanism of GHK-Cu then operate synergistically — the mechanical stimulus activates fibroblasts, and the GHK-Cu signal amplifies and directs their collagen synthetic output.
              </p>
              <p style={{ color: '#444458', lineHeight: 1.85, fontSize: '1.05rem' }}>
                For at-home use, a dermaroller with 0.25mm–0.5mm needle length is appropriate for GHK-Cu delivery enhancement. Longer needles (1.0–1.5mm) for deeper scar treatment should be reserved for professional settings. Frequency: once every 3–4 weeks to allow full skin recovery between sessions.
              </p>
            </div>
            <div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                {[
                  { step: '1', title: 'Timing: Weekend or rest day', desc: 'Schedule microneedling sessions on days with minimal sun exposure planned. Post-needling skin is more UV-sensitive for 48–72 hours.', color: '#a78bfa' },
                  { step: '2', title: 'Cleanse thoroughly first', desc: 'Apply microneedle to absolutely clean skin — no active acne, no makeup, no serum. Bacteria can be driven into microchannels.', color: '#d4a843' },
                  { step: '3', title: 'Microneedle application', desc: '0.25–0.5mm depth for at-home. Horizontal, vertical, and diagonal passes. Light pressure. Total time 2–4 minutes.', color: '#34d399' },
                  { step: '4', title: 'Apply GHK-Cu immediately', desc: 'Within 30 minutes while channels remain open. Apply with fingertip tapping — no harsh rubbing on post-needled skin.', color: '#22d3ee' },
                  { step: '5', title: 'Recovery 48 hours', desc: 'No retinol, acids, or other actives for 48 hours post-needling. GHK-Cu alone as the sole active during recovery.', color: '#fb923c' },
                  { step: '6', title: 'Session frequency: every 3–4 weeks', desc: 'Allow full recovery before next session. Collagen synthesis from the combined stimulus needs time to produce before the next stimulation cycle.', color: '#60a5fa' },
                ].map(s => (
                  <div key={s.step} style={{ display: 'flex', gap: '1rem', padding: '0.875rem 1rem', background: '#f9f9fd', border: '1px solid rgba(0,0,0,0.06)', borderRadius: 12 }}>
                    <div style={{ width: 28, height: 28, borderRadius: '50%', background: s.color, color: '#fff', fontWeight: 900, fontSize: '0.85rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{s.step}</div>
                    <div>
                      <div style={{ fontWeight: 700, color: '#0a0a14', fontSize: '0.9rem', marginBottom: 3 }}>{s.title}</div>
                      <div style={{ color: '#555570', fontSize: '0.82rem', lineHeight: 1.6 }}>{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* GHK-Cu vs Retinol */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label">Comparison</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '1.25rem' }}>
            GHK-Cu vs Retinol: <span className="gold-text">Mechanisms, Evidence, Combination</span>
          </h2>
          <div className="rg-2col" style={{ gap: '2rem', marginBottom: '2rem' }}>
            {[
              {
                name: 'GHK-Cu',
                color: '#d4a843',
                mechanism: 'Upregulates collagen I, III, elastin, decorin, VEGF, and TIMP-1/2 in dermal fibroblasts. Downregulates inflammatory MMPs.',
                primaryTarget: 'Dermis',
                evidence: '28% collagen density at 12 weeks (Pickart et al.). 4,000+ genes modulated.',
                downtime: 'Zero — daily topical use',
                limitation: 'Results take 8–12 weeks. Large molecule limits passive penetration depth.',
              },
              {
                name: 'Retinol / Tretinoin',
                color: '#a78bfa',
                mechanism: 'Accelerates keratinocyte turnover via RAR/RXR nuclear receptors. Some collagen stimulation via TGF-β pathway. Reduces sebum production.',
                primaryTarget: 'Epidermis → Dermis boundary',
                evidence: 'Extensive — tretinoin (0.025–0.1%) is one of the most studied topical actives in dermatology.',
                downtime: 'Initial adjustment: dryness, flaking, sensitivity for 4–8 weeks',
                limitation: 'Irritation limits tolerance. UV sensitization. Cannot be used during pregnancy.',
              },
            ].map(item => (
              <div key={item.name} style={{ padding: '1.75rem', background: '#f9f9fd', border: '1px solid rgba(0,0,0,0.07)', borderTop: `3px solid ${item.color}`, borderRadius: 18 }}>
                <div style={{ fontWeight: 900, color: item.color, fontSize: '1.15rem', marginBottom: '1rem' }}>{item.name}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                  {[
                    { label: 'Mechanism', val: item.mechanism },
                    { label: 'Primary Target Layer', val: item.primaryTarget },
                    { label: 'Clinical Evidence', val: item.evidence },
                    { label: 'Downtime', val: item.downtime },
                    { label: 'Limitation', val: item.limitation },
                  ].map(r => (
                    <div key={r.label}>
                      <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#888', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.2rem' }}>{r.label}</div>
                      <div style={{ color: '#444458', fontSize: '0.88rem', lineHeight: 1.6 }}>{r.val}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div style={{ padding: '1.75rem', background: 'rgba(34,211,238,0.05)', border: '1px solid rgba(34,211,238,0.2)', borderRadius: 18 }}>
            <div style={{ fontWeight: 800, color: '#0a0a14', marginBottom: '0.75rem', fontSize: '1rem' }}>Combination Approach</div>
            <p style={{ color: '#444458', lineHeight: 1.8, margin: 0, fontSize: '0.97rem' }}>
              GHK-Cu and retinol/tretinoin are complementary rather than competing. Retinol acts at the epidermal level to accelerate surface renewal. GHK-Cu acts at the dermal level to restore structural collagen. They can be combined effectively: apply GHK-Cu in the evening first, allow 90 seconds to absorb, then apply retinol or tretinoin over the top. Because they target different skin layers (dermis for GHK-Cu, epidermis-dermis boundary for retinoids), they are unlikely to interfere with each other's receptor-level signaling. Avoid mixing them in the same application — they are best used sequentially.
            </p>
          </div>
        </section>

        {/* Texture Timeline */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label">Results Timeline</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '2rem' }}>
            Realistic Texture <span className="gold-text">Improvement Timeline</span>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {textureTimeline.map((item, i) => (
              <div key={item.period} style={{
                display: 'flex', gap: '2rem', alignItems: 'flex-start',
                padding: '1.5rem', background: i % 2 === 0 ? '#f9f9fd' : '#ffffff',
                border: '1px solid rgba(0,0,0,0.06)',
                borderRadius: i === 0 ? '14px 14px 0 0' : i === textureTimeline.length - 1 ? '0 0 14px 14px' : '0',
                borderBottom: i < textureTimeline.length - 1 ? 'none' : '1px solid rgba(0,0,0,0.06)',
              }}>
                <div style={{ width: 80, flexShrink: 0, textAlign: 'center' }}>
                  <div style={{ display: 'inline-block', padding: '6px 10px', background: `${item.color}18`, color: item.color, borderRadius: 100, fontSize: '0.78rem', fontWeight: 800, whiteSpace: 'nowrap' }}>{item.period}</div>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 800, color: '#0a0a14', marginBottom: '0.3rem' }}>{item.event}</div>
                  <p style={{ color: '#555570', fontSize: '0.92rem', lineHeight: 1.65, margin: 0 }}>{item.detail}</p>
                </div>
              </div>
            ))}
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
                  {openFaq === i ? <ChevronUp size={18} style={{ color: '#d4a843', flexShrink: 0 }} /> : <ChevronDown size={18} style={{ color: '#888', flexShrink: 0 }} />}
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
          <div style={{ background: 'linear-gradient(135deg, #1a0f2e 0%, #0a0a14 100%)', borderRadius: 24, padding: '3.5rem', textAlign: 'center' }}>
            <div className="section-label" style={{ color: '#d4a843', justifyContent: 'center' }}>Fix the Scaffold</div>
            <h2 style={{ color: '#ffffff', fontSize: '2rem', fontWeight: 900, marginBottom: '1rem' }}>
              Pores Are Structural. <span className="gold-text">Treat Them Structurally.</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: 560, margin: '0 auto 2rem' }}>
              GHK-Cu rebuilds the collagen scaffold that determines pore size. BPC-157 heals and remodels scar tissue. Both are available in research grade.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={AFFILIATE_BASE} target="_blank" rel="sponsored noopener noreferrer" className="btn-primary">
                Shop Peptides <ExternalLink size={14} />
              </a>
              <Link href="/periorbital-peptides-dark-circles" className="btn-secondary" style={{ color: 'rgba(255,255,255,0.75)', borderColor: 'rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.06)' }}>
                Periorbital Guide <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        <RelatedLinks currentPath="/skin-texture-pore-peptides" />
      </div>
    </div>
  )
}
