import React from "react";
import "./styles/SortBar.css";

const SortBar = props => {
  const handleClick = sortBy => {
    props.handleSort(sortBy);
  };
  return (
    <span className="SortBar">
      {props.sortKeys.map((category, idx) => (
        <button
          key={idx}
          className="f5 grow no-underline ba bw1 ph3 pv2 mb2 dib dark-grey"
          onClick={() => handleClick(category)}
        >
          {category.toUpperCase()}
        </button>
      ))}
    </span>
  );
};

export default SortBar;
