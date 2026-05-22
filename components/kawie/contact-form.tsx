"use client"

import { useState } from "react"

const inputBase: React.CSSProperties = {
  width: "100%",
  background: "#0a0c10",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: 8,
  padding: "14px 16px",
  color: "#ffffff",
  fontSize: 14,
  fontFamily: "inherit",
  outline: "none",
  transition: "border-color 0.2s",
}

export default function ContactForm() {
  const [focused, setFocused] = useState<string | null>(null)

  const getBorder = (field: string) =>
    focused === field ? "1px solid #00c6d7" : "1px solid rgba(255,255,255,0.12)"

  return (
    <div
      className="w-full"
      style={{
        background: "#1c2030",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: 14,
        padding: "40px",
      }}
    >
      <h2
        className="font-serif font-extrabold text-white mb-8"
        style={{ fontSize: 22, letterSpacing: "-0.03em" }}
      >
        Send us a message
      </h2>

      <form
        action="mailto:admin@kawie-digital.com"
        method="post"
        encType="text/plain"
        className="flex flex-col gap-5"
      >
        {/* Full Name */}
        <div className="flex flex-col gap-1.5">
          <label className="font-sans text-xs font-medium" style={{ color: "#8b90a0" }}>
            Full Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Your full name"
            required
            style={{ ...inputBase, border: getBorder("name") }}
            onFocus={() => setFocused("name")}
            onBlur={() => setFocused(null)}
          />
        </div>

        {/* Company Name */}
        <div className="flex flex-col gap-1.5">
          <label className="font-sans text-xs font-medium" style={{ color: "#8b90a0" }}>
            Company Name
          </label>
          <input
            type="text"
            name="company"
            placeholder="Your company name"
            required
            style={{ ...inputBase, border: getBorder("company") }}
            onFocus={() => setFocused("company")}
            onBlur={() => setFocused(null)}
          />
        </div>

        {/* Industry */}
        <div className="flex flex-col gap-1.5">
          <label className="font-sans text-xs font-medium" style={{ color: "#8b90a0" }}>
            Industry
          </label>
          <select
            name="industry"
            required
            defaultValue=""
            style={{
              ...inputBase,
              border: getBorder("industry"),
              appearance: "none",
              cursor: "pointer",
              color: "#8b90a0",
            }}
            onFocus={() => setFocused("industry")}
            onBlur={() => setFocused(null)}
            onChange={(e) => {
              e.target.style.color = "#ffffff"
            }}
          >
            <option value="" disabled>
              Select your industry
            </option>
            <option value="Oil & Gas" style={{ background: "#1c2030" }}>Oil &amp; Gas</option>
            <option value="Construction" style={{ background: "#1c2030" }}>Construction</option>
            <option value="Offshore & Shipping" style={{ background: "#1c2030" }}>Offshore &amp; Shipping</option>
            <option value="Workforce Operations" style={{ background: "#1c2030" }}>Workforce Operations</option>
            <option value="SME" style={{ background: "#1c2030" }}>SME</option>
            <option value="Other" style={{ background: "#1c2030" }}>Other</option>
          </select>
        </div>

        {/* Message */}
        <div className="flex flex-col gap-1.5">
          <label className="font-sans text-xs font-medium" style={{ color: "#8b90a0" }}>
            Message
          </label>
          <textarea
            name="message"
            rows={5}
            placeholder="Tell us about your enquiry..."
            required
            style={{ ...inputBase, border: getBorder("message"), resize: "vertical" }}
            onFocus={() => setFocused("message")}
            onBlur={() => setFocused(null)}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full font-sans font-medium text-sm transition-all duration-200 mt-1"
          style={{
            background: "#00c6d7",
            color: "#0a0c10",
            borderRadius: 8,
            padding: "15px 24px",
            border: "none",
            cursor: "pointer",
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
          Send Message &rarr;
        </button>

        {/* Note */}
        <p className="font-sans text-xs text-center" style={{ color: "#555d70" }}>
          &#10003; We&apos;ll reply within 24 hours to{" "}
          <span style={{ color: "#8b90a0" }}>admin@kawie-digital.com</span>
        </p>
      </form>
    </div>
  )
}
