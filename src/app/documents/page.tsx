import { getDocumentsData } from '@/lib/api/getDocumentsData'
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline'
import { classNames } from '@/utils/styleUtils'

export default async function Document() {
  const locale = 'pl_PL'
  const data = await getDocumentsData(locale)
  const documents = data?.allDocuments
  if (!documents) return

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
                'flex w-16 h-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white'
              )}
            >
              {(document.document?.url.endsWith('.pdf') || document.ducumenturl.endsWith('.pdf')) && (
                <div className='w-8 flex justify-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 512 512'
                  >
                    <path d='M64 464l48 0 0 48-48 0c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 304l-48 0 0-144-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16zM176 352l32 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-16 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48 0-80c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16 0 0 48 16 0zm96-80l32 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-32 0c-8.8 0-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-16 0 0 96 16 0zm80-112c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 32 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64 0-64z' />
                  </svg>
                </div>
              )}
              {(document.document?.url.endsWith('.docx') || document.ducumenturl.endsWith('.docx')) && (
                <div className='w-8 flex justify-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 384 512'
                  >
                    <path d='M48 448V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm55 241.1c-3.8-12.7-17.2-19.9-29.9-16.1s-19.9 17.2-16.1 29.9l48 160c3 10.2 12.4 17.1 23 17.1s19.9-7 23-17.1l25-83.4 25 83.4c3 10.2 12.4 17.1 23 17.1s19.9-7 23-17.1l48-160c3.8-12.7-3.4-26.1-16.1-29.9s-26.1 3.4-29.9 16.1l-25 83.4-25-83.4c-3-10.2-12.4-17.1-23-17.1s-19.9 7-23 17.1l-25 83.4-25-83.4z' />
                  </svg>
                </div>
              )}
            </div>

            <div className='flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white'>
              <div className='flex-1 px-4 py-2 text-sm'>
                {document.ducumenturl && (
                  <div>
                    <div>
                      <a
                        href={document.ducumenturl}
                        className='font-medium text-gray-900 hover:text-gray-600'
                      >
                        {document.documentname}
                        <br></br>
                      </a>
                    </div>
                  </div>
                )}
                {document.document && (
                  <div>
                    <div>
                      <a
                        href={document.document?.url}
                        className='font-medium text-gray-900 hover:text-gray-600'
                      >
                        {document.documentname}
                        <br></br>
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
