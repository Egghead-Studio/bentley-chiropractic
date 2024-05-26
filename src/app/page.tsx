import React from 'react'
import { AnalyticsClient } from '@/events/AnalyticsClient'
import { EventName } from '@/events/events'
import { getIP } from '@/utils/ip'

export default function Home() {
  const analyticsClient = new AnalyticsClient()

  const ip = getIP()
  analyticsClient.track({ name: EventName.PageViewEvent, properties: { distinct_id: ip, path: '/', ip } })

  return (
    <main>
      <h1>
        Bentley Chiropractic
      </h1>
    </main>
  )
}
