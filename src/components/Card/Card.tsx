import React, { ReactNode } from 'react'

interface CardProps {
  headerText?: string
  bodyText?: string
  learnMoreLink?: string
  review?: ReactNode
}

export const Card: React.FC<CardProps> = ({ headerText, bodyText, learnMoreLink, review }) => {
  return (
    <div className={'shadow-md rounded-lg w-full bg-background-light p-10 xl:max-w-[25vw]'}>
      <div className={'flex flex-col items-start lg:items-center lg:flex-row justify-between text-left text-primary text-2xl gap-4 font-bold font-heading my-4'}>
        <div className={'border-b-2 border-secondary-dark text-nowrap'}>
          {headerText}
        </div>
        {review}
      </div>
      <p className={'mb-4'}>
        {bodyText}
      </p>
      {learnMoreLink && (
        <a className={'text-primary underline '} href={learnMoreLink}>Learn More</a> )}
    </div>
  )
}
