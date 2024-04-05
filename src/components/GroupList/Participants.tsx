import { groupsData } from '@/constants/mocks'
import { cn } from '@/lib/utils'

export const Participants = ({ listId }: { listId: number }) => {
  return (
    <>
      <div className='mt-8'>
        <ul
          role='list'
          className='grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8'
        >
          {groupsData &&
            groupsData[listId]?.participants.map((client) => (
              <div
                key={client.id}
                className='overflow-hidden rounded-xl border border-gray-200'
              >
                <div className='flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6'>
                  <li
                    key={client.name}
                    className='col-span-1 flex rounded-md h-16'
                  >
                    <div
                      className={cn(
                        client.bgColor,
                        'flex w-16 flex-shrink-0 items-center justify-center rounded-full text-sm font-medium text-white'
                      )}
                    >
                      SA
                    </div>
                  </li>
                  <div className='text-sm font-medium leading-6 text-gray-900'>{client.name}</div>
                </div>
                <dl className='-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6'>
                  <div className='flex justify-between gap-x-4 py-3'>
                    <dt className='text-gray-500'>Wykonanie modułów</dt>
                    <dd className='text-gray-700'>40%</dd>
                  </div>
                  <div className='flex justify-between gap-x-4 py-3'>
                    <dt className='text-gray-500'>Kontakt</dt>
                    <dd className='flex items-start gap-x-2'>
                      <div className='font-medium text-gray-900'>{client.contact}</div>
                    </dd>
                  </div>
                  <div className='flex justify-between gap-x-4 py-3'>
                    <dt className='text-gray-500'>VPN</dt>
                    <dd className='flex items-start gap-x-2'>
                      <div className='font-medium text-gray-900'>{client.vpn}</div>
                    </dd>
                  </div>
                  <div className='flex justify-between gap-x-4 py-3'>
                    <dt className='text-gray-500'>RODO</dt>
                    <dd className='flex items-start gap-x-2'>
                      <div className='font-medium text-gray-900'>{client.RODO}</div>
                    </dd>
                  </div>
                  <div className='flex justify-between gap-x-4 py-3'>
                    <dt className='text-gray-500'>ZPC</dt>
                    <dd className='flex items-start gap-x-2'>
                      <div className='font-medium text-gray-900'>{client.ZPC}</div>
                    </dd>
                  </div>
                </dl>
              </div>
            ))}
        </ul>
      </div>
    </>
  )
}
