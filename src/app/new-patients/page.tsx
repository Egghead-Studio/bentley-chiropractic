import React from 'react'
import { EventName } from '@/events/types'
import { sendEvent } from '@/events/events'
import { WhatSetsMeApart } from '@/components/WhatSetsMeApart/WhatSetsMeApart'
import { PatientTestimonials } from '@/components/PatientTestimonials/PatientTestimonials'
import { FAQSection } from '@/components/FAQ/FAQ'
import { WhatToExpect } from '@/components/WhatToExpect/WhatToExpect'
import { HeroSection, HeroSectionVariant } from '@/components/HeroSection/HeroSection'
import { ExternalURL, URLMap } from '@/urls'

export const metadata = {
  title: 'New Patients | Bentley Chiropractic',
}

export default async function NewPatientsPage() {
  await sendEvent(EventName.PageViewEvent, { path: '/new-patients' })

  const sections = [
    <PatientTestimonials headerText={'See what current patients say'} key={'testimonials'} />,
    <WhatToExpect headerText={'What to expect during your first visit'} key={'expectations'} />,
    <WhatSetsMeApart headerText={'What my patients appreciate'} key={'apart'} />,
  ]

  return (
    <main>
      <div>
        <HeroSection
          variant={HeroSectionVariant.ImageRight}
          buttonText={'Schedule now'}
          buttonLink={URLMap[ExternalURL.Booking]}
          headingText={'Book online to get\n20% off your first visit'}
          bodyText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec elit ultricies ultricies.'}
          imageSrc={'/hero-image.jpg'}
          imageAltText={'Chiropractor adjusting patient'}
        />
        {sections && sections.map((section, index) => <div className={index % 2 === 1 ? 'bg-transparent' : 'bg-secondary'} key={index}>{section}</div>)}
        <FAQSection headerText={'Common questions for new patients'} key={'faq'} />
      </div>
    </main>
  )
}
