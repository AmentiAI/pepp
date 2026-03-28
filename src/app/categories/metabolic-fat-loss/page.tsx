'use client'
import { useState } from 'react'
import Link from 'next/link'
import { ExternalLink, ArrowRight } from 'lucide-react'
import ProductCard from '@/components/ProductCard'
import RelatedLinks from '@/components/RelatedLinks'
import { products, AFFILIATE_BASE } from '@/lib/products'

const catProducts = products.filter(p => p.categorySlug === 'metabolic-fat-loss')

const mechanisms = [
  {
    num: '01',
    name: 'Appetite Suppression',
    detail:
      'GLP-1 receptor activation in hypothalamic nuclei reduces NPY/AgRP signaling and increases POMC/CART activity — the central appetite control switch that governs caloric intake at the neurological level.',
  },
  {
    num: '02',
    name: 'Gastric Emptying Delay',
    detail:
      'GLP-1 and amylin receptor activation slows gastric emptying via vagal signaling, extending post-meal satiety for hours and dramatically reducing spontaneous caloric intake without hunger.',
  },
  {
    num: '03',
    name: 'Thermogenic Activation',
    detail:
      'Glucagon receptor co-agonism — unique to Retatrutide — drives UCP1-mediated thermogenesis in brown adipose tissue, actively burning calories rather than simply reducing intake.',
  },
  {
    num: '04',
    name: 'Adipose Tissue Remodeling',
    detail:
      'GIP receptor activation in adipocytes combined with dual incretin signaling drives preferential visceral fat reduction while preserving lean mass — the optimal body composition shift.',
  },
]

const compounds = [
  {
    name: 'Semaglutide',
    receptors: 'GLP-1',
    dose: '2.4 mg/week',
    maxLoss: '~15%',
    color: '#3b82f6',
    bgColor: 'rgba(59,130,246,0.06)',
    borderColor: 'rgba(59,130,246,0.25)',
    link: '/products/semaglutide-5mg',
    badge: 'First Generation',
    badgeColor: '#3b82f6',
  },
  {
    name: 'Tirzepatide',
    receptors: 'GLP-1 + GIP',
    dose: '15 mg/week',
    maxLoss: '20.9%',
    color: '#8b5cf6',
    bgColor: 'rgba(139,92,246,0.06)',
    borderColor: 'rgba(139,92,246,0.25)',
    link: '/products/tirzepatide-10mg',
    badge: 'Second Generation',
    badgeColor: '#8b5cf6',
  },
  {
    name: 'Retatrutide',
    receptors: 'GLP-1 + GIP + Glucagon',
    dose: '12 mg/week',
    maxLoss: '24.2%',
    color: '#d4a843',
    bgColor: 'rgba(212,168,67,0.06)',
    borderColor: 'rgba(212,168,67,0.35)',
    link: '/products/glp-3r-10mg',
    badge: 'Third Generation — Record Holder',
    badgeColor: '#d4a843',
  },
]

const barData = [
  { name: 'Semaglutide', receptors: 'GLP-1', pct: '~15%', barHeight: 120, color: '#3b82f6', labelColor: '#3b82f6' },
  { name: 'Tirzepatide', receptors: 'GLP-1 + GIP', pct: '20.9%', barHeight: 168, color: '#8b5cf6', labelColor: '#8b5cf6' },
  { name: 'Retatrutide', receptors: 'GLP-1 + GIP + Glucagon', pct: '24.2%', barHeight: 192, color: '#d4a843', labelColor: '#d4a843' },
]

