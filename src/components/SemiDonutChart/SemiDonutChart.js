import React from "react";
import PropTypes from "prop-types";
import { PieChart, Pie, ResponsiveContainer, Tooltip } from "recharts";

const SemiDonutChart = ({ data, labelEnable, animationEnable }) => {
  const CustomTooltip = ({ active, payload, label }) => {
    if (labelEnable && active && payload && payload.length) {
      return (
        <div className={`bg-[${payload[0]?.payload?.fill}] p-1 rounded-md`}>
          <p className="text-xs ">{`${payload[0]?.name} : ${payload[0]?.value}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={80}
            innerRadius={40}
            paddingAngle={0}
            cx="50%"
            cy="60%"
            startAngle={180}
            endAngle={0}
            isAnimationActive={animationEnable}
          />
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>
    </>
  );
};

SemiDonutChart.propTypes = {
  /** Chart Data - array of Object*/
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
  /** enable label of section on hover*/
  labelEnable: PropTypes.bool,
  /** enable/disable animation*/
  animationEnable: PropTypes.bool,
};

SemiDonutChart.defaultProps = {
  data: [
    { name: "Validated", value: 50, fill: "#0073e5" },
    { name: "Inprogress", value: 20, fill: "#80bfff" },
    { name: "Pending", value: 16, fill: "#cce6ff" },
  ],
  labelEnable: true,
  animationEnable: true,
};

export default SemiDonutChart;
