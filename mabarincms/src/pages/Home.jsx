import React from 'react'
import dummyTournament from '../assets/2.png'
import dummyTeams from '../assets/3.png'
import dummyMembers from '../assets/4.png'
import dummyBanner from '../assets/5.png'
import dummyGame from '../assets/6.png'
import {Link} from 'react-router-dom'

function Home () {
  return (
    <div className="mt-5">
      <div className="flex flex-wrap justify-center gap-5">
        {/* Tournaments */}
        <div id="Card" className="bg-gray-800 w-64 h-96 px-2 py-2 rounded-lg ">
          <img className="w-60 h-60" 
          src={dummyTournament} 
          alt="dummyTournament"/>
          <div className="mt-5 h-12">
            <p className="text-white">Active Tournament: N/A</p>
            <p className="text-white">Total Tournament: N/A</p>
          </div>
          <Link to='/tournaments'>
            <div className="bg-red-500 rounded-lg w-1/2 py-1 mx-auto mt-5">
              <p className="text-white font-bold text-center">MANAGE</p>
            </div>
          </Link>
        </div>

        {/* Member */}
        <div id="Card" className="bg-gray-800 w-64 h-96 px-2 py-2 rounded-lg ">
          <img className="w-60 h-60" 
          src={dummyMembers} 
          alt="dummyMembers"/>
          <div className="mt-5 h-12">
            <p className="text-white">Total Member: N/A</p>
          </div>
          <Link>
            <div className="bg-red-500 rounded-lg w-1/2 py-1 mx-auto mt-5">
              <p className="text-white font-bold text-center">MANAGE</p>
            </div>
          </Link>
        </div>

        {/* Teams */}
        <div id="Card" className="bg-gray-800 w-64 h-96 px-2 py-2 rounded-lg ">
          <img className="w-60 h-60" 
          src={dummyTeams} 
          alt="dummyTeams"/>
          <div className="mt-5 h-12">
            <p className="text-white">Total Team: N/A</p>
          </div>
          <Link>
            <div className="bg-red-500 rounded-lg w-1/2 py-1 mx-auto mt-5">
              <p className="text-white font-bold text-center">MANAGE</p>
            </div>
          </Link>
        </div>

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