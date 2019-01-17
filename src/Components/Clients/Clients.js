import React, { Component } from 'react';
import DataBar from './Data-bar';
import './client.css'
import axios from 'axios';
import PopupDiv from './Popup';
import Client from './client';


class Clients extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
            showPopup: false,
            currentId: ""
        }
    }
    async getUsers() {
        return await axios.get('http://localhost:7000/clients')

    }
    async componentDidMount() {
        const users = await this.getUsers()
        // console.log(users)
        
        this.setState({ data: users.data })
    }
    updatePop = (currentId) => {
        console.log(currentId)
        this.setState({
            showPopup: true,
            currentId: currentId
        })
    }
    closePop = () =>{
        this.setState({
            showPopup : false
        })
    }
    render() {
        // let options = this.state.data[0]
        // console.log(options)
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
               {this.state.showPopup && <PopupDiv updatePop={this.updatePop} showPopup={this.state.showPopup} closePop={this.closePop} currentId={this.state.currentId}/>}

                {this.state.data.map(m => <Client data={m}  popup={this.updatePop} /> )}
             
            </div>
        )
    }
}

export default Clients