"use client"

import { useState, type FormEvent } from "react"

const serviceOptions = [
  "UEOS Platform Demo",
  "Construction Project Management (UEOS PM)",
  "Partner / Reseller Pricing",
  "Custom Software Development",
  "IT Consultancy & Digital Transformation",
  "Training & Skills Development",
  "General Enquiry",
]

type ContactFormProps = {
  defaultService?: string
}

export function ContactForm({ defaultService }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState("")

  const initialService =
    defaultService && serviceOptions.includes(defaultService) ? defaultService : ""

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    setError("")

    const form = e.currentTarget
    const data = new FormData(form)

    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      company: String(data.get("company") ?? "") || undefined,
      phone: String(data.get("phone") ?? "") || undefined,
      service: String(data.get("service") ?? ""),
      message: String(data.get("message") ?? ""),
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      const result = (await res.json()) as { error?: string; success?: boolean }

      if (!res.ok) {
        setError(result.error ?? "Something went wrong. Please try again.")
        return
      }

      setSubmitted(true)
      form.reset()
    } catch {
      setError("Network error. Please check your connection or email us directly.")
    } finally {
      setSubmitting(false)
    }
  }

  const inputClass =
    "w-full rounded-xl border border-input bg-white px-4 py-3 font-body text-[15px] text-foreground placeholder:text-[var(--muted-2)] outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"

  const labelClass = "font-body text-sm font-medium text-foreground mb-1.5 block"

  return (
    <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
      <h2 className="mb-1 font-heading text-2xl font-bold text-foreground">Send us a message</h2>
      <p className="mb-8 font-body text-base leading-relaxed text-muted-foreground">
        Tell us about your project or training needs. We&apos;ll respond within 24 hours.
      </p>

      {submitted ? (
        <p className="rounded-xl border border-border bg-secondary px-4 py-3 font-body text-[15px] text-foreground">
          Thank you — your message has been sent. We&apos;ll get back to you within 24 hours. If
          you need to follow up, email{" "}
          <a href="mailto:admin@kawie-digital.com" className="font-medium text-primary-dim">
            admin@kawie-digital.com
          </a>{" "}
          or{" "}
          <a href="mailto:inquiry@kawie-digital.com" className="font-medium text-primary-dim">
            inquiry@kawie-digital.com
          </a>
          .
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {error && (
            <p
              className="rounded-xl border border-red-100 bg-red-50 px-4 py-3 font-body text-sm text-red-600"
              role="alert"
            >
              {error}
            </p>
          )}

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className={labelClass}>
                Full name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className={inputClass}
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className={labelClass}>
                Email *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className={inputClass}
                placeholder="you@company.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="company" className={labelClass}>
                Company
              </label>
              <input
                id="company"
                name="company"
                type="text"
                className={inputClass}
                placeholder="Company name"
              />
            </div>
            <div>
              <label htmlFor="phone" className={labelClass}>
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className={inputClass}
                placeholder="+60 ..."
              />
            </div>
          </div>

          <div>
            <label htmlFor="service" className={labelClass}>
              I&apos;m interested in *
            </label>
            <select
              id="service"
              name="service"
              required
              className={inputClass}
              defaultValue={initialService}
            >
              <option value="" disabled>
                Select a service
              </option>
              {serviceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="message" className={labelClass}>
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className={`${inputClass} min-h-[120px] resize-y`}
              placeholder="Tell us about your project, timeline, or training requirements..."
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="btn-hover inline-flex items-center justify-center rounded-xl bg-primary px-8 py-3.5 font-body text-[15px] font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
          >
            {submitting ? "Sending…" : "Send Message →"}
          </button>
        </form>
      )}
    </div>
  )
}
