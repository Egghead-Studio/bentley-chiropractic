import React from 'react'
import { EventName } from '@/events/types'
import { sendEvent } from '@/events/events'
import { HowICanHelp } from '@/components/HowICanHelp/HowICanHelp'
import { PatientTestimonials } from '@/components/PatientTestimonials/PatientTestimonials'
import { WhatToExpect } from '@/components/WhatToExpect/WhatToExpect'
import { WhatSetsMeApart } from '@/components/WhatSetsMeApart/WhatSetsMeApart'

export default async function Services() {
  await sendEvent(EventName.PageViewEvent, { path: '/services' })

  const sections = [
    <HowICanHelp key={'help'} />,
    <PatientTestimonials headerText={'People I\'ve been able to help'} key={'testimonials'} />,
    <WhatToExpect headerText={'What to expect'} key={'expectations'} />,
    <WhatSetsMeApart headerText={'What my patients appreciate'}  key={'apart'} />,
  ]

  return (
    <main>
      <div>
        {sections && sections.map((section, index) => <div className={index % 2 === 0 ? 'bg-transparent' : 'bg-secondary'} key={index}>{section}</div>)}
      </div>
    </main>
  )
}
