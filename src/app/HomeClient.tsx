'use client'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ExternalLink, CheckCircle, Star, FlaskConical, Shield, Zap, TrendingUp, Activity, Sparkles, Brain, Dna, ChevronRight } from 'lucide-react'
import TopImageBanner from '@/components/TopImageBanner'
import { AFFILIATE_BASE, AFFILIATE_PRODUCT, products } from '@/lib/products'

const heroProducts = [
  products.find(p => p.slug === 'retatrutide-10mg')!,
  products.find(p => p.slug === 'ghk-cu-50mg')!,
  products.find(p => p.slug === 'ipamorelin-cjc-1295-blend-10mg')!,
  products.find(p => p.slug === 'bpc-157-10mg')!,
  products.find(p => p.slug === 'epitalon-50mg')!,
  products.find(p => p.slug === 'tb-500-10mg')!,
  products.find(p => p.slug === 'igf-1-lr3-1mg')!,
  products.find(p => p.slug === 'snap-8-10mg')!,
].filter(Boolean)

const cats = [
  { label: 'Fat Loss', href: '/categories/metabolic-fat-loss', color: '#d4a843', bg: 'rgba(212,168,67,0.07)', border: 'rgba(212,168,67,0.2)', icon: <TrendingUp size={24} />, stat: '24.2%', statLabel: 'Body Weight Reduction', sub: 'Phase 2 — NEJM 2023', desc: 'Triple receptor agonism. Retatrutide produced the highest pharmacological weight loss ever recorded in a clinical trial.' },
  { label: 'Anti-Aging', href: '/categories/skin-anti-aging', color: '#a78bfa', bg: 'rgba(167,139,250,0.07)', border: 'rgba(167,139,250,0.2)', icon: <Sparkles size={24} />, stat: '4,000+', statLabel: 'Genes Modulated', sub: 'GHK-Cu Study Data', desc: 'GHK-Cu resets gene expression. Epithalon activates telomerase. SNAP-8 targets wrinkles at the neuromuscular source.' },
  { label: 'Recovery', href: '/categories/recovery-healing', color: '#22d3ee', bg: 'rgba(34,211,238,0.07)', border: 'rgba(34,211,238,0.2)', icon: <Activity size={24} />, stat: '120+', statLabel: 'Published Studies', sub: 'BPC-157 & TB-500', desc: 'The most-studied healing peptides ever. Multi-system tissue repair across tendon, gut, neural, and cardiac systems.' },
  { label: 'Longevity', href: '/categories/longevity', color: '#34d399', bg: 'rgba(52,211,153,0.07)', border: 'rgba(52,211,153,0.2)', icon: <Shield size={24} />, stat: '40+', statLabel: 'Years of Data', sub: 'Epithalon Science', desc: 'Telomere elongation. Sirtuin pathway restoration. The most validated longevity peptides on the planet.' },
  { label: 'Growth', href: '/categories/growth-body-comp', color: '#fb923c', bg: 'rgba(251,146,60,0.07)', border: 'rgba(251,146,60,0.2)', icon: <Zap size={24} />, stat: '4–8×', statLabel: 'GH Pulse Amplification', sub: 'CJC-1295 / Ipamorelin', desc: 'IGF-1 LR3 triggers satellite cell activation. CJC/Ipamorelin amplifies GH pulses with zero cortisol elevation.' },
]

const agonists = [
  { name: 'Semaglutide', gen: 'First Generation', type: 'GLP-1 Mono-Agonist', receptors: 1, loss: '~15%', color: '#60a5fa', slug: 'semaglutide-6mg' },
  { name: 'Tirzepatide', gen: 'Second Generation', type: 'Dual GIP + GLP-1', receptors: 2, loss: '~21%', color: '#a78bfa', slug: 'tirzepatide-15mg' },
  { name: 'Retatrutide', gen: 'Third Generation', type: 'Triple GIP + GLP-1 + GCG', receptors: 3, loss: '24.2%', color: '#d4a843', slug: 'retatrutide-10mg', best: true },
]

const scienceCards = [
  { icon: <Dna size={26} />, color: '#d4a843', title: 'Peptides Work at the Gene Level', body: 'Unlike generic supplements, peptides communicate at the molecular level — modulating thousands of genes, activating dormant stem cells, elongating telomeres, or reactivating enzyme systems that shut down with age.' },
  { icon: <Brain size={26} />, color: '#a78bfa', title: 'Surgical Precision Targeting', body: 'Each peptide has a specific receptor affinity profile. Ipamorelin stimulates GH without touching cortisol. GHK-Cu modulates only skin regeneration genes. This precision is what separates peptide science from all conventional approaches.' },
  { icon: <TrendingUp size={26} />, color: '#22d3ee', title: 'Decades of Clinical Evidence', body: 'BPC-157 has 120+ published studies. Epithalon has 40+ years of data from the St. Petersburg Institute of Gerontology. Semaglutide completed multiple large Phase 3 trials. This is not experimental.' },
  { icon: <Sparkles size={26} />, color: '#34d399', title: 'The Looksmaxing Stack Philosophy', body: 'The most effective approach stacks by mechanism: GH secretagogues for overnight recomposition, copper peptides for dermal regeneration, healing peptides for recovery, and metabolic compounds for sustainable leanness. Each layer compounds.' },
]

