'use client'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
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
    <div className="card" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', height: '100%' }}>

      {/* Image */}
      <Link
        href={`/products/${product.slug}`}
        style={{ display: 'block', textDecoration: 'none', position: 'relative', background: '#f3f4f8', overflow: 'hidden', flexShrink: 0 }}
      >
        <div className="product-card-img" style={{ position: 'relative', aspectRatio: '1', padding: '1.25rem' }}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            style={{ objectFit: 'contain', padding: '1rem', transition: 'transform 0.4s ease' }}
            sizes="(max-width: 580px) 45vw, (max-width: 768px) 40vw, 300px"
          />
        </div>
        {product.tag && (
          <div style={{ position: 'absolute', top: 8, left: 8 }}>
            <span className={`badge ${tagMap[product.tagColor || 'gold']}`}>{product.tag}</span>
          </div>
        )}
      </Link>

      {/* Body */}
      <div className="product-card-body" style={{ padding: '1rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#d4a843', marginBottom: '0.25rem' }}>
          {product.category}
        </div>

        <Link href={`/products/${product.slug}`} style={{ textDecoration: 'none' }}>
          <h3
            className="product-card-name"
            style={{ fontSize: '0.92rem', fontWeight: 700, color: '#0a0a14', lineHeight: 1.3, marginBottom: '0.4rem', transition: 'color 0.15s' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#d4a843')}
            onMouseLeave={e => (e.currentTarget.style.color = '#0a0a14')}
          >
            {product.shortName}
          </h3>
        </Link>

        <p style={{ fontSize: '0.82rem', color: '#666688', lineHeight: 1.5, flex: 1, marginBottom: '0.875rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          {product.summary.slice(0, 90)}…
        </p>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', marginTop: 'auto' }}>
          <div style={{ flexShrink: 0 }}>
            {product.originalPrice && (
              <span style={{ fontSize: '0.75rem', color: '#9090a8', textDecoration: 'line-through', marginRight: 3 }}>${product.originalPrice.toFixed(2)}</span>
            )}
            <span className="product-card-price" style={{ fontSize: '1.2rem', fontWeight: 900, color: '#0a0a14', letterSpacing: '-0.02em' }}>${product.price.toFixed(2)}</span>
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
              padding: '8px 14px',
              minHeight: 38,
              background: 'linear-gradient(135deg, #d4a843, #b8912e)',
              color: '#000',
              fontWeight: 700,
              fontSize: '0.82rem',
              borderRadius: 8,
              textDecoration: 'none',
              transition: 'opacity 0.15s, transform 0.15s',
              touchAction: 'manipulation',
              WebkitTapHighlightColor: 'transparent',
              flexShrink: 0,
            }}
            onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            Buy <ArrowUpRight size={11} />
          </a>
        </div>
      </div>
    </div>
  )
}
