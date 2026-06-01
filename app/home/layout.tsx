import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kawie Digital Solutions Sdn Bhd — Custom Software, UEOS & Training',
  description:
    'Cyberjaya-based technology partner for custom software, enterprise platforms, UEOS, and hands-on workforce training. SSM-registered. PDPA-aware.',
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: 'Kawie Digital Solutions Sdn Bhd',
    description:
      'Custom software, IT consultancy, UEOS enterprise platform, and professional training — from Cyberjaya, Malaysia.',
    type: 'website',
    locale: 'en_MY',
    siteName: 'Kawie Digital Solutions',
  },
}

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
