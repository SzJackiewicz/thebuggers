import { CheckCircleIcon } from '@heroicons/react/20/solid'

export default function ConfirmButton() {
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
              className='inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
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
