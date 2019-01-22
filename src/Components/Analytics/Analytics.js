import React, { Component } from 'react';
import Badges from './Badges';
import Charts from './Charts';
import axios from 'axios';

class Analytics extends Component {
    constructor(){
        super()
        this.setState={
            data: [],
            hottestCountry: {}
        }
    }
    updateClientData = async () =>{
        const users = await axios.get('http://localhost:7000/clients')
        this.setState({
            data: users.data
        })
        return users
    }
    getBadgeFunc = async () =>{
        let badgeData = await axios.get('http://localhost:7000/analytics')
        let hottestCountry = badgeData.data.hottestCountry
        let clientsSold = badgeData.data.count
        console.log(clientsSold)
    }

    render(){
        this.getBadgeFunc()
        return(
            <div>
                <h1>Analytics Component</h1>
                <h2>Badges</h2>
                <Badges />
                <h2>Charts</h2>       
                <Charts />         
            </div>
        )
    }
}

export default Analytics