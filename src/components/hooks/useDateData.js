const useDateData = () => {
  const month = [
    "jan",
    "feb",
    "mar",
    "apr",
    "May",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];

  const d = new Date();
  const monthName = month[d.getMonth()];
  const year = d.getFullYear();
  const day = d.getDate();
  return [day, monthName, year];
};

export default useDateData;
