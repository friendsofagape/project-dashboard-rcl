import React, { useState } from "react";
import PropTypes from "prop-types";
import Badge from "../Badge";

const TableExtended = ({
  headBg,
  tableHead,
  headContents,
  tableContents,
  tableChildContents,
  tableChildHeads,
  tableChildHeadContents,
}) => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [openChildTable, setOpenChildTable] = useState(false);
  console.log({ selectedRow, openChildTable });

  const handleOpenChildTable = (rowindx) => {
    if (rowindx === selectedRow || !openChildTable) {
      setOpenChildTable(!openChildTable);
    }
  };

  return (
    <>
      <div className="max-w-[100%]">
        <div className="grid grid-cols-2">
          <div className="">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-x-auto">
                  {/* Header */}
                  <div
                    className={`bg-[${headBg}] flex flex-row text-sm p-2 items-center border-[#eeeeee] border-t-2 border-x-2 rounded-tl-md`}
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
                              onClick={() => {
                                setSelectedRow(rindx);
                                handleOpenChildTable(rindx);
                              }}
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
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {/* table section 2  */}
          {openChildTable && (
            <div className="">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="overflow-x-auto">
                    {/* Header */}
                    <div
                      className={`bg-[${headBg}] flex flex-row text-sm p-2 items-center border-[#eeeeee] border-t-2 border-x-2 rounded-tr-md`}
                    >
                      <div class="grow-[1] font-semibold">
                        <div>
                          {tableChildHeads?.length > 0 &&
                            tableChildHeads[selectedRow]}
                        </div>
                      </div>
                      <div class="grow-[2] flex flexrow justify-end gap-2">
                        {tableChildHeadContents?.length > 0 &&
                          tableChildHeadContents?.map((content) => {
                            return <>{content}</>;
                          })}
                      </div>
                    </div>
                    {/* Header */}
                    <table className="min-w-full ">
                      <thead className="border-b"></thead>
                      {tableChildContents?.length > 0 &&
                      tableChildContents[selectedRow]?.length > 0 ? (
                        <tbody>
                          {tableChildContents[selectedRow]?.map(
                            (row, rindx) => {
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
                                      {`${Number(selectedRow) + 1}.${
                                        Number(rindx) + 1
                                      }`}
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
                            }
                          )}
                        </tbody>
                      ) : (
                        <tbody>
                          <tr>
                            <td className="p-5 font-medium text-sm flex flex-row justify-center">
                              No Data
                            </td>
                          </tr>
                        </tbody>
                      )}
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

TableExtended.propTypes = {
  /** Table Head */
  tableHead: PropTypes.string,
  /** Table Head (array of components )*/
  headContents: PropTypes.arrayOf(PropTypes.node),
  /** Table Head Bg Color */
  headBg: PropTypes.string,
  /** Table body row content
   * (column matrix of component or string [[R1C1,R1C2],[R2C1,R2C2]] )
   * Excluding Table Number
   */
  tableContents: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.node, PropTypes.string]))
  ),
  /** contents of each row of main table,
   * If no child pass [],
   * main and child contents should be at same index, Sameple Data :
   * [ [ [R1-r1c1, R1-r1c2],[R1-r2c1, R1-r2c2] ], [ [R2-r1c1, R2-r1c2],[R2-r2c1, R2-r2c2],[R2-r3c1, R2-r3c2]  ], ]
   * */
  tableChildContents: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.node, PropTypes.string]))
    )
  ),
  /** Child Table headings array [ R1-head, R2-head ] */
  tableChildHeads: PropTypes.arrayOf(PropTypes.string),
  /** Table Head icons/labels (array of components )*/
  tableChildHeadContents: PropTypes.arrayOf(PropTypes.node),
  // /** extra class */
  // extraClass: PropTypes.string,
};

TableExtended.defaultProps = {
  headBg: "#f9f9f9",
};

export default TableExtended;
