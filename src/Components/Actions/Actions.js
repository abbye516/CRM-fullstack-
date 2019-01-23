import React, { Component } from 'react';
// import AddClient from './AddClient';
import UpdateClient from './UpdateClient';
import AddClient from './AddClient';
import './actions.css'
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


class Actions extends Component {    
    render() {
        return (
            <div className="actions-container">
                <UpdateClient />
                <AddClient />
            </div>
        )
    }
}

export default Actions