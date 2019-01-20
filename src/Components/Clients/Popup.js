import React, { Component } from 'react';
import './client.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios';


class PopupDiv extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            surname: "",
            country: ""
        }
    }
    handleInputs = async (event) => {
      this.setState({
            [event.target.name]: event.target.value
        })

    }
     updateUsers = async () => {
        console.log(this.props.currentId)
        await axios.put(`http://localhost:7000/clients/${this.props.currentId}`, {
            name: this.state.name,
            surname: this.state.surname,
            country: this.state.country
        })
       this.props.closePop()
       this.props.getUsers()
    }
    render() {
        return (
            <div className='popup'>
                <div className="form">
                    <FontAwesomeIcon onClick={this.props.closePop} icon="times-circle" />
                    <div className="divLabels">
                        <label>
                            Name: {this.props.name}

                            <input onChange={this.handleInputs} type="text" placeholder="name" name="name" />
                        </label>
                        <label>
                            Surname:
                            <input onChange={this.handleInputs} type="text" placeholder="surname" name="surname" />
                        </label>
                        <label>
                            Country:
                        <input type="text" onChange={this.handleInputs} placeholder="country" name="country" />
                        </label>
                    </div>
                    <button onClick={this.updateUsers}>Update</button>
                </div>
            </div>
        )
    }
}

export default PopupDiv