'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown, ExternalLink, TrendingUp, Sparkles, Activity, Shield, Zap, ArrowRight } from 'lucide-react'
import { AFFILIATE_BASE } from '@/lib/products'

const categories = [
  { label: 'Fat Loss', href: '/categories/metabolic-fat-loss', desc: 'GLP-1, dual & triple agonists', stat: '24.2% weight loss', color: '#d4a843', icon: <TrendingUp size={17} /> },
  { label: 'Anti-Aging', href: '/categories/skin-anti-aging', desc: 'Copper peptides & telomere science', stat: '4,000+ genes modulated', color: '#a78bfa', icon: <Sparkles size={17} /> },
  { label: 'Recovery', href: '/categories/recovery-healing', desc: 'BPC-157, TB-500 & more', stat: '120+ published studies', color: '#22d3ee', icon: <Activity size={17} /> },
  { label: 'Longevity', href: '/categories/longevity', desc: 'Epithalon & NAD+ science', stat: '40+ years of data', color: '#34d399', icon: <Shield size={17} /> },
  { label: 'Growth', href: '/categories/growth-body-comp', desc: 'IGF-1, CJC-1295, Ipamorelin', stat: '4–8× GH amplification', color: '#fb923c', icon: <Zap size={17} /> },
]

const topCompounds = [
  { label: 'Retatrutide', slug: 'retatrutide-10mg', tag: 'Most Potent' },
  { label: 'GHK-Cu', slug: 'ghk-cu-50mg', tag: 'Top Seller' },
  { label: 'BPC-157', slug: 'bpc-157-10mg', tag: 'Most Studied' },
  { label: 'Epithalon', slug: 'epitalon-50mg', tag: 'Longevity' },
  { label: 'IGF-1 LR3', slug: 'igf-1-lr3-1mg', tag: 'Growth' },
  { label: 'Tirzepatide', slug: 'tirzepatide-15mg', tag: 'Fat Loss' },
]

const topNavLinks = [
  { label: 'All Peptides', href: '/products' },
  { label: 'LooksMaxing', href: '/looksmaxxing' },
  { label: 'Stacks', href: '/stacks' },
  { label: 'Guide', href: '/guide' },
  { label: 'FAQ', href: '/faq' },
]

