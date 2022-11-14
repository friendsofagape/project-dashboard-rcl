import React from "react";
import PropTypes from "prop-types";

const Button = ({ children, bgColor, textColor, extraClass, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${bgColor} ${textColor} ${extraClass}`}
      // className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  /** Button label */
  children: PropTypes.string.isRequired,
  /** The bg color for the button */
  bgColor: PropTypes.string,
  /** The text color for the button */
  textColor: PropTypes.string,
  /** button extra class properties - tailwind css string expected */
  extraClass: PropTypes.string,
  /** Gets called when the user clicks on the button */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  children: "Counter",
  bgColor: "bg-transparent",
  textColor: "text-blue-700",
  extraClass:
    "hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded",
};

export default Button;
