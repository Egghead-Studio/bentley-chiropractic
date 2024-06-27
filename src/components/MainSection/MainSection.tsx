import React from 'react'
import Image from 'next/image'
import { SectionText } from '@/app/services/[serviceName]/serviceText'
import { TextBlock } from '@/components/TextBlock/TextBlock'
import { LinkButton } from '@/components/Button/LinkButton'
import { EventName } from '@/events/types'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

interface MainSectionProps {
  headerText?: string
  buttonText?: string
  items?: SectionText[]
  imagePath: string | StaticImport
}

export const MainSection: React.FC<MainSectionProps> = ({ imagePath, items }) => {

  return (
    <div className={'flex w-page gap-12 items-center py-12 lg:py-24'}>
      <div className={'flex flex-col gap-4'}>
        <Image className={'shadow-xl rounded-lg w-full mb-4 md:mb-8'} src={imagePath} alt={'Dr. Matthew Bentley'} width={200} height={200} />
        {items && items.map((item, index) => (
          <TextBlock type={item.type} key={'item'+index}>
            {item.text}
          </TextBlock>
        ))}
        <LinkButton
          href={'/new-patients'}
          eventName={EventName.NewPatientsPageView}
          eventProperties={{ item: 'long-form-text' }}
        >
          Get Relief Now
        </LinkButton>
      </div>
    </div>
  )
}
