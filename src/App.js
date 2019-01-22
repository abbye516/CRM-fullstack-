import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';

// import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheck,faWindowClose, faTimesCircle, faChartLine} from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import Actions from './Components/Actions/Actions';
import Analytics from './Components/Analytics/Analytics';
import Clients from './Components/Clients/Clients';
import Landing from './Components/Landing/Landing';
library.add(faCheck)
library.add(faWindowClose)
library.add(faTimesCircle)
library.add(faChartLine)


class App extends Component {
  constructor() {
    super()
    this.state = {
      currentPage : ""
    }
  }
  pageStatus = (event) =>{
    let page = event.target.textContent
    console.log(page)
    this.setState({currentPage : page})
  }
  render() {
    return (
      <Router>
        <div className="App">
          <div className="nav-bar">
            <Link to="/clients"> <div onClick={this.pageStatus} style={this.state.currentPage === "Client" ? { backgroundColor: "green" } : null} 
            className="current">Clients</div></Link>
            <Link to="/actions"> <div className="current">Actions</div></Link>
            <Link to="/analytics"> <div className="current">Analytics</div></Link>
          </div>
          <Route path="/" exact component={Landing} />
          <Route path="/actions" exact component={Actions} />
          <Route path="/clients" exact render={({ match }) => <Clients match={match} />} />

          <Route path="/analytics" exact component={Analytics} />
        </div>
      </Router>
    );
  }
}

export default App;
