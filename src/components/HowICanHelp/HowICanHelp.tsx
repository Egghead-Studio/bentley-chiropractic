import React from 'react'
import { Card } from '@/components/Card/Card'

export const HowICanHelp: React.FC = () => {
  return (
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
          headerText={'Improve function'}
          bodyText={'Chiropractic care can directly impact organ function by making the nervous system more efficient.'}
          // learnMoreLink={'/services/improve-function'}
        />
        <Card
          headerText={'Find the root cause'}
          bodyText={'We don\'t just address symptoms - we aim to find the reason your body is out of balance and to restore that balance.'}
          // learnMoreLink={'/services/address-root-cause'}
        />
        <Card
          headerText={'Common symptoms'}
          bodyText={'Plenty of symptoms may seem "normal", but they\'re actually just common. We help restore your body so it functions at its best.'}
          // learnMoreLink={'/services/common-symptoms'}
        />
      </div>
    </div>

  )
}
