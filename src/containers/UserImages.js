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
            <li class="card">
            <div class="card-header">
              <div>
                <img src="https://pbs.twimg.com/profile_images/700252955430117376/C0s5XPPa.png" class="card-header-user-profile-pic-icon"/>
              </div>
              <div>
                <div className="card-header-handle">
                  <strong>
                    @thisisafakehandle
                  </strong>
                </div>
                <div className="card-header-image-location">Anywhere, World</div>
              </div>
            </div>
            <div class="card-image">
              <Image 
                src={src} 
                width="50%"
                height="auto"  
                className = "image"
                />            
            </div>
            <div class="card-footer">
              <div>A bunch of fake stuff</div>
              <div>A bunch of fake stuff</div>
            </div>
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