'use client'
import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react'
import { AFFILIATE_BASE } from '@/lib/products'
import RelatedLinks from '@/components/RelatedLinks'

const faqs = [
  {
    category: 'Quality & Purity Standards',
    color: '#d4a843',
    questions: [
      {
        q: 'What purity standard should I look for in peptides?',
        a: 'The minimum acceptable standard for premium peptides is ≥98% purity as measured by High Performance Liquid Chromatography (HPLC). Below 98%, impurities — truncated sequences, residual solvents, or incorrect stereoisomers — may affect experimental integrity. Apollo Peptide Sciences meets or exceeds 98% purity on all compounds.',
      },
      {
        q: 'What is a Certificate of Analysis (CoA) and why does it matter?',
        a: 'A Certificate of Analysis (CoA) is third-party laboratory documentation that a specific batch of peptide has been tested and verified for purity, correct molecular weight, and compound identity. It includes HPLC purity percentage, mass spectrometry (MS) data confirming molecular weight, batch number, and the testing lab\'s name. Never purchase peptides without a CoA — it is the only way to verify what you are actually receiving.',
      },
      {
        q: 'What is the difference between in-house testing and third-party testing?',
        a: 'In-house testing means the supplier runs their own purity tests — creating an obvious conflict of interest. Third-party testing means an independent laboratory with no financial relationship to the supplier verifies the batch. Third-party testing provides objective verification. Apollo Peptide Sciences uses independent third-party labs for all CoA documentation.',
      },
      {
        q: 'What is HPLC and why is it the standard for purity testing?',
        a: 'High Performance Liquid Chromatography (HPLC) separates the components of a sample and measures their relative concentrations. For peptides, it identifies the target compound as a percentage of the total sample mass, revealing any impurities. Combined with mass spectrometry (MS) — which confirms the compound\'s molecular weight — HPLC+MS provides comprehensive purity and identity verification.',
      },
    ],
  },
  {
    category: 'Peptide Storage & Reconstitution',
    color: '#22d3ee',
    questions: [
      {
        q: 'How do I reconstitute a lyophilized peptide?',
        a: 'Use bacteriostatic water (BAC water — 0.9% benzyl alcohol) as the reconstitution medium. Draw the BAC water into a sterile syringe and inject it slowly down the inside wall of the vial — never directly onto the powder. Gently swirl (do not shake) until fully dissolved. Shaking can cause degradation through mechanical stress on the peptide bonds.',
      },
      {
        q: 'What is bacteriostatic water and why is it used for peptides?',
        a: 'Bacteriostatic water is sterile water containing 0.9% benzyl alcohol, which inhibits bacterial growth. This allows a reconstituted peptide solution to be stored safely for 28–60 days without contamination. Regular sterile water lacks this preservative and should only be used for single-use applications.',
      },
      {
        q: 'How should I store lyophilized (unreconstituted) peptides?',
        a: 'Lyophilized peptides are highly stable. Short-term (up to 30–90 days depending on compound): room temperature is acceptable for many peptides. Medium-term (up to 6 months): store at 2–8°C (refrigerator). Long-term (beyond 6 months): store at -20°C (freezer). Always protect from UV light and moisture. Keep the desiccant packet in the vial until use.',
      },
      {
        q: 'How long do reconstituted peptides last?',
        a: 'Once reconstituted with bacteriostatic water, most peptides remain stable for 28–60 days when stored at 2–8°C in a refrigerator. Avoid repeated freeze-thaw cycles of reconstituted solutions, as this can degrade peptide structure. Use amber vials or wrap in foil to protect from light.',
      },
      {
        q: 'Can peptides be stored in a regular freezer?',
        a: 'Lyophilized peptides can be stored at -20°C long-term. However, reconstituted solutions should not be repeatedly frozen and thawed — each freeze-thaw cycle risks ice crystal formation that physically disrupts the peptide structure. If freezing reconstituted solutions is necessary, aliquot into single-use doses before freezing.',
      },
    ],
  },
  {
    category: 'Peptide Shipping & Ordering',
    color: '#fb923c',
    questions: [
      {
        q: 'Are peptides legal to purchase and ship?',
        a: 'Peptides are sold legally for in-vitro and laboratory use. They are not regulated as controlled substances in most jurisdictions. However, regulatory status varies by country and compound. Always verify local regulations before purchasing. These compounds are not for human use or consumption.',
      },
      {
        q: 'How are peptides shipped and will they degrade in transit?',
        a: 'Lyophilized peptides are stable at room temperature for 30–90 days depending on the compound, making standard shipping well within safe parameters. Quality suppliers ship with appropriate temperature indicators. Cold packs are occasionally used for more sensitive compounds or during extreme weather. Apollo Peptide Sciences packages orders to maintain integrity during transit.',
      },
      {
        q: 'What should I check when my order arrives?',
        a: 'Verify the batch number on your vial matches the batch number on your CoA. Check for any visible moisture or color changes in lyophilized powder (should be white to off-white, uniform). Confirm the seal is intact. Download and review your CoA if it wasn\'t included in the package.',
      },
    ],
  },
  {
    category: 'Peptide Compound Selection',
    color: '#a78bfa',
    questions: [
      {
        q: 'Which peptide should I start with for skin studies?',
        a: 'GHK-Cu (copper peptide) is the most studied peptide for skin biology, with peer-reviewed studies showing modulation of 4,000+ genes related to collagen, elastin, and antioxidant pathways. It\'s well-tolerated and suitable as a starting compound for skin studies. SNAP-8 targets acetylcholine release at the neuromuscular junction for expression wrinkle studies. Epithalon adds a longevity dimension via telomere extension.',
      },
      {
        q: 'What is the difference between CJC-1295 with DAC and without DAC?',
        a: 'CJC-1295 without DAC (also sold as Mod GRF 1-29) has a half-life of approximately 30 minutes and produces a sharp, pulsatile GH release. CJC-1295 with DAC (Drug Affinity Complex) attaches to albumin in blood, extending half-life to 6–8 days and producing a sustained GH elevation. For studies mimicking natural pulsatile GH secretion, the without-DAC version is used. For sustained elevation studies, with-DAC is appropriate.',
      },
      {
        q: 'What is the difference between Semaglutide, Tirzepatide, and Retatrutide?',
        a: 'These are GLP-1 pathway compounds with increasing receptor targets: Semaglutide is a GLP-1 mono-agonist. Tirzepatide is a dual GLP-1/GIP co-agonist. Retatrutide is a triple GLP-1/GIP/Glucagon co-agonist. Each additional receptor target adds a distinct metabolic mechanism. Retatrutide produced 24.2% body weight reduction in NEJM Phase 2 trials — the highest ever documented for a pharmacological fat loss compound.',
      },
      {
        q: 'Can BPC-157 and TB-500 be used together?',
        a: 'Yes — BPC-157 and TB-500 are the most common combination in recovery science precisely because they operate through complementary mechanisms. BPC-157 primarily acts locally on gut, tendon, and joint tissue via VEGF and growth hormone receptor pathways. TB-500 (Thymosin Beta-4) promotes systemic tissue repair through actin regulation and angiogenesis signaling. Together they provide both localized and systemic healing support.',
      },
      {
        q: 'What makes IGF-1 LR3 different from standard IGF-1?',
        a: 'IGF-1 LR3 (Long R3) is a modified analog of native IGF-1 with an arginine substitution at position 3 and a 13 amino acid N-terminal extension. This modification significantly reduces binding to IGF binding proteins (IGFBPs) that normally sequester and inactivate IGF-1. The result is approximately 3× higher biological potency and a half-life extended from minutes to approximately 20–30 hours, enabling more sustained receptor activation for lab purposes.',
      },
    ],
  },
  {
    category: 'Lab Basics for Peptide Research',
    color: '#a78bfa',
    questions: [
      {
        q: 'What does "for lab use only" mean?',
        a: '"Lab Use Only" (RUO) means the compound is sold strictly for laboratory and in-vitro use. It is not approved by any regulatory agency for human use, consumption, or clinical application. This is a legal and regulatory classification, not a comment on the compound\'s scientific relevance or the quality of existing published science.',
      },
      {
        q: 'Why do published studies use different doses than common dosing frameworks?',
        a: 'Published clinical studies often use specific dosing protocols determined by regulatory requirements, safety escalation protocols, and specific study objectives. Preclinical (animal model) studies use weight-based dosing that doesn\'t directly translate to other model systems. Dosing frameworks are developed from the published literature as starting points — the optimal parameters for any specific study objective should be derived from the relevant peer-reviewed literature.',
      },
    ],
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', padding: '1.25rem 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
      >
        <span style={{ fontWeight: 700, color: '#0a0a14', fontSize: '0.975rem', lineHeight: 1.5 }}>{q}</span>
        <span style={{ flexShrink: 0, color: '#9090a8', marginTop: 2 }}>
          {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </span>
      </button>
      {open && (
        <div style={{ paddingBottom: '1.25rem' }}>
          <p style={{ fontSize: '0.925rem', color: '#444458', lineHeight: 1.8 }}>{a}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQPage() {
  return (
    <div style={{ background: '#ffffff', minHeight: '100vh' }}>

      {/* Hero */}
      <div style={{ background: 'linear-gradient(180deg, #fdf8ff 0%, #ffffff 100%)', borderBottom: '1px solid rgba(0,0,0,0.07)', padding: '5rem 2rem 4.5rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ maxWidth: 760 }}>
            <div className="section-label">Peptide FAQ</div>
            <h1 className="heading-xl" style={{ color: '#0a0a14', marginBottom: '1.25rem' }}>
              Frequently Asked<br /><span className="gold-text">Lab Questions</span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: '#555570', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: 660 }}>
              Comprehensive answers to the most common questions about peptides — purity standards, CoA documentation, storage, reconstitution, compound selection, and more.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link href="/guide" className="btn-primary">
                Read Full Guide <ArrowRight size={14} />
              </Link>
              <a href={AFFILIATE_BASE} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                Shop Compounds <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>

        {/* Category nav */}
        <section style={{ padding: '2rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {faqs.map(cat => (
              <a key={cat.category} href={`#${cat.category.toLowerCase().replace(/\s+/g, '-').replace('&', 'and')}`} style={{ padding: '6px 14px', background: `${cat.color}10`, border: `1px solid ${cat.color}25`, borderRadius: 100, fontSize: '0.92rem', fontWeight: 700, color: cat.color, textDecoration: 'none' }}>
                {cat.category}
              </a>
            ))}
          </div>
        </section>

        {/* FAQ sections */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem 5rem', padding: '3.5rem 0' }}>
          {faqs.map(cat => (
            <section key={cat.category} id={cat.category.toLowerCase().replace(/\s+/g, '-').replace('&', 'and')} style={{ scrollMarginTop: 80 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '1.5rem' }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: cat.color, flexShrink: 0 }} />
                <h2 style={{ fontWeight: 900, color: '#0a0a14', fontSize: '0.925rem' }}>{cat.category}</h2>
              </div>
              <div>
                {cat.questions.map(item => (
                  <FAQItem key={item.q} q={item.q} a={item.a} />
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Internal links */}
        <section style={{ padding: '0 0 1rem' }}>
          <RelatedLinks currentPath="/faq" />
        </section>

        {/* CTA */}
        <section style={{ padding: '2rem 0 5rem' }}>
          <div style={{ background: 'linear-gradient(135deg, #fffbf0, #f7f8fc)', border: '1px solid rgba(212,168,67,0.2)', borderRadius: 24, padding: '3.5rem', textAlign: 'center' }}>
            <div className="section-label" style={{ justifyContent: 'center', display: 'flex' }}>Still Have Questions?</div>
            <h2 className="heading-md" style={{ color: '#0a0a14', marginBottom: '0.75rem' }}>Shop Premium Grade Compounds at Apollo Peptide Sciences</h2>
            <p style={{ color: '#555570', marginBottom: '2rem', fontSize: '1rem', maxWidth: 540, margin: '0 auto 2rem' }}>
              Every compound independently tested, every batch documented with a full CoA. The highest purity standard in peptides.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={AFFILIATE_BASE} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: '1rem', padding: '0.9rem 2.5rem' }}>
                Shop Apollo Peptide Sciences <ExternalLink size={16} />
              </a>
              <Link href="/guide" className="btn-secondary" style={{ fontSize: '1rem', padding: '0.9rem 2rem' }}>
                Read the Peptide Guide <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
