'use client'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { products, AFFILIATE_PRODUCT } from '@/lib/products'

// Curated top picks shown on article / category pages
const STRIP_SLUGS = [
  'retatrutide-10mg',
  'ghk-cu-50mg',
  'bpc-157-10mg',
  'epitalon-50mg',
  'snap-8-10mg',
  'ipamorelin-cjc-1295-blend-10mg',
]

const stripProducts = STRIP_SLUGS
  .map(slug => products.find(p => p.slug === slug))
  .filter(Boolean) as typeof products

export default function FeaturedProductsStrip({ heading = 'Top Peptides', subheading = 'Independently HPLC tested. CoA with every order.' }: { heading?: string; subheading?: string }) {
  return (
    <section style={{ background: '#0c0c18', borderTop: '1px solid rgba(212,168,67,0.12)', borderBottom: '1px solid rgba(212,168,67,0.12)', padding: '3.5rem 2rem' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{ fontSize: '0.62rem', fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#d4a843', marginBottom: '0.4rem' }}>Featured Compounds</div>
            <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 900, color: '#ffffff', letterSpacing: '-0.03em', margin: 0 }}>{heading}</h2>
            <p style={{ fontSize: '0.87rem', color: '#8888aa', marginTop: '0.35rem' }}>{subheading}</p>
          </div>
          <Link href="/products" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '0.6rem 1.25rem', background: 'rgba(212,168,67,0.1)', border: '1px solid rgba(212,168,67,0.25)', borderRadius: 8, textDecoration: 'none', color: '#d4a843', fontWeight: 700, fontSize: '0.82rem', whiteSpace: 'nowrap', transition: 'background 0.15s' }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(212,168,67,0.18)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(212,168,67,0.1)')}
          >
            View All 100+ <ArrowRight size={13} />
          </Link>
        </div>

        {/* Horizontal scroll on mobile, 6-col flex on desktop */}
        <div style={{ display: 'flex', gap: '1rem', overflowX: 'auto', WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', paddingBottom: 4 }}>
          {stripProducts.map(product => (
            <div key={product.slug} style={{ background: '#13131f', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, overflow: 'hidden', flex: '0 0 200px', display: 'flex', flexDirection: 'column', transition: 'border-color 0.2s, transform 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(212,168,67,0.3)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              {/* Image */}
              <Link href={`/products/${product.slug}`} style={{ display: 'block', textDecoration: 'none', position: 'relative', background: 'rgba(255,255,255,0.03)' }}>
                <div style={{ position: 'relative', height: 130 }}>
                  <Image src={product.image} alt={product.name} fill style={{ objectFit: 'contain', padding: '1rem' }} sizes="200px" />
                </div>
                {product.tag && (
                  <div style={{ position: 'absolute', top: 8, left: 8 }}>
                    <span className={`badge badge-${product.tagColor || 'gold'}`} style={{ fontSize: '0.55rem', padding: '2px 7px' }}>{product.tag}</span>
                  </div>
                )}
              </Link>
              <div style={{ height: 1, background: 'rgba(255,255,255,0.06)' }} />
              {/* Info */}
              <div style={{ padding: '0.875rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: '0.58rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#b08a2a', marginBottom: '0.2rem' }}>{product.category}</div>
                <Link href={`/products/${product.slug}`} style={{ textDecoration: 'none' }}>
                  <div style={{ fontSize: '0.83rem', fontWeight: 800, color: '#f0f0ff', lineHeight: 1.25, marginBottom: '0.5rem', transition: 'color 0.15s' }}
                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#d4a843')}
                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = '#f0f0ff')}
                  >{product.shortName}</div>
                </Link>
                <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 6 }}>
                  <span style={{ fontSize: '1rem', fontWeight: 900, color: '#ffffff', letterSpacing: '-0.02em' }}>${product.price.toFixed(2)}</span>
                  <a href={AFFILIATE_PRODUCT(product.slug)} target="_blank" rel="sponsored noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 3, padding: '5px 11px', background: 'linear-gradient(135deg, #d4a843, #a07c2e)', color: '#000', fontWeight: 800, fontSize: '0.72rem', borderRadius: 7, textDecoration: 'none', flexShrink: 0, transition: 'opacity 0.15s' }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
                    onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                  >Buy <ExternalLink size={9} /></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
