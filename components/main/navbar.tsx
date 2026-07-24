"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "UEOS Platform", href: "/#ueos" },
  { label: "Ecosystem", href: "/#ecosystem" },
  { label: "Training", href: "/#training" },
  { label: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  return (
    <>
      <a href="#main-content" className="skip-to-content font-body">
        Skip to main content
      </a>
      <header
        className={`fixed top-0 left-0 right-0 z-50 border-b border-border bg-[rgba(246,248,249,0.85)] backdrop-blur-[14px] transition-shadow duration-300 ${
          scrolled ? "shadow-md" : ""
        }`}
      >
        <div className="mx-auto flex h-14 max-w-[1180px] items-center justify-between px-6">
          <Link href="/" className="group flex shrink-0 items-center gap-2.5">
            <Image
              src="/kawie-logo.png"
              alt="Kawie Digital Solutions logo"
              width={36}
              height={36}
              className="h-9 w-9 shrink-0 rounded-md object-contain"
              priority
            />
            <span className="font-heading text-[14px] font-bold lowercase leading-tight text-foreground sm:text-[15px]">
              kawie <span className="text-primary-dim">digital</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-5 lg:flex" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-body text-[13.5px] text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-hover inline-flex items-center rounded-lg bg-primary px-4 py-2 text-[13.5px] font-semibold text-primary-foreground hover:shadow-[0_8px_24px_-8px_rgba(14,158,134,0.5)]"
            >
              Talk to Us
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-lg text-foreground lg:hidden"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {menuOpen && (
          <nav
            className="border-t border-border bg-background px-6 pb-6 pt-3 lg:hidden"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-3 font-body text-[15px] text-foreground hover:bg-secondary"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-lg bg-primary px-4 py-3 text-[15px] font-semibold text-primary-foreground"
              >
                Talk to Us
              </Link>
            </div>
          </nav>
        )}
      </header>
      {/* spacer for fixed header */}
      <div className="h-14" aria-hidden />
    </>
  )
}
