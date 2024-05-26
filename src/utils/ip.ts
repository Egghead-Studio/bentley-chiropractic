import { headers } from 'next/headers'

export const getIP = () => {
  const pageHeaders = headers()
  return pageHeaders.get('x-forwarded-for') || ''
}
