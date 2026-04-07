import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ExternalLink, ChevronRight, CheckCircle, FlaskConical, ArrowRight, Zap, Shield } from 'lucide-react'
import ProductCard from '@/components/ProductCard'
import RelatedLinks from '@/components/RelatedLinks'
import ResearchCard from '@/components/ResearchCard'
import { products, getProductBySlug, getRelatedProducts, AFFILIATE_PRODUCT, AFFILIATE_BASE } from '@/lib/products'

interface Props { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return products.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) return {}
  const titleStr = `${product.shortName}: ${product.headline} | StacksPeptide`
  const canonical = `https://www.stackspeptide.com/products/${product.slug}`
  return {
    title: { absolute: titleStr },
    description: `${product.summary} Third-party HPLC tested >98% purity. Certificate of Analysis included.`,
    keywords: [
      ...product.keywords,
      `${product.shortName} science`,
      `buy ${product.shortName}`,
      `${product.shortName} peptide`,
      `${product.category.toLowerCase()} peptides`,
      'third-party tested peptide',
      'hplc verified peptide',
      'premium grade peptide',
    ],
    openGraph: {
      title: titleStr,
      description: product.summary,
      url: canonical,
      siteName: 'StacksPeptide',
      type: 'website',
      images: [{ url: product.image, alt: product.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title: titleStr,
      description: product.summary.slice(0, 155),
      images: [product.image],
    },
    alternates: { canonical },
  }
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) notFound()

  const related = getRelatedProducts(product.relatedSlugs)
  const buyUrl = AFFILIATE_PRODUCT(product.slug)

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.summary,
    image: product.image,
    brand: { '@type': 'Brand', name: 'StacksPeptide' },
    category: product.category,
    ...(product.casNumber ? { identifier: product.casNumber } : {}),
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: product.price.toFixed(2),
      availability: 'https://schema.org/InStock',
      url: `https://www.stackspeptide.com/products/${slug}`,
      seller: { '@type': 'Organization', name: 'StacksPeptide' },
    },
    additionalProperty: [
      { '@type': 'PropertyValue', name: 'Purity', value: '>98% (HPLC verified)' },
      { '@type': 'PropertyValue', name: 'Form', value: 'Lyophilized Powder' },
      { '@type': 'PropertyValue', name: 'Size', value: product.size },
      { '@type': 'PropertyValue', name: 'Testing', value: 'Third-Party CoA' },
    ],
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.stackspeptide.com' },
      { '@type': 'ListItem', position: 2, name: 'All Research Peptides', item: 'https://www.stackspeptide.com/products' },
      { '@type': 'ListItem', position: 3, name: product.shortName, item: `https://www.stackspeptide.com/products/${product.slug}` },
    ],
  }

  return (
    <div style={{ background: '#ffffff', minHeight: '100vh' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" style={{ background: '#f7f8fc', borderBottom: '1px solid rgba(0,0,0,0.07)', padding: '0.85rem 2rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.87rem', color: '#9090a8' }}>
          <Link href="/" className="hover-gold" style={{ color: '#9090a8', textDecoration: 'none', transition: 'color 0.15s' }}>Home</Link>
          <ChevronRight size={11} />
          <Link href="/products" className="hover-gold" style={{ color: '#9090a8', textDecoration: 'none', transition: 'color 0.15s' }}>All Research Peptides</Link>
          <ChevronRight size={11} />
          <span style={{ color: '#555570' }}>{product.shortName}</span>
        </div>
      </nav>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '3.5rem 2rem' }}>

        {/* Hero grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginBottom: '5rem', alignItems: 'start' }}>

          {/* Image panel */}
          <div>
            <div style={{ position: 'relative', aspectRatio: '1', background: '#f3f4f8', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 24, overflow: 'hidden', marginBottom: '1rem' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(212,168,67,0.04) 0%, transparent 65%)' }} />
              <Image src={product.image} alt={`${product.name} — ${product.category} research peptide, ≥98% purity, third-party HPLC tested`} fill style={{ objectFit: 'contain', padding: '3rem' }} sizes="(max-width: 1024px) 100vw, 50vw" priority />
              {product.tag && (
                <div style={{ position: 'absolute', top: 16, left: 16 }}>
                  <span className={`badge badge-${product.tagColor || 'gold'}`}>{product.tag}</span>
                </div>
              )}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
              {[
                { icon: <FlaskConical size={14} />, label: 'HPLC Tested' },
                { icon: <Shield size={14} />, label: 'CoA Included' },
                { icon: <Zap size={14} />, label: 'Fast Shipping' },
              ].map(b => (
                <div key={b.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, padding: '0.875rem', background: '#f7f8fc', border: '1px solid rgba(0,0,0,0.07)', borderRadius: 12, textAlign: 'center' }}>
                  <span style={{ color: '#d4a843' }}>{b.icon}</span>
                  <span style={{ fontSize: '1.05rem', fontWeight: 600, color: '#888898' }}>{b.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Info panel */}
          <div>
            <Link href={`/products?category=${product.categorySlug}`} style={{ fontSize: '1rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#d4a843', textDecoration: 'none', display: 'inline-block', marginBottom: '0.75rem' }}>
              {product.category}
            </Link>
            <h1 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 900, color: '#0a0a14', lineHeight: 1.08, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
              {product.name}
            </h1>
            <p style={{ fontSize: '1rem', color: '#666688', lineHeight: 1.7, fontStyle: 'italic', borderLeft: '2px solid rgba(212,168,67,0.3)', paddingLeft: '1rem', marginBottom: '1.25rem' }}>
              {product.headline}
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, marginBottom: '2rem', color: '#555570' }}>
              {product.summary}
            </p>

            {/* Price + Buy CTA */}
            <div style={{ background: '#f7f8fc', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 18, padding: '1.75rem', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <div>
                  {product.originalPrice && (
                    <span style={{ fontSize: '0.875rem', color: '#9090a8', textDecoration: 'line-through', marginRight: 8 }}>${product.originalPrice.toFixed(2)}</span>
                  )}
                  <span style={{ fontSize: '2.8rem', fontWeight: 900, color: '#0a0a14', letterSpacing: '-0.04em', lineHeight: 1 }}>${product.price.toFixed(2)}</span>
                  <span style={{ fontSize: '1.05rem', color: '#9090a8', marginLeft: 6 }}>/ {product.size}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '5px 12px', background: 'rgba(52,211,153,0.08)', border: '1px solid rgba(52,211,153,0.2)', borderRadius: 100 }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#34d399' }} />
                  <span style={{ fontSize: '1.05rem', fontWeight: 600, color: '#34d399' }}>In Stock</span>
                </div>
              </div>
              <a href={buyUrl} target="_blank" rel="sponsored noopener noreferrer" className="hover-dim hover-lift"
                style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '1rem', background: 'linear-gradient(135deg, #d4a843, #a07c2e)', color: '#000', fontWeight: 900, fontSize: '1rem', borderRadius: 12, textDecoration: 'none', transition: 'opacity 0.15s, transform 0.15s', boxShadow: '0 6px 24px rgba(212,168,67,0.3)', marginBottom: '0.75rem' }}
              >
                Buy Now <ExternalLink size={16} />
              </a>
              <p style={{ fontSize: '1.05rem', color: '#9090a8', textAlign: 'center' }}>Secure checkout · Third-party tested</p>
            </div>

            {/* Quick specs */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem' }}>
              {[
                { label: 'Size', value: product.size },
                { label: 'Purity', value: '>98% (HPLC)' },
                ...(product.casNumber ? [{ label: 'CAS', value: product.casNumber }] : []),
                { label: 'Form', value: 'Lyophilized Powder' },
                { label: 'Testing', value: 'Third-Party CoA' },
                { label: 'Category', value: product.category },
              ].map(spec => (
                <div key={spec.label} style={{ padding: '0.875rem', background: '#f7f8fc', border: '1px solid rgba(0,0,0,0.06)', borderRadius: 12 }}>
                  <div style={{ fontSize: '0.62rem', color: '#9090a8', marginBottom: '0.2rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{spec.label}</div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0a0a14' }}>{spec.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content + sidebar */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: '4rem', marginBottom: '5rem', alignItems: 'start' }}>

          {/* Main content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>

            {/* Description */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: '1.5rem' }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(212,168,67,0.1)', border: '1px solid rgba(212,168,67,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#d4a843' }}>
                  <FlaskConical size={16} />
                </div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#0a0a14', letterSpacing: '-0.02em' }}>{product.headline}</h2>
              </div>
              <p style={{ fontSize: '1.05rem', color: '#555570', lineHeight: 1.85 }}>{product.description}</p>
            </div>

            {/* Benefits */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: '1.5rem' }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(212,168,67,0.1)', border: '1px solid rgba(212,168,67,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#d4a843' }}>
                  <CheckCircle size={16} />
                </div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#0a0a14', letterSpacing: '-0.02em' }}>{product.shortName} Documented Benefits: {product.benefits.length} Documented Mechanisms</h2>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {product.benefits.map((b, i) => (
                  <div key={b.title} className="hover-card-border" style={{ background: '#f7f8fc', border: '1px solid rgba(0,0,0,0.07)', borderRadius: 16, padding: '1.25rem 1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start', transition: 'border-color 0.2s' }}>
                    <div style={{ width: 28, height: 28, borderRadius: 8, background: 'rgba(212,168,67,0.1)', border: '1px solid rgba(212,168,67,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '0.87rem', color: '#d4a843', flexShrink: 0, marginTop: 1 }}>
                      {i + 1}
                    </div>
                    <div>
                      <h3 style={{ fontWeight: 700, color: '#0a0a14', marginBottom: '0.35rem', fontSize: '1.05rem' }}>{b.title}</h3>
                      <p style={{ fontSize: '1.05rem', color: '#666688', lineHeight: 1.7 }}>{b.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mechanism */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: '1.5rem' }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(212,168,67,0.1)', border: '1px solid rgba(212,168,67,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#d4a843' }}>
                  <Zap size={16} />
                </div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#0a0a14', letterSpacing: '-0.02em' }}>How {product.shortName} Works: Molecular Mechanism & Pathway</h2>
              </div>
              <div style={{ background: '#f7f8fc', border: '1px solid rgba(0,0,0,0.06)', borderLeft: '3px solid rgba(212,168,67,0.5)', borderRadius: '0 16px 16px 0', padding: '1.5rem 1.75rem' }}>
                <p style={{ fontSize: '1rem', color: '#555570', lineHeight: 1.85 }}>{product.mechanism}</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', position: 'sticky', top: 80 }}>

            {/* Research highlights */}
            <div style={{ background: '#f7f8fc', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 18, padding: '1.5rem' }}>
              <h3 style={{ fontWeight: 700, color: '#0a0a14', marginBottom: '1.25rem', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ color: '#d4a843' }}>◈</span> Key Highlights
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {product.researchHighlights.map(h => (
                  <li key={h} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#d4a843', marginTop: 6, flexShrink: 0 }} />
                    <span style={{ fontSize: '1rem', color: '#555570', lineHeight: 1.65 }}>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ideal for */}
            <div style={{ background: '#f7f8fc', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 18, padding: '1.5rem' }}>
              <h3 style={{ fontWeight: 700, color: '#0a0a14', marginBottom: '1.25rem', fontSize: '1rem' }}>Ideal For</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {product.idealFor.map(item => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <CheckCircle size={12} style={{ color: '#d4a843', flexShrink: 0 }} />
                    <span style={{ fontSize: '1rem', color: '#555570' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sticky buy box */}
            <div style={{ background: 'linear-gradient(135deg, #fffbf0 0%, #f9f9fd 100%)', border: '1px solid rgba(212,168,67,0.2)', borderRadius: 18, padding: '1.5rem' }}>
              <div style={{ fontSize: '0.62rem', fontWeight: 700, color: '#d4a843', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.3rem' }}>Research Grade</div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0a0a14', letterSpacing: '-0.04em', lineHeight: 1, marginBottom: '1.25rem' }}>${product.price.toFixed(2)}</div>
              <a href={buyUrl} target="_blank" rel="sponsored noopener noreferrer" className="hover-dim"
                style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center', gap: 6, padding: '0.85rem', background: 'linear-gradient(135deg, #d4a843, #a07c2e)', color: '#000', fontWeight: 700, fontSize: '1rem', borderRadius: 10, textDecoration: 'none', marginBottom: '0.6rem', transition: 'opacity 0.15s' }}
              >
                Buy Now <ExternalLink size={13} />
              </a>
              <a href={AFFILIATE_BASE} target="_blank" rel="sponsored noopener noreferrer" className="hover-gold-border"
                style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center', gap: 6, padding: '0.75rem', background: 'transparent', border: '1px solid rgba(0,0,0,0.12)', color: '#555570', fontSize: '1.05rem', fontWeight: 600, borderRadius: 10, textDecoration: 'none', transition: 'border-color 0.15s, color 0.15s' }}
              >
                Shop All Products
              </a>
              <p style={{ fontSize: '1rem', color: '#9090a8', textAlign: 'center', marginTop: '0.75rem' }}>Third-party tested · CoA included</p>
            </div>

            {/* Disclaimer */}
            <div style={{ background: '#f7f8fc', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 18, padding: '1.25rem' }}>
              <div style={{ fontSize: '0.6rem', fontWeight: 700, color: '#9090a8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>⚠ For Lab Use Only</div>
              <p style={{ fontSize: '0.97rem', color: '#777788', lineHeight: 1.65 }}>
                Intended for laboratory use only. Not for human or animal consumption. Not FDA approved. Handle in appropriate lab settings only.
              </p>
            </div>
          </div>
        </div>

        {/* Research Findings Section */}
        {product.researchHighlights.length > 0 && (
          <div style={{ borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '4rem', marginBottom: '4rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
              <div>
                <div className="section-label">Published Evidence</div>
                <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 900, color: '#0a0a14', letterSpacing: '-0.03em', marginBottom: '0.75rem' }}>
                  What the Research Shows
                </h2>
                <p style={{ fontSize: '1rem', color: '#666688', lineHeight: 1.8, marginBottom: '2rem' }}>
                  The following data points are derived from peer-reviewed preclinical and clinical studies on {product.shortName}.
                  All studies cited in compound profiles are indexed in PubMed or published in peer-reviewed journals.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {product.researchHighlights.map((highlight, i) => {
                    const colors = ['#d4a843', '#a78bfa', '#22d3ee', '#34d399', '#fb923c', '#60a5fa']
                    const color = colors[i % colors.length]
                    return (
                      <div
                        key={highlight}
                        style={{
                          display: 'flex',
                          gap: '1rem',
                          padding: '1rem 1.25rem',
                          background: '#f9f9fd',
                          border: '1px solid rgba(0,0,0,0.07)',
                          borderRadius: 14,
                          alignItems: 'flex-start',
                        }}
                      >
                        <div
                          style={{
                            width: 24,
                            height: 24,
                            borderRadius: '50%',
                            background: `${color}12`,
                            border: `1.5px solid ${color}35`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '0.7rem',
                            fontWeight: 900,
                            color,
                            flexShrink: 0,
                            marginTop: 2,
                          }}
                        >
                          {i + 1}
                        </div>
                        <p style={{ fontSize: '0.92rem', color: '#444458', lineHeight: 1.7 }}>{highlight}</p>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div>
                <div className="section-label">Quality Assurance</div>
                <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 900, color: '#0a0a14', letterSpacing: '-0.03em', marginBottom: '0.75rem' }}>
                  Third-Party Verified Every Batch
                </h2>
                <p style={{ fontSize: '1rem', color: '#666688', lineHeight: 1.8, marginBottom: '2rem' }}>
                  Each vial of {product.shortName} is independently tested by a third-party laboratory before fulfillment.
                  You receive the actual CoA (Certificate of Analysis) documentation with your order.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  {[
                    { label: 'Purity Standard', value: '≥98% HPLC', color: '#d4a843' },
                    { label: 'Identity Confirm', value: 'Mass Spec (MS)', color: '#a78bfa' },
                    { label: 'Documentation', value: 'CoA Every Order', color: '#22d3ee' },
                    { label: 'Testing Type', value: 'Third-Party Lab', color: '#34d399' },
                  ].map((spec) => (
                    <div
                      key={spec.label}
                      style={{
                        padding: '1.25rem',
                        background: '#f9f9fd',
                        border: '1px solid rgba(0,0,0,0.07)',
                        borderRadius: 16,
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                    >
                      <div
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          height: 2,
                          background: `linear-gradient(90deg, ${spec.color}, transparent)`,
                        }}
                      />
                      <div style={{ fontSize: '1.1rem', fontWeight: 900, color: spec.color, marginBottom: '0.3rem' }}>
                        {spec.value}
                      </div>
                      <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#888898', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                        {spec.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Related products */}
        {related.length > 0 && (
          <div style={{ borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '4rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <div className="section-label">You May Also Like</div>
                <h2 className="heading-lg" style={{ color: '#0a0a14' }}>Related Peptides</h2>
              </div>
              <Link href="/products" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: '0.97rem', color: '#d4a843', textDecoration: 'none', fontWeight: 600 }}>
                View All <ArrowRight size={14} />
              </Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
              {related.map(p => <ProductCard key={p.slug} product={p} />)}
            </div>
          </div>
        )}

        {/* Internal links */}
        <div style={{ borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '2.5rem' }}>
          <RelatedLinks currentPath={`/products/${product.slug}`} />
        </div>
      </div>
    </div>
  )
}
