import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { getNavigationData } from '@/lib/api/getNavigationData'
import { userGroupName } from '@/constants/constants'
import { Layout } from '@/components'
import './globals.css'
import { StoreProvider } from '@/providers/Store'

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
  const menu = await getNavigationData(userGroupName.HR)

  return (
    <html
      lang='en'
      className='h-full bg-white'
    >
      <StoreProvider>
        <body className={`${inter.className} h-full`}>
          <Layout children={children} />
        </body>
      </StoreProvider>
    </html>
  )
}
