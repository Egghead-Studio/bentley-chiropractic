import React from 'react'
import type { Metadata } from 'next'
import { Inter, Lora, Radio_Canada } from 'next/font/google'
import './globals.css'
import { Nav } from '@/components/Nav/Nav'
import clsx from 'clsx'
import { NextFontWithVariable } from 'next/dist/compiled/@next/font'

const lora: NextFontWithVariable = Lora({ subsets: ['latin'], variable: '--font-heading' })
const radioCanada: NextFontWithVariable = Radio_Canada({ subsets: ['latin'], variable: '--font-body' })

export const metadata: Metadata = {
  title: 'Bentley Chiropractic',
  description: 'Book Your Appointment Today!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={
        clsx(
          radioCanada.className,
          radioCanada.variable,
          lora.variable,
          'min-h-screen bg-background text-blackbeard md:text-lg'
        )
      }
      >
        <Nav/>
        <div className={'m-4 md:mx-auto md:w-10/12 md:my-8 lg:w-9/12 lg:my-12'}>
          {children}
        </div>
      </body>
    </html>
  )
}
