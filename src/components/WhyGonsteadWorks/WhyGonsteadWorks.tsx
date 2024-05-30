import React from 'react'
import { Card } from '@/components/Card/Card'

export const WhyGonsteadWorks: React.FC = () => {
  return (
    <div className={'w-page my-12 lg:my-24'}>
      <h2 className={'text-primary text-4xl font-heading font-bold text-center mb-8 md:mb-12'}>Why the Gonstead Method Works</h2>
      <div className={'flex flex-col w-full gap-4 md:flex-row lg:gap-24 xl:gap-24'}>
        <div>
          <Card headerText={'1. Precise'}  bodyText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'}/>
        </div>
        <div>
          <Card headerText={'2. Thorough'}  bodyText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'}/>
        </div>
      </div>
      <div className={'flex flex-col w-full gap-4 mt-8 md:flex-row lg:gap-24 xl:gap-24'}>
        <div>
          <Card headerText={'3. Evidence-Based'}  bodyText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'}/>
        </div>
        <div>
          <Card headerText={'4. Natural'}  bodyText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'}/>
        </div>
      </div>
    </div>

  )
}
