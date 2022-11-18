import React from "react";
import PropTypes from "prop-types";
import CardLayout from "../../components/CardLayout";
import Label from "../../components/Label";
import Badge from "../../components/Badge";
import PieProgress from "../../components/PieProgress";
import useGetRemainBCV from "../../hooks/usegetRemainBCV";
import useDateData from "../../hooks/useDateData";
import useGetJsonPathdata from "../../hooks/useGetJsonPathdata";

const RemainingStatusCard = ({
  type,
  json,
  Head,
  basePath,
  currentBook,
  badgeType,
  pieFill,
  pieBorder,
  pieRadius,
}) => {
  // get data for type (verse / chapter )
  const [day, month, year] = useDateData();
  const [jsonBaseData, currentBookdata] = useGetJsonPathdata(
    basePath,
    json,
    currentBook
  );
  const [remainVerses, remainChapter, totalVerses, totalChapters] =
    useGetRemainBCV(currentBookdata, currentBook, month);
  // percentage find
  let percentage = 0;
  if (type === "verse") {
    percentage = Math.round(((remainVerses * 100) / totalVerses) * 10) / 10;
  } else {
    percentage = Math.round(((remainChapter * 100) / totalChapters) * 10) / 10;
  }
  return (
    <>
      <CardLayout
        bgColor="#ffffff"
        width="w-auto"
        height="h-auto"
        borderRadius="6px"
        extraClass="border-gray-200 border-2 p-5"
      >
        <div className="flex flex-col gap-2 ">
          <div className="flex flex-row justify-start">
            <Label color={"text-black"} extraClass={"font-semibold text-sm"}>
              {Head}
            </Label>
          </div>
          <div className="flex flex-row justify-around items-center ">
            <div className="font-bold text-sm">
              {type === "verse" ? remainVerses : remainChapter}
            </div>
            <div>
              <Badge BadgeType={badgeType}>{percentage}%</Badge>
            </div>
          </div>
          <div className="flex flex-row justify-center">
            <PieProgress
              filled={percentage}
              radius={pieRadius}
              bgColor={pieFill}
              borderColor={pieBorder}
            />
          </div>
        </div>
      </CardLayout>
    </>
  );
};

RemainingStatusCard.propTypes = {
  /** type verse/chapter */
  type: PropTypes.oneOf(["verse", "chapter"]),
  /** Json file */
  json: PropTypes.object.isRequired,
  /** Json base path after Projects  - currentBook eg :("projectName/Books") */
  basePath: PropTypes.string.isRequired,
  /** Heading */
  Head: PropTypes.string.isRequired,
  /** badgeType pre defined type */
  badgeType: PropTypes.string.isRequired,
  /** Color for Pie fill*/
  pieFill: PropTypes.string.isRequired,
  /** Color for Pie border*/
  pieBorder: PropTypes.string.isRequired,
  /** radius of Pie in px*/
  pieRadius: PropTypes.string.isRequired,
  /** data keys in json for graph sections*/
  graphdataKeys: PropTypes.arrayOf(PropTypes.string),
  // /** current book details*/
  currentBook: PropTypes.shape({
    name: PropTypes.string.isRequired,
    jsonCode: PropTypes.string.isRequired,
  }),
};

RemainingStatusCard.defaultProps = {
  type: "verse",
};

export default RemainingStatusCard;
