import React from "react";
import { useEffect, useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import useAPI from "./hooks/useAPI";
import useSorter from "./hooks/useSorter";
import Players from "./components/Players";

function App() {
  const endpoints = { players: "http://localhost:5000/api/players" };
  const [readStorage, writeStorage] = useLocalStorage("wwcPlayers", {
    athletes: []
  });
  const [apiState, getPlayers] = useAPI(endpoints["players"], writeStorage);
  const [started, setStarted] = useState(false);
  const httpStatus = apiState.status;
  const latest = String(Date());
  const [sorter, updateList] = useSorter({
    sortByKey: "name",
    sortOrder: "asc",
    unsorted: apiState.data || []
  });

  useEffect(() => {
    if (started) return;
    setStarted(true);
    getPlayers();
  }, [httpStatus, getPlayers, started, apiState.data, updateList]);

  return (
    <div className="App">
      <Players
        lastUpdated={latest}
        apiState={apiState}
        loaded={readStorage.wwcPlayers ? true : false}
        sorter={sorter}
      />
    </div>
  );
}

export default App;
