import React from 'react'
import { Card } from '@/components/Card/Card'
import { FadeIn } from '@/components/FadeIn/FadeIn'

export const HowICanHelp: React.FC = () => {
  return (
    <FadeIn>
      <div className={'w-page py-12 lg:py-24'}>
        <h2 className={'text-primary text-4xl font-heading font-bold text-center mb-8 md:mb-12'}>How I can help</h2>
        <div className={'grid sm:grid-cols-2 lg:grid-cols-3 w-full gap-4 lg:gap-12'}>
          <Card
            headerText={'Mobility'}
            bodyText={'Restore mobility to stiff joints caused by prolonged sitting, improper movement, repetitive motions, injury, and more.'}
          // learnMoreLink={'/services/restore-mobility'}
          />
          <Card
            headerText={'Reduce pain'}
            bodyText={'Pain is your nervous system\'s signal you\'re not at 100%. We can help find the source and address the problem directly.'}
          // learnMoreLink={'/services/reduce-pain'}
          />
          <Card
            headerText={'Immune system'}
            bodyText={'Your immune system is only as strong as your nervous system. We help restore both so that your body is equipped to protect itself.'}
          // learnMoreLink={'/services/enhance-immune-system'}
          />
          <Card
            headerText={'Smooth digestion'}
            bodyText={'All health and disease start in the gut! We can aid your body\'s ability to absorb nutrients - helping with IBS, acid reflux, nausea, indigestion, and more.'}
          // learnMoreLink={'/services/digestion'}
          />
          <Card
            headerText={'Headache relief'}
            bodyText={'There are many types of headaches and they\'re all treated differently. We can help you find relief from migraines, digestive headaches, and hormonal headaches.'}
          // learnMoreLink={'/services/headache-relief'}
          />
          <Card
            headerText={'Nerve function'}
            bodyText={'Many complex neurological conditions can be improved by resolving nerve irritation, including Bell\'s Palsy, trigeminal neuralgia, epilepsy, and diabetic neuropathy.'}
          // learnMoreLink={'/services/neurological-function'}
          />
        </div>
      </div>
    </FadeIn>
  )
}
