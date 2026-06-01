import Navbar from "@/components/main/navbar"
import HeroSection from "@/components/main/hero-section"
import AboutSection from "@/components/main/about-section"
import ServicesSection from "@/components/main/services-section"
import ProductSection from "@/components/main/product-section"
import TrainingSection from "@/components/main/training-section"
import WhyKawieSection from "@/components/main/why-kawie-section"
import SocialProofSection from "@/components/main/social-proof-section"
import IndustriesSection from "@/components/main/industries-section"
import CtaBand from "@/components/main/cta-band"
import Footer from "@/components/main/footer"

export default function Home() {
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
