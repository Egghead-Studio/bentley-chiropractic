import React from 'react'
import { AnalyticsClient } from '@/events/AnalyticsClient'
import { EventName } from '@/events/types'
import { getSessionInfo } from '@/events/session'

export default async function Services() {
  const analyticsClient = new AnalyticsClient()

  const { ip, sessionID } = await getSessionInfo()
  analyticsClient.track({ name: EventName.PageViewEvent, properties: { distinct_id: sessionID, path: '/services', ip } })

  return (
    <main>
      <h1>
        Services
      </h1>
    </main>
  )
}
