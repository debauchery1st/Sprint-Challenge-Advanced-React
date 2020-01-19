import React, { useState, useEffect } from "react";
import Match from "./Match";

const Matches = props => {
  const { matchList, refreshAPI } = props;
  const [matches, setMatches] = useState([...matchList()]);
  useEffect(() => {
    if (matches.length === 0) {
      console.log("...matches");
      refreshAPI();
      setMatches([...matchList()]);
    }
  }, [matches, setMatches, refreshAPI, matchList]);
  const renderMatches = () => matches.map(m => <Match game={m} />);

  console.log(props);
  return (
    <article className="pa3 pa5-ns">
      <h1 className="f4 bold center mw6">Matches</h1>
      <ul className="list pl0 ml0 center mw6 ba b--light-silver br2">
        {renderMatches()}
      </ul>
    </article>
  );
};

export default Matches;
