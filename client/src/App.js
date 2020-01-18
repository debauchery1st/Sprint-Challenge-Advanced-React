import React from "react";
import { useEffect, useState } from "react";

// api management
import getEndPoints from "./endpoints";
import { ringUseAPI } from "./hooks/useAPI";

// local storage related
import useLocalStorage from "./hooks/useLocalStorage";
import useLocalKeyRing from "./hooks/useLocalKeyRing";

// components and dependencies
import useSorter from "./hooks/useSorter";
import Players from "./components/Players";
import NavigationBar from "./components/NavigationBar";
function App() {
  const [alreadyStarted, setAlreadyStarted] = useState(false);
  const endpoints = getEndPoints();
  const keyRing = useLocalKeyRing(
    Object.keys(endpoints.wordlcupAPI),
    useLocalStorage
  );
  const apiRing = ringUseAPI(keyRing, endpoints.wordlcupAPI);
  const [sorter] = useSorter({
    sortByKey: "name",
    sortOrder: "asc",
    unsorted: apiRing.players.api.state.data || []
  });

  useEffect(() => {
    if (alreadyStarted) return;
    setAlreadyStarted(true);
    apiRing.players.api.get();
  }, [alreadyStarted, apiRing]);

  const refreshRing = namedKey => {
    if (!namedKey.length) {
      Object.keys(apiRing).forEach(keyName => apiRing[keyName].api.get());
      return;
    }
    apiRing[namedKey].api.get();
  };

  return (
    <div className="App">
      <span className="Test-Hook" onClick={refreshRing}>
        refresh the API Ring
      </span>
      <NavigationBar menufrom={apiRing} />
      <Players
        lastUpdated={String(Date())}
        apiState={apiRing.players.api.state}
        loaded={true}
        sorter={sorter}
        refreshAPI={refreshRing}
      />
    </div>
  );
}

export default App;
