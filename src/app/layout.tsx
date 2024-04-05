import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
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
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
