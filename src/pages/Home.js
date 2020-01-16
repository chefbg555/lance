import React from 'react'
import rargh from '../images/rargh.png'
import link from '../images/link.png'
import ThePoll from '../components/Poll'
const Home = props => {
  const redirectToLink = () => props.history.push('/linksocarina')
  const redirectToRargh = () => props.history.push('/rargh')
  
return (
    <>
    <h1 className="home-header">WHICH TEAM ARE YOU</h1>
    <div className= "home">
        <div className="link-button-div">
        <h1>TEAM LINK</h1>
          <button 
          className="link-home"
          onClick={redirectToLink}
          ><img src={link} onClick={redirectToLink}  alt="team link"/>
          </button>
          
        </div>
        <div className="rargh-button-div">
        <h1>TEAM RARGH</h1>
          <button
          className="rargh-home"
          onClick={redirectToRargh}
          ><img src={rargh} onClick={redirectToRargh}  alt="team rargh"/>
          </button>
          
        </div>
        <ThePoll/>
    </div>
    </>
  )
}

export default Home
