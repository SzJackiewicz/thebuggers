'use client'
import { useEffect, useState } from 'react'
import { Switch } from '@headlessui/react'
import useAuth from '@/hooks/useAuth'
import { useStore } from '@/hooks/useStore'

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const { loginSwitch, dispatch } = useStore()
  const { signIn, mock } = useAuth()

  const handleSwitch = (checked: boolean) => {
    dispatch({ type: 'toggle_login_switch' })
    signIn(checked ? mock.dev : mock.hr)
  }

  return (
    <Switch
      checked={loginSwitch}
      onChange={handleSwitch}
      className={classNames(
        loginSwitch ? 'bg-indigo-600' : 'bg-gray-200',
        'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2'
      )}
    >
      <span className='sr-only'>Use setting</span>
      <span
        aria-hidden='true'
        className={classNames(
          loginSwitch ? 'translate-x-5' : 'translate-x-0',
          'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
        )}
      />
    </Switch>
  )
}
