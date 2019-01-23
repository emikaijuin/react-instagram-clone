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
      
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">
        <FontAwesomeIcon icon={['fab', 'instagram']} className="logo" />
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
          <Link to="/users/1" className="logo">
            Instagram
            <span className="sr-only">(current)</span>
          </Link>
          </li>
          <li className="nav-item active">
            <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </li>
        </ul>

        <div className="my-2 my-lg-0">
          <a href="#" onClick={this.handleLoginClick}>Login</a>
        </div>

        </div>
        {this.state.displayLogin ? <LoginModal unmountMe={this.handleLoginModalUnmount} /> : null}
      </nav>
    )
  }
}

export default Navbar