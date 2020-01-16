import React from 'react'

const Home = props => {
  const redirectToLink = () => props.history.push('/linksocarina')
  const redirectToRargh = () => props.history.push('/rargh')
  
return (
    <>
    <div className= "home">
      <h1>Which team are you</h1>
      <div className="button-div">
        <button 
        className="link-home"
        onClick={redirectToLink}
        >
        TEAM LINK
        </button>
        <button
        className="rargh-home"
        onClick={redirectToRargh}
        >TEAM RARGH
        </button>
      </div>
    </div>
    </>
  )
}

export default Home
