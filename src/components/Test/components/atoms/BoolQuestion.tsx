const sides = [
  { id: 1, name: 'tak' },
  { id: 2, name: 'nie' },
]

export default function BoolQuestion({ question, changeFc }: { question: any; changeFc: Function }) {
  return (
    <div>
      <fieldset>
        <legend className='text-base font-semibold text-gray-900'>{question.question}</legend>
        <div className='mt-4 divide-y divide-gray-200 border-b border-t border-gray-200'>
          {sides.map((side, sideIdx) => (
            <div
              key={sideIdx}
              className='relative flex items-start py-4'
            >
              <div className='min-w-0 flex-1 text-sm leading-6'>
                <label
                  htmlFor={`side-${side.id}`}
                  className='select-none font-medium text-gray-900'
                >
                  {side.name}
                </label>
              </div>
              <div className='ml-3 flex h-6 items-center'>
                <input
                  onChange={(e) => changeFc(e.target.value)}
                  id={`side-${side.id}`}
                  name='plan'
                  type='radio'
                  defaultChecked={side.id === null}
                  className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600'
                />
              </div>
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  )
}
