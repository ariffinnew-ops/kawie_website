import { Mail, MapPin } from "lucide-react"
import Link from "next/link"
import {
  COMPANY_ADDRESS_LINES,
  COMPANY_EMAIL_PRIMARY,
  COMPANY_EMAIL_INQUIRY,
} from "@/lib/company-contact"

const contactCards = [
  {
    icon: Mail,
    title: "Email",
    description: "We reply within 24 hours on business days.",
    emails: [COMPANY_EMAIL_PRIMARY, COMPANY_EMAIL_INQUIRY],
  },
  {
    icon: MapPin,
    title: "Address",
    description: "Authorised Training Centre with Purple-Ayerspot@Cyber9HUB Training Space.",
    addressLines: [...COMPANY_ADDRESS_LINES],
    href: null,
  },
]

export function ContactCards() {
  return (
    <div className="flex flex-col gap-4">
      {contactCards.map((card) => {
        const Icon = card.icon
        const content = (
          <div
            className="rounded-2xl border border-[rgba(15,37,87,0.08)] bg-white p-6 shadow-sm transition-shadow hover:shadow-md h-full"
          >
            <div
              className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl text-[#0f2557]"
              style={{ background: "#eef2ff" }}
            >
              <Icon size={20} strokeWidth={2} aria-hidden />
            </div>
            <h3 className="font-heading text-base font-bold text-[#0f2557] mb-1">
              {card.title}
            </h3>
            <p className="font-body text-sm text-[#4a5578] leading-relaxed mb-3">
              {card.description}
            </p>
            {"emails" in card && card.emails ? (
              <ul className="flex flex-col gap-2">
                {card.emails.map((email) => (
                  <li key={email}>
                    <a
                      href={`mailto:${email}`}
                      className="font-body text-[15px] font-medium text-[#00c6d7] hover:text-[#0f2557] transition-colors break-all"
                    >
                      {email}
                    </a>
                  </li>
                ))}
              </ul>
            ) : "addressLines" in card && card.addressLines ? (
              <address className="not-italic font-body text-[15px] font-medium text-[#2d3748] leading-relaxed">
                {card.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            ) : null}
          </div>
        )

        if ("href" in card && card.href) {
          return (
            <Link key={card.title} href={card.href} className="block">
              {content}
            </Link>
          )
        }

        return <div key={card.title}>{content}</div>
      })}
    </div>
  )
}
