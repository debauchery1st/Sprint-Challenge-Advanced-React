import React from "react";
import "./Player.css";

const Player = ({ stats }) => {
  const name = stats.name || "";
  const country = stats.country || "";
  const searches = stats.searches || "";
  return (
    <span className="Player">
      <span className="Name">{name}</span>
      <span className="Country">{country}</span>
      <span className="Searches"> {searches}</span>
    </span>
  );
};

export default Player;
