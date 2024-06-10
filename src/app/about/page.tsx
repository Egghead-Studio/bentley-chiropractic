import React from 'react'
import { EventName } from '@/events/types'
import { AboutMatt } from '@/components/AboutMatt/AboutMatt'
import { PatientTestimonials } from '@/components/PatientTestimonials/PatientTestimonials'
import { WhyGonsteadWorks } from '@/components/WhyGonsteadWorks/WhyGonsteadWorks'
import { FAQSection } from '@/components/FAQ/FAQ'
import { WhatSetsMeApart } from '@/components/WhatSetsMeApart/WhatSetsMeApart'
import { sendEvent } from '@/events/events'

export const metadata = {
  title: 'About Dr. Matthew Bentley | Bentley Chiropractic',
}

export default async function About() {

  await sendEvent(EventName.PageViewEvent, { path: '/about' })

  const sections = [
    <WhatSetsMeApart headerText={'What sets me apart'} key={'apart'} />,
    <AboutMatt headerText={'About Dr. Bentley'} key={'about'} />,
    <WhyGonsteadWorks key={'why-it-works'} />,
    <PatientTestimonials headerText={'Proven results'} key={'testimonials'} />
  ]

  return (
    <main>
      <div>
        {sections && sections.map((section, index) => <div className={index % 2 === 0 ? 'bg-transparent' : 'bg-secondary'} key={index}>{section}</div>)}
        <FAQSection headerText={'Frequently asked questions'} key={'faq'} />
      </div>
    </main>
  )
}
