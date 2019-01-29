import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import '../analytics.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class EmailSent extends Component {
    render() {
        return (
            <div className="badge-container">
                <div className="badge" id="emailBad">
                    <div >
                        <FontAwesomeIcon className="icon" icon="envelope" />
                    </div>
                </div>
                <div className="stats">
                    <div className="stat">{this.props.emailCount}</div>
                    <div className="stat-text">Emails Sent</div>
                </div>
            </div>
        )
    }
}

export default EmailSent