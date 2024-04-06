'use client'
import { useRouter } from 'next/navigation'
import { Switch } from '@headlessui/react'
import { useStore } from '@/hooks/useStore'
import useCookie from '@/hooks/useCookie'

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function Example({ initialLang }: { initialLang: string }) {
  const router = useRouter()
  const { loginSwitch, dispatch } = useStore()
  const { set } = useCookie()

  const handleSwitch = (checked: boolean) => {
    dispatch({ type: 'toggle_login_switch' })
    set('lang', checked ? 'en' : 'pl_PL')
    router.refresh()
  }

  return (
    <Switch
      defaultChecked={initialLang !== 'pl_PL'}
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
          'text-[0.6rem] flex justify-center items-center pointer-events-none h-full w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
        )}
      >
        {!loginSwitch ? 'PL' : 'EN'}
      </span>
    </Switch>
  )
}
