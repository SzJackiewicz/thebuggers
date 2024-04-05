import ConfirmButton from '@/components/ConfirmButton/ConfirmButton'
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
    <div>
      <h2 className='font-md text-lg my-2 font-semibold'>Zapoznaj się ze wszystkimi modułami.</h2>
      <h3 className='font-md my-4 '>Po zakończeniu modułu, potwierdź przyciskiem!</h3>
      <Tabs
        defaultValue='apps'
        className='w-full'
      >
        <TabsList className='flex w-fit justify-between py-7 px-4 gap-8'>{tabs}</TabsList>
        {tabsContent}
        <ConfirmButton />
      </Tabs>
    </div>
  )
}
