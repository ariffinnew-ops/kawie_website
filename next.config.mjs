const MAJOR_VERSION = 1

// KAWIE versioning SOP — v{MAJOR}-{DDMMYY}.{HHMM}, Malaysia time, stamped at build.
function computeBuildVersion() {
  const now = new Date()
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Kuala_Lumpur',
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).formatToParts(now)

  const get = (type) => parts.find((p) => p.type === type)?.value ?? '00'

  const dd = get('day')
  const mm = get('month')
  const yy = get('year')
  let hh = get('hour')
  if (hh === '24') {
    hh = '00'
  }

  return `v${MAJOR_VERSION}-${dd}${mm}${yy}.${hh}${get('minute')}`
}

process.env.NEXT_PUBLIC_APP_VERSION = computeBuildVersion()

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/home/contact',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
