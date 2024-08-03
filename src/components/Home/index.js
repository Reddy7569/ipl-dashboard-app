// Write your code here
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {Component} from 'react'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {isLoading: true, iplData: []}

  componentDidMount() {
    this.getIplData()
  }

  getIplData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updateIplData = data.teams.map(each => ({
      name: each.name,
      id: each.id,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({iplData: updateIplData, isLoading: false})
  }

  renderTeamsData = () => {
    const {iplData} = this.state
    return (
      <ul className="ipl_teams">
        {iplData.map(each => (
          <TeamCard key={each.id} teamsData={each} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    <div data-testid="loader" className="loader-container">
      <Loader type="Rings" color="#00BFFF" height={80} width={80} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="main_container">
        <div className="heading_container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl_logo"
          />
          <h1>IPL Dashboard</h1>
        </div>

        {isLoading ? this.renderLoader() : this.renderTeamsData()}
      </div>
    )
  }
}

export default Home
