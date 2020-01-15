import React, { Component } from 'react'
require('dotenv').config()


const API_KEY = process.env.REACT_APP_API_KEY
const channelId= 'UCepFoY2QjSR5SlMnKGlzJtg'
const result = 10




let finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${result}`

class Rargh extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      resultyt: []
    }
    this.clicked = this.clicked.bind(this)
  }
  clicked(){
    fetch(finalURL)
    .then((response) => response.json())
    .then((responseJson) => {
      // console.log(responseJson)
      const resultyt = responseJson.items.map(obj => "https://www.youtube.com/embed/" + obj.id.videoId);
      this.setState({resultyt});
     
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    // console.log(finalURL)
    console.log(this.state.resultyt)
    return (
      <div>
        <button onClick={this.clicked}>Team Rargh</button>
          {
          this.state.resultyt.map((link, i) => {
            console.log(link)
            let frame = <div key={i} className="youtube"><iframe title="Rargh" width="560" height="315" src={link} frameBorder="0" allowFullScreen></iframe></div>
            return frame
          })
          }
     </div>
    )
  }
}

export default Rargh

