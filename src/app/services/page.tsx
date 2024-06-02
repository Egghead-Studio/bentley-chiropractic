import React from 'react'
import { EventName } from '@/events/types'
import { sendEvent } from '@/events/events'

export default async function Services() {
  await sendEvent(EventName.PageViewEvent, { path: '/services' })

  return (
    <main>
      <h1>
        Services
      </h1>
    </main>
  )
}
