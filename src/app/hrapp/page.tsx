import Candidates from '@/components/Candidates/Candidates'
import { getUsers } from '@/server/getUsers'

export default async function HrApp() {
  const users = await getUsers()

  return (
    <div className='p-6'>
      <Candidates {...{ candidates: users }} />
    </div>
  )
}
