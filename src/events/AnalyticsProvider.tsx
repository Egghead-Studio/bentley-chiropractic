'use client'
import React from 'react'
import { AnalyticsClient } from '@/events/AnalyticsClient'
import { Singleton } from '@/utils/Singleton'

interface AnalyticsStore {
  client?: AnalyticsClient
}

interface AnalyticsProviderProps {
  children: React.ReactNode
}

export const AnalyticsContext = React.createContext<AnalyticsStore>({ client: undefined })

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const analyticsClient: Singleton<AnalyticsClient> = new Singleton('analyticsClient')
  return (
    <AnalyticsContext.Provider value={{ client: analyticsClient.value }}>
      {children}
    </AnalyticsContext.Provider>
  )
}
