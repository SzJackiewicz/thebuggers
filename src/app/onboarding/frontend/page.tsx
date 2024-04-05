import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { tabsGroup } from '@/constants/mocks'

export default function Frontend() {
  const tabs = tabsGroup.FRONTEND.map((tab) => (
    <TabsTrigger
      value={tab.value}
      key={tab.label}
    >
      {tab.label}
    </TabsTrigger>
  ))
  const tabsContent = tabsGroup.FRONTEND.map((tab) => (
    <TabsContent
      key={tab.label}
      value={tab.value}
      className='prose max-w-none mx-8'
    >
      {tab.content}
    </TabsContent>
  ))
  return (
    <Tabs
      defaultValue='apps'
      className='w-full'
    >
      <TabsList className='flex w-fit justify-between mb-8 py-7 px-4 gap-8'>{tabs}</TabsList>
      {tabsContent}
    </Tabs>
  )
}
