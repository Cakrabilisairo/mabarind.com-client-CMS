import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import dummyTournamentPoster from '../../assets/1.png'
import {deleteTournament, detailTournament, editTournament, editStatusTournament} from '../../store/tournamentAction'
import {filterTeamTournaments} from '../../helper/functionHelper'
import dummyTeamLogo from '../../assets/3.png'
import {NavLink} from 'react-router-dom'

function TournamentCard (props) {
  const dispatch = useDispatch()
  const detailsTournament = useSelector(state => state.tournament.detailTournament)
  const tournamentApiUrl = useSelector(state => state.apiUrl.tournamentApiUrl)
  const loadingDetailTournament = useSelector(state => state.tournament.loadingDetailTournament)
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalJoinedTeam, setShowModalJoinedTeam] = useState(false);
  const [showModalStatusTournament, setShowModalStatusTournament] = useState(false)
  
  const [tournamentStatus, setTournamentStatus] = useState('')
  const [tournamentName, setTournamentName] = useState(detailsTournament.name)
  const [tournamentGameId, setTournamentGameId] = useState(detailsTournament.GameId)
  const [tournamentDate, setTournamentDate] = useState(detailsTournament.date)
  const [tournamentTime, setTournamentTime] = useState(detailsTournament.time)
  const [tournamentVenue, setTournamentVenue] = useState(detailsTournament.venue)
  const [tournamentRegistrationFee, setTournamentRegistrationFee] = useState(detailsTournament.registration_fee)
  const [tournamentFirstWinner, setTournamentFirstWinner] = useState(detailsTournament.first_winner)
  const [tournamentRunnerUp, setTournamentRunnerUp] = useState(detailsTournament.runner_up)
  const [tournamentThirdWinner, setTournamentThirdWinner] = useState(detailsTournament.third_winner)
  const [tournamentTotalPrize, setTournamentTotalPrize] = useState(detailsTournament.total_prize)
  const [tournamentBannerPoster, setTournamentBannerPoster] = useState(detailsTournament.banner_url)
  const [tournamentSlot, setTournamentSlot] = useState(detailsTournament.slot)
  const [tournamentCategory, setTournamentCategory] = useState(detailsTournament.category)
  const [tournamentPublisher, setTournamentPublisher] = useState(detailsTournament.publisher)

  const dataStatus = {
    status_tournament: tournamentStatus
  }
  const dataTournament = {
    name: tournamentName,
    date: tournamentDate,
    venue: tournamentVenue,
    registration_fee: tournamentRegistrationFee,
    first_winner: tournamentFirstWinner,
    runner_up: tournamentRunnerUp,
    third_winner: tournamentThirdWinner,
    total_prize: tournamentTotalPrize,
    banner_url: tournamentBannerPoster,
    slot: tournamentSlot,
    category: tournamentCategory,
    GameId: tournamentGameId,
    time: tournamentTime,
    publisher: tournamentPublisher
  }

  function onChangeTournamentStatus(e) {
    setTournamentStatus(e.target.value)
  }
  function onChangeTournamentName(e) {
    setTournamentName(e.target.value)
  }
  function onChangeTournamentGameId(e) {
    setTournamentGameId(e.target.value)
  }
  function onChangeTournamentDate(e) {
    setTournamentDate(e.target.value)
  }
  function onChangeTournamentTime(e) {
    setTournamentTime(e.target.value)
  }
  function onChangeTournamentPublisher(e) {
    setTournamentPublisher(e.target.value)
  }
  function onChangeTournamentVenue(e) {
    setTournamentVenue(e.target.value)
  }
  function onChangeTournamentRegistrationFee(e) {
    setTournamentRegistrationFee(e.target.value)
  }
  function onChangeTournamentFirstWinner(e) {
    setTournamentFirstWinner(e.target.value)
  }
  function onChangeTournamentRunnerUp(e) {
    setTournamentRunnerUp(e.target.value)
  }
  function onChangeTournamentThirdWinner(e) {
    setTournamentThirdWinner(e.target.value)
  }
  function onChangeTournamentTotalPrize(e) {
    setTournamentTotalPrize(e.target.value)
  }
  function onChangeTournamentBannerPoster(e) {
    setTournamentBannerPoster(e.target.value)
  }
  function onChangeTournamentSlot(e) {
    setTournamentSlot(e.target.value)
  }
  function onChangeTournamentCategory(e) {
    setTournamentCategory(e.target.value)
  }

  function handleDeleteTournament (id) {
    dispatch(deleteTournament(tournamentApiUrl, id))
  }

  function handleGetDetailTournament (id) {
    dispatch(detailTournament(tournamentApiUrl, id))
    setShowModalEdit(true)
  }

  function handleEditTournament (id) {
    dispatch(editTournament(tournamentApiUrl, id, dataTournament))
  }

  function handleEditStatusTournament(id) {
    dispatch(editStatusTournament(tournamentApiUrl, id, dataStatus))
  }

  return (
    <div>
      <div className='flex'>
        {/* flexing img and content */}
        <div>
          <img className='lg: w-52 ' src={dummyTournamentPoster} alt=""/>
        </div>
        {/* Content */}
        <div className='w-full'>
          {/* Header */}
          <div className='flex justify-between mx-3 h-12 border-b-2 border-red-500 mb-3'>
            <p className='text-white font-bold mt-3 '>{props.tournaments.name} - {props.tournaments.publisher}</p>
            <div className='flex justify-end gap-3'>
              <p className='font-bold mt-3 bg-yellow-400 px-2 h-7 rounded'>{props.tournaments.status_tournament}</p>
              <p className='font-bold mt-3 bg-green-400 px-2 h-7 rounded'>{props.tournaments.category}</p>
            </div>
          </div>
          {/* Body */}
          <div className='flex justify-between mx-3'>
            {/* section 1 */}
            <div className=''>
              <div className='flex gap-1'>
                <i className="material-icons text-red-500">event</i>
                <p className='text-white mb-3'>Date: <span className='font-semibold'> {new Date(props.tournaments.date).toString().slice(4,15)} </span> </p>
              </div>
              <div className='flex gap-1'>
                <i className="material-icons text-red-500">app_registration</i>
                <p className='text-white mb-3'>Daftar: <span className='font-semibold'> {`Rp. ${props.tournaments.registration_fee.toLocaleString('id')}`} </span> </p>
              </div>
              
            </div>
            {/* section 2 */}
            <div className=''>
              <div className='flex gap-1'>
                <i className="material-icons text-red-500">schedule</i>
                <p className='text-white mb-3'>Time: <span className='font-semibold'> {props.tournaments.time} </span></p>
              </div>
              <div className='flex gap-1'> 
                <i className="material-icons text-red-500">emoji_events</i>
                <p className='text-white mb-3'>Juara 1: <span className='font-semibold'> {`Rp. ${props.tournaments.first_winner.toLocaleString('id')}`} </span></p>
              </div>
            </div>
            {/* section 3 */}
            <div className=''>
              <div className='flex gap-1'>
                <i className="material-icons text-red-500">home</i>
                <p className='text-white mb-3'>Venue: <span className='font-semibold'> {props.tournaments.venue} </span></p>
              </div>
              
              <div className='flex gap-1'> 
                <i className="material-icons text-red-500">emoji_events</i>
                <p className='text-white mb-3'>Juara 2: <span className='font-semibold'> {`Rp. ${props.tournaments.runner_up.toLocaleString('id')}`} </span></p>
              </div>
            </div>
            <div>
              <div className='flex gap-1'>
                <i className="material-icons text-red-500">groups</i>
                <p className='text-white mb-3'>Slot: <span className='font-semibold'>{filterTeamTournaments(props.joinedTeams, props.tournaments.id).length} / {props.tournaments.slot} </span></p>
              </div>
              
              <div className='flex gap-1'> 
                <i className="material-icons text-red-500">emoji_events</i>
                <p className='text-white mb-3'>Juara 3: <span className='font-semibold'> {`Rp. ${props.tournaments.third_winner.toLocaleString('id')}`} </span></p>
              </div>
            </div>
          </div>
          <div className='mt-3 bg-yellow-500'>
            <div className='flex justify-center gap-1'>
              <i className="material-icons">paid</i>
              <p className='font-semibold text-center text-md'>Total Prize: <span className='' >{`Rp. ${props.tournaments.total_prize.toLocaleString('id')}`}</span></p>
            </div>
            
          </div>
        </div>
      </div>
      <div className='flex justify-end'>
        <div className="flex justify-evenly gap-3 bg-gray-800 w-96 rounded-bl-md rounded-br-md py-1 shadow-md">
          <button className='text-yellow-400 font-semibold text-md'
            onClick={() => setShowModalStatusTournament(true)}>Status
          </button>
          <button className='text-yellow-400 font-semibold text-md'
            onClick={() => setShowModalJoinedTeam(true)}>Joined Team
          </button>
          <button className='text-blue-500 font-semibold text-md' 
            onClick={() => handleGetDetailTournament(props.tournaments.id)}>Edit
          </button>
          <button className='text-red-500 font-semibold text-md'
            onClick={() => handleDeleteTournament(props.tournaments.id)}>Delete
          </button>
        </div>
      </div>

      {/* Modal For Edit Tournaments */}
      {showModalEdit ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-scroll fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-full my-6 mx-auto max-w-3xl">
              {/*content*/}
              {/* modal-height in class below configure in index.css */}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full modal-height bg-white outline-none focus:outline-none mt-auto">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Edit Tournament
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModalEdit(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                {
                  !loadingDetailTournament ?
                <div className="relative p-6 flex-auto overflow-y-auto">
                  <form action="" className='flex justify-center gap-5 flex-wrap'>
                    <div className="mb-3">
                      <label className='text-gray-400'>Tournament Name:</label> <br/>
                      <input 
                        className='w-80 rounded-xl px-3 border-b-2' 
                        type="text"
                        defaultValue={detailsTournament.name}
                        onChange={onChangeTournamentName}
                        />
                    </div>
                    <div className="mb-3">
                      <label className='text-gray-400'>Tournament Date:</label> <br/>
                      <input 
                        className='w-80 rounded-xl px-3 border-b-2' 
                        type="date"
                        defaultValue={detailsTournament.date}
                        onChange={onChangeTournamentDate}
                        />
                    </div>
                    <div className="mb-3">
                      <label className='text-gray-400'>Tournament Time:</label> <br/>
                      <input 
                        className='w-80 rounded-xl px-3 border-b-2' 
                        type="time"
                        defaultValue={detailsTournament.time}
                        onChange={onChangeTournamentTime}
                        />
                    </div>
                    <div className="mb-3">
                      <label className='text-gray-400'>Game:</label> <br/>
                      <select className='w-80 rounded-xl px-3 border-b-2' name="" id=""
                        defaultValue={detailsTournament.GameId}  
                        onChange={onChangeTournamentGameId} 
                      >
                        <option value="">--Select--</option>
                        <option value="1">Mobile Legend</option>
                        <option value="2">PUBG</option>
                        <option value="3">Free Fire</option>
                        <option value="4">Call of Duty</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label className='text-gray-400'>Venue:</label> <br/>
                      <input 
                        className='w-80 rounded-xl px-3 border-b-2' 
                        type="text"
                        defaultValue={detailsTournament.venue}
                        onChange={onChangeTournamentVenue}
                        />
                    </div>
                    <div className="mb-3">
                      <label className='text-gray-400'>Registration fee:</label> <br/>
                      <input 
                        className='w-80 rounded-xl px-3 border-b-2' 
                        type="number"
                        defaultValue={detailsTournament.registration_fee}
                        onChange={onChangeTournamentRegistrationFee}
                        />
                    </div>
                    <div className="mb-3">
                      <label className='text-gray-400'>First Winner:</label> <br/>
                      <input 
                        className='w-80 rounded-xl px-3 border-b-2' 
                        type="number"
                        defaultValue={detailsTournament.first_winner}
                        onChange={onChangeTournamentFirstWinner}
                        />
                    </div>
                    <div className="mb-3">
                      <label className='text-gray-400'>Runner Up:</label> <br/>
                      <input 
                        className='w-80 rounded-xl px-3 border-b-2' 
                        type="number"
                        defaultValue={detailsTournament.runner_up}
                        onChange={onChangeTournamentRunnerUp}
                        />
                    </div>
                    <div className="mb-3">
                      <label className='text-gray-400'>Third Winner:</label> <br/>
                      <input 
                        className='w-80 rounded-xl px-3 border-b-2' 
                        type="number"
                        defaultValue={detailsTournament.third_winner}
                        onChange={onChangeTournamentThirdWinner}
                        />
                    </div>
                    <div className="mb-3">
                      <label className='text-gray-400'>Total Prize:</label> <br/>
                      <input 
                        className='w-80 rounded-xl px-3 border-b-2' 
                        type="number"
                        defaultValue={detailsTournament.total_prize}
                        onChange={onChangeTournamentTotalPrize}
                        />
                    </div>
                    <div className="mb-3">
                      <label className='text-gray-400'>Banner Poster:</label> <br/>
                      <input 
                        className='w-80 rounded-xl px-3 border-b-2' 
                        type="text"
                        defaultValue={detailsTournament.banner_url}
                        onChange={onChangeTournamentBannerPoster}
                        />
                    </div>
                    <div className="mb-3">
                      <label className='text-gray-400'>Slot:</label> <br/>
                      <input 
                        className='w-80 rounded-xl px-3 border-b-2' 
                        type="number"
                        defaultValue={detailsTournament.slot}
                        onChange={onChangeTournamentSlot}
                        />
                    </div>
                    <div className="mb-3">
                      <label className='text-gray-400'>Category:</label> <br/>
                      <input 
                        className='w-80 rounded-xl px-3 border-b-2' 
                        type="text"
                        defaultValue={detailsTournament.category}
                        onChange={onChangeTournamentCategory}
                        />
                    </div>
                    <div className="mb-3">
                      <label className='text-gray-400'>Publisher:</label> <br/>
                      <input 
                        className='w-80 rounded-xl px-3 border-b-2' 
                        type="text"
                        defaultValue={detailsTournament.publisher}
                        onChange={onChangeTournamentPublisher}
                        />
                    </div>
                  </form>
                </div> : <p>Loading...</p>
                }
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModalEdit(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-green-500 text-white active:bg-yellow-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => handleEditTournament(detailsTournament.id)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-60 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      
      {/* Modal For Showing Joined Team */}
      {showModalJoinedTeam ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col  modal-width modal-height bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    JOINED TEAM
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModalJoinedTeam(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                
                <div className="relative p-6 flex-auto overflow-y-auto">
                  { filterTeamTournaments(props.joinedTeams, props.tournaments.id).length !== 0 ?
                  
                    filterTeamTournaments(props.joinedTeams, props.tournaments.id).map((team)=> (
                      <NavLink to={`/detail-teamtournament/${team.Team.id}/${props.tournaments.id}`} key={team.Team.id}>
                      <div className='bg-gray-800 mb-3 w-96 rounded' >
                        <div className='flex'>
                          <div>
                            <img className='w-28' src={dummyTeamLogo} alt=""/>
                          </div>
                          <div className='my-auto mx-auto'>
                            <p className='text-white text-xl font-bold text-center mb-3 mx-auto'>{team.Team.team_name}</p>
                            {
                              team.status === 'requested' ?
                              <p className='font-bold text-center bg-yellow-500 rounded-xl w-24 mx-auto'>{team.status}</p> :
                              <p className='text-center bg-green-500 font-bold rounded-xl w-24 mx-auto'>{team.status}</p>
                            }
                          </div>
                        </div>
                      </div>
                      </NavLink> 

                    )):<p className='text-xl font-bold text-center text-gray-300'>No Teams Joined yet</p>
                  }
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModalJoinedTeam(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-60 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      
      {/* Modal for Change Status Tournaments */}
      {showModalStatusTournament ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col  modal-width bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-xl font-semibold">
                    CHANGE STATUS TOURNAMENT
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModalStatusTournament(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <form action="" className='w-96'>
                      <select name="" id="" onChange={onChangeTournamentStatus} className='w-96'>
                        <option value=''>--Select--</option>
                        <option value="Soon">Soon</option>
                        <option value="On Going">On Going</option>
                        <option value="Done">Done</option>
                      </select>
                    </form>
                  </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModalStatusTournament(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-green-500 text-white active:bg-yellow-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => handleEditStatusTournament(props.tournaments.id)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-60 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  )
}

export default TournamentCard