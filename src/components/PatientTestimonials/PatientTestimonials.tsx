import React from 'react'
import { Card } from '@/components/Card/Card'
import { LinkButton } from '@/components/Button/LinkButton'
import { EventName } from '@/events/types'
import { Star } from 'react-feather'

interface PatientTestimonialsProps {
  headerText: string
}

export const PatientTestimonials: React.FC<PatientTestimonialsProps> = ({ headerText }) => {
  return (
    <div className={'w-page py-12 lg:py-24'}>
      <h2 className={'bg-transparent text-primary text-4xl font-heading font-bold text-center mb-8 md:mb-12'}>{headerText}</h2>
      <div className={'grid md:grid-cols-3 w-full gap-4 xl:gap-16'}>

        <Card
          headerText={'Ashley K.'}
          bodyText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'}
          review={(<div className={'flex'}>
            <Star className={'fill-secondary-dark text-secondary-dark'} />
            <Star className={'fill-secondary-dark text-secondary-dark'} />
            <Star className={'fill-secondary-dark text-secondary-dark'} />
            <Star className={'fill-secondary-dark text-secondary-dark'} />
            <Star className={'fill-secondary-dark text-secondary-dark'} />
          </div>)}
        />

        <Card
          headerText={'Brent D.'}
          bodyText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'}
          review={(<div className={'flex'}>
            <Star className={'fill-secondary-dark text-secondary-dark'} />
            <Star className={'fill-secondary-dark text-secondary-dark'} />
            <Star className={'fill-secondary-dark text-secondary-dark'} />
            <Star className={'fill-secondary-dark text-secondary-dark'} />
            <Star className={'fill-secondary-dark text-secondary-dark'} />
          </div>)}
        />

        <Card
          headerText={'Sanji V.'}
          bodyText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'}
          review={(<div className={'flex'}>
            <Star className={'fill-secondary-dark text-secondary-dark'} />
            <Star className={'fill-secondary-dark text-secondary-dark'} />
            <Star className={'fill-secondary-dark text-secondary-dark'} />
            <Star className={'fill-secondary-dark text-secondary-dark'} />
            <Star className={'fill-secondary-dark text-secondary-dark'} />
          </div>)}
        />

      </div>
      <div className="flex justify-center my-10">
        <LinkButton
          href={'/new-patients'}
          eventName={EventName.BookAppointment}
          eventProperties={{ item: 'patient-testimonials-button' }}
          newTab={false}
        >
          Get our new-patient special
        </LinkButton>
      </div>
    </div>

  )
}
