import { Feature, Section } from '@/lib/api/getHomePageData'
import { getIconComponent } from '@/utils/getIconComponents'

export const Home2 = (feature: Feature[], section: Section) => {
  return (
    <div className='bg-gray-900 py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:mx-0'>
          <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>{section.featuresHeader}</h2>
        </div>
        <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none'>
          <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3'>
            {feature.map((feature) => (
              <div
                key={feature.featureTitle}
                className='flex flex-col'
              >
                <dt className='text-base font-semibold leading-7 text-white'>
                  <div className='mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500'>
                    {getIconComponent(feature.iconname, 'shrink-0')}
                  </div>
                  {feature.featureTitle}
                </dt>
                <dd className='mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300'>
                  <p className='flex-auto'>{feature.featureDescription}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
