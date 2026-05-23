"use client"

import { useState, type FormEvent } from "react"

const serviceOptions = [
  "Custom Software Development",
  "IT Consultancy & Digital Transformation",
  "Training & Skills Development",
  "UEOS Platform Demo",
  "General Enquiry",
]

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    const name = String(data.get("name") ?? "")
    const email = String(data.get("email") ?? "")
    const company = String(data.get("company") ?? "")
    const phone = String(data.get("phone") ?? "")
    const service = String(data.get("service") ?? "")
    const message = String(data.get("message") ?? "")

    const subject = encodeURIComponent(`Kawie Digital enquiry — ${service}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nPhone: ${phone}\nService: ${service}\n\nMessage:\n${message}`
    )

    window.location.href = `mailto:admin@kawie-digital.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  const inputClass =
    "w-full rounded-xl border border-[rgba(15,37,87,0.12)] bg-white px-4 py-3 font-body text-[15px] text-[#2d3748] placeholder:text-[#8892a8] outline-none transition-colors focus:border-[#00c6d7] focus:ring-2 focus:ring-[#00c6d7]/20"

  const labelClass = "font-body text-sm font-medium text-[#0f2557] mb-1.5 block"

  return (
    <div className="rounded-2xl border border-[rgba(15,37,87,0.08)] bg-white p-8 shadow-sm">
      <h2 className="font-heading text-2xl font-bold text-[#0f2557] mb-1">
        Send us a message
      </h2>
      <p className="font-body text-[#4a5578] text-base leading-relaxed mb-8">
        Tell us about your project or training needs. We&apos;ll respond within 24 hours.
      </p>

      {submitted ? (
        <p className="font-body text-[15px] text-[#0f2557] rounded-xl bg-[#f0f4ff] border border-[rgba(15,37,87,0.08)] px-4 py-3">
          Your email client should open shortly. If it didn&apos;t, email us at{" "}
          <a href="mailto:admin@kawie-digital.com" className="text-[#00c6d7] font-medium">
            admin@kawie-digital.com
          </a>
          .
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
            <select id="service" name="service" required className={inputClass} defaultValue="">
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
              className={`${inputClass} resize-y min-h-[120px]`}
              placeholder="Tell us about your project, timeline, or training requirements..."
            />
          </div>

          <button
            type="submit"
            className="btn-hover inline-flex items-center justify-center rounded-xl bg-[#0f2557] px-8 py-3.5 font-body text-[15px] font-semibold text-white transition-opacity hover:opacity-90"
          >
            Send Message →
          </button>
        </form>
      )}
    </div>
  )
}
