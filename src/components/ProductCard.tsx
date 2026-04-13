'use client'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, ShoppingCart } from 'lucide-react'
import type { Product } from '@/lib/products'
import { AFFILIATE_PRODUCT } from '@/lib/products'

const tagMap: Record<string, string> = {
  gold: 'badge-gold',
  green: 'badge-green',
  blue: 'badge-blue',
  purple: 'badge-purple',
  cyan: 'badge-cyan',
  gray: 'badge-white',
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="card" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', height: '100%', background: '#ffffff', border: '1px solid rgba(0,0,0,0.10)' }}>

      {/* Image */}
      <Link
        href={`/products/${product.slug}`}
        style={{ display: 'block', textDecoration: 'none', position: 'relative', background: '#f5f6fa', overflow: 'hidden', flexShrink: 0 }}
      >
        <div className="product-card-img" style={{ position: 'relative', aspectRatio: '1', padding: '1.25rem' }}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            style={{ objectFit: 'contain', padding: '0.75rem', transition: 'transform 0.4s ease' }}
            sizes="(max-width: 580px) 45vw, (max-width: 768px) 40vw, 300px"
          />
        </div>
        {product.tag && (
          <div style={{ position: 'absolute', top: 8, left: 8 }}>
            <span className={`badge ${tagMap[product.tagColor || 'gold']}`}>{product.tag}</span>
          </div>
        )}
        {/* Hover shimmer overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(212,168,67,0.04), transparent)', opacity: 0, transition: 'opacity 0.3s' }} className="card-img-overlay" />
      </Link>

      {/* Divider */}
      <div style={{ height: 1, background: 'rgba(0,0,0,0.07)' }} />

      {/* Body */}
      <div className="product-card-body" style={{ padding: '1rem 1.1rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#b08a2a', marginBottom: '0.3rem' }}>
          {product.category}
        </div>

        <Link href={`/products/${product.slug}`} style={{ textDecoration: 'none' }}>
          <h3
            className="product-card-name"
            style={{ fontSize: '0.9rem', fontWeight: 800, color: '#111122', lineHeight: 1.25, marginBottom: '0.4rem', transition: 'color 0.15s' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#c49030')}
            onMouseLeave={e => (e.currentTarget.style.color = '#111122')}
          >
            {product.shortName}
          </h3>
        </Link>

        <p style={{ fontSize: '0.8rem', color: '#4a4a62', lineHeight: 1.55, flex: 1, marginBottom: '0.875rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          {product.summary.slice(0, 90)}…
        </p>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', marginTop: 'auto' }}>
          <div style={{ flexShrink: 0 }}>
            {product.originalPrice && (
              <span style={{ fontSize: '0.72rem', color: '#8888a0', textDecoration: 'line-through', marginRight: 3 }}>${product.originalPrice.toFixed(2)}</span>
            )}
            <span className="product-card-price" style={{ fontSize: '1.15rem', fontWeight: 900, color: '#111122', letterSpacing: '-0.02em' }}>${product.price.toFixed(2)}</span>
          </div>

          <a
            href={AFFILIATE_PRODUCT(product.slug)}
            target="_blank"
            rel="sponsored noopener noreferrer"
            className="product-card-buy"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 4,
              padding: '7px 13px',
              minHeight: 36,
              background: 'linear-gradient(135deg, #d4a843, #a07c2e)',
              color: '#000000',
              fontWeight: 800,
              fontSize: '0.78rem',
              borderRadius: 8,
              textDecoration: 'none',
              transition: 'opacity 0.15s, transform 0.15s, box-shadow 0.15s',
              touchAction: 'manipulation',
              WebkitTapHighlightColor: 'transparent',
              flexShrink: 0,
              boxShadow: '0 2px 8px rgba(212,168,67,0.3)',
            }}
            onMouseEnter={e => { e.currentTarget.style.opacity = '0.9'; e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 6px 18px rgba(212,168,67,0.4)'; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(212,168,67,0.3)'; }}
          >
            Buy <ArrowUpRight size={11} />
          </a>
        </div>
      </div>
    </div>
  )
}
