"use client"

import { useState } from "react"
import Link from "next/link"

const NAV_LINKS = [
  { label: "Platform", href: "#" },
  { label: "Solutions", href: "#" },
  { label: "Training", href: "#" },
  { label: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{ backdropFilter: "blur(12px)", background: "rgba(10,12,16,0.8)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}
    >
      <div className="mx-auto flex items-center justify-between px-6" style={{ maxWidth: 1160, height: 64 }}>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 no-underline">
          <span
            className="flex items-center justify-center font-serif font-extrabold text-sm"
            style={{
              width: 32,
              height: 32,
              borderRadius: 8,
              background: "#00c6d7",
              color: "#0a0c10",
              letterSpacing: "-0.03em",
            }}
          >
            K
          </span>
          <span
            className="font-serif font-extrabold text-white text-lg"
            style={{ letterSpacing: "-0.03em" }}
          >
            kawie
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-sans font-normal transition-colors duration-200"
              style={{ color: "#8b90a0" }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#ffffff")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#8b90a0")}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="mailto:admin@kawie-digital.com"
            className="inline-flex items-center justify-center font-sans font-medium text-sm transition-all duration-200"
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
          </a>
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
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-sans text-sm py-2"
              style={{ color: "#8b90a0" }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="mailto:admin@kawie-digital.com"
            className="inline-flex items-center justify-center font-sans font-medium text-sm mt-2"
            style={{
              background: "#00c6d7",
              color: "#0a0c10",
              borderRadius: 999,
              padding: "10px 22px",
            }}
          >
            Book a Demo
          </a>
        </div>
      )}
    </header>
  )
}
