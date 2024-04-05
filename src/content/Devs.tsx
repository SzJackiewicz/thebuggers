import React from 'react'
const data = [
  {
    name: 'Wak Page Desktop',
    repo: 'https://git.dcwp.pl/wakacje/wak-page-desktop',
    doku: 'https://confluence.grupawp.pl/display/SoftwareDevelopementWakacjepl/%5BApp%5D+WakPageDesktop',
    tutorial: 'https://grupawppl.sharepoint.com/:v:/s/Wakacje.plJS/Ee-MlrAy_INIitAwB-yJmW0BBX59_QKgeLL8P_apDbIwZw?e=uxjwgt',
  },
  {
    name: 'Figma dla developera',
    repo: '',
    doku: '',
    tutorial: 'https://grupawppl.sharepoint.com/:v:/s/Wakacje.plJS/EZBGdeF01WdMg6MkZo118_sBoSKI6dRCzvyBs4DMJsrn4A?e=kzNeCK',
  },
  {
    name: 'Reservation App',
    repo: 'https://git.dcwp.pl/wakacje/wak-reservation',
    doku: 'https://confluence.grupawp.pl/display/SoftwareDevelopementWakacjepl/%5BApp%5D+WakReservation',
    tutorial: 'https://grupawppl.sharepoint.com/:v:/s/Wakacje.plJS/Ee-MlrAy_INIitAwB-yJmW0BBX59_QKgeLL8P_apDbIwZw?e=uxjwgt',
  },
  {
    name: 'Wak Views',
    repo: 'https://git.dcwp.pl/wakacje/ecommerce/wak-views',
    doku: 'https://confluence.grupawp.pl/display/SoftwareDevelopementWakacjepl/%5BApp%5D+WakViews',
    tutorial: 'https://grupawppl.sharepoint.com/:v:/s/Wakacje.plJS/Ee-MlrAy_INIitAwB-yJmW0BBX59_QKgeLL8P_apDbIwZw?e=uxjwgt',
  },
  {
    name: 'Paywall',
    repo: 'https://git.dcwp.pl/wakacje/ecommerce/wakds-widgets',
    doku: 'https://confluence.grupawp.pl/display/SoftwareDevelopementWakacjepl/%5BApp%5D+PaywallApp',
    tutorial: 'https://grupawppl.sharepoint.com/:v:/s/Wakacje.plJS/Ee-MlrAy_INIitAwB-yJmW0BBX59_QKgeLL8P_apDbIwZw?e=uxjwgt',
  },
]
export const Devs = () => {
  return (
    <div className='px-4 sm:px-6 lg:px-8'>
      <div className='mt-8 flow-root'>
        <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='inline-block min-w-full py-2 align-middle'>
            <table className='min-w-full divide-y divide-gray-300'>
              <thead>
                <tr>
                  <th
                    scope='col'
                    className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 lg:pl-8'
                  ></th>
                  <th
                    scope='col'
                    className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                  ></th>
                  <th
                    scope='col'
                    className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                  ></th>
                  <th
                    scope='col'
                    className='relative py-3.5 pl-3 pr-4 sm:pr-6 lg:pr-8'
                  >
                    <span className='sr-only'>Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-200 bg-white'>
                {data.map((person) => (
                  <tr key={person.name}>
                    <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8'>{person.name}</td>
                    <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                      <a
                        href={person.repo}
                        target='_blank'
                        className='text-indigo-600 hover:text-indigo-900 no-underline'
                      >
                        {person.repo && 'Repozytorium'}
                        <span className='sr-only'>{person.repo}</span>
                      </a>
                    </td>
                    <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                      <a
                        href={person.doku}
                        target='_blank'
                        className='text-indigo-600 hover:text-indigo-900 no-underline'
                      >
                        {person.doku && 'Dokumentacja'}
                        <span className='sr-only'>{person.doku}</span>
                      </a>
                    </td>
                    <td className='relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 lg:pr-8'>
                      <a
                        href='#'
                        className='text-indigo-600 hover:text-indigo-900 no-underline'
                      >
                        Tutorial<span className='sr-only'>{person.tutorial}</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
