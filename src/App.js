import React from "react"
import { Route } from "react-router-dom"

import HomePage from './pages/HomePage'
import UserProfilePage from './pages/UserProfilePage'
import Navbar from './containers/Navbar'
import MyProfilePage from './pages/MyProfilePage'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faUser, faCompass, faHeart, faSignOutAlt, faSignInAlt, faCog } from '@fortawesome/free-solid-svg-icons'

import './App.css'

library.add(fab, faUser, faCompass, faHeart, faSignOutAlt, faSignInAlt, faCog)

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div id="main-container">
          <Route exact path="/" component={HomePage} />
          <Route path="/users/:id" component={UserProfilePage} />
          <Route exact path="/profile" component={MyProfilePage} />
        </div>
      </div>
    )
  }
}

export default App