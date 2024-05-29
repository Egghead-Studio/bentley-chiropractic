import React from 'react'
import { AnalyticsClient } from '@/events/AnalyticsClient'
import { EventName } from '@/events/types'
import { getSessionInfo } from '@/events/session'

export default async function Testimonials() {
  const analyticsClient = new AnalyticsClient()

  const { ip, sessionID } = await getSessionInfo()
  analyticsClient.track({ name: EventName.PageViewEvent, properties: { distinct_id: sessionID, path: '/testimonials', ip } })

  return (
    <main>
      <h1>
        Testimonials
      </h1>
    </main>
  )
}
