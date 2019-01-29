import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class OutstandingClient extends Component {
    render(){
        return(
            <div className="badge-container">
            <div className="badge" id="clientBad">
                <div >
                    <FontAwesomeIcon className="icon" icon="user" />
                </div>
            </div>
            <div className="stats">
                <div className="stat">{this.props.outstandingClients}</div>
                <div className="stat-text">Outstanding Client</div>
            </div>
        </div>
        )
    }
}

export default OutstandingClient