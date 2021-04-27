import React from "react";
import SearchForm from "../../components/search-form/search-form.component.jsx";
import SortForm from "../../components/sort-form/sort-form.component.jsx";
import UserList from "../../components/user-list/user-list.component.jsx";

const HomePage = ({
  filteredUsers,
  handleSearchChange,
  handleSortByChange,
}) => (
  <div className="homepage">
    <div className="homepage__header">
      <div className="header__title">
        <h2>Users</h2>
      </div>
      <div className="header__forms">
        <SearchForm label="search" handleSearchChange={handleSearchChange} />

        <SortForm
          label="sort by"
          placeholder="Name"
          handleSortByChange={handleSortByChange}
        />
      </div>
    </div>
    <UserList users={filteredUsers}></UserList>
  </div>
);
export default HomePage;
