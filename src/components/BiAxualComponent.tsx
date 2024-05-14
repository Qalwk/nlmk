'use client';

import React, { PureComponent } from 'react';
import { 
    LineChart, 
    Line, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    Legend, 
    ResponsiveContainer 
} from 'recharts';

const data = [
  {
    name: '00:00',
    uv: 200,
    pv: 80,
    ul: 100,
  },
  {
    name: '02:00',
    uv: 180,
    pv: 90,
    ul: 96,
  },
  {
    name: '04:00',
    uv: 160,
    pv: 86,
    ul: 54,
  },
  {
    name: '06:00',
    uv: 140,
    pv: 23,
    ul: 56,
  },
  {
    name: '08:00',
    uv: 120,
    pv: 76,
    ul: 23,
  },
  {
    name: '10:00',
    uv: 100,
    pv: 54,
    ul: 76,
  },
  {
    name: '12:00',
    uv: 80,
    pv: 23,
    ul: 89,
  },
  {
    name: '14:00',
    uv: 120,
    pv: 76,
    ul: 23,
  },
  {
    name: '16:00',
    uv: 140,
    pv: 23,
    ul: 56,
  },
  {
    name: '18:00',
    uv: 180,
    pv: 90,
    ul: 96,
  },
  {
    name: '20:00',
    uv: 100,
    pv: 54,
    ul: 76,
  },
  {
  name: '22:00',
  uv: 140,
  pv: 23,
  ul: 56,
},
{
name: '00:00',
uv: 80,
pv: 23,
ul: 89,
},
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/line-chart-double-y-axes-2stmj2';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            // top: 5,
            // right: 30,
            left: 20,
            // bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Line yAxisId="left" type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line yAxisId="right" type="monotone" dataKey="uv" stroke="#82ca9d" />
          <Line yAxisId="right" type="monotone" dataKey="ul" stroke="#2E9AEE" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}