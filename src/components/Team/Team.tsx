import { getTeamData } from '@/lib/api/getTeamData'
import React from 'react'

const Team = async () => {
  const team = await getTeamData()
  return (
    <div className='mx-auto max-w-7xl px-6 lg:px-8'>
      <div className='mx-auto max-w-2xl lg:mx-0'>
        <h2 className='text-xl font-bold tracking-tight text-gray-900 sm:text-2xl'>Poznaj swój zespół</h2>
        <p className='mt-6 text-lg leading-8 text-gray-600'>{team?.teamname}</p>
      </div>
      <ul
        role='list'
        className='mx-auto mt-20 grid justify-center grid-cols-1  max-w-2xl gap-x-8 gap-y-16 text-center lg:mx-0 lg:max-w-none'
      >
        <li key={team?.manager.managermember.teammembername}>
          <img
            className='mx-auto h-24 w-24 rounded-full'
            src={team?.manager.managermember.teammemberimg.url}
            alt=''
          />
          <h3 className='mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900'>
            {team?.manager.managermember.teammembername}
          </h3>
          <p className='text-sm leading-6 text-gray-600'>{team?.manager.managermember.teammemberposition}</p>
        </li>
      </ul>
      <br></br>
      <br></br>
      <ul
        role='list'
        className='mx-auto grid max-w-2xl  justify-center gap-x-8 gap-y-16 text-center sm:grid-cols-3 lg:mx-1 lg:max-w-none'
      >
        {team?.teammenmber.map((member) => (
          <li key={member.teammembername}>
            <img
              className='mx-auto h-24 w-24 rounded-full'
              src={member.teammemberimg.url}
              alt=''
            />
            <h3 className='mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900'>{member.teammembername}</h3>
            <p className='text-sm leading-6 text-gray-600'>{member.teammemberposition}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Team
