"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Navbar from "@/components/kawie/navbar"
import Footer from "@/components/kawie/footer"
import ContactForm from "@/components/kawie/contact-form"
import ContactCards from "@/components/kawie/contact-cards"

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1"
          el.style.transform = "translateY(0)"
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}

function RevealSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useScrollReveal()
  return (
    <div
      ref={ref}
      style={{
        opacity: 0,
        transform: "translateY(28px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

export default function ContactPage() {
  return (
    <main
      className="min-h-screen font-sans"
      style={{ background: "#0a0c10", color: "#ffffff" }}
    >
      {/* Noise texture overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
          opacity: 0.035,
        }}
      />

      <Navbar />

      {/* ——— SECTION 1: PAGE HERO ——— */}
      <section
        className="relative z-10 flex flex-col items-center text-center px-6 pt-40 pb-20"
        style={{ maxWidth: 1160, margin: "0 auto" }}
      >
        <RevealSection delay={0}>
          {/* Eyebrow pill */}
          <div className="flex justify-center mb-6">
            <span
              className="font-sans font-medium text-xs tracking-widest uppercase px-4 py-2"
              style={{
                background: "rgba(0,198,215,0.12)",
                color: "#00c6d7",
                borderRadius: 999,
                border: "1px solid rgba(0,198,215,0.2)",
              }}
            >
              Get in Touch
            </span>
          </div>

          {/* H1 */}
          <h1
            className="font-serif font-extrabold text-white text-balance mb-6"
            style={{
              fontSize: "clamp(52px, 8vw, 88px)",
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
            }}
          >
            Let&apos;s talk.
          </h1>

          {/* Description */}
          <p
            className="font-sans font-light leading-relaxed text-balance mx-auto"
            style={{
              color: "#8b90a0",
              fontSize: 18,
              maxWidth: 520,
            }}
          >
            Book a demo, request a proposal, or ask about the UEOS-APOG training program.
            We&apos;ll get back to you within 24 hours.
          </p>
        </RevealSection>
      </section>

      {/* ——— SECTION 2: MAIN CONTENT ——— */}
      <section
        className="relative z-10 px-6 pb-24"
        style={{ maxWidth: 1160, margin: "0 auto" }}
      >
        <RevealSection delay={100}>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-8 items-start">
            {/* Left — Contact form */}
            <ContactForm />
            {/* Right — Cards */}
            <ContactCards />
          </div>
        </RevealSection>
      </section>

      {/* ——— SECTION 3: CTA BAND ——— */}
      <section
        className="relative z-10 px-6 py-24"
        style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
      >
        <RevealSection delay={0}>
          <div
            className="mx-auto flex flex-col items-center text-center gap-6"
            style={{ maxWidth: 640 }}
          >
            <h2
              className="font-serif font-extrabold text-white text-balance"
              style={{
                fontSize: "clamp(28px, 4vw, 44px)",
                letterSpacing: "-0.03em",
              }}
            >
              Ready to see UEOS in action?
            </h2>
            <p className="font-sans font-light leading-relaxed" style={{ color: "#8b90a0", fontSize: 17 }}>
              Book a 30-minute demo. No commitment, no pressure.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
              <a
                href="mailto:admin@kawie-digital.com"
                className="inline-flex items-center justify-center font-sans font-medium text-sm transition-all duration-200"
                style={{
                  background: "#00c6d7",
                  color: "#0a0c10",
                  borderRadius: 999,
                  padding: "14px 32px",
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
                Request a Demo
              </a>
              <Link
                href="/"
                className="inline-flex items-center justify-center font-sans font-medium text-sm transition-all duration-200"
                style={{
                  background: "transparent",
                  color: "#ffffff",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: 999,
                  padding: "14px 32px",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.transform = "translateY(-2px)"
                  el.style.borderColor = "rgba(255,255,255,0.25)"
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.transform = "translateY(0)"
                  el.style.borderColor = "rgba(255,255,255,0.12)"
                }}
              >
                Back to Home
              </Link>
            </div>
          </div>
        </RevealSection>
      </section>

      <Footer />
    </main>
  )
}
