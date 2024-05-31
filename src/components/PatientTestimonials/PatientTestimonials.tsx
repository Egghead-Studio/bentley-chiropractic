import React from 'react'
import { Card } from '@/components/Card/Card'
import { LinkButton } from '@/components/Button/LinkButton'
import { EventName } from '@/events/types'
import { Star } from 'react-feather'

export const PatientTestimonials: React.FC = () => {
  return (
    <div className={'w-page my-12 lg:my-24'}>
      <h2 className={'bg-transparent text-primary text-4xl font-heading font-bold text-center mb-8 md:mb-12'}>What patients say</h2>
      <div className={'flex flex-col w-full gap-4 md:flex-row lg:gap-24 xl:gap-24'}>
        <div>
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
        </div>
        <div>
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
        </div>
        <div>
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
      </div>
      <div className="flex justify-center my-10">
        <LinkButton
          href={'/new-patients'}
          eventName={EventName.BookAppointment}
          eventProperties={{ item: 'patient-testimonials' }}
        >
        Get our new-patient special
        </LinkButton>
      </div>
    </div>

  )
}
