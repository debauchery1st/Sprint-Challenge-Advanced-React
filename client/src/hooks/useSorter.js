import useLocalStorage from "./useLocalStorage";

const isNumber = o =>
  Math.abs(Number(JSON.parse(JSON.stringify({ test: o })).test) + 0) >= 0;
const valueOf = o => (isNumber(o) ? Number(o) : o[0].charCodeAt(0));

const useSorter = ({ sortByKey, sortOrder, ...etc }) => {
  const [sortInfo, setSortInfo] = useLocalStorage("useSorter", {
    sortByKey,
    sortOrder
  });
  const sortList = (keyname, arr) => {
    return arr.sort((a, b) =>
      sortInfo.sortOrder === "asc"
        ? valueOf(a[keyname]) - valueOf(b[keyname])
        : valueOf(b[keyname]) - valueOf(a[keyname])
    );
  };
  const sorted = (keyname, arr) => {
    setSortInfo({
      sortByKey: keyname,
      sortOrder:
        keyname === sortInfo.sortByKey && sortInfo.sortOrder === "des"
          ? "asc"
          : "des"
    });
    return sortList(keyname, arr);
  };
  return [sorted];
};
export { isNumber, valueOf };
export default useSorter;
