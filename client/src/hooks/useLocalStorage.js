import { useState } from "react";

const useLocalStorage = (key, initalValue) => {
  const store = window.localStorage;
  const [localState, setLocalState] = useState({
    [key]: JSON.parse(store.getItem(key)) || initalValue
  });
  const persist = value => {
    setLocalState(value); // update the state
    store.setItem(key, JSON.stringify(value)); // update the cookie
  };
  return [localState, persist];
};

export default useLocalStorage;
