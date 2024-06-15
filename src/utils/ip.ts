import { headers } from 'next/headers'

export const getIP = (): string => {
  const fallback = '0.0.0.0'
  const pageHeaders = headers()
  const forwardedFor = pageHeaders.get('x-forwarded-for')

  if (forwardedFor) {
    console.log('forwardedFor', forwardedFor)
    console.log('first forwardedFor', forwardedFor.split(',')[0])
    return forwardedFor.split(',')[0] ?? fallback
  }

  console.log('realIP', pageHeaders.get('x-real-ip'))
  return pageHeaders.get('x-real-ip') ?? fallback
}
