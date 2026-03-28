'use client'
import Link from 'next/link'
import { ArrowRight, ExternalLink, CheckCircle, BookOpen, Beaker, Shield, Zap, Clock, AlertCircle } from 'lucide-react'
import { AFFILIATE_BASE } from '@/lib/products'
import RelatedLinks from '@/components/RelatedLinks'

const sections = [
  {
    id: 'what-are-peptides',
    label: '01',
    title: 'What Are Peptides?',
    color: '#a78bfa',
    content: `Peptides are short chains of amino acids — the same building blocks as proteins — that act as biological signaling molecules. Unlike synthetic drugs, peptides are structurally identical or analogous to naturally occurring compounds already found in the human body.

The term "peptide" refers to compounds sold exclusively for in-vitro and laboratory lab purposes. They are not approved for human use or consumption by regulatory agencies.

Each peptide has a specific target receptor or biological pathway it modulates. BPC-157 activates growth hormone receptors in the gut. GHK-Cu binds copper ions and modulates gene expression in fibroblasts. IGF-1 LR3 binds IGF-1 receptors on satellite cells. This specificity is what makes peptides so valuable as lab tools — they allow scientists to isolate and study individual biological pathways with precision.`,
  },
  {
    id: 'purity-and-quality',
    label: '02',
    title: 'Purity Standards & Certificate of Analysis',
    color: '#d4a843',
    content: `Purity is the most critical quality variable in peptide science. Impurities — truncated sequences, residual solvents, bacterial endotoxins, or incorrect stereoisomers — can compromise data and invalidate experimental results.

The industry standard for premium peptides is ≥98% purity as measured by HPLC (High Performance Liquid Chromatography). Mass spectrometry (MS) confirms the correct molecular weight, ensuring the compound is what it claims to be.

A Certificate of Analysis (CoA) is the documentation that proves a batch has been independently tested and meets purity standards. Every reputable supplier provides a CoA with each order. The CoA should include: HPLC purity percentage, MS data confirming molecular weight, batch number, and the testing laboratory's name.

our supplier provides third-party tested CoA documentation on every order — not in-house testing, but independent third-party verification.`,
  },
  {
    id: 'reconstitution',
    label: '03',
    title: 'Reconstitution & Storage',
    color: '#fb923c',
    content: `Lyophilized (freeze-dried) peptides must be reconstituted before use. The standard reconstitution medium is bacteriostatic water (BAC water), which contains 0.9% benzyl alcohol to prevent microbial growth and extend shelf life.

Reconstitution protocol:
1. Allow the vial to reach room temperature before opening
2. Using a sterile syringe, inject BAC water slowly down the side of the vial — never directly onto the powder
3. Gently swirl — do not shake aggressively, as this can degrade the peptide structure
4. Allow to fully dissolve at room temperature

Storage guidelines:
- Lyophilized (unreconstituted): Store at -20°C for long-term; -4°C for up to 6 months; room temperature stable for 30–90 days depending on compound
- Reconstituted: Store at 2–8°C (refrigerator) and use within 28–60 days
- Protect all peptides from UV light
- Avoid repeated freeze-thaw cycles for reconstituted solutions`,
  },
  {
    id: 'dosing-frameworks',
    label: '04',
    title: 'Dosing Frameworks by Compound Class',
    color: '#22d3ee',
    content: `Dosing in peptides varies significantly by compound class, mechanism, and study objective. The following frameworks represent ranges used in published preclinical and clinical data:

GH Secretagogues (CJC-1295, Ipamorelin):
Pre-sleep administration (100–300mcg) capitalizes on the natural nocturnal GH pulse. Studies show 4–8× amplification of endogenous GH output with CJC-1295/Ipamorelin combination vs baseline.

Tissue Repair Peptides (BPC-157, TB-500):
BPC-157: 250–500mcg daily, divided into two doses. TB-500: 2–5mg twice weekly loading for 4–6 weeks, then 2–5mg once weekly maintenance.

Skin & Anti-Aging (GHK-Cu, Epithalon):
GHK-Cu: 1–2mg daily topical or subQ. Epithalon is typically administered in 10-day cycles (5–10mg daily) rather than continuously, based on the Khavinson protocol used in Russian longevity science.

GLP-1 Agonists (Retatrutide, Semaglutide):
Always escalate gradually from the lowest dose to minimize GI side effects. Retatrutide lab protocol starts at 0.5–1mg weekly and escalates over 4–12 weeks.`,
  },
  {
    id: 'mechanisms',
    label: '05',
    title: 'Key Mechanisms of Action',
    color: '#a78bfa',
    content: `Understanding mechanism of action is essential for designing effective lab protocols and interpreting results.

GHRH Analogs (CJC-1295): Bind to growth hormone releasing hormone receptors in the pituitary, stimulating GH release. Modified with DAC (Drug Affinity Complex) for extended half-life — hours instead of minutes.

GHRPs (Ipamorelin, GHRP-6): Bind the ghrelin receptor to stimulate GH secretion. Ipamorelin is highly selective — minimal impact on cortisol or prolactin compared to older GHRPs.

IGF-1 LR3: Binds IGF-1 receptors with 3× higher potency than native IGF-1 due to the arginine substitution that prevents IGF binding protein inactivation. Activates PI3K/Akt and MAPK pathways for proliferative and anti-apoptotic effects.

GHK-Cu: Forms complexes with copper ions that modulate TGF-β signaling and activate over 4,000 genes. Upregulates collagen, elastin, decorin, and multiple antioxidant genes. Downregulates inflammatory and tumor-suppressor genes associated with aging.

BPC-157: Activates FAK-paxillin signaling through growth hormone receptor engagement. Upregulates VEGF for angiogenesis. Anti-inflammatory via nitric oxide pathway modulation.`,
  },
  {
    id: 'stacking-principles',
    label: '06',
    title: 'Stacking Principles',
    color: '#d4a843',
    content: `Effective stacking requires understanding synergistic vs redundant mechanisms. The goal is to activate multiple distinct pathways simultaneously — not to pile up compounds that hit the same receptor.

Synergistic combinations:
- CJC-1295 + Ipamorelin: GHRH + GHRP co-administration produces significantly greater GH release than either alone (approximately 4–8× vs 2–3× for either individually)
- BPC-157 + TB-500: Localized healing (BPC-157) + systemic repair signaling (TB-500) — complementary mechanisms
- GHK-Cu + Epithalon: Gene expression reset + telomere extension — distinct longevity mechanisms with no receptor overlap

Avoid stacking:
- Multiple GLP-1 agonists (redundant receptor activity)
- Multiple GHRH analogs simultaneously
- Overlapping timing with compounds that have long half-lives

Timing strategy:
- Pre-sleep: GH secretagogues (CJC/Ipamorelin)
- Post-training: IGF-1 LR3 (capitalize on elevated satellite cell sensitivity)
- Morning or evening (consistent): BPC-157, GHK-Cu, GLP-1 agonists`,
  },
]

