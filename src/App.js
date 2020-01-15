import React, { Component } from 'react';
import './App.css';
import LinkOcarina from './components/LinksOcarina';
import Rargh from './components/Rargh'
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>What team are you</h2>
        </div>
        <LinkOcarina/>
        <Rargh/>
      </div>
    )
  }
}
 

export default App;
