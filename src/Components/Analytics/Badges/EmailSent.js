import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../analytics.css'
class EmailSent extends Component {
    render() {
        return (
            <div className="badge-container">
                <div className="badge" id="emailBadge">
                    <div >
                        <FontAwesomeIcon className="icon" icon="chart-line" />
                    </div>
                </div>

                <div className="stats">
                    <div className="number">14</div>
                    <div className="text">New September Clients</div>
                </div>
            </div>
        )
    }
}

export default EmailSent