import React, { Component } from "react";
import axios from "axios";
import SquareImagePreview from "../components/SquareImagePreview";
import ProfileHeader from "../components/ProfileHeader"

class MyProfilePage extends Component {
  state = {
    images: []
  }

  componentDidMount() {
    axios.get('https://insta.nextacademy.com/api/v1/images/me', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('next_auth_token')}`
      }
    })
    .then(result => {
      this.setState({ images: result.data })
    }).catch(error => {
      console.log(error)
    })
  }


  render() {
    return (
      <div
        style = {
          {
            width: "50%",
            margin: "auto"
          }
        }  
      >
        <ProfileHeader profilePicSrc="https://instagram.fkul4-1.fna.fbcdn.net/vp/56ea526c2ccdc2b7b36c98e819b66317/5CC78D63/t51.2885-19/s320x320/37303952_280807742674704_5136530686991138816_n.jpg?_nc_ht=instagram.fkul4-1.fna.fbcdn.net"/>
        <hr/>
        <div
          style = {
            {
              display: "flex",
              flexWrap: "wrap",
              width: "95%",
              margin: "auto"
            }
          }
          >
          {
            this.state.images.map(src =>
              <SquareImagePreview src={src}/>
            )
          }
        </div>
      </div>
    )
  }
}

export default MyProfilePage