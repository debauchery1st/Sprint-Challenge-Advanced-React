import React from "react";
import { NavLink } from "react-router-dom";
import "tachyons";

const NavigationBar = props => {
  return (
    <nav className="bt bb tc mw7 center mt4">
      <NavLink
        className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l"
        to="/"
      >
        Players
      </NavLink>
      <NavLink
        className="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l"
        to="/teams"
      >
        Teams
      </NavLink>
      <NavLink
        className="f6 f5-l link bg-animate black-80 hover-bg-light-blue dib pa3 ph4-l"
        to="/matches"
      >
        Matches
      </NavLink>
      <NavLink
        className="f6 f5-l link bg-animate black-80 hover-bg-light-pink dib pa3 ph4-l"
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l"
        to="/contact"
      >
        Contact
      </NavLink>
    </nav>
  );
};

export default NavigationBar;
