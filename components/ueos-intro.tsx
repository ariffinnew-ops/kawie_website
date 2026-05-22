const modulePills = [
  { label: 'PMS', color: '#00c6d7' },
  { label: 'CMS', color: '#7c3aed' },
  { label: 'SCM', color: '#f59e0b' },
  { label: 'PCM', color: '#10b981' },
]

const coreSystem = [
  { name: 'Project Management (PMS)', status: 'LIVE', statusColor: '#10b981', bg: 'rgba(16,185,129,0.1)' },
  { name: 'Crewing Management (CMS)', status: 'LIVE', statusColor: '#10b981', bg: 'rgba(16,185,129,0.1)' },
  { name: 'Supply Chain (SCM)', status: 'LIVE', statusColor: '#10b981', bg: 'rgba(16,185,129,0.1)' },
  { name: 'Project Cost Management (PCM)', status: 'LIVE', statusColor: '#10b981', bg: 'rgba(16,185,129,0.1)' },
]

const phase2 = [
  { name: 'Digital Timesheets', status: 'V2', statusColor: '#f59e0b', bg: 'rgba(245,158,11,0.1)' },
  { name: 'Audit Log Module', status: 'V2', statusColor: '#f59e0b', bg: 'rgba(245,158,11,0.1)' },
  { name: 'Multi-tenant RLS', status: 'V2', statusColor: '#f59e0b', bg: 'rgba(245,158,11,0.1)' },
]

const comingSoon = [
  { name: 'HR Management · Payroll', status: 'SOON', statusColor: '#555d70', bg: 'rgba(85,93,112,0.15)' },
  { name: 'Client Portal · HSE · LMS', status: 'SOON', statusColor: '#555d70', bg: 'rgba(85,93,112,0.15)' },
]

function ModuleRow({ items, header }: { items: typeof coreSystem; header: string }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <div
        style={{
          fontSize: '10px',
          fontFamily: 'var(--font-dm-sans)',
          fontWeight: 500,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: '#555d70',
          marginBottom: '10px',
        }}
      >
        {header}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {items.map((item) => (
          <div
            key={item.name}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '10px 14px',
              background: 'rgba(255,255,255,0.03)',
              borderRadius: '8px',
              border: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: '#8b90a0' }}>
              {item.name}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '11px',
                fontWeight: 500,
                color: item.statusColor,
                background: item.bg,
                padding: '3px 8px',
                borderRadius: '999px',
                letterSpacing: '0.06em',
              }}
            >
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function UeosIntro() {
  return (
    <section id="platform" className="section-pad" style={{ background: '#0a0c10' }}>
      <div className="container-kawie">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '60px',
            alignItems: 'start',
          }}
        >
          {/* Left column */}
          <div className="reveal">
            <span className="eyebrow">Introducing UEOS</span>
            <h2
              className="font-heading"
              style={{ fontSize: 'clamp(28px, 4vw, 48px)', color: '#ffffff', marginBottom: '20px' }}
            >
              One platform.
              <br />
              Every operation.
            </h2>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: '#8b90a0', lineHeight: 1.7, marginBottom: '32px' }}>
              UEOS consolidates disparate systems into a unified, integrated platform — designed
              specifically for Oil &amp; Gas, with the flexibility to serve any industry vertical.
            </p>

            {/* Module pills */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
              {modulePills.map((m) => (
                <span
                  key={m.label}
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '13px',
                    fontWeight: 500,
                    color: m.color,
                    background: `${m.color}18`,
                    border: `1px solid ${m.color}40`,
                    padding: '5px 14px',
                    borderRadius: '999px',
                  }}
                >
                  {m.label}
                </span>
              ))}
            </div>

            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: '#555d70', lineHeight: 1.65, marginBottom: '32px' }}>
              Your team always knows what&apos;s happening, what it costs, and who&apos;s accountable — in real time.
            </p>
            <a href="mailto:admin@kawie-digital.com" className="btn-primary">
              Get Started
            </a>
          </div>

          {/* Right column — Architecture card */}
          <div className="reveal">
            <div
              style={{
                background: '#0a0c10',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '20px',
                padding: '32px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Cyan glow top-right */}
              <div
                aria-hidden
                style={{
                  position: 'absolute',
                  top: '-40px',
                  right: '-40px',
                  width: '200px',
                  height: '200px',
                  background: 'radial-gradient(circle, rgba(0,198,215,0.18) 0%, transparent 70%)',
                  pointerEvents: 'none',
                }}
              />

              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                <span style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '14px', color: '#ffffff', letterSpacing: '-0.02em' }}>
                  CORE SYSTEM
                </span>
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    fontSize: '12px',
                    color: '#10b981',
                    fontFamily: 'var(--font-dm-sans)',
                  }}
                >
                  <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
                  Live
                </span>
              </div>

              <ModuleRow items={coreSystem} header="Core System" />
              <ModuleRow items={phase2} header="Phase 2 Extensions" />
              <ModuleRow items={comingSoon} header="Coming Soon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
