import ConfirmButton from '@/components/ConfirmButton/ConfirmButton'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { tabsGroup } from '@/constants/mocks'
import { getGroups } from '@/lib/api/getGroups'
import React from 'react'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { Devs } from '@/content/Devs'

export default async function Frontend({ params: { slug } }: { params: { slug: string } }) {
  const getGroupData = await getGroups()

  const module = getGroupData.filter((item) => item.path.href === slug).flatMap((item) => item.module)

  const tabs = module.map((tab) => (
    <TabsTrigger
      value={tab.modulecontent}
      key={tab.id}
    >
      {tab.modulename}
    </TabsTrigger>
  ))

  const tabsContent = module.map((tab) => {
    return (
      <TabsContent
        key={tab.id}
        value={tab.modulecontent}
        className='prose max-w-none mx-8'
      >
        {tab.modulename === 'Devs4Devs' ? <Devs /> : <MDXRemote source={tab.modulecontent} />}
      </TabsContent>
    )
  })

  return (
    <div>
      <h2 className='font-md text-lg my-2 font-semibold'>Zapoznaj się ze wszystkimi modułami.</h2>
      <h3 className='font-md my-4 '>Po zakończeniu modułu, potwierdź przyciskiem!</h3>
      <Tabs
        defaultValue={module[0].modulecontent}
        className='w-full'
      >
        <TabsList className='flex w-fit justify-between py-7 px-4 gap-8'>{tabs}</TabsList>
        {tabsContent}
        <ConfirmButton />
      </Tabs>
    </div>
  )
}
