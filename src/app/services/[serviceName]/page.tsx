'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import { AnalyticsClient } from '@/events/AnalyticsClient'
import { getIP } from '@/utils/ip'
import { EventName } from '@/events/events'

export default function ServicePage() {
  const { serviceName } = useParams()
  const analyticsClient = new AnalyticsClient()

  const ip = getIP()
  analyticsClient.track({ name: EventName.PageViewEvent, properties: { distinct_id: ip, path: '/services/[serviceName]', ip } })

  return (
    <main>
      <h1>
        {serviceName}
      </h1>
    </main>
  )
}
