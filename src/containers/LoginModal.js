import React, {Component} from "react";

class LoginModal extends Component {

  state = {
    email: '',
    password: ''
  }

  handleSubmit = event => {
    event.preventDefault()
    if (this.isSubmittable()) {
      alert('Welcome to Nextagram, ' + this.state.email)
      this.props.unmountMe()
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
          <div><label>Email</label></div>
          <div>
            <input 
              type= "text" 
              name= "user[email]" 
              value= { this.state.email }
              onChange= { this.handleEmailInput }
            />
          </div>
          <div><label>Password</label></div>
          <div>
            <input 
              type="password" 
              name="user[password]"
              value = { this.state.password }
              onChange = { this.handlePasswordInput }
            />
          </div>
          <div>
            <input 
              type ="submit" 
              disabled = { !this.isSubmittable() }
            />

          </div>
        </form>
        <div onClick={this.props.unmountMe}>Close</div>
      </div>
    )
  }
}

export default LoginModal