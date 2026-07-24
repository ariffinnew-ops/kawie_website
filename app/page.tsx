import type { Metadata } from 'next'
import Navbar from '@/components/main/navbar'
import Footer from '@/components/main/footer'
import HeroSection from '@/components/home/hero-section'
import UeosBand from '@/components/home/ueos-band'
import FlagshipsSection from '@/components/home/flagships-section'
import EcosystemSection from '@/components/home/ecosystem-section'
import ServicesSection from '@/components/home/services-section'
import TrainingSection from '@/components/home/training-section'
import IndustriesSection from '@/components/home/industries-section'
import CtaSection from '@/components/home/cta-section'

export const metadata: Metadata = {
  title: 'Kawie Digital Solutions Sdn Bhd — UEOS Platform, Custom Software & Training',
  description:
    'One operating system for your entire operation — the UEOS ecosystem of 25 integrated apps, custom software development, and hands-on workforce training. Cyberjaya-based, SSM-registered, PDPA-ready.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.kawie-digital.com',
  },
  openGraph: {
    title: 'Kawie Digital Solutions Sdn Bhd',
    description:
      'The UEOS enterprise platform and app ecosystem, custom software, IT consultancy, and professional training — from Cyberjaya.',
    type: 'website',
    locale: 'en_MY',
    siteName: 'Kawie Digital Solutions',
    url: 'https://www.kawie-digital.com',
  },
}

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <UeosBand />
        <FlagshipsSection />
        <EcosystemSection />
        <ServicesSection />
        <TrainingSection />
        <IndustriesSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
