import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Moment from 'react-moment';
import DataBar from './Data-bar';
import './client.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios';
import PopupDiv from './Popup';


class Clients extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
            showPopup: false
        }
    }
    async getUsers() {
        return await axios.get('http://localhost:7000/clients')

    }
    async componentDidMount() {
        const users = await this.getUsers()
        console.log(users)
        this.setState({ data: users.data })
    }
    updatePop = () => {
        this.setState({
            showPopup: !this.state.showPopup
        })
    }
    render() {
        // console.log(this.state.data)
        let options = this.state.data[0]
        console.log(options)
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

                {this.state.data.map((m, index) => {
                    return (
                        <div className="client" key={index} onClick={this.updatePop}>
                        <PopupDiv updatePop={this.updatePop} showPopup={this.state.showPopup} clientId={m.id} />
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

                    )
                })}
            </div>
        )
    }
}

export default Clients