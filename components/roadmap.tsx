const roadmapItems = [
  {
    tag: 'V2',
    tagColor: '#f59e0b',
    tagBg: 'rgba(245,158,11,0.12)',
    tagBorder: 'rgba(245,158,11,0.3)',
    title: 'Digital Timesheets',
    description:
      'Mobile submission → PM approval flow. Crew cost calculated automatically from timesheet data.',
  },
  {
    tag: 'V2',
    tagColor: '#f59e0b',
    tagBg: 'rgba(245,158,11,0.12)',
    tagBorder: 'rgba(245,158,11,0.3)',
    title: 'SCM Pro — Full Sourcing',
    description:
      'RFQ → Quotation → PO with multi-vendor comparison matrix. GRN inspection and RTV process included.',
  },
  {
    tag: 'V2',
    tagColor: '#f59e0b',
    tagBg: 'rgba(245,158,11,0.12)',
    tagBorder: 'rgba(245,158,11,0.3)',
    title: 'Multi-tenant RLS',
    description:
      'Commercial launch ready — full tenant isolation at database level for multiple client organisations.',
  },
  {
    tag: 'Future',
    tagColor: '#7c3aed',
    tagBg: 'rgba(124,58,237,0.12)',
    tagBorder: 'rgba(124,58,237,0.3)',
    title: 'Client Portal',
    description:
      'Gateway for client progress tracking and vendor invoice management. Role-gated external access.',
  },
  {
    tag: 'Future',
    tagColor: '#7c3aed',
    tagBg: 'rgba(124,58,237,0.12)',
    tagBorder: 'rgba(124,58,237,0.3)',
    title: 'HSE Management',
    description:
      'Incident reporting, safety audit tools, and compliance workflow for Oil & Gas safety standards.',
  },
  {
    tag: 'Future',
    tagColor: '#7c3aed',
    tagBg: 'rgba(124,58,237,0.12)',
    tagBorder: 'rgba(124,58,237,0.3)',
    title: 'Learning Centre (LMS)',
    description:
      'Compliance training, course management, and certification tracking — integrated with the CMS matrix.',
  },
]

export default function Roadmap() {
  return (
    <section className="section-pad" style={{ background: 'var(--section-even)' }}>
      <div className="container-kawie">
        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="eyebrow">What&apos;s Coming</span>
          <h2
            className="font-heading"
            style={{ fontSize: 'clamp(28px, 4vw, 48px)', color: '#ffffff' }}
          >
            The UEOS ecosystem keeps growing.
          </h2>
        </div>

        {/* 3-column grid */}
        <div
          className="reveal"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '16px',
          }}
        >
          {roadmapItems.map((item) => (
            <div key={item.title} className="card-hover kawie-card" style={{ cursor: 'default' }}>
              <span
                style={{
                  display: 'inline-block',
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '11px',
                  fontWeight: 500,
                  color: item.tagColor,
                  background: item.tagBg,
                  border: `1px solid ${item.tagBorder}`,
                  padding: '3px 10px',
                  borderRadius: '999px',
                  marginBottom: '14px',
                  letterSpacing: '0.06em',
                }}
              >
                {item.tag}
              </span>
              <h3
                className="font-heading"
                style={{
                  fontSize: '16px',
                  color: '#ffffff',
                  marginBottom: '10px',
                  letterSpacing: '-0.02em',
                  fontWeight: 700,
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '13px',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
