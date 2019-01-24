import React, {Component} from "react";
import axios from 'axios';

class LoginModal extends Component {

  state = {
    email: '',
    password: ''
  }

  handleSubmit = event => {
    event.preventDefault()
    if (this.isSubmittable()) {
      axios.post('https://insta.nextacademy.com/api/v1/login', {
        email: this.state.email,
        password: this.state.password
      })
        .then(result => {
          this.props.signIn(result.data.auth_token)
          this.props.unmountMe()
        }).catch(error => {
          console.log(error)
          alert("Invalid credentials, please try again.")
        })
    } else {
      alert('Not a valid email, please try again.')
    }
  }

  isSubmittable = () => this.isValidEmail() && this.state.password ? true : false

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
      <div className="login-modal" >
        <form onSubmit={ this.handleSubmit }>
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

export default LoginModal