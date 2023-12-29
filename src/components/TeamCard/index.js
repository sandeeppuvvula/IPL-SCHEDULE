import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamCard} = props
  const {id, name, teamImageUrl} = teamCard
  return (
    <Link to={`/team-matches/${id}`} className="team-card">
      <div className="team-card-content">
        <img className="team-image" src={teamImageUrl} alt={`${name}`} />
        <p>{name}</p>
      </div>
    </Link>
  )
}
export default TeamCard
