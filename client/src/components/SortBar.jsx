import React from "react";
import "./SortBar.css";
const SortBar = props => {
  const handleClick = sortBy => {
    console.log(sortBy);
    props.handleSort(sortBy);
  };
  return (
    <span className="SortBar">
      {props.sortKeys.map((category, idx) => (
        <span
          className="Category"
          key={idx}
          onClick={() => handleClick(category)}
        >
          {category.toUpperCase()}
        </span>
      ))}
    </span>
  );
};

export default SortBar;
