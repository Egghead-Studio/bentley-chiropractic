import React from 'react'
import { Card } from '@/components/Card/Card'

export const WhyGonsteadWorks: React.FC = () => {
  return (
    <div className={'w-page py-12 lg:py-24'}>
      <h2 className={'text-primary text-4xl font-heading font-bold text-center mb-8 md:mb-12'}>Why the Gonstead Method works</h2>
      <div className={'grid sm:grid-cols-2 w-full gap-4 lg:gap-x-24 lg:gap-y-12'}>
        <div className={'ml-auto'}>
          <Card
            headerText={'1. Precise'}
            bodyText={'The goal of the Gonstead method is to make a specific adjustment to correct the root cause of your problem - giving the body exactly what it needs without unnecessary extra adjustment.'}
            learnMoreLink={'/gonstead-method'}
          />
        </div>
        <div className={'mr-auto'}>
          <Card
            headerText={'2. Thorough'}
            bodyText={'Dr. Gonstead believed we should "Spend all the time necessary to... find and correct a patient\'s problem. Do not be in a hurry. Check and recheck your x-ray, your palpation, instrumentation.'}
            learnMoreLink={'/gonstead-method'}
          />
        </div>
        <div className={'ml-auto'}>
          <Card
            headerText={'3. Evidence-Based'}
            bodyText={'The Gonstead method reflects more than a century of positive patient outcomes and detailed accounts. Dr. Gonstead was dedicated to improving patients lives - often spending 12+ hours per day in research and practice.'}
            learnMoreLink={'/gonstead-method'}
          />
        </div>
        <div className={'mr-auto'}>
          <Card
            headerText={'4. Individualized'}
            bodyText={'Patients will immediately notice that Gonstead chiropractors tailor care to the patient\'s circumstance. No two people will receive the same adjustment or nutrional advice, but will instead receive personalized advice.'}
            learnMoreLink={'/gonstead-method'}
          />
        </div>
      </div>
    </div>

  )
}
