import React from 'react'
import { Card } from '@/components/Card/Card'
import { LinkButton } from '@/components/Button/LinkButton'
import { EventName } from '@/events/types'

interface WhatSetsMeApartProps {
  headerText: string
}
export const WhatSetsMeApart: React.FC<WhatSetsMeApartProps> = ({ headerText }) => {
  return (
    <div className={'w-page py-12 lg:py-24'}>
      <h2 className={'bg-transparent text-primary text-4xl font-heading font-bold text-center mb-8 md:mb-12'}>{headerText}</h2>
      <div className={'grid lg:grid-cols-3 w-full gap-4 xl:gap-8'}>
        <Card
          headerText={'Gonstead specialist'}
          bodyText={'I am one of only two doctors in St. Louis County who practices the Gonstead method exclusively.'}
          review={(<div className={'flex'} />)}
        />
        <Card
          headerText={'Learned from the best'}
          bodyText={'I have worked closely under Dr. Cranwell, whose 48-year career includes an internship with Dr. Gonstead himself.'}
          review={(<div className={'flex'} />)}
        />
        <Card
          headerText={'Personal care'}
          bodyText={'If you finally want to see a doctor who cares about you and wants to help you thrive, you\'ve found the right place!'}
          review={(<div className={'flex'} />)}
        />
      </div>
      <div className="flex justify-center my-10">
        <LinkButton
          href={'/new-patients'}
          eventName={EventName.BookAppointment}
          eventProperties={{ item: 'set-apart-button' }}
          newTab={false}
        >
          Become a patient
        </LinkButton>
      </div>
    </div>

  )
}
