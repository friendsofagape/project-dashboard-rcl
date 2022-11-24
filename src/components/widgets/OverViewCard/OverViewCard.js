import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import HeadBar from "../../components/HeadBar";
import Label from "../../components/Label";
import SemiDonutChart from "../../components/SemiDonutChart";
import useDateData from "../../hooks/useDateData";
import useGetJsonPathdata from "../../hooks/useGetJsonPathdata";

const OverViewCard = ({
  json,
  basePath,
  Head1,
  Head2,
  donutColorPallete,
  currentBook,
  donutdataKeys,
  donutPercentageKeys,
  IconOnclick,
}) => {
  const [totalSum, setTotalSum] = useState(0);
  const [donutData, setDonutData] = useState([]);
  const [percentage, setPercentage] = useState([]);

  // current month
  const [day, month, year] = useDateData();
  const [jsonBaseData, currentBookdata] = useGetJsonPathdata(
    basePath,
    json,
    currentBook
  );

  useEffect(() => {
    const donutTempData = [];
    // generate graphData
    let verseSum = 0;
    let perSum = 0;
    donutdataKeys.forEach((element, indx) => {
      const elementValueSum = currentBookdata["months"][month][element]?.reduce(
        (acc, ver) => acc + ver,
        0
      );
      verseSum += elementValueSum;
      if (donutPercentageKeys.includes(element)) {
        perSum += elementValueSum;
      }
      donutTempData.push({
        name: element,
        value: elementValueSum,
        fill: donutColorPallete[indx],
      });
    });
    setTotalSum(verseSum);
    setDonutData(donutTempData);
    // calc percentage
    const percent = Math.round((perSum / verseSum) * 100 * 10) / 10;
    setPercentage(percent);
  }, [
    donutColorPallete,
    donutdataKeys,
    donutPercentageKeys,
    month,
    currentBookdata,
  ]);

  return (
    <>
      <div className="max-w-[50%] ">
        <HeadBar
          button={true}
          IconOnclick={IconOnclick}
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
  json: PropTypes.object.isRequired,
  /** Json base path after Projects  - currentBook eg :("projectName/Books") */
  basePath: PropTypes.string.isRequired,
  /** Button onClick Fucntion*/
  IconOnclick: PropTypes.func,
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
