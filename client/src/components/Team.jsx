import React from "react";
import CountryFlag from "./CountryFlag";

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
    <li>
      {fifa_code} - <CountryFlag name={country} /> {country}
    </li>
  );
};

export default Team;
