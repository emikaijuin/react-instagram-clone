import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LoginModal from './LoginModal'


class Navbar extends Component {
  state= {
    displayLogin: false,
    isLoggedIn: !!localStorage.getItem('next_auth_token')
  }

  handleLoginClick = () => {
    this.setState({displayLogin: true})
  }

  unmountLoginModal = () => {
    this.setState({displayLogin: false})
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
        <div>
        
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
            <input class="search-input" type="search" placeholder="Search" ></input>
            </form>
          </div>

          <div >
            <a href="#" className="navbar-icon" ><FontAwesomeIcon icon="compass" /></a>
            <a href="#" className="navbar-icon" ><FontAwesomeIcon icon="user" /></a>
            <a href="#" className="navbar-icon" ><FontAwesomeIcon icon="heart" /></a>
            { this.state.isLoggedIn ? 
                <FontAwesomeIcon 
                  className="navbar-icon" 
                  icon="sign-out-alt" 
                  onClick={this.handleLogoutClick}
                /> 
              : 
                <FontAwesomeIcon 
                  className="navbar-icon" 
                  icon="sign-in-alt" 
                  onClick={this.handleLoginClick}
                />
            }
          </div>

        </div>

        {this.state.displayLogin ? <LoginModal unmountMe={this.unmountLoginModal} signIn={this.signInUser}/> : null}
      </nav>
    )
  }
}

export default Navbar