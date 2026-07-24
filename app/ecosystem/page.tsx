import type { Metadata } from 'next'
import EcosystemPageClient from './ecosystem-page-client'

export const metadata: Metadata = {
  title: 'UEOS Ecosystem Map — Kawie Digital Solutions',
  description:
    'Explore how all 25 UEOS modules connect — core platform, flagship combos, support apps, and add-ons in one interactive relationship map.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/ecosystem',
  },
}

export default function EcosystemPage() {
  return <EcosystemPageClient />
}
