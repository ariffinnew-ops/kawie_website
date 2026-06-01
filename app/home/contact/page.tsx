import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/main/navbar'
import Footer from '@/components/main/footer'
import { ContactForm } from '@/components/main/kawie/ContactForm'
import { ContactCards } from '@/components/main/kawie/ContactCards'

export const metadata: Metadata = {
  title: 'Contact Us — Kawie Digital Solutions',
  description:
    'Book a demo, request a proposal, or ask about our services. We will get back to you within 24 hours.',
  robots: {
    index: false,
    follow: false,
  },
}

type ContactPageProps = {
  searchParams: Promise<{ service?: string }>
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const { service } = await searchParams

  return (
    <>
      <Navbar />

      <main id="main-content" className="min-h-dvh bg-[#f8faff]">
        <section className="mx-auto max-w-[1160px] px-6 pt-24 pb-12">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#0f2557]/20 text-xs font-semibold tracking-widest text-[#0f2557] mb-6 font-heading">
            GET IN TOUCH
          </div>
          <h1 className="font-heading font-extrabold text-5xl md:text-6xl text-[#0f2557] leading-none tracking-tight text-balance mb-4">
            Let&apos;s talk.
          </h1>
          <p className="font-body text-[#4a5578] text-lg leading-relaxed max-w-lg">
            Book a demo, request a proposal, or ask about our services. We&apos;ll get back to you
            within 24 hours.
          </p>
        </section>

        <section className="mx-auto max-w-[1160px] px-6 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8 items-start">
            <ContactForm defaultService={service} />
            <ContactCards />
          </div>
        </section>

        <section
          className="w-full py-16 px-6"
          style={{
            background: 'linear-gradient(135deg, #0f2557 0%, #1a3a80 100%)',
          }}
        >
          <div className="mx-auto max-w-[1160px] flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="font-heading font-extrabold text-3xl text-white text-balance">
                Ready to get started?
              </h2>
              <p className="font-body text-white/70 mt-2">
                No hard sell — just an honest conversation.
              </p>
            </div>
            <Link
              href="/home"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#00c6d7] text-[#0f1f3d] font-semibold text-sm font-body hover:bg-[#00b0bf] transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
