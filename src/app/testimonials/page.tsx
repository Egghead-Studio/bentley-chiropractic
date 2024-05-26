import React from 'react'
import { AnalyticsClient } from '@/events/AnalyticsClient'
import { getIP } from '@/utils/ip'
import { EventName } from '@/events/events'

export default function Testimonials() {
  const analyticsClient = new AnalyticsClient()

  const ip = getIP()
  analyticsClient.track({ name: EventName.PageViewEvent, properties: { distinct_id: ip, path: '/testimonials', ip } })

  return (
    <main>
      <h1>
        Testimonials
      </h1>
    </main>
  )
}
