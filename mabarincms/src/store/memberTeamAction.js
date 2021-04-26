export function setMemberTeamList (payload) {
  return {type: 'MEMBERTEAM/SETMEMBERTEAMLIST', payload}
}
export function setLoadingMemberTeamList (payload) {
  return {type: 'MEMBERTEAM/SETLOADINGMEMBERTEAMLIST'}
}

export function fetchMemberTeamList (apiUrl) {
  return async (dispatch) => {
    try{
      dispatch(setLoadingMemberTeamList(true))
      const response = await fetch(apiUrl,{
        headers: {
          access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMsInVzZXJuYW1lIjoiYWRtaW4iLCJlbWFpbCI6ImNha3JhLmJpbGlzYWlybzAzQGdtYWlsLmNvbSIsImdlbmRlciI6ImFueSIsInBob25lX251bWJlciI6IjA4MzEyNzE1MjA0OSIsImltYWdlX3VybCI6IiIsImlhdCI6MTYxODk2ODk2MH0.-JiPGnDGnISo2IFLxWE8yKF-HptjmDGESB3YK715kr4',
          'Content-Type': 'application/json'
        }
      })
      const data = await response.json()
      dispatch(setMemberTeamList(data))
      dispatch(setLoadingMemberTeamList(false))
    }
    catch(err) {
      console.log(err)
    }
  }
}
 