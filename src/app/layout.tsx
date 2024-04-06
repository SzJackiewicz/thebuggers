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
  const userData = cookieStore.get('userData')?.value
  const lang = cookieStore.get('lang')?.value
  const settings = await getSettings()
  const faviconUrl = settings.favicon.url || '/favicon.ico'

  const navigation = await getNavigationData((userData && JSON.parse(userData)?.departmentName) || userGroupName.HR, lang || 'pl_PL')

  return (
    <html
      lang={lang || 'en'}
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
            initialLang={lang || 'pl_PL'}
          />
        </body>
      </StoreProvider>
    </html>
  )
}
