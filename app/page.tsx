import type { Metadata } from 'next'
import Navbar from '@/components/main/navbar'
import HeroSection from '@/components/main/hero-section'
import AboutSection from '@/components/main/about-section'
import ServicesSection from '@/components/main/services-section'
import ProductSection from '@/components/main/product-section'
import TrainingSection from '@/components/main/training-section'
import WhyKawieSection from '@/components/main/why-kawie-section'
import SocialProofSection from '@/components/main/social-proof-section'
import IndustriesSection from '@/components/main/industries-section'
import CtaBand from '@/components/main/cta-band'
import Footer from '@/components/main/footer'

export const metadata: Metadata = {
  title: 'Kawie Digital Solutions Sdn Bhd — Custom Software, UEOS & Training',
  description:
    'Cyberjaya-based technology partner for custom software, enterprise platforms, UEOS, and hands-on workforce training. SSM-registered. PDPA-aware.',
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
      'Custom software, IT consultancy, UEOS enterprise platform, and professional training — from Cyberjaya, Malaysia.',
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
        <AboutSection />
        <ServicesSection />
        <ProductSection />
        <TrainingSection />
        <WhyKawieSection />
        <SocialProofSection />
        <IndustriesSection />
        <CtaBand />
      </main>
      <Footer />
    </>
  )
}
