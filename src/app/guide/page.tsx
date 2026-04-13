import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ExternalLink, CheckCircle, BookOpen, Beaker, Shield, Zap, Clock, AlertCircle, FlaskConical, Dna, TrendingUp, Activity, Sparkles } from 'lucide-react'
import { AFFILIATE_BASE } from '@/lib/products'
import RelatedLinks from '@/components/RelatedLinks'
import FeaturedProductsStrip from '@/components/FeaturedProductsStrip'
import ResearchCard from '@/components/ResearchCard'
import CompoundTable from '@/components/CompoundTable'
import ProtocolSteps from '@/components/ProtocolSteps'
import BreadcrumbNav from '@/components/BreadcrumbNav'

export const metadata: Metadata = {
  title: 'The Complete Peptide Guide — Mechanisms, Dosing & Stacking Protocols',
  description:
    'Everything you need to understand peptides — what they are, how they work at the molecular level, purity standards, reconstitution, dosing frameworks, and stacking principles. Beginner to advanced.',
  keywords: [
    'peptide guide',
    'peptide stacking guide',
    'how peptides work',
    'peptide dosing',
    'peptide reconstitution',
    'peptide purity standards',
    'certificate of analysis peptide',
    'bpc-157 mechanism',
    'ghk-cu mechanism',
    'igf-1 lr3 mechanism',
  ],
  alternates: { canonical: 'https://www.stackspeptide.com/guide' },
  openGraph: {
    title: 'The Complete Peptide Guide — Mechanisms, Dosing & Stacking Protocols',
    description: 'Everything you need to understand peptide science — mechanisms, dosing, stacking, reconstitution, and quality standards.',
    url: 'https://www.stackspeptide.com/guide',
    type: 'article',
  },
}

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

        {/* Breadcrumb */}
        <div style={{ paddingTop: '1.5rem' }}>
          <BreadcrumbNav
            items={[
              { label: 'StacksPeptide', href: '/' },
              { label: 'Guide' },
            ]}
          />
        </div>

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

        {/* ── 7. QUICK REFERENCE TABLE ── */}
        <section style={{ padding: '3rem 0', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
          <div style={{ marginBottom: '2rem' }}>
            <div className="section-label">Compound Reference</div>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#0a0a14', marginBottom: '0.5rem' }}>
              Quick Reference: All 6 Compound Classes
            </h2>
            <p style={{ fontSize: '0.97rem', color: '#666688', maxWidth: 680 }}>
              Each peptide class operates on a distinct receptor system. Understanding the class tells you the mechanism before you know the compound.
            </p>
          </div>
          <CompoundTable
            caption="Peptide Compound Class Reference"
            rows={[
              { name: 'GHK-Cu', class: 'Copper Peptide', target: 'TGF-β / Fibronectin / 4,000+ genes', keyFinding: '70% wrinkle depth reduction in photoaged models (Leyden et al.)', halfLife: '~1 hr', color: '#a78bfa' },
              { name: 'BPC-157', class: 'Cytoprotective', target: 'VEGF / FAK-paxillin / NO pathway', keyFinding: '120+ published studies; heals tendon, gut, neural tissue', halfLife: '4–6 hr', color: '#22d3ee', highlight: true },
              { name: 'Epithalon', class: 'Telomere Peptide', target: 'Telomerase enzyme (hTERT)', keyFinding: 'Telomerase activation in human somatic cells confirmed in human trials', halfLife: 'Unknown', color: '#34d399' },
              { name: 'Retatrutide', class: 'Triple Agonist', target: 'GLP-1R + GIP-R + GCGR', keyFinding: '24.2% body weight reduction in NEJM 2023 Phase 2 trial', halfLife: '~6 days', color: '#d4a843', highlight: true },
              { name: 'CJC-1295', class: 'GHRH Analog', target: 'GHRH-R (pituitary somatotrophs)', keyFinding: '4–8× GH pulse amplification; dose-dependent IGF-1 elevation', halfLife: '7–10 days (DAC)', color: '#60a5fa' },
              { name: 'IGF-1 LR3', class: 'Growth Factor', target: 'IGF-1R (satellite cells)', keyFinding: '3× higher potency than native IGF-1 due to reduced IGFBP binding', halfLife: '~20–30 hr', color: '#fb923c' },
            ]}
          />
        </section>

        {/* ── 8. RESEARCH HIGHLIGHTS ── */}
        <section style={{ padding: '3rem 0', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
          <div style={{ marginBottom: '2.5rem' }}>
            <div className="section-label">Published Science</div>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#0a0a14', marginBottom: '0.5rem' }}>
              Key Research Findings at a Glance
            </h2>
            <p style={{ fontSize: '0.97rem', color: '#666688', maxWidth: 680 }}>
              Every data point on this site comes from peer-reviewed journals. These are the landmark findings that define peptide science.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
            <ResearchCard
              stat="24.2%"
              label="Body Weight Reduction"
              source="NEJM Phase 2 · Retatrutide"
              year="2023"
              color="#d4a843"
              body="The highest pharmacological weight reduction ever recorded in a once-weekly clinical trial. Retatrutide's triple agonism of GLP-1R, GIP-R, and GCGR produced results no prior compound had achieved."
              icon={<TrendingUp size={20} />}
            />
            <ResearchCard
              stat="4,000+"
              label="Genes Modulated by GHK-Cu"
              source="Pickart et al. / Genome Biology"
              year="2012"
              color="#a78bfa"
              body="GHK-Cu (copper tripeptide) modulates over 4,000 human genes through TGF-β and fibronectin receptor signaling — including collagen, elastin, antioxidant enzymes, and anti-inflammatory genes."
              icon={<Dna size={20} />}
            />
            <ResearchCard
              stat="120+"
              label="Published Studies on BPC-157"
              source="Pubmed database · PLC / VEGF"
              year="2024"
              color="#22d3ee"
              body="BPC-157 (Body Protective Compound-157) is among the most studied healing peptides in preclinical science. Studies confirm efficacy across tendon, gut, neurological, and cardiac repair systems."
              icon={<Activity size={20} />}
            />
            <ResearchCard
              stat="40 yrs"
              label="Epithalon Research Data"
              source="Khavinson / St. Petersburg Gerontology"
              year="1980–2023"
              color="#34d399"
              body="Dr. Vladimir Khavinson's lab has studied Epithalon since the 1980s. Peer-reviewed publications confirm telomerase activation in human somatic cells, making it the only peptide with published human telomere extension data."
              icon={<Sparkles size={20} />}
            />
            <ResearchCard
              stat="3×"
              label="Higher Potency vs. Native IGF-1"
              source="Tomas et al. / J. Endocrinol."
              year="1996"
              color="#fb923c"
              body="The Long R3 (LR3) modification to IGF-1 reduces binding to IGF binding proteins, resulting in 3× higher receptor binding affinity and a half-life extended from ~15 minutes to 20–30 hours."
              icon={<FlaskConical size={20} />}
            />
            <ResearchCard
              stat="7–10 days"
              label="CJC-1295 (DAC) Half-Life"
              source="Teichman et al. / J. Clin. Endo."
              year="2006"
              color="#60a5fa"
              body="CJC-1295 with the Drug Affinity Complex (DAC) modification binds serum albumin, extending half-life from ~30 minutes (unmodified) to 7–10 days. A single injection produces 2–10 ng/mL sustained GH elevation for up to 14 days."
              icon={<Zap size={20} />}
            />
          </div>
        </section>

        {/* ── 9. BEGINNER ROADMAP ── */}
        <section style={{ padding: '3rem 0', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="rg-2col" style={{ gap: '4rem', alignItems: 'start' }}>
            <div>
              <div className="section-label">Start Here</div>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#0a0a14', marginBottom: '0.75rem' }}>
                Beginner&apos;s Protocol Roadmap
              </h2>
              <p style={{ fontSize: '0.97rem', color: '#555570', lineHeight: 1.8, marginBottom: '2rem' }}>
                For anyone new to peptide science, the learning curve can feel steep. Use this roadmap to
                sequence your understanding and protocol design — from foundational reading to advanced stacking.
              </p>
              <ProtocolSteps
                steps={[
                  {
                    week: 'W1–2',
                    title: 'Foundation: Quality & Safety',
                    compounds: ['CoA Verification', 'Purity Standards', 'Legal Status'],
                    notes: 'Before sourcing anything, understand what a CoA is, how to read HPLC data, and what ≥98% purity actually means. Our supplier provides this documentation on every order.',
                    color: '#a78bfa',
                  },
                  {
                    week: 'W3',
                    title: 'Single Compound: GHK-Cu',
                    compounds: ['GHK-Cu 1–2mg/day'],
                    notes: 'Start with a well-studied, low-complexity compound. GHK-Cu is topical or subQ, room-temperature stable, and has 40+ years of peer-reviewed data. Observe results over 4–6 weeks.',
                    color: '#22d3ee',
                  },
                  {
                    week: 'W7–8',
                    title: 'Add GH Secretagogue Stack',
                    compounds: ['CJC-1295 100mcg', 'Ipamorelin 200mcg', 'Pre-sleep dosing'],
                    notes: 'Once comfortable with protocol execution, add CJC-1295 + Ipamorelin pre-sleep. These produce synergistic GH pulse amplification. Monitor sleep quality and recovery.',
                    color: '#d4a843',
                  },
                  {
                    week: 'W12+',
                    title: 'Advanced: Injury Recovery or Longevity Layer',
                    compounds: ['BPC-157', 'TB-500', 'Epithalon'],
                    notes: 'Advanced protocols layer healing compounds (BPC-157 + TB-500) or longevity compounds (Epithalon). Each adds a distinct mechanism without overlapping with the existing stack.',
                    color: '#34d399',
                  },
                ]}
              />
            </div>

            <div>
              <div className="section-label">Common Mistakes</div>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#0a0a14', marginBottom: '0.75rem' }}>
                What to Avoid
              </h2>
              <p style={{ fontSize: '0.97rem', color: '#555570', lineHeight: 1.8, marginBottom: '1.75rem' }}>
                Most beginner errors come from impatience, redundant stacking, or sourcing from suppliers who cannot
                provide third-party CoA documentation.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { title: 'Skipping CoA verification', desc: 'Purchasing peptides without independent third-party CoA documentation means you have no confirmation of purity, identity, or correct molecular weight. This is non-negotiable.', color: '#ef4444' },
                  { title: 'Stacking redundant receptor targets', desc: 'Running two GLP-1 agonists simultaneously (e.g., Semaglutide + Retatrutide) provides no additive benefit and increases unnecessary load. Each stack should hit distinct receptor systems.', color: '#f97316' },
                  { title: 'Improper storage after reconstitution', desc: 'Reconstituted peptides must be refrigerated at 2–8°C and used within 28–60 days. Leaving them at room temperature or in sunlight causes structural degradation that ruins experimental results.', color: '#f59e0b' },
                  { title: 'Using in-house tested products', desc: 'Suppliers who "self-test" rather than using independent third-party labs cannot provide objective purity verification. Only third-party tested CoA documentation confirms what you are actually receiving.', color: '#8b5cf6' },
                ].map((item) => (
                  <div
                    key={item.title}
                    style={{
                      display: 'flex',
                      gap: '1rem',
                      padding: '1.1rem 1.25rem',
                      background: `${item.color}07`,
                      border: `1px solid ${item.color}18`,
                      borderRadius: 14,
                    }}
                  >
                    <div
                      style={{
                        width: 6,
                        borderRadius: 3,
                        background: item.color,
                        flexShrink: 0,
                        opacity: 0.6,
                        alignSelf: 'stretch',
                      }}
                    />
                    <div>
                      <div style={{ fontWeight: 700, color: '#0a0a14', fontSize: '0.97rem', marginBottom: '0.35rem' }}>
                        {item.title}
                      </div>
                      <p style={{ fontSize: '0.875rem', color: '#555570', lineHeight: 1.65 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 10. COMPOUND SELECTION DECISION GUIDE ── */}
        <section style={{ padding: '3rem 0', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
          <div style={{ marginBottom: '2rem' }}>
            <div className="section-label">Goal-Based Selection</div>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#0a0a14', marginBottom: '0.5rem' }}>
              Match Compounds to Your Goal
            </h2>
            <p style={{ fontSize: '0.97rem', color: '#666688', maxWidth: 680 }}>
              The right compound isn&apos;t the most popular one — it&apos;s the one that mechanistically addresses your specific objective. Use this matrix to identify your starting compounds.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            {[
              {
                goal: 'Skin Quality & Anti-Aging',
                primary: ['GHK-Cu', 'SNAP-8'],
                secondary: ['Epithalon'],
                color: '#a78bfa',
                icon: <Sparkles size={18} />,
                rationale: 'GHK-Cu resets gene expression across 4,000+ skin biology genes. SNAP-8 targets neuromuscular junction for expression wrinkle reduction. Epithalon adds telomere length maintenance.',
              },
              {
                goal: 'Fat Loss & Metabolic',
                primary: ['Retatrutide', 'Tirzepatide'],
                secondary: ['Semaglutide'],
                color: '#d4a843',
                icon: <TrendingUp size={18} />,
                rationale: 'Triple agonism (Retatrutide) activates thermogenesis through GCGR that single-agonist GLP-1s cannot. If budget-constrained, Semaglutide offers validated clinical efficacy (~15% weight reduction).',
              },
              {
                goal: 'Recovery & Healing',
                primary: ['BPC-157', 'TB-500'],
                secondary: [],
                color: '#22d3ee',
                icon: <Activity size={18} />,
                rationale: 'BPC-157 provides localized cytoprotection across tendon, gut, and neural tissue. TB-500 provides systemic repair signaling through actin polymerization. These two operate synergistically.',
              },
              {
                goal: 'Growth & Body Recomposition',
                primary: ['CJC-1295', 'Ipamorelin', 'IGF-1 LR3'],
                secondary: [],
                color: '#fb923c',
                icon: <Zap size={18} />,
                rationale: 'CJC-1295 + Ipamorelin combination exploits both GHRH-R and GHSR-1a for synergistic GH output. IGF-1 LR3 activates satellite cell proliferation directly — a distinct and complementary mechanism.',
              },
              {
                goal: 'Longevity & Cellular Health',
                primary: ['Epithalon'],
                secondary: ['GHK-Cu'],
                color: '#34d399',
                icon: <Dna size={18} />,
                rationale: 'Epithalon is the only peptide with published human telomerase activation data. The Khavinson protocol (10-day cycles of 5–10mg daily) was derived from 40 years of the St. Petersburg Institute of Gerontology data.',
              },
            ].map((item) => (
              <div
                key={item.goal}
                style={{
                  background: '#f9f9fd',
                  border: '1px solid rgba(0,0,0,0.07)',
                  borderRadius: 18,
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 11,
                    background: `${item.color}10`,
                    border: `1px solid ${item.color}22`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: item.color,
                    marginBottom: '1rem',
                  }}
                >
                  {item.icon}
                </div>
                <div style={{ fontWeight: 800, color: '#0a0a14', fontSize: '0.97rem', marginBottom: '0.75rem' }}>
                  {item.goal}
                </div>
                <div style={{ marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#888898', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Primary</span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginTop: '0.3rem' }}>
                    {item.primary.map((c) => (
                      <span key={c} style={{ padding: '2px 10px', background: `${item.color}10`, border: `1px solid ${item.color}25`, borderRadius: 100, fontSize: '0.78rem', fontWeight: 600, color: item.color }}>
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
                {item.secondary.length > 0 && (
                  <div style={{ marginBottom: '0.75rem' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#888898', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Secondary</span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginTop: '0.3rem' }}>
                      {item.secondary.map((c) => (
                        <span key={c} style={{ padding: '2px 10px', background: 'rgba(0,0,0,0.04)', border: '1px solid rgba(0,0,0,0.09)', borderRadius: 100, fontSize: '0.78rem', fontWeight: 600, color: '#666688' }}>
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                <p style={{ fontSize: '0.82rem', color: '#666688', lineHeight: 1.65, marginTop: 'auto', paddingTop: '0.75rem', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
                  {item.rationale}
                </p>
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
              { href: '/products', label: 'Full Catalog', desc: 'Browse all 100+ compounds with detailed profiles', color: '#22d3ee', icon: <Beaker size={18} /> },
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

        {/* Featured products strip */}
        <FeaturedProductsStrip heading="Top Research Peptides" subheading="The compounds referenced throughout this guide — all third-party HPLC verified." />

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
