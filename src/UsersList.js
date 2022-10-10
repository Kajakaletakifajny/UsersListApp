import React, { Component } from "react";
import "./UsersList.css";

function UserList(props) {
  let usersList = props.usersList; //pobranie zawartosci z userList i wstawienie do UserList
  
  let usersLiElements = usersList.map((user, index) => {
    return (
      <li key={index}>
        {user} <span onClick={()=>{props.removeMethod(index)}}>x</span>
      </li>
    );
  });
  return <ul className="list">{usersLiElements}</ul>;
}

export default UserList;
