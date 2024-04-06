'use client'
import { CheckCircleIcon } from '@heroicons/react/20/solid'
import { createModuleDone } from '@/server/createModuleDone'
import { useStore } from '@/hooks/useStore'
import { getModuleDone } from '@/server/getModuleDone'
import { useEffect, useState } from 'react'


interface ConfirmButtonProps {
  tabId: string
  getModuleDone: Function
}

const handleOnSubmit = async (moduleId: string, userId: string) => {
  await createModuleDone(moduleId, userId)
}

export default function ConfirmButton({tabId, getModuleDone}: ConfirmButtonProps) {
  const { userData } = useStore()

  const [data, setData] = useState()
  const [confirmed, setConfirmed] = useState(false)
  useEffect(() => {
    getModuleDone(tabId,userData?.email || '').then((data) => {
      setData(data)
    })
  },[])



  if (data === null) {
    return (
      <div>
        <dl className='mt-5 flex gap-5'>
          <div className='flex gap-5 items-center overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6'>
            <dt className='truncate text-sm font-medium text-gray-500'>
              <label>Zapoznałem się z modułem</label>
            </dt>
            <dd className='mt-1 text-3xl font-semibold tracking-tight text-gray-900'>
              <button
                type='button'
                disabled={confirmed}
                className='inline-flex disabled:bg-zinc-500 items-center gap-x-1.5 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                onClick={() => {
                  handleOnSubmit(tabId, userData?.email || '')
                  setConfirmed(true)
                }}
              >
                <CheckCircleIcon
                  className='-ml-0.5 h-5 w-5'
                  aria-hidden='true'

                />
                Potwierdzam
              </button>
            </dd>
          </div>
        </dl>
      </div>
    )
  }
}
