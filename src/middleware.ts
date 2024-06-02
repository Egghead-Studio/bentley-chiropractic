import { NextRequest, NextResponse } from 'next/server'

export async function middleware(req: NextRequest) {
  const requestCookies = req.cookies
  const requestHeaders = new Headers(req.headers)

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
