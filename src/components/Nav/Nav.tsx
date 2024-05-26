'use client'
import React from 'react'
import Link from 'next/link'
import { Menu } from 'react-feather'


interface NavProps {

}

export const Nav: React.FC<NavProps> = () => {
  const navLinks = [
    {
      name: 'Services',
      url: '/services'
    },
    {
      name: 'About',
      url: '/about'
    },
    {
      name: 'Testimonials',
      url: '/testimonials'
    }
  ]
  return (
    <nav>
      <div className="drawer drawer-end bg-background">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex items-center py-2 px-4 md:px-0 md:mx-auto md:w-10/12 lg:w-9/12">
          <a href={'/'}>
            <div className={'text-3xl font-heading font-bold'}>Bentley Chiropractic</div>
          </a>
          <label htmlFor="my-drawer" className="btn btn-ghost drawer-button ml-auto"><Menu/></label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay" />
          <ul className="menu p-4 w-80 min-h-full bg-background text-blackbeard">
            {/* Sidebar content here */}
            {navLinks.map((navLink) => (
              <li key={navLink.name}>
                <a href={navLink.url}> {navLink.name} </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
