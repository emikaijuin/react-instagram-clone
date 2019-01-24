import React, { Component } from 'react';
import '../App.css';
import axios from 'axios'
import UserImages from '../containers/UserImages'
import LoadingIndicator from '../components/LoadingIndicator'


class HomePage extends Component {
  state = {
    users: [],
    isLoading: true
  }

  componentDidMount() {
    axios.get('https://insta.nextacademy.com/api/v1/users')
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
              <UserImages id={user.id} username={user.username} profilePicture={user.profileImage}/>
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
      <div class="page-container">
        { this.state.isLoading ? 
          <LoadingIndicator src="loader.gif" /> : 
          this.returnUsers() 
        }
      </div>
    )
  }
}

export default HomePage;