const testimonials = [
  { name: 'Dr. Marcus R.', role: 'Lab Scientist', text: 'Their CoA documentation is the most rigorous I\'ve seen in the peptide space. HPLC chromatograms and mass spec on every single batch. This is how it should be done.', stars: 5 },
  { name: 'Thomas K.', role: 'Metabolic Investigator', text: 'Retatrutide molecular weight confirms perfectly against published NEJM data. Best price per mg for triple agonist material I\'ve found anywhere. Reordering immediately.', stars: 5 },
  { name: 'Alex V.', role: 'Protocol Developer', text: 'Been sourcing GHK-Cu and Epithalon from our supplier for over a year. Perfectly consistent quality across every batch. The educational content on StacksPeptide helped me design a smarter protocol.', stars: 5 },
]

// ── Shared style helpers ──
const S = {
  page: { background: '#ffffff' } as React.CSSProperties,
  section: (bg?: string): React.CSSProperties => ({ background: bg || '#ffffff', padding: '7rem 2rem' }),
  inner: { maxWidth: 1280, margin: '0 auto' } as React.CSSProperties,
  eyebrow: { display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: '1rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#d4a843', marginBottom: '1.25rem' } as React.CSSProperties,
  h2white: { fontSize: 'clamp(2.4rem, 4.5vw, 4rem)', fontWeight: 900, color: '#0a0a14', lineHeight: 1.02, letterSpacing: '-0.04em', marginBottom: '1.5rem' } as React.CSSProperties,
  bodyCopy: { fontSize: '1.1rem', color: '#555570', lineHeight: 1.85 } as React.CSSProperties,
  card: { background: '#f9f9fd', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 20 } as React.CSSProperties,
}

