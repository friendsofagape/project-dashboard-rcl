import { default as lodash } from "lodash";
import PropTypes from "prop-types";
import { useEffect } from "react";

const useGetJsonPathdata = (basePath, json, currentBook) => {
  if (basePath && json && currentBook) {
    const baseData = lodash.get(json, `projects.${basePath.replace("/", ".")}`);
    const currentData = baseData[[currentBook.jsonCode]];
    return [baseData, currentData];
  } else {
    return [{}, {}];
  }
};
useGetJsonPathdata.prototype = {
  basePath: PropTypes.string.isRequired,
  json: PropTypes.object.isRequired,
  currentBook: PropTypes.shape({
    name: PropTypes.string.isRequired,
    jsonCode: PropTypes.string.isRequired,
  }),
};

export default useGetJsonPathdata;
