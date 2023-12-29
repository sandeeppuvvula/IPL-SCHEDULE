// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamsList: [], isLoading: true}

  componentDidMount() {
    this.getTeams()
  }

  getTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    console.log(data)
    const formattedData = data.teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({teamsList: formattedData, isLoading: false})
  }

  render() {
    const {teamsList, isLoading} = this.state

    return (
      <div className="loader-container">
        {isLoading ? (
          <div>
            <Loader
              data-testid="loader"
              type="Oval"
              color="#ffffff"
              height={50}
              width={50}
            />
          </div>
        ) : (
          <div className="bg-container">
            <div className="title">
              <img
                className="logo"
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
              />
              <h1>IPL Dashboard</h1>
            </div>
            <ul className="team-card-flex">
              {teamsList.map(eachTeam => (
                <li className="listed-teams" key={eachTeam.id}>
                  <TeamCard teamCard={eachTeam} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Home
