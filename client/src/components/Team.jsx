import React from "react";

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
      {fifa_code} - {country}
    </li>
  );
};

export default Team;
