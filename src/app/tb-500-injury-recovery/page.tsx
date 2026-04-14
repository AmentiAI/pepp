'use client'
import Link from 'next/link'
import { ArrowRight, ExternalLink, Zap, Activity, Shield, CheckCircle, AlertCircle, Heart, Brain, Layers, FlaskConical, Clock } from 'lucide-react'
import { AFFILIATE_BASE, AFFILIATE_PRODUCT } from '@/lib/products'
import RelatedLinks from '@/components/RelatedLinks'

const tissueCards = [
  {
    icon: <Activity size={22} />,
    color: '#22d3ee',
    title: 'Tendon & Ligament',
    subtitle: 'Superior for chronic tendinopathy',
    detail:
      'TB-500 demonstrates particular efficacy in chronic tendinopathy, a condition where local BPC-157 often proves insufficient alone. By distributing systemically, TB-500 reaches tendon tissue throughout the body simultaneously — recruiting fibroblasts and facilitating matrix remodeling in areas that resist targeted injection. The LKKTET motif drives new collagen fiber deposition within degenerative tendon architecture.',
  },
  {
    icon: <Zap size={22} />,
    color: '#34d399',
    title: 'Muscle Repair',
    subtitle: 'Satellite cell proliferation',
    detail:
      'Thymosin Beta-4 promotes muscle fiber regeneration through satellite cell proliferation — the precursor cells responsible for muscle repair. In myocardial and skeletal muscle research, TB-500 has been shown to mobilize stem cells from bone marrow to sites of injury. For skeletal muscle, this means accelerated repair of fiber tears and reduced formation of non-functional scar tissue within muscle bellies.',
  },
  {
    icon: <Heart size={22} />,
    color: '#f87171',
    title: 'Cardiac Tissue',
    subtitle: 'Documented cardioprotection',
    detail:
      'TB-500 has one of the most robust cardiac research profiles of any peptide. In myocardial infarction models, Thymosin Beta-4 reduced infarct size, promoted cardiomyocyte survival, and attenuated post-infarction scar formation. Remarkably, research demonstrated that TB-500 can promote new cardiomyocyte formation from existing cardiac progenitor cells — a process essentially absent in normal adult cardiac tissue.',
  },
  {
    icon: <Brain size={22} />,
    color: '#a78bfa',
    title: 'Neurological',
    subtitle: 'Neuroprotection and remyelination',
    detail:
      'In CNS injury models, TB-500 has demonstrated neuroprotective effects through suppression of inflammatory mediators that drive secondary neuronal death following initial trauma. Remyelination support — the restoration of the myelin sheath around nerve fibers — has been documented in multiple sclerosis and spinal cord injury research. The peptide promotes oligodendrocyte survival and proliferation, the cells responsible for myelin production.',
  },
  {
    icon: <Shield size={22} />,
    color: '#fb923c',
    title: 'Skin & Wound Healing',
    subtitle: 'Accelerated closure, reduced scarring',
    detail:
      'TB-500 was first studied extensively in wound healing research. It accelerates wound closure by promoting the migration of keratinocytes and fibroblasts to the wound bed — driven by its actin-binding mechanism. Scar formation is reduced through the organized deposition of new collagen fibers rather than the disordered accumulation that characterizes hypertrophic scars. Angiogenesis at the wound site ensures adequate vascular supply for sustained repair.',
  },
]

const timelineItems = [
  {
    range: 'Week 1',
    phase: 'Anti-inflammatory Initiation',
    color: '#22d3ee',
    bg: 'rgba(34,211,238,0.06)',
    border: 'rgba(34,211,238,0.22)',
    what: 'TB-500 begins distributing systemically. Anti-inflammatory signaling initiates — NF-κB pathway suppression reduces the inflammatory burden at injury sites. Cell migration machinery activates as the LKKTET motif begins upregulating G-actin sequestration, priming fibroblasts and endothelial cells to migrate toward damaged tissue.',
    notice: 'Reduction in acute pain and swelling at injury sites. Joint and tissue mobility may begin improving. Systemic anti-inflammatory effect is often the first noticeable change.',
  },
  {
    range: 'Week 2–3',
    phase: 'Angiogenesis — New Vessel Formation',
    color: '#0ea5e9',
    bg: 'rgba(14,165,233,0.06)',
    border: 'rgba(14,165,233,0.22)',
    what: 'Active angiogenesis — the formation of new blood vessels — is underway. TB-500 drives this through integrin signaling (primarily αvβ3 and αvβ5 integrins), promoting endothelial cell migration and tube formation. New capillary networks penetrate previously ischemic injury zones, delivering oxygen and nutrients critical for tissue repair.',
    notice: 'Improved tissue warmth and perfusion at injury sites. Chronic injuries that have felt "cold" or poorly vascularized may begin responding. Functional range of motion continues improving.',
  },
  {
    range: 'Week 4–6',
    phase: 'Tissue Remodeling — Collagen Organization',
    color: '#34d399',
    bg: 'rgba(52,211,153,0.06)',
    border: 'rgba(52,211,153,0.22)',
    what: 'Active tissue remodeling phase. Fibroblasts depositing new collagen fibers under the direction of TB-500 signaling. Collagen organization into functional, load-bearing architecture begins. Muscle fiber regeneration is measurably underway — satellite cell progeny are differentiating into mature myofibers. Tendon collagen fiber alignment improving.',
    notice: 'Structural improvements to injured tissue become functionally apparent. Strength and load tolerance at the injury site begins recovering. Chronic tendinopathy often shows the most dramatic response in this window.',
  },
  {
    range: 'Week 8+',
    phase: 'Structural Repair & Maturation',
    color: '#d4a843',
    bg: 'rgba(212,168,67,0.06)',
    border: 'rgba(212,168,67,0.25)',
    what: 'The newly deposited tissue enters its maturation phase. Collagen fibers continue cross-linking and organizing into mature matrix architecture. The vascular network established in earlier weeks stabilizes. For cardiac applications, myocardial remodeling benefits persist and cardiac function improvements are documented at this stage in research models.',
    notice: 'Full structural repair of acute injuries. Chronic conditions may require a second loading cycle. Maintenance dosing is typically initiated here to sustain gains and support continued tissue health.',
  },
]

