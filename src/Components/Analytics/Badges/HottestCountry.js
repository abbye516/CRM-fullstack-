import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class HottestCountry extends Component {
    render() {
        console.log(this.props.hottestCountry.name)
        return (
            <div className="badge-container">
                <div className="badge" id="hotCountry">
                    <div >
                        <FontAwesomeIcon className="icon" icon="globe-americas" />
                    </div>
                </div>
                <div className="stats">
                    <div className="stat">{this.props.hottestCountry.name}</div>
                    <div className="stat-text">Hottest Country</div>
                </div>
            </div>
        )
    }
}

export default HottestCountry