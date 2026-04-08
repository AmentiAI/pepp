'use client'
import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, ExternalLink, Eye, Layers, AlertCircle, ChevronDown, ChevronUp, Activity, CheckCircle } from 'lucide-react'
import { AFFILIATE_BASE } from '@/lib/products'
import RelatedLinks from '@/components/RelatedLinks'

const darkCircleTypes = [
  {
    type: 'Type 1: Structural / Thin Skin',
    color: '#a78bfa',
    cause: 'Dermal collagen loss thins the periorbital skin, making the underlying orbicularis oculi muscle (dark purplish-red) and tear trough anatomy more visible through the skin as a shadow.',
    stretchTest: 'When you gently pull and stretch the skin under the eye, the dark area lightens significantly or disappears. The darkness reduces because the thicker, stretched skin reduces the optical translucency effect.',
    bestPeptide: 'GHK-Cu — upregulates collagen type I and III in the thin periorbital dermis, thickening the skin and reducing translucency over 8–16 weeks.',
    timeline: '8–16 weeks for measurable dermal thickening. Collagen synthesis begins within 2–3 weeks but visible improvement requires sufficient new collagen deposition.',
    note: 'Most common in adults over 30. Responds well to peptide-first approach. Compounding improvement over multiple cycles.',
  },
  {
    type: 'Type 2: Vascular / Pigmentation',
    color: '#fb923c',
    cause: 'Dilated superficial blood vessels or post-inflammatory hyperpigmentation (often from allergies, rubbing, or chronic inflammation) create a blue-purple or brown discoloration that is within the skin rather than beneath it.',
    stretchTest: 'Stretching the skin does NOT significantly reduce the dark appearance. The color remains because it is intrinsic to the dermis or epidermis (pigment or blood) rather than caused by translucency.',
    bestPeptide: 'GHK-Cu still plays a role (anti-inflammatory, reduces vascular permeability through angiogenesis modulation). Vitamin C + Niacinamide for the pigmentation component. Peptides address the inflammatory driver.',
    timeline: '12–20 weeks for vascular component improvement. Pigmentation can take longer. Allergy management is often the primary intervention.',
    note: 'Most common in individuals with allergic rhinitis or atopic conditions. Requires addressing the root cause (allergies) alongside topical treatment.',
  },
  {
    type: 'Type 3: Volume Loss / Hollowing',
    color: '#34d399',
    cause: 'Fat pad atrophy in the periorbital and infraorbital fat compartments creates a hollow tear trough that casts a shadow, creating the appearance of dark circles even when the skin itself is normal. This is an anatomical/structural deficit rather than a skin quality issue.',
    stretchTest: 'Stretch test may show mild improvement in areas directly under the stretch point, but the overall hollow remains. The shadow from the concavity is the primary driver.',
    bestPeptide: 'GHK-Cu for dermal tissue quality improvement. However, significant fat pad atrophy requires volume restoration — this is the primary indication for tear trough fillers. Peptides are maintenance, fillers address the anatomical deficit.',
    timeline: 'Peptides alone: 12–24 weeks for mild improvement in the periorbital tissue quality. Filler: immediate effect.',
    note: 'Most common after age 35 and in individuals with rapid weight loss. Tear trough filler is often the most appropriate primary treatment, with peptides for maintenance.',
  },
  {
    type: 'Type 4: Mixed Etiology',
    color: '#d4a843',
    cause: 'A combination of 2–3 of the above mechanisms operating simultaneously — the most common presentation in adults over 40. Thinning skin + mild hollowing + vascular component compounds into a more complex presentation.',
    stretchTest: 'Partial improvement on stretch test — the translucency component lightens but the volume shadow and any pigmentation remain. This partial response is diagnostic of mixed etiology.',
    bestPeptide: 'Layered approach: GHK-Cu as the primary peptide for dermal thickening and anti-inflammatory effects. SNAP-8 for the orbital expression line component. Consider professional consultation for the volume component.',
    timeline: '16–24 weeks to see the full benefit of the dermal improvement layer. Results are more gradual and modest than in pure structural dark circles.',
    note: 'Most common overall. Requires patience and a realistic understanding that peptides address specific components of a multi-factorial problem.',
  },
]

