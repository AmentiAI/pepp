'use client'
import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import { AFFILIATE_BASE } from '@/lib/products'

const banners = [
  {
    id: 0,
    eyebrow: 'New Arrivals',
    title: 'Retatrutide Is Here',
    body: 'The triple GLP-1/GIP/Glucagon agonist that set a new world record for pharmacological fat loss. 24.2% weight reduction in Phase 2. Available now for research.',
    cta: 'Shop Retatrutide',
    href: '/products?category=metabolic-fat-loss',
    accent: '#c9a84c',
    from: '#c9a84c',
    bg: 'from-[#1a1200] via-[#0d0d1a] to-[#06060e]',
  },
  {
    id: 1,
    eyebrow: 'Bundles',
    title: 'Stack & Save',
    body: 'Multi-vial research bundles deliver the most tirzepatide or retatrutide per dollar. The serious researcher\'s choice for extended-duration metabolic studies.',
    cta: 'View All Bundles',
    href: '/products?category=bundles',
    accent: '#34d399',
    from: '#34d399',
    bg: 'from-[#001a0d] via-[#0d0d1a] to-[#06060e]',
  },
  {
    id: 2,
    eyebrow: 'Anti-Aging Research',
    title: 'Reverse The Biological Clock',
    body: 'GHK-Cu, Epithalon, and SNAP-8 represent the pinnacle of anti-aging peptide science. Modulate over 4,000 genes, activate telomerase, and achieve younger-looking skin at the molecular level.',
    cta: 'Explore Anti-Aging',
    href: '/products?category=skin-anti-aging',
    accent: '#a78bfa',
    from: '#a78bfa',
    bg: 'from-[#0d0014] via-[#0d0d1a] to-[#06060e]',
  },
  {
    id: 3,
    eyebrow: 'Recovery Stack',
    title: 'BPC-157 + TB-500',
    body: 'The legendary healing peptide duo. BPC-157 activates VEGF-driven angiogenesis while TB-500 mobilizes actin for systemic tissue repair. The gold-standard recovery research stack.',
    cta: 'Shop Recovery',
    href: '/products?category=recovery-healing',
    accent: '#60a5fa',
    from: '#60a5fa',
    bg: 'from-[#00091a] via-[#0d0d1a] to-[#06060e]',
  },
]

export default function BannerCarousel() {
  const [current, setCurrent] = useState(0)
  const [transitioning, setTransitioning] = useState(false)

  const goTo = useCallback(
    (idx: number) => {
      if (transitioning) return
      setTransitioning(true)
      setTimeout(() => {
        setCurrent(idx)
        setTransitioning(false)
      }, 250)
    },
    [transitioning]
  )

  const next = useCallback(() => goTo((current + 1) % banners.length), [current, goTo])
  const prev = useCallback(() => goTo((current - 1 + banners.length) % banners.length), [current, goTo])

  useEffect(() => {
    const id = setInterval(next, 5500)
    return () => clearInterval(id)
  }, [next])

  const b = banners[current]

  return (
    <div className={`relative rounded-2xl overflow-hidden bg-gradient-to-r ${b.bg} border border-[#1a1a2e] min-h-[200px] flex items-center`}>
      {/* Glow */}
      <div
        className="absolute left-0 top-0 w-64 h-64 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: `radial-gradient(circle, ${b.accent} 0%, transparent 70%)` }}
      />

      <div className={`relative px-8 py-8 w-full transition-all duration-300 ${transitioning ? 'opacity-0' : 'opacity-100'}`}>
        <div
          className="text-xs font-bold uppercase tracking-widest mb-2"
          style={{ color: b.accent }}
        >
          ✦ {b.eyebrow}
        </div>
        <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">{b.title}</h3>
        <p className="text-gray-400 text-sm max-w-lg leading-relaxed mb-5">{b.body}</p>
        <div className="flex flex-wrap gap-3">
          <Link
            href={b.href}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-black text-sm transition-all hover:opacity-90"
            style={{ background: `linear-gradient(135deg, ${b.accent}, ${b.accent}bb)` }}
          >
            {b.cta} <ArrowRight size={14} />
          </Link>
          <a
            href={AFFILIATE_BASE}
            target="_blank"
            rel="sponsored noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-gray-400 border border-[#1a1a2e] hover:border-[#c9a84c]/30 hover:text-[#c9a84c] transition-all text-sm"
          >
            Shop Now
          </a>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2">
        <button onClick={prev} className="w-7 h-7 rounded-full bg-[#1a1a2e] hover:bg-[#c9a84c]/20 flex items-center justify-center text-gray-400 hover:text-[#c9a84c] transition-all">
          <ChevronLeft size={14} />
        </button>
        <button onClick={next} className="w-7 h-7 rounded-full bg-[#1a1a2e] hover:bg-[#c9a84c]/20 flex items-center justify-center text-gray-400 hover:text-[#c9a84c] transition-all">
          <ChevronRight size={14} />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-1 rounded-full transition-all ${i === current ? 'w-6 bg-[#c9a84c]' : 'w-1.5 bg-[#1a1a2e]'}`}
          />
        ))}
      </div>
    </div>
  )
}
