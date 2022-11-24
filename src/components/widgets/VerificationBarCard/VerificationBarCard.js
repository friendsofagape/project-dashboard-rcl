import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
// import useDateData from "../../hooks/useDateData";
import CardLayout from "../../components/CardLayout";
import Label from "../../components/Label";
import StackedBarChart from "../../components/StackedBarChart";
import useGetJsonPathdata from "../../hooks/useGetJsonPathdata";

const VerificationBarCard = ({
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

  const [graphdata, setGraphdata] = useState([]);

  // generate graph data for chart from json
  useEffect(() => {
    const graphDataTemp = [];
    Object.entries(currentBookdata["months"]).forEach(([key, val]) => {
      const monthobj = { name: key };
      graphdataKeys.forEach((graphkey) => {
        const elementValueSum = val[graphkey]?.reduce(
          (acc, key) => acc + key,
          0
        );
        monthobj[graphkey] = elementValueSum;
      });
      graphDataTemp.push(monthobj);
    });
    setGraphdata(graphDataTemp);
  }, [currentBookdata, graphdataKeys]);

  return (
    <>
      <CardLayout
        bgColor="#ffffff"
        width="auto"
        height="auto"
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
          width="auto"
          height="15rem"
          extraClass="my-2 mr-2"
        >
          <StackedBarChart
            data={{ graphData: graphdata, colors: graphColors }}
          />
        </CardLayout>
      </CardLayout>
    </>
  );
};

VerificationBarCard.propTypes = {
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

VerificationBarCard.defaultProps = {};

export default VerificationBarCard;
