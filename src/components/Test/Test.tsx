'use client'
import { Suspense, useState } from 'react'
import Progress from './components/Progress'
import CandidateForm from './components/CandidateForm'
import TestInfoSection from './components/TestInfoSection'
import { Question, TestData, getTestById } from '@/lib/api/getTestById'
import TestForm from './components/TestForm'
import { mapQuestions } from './helpers/mapQuestionsAnswers'

interface TestProps {
  id: string
  data: TestData
}

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function Test({ data, id }: TestProps) {
  const [testValues, setTestValues] = useState(mapQuestions(data.questions))
  const [candidateInfo, setCandidateInfo] = useState({
    name: '',
    surname: '',
    email: '',
    link: '',
    about: '',
    testId: id,
  })
  const [step, setStep] = useState<number>(0)

  const handleOnSubmit = () => {
    // await subtmit
    console.log({
      ...candidateInfo,
      answers: testValues,
    })
  }

  console.log({
    ...candidateInfo,
    answers: testValues,
  })

  return (
    <Suspense fallback={<>Loading...</>}>
      <Progress
        step={step as number}
        {...{ name: data.name, handleOnSubmit }}
      >
        {step === 0 && <TestInfoSection {...{ setStep }} />}
        {step === 1 && <CandidateForm {...{ setStep, setCandidateInfo, candidateInfo }} />}
        {step === 2 && <TestForm {...{ data: data.questions, setTestValues, testValues }} />}
      </Progress>
    </Suspense>
  )
}
