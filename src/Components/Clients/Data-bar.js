import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './client.css'


class DataBar extends Component {
    constructor(){
        super()
    }
    render(){
        return(
            <div className="dataBar">
                <div>Name</div>
                <div>Surname</div>
                <div>Country</div>
                <div>First Contact</div>
                <div>Email</div>
                <div>Sold</div>
                <div>Owner</div>
            </div>
        )
    }
}

export default DataBar