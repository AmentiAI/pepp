'use client'
import { useState, useEffect, useRef, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Search, X, ArrowRight, ArrowUpRight } from 'lucide-react'
import { products, AFFILIATE_PRODUCT } from '@/lib/products'

interface Props {
  onClose: () => void
}

function scoreProduct(product: typeof products[0], query: string): number {
  const q = query.toLowerCase().trim()
  if (!q) return 0
  const name = product.name.toLowerCase()
  const short = product.shortName.toLowerCase()
  const cat = product.category.toLowerCase()
  const keys = product.keywords.join(' ').toLowerCase()
  const summary = product.summary.toLowerCase()

  if (name === q || short === q) return 100
  if (name.startsWith(q) || short.startsWith(q)) return 80
  if (name.includes(q) || short.includes(q)) return 60
  if (cat.includes(q)) return 40
  if (keys.includes(q)) return 30
  if (summary.includes(q)) return 20
  // partial word match
  const words = q.split(/\s+/)
  if (words.every(w => name.includes(w) || short.includes(w) || keys.includes(w))) return 15
  return 0
}

export default function ProductSearchModal({ onClose }: Props) {
  const router = useRouter()
  const inputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLDivElement>(null)
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(0)

  const results = query.trim().length >= 1
    ? products
        .map(p => ({ product: p, score: scoreProduct(p, query) }))
        .filter(r => r.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 8)
        .map(r => r.product)
    : products.slice(0, 6) // show popular defaults when empty

  // Reset selection when results change
  useEffect(() => { setSelected(0) }, [query])

  // Focus input on open
  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const navigate = useCallback((slug: string) => {
    router.push(`/products/${slug}`)
    onClose()
  }, [router, onClose])

  const handleKey = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelected(s => Math.min(s + 1, results.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelected(s => Math.max(s - 1, 0))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      if (results[selected]) navigate(results[selected].slug)
    } else if (e.key === 'Escape') {
      onClose()
    }
  }, [results, selected, navigate, onClose])

  // Scroll selected into view
  useEffect(() => {
    const el = listRef.current?.querySelector(`[data-idx="${selected}"]`) as HTMLElement
    el?.scrollIntoView({ block: 'nearest' })
  }, [selected])

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0, zIndex: 200,
          background: 'rgba(10,10,20,0.55)',
          backdropFilter: 'blur(4px)',
          WebkitBackdropFilter: 'blur(4px)',
          animation: 'fadeIn 0.15s ease',
        }}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Product search"
        style={{
          position: 'fixed', top: '10vh', left: '50%', transform: 'translateX(-50%)',
          zIndex: 201, width: '100%', maxWidth: 620,
          padding: '0 1rem',
          animation: 'slideDown 0.18s ease',
        }}
      >
        <div style={{
          background: '#ffffff',
          border: '1px solid rgba(0,0,0,0.10)',
          borderRadius: 20,
          boxShadow: '0 32px 80px rgba(0,0,0,0.22), 0 0 0 1px rgba(0,0,0,0.04)',
          overflow: 'hidden',
        }}>

          {/* Input row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '1rem 1.25rem', borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
            <Search size={18} style={{ color: '#d4a843', flexShrink: 0 }} />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Search peptides, categories, benefits…"
              autoComplete="off"
              spellCheck={false}
              style={{
                flex: 1, border: 'none', outline: 'none', fontSize: '1.05rem',
                color: '#0a0a14', background: 'transparent',
                fontFamily: 'inherit',
              }}
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                style={{ background: 'none', border: 'none', color: '#9090a8', cursor: 'pointer', display: 'flex', alignItems: 'center', padding: 4, borderRadius: 6 }}
                aria-label="Clear search"
              >
                <X size={15} />
              </button>
            )}
            <button
              onClick={onClose}
              style={{ background: '#f0f0f8', border: 'none', color: '#666680', cursor: 'pointer', display: 'flex', alignItems: 'center', padding: '4px 8px', borderRadius: 7, fontSize: '0.72rem', fontWeight: 600, gap: 2, flexShrink: 0 }}
              aria-label="Close search"
            >
              ESC
            </button>
          </div>

          {/* Results */}
          <div
            ref={listRef}
            style={{ maxHeight: '60vh', overflowY: 'auto', padding: '0.5rem' }}
            role="listbox"
            aria-label="Search results"
          >
            {!query.trim() && (
              <div style={{ padding: '0.5rem 0.75rem', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#9090a8' }}>
                Popular compounds
              </div>
            )}
            {query.trim() && results.length === 0 && (
              <div style={{ padding: '2.5rem', textAlign: 'center', color: '#9090a8' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🔬</div>
                <div style={{ fontSize: '0.97rem', fontWeight: 600, color: '#555570' }}>No results for &ldquo;{query}&rdquo;</div>
                <div style={{ fontSize: '0.82rem', marginTop: 4 }}>Try a category name or compound like "BPC-157"</div>
              </div>
            )}

            {results.map((p, i) => {
              const isActive = i === selected
              return (
                <div
                  key={p.slug}
                  data-idx={i}
                  role="option"
                  aria-selected={isActive}
                  onClick={() => navigate(p.slug)}
                  onMouseEnter={() => setSelected(i)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.875rem',
                    padding: '0.6rem 0.75rem',
                    borderRadius: 12,
                    cursor: 'pointer',
                    background: isActive ? '#f7f8fc' : 'transparent',
                    border: isActive ? '1px solid rgba(212,168,67,0.15)' : '1px solid transparent',
                    transition: 'background 0.1s, border-color 0.1s',
                  }}
                >
                  {/* Thumbnail */}
                  <div style={{
                    width: 52, height: 52, flexShrink: 0,
                    background: '#f3f4f8', borderRadius: 10, overflow: 'hidden',
                    position: 'relative', border: '1px solid rgba(0,0,0,0.07)',
                  }}>
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      style={{ objectFit: 'contain', padding: '6px' }}
                      sizes="52px"
                    />
                  </div>

                  {/* Info */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: '0.2rem' }}>
                      <span style={{ fontSize: '0.97rem', fontWeight: 700, color: '#0a0a14', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {p.name}
                      </span>
                      {p.tag && (
                        <span style={{ fontSize: '0.6rem', fontWeight: 700, color: '#d4a843', background: 'rgba(212,168,67,0.1)', border: '1px solid rgba(212,168,67,0.2)', padding: '2px 7px', borderRadius: 100, flexShrink: 0 }}>
                          {p.tag}
                        </span>
                      )}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <span style={{ fontSize: '0.75rem', color: '#9090a8', fontWeight: 600 }}>{p.category}</span>
                      <span style={{ fontSize: '0.72rem', color: '#c0c0d0' }}>·</span>
                      <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#444458' }}>${p.price.toFixed(2)}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0 }}>
                    <a
                      href={AFFILIATE_PRODUCT(p.slug)}
                      target="_blank"
                      rel="sponsored noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                      style={{
                        display: 'flex', alignItems: 'center', gap: 4,
                        padding: '5px 10px',
                        background: 'linear-gradient(135deg, #d4a843, #b8912e)',
                        color: '#000', fontWeight: 700, fontSize: '0.72rem',
                        borderRadius: 7, textDecoration: 'none',
                      }}
                    >
                      Buy <ArrowUpRight size={11} />
                    </a>
                    <div style={{
                      width: 28, height: 28, borderRadius: 8,
                      background: isActive ? 'rgba(212,168,67,0.1)' : '#f0f0f8',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: isActive ? '#d4a843' : '#9090a8',
                      transition: 'background 0.1s, color 0.1s',
                    }}>
                      <ArrowRight size={13} />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Footer hint */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '1.25rem',
            padding: '0.6rem 1.25rem',
            borderTop: '1px solid rgba(0,0,0,0.06)',
            background: '#fafafa',
          }}>
            {[
              { key: '↑↓', label: 'navigate' },
              { key: '↵', label: 'open' },
              { key: 'esc', label: 'close' },
            ].map(h => (
              <div key={h.key} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                <kbd style={{ padding: '2px 6px', background: '#f0f0f8', border: '1px solid rgba(0,0,0,0.1)', borderRadius: 5, fontSize: '0.65rem', fontWeight: 700, color: '#666680', fontFamily: 'inherit' }}>
                  {h.key}
                </kbd>
                <span style={{ fontSize: '0.72rem', color: '#9090a8' }}>{h.label}</span>
              </div>
            ))}
            <span style={{ marginLeft: 'auto', fontSize: '0.72rem', color: '#c0c0d0' }}>
              {products.length} compounds indexed
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn   { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideDown { from { opacity: 0; transform: translateX(-50%) translateY(-12px) } to { opacity: 1; transform: translateX(-50%) translateY(0) } }
      `}</style>
    </>
  )
}
