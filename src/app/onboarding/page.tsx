import Hello from '../../content/hello.mdx'

export default async function Home() {
  return (
    <div>
      <Hello className='prose' />
    </div>
  )
}
