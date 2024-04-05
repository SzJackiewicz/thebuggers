'use client'
import { useState } from 'react'
import { mapCandidates } from './helpers/mapCandidates'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import Modal from '../Modal/Modal'

export default function Candidates({ candidates }: { candidates: any }) {
  const [open, setOpen] = useState<string>('')
  const [people, setPeople] = useState(mapCandidates(candidates))
  return (
    <ul
      role='list'
      className='divide-y divide-gray-100'
    >
      {people.map((person) => (
        <li
          key={person.email}
          className='flex justify-between gap-x-6 py-5'
        >
          <div className='flex min-w-0 gap-x-4'>
            <span className='inline-flex h-12 w-12 items-center justify-center rounded-full bg-gray-500'>
              <span className='text-lg font-medium leading-none text-white'>{person.avatar}</span>
            </span>
            <div className='min-w-0 flex-auto'>
              <p className='text-sm font-semibold leading-6 text-gray-900'>{person.name}</p>
              <p className='mt-1 truncate text-xs leading-5 text-gray-500'>{person.email}</p>
            </div>
          </div>
          <div className='flex shrink-0 items-center gap-x-4'>
            <div className='hidden sm:flex sm:flex-col sm:items-end'>
              <p className='text-sm leading-6 text-gray-900'>{person.role}</p>
              {person.lastSeen ? (
                <p className='mt-1 text-xs leading-5 text-gray-500'>
                  Last seen <time dateTime={person.lastSeenDateTime}>{person.lastSeen}</time>
                </p>
              ) : (
                <div className='mt-1 flex items-center gap-x-1.5'>
                  <div className='flex-none rounded-full bg-emerald-500/20 p-1'>
                    <div className='h-1.5 w-1.5 rounded-full bg-emerald-500' />
                  </div>
                  <p className='text-xs leading-5 text-gray-500'>Online</p>
                </div>
              )}
            </div>
            <ChevronRightIcon
              onClick={() => setOpen(person.name)}
              className='cursor-pointer h-5 w-5 flex-none text-gray-400'
              aria-hidden='true'
            />
          </div>
          <Modal {...{ open: open === person.name, setOpen, candidate: person }} />
        </li>
      ))}
    </ul>
  )
}
