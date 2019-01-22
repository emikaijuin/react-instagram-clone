import React from "react"
import { Route } from "react-router-dom"

import HomePage from './pages/HomePage'
import UserProfilePage from './pages/UserProfilePage'
import Navbar from './components/Navbar'

import './App.css'

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