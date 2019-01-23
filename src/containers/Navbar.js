import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LoginModal from './LoginModal'


class Navbar extends Component {
  state= {
    displayLogin: false
  }

  handleLoginClick = () => {
    this.setState({displayLogin: true})
  }

  handleLoginModalUnmount = () => {
    this.setState({displayLogin: false})
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
            <a href="#" className="navbar-icon" onClick={this.handleLoginClick}><FontAwesomeIcon icon="user" /></a>
            <a href="#" className="navbar-icon" ><FontAwesomeIcon icon="heart" /></a>
          </div>

        </div>

        {this.state.displayLogin ? <LoginModal unmountMe={this.handleLoginModalUnmount} /> : null}
      </nav>
    )
  }
}

export default Navbar