import React from 'react'
import { Card } from '@/components/Card/Card'

export const HowICanHelp: React.FC = () => {
  return (
    <div className={'bg-transparent w-page my-12 lg:my-24'}>
      <h2 className={'text-primary text-4xl font-heading font-bold text-center mb-8 md:mb-12'}>How I Can Help</h2>
      <div className={'flex flex-col w-full gap-4 md:flex-row lg:gap-24 xl:gap-24'}>
        <div>
          <Card headerText={'Headaches'}  bodyText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'} learnMoreLink={'/new-patient'}/>
        </div>
        <div>
          <Card headerText={'Back Pain'}  bodyText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'} learnMoreLink={'/new-patient'}/>
        </div>
        <div>
          <Card headerText={'Mood'}  bodyText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'} learnMoreLink={'/new-patient'}/>
        </div>
      </div>
      <div className={'flex flex-col w-full gap-4 mt-8 md:flex-row lg:gap-24 xl:gap-24'}>
        <div>
          <Card headerText={'IBS'}  bodyText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'} learnMoreLink={'/new-patient'}/>
        </div>
        <div>
          <Card headerText={'Injury'}  bodyText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'} learnMoreLink={'/new-patient'}/>
        </div>
        <div>
          <Card headerText={'Arthritis'}  bodyText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'} learnMoreLink={'/new-patient'}/>
        </div>
      </div>
    </div>

  )
}
