import React from 'react'
import { Card } from '@/components/Card/Card'

export const WhyGonsteadWorks: React.FC = () => {
  return (
    <div className={'w-page py-12 lg:py-24'}>
      <h2 className={'text-primary text-4xl font-heading font-bold text-center mb-8 md:mb-12'}>Why the Gonstead Method works</h2>
      <div className={'grid sm:grid-cols-2 w-full gap-4 lg:gap-x-24 lg:gap-y-12'}>
        <div className={'ml-auto'}>
          <Card headerText={'1. Precise'}  bodyText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'}/>
        </div>
        <div className={'mr-auto'}>
          <Card headerText={'2. Thorough'}  bodyText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'}/>
        </div>
        <div className={'ml-auto'}>
          <Card headerText={'3. Evidence-Based'}  bodyText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'}/>
        </div>
        <div className={'mr-auto'}>
          <Card headerText={'4. Natural'}  bodyText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'}/>
        </div>
      </div>
    </div>

  )
}
