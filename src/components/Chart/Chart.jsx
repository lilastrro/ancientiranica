import React from 'react'
import { LineChart, Line, ResponsiveContainer, Tooltip, XAxis, CartesianGrid } from 'recharts';

import './Chart.css';

export default function Chart({title, data, dataKey }) {
    return (
        <>
            <p className='chart-title'>{title}</p>
            <ResponsiveContainer className="chart">
                <LineChart width={500} height={300} data={data}>
                    <Line dataKey={dataKey} type='monotone' fill="#8884d8" />
                    <Tooltip /> 
                    <XAxis interval="preserveStartEnd" dataKey='year' />
                    <CartesianGrid strokeDasharray="3 3" />
                </LineChart>
            </ResponsiveContainer>
        </>
    )
}