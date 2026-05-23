import Navbar from "@/components/main/navbar"
import HeroSection from "@/components/main/hero-section"
import AboutSection from "@/components/main/about-section"
import ServicesSection from "@/components/main/services-section"
import ProductSection from "@/components/main/product-section"
import WhyKawieSection from "@/components/main/why-kawie-section"
import IndustriesSection from "@/components/main/industries-section"
import CtaBand from "@/components/main/cta-band"
import Footer from "@/components/main/footer"

export default function Home() {
  return (
    <div className="h-dvh w-full overflow-y-auto overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProductSection />
        <WhyKawieSection />
        <IndustriesSection />
        <CtaBand />
      </main>
      <Footer />
    </div>
  )
}
