import React, { Component } from "react";
import "./UsersList.css";

function UserList(props) {
  let userList = props.userList; //pobranie zawartosci z userList i wstawienie do UserList
  let userLiElements = userList.map((user, index) => {
    return (
      <li key={index}>
        {user} <span>x</span>
      </li>
    );
  });
  return <ul className="list">{userLiElements}</ul>;
}

export default UserList;
