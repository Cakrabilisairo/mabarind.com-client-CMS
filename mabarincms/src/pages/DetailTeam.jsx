import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import DetailTeamComponent from '../components/TeamComponents/DetailTeamComponent'
import { fetchMemberTeamList } from '../store/memberTeamAction'
import { fetchDetailTeam } from '../store/teamAction'

function DetailTeam () {
  const dispatch = useDispatch()
  const params = useParams()
  const detailsTeam = useSelector(state => state.team.detailTeam)
  const loadingDetailTeam = useSelector(state => state.team.loadingDetailTeam)
  const detailTeamApiUrl = useSelector(state => state.apiUrl.detailTeamApiUrl)
  const loadingMemberTeam =useSelector(state => state.memberTeam.loadingMemberTeamList)
  const memberTeamApiUrl = useSelector(state => state.apiUrl.memberTeamApiUrl)
  const memberTeamLists = useSelector(state => state.memberTeam.memberTeamList)

  useEffect(() => {
    dispatch(fetchDetailTeam(`${detailTeamApiUrl}/${params.id}`))
  },[dispatch, detailTeamApiUrl, params])

  useEffect(() => {
    dispatch(fetchMemberTeamList(`${memberTeamApiUrl}/${params.id}`))
  }, [dispatch, params, memberTeamApiUrl])

  return (
    <>
      <div>
        {
          loadingDetailTeam && loadingMemberTeam ? <p>Loading...</p>: 
            <DetailTeamComponent  detailTeam={detailsTeam} listMember={memberTeamLists} />
        }
        
      </div>
    </>
  )
}

export default DetailTeam