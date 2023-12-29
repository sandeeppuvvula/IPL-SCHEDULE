// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    teamUrl: [],
    latestMatchDetails: [],
    recentMatchesData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamDetails()
  }

  getTeamDetails = async () => {
    console.log(this.props)
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/:${id}`)
    const data = await response.json()
    console.log(data)
    const formattedUrl = {
      teamBannerUrl: data.team_banner_url,
    }

    const updatedLatestMatchDetails = {
      id: data.latest_match_details.id,
      competingTeam: data.latest_match_details.competing_team,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      date: data.latest_match_details.date,
      firstInnings: data.latest_match_details.first_innings,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      matchStatus: data.latest_match_details.match_status,
      result: data.latest_match_details.result,
      secondInnings: data.latest_match_details.second_innings,
      umpires: data.latest_match_details.umpires,
      venue: data.latest_match_details.venue,
    }

    const updatedRecentMatchesData = data.recent_matches.map(eachMatch => ({
      rId: eachMatch.id,
      rDate: eachMatch.date,
      rFirstInnings: eachMatch.first_innings,
      rSecondInnings: eachMatch.second_innings,
      rCompetingTeam: eachMatch.competing_team,
      rCompetingTeamLogo: eachMatch.competing_team_logo,
      rManOfTheMatch: eachMatch.man_of_the_match,
      rMatchStatus: eachMatch.match_status,
      rResult: eachMatch.result,
      rUmpires: eachMatch.umpires,
      rVenue: eachMatch.venue,
    }))
    this.setState({
      latestMatchDetails: updatedLatestMatchDetails,
      recentMatchesData: updatedRecentMatchesData,
      teamUrl: formattedUrl,
      isLoading: false,
    })
  }
  

  render() {
    const {
      teamUrl,
      latestMatchDetails,
      recentMatchesData,
      isLoading,
    } = this.state
    const {teamBannerUrl} = teamUrl
    const {id} = latestMatchDetails

    return (
      <div className="team-match-background-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div>
            <img
              className="team-banner"
              src={teamBannerUrl}
              alt="team banner"
            />
            <h5>Latest Matches</h5>
            <LatestMatch key={id} latestMatchDetails={latestMatchDetails} />
            <ul className="recent-matches-flex">
              {recentMatchesData.map(eachMatch => (
                <MatchCard key={eachMatch.rId} eachMatch={eachMatch} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
