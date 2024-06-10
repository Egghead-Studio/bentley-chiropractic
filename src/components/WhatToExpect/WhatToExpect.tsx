import React from 'react'
import { Card } from '@/components/Card/Card'

interface WhatToExpectProps {
  headerText: string
}
export const WhatToExpect: React.FC<WhatToExpectProps> = ({ headerText }) => {
  return (
    <div className={'bg-transparent w-page py-12 lg:py-24'}>
      <h2 className={'text-primary text-4xl font-heading font-bold text-center mb-8 md:mb-12'}>{headerText}</h2>
      <div className={'flex flex-col xl:flex-row gap-4 xl:gap-8'}>
        <div className={'w-full'}>
          <Card
            headerText={'1. Detailed history'}
            bodyText={'Dr. Bentley will get a comprehensive medical history. The goal is to understand any current or past health concerns along with any major events so that we have a precise view of how your body is functioning.'}
            learnMoreLink={'/new-patient'}
          />
        </div>
        <div className={'w-full'}>
          <Card
            headerText={'2. Examination'}
            bodyText={'Dr. Bentley will utilize the Gonstead system of analysis to assess joint mobility throughout your skeletal system (especially the spine). He will also examine areas of decreased motion and/or irritation to the nervous system.'}
            learnMoreLink={'/new-patient'}
          />
        </div>
        <div className={'w-full'}>
          <Card
            headerText={'3. Adjustment'}
            bodyText={'If a part of your spine has reduced motion or nervous system irritation, Dr. Bentley will perform a precise adjustment targeting the area. The goal is to restore motion to the joint and improve symptoms caused by the lack of movement.'}
            learnMoreLink={'/new-patient'}
          />
        </div>
      </div>
    </div>

  )
}
