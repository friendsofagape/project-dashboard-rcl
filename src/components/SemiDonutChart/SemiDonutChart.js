import React from "react";
import PropTypes from "prop-types";

const SemiDonutChart = ({ children, bgColor, color, extraClass }) => {
  return <>hi</>;
};

SemiDonutChart.propTypes = {
  /** label text*/
  children: PropTypes.string.isRequired,
  /** The label bg color */
  bgColor: PropTypes.string,
  /** The label color for the button */
  color: PropTypes.string,
  /** extra class properties (typography) - tailwind css string expected */
  extraClass: PropTypes.string,
};

SemiDonutChart.defaultProps = {
  children: "Label Text",
  bgColor: "bg-transparent",
  color: "text-blue-700",
  extraClass: "",
};

export default SemiDonutChart;
