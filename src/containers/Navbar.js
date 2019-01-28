import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LoginModal from './LoginModal'
import SignUpModal from './SignUpModal'


class Navbar extends Component {
  state= {
    displayLogin: false,
    displaySignUp: false,
    isLoggedIn: !!localStorage.getItem('next_auth_token')
  }
  
  handleSignUpClick = () => {
    this.setState({displaySignUp: true})
  }

  handleLoginClick = () => {
    this.setState({displayLogin: true})
  }

  unmountLoginModal = () => {
    this.setState({displayLogin: false})
  }
  unmountSignUpModal = () => {
    this.setState({displaySignUp: false})
  }

  handleLogoutClick = () => {
    localStorage.removeItem('next_auth_token')
    this.setState({isLoggedIn: false})
  }

  signInUser = auth_token => {
    localStorage.setItem('next_auth_token', auth_token)
    this.setState({ isLoggedIn: true})
  }




  render() {

    return (
      
      <nav className="navbar navbar-expand-lg navbar-light" id="nav">
        <div id="nav-container">
        
          <div>
            <Link to="/" className="navbar-brand">
              <FontAwesomeIcon icon={['fab', 'instagram']} className="logo" />
            </Link>
            <Link to="/users/1" className="logo">
              Instagram
            </Link>
          </div>
        
          <div>
            <form>
            <input className="form-control" type="search" placeholder="Search" ></input>
            </form>
          </div>

          <div >
            <a href="#" className="navbar-icon" ><FontAwesomeIcon icon="compass" /></a>
            <Link to="/profile" className="navbar-icon"><FontAwesomeIcon icon="user" /></Link>
            <a href="#" className="navbar-icon" ><FontAwesomeIcon icon="heart" /></a>
            <a href="#" className="navbar-icon">
              { this.state.isLoggedIn ? 
                  <FontAwesomeIcon 
                    icon="sign-out-alt" 
                    onClick={this.handleLogoutClick}
                  /> 
                : 
                  <span className="navbar-icon">
                    <FontAwesomeIcon 
                      icon="sign-in-alt" 
                      onClick={this.handleLoginClick}
                      className="navbar-icon"
                      title="Log In"
                    />
                    <FontAwesomeIcon 
                      icon="user-plus"
                      onClick={this.handleSignUpClick}
                      className="navbar-icon"
                      title="Sign Up"
                    />
                  </span>
              }
            </a>
          </div>

        </div>

        {this.state.displayLogin ? <LoginModal unmountMe={this.unmountLoginModal} signIn={this.signInUser}/> : null}
        {this.state.displaySignUp ? <SignUpModal unmountMe={this.unmountSignUpModal} signIn={this.signInUser}/> : null}
      </nav>
    )
  }
}

export default Navbar