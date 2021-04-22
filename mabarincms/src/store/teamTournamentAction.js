export function setTournamentTeam (payload) {
  return {type: 'TEAMTOURNAMENT/SETTOURNAMENTTEAM', payload}
}
export function setTeamTournaments (payload) {
  return {type: 'TEAMTOURNAMENT/SETTEAMTOURNAMENTS', payload}
}
export function setTeamTournamentLoading (payload) {
  return {type: 'TEAMTOURNAMENT/SETTEMTOURNAMENTLOADING', payload}
}

export function fetchTeamTournaments(payload) {
  return async (dispacth) => {
    try {
      dispacth(setTeamTournamentLoading(true))
      const response = await fetch(payload)
      const data = await response.json()
      dispacth(setTeamTournaments(data))
      dispacth(setTeamTournamentLoading(false))
    }
    catch(err) {
      console.log(err)
    }
  }
}