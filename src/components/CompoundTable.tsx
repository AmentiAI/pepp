interface CompoundRow {
  name: string
  class: string
  target: string
  keyFinding: string
  halfLife: string
  color: string
  highlight?: boolean
}

interface CompoundTableProps {
  rows: CompoundRow[]
  caption?: string
}

export default function CompoundTable({ rows, caption }: CompoundTableProps) {
  return (
    <div
      style={{
        background: '#ffffff',
        border: '1px solid rgba(0,0,0,0.08)',
        borderRadius: 18,
        overflow: 'hidden',
      }}
    >
      {caption && (
        <div
          style={{
            padding: '1rem 1.5rem',
            borderBottom: '1px solid rgba(0,0,0,0.06)',
            fontSize: '0.8rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#888898',
          }}
        >
          {caption}
        </div>
      )}
      <table className="data-table" style={{ width: '100%' }}>
        <thead>
          <tr>
            <th>Compound</th>
            <th>Class</th>
            <th>Primary Target</th>
            <th>Key Clinical Finding</th>
            <th>Half-Life</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.name}
              style={{
                background: row.highlight ? `${row.color}06` : undefined,
              }}
            >
              <td>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span
                    style={{
                      display: 'inline-block',
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      background: row.color,
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ fontWeight: 700, color: '#0a0a14', fontSize: '0.97rem' }}>
                    {row.name}
                  </span>
                </div>
              </td>
              <td>
                <span
                  style={{
                    display: 'inline-block',
                    padding: '2px 10px',
                    background: `${row.color}10`,
                    border: `1px solid ${row.color}22`,
                    borderRadius: 100,
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: row.color,
                  }}
                >
                  {row.class}
                </span>
              </td>
              <td style={{ fontSize: '0.87rem', color: '#555570' }}>{row.target}</td>
              <td style={{ fontSize: '0.87rem', color: '#3a3a5a', fontWeight: row.highlight ? 600 : 400 }}>
                {row.keyFinding}
              </td>
              <td style={{ fontSize: '0.87rem', color: '#888898', fontFamily: 'monospace' }}>
                {row.halfLife}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
