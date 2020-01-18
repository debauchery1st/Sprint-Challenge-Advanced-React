import { useState } from "react";

const useLocalStorage = (key, initalValue, returnAsObj) => {
  const store = window.localStorage;
  const [localState, setLocalState] = useState({
    [key]: JSON.parse(store.getItem(key)) || initalValue
  });
  const persist = value => {
    setLocalState(value); // update the state
    store.setItem(key, JSON.stringify(value)); // update the cookie
  };
  if (!returnAsObj) return [localState, persist];
  return { reader: localState, writer: persist };
};

export default useLocalStorage;