const comparisonRows = [
  { feature: 'Primary Mechanism', tb500: 'G-actin binding → cell migration', bpc157: 'Growth hormone receptor / VEGF upregulation' },
  { feature: 'Distribution', tb500: 'Systemic — travels throughout the body', bpc157: 'Local — primarily at administration site' },
  { feature: 'Tissue Specificity', tb500: 'All vascularized tissue types', bpc157: 'Tendon, gut, nerve at injection region' },
  { feature: 'Best For', tb500: 'Muscle, cardiac, chronic multi-site injury', bpc157: 'Acute tendon/ligament, gut, local nerve' },
  { feature: 'Angiogenesis Mechanism', tb500: 'Integrin signaling (αvβ3, αvβ5)', bpc157: 'Direct VEGF upregulation at injury site' },
  { feature: 'Loading Protocol', tb500: '4–5mg 2× per week (loading)', bpc157: '500mcg daily (loading)' },
  { feature: 'Route', tb500: 'Subcutaneous or IM', bpc157: 'Oral, subQ, or IM' },
  { feature: 'Stack Together', tb500: 'Additive — different mechanisms', bpc157: 'Additive — complementary pathways' },
]

export default function TB500InjuryRecoveryPage() {
  return (
    <div style={{ background: '#ffffff', minHeight: '100vh', fontFamily: 'inherit' }}>

      {/* ── HERO ───────────────────────────────────────────────────────── */}
      <div style={{
        background: 'linear-gradient(160deg, #0a1520 0%, #0c2030 40%, #081818 100%)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        padding: '6rem 2rem 5.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Grid pattern */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: 'radial-gradient(circle, rgba(34,211,238,0.18) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)',
        }} />
        {/* Glow orbs */}
        <div style={{
          position: 'absolute', top: '-120px', right: '-80px',
          width: 560, height: 560, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(34,211,238,0.1) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '-80px', left: '-60px',
          width: 400, height: 400, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(52,211,153,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: '#22d3ee',
            marginBottom: '1.5rem',
          }}>
            <span style={{ display: 'inline-block', width: 28, height: 1, background: '#22d3ee', opacity: 0.7 }} />
            Systemic Healing Peptide
            <span style={{ display: 'inline-block', width: 28, height: 1, background: '#22d3ee', opacity: 0.7 }} />
          </div>

          <h1 style={{
            fontSize: 'clamp(2.6rem, 5.5vw, 4.2rem)',
            fontWeight: 900,
            lineHeight: 1.08,
            letterSpacing: '-0.04em',
            color: '#ffffff',
            marginBottom: '1.25rem',
            maxWidth: 820,
          }}>
            TB-500{' '}
            <span style={{
              background: 'linear-gradient(90deg, #22d3ee 0%, #34d399 60%, #22d3ee 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Complete Injury Recovery Guide
            </span>
          </h1>

          <p style={{
            fontSize: '1.175rem',
            color: 'rgba(255,255,255,0.65)',
            lineHeight: 1.8,
            marginBottom: '2.75rem',
            maxWidth: 700,
          }}>
            Thymosin Beta-4 fragment — the systemic healing peptide. Works throughout the entire body simultaneously, addressing tendon, muscle, cardiac, and neural repair via a distinct actin-binding mechanism that no other peptide replicates.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            <a
              href={AFFILIATE_PRODUCT('tb-500-10mg')}
              target="_blank"
              rel="sponsored noopener noreferrer"
              className="btn-primary"
            >
              Buy TB-500 10mg <ExternalLink size={14} />
            </a>
            <a href="#dosing" className="btn-secondary" style={{ color: '#22d3ee', borderColor: 'rgba(34,211,238,0.35)', background: 'rgba(34,211,238,0.06)' }}>
              View Dosing Protocol <ArrowRight size={14} />
            </a>
          </div>

          {/* Stat pills */}
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            {[
              { n: '43', l: 'Amino Acid Protein', c: '#22d3ee' },
              { n: '50+', l: 'Published Studies', c: '#34d399' },
              { n: '>98%', l: 'Purity Verified', c: '#d4a843' },
            ].map(s => (
              <div key={s.l} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: 900, color: s.c, letterSpacing: '-0.04em', lineHeight: 1 }}>{s.n}</div>
                <div style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.42)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', marginTop: '0.25rem' }}>{s.l}</div>
              </div>
            ))}
          </div>

          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '0.45rem 0.9rem',
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 6,
            fontSize: '0.75rem',
            color: 'rgba(255,255,255,0.38)',
          }}>
            <AlertCircle size={12} style={{ color: '#fb923c' }} />
            For laboratory and research use only. Not for human consumption.
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem' }}>

        {/* ── WHAT IS TB-500 ─────────────────────────────────────────── */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3.5rem', alignItems: 'start' }}>
            <div>
              <div style={{
                display: 'inline-block', fontSize: '0.65rem', fontWeight: 800,
                letterSpacing: '0.16em', textTransform: 'uppercase',
                color: '#22d3ee', marginBottom: '1rem',
              }}>
                What Is TB-500
              </div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 900, letterSpacing: '-0.03em', color: '#0a0a14', lineHeight: 1.15, marginBottom: '1.5rem' }}>
                The Systemic<br />Healing Peptide
              </h2>
              <p style={{ fontSize: '1.05rem', color: '#444458', lineHeight: 1.85, marginBottom: '1.25rem' }}>
                TB-500 is a synthetic fragment of <strong style={{ color: '#0a0a14' }}>Thymosin Beta-4</strong> — a naturally occurring 43 amino acid protein found in virtually every cell of the human body, with notably high concentrations in blood platelets and wound fluid. This strategic biological placement is not coincidental: the body pre-positions Thymosin Beta-4 at the precise sites where injury response will be initiated.
              </p>
              <p style={{ fontSize: '1.05rem', color: '#444458', lineHeight: 1.85, marginBottom: '1.25rem' }}>
                Unlike BPC-157, which acts primarily at the site of administration, TB-500 is designed by biology to operate <em>systemically</em> — distributing throughout the bloodstream to coordinate a body-wide repair response. When tissue damage occurs, Thymosin Beta-4 is released from platelets and upregulated at wound sites to orchestrate the cellular machinery of healing.
              </p>
              <p style={{ fontSize: '1.05rem', color: '#444458', lineHeight: 1.85 }}>
                The synthetic TB-500 fragment preserves the most biologically active region of Thymosin Beta-4 while improving pharmacokinetic properties. Researchers have isolated the key active sequence — the LKKTET motif — as the primary driver of TB-500's cell migration and actin-regulatory effects.
              </p>
            </div>

            <div>
              {/* Key characteristics */}
              <div style={{
                background: 'linear-gradient(135deg, #0a1520 0%, #0f1c2a 100%)',
                borderRadius: 20,
                padding: '2rem',
                border: '1px solid rgba(34,211,238,0.15)',
                marginBottom: '1.5rem',
              }}>
                <div style={{ fontSize: '0.62rem', fontWeight: 800, color: '#22d3ee', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1.5rem' }}>
                  Compound Profile
                </div>
                {[
                  { label: 'Source', value: 'Synthetic Thymosin Beta-4 fragment' },
                  { label: 'Length', value: '43 amino acid protein' },
                  { label: 'Active Motif', value: 'LKKTET (cell migration sequence)' },
                  { label: 'Endogenous Role', value: 'Wound site coordination, platelet-released' },
                  { label: 'Distribution', value: 'Systemic via bloodstream' },
                  { label: 'Key Mechanism', value: 'G-actin binding → cell migration' },
                  { label: 'Purity', value: '>98% verified' },
                ].map(item => (
                  <div key={item.label} style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
                    padding: '0.65rem 0',
                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                    gap: 12,
                  }}>
                    <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.38)', fontWeight: 600, flexShrink: 0 }}>{item.label}</span>
                    <span style={{ fontSize: '0.87rem', color: 'rgba(255,255,255,0.82)', fontWeight: 600, textAlign: 'right' }}>{item.value}</span>
                  </div>
                ))}
              </div>

              {/* TB-500 vs BPC-157 quick differentiator */}
              <div style={{
                padding: '1.5rem',
                background: 'rgba(34,211,238,0.04)',
                border: '1px solid rgba(34,211,238,0.15)',
                borderRadius: 16,
              }}>
                <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#22d3ee', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.75rem' }}>
                  TB-500 vs BPC-157 — The Key Difference
                </div>
                <p style={{ fontSize: '0.9rem', color: '#444458', lineHeight: 1.75, margin: 0 }}>
                  BPC-157 heals <strong style={{ color: '#0a0a14' }}>where you inject it</strong>. TB-500 heals <strong style={{ color: '#0a0a14' }}>everywhere at once</strong>. Different targets, different mechanisms — which is precisely why they are the most potent combination in tissue repair research.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── ACTIN-BINDING MECHANISM ────────────────────────────────── */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div style={{
            display: 'inline-block', fontSize: '0.65rem', fontWeight: 800,
            letterSpacing: '0.16em', textTransform: 'uppercase',
            color: '#22d3ee', marginBottom: '1rem',
          }}>
            Mechanism of Action
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 900, letterSpacing: '-0.03em', color: '#0a0a14', marginBottom: '1rem' }}>
            The Actin-Binding Mechanism
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#555570', maxWidth: 680, lineHeight: 1.8, marginBottom: '3rem' }}>
            TB-500's mechanism is fundamentally distinct from every other healing peptide — it operates at the level of cytoskeletal protein regulation, not growth factor receptor activation.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            {[
              {
                step: '01',
                color: '#22d3ee',
                title: 'G-Actin Sequestration',
                detail: 'TB-500 binds G-actin (globular actin) — the monomeric building block of the actin cytoskeleton. By sequestering G-actin, TB-500 regulates the ratio of free G-actin to polymerized F-actin (filamentous actin), shifting the intracellular balance toward a state that promotes cell motility.',
              },
              {
                step: '02',
                color: '#0ea5e9',
                title: 'LKKTET Motif Activation',
                detail: 'The LKKTET hexapeptide sequence is the minimum active fragment responsible for TB-500\'s cell migration effects. This motif binds directly to the thymosin fold domain and drives upregulation of actin polymerization at the leading edge of migrating cells — essentially telling fibroblasts, endothelial cells, and myoblasts to move toward damaged tissue.',
              },
              {
                step: '03',
                color: '#34d399',
                title: 'Directed Cell Migration',
                detail: 'The end result of G-actin modulation: endothelial cells, fibroblasts, and myoblasts migrate en masse toward injury sites. This is the foundational repair event — before collagen can be deposited or new vessels can form, the right cells must arrive at the damage site. TB-500 accelerates and amplifies this recruitment process body-wide.',
              },
              {
                step: '04',
                color: '#d4a843',
                title: 'Integrin-Mediated Angiogenesis',
                detail: 'TB-500 promotes angiogenesis — new blood vessel formation — through integrin signaling, particularly αvβ3 and αvβ5 integrins on endothelial cells. This differs from BPC-157\'s VEGF-driven angiogenesis, creating a complementary dual mechanism when the compounds are used together. New vasculature is the infrastructure that sustains all subsequent repair processes.',
              },
            ].map(item => (
              <div key={item.step} style={{
                padding: '2rem',
                background: '#f9f9fd',
                border: '1px solid rgba(0,0,0,0.07)',
                borderTop: `3px solid ${item.color}`,
                borderRadius: 18,
              }}>
                <div style={{ fontSize: '2.2rem', fontWeight: 900, color: item.color, opacity: 0.25, lineHeight: 1, marginBottom: '0.75rem', letterSpacing: '-0.04em' }}>{item.step}</div>
                <div style={{ fontWeight: 800, color: '#0a0a14', fontSize: '1.05rem', marginBottom: '0.75rem' }}>{item.title}</div>
                <div style={{ fontSize: '0.92rem', color: '#555570', lineHeight: 1.75 }}>{item.detail}</div>
              </div>
            ))}
          </div>

          {/* Mechanism visual summary */}
          <div style={{
            background: 'linear-gradient(135deg, #0a1520 0%, #0f1c2a 100%)',
            borderRadius: 20,
            padding: '2.5rem',
            border: '1px solid rgba(34,211,238,0.15)',
          }}>
            <div style={{ fontSize: '0.65rem', fontWeight: 800, color: '#22d3ee', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1.5rem' }}>
              Mechanism Summary
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              {[
                { label: 'TB-500 Administered', color: '#22d3ee' },
                { label: 'G-Actin Binding', color: '#0ea5e9' },
                { label: 'LKKTET Activation', color: '#38bdf8' },
                { label: 'Cell Migration ↑', color: '#34d399' },
                { label: 'Angiogenesis', color: '#d4a843' },
                { label: 'Tissue Repair', color: '#22d3ee' },
              ].map((step, i, arr) => (
                <div key={step.label} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    padding: '0.5rem 1rem',
                    background: `${step.color}12`,
                    border: `1px solid ${step.color}30`,
                    borderRadius: 8,
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    color: step.color,
                    whiteSpace: 'nowrap',
                  }}>{step.label}</div>
                  {i < arr.length - 1 && (
                    <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '1.2rem' }}>→</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TISSUE APPLICATIONS ────────────────────────────────────── */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div style={{
            display: 'inline-block', fontSize: '0.65rem', fontWeight: 800,
            letterSpacing: '0.16em', textTransform: 'uppercase',
            color: '#22d3ee', marginBottom: '1rem',
          }}>
            What TB-500 Addresses
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 900, letterSpacing: '-0.03em', color: '#0a0a14', marginBottom: '1rem' }}>
            Five Tissue Systems
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#555570', maxWidth: 680, lineHeight: 1.8, marginBottom: '3rem' }}>
            TB-500's systemic distribution means it addresses injury across every vascularized tissue type simultaneously. These are the five primary applications documented in research literature.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {tissueCards.map(card => (
              <div key={card.title} style={{
                border: `1px solid ${card.color}25`,
                borderTop: `3px solid ${card.color}`,
                borderRadius: 18,
                padding: '2rem',
                background: `linear-gradient(135deg, ${card.color}03 0%, #ffffff 100%)`,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: '1.25rem' }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 12,
                    background: `${card.color}12`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: card.color,
                    flexShrink: 0,
                  }}>
                    {card.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.62rem', fontWeight: 800, color: card.color, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.1rem' }}>{card.subtitle}</div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0a0a14' }}>{card.title}</div>
                  </div>
                </div>
                <p style={{ fontSize: '0.92rem', color: '#555570', lineHeight: 1.75, margin: 0 }}>{card.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── RECOVERY TIMELINE ──────────────────────────────────────── */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div style={{
            display: 'inline-block', fontSize: '0.65rem', fontWeight: 800,
            letterSpacing: '0.16em', textTransform: 'uppercase',
            color: '#22d3ee', marginBottom: '1rem',
          }}>
            Week-by-Week
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 900, letterSpacing: '-0.03em', color: '#0a0a14', marginBottom: '1rem' }}>
            TB-500 Recovery Timeline
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#555570', maxWidth: 680, lineHeight: 1.8, marginBottom: '3rem' }}>
            Based on the documented phases of Thymosin Beta-4 activity in tissue repair research. Individual outcomes vary by injury type, chronicity, and dosing protocol.
          </p>

          <div style={{ position: 'relative' }}>
            {/* Vertical line */}
            <div style={{
              position: 'absolute',
              left: 20,
              top: 24,
              bottom: 24,
              width: 2,
              background: 'linear-gradient(180deg, #22d3ee 0%, #0ea5e9 33%, #34d399 66%, #d4a843 100%)',
              borderRadius: 2,
            }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {timelineItems.map((item, i) => (
                <div key={item.range} style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
                  {/* Dot */}
                  <div style={{
                    width: 42, height: 42, borderRadius: '50%',
                    background: item.color,
                    border: '3px solid #fff',
                    boxShadow: `0 0 0 2px ${item.color}40, 0 4px 16px ${item.color}30`,
                    flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    zIndex: 1,
                  }}>
                    <Clock size={16} style={{ color: '#fff' }} />
                  </div>
                  {/* Content */}
                  <div style={{
                    flex: 1,
                    padding: '1.75rem 2rem',
                    background: item.bg,
                    border: `1px solid ${item.border}`,
                    borderRadius: 20,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                      <span style={{ fontWeight: 900, color: item.color, fontSize: '1.2rem', letterSpacing: '-0.02em' }}>{item.range}</span>
                      <span style={{
                        fontSize: '0.72rem', fontWeight: 700,
                        padding: '3px 10px', borderRadius: 100,
                        background: `${item.color}14`, color: item.color,
                        border: `1px solid ${item.color}28`,
                        letterSpacing: '0.05em', textTransform: 'uppercase',
                      }}>{item.phase}</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      {[
                        { label: "What's Happening", text: item.what, icon: <FlaskConical size={14} /> },
                        { label: 'What You May Notice', text: item.notice, icon: <Activity size={14} /> },
                      ].map(row => (
                        <div key={row.label} style={{ display: 'flex', gap: '0.75rem' }}>
                          <div style={{ paddingTop: 3, color: item.color, flexShrink: 0 }}>{row.icon}</div>
                          <div>
                            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: item.color, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.2rem' }}>{row.label}</div>
                            <div style={{ fontSize: '0.95rem', color: '#444458', lineHeight: 1.75 }}>{row.text}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── DOSING PROTOCOL ────────────────────────────────────────── */}
        <section id="dosing" style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)', scrollMarginTop: 80 }}>
          <div style={{
            display: 'inline-block', fontSize: '0.65rem', fontWeight: 800,
            letterSpacing: '0.16em', textTransform: 'uppercase',
            color: '#22d3ee', marginBottom: '1rem',
          }}>
            Research Dosing
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 900, letterSpacing: '-0.03em', color: '#0a0a14', marginBottom: '1rem' }}>
            TB-500 Dosing Protocol
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#555570', maxWidth: 680, lineHeight: 1.8, marginBottom: '3rem' }}>
            Dosing parameters derived from research literature and published clinical data. All figures reference research models only.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
            {[
              {
                phase: 'Loading Phase',
                duration: '4–6 Weeks',
                dose: '4–5mg',
                frequency: '2× per week',
                color: '#22d3ee',
                notes: [
                  'Acute injuries: use higher end (5mg 2× per week)',
                  'Chronic conditions: 4mg 2× per week is typically sufficient',
                  'SC (subcutaneous) or IM (intramuscular) injection — any site',
                  'Pinch injection site for SC; large muscle for IM',
                ],
              },
              {
                phase: 'Maintenance Phase',
                duration: 'Ongoing',
                dose: '2.5mg',
                frequency: '2× per week',
                color: '#34d399',
                notes: [
                  'Initiated after loading cycle is complete (week 6+)',
                  'Sufficient to sustain tissue repair benefits',
                  'Can reduce to 1× per week for general health maintenance',
                  'Optional 4-week break before repeating loading cycle',
                ],
              },
              {
                phase: 'Injury-Specific Adjustment',
                duration: 'Case-Dependent',
                dose: 'Variable',
                frequency: 'Protocol-Driven',
                color: '#d4a843',
                notes: [
                  'Severe acute injury (cardiac, spinal): full 5mg 2× from day 1',
                  'Chronic tendinopathy: loading cycle may need to repeat',
                  'When stacking with BPC-157: standard doses of each maintained',
                  'Injury severity and chronicity drive duration, not just dose',
                ],
              },
            ].map(item => (
              <div key={item.phase} style={{
                padding: '2rem',
                border: `1px solid ${item.color}25`,
                borderTop: `3px solid ${item.color}`,
                borderRadius: 18,
                background: '#f9f9fd',
              }}>
                <div style={{
                  display: 'inline-block',
                  fontSize: '0.65rem', fontWeight: 800, color: item.color,
                  textTransform: 'uppercase', letterSpacing: '0.14em',
                  marginBottom: '0.75rem',
                }}>{item.phase}</div>
                <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.5rem' }}>
                  <div>
                    <div style={{ fontSize: '2.2rem', fontWeight: 900, color: item.color, letterSpacing: '-0.04em', lineHeight: 1 }}>{item.dose}</div>
                    <div style={{ fontSize: '0.72rem', color: '#888', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{item.frequency}</div>
                  </div>
                  <div style={{ paddingLeft: '1.5rem', borderLeft: `2px solid ${item.color}20` }}>
                    <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0a0a14', lineHeight: 1 }}>{item.duration}</div>
                    <div style={{ fontSize: '0.72rem', color: '#888', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Duration</div>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {item.notes.map(note => (
                    <div key={note} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                      <CheckCircle size={13} style={{ color: item.color, flexShrink: 0, marginTop: '0.2em' }} />
                      <span style={{ fontSize: '0.87rem', color: '#555570', lineHeight: 1.6 }}>{note}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Injection note */}
          <div style={{
            padding: '1.5rem 2rem',
            background: 'rgba(34,211,238,0.04)',
            border: '1px solid rgba(34,211,238,0.15)',
            borderRadius: 14,
            display: 'flex',
            gap: '1rem',
            alignItems: 'flex-start',
          }}>
            <AlertCircle size={16} style={{ color: '#22d3ee', flexShrink: 0, marginTop: '0.15em' }} />
            <div>
              <div style={{ fontWeight: 800, color: '#0a0a14', fontSize: '0.95rem', marginBottom: '0.35rem' }}>Research Disclaimer</div>
              <div style={{ fontSize: '0.9rem', color: '#555570', lineHeight: 1.7 }}>
                TB-500 is sold strictly for laboratory and research use only. Dosing information is derived from published preclinical and research models. This is not medical advice. Consult a licensed physician before any research activity.
              </div>
            </div>
          </div>
        </section>

        {/* ── TB-500 vs BPC-157 COMPARISON ───────────────────────────── */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div style={{
            display: 'inline-block', fontSize: '0.65rem', fontWeight: 800,
            letterSpacing: '0.16em', textTransform: 'uppercase',
            color: '#22d3ee', marginBottom: '1rem',
          }}>
            Head-to-Head
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 900, letterSpacing: '-0.03em', color: '#0a0a14', marginBottom: '1rem' }}>
            TB-500 vs BPC-157
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#555570', maxWidth: 680, lineHeight: 1.8, marginBottom: '2.5rem' }}>
            Often compared, rarely understood. These compounds address fundamentally different biological axes — which is exactly why they produce an additive effect when combined.
          </p>

          <div style={{
            border: '1px solid rgba(0,0,0,0.08)',
            borderRadius: 18,
            overflow: 'hidden',
          }}>
            {/* Header row */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              background: 'linear-gradient(135deg, #0a1520 0%, #0f1c2a 100%)',
              padding: '1rem 1.5rem',
            }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 800, color: 'rgba(255,255,255,0.38)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Feature</div>
              <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#22d3ee', textTransform: 'uppercase', letterSpacing: '0.12em', textAlign: 'center' }}>TB-500</div>
              <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#34d399', textTransform: 'uppercase', letterSpacing: '0.12em', textAlign: 'center' }}>BPC-157</div>
            </div>
            {comparisonRows.map((row, i) => (
              <div key={row.feature} style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                padding: '1rem 1.5rem',
                background: i % 2 === 0 ? '#ffffff' : '#f9f9fd',
                borderTop: '1px solid rgba(0,0,0,0.05)',
                gap: '0.5rem',
              }}>
                <div style={{ fontSize: '0.87rem', fontWeight: 700, color: '#0a0a14' }}>{row.feature}</div>
                <div style={{ fontSize: '0.87rem', color: '#22d3ee', fontWeight: 600, textAlign: 'center' }}>{row.tb500}</div>
                <div style={{ fontSize: '0.87rem', color: '#34d399', fontWeight: 600, textAlign: 'center' }}>{row.bpc157}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── WOLVERINE STACK SECTION ─────────────────────────────────── */}
        <section style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div style={{
            display: 'inline-block', fontSize: '0.65rem', fontWeight: 800,
            letterSpacing: '0.16em', textTransform: 'uppercase',
            color: '#22d3ee', marginBottom: '1rem',
          }}>
            Advanced Protocol
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 900, letterSpacing: '-0.03em', color: '#0a0a14', marginBottom: '1rem' }}>
            TB-500 + BPC-157: The Wolverine Stack
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#555570', maxWidth: 720, lineHeight: 1.8, marginBottom: '3rem' }}>
            The research community has given a name to the combination of these two compounds: the Wolverine Stack — after the Marvel character whose defining ability is near-instantaneous tissue regeneration regardless of injury type or severity. The name is apt because the two compounds together cover essentially every documented axis of tissue repair.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
            {/* Why complementary */}
            <div>
              <div style={{ fontWeight: 900, color: '#0a0a14', fontSize: '1.2rem', marginBottom: '1.25rem' }}>Why They're Complementary</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  {
                    title: 'Different Mechanisms — Additive Effect',
                    detail: 'BPC-157 works via growth hormone receptor activation and direct VEGF upregulation. TB-500 works via G-actin binding and integrin-mediated angiogenesis. Because the mechanisms are distinct, both pathways activate simultaneously with no competition — the result is additive, not redundant.',
                    color: '#22d3ee',
                  },
                  {
                    title: 'Local + Systemic Coverage',
                    detail: 'BPC-157 covers the local injury site with precision. TB-500 covers the entire body simultaneously. Together, no tissue damage — whether pinpointed or diffuse — goes unaddressed.',
                    color: '#34d399',
                  },
                  {
                    title: 'Dual Angiogenesis Pathways',
                    detail: 'BPC-157 drives VEGF-mediated vessel formation at the injection site. TB-500 drives integrin-mediated angiogenesis systemically. Both pathways firing simultaneously produces a more robust vascular response than either compound alone.',
                    color: '#d4a843',
                  },
                ].map(item => (
                  <div key={item.title} style={{
                    padding: '1.25rem 1.5rem',
                    background: '#f9f9fd',
                    border: '1px solid rgba(0,0,0,0.07)',
                    borderLeft: `3px solid ${item.color}`,
                    borderRadius: '0 14px 14px 0',
                  }}>
                    <div style={{ fontWeight: 800, color: '#0a0a14', fontSize: '0.95rem', marginBottom: '0.4rem' }}>{item.title}</div>
                    <div style={{ fontSize: '0.88rem', color: '#555570', lineHeight: 1.7 }}>{item.detail}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stack dosing */}
            <div>
              <div style={{ fontWeight: 900, color: '#0a0a14', fontSize: '1.2rem', marginBottom: '1.25rem' }}>Combined Protocol Dosing</div>
              <div style={{
                background: 'linear-gradient(135deg, #0a1520 0%, #0f1c2a 100%)',
                borderRadius: 20,
                padding: '2rem',
                border: '1px solid rgba(34,211,238,0.15)',
                marginBottom: '1.5rem',
              }}>
                <div style={{ fontSize: '0.62rem', fontWeight: 800, color: '#22d3ee', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1.5rem' }}>
                  Wolverine Stack — Loading Protocol
                </div>
                {[
                  { compound: 'TB-500', dose: '4–5mg subQ or IM', frequency: '2× per week', color: '#22d3ee' },
                  { compound: 'BPC-157', dose: '500mcg subQ or IM', frequency: 'Daily or 5× per week', color: '#34d399' },
                ].map(item => (
                  <div key={item.compound} style={{
                    padding: '1.1rem 0',
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                  }}>
                    <div style={{ fontWeight: 800, color: item.color, fontSize: '1rem', marginBottom: '0.35rem' }}>{item.compound}</div>
                    <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.72)', fontWeight: 600, marginBottom: '0.15rem' }}>{item.dose}</div>
                    <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.38)', fontWeight: 600 }}>{item.frequency}</div>
                  </div>
                ))}
                <div style={{ paddingTop: '1.25rem', fontSize: '0.82rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.65 }}>
                  Standard doses of each compound are maintained when stacking — no dose reduction required as the mechanisms do not overlap or compete.
                </div>
              </div>

              <div style={{
                padding: '1.5rem',
                background: 'rgba(34,211,238,0.04)',
                border: '1px solid rgba(34,211,238,0.15)',
                borderRadius: 14,
              }}>
                <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#22d3ee', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.75rem' }}>
                  Also Available as Pre-Blended
                </div>
                <p style={{ fontSize: '0.9rem', color: '#444458', lineHeight: 1.7, marginBottom: '1rem' }}>
                  Apollo Peptide Sciences offers a pre-blended BPC-157 + TB-500 vial at 5mg each — the Wolverine Stack in a single injection.
                </p>
                <a
                  href={AFFILIATE_PRODUCT('bpc-157-tb-500-blend-10mg')}
                  target="_blank"
                  rel="sponsored noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    fontSize: '0.85rem', fontWeight: 700, color: '#22d3ee',
                    textDecoration: 'none',
                  }}
                >
                  View BPC-157 + TB-500 Blend <ExternalLink size={13} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ────────────────────────────────────────────────────── */}
        <section style={{ padding: '4.5rem 0 5rem' }}>
          <div style={{
            background: 'linear-gradient(135deg, #0a1520 0%, #0c2030 50%, #081818 100%)',
            borderRadius: 24,
            padding: '3.5rem',
            border: '1px solid rgba(34,211,238,0.18)',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Background glow */}
            <div style={{
              position: 'absolute', top: '-60px', right: '-60px',
              width: 360, height: 360, borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(34,211,238,0.08) 0%, transparent 65%)',
              pointerEvents: 'none',
            }} />

            <div style={{ position: 'relative', maxWidth: 620 }}>
              <div style={{
                display: 'inline-block', fontSize: '0.65rem', fontWeight: 800,
                letterSpacing: '0.16em', textTransform: 'uppercase',
                color: '#22d3ee', marginBottom: '1.25rem',
              }}>
                Apollo Peptide Sciences
              </div>
              <h2 style={{
                fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)',
                fontWeight: 900, letterSpacing: '-0.03em', color: '#ffffff',
                lineHeight: 1.12, marginBottom: '1.25rem',
              }}>
                Buy TB-500 — Verified{' '}
                <span style={{
                  background: 'linear-gradient(90deg, #22d3ee 0%, #34d399 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  &gt;98% Purity
                </span>
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: '2.5rem' }}>
                TB-500 10mg from Apollo Peptide Sciences. Third-party tested, certificate of analysis available. The systemic healing peptide used in 50+ published research studies — ready for your laboratory research protocol.
              </p>

              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: '2rem' }}>
                <a
                  href={AFFILIATE_PRODUCT('tb-500-10mg')}
                  target="_blank"
                  rel="sponsored noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    padding: '0.85rem 2rem',
                    background: 'linear-gradient(90deg, #22d3ee 0%, #0ea5e9 100%)',
                    color: '#0a0a14',
                    fontWeight: 800, fontSize: '0.95rem',
                    borderRadius: 10, textDecoration: 'none',
                    border: 'none', cursor: 'pointer',
                    boxShadow: '0 4px 24px rgba(34,211,238,0.35)',
                    letterSpacing: '-0.01em',
                  }}
                >
                  Shop TB-500 10mg <ExternalLink size={15} />
                </a>
                <a
                  href={AFFILIATE_PRODUCT('bpc-157-tb-500-blend-10mg')}
                  target="_blank"
                  rel="sponsored noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    padding: '0.85rem 1.75rem',
                    background: 'transparent',
                    color: '#22d3ee',
                    fontWeight: 700, fontSize: '0.95rem',
                    borderRadius: 10, textDecoration: 'none',
                    border: '1px solid rgba(34,211,238,0.35)',
                    cursor: 'pointer',
                  }}
                >
                  Wolverine Stack Blend <ArrowRight size={15} />
                </a>
              </div>

              {/* Trust indicators */}
              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                {[
                  { label: '>98% Purity', sub: 'Third-party tested' },
                  { label: 'COA Available', sub: 'Certificate of analysis' },
                  { label: 'Research Grade', sub: 'Lab use only' },
                ].map(item => (
                  <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <CheckCircle size={14} style={{ color: '#22d3ee' }} />
                    <div>
                      <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'rgba(255,255,255,0.82)' }}>{item.label}</div>
                      <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.35)', fontWeight: 500 }}>{item.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </div>

      <RelatedLinks currentPath="/tb-500-injury-recovery" />
    </div>
  )
}
