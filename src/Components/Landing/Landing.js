import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Landing extends Component {

    render(){
        return(
            <div>
                Welcome to the CRM
                <Link to="/clients">
                <div>click here for client page</div>
                </Link>
                <Link to="/analytics">
                <div>click here for analytics page</div>
                </Link>
                <Link to="/actions">
                <div>click here for actions page</div>
                </Link>
            </div>
        )
    }
}

export default Landing