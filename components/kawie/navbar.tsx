"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

const NAV_LINKS = [
  { label: "Platform", href: "/product" },
  { label: "Solutions", href: "/#industries" },
  { label: "Training", href: "/#training" },
  { label: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{ backdropFilter: "blur(12px)", background: "rgba(10,12,16,0.8)", borderBottom: "1px solid rgba(255,255,255,0.10)" }}
    >
      <div className="mx-auto flex items-center justify-between px-6" style={{ maxWidth: 1160, height: 64 }}>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 no-underline min-w-0">
          <Image
            src="/kawie-logo.jpg"
            alt="Kawie Digital Solutions"
            width={40}
            height={40}
            className="rounded-lg shrink-0"
            priority
          />
          <span
            className="hidden sm:block text-white leading-tight"
            style={{
              fontFamily: "var(--font-plus-jakarta-sans), 'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: 16,
            }}
          >
            Kawie Digital Solutions Sdn Bhd
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-sans font-normal transition-colors duration-200"
              style={{ color: "var(--text-secondary)" }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#ffffff")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--text-secondary)")}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center font-sans font-medium text-sm transition-all duration-200 no-underline"
            style={{
              background: "#00c6d7",
              color: "#0a0c10",
              borderRadius: 999,
              padding: "10px 22px",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.transform = "translateY(-2px)"
              el.style.opacity = "0.88"
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.transform = "translateY(0)"
              el.style.opacity = "1"
            }}
          >
            Book a Demo
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-5 h-0.5 transition-all duration-200"
            style={{
              background: "#ffffff",
              transform: mobileOpen ? "translateY(8px) rotate(45deg)" : "none",
            }}
          />
          <span
            className="block w-5 h-0.5 transition-all duration-200"
            style={{ background: "#ffffff", opacity: mobileOpen ? 0 : 1 }}
          />
          <span
            className="block w-5 h-0.5 transition-all duration-200"
            style={{
              background: "#ffffff",
              transform: mobileOpen ? "translateY(-8px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden px-6 pb-6 flex flex-col gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.10)" }}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-sans text-sm py-2"
              style={{ color: "var(--text-secondary)" }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center font-sans font-medium text-sm mt-2 no-underline"
            style={{
              background: "#00c6d7",
              color: "#0a0c10",
              borderRadius: 999,
              padding: "10px 22px",
            }}
            onClick={() => setMobileOpen(false)}
          >
            Book a Demo
          </Link>
        </div>
      )}
    </header>
  )
}
