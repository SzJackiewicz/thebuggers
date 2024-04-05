import { cn } from '@/lib/utils'
import { getGroups } from '@/lib/api/getGroups'


export default async function Home() {
  const getGroupData = await getGroups()
  return (
    <div>
      <h2 className='text-md font-medium text-gray-500'>Wybierz ścieżkę</h2>
      <ul
        role='list'
        className='mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4'
      >
        {getGroupData.map((group) => (
          <li
            key={group.path.name}
            className='col-span-1 flex rounded-md shadow-sm'
          >
            <div
              className={cn(
                group.path.bgcolor,
                'flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white'
              )}
            >
              {group.path.initials}
            </div>
            <div className='flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white'>
              <div className='flex-1 truncate px-4 py-2 text-sm'>
                <a
                  href={`onboarding/${group.path.href}`}
                  className='font-medium text-gray-900 hover:text-gray-600'
                >
                  {group.path.name}
                </a>
                <p className='text-gray-500'>{group.module.length} Modułów</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
