import React from "react";
import PropTypes from "prop-types";
import Badge from "../Badge";

const Table = ({ headBg, tableHead, headContents, tableContents }) => {
  return (
    <>
      <div className="max-w-[100%]">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-x-auto">
                {/* Header */}
                <div
                  className={` bg-[${headBg}] flex flex-row text-sm p-2 items-center border-t-2 border-x-2 border-[#eeeeee] rounded-t-md`}
                >
                  <div class="grow-[1] font-semibold">
                    <div>{tableHead}</div>
                  </div>
                  <div class="grow-[2] flex flexrow justify-end gap-2">
                    {headContents?.length > 0 &&
                      headContents?.map((content) => {
                        return <>{content}</>;
                      })}
                  </div>
                </div>
                {/* Header */}
                <table className="min-w-full ">
                  <thead className="border-b"></thead>
                  <tbody>
                    {tableContents.length > 0 &&
                      tableContents?.map((row, rindx) => {
                        return (
                          <tr
                            key={rindx}
                            className="border-2 border-[#eeeeee] text-xs transition duration-300 ease-in-out hover:bg-[#e4f2ff] active:bg-[#bfd9f1]"
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-xs font-medium text-gray-900 ">
                              <Badge
                                BadgeType="custom"
                                bgColor={headBg}
                                color="#107be6"
                                borderColor={headBg}
                                fontFamily="font-serif"
                                fontSize="text-xs"
                                fontWeight="font-normal"
                              >
                                {Number(rindx) + 1}
                              </Badge>
                            </td>
                            {row.map((col, cindx) => {
                              return (
                                <td
                                  key={`${rindx}${cindx}`}
                                  className="px-6 py-4 whitespace-nowrap text-xs font-medium text-gray-900 "
                                >
                                  {col}
                                </td>
                              );
                            })}
                          </tr>
                        );
                      })}
                    {/* <tr className="border-2 border-[#eeeeee]">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 ">
                        <Badge
                          BadgeType="custom"
                          bgColor={headBg}
                          color="#107be6"
                          borderColor={headBg}
                          fontFamily="font-serif"
                          fontSize="text-xs"
                          fontWeight="font-normal"
                        >
                          1
                        </Badge>
                      </td>
                      <td className="text-xs text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                        Cell
                      </td>
                    </tr> */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Table.propTypes = {
  /** Table Head */
  tableHead: PropTypes.string,
  /** Table Head (array of components )*/
  headContents: PropTypes.arrayOf(PropTypes.node),
  /** Table Head Bg Color */
  headBg: PropTypes.string,
  /** Table body row content
   * (column matrix of component or string [[R1C1,R1C2][R2C1,R2C2]] )
   * Excluding Table Number
   */
  tableContents: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.node, PropTypes.string]))
  ),
  // /** extra class */
  // extraClass: PropTypes.string,
};

Table.defaultProps = {
  headBg: "#f9f9f9",
};

export default Table;
