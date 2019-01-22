import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Image from 'react-graceful-image';

class UserImage extends Component {
  state = {
    image: '',
    isLoading: true
  }
  componentDidMount() {
    axios.get(`https://insta-oct18.nextacademy.com/api/v1/images?userId=${this.props.id}`).then(
      result => {
       this.setState({
         image: result.data[0],
         isLoading: false
       })
      }
    )
  }

  returnImage() {
    return (
      <Image 
        src={this.state.image} 
        width="50%"
        height="auto"  
      />
    )
  }

  returnLoading() {
    return (
      <img src="loading2.gif"></img>
    )
  }

  render () {
    return (
      <div>
       { this.state.isLoading ? this.returnLoading() : this.returnImage() }
      </div>

    )
  }
}

export default UserImage