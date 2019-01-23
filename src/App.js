import React from "react"
import { Route } from "react-router-dom"

import HomePage from './pages/HomePage'
import UserProfilePage from './pages/UserProfilePage'
import Navbar from './containers/Navbar'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import './App.css'

library.add(fab)

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Route exact path="/" component={HomePage} />
        <Route path="/users/:id" component={UserProfilePage} />
      </div>
    )
  }
}

export default App