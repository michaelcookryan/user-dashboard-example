import React from "react";

const SearchForm = ({ label, handleSearchChange }) => (
  <div className="search-form">
    <label>
      {label}
      <input className="seach" type="search" onChange={handleSearchChange} />
    </label>
  </div>
);
export default SearchForm;
