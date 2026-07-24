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
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/contact',
  },
}

// Maps ?service= slugs (used by homepage CTAs) to form dropdown options.
const SERVICE_SLUGS: Record<string, string> = {
  demo: 'UEOS Platform Demo',
  'construction-pm': 'Construction Project Management (UEOS PM)',
  'partner-pricing': 'Partner / Reseller Pricing',
  training: 'Training & Skills Development',
}

type ContactPageProps = {
  searchParams: Promise<{ service?: string }>
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const { service } = await searchParams
  const defaultService = service ? (SERVICE_SLUGS[service] ?? service) : undefined

  return (
    <>
      <Navbar />

      <main id="main-content" className="min-h-dvh bg-background">
        <section className="mx-auto max-w-[1180px] px-6 pb-12 pt-16">
          <p className="eyebrow">Get in touch</p>
          <h1 className="mt-3.5 text-balance font-heading text-5xl font-extrabold leading-none tracking-tight text-foreground md:text-6xl">
            Let&apos;s talk.
          </h1>
          <p className="mt-4 max-w-lg font-body text-lg leading-relaxed text-muted-foreground">
            Book a demo, request a proposal, or ask about our services. We&apos;ll get back to you
            within 24 hours.
          </p>
        </section>

        <section className="mx-auto max-w-[1180px] px-6 pb-20">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_400px]">
            <ContactForm defaultService={defaultService} />
            <ContactCards />
          </div>
        </section>

        <section className="console w-full bg-gradient-to-br from-[var(--c-bg)] to-[var(--c-bg2)] px-6 py-16">
          <div className="mx-auto flex max-w-[1180px] flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <h2 className="text-balance font-heading text-3xl font-extrabold text-[var(--c-ink)]">
                Ready to get started?
              </h2>
              <p className="mt-2 font-body text-[var(--c-muted)]">
                No hard sell — just an honest conversation.
              </p>
            </div>
            <Link
              href="/"
              className="btn-hover inline-flex shrink-0 items-center gap-2 rounded-xl bg-[var(--c-accent)] px-6 py-3.5 font-body text-sm font-semibold text-[var(--c-accent-ink)]"
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
