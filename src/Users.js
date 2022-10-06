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
    let newUser = this.myRef.current.value;
    this.setState((state)=>{return({users: state.users.push(newUser)})}); //referencja, value moza zamienic innymi
    console.log(this.users);
  };
  render() {
    return (
      <div className="users-main">
        <h1>List of users</h1>
        <form onSubmit={this.addUser}>
          <input type="text" placeholder="Enter name" ref={this.myRef}></input>
          <button>Add user</button>
        </form>
        <UserList userList={this.state.users} />
      </div>
    );
  }
}

export default Users;
