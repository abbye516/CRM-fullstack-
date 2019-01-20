import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import axios from 'axios';
import './actions.css'


class AddClient extends Component {
    constructor() {
        super()
        this.state = {
            name: ""
        }
    }
    updateClient = async () => {
        await axios.put(`http://localhost:7000/actions/:client`, {
            name: this.state.name,
            surname: this.state.surname,
            country: this.state.country
        })
    }

    render() {
        return (
            <div className="addClient-container">
                <h2>Add Client</h2>
                <div className="add-inputs">
                    <label for="FN">First Name: </label>
                    <input id="FN" type="text" placeholder="First Name" />
                    <label for="SN"> Surname: </label>
                    <input id="SN" type="text" placeholder="Surname" />
                    <label for="country">Country: </label>
                    <input id="country" type="text" placeholder="Country" />
                    <label for="owner">Owner: </label>
                    <input id="owner" type="text" placeholder="owner" />
                </div>
                <div id="add-client">Add Client</div>
            </div>
        )
    }
}

export default AddClient