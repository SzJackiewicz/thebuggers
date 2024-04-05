'use client'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { NotificationsButton, ProfileDropdown, Sidebar, SidebarMobile } from '..'
import { useState } from 'react'
import SwitchUser from '../SwitchUser/SwitchUser'
import { Settings } from '@/lib/api/getSettings'
import { MenuItem } from '@/lib/api/getNavigationData'
import { usePathname } from 'next/navigation'

const Layout = ({
  children,
  settings,
  navigation,
}: Readonly<{
  children: React.ReactNode
  settings: Settings
  navigation: MenuItem[]
}>) => {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const logoSettings = settings.logo

  if (pathname.includes('/test') || pathname.includes('login')) {
    return (
      <main className='py-10'>
        <div className='px-4 sm:px-6 lg:px-8'>{children}</div>
      </main>
    )
  }

  return (
    <>
      <div>
        <SidebarMobile
          isOpen={sidebarOpen}
          setOpen={setSidebarOpen}
        />
        <Sidebar
          logo={logoSettings}
          navigation={navigation}
        />

        <div className='lg:pl-72'>
          <div className='sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8'>
            <button
              type='button'
              className='-m-2.5 p-2.5 text-gray-700 lg:hidden'
              onClick={() => setSidebarOpen(true)}
            >
              <span className='sr-only'>Open sidebar</span>
              <Bars3Icon
                className='h-6 w-6'
                aria-hidden='true'
              />
            </button>
            <div
              className='h-6 w-px bg-gray-900/10 lg:hidden'
              aria-hidden='true'
            />
            <div className='flex flex-1 gap-x-4 self-stretch lg:gap-x-6'>
              <span className='flex-1' />
              <div className='flex items-center gap-x-4 lg:gap-x-6'>
                <NotificationsButton />
                <div
                  className='hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10'
                  aria-hidden='true'
                />
                <ProfileDropdown />
                <div
                  className='hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10'
                  aria-hidden='true'
                />
                <SwitchUser />
              </div>
            </div>
          </div>
          <main className='py-10'>
            <div className='px-4 sm:px-6 lg:px-8'>{children}</div>
          </main>
        </div>
      </div>
    </>
  )
}

export default Layout
