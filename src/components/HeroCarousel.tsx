'use client'
import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import { AFFILIATE_BASE } from '@/lib/products'

const slides = [
  {
    id: 0,
    tag: 'Triple Agonist Revolution',
    headline: 'The Most Powerful',
    headlineAccent: 'Fat Loss Peptide',
    headlineEnd: 'Ever Researched',
    sub: 'Retatrutide (GLP-3R) delivers 24.2% body weight reduction in clinical trials — surpassing every anti-obesity agent in history. Triple GLP-1/GIP/Glucagon receptor co-agonism for unmatched metabolic transformation.',
    cta: 'Explore Retatrutide',
    ctaHref: '/products/glp-3r-10mg',
    ctaSecondary: 'Shop All Fat Loss',
    ctaSecondaryHref: '/products?category=metabolic-fat-loss',
    stats: [
      { value: '24.2%', label: 'Weight Loss (Phase 2)' },
      { value: '3×', label: 'Receptor Pathways' },
      { value: '6 Day', label: 'Half-Life' },
    ],
    gradient: 'from-[#c9a84c]/20 via-transparent to-transparent',
    accentColor: '#c9a84c',
    bgPattern: 'metabolic',
  },
  {
    id: 1,
    tag: 'Cellular Regeneration',
    headline: 'Reset Your Skin\'s',
    headlineAccent: 'Biological Clock',
    headlineEnd: 'at the Gene Level',
    sub: 'GHK-Cu activates over 4,000 human genes involved in skin regeneration. The copper peptide that naturally declines 60% by age 60 — research shows it reverses dermal aging at the cellular level.',
    cta: 'Explore GHK-Cu',
    ctaHref: '/products/ghk-cu',
    ctaSecondary: 'All Anti-Aging Peptides',
    ctaSecondaryHref: '/products?category=skin-anti-aging',
    stats: [
      { value: '4,000+', label: 'Genes Modulated' },
      { value: '70%', label: 'Wrinkle Depth Reduction' },
      { value: '50mg', label: 'Research Vial' },
    ],
    gradient: 'from-purple-900/20 via-transparent to-transparent',
    accentColor: '#a78bfa',
    bgPattern: 'skin',
  },
  {
    id: 2,
    tag: 'GH Secretagogue Stack',
    headline: 'Maximize Growth Hormone',
    headlineAccent: 'Without Compromise',
    headlineEnd: 'CJC + Ipamorelin',
    sub: 'The gold-standard GH peptide combination producing pulses 4–8× greater than either compound alone. Selective, clean, and timed perfectly with sleep architecture for overnight recomposition.',
    cta: 'Explore The Stack',
    ctaHref: '/products/cjc1295-ipamorelin',
    ctaSecondary: 'Growth Peptides',
    ctaSecondaryHref: '/products?category=growth-body-comp',
    stats: [
      { value: '4–8×', label: 'GH Pulse Amplification' },
      { value: '0', label: 'Cortisol Impact' },
      { value: 'Stage 3', label: 'Sleep Amplification' },
    ],
    gradient: 'from-blue-900/20 via-transparent to-transparent',
    accentColor: '#60a5fa',
    bgPattern: 'growth',
  },
  {
    id: 3,
    tag: 'Longevity Science',
    headline: 'Lengthen Your Telomeres',
    headlineAccent: 'Extend Your Lifespan',
    headlineEnd: 'at the Cellular Root',
    sub: 'Epithalon activates telomerase — the enzyme that maintains telomere length and is inactivated in most somatic cells. 40 years of research. The only peptide with confirmed telomere elongation data.',
    cta: 'Explore Epithalon',
    ctaHref: '/products/epithalon-50mg',
    ctaSecondary: 'Longevity Peptides',
    ctaSecondaryHref: '/products?category=longevity',
    stats: [
      { value: '40+', label: 'Years of Research' },
      { value: '33–68%', label: 'Lifespan Increase (Animal)' },
      { value: '50mg', label: 'Research Vial' },
    ],
    gradient: 'from-cyan-900/20 via-transparent to-transparent',
    accentColor: '#00d4ff',
    bgPattern: 'longevity',
  },
]

