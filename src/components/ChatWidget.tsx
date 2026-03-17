'use client'
import { useState, useRef, useEffect, useCallback } from 'react'
import { MessageCircle, X, Send, Bot, User, Loader2, Minimize2, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { products, type Product, AFFILIATE_PRODUCT } from '@/lib/products'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const SUGGESTIONS = [
  'Best peptide for fat loss?',
  'How do I stack BPC-157 + TB-500?',
  'What is GHK-Cu used for?',
  'Retatrutide vs Semaglutide?',
  'How to reconstitute peptides?',
]

const slugSet = new Set(products.map(p => p.slug))

function extractProducts(text: string): Product[] {
  const found: Product[] = []
  const seen = new Set<string>()
  const re = /\/products\/([a-z0-9-]+)/g
  let match: RegExpExecArray | null
  while ((match = re.exec(text)) !== null) {
    const slug = match[1]
    if (slugSet.has(slug) && !seen.has(slug)) {
      seen.add(slug)
      const p = products.find(q => q.slug === slug)
      if (p) found.push(p)
    }
  }
  return found
}

function ProductCard({ p }: { p: Product }) {
  return (
    <Link
      href={`/products/${p.slug}`}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.625rem',
        padding: '0.5rem 0.625rem',
        background: '#ffffff',
        border: '1px solid rgba(212,168,67,0.25)',
        borderRadius: 12,
        textDecoration: 'none',
        transition: 'border-color 0.15s, box-shadow 0.15s',
      }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(212,168,67,0.6)'; e.currentTarget.style.boxShadow = '0 2px 12px rgba(212,168,67,0.15)' }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(212,168,67,0.25)'; e.currentTarget.style.boxShadow = 'none' }}
    >
      <div style={{ width: 48, height: 48, borderRadius: 8, background: '#f3f4f8', flexShrink: 0, position: 'relative', overflow: 'hidden' }}>
        <Image src={p.image} alt={p.shortName} fill style={{ objectFit: 'contain', padding: 4 }} sizes="48px" />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#0a0a14', lineHeight: 1.2, marginBottom: 2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.shortName}</div>
        <div style={{ fontSize: '0.7rem', color: '#9090a8', marginBottom: 2 }}>{p.category}</div>
        <div style={{ fontSize: '0.8rem', fontWeight: 900, color: '#d4a843' }}>${p.price.toFixed(2)}</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4, flexShrink: 0 }}>
        <span style={{ fontSize: '0.65rem', fontWeight: 700, color: '#666688', background: '#f3f4f8', padding: '2px 6px', borderRadius: 6 }}>View</span>
        <a
          href={AFFILIATE_PRODUCT(p.slug)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={e => e.stopPropagation()}
          style={{ fontSize: '0.65rem', fontWeight: 700, color: '#000', background: 'linear-gradient(135deg, #d4a843, #a07c2e)', padding: '2px 6px', borderRadius: 6, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 3 }}
        >
          Buy <ExternalLink size={8} />
        </a>
      </div>
    </Link>
  )
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [minimized, setMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hi, I'm PEPE — your peptide assistant. Ask me anything about compounds, stacking protocols, purity standards, or sourcing. All compounds are for lab use only.",
    },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [streamingText, setStreamingText] = useState('')
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, streamingText])

  useEffect(() => {
    if (open && !minimized) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [open, minimized])

  const send = useCallback(async (text: string) => {
    const trimmed = text.trim()
    if (!trimmed || loading) return

    const userMsg: Message = { role: 'user', content: trimmed }
    const newMessages = [...messages, userMsg]
    setMessages(newMessages)
    setInput('')
    setLoading(true)
    setStreamingText('')

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      })

      if (!res.ok || !res.body) throw new Error('Failed to get response')

      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let full = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        const chunk = decoder.decode(value)
        full += chunk
        setStreamingText(full)
      }

      setMessages(prev => [...prev, { role: 'assistant', content: full }])
      setStreamingText('')
    } catch {
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: 'Sorry, something went wrong. Please try again.' },
      ])
    } finally {
      setLoading(false)
    }
  }, [messages, loading])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send(input)
    }
  }

  return (
    <>
      {/* Floating button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          style={{
            position: 'fixed',
            bottom: 28,
            right: 28,
            zIndex: 9999,
            width: 58,
            height: 58,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #d4a843, #a07c2e)',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 32px rgba(212,168,67,0.45), 0 2px 8px rgba(0,0,0,0.15)',
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.08)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(212,168,67,0.55), 0 4px 12px rgba(0,0,0,0.15)' }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(212,168,67,0.45), 0 2px 8px rgba(0,0,0,0.15)' }}
          aria-label="Open PEPE peptide assistant"
        >
          <MessageCircle size={24} color="#000" />
        </button>
      )}

      {/* Chat panel */}
      {open && (
        <div style={{
          position: 'fixed',
          bottom: 28,
          right: 28,
          zIndex: 9999,
          width: 380,
          maxWidth: 'calc(100vw - 32px)',
          borderRadius: 20,
          background: '#ffffff',
          border: '1px solid rgba(0,0,0,0.1)',
          boxShadow: '0 24px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(212,168,67,0.12)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          maxHeight: minimized ? 64 : 580,
          transition: 'max-height 0.3s cubic-bezier(0.4,0,0.2,1)',
        }}>

          {/* Header */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '1rem 1.25rem',
            background: 'linear-gradient(135deg, #d4a843 0%, #a07c2e 100%)',
            flexShrink: 0,
            cursor: 'pointer',
          }}
            onClick={() => setMinimized(!minimized)}
          >
            <div style={{ width: 34, height: 34, borderRadius: '50%', background: 'rgba(0,0,0,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Bot size={18} color="#fff" />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 800, color: '#000', fontSize: '0.95rem', lineHeight: 1 }}>PEPE</div>
              <div style={{ fontSize: '0.72rem', color: 'rgba(0,0,0,0.55)', marginTop: 2 }}>Peptide Assistant</div>
            </div>
            <div style={{ display: 'flex', gap: 4 }}>
              <button
                onClick={e => { e.stopPropagation(); setMinimized(!minimized) }}
                style={{ width: 28, height: 28, borderRadius: 8, background: 'rgba(0,0,0,0.15)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <Minimize2 size={13} color="#000" />
              </button>
              <button
                onClick={e => { e.stopPropagation(); setOpen(false) }}
                style={{ width: 28, height: 28, borderRadius: 8, background: 'rgba(0,0,0,0.15)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <X size={13} color="#000" />
              </button>
            </div>
          </div>

          {!minimized && (
            <>
              {/* Messages */}
              <div style={{ flex: 1, overflowY: 'auto', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                {messages.map((msg, i) => {
                  const recommended = msg.role === 'assistant' ? extractProducts(msg.content) : []
                  // Clean URLs from display text
                  const displayText = msg.content
                    .replace(/https:\/\/stackspeptide\.com\/products\/[a-z0-9-]+/g, '')
                    .replace(/\/products\/[a-z0-9-]+/g, '')
                    .trim()

                  return (
                    <div key={i} style={{ display: 'flex', gap: '0.625rem', alignItems: 'flex-start', flexDirection: msg.role === 'user' ? 'row-reverse' : 'row' }}>
                      <div style={{
                        width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
                        background: msg.role === 'user' ? 'linear-gradient(135deg, #d4a843, #a07c2e)' : '#f3f4f8',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        {msg.role === 'user'
                          ? <User size={13} color="#000" />
                          : <Bot size={13} color="#666688" />
                        }
                      </div>
                      <div style={{ maxWidth: '80%', display: 'flex', flexDirection: 'column', gap: 6 }}>
                        <div style={{
                          padding: '0.625rem 0.875rem',
                          borderRadius: msg.role === 'user' ? '14px 14px 4px 14px' : '14px 14px 14px 4px',
                          background: msg.role === 'user' ? 'linear-gradient(135deg, #d4a843, #a07c2e)' : '#f3f4f8',
                          color: msg.role === 'user' ? '#000' : '#1a1a2a',
                          fontSize: '0.875rem',
                          lineHeight: 1.6,
                          whiteSpace: 'pre-wrap',
                          wordBreak: 'break-word',
                        }}>
                          {displayText}
                        </div>
                        {recommended.length > 0 && (
                          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                            {recommended.map(p => <ProductCard key={p.slug} p={p} />)}
                          </div>
                        )}
                      </div>
                    </div>
                  )
                })}

                {/* Streaming response */}
                {streamingText && (
                  <div style={{ display: 'flex', gap: '0.625rem', alignItems: 'flex-start' }}>
                    <div style={{ width: 28, height: 28, borderRadius: '50%', flexShrink: 0, background: '#f3f4f8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Bot size={13} color="#666688" />
                    </div>
                    <div style={{ maxWidth: '80%', padding: '0.625rem 0.875rem', borderRadius: '14px 14px 14px 4px', background: '#f3f4f8', color: '#1a1a2a', fontSize: '0.875rem', lineHeight: 1.6, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
                      {streamingText.replace(/https:\/\/stackspeptide\.com\/products\/[a-z0-9-]+/g, '').replace(/\/products\/[a-z0-9-]+/g, '').trim()}
                      <span style={{ display: 'inline-block', width: 2, height: '1em', background: '#d4a843', marginLeft: 2, animation: 'blink 1s step-end infinite', verticalAlign: 'text-bottom' }} />
                    </div>
                  </div>
                )}

                {/* Loading indicator */}
                {loading && !streamingText && (
                  <div style={{ display: 'flex', gap: '0.625rem', alignItems: 'center' }}>
                    <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#f3f4f8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Bot size={13} color="#666688" />
                    </div>
                    <div style={{ padding: '0.625rem 0.875rem', borderRadius: '14px 14px 14px 4px', background: '#f3f4f8', display: 'flex', alignItems: 'center', gap: 6 }}>
                      <Loader2 size={14} color="#9090a8" style={{ animation: 'spin 1s linear infinite' }} />
                      <span style={{ fontSize: '0.8rem', color: '#9090a8' }}>Thinking...</span>
                    </div>
                  </div>
                )}

                <div ref={bottomRef} />
              </div>

              {/* Suggestions (show only on first message) */}
              {messages.length === 1 && (
                <div style={{ padding: '0 1rem 0.75rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {SUGGESTIONS.map(s => (
                    <button
                      key={s}
                      onClick={() => send(s)}
                      style={{
                        padding: '5px 12px',
                        background: 'rgba(212,168,67,0.08)',
                        border: '1px solid rgba(212,168,67,0.25)',
                        borderRadius: 100,
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        color: '#b8902e',
                        cursor: 'pointer',
                        transition: 'background 0.15s',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.background = 'rgba(212,168,67,0.15)')}
                      onMouseLeave={e => (e.currentTarget.style.background = 'rgba(212,168,67,0.08)')}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}

              {/* Input */}
              <div style={{ padding: '0.75rem 1rem', borderTop: '1px solid rgba(0,0,0,0.07)', display: 'flex', gap: '0.625rem', background: '#fafafa' }}>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about compounds, protocols, purity..."
                  disabled={loading}
                  style={{
                    flex: 1,
                    padding: '0.625rem 0.875rem',
                    border: '1px solid rgba(0,0,0,0.1)',
                    borderRadius: 12,
                    fontSize: '0.875rem',
                    outline: 'none',
                    background: '#fff',
                    color: '#1a1a2a',
                    transition: 'border-color 0.15s',
                  }}
                  onFocus={e => (e.currentTarget.style.borderColor = 'rgba(212,168,67,0.4)')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'rgba(0,0,0,0.1)')}
                />
                <button
                  onClick={() => send(input)}
                  disabled={loading || !input.trim()}
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 12,
                    background: input.trim() && !loading ? 'linear-gradient(135deg, #d4a843, #a07c2e)' : 'rgba(0,0,0,0.08)',
                    border: 'none',
                    cursor: input.trim() && !loading ? 'pointer' : 'not-allowed',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    transition: 'background 0.15s',
                  }}
                >
                  <Send size={15} color={input.trim() && !loading ? '#000' : '#9090a8'} />
                </button>
              </div>
            </>
          )}
        </div>
      )}

      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1 } 50% { opacity: 0 } }
        @keyframes spin { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }
      `}</style>
    </>
  )
}
