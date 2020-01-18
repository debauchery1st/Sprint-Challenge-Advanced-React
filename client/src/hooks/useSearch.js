import useLocalStorage from "./useLocalStorage";

const useSearch = ({ phrase, arr, ...etc }) => {
  const { keyname } = etc;

  const [searchInfo, setSearchInfo] = useLocalStorage("useSearch", {
    phrase,
    arr
  });

  const results = () =>
    keyname
      ? searchInfo.arr.filter(it => it[keyname].includes(phrase))
      : searchInfo.arr.filter(it => it.includes(phrase));

  const search = str => {
    setSearchInfo({
      phrase: str,
      arr
    });
  };

  return [results, search];
};

export default useSearch;
