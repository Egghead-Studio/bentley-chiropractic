'use client'
import React, { useContext, useEffect } from 'react'
import { Menu } from 'react-feather'
import { AnalyticsContext } from '@/events/AnalyticsProvider'
import { EventName } from '@/events/types'
import { sendEventFromClient } from '@/events/events'


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
  const { getEventProperties } = useContext(AnalyticsContext)

  useEffect(() => {
    const eventProps = getEventProperties()
    void sendEventFromClient({ name: EventName.ViewEvent, properties: { ...eventProps, item: 'nav-bar' } })
  }, [])

  return (
    <nav className={'w-page py-2 lg:py-4'}>
      <div className="drawer drawer-end bg-background">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex items-center py-2 px-4">
          <a href={'/'}>
            <div className={'text-2xl lg:text-3xl font-heading font-bold'}>Bentley Chiropractic</div>
          </a>
          <div className={'hidden lg:flex gap-4 ml-auto list-none'}>
            <NavLinks />
            <li>
              <a href={'https://maps.app.goo.gl/iKxuYJpq1yQLiKXn7'} target={'_blank'}>Location</a>
            </li>
          </div>
          <label htmlFor="my-drawer" className="btn btn-ghost drawer-button ml-auto lg:hidden"><Menu/></label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay" />
          <ul className="menu p-4 w-80 min-h-full bg-background text-blackbeard">
            {/* Sidebar content here */}
            <NavLinks />
            <li>
              <a href={'https://maps.app.goo.gl/iKxuYJpq1yQLiKXn7'} target={'_blank'}>Location</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
