// Write your code here
import './index.css'

const MatchCard = props => {
  const {eachMatch} = props
  return (
    <li className="recent-match-item">
      <img
        src={eachMatch.rCompetingTeamLogo}
        alt="competing team {competing_team}"
      />
      <p>{eachMatch.rCompetingTeam}</p>
      <p>{eachMatch.rResult}</p>
      <p>{eachMatch.rMatchStatus}</p>
    </li>
  )
}
export default MatchCard
