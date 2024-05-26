import React from 'react'
import { AnalyticsClient } from '@/events/AnalyticsClient'
import { getIP } from '@/utils/ip'
import { EventName } from '@/events/events'

export default function Services() {
  const analyticsClient = new AnalyticsClient()

  const ip = getIP()
  analyticsClient.track({ name: EventName.PageViewEvent, properties: { distinct_id: ip, path: '/services', ip } })

  return (
    <main>
      <h1>
        Services
      </h1>
    </main>
  )
}
