'use client';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

function FurnaceData(time: string, lance_position: number, spear_geometry: number, tuyere_condition: number) {
  return {
    time: time,
    lance_position: lance_position,
    spear_geometry: spear_geometry,
    tuyere_condition: tuyere_condition,
  };
}

const salesData = [
  FurnaceData("00:00",70,60,40),
  FurnaceData("02:00",70,60,40),
  FurnaceData("04:00",70,60,40),
  FurnaceData("06:00",70,60,40),
  FurnaceData("08:00",70,60,40),
  FurnaceData("10:00",70,60,40),
  FurnaceData("12:00",65,60,55),
  FurnaceData("14:00",65,60,55),
  FurnaceData("16:00",65,60,55),
  FurnaceData("18:00",65,60,55),
  FurnaceData("20:00",55,60,65),
  FurnaceData("22:00",50,60,70),
  FurnaceData("00:00",65,60,55),
  FurnaceData("",0,0,0),
  //{
  //   name: '00:00',
  //   lance_position: 1,
  //   spear_geometry: 2,
  //   tuyere_condition: 3,
  //   jet_put: 4,
  //   garnish_appearance: 5,
  //   tuyere_opening: 6,
    
];

const LineChartComponent2 = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={salesData}
        margin={{
          right: 30,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        {/* <Tooltip content={<CustomTooltip />} /> */}
        {/* <Legend /> */}
        <Line type="monotone" dataKey="lance_position" stroke="#61CB6D" />
        <Line type="monotone" dataKey="spear_geometry" stroke="#2E9AEE" />
        <Line type="monotone" dataKey="tuyere_condition" stroke="#FF625B" />
      </LineChart>
      
    </ResponsiveContainer>
  );
};

export default LineChartComponent2;