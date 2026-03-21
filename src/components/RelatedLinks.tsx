import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import linkMap from '@/data/link-map.json'

interface LinkEntry {
  path: string
  title: string
}

interface Props {
  currentPath: string
  /** Override the section label. Defaults to "Related Reading" */
  label?: string
}

export default function RelatedLinks({ currentPath, label = 'Related Reading' }: Props) {
  const links = ((linkMap as Record<string, LinkEntry[]>)[currentPath] ?? []).slice(0, 4)
  if (links.length === 0) return null

  return (
    <div style={{
      background: '#f7f8fc',
      border: '1px solid rgba(0,0,0,0.07)',
      borderLeft: '3px solid rgba(212,168,67,0.5)',
      borderRadius: '0 16px 16px 0',
      padding: '1.25rem 1.5rem',
      marginTop: '2rem',
    }}>
      <div style={{
        fontSize: '0.62rem',
        fontWeight: 700,
        color: '#d4a843',
        textTransform: 'uppercase',
        letterSpacing: '0.12em',
        marginBottom: '0.9rem',
      }}>
        {label}
      </div>
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
        {links.map(link => (
          <li key={link.path}>
            <Link
              href={link.path}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 7,
                color: '#444460',
                textDecoration: 'none',
                fontSize: '0.97rem',
                fontWeight: 500,
              }}
            >
              <ArrowRight size={12} style={{ color: '#d4a843', flexShrink: 0 }} />
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
