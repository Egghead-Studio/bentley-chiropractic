import React from 'react'
import { LinkButton } from '@/components/Button/LinkButton'
import { EventName } from '@/events/types'
import Image from 'next/image'

interface AboutMattProps {
  headerText: string
  buttonText?: string
}

export const AboutMatt: React.FC<AboutMattProps> = ({ headerText, buttonText }) => {
  return (
    <div className={'flex w-page gap-12 items-center py-12 lg:py-24'}>
      <div className={'flex flex-col gap-4 lg:w-7/12'}>
        <h2 className={'text-center lg:text-left mb-4 md:mb-8 text-primary font-bold font-heading text-4xl'}>{headerText}</h2>
        <div className={'flex w-full mb-4 justify-center lg:hidden'}>
          <div className={'aspect-square overflow-hidden rounded-lg shadow-xl'}>
            <Image className={'filter saturate-[1.2] brightness-105'} src={'/portrait.jpeg'} alt={'Dr. Matthew Bentley'} width={500} height={500} />
          </div>
        </div>
        <p>I was born and raised in Grapevine, TX, which is a suburb in the Dallas-Ft. Worth metropolitan area.</p>
        <p>I became the first person in my family to graduate from college in 2018 when I earned my a bachelor&apos;s degree in Exercise Science from Harding University in Searcy, AR. Afterward, I followed my wife, Liz, to Syracuse, NY so that she could pursue a master&apos;s degree.</p>
        <p>During that time, I decided on a career in chiropractic care after a chiropractor helped me find relief for the lower-back pain that had affected me for nearly a decade. Soon after that, we moved to St. Louis, where I completed my Doctor of Chiropractic at Logan University in 2023.</p>
        <p>While at Logan University, I specialized in the Gonstead Method, which I learned through classes and an internship with Dr. Cranwell - an expert in the field who learned the method directly from Dr. Gonstead himself.</p>
        <p className={'mb-4 md:mb-8'}>I now live in Alton, IL, with my wife, Liz, and our 65 lb. pit bull, Petunia. In my free time, I enjoy watching television, doing yard work, renovating our 124-year-old home, going to the gym, and spending as much time as possible outside.</p>
        {buttonText && (
          <div className={'flex justify-center lg:justify-start'}>
            <LinkButton
              href={'/about'}
              eventName={EventName.ClickEvent}
              eventProperties={{ item: 'about-matt-button' }}
            >
              Learn more about my practice
            </LinkButton>
          </div> )}
      </div>
      <div className={'w-5/12 hidden lg:flex'}>
        <Image className={'shadow-xl rounded-lg filter saturate-[1.2] brightness-105'} src={'/portrait.jpeg'} alt={'Dr. Matthew Bentley'} width={500} height={500} />
      </div>
    </div>
  )
}
