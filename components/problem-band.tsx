const problems = [
  {
    title: 'Version-conflict spreadsheets',
    description:
      'Roster updates in Excel, procurement via WhatsApp, payroll in another file. No single source of truth.',
  },
  {
    title: 'No real-time cost visibility',
    description:
      'Budget overruns discovered at month-end when reconciling PDFs — not when decisions can still be made.',
  },
  {
    title: 'Compliance surprises',
    description:
      'Crew members offshore with lapsed BOSIET or APC — because no one was tracking certificate expiry.',
  },
  {
    title: 'Audit unreadiness',
    description:
      'PETRONAS audit incoming. Hours spent assembling data that should have been one click away.',
  },
]

export default function ProblemBand() {
  return (
    <section className="section-pad" style={{ background: '#0a0c10' }}>
      <div className="container-kawie">
        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="eyebrow">The Challenge</span>
          <h2
            className="font-heading"
            style={{
              fontSize: 'clamp(28px, 4vw, 48px)',
              color: '#ffffff',
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            Fragmented systems are costing you money.
          </h2>
        </div>

        {/* 2x2 Grid */}
        <div
          className="reveal"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
          }}
        >
          {problems.map((p) => (
            <div
              key={p.title}
              className="card-hover"
              style={{
                background: '#1c2030',
                border: '1px solid rgba(255,255,255,0.10)',
                borderRadius: '14px',
                padding: '32px',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.12)'
                ;(e.currentTarget as HTMLElement).style.background = '#2e3447'
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.10)'
                ;(e.currentTarget as HTMLElement).style.background = '#1c2030'
              }}
            >
              <div
                style={{
                  width: '40px',
                  height: '4px',
                  background: 'rgba(0,198,215,0.4)',
                  borderRadius: '2px',
                  marginBottom: '20px',
                }}
              />
              <h3
                className="font-heading"
                style={{
                  fontSize: '18px',
                  color: '#ffffff',
                  marginBottom: '12px',
                  letterSpacing: '-0.02em',
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '14px',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.65,
                }}
              >
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
