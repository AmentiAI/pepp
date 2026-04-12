'use client'
import Link from 'next/link'
import { useState } from 'react'
import { CheckCircle, ArrowRight, ExternalLink, FlaskConical, Zap, Shield, ChevronDown, ChevronUp } from 'lucide-react'
import RelatedLinks from '@/components/RelatedLinks'
import { AFFILIATE_BASE } from '@/lib/products'

const hairPhases = [
  { week: 'Weeks 1–4', title: 'Scalp Priming', color: '#9090a8', fill: 15, events: ['Sebum regulation begins', 'Scalp inflammation reduction', 'Miniaturized follicles receive increased blood flow via VEGF upregulation', 'No visible change yet — foundational signaling only'] },
  { week: 'Weeks 4–8', title: 'Shedding Phase', color: '#d4a843', fill: 35, events: ['Paradoxical shedding may occur — telogen follicles pushed into anagen', 'This is NOT hair loss — this is cycle progression', 'New anagen (growth phase) hairs beginning to emerge', 'Scalp texture improvement becomes noticeable'] },
  { week: 'Weeks 8–14', title: 'Visible Regrowth', color: '#a78bfa', fill: 65, events: ['New terminal hairs visible at hairline and crown', 'Existing hairs show increased diameter (follicle enlargement effect)', 'Hair density scoring shows measurable improvement', 'Sebaceous gland normalization complete'] },
  { week: 'Weeks 14–24', title: 'Density Consolidation', color: '#34d399', fill: 90, events: ['Full follicle enlargement measured at 121% above baseline (Pickart data)', 'Terminal hair conversion from vellus in treated areas', 'Continued improvement in hair shaft thickness and tensile strength', 'Beard density and length improvement in facial hair applications'] },
]

const faqItems = [
  { q: 'How long does GHK-Cu take to show hair regrowth results?', a: 'Most users notice decreased shedding and improved scalp texture within 4–6 weeks. Visible density improvement typically appears at 10–14 weeks. Maximum regrowth assessment requires a full 6-month protocol. Hair follicles operate on a 3-month anagen cycle, so results compound over successive cycles rather than appearing linearly.' },
  { q: 'Can GHK-Cu regrow hair on a completely bald scalp?', a: 'GHK-Cu is most effective for reversing miniaturization in follicles that are dormant or producing vellus (thin) hairs — it stimulates these back into terminal hair production. Completely bald areas where follicles have been absent for more than 5–7 years have lower response rates because the follicular units are atrophied. The best candidates are thinning areas where follicles are still present but miniaturized.' },
  { q: 'Does GHK-Cu work better topically or systemically for hair?', a: "For hair specifically, topical application directly to the scalp delivers the highest local concentration to follicular units. Pickart's foundational research used topical formulations. Systemic subcutaneous administration adds a secondary signal but should not replace direct scalp application for hair goals. Combine both for maximum effect: topical GHK-Cu applied 5–7 days per week to the scalp, plus systemic dosing for broader collagen and VEGF benefits." },
  { q: 'Can GHK-Cu be used with minoxidil or finasteride?', a: 'Yes — GHK-Cu works through completely different mechanisms than both minoxidil and finasteride and is additive rather than redundant. Minoxidil drives vasodilation, GHK-Cu drives VEGF upregulation and direct follicle enlargement. Finasteride reduces DHT conversion; GHK-Cu does not act on the androgen pathway. Combining all three addresses different aspects of androgenetic alopecia simultaneously.' },
]

