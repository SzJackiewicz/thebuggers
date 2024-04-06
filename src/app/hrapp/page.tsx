import Candidates from '@/components/Candidates/Candidates'
import { getAllTests } from '@/lib/api/getAllTests'
import { getUsers } from '@/server/getUsers'

export default async function HrApp() {
  const users = await getUsers()
  const tests = await getAllTests()
  return (
    <div className='p-6'>
      <Candidates {...{ candidates: users, tests: tests! }} />
    </div>
  )
}
