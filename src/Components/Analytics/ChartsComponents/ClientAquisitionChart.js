import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { LineChart, Line } from 'recharts'



class ClientAquisitionChart extends Component {
    render() {
        return (
            <div>

                <LineChart width={400} height={400} data={[60, 50, 50]}>
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                </LineChart>
            </div>
        )
    }
}

export default ClientAquisitionChart


// const data = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
//                   {name: 'Group C', value: 300}, {name: 'Group D', value: 200}]

// const SimplePieChart = React.createClass({
// 	render () {
//   	return (
//     	<ResponsiveContainer>
//         <PieChart>
//           <Pie data={data} fill="#8884d8" label/>
//         </PieChart>
//        </ResponsiveContainer>