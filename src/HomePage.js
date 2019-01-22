import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import UserImages from './UserImages'
import LoadingIndicator from './LoadingIndicator'


class HomePage extends Component {
  state = {
    users: [],
    isLoading: true
  }

  componentDidMount() {
    axios.get('https://insta-oct18.nextacademy.com/api/v1/users')
    .then( result => {
        this.setState({
          users: result.data,
          isLoading: false})
      }
    ).catch(
      error => {
        console.log('ERROR ', error)
      }
    )
  }

  returnUsers = () => {
    return (
      <ul>
        {
          this.state.users.map(user =>
            <li>
              <UserImages id={user.id} />
              {user.id}: {user.username}
            </li>
          )
        }
      </ul>
    )
  }

  returnLoading = () => {
    return (
      <img src="loading.gif"></img>
    )
  }

  render() {

    return (
      <div>
        <h1>Home Pages</h1>
        { this.state.isLoading ? 
          <LoadingIndicator src="loading.gif" /> : 
          this.returnUsers() 
        }
      </div>
    )
  }
}

export default HomePage;
