'use client'
import React from 'react'
import { Question } from '@/components/FAQ/types'
import { Minus, Plus } from 'react-feather'
import clsx from 'clsx'
import { EventName } from '@/events/types'
import { sendEvent } from '@/events/events'

interface QuestionAccordionProps {
  question: Question
}

export const QuestionAccordion: React.FC<QuestionAccordionProps> = ({ question }) => {
  const [open, setOpen] = React.useState(false)

  const toggleOpen = () => {
    // Send event when FAQ is expanded
    if (!open) {
      void sendEvent(
        EventName.FAQExpanded,
        {
          question: question.question,
        }
      )
    }

    setOpen(!open)
  }

  return (
    <div className={clsx('collapse bg-background-light rounded-lg', open ? 'collapse-open' : 'collapse-close')} onClick={toggleOpen}>
      <input className={'hover:cursor-pointer'} type="radio" name="my-accordion-1" />
      <div className={clsx('collapse-title flex align-center justify-between font-bold bg-secondary')}>
        {question.question}
        {open ? <Minus /> : <Plus />}
      </div>
      <div className={clsx('collapse-content bg-background-light')}>
        <div className={'pt-4'}>{question.answer}</div>
      </div>
    </div>
  )
}
