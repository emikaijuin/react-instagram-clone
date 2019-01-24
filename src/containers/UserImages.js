import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import Image from 'react-graceful-image';
import LoadingIndicator from '../components/LoadingIndicator'
import { Link } from 'react-router-dom'

class UserImages extends Component {
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
                <Link to={`users/${this.props.id}`}>
                  <img 
                    src={this.props.profilePicture}
                    className="card-header-user-profile-pic-icon"
                  />
                </Link>
              </div>
              <div>
                <div className="card-header-handle">
                  <strong>
                    {`@${this.props.username}`}
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
        <LoadingIndicator src = "loader.gif" style={{maxWidth: "50px"}}/> : 
        this.returnImage() 
      }
      </div>

    )
  }
}

export default UserImages