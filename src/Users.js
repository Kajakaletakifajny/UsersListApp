import React, { Component } from "react";
import "./Users.css";
import UserList from "./UsersList";

class Users extends Component {
  render() {
    return (
      <div className="users-main">
        <h1>List of users</h1>
        <form>
          <input type="text" placeholder="Enter name"></input>
          <button>Add user</button>
        </form>
        <UserList />
      </div>
    );
  }
}

export default Users;
