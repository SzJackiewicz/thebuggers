import { Cog6ToothIcon } from '@heroicons/react/24/outline'
import { NavigationLinks } from '..'
import React from 'react'
import { Logo } from '../../lib/api/getSettings'
import { MenuItem } from '@/lib/api/getNavigationData'

type Props = {
  logo: Logo
  navigation: MenuItem[]
}

const Sidebar = ({logo, navigation}: Props) => {
  const logoUrl = logo.url || 'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500'

  return (
    <div className='hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col'>
      <div className='flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4'>
        <div className='flex h-16 shrink-0 items-center'>
          <img
            className='h-8 w-auto'
            src={logoUrl}
            alt='Your Company'
          />
        </div>
        <nav className='flex flex-1 flex-col'>
          <ul
            role='list'
            className='flex flex-1 flex-col gap-y-7'
          >
            <li>
              <NavigationLinks navigation={navigation}/>
            </li>
            <li className='mt-auto'>
              <a
                href='/admin'
                className='group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white'
              >
                <Cog6ToothIcon
                  className='h-6 w-6 shrink-0'
                  aria-hidden='true'
                />
                Admin
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Sidebar
