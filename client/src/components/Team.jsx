import React from "react";
import CountryFlag from "./CountryFlag";
import "./styles/Team.css";
const Team = ({ api }) => {
  // console.log(api);
  const {
    // id,
    country,
    // alternate_name,
    fifa_code
    // group_id,
    // group_letter
  } = api;
  return (
    <article className="Team mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
      {fifa_code} <CountryFlag name={country} /> {country}
    </article>
  );
};

export default Team;
