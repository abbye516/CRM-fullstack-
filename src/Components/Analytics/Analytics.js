import React, { Component } from 'react';
import Badges from './Badges';
import Charts from './Charts';
import axios from 'axios';

class Analytics extends Component {
    constructor(){
        super()
        this.state={
            hottestCountry: {}
        }
    }
      componentDidMount(){
        this.getBadgeFunc()
    }
    getBadgeFunc = async () =>{
        let badgeData = await axios.get('http://localhost:7000/analytics')
        let hottestCountry = badgeData.data.hottestCountry
        let clientsSold = badgeData.data.count
        let hottestCountryBadgeInfo = {name: hottestCountry, sold: clientsSold}
        console.log(hottestCountry)
        this.setState({
            hottestCountry: hottestCountryBadgeInfo
        })
    }

    render(){
        console.log(this.state.hottestCountry)
        return(
            <div className="analytics-page">
                <h2>Badges</h2>
               
                <Badges hottestCountry={this.state.hottestCountry}/>
                <Charts />         
            </div>
        )
    }
}

export default Analytics