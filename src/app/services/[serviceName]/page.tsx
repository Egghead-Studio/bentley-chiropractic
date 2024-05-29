import React from 'react'
import { AnalyticsClient } from '@/events/AnalyticsClient'
import { EventName } from '@/events/types'
import { getSessionInfo } from '@/events/session'

interface PageParams {
  serviceName: string
}

export default async function ServicePage({ params }: { params: PageParams }) {
  const { serviceName } = params
  const analyticsClient = new AnalyticsClient()

  const { ip, sessionID } = await getSessionInfo()
  analyticsClient.track({
    name: EventName.PageViewEvent, properties: {
      distinct_id: sessionID,
      path: `/services/${serviceName}`,
      ip
    }
  })

  return (
    <main>
      <h1>
        {serviceName[0].toUpperCase() + serviceName.slice(1)}
      </h1>
    </main>
  )
}
