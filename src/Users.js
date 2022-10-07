import React, { Component } from "react";
import "./Users.css";
import UserList from "./UsersList";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
    this.enterNameReference = React.createRef();
  }

  addUser = (event) => {
    event.preventDefault();
    let newUser = this.enterNameReference.current.value;
    this.setState((state) => {
      return { users: state.users.concat(newUser) };
    }); //referencja, value moza zamienic innymi
    console.log(this.users);
    this.enterNameReference.current.value = "";
  };

  removeUser = (userIndex) => {
    this.setState((state) => {
      return {
        users: state.users.filter((user, index) => {
          return index !== userIndex;
        }),
      };
    });
  };
  //funkcja strzalkowa (strzalka) musi byc w tej samej lini co dalsza jej czesc

  render() {
    return (
      <div className="users-main">
        <h1>List of users</h1>
        <form onSubmit={this.addUser}>
          {/* funkcja bez nawiasow to funkcja callback, jest wykonywana podczas jej wywolania, a funkcja z nawiasami wykonuje sie po kolei w programie */}
          <input
            type="text"
            placeholder="Enter name"
            ref={this.enterNameReference}
          ></input>
          <button>Add user</button>
        </form>
        <UserList userList={this.state.users} removeMethod={this.removeUser} />
      </div>
    );
  }
}

export default Users;
