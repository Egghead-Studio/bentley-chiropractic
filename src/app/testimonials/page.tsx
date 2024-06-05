import React from 'react'
import { EventName } from '@/events/types'
import { sendEvent } from '@/events/events'

export default async function Testimonials() {
  await sendEvent(EventName.PageViewEvent, { path: '/testimonials' })

  return (
    <main>
      <h1>
        Testimonials
      </h1>
    </main>
  )
}
