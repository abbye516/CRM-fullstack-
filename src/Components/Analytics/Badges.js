import React, { Component } from 'react';
import NewClients from './Badges/Newclients';
import EmailSent from './Badges/EmailSent';
import OutstandingClient from './Badges/OutstandingClients';
import HottestCountry from './Badges/HottestCountry';

// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


class Badges extends Component {

    render(){
        return(
            <div>
                <NewClients />
                <EmailSent />
                <OutstandingClient />
                <HottestCountry />
            </div>
        )
    }
}

export default Badges