import React, { Component } from 'react';
import './client.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import axios from 'axios';
import Moment from 'react-moment';


class Client extends Component {
    updatePop = () =>{
        this.props.popup(this.props.data._id)
    }
    render() {
        let client = this.props.data
        // console.log(this.props.id)
        return (
                <div >
                    <div className="client" onClick={this.updatePop} >
                        <div className="clientFN"> {client.name.split(' ')[0]} </div>
                        <div className="clientLN"> {client.name.split(' ')[1]} </div>
                        <div className="country">{client.country}</div>
                        <div className="firstContact">
                            <Moment format="DD/MM/YYYY">
                                {client.firstContact}
                            </Moment>  </div>
                        <div className="email">{client.emailType !== null ? client.emailType : "-"}</div>
                        <div className="sold">{client.sold ? <FontAwesomeIcon icon="check" /> : "-"}</div>
                        <div className="owner">{client.owner} </div>
                    </div>


                </div>
        )
    }
}

export default Client