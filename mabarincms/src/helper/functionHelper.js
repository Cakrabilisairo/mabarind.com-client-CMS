export function filterTeamTournaments (data, TournamentId) {
  const  result = data.filter(data => data.TournamentId === TournamentId)
  return result
}

