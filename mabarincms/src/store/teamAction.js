export function setTeams (payload) {
  return {type: 'TEAM/SETTEAMS', payload}
}
export function setDetailTeam(payload) {
  return {type: 'TEAM/SETDETAILTEAM', payload}
}
export function setLoadingTeams (payload) {
  return {type: 'TEAM/SETLOADINGTEAMS', payload}
}
export function setLoadingDetailTeam(payload) {
  return {type: 'TEAM/SETLOADINGDETAILTEAM', payload}
}

export function fetchTeams(apiUrl) {
  return async (dispatch) => {
    dispatch(setLoadingTeams(true))
    const response = await fetch(apiUrl)
    const data = await response.json()
    dispatch(setTeams(data))
    dispatch(setLoadingTeams(false))
  }
}

export function fetchDetailTeam (apiUrl) {
  return async (dispatch) => {
    dispatch(setLoadingDetailTeam(true))
    const response = await fetch(apiUrl)
    const data = await response.json()
    dispatch(setDetailTeam(data))
    dispatch(setLoadingDetailTeam(false))
  }
}