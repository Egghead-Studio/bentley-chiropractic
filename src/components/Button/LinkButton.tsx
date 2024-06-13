'use client'
import React from 'react'
import { Button, ButtonProps } from '@/components/Button/Button'
import { EventName } from '@/events/types'
import { sendEvent } from '@/events/events'

interface LinkButtonProps extends ButtonProps {
  href: string;
  eventName: EventName;
  eventProperties: Record<string, string>;
  children: React.ReactNode;
  newTab?: boolean;
}

export const LinkButton: React.FC<LinkButtonProps> = ({
  href,
  eventName,
  eventProperties,
  variant,
  stretch,
  newTab = true,
  children
}) => {
  const onClick = () => {
    void sendEvent(eventName, eventProperties)
    window.open(href, newTab ? '_blank' : '_self')
  }

  return (
    <Button variant={variant} stretch={stretch} onClick={onClick}>{children}</Button>
  )
}
