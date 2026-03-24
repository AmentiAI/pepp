'use client'
import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { AFFILIATE_BASE } from '@/lib/products'

const slides = [
  {
    id: 0,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&q=90',
    alt: 'Elite athletic physique representing peak looksmaxing potential',
    eyebrow: 'Looksmaxing Compounds',
    title: 'Reach Your',
    accent: 'Physical Peak',
    body: 'The most advanced peptides for body recomposition, muscle hyperplasia, and aesthetic optimization — sourced from our supplier.',
    cta: 'Growth Peptides',
    ctaHref: '/categories/growth-body-comp',
    ctaColor: '#d4a843',
  },
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1920&q=90',
    alt: 'Laboratory peptide vials and science equipment',
    eyebrow: 'Third-Party Tested · >98% Purity',
    title: 'Premium Grade',
    accent: 'Every Batch',
    body: 'Independent HPLC purity testing and mass spectrometry identity confirmation. Certificate of Analysis documentation with every order.',
    cta: 'View Full Catalog',
    ctaHref: '/products',
    ctaColor: '#22d3ee',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1920&q=90',
    alt: 'Glowing healthy skin representing anti-aging peptide benefits',
    eyebrow: 'Anti-Aging Peptide Science',
    title: 'Reverse Skin Aging',
    accent: 'at the Source',
    body: 'GHK-Cu activates 4,000+ genes. Epithalon elongates telomeres. SNAP-8 targets expression wrinkles at the neuromuscular junction.',
    cta: 'Anti-Aging Peptides',
    ctaHref: '/categories/skin-anti-aging',
    ctaColor: '#a78bfa',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=90',
    alt: 'Peak performance athlete body composition',
    eyebrow: 'Phase 2 Clinical Data',
    title: '24.2% Weight Loss',
    accent: 'Documented & Verified',
    body: 'Retatrutide\'s triple GLP-1/GIP/Glucagon receptor co-agonism produced the largest weight reduction ever recorded in a pharmacological trial.',
    cta: 'Fat Loss Peptides',
    ctaHref: '/categories/metabolic-fat-loss',
    ctaColor: '#d4a843',
  },
]

export default function TopImageBanner() {
  const [current, setCurrent] = useState(0)
  const [fading, setFading] = useState(false)

  const goTo = useCallback((idx: number) => {
    setFading(true)
    setTimeout(() => {
      setCurrent(idx)
      setFading(false)
    }, 350)
  }, [])

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo])

  useEffect(() => {
    const id = setInterval(next, 7000)
    return () => clearInterval(id)
  }, [next])

  const s = slides[current]

  return (
    <div style={{ position: 'relative', width: '100%', height: 'clamp(520px, 80vh, 760px)', overflow: 'hidden', background: '#08080f' }}>

      {/* Background images — crossfade */}
      {slides.map((slide, i) => (
        <div key={slide.id} style={{ position: 'absolute', inset: 0, opacity: i === current ? 1 : 0, transition: 'opacity 0.8s ease', zIndex: 0 }}>
          <Image src={slide.image} alt={slide.alt} fill style={{ objectFit: 'cover', objectPosition: 'center' }} sizes="100vw" priority={i === 0} />
          {/* Multi-layer overlay for readability */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(8,8,15,0.92) 0%, rgba(8,8,15,0.65) 55%, rgba(8,8,15,0.2) 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(8,8,15,0.3) 0%, transparent 40%, rgba(8,8,15,0.85) 100%)' }} />
        </div>
      ))}

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', alignItems: 'center' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem', width: '100%' }}>
          <div style={{ maxWidth: 640, opacity: fading ? 0 : 1, transform: fading ? 'translateY(10px)' : 'translateY(0)', transition: 'opacity 0.4s, transform 0.4s' }}>

            {/* Eyebrow */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(212,168,67,0.12)', border: '1px solid rgba(212,168,67,0.25)', borderRadius: 100, padding: '5px 14px', marginBottom: '1.5rem' }}>
              <div style={{ width: 5, height: 5, borderRadius: '50%', background: s.ctaColor }} />
              <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#d4a843' }}>{s.eyebrow}</span>
            </div>

            {/* Headline */}
            <h1 className="heading-xl" style={{ color: '#fff', marginBottom: '0.5rem' }}>
              {s.title}
            </h1>
            <h1 className="heading-xl" style={{ color: s.ctaColor, marginBottom: '1.25rem', filter: 'drop-shadow(0 0 30px currentColor)' }}>
              {s.accent}
            </h1>

            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.65, marginBottom: '2rem', maxWidth: 520 }}>
              {s.body}
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              <Link href={s.ctaHref} className="btn-primary" style={{ background: `linear-gradient(135deg, ${s.ctaColor}, ${s.ctaColor}aa)` }}>
                {s.cta} <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div style={{ position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)', zIndex: 20, display: 'flex', gap: 8, alignItems: 'center' }}>
        {slides.map((_, i) => (
          <button key={i} onClick={() => goTo(i)}
            style={{ height: 3, borderRadius: 3, border: 'none', cursor: 'pointer', background: i === current ? '#d4a843' : 'rgba(255,255,255,0.2)', transition: 'all 0.3s', width: i === current ? 32 : 10, padding: 0 }}
          />
        ))}
      </div>

      {/* Slide number */}
      <div style={{ position: 'absolute', top: 24, right: 24, zIndex: 20, fontFamily: 'monospace', fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.06em' }}>
        {String(current + 1).padStart(2,'0')} / {String(slides.length).padStart(2,'0')}
      </div>
    </div>
  )
}
