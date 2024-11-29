import React from "react";

const FilterInput = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Filter by name"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="filter-input"
    />
  );
};

export default FilterInput;
