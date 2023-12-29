// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    secondInnings,
    umpires,
    venue,
    result,

    manOfTheMatch,
  } = latestMatchDetails
  return (
    <div className="card">
      <div className="latest-match-item">
        <p>{competingTeam}</p>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <img
        className="latest-competing-team-logo"
        src={competingTeamLogo}
        alt="latest match {competing_team}"
      />
      <div className="latest-match-item">
        <p>First Innings :</p>
        <p>{firstInnings}</p>
        <p>Second Innings :</p>
        <p>{secondInnings}</p>
        <p>Man of The Match :</p>
        <p>{manOfTheMatch}</p>
        <p>Umpires :</p>
        <p>{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