const bgPatterns: Record<string, string> = {
  metabolic: `radial-gradient(ellipse at 80% 50%, #c9a84c08 0%, transparent 60%),
              radial-gradient(ellipse at 20% 80%, #c9a84c05 0%, transparent 50%),
              linear-gradient(135deg, #06060e 0%, #0d0d1a 50%, #06060e 100%)`,
  skin: `radial-gradient(ellipse at 70% 40%, #7c3aed08 0%, transparent 60%),
         radial-gradient(ellipse at 30% 70%, #a78bfa05 0%, transparent 50%),
         linear-gradient(135deg, #06060e 0%, #0d0d1a 50%, #06060e 100%)`,
  growth: `radial-gradient(ellipse at 75% 45%, #3b82f608 0%, transparent 60%),
           radial-gradient(ellipse at 25% 75%, #60a5fa05 0%, transparent 50%),
           linear-gradient(135deg, #06060e 0%, #0d0d1a 50%, #06060e 100%)`,
  longevity: `radial-gradient(ellipse at 72% 42%, #00d4ff08 0%, transparent 60%),
              radial-gradient(ellipse at 28% 72%, #00d4ff05 0%, transparent 50%),
              linear-gradient(135deg, #06060e 0%, #0d0d1a 50%, #06060e 100%)`,
}

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const goTo = useCallback(
    (idx: number) => {
      if (isTransitioning) return
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrent(idx)
        setIsTransitioning(false)
      }, 300)
    },
    [isTransitioning]
  )

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo])
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo])

  useEffect(() => {
    const id = setInterval(next, 7000)
    return () => clearInterval(id)
  }, [next])

  const slide = slides[current]

  return (
    <div className="relative overflow-hidden min-h-[85vh] flex items-center" style={{ background: bgPatterns[slide.bgPattern] }}>
      {/* Mesh grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(${slide.accentColor}22 1px, transparent 1px), linear-gradient(90deg, ${slide.accentColor}22 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: `radial-gradient(circle, ${slide.accentColor} 0%, transparent 70%)` }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div
          className={`transition-all duration-500 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}
        >
          {/* Tag */}
          <div className="inline-flex items-center gap-2 mb-6">
            <span
              className="px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase border"
              style={{
                color: slide.accentColor,
                borderColor: `${slide.accentColor}44`,
                background: `${slide.accentColor}11`,
              }}
            >
              ✦ {slide.tag}
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] mb-6 max-w-3xl">
            <span className="text-white">{slide.headline} </span>
            <br />
            <span style={{ color: slide.accentColor }} className="text-gold-gradient">
              {slide.headlineAccent}
            </span>
            <br />
            <span className="text-white">{slide.headlineEnd}</span>
          </h1>

          {/* Sub */}
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed mb-10">{slide.sub}</p>

          {/* Stats row */}
          <div className="flex flex-wrap gap-6 mb-10">
            {slide.stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-black" style={{ color: slide.accentColor }}>
                  {s.value}
                </div>
                <div className="text-xs text-gray-500 mt-0.5 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link
              href={slide.ctaHref}
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-black transition-all hover:opacity-90 hover:gap-3"
              style={{ background: `linear-gradient(135deg, ${slide.accentColor}, ${slide.accentColor}bb)` }}
            >
              {slide.cta} <ArrowRight size={16} />
            </Link>
            <a
              href={AFFILIATE_BASE}
              target="_blank"
              rel="sponsored noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-gray-300 border border-[#1a1a2e] hover:border-[#c9a84c]/30 hover:text-[#c9a84c] transition-all"
            >
              {slide.ctaSecondary}
            </a>
          </div>
        </div>
      </div>

      {/* Nav arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#0d0d1a]/80 border border-[#1a1a2e] flex items-center justify-center text-gray-400 hover:text-[#c9a84c] hover:border-[#c9a84c]/30 transition-all backdrop-blur-sm"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#0d0d1a]/80 border border-[#1a1a2e] flex items-center justify-center text-gray-400 hover:text-[#c9a84c] hover:border-[#c9a84c]/30 transition-all backdrop-blur-sm"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => goTo(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === current ? 'w-8 bg-[#c9a84c]' : 'w-2 bg-[#1a1a2e] hover:bg-[#c9a84c]/40'
            }`}
          />
        ))}
      </div>

      {/* Disclaimer */}
      <div className="absolute bottom-4 right-4 text-[10px] text-gray-600">
        For research purposes only
      </div>
    </div>
  )
}
