'use client'
import { RadioGroup } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { mapQuestionToTitle } from './helpers/mapQuestionToTitle'
import { mapQuestionToRadios } from './helpers/mapQuestionToRadios'

const mailingLists = [
  { id: 1, title: 'Newsletter', description: 'Last message sent an hour ago', users: '621 users' },
  { id: 2, title: 'Existing Customers', description: 'Last message sent 2 weeks ago', users: '1200 users' },
  { id: 3, title: 'Trial Users', description: 'Last message sent 4 days ago', users: '2740 users' },
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function RadioQuestion({ question, changeFc }: { question: any; changeFc: Function }) {
  const [selectedMailingLists, setSelectedMailingLists] = useState({})
  const title = mapQuestionToTitle(question, 'question')

  const handleChange = (el) => {
    setSelectedMailingLists(el)
    changeFc(el.id)
  }

  return (
    <RadioGroup
      value={selectedMailingLists}
      onChange={handleChange}
    >
      <RadioGroup.Label className='text-base font-semibold leading-6 text-gray-900'>{title}:</RadioGroup.Label>

      <div className='mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-4 sm:gap-x-4'>
        {mapQuestionToRadios(question).map((mailingList: any) => (
          <RadioGroup.Option
            key={mailingList.id}
            value={mailingList}
            className={({ active }) =>
              classNames(
                active ? 'border-indigo-600 ring-2 ring-indigo-600' : 'border-gray-300',
                'relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none'
              )
            }
          >
            {({ checked, active }) => (
              <>
                <span className='flex flex-1'>
                  <span className='flex flex-col'>
                    <RadioGroup.Label
                      as='span'
                      className='block text-sm font-medium text-gray-900'
                    >
                      {mailingList.title}
                    </RadioGroup.Label>
                    <RadioGroup.Description
                      as='span'
                      className='mt-1 flex items-center text-sm text-gray-500'
                    >
                      {mailingList.description}
                    </RadioGroup.Description>
                    <RadioGroup.Description
                      as='span'
                      className='mt-6 text-sm font-medium text-gray-900'
                    >
                      {mailingList.users}
                    </RadioGroup.Description>
                  </span>
                </span>
                <CheckCircleIcon
                  className={classNames(!checked ? 'invisible' : '', 'h-5 w-5 text-indigo-600')}
                  aria-hidden='true'
                />
                <span
                  className={classNames(
                    active ? 'border' : 'border-2',
                    checked ? 'border-indigo-600' : 'border-transparent',
                    'pointer-events-none absolute -inset-px rounded-lg'
                  )}
                  aria-hidden='true'
                />
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  )
}
