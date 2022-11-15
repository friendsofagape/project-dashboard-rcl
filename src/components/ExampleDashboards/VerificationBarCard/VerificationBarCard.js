import React from "react";
import PropTypes from "prop-types";
// import useDateData from "../../hooks/useDateData";
import CardLayout from "../../components/CardLayout";
import Label from "../../components/Label";
import StackedBarChart from "../../components/StackedBarChart";

const VerificationBarCard = ({
  json,
  Head,
  subHead,
  currentBook,
  graphColors,
  graphdataKeys,
}) => {
  // // current month
  // const [day, month, year] = useDateData();
  // generate graph data for chart from json
  const graphdata = [];

  Object.entries(json[currentBook.jsonCode]).forEach(([key, val]) => {
    const monthobj = { name: key };
    graphdataKeys.forEach((graphkey) => {
      monthobj[graphkey] = val[graphkey];
    });
    graphdata.push(monthobj);
  });

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
  json: PropTypes.string.isRequired,
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
