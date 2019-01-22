import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import axios from 'axios';
import './actions.css'


class AddClient extends Component {
    constructor() {
        super()
        this.state = {
            firstname: "",
            surname: "",
            country: "",
            owner: ""
        }
    }
    updateClient = async () => {
        await axios.post(`http://localhost:7000/actions`, {
            name: `${this.state.firstname} ${this.state.surname}`,
            country: this.state.country,
            owner: this.state.owner
        })
        //clear state function 
    }
    eventHandler = (event) =>{
        let name = event.target.name
        this.setState({
            [name] : event.target.value
        })
    }

    render() {
        return (
            <div className="addClient-container">
                <h2>Add Client</h2>
                <div className="add-inputs">
                    <label for="FN">First Name: </label>
                    <input id="FN" type="text" placeholder="First Name" name='firstname' onChange={this.eventHandler} value={this.state.firstname} />
                    <label for="SN"> Surname: </label>
                    <input id="SN" type="text" placeholder="Surname" name='surname' onChange={this.eventHandler} value={this.state.surname}/>
                    <label for="country">Country: </label>
                    <input id="country" type="text" placeholder="Country" name='country' onChange={this.eventHandler} value={this.state.country} />
                    <label for="owner">Owner: </label>
                    <input id="owner" type="text" placeholder="owner" name='owner' onChange={this.eventHandler} value={this.state.owner} />
                </div>
                <div id="add-client" onClick={this.updateClient}>Add Client</div>
            </div>
        )
    }
}

export default AddClient