import React from 'react'
import { EventName } from '@/events/types'
import { sendEvent } from '@/events/events'
import { PatientTestimonials } from '@/components/PatientTestimonials/PatientTestimonials'
import { MainSection } from '@/components/MainSection/MainSection'
import { sectionTextMap } from '@/app/services/[serviceName]/serviceText'

export const metadata = {
  title: 'Services | Bentley Chiropractic',
}

interface PageParams {
  serviceName: string
}

export default async function ServicePage({ params }: { params: PageParams }) {
  const { serviceName } = params
  await sendEvent(EventName.PageViewEvent, { path: `/services/${serviceName}` })


  const sections = [

    <MainSection key={'main-section'} imagePath={'/headache.jpg'} items={sectionTextMap[serviceName]}/>,
    <PatientTestimonials headerText={'People I\'ve been able to help'}  key={'testimonials'} />
  ]

  return (
    <main>
      <div>
        {sections && sections.map((section, index) => <div className={index % 2 === 0 ? 'bg-transparent' : 'bg-secondary'} key={index}>{section}</div>)}
      </div>
    </main>
  )
}
