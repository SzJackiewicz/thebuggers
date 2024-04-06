import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function CodeQuestion({ question, changeFc }: { question: any; changeFc: Function }) {
  return (
    <div className='flex flex-row gap-4'>
      <div>
        <p>{question.pytanie}</p>
        <SyntaxHighlighter
          language='javascript'
          style={dracula}
        >
          {question.code.value.document.children[0].code}
        </SyntaxHighlighter>
      </div>
      <div>
        <label
          htmlFor='comment'
          className='block text-sm font-medium leading-6 text-gray-900'
        >
          Komentrz
        </label>
        <div className='mt-2'>
          <textarea
            onChange={(e) => changeFc(e.target.value)}
            rows={25}
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
