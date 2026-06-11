import type { Metadata } from 'next'
import { Inter, Barlow } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ViewTracker } from '@/components/view-tracker'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-barlow',
})

export const metadata: Metadata = {
  title: 'Kawie Digital Solutions Sdn Bhd — Coming Soon',
  description:
    'Kawie Digital Solutions Sdn Bhd is building something powerful. Our website is under construction. Stay tuned.',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} ${barlow.variable} font-sans antialiased`}>
        {children}
        <ViewTracker />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
