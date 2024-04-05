import type { Metadata } from 'next'
import Head from 'next/head';
import { Inter } from 'next/font/google'
import { getNavigationData } from '@/lib/api/getNavigationData'
import { userGroupName } from '@/constants/constants'
import { Layout } from '@/components'
import './globals.css'
import { getSettings } from '@/lib/api/getSettings'

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
  const settings = await getSettings()
  const faviconUrl = settings.favicon.url || '/favicon.ico'

  const navigation = await getNavigationData(userGroupName.HR)


  return (
    <html
      lang='en'
      className='h-full bg-white'
    >
    <Head>
      <link rel="icon" href={faviconUrl} />
    </Head>
      <body className={`${inter.className} h-full`}>
        <Layout children={children} settings={settings} navigation={navigation}/>
      </body>
    </html>
  )
}
