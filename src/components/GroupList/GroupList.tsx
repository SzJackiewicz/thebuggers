'use client'
import { groupsData } from '@/constants/mocks'
import { cn } from '@/lib/utils'
import { Participants } from './Participants'
import { useState } from 'react'

export const GroupList = () => {
  const [listId, setListId] = useState(1)

  const groups = groupsData.map((group) => (
    <li
      key={group.groupId}
      className={cn('flex rounded-md cursor-pointer transition-all duration-300')}
      onClick={() => setListId(group.groupId)}
    >
      <div
        className={cn(group.bgColor, 'flex w-24 flex-shrink-0 items-center justify-center rounded-full text-sm font-medium text-white', {
          'h-[100px] w-[100px] shadow-xl': listId === group.groupId,
          'h-24': listId !== group.groupId,
        })}
      >
        {group.avatar}
      </div>
    </li>
  ))

  return (
    <div className='flex flex-col'>
      <div className='flex gap-8'>{groups}</div>
      <Participants listId={listId} />
    </div>
  )
}