export default function GhkCuHairPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div style={{ background: '#ffffff', minHeight: '100vh' }}>

      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg, #0a0a14 0%, #12121f 50%, #0f0f1a 100%)', padding: '5rem 2rem 4rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', background: 'rgba(212,168,67,0.1)', border: '1px solid rgba(212,168,67,0.25)', borderRadius: 100, marginBottom: '1.5rem' }}>
            <FlaskConical size={13} style={{ color: '#d4a843' }} />
            <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#d4a843', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Hair & Beard Research</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', fontWeight: 900, color: '#ffffff', lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: '1.25rem' }}>
            GHK-Cu for Hair Loss & Beard Growth: The Complete Evidence-Based Protocol
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#9090a8', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: 720, margin: '0 auto 2.5rem' }}>
            GHK-Cu copper peptide increases hair follicle size by 121%, reverses androgenetic miniaturization through VEGF-driven angiogenesis, and stimulates follicular stem cell populations — without androgen pathway interference.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`${AFFILIATE_BASE}`} target="_blank" rel="sponsored noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '0.875rem 1.75rem', background: 'linear-gradient(135deg, #d4a843, #a07c2e)', color: '#000', fontWeight: 900, fontSize: '0.97rem', borderRadius: 12, textDecoration: 'none' }}>
              Shop GHK-Cu <ExternalLink size={15} />
            </a>
            <Link href="/ghk-cu-results-timeline" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '0.875rem 1.75rem', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: '#ffffff', fontWeight: 700, fontSize: '0.97rem', borderRadius: 12, textDecoration: 'none' }}>
              GHK-Cu Results Timeline <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div style={{ background: '#0e0e1a', padding: '2rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem' }}>
          {[
            { stat: '121%', label: 'Hair follicle enlargement (Pickart 2009)' },
            { stat: '4,000+', label: 'Genes modulated by GHK-Cu' },
            { stat: '78%', label: 'Subjects showing follicle response' },
            { stat: '16 wks', label: 'Mean timeline to measurable density gain' },
            { stat: '0', label: 'Androgen pathway side effects' },
          ].map(s => (
            <div key={s.stat} style={{ textAlign: 'center', padding: '1rem' }}>
              <div style={{ fontSize: '2rem', fontWeight: 900, color: '#d4a843', letterSpacing: '-0.04em' }}>{s.stat}</div>
              <div style={{ fontSize: '0.78rem', color: '#6060808', marginTop: 4, lineHeight: 1.4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '4rem 2rem' }}>

        {/* Why GHK-Cu for hair */}
        <section style={{ marginBottom: '5rem' }}>
          <div className="section-label">The Mechanism</div>
          <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)', fontWeight: 900, color: '#0a0a14', letterSpacing: '-0.03em', marginBottom: '1rem' }}>
            Why GHK-Cu Reverses Hair Loss Where Other Compounds Fail
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#555570', lineHeight: 1.85, marginBottom: '1.5rem' }}>
            Hair loss is not a single problem. Androgenetic alopecia (pattern hair loss) involves at least three parallel pathologies: DHT-mediated follicle miniaturization, progressive reduction in perifollicular vascular supply, and follicular stem cell quiescence driven by inflammatory signaling. Finasteride addresses only the first. Minoxidil addresses only the second. GHK-Cu addresses all three simultaneously through a different biological layer: direct gene modulation.
          </p>
          <p style={{ fontSize: '1.05rem', color: '#555570', lineHeight: 1.85, marginBottom: '1.5rem' }}>
            The landmark Pickart research demonstrated that GHK-Cu dramatically increases hair follicle size — follicular units that had miniaturized to 30–40% of normal size showed 121% volumetric increase in response to GHK-Cu treatment. This is not hair shaft cosmetic thickening; this is structural reversal of the miniaturization process at the tissue level. The mechanism involves GHK-Cu's activation of VEGF (vascular endothelial growth factor) pathways, which rebuild the perifollicular capillary network that nutrient-starved miniaturizing follicles depend on.
          </p>
          <p style={{ fontSize: '1.05rem', color: '#555570', lineHeight: 1.85, marginBottom: '1.5rem' }}>
            Beyond VEGF, GHK-Cu modulates Wnt/β-catenin signaling — the master pathway governing hair follicle cycling. Wnt activation transitions follicles from telogen (resting) back into anagen (active growth). This is why some users experience an initial shedding phase in weeks 4–8: dormant telogen hairs are pushed out as the follicles reactivate into anagen and begin producing new terminal hairs beneath. This shedding phase is a positive prognostic marker, not a failure signal.
          </p>
          <p style={{ fontSize: '1.05rem', color: '#555570', lineHeight: 1.85 }}>
            The anti-inflammatory component of GHK-Cu matters for hair because perifollicular inflammation is a key driver of follicle miniaturization in androgenetic and diffuse alopecia. GHK-Cu reduces TNF-α, IL-6, and TGF-β1 — the primary inflammatory cytokines implicated in follicular damage — through its gene modulation of the nuclear factor kappa B (NF-κB) inflammatory pathway. Removing the inflammatory stimulus allows follicles to recover structural integrity independent of DHT suppression.
          </p>
        </section>

        {/* Unique component: Hair Growth Timeline */}
        <section style={{ marginBottom: '5rem' }}>
          <div className="section-label">Protocol Timeline</div>
          <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)', fontWeight: 900, color: '#0a0a14', letterSpacing: '-0.03em', marginBottom: '0.75rem' }}>
            The 24-Week GHK-Cu Hair Growth Phase Timeline
          </h2>
          <p style={{ fontSize: '1rem', color: '#666688', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            Hair follicle response follows a predictable phase pattern. Understand what is happening biologically at each stage — and why the shedding phase is a positive signal.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {hairPhases.map((phase) => (
              <div key={phase.week} style={{ background: '#f7f8fc', border: '1px solid rgba(0,0,0,0.07)', borderRadius: 20, padding: '1.75rem', overflow: 'hidden', position: 'relative' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: `${phase.fill}%`, background: `${phase.color}08`, transition: 'width 0.6s ease', pointerEvents: 'none' }} />
                <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '200px 1fr', gap: '2rem', alignItems: 'start' }}>
                  <div>
                    <div style={{ fontSize: '0.72rem', fontWeight: 700, color: phase.color, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.35rem' }}>{phase.week}</div>
                    <div style={{ fontSize: '1.2rem', fontWeight: 900, color: '#0a0a14', letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>{phase.title}</div>
                    <div style={{ height: 6, background: 'rgba(0,0,0,0.07)', borderRadius: 3, overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${phase.fill}%`, background: phase.color, borderRadius: 3 }} />
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#9090a8', marginTop: 6 }}>{phase.fill}% progress</div>
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', margin: 0 }}>
                    {phase.events.map(ev => (
                      <li key={ev} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                        <CheckCircle size={14} style={{ color: phase.color, marginTop: 3, flexShrink: 0 }} />
                        <span style={{ fontSize: '0.95rem', color: '#555570', lineHeight: 1.6 }}>{ev}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Scalp vs Beard vs Eyebrow */}
        <section style={{ marginBottom: '5rem' }}>
          <div className="section-label">Target Areas</div>
          <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)', fontWeight: 900, color: '#0a0a14', letterSpacing: '-0.03em', marginBottom: '1rem' }}>
            Scalp, Beard & Eyebrow — Area-Specific Application Guide
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#555570', lineHeight: 1.85, marginBottom: '1.5rem' }}>
            GHK-Cu's follicle stimulation mechanism applies to all terminal hair follicles regardless of anatomical location. The biology of follicle activation is the same whether the follicle is in the scalp, beard region, or brow. Application method and expected timelines differ by area.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
            {[
              {
                title: 'Scalp Hair Loss',
                color: '#d4a843',
                icon: '◈',
                points: [
                  'Apply 0.5–1mL GHK-Cu serum to dry scalp 5–7 days per week',
                  'Focus on frontal hairline, vertex, and thinning temples',
                  'Massage gently for 2–3 minutes to increase dermal penetration',
                  'Leave-in protocol preferred over rinse — contact time matters',
                  'Add systemic subcutaneous GHK-Cu for amplified VEGF signal',
                  'Expected onset of visible new growth: 10–14 weeks',
                ],
              },
              {
                title: 'Beard Densification',
                color: '#a78bfa',
                icon: '◇',
                points: [
                  'Beard follicles are androgen-sensitive — DHT promotes rather than suppresses beard growth',
                  'GHK-Cu for beard: targets perifollicular vascularity and follicle size, not androgen pathway',
                  'Apply to clean beard skin post-cleansing, 5 days per week',
                  'Patchy beard areas respond best — vellus hair conversion to terminal most dramatic',
                  'Beard growth timeline is slower: expect 16–20 weeks for visible density change',
                  'Combine with biotin and adequate dietary protein for optimal hair shaft structure',
                ],
              },
              {
                title: 'Eyebrow Restoration',
                color: '#22d3ee',
                icon: '◉',
                points: [
                  'Over-plucked or sparse eyebrows respond well to topical GHK-Cu',
                  'Apply a minimal amount (1–2 drops) to brow area with fingertip — less than scalp dosing',
                  'Avoid contact with eyes — apply to the brow ridge skin, not the lash line',
                  'Brow follicles operate on 4-month cycles — expect 4–6 months for full response',
                  'Best results in areas where follicles are present but dormant or producing fine hairs',
                  'Combine with castor oil (ricinoleic acid) as a synergistic follicle stimulant carrier',
                ],
              },
            ].map(area => (
              <div key={area.title} style={{ background: '#f7f8fc', border: '1px solid rgba(0,0,0,0.07)', borderRadius: 18, padding: '1.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1.25rem' }}>
                  <span style={{ fontSize: '1.5rem', color: area.color }}>{area.icon}</span>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 900, color: '#0a0a14' }}>{area.title}</h3>
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {area.points.map(pt => (
                    <li key={pt} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                      <div style={{ width: 4, height: 4, borderRadius: '50%', background: area.color, marginTop: 8, flexShrink: 0 }} />
                      <span style={{ fontSize: '0.93rem', color: '#555570', lineHeight: 1.65 }}>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Protocol table */}
        <section style={{ marginBottom: '5rem' }}>
          <div className="section-label">Protocol Details</div>
          <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)', fontWeight: 900, color: '#0a0a14', letterSpacing: '-0.03em', marginBottom: '1rem' }}>
            GHK-Cu Hair Protocol: Topical + Systemic Combined Stack
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#555570', lineHeight: 1.85, marginBottom: '2rem' }}>
            Maximum hair response combines local topical delivery to the follicle with systemic subcutaneous administration for circulating VEGF signal amplification and whole-body collagen synthesis upregulation. Below is the complete dual-route protocol.
          </p>
          <div style={{ overflowX: 'auto', borderRadius: 16, border: '1px solid rgba(0,0,0,0.08)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#0a0a14' }}>
                  {['Route', 'Dose', 'Frequency', 'Application Site', 'Purpose'].map(h => (
                    <th key={h} style={{ padding: '1rem 1.25rem', textAlign: 'left', fontSize: '0.72rem', fontWeight: 700, color: '#9090a8', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Topical', '0.5mg in 1mL carrier', '5–7×/week', 'Scalp, beard, or brow', 'Direct follicular stimulation'],
                  ['Subcutaneous', '0.5–1mg', '3–5×/week', 'Abdomen or thigh', 'Systemic VEGF + collagen signal'],
                  ['Topical serum', '1–2 drops', 'Daily AM or PM', 'Face / brow ridge', 'Periorbital and facial hair'],
                  ['Reconstitution', 'Dissolve in BAC water', 'Weekly prep', 'Amber vial storage', '1–2mg/mL working concentration'],
                ].map((row, i) => (
                  <tr key={i} style={{ borderTop: '1px solid rgba(0,0,0,0.06)', background: i % 2 === 0 ? '#fff' : '#f7f8fc' }}>
                    {row.map((cell, j) => (
                      <td key={j} style={{ padding: '0.875rem 1.25rem', fontSize: '0.93rem', color: j === 0 ? '#d4a843' : '#444458', fontWeight: j === 0 ? 700 : 400, lineHeight: 1.5 }}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Synergy stack */}
        <section style={{ marginBottom: '5rem' }}>
          <div className="section-label">Combination Stack</div>
          <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)', fontWeight: 900, color: '#0a0a14', letterSpacing: '-0.03em', marginBottom: '1rem' }}>
            The Complete Hair Optimization Stack: GHK-Cu + Supporting Compounds
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#555570', lineHeight: 1.85, marginBottom: '1.5rem' }}>
            While GHK-Cu alone produces meaningful hair response, certain companion compounds amplify results through complementary mechanisms. These are not redundant additions — each addresses a different biological layer of hair loss pathophysiology.
          </p>
          <p style={{ fontSize: '1.05rem', color: '#555570', lineHeight: 1.85, marginBottom: '1.5rem' }}>
            BPC-157 is the most powerful adjunct to GHK-Cu for hair because BPC-157 also upregulates VEGF — the angiogenic pathway that feeds follicles. Running GHK-Cu and BPC-157 simultaneously produces additive VEGF signaling that accelerates perifollicular capillary network reconstruction beyond what either compound achieves alone. BPC-157's additional benefit is its upregulation of growth factor receptors, including receptors for IGF-1, which acts directly on hair follicle matrix cells to extend anagen phase length.
          </p>
          <p style={{ fontSize: '1.05rem', color: '#555570', lineHeight: 1.85, marginBottom: '1.5rem' }}>
            CJC-1295/Ipamorelin (the GH secretagogue stack) benefits hair through IGF-1 elevation. IGF-1 is a primary anagen-promoting growth factor — it directly extends the growth phase of hair follicles. Users running GH secretagogues alongside topical GHK-Cu often report faster and denser results than topical GHK-Cu alone, because the elevated IGF-1 from GH secretagogues provides a systemic anagen signal while GHK-Cu provides the local follicular VEGF and Wnt activation signal.
          </p>
          <p style={{ fontSize: '1.05rem', color: '#555570', lineHeight: 1.85 }}>
            The full hair optimization stack for someone prioritizing hair regrowth alongside general looksmaxxing: GHK-Cu (topical + systemic), BPC-157 (systemic), CJC-1295/Ipamorelin (systemic, pre-sleep). This stack costs approximately $180–220 per 12-week cycle and comprehensively covers all documented biological levers of hair follicle health: vascular supply, growth factor signaling, inflammatory control, and anagen phase extension.
          </p>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            <Link href="/products/ghk-cu-50mg" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '0.75rem 1.5rem', background: 'rgba(212,168,67,0.1)', border: '1px solid rgba(212,168,67,0.25)', color: '#d4a843', borderRadius: 10, textDecoration: 'none', fontWeight: 700, fontSize: '0.93rem' }}>
              Shop GHK-Cu <ArrowRight size={14} />
            </Link>
            <Link href="/products/bpc-157" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '0.75rem 1.5rem', background: 'rgba(34,211,238,0.08)', border: '1px solid rgba(34,211,238,0.2)', color: '#22d3ee', borderRadius: 10, textDecoration: 'none', fontWeight: 700, fontSize: '0.93rem' }}>
              Shop BPC-157 <ArrowRight size={14} />
            </Link>
            <Link href="/ghk-cu-results-timeline" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '0.75rem 1.5rem', background: '#f7f8fc', border: '1px solid rgba(0,0,0,0.1)', color: '#555570', borderRadius: 10, textDecoration: 'none', fontWeight: 700, fontSize: '0.93rem' }}>
              Full Results Timeline <ArrowRight size={14} />
            </Link>
          </div>
        </section>

        {/* What to expect */}
        <section style={{ marginBottom: '5rem', background: '#f7f8fc', borderRadius: 24, padding: '3rem' }}>
          <div className="section-label">Expected Results</div>
          <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)', fontWeight: 900, color: '#0a0a14', letterSpacing: '-0.03em', marginBottom: '1rem' }}>
            Realistic Outcome Framework by Hair Loss Stage
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#555570', lineHeight: 1.85, marginBottom: '1.5rem' }}>
            GHK-Cu outcomes vary significantly by Norwood scale stage and follicle viability. The most important variable is how long follicles have been miniaturized — recent miniaturization responds dramatically better than long-term atrophy.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
            {[
              { stage: 'Early Thinning (NW I–II)', outcome: 'Excellent response. Follicle miniaturization is recent; VEGF signal rapidly restores vascular supply. Expect 70–90% density maintenance and significant new terminal hair production.', color: '#34d399' },
              { stage: 'Moderate Loss (NW II–III)', outcome: 'Good response. Mix of viable and borderline follicles. Expect significant improvement in diffuse thinning areas, partial restoration at leading edge. Combine with finasteride for optimal results.', color: '#d4a843' },
              { stage: 'Advanced Loss (NW IV–V)', outcome: 'Partial response. Follicles in bald areas may be too atrophied. Best results in areas still producing vellus hair. GHK-Cu is most effective as part of a multi-compound protocol at this stage.', color: '#fb923c' },
              { stage: 'Diffuse Thinning (all stages)', outcome: 'Excellent response. Diffuse thinning preserves follicle counts while reducing density — exactly what GHK-Cu addresses. Expect measurable density improvement across the entire affected region.', color: '#a78bfa' },
            ].map(item => (
              <div key={item.stage} style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.07)', borderRadius: 14, padding: '1.25rem', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: item.color }} />
                <div style={{ fontWeight: 700, color: '#0a0a14', marginBottom: '0.6rem', fontSize: '0.97rem' }}>{item.stage}</div>
                <p style={{ fontSize: '0.9rem', color: '#555570', lineHeight: 1.65 }}>{item.outcome}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section style={{ marginBottom: '4rem' }}>
          <div className="section-label">Research FAQ</div>
          <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)', fontWeight: 900, color: '#0a0a14', letterSpacing: '-0.03em', marginBottom: '2rem' }}>
            Common Questions About GHK-Cu for Hair
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {faqItems.map((item, i) => (
              <div key={i} style={{ border: '1px solid rgba(0,0,0,0.08)', borderRadius: 14, overflow: 'hidden' }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.25rem 1.5rem', background: openFaq === i ? '#f7f8fc' : '#fff', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
                  <span style={{ fontWeight: 700, color: '#0a0a14', fontSize: '1rem', lineHeight: 1.4, paddingRight: '1rem' }}>{item.q}</span>
                  {openFaq === i ? <ChevronUp size={18} style={{ color: '#d4a843', flexShrink: 0 }} /> : <ChevronDown size={18} style={{ color: '#9090a8', flexShrink: 0 }} />}
                </button>
                {openFaq === i && (
                  <div style={{ padding: '0 1.5rem 1.5rem', background: '#f7f8fc' }}>
                    <p style={{ fontSize: '0.97rem', color: '#555570', lineHeight: 1.8 }}>{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: 'linear-gradient(135deg, #0a0a14, #12121f)', borderRadius: 24, padding: '3rem', textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 900, color: '#fff', marginBottom: '0.75rem' }}>Start the GHK-Cu Hair Protocol</h2>
          <p style={{ color: '#9090a8', marginBottom: '2rem', maxWidth: 500, margin: '0 auto 2rem' }}>Third-party HPLC tested. Certificate of Analysis included. Ships within 1–3 business days.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={AFFILIATE_BASE} target="_blank" rel="sponsored noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '1rem 2rem', background: 'linear-gradient(135deg, #d4a843, #a07c2e)', color: '#000', fontWeight: 900, fontSize: '1rem', borderRadius: 12, textDecoration: 'none' }}>
              Shop GHK-Cu Now <ExternalLink size={16} />
            </a>
            <Link href="/looksmaxxing" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '1rem 2rem', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', fontWeight: 700, borderRadius: 12, textDecoration: 'none', fontSize: '1rem' }}>
              Full Looksmaxxing Guide <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        <RelatedLinks currentPath="/ghk-cu-hair-loss-treatment" />
      </div>
    </div>
  )
}
