import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[]
}

export default function BreadcrumbNav({ items }: BreadcrumbNavProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `https://www.stackspeptide.com${item.href}` } : {}),
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav
        aria-label="Breadcrumb"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.375rem',
          flexWrap: 'wrap',
          fontSize: '0.8rem',
          fontWeight: 600,
          color: '#9090a8',
          marginBottom: '1.5rem',
        }}
      >
        {items.map((item, i) => (
          <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
            {i > 0 && (
              <ChevronRight
                size={12}
                style={{ color: '#c8c8d8', flexShrink: 0 }}
              />
            )}
            {item.href ? (
              <Link
                href={item.href}
                style={{
                  color: '#9090a8',
                  textDecoration: 'none',
                  transition: 'color 0.15s',
                }}
                className="hover-gold"
              >
                {item.label}
              </Link>
            ) : (
              <span style={{ color: '#0a0a14' }}>{item.label}</span>
            )}
          </span>
        ))}
      </nav>
    </>
  )
}
