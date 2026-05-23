export default function Hero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '80px 0',
        background:
          'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0,198,215,0.15) 0%, transparent 65%)',
      }}
    >
      <div className="container-kawie" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '860px', margin: '0 auto' }}>
        {/* Eyebrow */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
          <span className="eyebrow">
            <span style={{ color: '#00c6d7' }}>✦</span>
            Now Live — Version 1.0
          </span>
        </div>

        {/* H1 */}
        <h1
          className="font-heading text-6xl md:text-7xl lg:text-8xl font-bold"
          style={{
            marginBottom: '20px',
            lineHeight: 1.0,
          }}
        >
          Unified Enterprise
          <br />
          <span style={{ color: '#00c6d7' }}>Operating System</span>
        </h1>

        {/* Subheading */}
        <p
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontWeight: 300,
            fontSize: 'clamp(18px, 2.5vw, 26px)',
            color: 'var(--text-secondary)',
            marginBottom: '20px',
            lineHeight: 1.4,
          }}
        >
          Built for Oil &amp; Gas. Ready for Every Industry.
        </p>

        {/* Description */}
        <p
          className="text-lg md:text-xl text-[#c8d0e0]"
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontWeight: 400,
            maxWidth: '640px',
            margin: '0 auto 40px',
          }}
        >
          One platform that consolidates project management, crew operations, and supply chain
          into a single, always-on cloud system — replacing scattered spreadsheets and siloed tools.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '56px' }}>
          <a href="/contact" className="btn-primary">
            Book a Demo
          </a>
          <a
            href="https://v0-kawie-digital-solution-landing-page-8o3eq09a2.vercel.app"
            className="btn-ghost"
          >
            Explore UEOS
          </a>
        </div>

        {/* Trust row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
            flexWrap: 'wrap',
          }}
        >
          {['ISO 27001 Ready', 'SOC 2 Compliant', 'PDPA-Ready', 'Cloud-Native', 'Vercel'].map((item) => (
            <span
              key={item}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '12px',
                color: 'var(--text-muted)',
                fontWeight: 400,
              }}
            >
              <span style={{ color: '#00c6d7', fontSize: '8px' }}>✦</span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
