import React from "react";
import { useState, useEffect } from "react";
import Team from "./Team";
import "./styles/Teams.css";

const Teams = ({ teamList, refreshAPI }) => {
  const [teams, setTeams] = useState([...teamList()]);
  useEffect(() => {
    if (teams.length === 0) {
      console.log("...teams");
      refreshAPI();
    }
  }, [teams, setTeams, refreshAPI]);
  return (
    <React.Fragment>
      <span className="Teams">
        {teams.map((team, idx) => (
          <Team key={idx} api={team} />
        ))}
      </span>
    </React.Fragment>
  );
};

export default Teams;
