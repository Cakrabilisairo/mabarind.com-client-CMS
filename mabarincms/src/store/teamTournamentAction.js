export function setTournamentTeam (payload) {
  return {type: 'TEAMTOURNAMENT/SETTOURNAMENTTEAM', payload}
}
export function setTeamTournaments (payload) {
  return {type: 'TEAMTOURNAMENT/SETTEAMTOURNAMENTS', payload}
}
export function setTeamTournamentLoading (payload) {
  return {type: 'TEAMTOURNAMENT/SETTEMTOURNAMENTLOADING', payload}
}
export function setDetailTeamTournament (payload) {
  return {type: 'TEAMTOURNAMENT/SETDETAILTEAMTOURNAMENT', payload}
}
export function setDetailTeamTournamentLoading (payload) {
  return {type: 'TEAMTOURNAMENT/SETDETAILTEAMTOURNAMENTLOADING', payload}
}

export function fetchTeamTournaments(payload) {
  return async (dispatch) => {
    try {
      dispatch(setTeamTournamentLoading(true))
      const response = await fetch(payload)
      const data = await response.json()
      dispatch(setTeamTournaments(data))
      dispatch(setTeamTournamentLoading(false))
    }
    catch(err) {
      console.log(err)
    }
  }
}

export function fetchDetailTeamTournament (payload) {
  return async (dispatch) => {
    try{
      dispatch(setTeamTournamentLoading(true))
      const response = await fetch(payload)
      const data = await response.json()
      dispatch(setDetailTeamTournament(data))
      dispatch(setTeamTournamentLoading(false))
    }
    catch(err) {
      console.log(err)
    }
  }
}

export function changeStatusTeamTournament (apiUrl, detailApiUrl) {
  return async (dispatch) => {
    try {
      const response = await fetch(apiUrl, {
        method: 'PATCH',
        headers: {
          access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMsInVzZXJuYW1lIjoiYWRtaW4iLCJlbWFpbCI6ImNha3JhLmJpbGlzYWlybzAzQGdtYWlsLmNvbSIsImdlbmRlciI6ImFueSIsInBob25lX251bWJlciI6IjA4MzEyNzE1MjA0OSIsImltYWdlX3VybCI6IiIsImlhdCI6MTYxODk2ODk2MH0.-JiPGnDGnISo2IFLxWE8yKF-HptjmDGESB3YK715kr4',
          'Content-Type': 'application/json'
        }
      })
      await response.json()
      dispatch(fetchDetailTeamTournament(detailApiUrl))
    }
    catch(err) {
      console.log(err)
    }
  }
}

