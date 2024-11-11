import React from 'react'
import type { Metadata } from 'next'
import { Lora, Radio_Canada } from 'next/font/google'
import './globals.css'
import { Nav } from '@/components/Nav/Nav'
import clsx from 'clsx'
import { NextFontWithVariable } from 'next/dist/compiled/@next/font'
import { AnalyticsProvider } from '@/events/AnalyticsProvider'
import { getSessionInfo } from '@/events/session'
import { Footer } from '@/components/Footer/Footer'

const lora: NextFontWithVariable = Lora({ subsets: ['latin'], variable: '--font-heading' })
const radioCanada: NextFontWithVariable = Radio_Canada({ subsets: ['latin'], variable: '--font-body' })

export const metadata: Metadata = {
  icons: '/bentley-logo-square.png',
  title: 'Bentley Chiropractic',
  description: 'Book Your Appointment Today!',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { ip, sessionId } = await getSessionInfo()

  return (
    <html lang="en">
      <body className={
        clsx(
          radioCanada.className,
          radioCanada.variable,
          lora.variable,
          'min-h-screen bg-background text-blackbeard lg:text-lg'
        )
      }
      >
        <AnalyticsProvider ip={ip} sessionID={sessionId}>
          <Nav/>
          <div>
            {children}
          </div>
          <Footer />
        </AnalyticsProvider>
      </body>
    </html>
  )
}
