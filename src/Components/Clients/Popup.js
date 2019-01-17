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
        const target = event.target
        const name = target.name
        const value =  target.value;
    
        await this.setState({
          [name]: value
        })
        
      }

    async updateUsers() {
        return await axios.put(`http://localhost:7000/clients/${this.props.currentId}`, {
            name: this.state.name,
            surname: this.state.surname,
            country: this.state.country
        })

    }
    render() {
        return (
            <div className='popup'>
                <div className="form">
                   <FontAwesomeIcon onClick={this.props.closePop} icon="times-circle" />
                    <div className="divLabels">
                        <label>
                            Name: {this.props.name}

                            <input onChange={this.handleInputs}  type="text" placeholder="name" name="name" />
                        </label>
                        <label>
                            Surname:
                            <input onChange={this.handleInputs}  type="text" placeholder="surname" name="surname" />
                        </label>
                        <label>
                            Country
                        <input type="text" onChange={this.handleInputs}  placeholder="country" name="country" />
                        </label>
                    </div>
                    <button onClick={this.updateUsers}>Update</button>
                </div>
            </div>
        )
    }
}

export default PopupDiv