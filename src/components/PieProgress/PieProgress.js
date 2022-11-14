import React from "react";
import PropTypes from "prop-types";

const PieProgress = ({ filled, bgColor, radius, borderColor }) => {
  const calculateTurns = (filled) => {
    if (filled > 100) return 1;
    else if (filled < 0) return 0;
    else return filled / 100;
  };
  const turnPerc = calculateTurns(filled);
  const pieStyle = {
    height: radius,
    width: radius,
    background: `conic-gradient(${bgColor} ${turnPerc}turn, transparent ${
      turnPerc + 0.01
    }turn )`,
  };
  return (
    <>
      <div
        style={{
          width: `calc(${radius} + 8px)`,
          height: `calc(${radius} + 8px)`,
          border: `4px solid ${borderColor}`,
        }}
        className={`flex items-center justify-center rounded-full bg-transparent`}
      >
        <div style={pieStyle} className="border-2 border-white rounded-full" />
      </div>
    </>
  );
};

PieProgress.propTypes = {
  /** filled percentage number*/
  filled: PropTypes.number.isRequired,
  /** bgColor (hexcode) */
  bgColor: PropTypes.string,
  /** borderColor (hexcode) */
  borderColor: PropTypes.string,
  /** In px (50px)*/
  radius: PropTypes.string,
  // /** extra class properties (height, width) */
  // extraClass: PropTypes.string,
};

PieProgress.defaultProps = {
  filled: 70,
  bgColor: "#0073e5",
  borderColor: "#cce6ff",
  radius: "50px",
};

export default PieProgress;
