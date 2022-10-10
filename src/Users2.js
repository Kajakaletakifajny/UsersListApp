import React, { useState } from "react";
import "./Users.css";
import UsersList from "./UsersList";

const UsersStates = () => {
  const [users, setUsers] = useState([]);
  let myRef = React.createRef();
  const deleteUser = (userIndex) => {
    // console.log(userIndex);
    setUsers(users.filter((user, index) => index !== userIndex));
  };

  const addUser = (event) => {
    event.preventDefault();
    let newUser = myRef.current.value;
    myRef.current.value = "";
    if (newUser !== "") {
      setUsers(users.concat(newUser));
    } else {
      alert("puste");
    }
  };

  return (
    <div className="users-main">
      <h1>Users List</h1>
      <form onSubmit={addUser}>
        <input
          ref={myRef}
          type="text"
          placeholder="Enter name"
          maxlength="30"
        />
        <button type="submit">Add user</button>
      </form>
      <UsersList usersList={users} removeMethod={deleteUser} />
    </div>
  );
};

export default UsersStates;