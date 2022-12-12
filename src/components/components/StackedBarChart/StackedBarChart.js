import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const StackedBarChart = ({
  data,
  barSize,
  rounded,
  radius,
  startAnimation,
}) => {
  const [labels, setLabels] = useState([]);
  useEffect(() => {
    const labels = new Set(
      data.graphData.flatMap(({ name, ...labels }) => Object.keys(labels))
    );
    setLabels(Array.from(labels));
  }, [data]);

  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data.graphData}>
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#e3e3e3"
          />
          <XAxis dataKey="name" stroke="#8c96a0" />
          <YAxis stroke="#8c96a0" />
          <Tooltip />
          <Legend iconSize={10} iconType="circle" />
          {labels.length > 0 &&
            labels.map((label, index) => (
              <Bar
                isAnimationActive={startAnimation}
                barSize={barSize}
                dataKey={label}
                stackId="x"
                fill={data.colors[index]}
                key={label}
                radius={
                  labels.length === index + 1 && rounded
                    ? [radius, radius, 0, 0]
                    : 0
                }
              />
            ))}
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

StackedBarChart.propTypes = {
  /** Chart Data, colors, datakeys - pass 1 or more set of data, color, dataKeys
   * datakeys should be same as data given in the graphData
   */
  data: PropTypes.objectOf(
    PropTypes.shape({
      graphData: PropTypes.arrayOf(PropTypes.object).isRequired,
      colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
  /** width of the bar*/
  barSize: PropTypes.number,
  /** rounded top of the bar*/
  rounded: PropTypes.bool,
  /** top round radius of the bar*/
  radius: PropTypes.number,
  /** Enable/Disable start animation*/
  startAnimation: PropTypes.bool,
};

StackedBarChart.defaultProps = {
  barSize: 12,
  rounded: true,
  radius: 5,
  startAnimation: true,
};

export default StackedBarChart;
