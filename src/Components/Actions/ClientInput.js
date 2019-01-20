import React, { Component } from 'react';
// import AddClient from './AddClient';
// import UpdateClient from './UpdateClient';
// import AddClient from './AddClient';
import './actions.css'
import axios from 'axios';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


class ClientInput extends Component {
    constructor() {
        super()
        this.state = {
            clients: [],
            selectedClient: ""
        }
    }
    //use to populate dropdown with client names
    receiveClientNames = async () => {
        const clients = await axios.get('http://localhost:7000/actions')
        this.setState({
            clients: clients.data,
        })
        return clients
    }

    //update clients
    clientToUpdate = async () =>{
        let clientToUpdate = this.state.selectedClient
        let firstName = clientToUpdate.split(" ")[0]
        let LN = clientToUpdate.split(" ")[1]
        let fullName= `${firstName}%20${LN}`

       await this.props.clientToUpdate(fullName)
    }
    selectedClient = async (event) => {
        this.setState({
            selectedClient: event.target.value
        })
    }
    
    async componentDidMount() {
        this.receiveClientNames()
    }
    render() {
         let clientToUpdate = this.state.selectedClient
        let firstName = clientToUpdate.split(" ")[0]
        let LN = clientToUpdate.split(" ")[1]
        let fullName= `${firstName}%20${LN}`
        console.log(fullName)
        return (
            <div>
                <label for="client">Client </label>
                <input id="client" type="text" list="clientNames" placeholder="Client Name" onChange={this.selectedClient}/>
                <datalist id="clientNames">
                    {this.state.clients.map(m => {
                        return (
                            <option >{m.name}</option>
                        )
                    })}
                </datalist>
            </div>
        )
    }
}

export default ClientInput