import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: '01/01/22',
        hall_a: 4000,
        hall_b: 2400,
        amt: 2400,
    },
    {
        name: '02/01/22',
        hall_a: 7000,
        hall_b: 2900,
        amt: 2400,
    },
    {
        name: '03/01/22',
        hall_a: 800,
        hall_b: 1400,
        amt: 2000,
    },
    {
        name: '04/01/22',
        hall_a: 6000,
        hall_b: 8400,
        amt: 900,
    },
    {
        name: '05/01/22',
        hall_a: 9000,
        hall_b: 3400,
        amt: 6000,
    },
    {
        name: '01/01/22',
        hall_a: 4000,
        hall_b: 2400,
        amt: 2400,
    },
    {
        name: '02/01/22',
        hall_a: 7000,
        hall_b: 2900,
        amt: 2400,
    },
    {
        name: '03/01/22',
        hall_a: 800,
        hall_b: 1400,
        amt: 2000,
    },
    {
        name: '04/01/22',
        hall_a: 6000,
        hall_b: 8400,
        amt: 900,
    },
    {
        name: '05/01/22',
        hall_a: 9000,
        hall_b: 3400,
        amt: 6000,
    },
    {
        name: '01/01/22',
        hall_a: 4000,
        hall_b: 2400,
        amt: 2400,
    },
    {
        name: '02/01/22',
        hall_a: 7000,
        hall_b: 2900,
        amt: 2400,
    },
    {
        name: '03/01/22',
        hall_a: 800,
        hall_b: 1400,
        amt: 2000,
    },
    {
        name: '04/01/22',
        hall_a: 6000,
        hall_b: 8400,
        amt: 900,
    },
    {
        name: '05/01/22',
        hall_a: 9000,
        hall_b: 3400,
        amt: 6000,
    },
    {
        name: '01/01/22',
        hall_a: 4000,
        hall_b: 2400,
        amt: 2400,
    },
    {
        name: '02/01/22',
        hall_a: 7000,
        hall_b: 2900,
        amt: 2400,
    },
    {
        name: '03/01/22',
        hall_a: 800,
        hall_b: 1400,
        amt: 2000,
    },
    {
        name: '04/01/22',
        hall_a: 6000,
        hall_b: 8400,
        amt: 900,
    },
    {
        name: '05/01/22',
        hall_a: 9000,
        hall_b: 3400,
        amt: 6000,
    },


];
const BarChart = () => {
    return (
        <>
            {/* <div className="card_title color_secondary d-flex align-items-center justify-content-between">
                <span>
                    Revenue
                </span>

            </div> */}
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="hall_b" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="hall_a" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </>
    )
}

export default BarChart