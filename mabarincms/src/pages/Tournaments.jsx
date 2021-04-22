import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchTournaments} from '../store/tournamentAction'
import {fetchTeamTournaments} from '../store/teamTournamentAction'

import AddTournament from '../components/TournamentComponents/AddTournament'
import TournamentsCard from '../components/TournamentComponents/TournamentsCard'

function Tournaments () {
  const tournamentApiUrl = useSelector(state => state.apiUrl.tournamentApiUrl)
  const teamTournamentApiUrl = useSelector(state => state.apiUrl.teamTournamentApiUrl)
  const tournaments = useSelector(state => state.tournament.tournaments)
  const teamTournaments = useSelector(state => state.teamTournament.teamTournaments)
  const loadingTeamTournaments = useSelector(state => state.teamTournament.teamTournamentLoading)
  const loadingTournaments = useSelector(state => state.tournament.loadingTournaments)
  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(fetchTournaments(tournamentApiUrl))
  },[dispatch, tournamentApiUrl])

  useEffect(() => {
    dispatch(fetchTeamTournaments(teamTournamentApiUrl))
  },[dispatch, teamTournamentApiUrl])

  return (
    <div className="flex gap-5">
      <AddTournament />
        {
          loadingTournaments || loadingTeamTournaments  ?
          <p>Loading...</p>:
          <div >
            {
              tournaments.map((tournament)=> (
                <div className='mt-12 bg-gray-800 w-full h-44 lg:mr-0 rounded-t-lg shadow-md' key={tournament.id}>
                  <TournamentsCard tournaments={tournament} joinedTeams={teamTournaments}  />
                </div>
              ))
            }
          </div>
        }
      </div>
  )
} 

export default Tournaments