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
      <div className={'grid md:grid-cols-3 w-full gap-4 xl:gap-16'}>

        <Card
          headerText={'Evidence-based'}
          bodyText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'}
          review={(<div className={'flex'} />)}
        />

        <Card
          headerText={'Learned from the best'}
          bodyText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'}
          review={(<div className={'flex'} />)}
        />

        <Card
          headerText={'Personal care'}
          bodyText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'}
          review={(<div className={'flex'} />)}
        />

      </div>
      <div className="flex justify-center my-10">
        <LinkButton
          href={'/new-patients'}
          eventName={EventName.BookAppointment}
          eventProperties={{ item: 'set-apart-button' }}
        >
          Become a patient
        </LinkButton>
      </div>
    </div>

  )
}
