export function setLoadingTournaments (payload) {
  return {type: 'TOURNAMENT/SETLOADINGTOURNAMENTS', payload}
}
export function setTournaments (payload) {
  return {type: 'TOURNAMENT/SETTOURNAMENTS', payload}
}
export function setDetailTournament (payload) {
  return {type: 'TOURNAMENT/SETDETAILTOURNAMENT', payload}
}
export function setLoadingDetailTournament (payload) {
  return {type: 'TOURNAMENT/SETLOADINGDETAILTOURNAMENT', payload}
}

export function fetchTournaments (payload) {
  return async (dispatch) => {
    try {
      dispatch(setLoadingTournaments(true))
      const response = await fetch(payload)
      const data = await response.json()
      dispatch(setTournaments(data))
      dispatch(setLoadingTournaments(false))
    }
    catch(err) {
      console.log(err)
    }
  }
}

export function  addTournaments (apiUrl, dataTournament) {
  return async (dispatch) => {
    try{
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMsInVzZXJuYW1lIjoiYWRtaW4iLCJlbWFpbCI6ImNha3JhLmJpbGlzYWlybzAzQGdtYWlsLmNvbSIsImdlbmRlciI6ImFueSIsInBob25lX251bWJlciI6IjA4MzEyNzE1MjA0OSIsImltYWdlX3VybCI6IiIsImlhdCI6MTYxODk2ODk2MH0.-JiPGnDGnISo2IFLxWE8yKF-HptjmDGESB3YK715kr4',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataTournament)
      })
      await response.json()
      dispatch(fetchTournaments(apiUrl))
    }
    catch(err) {
      console.log(err)
    }
  }
}

export function deleteTournament (apiUrl, id) {
  return async (dispatch) => {
    try {
      const response = await fetch(`${apiUrl}/${id}`,{
        method: 'DELETE',
        headers: {
          access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMsInVzZXJuYW1lIjoiYWRtaW4iLCJlbWFpbCI6ImNha3JhLmJpbGlzYWlybzAzQGdtYWlsLmNvbSIsImdlbmRlciI6ImFueSIsInBob25lX251bWJlciI6IjA4MzEyNzE1MjA0OSIsImltYWdlX3VybCI6IiIsImlhdCI6MTYxODk2ODk2MH0.-JiPGnDGnISo2IFLxWE8yKF-HptjmDGESB3YK715kr4',
          'Content-Type': 'application/json'
        },
      })
      await response.json()
      await dispatch(fetchTournaments(apiUrl))
    }
    catch(err) {
      console.log(apiUrl)
      console.log(err)
    }
  }
}

export function detailTournament (apiUrl, id) {
  return async (dispatch) => {
    try{
      dispatch(setLoadingDetailTournament(true))
      const response = await fetch(`${apiUrl}/${id}`)
      const data = await response.json()
      dispatch(setDetailTournament(data))
      dispatch(setLoadingDetailTournament(false))
    }
    catch(err) {
      console.log(err)
    }
  }
}

export function editTournament (apiUrl, id, dataTournament) {
  return async (dispatch) => {
    try{
      const response = await fetch(`${apiUrl}/${id}`, {
        method: 'PUT',
        headers: {
          access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMsInVzZXJuYW1lIjoiYWRtaW4iLCJlbWFpbCI6ImNha3JhLmJpbGlzYWlybzAzQGdtYWlsLmNvbSIsImdlbmRlciI6ImFueSIsInBob25lX251bWJlciI6IjA4MzEyNzE1MjA0OSIsImltYWdlX3VybCI6IiIsImlhdCI6MTYxODk2ODk2MH0.-JiPGnDGnISo2IFLxWE8yKF-HptjmDGESB3YK715kr4',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataTournament)
      })
      await response.jason
      dispatch(fetchTournaments(apiUrl))
    }
    catch(err) {
      console.log(err)
    }
  }
}

export function editStatusTournament (apiUrl, id, dataStatus) {
  return async (dispatch) => {
    const response = await fetch(`${apiUrl}/${id}`, {
      method: 'PATCH',
        headers: {
          access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMsInVzZXJuYW1lIjoiYWRtaW4iLCJlbWFpbCI6ImNha3JhLmJpbGlzYWlybzAzQGdtYWlsLmNvbSIsImdlbmRlciI6ImFueSIsInBob25lX251bWJlciI6IjA4MzEyNzE1MjA0OSIsImltYWdlX3VybCI6IiIsImlhdCI6MTYxODk2ODk2MH0.-JiPGnDGnISo2IFLxWE8yKF-HptjmDGESB3YK715kr4',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataStatus)
    })
    await response.json()
    dispatch(fetchTournaments(apiUrl))
  }
}