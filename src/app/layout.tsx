import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import { getNavigationData } from '@/lib/api/getNavigationData'
import { userGroupName } from '@/constants/constants'
import { Layout } from '@/components'
import './globals.css'
import { StoreProvider } from '@/providers/Store'
import { getSettings } from '../lib/api/getSettings'

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
  const cookieStore = cookies()
  const cookiesString = cookieStore.get('userData')?.value
  const settings = await getSettings()
  const faviconUrl = settings.favicon.url || '/favicon.ico'

  // TODO: przerobienie na cookie
  const navigation = await getNavigationData((cookiesString && JSON.parse(cookiesString)?.departmentName) || userGroupName.HR, 'pl_PL')

  return (
    <html
      lang='en'
      className='h-full bg-white'
    >
      <StoreProvider>
        <Head>
          <link
            rel='icon'
            href={faviconUrl}
          />
        </Head>
        <body className={`${inter.className} h-full`}>
          <Layout
            children={children}
            settings={settings}
            navigation={navigation}
          />
        </body>
      </StoreProvider>
    </html>
  )
}
