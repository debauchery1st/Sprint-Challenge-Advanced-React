import { useState } from "react";
import axios from "axios";

const useAPI = (apiPath, writeStorage) => {
  const [apiState, setApiState] = useState({ status: 0 });
  const getFromAPI = () =>
    axios
      .get(apiPath)
      .then(resp => {
        setApiState(resp);
        writeStorage(resp.data);
      })
      .catch(err => alert(err));
  // returns a function that calls the api  + calls writeStorage with the response data
  return [apiState, getFromAPI];
};

export default useAPI;
