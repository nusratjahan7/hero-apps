import React from 'react';
import {
  ComposedChart,
  Area,
  Bar,
  Line,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
  ResponsiveContainer,
} from "recharts";


const Charts = ({ratings}) => {
    const maxCount = Math.max(...ratings.map((r) => r.count));

    return (
        <div style={{ width: "100%", height: "60vh" }}>
              <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={ratings}
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis domain={[0, maxCount * 1.1]} /> {/* give space on top */}
          <Tooltip />
          <Legend />

          {/* Area for visual effect */}
          <Area
            type="monotone"
            dataKey="count"
            fill="#26d0cd59"
            stroke="#8884d8"
          />

          {/* Bar showing number of ratings with labels */}
          <Bar dataKey="count" barSize={30} fill="#1a2980" barCategoryGap="30%">
            <LabelList dataKey="count" position="top" />
          </Bar>

          {/* Line showing trend */}
          <Line type="monotone" dataKey="count" stroke="#26d0cd" />

          {/* Scatter points on top */}
          <Scatter dataKey="count" fill="red" />
        </ComposedChart>
      </ResponsiveContainer>
         </div>
    );
};

export default Charts;