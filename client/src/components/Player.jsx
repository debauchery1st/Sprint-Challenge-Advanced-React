import React from "react";

const Player = ({ stats }) => {
  const name = stats.name || "";
  return <li>{name}</li>;
};

export default Player;
