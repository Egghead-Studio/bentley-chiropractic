import React from 'react'
import { AnalyticsClient } from '@/events/AnalyticsClient'
import { EventName } from '@/events/types'
import { getSessionInfo } from '@/events/session'
import { AboutMatt } from '@/components/AboutMatt/AboutMatt'
import { PatientTestimonials } from '@/components/PatientTestimonials/PatientTestimonials'
import { WhyGonsteadWorks } from '@/components/WhyGonsteadWorks/WhyGonsteadWorks'
import { FAQSection } from '@/components/FAQ/FAQ'
import { WhatSetsMeApart } from '@/components/WhatSetsMeApart/WhatSetsMeApart'
import { sendEvent } from '@/events/events'

export default async function About() {
  const analyticsClient = new AnalyticsClient()

  const { ip, sessionID } = await getSessionInfo()
  analyticsClient.track({ name: EventName.PageViewEvent, properties: { distinct_id: sessionID, path: '/about', ip } })

  const sections = [
    <WhatSetsMeApart key={'apart'} />,
    <AboutMatt headerText={'About Dr. Bentley'} key={'about'} />,
    <WhyGonsteadWorks key={'why-it-works'} />,
    <PatientTestimonials headerText={'Proven results'} key={'testimonials'} />
  ]
  await sendEvent(EventName.PageViewEvent, { path: '/about' })

  return (
    <main>
      <div>
        {sections && sections.map((section, index) => <div className={index % 2 === 0 ? 'bg-transparent' : 'bg-secondary'} key={index}>{section}</div>)}
        <FAQSection key={'faq'} />
      </div>
    </main>
  )
}
