// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamsData} = props
  const {name, id, teamImageUrl} = teamsData
  return (
    <Link to={`/team-matches/${id}`} className="link_item">
      <li className="each_ipl_team">
        <img src={teamImageUrl} alt={name} className="ipl_image" />
        <p>{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
