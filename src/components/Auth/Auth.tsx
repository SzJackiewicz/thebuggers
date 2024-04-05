'use client'

import navigate from '@/app/actions'
import useAuth from '@/hooks/useAuth'
import { useRouter } from 'next/navigation'

export default function Auth() {
  const { signIn, mock } = useAuth()
  const router = useRouter()

  const handleSignIn = async () => {
    try {
      await signIn(mock.dev)

      navigate('/')
    } catch (err) {
      throw err
    }
  }

  return (
    <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
        <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>Zaloguj się do aplikacji</h2>
      </div>

      <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
        <form
          className='space-y-6'
          action='#'
          method='POST'
        >
          <div>
            <label
              htmlFor='email'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              Login
            </label>
            <div className='mt-2'>
              <input
                value='admin'
                id='email'
                name='email'
                type='email'
                autoComplete='email'
                required
                readOnly
                className='px-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>

          <div>
            <div className='flex items-center justify-between'>
              <label
                htmlFor='password'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Hasło
              </label>
            </div>
            <div className='mt-2'>
              <input
                value='hasloadmin'
                id='password'
                name='password'
                type='password'
                autoComplete='current-password'
                required
                readOnly
                className='px-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>

          <div>
            <button
              onClick={handleSignIn}
              type='submit'
              className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              Zaloguj
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
