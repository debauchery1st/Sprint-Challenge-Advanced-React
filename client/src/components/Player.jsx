import React from "react";
import "./styles/Player.css";
import CountryFlag from "./CountryFlag.js";
import "tachyons";
// import playerURL from "./fifa";

const Player = ({ stats }) => {
  const name = stats.name || "";
  const country = stats.country || "";
  const searches = stats.searches || "";
  // const openPlayer = () => playerURL(name);
  return (
    <article className="Player mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
      <article className="tc">
        <CountryFlag
          name={country}
          className="br-100 h3 w3 dib"
          title={`${country} flag`}
        />
        <h1 className="f3 mb2">{name}</h1>
        <h2 className="f5 fw4 gray mt0">{searches}</h2>
      </article>
    </article>
  );
};

export default Player;
