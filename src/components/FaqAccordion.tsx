'use client'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface Faq { q: string; a: string }

export default function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  return (
    <div style={{ maxWidth: 820, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      {faqs.map((faq, i) => (
        <div key={i} style={{
          border: '1px solid rgba(0,0,0,0.08)',
          borderRadius: 16, overflow: 'hidden',
          background: '#ffffff',
        }} className="hover-card-border">
          <button
            onClick={() => setOpenFaq(openFaq === i ? null : i)}
            aria-expanded={openFaq === i}
            style={{
              width: '100%', display: 'flex', alignItems: 'center',
              justifyContent: 'space-between', gap: '1rem',
              padding: '1.25rem 1.5rem', background: 'transparent',
              border: 'none', cursor: 'pointer', textAlign: 'left',
            }}
          >
            <span style={{ fontWeight: 800, color: '#0a0a14', fontSize: '1rem', lineHeight: 1.4 }}>{faq.q}</span>
            <div style={{ flexShrink: 0, color: '#d4a843' }}>
              {openFaq === i ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </div>
          </button>
          {openFaq === i && (
            <div style={{ padding: '0 1.5rem 1.5rem', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
              <p style={{ fontSize: '0.97rem', color: '#555570', lineHeight: 1.8, paddingTop: '1rem' }}>{faq.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
