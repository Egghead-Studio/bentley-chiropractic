import { NextRequest, NextResponse } from 'next/server'

export async function middleware(req: NextRequest) {
  const requestCookies = req.cookies
  const requestHeaders = new Headers(req.headers)

  // Add the current path and referrer so that the Analytics helpers can pull it.
  requestHeaders.set('x-current-path', req.nextUrl.pathname)

  const referrer = req.headers.get('referer') || '/'
  const referrerURL = referrer.split('?')[0]
  requestHeaders.set('x-referred-by', referrerURL || '/')

  // Add UTM data to the request headers
  requestHeaders.set('x-utm-source', req.nextUrl.searchParams.get('utm_source') || '')
  requestHeaders.set('x-utm-medium', req.nextUrl.searchParams.get('utm_medium') || '')
  requestHeaders.set('x-utm-campaign', req.nextUrl.searchParams.get('utm_campaign') || '')
  requestHeaders.set('x-utm-content', req.nextUrl.searchParams.get('utm_content') || '')
  requestHeaders.set('x-utm-term', req.nextUrl.searchParams.get('utm_term') || '')

  // Create a session ID if it doesn't exist
  let sessionID = requestCookies.get('sessionID')?.value || ''
  if (!sessionID) {
    sessionID = crypto.randomUUID()
    requestCookies.set('sessionID', sessionID)
  }

  const response = NextResponse.next({
    headers: requestHeaders,
  })

  // This step sets cookies in the browser because
  // Next.js passes the cookies in a `Set-Cookie` header
  response.cookies.set({
    name: 'sessionID',
    value: sessionID,
    maxAge: 60 * 60 * 24 * 7, // 1 week
  })

  return response
}

export const config = {
  matcher: [
    /*
    * Match all request paths except for the ones starting with:
    * - _next/static (static files)
    * - _next/image (image optimization files)
    * - favicon.ico (favicon file)
    * Feel free to modify this pattern to include more paths.
    */
    '/((?!_next/static|_next/image|favicon.ico|components|events|utils).*)',
  ],
}
