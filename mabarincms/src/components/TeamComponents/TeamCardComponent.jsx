import React from 'react'
import dummyTeamLogo from '../../assets/3.png'
import {NavLink} from 'react-router-dom'

function TeamCardComponent (props) {
  return (
    <>
      <NavLink to={`/detail-team/${props.team.id}`}>
        <div className='bg-gray-800 w-60 h-80 rounded-xl shadow pt-2'>
          <div className=''>
            <img className='w-56 rounded-xl mx-auto' src={dummyTeamLogo} alt=""/>
          </div>
          <div className='mt-5'>
            <p className='text-white text-center font-bold text-xl'>{props.team.team_name}</p>
          </div>
        </div>
      </NavLink>
    </>
  )
}

export default TeamCardComponent