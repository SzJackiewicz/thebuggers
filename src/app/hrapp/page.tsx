import { getUsers } from '@/server/getUsers'

export default async function HrApp() {
  const users = await getUsers()
  console.log({ users })
  return (
    <div>
      {users?.map((user) => (
        <div className='flex flex-col border-2 border-zinc-400 my-2 p-2'>
          <label
            className='text-md'
            key={user.id}
          >
            {user.name}
          </label>
          <label
            className='text-md'
            key={user.id}
          >
            {user.surname}
          </label>
          <label
            className='text-md'
            key={user.id}
          >
            {user.email}
          </label>
          <label
            className='text-md'
            key={user.id}
          >
            {user.link}
          </label>
          <label
            className='text-md'
            key={user.id}
          >
            {user.about}
          </label>
        </div>
      ))}
    </div>
  )
}
