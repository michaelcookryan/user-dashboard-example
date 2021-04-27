import React from "react";

const SortForm = ({ label, placeholder, handleSortByChange }) => (
  <div className="sort-form">
    <label>
      {label}
      <select
        className="sort"
        type="select"
        placeholder={placeholder}
        onChange={handleSortByChange}
      >
        <option value="name">Name</option>
        <option value="username">Username</option>
        <option value="email">Email</option>
      </select>
    </label>
  </div>
);
export default SortForm;
