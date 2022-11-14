import React, { useEffect, useState } from "react";
import PropTypes, { object } from "prop-types";

const Badge = ({
  children,
  bgColor,
  color,
  borderColor,
  BadgeType,
  fontFamily,
  fontSize,
  fontWeight,
}) => {
  const [badgeColor, setbadgeColor] = useState("");

  useEffect(() => {
    switch (BadgeType) {
      case "primary":
        setbadgeColor("bg-[#0073e5] text-white text-xs font-medium");
        break;
      case "secondary":
        setbadgeColor("bg-[#6c757d] text-white text-xs font-medium");
        break;
      case "success":
        setbadgeColor("bg-[#40c000] text-white text-xs font-medium");
        break;
      case "danger":
        setbadgeColor("bg-[#ff4d4d] text-white text-xs font-medium");
        break;
      case "warning":
        setbadgeColor("bg-[#ffc107] text-white text-xs font-medium");
        break;
      case "info":
        setbadgeColor("bg-[#0dcaf0] text-white text-xs font-medium");
        break;
      case "light":
        setbadgeColor(
          "bg-[#f9f9f9] text-[#1f84e7] text-white text-xs font-medium"
        );
        break;

      case "pass":
        setbadgeColor(
          "bg-[#ddffcc] text-black text-xs font-medium border-2 border-[#b7ff93]"
        );
        break;
      case "recheck":
        setbadgeColor(
          "bg-[#cce6ff] text-black text-xs font-medium border-2 border-[#80bfff]"
        );
        break;
      case "fail":
        setbadgeColor(
          "bg-[#ffcccc] text-black text-xs font-medium border-2 border-[#ffb3b3]"
        );
        break;
      case "notstarted":
        setbadgeColor(
          "bg-[#ddffcc] text-black text-xs font-medium border-2 border-[#b7ff93]"
        );
        break;

      case "custom":
        let customClass = `bg-[${bgColor}] text-[${color}] border-2 border-[${borderColor}] ${fontFamily} ${fontSize} ${fontWeight}`;
        setbadgeColor(customClass);
      default:
        break;
    }
  }, [
    BadgeType,
    bgColor,
    color,
    borderColor,
    fontFamily,
    fontSize,
    fontWeight,
  ]);

  return (
    <>
      <span
        className={`inline-block whitespace-nowrap rounded-full py-1 px-3 text-center align-baseline leading-4 ${badgeColor} `}
      >
        {children}
      </span>
    </>
  );
};

Badge.propTypes = {
  /** Badge text*/
  children: PropTypes.string.isRequired,
  /** Badge Type (pre defined and custom) custom needs customBadge, color props */
  children: PropTypes.string.isRequired,
  /** The Badge bg color */
  bgColor: PropTypes.string,
  /** The Badge border color */
  borderColor: PropTypes.string,
  /** The Badge label color */
  color: PropTypes.string,
  /**  tailwind font properties */
  fontFamily: PropTypes.string,
  /**  tailwind font properties */
  fontSize: PropTypes.string,
  /** tailwind font properties */
  fontWeight: PropTypes.string,
};

Badge.defaultProps = {
  children: "Label Text",
  BadgeType: "primary",
  bgColor: "bg-transparent",
  color: "text-blue-700",
  borderColor: "#aaff80",
  fontFamily: "font-mono",
  fontSize: "text-xs",
  fontWeight: "font-normal",
};

export default Badge;
