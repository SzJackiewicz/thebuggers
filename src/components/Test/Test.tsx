'use client'
import { Suspense, useState } from 'react'
import Progress from './components/Progress'
import CandidateForm from './components/CandidateForm'
import TestInfoSection from './components/TestInfoSection'
import { TestData } from '@/lib/api/getTestById'
import TestForm from './components/TestForm'
import { mapQuestions } from './helpers/mapQuestionsAnswers'
import { createUser } from '@/server/createUser'
import ThankYouPage from '@/components/Test/components/ThankYouPage'

interface TestProps {
  id: string
  data: TestData
}

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function Test({ data, id }: TestProps) {
  const [testValues, setTestValues] = useState(mapQuestions(data.questions))
  const [date, setDate] = useState(null)
  const [candidateInfo, setCandidateInfo] = useState({
    name: '',
    surname: '',
    email: '',
    link: '',
    about: '',
    testId: id,
  })
  const [step, setStep] = useState<number>(0)
  const handleOnSubmit = async () => {
    await createUser({
      ...candidateInfo,
      answers: testValues,
    })
    setStep(step+1)
  }

  return (
    <Suspense fallback={<>Loading...</>}>
      <Progress
        step={step as number}
        {...{ name: data.name, handleOnSubmit, date }}
      >
        {step === 0 && <TestInfoSection {...{ setStep }} />}
        {step === 1 && <CandidateForm {...{ setStep, setCandidateInfo, candidateInfo, setDate }} />}
        {step === 2 && <TestForm {...{ data: data.questions, setTestValues, testValues, date }} />}
        {step === 3 && <ThankYouPage />}
      </Progress>
    </Suspense>
  )
}
