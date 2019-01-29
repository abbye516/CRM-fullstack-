import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class NewClients extends Component {
    render() {
        return (
            <div className="badge-container">
                <div className="badge" id="clientBad">
                    <div>
                        <FontAwesomeIcon className="icon" id="chart" icon="chart-line" />
                    </div>
                </div>
                <div className="stats">
                    <div className="stat">14</div>
                    <div className="stat-text">New Clients</div>
                </div>
            </div>
        )
    }
}

export default NewClients