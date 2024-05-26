import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const requestHeaders = new Headers(req.headers)
  const ip = req.ip || ''

  requestHeaders.set('x-forwarded-for', ip)

  return NextResponse.next({
    headers: requestHeaders
  })
}
