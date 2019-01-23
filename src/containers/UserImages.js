import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import Image from 'react-graceful-image';
import LoadingIndicator from '../components/LoadingIndicator'

class UserImage extends Component {
  state = {
    images: '',
    isLoading: true
  }
  componentDidMount() {
    axios.get(`https://insta.nextacademy.com/api/v1/images?userId=${this.props.id}`).then(
      result => {
       this.setState({
         images: result.data,
         isLoading: false
       })
      }
    )
  }

  returnImage() {
    return (
      <ul>
        {
          this.state.images.map(src => (
            <li>
              <Image 
                src={src} 
                width="50%"
                height="auto"  
                placeholderColor = "#ffecd9"
              />            
            </li>   
          ))
        }
      </ul>
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