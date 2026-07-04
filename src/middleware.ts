import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'



export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const hostname = request.headers.get('host') || ''
  const protocol = request.headers.get('x-forwarded-proto') || 'http'

  // Detect spam/gambling query parameters to return 410 Gone status immediately
  const query = request.nextUrl.search.toLowerCase()
  if (
    query.includes('gambling') ||
    query.includes('casino') ||
    query.includes('betting') ||
    query.includes('slots') ||
    query.includes('vegas') ||
    query.includes('stardust') ||
    query.includes('bettings') ||
    query.includes('cherokee') ||
    query.includes('exploring') ||
    query.includes('bet365') ||
    query.includes('tsuyoshi') ||
    query.includes('sunset-station') ||
    query.includes('le-grand') ||
    query.includes('heart-of-vegas') ||
    query.includes('winning') ||
    query.includes('wedding') ||
    query.includes('thrill') ||
    query.includes('world-cup') ||
    query.includes('bookmaker') ||
    query.includes('sportsbook')
  ) {
    // Return 410 Gone to tell search engines these pages were permanently removed
    return new NextResponse('Gone', { status: 410 })
  }

  // 1. Force WWW subdomain
  if (hostname === 'carkeysduplication.com') {
    url.hostname = 'www.carkeysduplication.com'
    url.protocol = 'https:' // Explicitly use https for the redirect
    return NextResponse.redirect(url, 301)
  }

  // 2. Force HTTPS if not already (Cloudflare usually handles this, but good for local/edge consistency)
  if (protocol === 'http' && process.env.NODE_ENV === 'production') {
    url.protocol = 'https:'
    return NextResponse.redirect(url, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}
