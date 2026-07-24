import Link from "next/link"
import Reveal from "./reveal"

export default function CtaSection() {
  return (
    <div
      id="contact-cta"
      className="border-t border-border"
      style={{
        background:
          "radial-gradient(80% 120% at 50% 0%, rgba(14,158,134,0.08), transparent 60%), var(--background)",
      }}
    >
      <Reveal className="mx-auto max-w-[860px] px-7 py-[110px] text-center">
        <p className="eyebrow">Get Started</p>
        <h2 className="mx-auto mt-3.5 max-w-[22ch] text-balance font-heading text-[clamp(28px,3.8vw,44px)] font-extrabold leading-[1.08] tracking-tight">
          See the whole ecosystem running on your operation.
        </h2>
        <p className="mx-auto mt-4 max-w-[52ch] font-body text-[15.5px] leading-relaxed text-muted-foreground">
          Book a walkthrough of UEOS and the app ecosystem — or start with a single module and grow
          from there.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3.5">
          <Link
            href="/contact?service=demo"
            className="btn-hover inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-[13.5px] font-semibold text-primary-foreground hover:shadow-[0_8px_24px_-8px_rgba(14,158,134,0.5)]"
          >
            Book a Demo
          </Link>
          <Link
            href="/contact"
            className="btn-hover inline-flex items-center gap-2 rounded-lg border border-[var(--border)] px-5 py-2.5 text-[13.5px] font-semibold text-foreground hover:border-primary hover:text-primary-dim"
          >
            Talk to Us
          </Link>
        </div>
        <p className="mt-6 font-body text-xs text-[var(--muted-2)]">
          Business partner or reseller?{" "}
          <Link
            href="/contact?service=partner-pricing"
            className="border-b border-dotted border-primary-dim text-primary-dim"
          >
            Request the partner pricing pack →
          </Link>
        </p>
      </Reveal>
    </div>
  )
}
