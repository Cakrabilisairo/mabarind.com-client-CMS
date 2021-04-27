import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import DetailMemberComponent from '../components/MemberComponent/DetailMemberComponent'
import { fetchDetailMember } from '../store/memberAction'

function DetailMember () {
  const params = useParams()
  const dispatch = useDispatch()
  const detailsMember = useSelector(state => state.member.detailMember)
  const detailMemberApiUrl = useSelector(state => state.apiUrl.detailMemberApiUrl)
  const loadingDetailMember = useSelector(state => state.member.loadingDetailMember)

  useEffect(() => {
    dispatch(fetchDetailMember(`${detailMemberApiUrl}/${params.id}`))
  }, [dispatch, params, detailMemberApiUrl])

  return (
    <div>
      {
        loadingDetailMember ? <p>Loading...</p> :
        <DetailMemberComponent detailMember = {detailsMember}/>
      }
      
    </div>
  )
}

export default DetailMember