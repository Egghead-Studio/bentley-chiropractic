import React from 'react'
import { EventName } from '@/events/types'
import { LinkButton } from '@/components/Button/LinkButton'
import Image from 'next/image'
import clsx from 'clsx'

export enum HeroSectionVariant {
  // eslint-disable-next-line no-unused-vars
  ImageBackground = 'image-background',
  // eslint-disable-next-line no-unused-vars
  ImageRight = 'image-right',
  // eslint-disable-next-line no-unused-vars
  ImageLeft = 'image-left',
}

interface HeroSectionProps {
  variant?: HeroSectionVariant
  buttonText: string
  buttonLink: string
  headingText: string
  bodyText: string
  imageSrc: string
  imageAltText: string
}

export const HeroSection: React.FC<HeroSectionProps> = async ({
  headingText,
  bodyText,
  buttonText,
  buttonLink,
  imageSrc,
  imageAltText,
  variant = HeroSectionVariant.ImageBackground
}) => {
  const formattedHeadingText = headingText.split('\n').map((text, index) => (
    <span key={index}>
      {text}
      <br/>
    </span>
  ))

  return (
    <div
      className={
        clsx(
          'pt-4 pb-24 lg:py-12 xl:py-24 bg-cover bg-center xl:bg-left',
          {
            'w-page': variant !== HeroSectionVariant.ImageBackground,
            'flex': variant !== HeroSectionVariant.ImageBackground,
            'bg-[url(/watercolor-removebg-preview-blue-sm.jpg)] md:bg-[url(/watercolor-removebg-preview-blue-md.jpg)] lg:bg-[url(/watercolor-removebg-preview-blue.jpg)]': variant === HeroSectionVariant.ImageBackground,
          }
        )
      }
    >
      <div className="flex flex-col gap-4 mx-auto py-20 w-page">
        <h1 className="text-4xl font-bold text-primary font-heading">{formattedHeadingText}</h1>
        <p className={
          clsx(
            'md:w-8/12 lg:w-6/12 mb-4',
            { 'md:w-full lg:w-full': variant !== HeroSectionVariant.ImageBackground }
          )}
        >{bodyText}</p>
        <LinkButton
          href={buttonLink}
          eventName={EventName.BookAppointment}
          eventProperties={{ item: 'hero-section' }}
        >
          {buttonText}
        </LinkButton>
      </div>
      <div className={
        clsx(
          'lg:w-6/12 aspect-video flex-shrink-0 rounded-lg overflow-hidden shadow-lg',
          {
            'hidden': variant === HeroSectionVariant.ImageBackground,
            'hidden lg:flex': variant !== HeroSectionVariant.ImageBackground,
            'flex': variant !== HeroSectionVariant.ImageBackground
          }
        )
      }
      >
        <Image src={imageSrc} alt={imageAltText} width={'1000'} height={'300'}/>
      </div>
    </div>
  )
}
