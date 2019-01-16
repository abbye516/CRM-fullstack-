import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Moment from 'react-moment';
import DataBar from './Data-bar';
import './client.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Popup from "reactjs-popup";
import Axios from 'axios';


class Clients extends Component {
    constructor() {
        super()
        this.state = {
            showSignUp: false
        }
    }
    componentDidMount(){
        Axios
    }

    render() {
        let data = this.props.clientData
        // console.log(this.props.match)
        return (
            <div className="allClients">
                <div className="search-select">
                    <input placeholder="search client"></input>
                    <select className="drop-down">
                        <option value="name">Name</option>
                        <option value="surname">Surname</option>
                        <option value="email">Email</option>
                        <option value="country">Country</option>
                        <option value="first-contact">First Contact</option>
                        <option value="email">Email</option>
                        <option value="sold">Sold</option>
                        <option value="owner">Owner</option>
                    </select>
                </div>

                <DataBar />
                {data.map(m => {
                    return (
                        <Popup trigger={<div className="client" key={m.id}>
                            <div className="clientFN"> {m.name.split(' ')[0]} </div>
                            <div className="clientLN"> {m.name.split(' ')[1]} </div>
                            <div className="country">{m.country}</div>
                            <div className="firstContact">
                                <Moment format="DD/MM/YYYY">
                                    {m.firstContact}
                                </Moment>  </div>
                            <div className="email">{m.emailType !== null ? m.emailType : "-"}</div>
                            <div className="sold">{m.sold ? <FontAwesomeIcon icon="check" /> : "-"}</div>
                            <div className="owner">{m.owner} </div>
                        </div>
                        } position="center">
                            {close => (
                                <div >
                                    <div className="popup">
                                        <a className="close" onClick={close}> &times; </a>
                                        <span>Name</span>
                                        <input placeholder="name"></input>
                                    </div>
                                </div>
                            )}
                        </Popup>

                    )
                })}
            </div>
        )
    }
}

export default Clients