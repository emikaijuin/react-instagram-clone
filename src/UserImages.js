import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Image from 'react-graceful-image';
import LoadingIndicator from './LoadingIndicator'

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
        placeholderColor = "#ffecd9"
      />
    )
  }

  render () {
    return (
      <div>
       { this.state.isLoading ? 
        <LoadingIndicator src = "loading2.gif" /> : 
        this.returnImage() 
      }
      </div>

    )
  }
}

export default UserImage