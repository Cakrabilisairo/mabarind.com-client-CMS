import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MemberCardComponent from '../components/MemberComponent/MemberCardComponent'
import { fetchMembers } from '../store/memberAction'

function MemberPage () {
  const dispatch = useDispatch()
  const members = useSelector(state => state.member.members)
  const membersApiUrl = useSelector(state => state.apiUrl.allMemberApiUrl)
  const loadingMembers = useSelector(state => state.member.loadingMembers)
  const filteredMembers = members.filter(member => member.role === 'member')

  useEffect(() => {
    dispatch(fetchMembers(membersApiUrl))
  }, [dispatch, membersApiUrl]) 

  console.log(members)

  return (
    <div className='flex justify-center gap-5 my-10 h-screen overflow-y-auto'>
      {
        loadingMembers ? <p>Loading...</p>: 
        filteredMembers.map((member)=> (
          <MemberCardComponent member={member} key={member.id}/>
        ))
      }
    </div>
  )
}

export default MemberPage