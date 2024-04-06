import { cn } from '@/lib/utils'
import { getGroups } from '@/lib/api/getGroups'
import { getToDoData } from '@/lib/api/getTodoList'

export default async function TodoList() {
  const todoList = await getToDoData()
  if (!todoList) return
  console.log(todoList)
  return (
    <fieldset>
      <div className='space-y-5'>
        <div>
          {todoList.allTodos.map((todo) => (
            <li
              key={todo.todo}
              className='col-span-1 flex rounded-md shadow-sm'
            >
              <div className='relative flex items-start'>
                <div className='flex h-6 items-center'>
                  <input
                    id='comments'
                    aria-describedby='comments-description'
                    name='comments'
                    type='checkbox'
                    className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
                  />
                </div>
                <div className='ml-3 text-sm leading-6'>
                  <label
                    htmlFor='comments'
                    className='font-medium text-gray-900'
                  >
                    {todo.todo}
                  </label>{' '}
                  <span
                    id='comments-description'
                    className='text-gray-500'
                  ></span>
                </div>
              </div>
            </li>
          ))}
        </div>
      </div>
    </fieldset>
  )
}
