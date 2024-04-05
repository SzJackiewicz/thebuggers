import { Feature, Section } from '@/lib/api/getHomePageData'
import { getIconComponent } from '@/utils/getIconComponents'

export const Home3 = (feature: Feature[], section: Section) => {
  return (
    <div className='overflow-hidden bg-white py-2 sm:py-6'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 sm:gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-2 place-content-center'>
          <div className='lg:pr-8 lg:pt-4'>
            <div className='lg:max-w-lg'>
              <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>{section.featuresHeader}</p>
              <dl className='mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none'>
                {feature.map((feature) => (
                  <a href={feature.slug}>
                    <div
                      key={feature.featureTitle}
                      className='relative pl-9 mb-8'
                    >
                      <dt className='inline font-semibold text-gray-900'>
                        <div className='flex'>
                          <div className='mb-2  h-10 w-10 items-center justify-center rounded-lg bg-indigo-500 p-2'>
                            {getIconComponent(feature.iconname, 'shrink-0')}
                          </div>
                          <div className='w-1/2 p-2'>{feature.featureTitle}</div>
                        </div>
                      </dt>
                      <dd>{feature.featureDescription}</dd>
                    </div>
                  </a>
                ))}
              </dl>
            </div>
          </div>
          <img
            src='https://www.datocms-assets.com/128349/1712309049-image.png'
            alt='PThe buggers'
            className='w-[48rem] sm:w-[57rem] md:-ml-4 lg:-ml-0 my-auto'
            width={800}
            height={800}
          />
        </div>
      </div>
    </div>
  )
}
