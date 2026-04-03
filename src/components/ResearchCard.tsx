import type { ReactNode } from 'react'

interface ResearchCardProps {
  stat: string
  label: string
  source: string
  year?: string
  color?: string
  body?: string
  icon?: ReactNode
}

export default function ResearchCard({
  stat,
  label,
  source,
  year,
  color = '#d4a843',
  body,
  icon,
}: ResearchCardProps) {
  return (
    <div
      style={{
        background: '#f9f9fd',
        border: '1px solid rgba(0,0,0,0.08)',
        borderRadius: 18,
        padding: '1.75rem',
        position: 'relative',
        overflow: 'hidden',
        transition: 'border-color 0.2s, box-shadow 0.2s',
      }}
      className="hover-card-border"
    >
      {/* Top accent */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: `linear-gradient(90deg, ${color}, transparent)`,
        }}
      />

      {/* Icon */}
      {icon && (
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: 12,
            background: `${color}10`,
            border: `1px solid ${color}22`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color,
            marginBottom: '1rem',
          }}
        >
          {icon}
        </div>
      )}

      {/* Stat */}
      <div
        style={{
          fontSize: '2.4rem',
          fontWeight: 900,
          letterSpacing: '-0.05em',
          lineHeight: 1,
          color,
          marginBottom: '0.5rem',
        }}
      >
        {stat}
      </div>

      {/* Label */}
      <div
        style={{
          fontSize: '1rem',
          fontWeight: 700,
          color: '#0a0a14',
          marginBottom: '0.35rem',
        }}
      >
        {label}
      </div>

      {/* Source / citation */}
      <div
        style={{
          fontSize: '0.8rem',
          fontWeight: 600,
          color: color,
          opacity: 0.75,
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          marginBottom: body ? '1rem' : 0,
        }}
      >
        {source}{year ? ` · ${year}` : ''}
      </div>

      {/* Body */}
      {body && (
        <p style={{ fontSize: '0.92rem', color: '#555570', lineHeight: 1.75 }}>
          {body}
        </p>
      )}
    </div>
  )
}
