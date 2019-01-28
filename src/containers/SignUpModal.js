import React, { Component } from "react";
import axios from "axios";

class SignUpModal extends Component {
  state = {
    email: '',
    password: '',
    username: ''
  }

  handleSubmit = event => {
    event.preventDefault()
    if (this.isSubmittable()) {
      axios({ 
        method: 'post',
        url: 'https://insta.nextacademy.com/api/v1/users/new',
        data: {
          username: this.state.username,
          email: this.state.email,
          password: this.state.password
        }
      }).then(result => {
        this.props.signIn(result.data.auth_token)
        this.props.unmountMe()
      }).catch(error => {
        console.log(error)
        alert('There was an issue signing you up, please try again.')
      })
    } else {
      alert('Not valid email or password, please try again.')
    }
  }

  isSubmittable = () => (
    this.isValidEmail() && this.state.password ? true : false
  )

  handleUsernameInput = event => {
    this.setState({ username: event.target.value })
  }

  handleEmailInput = event => {
    this.setState({ email: event.target.value })
  }

  handlePasswordInput = event => {
    this.setState({ password: event.target.value })
  }

  isValidEmail() {
    if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.email)) {
      return true 
    } else {
      return false
    }
  }

  render() {
    return (
      <div className="user-modal" >
        <form onSubmit={ this.handleSubmit }>
          <div className="form-group">
            <label>Username</label>
            <input 
              type= "text" 
              name= "user[username]" 
              className="form-control"
              value= { this.state.username }
              onChange= { this.handleUsernameInput }
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input 
              type= "text" 
              name= "user[email]" 
              className="form-control"
              value= { this.state.email }
              onChange= { this.handleEmailInput }
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input 
              type="password" 
              name="user[password]"
              className="form-control"
              value = { this.state.password }
              onChange = { this.handlePasswordInput }
            />
          </div>
          <div>
            <input 
              type ="submit" 
              className="btn btn-outline-secondary"
              disabled = { !this.isSubmittable() }
            />
          </div>
        </form>
        <div onClick={this.props.unmountMe} className="close-modal"><strong>X</strong></div>
      </div>
    )
  }
}

export default SignUpModal
