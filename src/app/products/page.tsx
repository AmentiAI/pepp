'use client'
import { useState, useMemo, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Search, X, ChevronRight } from 'lucide-react'
import ProductCard from '@/components/ProductCard'
import { products, categories } from '@/lib/products'

const allCategories = [
  { name: 'All Peptides', slug: 'all', description: 'The complete our supplier catalog — third-party tested, premium grade.' },
  ...categories,
]

function ProductsContent() {
  const searchParams = useSearchParams()
  const initialCategory = searchParams.get('category') || 'all'

  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState(initialCategory)
  const [sortBy, setSortBy] = useState<'default' | 'price-asc' | 'price-desc'>('default')

  const filtered = useMemo(() => {
    let result = [...products]
    if (activeCategory !== 'all') result = result.filter(p => p.categorySlug === activeCategory)
    if (search.trim()) {
      const q = search.toLowerCase()
      result = result.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.keywords.some(k => k.toLowerCase().includes(q))
      )
    }
    if (sortBy === 'price-asc') result.sort((a, b) => a.price - b.price)
    if (sortBy === 'price-desc') result.sort((a, b) => b.price - a.price)
    return result
  }, [activeCategory, search, sortBy])

  const activeCat = allCategories.find(c => c.slug === activeCategory)

  return (
    <div style={{ background: '#ffffff', minHeight: '100vh' }}>
      {/* Page header */}
      <div style={{ background: '#f7f8fc', borderBottom: '1px solid rgba(0,0,0,0.07)', padding: '4rem 2rem 3rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="section-label">Full Catalog</div>
          <h1 className="heading-xl" style={{ color: '#0a0a14', marginBottom: '0.75rem' }}>
            {activeCat?.slug === 'all' ? '100+ Premium Peptides' : activeCat?.name}
          </h1>
          <p style={{ color: '#666688', fontSize: '0.875rem', maxWidth: 680 }}>
            {activeCat?.slug === 'all'
              ? 'The complete independently-reviewed peptide catalog. Every compound is third-party HPLC tested for >98% purity with a Certificate of Analysis. Sourced from our supplier.'
              : (activeCat?.description || 'Peptides independently tested for purity and identity.')}
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '3rem 2rem' }}>

        {/* Search + Sort bar */}
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
          <div style={{ position: 'relative', flex: 1, minWidth: 280 }}>
            <Search size={15} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: '#9090a8', pointerEvents: 'none' }} />
            <input
              type="text"
              placeholder="Search peptides, mechanisms, benefits..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{ width: '100%', paddingLeft: 42, paddingRight: 40, paddingTop: '0.7rem', paddingBottom: '0.7rem', background: '#ffffff', border: '1px solid rgba(0,0,0,0.12)', borderRadius: 12, fontSize: '0.875rem', color: '#0a0a14', outline: 'none' }}
              onFocus={e => (e.currentTarget.style.borderColor = 'rgba(212,168,67,0.35)')}
              onBlur={e => (e.currentTarget.style.borderColor = 'rgba(0,0,0,0.12)')}
            />
            {search && (
              <button onClick={() => setSearch('')} style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: '#55556a', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                <X size={14} />
              </button>
            )}
          </div>
          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value as typeof sortBy)}
            style={{ padding: '0.7rem 1.25rem', background: '#ffffff', border: '1px solid rgba(0,0,0,0.12)', borderRadius: 12, fontSize: '0.875rem', color: '#555570', outline: 'none', cursor: 'pointer' }}
          >
            <option value="default">Sort: Default</option>
            <option value="price-asc">Price: Low → High</option>
            <option value="price-desc">Price: High → Low</option>
          </select>
        </div>

        <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'flex-start' }}>
          {/* Sidebar */}
          <aside style={{ width: 200, flexShrink: 0 }}>
            <div style={{ background: '#f7f8fc', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 16, padding: '1.25rem', position: 'sticky', top: 80 }}>
              <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#9090a8', marginBottom: '0.75rem', paddingLeft: 4 }}>Categories</div>
              <nav style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                {allCategories.map(cat => {
                  const isActive = activeCategory === cat.slug
                  return (
                    <button
                      key={cat.slug}
                      onClick={() => setActiveCategory(cat.slug)}
                      style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 8, padding: '8px 10px', borderRadius: 9, fontSize: '1.05rem', fontWeight: isActive ? 700 : 500, color: isActive ? '#d4a843' : '#6666888', background: isActive ? 'rgba(212,168,67,0.08)' : 'transparent', border: isActive ? '1px solid rgba(212,168,67,0.18)' : '1px solid transparent', cursor: 'pointer', textAlign: 'left', transition: 'all 0.15s' }}
                      onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = '#0a0a14' }}
                      onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = '#666688' }}
                    >
                      {cat.name}
                    </button>
                  )
                })}
              </nav>
            </div>
          </aside>

          {/* Products */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
              <p style={{ fontSize: '0.97rem', color: '#9090a8' }}>
                <span style={{ color: '#0a0a14', fontWeight: 700 }}>{filtered.length}</span> compounds
                {search && <> matching <span style={{ color: '#d4a843' }}>"{search}"</span></>}
              </p>
            </div>

            {filtered.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '5rem 2rem' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🔬</div>
                <p style={{ color: '#555570', fontWeight: 600, marginBottom: '0.5rem' }}>No peptides found</p>
                <p style={{ fontSize: '0.97rem', color: '#9090a8', marginBottom: '1rem' }}>Try a different search term or category</p>
                <button onClick={() => { setSearch(''); setActiveCategory('all') }} style={{ fontSize: '1.05rem', color: '#d4a843', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>
                  Clear filters
                </button>
              </div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
                {filtered.map(p => <ProductCard key={p.slug} product={p} />)}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div style={{ textAlign: 'center', padding: '5rem', color: '#55556a' }}>Loading...</div>}>
      <ProductsContent />
    </Suspense>
  )
}
