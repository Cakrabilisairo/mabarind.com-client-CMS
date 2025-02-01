import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import {fetchDetailTeamTournament} from '../store/teamTournamentAction'
import {fetchMemberTeamList} from '../store/memberTeamAction'
import DetailTeamTournamentComponent from '../components/TeamTournamentComponents/DetailTeamTournamentComponent'

function DetailTeamTournament() {
  const params = useParams()
  const dispatch = useDispatch()
  const detailTeamTournaments = useSelector(state => state.teamTournament.detailTeamTournament)
  const detailTeamTournamentLoading = useSelector(state => state.teamTournament.detailTeamTournamentLoading)
  const loadingMemberTeam =useSelector(state => state.memberTeam.loadingMemberTeamList)
  const memberTeamApiUrl = useSelector(state => state.apiUrl.memberTeamApiUrl)
  const memberTeamLists = useSelector(state => state.memberTeam.memberTeamList)

  useEffect(() => {
    dispatch(fetchDetailTeamTournament(`http://localhost:3001/detail-teamTournament/${params.idTeam}/${params.idTournament}`))
  },[dispatch, params])

  useEffect(() => {
    dispatch(fetchMemberTeamList(`${memberTeamApiUrl}/${params.idTeam}`))
  }, [dispatch, params, memberTeamApiUrl])

  return (
    <div>
      {
        detailTeamTournamentLoading && loadingMemberTeam ? <p>Loading...</p> :
        <DetailTeamTournamentComponent teamTournaments = {detailTeamTournaments} memberTeamList = {memberTeamLists}/>
      }
    </div>
  )
}

export default DetailTeamTournament