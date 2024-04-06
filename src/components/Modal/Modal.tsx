'use client'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export default function Modal({ open, setOpen, candidate }: any) {
  return (
    <Transition.Root
      show={open}
      as={Fragment}
    >
      <Dialog
        as='div'
        className='relative z-10'
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
        </Transition.Child>

        <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
          <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md sm:p-6'>
                <div className='flex w-full items-center justify-between space-x-6 p-6'>
                  <span className='inline-flex h-12 w-12 items-center justify-center rounded-full bg-gray-500'>
                    <span className='text-lg font-medium leading-none text-white'>{candidate.avatar}</span>
                  </span>
                  <div className='flex-1 truncate'>
                    <div className='flex items-start flex-col gap-3'>
                      <h3 className='truncate text-md font-medium text-gray-900'>{candidate.name}</h3>
                      <span className='min-w-48 p-2 inline-flex flex-shrink-0 items-center rounded-full bg-green-50 py-0.5 text-sm font-medium text-green-700 ring-1 ring-inset ring-green-600/20'>
                        {candidate.email}
                      </span>
                      <a
                        className='min-w-48 px-2 inline-flex flex-shrink-0 items-center rounded-full bg-blue-600 py-0.5 text-sm font-medium text-white text-center content-center'
                        href={candidate.link}
                      >
                        LinkedIn
                      </a>
                    </div>
                    <p className='mt-1 truncate text-sm text-gray-500'>{candidate.title}</p>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
