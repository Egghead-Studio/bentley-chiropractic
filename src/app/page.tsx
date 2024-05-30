import React from 'react'
import { AnalyticsClient } from '@/events/AnalyticsClient'
import { EventName } from '@/events/types'
import { getSessionInfo } from '@/events/session'
import { HeroSection } from '@/components/HeroSection/HeroSection'
import { FAQSection } from '@/components/FAQ/FAQ'

export default async function Home() {
  const analyticsClient = new AnalyticsClient()
  const { ip, sessionID } = await getSessionInfo()
  analyticsClient.track({ name: EventName.PageViewEvent, properties: { distinct_id: sessionID, path: '/', ip } })

  return (
    <main>
      <h1>
        <HeroSection />
        <FAQSection />
      </h1>
    </main>
  )
}
