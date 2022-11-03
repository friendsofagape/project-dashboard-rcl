import React from "react";
import PropTypes from "prop-types";
import Label from "../Label";
import { HiChevronDown } from "react-icons/hi";

const HeadBar = ({
  button,
  IconBg,
  IconOnclick,
  bgColor,
  extraClass,
  LabelStyle,
}) => {
  return (
    <div className={`flex flex-row item-center`}>
      <div
        className={`${extraClass} ${bgColor} flex-1 p-2 rounded-tl-md ${
          !button && "rounded-tr-md"
        }`}
      >
        <Label {...LabelStyle} />
      </div>
      {button && (
        <div
          className={`${extraClass} ${IconBg} flex-0 p-2 rounded-tr-md cursor-pointer`}
          onClick={IconOnclick}
        >
          <HiChevronDown className="fill-white" size={23} />
        </div>
      )}
    </div>
  );
};

HeadBar.propTypes = {
  /** The label bg color */
  bgColor: PropTypes.string,
  /** arrow button enable/disable */
  button: PropTypes.bool,
  /** arrow button action onclick */
  IconOnclick: PropTypes.func,
  /** extra class properties - tailwind css string expected */
  extraClass: PropTypes.string,
  /** props of Label component */
  LabelStyle: PropTypes.object,
};

HeadBar.defaultProps = {
  button: false,
  bgColor: "bg-[#0073e5]",
  IconBg: "bg-[#1981e8]",
  extraClass: "",
  LabelStyle: {
    bgColor: "",
    color: "text-white",
    extraClass: "",
    children: "Mathew",
  },
};

export default HeadBar;
