import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const studies = [
  {
    journal: 'New England Journal of Medicine',
    year: '2023',
    color: '#d4a843',
    badge: 'Phase 2 Trial',
    badgeColor: '#d4a843',
    headline: 'Retatrutide: 24.2% Body Weight Reduction',
    finding:
      'A Phase 2 randomized controlled trial (n=338) found that once-weekly Retatrutide (GLP-1/GIP/Glucagon triple agonist) produced up to 24.2% body weight reduction at week 24 — the highest pharmacological weight loss ever recorded in a clinical trial.',
    compound: 'Retatrutide',
    href: '/products/retatrutide-10mg',
  },
  {
    journal: 'Genome Biology & Evolution',
    year: '2012',
    color: '#a78bfa',
    badge: 'Genomics Study',
    badgeColor: '#a78bfa',
    headline: 'GHK-Cu Modulates 4,000+ Human Genes',
    finding:
      'Bioinformatic analysis of human gene databases confirmed that GHK-Cu, a naturally occurring copper-binding tripeptide, modulates the expression of over 4,000 genes — including collagen, elastin, antioxidant enzymes, and genes associated with tissue repair and skin regeneration.',
    compound: 'GHK-Cu',
    href: '/products/ghk-cu-50mg',
  },
  {
    journal: 'Journal of Clinical Endocrinology',
    year: '2006',
    color: '#60a5fa',
    badge: 'Human Clinical',
    badgeColor: '#60a5fa',
    headline: 'CJC-1295 (DAC): Sustained GH & IGF-1 Elevation',
    finding:
      'A dose-escalation study (n=65) demonstrated that CJC-1295 with DAC produced mean GH concentrations of 2–10 ng/mL for up to 14 days following a single injection, with 2–3× increases in mean IGF-1 levels maintained over 28 days — establishing the concept of GHRH-R saturation dosing.',
    compound: 'CJC-1295',
    href: '/products/ipamorelin-cjc-1295-blend-10mg',
  },
  {
    journal: 'Annals of the New York Academy of Sciences',
    year: '2005',
    color: '#34d399',
    badge: 'Human Study',
    badgeColor: '#34d399',
    headline: 'Epithalon Activates Telomerase in Human Cells',
    finding:
      'Dr. Vladimir Khavinson\'s research confirmed Epithalon (Ala-Glu-Asp-Gly) activates telomerase in human somatic cells — including diploid fibroblasts — making it the only research peptide with published in vivo human telomere extension data from the St. Petersburg Institute of Gerontology.',
    compound: 'Epithalon',
    href: '/products/epitalon-50mg',
  },
]

export default function ResearchFeed() {
  return (
    <section
      style={{
        background: '#f7f8fc',
        borderTop: '1px solid rgba(0,0,0,0.06)',
        padding: '7rem 2rem',
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: '4rem',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}
        >
          <div>
            <div className="section-label">Peer-Reviewed Evidence</div>
            <h2
              style={{
                fontSize: 'clamp(1.9rem, 3vw, 3rem)',
                fontWeight: 900,
                color: '#0a0a14',
                lineHeight: 1.05,
                letterSpacing: '-0.04em',
                marginBottom: '0.75rem',
              }}
            >
              The Science Behind the Claims
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#6a6a8a', maxWidth: 560 }}>
              Every claim on this site is backed by peer-reviewed literature. These are the landmark studies
              that define the clinical potential of research peptides.
            </p>
          </div>
          <Link
            href="/guide"
            className="btn-secondary"
            style={{ fontSize: '1rem', padding: '0.9rem 1.75rem', flexShrink: 0 }}
          >
            Read the Full Guide <ArrowRight size={14} />
          </Link>
        </div>

        {/* Study cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
          {studies.map((s) => (
            <div
              key={s.compound}
              style={{
                background: '#ffffff',
                border: '1px solid rgba(0,0,0,0.07)',
                borderRadius: 20,
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                position: 'relative',
                overflow: 'hidden',
              }}
              className="hover-card-border"
            >
              {/* Left accent */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  bottom: 0,
                  width: 3,
                  background: `linear-gradient(180deg, ${s.color} 0%, transparent 100%)`,
                }}
              />

              {/* Journal + year */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                <span
                  style={{
                    padding: '3px 10px',
                    background: `${s.color}10`,
                    border: `1px solid ${s.color}25`,
                    borderRadius: 100,
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: s.color,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                  }}
                >
                  {s.badge}
                </span>
                <span style={{ fontSize: '0.8rem', color: '#9090a8', fontWeight: 600 }}>
                  {s.journal} · {s.year}
                </span>
              </div>

              {/* Headline */}
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0a0a14', lineHeight: 1.3 }}>
                {s.headline}
              </h3>

              {/* Finding */}
              <p style={{ fontSize: '0.92rem', color: '#555570', lineHeight: 1.75, flex: 1 }}>
                {s.finding}
              </p>

              {/* Link */}
              <Link
                href={s.href}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  fontSize: '0.87rem',
                  fontWeight: 700,
                  color: s.color,
                  textDecoration: 'none',
                  marginTop: 'auto',
                  transition: 'gap 0.15s',
                }}
              >
                View {s.compound} <ArrowRight size={13} />
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom callout */}
        <div
          style={{
            marginTop: '2.5rem',
            padding: '1.25rem 1.75rem',
            background: 'rgba(212,168,67,0.05)',
            border: '1px solid rgba(212,168,67,0.18)',
            borderRadius: 14,
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ flex: 1 }}>
            <span style={{ fontSize: '1rem', color: '#555570', lineHeight: 1.7 }}>
              <strong style={{ color: '#0a0a14' }}>For Lab Use Only:</strong>{' '}
              All research citations are from preclinical or Phase 1–2 clinical trials. Compounds on this site
              are sold exclusively for in-vitro research purposes, not for human use or consumption.
            </span>
          </div>
          <Link
            href="/faq"
            style={{
              fontSize: '0.87rem',
              fontWeight: 700,
              color: '#d4a843',
              textDecoration: 'none',
              flexShrink: 0,
              whiteSpace: 'nowrap',
            }}
          >
            FAQ →
          </Link>
        </div>
      </div>
    </section>
  )
}
