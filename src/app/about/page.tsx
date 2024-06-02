import React from 'react'
import { EventName } from '@/events/types'
import { sendEvent } from '@/events/events'

export default async function About() {
  await sendEvent(EventName.PageViewEvent, { path: '/about' })

  return (
    <main>
      <h1>
        About
      </h1>
    </main>
  )
}
