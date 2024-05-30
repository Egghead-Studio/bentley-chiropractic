import React from 'react'
import { QuestionAccordion } from '@/components/FAQ/QuestionAccordion'

interface Question {
  question: string
  answer: string
}

export const FAQSection: React.FC = () => {
  const questions: Question[] = [
    {
      question: 'What is the meaning of life?',
      answer: '42'
    },
    {
      question: 'What is the airspeed velocity of an unladen swallow?',
      answer: 'African or European?'
    },
    {
      question: 'What is the best way to get to Carnegie Hall?',
      answer: 'Practice, practice, practice'
    }
  ]

  return (
    <div className={'w-page my-12 lg:my-24 flex flex-col gap-8 md:gap-12'}>
      <div className={'text-primary text-4xl text-center font-bold font-heading'}>Frequently asked questions</div>
      <div className={'flex flex-col gap-4'}>
        {questions.map((q: Question, index: number) => (
          <QuestionAccordion key={`question-${index}`} question={q} />
        ))}
      </div>
    </div>
  )
}
