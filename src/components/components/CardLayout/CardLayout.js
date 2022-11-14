import React from "react";
import PropTypes from "prop-types";

const CardLayout = ({ children, bgColor, borderRadius, width, height }) => {
  return (
    <>
      <div
        className={` w-[${width}] h-[${height}] rounded-[${borderRadius}] bg-[${bgColor}] flex p-3 justify-center items-center `}
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
  borderRadius: PropTypes.string,
  /** width in rem */
  borderRadius: PropTypes.string,
};

CardLayout.defaultProps = {
  children: <>Content</>,
  bgColor: "#eeeeee",
  borderRadius: "10px",
  height: "10rem",
  width: "10rem",
};

export default CardLayout;
