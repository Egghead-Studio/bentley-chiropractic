import React from 'react'
import { EventName } from '@/events/types'
import { sendEvent } from '@/events/events'
import { WhatSetsMeApart } from '@/components/WhatSetsMeApart/WhatSetsMeApart'
import { PatientTestimonials } from '@/components/PatientTestimonials/PatientTestimonials'
import { FAQSection } from '@/components/FAQ/FAQ'
import { WhatToExpect } from '@/components/WhatToExpect/WhatToExpect'

export default async function NewPatients() {
  await sendEvent(EventName.PageViewEvent, { path: '/new-patients' })

  const sections = [
    <PatientTestimonials headerText={'See what current patients say'} key={'testimonials'} />,
    <WhatToExpect headerText={'What to expect during your first visit'} key={'expectations'} />,
    <WhatSetsMeApart headerText={'What my patients appreciate'} key={'apart'} />,
  ]

  return (
    <main>
      <div>
        {sections && sections.map((section, index) => <div className={index % 2 === 0 ? 'bg-transparent' : 'bg-secondary'} key={index}>{section}</div>)}
        <FAQSection headerText={'Common questions for new patients'} key={'faq'} />
      </div>
    </main>
  )
}
