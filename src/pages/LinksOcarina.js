import React, { Component } from 'react'
import Typist from 'react-typist'
require('dotenv').config()
const API_KEY = 'AIzaSyBl0mm52UhMqMsVGIqj-k7al-C96YJc684'
const channelId= 'UCEFPJ3Qc_0tvKQBYDO-UKvQ'
const result = 25


let finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${result}`

class LinkOcarina extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      resultyt: []
    }
  }
    componentDidMount(){
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

    return (
      <div className="link-header"><h1 className="link-header-h1">TEAM LINK</h1>
        <div className="last-vids"><h3>Last 25 videos</h3></div>
          <div  className="link-stats"><Typist cursor={{hideWhenDone:true}}>
            I need help with stats to go here........Im going to put youtube info but waiting till I get  the record for W/L
            </Typist> 
            <div className="yotube-link">
                {
                this.state.resultyt.map((link, i) => {
                  console.log(link)
                  let frame = <div key={i} className="youtube"><iframe title="linkO" width="560" height="315" src={link} frameBorder="0" allowFullScreen></iframe></div>
                  return frame
                })
                }  
            </div>
          </div>
      </div>
    )
  } 
}

export default LinkOcarina

