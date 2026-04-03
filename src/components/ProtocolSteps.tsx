interface Step {
  week: string
  title: string
  compounds: string[]
  notes?: string
  color?: string
}

interface ProtocolStepsProps {
  steps: Step[]
  title?: string
}

export default function ProtocolSteps({ steps, title }: ProtocolStepsProps) {
  return (
    <div>
      {title && (
        <div
          style={{
            fontSize: '0.8rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#9090a8',
            marginBottom: '1.25rem',
          }}
        >
          {title}
        </div>
      )}
      <div style={{ position: 'relative' }}>
        {/* Vertical line */}
        <div
          style={{
            position: 'absolute',
            left: 19,
            top: 24,
            bottom: 24,
            width: 2,
            background: 'linear-gradient(180deg, rgba(212,168,67,0.35) 0%, rgba(212,168,67,0.05) 100%)',
          }}
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {steps.map((step, i) => {
            const color = step.color || '#d4a843'
            return (
              <div key={i} style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                {/* Timeline node */}
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    background: `${color}12`,
                    border: `2px solid ${color}40`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    zIndex: 1,
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.7rem',
                      fontWeight: 900,
                      color,
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {step.week}
                  </span>
                </div>

                {/* Content */}
                <div
                  style={{
                    flex: 1,
                    background: '#f9f9fd',
                    border: '1px solid rgba(0,0,0,0.07)',
                    borderRadius: 14,
                    padding: '1rem 1.25rem',
                  }}
                >
                  <div
                    style={{
                      fontWeight: 800,
                      color: '#0a0a14',
                      fontSize: '0.97rem',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {step.title}
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: step.notes ? '0.75rem' : 0 }}>
                    {step.compounds.map((c) => (
                      <span
                        key={c}
                        style={{
                          display: 'inline-block',
                          padding: '3px 10px',
                          background: `${color}0d`,
                          border: `1px solid ${color}25`,
                          borderRadius: 100,
                          fontSize: '0.8rem',
                          fontWeight: 600,
                          color,
                        }}
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                  {step.notes && (
                    <p style={{ fontSize: '0.875rem', color: '#666680', lineHeight: 1.6 }}>
                      {step.notes}
                    </p>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
