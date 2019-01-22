import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    users: [
      {
        id: 1,
        username: "blake",
        profileImage: "http://next-curriculum-instagram.s3.amazonaws.com/idol2-blake.jpg"
      },
      {
        id: 2,
        username: "ryanG",
        profileImage: "http://next-curriculum-instagram.s3.amazonaws.com/idol1-ryan.jpg"
      },
      {
        id: 3,
        username: "bigfan",
        profileImage: "http://next-curriculum-instagram.s3.amazonaws.com/bigfan-9AE7468E-4C35-41D1-AA68-31939891B5E1.png"
      }
    ]
  }
  render() {
    return (
      <div>
        <h1>Home Pages</h1>
        <ul>
          {
            this.state.users.map(user =>
              <li>
                <img src={user.profileImage}></img>
                {user.id}: {user.username}
              </li>
            )
          }
        </ul>
      </div>
    )
  }
}

export default App;
