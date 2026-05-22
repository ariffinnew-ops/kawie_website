import type { Metadata } from 'next'
import { Syne, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'UEOS — Unified Enterprise Operating System | Kawie Digital',
  description:
    'One platform that consolidates project management, crew operations, and supply chain into a single, always-on cloud system — built for Oil & Gas, ready for every industry.',
  keywords: ['UEOS', 'Enterprise SaaS', 'Oil & Gas', 'Kawie Digital', 'Project Management', 'Crewing Management'],
  openGraph: {
    title: 'UEOS — Unified Enterprise Operating System',
    description: 'Built for Oil & Gas. Ready for Every Industry.',
    siteName: 'Kawie Digital Solutions',
  },
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} bg-[#0a0c10]`}>
      <body className="antialiased font-body">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
