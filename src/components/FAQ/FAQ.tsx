import React from 'react'
import { QuestionAccordion } from '@/components/FAQ/QuestionAccordion'
import { FadeIn } from '@/components/FadeIn/FadeIn'

interface Question {
  question: string
  answer: string
}

interface FAQSectionProps {
  headerText: string
}

export const FAQSection: React.FC<FAQSectionProps> = ({ headerText }) => {
  const questions: Question[] = [
    {
      question: 'Do you accept insurance?',
      answer: 'We are in-network with Medicare.'
    },
    {
      question: 'How much do appointments cost?',
      answer: 'New patient appointments are $75. This includes history, examinations, x-ray referral, and your first adjustment. All appointments after that are $50.'
    },
    {
      question: 'Do you offer any discounts?',
      answer: 'Yes! We offer a 20% discount for new patients who book online. We also offer a free appointment to anyone who refers a new patient who completes their first appointment.'
    }
  ]

  return (
    <FadeIn>
      <div className={'w-page py-12 lg:py-24 flex flex-col gap-8 md:gap-12'}>
        <div className={'text-primary text-4xl text-center font-bold font-heading'}>{headerText}</div>
        <div className={'flex flex-col gap-4'}>
          {questions.map((q: Question, index: number) => (
            <QuestionAccordion key={`question-${index}`} question={q} />
          ))}
        </div>
      </div>
    </FadeIn>
  )
}