const applicationSteps = [
  { step: '1', title: 'Cleanse and Pat Dry', desc: 'Use a gentle, non-stripping cleanser. The periorbital area should be dry before application — product on wet skin dilutes concentration and reduces penetration efficiency.', color: '#a78bfa' },
  { step: '2', title: 'Dispense Minimal Amount', desc: 'Use 1–2 drops of GHK-Cu serum for the entire under-eye area. The periorbital region is small — more product does not mean better results and can cause product migration into the eye.', color: '#d4a843' },
  { step: '3', title: 'Warm on Ring Finger', desc: 'Transfer the serum to the ring finger of each hand. The ring finger applies the least pressure — essential for this delicate tissue. Warming slightly on the fingertip before application aids absorption.', color: '#34d399' },
  { step: '4', title: 'Tap, Do Not Rub', desc: 'Apply with a gentle tapping motion from the outer corner (near temple) moving inward toward the inner canthus. Never rub or drag the periorbital skin — mechanical stress breaks down the already-thin dermal collagen structure.', color: '#22d3ee' },
  { step: '5', title: 'Safe Distance from Lash Line', desc: 'Apply to the orbital bone area below the lower lash line — not directly onto the lash margin. Maintain a 3–4mm safety margin from the eye itself to prevent product migration.', color: '#fb923c' },
  { step: '6', title: 'Allow Full Absorption', desc: 'Wait 3–5 minutes before applying any other product over the periorbital area. GHK-Cu requires contact time with the skin for receptor-mediated uptake.', color: '#60a5fa' },
]

const faqs = [
  {
    q: 'How do I know which type of dark circles I have?',
    a: 'The stretch test is your primary diagnostic tool. In good lighting, gently pull the skin just below your outer eye corner outward and slightly upward — enough to create tension without discomfort. If the dark appearance significantly lightens or disappears during the stretch, you have primarily Type 1 (structural/thin skin) dark circles. If the darkness remains mostly unchanged, you have Type 2 (vascular/pigmentation) or Type 3 (volume loss/hollow) — look at whether there is a sunken hollow quality (Type 3) or a flat discoloration (Type 2). Most adults over 40 will have some combination (Type 4).',
  },
  {
    q: 'Can GHK-Cu really thicken under-eye skin?',
    a: 'Yes — this is one of GHK-Cu\'s most clinically documented effects. GHK-Cu upregulates collagen type I, type III, and elastin gene expression in dermal fibroblasts. In the periorbital area specifically, where the skin is approximately 0.5mm thick (compared to 2mm on the rest of the face), even a modest 15–25% increase in dermal collagen density produces a measurable reduction in skin translucency — the mechanism behind Type 1 structural dark circles. The 28% collagen density increase documented in Pickart et al. studies was observed in facial skin generally; the periorbital response is expected to follow similar kinetics, though the thinner starting thickness means the visual impact of each percentage point improvement may be greater in this region.',
  },
  {
    q: 'How long before I see results in the under-eye area?',
    a: 'Type 1 structural dark circles: 8–16 weeks for meaningful improvement, with subtle changes beginning around week 4–6. Collagen synthesis begins within 2–3 weeks of consistent GHK-Cu application, but visible dermal thickening requires sufficient new collagen deposition — a process measured in weeks, not days. Type 2 vascular dark circles: slower response, often 12–20 weeks, and also dependent on addressing the underlying inflammatory driver (allergies, rubbing habit). Type 3 volume loss: peptides provide limited improvement for pure volume loss — realistic expectation is modest improvement in tissue quality, not structural restoration.',
  },
  {
    q: 'Is it safe to apply GHK-Cu so close to the eyes?',
    a: 'GHK-Cu has an excellent safety profile in periorbital use when applied correctly. The key precautions are: (1) Do not apply directly to the lash line or inner corner of the eye — maintain the 3–4mm safety margin. (2) Use minimal product — 1–2 drops for the entire under-eye area. (3) Use the tapping application method, not rubbing, which prevents product migration. (4) If product does contact the eye, rinse with water immediately. GHK-Cu at research concentrations (typically 0.1–0.2%) is not a mucosal irritant in the same way that some actives (like retinol or acids) can be. Many commercial eye creams include copper peptides for precisely this reason.',
  },
  {
    q: 'What is the role of SNAP-8 in the periorbital area?',
    a: 'SNAP-8 addresses a different component of periorbital aging than GHK-Cu. While GHK-Cu builds dermal thickness to reduce translucency, SNAP-8 targets crow\'s feet — the expression lines that form at the lateral corner of the eye from orbicularis oculi muscle contraction. SNAP-8 reduces acetylcholine vesicle docking at the neuromuscular junction of the orbicularis oculi, decreasing the force and frequency of muscle contraction that creates these dynamic wrinkles. In a complete periorbital protocol, GHK-Cu under the eye and SNAP-8 at the lateral corner address two distinct but adjacent concerns.',
  },
  {
    q: 'When should I consider professional treatments instead of or alongside peptides?',
    a: 'Consider professional intervention when: (1) You have significant hollow tear troughs (Type 3) — this is the primary indication for tear trough filler with hyaluronic acid. A skilled injector can restore volume that peptides cannot replicate. (2) You have post-inflammatory hyperpigmentation that has been present for more than 18 months without improvement — laser or chemical peel may be appropriate. (3) You have a severe vascular component (visible blue veins through skin) — injectable treatments targeting vessels exist. Peptides and procedures are not mutually exclusive — the ideal protocol often uses GHK-Cu for dermal maintenance while addressing specific structural issues with targeted procedures.',
  },
]

export default function PeriorbitalPeptidesDarkCirclesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

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
          background: 'radial-gradient(ellipse 60% 50% at 65% 50%, rgba(167,139,250,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
          <div style={{ maxWidth: 820 }}>
            <div className="section-label" style={{ color: '#a78bfa' }}>Periorbital Optimization</div>
            <h1 className="heading-xl" style={{ color: '#ffffff', marginBottom: '1.25rem' }}>
              Peptides for Dark Circles &amp; <span className="gold-text">Under-Eye Area</span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: 680 }}>
              The under-eye area has 4 distinct dark circle types with different causes — and different peptide solutions. Diagnose yours with the stretch test, then target the right mechanism.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: '2rem' }}>
              <Link href="/products/ghk-cu" className="btn-primary">
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
            { val: '0.5mm', label: 'Under-eye skin thickness (vs 2mm body skin)' },
            { val: '28%', label: 'GHK-Cu collagen density increase at 12 weeks' },
            { val: '4 Types', label: 'Distinct dark circle causes requiring different approaches' },
            { val: '8–16 wks', label: 'Structural dark circle improvement timeline' },
          ].map(s => (
            <div key={s.label}>
              <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#a78bfa', letterSpacing: '-0.03em' }}>{s.val}</div>
              <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)', marginTop: 2 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>

        {/* Why Diagnosis Matters */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label">Diagnostic Framework</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '1.25rem' }}>
            Not All Dark Circles Are <span className="gold-text">The Same Problem</span>
          </h2>
          <div className="rg-2col" style={{ gap: '4rem' }}>
            <div>
              <p style={{ color: '#444458', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '1.05rem' }}>
                The single most common mistake in treating periorbital dark circles is applying the same topical treatment regardless of cause. Eye creams are marketed as if "dark circles" is a single condition. It is not. It is a symptom produced by at least 4 distinct biological mechanisms — each requiring a different primary intervention, and each responding differently to peptide therapy.
              </p>
              <p style={{ color: '#444458', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '1.05rem' }}>
                The periorbital region has several anatomical features that make it uniquely challenging: the skin here is the thinnest on the entire body at approximately 0.5mm (compared to 2mm on the face and up to 4mm on the back). This extreme thinness means the underlying orbicularis oculi muscle, periorbital vasculature, and tear trough anatomy are visible through the skin — creating the appearance of darkness even when the skin itself is healthy. As we age and collagen depletes further, this translucency effect worsens.
              </p>
              <p style={{ color: '#444458', lineHeight: 1.85, fontSize: '1.05rem' }}>
                Below the skin, the tear trough ligament separates the preseptal fat compartment from the cheek fat pad. As volume depletes and the ligament becomes more prominent with age, a shadow forms in the hollow — this is Type 3, and it is anatomical rather than dermal. No topical treatment addresses this directly. Understanding which mechanism is driving your dark circles determines which interventions are appropriate.
              </p>
            </div>
            <div>
              <div style={{ padding: '2rem', background: 'rgba(167,139,250,0.06)', border: '1px solid rgba(167,139,250,0.2)', borderRadius: 18, marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1rem' }}>
                  <Eye size={22} style={{ color: '#a78bfa' }} />
                  <h3 style={{ fontWeight: 800, color: '#0a0a14', fontSize: '1.1rem', margin: 0 }}>The Stretch Test — DIY Diagnosis</h3>
                </div>
                <p style={{ color: '#444458', lineHeight: 1.8, marginBottom: '1rem', fontSize: '0.97rem' }}>
                  Perform this in good lighting (natural daylight works best). Gently place two fingers — index finger above and middle finger below the under-eye area — and apply gentle lateral tension to stretch the skin.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div style={{ padding: '0.875rem 1rem', background: 'rgba(167,139,250,0.1)', borderRadius: 10, borderLeft: '3px solid #a78bfa' }}>
                    <div style={{ fontWeight: 700, color: '#a78bfa', fontSize: '0.88rem', marginBottom: 4 }}>Significantly LIGHTER with stretch</div>
                    <div style={{ color: '#444458', fontSize: '0.88rem' }}>→ Type 1 (Structural). Thin skin and collagen loss. GHK-Cu is your primary intervention.</div>
                  </div>
                  <div style={{ padding: '0.875rem 1rem', background: 'rgba(251,146,60,0.1)', borderRadius: 10, borderLeft: '3px solid #fb923c' }}>
                    <div style={{ fontWeight: 700, color: '#fb923c', fontSize: '0.88rem', marginBottom: 4 }}>UNCHANGED with stretch</div>
                    <div style={{ color: '#444458', fontSize: '0.88rem' }}>→ Type 2 (Vascular/Pigment) or Type 3 (Volume). Check for hollow shadow vs flat discoloration.</div>
                  </div>
                  <div style={{ padding: '0.875rem 1rem', background: 'rgba(212,168,67,0.1)', borderRadius: 10, borderLeft: '3px solid #d4a843' }}>
                    <div style={{ fontWeight: 700, color: '#d4a843', fontSize: '0.88rem', marginBottom: 4 }}>PARTIAL improvement with stretch</div>
                    <div style={{ color: '#444458', fontSize: '0.88rem' }}>→ Type 4 (Mixed). Multiple mechanisms. Layered approach required.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4-Type Matrix Component */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label">Cause → Solution Matrix</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '0.5rem' }}>
            4 Dark Circle Types: <span className="gold-text">Cause &amp; Peptide Solution</span>
          </h2>
          <p style={{ color: '#666688', fontSize: '1.05rem', marginBottom: '2.5rem', maxWidth: 640 }}>
            Identify your type with the stretch test above, then match your protocol to the mechanism.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {darkCircleTypes.map((type) => (
              <div key={type.type} style={{
                padding: '1.75rem',
                background: '#f9f9fd',
                border: '1px solid rgba(0,0,0,0.07)',
                borderTop: `4px solid ${type.color}`,
                borderRadius: 18,
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}>
                <div style={{ fontWeight: 900, color: type.color, fontSize: '1rem' }}>{type.type}</div>

                <div>
                  <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#888', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>Root Cause</div>
                  <p style={{ color: '#333350', fontSize: '0.88rem', lineHeight: 1.65, margin: 0 }}>{type.cause}</p>
                </div>

                <div style={{ padding: '0.75rem', background: `${type.color}11`, borderRadius: 10, borderLeft: `3px solid ${type.color}` }}>
                  <div style={{ fontSize: '0.7rem', fontWeight: 700, color: type.color, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>Stretch Test Result</div>
                  <p style={{ color: '#444458', fontSize: '0.85rem', lineHeight: 1.6, margin: 0 }}>{type.stretchTest}</p>
                </div>

                <div>
                  <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#888', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>Peptide Approach</div>
                  <p style={{ color: '#333350', fontSize: '0.88rem', lineHeight: 1.65, margin: 0 }}>{type.bestPeptide}</p>
                </div>

                <div style={{ padding: '0.75rem', background: '#f0f0f8', borderRadius: 10 }}>
                  <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#888', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>Timeline</div>
                  <p style={{ color: '#555570', fontSize: '0.85rem', lineHeight: 1.6, margin: 0 }}>{type.timeline}</p>
                </div>

                <p style={{ color: '#777790', fontSize: '0.82rem', lineHeight: 1.6, margin: 0, fontStyle: 'italic' }}>{type.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* GHK-Cu Mechanism */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label">Primary Peptide</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '1.25rem' }}>
            GHK-Cu for Structural Dark Circles: <span className="gold-text">Mechanism</span>
          </h2>
          <div className="rg-2col" style={{ gap: '4rem' }}>
            <div>
              <p style={{ color: '#444458', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '1.05rem' }}>
                GHK-Cu (copper tripeptide-1) addresses structural dark circles through its primary mechanism: upregulation of collagen type I and collagen type III gene expression in dermal fibroblasts. In the periorbital area, where the dermis is extraordinarily thin, this collagen-building effect translates directly to meaningful improvements in skin opacity and structural support.
              </p>
              <p style={{ color: '#444458', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '1.05rem' }}>
                The mechanism proceeds as follows: GHK-Cu binds to cellular receptors on periorbital fibroblasts, initiating a gene expression cascade that upregulates collagen synthesis while simultaneously elevating TIMP-1 and TIMP-2 (tissue inhibitors of metalloproteinases). These inhibitors protect the newly synthesized collagen from enzymatic degradation — a critical step, because collagen synthesis without MMP inhibition simply creates collagen that is immediately broken down.
              </p>
              <p style={{ color: '#444458', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '1.05rem' }}>
                Additionally, GHK-Cu upregulates VEGF (vascular endothelial growth factor), which improves microvascular perfusion in the periorbital tissue. This vascular improvement can address some aspects of the vascular dark circle component — improving blood vessel integrity and reducing the bluish discoloration associated with sluggish periorbital circulation.
              </p>
              <p style={{ color: '#444458', lineHeight: 1.85, fontSize: '1.05rem' }}>
                The naturally occurring level of GHK-Cu in human plasma drops from approximately 200 ng/mL at age 20 to under 80 ng/mL by age 60 — a decline that directly corresponds to the progressive thinning and collagen loss observed in the periorbital skin over the same period. Topical GHK-Cu replenishes the local signaling environment that youthful periorbital skin requires.
              </p>
            </div>
            <div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { gene: 'Collagen Type I', action: 'Upregulated', desc: 'Primary structural collagen — increases dermal thickness and reduces skin translucency in the thin periorbital dermis', color: '#a78bfa' },
                  { gene: 'Collagen Type III', action: 'Upregulated', desc: 'Soft, pliable collagen supporting the delicate under-eye architecture', color: '#d4a843' },
                  { gene: 'TIMP-1 / TIMP-2', action: 'Upregulated', desc: 'MMP inhibitors — protect new collagen from enzymatic degradation, allowing net accumulation', color: '#34d399' },
                  { gene: 'VEGF', action: 'Upregulated', desc: 'Improves periorbital microvascular perfusion — addresses vascular component of dark circles', color: '#22d3ee' },
                  { gene: 'Elastin', action: 'Upregulated', desc: 'Elasticity restoration — reduces the appearance of fine lines and improves skin recoil under the eye', color: '#fb923c' },
                ].map(item => (
                  <div key={item.gene} style={{
                    display: 'flex', gap: '1rem', padding: '1rem 1.25rem',
                    background: '#f9f9fd', border: '1px solid rgba(0,0,0,0.06)',
                    borderLeft: `3px solid ${item.color}`, borderRadius: '0 12px 12px 0',
                  }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 4 }}>
                        <span style={{ fontWeight: 800, color: '#0a0a14', fontSize: '0.95rem' }}>{item.gene}</span>
                        <span style={{ fontSize: '0.72rem', padding: '2px 8px', background: `${item.color}18`, color: item.color, borderRadius: 100, fontWeight: 700 }}>{item.action}</span>
                      </div>
                      <div style={{ color: '#555570', fontSize: '0.85rem', lineHeight: 1.6 }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/ghk-cu-results-timeline" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#a78bfa', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem', marginTop: '1.5rem' }}>
                Full GHK-Cu Results Timeline <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* SNAP-8 for Crow's Feet */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label">Expression Lines</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '1.25rem' }}>
            SNAP-8 for Crow's Feet &amp; <span className="gold-text">Orbital Expression Lines</span>
          </h2>
          <div className="rg-2col" style={{ gap: '4rem' }}>
            <div>
              <p style={{ color: '#444458', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '1.05rem' }}>
                The orbicularis oculi is the circular muscle that surrounds the entire eye — responsible for blinking, squinting, and all expression-related eye movements. At the lateral corner of the eye (the outer corner, toward the temple), the skin has no bony support beneath it, and repeated orbicularis contraction creates the fan-shaped expression lines known as crow's feet.
              </p>
              <p style={{ color: '#444458', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '1.05rem' }}>
                SNAP-8 (Acetyl Octapeptide-3) is an 8-amino acid peptide that reduces acetylcholine vesicle docking at the SNARE complex of the neuromuscular junction. By partially inhibiting the vesicle-membrane fusion that releases acetylcholine into the synaptic cleft, SNAP-8 reduces the force and frequency of orbicularis oculi contraction — particularly the involuntary and subthreshold contractions that continuously crease the skin throughout the day.
              </p>
              <p style={{ color: '#444458', lineHeight: 1.85, fontSize: '1.05rem' }}>
                Clinical assessment data shows approximately 35% reduction in wrinkle depth with SNAP-8 applied to expression zones. This is a meaningful reduction — visible in photographs and perceptible in person — achieved without the complete muscle paralysis of Botox. The practical advantage is that you retain normal facial expression while reducing the repetitive creasing that deepens lines over time. For crow's feet specifically, combining SNAP-8 laterally with GHK-Cu under the eye creates a comprehensive periorbital protocol.
              </p>
            </div>
            <div>
              <div style={{ padding: '1.75rem', background: 'rgba(212,168,67,0.06)', border: '1px solid rgba(212,168,67,0.2)', borderRadius: 18, marginBottom: '1.5rem' }}>
                <h3 style={{ fontWeight: 800, color: '#0a0a14', fontSize: '1.1rem', marginBottom: '1rem' }}>SNAP-8 Application Zone</h3>
                <p style={{ color: '#444458', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                  Apply SNAP-8 specifically to the lateral orbital zone — the area from the outer corner of the eye extending 2–3cm toward the temple. This is the primary crow's feet zone. Also apply across the glabellar complex between the brows if this is a concern area.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {['Apply after GHK-Cu has absorbed (wait ~90 seconds)', 'Use fingertip — gentle press, no rubbing', 'Extend from outer corner toward temple in fan shape', 'Apply morning only — daily consistency is key', 'Combine with SPF over top — UV accelerates line deepening'].map((tip, i) => (
                    <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                      <CheckCircle size={14} style={{ color: '#d4a843', flexShrink: 0, marginTop: 3 }} />
                      <span style={{ color: '#444458', fontSize: '0.88rem', lineHeight: 1.6 }}>{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Link href="/snap-8-vs-botox-looksmaxxing" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#d4a843', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>
                SNAP-8 vs Botox Full Comparison <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* Application Technique */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label">Application Protocol</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '1.25rem' }}>
            Periorbital Application <span className="gold-text">Technique</span>
          </h2>
          <p style={{ color: '#444458', lineHeight: 1.85, marginBottom: '2rem', fontSize: '1.05rem', maxWidth: 720 }}>
            The under-eye is the most technique-sensitive area for topical peptide application. The skin here is irreplaceable — mechanical damage from rubbing or stretching compounds collagen loss rather than reversing it. Follow this sequence exactly.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {applicationSteps.map(s => (
              <div key={s.step} style={{ padding: '1.5rem', background: '#f9f9fd', border: '1px solid rgba(0,0,0,0.07)', borderRadius: 16 }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: s.color, color: '#fff', fontWeight: 900, fontSize: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.875rem' }}>{s.step}</div>
                <div style={{ fontWeight: 800, color: '#0a0a14', marginBottom: '0.5rem' }}>{s.title}</div>
                <p style={{ color: '#555570', fontSize: '0.9rem', lineHeight: 1.65, margin: 0 }}>{s.desc}</p>
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
                  {openFaq === i ? <ChevronUp size={18} style={{ color: '#a78bfa', flexShrink: 0 }} /> : <ChevronDown size={18} style={{ color: '#888', flexShrink: 0 }} />}
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
          <div style={{ background: 'linear-gradient(135deg, #1a0a2e 0%, #0a0a14 100%)', borderRadius: 24, padding: '3.5rem', textAlign: 'center' }}>
            <div className="section-label" style={{ color: '#a78bfa', justifyContent: 'center' }}>Start the Protocol</div>
            <h2 style={{ color: '#ffffff', fontSize: '2rem', fontWeight: 900, marginBottom: '1rem' }}>
              Build Thicker Periorbital Skin <span className="gold-text">From Within</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: 560, margin: '0 auto 2rem' }}>
              GHK-Cu thickens the under-eye dermis. SNAP-8 reduces crow's feet formation. Together they address the structural and dynamic components of periorbital aging.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={AFFILIATE_BASE} target="_blank" rel="sponsored noopener noreferrer" className="btn-primary">
                Shop Peptides <ExternalLink size={14} />
              </a>
              <Link href="/skin-texture-pore-peptides" className="btn-secondary" style={{ color: 'rgba(255,255,255,0.75)', borderColor: 'rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.06)' }}>
                Skin Texture Guide <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        <RelatedLinks currentPath="/periorbital-peptides-dark-circles" />
      </div>
    </div>
  )
}
