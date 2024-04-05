import { Question } from '@/lib/api/getTestById'
import CodeQuestion from './atoms/CodeQuestion'
import RadioQuestion from './atoms/RadioQuestion'
import OpenQuestion from './atoms/OpenQuestion'
import BoolQuestion from './atoms/BoolQuestion'
import ImageQuestion from './atoms/ImageQuestion'
import { Dispatch, SetStateAction, useState } from 'react'

function renderQuestionComponent(question: Question, changeFc: Function) {
  switch (question._modelApiKey) {
    case 'codequestion':
      return <CodeQuestion {...{ question, changeFc }} />
    case 'multiplechoice':
      return <RadioQuestion {...{ question, changeFc }} />
    case 'openquestion':
      return <OpenQuestion {...{ question, changeFc }} />
    case 'truefalse':
      return <BoolQuestion {...{ question, changeFc }} />
    case 'imagequestion':
      return <ImageQuestion {...{ question, changeFc }} />

    default:
      return <></>
  }
}

export default function TestForm({
  data,
  setTestValues,
  testValues,
}: {
  data: Question[]
  setTestValues: Dispatch<SetStateAction<string>>
  testValues: any
}) {
  return (
    <div className='h-full overflow-scroll snap-y snap-mandatory'>
      {data.map((question) => (
        <div
          className='h-full flex justify-center items-center snap-start'
          key={question.id}
        >
          {renderQuestionComponent(question, (value: string) => setTestValues({ ...testValues, [question.id]: value }))}
        </div>
      ))}
    </div>
  )
}
