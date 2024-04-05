import Test from '@/components/Test/Test'
import { getTestById } from '@/lib/api/getTestById'

export default async function Page({ params: { id } }: { params: { id: string } }) {
  const data = await getTestById(id)

  return <Test {...{ data: data!, id }} />
}
