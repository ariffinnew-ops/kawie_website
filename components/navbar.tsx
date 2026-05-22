'use client'

import { useState, useEffect } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Platform', href: '#platform' },
    { label: 'Solutions', href: '#industries' },
    { label: 'Training', href: '#training' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        background: scrolled ? 'rgba(10,12,16,0.92)' : 'rgba(10,12,16,0.8)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        transition: 'background 0.3s ease',
      }}
    >
      <div className="container-kawie" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              background: '#00c6d7',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <span style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, color: '#0a0c10', fontSize: '16px', letterSpacing: '-0.03em' }}>K</span>
          </div>
          <span style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: '18px', color: '#ffffff', letterSpacing: '-0.03em' }}>
            kawie
          </span>
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '36px' }} className="hidden-mobile">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              style={{
                color: '#8b90a0',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 400,
                fontFamily: 'var(--font-dm-sans)',
                transition: 'color 0.15s ease',
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#ffffff')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#8b90a0')}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden-mobile">
          <a href="mailto:admin@kawie-digital.com" className="btn-primary" style={{ fontSize: '14px', padding: '9px 22px' }}>
            Book a Demo
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="show-mobile"
          onClick={() => setOpen(!open)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
          }}
          aria-label="Toggle menu"
        >
          <span
            style={{
              display: 'block',
              width: '22px',
              height: '2px',
              background: '#ffffff',
              borderRadius: '2px',
              transition: 'transform 0.2s ease, opacity 0.2s ease',
              transform: open ? 'rotate(45deg) translate(5px, 5px)' : 'none',
            }}
          />
          <span
            style={{
              display: 'block',
              width: '22px',
              height: '2px',
              background: '#ffffff',
              borderRadius: '2px',
              transition: 'opacity 0.2s ease',
              opacity: open ? 0 : 1,
            }}
          />
          <span
            style={{
              display: 'block',
              width: '22px',
              height: '2px',
              background: '#ffffff',
              borderRadius: '2px',
              transition: 'transform 0.2s ease, opacity 0.2s ease',
              transform: open ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="show-mobile"
          style={{
            background: 'rgba(10,12,16,0.98)',
            borderTop: '1px solid rgba(255,255,255,0.06)',
            padding: '16px 24px 24px',
          }}
        >
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{
                  color: '#8b90a0',
                  textDecoration: 'none',
                  fontSize: '16px',
                  fontWeight: 400,
                  fontFamily: 'var(--font-dm-sans)',
                  padding: '12px 0',
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                }}
              >
                {l.label}
              </a>
            ))}
            <div style={{ marginTop: '16px' }}>
              <a href="mailto:admin@kawie-digital.com" className="btn-primary">
                Book a Demo
              </a>
            </div>
          </nav>
        </div>
      )}

      <style jsx>{`
        @media (min-width: 768px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </header>
  )
}
