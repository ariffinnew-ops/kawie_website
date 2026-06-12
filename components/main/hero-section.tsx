import Link from "next/link"

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[90vh] flex items-start justify-center overflow-hidden pt-24"
      style={{
        background: "linear-gradient(135deg, #f8faff 0%, #eef2ff 50%, #f0fafe 100%)",
      }}
    >
      {/* Subtle noise texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.02'/%3E%3C/svg%3E")`,
          opacity: 0.02,
        }}
      />

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large circle top-right */}
        <div
          className="float-a absolute top-[-60px] right-[-40px] w-[280px] h-[280px] rounded-full opacity-40"
          style={{ background: "rgba(15,37,87,0.04)", border: "1px solid rgba(15,37,87,0.06)" }}
        />
        {/* Medium circle bottom-left */}
        <div
          className="float-b absolute bottom-[60px] left-[-70px] w-[200px] h-[200px] rounded-full opacity-40"
          style={{ background: "rgba(0,198,215,0.06)", border: "1px solid rgba(0,198,215,0.08)" }}
        />
        {/* Small dot cluster top-left */}
        <div
          className="float-a absolute top-[100px] left-[8%] w-[110px] h-[110px] rounded-full opacity-40"
          style={{ background: "rgba(15,37,87,0.03)" }}
        />
        {/* Cyan accent circle */}
        <div
          className="float-b absolute top-[30%] right-[10%] w-[56px] h-[56px] rounded-full opacity-40"
          style={{ background: "rgba(0,198,215,0.10)" }}
        />
        {/* Small navy dot */}
        <div
          className="float-a absolute bottom-[25%] right-[20%] w-[28px] h-[28px] rounded-full opacity-40"
          style={{ background: "rgba(15,37,87,0.08)" }}
        />
        {/* Grid dots */}
        <svg
          className="float-b absolute bottom-[15%] left-[12%] opacity-40"
          width="90"
          height="90"
          viewBox="0 0 120 120"
          fill="none"
          aria-hidden="true"
        >
          {[0, 1, 2, 3, 4].map((row) =>
            [0, 1, 2, 3, 4].map((col) => (
              <circle
                key={`${row}-${col}`}
                cx={col * 24 + 12}
                cy={row * 24 + 12}
                r="2.5"
                fill="#0f2557"
              />
            ))
          )}
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1160px] px-6 pt-8 pb-20 text-center">
        {/* Eyebrow pill */}
        <div className="inline-flex items-center gap-2 mb-8 animate-fade-in">
          <span
            className="font-body text-[13px] font-medium text-[#0f2557] px-4 py-1.5 rounded-full"
            style={{
              border: "1px solid rgba(15,37,87,0.20)",
              background: "rgba(15,37,87,0.04)",
              letterSpacing: "0.02em",
            }}
          >
            ✦ Kawie Digital Solutions Sdn Bhd
          </span>
        </div>

        {/* H1 */}
        <h1
          className="font-heading font-extrabold text-[#0f2557] text-balance mb-6 animate-fade-in-delay-1"
          style={{ fontSize: "clamp(48px, 7vw, 80px)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
        >
          We Build.
          <br />
          We Train.
          <br />
          We{" "}
          <span className="text-[#00c6d7]">Transform.</span>
        </h1>

        {/* Subheading */}
        <p className="font-body font-normal text-lg text-[#4a5578] leading-relaxed mx-auto mb-10 max-w-[640px] animate-fade-in-delay-2">
          Your trusted digital partner for custom software, enterprise platforms, and hands-on
          workforce training — Cyberjaya-based, SSM-registered, and built for Malaysian industry.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-delay-3">
          <Link
            href="/contact"
            className="btn-hover inline-flex items-center justify-center gap-2 bg-[#0f2557] text-white font-body font-medium px-8 py-3.5 rounded-lg text-[15px]"
          >
            Talk to Us →
          </Link>
          <Link
            href="/#services"
            className="btn-hover inline-flex items-center justify-center gap-2 font-body font-medium px-8 py-3.5 rounded-lg text-[15px] text-[#0f2557]"
            style={{ border: "2px solid #0f2557" }}
          >
            Explore Our Work ↓
          </Link>
        </div>

        {/* Trust row */}
        <div
          className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 animate-fade-in-delay-3"
          style={{ fontSize: "13px", color: "#8892a8" }}
        >
          {[
            "SSM Registered (202601019532)",
            "PDPA-Ready",
            "Cloud-Native",
          ].map((item, i) => (
            <span key={item} className="flex items-center gap-2 font-body">
              {i > 0 && <span className="hidden sm:inline text-[#c8d0e0]">·</span>}
              <span>✦ {item}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
