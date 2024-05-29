'use server'
import { cookies } from 'next/headers'
import { getIP } from '@/utils/ip'

type SessionId = string
interface SessionData {
  ip: string
  sessionID: SessionId
}

export const getSessionId = async (): Promise<SessionId | undefined> => {
  const cookieStore = cookies()
  return cookieStore.get('sessionID')?.value
}

export const getSessionInfo = async (): Promise<SessionData> => {
  const sessionId = await getSessionId()
  const ip = getIP()

  return { sessionID: sessionId as SessionId, ip }
}
