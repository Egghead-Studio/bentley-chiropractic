'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import { EventProperties } from '@/events/types'

interface AnalyticsProviderProps {
  sessionID: string
  ip: string
  children: React.ReactNode,
}

export interface AnalyticsStore {
  sessionID: string
  ip: string
  getEventProperties: () => EventProperties
}

const defaultGetProperties = () => ({
  distinct_id: '',
  path: '',
  ip: '',
})

export const AnalyticsContext: React.Context<AnalyticsStore> = React.createContext<AnalyticsStore>({
  sessionID: '',
  ip: '',
  getEventProperties: defaultGetProperties
})

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ sessionID, ip, children }) => {
  const path = usePathname()
  const getEventProperties = () => ({ ip, path, distinct_id: sessionID })

  return (
    <AnalyticsContext.Provider value={{ ip, sessionID, getEventProperties }}>
      {children}
    </AnalyticsContext.Provider>
  )
}
