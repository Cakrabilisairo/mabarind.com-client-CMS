import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TeamCardComponent from '../components/TeamComponents/TeamCardComponent'
import { fetchTeams } from '../store/teamAction'

function TeamPage () {
  const dispatch = useDispatch()
  const teamsApiUrl = useSelector(state => state.apiUrl.allTeamsApiUrl)
  const teams = useSelector(state => state.team.teams)
  const loadingTeams = useSelector(state => state.team.loadingTeams)

  useEffect(()=>{
    dispatch(fetchTeams(teamsApiUrl))
  }, [dispatch, teamsApiUrl])

  return (
    <div className='flex justify-center gap-5 my-10 h-screen overflow-y-auto'>
      {
        loadingTeams ? <p>Loading ...</p> :
        teams.map((team)=>(
          <TeamCardComponent team={team} key={team.id}/>
        ))
      }
    </div>
  )
}

export default TeamPage