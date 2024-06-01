import React from 'react'
import { EventName } from '@/events/types'
import { LinkButton } from '@/components/Button/LinkButton'
import heroImage from '@/../public/hero-image.jpg'

export const HeroSection: React.FC = async () => {
  return (
    <div className={'py-6 lg:py-12 xl:py-24 bg-cover'} style={{ backgroundImage: `url(${heroImage.src})` }}>
      <div className="flex flex-col gap-4 mx-auto py-20 w-page">
        <h1 className="text-4xl font-bold text-primary font-heading">A new level of care</h1>
        <p className={'md:w-8/12 lg:w-6/12 mb-4'}>Accusamus alias delectus dolore dolorem, doloribus eligendi et inventore maxime minus molestias, neque optio qui quibusdam quis ratione tempora tempore velit voluptatem?</p>
        <LinkButton
          href={'#'}
          eventName={EventName.BookAppointment}
          eventProperties={{ item: 'hero-section' }}
        >
          Get our new patient special
        </LinkButton>
      </div>
    </div>
  )
}
