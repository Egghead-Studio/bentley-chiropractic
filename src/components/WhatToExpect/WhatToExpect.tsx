import React from 'react'
import { Card, CardProps } from '@/components/Card/Card'
import { FadeIn } from '@/components/FadeIn/FadeIn'

interface WhatToExpectProps {
  headerText: string
}

export const WhatToExpect: React.FC<WhatToExpectProps> = ({ headerText }) => {
  const cards: CardProps[] = [
    {
      headerText: '1. Detailed history',
      bodyText: 'We\'ll get a comprehensive medical history to understand any current or past health concerns along with any major events. This will give us a precise view of how your body is functioning.',
      imageURL: '/finding-vertebrae-horizontal.jpeg',
      learnMoreLink: '/new-patients'
    },
    {
      headerText: '2. Examination',
      bodyText: 'We\'ll assess joint mobility throughout your skeletal system (especially the spine) using the Gonstead system. We\'ll also examine areas of decreased motion and/or irritation to the nervous system.',
      imageURL: '/measurement.jpeg',
      learnMoreLink: '/new-patients',
    },
    {
      headerText: '3. Adjustment',
      bodyText: 'If a part of your spine has reduced motion or nervous system irritation, we\'ll perform a precise adjustment targeting the area to restore motion to the joint and improve symptoms caused by the lack of movement.',
      imageURL: '/adjustment-top.jpeg',
      learnMoreLink: '/new-patients',
    },

  ]

  return (
    <FadeIn>
      <div className={'bg-transparent w-page py-12 lg:py-24'}>
        <h2 className={'text-primary text-4xl font-heading font-bold text-center mb-8 md:mb-12'}>{headerText}</h2>
        <div className={'flex flex-col xl:flex-row gap-4 xl:gap-8'}>
          {cards.map((card: CardProps) => (
            <Card
              key={card.headerText}
              headerText={card.headerText}
              bodyText={card.bodyText}
              learnMoreLink={card.learnMoreLink}
              imageURL={card.imageURL}
            />
          ))}
        </div>
      </div>
    </FadeIn>
  )
}