export default function FatLossPage() {
  const [hoveredBar, setHoveredBar] = useState<number | null>(null)
  const [hoveredCompound, setHoveredCompound] = useState<number | null>(null)
  const [hoveredMech, setHoveredMech] = useState<number | null>(null)

  return (
    <div style={{ background: '#ffffff', minHeight: '100vh', fontFamily: 'inherit' }}>

      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <div
        style={{
          background: 'linear-gradient(180deg, #fffbf0 0%, #ffffff 100%)',
          borderBottom: '1px solid rgba(0,0,0,0.07)',
          padding: '5rem 2rem 4rem',
        }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ maxWidth: 780 }}>
            <div className="section-label">Metabolic Compounds — Clinical Data</div>
            <h1
              className="heading-xl"
              style={{ color: '#0a0a14', marginBottom: '1rem' }}
            >
              Retatrutide, Tirzepatide &<br />
              <span className="gold-text">Semaglutide: The Evidence</span>
            </h1>
            <p
              style={{
                fontSize: '1.1rem',
                color: '#555570',
                lineHeight: 1.7,
                marginBottom: '2rem',
                maxWidth: 680,
              }}
            >
              Three generations of GLP-1 based metabolic peptides — each setting a new clinical record. The
              latest triple receptor co-agonist has produced results never before documented in peer-reviewed
              obesity pharmacology research.
            </p>

            {/* BREAKING CITATION BOX — replaces normal CTA */}
            <div
              style={{
                background: 'rgba(212,168,67,0.06)',
                border: '1.5px solid rgba(212,168,67,0.35)',
                borderRadius: 14,
                padding: '1.5rem 1.75rem',
                marginBottom: '2rem',
                maxWidth: 660,
                position: 'relative',
              }}
            >
              {/* Badge */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '0.85rem' }}>
                <span
                  style={{
                    background: '#d4a843',
                    color: '#000',
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    padding: '3px 10px',
                    borderRadius: 4,
                  }}
                >
                  NEJM 2023
                </span>
                <span
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#d4a843',
                  }}
                >
                  Peer-Reviewed Phase 2 Trial
                </span>
              </div>

              <p
                style={{
                  fontSize: '1rem',
                  color: '#1a1a2e',
                  lineHeight: 1.65,
                  fontStyle: 'italic',
                  margin: '0 0 0.75rem',
                }}
              >
                &ldquo;Retatrutide produced{' '}
                <strong style={{ color: '#d4a843', fontStyle: 'normal' }}>24.2% total body weight reduction</strong>{' '}
                — the highest result ever documented for a once-weekly metabolic compound.&rdquo;
              </p>

              <p
                style={{
                  fontSize: '0.8rem',
                  color: '#9090a8',
                  margin: 0,
                  letterSpacing: '0.02em',
                }}
              >
                Jastreboff AM et al. <em>New England Journal of Medicine</em>, 2023;389:514–526. Phase 2
                randomized, double-blind, placebo-controlled trial. 48-week follow-up, highest dose cohort.
              </p>
            </div>

            {/* CTA buttons below citation box */}
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a
                href={AFFILIATE_BASE}
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="btn-primary"
              >
                Shop GLP-1 Peptides <ExternalLink size={14} />
              </a>
              <Link href="/products" className="btn-secondary">
                Browse Full Catalog <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ─── FEATURED STAT BLOCK ──────────────────────────────────────────── */}
      <div
        style={{
          background: 'linear-gradient(135deg, rgba(212,168,67,0.07) 0%, rgba(245,158,11,0.04) 100%)',
          borderBottom: '1px solid rgba(212,168,67,0.15)',
          padding: '5rem 2rem',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div
            style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#d4a843',
              marginBottom: '1.25rem',
            }}
          >
            Primary Endpoint — Phase 2 RCT
          </div>

          {/* The number */}
          <div
            style={{
              fontSize: 'clamp(4rem, 12vw, 6.5rem)',
              fontWeight: 900,
              color: '#d4a843',
              lineHeight: 1,
              letterSpacing: '-0.03em',
              marginBottom: '1rem',
              fontVariantNumeric: 'tabular-nums',
            }}
          >
            24.2<span style={{ fontSize: '0.55em', fontWeight: 800, color: '#f59e0b' }}>%</span>
          </div>

          <p
            style={{
              fontSize: '1.2rem',
              color: '#1a1a2e',
              fontWeight: 600,
              marginBottom: '0.6rem',
              lineHeight: 1.4,
            }}
          >
            Total body weight reduction &mdash; Retatrutide Phase 2 Trial, <em>NEJM</em> 2023
          </p>

          <p
            style={{
              fontSize: '0.92rem',
              color: '#9090a8',
              margin: '0 auto',
              maxWidth: 460,
              padding: '0.6rem 1.25rem',
              background: 'rgba(255,255,255,0.7)',
              borderRadius: 8,
              display: 'inline-block',
              border: '1px solid rgba(0,0,0,0.06)',
            }}
          >
            Previous record: <strong style={{ color: '#8b5cf6' }}>20.9%</strong> (Tirzepatide
            SURMOUNT-1, 2022)
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>

        {/* ─── GLP-1 EVOLUTION BAR CHART ──────────────────────────────────── */}
        <section style={{ padding: '5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="section-label">Clinical Efficacy Comparison</div>
            <h2
              className="heading-lg"
              style={{ color: '#0a0a14', marginBottom: '0.5rem' }}
            >
              The Incretin Evolution: Each Generation Set a New Record
            </h2>
            <p style={{ color: '#888898', fontSize: '1rem', maxWidth: 560, margin: '0 auto' }}>
              Maximum documented percent total body weight loss from pivotal clinical trials, highest
              dose cohort
            </p>
          </div>

          {/* Bar chart */}
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
              gap: 'clamp(2rem, 6vw, 6rem)',
              padding: '2rem 1rem 0',
              borderBottom: '2px solid rgba(0,0,0,0.10)',
              marginBottom: '0',
            }}
          >
            {barData.map((bar, i) => (
              <div
                key={bar.name}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'default' }}
                onMouseEnter={() => setHoveredBar(i)}
                onMouseLeave={() => setHoveredBar(null)}
              >
                {/* Percentage label above bar */}
                <div
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 900,
                    color: bar.color,
                    marginBottom: '0.5rem',
                    letterSpacing: '-0.02em',
                    transition: 'transform 0.2s',
                    transform: hoveredBar === i ? 'scale(1.1)' : 'scale(1)',
                  }}
                >
                  {bar.pct}
                </div>

                {/* The bar */}
                <div
                  style={{
                    width: 'clamp(70px, 10vw, 110px)',
                    height: bar.barHeight,
                    background:
                      hoveredBar === i
                        ? bar.color
                        : `linear-gradient(180deg, ${bar.color}dd 0%, ${bar.color}88 100%)`,
                    borderRadius: '8px 8px 0 0',
                    transition: 'background 0.25s, transform 0.2s',
                    transform: hoveredBar === i ? 'scaleY(1.02)' : 'scaleY(1)',
                    transformOrigin: 'bottom',
                    border: `1.5px solid ${bar.color}55`,
                    borderBottom: 'none',
                    position: 'relative',
                  }}
                >
                  {/* Shine stripe */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 8,
                      left: 8,
                      width: 6,
                      height: '40%',
                      background: 'rgba(255,255,255,0.18)',
                      borderRadius: 4,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Bar labels below axis line */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 'clamp(2rem, 6vw, 6rem)',
              padding: '1.25rem 1rem 0',
            }}
          >
            {barData.map((bar, i) => (
              <div
                key={bar.name}
                style={{
                  width: 'clamp(70px, 10vw, 110px)',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    fontWeight: 800,
                    fontSize: '0.92rem',
                    color: bar.labelColor,
                    marginBottom: '0.25rem',
                  }}
                >
                  {bar.name}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#9090a8', lineHeight: 1.4 }}>
                  {bar.receptors}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── 4 MECHANISMS 2×2 ───────────────────────────────────────────── */}
        <section style={{ padding: '5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label">Mechanism Deep Dive</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '0.5rem' }}>
            How Fat Loss Peptides Work
          </h2>
          <p style={{ color: '#888898', marginBottom: '3rem', fontSize: '1rem', maxWidth: 560 }}>
            Four independent mechanisms working simultaneously to drive metabolic transformation at
            the cellular level
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 0,
              border: '1px solid rgba(0,0,0,0.08)',
              borderRadius: 16,
              overflow: 'hidden',
            }}
          >
            {mechanisms.map((m, i) => {
              const isBottom = i >= 2
              const isRight = i % 2 === 1
              return (
                <div
                  key={m.name}
                  onMouseEnter={() => setHoveredMech(i)}
                  onMouseLeave={() => setHoveredMech(null)}
                  style={{
                    padding: '2.25rem 2rem',
                    background: hoveredMech === i ? 'rgba(212,168,67,0.04)' : '#ffffff',
                    borderRight: !isRight ? '1px solid rgba(0,0,0,0.08)' : 'none',
                    borderTop: isBottom ? '1px solid rgba(0,0,0,0.08)' : 'none',
                    transition: 'background 0.2s',
                    cursor: 'default',
                  }}
                >
                  {/* Numbered circle */}
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: '50%',
                      background:
                        hoveredMech === i
                          ? 'rgba(212,168,67,0.18)'
                          : 'rgba(212,168,67,0.08)',
                      border: `2px solid rgba(212,168,67,${hoveredMech === i ? '0.5' : '0.2'})`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 900,
                      fontSize: '0.85rem',
                      color: '#d4a843',
                      letterSpacing: '0.04em',
                      marginBottom: '1.1rem',
                      transition: 'background 0.2s, border-color 0.2s',
                      flexShrink: 0,
                    }}
                  >
                    {m.num}
                  </div>

                  <h3
                    style={{
                      fontWeight: 800,
                      color: '#0a0a14',
                      fontSize: '1rem',
                      marginBottom: '0.6rem',
                    }}
                  >
                    {m.name}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#555570', lineHeight: 1.65, margin: 0 }}>
                    {m.detail}
                  </p>
                </div>
              )
            })}
          </div>
        </section>

        {/* ─── GLP-1 COMPOUND QUICK-REFERENCE CARDS ───────────────────────── */}
        <section style={{ padding: '5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="section-label">Compound Reference</div>
          <h2 className="heading-lg" style={{ color: '#0a0a14', marginBottom: '0.5rem' }}>
            GLP-1 Compound Comparison
          </h2>
          <p style={{ color: '#888898', marginBottom: '2.5rem', fontSize: '1rem', maxWidth: 560 }}>
            Quick-reference overview of receptor targeting, dosing protocol, and peak efficacy data
            for each generation
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {compounds.map((c, i) => (
              <div
                key={c.name}
                onMouseEnter={() => setHoveredCompound(i)}
                onMouseLeave={() => setHoveredCompound(null)}
                style={{
                  background: hoveredCompound === i ? c.bgColor : '#fafafa',
                  border: `1.5px solid ${hoveredCompound === i ? c.borderColor : 'rgba(0,0,0,0.08)'}`,
                  borderRadius: 16,
                  padding: '1.75rem',
                  transition: 'background 0.2s, border-color 0.2s',
                  cursor: 'default',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 0,
                }}
              >
                {/* Generation badge */}
                <div style={{ marginBottom: '1rem' }}>
                  <span
                    style={{
                      fontSize: '0.7rem',
                      fontWeight: 800,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: c.badgeColor,
                      background: `${c.color}14`,
                      border: `1px solid ${c.color}30`,
                      padding: '3px 9px',
                      borderRadius: 4,
                    }}
                  >
                    {c.badge}
                  </span>
                </div>

                <h3
                  style={{
                    fontWeight: 900,
                    fontSize: '1.25rem',
                    color: '#0a0a14',
                    marginBottom: '0.25rem',
                  }}
                >
                  {c.name}
                </h3>

                {/* Receptor row */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <span
                    style={{
                      fontSize: '0.8rem',
                      color: c.color,
                      fontWeight: 700,
                    }}
                  >
                    {c.receptors}
                  </span>
                </div>

                {/* Data rows */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.6rem',
                    marginBottom: '1.5rem',
                    padding: '1rem',
                    background: 'rgba(0,0,0,0.03)',
                    borderRadius: 10,
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.8rem', color: '#9090a8', fontWeight: 500 }}>
                      Weekly dose
                    </span>
                    <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#1a1a2e' }}>
                      {c.dose}
                    </span>
                  </div>
                  <div
                    style={{
                      height: 1,
                      background: 'rgba(0,0,0,0.06)',
                    }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.8rem', color: '#9090a8', fontWeight: 500 }}>
                      Max weight loss
                    </span>
                    <span
                      style={{
                        fontSize: '1rem',
                        fontWeight: 900,
                        color: c.color,
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {c.maxLoss}
                    </span>
                  </div>
                </div>

                <Link
                  href={c.link}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: c.color,
                    textDecoration: 'none',
                    marginTop: 'auto',
                    transition: 'gap 0.15s',
                  }}
                  onMouseEnter={e => {
                    ;(e.currentTarget as HTMLAnchorElement).style.gap = '10px'
                  }}
                  onMouseLeave={e => {
                    ;(e.currentTarget as HTMLAnchorElement).style.gap = '6px'
                  }}
                >
                  View product page <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* ─── PRODUCTS GRID ──────────────────────────────────────────────── */}
        <section style={{ padding: '5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              marginBottom: '2.5rem',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <div>
              <div className="section-label">Full Catalog</div>
              <h2 className="heading-lg" style={{ color: '#0a0a14' }}>
                All Metabolic Fat Loss Peptides
              </h2>
            </div>
            <a
              href={AFFILIATE_BASE}
              target="_blank"
              rel="sponsored noopener noreferrer"
              className="btn-primary"
              style={{ fontSize: '0.92rem', padding: '0.65rem 1.2rem' }}
            >
              Shop Now <ExternalLink size={13} />
            </a>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {catProducts.map(p => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>

        {/* ─── BOTTOM CTA ─────────────────────────────────────────────────── */}
        <section style={{ padding: '3rem 0 6rem' }}>
          <div
            style={{
              background: 'linear-gradient(135deg, #d4a843 0%, #f59e0b 50%, #d4a843 100%)',
              borderRadius: 20,
              padding: 'clamp(2.5rem, 5vw, 4rem) clamp(2rem, 5vw, 3.5rem)',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Background texture overlay */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'radial-gradient(ellipse at 20% 50%, rgba(255,255,255,0.12) 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, rgba(0,0,0,0.08) 0%, transparent 60%)',
                pointerEvents: 'none',
              }}
            />

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'rgba(0,0,0,0.55)',
                  marginBottom: '0.75rem',
                }}
              >
                Research-Grade Supply
              </div>

              <h2
                style={{
                  fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
                  fontWeight: 900,
                  color: '#000',
                  marginBottom: '0.75rem',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.2,
                }}
              >
                Most Potent Metabolic Stack Available
              </h2>

              <p
                style={{
                  color: 'rgba(0,0,0,0.65)',
                  marginBottom: '2rem',
                  fontSize: '0.95rem',
                  maxWidth: 520,
                  margin: '0 auto 2rem',
                  lineHeight: 1.6,
                }}
              >
                Source Retatrutide, Tirzepatide, and Semaglutide from our supplier —
                third-party tested, pharmaceutical-grade, with fast domestic shipping.
              </p>

              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                <a
                  href={AFFILIATE_BASE}
                  target="_blank"
                  rel="sponsored noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '0.9rem 2.25rem',
                    background: '#000',
                    color: '#d4a843',
                    fontWeight: 800,
                    fontSize: '0.95rem',
                    borderRadius: 10,
                    textDecoration: 'none',
                    letterSpacing: '0.02em',
                    transition: 'opacity 0.15s, transform 0.15s',
                  }}
                  onMouseEnter={e => {
                    ;(e.currentTarget as HTMLAnchorElement).style.opacity = '0.88'
                    ;(e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={e => {
                    ;(e.currentTarget as HTMLAnchorElement).style.opacity = '1'
                    ;(e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'
                  }}
                >
                  Shop Now <ExternalLink size={15} />
                </a>

                <Link
                  href="/products/glp-3r-10mg"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '0.9rem 2.25rem',
                    background: 'rgba(0,0,0,0.15)',
                    color: '#000',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    borderRadius: 10,
                    textDecoration: 'none',
                    border: '1.5px solid rgba(0,0,0,0.25)',
                    transition: 'background 0.15s',
                  }}
                  onMouseEnter={e => {
                    ;(e.currentTarget as HTMLAnchorElement).style.background = 'rgba(0,0,0,0.25)'
                  }}
                  onMouseLeave={e => {
                    ;(e.currentTarget as HTMLAnchorElement).style.background = 'rgba(0,0,0,0.15)'
                  }}
                >
                  View Retatrutide <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </section>

      <section style={{ padding: '1.5rem 2rem 0' }}>
        <RelatedLinks currentPath="/categories/metabolic-fat-loss" />
      </section>

      </div>
    </div>
  )
}
