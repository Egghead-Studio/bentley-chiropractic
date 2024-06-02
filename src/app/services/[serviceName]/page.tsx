import React from 'react'
import { EventName } from '@/events/types'
import { sendEvent } from '@/events/events'

interface PageParams {
  serviceName: string
}

export default async function ServicePage({ params }: { params: PageParams }) {
  const { serviceName } = params
  await sendEvent(EventName.PageViewEvent, { path: `/services/${serviceName}` })

  return (
    <main>
      <h1>
        {serviceName[0].toUpperCase() + serviceName.slice(1)}
      </h1>
    </main>
  )
}
