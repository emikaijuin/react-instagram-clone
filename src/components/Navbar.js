import React from "react"
import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <nav>
      <div>
        <Link to="/">Home</Link>
          {/* We temporarily hardcode this to user id 1*/}
        <Link to="/users/1">My Profile</Link>
      </div>

      <div>
        <Link to="/signout">Sign Out</Link>
      </div>

    </nav>
  )
}

export default Navbar