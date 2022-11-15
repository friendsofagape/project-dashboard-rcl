import React from "react";
import PropTypes, { element } from "prop-types";
import HeadBar from "../../components/HeadBar";
import Label from "../../components/Label";
import SemiDonutChart from "../../components/SemiDonutChart";

const OverViewCard = ({
  json,
  Head1,
  Head2,
  donutColorPallete,
  currentBook,
  donutdataKeys,
  donutPercentageKeys,
}) => {
  console.log(json[currentBook.jsonCode]["inprogress"]);
  // generate data for donut chart from json
  const donutData = [];
  let totalSum = 0;
  donutdataKeys.forEach((element, indx) => {
    donutData.push({
      name: element,
      value: json[currentBook.jsonCode][element],
      fill: donutColorPallete[indx],
    });
    totalSum += Number(json[currentBook.jsonCode][element]);
  });

  let sum = 0;
  donutPercentageKeys.forEach((element) => {
    sum += Number(json[currentBook.jsonCode][element]);
  });

  const percentage = Math.round((sum / totalSum) * 100 * 10) / 10;

  return (
    <>
      <div className="max-w-[50%] ">
        <HeadBar
          button={true}
          IconOnclick={() => alert("Pop Up for Book Selection")}
          bgColor={"bg-[#0073e5]"}
          IconBg={"bg-[#1981e8]"}
          LabelStyle={{ children: currentBook?.name, color: "text-white" }}
        />
        <div className="h-80 bg-white rounded-b-md border-gray-200 border-2 border-t-0">
          <div className="flex flex-col ">
            <div className="flex flex-col mt-5 mx-16 ">
              <Label color={"text-black"} extraClass={"font-medium text-2xl"}>
                {Head1}
              </Label>
              <Label
                color={"text-[#b8bec5]"}
                extraClass={"font-medium text-sm"}
              >
                {Head2}
              </Label>
            </div>
            <div className="w-full max-w-sm h-40 self-center mt-[6%] ">
              <SemiDonutChart
                data={donutData}
                outerRadius={100}
                positionX="50%"
                positionY="70%"
                textSize="text-xl"
                donutText={percentage}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

OverViewCard.propTypes = {
  /** Json file */
  json: PropTypes.string.isRequired,
  /** Colors for donut sections*/
  donutColorPallete: PropTypes.arrayOf(PropTypes.string),
  /** data keys in json for donut sections*/
  donutdataKeys: PropTypes.arrayOf(PropTypes.string),
  /** data keys in json for donut percentage calc*/
  donutPercentageKeys: PropTypes.arrayOf(PropTypes.string),
  /** current book details*/
  currentBook: PropTypes.shape({
    name: PropTypes.string.isRequired,
    jsonCode: PropTypes.string.isRequired,
  }),
};

OverViewCard.defaultProps = {};

export default OverViewCard;
