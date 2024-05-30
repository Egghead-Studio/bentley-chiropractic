import React from 'react'
import { AnalyticsClient } from '@/events/AnalyticsClient'
import { EventName } from '@/events/types'
import { getSessionInfo } from '@/events/session'
import { WhatToExpect } from '@/components/WhatToExpect/WhatToExpect'

export default async function Home() {
  const analyticsClient = new AnalyticsClient()
  const { ip, sessionID } = await getSessionInfo()
  analyticsClient.track({ name: EventName.PageViewEvent, properties: { distinct_id: sessionID, path: '/', ip } })

  return (
    <main>
      <h1>
        Bentley Chiropractic
      </h1>
      <WhatToExpect/>
    </main>
  )
}
