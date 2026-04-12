'use client'
import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, ExternalLink, CheckCircle } from 'lucide-react'
import ProductCard from '@/components/ProductCard'
import RelatedLinks from '@/components/RelatedLinks'
import { products, AFFILIATE_BASE } from '@/lib/products'

const catProducts = products.filter(p => p.categorySlug === 'skin-anti-aging')

export default function AntiAgingPage() {
  const [hoveredCompound, setHoveredCompound] = useState<string | null>(null)
  const [hoveredCta, setHoveredCta] = useState(false)

  return (
    <div style={{ background: '#ffffff', minHeight: '100vh', fontFamily: 'inherit' }}>

      {/* ── SPLIT HERO ── */}
      <div style={{
        background: 'linear-gradient(160deg, #0a0a14 0%, #1a1030 60%, #0f0820 100%)',
        borderBottom: '1px solid rgba(167,139,250,0.15)',
        padding: '0',
        overflow: 'hidden',
        position: 'relative',
      }}>
        {/* Ambient glow */}
        <div style={{
          position: 'absolute', top: '-80px', right: '20%',
          width: 500, height: 500,
          background: 'radial-gradient(circle, rgba(167,139,250,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 380px', minHeight: 560 }}>

          {/* Left: Headline + copy */}
          <div style={{ padding: '5rem 3rem 5rem 2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.14em',
              textTransform: 'uppercase', color: '#a78bfa',
              marginBottom: '1.5rem',
            }}>
              <span style={{ width: 24, height: 2, background: '#a78bfa', display: 'inline-block' }} />
              Skin &amp; Anti-Aging Peptide Science
            </div>

            <h1 style={{
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              fontWeight: 900,
              color: '#ffffff',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginBottom: '1.5rem',
            }}>
              GHK-Cu, Epithalon<br />
              &amp; SNAP-8:<br />
              <span style={{ color: '#a78bfa' }}>Peptides That Work<br />Below the Surface</span>
            </h1>

            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.62)', lineHeight: 1.75, maxWidth: 580, marginBottom: '2.25rem' }}>
              Most anti-aging products stop at the skin barrier. These three compounds operate at the
              gene, telomere, and neuromuscular junction level — addressing the biological root causes
              of skin aging with a specificity no topical can match.
            </p>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a
                href={AFFILIATE_BASE}
                target="_blank"
                rel="sponsored noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '0.8rem 1.75rem',
                  background: 'linear-gradient(135deg, #a78bfa, #7c3aed)',
                  color: '#fff', fontWeight: 700, fontSize: '0.92rem',
                  borderRadius: 10, textDecoration: 'none',
                  transition: 'opacity 0.15s, transform 0.15s',
                }}
                onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                Shop Anti-Aging Peptides <ExternalLink size={14} />
              </a>
              <Link
                href="/products"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '0.8rem 1.5rem',
                  border: '1px solid rgba(167,139,250,0.35)',
                  color: 'rgba(255,255,255,0.75)', fontWeight: 600, fontSize: '0.92rem',
                  borderRadius: 10, textDecoration: 'none',
                  transition: 'border-color 0.15s, color 0.15s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#a78bfa'; e.currentTarget.style.color = '#ffffff'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(167,139,250,0.35)'; e.currentTarget.style.color = 'rgba(255,255,255,0.75)'; }}
              >
                All Compounds <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Right: Tall stats column */}
          <div style={{
            borderLeft: '1px solid rgba(167,139,250,0.15)',
            display: 'flex', flexDirection: 'column',
            justifyContent: 'stretch',
          }}>
            {[
              { num: '4,000+', label: 'Genes Modulated', sub: 'GHK-Cu resets aging gene expression patterns toward younger tissue profiles', accent: '#a78bfa' },
              { num: '70%', label: 'Wrinkle Reduction', sub: 'Collagen I & III upregulation measured in fibroblast studies', accent: '#d4a843' },
              { num: '40+', label: 'Years of Data', sub: 'Epithalon studied since the 1980s — the longest peptide longevity dataset', accent: '#a78bfa' },
            ].map((s, i) => (
              <div
                key={s.num}
                style={{
                  flex: 1,
                  padding: '2rem 1.75rem',
                  borderBottom: i < 2 ? '1px solid rgba(167,139,250,0.12)' : 'none',
                  display: 'flex', flexDirection: 'column', justifyContent: 'center',
                  background: i === 1 ? 'rgba(167,139,250,0.04)' : 'transparent',
                }}
              >
                <div style={{
                  fontSize: 'clamp(2.2rem, 4vw, 3rem)',
                  fontWeight: 900,
                  color: s.accent,
                  lineHeight: 1,
                  letterSpacing: '-0.03em',
                  marginBottom: '0.4rem',
                }}>
                  {s.num}
                </div>
                <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                  {s.label}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.55 }}>
                  {s.sub}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ── EDITORIAL LABEL ── */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '3.5rem 2rem 0' }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 16,
          marginBottom: '0.5rem',
        }}>
          <div style={{ flex: 1, height: 1, background: 'rgba(0,0,0,0.08)' }} />
          <span style={{
            fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: '#a78bfa',
          }}>
            Compound Spotlight
          </span>
          <div style={{ flex: 1, height: 1, background: 'rgba(0,0,0,0.08)' }} />
        </div>
        <p style={{ textAlign: 'center', color: '#9090a8', fontSize: '0.88rem', marginBottom: '0' }}>
          Three mechanisms. Three targets. One comprehensive anti-aging protocol.
        </p>
      </div>

      {/* ── COMPOUND SPOTLIGHT BLOCKS ── */}

      {/* GHK-Cu Block — white bg, left-aligned, large purple number left edge */}
      <div style={{ borderTop: '4px solid #a78bfa', margin: '2.5rem 0 0', background: '#ffffff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '4rem 2rem' }}>
          <div style={{
            display: 'grid', gridTemplateColumns: '220px 1fr',
            gap: '3rem', alignItems: 'start',
            borderLeft: '3px solid #a78bfa', paddingLeft: '2.5rem',
          }}>

            {/* Left: Giant number + compound badge */}
            <div>
              <div style={{
                fontSize: 'clamp(3.5rem, 7vw, 5.5rem)',
                fontWeight: 900,
                color: '#a78bfa',
                lineHeight: 1,
                letterSpacing: '-0.04em',
                marginBottom: '0.5rem',
              }}>
                4,000+
              </div>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#9090a8', marginBottom: '1.25rem' }}>
                Genes Modulated
              </div>
              <div style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #a78bfa, #7c3aed)',
                color: '#fff',
                fontSize: '0.78rem', fontWeight: 800,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                padding: '0.4rem 0.9rem', borderRadius: 6,
                marginBottom: '1.5rem',
              }}>
                GHK-Cu
              </div>
              <Link
                href="/products/ghk-cu-50mg"
                style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  fontSize: '0.82rem', fontWeight: 700,
                  color: '#a78bfa', textDecoration: 'none',
                  transition: 'gap 0.15s',
                }}
                onMouseEnter={e => { (e.currentTarget.style.gap = '10px') }}
                onMouseLeave={e => { (e.currentTarget.style.gap = '6px') }}
              >
                View Compound <ArrowRight size={14} />
              </Link>
            </div>

            {/* Right: Science content */}
            <div>
              <h2 style={{
                fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
                fontWeight: 900, color: '#0a0a14',
                lineHeight: 1.2, marginBottom: '1.25rem',
                letterSpacing: '-0.02em',
              }}>
                GHK-Cu: The Peptide That Reprograms<br />
                <span style={{ color: '#a78bfa' }}>4,000 Aging Genes</span>
              </h2>
              <p style={{ fontSize: '0.97rem', color: '#444458', lineHeight: 1.78, marginBottom: '1rem' }}>
                GHK-Cu (glycyl-L-histidyl-L-lysine copper complex) is not merely a collagen booster. Research
                by Dr. Loren Pickart and the University of Washington genomics team identified that GHK-Cu
                modulates the expression of over 4,000 human genes — resetting patterns in senescent skin
                toward those of young, proliferative tissue. This is not topical cosmesis; it is
                gene-level biological reprogramming.
              </p>
              <p style={{ fontSize: '0.97rem', color: '#444458', lineHeight: 1.78, marginBottom: '1rem' }}>
                The copper complex activates fibroblasts to synthesize collagen types I and III alongside
                elastin and glycosaminoglycans. It simultaneously upregulates antioxidant enzymes (superoxide
                dismutase, catalase) while downregulating inflammatory cytokines IL-6 and TNF-α. The net
                effect is a dual anabolic-anti-inflammatory profile that no single-ingredient topical can replicate.
              </p>
              <p style={{ fontSize: '0.97rem', color: '#444458', lineHeight: 1.78 }}>
                In wound-healing models, GHK-Cu accelerated re-epithelialization by 67% and increased
                collagen deposition density by 70% compared to untreated controls. For researchers studying
                dermal matrix restoration, this peptide remains the most broadly documented tool available.
              </p>

              <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1.75rem', flexWrap: 'wrap' }}>
                {['Collagen I & III synthesis', 'Fibroblast proliferation', 'Antioxidant enzyme upregulation', 'Anti-inflammatory gene modulation'].map(pt => (
                  <div key={pt} style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: '0.83rem', color: '#555570' }}>
                    <CheckCircle size={14} color="#a78bfa" strokeWidth={2.5} />
                    {pt}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Epithalon Block — purple-tinted bg, right-aligned, number on right edge */}
      <div style={{ background: '#f8f0ff', borderTop: '1px solid rgba(167,139,250,0.2)', borderBottom: '1px solid rgba(167,139,250,0.2)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '4rem 2rem' }}>
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 220px',
            gap: '3rem', alignItems: 'start',
            borderRight: '3px solid #d4a843', paddingRight: '2.5rem',
          }}>

            {/* Left: Science content */}
            <div>
              <div style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #d4a843, #b8912e)',
                color: '#000',
                fontSize: '0.78rem', fontWeight: 800,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                padding: '0.4rem 0.9rem', borderRadius: 6,
                marginBottom: '1.25rem',
              }}>
                Epithalon
              </div>
              <h2 style={{
                fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
                fontWeight: 900, color: '#0a0a14',
                lineHeight: 1.2, marginBottom: '1.25rem',
                letterSpacing: '-0.02em',
              }}>
                Epithalon: Telomerase Activation<br />
                <span style={{ color: '#7c3aed' }}>and Telomere Elongation</span>
              </h2>
              <p style={{ fontSize: '0.97rem', color: '#444458', lineHeight: 1.78, marginBottom: '1rem' }}>
                Epithalon (Ala-Glu-Asp-Gly) is a synthetic tetrapeptide developed by the St. Petersburg
                Institute of Bioregulation and Gerontology, with a research history spanning over 40 years.
                It is the only peptide with published human cell data confirming telomerase (hTERT) activation
                and measurable telomere elongation in somatic cells — directly addressing one of the
                hallmarks of cellular aging as defined by López-Otín et al. (2013).
              </p>
              <p style={{ fontSize: '0.97rem', color: '#444458', lineHeight: 1.78, marginBottom: '1rem' }}>
                Telomeres are the protective end-caps of chromosomes. Each cell division shortens them;
                when they reach critical length, the cell enters senescence or apoptosis. Epithalon's
                activation of telomerase provides the enzymatic machinery to maintain — and in some
                models, extend — telomere length, delaying the onset of replicative senescence.
              </p>
              <p style={{ fontSize: '0.97rem', color: '#444458', lineHeight: 1.78 }}>
                Beyond telomeres, Epithalon normalizes pineal gland melatonin output (which declines
                sharply after age 40), restores circadian rhythm integrity, and has demonstrated
                antioxidant activity in skin fibroblasts. For researchers focused on foundational
                longevity mechanisms, Epithalon is the reference compound.
              </p>

              <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1.75rem', flexWrap: 'wrap' }}>
                {['Telomerase (hTERT) activation', 'Telomere length maintenance', 'Pineal melatonin normalization', '40+ year longevity dataset'].map(pt => (
                  <div key={pt} style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: '0.83rem', color: '#555570' }}>
                    <CheckCircle size={14} color="#7c3aed" strokeWidth={2.5} />
                    {pt}
                  </div>
                ))}
              </div>

              <Link
                href="/products/epitalon-50mg"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  fontSize: '0.82rem', fontWeight: 700,
                  color: '#7c3aed', textDecoration: 'none',
                  marginTop: '1.5rem',
                  transition: 'gap 0.15s',
                }}
                onMouseEnter={e => { (e.currentTarget.style.gap = '10px') }}
                onMouseLeave={e => { (e.currentTarget.style.gap = '6px') }}
              >
                View Compound <ArrowRight size={14} />
              </Link>
            </div>

            {/* Right: Giant number */}
            <div style={{ textAlign: 'right' }}>
              <div style={{
                fontSize: 'clamp(3rem, 6vw, 5rem)',
                fontWeight: 900,
                color: '#7c3aed',
                lineHeight: 1,
                letterSpacing: '-0.04em',
                marginBottom: '0.5rem',
              }}>
                40+
              </div>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#9090a8', textAlign: 'right' }}>
                Years of<br />Research Data
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* SNAP-8 Block — white bg, centered layout, stat centered above text */}
      <div style={{ background: '#ffffff', borderTop: '4px solid #a78bfa' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '4rem 2rem' }}>

          {/* Centered giant stat */}
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div style={{
              fontSize: 'clamp(4rem, 8vw, 7rem)',
              fontWeight: 900,
              color: '#a78bfa',
              lineHeight: 1,
              letterSpacing: '-0.05em',
            }}>
              63%
            </div>
            <div style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.14em', color: '#9090a8', marginTop: '0.4rem' }}>
              Wrinkle Volume Reduction &nbsp;·&nbsp; In Vitro Studies
            </div>
          </div>

          {/* Centered content block */}
          <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
            <div style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #a78bfa, #7c3aed)',
              color: '#fff',
              fontSize: '0.78rem', fontWeight: 800,
              letterSpacing: '0.12em', textTransform: 'uppercase',
              padding: '0.4rem 0.9rem', borderRadius: 6,
              marginBottom: '1.25rem',
            }}>
              SNAP-8
            </div>
            <h2 style={{
              fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
              fontWeight: 900, color: '#0a0a14',
              lineHeight: 1.2, marginBottom: '1.25rem',
              letterSpacing: '-0.02em',
            }}>
              SNAP-8: Targeting Expression Wrinkles<br />
              <span style={{ color: '#a78bfa' }}>at the SNARE Complex</span>
            </h2>
            <p style={{ fontSize: '0.97rem', color: '#444458', lineHeight: 1.78, marginBottom: '1rem', textAlign: 'left' }}>
              SNAP-8 (acetyl octapeptide-3) is an eight-amino-acid analog of the N-terminal segment of
              SNAP-25 — a synaptosomal-associated protein critical to the SNARE complex. The SNARE complex
              governs vesicular fusion at neuromuscular junctions, controlling acetylcholine release and
              the resulting muscle contraction intensity responsible for expression wrinkle formation.
            </p>
            <p style={{ fontSize: '0.97rem', color: '#444458', lineHeight: 1.78, marginBottom: '1rem', textAlign: 'left' }}>
              By competing with endogenous SNAP-25 for SNARE complex integration, SNAP-8 modulates
              neurotransmitter exocytosis without receptor blockade. This is a mechanistically distinct
              pathway from botulinum toxin and does not cause paralysis — it reduces contraction amplitude,
              smoothing dynamic wrinkle formation without immobilizing the target tissue.
            </p>
            <p style={{ fontSize: '0.97rem', color: '#444458', lineHeight: 1.78, textAlign: 'left' }}>
              In vitro models showed up to 63% reduction in wrinkle volume and measurable changes in
              acetylcholine release at the neurodermal interface. SNAP-8 represents a peptide-based
              approach to a problem previously addressable only through neurotoxin injection.
            </p>

            <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              {['SNARE complex competition', 'Reduced ACh exocytosis', 'Expression wrinkle modulation', 'Non-paralytic mechanism'].map(pt => (
                <div key={pt} style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: '0.83rem', color: '#555570' }}>
                  <CheckCircle size={14} color="#a78bfa" strokeWidth={2.5} />
                  {pt}
                </div>
              ))}
            </div>

            <Link
              href="/products/snap-8-10mg"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                fontSize: '0.82rem', fontWeight: 700,
                color: '#a78bfa', textDecoration: 'none',
                marginTop: '1.5rem',
                transition: 'gap 0.15s',
              }}
              onMouseEnter={e => { (e.currentTarget.style.gap = '10px') }}
              onMouseLeave={e => { (e.currentTarget.style.gap = '6px') }}
            >
              View Compound <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      {/* ── WHICH PEPTIDE FOR YOUR GOAL? ── */}
      <div style={{ background: '#f7f8fc', borderTop: '1px solid rgba(0,0,0,0.07)', borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '4rem 2rem' }}>

          <div style={{ textAlign: 'center', marginBottom: '2.75rem' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.14em',
              textTransform: 'uppercase', color: '#a78bfa',
              marginBottom: '0.75rem',
            }}>
              <span style={{ width: 20, height: 2, background: '#a78bfa', display: 'inline-block' }} />
              Compound Selector
              <span style={{ width: 20, height: 2, background: '#a78bfa', display: 'inline-block' }} />
            </div>
            <h2 style={{
              fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)',
              fontWeight: 900, color: '#0a0a14',
              lineHeight: 1.2, letterSpacing: '-0.02em',
            }}>
              Which Peptide For Your Goal?
            </h2>
            <p style={{ color: '#9090a8', fontSize: '0.9rem', marginTop: '0.6rem' }}>
              Each compound addresses a distinct biological target. Many researchers run all three.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {[
              {
                slug: 'ghk-cu-50mg',
                name: 'GHK-Cu',
                badge: '#a78bfa',
                badgeText: '#fff',
                target: 'Dermal Matrix & Gene Expression',
                strength: 'Broadest biological activity — 4,000+ genes, collagen, antioxidant enzymes',
                idealFor: ['Matrix restoration', 'Fibroblast activation', 'Gene-level skin reset'],
                href: '/products/ghk-cu-50mg',
                borderColor: '#a78bfa',
              },
              {
                slug: 'epitalon-50mg',
                name: 'Epithalon',
                badge: '#d4a843',
                badgeText: '#000',
                target: 'Telomeres & Cellular Longevity',
                strength: 'Only peptide with published telomere elongation data in human somatic cells',
                idealFor: ['Telomere maintenance', 'Replicative senescence delay', 'Pineal / circadian support'],
                href: '/products/epitalon-50mg',
                borderColor: '#d4a843',
              },
              {
                slug: 'snap-8-10mg',
                name: 'SNAP-8',
                badge: '#7c3aed',
                badgeText: '#fff',
                target: 'Neuromuscular Junction / Expression Wrinkles',
                strength: 'Modulates SNARE complex to reduce wrinkle-forming muscle contraction amplitude',
                idealFor: ['Forehead / glabellar wrinkles', 'Non-paralytic mechanism', 'SNARE pathway research'],
                href: '/products/snap-8-10mg',
                borderColor: '#7c3aed',
              },
            ].map(c => (
              <div
                key={c.slug}
                style={{
                  background: '#ffffff',
                  border: '1px solid rgba(0,0,0,0.08)',
                  borderTop: `3px solid ${c.borderColor}`,
                  borderRadius: 16,
                  padding: '2rem',
                  display: 'flex', flexDirection: 'column',
                  transition: 'box-shadow 0.2s, transform 0.2s',
                  cursor: 'default',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = `0 8px 32px rgba(0,0,0,0.1)`;
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  setHoveredCompound(c.slug);
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                  setHoveredCompound(null);
                }}
              >
                <div style={{
                  display: 'inline-block',
                  background: c.badge,
                  color: c.badgeText,
                  fontSize: '0.75rem', fontWeight: 800,
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  padding: '0.35rem 0.85rem', borderRadius: 5,
                  marginBottom: '1rem', alignSelf: 'flex-start',
                }}>
                  {c.name}
                </div>

                <div style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#9090a8', marginBottom: '0.35rem' }}>
                  Primary Target
                </div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0a0a14', marginBottom: '1rem', lineHeight: 1.3 }}>
                  {c.target}
                </div>

                <div style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#9090a8', marginBottom: '0.35rem' }}>
                  Unique Strength
                </div>
                <p style={{ fontSize: '0.88rem', color: '#555570', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  {c.strength}
                </p>

                <div style={{ marginBottom: '1.5rem' }}>
                  {c.idealFor.map(pt => (
                    <div key={pt} style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: '0.82rem', color: '#444458', marginBottom: '0.4rem' }}>
                      <CheckCircle size={13} color={c.borderColor} strokeWidth={2.5} />
                      {pt}
                    </div>
                  ))}
                </div>

                <Link
                  href={c.href}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    marginTop: 'auto',
                    fontSize: '0.84rem', fontWeight: 700,
                    color: c.borderColor, textDecoration: 'none',
                    transition: 'gap 0.15s',
                  }}
                  onMouseEnter={e => { (e.currentTarget.style.gap = '10px') }}
                  onMouseLeave={e => { (e.currentTarget.style.gap = '6px') }}
                >
                  View Compound <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── PRODUCT CARDS ── */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '4rem 2rem' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.14em',
              textTransform: 'uppercase', color: '#a78bfa',
              marginBottom: '0.5rem',
            }}>
              <span style={{ width: 18, height: 2, background: '#a78bfa', display: 'inline-block' }} />
              Anti-Aging Catalog
            </div>
            <h2 style={{
              fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)',
              fontWeight: 900, color: '#0a0a14',
              lineHeight: 1.15, letterSpacing: '-0.02em',
            }}>
              Shop Anti-Aging Peptides
            </h2>
          </div>
          <a
            href={AFFILIATE_BASE}
            target="_blank"
            rel="sponsored noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 7,
              padding: '0.65rem 1.2rem',
              background: 'linear-gradient(135deg, #a78bfa, #7c3aed)',
              color: '#fff', fontWeight: 700, fontSize: '0.88rem',
              borderRadius: 9, textDecoration: 'none',
              transition: 'opacity 0.15s',
            }}
            onMouseEnter={e => { e.currentTarget.style.opacity = '0.85'; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = '1'; }}
          >
            Shop Now <ExternalLink size={13} />
          </a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1.25rem' }}>
          {catProducts.map(p => <ProductCard key={p.slug} product={p} />)}
        </div>
      </div>

      {/* ── CTA ── */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem 5rem' }}>
        <div style={{
          background: 'linear-gradient(135deg, #5b21b6 0%, #7c3aed 40%, #a78bfa 100%)',
          borderRadius: 20,
          padding: '4rem 3rem',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Decorative blobs */}
          <div style={{
            position: 'absolute', top: '-60px', left: '-60px',
            width: 260, height: 260,
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '50%', pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', bottom: '-80px', right: '-40px',
            width: 320, height: 320,
            background: 'rgba(255,255,255,0.04)',
            borderRadius: '50%', pointerEvents: 'none',
          }} />

          <div style={{ position: 'relative' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.14em',
              textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)',
              marginBottom: '1rem',
            }}>
              Third-Party Tested &nbsp;·&nbsp; Certificate of Analysis Included
            </div>
            <h2 style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
              fontWeight: 900, color: '#ffffff',
              lineHeight: 1.15, letterSpacing: '-0.02em',
              marginBottom: '0.9rem',
            }}>
              Begin Your Anti-Aging Research
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2.25rem', fontSize: '0.95rem', lineHeight: 1.65, maxWidth: 520, margin: '0 auto 2.25rem' }}>
              Source GHK-Cu, Epithalon, and SNAP-8 from our supplier — the most studied
              anti-aging peptides, batch-tested for identity and purity, with full documentation.
            </p>
            <a
              href={AFFILIATE_BASE}
              target="_blank"
              rel="sponsored noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 9,
                padding: '1rem 2.5rem',
                background: '#ffffff',
                color: '#5b21b6', fontWeight: 800, fontSize: '0.97rem',
                borderRadius: 12, textDecoration: 'none',
                transition: 'opacity 0.15s, transform 0.15s',
                boxShadow: '0 4px 24px rgba(0,0,0,0.18)',
              }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '0.92'; e.currentTarget.style.transform = 'translateY(-2px)'; setHoveredCta(true); }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; setHoveredCta(false); }}
            >
              Shop Now <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>

      <section style={{ padding: '1.5rem 2rem 0' }}>
        <RelatedLinks currentPath="/categories/skin-anti-aging" />
      </section>

    </div>
  )
}
