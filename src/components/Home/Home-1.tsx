import { Feature, Section } from '@/lib/api/getHomePageData'
import { getIconComponent } from '@/utils/getIconComponents'

export const Home1 = (feature: Feature[], section: Section) => {
  // TODO: cssy do boxów
  return (
    <div className='bg-white py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:text-center'>
          <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            {section.featuresHeader}
          </p>
        </div>
        <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl'>
          <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16'>
            {feature.map((feature) => (
              <a href={feature.slug}>
              <div
                key={feature.featureTitle}
                className='relative pl-16 shadow-md'
              >
                <dt className='text-base font-semibold leading-7 text-gray-900'>
                  <div className='absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600'>
                    {getIconComponent(feature.iconname, 'shrink-0')}
                  </div>
                  {feature.featureTitle}
                </dt>
                <dd className='mt-2 text-base leading-7 text-gray-600'>{feature.featureDescription}</dd>
              </div>
              </a>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
