import React, {Component} from "react";

class LoginModal extends Component {


  render() {
    return (
      <div className="login-modal" >
        <form >
          <div><label>Email</label></div>
          <div><input type="email" name="user[email]" /></div>
          <div><label>Password</label></div>
          <div><input type="password" name="user[password]" /></div>
          <div><input type="submit" /></div>
        </form>
        <div onClick={this.props.unmountMe}>Close</div>
      </div>
    )
  }
}

export default LoginModal