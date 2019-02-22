import React from "react"
import axios from "axios"
import UserImages from "../containers/UserImages"
import LoadingIndicator from "../components/LoadingIndicator";

class UserProfilePage extends React.Component {
  state = {
    isLoading: true
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/api/v1/users/${this.props.match.params.username}`,
      {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('next_auth_token')}`
        }
      })
    .then(result => {
      this.setState({ 
        ...result.data,
        isLoading: false 
      })
    }).catch(error => {
      console.log(error)
    })
  }

  profileContent = () => {
    if (
      this.state.current_user.id == this.state.profile_user.id ||
      !this.state.profile_user.private ||
      this.state.current_user_is_following
    ) {
      return <UserImages username={this.props.match.params.username}/>
    } else if (!this.state.current_user) {
      return "Please login to view profile."
    } else {
      return "User has profile set to private, send a follow request to see this user's profile."
    }
  }

  render() {

    return (
      <div className="page-container">
        <div>
          { 
            this.state.isLoading ? 
            <LoadingIndicator src="loading.gif" /> : 
            this.profileContent()
          }
        </div>
      </div>
    )
  }
}

export default UserProfilePage