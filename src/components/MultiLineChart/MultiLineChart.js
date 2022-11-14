import React from "react";
import PropTypes from "prop-types";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const MultiLineChart = ({ data, labelEnable }) => {
  // const CustomTooltip = ({ active, payload, label }) => {
  //   if (labelEnable && active && payload && payload.length) {
  //     return (
  //       <div className={`bg-[${payload[0]?.payload?.fill}] p-1 rounded-md`}>
  //         <p className="text-xs ">{`${payload[0]?.name} : ${payload[0]?.value}`}</p>
  //       </div>
  //     );
  //   }
  //   return null;
  // };

  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data?.graphData}>
          {data?.graphData?.map((element, indx) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <Line
                key={`data${indx}`}
                type="monotone"
                // dataKey={`data${indx}`}
                dataKey={data.dataKeyNames[indx]}
                // stroke="#8884d8"
                stroke={data.colors[indx]}
                strokeWidth={2}
              />
            );
          })}

          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          {/* <Legend /> */}
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

MultiLineChart.propTypes = {
  /** Chart Data, color - pass 1 or more set of data and color (max 5)*/
  // data: PropTypes.shape({
  //   graphData: propTypes.arrayOf({
  //     name: propTypes.string.isRequired,
  //     data1: propTypes.string.isRequired,
  //   }),
  //   colors: propTypes.arrayOf(propTypes.string.isRequired),
  // }),
  /** enable label of section on hover*/
  labelEnable: PropTypes.bool,
};

MultiLineChart.defaultProps = {
  labelEnable: true,
};

export default MultiLineChart;
