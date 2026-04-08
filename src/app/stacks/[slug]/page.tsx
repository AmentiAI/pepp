import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, ExternalLink, CheckCircle, ArrowLeft } from 'lucide-react'
import { stacks, getStackById } from '@/lib/stacks'
import { AFFILIATE_BASE, AFFILIATE_PRODUCT } from '@/lib/products'
import RelatedLinks from '@/components/RelatedLinks'

export async function generateStaticParams() {
  return stacks.map(s => ({ slug: s.id }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const stack = getStackById(slug)
  if (!stack) return { title: 'Stack Not Found' }
  return {
    title: stack.seoTitle,
    description: stack.seoDescription,
    keywords: [
      'peptide stack',
      'peptide protocol',
      stack.level.toLowerCase(),
      ...stack.compounds.map(c => `${c.name.toLowerCase()} peptide`),
      'third-party tested peptide',
      'peptide stacking guide',
    ],
    alternates: { canonical: `https://www.stackspeptide.com/stacks/${stack.id}` },
    openGraph: {
      title: stack.seoTitle,
      description: stack.seoDescription,
      type: 'article',
      url: `https://www.stackspeptide.com/stacks/${stack.id}`,
      images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: `${stack.name} — StacksPeptide` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: stack.seoTitle,
      description: stack.seoDescription,
      images: ['/og-image.jpg'],
    },
  }
}

export default async function StackPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const stack = getStackById(slug)
  if (!stack) notFound()

  const stackSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: stack.name,
    description: stack.description,
    totalTime: `P${stack.duration.replace(/\s/g, '')}`,
    step: stack.compounds.map((c, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: c.name,
      text: `${c.role} — Dose: ${c.dose}`,
      description: `${c.name}: ${c.role}. Protocol dose: ${c.dose}.`,
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.stackspeptide.com' },
      { '@type': 'ListItem', position: 2, name: 'Stacks', item: 'https://www.stackspeptide.com/stacks' },
      { '@type': 'ListItem', position: 3, name: stack.name, item: `https://www.stackspeptide.com/stacks/${stack.id}` },
    ],
  }

  const otherStacks = stacks.filter(s => s.id !== stack.id).slice(0, 3)

  return (
    <div style={{ background: '#ffffff', minHeight: '100vh' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(stackSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <div style={{ background: 'linear-gradient(180deg, #fdf8ff 0%, #ffffff 100%)', borderBottom: '1px solid rgba(0,0,0,0.07)', padding: '4rem 2rem 3.5rem' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <Link href="/stacks" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: '0.9rem', fontWeight: 600, color: '#9090a8', textDecoration: 'none', marginBottom: '1.5rem' }}>
            <ArrowLeft size={14} /> All Stacks
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '0.75rem' }}>
            <span style={{ fontSize: '0.7rem', fontWeight: 800, color: stack.levelColor, background: `${stack.levelColor}12`, border: `1px solid ${stack.levelColor}25`, padding: '3px 12px', borderRadius: 100, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{stack.level}</span>
            <span style={{ fontSize: '0.9rem', color: '#9090a8', fontWeight: 600 }}>{stack.duration}</span>
          </div>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 900, color: '#0a0a14', letterSpacing: '-0.03em', lineHeight: 1.05, marginBottom: '0.75rem' }}>{stack.name}</h1>
          <p style={{ fontSize: '1.15rem', color: '#555570', lineHeight: 1.75, maxWidth: 700, marginBottom: '2rem', fontStyle: 'italic' }}>{stack.tagline}</p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href={AFFILIATE_BASE} target="_blank" rel="sponsored noopener noreferrer" className="btn-primary">
              Source All Compounds <ExternalLink size={14} />
            </a>
            <Link href="/stacks" className="btn-secondary">All Protocols <ArrowRight size={14} /></Link>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 2rem' }}>

        {/* Stat + description */}
        <section className="rg-stack-hero" style={{ padding: '3rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div style={{ textAlign: 'center', padding: '2rem', background: `${stack.color}08`, border: `1px solid ${stack.color}20`, borderRadius: 20 }}>
            <div style={{ fontSize: '3.5rem', fontWeight: 900, color: stack.color, letterSpacing: '-0.05em', lineHeight: 1 }}>{stack.stat}</div>
            <div style={{ fontSize: '0.9rem', color: '#666688', marginTop: 8, fontWeight: 600 }}>{stack.statLabel}</div>
          </div>
          <div>
            <p style={{ fontSize: '1.1rem', color: '#444458', lineHeight: 1.85 }}>{stack.description}</p>
          </div>
        </section>

        {/* Compounds */}
        <section style={{ padding: '3rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#0a0a14', marginBottom: '1.5rem' }}>Stack Compounds</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {stack.compounds.map((c, i) => (
              <Link key={c.name} href={`/products/${c.slug}`}
                style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.5rem 1.75rem', background: '#f9f9fd', border: '1px solid rgba(0,0,0,0.07)', borderRadius: 16, textDecoration: 'none' }}
              >
                <div style={{ width: 36, height: 36, borderRadius: 10, background: `${stack.color}15`, border: `1px solid ${stack.color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '1rem', color: stack.color, flexShrink: 0 }}>
                  {i + 1}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 800, color: stack.color, fontSize: '1.05rem', marginBottom: '0.2rem' }}>{c.name}</div>
                  <div style={{ fontSize: '0.95rem', color: '#555570' }}>{c.role}</div>
                </div>
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <div style={{ fontSize: '0.9rem', color: '#9090a8', fontWeight: 600 }}>{c.dose}</div>
                  <a href={AFFILIATE_PRODUCT(c.slug)} target="_blank" rel="sponsored noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 4, marginTop: 4, fontSize: '0.8rem', fontWeight: 700, color: stack.color, textDecoration: 'none' }}
                  >
                    Buy <ExternalLink size={11} />
                  </a>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section style={{ padding: '3rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#0a0a14', marginBottom: '1.5rem' }}>Documented Outcomes</h2>
          <div className="rg-2col" style={{ gap: '1rem' }}>
            {stack.benefits.map(b => (
              <div key={b} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', padding: '1.25rem', background: '#f9f9fd', borderRadius: 14, border: '1px solid rgba(0,0,0,0.07)' }}>
                <CheckCircle size={16} style={{ color: stack.color, flexShrink: 0, marginTop: 2 }} />
                <span style={{ fontSize: '1rem', color: '#444458', lineHeight: 1.65 }}>{b}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Other stacks */}
        <section style={{ padding: '3rem 0' }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 900, color: '#0a0a14', marginBottom: '1.25rem' }}>Other Protocols</h2>
          <div className="rg-3col" style={{ gap: '1rem' }}>
            {otherStacks.map(s => (
              <Link key={s.id} href={`/stacks/${s.id}`}
                style={{ padding: '1.5rem', background: '#f9f9fd', border: '1px solid rgba(0,0,0,0.07)', borderRadius: 16, textDecoration: 'none' }}
              >
                <div style={{ fontSize: '0.65rem', fontWeight: 800, color: s.levelColor, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.3rem' }}>{s.level}</div>
                <div style={{ fontWeight: 800, color: '#0a0a14', fontSize: '1rem', marginBottom: '0.3rem', lineHeight: 1.3 }}>{s.name}</div>
                <div style={{ fontSize: '0.88rem', color: '#666688' }}>{s.duration}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: '0.875rem', fontSize: '0.88rem', fontWeight: 700, color: s.color }}>
                  View Protocol <ArrowRight size={12} />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Internal links */}
        <section style={{ padding: '0 0 2rem' }}>
          <RelatedLinks currentPath={`/stacks/${stack.id}`} />
        </section>

        {/* CTA */}
        <section style={{ padding: '0 0 5rem' }}>
          <div style={{ background: 'linear-gradient(135deg, #fffbf0, #f7f8fc)', border: '1px solid rgba(212,168,67,0.2)', borderRadius: 24, padding: '3rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#0a0a14', marginBottom: '0.75rem' }}>Source Every Compound from our supplier</h2>
            <p style={{ color: '#555570', fontSize: '1rem', maxWidth: 500, margin: '0 auto 1.75rem' }}>
              Every compound in this stack — independently third-party tested, premium grade, with CoA documentation.
            </p>
            <a href={AFFILIATE_BASE} target="_blank" rel="sponsored noopener noreferrer" className="btn-primary" style={{ fontSize: '1rem', padding: '0.9rem 2.5rem' }}>
              Shop Now <ExternalLink size={16} />
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
