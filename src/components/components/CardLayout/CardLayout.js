import React from "react";
import PropTypes from "prop-types";

const CardLayout = ({
  children,
  bgColor,
  borderRadius,
  width,
  height,
  extraClass,
}) => {
  return (
    <>
      <div
        className={`w-[${width}] h-[${height}] rounded-[${borderRadius}] bg-[${bgColor}] ${extraClass} p-3 `}
      >
        {children}
      </div>
    </>
  );
};

CardLayout.propTypes = {
  /** children component*/
  children: PropTypes.node,
  /** The label bg color */
  bgColor: PropTypes.string,
  /** border radius in px */
  borderRadius: PropTypes.string,
  /** height in rem */
  height: PropTypes.string,
  /** width in rem */
  width: PropTypes.string,
  /** extraClass in tailwind */
  extraClass: PropTypes.string,
};

CardLayout.defaultProps = {
  children: <>Content</>,
  bgColor: "#eeeeee",
  borderRadius: "12px",
  height: "10rem",
  width: "10rem",
  extraClass: "",
};

export default CardLayout;