const quickFacts = [
  { icon: <Beaker size={18} />, color: '#a78bfa', title: 'For Lab Use Only', body: 'All peptides are sold strictly for in-vitro and laboratory lab purposes — not for human consumption.' },
  { icon: <Shield size={18} />, color: '#d4a843', title: '≥98% Purity Standard', body: 'Third-party HPLC and MS verification is the minimum quality standard for legitimate premium grade compounds.' },
  { icon: <Clock size={18} />, color: '#22d3ee', title: 'Storage Matters', body: 'Improper storage degrades peptide structure. Lyophilized peptides are stable at room temperature; reconstituted solutions require refrigeration.' },
  { icon: <AlertCircle size={18} />, color: '#fb923c', title: 'CoA on Every Order', body: 'Never purchase peptides without a Certificate of Analysis. This is the only way to verify purity and compound identity.' },
]

export default function GuidePage() {
  return (
    <div style={{ background: '#ffffff', minHeight: '100vh' }}>

      {/* Hero */}
      <div style={{ background: 'linear-gradient(180deg, #f0f8ff 0%, #ffffff 100%)', borderBottom: '1px solid rgba(0,0,0,0.07)', padding: '5rem 2rem 4.5rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ maxWidth: 820 }}>
            <div className="section-label">Peptide Education</div>
            <h1 className="heading-xl" style={{ color: '#0a0a14', marginBottom: '1.25rem' }}>
              The Complete Peptide<br /><span className="gold-text">Stacking & Protocol Guide</span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: '#555570', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: 700 }}>
              Everything you need to understand peptides — what they are, how they work at the molecular level, how to assess quality, and how to design effective lab protocols. Beginner to advanced.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="#what-are-peptides" className="btn-primary">
                Start Reading <BookOpen size={14} />
              </a>
              <Link href="/stacks" className="btn-secondary">View Protocols <ArrowRight size={14} /></Link>
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>

        {/* Quick Facts */}
        <section style={{ padding: '3rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
            {quickFacts.map(f => (
              <div key={f.title} style={{ display: 'flex', gap: '1rem', padding: '1.5rem', background: '#f9f9fd', border: '1px solid rgba(0,0,0,0.07)', borderRadius: 16 }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: `${f.color}12`, border: `1px solid ${f.color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: f.color, flexShrink: 0 }}>
                  {f.icon}
                </div>
                <div>
                  <div style={{ fontWeight: 800, color: '#0a0a14', fontSize: '1rem', marginBottom: '0.3rem' }}>{f.title}</div>
                  <div style={{ fontSize: '1.05rem', color: '#555570', lineHeight: 1.6 }}>{f.body}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Table of Contents */}
        <section style={{ padding: '2.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div style={{ fontSize: '0.97rem', fontWeight: 800, color: '#9090a8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>Table of Contents</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.625rem' }}>
            {sections.map(s => (
              <a key={s.id} href={`#${s.id}`} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '7px 14px', background: '#f3f4f8', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 100, fontSize: '1.05rem', fontWeight: 600, color: '#444458', textDecoration: 'none' }}>
                <span style={{ color: s.color, fontWeight: 900, fontSize: '0.97rem' }}>{s.label}</span>
                {s.title}
              </a>
            ))}
          </div>
        </section>

        {/* Content sections */}
        <section style={{ padding: '3rem 0' }}>
          <div style={{ maxWidth: 860, display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {sections.map(s => (
              <div key={s.id} id={s.id} style={{ scrollMarginTop: 80 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                  <div style={{ fontSize: '0.97rem', fontWeight: 900, color: s.color, background: `${s.color}10`, border: `1px solid ${s.color}25`, padding: '4px 10px', borderRadius: 100, letterSpacing: '0.05em' }}>{s.label}</div>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#0a0a14' }}>{s.title}</h2>
                </div>
                <div style={{ borderLeft: `3px solid ${s.color}30`, paddingLeft: '1.5rem' }}>
                  {s.content.split('\n\n').map((para, i) => (
                    <p key={i} style={{ fontSize: '1rem', color: '#444458', lineHeight: 1.85, marginBottom: '1.25rem' }}>
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Related pages */}
        <section style={{ padding: '2rem 0', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
            {[
              { href: '/stacks', label: 'Stacking Protocols', desc: 'Pre-built protocols by goal — beginner to advanced', color: '#d4a843', icon: <Zap size={18} /> },
              { href: '/faq', label: 'FAQ', desc: 'Common questions on purity, shipping, storage, and sourcing', color: '#a78bfa', icon: <BookOpen size={18} /> },
              { href: '/products', label: 'Full Catalog', desc: 'Browse all 24+ compounds with detailed profiles', color: '#22d3ee', icon: <Beaker size={18} /> },
            ].map(item => (
              <Link key={item.href} href={item.href} style={{ display: 'flex', gap: '1rem', padding: '1.5rem', background: '#f9f9fd', border: '1px solid rgba(0,0,0,0.07)', borderRadius: 18, textDecoration: 'none' }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: `${item.color}12`, border: `1px solid ${item.color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: item.color, flexShrink: 0 }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontWeight: 800, color: '#0a0a14', fontSize: '1.05rem', marginBottom: '0.25rem' }}>{item.label}</div>
                  <div style={{ fontSize: '1.05rem', color: '#666688', lineHeight: 1.5 }}>{item.desc}</div>
                </div>
                <ArrowRight size={16} style={{ color: item.color, flexShrink: 0, marginLeft: 'auto', alignSelf: 'center' }} />
              </Link>
            ))}
          </div>
        </section>

        {/* Internal links */}
        <section style={{ padding: '0 0 1rem' }}>
          <RelatedLinks currentPath="/guide" />
        </section>

        {/* CTA */}
        <section style={{ padding: '2rem 0 5rem' }}>
          <div style={{ background: 'linear-gradient(135deg, #fffbf0, #f7f8fc)', border: '1px solid rgba(212,168,67,0.2)', borderRadius: 24, padding: '3.5rem', textAlign: 'center' }}>
            <div className="section-label" style={{ justifyContent: 'center', display: 'flex' }}>Source Premium Grade Compounds</div>
            <h2 className="heading-md" style={{ color: '#0a0a14', marginBottom: '0.75rem' }}>Every Compound Covered in This Guide Available at our supplier</h2>
            <p style={{ color: '#555570', marginBottom: '2rem', fontSize: '1rem', maxWidth: 560, margin: '0 auto 2rem' }}>
              Third-party tested, premium grade, with full CoA documentation. The benchmark for peptide purity in the scientific community.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={AFFILIATE_BASE} target="_blank" rel="sponsored noopener noreferrer" className="btn-primary" style={{ fontSize: '1rem', padding: '0.9rem 2.5rem' }}>
                Shop Now <ExternalLink size={16} />
              </a>
              <Link href="/faq" className="btn-secondary" style={{ fontSize: '1rem', padding: '0.9rem 2rem' }}>
                Read the FAQ <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
