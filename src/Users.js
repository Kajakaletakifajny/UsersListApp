import React, { Component } from "react";
import "./Users.css";
import UserList from "./UsersList";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
    this.myRef = React.createRef();
  }
  addUser = (event) => {
    event.preventDefault();
    console.log(this.myRef);
  };
  render() {
    return (
      <div className="users-main">
        <h1>List of users</h1>
        <form onSubmit={this.addUser}>
          <input type="text" placeholder="Enter name" ref={this.myRef}></input>
          <button>Add user</button>
        </form>
        <UserList userList={["Filip", "Julia"]} />
      </div>
    );
  }
}

export default Users;
