import React from 'react'
import { Card } from '@/components/Card/Card'

export const WhatToExpect: React.FC = () => {
  return (
    <div className={'bg-transparent w-page py-12 lg:py-24'}>
      <h2 className={'text-primary text-4xl font-heading font-bold text-center mb-8 md:mb-12'}>What to expect</h2>
      <div className={'grid sm:grid-cols-2 gap-4 lg:gap-24'}>
        <div className={'ml-auto'}>
          <Card headerText={'1. Examine'}  bodyText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'} learnMoreLink={'/new-patient'}/>
        </div>
        <div className={'mr-auto'}>
          <Card headerText={'2. Adjust'} bodyText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'} learnMoreLink={'/new-patient'}/>
        </div>
      </div>
    </div>

  )
}
