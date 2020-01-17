import React from "react";
import { useEffect, useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import useAPI from "./hooks/useAPI";
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

  useEffect(() => {
    if (started) return;
    setStarted(true);
    getPlayers();
  }, [httpStatus, getPlayers, started]);

  return (
    <div className="App">
      <Players
        lastUpdated={latest}
        apiState={apiState}
        athletes={readStorage.wwcPlayers || []}
        loaded={readStorage.wwcPlayers ? true : false}
      />
    </div>
  );
}

export default App;
