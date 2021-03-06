import React, { Component } from 'react';
import NewClients from './Badges/Newclients';
import EmailSent from './Badges/EmailSent';
import OutstandingClient from './Badges/OutstandingClients';
import HottestCountry from './Badges/HottestCountry';

// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


class Badges extends Component {

    render(){
        return(
            
            <div className="allBadges-container">
                <OutstandingClient outstandingClients={this.props.outstandingClients} />
                <HottestCountry hottestCountry={this.props.hottestCountry}/>
                <NewClients />
                <EmailSent emailCount= {this.props.emailCount}/>
            </div>
        )
    }
}

export default Badges