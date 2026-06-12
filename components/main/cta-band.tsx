import Link from "next/link"

export default function CtaBand() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0f2557 0%, #1a3a7c 100%)" }}
    >
      {/* Decorative shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-[-60px] right-[-60px] w-[320px] h-[320px] rounded-full"
          style={{ background: "rgba(0,198,215,0.06)" }}
        />
        <div
          className="absolute bottom-[-80px] left-[-80px] w-[280px] h-[280px] rounded-full"
          style={{ background: "rgba(255,255,255,0.03)" }}
        />
      </div>

      <div className="relative mx-auto max-w-[1160px] px-6 text-center">
        <h2
          className="font-heading font-extrabold text-white mb-5 text-balance"
          style={{ fontSize: "clamp(36px, 5vw, 60px)", lineHeight: 1.15, letterSpacing: "-0.02em" }}
        >
          Ready to digitalise
          <br />
          your business?
        </h2>
        <p
          className="font-body font-light mb-10 mx-auto"
          style={{ fontSize: "18px", color: "rgba(255,255,255,0.70)", maxWidth: "480px", lineHeight: 1.7 }}
        >
          Let&apos;s talk about what you need. No hard sell — just an honest conversation about
          how we can help.
        </p>

        <Link
          href="/contact"
          className="btn-hover inline-flex items-center justify-center gap-2 font-body font-medium text-[15px] px-8 py-3.5 rounded-lg"
          style={{ background: "#00c6d7", color: "#0f1f3d" }}
        >
          Talk to Us →
        </Link>
      </div>
    </section>
  )
}
