import { Mail, MapPin, MessageCircle, Phone } from "lucide-react"
import Link from "next/link"

const contactCards = [
  {
    icon: Mail,
    title: "Email",
    description: "We reply within 24 hours on business days.",
    value: "admin@kawie-digital.com",
    href: "mailto:admin@kawie-digital.com",
  },
  {
    icon: Phone,
    title: "Phone",
    description: "Mon–Fri, 9:00 AM – 6:00 PM (MYT).",
    value: "+6011-2173 4434",
    href: "tel:+601121734434",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Join our channel for updates and quick questions.",
    value: "Kawie Digital Channel",
    href: "https://whatsapp.com/channel/0029Vb76GGKQuJCSZQvax3v",
    external: true,
  },
  {
    icon: MapPin,
    title: "Office",
    description: "Authorised Training Centre with Cyber9HUB.",
    value: "Cyber9HUB @ Ayerspot, Cyberjaya",
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
            <p
              className={`font-body text-[15px] font-medium ${
                card.href ? "text-[#00c6d7]" : "text-[#2d3748]"
              }`}
            >
              {card.value}
            </p>
          </div>
        )

        if (card.href) {
          return (
            <Link
              key={card.title}
              href={card.href}
              target={card.external ? "_blank" : undefined}
              rel={card.external ? "noopener noreferrer" : undefined}
              className="block"
            >
              {content}
            </Link>
          )
        }

        return <div key={card.title}>{content}</div>
      })}
    </div>
  )
}
