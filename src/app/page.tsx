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
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home | Bentley Chiropractic',
  description: 'Bentley Chiropractic gives the body what it needs to function to its fullest potential. We don\'t just mask the problem - we aim find the root cause of your pain and dysfunction so we can provide a natural alternative to health care.',
  keywords: ['chiropractor', 'Dr. Matthew Bentley', 'health care', 'natural health', 'increased mobility', 'headaches', 'injury recovery', 'gonstead chiropractor', 'chiropractors in stl', 'saint louis', 'st louis'],
  icons: {
    icon: '/bentley-logo-no-bg.png',
    shortcut: '/bentley-logo-no-bg.png',
    apple: '/bentley-logo-no-bg.png',
    other: {
      rel: '/bentley-logo-no-bg.png',
      url: '/bentley-logo-no-bg.png',
    }
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bentley Chiropractic | Book online for 20% off your first visit',
    description: 'Bentley Chiropractic gives the body what it needs to function to its fullest potential. We don\'t just mask the problem - we aim find the root cause of your pain and dysfunction so we can provide a natural alternative to health care.',
    images: 'https://www.bentleychiropracticstl.com/preview-screenshot.png',
  },
  openGraph: {
    title: 'Bentley Chiropractic | Book online for 20% off your first visit',
    siteName: 'Bentley Chiropractic',
    url: 'https://bentleychiropracticstl.com',
    locale: 'en_US',
    type: 'website',
    images: 'https://www.bentleychiropracticstl.com/preview-screenshot.png',
  }
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
          bodyText={'Bentley Chiropractic gives the body what it needs to function to its fullest potential. We don\'t just mask the problem - we aim to find the root cause of your pain and dysfunction so we can provide a natural alternative to health care.'}
          imageSrc={'/watercolor-removebg-preview.jpg'}
          imageAltText={'Chiropractor adjusting patient'}
        />
        {sections && sections.map((section, index) => <div className={index % 2 === 0 ? 'bg-transparent' : 'bg-secondary'} key={index}>{section}</div>)}
        <FAQSection headerText={'Frequently asked questions'} key={'faq'} />
      </div>
    </main>
  )
}
