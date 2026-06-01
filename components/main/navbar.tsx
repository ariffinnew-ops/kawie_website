"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "About", href: "/home#about" },
  { label: "Services", href: "/home#services" },
  { label: "Product", href: "/home#product" },
  { label: "Training", href: "/home#training" },
  { label: "Contact", href: "/home/contact" },
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
        className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
          scrolled ? "shadow-md" : ""
        }`}
        style={{
          background: "rgba(248,250,255,0.95)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(15,37,87,0.08)",
        }}
      >
        <div className="mx-auto max-w-[1160px] px-6 flex items-center justify-between h-16">
          <Link href="/home" className="flex items-center gap-3 group shrink-0">
            <Image
              src="/kawie-logo.jpg"
              alt="Kawie Digital Solutions logo"
              width={120}
              height={40}
              className="h-[40px] w-auto rounded-md object-contain shrink-0"
              style={{ height: 40, width: "auto" }}
              priority
            />
            <span
              className="font-heading font-bold text-[#0f2557] text-[15px] leading-tight hidden sm:block"
              style={{ letterSpacing: "-0.01em" }}
            >
              Kawie Digital Solutions
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-body text-[14px] font-medium text-[#0f2557] hover:text-[#00c6d7] transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/home/contact"
              className="hidden md:inline-flex items-center btn-hover bg-[#0f2557] text-white font-body font-medium text-[14px] px-5 py-2 rounded-lg hover:opacity-90 transition-all duration-200"
            >
              Talk to Us
            </Link>
            <button
              type="button"
              className="md:hidden p-2 text-[#0f2557]"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t border-[rgba(15,37,87,0.08)] px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-body text-[15px] font-medium text-[#0f2557] hover:text-[#00c6d7] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/home/contact"
              className="inline-flex items-center justify-center bg-[#0f2557] text-white font-body font-medium text-[14px] px-5 py-2.5 rounded-lg mt-2"
              onClick={() => setMenuOpen(false)}
            >
              Talk to Us
            </Link>
          </div>
        )}
      </header>
    </>
  )
}
