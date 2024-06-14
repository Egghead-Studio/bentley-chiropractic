import React from 'react'
import { EventName } from '@/events/types'
import { sendEvent } from '@/events/events'

export const metadata = {
  title: 'Testimonials | Bentley Chiropractic',
}

export default async function Testimonials() {
  await sendEvent(EventName.PageViewEvent, { path: '/testimonials' })

  return (
    <main>
      <div>
        Testimonials
      </div>
    </main>
  )
}
