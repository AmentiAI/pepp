'use client'
import Link from 'next/link'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import { AFFILIATE_BASE, categories } from '@/lib/products'

const topProducts = [
  { label: 'GHK-Cu Copper Peptide', slug: 'ghk-cu' },
  { label: 'BPC-157 Recovery', slug: 'bpc157-10mg' },
  { label: 'Epithalon Longevity', slug: 'epithalon-50mg' },
  { label: 'CJC-1295 / Ipamorelin', slug: 'cjc1295-ipamorelin' },
  { label: 'Retatrutide Triple Agonist', slug: 'glp-3r-10mg' },
  { label: 'Tirzepatide Dual Agonist', slug: 'glp-2t-15m' },
  { label: 'Semaglutide GLP-1', slug: 'glp-1s-5mg' },
  { label: 'IGF-1 LR3', slug: 'igf-1lr3' },
]

const catLinks = [
  { label: 'Fat Loss', href: '/categories/metabolic-fat-loss' },
  { label: 'Anti-Aging', href: '/categories/skin-anti-aging' },
  { label: 'Recovery', href: '/categories/recovery-healing' },
  { label: 'Longevity', href: '/categories/longevity' },
  { label: 'Growth & Body Comp', href: '/categories/growth-body-comp' },
  { label: 'All Products', href: '/products' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#050508', borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: 0 }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '5rem 2rem 3rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: '3rem', marginBottom: '4rem' }}>

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1.25rem' }}>
              <Image src="/logo.png" alt="StacksPeptide" width={34} height={34} style={{ borderRadius: 8 }} />
              <span style={{ fontWeight: 900, fontSize: '1.05rem', color: '#fff', letterSpacing: '-0.02em' }}>
                STACKS<span style={{ color: '#d4a843' }}>PEPTIDE</span>
              </span>
            </div>
            <p style={{ fontSize: '1.05rem', color: '#44445a', lineHeight: 1.75, marginBottom: '1.5rem' }}>
              The most comprehensive peptide resource — powered by Apollo Peptide Sciences. Third-party tested, premium grade, shipped fast.
            </p>
            <a href={AFFILIATE_BASE} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '8px 16px', background: 'linear-gradient(135deg, #d4a843, #a07c2e)', color: '#000', fontWeight: 700, fontSize: '1rem', borderRadius: 8, textDecoration: 'none' }}
            >
              Shop Apollo <ExternalLink size={11} />
            </a>
          </div>

          {/* Categories */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '1.25rem' }}>Categories</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {catLinks.map(c => (
                <li key={c.href}>
                  <Link href={c.href} style={{ fontSize: '1.05rem', color: '#44445a', textDecoration: 'none', transition: 'color 0.15s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#d4a843')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#44445a')}
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Products */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '1.25rem' }}>Top Peptides</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {topProducts.map(p => (
                <li key={p.slug}>
                  <Link href={`/products/${p.slug}`} style={{ fontSize: '1.05rem', color: '#44445a', textDecoration: 'none', transition: 'color 0.15s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#d4a843')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#44445a')}
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Disclaimer */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '1.25rem' }}>Disclaimer</h4>
            <div style={{ padding: '1.25rem', background: '#0a0a12', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 12 }}>
              <div style={{ fontSize: '0.62rem', fontWeight: 700, color: '#d4a843', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.6rem' }}>For Lab Use Only</div>
              <p style={{ fontSize: '0.97rem', color: '#6a6a7a', lineHeight: 1.7 }}>
                All products are intended for laboratory lab purposes only. Not approved by the FDA for human consumption. Not for use on humans or animals. For educational and lab purposes only.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.04)', paddingTop: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
          <p style={{ fontSize: '0.97rem', color: '#6a6a7a' }}>
            © {new Date().getFullYear()} StacksPeptide. Products sourced from Apollo Peptide Sciences.
          </p>
          <span style={{ fontSize: '0.97rem', color: '#6a6a7a' }}>
            Affiliate Disclosure: We earn a commission on qualifying purchases.
          </span>
        </div>
      </div>
    </footer>
  )
}
