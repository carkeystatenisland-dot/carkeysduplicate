import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// ─────────────────────────────────────────────────────────────────────────────
// 301 REDIRECT MAP: old indexed URLs → new canonical URLs
// These are PERMANENT redirects that preserve Google's index authority.
// All slugs were renamed from "-duplication" to "-duplicate" on Aug 5 2026.
// Without these, every old Google result returns 404 → impressions drop to 0.
// ─────────────────────────────────────────────────────────────────────────────
const PERMANENT_REDIRECTS: Record<string, string> = {
  // ── Old domain root ──────────────────────────────────────────────────────
  // (handled by hostname check below)

  // ── Service pages ─────────────────────────────────────────────────────────
  '/transponder-key-duplication':       '/transponder-key-duplicate',
  '/key-fob-duplication':               '/key-fob-duplicate',
  '/smart-key-duplication':             '/smart-key-duplicate',
  '/push-to-start-key-duplication':     '/push-to-start-key-duplicate',
  '/laser-cut-key-duplication':         '/laser-cut-key-duplicate',

  // ── Car make pages ────────────────────────────────────────────────────────
  '/toyota-key-duplication':            '/toyota-key-duplicate',
  '/honda-key-duplication':             '/honda-key-duplicate',
  '/ford-key-duplication':              '/ford-key-duplicate',
  '/bmw-key-duplication':               '/bmw-key-duplicate',
  '/nissan-key-duplication':            '/nissan-key-duplicate',
  '/hyundai-key-duplication':           '/hyundai-key-duplicate',
  '/jeep-key-duplication':              '/jeep-key-duplicate',
  '/chevrolet-key-duplication':         '/chevrolet-key-duplicate',
  '/kia-key-duplication':               '/kia-key-duplicate',
  '/mercedes-key-duplication':          '/mercedes-key-duplicate',
  '/subaru-key-duplication':            '/subaru-key-duplicate',
  '/volkswagen-key-duplication':        '/volkswagen-key-duplicate',

  // ── Special service pages ─────────────────────────────────────────────────
  '/same-day-car-key-duplication-nyc':  '/same-day-car-key-duplicate-nyc',
  '/24-hour-car-key-duplication-nyc':   '/24-hour-car-key-duplicate-nyc',
  '/mobile-car-key-duplication-nyc':    '/mobile-car-key-duplicate-nyc',

  // ── Blog posts ────────────────────────────────────────────────────────────
  '/blog/car-key-duplication-cost-nyc':                '/blog/car-key-duplicate-cost-nyc',
  '/blog/dealer-vs-locksmith-key-duplication-nyc':     '/blog/dealer-vs-locksmith-key-duplicate-nyc',

  // ── Old domain hostname redirects (carkeysduplication.com → carkeyduplicate.com)
  // handled separately via hostname check below
}

// ─────────────────────────────────────────────────────────────────────────────
// SPAM QUERY PARAMETER BLOCKLIST
// Spammy casino/gambling parameters showing on Google Search Console.
// Return 410 Gone so search engines permanently de-index these URLs.
// ─────────────────────────────────────────────────────────────────────────────
const SPAM_KEYWORDS = [
  'gambling', 'casino', 'betting', 'slots', 'vegas', 'stardust',
  'bettings', 'cherokee', 'bet365', 'tsuyoshi', 'sunset-station',
  'le-grand', 'heart-of-vegas', 'world-cup', 'bookmaker', 'sportsbook',
]

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const hostname = request.headers.get('host') || ''
  const protocol = request.headers.get('x-forwarded-proto') || 'http'
  const pathname = request.nextUrl.pathname

  // ── 1. Block spam query parameters ────────────────────────────────────────
  const query = request.nextUrl.search.toLowerCase()
  if (SPAM_KEYWORDS.some(kw => query.includes(kw))) {
    return new NextResponse('Gone', { status: 410 })
  }

  // ── 2. Redirect old domain (carkeysduplication.com) → new domain ──────────
  if (hostname === 'carkeysduplication.com' || hostname === 'www.carkeysduplication.com') {
    url.hostname = 'www.carkeyduplicate.com'
    url.protocol = 'https:'
    return NextResponse.redirect(url, 301)
  }

  // ── 3. Force www subdomain on bare carkeyduplicate.com ────────────────────
  if (hostname === 'carkeyduplicate.com') {
    url.hostname = 'www.carkeyduplicate.com'
    url.protocol = 'https:'
    return NextResponse.redirect(url, 301)
  }

  // ── 4. Force HTTPS ────────────────────────────────────────────────────────
  if (protocol === 'http' && process.env.NODE_ENV === 'production') {
    url.protocol = 'https:'
    return NextResponse.redirect(url, 301)
  }

  // ── 5. 301 redirects for all renamed slugs ────────────────────────────────
  const newPath = PERMANENT_REDIRECTS[pathname]
  if (newPath) {
    url.pathname = newPath
    return NextResponse.redirect(url, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - favicon.ico, sitemap.xml, robots.txt
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}