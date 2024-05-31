import React from 'react'
import { Card } from '@/components/Card/Card'

export const HowICanHelp: React.FC = () => {
  return (
    <div className={'w-page py-12 lg:py-24'}>
      <h2 className={'text-primary text-4xl font-heading font-bold text-center mb-8 md:mb-12'}>How I can help</h2>
      <div className={'grid sm:grid-cols-2 lg:grid-cols-3 w-full gap-4 lg:gap-12'}>
        <Card headerText={'Headaches'}  bodyText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'} learnMoreLink={'/services/headaches'}/>
        <Card headerText={'Back Pain'}  bodyText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'} learnMoreLink={'/services/back-pain'}/>
        <Card headerText={'Mood'}  bodyText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'} learnMoreLink={'/services/mood'}/>
        <Card headerText={'IBS'}  bodyText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'} learnMoreLink={'/services/irritable-bowel-syndrome'}/>
        <Card headerText={'Injury'}  bodyText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'} learnMoreLink={'/services/injury'}/>
        <Card headerText={'Arthritis'}  bodyText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'} learnMoreLink={'/services/arthritis'}/>
      </div>
    </div>

  )
}
