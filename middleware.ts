import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Auth disabled — /home is now public
  // Re-enable for maintenance mode
  //
  // const { pathname } = request.nextUrl
  //
  // if (pathname.startsWith('/home')) {
  //   const authCookie = request.cookies.get('kawie-auth')
  //   if (!authCookie || authCookie.value !== 'granted') {
  //     return NextResponse.redirect(new URL('/', request.url))
  //   }
  // }

  return NextResponse.next()
}

export const config = {
  matcher: ['/home/:path*'],
}
