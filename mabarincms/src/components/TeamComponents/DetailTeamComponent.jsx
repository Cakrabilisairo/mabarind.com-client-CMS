import React, { useState } from 'react'
import dummyTeamLogo from '../../assets/3.png'
import dummyTrophy from '../../assets/trophy.png'
import personSkeleton from '../../assets/personSkeleton.png'
import {NavLink} from 'react-router-dom'

function DetailTeamComponent (props) {
  const [showModalTeamMember, setShowModalTeamMember] = useState(false)

  return (
    <>
      <div className='mx-14 my-20 bg-gray-800 rounded-l-full shadow-md'>
        <div className='flex gap-10'>
          <div>
            <img className='w-96 h-96 rounded-full' src={dummyTeamLogo} alt=""/>
          </div>
          <div className='mt-10'>
            <div className=''>
              <p className='text-white font-bold text-3xl mb-2'>{props.detailTeam.team_name}</p>
              <div>
                <p className="text-white mb-5">Join since: {new Date(props.detailTeam.createdAt).toString().slice(0,15)} </p>
                <p className='text-white'> Total Wins: - </p>
                <p className='text-white'>Total Lose: -</p>
                <p className='text-white'>Win Rate: -</p>
                <p className='text-white'>Total Tournament participating: -</p>
                <p className='text-white'>Total Member: -</p>
              </div>

              <div className='mt-10 text-center flex gap-3'>
                {/* Action = Popup modal => Showing all members on that Team and the lists is clickable for details member */}
                <button className='bg-yellow-400 px-3 py-2 font-semibold rounded shadow hover:bg-yellow-600'
                  onClick={()=> setShowModalTeamMember(true)}
                  >Peek Member</button>
              </div>
            </div>
          </div>

          {/* Give a condition like bronze trophy if total wins <10 silver if totalwins >10 <20 etc */}
          <div className='my-12 mx-28'>
            <img className='w-44 mb-3' src={dummyTrophy} alt=""/>
            <p className='text-white font-bold text-center'>BRONZE</p>
          </div>
        </div>
      </div>

      {/* Modal for peek member */}
      {showModalTeamMember ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col  modal-width modal-height bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-2xl font-semibold">
                    Member of {props.detailTeam.team_name}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModalTeamMember(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                
                <div className="relative p-6 flex-auto overflow-y-auto">
                  {
                    props.listMember.map((member)=>(
                      // please make animation like pokemon card for this list
                      <NavLink to={`/detail-member/${member.MemberId}`} key={member.Member.id}>
                        <div className='mb-2 flex shadow-md'>
                          <div className=''>
                            <img className="w-20" src={personSkeleton} alt=""/>
                          </div>
                          <div className='w-full text-center  mt-1'>
                            <p className ='font-semibold text-xl'>{member.Member.username}</p>
                            <p>{member.role}</p>
                          </div>
                        </div>
                      </NavLink>
                      
                    ))
                  }
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModalTeamMember(false)}
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
    </>
  )
}

export default DetailTeamComponent