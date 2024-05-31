import React from 'react'
import { AnalyticsClient } from '@/events/AnalyticsClient'
import { EventName } from '@/events/types'
import { getSessionInfo } from '@/events/session'
import { HeroSection } from '@/components/HeroSection/HeroSection'
import { FAQSection } from '@/components/FAQ/FAQ'
import { WhatToExpect } from '@/components/WhatToExpect/WhatToExpect'
import { HowICanHelp } from '@/components/HowICanHelp/HowICanHelp'
import { PatientTestimonials } from '@/components/PatientTestimonials/PatientTestimonials'

export default async function Home() {
  const analyticsClient = new AnalyticsClient()
  const { ip, sessionID } = await getSessionInfo()
  analyticsClient.track({ name: EventName.PageViewEvent, properties: { distinct_id: sessionID, path: '/', ip } })

  return (
    <main>
      <div>
        <HeroSection/>
        <HowICanHelp/>
        <WhatToExpect/>
        <PatientTestimonials/>
        <FAQSection/>
      </div>
    </main>
  )
}
