import React from 'react'
import personSkeleton from '../../assets/personSkeleton.png'
import {NavLink} from 'react-router-dom'

function MemberCardComponent (props) {
  return (
    <>
      <NavLink to={`/detail-member/${props.member.id}`}>
        <div className='bg-gray-800 w-60 h-96 rounded-xl shadow pt-10'>
          <div className=''>
            <p className='text-white text-center font-bold text-2xl'>Mabarind.com</p>
          </div>
          <div className='mt-10'>
            <img className='w-24 rounded-full mx-auto' src={personSkeleton} alt=""/>
          </div>
          <div className='mt-10'>
            <p className='text-white text-center font-bold text-xl'>{props.member.username}</p>
          </div>
          <div className=''>
            <p className='text-gray-500 text-center font-semibold text-md'>{props.member.role.toUpperCase()}</p>
          </div>
          <div className='mt-2'>
            <p className='text-white text-center font-semibold text-md'>ID {props.member.id}</p>
          </div>
        </div>
      </NavLink>
    </>
  ) 
}

export default MemberCardComponent