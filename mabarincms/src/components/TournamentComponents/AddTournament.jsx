import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addTournaments} from '../../store/tournamentAction'

function AddTournament () {
  const dispatch = useDispatch()
  const tournamentApiUrl = useSelector(state => state.apiUrl.tournamentApiUrl)
  const [tournamentName, setTournamentName] = useState('')
  const [tournamentGameId, setTournamentGameId] = useState('0')
  const [tournamentDate, setTournamentDate] = useState('')
  const [tournamentTime, setTournamentTime] = useState('')
  const [tournamentVenue, setTournamentVenue] = useState('')
  const [tournamentRegistrationFee, setTournamentRegistrationFee] = useState(0)
  const [tournamentFirstWinner, setTournamentFirstWinner] = useState(0)
  const [tournamentRunnerUp, setTournamentRunnerUp] = useState(0)
  const [tournamentThirdWinner, setTournamentThirdWinner] = useState(0)
  const [tournamentTotalPrize, setTournamentTotalPrize] = useState(0)
  const [tournamentBannerPoster, setTournamentBannerPoster] = useState('')
  const [tournamentSlot, setTournamentSlot] = useState(0)
  const [tournamentCategory, setTournamentCategory] = useState('')
  const [tournamentPublisher, setTournamentPublisher] = useState('')
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
    publisher: tournamentPublisher,
    status_tournament: 'soon'
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

  function addTournament(e) {
    e.preventDefault()
    dispatch(addTournaments(tournamentApiUrl, dataTournament))
    e.target.reset()
  }

  return (
    <div className='bg-gray-800 lg:w-80 lg:h-full'>
      <form  className="px-8 pt-5 pb-5" 
      action=""
      onSubmit={addTournament}>
        <div className="mb-3">
          <label className='text-white'>Tournament Name:</label> <br/>
          <input 
            className='w-64 rounded-xl px-3' 
            type="text"
            onChange={onChangeTournamentName}/>
        </div>

        <div className="mb-3">
          <label className='text-white'>Game:</label> <br/>
          <select className='w-64 rounded-xl px-3' name="" id=""  onChange={onChangeTournamentGameId} >
            <option value="">--Select--</option>
            <option value="1">Mobile Legend</option>
            <option value="2">PUBG</option>
            <option value="3">Free Fire</option>
            <option value="4">Call of Duty</option>
          </select>
        </div>

        <div className="mb-3">
          <label className='text-white'>Tournament Date:</label> <br/>
          <input className='w-64 rounded-xl px-3' 
            type="date"
            onChange={onChangeTournamentDate}/>
        </div>

        <div className="mb-3">
          <label className='text-white'>Tournament Time:</label> <br/>
          <input className='w-64 rounded-xl px-3' 
            type="time"
            onChange={onChangeTournamentTime}/>
        </div>

        <div className="mb-3">
          <label className='text-white'>Venue:</label> <br/>
          <input className='w-64 rounded-xl px-3' 
          type="text"
          onChange={onChangeTournamentVenue}/>
        </div>

        <div className="mb-3">
          <label className='text-white'>Registration Fee:</label> <br/>
          <input className='w-64 rounded-xl px-3' 
          type="number"
          onChange={onChangeTournamentRegistrationFee}/>
        </div>

        <div className="mb-3">
          <label className='text-white'>First Winner:</label> <br/>
          <input className='w-64 rounded-xl px-3' 
          type="number"
          onChange={onChangeTournamentFirstWinner}/>
        </div>

        <div className="mb-3">
          <label className='text-white'>Runner Up:</label> <br/>
          <input className='w-64 rounded-xl px-3' 
          type="number"
          onChange={onChangeTournamentRunnerUp}/>
        </div>

        <div className="mb-3">
          <label className='text-white'>Third Winner:</label> <br/>
          <input className='w-64 rounded-xl px-3' 
          type="number"
          onChange={onChangeTournamentThirdWinner}/>
        </div>

        <div className="mb-3">
          <label className='text-white'>Total Prize:</label> <br/>
          <input className='w-64 rounded-xl px-3' 
          type="number"
          onChange={onChangeTournamentTotalPrize}/>
        </div>

        <div className="mb-3">
          <label className='text-white'>Banner Poster:</label> <br/>
          <input className='w-64 rounded-xl px-3' 
          type="text"
          onChange={onChangeTournamentBannerPoster}/>
        </div>

        <div className="mb-3">
          <label className='text-white'>Slot:</label> <br/>
          <input className='w-64 rounded-xl px-3' 
          type="number"
          onChange={onChangeTournamentSlot}/>
        </div>

        <div className="mb-3">
          <label className='text-white'>Category:</label> <br/>
          <input className='w-64 rounded-xl px-3' type="text"
          onChange={onChangeTournamentCategory}/>
        </div>

        <div className="mb-3">
          <label className='text-white'>Tournament Publisher:</label> <br/>
          <input className='w-64 rounded-xl px-3' 
            type="text"
            onChange={onChangeTournamentPublisher}/>
        </div>

        <div className='text-center mt-5'>
          <button type='submit' className="rounded-lg bg-red-500 text-gray-800 font-bold px-5 uppercase border-red-800 border-t border-b border-r py-2">Add Tournament</button>
        </div>
      </form>
    </div>
  )
}

export default AddTournament