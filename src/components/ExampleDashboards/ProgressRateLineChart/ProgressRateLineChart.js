import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
// import useDateData from "../../hooks/useDateData";
import CardLayout from "../../components/CardLayout";
import Label from "../../components/Label";
import MultiLineChart from "../../components/MultiLineChart";
import useGetJsonPathdata from "../../hooks/useGetJsonPathdata";

const ProgressRateLineChart = ({
  json,
  basePath,
  Head,
  subHead,
  currentBook,
  graphColors,
  graphdataKeys,
}) => {
  // // current month
  // const [day, month, year] = useDateData();
  const [jsonBaseData, currentBookdata] = useGetJsonPathdata(
    basePath,
    json,
    currentBook
  );
  // generate graph data for chart from json
  const [graphdata, setGraphdata] = useState([]);

  useEffect(() => {
    const graphDataTemp = [];
    Object.entries(currentBookdata["months"]).forEach(([key, val]) => {
      const monthobj = { name: key };
      let sum = 0;
      graphdataKeys.forEach((graphkey) => {
        const elementValueSum = val[graphkey]?.reduce(
          (acc, key) => acc + key,
          0
        );
        sum += elementValueSum;
        monthobj[graphkey] = elementValueSum;
      });
      const totalHours = val["TotalHours"]?.reduce(
        (acc, hour) => acc + hour,
        0
      );
      monthobj["rate"] = sum === 0 ? 0 : sum / totalHours;
      graphDataTemp.push(monthobj);
    });
    setGraphdata(graphDataTemp);
  }, [currentBookdata, graphdataKeys]);

  return (
    <>
      <CardLayout
        bgColor="#ffffff"
        width="w-auto"
        height="h-auto"
        borderRadius="6px"
        extraClass="border-gray-200 border-2 "
      >
        <div className="flex flex-col mt-2 mx-16 ">
          <Label color={"text-black"} extraClass={"font-medium text-2xl"}>
            {Head}
          </Label>
          <Label color={"text-[#b8bec5]"} extraClass={"font-medium text-sm"}>
            {subHead}
          </Label>
        </div>
        <CardLayout
          bgColor="transparent"
          width="w-auto"
          height="h-[15rem]"
          extraClass="my-2 mr-2"
        >
          <MultiLineChart
            data={{
              graphData: graphdata,
              colors: graphColors,
              dataKeyNames: ["rate"],
            }}
          />
        </CardLayout>
      </CardLayout>
    </>
  );
};

ProgressRateLineChart.propTypes = {
  /** Json file */
  json: PropTypes.object.isRequired,
  /** Json base path after Projects  - currentBook eg :("projectName/Books") */
  basePath: PropTypes.string.isRequired,
  /** Heading */
  Head: PropTypes.string.isRequired,
  /** Sub Head */
  subHead: PropTypes.string,
  /** Colors for graph sections*/
  graphColors: PropTypes.arrayOf(PropTypes.string),
  /** data keys in json for graph sections*/
  graphdataKeys: PropTypes.arrayOf(PropTypes.string),
  // /** current book details*/
  currentBook: PropTypes.shape({
    name: PropTypes.string.isRequired,
    jsonCode: PropTypes.string.isRequired,
  }),
};

ProgressRateLineChart.defaultProps = {};

export default ProgressRateLineChart;
