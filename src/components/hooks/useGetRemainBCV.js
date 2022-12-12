const useGetRemainBCV = (currentBookdata, currentBook, month) => {
  // const MONTHS = [
  //   "jan",
  //   "feb",
  //   "mar",
  //   "apr",
  //   "may",
  //   "jun",
  //   "jul",
  //   "aug",
  //   "sep",
  //   "oct",
  //   "nov",
  //   "dec",
  // ];

  // total verse
  const totalVerses = currentBookdata["totalVerses"]?.reduce(
    (acc, value) => acc + Number(value),
    0
  );
  // total Chapters
  const totalChapters = currentBookdata["totalVerses"]?.length;

  // Remaning Verse (inprogress + pending )
  const remainCheckKeys = ["inprogress", "pending"];
  let remainVerses = 0;
  let remainChapter = 0;
  Object.entries(currentBookdata["months"][month])?.forEach(([key, val]) => {
    if (remainCheckKeys.includes(key)) {
      // count verse
      const vcount = val?.reduce((acc, data) => acc + data, 0);
      remainVerses += vcount;
    }
  });
  // check chapters pending
  for (let i = 0; i < totalChapters; i++) {
    if (
      currentBookdata["months"][month]["inprogress"][i] > 0 ||
      currentBookdata["months"][month]["pending"][i] > 0
    ) {
      remainChapter += 1;
    }
  }

  return [remainVerses, remainChapter, totalVerses, totalChapters];
};

export default useGetRemainBCV;
