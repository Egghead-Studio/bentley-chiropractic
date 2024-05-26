import React from 'react'
import { AnalyticsClient } from '@/events/AnalyticsClient'
import { getIP } from '@/utils/ip'
import { EventName } from '@/events/events'

export default function About() {
  const analyticsClient = new AnalyticsClient()

  const ip = getIP()
  analyticsClient.track({ name: EventName.PageViewEvent, properties: { distinct_id: ip, path: '/about', ip } })

  return (
    <main>
      <h1>
        About
      </h1>
    </main>
  )
}
