import React from "react";
import { Link } from "react-router-dom";

const User = ({ user }) => (
  <li className="user-item">
    <Link className="user-item__link" to={`/${user.id}`}>
      <div className="user-item__avitar"></div>
      <div className="user-item__column--left">
        <div className="user-item__names">
          <p>{user.name}</p>
          <p> {user.username} </p>
        </div>
      </div>
    </Link>
    <div className="user-item__email">
      <a href={`mailto:${user.email}`}>{user.email}</a>
    </div>
  </li>
);
export default User;
