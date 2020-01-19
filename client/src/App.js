import React from "react";
import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
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
import Teams from "./components/Teams";
import Matches from "./components/Matches";

function App() {
  const [alreadyStarted, setAlreadyStarted] = useState(false);
  const endpoints = getEndPoints();
  const apiRing = ringUseAPI(
    useLocalKeyRing(Object.keys(endpoints.wordlcupAPI), useLocalStorage),
    endpoints.wordlcupAPI
  );
  const [sorter] = useSorter({
    sortByKey: "name",
    sortOrder: "asc",
    unsorted: apiRing.players.api.state.data || []
  });
  const teamList = () => {
    const localSource = apiRing.teams.local.reader.teams
      ? apiRing.teams.local.reader.teams
      : [];
    const remoteSource = apiRing.teams.api.state.data;
    return remoteSource || localSource;
  };
  const matchList = () => {
    const localSource = apiRing.matches.local.reader.matches
      ? apiRing.matches.local.reader.matches
      : [];
    const remoteSource = apiRing.matches.api.state.data;
    return remoteSource || localSource;
  };
  useEffect(() => {
    if (alreadyStarted) return;
    setAlreadyStarted(true);
    apiRing.players.api.get();
    apiRing.teams.api.get();
    apiRing.matches.api.get();
  }, [alreadyStarted, apiRing]);

  const refreshRing = namedKey => {
    if (!namedKey.length) {
      Object.keys(apiRing).forEach(keyName => apiRing[keyName].api.get());
      return;
    }
    apiRing[namedKey].api.get();
  };
  const DEBUG_API = false;
  return (
    <div className="App">
      {DEBUG_API ? (
        <button
          onClick={refreshRing}
          className="no-underline near-white bg-animate bg-near-black hover-bg-gray inline-flex items-center ma2 tc br2 pa2"
          title="TESTING"
        >
          <span className="f6 ml3 pr2">refresh API ring</span>
        </button>
      ) : (
        ""
      )}
      <NavigationBar menufrom={apiRing} />
      <Switch>
        <Route path="/" exact>
          <Players
            lastUpdated={String(Date())}
            apiState={apiRing.players.api.state}
            loaded={true}
            sorter={sorter}
            refreshAPI={refreshRing}
          />
        </Route>
        <Route path="/teams" exact>
          <Teams teamList={teamList} refreshAPI={() => refreshRing("teams")} />
        </Route>
        <Route path="/matches">
          <Matches
            matchList={matchList}
            refreshAPI={() => refreshRing("matches")}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
