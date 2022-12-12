import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import CardLayout from "../../components/CardLayout";
import Label from "../../components/Label";
import useGetJsonPathdata from "../../hooks/useGetJsonPathdata";

const ErrorStatusCard = ({ json, basePath, Head, currentBook, dataKey }) => {
  // get data for type (verse / chapter )
  // const [day, month, year] = useDateData();
  const [data, setData] = useState("No Data");
  const [jsonBaseData, currentBookdata] = useGetJsonPathdata(
    basePath,
    json,
    currentBook
  );

  useEffect(() => {
    const dataValue = currentBookdata[dataKey].reduce(
      (acc, val) => acc + val,
      0
    );
    setData(dataValue);
  }, [currentBook, json, dataKey, currentBookdata]);

  return (
    <>
      <CardLayout
        bgColor="#ffffff"
        width="auto"
        height="auto"
        borderRadius="6px"
        extraClass="border-gray-200 border-2 pb-5 "
      >
        <div className="flex flex-col gap-5 py-2 justify-center items-center">
          <div className="flex flex-row">
            <Label color={"text-black"} extraClass={"font-semibold text-md"}>
              {Head}
            </Label>
          </div>
          <div className="flex flex-row">
            <Label
              color={"text-black"}
              extraClass={"font-bold text-2xl text-[#ff4d4d]"}
            >
              {data.toString()}
            </Label>
          </div>
        </div>
      </CardLayout>
    </>
  );
};

ErrorStatusCard.propTypes = {
  /** Json file */
  json: PropTypes.object.isRequired,
  /** Json base path after Projects  - currentBook eg :("projectName/Books") */
  basePath: PropTypes.string.isRequired,
  /** Heading */
  Head: PropTypes.string.isRequired,
  /** data keys to be fetched from json*/
  dataKey: PropTypes.string.isRequired,
  // /** current book details*/
  currentBook: PropTypes.shape({
    name: PropTypes.string.isRequired,
    jsonCode: PropTypes.string.isRequired,
  }),
};

ErrorStatusCard.defaultProps = {};

export default ErrorStatusCard;
