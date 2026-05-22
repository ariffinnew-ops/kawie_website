'use client'

import { useEffect } from 'react'
import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import ProblemBand from '@/components/problem-band'
import UeosIntro from '@/components/ueos-intro'
import Modules from '@/components/modules'
import Industries from '@/components/industries'
import Training from '@/components/training'
import Security from '@/components/security'
import Roadmap from '@/components/roadmap'
import CtaBand from '@/components/cta-band'
import Footer from '@/components/kawie/footer'

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    const elements = document.querySelectorAll('.reveal')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <main className="landing-page" style={{ background: 'var(--bg)' }}>
      <Navbar />
      <div className="section-wrap-odd">
        <Hero />
      </div>
      <div className="section-wrap-even">
        <ProblemBand />
      </div>
      <div className="section-wrap-odd">
        <UeosIntro />
      </div>
      <div className="section-wrap-even">
        <Modules />
      </div>
      <div className="section-wrap-odd">
        <Industries />
      </div>
      <div className="section-wrap-even">
        <Training />
      </div>
      <div className="section-wrap-odd">
        <Security />
      </div>
      <div className="section-wrap-even">
        <Roadmap />
      </div>
      <div className="section-wrap-odd">
        <CtaBand />
      </div>
      <div className="section-wrap-even">
        <Footer />
      </div>
    </main>
  )
}
