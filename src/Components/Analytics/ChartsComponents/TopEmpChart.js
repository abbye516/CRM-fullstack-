import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { BarChart, ResponsiveContainer, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const data = [
    { name: "Abby", sales: 40 },
    { name: "Ethan", sales: 50 },
    { name: "Jake", sales: 30 }
]


class TopEmployee extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div id="employeeChart">
                <div class="chart-title ">
                    Top Employee Chart
                </div>
                <div class="chart">
                    {/* <ResponsiveContainer className="resCont" width='100%'> */}
                    <BarChart
                        width={600}
                        height={300}
                        data={data}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}

                    >
                        <XAxis dataKey="name" />
                        <YAxis />

                        <Bar dataKey="sales" fill="#8884d8" />
                        {/* <Bar dataKey="uv"  /> */}
                    </BarChart>
                    {/* </ResponsiveContainer> */}
                </div>
            </div>
        )
    }
}

export default TopEmployee