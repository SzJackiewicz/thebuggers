import { getFaqData } from '@/lib/api/getFaqData'
import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

export default async function FAQ() {
  const locale = 'pl_PL'
  const faqSection = await getFaqData()

  console.log(faqSection)

  // if (!faqSection) return
  const faq = faqSection?.allFaqsections[0].faqsection.questions
  if (!faq) return

  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8'>
        <div className='mx-auto max-w-2xl text-center'>
          <h2 className='text-2xl font-bold leading-10 tracking-tight text-gray-900'>Frequently asked questions</h2>
        </div>
        <div className='mt-20'>
          <dl className='space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6  sm:gap-y-16 sm:space-y-0 lg:grid-cols-3 lg:gap-x-10'>
            {faq.map((faq) => (
              <div key={faq.question}>
                <dt className='text-base font-semibold leading-7 text-gray-900'>{faq.question}</dt>
                <dd className='mt-2 text-base leading-7 text-gray-600'>{faq.answer.value.document.children[0].children[0].value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
