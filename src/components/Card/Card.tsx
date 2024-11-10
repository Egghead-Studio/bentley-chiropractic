import React, { ReactNode } from 'react'
import Image from 'next/image'
import clsx from 'clsx'

export interface CardProps {
  headerText?: string
  bodyText?: string
  learnMoreLink?: string
  review?: ReactNode
  imageURL?: string,
  imageAltText?: string
}

export const Card: React.FC<CardProps> = ({ headerText, bodyText, learnMoreLink, review, imageURL, imageAltText = '' }) => {
  const formattedBodyText = bodyText?.split('\n').map((text, index) => (
    <span key={index}>
      {text}
      <br/>
    </span>
  ))
  return (
    <div className={'shadow-md rounded-lg w-full min-w-full bg-background-light overflow-hidden flex flex-col md:flex-row xl:flex-col xl:min-w-[33%] flex-grow'}>
      {imageURL && (
        <div className={'aspect-video overflow-hidden min-h-fit md:w-6/12 lg:w-full'}>
          <div className={'md:w-[500px] lg:w-full'}>
            <Image className={'filter saturate-[1.2] brightness-105'} src={imageURL} alt={imageAltText} width={750} height={300} />
          </div>
        </div>
      )}
      <div className={clsx('flex flex-col p-10 pt-4 h-full', imageURL && 'md:w-6/12 lg:w-full')}>
        <div className={'flex flex-col items-start lg:items-center lg:flex-row justify-between text-left text-primary text-2xl gap-4 font-bold font-heading my-4'}>
          <div className={'border-b-2 border-secondary-dark text-nowrap'}>
            {headerText}
          </div>
          {review}
        </div>
        <p className={'mb-4'}>
          {formattedBodyText}
        </p>
        {learnMoreLink && (
          <a className={'text-primary underline mt-auto'} href={learnMoreLink}>Learn More</a>
        )}
      </div>
    </div>
  )
}
