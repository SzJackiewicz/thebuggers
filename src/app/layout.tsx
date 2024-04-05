import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Bars3Icon } from '@heroicons/react/24/outline'

import './globals.css'
import { NotificationsButton, ProfileDropdown, SearchBar, Sidebar, SidebarMobile } from '@/components'
import { getNavigationData } from '@/lib/api/getNavigationData'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TheBuggers',
  description: 'HR & Onboarding App',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const menu = await getNavigationData()

  menu.forEach((item) => {
    console.log(item)
  })
  return (
    <html
      lang='en'
      className='h-full bg-white'
    >
      <body className={`${inter.className} h-full`}>
        <>
          <div>
            <SidebarMobile />
            <Sidebar />

            <div className='lg:pl-72'>
              <div className='sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8'>
                <button
                  type='button'
                  className='-m-2.5 p-2.5 text-gray-700 lg:hidden'
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
                  <SearchBar />
                  <div className='flex items-center gap-x-4 lg:gap-x-6'>
                    <NotificationsButton />
                    <div
                      className='hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10'
                      aria-hidden='true'
                    />
                    <ProfileDropdown />
                  </div>
                </div>
              </div>
              <main className='py-10'>
                <div className='px-4 sm:px-6 lg:px-8'>{children}</div>
              </main>
            </div>
          </div>
        </>
      </body>
    </html>
  )
}
