import React, { Component } from 'react';
import SalesByCountry from './ChartsComponents/SalesByCon';
import SalesSince from './ChartsComponents/SalesSinceChart';
import ClientAquisitionChart from './ChartsComponents/ClientAquisitionChart';
import TopEmployee from './ChartsComponents/TopEmpChart';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


class Charts extends Component {
    render(){
        return(
            <div>
                <SalesByCountry />
                <SalesSince />
                <ClientAquisitionChart />
                <TopEmployee />
            </div>
        )
    }
}

export default Charts