import { useState } from "react";
import axios from "axios";

const useAPI = (apiPath, writeFn, returnAsObj) => {
  const [apiState, setApiState] = useState({ status: 0 });
  const getFromAPI = () =>
    axios
      .get(apiPath)
      .then(resp => {
        setApiState(resp);
        writeFn(resp.data);
      })
      .catch(err => console.log(err));
  // returns a function that calls the api  + calls writeStorage with the response data
  if (!returnAsObj) return [apiState, getFromAPI];
  return {
    state: apiState,
    get: getFromAPI
  };
};

const ringUseAPI = (ring, endpoints) => {
  /* 
    in = { keyname: {reader: [], writer: fn}, }
   out = { keyname: {api: {state: {}, get: fn }, local: },{reader: [], writer: fn}}
  */
  const newRing = {};
  Object.keys(ring).forEach(suName => {
    newRing[suName] = {
      api: useAPI(endpoints[suName], ring[suName].writer, true),
      local: ring[suName]
    };
  });
  return newRing;
};

export { ringUseAPI };

export default useAPI;
