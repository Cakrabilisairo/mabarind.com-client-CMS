import React from 'react'
import personSkeleton from '../../assets/personSkeleton.png'

function DetailMemberComponent (props) {
  console.log(props)
  return (
    <div>
      <div className='bg-gray-800 mx-20 my-10 rounded-xl'>
        <div className='flex'>
          <div>
            <img className='rounded-l-xl' src={personSkeleton} alt=""/>
          </div>
          <div className="mx-10 my-5">
            <p className='text-white font-semibold text-xl'>ID: {props.detailMember.id} </p>
            <p className='text-white font-semibold text-xl'>username: {props.detailMember.username} </p>
            <p className='text-white font-semibold text-xl'>Email: {props.detailMember.email} </p>
            <p className='text-white font-semibold text-xl'>Gender: {props.detailMember.gender} </p>
            <p className='text-white font-semibold text-xl'>Phone Number: {props.detailMember.phone_number} </p>
            <p className='text-white font-semibold text-xl'>Member Since: {new Date(props.detailMember.createdAt).toString().slice(0, 15)} </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailMemberComponent