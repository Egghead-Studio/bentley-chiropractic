import React from 'react'
import { EventName } from '@/events/types'
import { HeroSection } from '@/components/HeroSection/HeroSection'
import { FAQSection } from '@/components/FAQ/FAQ'
import { WhatToExpect } from '@/components/WhatToExpect/WhatToExpect'
import { HowICanHelp } from '@/components/HowICanHelp/HowICanHelp'
import { PatientTestimonials } from '@/components/PatientTestimonials/PatientTestimonials'
import { WhyGonsteadWorks } from '@/components/WhyGonsteadWorks/WhyGonsteadWorks'
import { AboutMatt } from '@/components/AboutMatt/AboutMatt'
import { sendEvent } from '@/events/events'

export const metadata = {
  title: 'Bentley Chiropractic | Home',
}

export default async function Home() {
  await sendEvent(EventName.PageViewEvent, { path: '/' })

  const sections = [
    <HowICanHelp key={'help'} />,
    <AboutMatt buttonText={'Learn more about my practice'} headerText={'Dr. Matthew Bentley'} key={'about'} />,
    <WhatToExpect key={'expectations'} />,
    <PatientTestimonials headerText={'What patients say'} key={'testimonials'} />,
    <WhyGonsteadWorks key={'why-it-works'} />,

  ]

  return (
    <main>
      <div>
        <HeroSection/>
        {sections && sections.map((section, index) => <div className={index % 2 === 0 ? 'bg-transparent' : 'bg-secondary'} key={index}>{section}</div>)}
        <FAQSection key={'faq'} />
      </div>
    </main>
  )
}
