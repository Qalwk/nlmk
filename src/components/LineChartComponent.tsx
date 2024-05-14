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

function FurnaceData(time: string, lance_position: number, spear_geometry: number, tuyere_condition: number,
  jet_put: number, garnish_appearance: number, tuyere_opening: number) {
  return {
    time: time,
    lance_position: lance_position,
    spear_geometry: spear_geometry,
    tuyere_condition: tuyere_condition,
    jet_put: jet_put,
    garnish_appearance: garnish_appearance,
    tuyere_opening: tuyere_opening,
  };
}

const salesData = [
  FurnaceData("00:00",10,20,30,40,50,60),
  FurnaceData("02:00",10,20,30,40,50,60),
  FurnaceData("04:00",10,20,30,40,50,60),
  FurnaceData("06:00",10,20,30,40,50,60),
  FurnaceData("08:00",10,20,30,40,50,60),
  FurnaceData("10:00",10,20,30,40,50,60),
  FurnaceData("12:00",10,20,30,40,50,60),
  FurnaceData("14:00",10,20,30,40,50,60),
  FurnaceData("16:00",10,20,30,40,50,60),
  FurnaceData("18:00",10,20,30,40,50,60),
  FurnaceData("20:00",10,20,30,40,50,60),
  FurnaceData("22:00",10,20,30,40,50,60),
  FurnaceData("00:00",10,20,30,40,50,60),
  FurnaceData("",0,0,0,0,0,0),
  //{
  //   name: '00:00',
  //   lance_position: 1,
  //   spear_geometry: 2,
  //   tuyere_condition: 3,
  //   jet_put: 4,
  //   garnish_appearance: 5,
  //   tuyere_opening: 6,
    
];

const LineChartComponent = () => {
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
        <Line type="monotone" dataKey="spear_geometry" stroke="#FFBB1E" />
        <Line type="monotone" dataKey="tuyere_condition" stroke="#AA98EF" />
        <Line type="monotone" dataKey="jet_put" stroke="#B78D81" />
        <Line type="monotone" dataKey="garnish_appearance" stroke="#EB90CB" />
        <Line type="monotone" dataKey="tuyere_opening" stroke="#70BBFF" />
      </LineChart>
      
    </ResponsiveContainer>
  );
};

export default LineChartComponent;

// const CustomTooltip = ({ active, payload, label }) => {
//   if (active && payload && payload.length) {
//     return (
//       <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
//         <p className="text-medium text-lg">{label}</p>
//         <p className="text-sm text-blue-400">
//           Revenue:
//           <span className="ml-2">${payload[0].value}</span>
//         </p>
//         <p className="text-sm text-indigo-400">
//           Profit:
//           <span className="ml-2">${payload[1].value}</span>
//         </p>
//       </div>
//     );
//   }
// };