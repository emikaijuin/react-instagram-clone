import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const ProfileHeader = props => (
  <div 
    style = {
      { 
        margin: "50px 0 100px 0", 
        width: "70%", 
        paddingLeft: "50px", 
        position: "relative"
      }
    }
  >
    <div className="profile-header"
      style={
        {
          display: "flex",
          justifyContent: "flexStart"
        }
      }
    >
      <div className = "ph-image"
        style = {
          {
            marginRight: "10%",
            width: "150px",
            height: "150px",
            borderRadius: "100%",
            overflow: "hidden"
          }
        }
      >
          <img src={props.profilePicSrc} style={{width: "100%"}}/>
      </div>
      <div className = "ph-info" 
        style = {
          { 
            width: "40%",
            display: "flex",
            flexDirection: "column",
            height: "200px",
            justifyContent: "space-between"
          }
        }  
      >
        <div className="ph-title"
          style = {
            {
              fontFamily: "Lato",
              fontSize: "2rem",
              display: "flex",
              justifyContent: "space-around"
            }
          }
        >
          <div>ehmeekah</div>
          <div><button className="btn btn-outline-secondary btn-sm">Edit Profile</button></div>
          <div><FontAwesomeIcon icon="cog" /></div>
        </div>
        <div className="ph-stats"
          style = {
            { 
              display: "flex",
              justifyContent: "space-around"
            }
          }
        >
          <div><strong>918</strong> Posts</div>
          <div><strong>1938</strong> Followers</div>
          <div><strong>1928</strong> Following</div>
        </div>
        <div className="ph-bio">
          <div><strong>Emika Ijuin</strong></div>
          <div>This is a bio</div>
          <div>All about me</div>
        </div>
      </div>
    </div>
    <div className="highlights">
    </div>
  </div>
)

export default ProfileHeader