import React from "react";
import PropTypes from "prop-types";
import HeadBar from "../../components/HeadBar";
import Label from "../../components/Label";
import SemiDonutChart from "../../components/SemiDonutChart";

const OverViewCard = ({ jsonPath, Head1, Head2, donutColorPallete }) => {
  // generate data for donut chart from json

  return (
    <>
      <div className="max-w-sm">
        <HeadBar
          button={true}
          IconOnclick={() => alert("Pop Up for Book Selection")}
          bgColor={"bg-[#0073e5]"}
          IconBg={"bg-[#1981e8]"}
          LabelStyle={{ children: "Titus", color: "text-white" }}
        />
        <div className="bg-slate-400 h-96">
          <div className="flex flex-col">
            <Label color={"text-black"} extraClass={"font-medium text-2xl"}>
              {Head1}
            </Label>
            <Label color={"text-[#b8bec5]"} extraClass={"font-medium text-sm"}>
              {Head2}
            </Label>
            <SemiDonutChart />
          </div>
        </div>
      </div>
    </>
  );
};

OverViewCard.propTypes = {
  /** Json file path*/
  jsonPath: PropTypes.string.isRequired,
  donutColorPallete: PropTypes.arrayOf(PropTypes.string),
};

OverViewCard.defaultProps = {};

export default OverViewCard;
