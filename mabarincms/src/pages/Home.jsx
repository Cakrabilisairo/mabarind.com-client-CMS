import React, { useEffect } from 'react'
import dummyTournament from '../assets/2.png'
import dummyTeams from '../assets/3.png'
import dummyMembers from '../assets/4.png'
import dummyBanner from '../assets/5.png'
import dummyGame from '../assets/6.png'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMembers } from '../store/memberAction'
import { fetchTeams } from '../store/teamAction'
import { fetchTournaments } from '../store/tournamentAction'

function Home () {
  const dispatch = useDispatch()
  // Member component
  const members = useSelector(state => state.member.members)
  const membersApiUrl = useSelector(state => state.apiUrl.allMemberApiUrl)
  const loadingMembers = useSelector(state => state.member.loadingMembers)
  const filteredMembers = members.filter(member => member.role === 'member')

  useEffect(() => {
    dispatch(fetchMembers(membersApiUrl))
  }, [dispatch, membersApiUrl]) 

  // TeamComponent
  const teamsApiUrl = useSelector(state => state.apiUrl.allTeamsApiUrl)
  const teams = useSelector(state => state.team.teams)
  const loadingTeams = useSelector(state => state.team.loadingTeams)

  useEffect(()=>{
    dispatch(fetchTeams(teamsApiUrl))
  }, [dispatch, teamsApiUrl])

  // Tournament Component
  const tournamentApiUrl = useSelector(state => state.apiUrl.tournamentApiUrl)
  const tournaments = useSelector(state => state.tournament.tournaments)
  const loadingTournaments = useSelector(state => state.tournament.loadingTournaments)
  const activeTournaments = tournaments.filter(tournament => tournament.status_tournament === 'Soon' || tournament.status_tournament === 'soon')

  useEffect(()=> {
    dispatch(fetchTournaments(tournamentApiUrl))
  },[dispatch, tournamentApiUrl])



  return (
    <div className="mt-5">
      <div className="flex flex-wrap justify-center gap-5">

        {/* Tournaments */}
        {
          loadingTournaments? <p>Loading...</p> :
          <div id="Card" className="bg-gray-800 w-64 h-96 px-2 py-2 rounded-lg ">
            <img className="w-60 h-60" 
            src={dummyTournament} 
            alt="dummyTournament"/>
            <div className="mt-5 h-12">
              <p className="text-white">Active Tournament: {activeTournaments.length}</p>
              <p className="text-white">Total Tournament: {tournaments.length}</p>
            </div>
            <Link to='/tournaments'>
              <div className="bg-red-500 rounded-lg w-1/2 py-1 mx-auto mt-5">
                <p className="text-white font-bold text-center">MANAGE</p>
              </div>
            </Link>
          </div>
        }
        

        {/* Member */}
        {
          loadingMembers ? <p>Loading...</p> : 
          <div id="Card" className="bg-gray-800 w-64 h-96 px-2 py-2 rounded-lg ">
            <img className="w-60 h-60" 
            src={dummyMembers} 
            alt="dummyMembers"/>
            <div className="mt-5 h-12">
              <p className="text-white">Total Member: {filteredMembers.length}</p>
            </div>
            <Link to='/members'>
              <div className="bg-red-500 rounded-lg w-1/2 py-1 mx-auto mt-5">
                <p className="text-white font-bold text-center">MANAGE</p>
              </div>
            </Link>
          </div>
        }
        

        {/* Teams */}
        {
          loadingTeams ? <p>Loading ...</p> :
          <div id="Card" className="bg-gray-800 w-64 h-96 px-2 py-2 rounded-lg ">
            <img className="w-60 h-60" 
            src={dummyTeams} 
            alt="dummyTeams"/>
            <div className="mt-5 h-12">
              <p className="text-white">Total Team: {teams.length}</p>
            </div>
            <Link to='teams'>
              <div className="bg-red-500 rounded-lg w-1/2 py-1 mx-auto mt-5">
                <p className="text-white font-bold text-center">MANAGE</p>
              </div>
            </Link>
          </div>
        }
        

        {/* Banner */}
        <div id="Card" className="bg-gray-800 w-64 h-96 px-2 py-2 rounded-lg ">
          <img className="w-60 h-60" 
          src={dummyBanner} 
          alt="dummyBanner"/>
          <div className="mt-5 h-12">
            <p className="text-white">Active Banner: N/A</p>
            <p className="text-white">Total Banner: N/A</p>
          </div>
          <Link>
            <div className="bg-red-500 rounded-lg w-1/2 py-1 mx-auto mt-5">
              <p className="text-white font-bold text-center">MANAGE</p>
            </div>
          </Link>
        </div>

        {/* Game */}
        <div id="Card" className="bg-gray-800 w-64 h-96 px-2 py-2 rounded-lg ">
          <img className="w-60 h-60" 
          src={dummyGame} 
          alt="dummyGame"/>
          <div className="mt-5 h-12">
            <p className="text-white">Total Game: N/A</p>
          </div>
          <Link >
            <div className="bg-red-500 rounded-lg w-1/2 py-1 mx-auto mt-5">
              <p className="text-white font-bold text-center">MANAGE</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
} 

export default Home