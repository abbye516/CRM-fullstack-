import React, { Component } from 'react';
import Badges from './Badges';
import Charts from './Charts';
import axios from 'axios';

class Analytics extends Component {
    constructor(){
        super()
        this.state={
            hottestCountry: {},
        }
    }
      componentDidMount(){
        this.getBadgeFunc()
    }
    getBadgeFunc = async () =>{
        let badgeData = await axios.get('http://localhost:7000/analytics')
        let hottestCountry = badgeData.data.hottestCountry.hottestCountry
        let clientsSold = badgeData.data.hottestCountry.count
        let hottestCountryBadgeInfo = {name: hottestCountry, sold: clientsSold}
        let totalEmailsSent = badgeData.data.emailsSent
        let outstandingClients = badgeData.data.outstandingClients
        console.log(badgeData.data)
        this.setState({
            hottestCountry: hottestCountryBadgeInfo,
            emailCount: totalEmailsSent,
            outstandingClients: outstandingClients
        })
    }
    getChartsData = async () =>{
        let chartData = await axios.get('http://localhost:7000/analytics')
        
    }

    render(){
        console.log(this.state.hottestCountry)
        return(
            <div className="analytics-page">
                <h2>Badges</h2>
               
                <Badges hottestCountry={this.state.hottestCountry} emailCount={this.state.emailCount} outstandingClients={this.state.outstandingClients}/>
                <Charts />         
            </div>
        )
    }
}

export default Analytics