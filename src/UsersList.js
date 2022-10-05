import React, { Component } from "react";
import "./UsersList.css";

function UserList(props) {
  return (
    <ul className="list">
      <li>
        Robert <span>x</span>
      </li>
      <li>
        Kacper <span>x</span>
      </li>
    </ul>
  );
}

export default UserList;
