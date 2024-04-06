'use client'
import Countdown from 'react-countdown'

interface ProgressProps {
  step: number
  name: string
  children: React.ReactNode
  handleOnSubmit: () => void
}

export default function Progress({ step, name, handleOnSubmit, children }: ProgressProps) {
  // const
  return (
    <div className='w-full h-full flex flex-col justify-between'>
      {children}
      <div className=''>
        <h4 className='sr-only'>Status</h4>
        <p className='text-sm font-medium text-gray-900'>{name}</p>
        <div
          className='mt-6'
          aria-hidden='true'
        >
          <div className='overflow-hidden rounded-full bg-gray-200'>
            <div
              className='h-2 rounded-full bg-indigo-600'
              style={{ width: '37.5%' }}
            />
          </div>
          <div className='mt-6 hidden grid-cols-4 text-sm font-medium text-gray-600 sm:grid w-full'>
            {step !== 2 ? (
              <>
                <div className='text-indigo-600'>Wprowadzenie</div>
                <div className='text-center text-indigo-600'>Pytania otwarte</div>
                <div className='text-center'>Test</div>
                <div className='text-right'>Zakończenie</div>
              </>
            ) : (
              <>
                <div className='text-indigo-600'>
                  <Countdown date={Date.now() + 10 * 60000} />
                </div>
                <div />
                <div />
                <div className='flex flex-row justify-end gap-6'>
                  <button
                    onClick={handleOnSubmit}
                    type='button'
                    className='max-w-32 rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                  >
                    Wyślij
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
