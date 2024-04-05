export default function OpenQuestion({ question, changeFc }: { question: any; changeFc: Function }) {
  return (
    <div>
      <p>{question.question}</p>
      <div>
        <div className='mt-2'>
          <textarea
            onChange={(e) => changeFc(e.target.value)}
            rows={4}
            name='comment'
            id='comment'
            className='block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            defaultValue={''}
          />
        </div>
      </div>
    </div>
  )
}
