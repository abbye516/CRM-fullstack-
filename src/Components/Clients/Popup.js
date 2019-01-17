import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './client.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios';


class PopupDiv extends Component {
    async updateUsers() {
        return await axios.put('http://localhost:7000/clients/:')

    }
    render() {
        return (
            <div className={this.props.showPopup ? 'popup' : 'nopop'}>
                <div className="form">
                    <div classname="close" onClick={this.props.updatePop}><FontAwesomeIcon icon="times-circle" /></div>
                    <div className="divLabels">
                        <label>
                            Name:
                            <input type="text" placeholder="name" />
                        </label>
                        <label>
                            Surname:
                            <input type="text" placeholder="surname" />
                        </label>
                        <label>
                            Country
                        <input type="text" placeholder="country" />
                        </label>
                    </div>
                    <button>Update</button>
                </div>
            </div>
        )
    }
}

export default PopupDiv