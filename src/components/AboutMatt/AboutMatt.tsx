import React from 'react'
import { LinkButton } from '@/components/Button/LinkButton'
import { EventName } from '@/events/types'
import Image from 'next/image'

interface AboutMattProps {
  headerText: string
}

export const AboutMatt: React.FC<AboutMattProps> = ({ headerText }) => {
  return (
    <div className={'flex w-page gap-12 items-center py-12 lg:py-24'}>
      <div className={'flex flex-col gap-4 lg:w-7/12'}>
        <h2 className={'text-center lg:text-left mb-4 md:mb-8 text-primary font-bold font-heading text-4xl'}>{headerText}</h2>
        <div className={'flex w-full mb-4 md:justify-center m lg:hidden'}>
          <Image className={'shadow-xl rounded-lg'} src={'/doctor-small.jpeg'} alt={'Dr. Matthew Bentley'} width={500} height={500} />
        </div>
        <p>Lorem ipsum dolor sit amet consectetur. Viverra vel est condimentum eu neque vestibulum ac eu in. Magna nibh eu cras nunc malesuada. </p>
        <p>Nunc cras at arcu erat feugiat tellus eleifend venenatis suspendisse. Pretium ornare pharetra ornare adipiscing consectetur neque nunc. </p>
        <p>Egestas pretium quis eu nibh sed semper. Viverra lectus iaculis massa scelerisque tortor ipsum orci in tincidunt. Aliquam odio varius cursus faucibus egestas auctor. Laoreet at arcu quis vitae tempus libero placerat non. Laoreet consequat amet metus quam egestas.</p>
        <p>Amet in ornare feugiat dignissim nec leo gravida. Facilisi nunc diam auctor elit risus mattis proin in orci. Id diam suspendisse ultrices risus donec dictum vehicula. Id pharetra tortor tincidunt at. Morbi ipsum vitae sit ornare vitae ut urna turpis lectus.</p>
        <p className={'mb-4 md:mb-8'}>Amet in ornare feugiat dignissim nec leo gravida. Facilisi nunc diam auctor elit risus mattis proin in orci. Id diam suspendisse ultrices risus donec dictum vehicula. Id pharetra tortor tincidunt at. Morbi ipsum vitae sit ornare vitae ut urna turpis lectus.</p>
        <div className={'flex justify-center'}>
          <LinkButton
            href={'/why-gonstead-works'}
            eventName={EventName.ClickEvent}
            eventProperties={{ item: 'about-matt-button' }}
          >
        Learn more about my practice
          </LinkButton>
        </div>
      </div>
      <div className={'w-5/12 hidden lg:flex'}>
        <Image className={'shadow-xl rounded-lg'} src={'/doctor.jpg'} alt={'Dr. Matthew Bentley'} width={500} height={500} />
      </div>
    </div>
  )
}