export default function HomePage() {
  return (
    <div style={S.page}>

      {/* ────────────── 1. HERO CAROUSEL ────────────── */}
      <TopImageBanner />

      {/* ────────────── 2. TRUST BAR ─────────────────  */}
      <div style={{ background: '#f7f8fc', borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
        <div className="rg-trust" style={{ maxWidth: 1280, margin: '0 auto' }}>
          {[
            { icon: <FlaskConical size={22} />, n: '>98%', l: 'Purity Guaranteed' },
            { icon: <Shield size={22} />, n: '3rd Party', l: 'Lab Tested' },
            { icon: <CheckCircle size={22} />, n: 'CoA', l: 'Every Order' },
            { icon: <Zap size={22} />, n: '100+', l: 'Compounds' },
          ].map((b, i) => (
            <div key={b.l} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', padding: '1.75rem', borderRight: i < 3 ? '1px solid rgba(0,0,0,0.06)' : 'none' }}>
              <div style={{ color: '#d4a843', opacity: 0.8 }}>{b.icon}</div>
              <div>
                <div style={{ fontSize: '1.35rem', fontWeight: 900, color: '#0a0a14', letterSpacing: '-0.03em', lineHeight: 1 }}>{b.n}</div>
                <div style={{ fontSize: '0.87rem', fontWeight: 600, color: '#9090a8', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 3 }}>{b.l}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ────────────── 3. HERO EDITORIAL ────────────── */}
      <section className="sec-pad-hero" style={{ background: '#ffffff' }}>
        <div className="rg-2hero" style={S.inner}>
          <div>
            <div style={S.eyebrow}>
              <span style={{ width: 24, height: 1.5, background: '#d4a843', display: 'block' }} />
              The New Standard in Physical Optimization
            </div>
            <h2 style={{ ...S.h2white, fontSize: 'clamp(3rem, 5vw, 5rem)', marginBottom: '1.75rem' }}>
              Peak Biology<br />
              <span style={{ background: 'linear-gradient(135deg, #f5d060, #d4a843, #c49030)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Starts in the Lab.
              </span>
            </h2>
            <p style={{ ...S.bodyCopy, marginBottom: '1.5rem' }}>
              The world's top scientists don't chase surface-level solutions. They use peptide science — compounds with decades of clinical evidence that operate at the cellular, genetic, and molecular level to produce results nothing else can match.
            </p>
            <p style={{ ...S.bodyCopy, marginBottom: '3rem' }}>
              GHK-Cu modulates <strong style={{ color: '#0a0a14' }}>4,000+ genes</strong>. Retatrutide produced <strong style={{ color: '#0a0a14' }}>24.2% body weight reduction</strong> published in the New England Journal of Medicine. Epithalon activates <strong style={{ color: '#0a0a14' }}>telomerase</strong> in human somatic cells. This is validated biology — not hype.
            </p>
            {[
              'Third-party HPLC and mass spectrometry verified',
              'Certificate of Analysis with every order',
              '100+ premium grade compounds in one catalog',
              'Sourced exclusively from our supplier',
            ].map(pt => (
              <div key={pt} style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', marginBottom: '0.875rem' }}>
                <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'rgba(212,168,67,0.12)', border: '1px solid rgba(212,168,67,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <CheckCircle size={12} color="#d4a843" />
                </div>
                <span style={{ fontSize: '1rem', color: '#444458' }}>{pt}</span>
              </div>
            ))}
            <div style={{ display: 'flex', gap: 14, marginTop: '3rem', flexWrap: 'wrap' }}>
              <Link href="/products" className="btn-primary" style={{ fontSize: '1rem', padding: '1rem 2rem' }}>Browse 100+ Compounds <ArrowRight size={16} /></Link>
              <a href={AFFILIATE_BASE} target="_blank" rel="sponsored noopener noreferrer" className="btn-secondary" style={{ fontSize: '1rem', padding: '1rem 2rem' }}>Shop Now <ExternalLink size={14} /></a>
            </div>
          </div>

          {/* Stat cards grid */}
          <div className="rg-2col" style={{ gap: '1.25rem' }}>
            {[
              { n: '24.2%', l: 'Weight Reduction', c: '#d4a843', sub: 'Retatrutide — NEJM Phase 2' },
              { n: '4,000+', l: 'Genes Modulated', c: '#a78bfa', sub: 'GHK-Cu genomic data' },
              { n: '120+', l: 'Published Studies', c: '#22d3ee', sub: 'BPC-157 healing data' },
              { n: '40 yrs', l: 'Longevity Data', c: '#34d399', sub: 'Epithalon telomere science' },
            ].map(s => (
              <div key={s.l} style={{ ...S.card, padding: '2.25rem', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${s.c}, transparent)` }} />
                <div style={{ fontSize: '3rem', fontWeight: 900, letterSpacing: '-0.05em', lineHeight: 1, color: s.c, marginBottom: '0.75rem' }}>{s.n}</div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#0a0a14', marginBottom: '0.4rem' }}>{s.l}</div>
                <div style={{ fontSize: '1rem', color: '#9090a8' }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────── 4. CATEGORIES ────────────────── */}
      <section className="sec-pad" style={{ background: '#f7f8fc', borderTop: '1px solid rgba(0,0,0,0.06)', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
        <div style={S.inner}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <div style={{ ...S.eyebrow, justifyContent: 'center' }}>
              <span style={{ width: 24, height: 1.5, background: '#d4a843', display: 'block' }} />
              Browse by Goal
              <span style={{ width: 24, height: 1.5, background: '#d4a843', display: 'block' }} />
            </div>
            <h2 style={{ ...S.h2white, textAlign: 'center', marginBottom: '1rem' }}>Five Categories. One Goal: Peak Human Performance.</h2>
            <p style={{ fontSize: '1.15rem', color: '#6a6a8a', maxWidth: 580, margin: '0 auto' }}>
              Every peptide in our catalog falls into one of five performance categories — each backed by independent clinical data. Find the compounds that match your goals.
            </p>
          </div>

          <div className="rg-5col">
            {cats.map(cat => (
              <Link key={cat.label} href={cat.href}
                style={{ display: 'flex', flexDirection: 'column', padding: '2rem 1.75rem', background: cat.bg, border: `1px solid ${cat.border}`, borderRadius: 22, textDecoration: 'none', transition: 'transform 0.25s, box-shadow 0.25s, border-color 0.25s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = `0 28px 70px ${cat.color}25`; e.currentTarget.style.borderColor = cat.color + '50'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = cat.border; }}
              >
                <div style={{ color: cat.color, marginBottom: '1.5rem' }}>{cat.icon}</div>
                <div style={{ fontSize: '0.87rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: cat.color, marginBottom: '0.5rem' }}>{cat.label}</div>
                <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#0a0a14', letterSpacing: '-0.04em', lineHeight: 1, marginBottom: '0.2rem' }}>{cat.stat}</div>
                <div style={{ fontSize: '0.97rem', fontWeight: 600, color: '#666680', marginBottom: '0.2rem' }}>{cat.statLabel}</div>
                <div style={{ fontSize: '0.87rem', color: cat.color, opacity: 0.65, marginBottom: '1.25rem' }}>{cat.sub}</div>
                <p style={{ fontSize: '1.05rem', lineHeight: 1.75, flex: 1, color: '#555570' }}>{cat.desc}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginTop: '1.5rem', color: cat.color, fontSize: '1.05rem', fontWeight: 700 }}>
                  Explore <ArrowRight size={13} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────── 5. FEATURED PRODUCTS ─────────── */}
      <section className="sec-pad" style={{ background: '#0a0a14' }}>
        <div style={S.inner}>

          {/* Section header */}
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '3rem', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#d4a843', marginBottom: '1rem' }}>
                <span style={{ width: 22, height: 1.5, background: '#d4a843', display: 'block' }} />
                Top Picks
              </div>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 900, color: '#ffffff', lineHeight: 1.05, letterSpacing: '-0.04em', marginBottom: '0.75rem' }}>
                Our Best-Selling Peptides
              </h2>
              <p style={{ fontSize: '1.05rem', color: '#9090b8', maxWidth: 520, lineHeight: 1.7 }}>
                Handpicked for clinical significance — independently HPLC verified, every batch.
              </p>
            </div>
            <Link href="/products" style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '0.8rem 1.75rem', background: 'rgba(212,168,67,0.1)', border: '1px solid rgba(212,168,67,0.3)', borderRadius: 10, textDecoration: 'none', color: '#d4a843', fontWeight: 700, fontSize: '0.9rem', transition: 'background 0.15s', flexShrink: 0 }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(212,168,67,0.18)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'rgba(212,168,67,0.1)')}
            >
              View All 100+ Peptides <ArrowRight size={14} />
            </Link>
          </div>

          {/* Hero spotlight: top 2 products — large cards */}
          <div className="rg-2col" style={{ gap: '1.5rem', marginBottom: '1.5rem' }}>
            {heroProducts.slice(0, 2).map(product => (
              <div key={product.slug} style={{ background: '#13131f', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 22, overflow: 'hidden', display: 'flex', flexDirection: 'column', transition: 'border-color 0.25s, transform 0.25s, box-shadow 0.25s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(212,168,67,0.35)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 28px 80px rgba(212,168,67,0.12)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{ display: 'flex', gap: 0 }}>
                  {/* Image */}
                  <Link href={`/products/${product.slug}`} style={{ display: 'block', textDecoration: 'none', position: 'relative', width: 200, flexShrink: 0, background: 'rgba(255,255,255,0.04)', borderRight: '1px solid rgba(255,255,255,0.07)' }}>
                    <div style={{ position: 'relative', height: 200 }}>
                      <Image src={product.image} alt={product.name} fill style={{ objectFit: 'contain', padding: '2rem' }} sizes="200px" />
                    </div>
                    {product.tag && (
                      <div style={{ position: 'absolute', top: 12, left: 12 }}>
                        <span className={`badge badge-${product.tagColor || 'gold'}`}>{product.tag}</span>
                      </div>
                    )}
                  </Link>
                  {/* Info */}
                  <div style={{ flex: 1, padding: '1.75rem', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ fontSize: '0.62rem', fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#b08a2a', marginBottom: '0.4rem' }}>{product.category}</div>
                    <Link href={`/products/${product.slug}`} style={{ textDecoration: 'none' }}>
                      <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.2, marginBottom: '0.75rem', transition: 'color 0.15s' }}
                        onMouseEnter={e => (e.currentTarget.style.color = '#d4a843')}
                        onMouseLeave={e => (e.currentTarget.style.color = '#ffffff')}
                      >{product.shortName}</h3>
                    </Link>
                    <p style={{ fontSize: '0.88rem', color: '#8888aa', lineHeight: 1.65, flex: 1, marginBottom: '1.25rem' }}>
                      {product.summary.slice(0, 120)}...
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
                      <span style={{ fontSize: '1.6rem', fontWeight: 900, color: '#ffffff', letterSpacing: '-0.04em' }}>${product.price.toFixed(2)}</span>
                      <div style={{ display: 'flex', gap: 8 }}>
                        <Link href={`/products/${product.slug}`} style={{ display: 'flex', alignItems: 'center', padding: '8px 14px', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 8, textDecoration: 'none', color: '#ccccdd', fontSize: '0.82rem', fontWeight: 600, transition: 'all 0.15s' }}
                          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = '#ffffff'; }}
                          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.color = '#ccccdd'; }}
                        >Details</Link>
                        <a href={AFFILIATE_PRODUCT(product.slug)} target="_blank" rel="sponsored noopener noreferrer"
                          style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '8px 18px', background: 'linear-gradient(135deg, #d4a843, #a07c2e)', color: '#000', fontWeight: 800, fontSize: '0.85rem', borderRadius: 8, textDecoration: 'none', transition: 'opacity 0.15s, box-shadow 0.15s', boxShadow: '0 4px 16px rgba(212,168,67,0.3)' }}
                          onMouseEnter={e => { e.currentTarget.style.opacity = '0.9'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(212,168,67,0.45)'; }}
                          onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(212,168,67,0.3)'; }}
                        >Buy Now <ExternalLink size={11} /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Remaining 6 products grid */}
          <div className="rg-3col" style={{ gap: '1rem' }}>
            {heroProducts.slice(2, 8).map(product => (
              <div key={product.slug} style={{ background: '#13131f', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 18, overflow: 'hidden', display: 'flex', flexDirection: 'column', transition: 'border-color 0.25s, transform 0.2s, box-shadow 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(212,168,67,0.3)'; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(212,168,67,0.10)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <Link href={`/products/${product.slug}`} style={{ display: 'block', textDecoration: 'none', position: 'relative', background: 'rgba(255,255,255,0.03)' }}>
                  <div style={{ position: 'relative', height: 160, padding: '1.25rem' }}>
                    <Image src={product.image} alt={product.name} fill style={{ objectFit: 'contain', padding: '0.75rem' }} sizes="280px" />
                  </div>
                  {product.tag && (
                    <div style={{ position: 'absolute', top: 10, left: 10 }}>
                      <span className={`badge badge-${product.tagColor || 'gold'}`}>{product.tag}</span>
                    </div>
                  )}
                </Link>
                <div style={{ height: 1, background: 'rgba(255,255,255,0.06)' }} />
                <div style={{ padding: '1rem 1.1rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#b08a2a', marginBottom: '0.25rem' }}>{product.category}</div>
                  <Link href={`/products/${product.slug}`} style={{ textDecoration: 'none' }}>
                    <h3 style={{ fontSize: '0.92rem', fontWeight: 800, color: '#f0f0ff', lineHeight: 1.25, marginBottom: '0.4rem', transition: 'color 0.15s' }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#d4a843')}
                      onMouseLeave={e => (e.currentTarget.style.color = '#f0f0ff')}
                    >{product.shortName}</h3>
                  </Link>
                  <p style={{ fontSize: '0.79rem', color: '#7070a0', lineHeight: 1.55, flex: 1, marginBottom: '0.875rem' }}>
                    {product.summary.slice(0, 80)}…
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
                    <span style={{ fontSize: '1.15rem', fontWeight: 900, color: '#ffffff', letterSpacing: '-0.03em' }}>${product.price.toFixed(2)}</span>
                    <a href={AFFILIATE_PRODUCT(product.slug)} target="_blank" rel="sponsored noopener noreferrer"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: 4, padding: '7px 14px', background: 'linear-gradient(135deg, #d4a843, #a07c2e)', color: '#000', fontWeight: 800, fontSize: '0.78rem', borderRadius: 8, textDecoration: 'none', transition: 'opacity 0.15s', boxShadow: '0 2px 10px rgba(212,168,67,0.25)', flexShrink: 0 }}
                      onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
                      onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                    >Buy <ArrowRight size={11} /></a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA row */}
          <div style={{ textAlign: 'center', marginTop: '3rem', paddingTop: '2.5rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            <p style={{ color: '#9090b8', fontSize: '0.97rem', marginBottom: '1.25rem' }}>Explore the complete catalog — 100+ compounds, all third-party HPLC verified.</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/products" className="btn-primary" style={{ fontSize: '1rem', padding: '0.9rem 2.25rem' }}>Browse All Peptides <ArrowRight size={15} /></Link>
              <a href={AFFILIATE_BASE} target="_blank" rel="sponsored noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '0.9rem 2.25rem', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 10, textDecoration: 'none', color: '#ccccdd', fontWeight: 600, fontSize: '1rem', transition: 'background 0.15s' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.06)')}
              >Shop Now <ExternalLink size={13} /></a>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────── 6. BIG STATS BANNER ──────────── */}
      <div className="sec-pad-sm" style={{ background: 'linear-gradient(135deg, #fdf9f0 0%, #f7f8fc 50%, #f8f0ff 100%)', borderTop: '1px solid rgba(212,168,67,0.12)', borderBottom: '1px solid rgba(212,168,67,0.12)' }}>
        <div className="rg-stats4" style={S.inner}>
          {[
            { n: '100+', l: 'Compounds', sub: 'Complete catalog' },
            { n: '>98%', l: 'Purity Standard', sub: 'Every batch, every time' },
            { n: '$40–$135', l: 'Price Per Compound', sub: '10% off — limited time' },
            { n: '100%', l: 'Third-Party Verified', sub: 'Independent lab testing' },
          ].map((s, i) => (
            <div key={s.l} style={{ textAlign: 'center', padding: '0.5rem', borderRight: i < 3 ? '1px solid rgba(0,0,0,0.06)' : 'none' }}>
              <div className="stat-display" style={{ fontSize: '3.5rem', fontWeight: 900, letterSpacing: '-0.05em', lineHeight: 1, color: '#d4a843', marginBottom: '0.5rem' }}>{s.n}</div>
              <div style={{ fontSize: '1rem', fontWeight: 700, color: '#0a0a14', marginBottom: '0.25rem' }}>{s.l}</div>
              <div style={{ fontSize: '1rem', color: '#9090a8' }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ────────────── 7. GLP TIER BREAKDOWN ────────── */}
      <section className="sec-pad" style={{ background: '#f7f8fc', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
        <div className="rg-2hero" style={S.inner}>
          <div>
            <div style={S.eyebrow}>
              <span style={{ width: 24, height: 1.5, background: '#d4a843', display: 'block' }} />
              Fat Loss Science
            </div>
            <h2 style={S.h2white}>
              More Receptors.<br />
              <span style={{ background: 'linear-gradient(135deg, #f5d060, #d4a843)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                More Results.
              </span>
            </h2>
            <p style={{ ...S.bodyCopy, marginBottom: '1.5rem' }}>
              Each generation of GLP-based metabolic peptides activates an additional receptor — compounding appetite suppression, insulin sensitization, and metabolic acceleration. The jump from mono to triple agonism isn't incremental. It's exponential.
            </p>
            <p style={{ ...S.bodyCopy, marginBottom: '3rem' }}>
              Retatrutide's triple co-agonism of GLP-1R, GIP-R, and GCGR produced the <strong style={{ color: '#d4a843' }}>highest weight reduction ever recorded</strong> in a once-weekly pharmacological trial — documented in the 2023 New England Journal of Medicine.
            </p>
            <Link href="/categories/metabolic-fat-loss" className="btn-primary" style={{ fontSize: '1rem', padding: '1rem 2rem' }}>
              Explore Fat Loss Peptides <ArrowRight size={16} />
            </Link>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
            {agonists.map(tier => (
              <Link key={tier.slug} href={`/products/${tier.slug}`}
                style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.6rem 2rem', background: tier.best ? `${tier.color}0d` : '#f9f9fd', border: `1px solid ${tier.best ? tier.color + '40' : 'rgba(0,0,0,0.08)'}`, borderRadius: 18, textDecoration: 'none', transition: 'transform 0.2s, border-color 0.2s', position: 'relative' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateX(6px)'; e.currentTarget.style.borderColor = tier.color + '55'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateX(0)'; e.currentTarget.style.borderColor = tier.best ? tier.color + '40' : 'rgba(0,0,0,0.08)'; }}
              >
                {tier.best && (
                  <div style={{ position: 'absolute', top: -1, right: 18, background: tier.color, color: '#000', fontSize: '0.62rem', fontWeight: 900, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '4px 12px', borderRadius: '0 0 10px 10px' }}>
                    Most Potent
                  </div>
                )}
                <div style={{ width: 52, height: 52, borderRadius: 15, background: `${tier.color}14`, border: `2px solid ${tier.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '1.25rem', color: tier.color, flexShrink: 0 }}>
                  {tier.receptors}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: '0.3rem' }}>
                    <span style={{ fontWeight: 900, color: '#0a0a14', fontSize: '1.15rem' }}>{tier.name}</span>
                    <span style={{ fontSize: '0.97rem', color: '#9090a8' }}>{tier.gen}</span>
                  </div>
                  <div style={{ fontSize: '1.05rem', color: '#666688' }}>{tier.type}</div>
                </div>
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <div style={{ fontSize: '2rem', fontWeight: 900, color: tier.color, letterSpacing: '-0.04em', lineHeight: 1 }}>{tier.loss}</div>
                  <div style={{ fontSize: '1.05rem', color: '#9090a8', marginTop: 3 }}>clinical weight loss</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────── 8. SCIENCE SECTION ──────────── */}
      <section className="sec-pad" style={{ background: '#ffffff' }}>
        <div style={S.inner}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <div style={{ ...S.eyebrow, justifyContent: 'center' }}>
              <span style={{ width: 24, height: 1.5, background: '#d4a843', display: 'block' }} />
              Why Peptides Work
              <span style={{ width: 24, height: 1.5, background: '#d4a843', display: 'block' }} />
            </div>
            <h2 style={{ ...S.h2white, textAlign: 'center', marginBottom: '1rem' }}>Why Peptides Outperform Everything Else</h2>
            <p style={{ fontSize: '1.15rem', color: '#6a6a8a', maxWidth: 580, margin: '0 auto' }}>
              Peptides aren't a trend — they're the logical endpoint of understanding biology at sufficient resolution. Here's what puts them in a category of their own.
            </p>
          </div>

          <div className="rg-2col">
            {scienceCards.map(sc => (
              <div key={sc.title} style={{ ...S.card, padding: '2.5rem', display: 'flex', gap: '1.5rem', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, ${sc.color}, transparent)` }} />
                <div style={{ width: 54, height: 54, borderRadius: 16, background: `${sc.color}10`, border: `1px solid ${sc.color}22`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: sc.color, flexShrink: 0 }}>
                  {sc.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0a0a14', marginBottom: '0.75rem', lineHeight: 1.25 }}>{sc.title}</h3>
                  <p style={{ fontSize: '1rem', color: '#555570', lineHeight: 1.8 }}>{sc.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────── 9. QUALITY + TESTIMONIALS ───── */}
      <section className="sec-pad" style={{ background: '#f7f8fc', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
        <div className="rg-2hero" style={{ ...S.inner, alignItems: 'start' }}>
          <div>
            <div style={S.eyebrow}>
              <span style={{ width: 24, height: 1.5, background: '#d4a843', display: 'block' }} />
              our supplier
            </div>
            <h2 style={S.h2white}>
              Purity &gt;98% Isn&apos;t<br />
              <span style={{ background: 'linear-gradient(135deg, #f5d060, #d4a843)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Just a Label.
              </span>
            </h2>
            <p style={{ ...S.bodyCopy, marginBottom: '1.5rem' }}>
              our supplier maintains the strictest independent analytical standards in the peptide market. Every compound is third-party verified — not self-certified. You receive actual lab documentation with every single order.
            </p>
            <p style={{ ...S.bodyCopy, marginBottom: '3rem' }}>
              HPLC chromatograms. Mass spectrometry molecular weight confirmation. Endotoxin testing. The complete analytical package that professional investigators require — and rarely get anywhere else.
            </p>
            <div className="rg-2col" style={{ gap: '1rem', marginBottom: '3rem' }}>
              {[
                { icon: <FlaskConical size={18} />, label: 'HPLC Purity Testing', sub: 'Independent lab verification' },
                { icon: <Shield size={18} />, label: 'Mass Spec Identity', sub: 'Molecular weight confirmed' },
                { icon: <CheckCircle size={18} />, label: 'CoA Documentation', sub: 'Included with every order' },
                { icon: <Zap size={18} />, label: 'Cold-Chain Shipping', sub: 'Peptide integrity preserved' },
              ].map(b => (
                <div key={b.label} style={{ display: 'flex', gap: '0.875rem', alignItems: 'flex-start', padding: '1.25rem', background: '#f9f9fd', borderRadius: 14, border: '1px solid rgba(0,0,0,0.08)' }}>
                  <div style={{ color: '#d4a843', flexShrink: 0, marginTop: 2 }}>{b.icon}</div>
                  <div>
                    <div style={{ fontWeight: 700, color: '#0a0a14', fontSize: '1rem', marginBottom: '0.25rem' }}>{b.label}</div>
                    <div style={{ fontSize: '1rem', color: '#9090a8' }}>{b.sub}</div>
                  </div>
                </div>
              ))}
            </div>
            <a href={AFFILIATE_BASE} target="_blank" rel="sponsored noopener noreferrer" className="btn-primary" style={{ fontSize: '1rem', padding: '1rem 2rem' }}>
              Shop Now <ExternalLink size={16} />
            </a>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {testimonials.map(t => (
              <div key={t.name} style={{ ...S.card, padding: '2rem' }}>
                <div style={{ display: 'flex', gap: 4, marginBottom: '1.25rem' }}>
                  {[...Array(t.stars)].map((_, i) => <Star key={i} size={15} style={{ color: '#d4a843', fill: '#d4a843' }} />)}
                </div>
                <p style={{ fontSize: '1.05rem', color: '#555570', lineHeight: 1.75, marginBottom: '1.5rem', fontStyle: 'italic' }}>"{t.text}"</p>
                <div>
                  <div style={{ fontWeight: 700, color: '#0a0a14', fontSize: '1.05rem' }}>{t.name}</div>
                  <div style={{ fontSize: '1rem', color: '#9090a8', marginTop: 2 }}>{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────── 10. CATEGORY DEEP LINKS ──────── */}
      <section className="sec-pad" style={{ background: '#ffffff' }}>
        <div style={S.inner}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ ...S.eyebrow, justifyContent: 'center' }}>
              <span style={{ width: 24, height: 1.5, background: '#d4a843', display: 'block' }} />
              Explore by Goal
              <span style={{ width: 24, height: 1.5, background: '#d4a843', display: 'block' }} />
            </div>
            <h2 style={{ ...S.h2white, textAlign: 'center', marginBottom: '0.75rem' }}>Find Your Compounds by Goal</h2>
            <p style={{ fontSize: '1.1rem', color: '#6a6a8a' }}>Deep-dive guides, compound comparisons, mechanism breakdowns, and evidence-backed protocols for every goal.</p>
          </div>

          <div className="rg-3col" style={{ marginBottom: '1.5rem' }}>
            {[cats[0], cats[1], cats[2]].map(cat => (
              <Link key={cat.label} href={cat.href}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '2rem', background: `${cat.color}08`, border: `1px solid ${cat.border}`, borderRadius: 18, textDecoration: 'none', transition: 'transform 0.2s, border-color 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.borderColor = cat.color + '45'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = cat.border; }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: `${cat.color}12`, border: `1px solid ${cat.color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: cat.color, flexShrink: 0 }}>
                    {cat.icon}
                  </div>
                  <div>
                    <div style={{ fontWeight: 800, color: '#0a0a14', fontSize: '1.15rem', marginBottom: '0.2rem' }}>{cat.label}</div>
                    <div style={{ fontSize: '1rem', color: '#666688' }}>{cat.stat} {cat.statLabel}</div>
                  </div>
                </div>
                <ChevronRight size={18} style={{ color: cat.color, flexShrink: 0 }} />
              </Link>
            ))}
          </div>

          <div className="rg-2col" style={{ gap: '1.5rem' }}>
            {[cats[3], cats[4]].map(cat => (
              <Link key={cat.label} href={cat.href}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '2rem', background: `${cat.color}08`, border: `1px solid ${cat.border}`, borderRadius: 18, textDecoration: 'none', transition: 'transform 0.2s, border-color 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.borderColor = cat.color + '45'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = cat.border; }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: `${cat.color}12`, border: `1px solid ${cat.color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: cat.color, flexShrink: 0 }}>
                    {cat.icon}
                  </div>
                  <div>
                    <div style={{ fontWeight: 800, color: '#0a0a14', fontSize: '1.15rem', marginBottom: '0.2rem' }}>{cat.label}</div>
                    <div style={{ fontSize: '1rem', color: '#666688' }}>{cat.stat} {cat.statLabel}</div>
                  </div>
                </div>
                <ChevronRight size={18} style={{ color: cat.color, flexShrink: 0 }} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────── 11. FINAL CTA ────────────────── */}
      <section className="sec-cta">
        <div style={S.inner}>
          <div className="cta-box" style={{ position: 'relative', background: 'linear-gradient(135deg, #fffbf0 0%, #f8f8ff 55%, #f7f8fc 100%)', border: '1px solid rgba(212,168,67,0.2)', borderRadius: 32, textAlign: 'center', overflow: 'hidden' }}>
            {/* Glow */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 700, height: 700, background: 'radial-gradient(circle, rgba(212,168,67,0.06) 0%, transparent 60%)', borderRadius: '50%', pointerEvents: 'none' }} />
            {/* Top line */}
            <div style={{ position: 'absolute', top: 0, left: '15%', right: '15%', height: 1, background: 'linear-gradient(90deg, transparent, rgba(212,168,67,0.5), transparent)' }} />

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ ...S.eyebrow, justifyContent: 'center' }}>
                <span style={{ width: 24, height: 1.5, background: '#d4a843', display: 'block' }} />
                Get Started
                <span style={{ width: 24, height: 1.5, background: '#d4a843', display: 'block' }} />
              </div>
              <h2 style={{ fontSize: 'clamp(2.8rem, 5vw, 4.8rem)', fontWeight: 900, color: '#0a0a14', lineHeight: 1.02, letterSpacing: '-0.04em', marginBottom: '1.25rem' }}>
                The Science Is Clear.<br />
                <span style={{ background: 'linear-gradient(135deg, #f5d060, #d4a843, #c49030)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Are You Ready to Act?
                </span>
              </h2>
              <p style={{ fontSize: '1.2rem', color: '#555570', lineHeight: 1.85, maxWidth: 600, margin: '0 auto 3.5rem' }}>
                Every compound in this catalog is independently HPLC tested, documented with a Certificate of Analysis, and sourced exclusively from our supplier — the most analytically rigorous supplier in the peptide space.
              </p>

              <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1.25rem', marginBottom: '3.5rem' }}>
                <a href={AFFILIATE_BASE} target="_blank" rel="sponsored noopener noreferrer" className="btn-primary" style={{ fontSize: '1.15rem', padding: '1.1rem 2.75rem' }}>
                  Shop Now <ExternalLink size={17} />
                </a>
                <Link href="/products" className="btn-secondary" style={{ fontSize: '1.15rem', padding: '1.1rem 2.75rem' }}>
                  Browse All Peptides <ArrowRight size={17} />
                </Link>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
                {cats.map(cat => (
                  <Link key={cat.label} href={cat.href}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '9px 20px', background: `${cat.color}0e`, border: `1px solid ${cat.color}28`, borderRadius: 100, textDecoration: 'none', fontSize: '0.97rem', fontWeight: 700, color: cat.color, transition: 'background 0.15s' }}
                    onMouseEnter={e => (e.currentTarget.style.background = `${cat.color}1e`)}
                    onMouseLeave={e => (e.currentTarget.style.background = `${cat.color}0e`)}
                  >
                    {cat.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <div style={{ background: '#f3f4f8', borderTop: '1px solid rgba(0,0,0,0.06)', padding: '2rem' }}>
        <p style={{ maxWidth: 860, margin: '0 auto', fontSize: '1.05rem', color: '#888898', textAlign: 'center', lineHeight: 1.8 }}>
          <strong style={{ color: '#555570' }}>For Lab Use Only:</strong> All products are intended for laboratory lab purposes only. Not approved by the FDA for human consumption. Not for use on humans or animals. 
        </p>
      </div>
    </div>
  )
}
