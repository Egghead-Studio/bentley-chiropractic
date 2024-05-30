import React from 'react'

interface CardProps {
  headerText?: string
  bodyText?: string
  learnMoreLink?: string
}

export const Card: React.FC<CardProps> = ({ headerText, bodyText, learnMoreLink }) => {
  return (
    <div className={'shadow-md rounded-lg w-full bg-background-light p-10'}>
      <div className={'w-min text-primary text-2xl font-bold font-heading border-b-2 border-secondary-dark text-nowrap my-4'}>
        {headerText}
      </div>
      <p className={'mb-4'}>
        {bodyText}
      </p>
      {learnMoreLink && (
        <a className={'text-primary underline '} href={learnMoreLink}>Learn More</a> )}
    </div>
  )
}
