import { getUsers } from '@/server/getUsers'

export default async function HrApp() {
  const users = await getUsers()
  console.log({ users })
  return <div>HrApp</div>
}
