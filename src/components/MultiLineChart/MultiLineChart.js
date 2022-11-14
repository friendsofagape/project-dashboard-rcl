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

const MultiLineChart = ({ data }) => {
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

          <CartesianGrid strokeDasharray="3 3" horizontal={false} />
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
  /** Chart Data, colors, datakeys - pass 1 or more set of data, color, dataKeys
   * datakeys should be same as data given in the graphData
   */
  data: PropTypes.objectOf(
    PropTypes.shape({
      graphData: PropTypes.arrayOf(PropTypes.object).isRequired,
      colors: PropTypes.arrayOf(PropTypes.string).isRequired,
      dataKeyNames: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
  /** enable label of section on hover*/
  // labelEnable: PropTypes.bool,
};

MultiLineChart.defaultProps = {
  // labelEnable: true,
};

export default MultiLineChart;
