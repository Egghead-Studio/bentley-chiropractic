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
      <div className={'grid md:grid-cols-1 w-full gap-8 xl:gap-16'}>

        <Card
          headerText={'Kate H.'}
          bodyText={'Dr. Matt is simply the best! I’d never been to a chiropractor before, so I was a little nervous and unsure of what to expect. Dr. Matt listened carefully to my concerns and did a great job of explaining what he was doing and why at every step along the way so I understood what was happening. After one session, I felt immediate pain relief from back issues that had been bothering me so much I was having a hard time sitting still. After several sessions, I\'m getting continuous improvement on a neck injury that i\'ve had for years and years. I very highly recommend Dr. Matt, both for his super friendly and helpful manner, and for the results!'}
          review={(<div className={'flex'}>
            <Star className={'fill-secondary-dark text-secondary-dark'} />
            <Star className={'fill-secondary-dark text-secondary-dark'} />
            <Star className={'fill-secondary-dark text-secondary-dark'} />
            <Star className={'fill-secondary-dark text-secondary-dark'} />
            <Star className={'fill-secondary-dark text-secondary-dark'} />
          </div>)}
        />

        <Card
          headerText={'Sanj B.'}
          bodyText={'I have been seeing Dr. Bentley for a little over 6 months now and I have nothing but good things to say about his practice. I am a martial artist of 17 years, and I plan to continue practicing martial arts for the rest of my life. My goal is to keep my body healthy, so I can do my sport for as long as possible. Chiropractic care with Dr. Bentley has been hugely beneficial to my health in the last 6 months.\n\nA main priority for me is to make sure I understand the treatment that my body is going through. Dr. Bentley is really great at explaining his technique, thought process, and the science behind it all. I feel that my body has responded really well over the last 6 months. Improvements that I have seen are decreased pain, increased mobility, and increased mind muscle connection. I feel that my body is less prone to injury lately, but I am also able to recover quicker if I do get a minor injury. Highly recommend adding Dr. Bentley to your health regimen!'}
          review={(<div className={'flex'}>
            <Star className={'fill-secondary-dark text-secondary-dark'} />
            <Star className={'fill-secondary-dark text-secondary-dark'} />
            <Star className={'fill-secondary-dark text-secondary-dark'} />
            <Star className={'fill-secondary-dark text-secondary-dark'} />
            <Star className={'fill-secondary-dark text-secondary-dark'} />
          </div>)}
        />

        {/*<Card*/}
        {/*  headerText={'Ashley K.'}*/}
        {/*  bodyText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'}*/}
        {/*  review={(<div className={'flex'}>*/}
        {/*    <Star className={'fill-secondary-dark text-secondary-dark'} />*/}
        {/*    <Star className={'fill-secondary-dark text-secondary-dark'} />*/}
        {/*    <Star className={'fill-secondary-dark text-secondary-dark'} />*/}
        {/*    <Star className={'fill-secondary-dark text-secondary-dark'} />*/}
        {/*    <Star className={'fill-secondary-dark text-secondary-dark'} />*/}
        {/*  </div>)}*/}
        {/*/>*/}

      </div>
      <div className="flex justify-center my-16">
        <LinkButton
          href={'/new-patients'}
          eventName={EventName.NewPatientsPageView}
          eventProperties={{ item: 'patient-testimonials-button' }}
        >
          Get our new-patient special
        </LinkButton>
      </div>
    </div>

  )
}
