import { NavigationLinks } from '..'
import React from 'react'
import { Logo } from '../../lib/api/getSettings'
import { MenuItem } from '@/lib/api/getNavigationData'

type Props = {
  logo: Logo
  navigation: MenuItem[]
}

const Sidebar = ({ logo, navigation }: Props) => {
  const logoUrl = logo.url || 'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500'

  return (
    <div className='hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-56 lg:flex-col'>
      <div className='flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4'>
        <div className='flex h-16 shrink-0 items-center py-4 mt-4 mx-auto'>
          <img
            className='h-10 w-auto'
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
              <NavigationLinks navigation={navigation} />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Sidebar
