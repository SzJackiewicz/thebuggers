import { cn } from '@/lib/utils'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'

const modules = [
  { name: 'Frontend developer', initials: 'FD', href: '/frontend', modules: 16, bgColor: 'bg-pink-600' },
  { name: 'PHP developer', initials: 'PHP', href: '/php', modules: 12, bgColor: 'bg-purple-600' },
  { name: 'Tester automat', initials: 'TA', href: '/automatictester', modules: 16, bgColor: 'bg-yellow-500' },
  { name: 'Tester Manual', initials: 'TM', href: '/manualtester', modules: 16, bgColor: 'bg-blue-500' },
  { name: 'BackOffice', initials: 'BO', href: '/backoffice', modules: 8, bgColor: 'bg-zinc-500' },
  { name: 'Sprzedaż CC', initials: 'SCC', href: '/sales', modules: 8, bgColor: 'bg-pink-500' },
  { name: 'Administracja', initials: 'AD', href: '/administration', modules: 8, bgColor: 'bg-cyan-500' },
]

export default async function Home() {
  return (
    <div>
      <h2 className='text-md font-medium text-gray-500'>Wybierz ścieżkę</h2>
      <ul
        role='list'
        className='mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4'
      >
        {modules.map((project) => (
          <li
            key={project.name}
            className='col-span-1 flex rounded-md shadow-sm'
          >
            <div
              className={cn(
                project.bgColor,
                'flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white'
              )}
            >
              {project.initials}
            </div>
            <div className='flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white'>
              <div className='flex-1 truncate px-4 py-2 text-sm'>
                <a
                  href={`onboarding${project.href}`}
                  className='font-medium text-gray-900 hover:text-gray-600'
                >
                  {project.name}
                </a>
                <p className='text-gray-500'>{project.modules} Modułów</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
