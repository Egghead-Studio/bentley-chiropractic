'use client'
import React, { LegacyRef } from 'react'
import { MutableRefObject, useEffect, useRef, useState } from 'react'
import { FC, ReactNode } from 'react'

export function useIsVisible(ref: MutableRefObject<any>): boolean {
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting)
    })

    observer.observe(ref.current)
    return () => {
      observer.disconnect()
    }
  }, [ref])

  return isIntersecting
}

export const FadeIn: FC<{ children: ReactNode }> = ({ children }) => {
  const ref = useRef()
  const isVisible = useIsVisible(ref)

  return (
    <div ref={ref as LegacyRef<any>} className={`transition-opacity ease-in duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {children}
    </div>
  )
}
