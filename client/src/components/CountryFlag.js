import React from "react";

// supported countries https://www.countryflags.io/#countries
const style = "shiny";

// TODO: add coutries
const countries = [
  { name: "Armenia", code: "AM" },
  { name: "Argentina", code: "AR" },
  { name: "Australia", code: "AU" },
  { name: "Brazil", code: "BR" },
  { name: "Chile", code: "CL" },
  { name: "Canada", code: "CA" },
  { name: "England", code: "GB" },
  { name: "France", code: "FR" },
  { name: "Germany", code: "DE" },
  { name: "Italy", code: "IT" },
  { name: "Netherlands", code: "NL" },
  { name: "Norway", code: "NO" },
  { name: "Spain", code: "ES" },
  { name: "Sweden", code: "SE" },
  { name: "United States", code: "US" },
  { name: "New Zealand", code: "NZ" },
  { name: "Korea Republic", code: "KR" },
  { name: "Thailand", code: "TH" },
  { name: "China PR", code: "CN" },
  { name: "Japan", code: "JP" },
  { name: "South Africa", code: "ZA" },
  { name: "Cameroon", code: "CM" },
  { name: "Jamaica", code: "JM" },
  { name: "USA", code: "US" },
  { name: "Nigeria", code: "NG" }
];

const flagCodes = (name, size) => {
  if (name === "Scotland")
    return "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Flag_of_Scotland.svg/64px-Flag_of_Scotland.svg.png";
  // return a flag img for country name.
  const country = countries.find(country => country.name === name);
  if (country)
    return `https://www.countryflags.io/${country.code}/${style}/${size ||
      64}.png`;
  return false;
};

const CountryFlag = props => {
  return flagCodes(props.name) ? (
    <img alt={props.name + " flag"} src={flagCodes(props.name)} />
  ) : (
    ""
  );
};

export default CountryFlag;
