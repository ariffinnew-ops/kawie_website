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
import Footer from '@/components/footer'

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
    <main style={{ background: '#0a0c10' }}>
      <Navbar />
      <Hero />
      <ProblemBand />
      <UeosIntro />
      <Modules />
      <Industries />
      <Training />
      <Security />
      <Roadmap />
      <CtaBand />
      <Footer />
    </main>
  )
}