const tickerItems = [
  '⬡ THIRD-PARTY HPLC TESTED',
  '⬡ >98% PURITY GUARANTEED',
  '⬡ CERTIFICATE OF ANALYSIS INCLUDED',
  '⬡ PREMIUM GRADE COMPOUNDS',
  '⬡ FAST TRACKED SHIPPING',
  '⬡ 24 PREMIUM PEPTIDES',
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropOpen, setDropOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 900)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('resize', checkMobile)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const doubled = [...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems]

  return (
    <>
      {/* Ticker */}
      <div style={{ background: '#0a0a14', borderBottom: '1px solid rgba(212,168,67,0.15)', overflow: 'hidden', height: '26px', display: 'flex', alignItems: 'center' }}>
        <div className="ticker-track" style={{ display: 'flex', gap: '3rem' }}>
          {doubled.map((t, i) => (
            <span key={i} style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.15em', color: '#d4a843', whiteSpace: 'nowrap', opacity: 0.85 }}>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Main nav */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: scrolled ? 'rgba(255,255,255,0.98)' : 'rgba(255,255,255,1.0)',
        borderBottom: '1px solid rgba(0,0,0,0.09)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        transition: 'background 0.3s',
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>

          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', flexShrink: 0 }}>
            <Image src="/logo.png" alt="StacksPeptide" width={36} height={36} style={{ borderRadius: 8 }} priority />
            <span style={{ fontWeight: 900, fontSize: '1.1rem', color: '#0a0a14', letterSpacing: '-0.02em' }}>
              STACKS<span style={{ color: '#d4a843' }}>PEPTIDE</span>
            </span>
          </Link>

          {/* Desktop nav */}
          {!isMobile && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '1px' }}>

              {/* Products mega dropdown */}
              <div
                style={{ position: 'relative' }}
                onMouseEnter={() => setDropOpen(true)}
                onMouseLeave={() => setDropOpen(false)}
              >
                <button style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '8px 12px', background: 'none', border: 'none', color: dropOpen ? '#0a0a14' : '#666680', fontSize: '0.875rem', fontWeight: 600, cursor: 'pointer', borderRadius: 8, transition: 'color 0.15s' }}>
                  Products <ChevronDown size={12} style={{ transform: dropOpen ? 'rotate(180deg)' : '', transition: 'transform 0.2s' }} />
                </button>

                {dropOpen && (
                  <div style={{ position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)', paddingTop: 8, width: 720 }}>
                  <div style={{
                    background: '#ffffff',
                    border: '1px solid rgba(0,0,0,0.10)', borderRadius: 20,
                    padding: '1.5rem', boxShadow: '0 32px 80px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.04)',
                  }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1.25fr 1fr', gap: '1.5rem' }}>

                      {/* Left: Categories */}
                      <div>
                        <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#9090a8', marginBottom: '0.75rem' }}>Categories</div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                          {categories.map(item => (
                            <Link key={item.href} href={item.href}
                              style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px', borderRadius: 12, textDecoration: 'none', transition: 'background 0.15s' }}
                              onMouseEnter={e => { e.currentTarget.style.background = '#f7f8fc' }}
                              onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
                            >
                              <div style={{ width: 36, height: 36, borderRadius: 10, background: `${item.color}12`, border: `1px solid ${item.color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: item.color, flexShrink: 0 }}>
                                {item.icon}
                              </div>
                              <div style={{ flex: 1 }}>
                                <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#0a0a14' }}>{item.label}</div>
                                <div style={{ fontSize: '0.97rem', color: '#888898', marginTop: 1 }}>{item.desc}</div>
                              </div>
                              <div style={{ fontSize: '1.05rem', fontWeight: 700, color: item.color, textAlign: 'right', flexShrink: 0, maxWidth: 90 }}>{item.stat}</div>
                            </Link>
                          ))}
                        </div>
                        <Link href="/products"
                          style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: '0.75rem', padding: '10px 12px', background: 'linear-gradient(135deg, rgba(212,168,67,0.08), rgba(212,168,67,0.04))', border: '1px solid rgba(212,168,67,0.2)', borderRadius: 12, textDecoration: 'none', fontSize: '1.05rem', fontWeight: 700, color: '#d4a843' }}
                          onMouseEnter={e => { e.currentTarget.style.background = 'linear-gradient(135deg, rgba(212,168,67,0.14), rgba(212,168,67,0.08))' }}
                          onMouseLeave={e => { e.currentTarget.style.background = 'linear-gradient(135deg, rgba(212,168,67,0.08), rgba(212,168,67,0.04))' }}
                        >
                          View All 24+ Compounds <ArrowRight size={13} />
                        </Link>
                      </div>

                      {/* Right: Top Compounds */}
                      <div>
                        <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#9090a8', marginBottom: '0.75rem' }}>Top Compounds</div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', marginBottom: '1rem' }}>
                          {topCompounds.map(p => (
                            <Link key={p.slug} href={`/products/${p.slug}`}
                              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '9px 12px', borderRadius: 10, textDecoration: 'none', transition: 'background 0.15s' }}
                              onMouseEnter={e => { e.currentTarget.style.background = '#f7f8fc' }}
                              onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
                            >
                              <span style={{ fontSize: '1.05rem', fontWeight: 600, color: '#0a0a14' }}>{p.label}</span>
                              <span style={{ fontSize: '0.6rem', fontWeight: 700, color: '#9090a8', background: '#f0f0f8', padding: '2px 8px', borderRadius: 100 }}>{p.tag}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                )}
              </div>

              {/* Top-level links */}
              {topNavLinks.map(l => (
                <Link key={l.href} href={l.href}
                  style={{ padding: '8px 11px', color: '#666680', fontSize: '0.875rem', fontWeight: 500, textDecoration: 'none', borderRadius: 8, transition: 'color 0.15s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#0a0a14')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#666680')}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          )}

          {/* Right side */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            {!isMobile && (
              <a href={AFFILIATE_BASE} target="_blank" rel="sponsored noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '8px 18px', background: 'linear-gradient(135deg, #d4a843 0%, #a07c2e 100%)', color: '#000', fontWeight: 700, fontSize: '1.05rem', borderRadius: 8, textDecoration: 'none', transition: 'opacity 0.15s, transform 0.15s, box-shadow 0.15s', boxShadow: '0 4px 16px rgba(212,168,67,0.25)' }}
                onMouseEnter={e => { e.currentTarget.style.opacity = '0.9'; e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(212,168,67,0.35)'; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(212,168,67,0.25)'; }}
              >
                Shop Now <ExternalLink size={12} />
              </a>
            )}
            {isMobile && (
              <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: 'none', border: 'none', color: '#555570', cursor: 'pointer', padding: 4, display: 'flex', alignItems: 'center' }}>
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            )}
          </div>
        </div>

        {/* Mobile menu */}
        {isMobile && menuOpen && (
          <div style={{ background: '#f7f8fc', borderTop: '1px solid rgba(0,0,0,0.06)', padding: '1.25rem 1.5rem 1.75rem' }}>
            <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#9090a8', marginBottom: '0.6rem' }}>Categories</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: '1rem' }}>
              {categories.map(item => (
                <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}
                  style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 12px', background: '#ffffff', borderRadius: 10, textDecoration: 'none', border: '1px solid rgba(0,0,0,0.08)' }}
                >
                  <div style={{ color: item.color, flexShrink: 0 }}>{item.icon}</div>
                  <span style={{ fontSize: '1.05rem', fontWeight: 600, color: '#0a0a14' }}>{item.label}</span>
                </Link>
              ))}
            </div>
            <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#9090a8', marginBottom: '0.6rem' }}>Pages</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6, marginBottom: '1.25rem' }}>
              {topNavLinks.map(l => (
                <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '9px', background: '#ffffff', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 10, textDecoration: 'none', fontSize: '1rem', fontWeight: 600, color: '#444458' }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
            <a href={AFFILIATE_BASE} target="_blank" rel="sponsored noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, width: '100%', padding: '12px', background: 'linear-gradient(135deg, #d4a843, #a07c2e)', color: '#000', fontWeight: 700, fontSize: '0.875rem', borderRadius: 10, textDecoration: 'none' }}
            >
              Shop Now <ExternalLink size={14} />
            </a>
          </div>
        )}
      </nav>
    </>
  )
}
