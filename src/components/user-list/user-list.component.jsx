import React from "react";
import User from "../user/user.component.jsx";

const UserList = ({ users }) => (
  <ul className="user-list list-unstyled ">
    {users.map((user) => (
      <User user={user} key={user.id} />
    ))}
  </ul>
);
export default UserList;
