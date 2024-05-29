import React from 'react'
import { AnalyticsClient } from '@/events/AnalyticsClient'
import { getIP } from '@/utils/ip'
import { EventName } from '@/events/types'
import { getSessionInfo } from '@/events/session'

export default async function About() {
  const analyticsClient = new AnalyticsClient()

  const { ip, sessionID } = await getSessionInfo()
  analyticsClient.track({ name: EventName.PageViewEvent, properties: { distinct_id: sessionID, path: '/about', ip } })


  return (
    <main>
      <h1>
        About
      </h1>
    </main>
  )
}
