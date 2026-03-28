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
      <Link href={`/products/${product.slug}`} style={{ display: 'block', textDecoration: 'none', position: 'relative', background: '#f3f4f8', overflow: 'hidden', flexShrink: 0 }}>
        <div style={{ position: 'relative', aspectRatio: '1', padding: '1.5rem' }}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            style={{ objectFit: 'contain', padding: '1.5rem', transition: 'transform 0.4s ease' }}
            sizes="(max-width: 768px) 50vw, 300px"
          />
        </div>
        {product.tag && (
          <div style={{ position: 'absolute', top: 10, left: 10 }}>
            <span className={`badge ${tagMap[product.tagColor || 'gold']}`}>{product.tag}</span>
          </div>
        )}
      </Link>

      {/* Body */}
      <div style={{ padding: '1.1rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ fontSize: '0.92rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#d4a843', marginBottom: '0.3rem' }}>
          {product.category}
        </div>

        <Link href={`/products/${product.slug}`} style={{ textDecoration: 'none' }}>
          <h3 style={{ fontSize: '0.875rem', fontWeight: 700, color: '#0a0a14', lineHeight: 1.35, marginBottom: '0.5rem', transition: 'color 0.15s' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#d4a843')}
            onMouseLeave={e => (e.currentTarget.style.color = '#0a0a14')}
          >
            {product.shortName}
          </h3>
        </Link>

        <p style={{ fontSize: '0.87rem', color: '#555570', lineHeight: 1.5, flex: 1, marginBottom: '1rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          {product.summary.slice(0, 90)}...
        </p>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
          <div>
            {product.originalPrice && (
              <span style={{ fontSize: '0.87rem', color: '#9090a8', textDecoration: 'line-through', marginRight: 4 }}>${product.originalPrice.toFixed(2)}</span>
            )}
            <span style={{ fontSize: '1.3rem', fontWeight: 900, color: '#0a0a14', letterSpacing: '-0.02em' }}>${product.price.toFixed(2)}</span>
          </div>

          <a href={AFFILIATE_PRODUCT(product.slug)} target="_blank" rel="sponsored noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '7px 14px', background: 'linear-gradient(135deg, #d4a843, #b8912e)', color: '#000', fontWeight: 700, fontSize: '0.87rem', borderRadius: 8, textDecoration: 'none', transition: 'opacity 0.15s, transform 0.15s' }}
            onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            Buy <ArrowUpRight size={12} />
          </a>
        </div>
      </div>
    </div>
  )
}
