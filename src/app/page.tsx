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
  title: 'Home | Bentley Chiropractic',
}

export default async function Home() {
  await sendEvent(EventName.PageViewEvent, { path: '/' })

  const sections = [
    <HowICanHelp key={'help'} />,
    <AboutMatt buttonText={'Learn more about my practice'} headerText={'Dr. Matthew Bentley'} key={'about'} />,
    <WhatToExpect headerText={'What to expect'} key={'expectations'} />,
    <PatientTestimonials headerText={'What patients say'} key={'testimonials'} />,
    <WhyGonsteadWorks key={'why-it-works'} />,
  ]

  return (
    <main>
      <div>
        <HeroSection
          buttonText={'Get our new patient special'}
          buttonLink={'/new-patients'}
          headingText={'A new level of care'}
          bodyText={'Bentley Chiropractic gives the body what it needs to function to its fullest potential. We don\'t just mask the problem - we aim find the root cause of your pain and dysfunction so we can provide a natural alternative to health care.'}
          imageSrc={'/hero-image.jpg'}
          imageAltText={'Chiropractor adjusting patient'}
        />
        {sections && sections.map((section, index) => <div className={index % 2 === 0 ? 'bg-transparent' : 'bg-secondary'} key={index}>{section}</div>)}
        <FAQSection headerText={'Frequently asked questions'} key={'faq'} />
      </div>
    </main>
  )
}
