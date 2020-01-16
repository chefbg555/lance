import React, { Component } from 'react';
import  {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css';
import Home from './pages/Home'
import LinksOcarina from './pages/LinksOcarina';
import Rargh from './pages/Rargh'

class App extends Component {
  render() {
    return(
    <BrowserRouter>
      <Switch>
        <Route exact path= "/" component={Home}/>
        <Route path= "/linksocarina" component={LinksOcarina}/>
        <Route path= "/rargh" component={Rargh}/>
      </Switch>
    </BrowserRouter>
    )
  }
}
 

export default App;
