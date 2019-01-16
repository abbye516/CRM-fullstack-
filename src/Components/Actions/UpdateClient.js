import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


class UpdateClient extends Component {
    constructor(){
        super()
    }
    render(){
        return(
            <div className="update-client">
                <h2>Update</h2>
                Client: <span><input placeholder="Client Name"></input></span>
                Transfer ownership to 
            </div>
        )
    }
}

export default UpdateClient