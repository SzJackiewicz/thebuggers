import { getDocumentsData } from '@/lib/api/getDocumentsData'
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline'
import { classNames } from '@/utils/styleUtils'

export default async function Document() {
  const locale = 'pl_PL'
  const data = await getDocumentsData(locale)
  const documents = data?.allDocuments
  if (!documents) return

  console.log(documents)
  return (
    <div>
      <h2 className='text-sm font-medium text-gray-500'>Documents</h2>
      <ul
        role='list'
        className='mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4'
      >
        {documents.map((document) => (
          <li
            key={document.documentname}
            className='col-span-1 flex rounded-md shadow-sm'
          >
            <div
              className={classNames(
                document.bgcolor,
                'flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white'
              )}
            ></div>
            <div className='flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white'>
              <div className='flex-1 px-4 py-2 text-sm'>
                {document.documentname}
                {document.ducumenturl && (
                  <div>
                    <div>
                      <a
                        href={document.ducumenturl}
                        className='font-medium text-gray-900 hover:text-gray-600'
                      >
                        Pobierz
                      </a>
                    </div>
                  </div>
                )}
                {document.document && (
                  <div>
                    <div>
                      <a
                        href={document.document?.filename}
                        className='font-medium text-gray-900 hover:text-gray-600'
                      >
                        {document.document?.filename}
                      </a>
                    </div>
                  </div>
                )}
              </div>
              <div className='flex-shrink-0 pr-2'>
                <button
                  type='button'
                  className='inline-flex h-8 w-8 items-center justify-center rounded-full bg-transparent bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                >
                  <span className='sr-only'>Open options</span>
                  <EllipsisVerticalIcon
                    className='h-5 w-5'
                    aria-hidden='true'
                  />
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
