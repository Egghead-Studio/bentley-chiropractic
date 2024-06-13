import React from 'react'
import { EventName } from '@/events/types'
import { sendEvent } from '@/events/events'
import { MainSection } from '@/components/MainSection/MainSection'
import { sectionTextMap } from '@/app/services/[serviceName]/serviceText'

export const metadata = {
  title: 'Understanding the Gonstead Method | Bentley Chiropractic',
}

export default async function ServicePage() {
  await sendEvent(EventName.PageViewEvent,{ path: '/gonstead-method' })


  return (
    <main>
      <div>
        <MainSection imagePath={'/headache.jpg'} items={sectionTextMap['gonstead-method']}/>
      </div>
    </main>
  )
}
