import React, { Component } from 'react';
import './actions.css'
import axios from 'axios';
import { Input } from 'semantic-ui-react';

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

    selectedClient = (event) => {
   
        this.props.clientToUpdate(event.target.value)

    }
    
    componentDidMount() {
        this.receiveClientNames()
    }
    render() {
        return (
            <div>
                {/* <label for="client">Client: </label> */}
               <Input label="Client"  type="text" list="clientNames" placeholder="Client Name" onChange={this.selectedClient}></Input>
                {/* <input id="client" type="text" list="clientNames" placeholder="Client Name" onChange={this.selectedClient}/> */}
                <datalist id="clientNames">
                    {this.state.clients.map(m => {
                        return (
                            <option value = {m.name}>{m.name}</option>
                        )
                    })}
                </datalist>
            </div>
        )
    }
}

export default ClientInput