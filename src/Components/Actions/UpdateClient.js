import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import axios from 'axios';
import './actions.css'
import ClientInput from './ClientInput';


class UpdateClient extends Component {
    constructor() {
        super()
        this.state = {
            clients: [],
            clientName: "",
            owner: "",
            emailType: "",
            sold: false
        }
    }
    receiveClients = async () => {
        const clients = await axios.get('http://localhost:7000/actions')
        this.setState({
            clients: clients.data
        })
        return clients
    }
    componentDidMount(){
        this.receiveClients()
        this.clientToUpdate()
    }
    clientToUpdate = async (currentClient) => {
        console.log(currentClient)
       await this.setState({
            clientName: currentClient
        })
    }
    handleInputs = async (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    updateOwner = async () => {
        console.log(this.state.clientName)
        await axios.put(`http://localhost:7000/actions/${this.state.clientName}`, {
            owner: this.state.owner,
            // emailType: this.state.emailType,
            // sold: this.state.sold
        })
    }
    //insert method to chnage sold to true
    updateSoldStatus = async () =>
    this.setState({
        sold: true
        })

    render() {
        console.log(this.state.clientName)
        return (
            <div className="update-container">
                <h2>Update</h2>
                <ClientInput clientToUpdate={this.clientToUpdate} />
                <div className="updateInputs">
                    <label for="transferOwner">
                        Transfer ownership to
                    </label>

                    <input id="transferOwner" onInputCapture={this.handleInputs} type="text" list="owners" placeholder="owner"  />
                    <datalist id="owners">
                        {this.state.clients.map(m=>{
                            return(
                                <option>{m.owner}</option>
                            )
                        })}
                        
                    </datalist>

                    <button id="transferOwner" onClick={this.updateOwner} >Transfer</button><br></br>
                    <label for="sendEmail">Send email:</label>
                    <input id="sendEmail" onChange={this.handleInputs} type="text" list="emailType" placeholder="Email Type" name="emailType" />
                    <datalist id="emailType">
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                        <option>D</option>
                    </datalist>
                    <button id="sendEmail">Send</button> <br></br>
                    <label for="sale">Declare Sale!</label>
                    <button onClick={this.updateSoldStatus} id="sale">Declare</button>
                </div>
            </div>
        )
    }
}

export default UpdateClient