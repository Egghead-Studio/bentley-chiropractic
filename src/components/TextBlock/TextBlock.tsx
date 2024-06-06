import React from 'react'
import { TextType } from '@/app/services/[serviceName]/serviceText'

interface TextBlockProps {
  type: TextType
  children: React.ReactNode
}

export const TextBlock: React.FC<TextBlockProps> = ({ type, children }) => {
  if (type === TextType.H1) {
    return <h1 className={'text-center lg:text-left mb-4 md:mb-8 text-primary font-bold font-heading text-4xl'}>{children}</h1>
  }
  if (type === TextType.H2) {
    return <h2 className={'text-center lg:text-left mb-4 md:mb-8 text-primary font-semibold font-heading text-4xl'}>{children}</h2>
  }
  if (type === TextType.P) {
    return <p className={'mb-4 md:mb-8'}>{children}</p>
  }
  return <div>{children}</div>
}
