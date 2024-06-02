'use client'
import React from 'react'
import { Menu } from 'react-feather'
import { LinkButton } from '@/components/Button/LinkButton'
import { EventName } from '@/events/types'
import { ExternalURL, URLMap } from '@/urls'
import Image from 'next/image'


interface NavProps {

}

const NavLinks: React.FC = () => {
  const navLinks = [
    {
      name: 'About',
      url: '/about'
    },
    {
      name: 'Services',
      url: '/services'
    },
    // Won't have this page until we have a significant number of reviews
    // {
    //   name: 'Testimonials',
    //   url: '/testimonials'
    // }
  ]

  return (
    navLinks.map((navLink) => (
      <li key={navLink.name}>
        <a href={navLink.url}>{navLink.name}</a>
      </li>
    ))
  )
}


export const Nav: React.FC<NavProps> = () => {
  return (
    <nav className={'w-page py-2 lg:py-4'}>
      <div className="drawer drawer-end bg-background">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex items-center py-2">
          <a className={'flex items-center gap-2'} href={'/'}>
            <div className={'w-6 sm:w-max'}>
              <Image src={'/bentley-logo-no-bg.png'} alt={'Bentley Chiropractic Logo'} width={32} height={32} />
            </div>
            <div className={'text-xl lg:text-3xl text-primary font-heading font-bold lg:mb-1'}>Bentley Chiropractic</div>
          </a>
          <div className={'hidden lg:flex items-center gap-4 ml-auto list-none font-medium'}>
            <NavLinks />
            <li>
              <a href={'https://maps.app.goo.gl/iKxuYJpq1yQLiKXn7'} target={'_blank'}>Location</a>
            </li>
            <li>
              <LinkButton
                stretch
                href={URLMap[ExternalURL.Booking]}
                eventName={EventName.BookAppointment}
                eventProperties={{ item: 'nav-bar' }}
              >
                Book Now
              </LinkButton>
            </li>
          </div>
          <label htmlFor="my-drawer" className="btn btn-ghost drawer-button ml-auto lg:hidden"><Menu/></label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay" />
          <ul className="menu p-4 w-80 min-h-full bg-background text-blackbeard text-lg font-semibold">
            {/* Sidebar content here */}
            <NavLinks />
            <li>
              <a href={'https://maps.app.goo.gl/iKxuYJpq1yQLiKXn7'} target={'_blank'}>Location</a>
            </li>
            <li className={'pl-4 pr-8 mt-12'}>
              <LinkButton
                stretch
                href={URLMap[ExternalURL.Booking]}
                eventName={EventName.BookAppointment}
                eventProperties={{ item: 'nav-bar' }}
              >
                Book Now
              </LinkButton>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
