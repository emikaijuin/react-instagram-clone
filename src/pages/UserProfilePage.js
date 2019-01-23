import React from "react"
import axios from "axios"
import UserImages from "../containers/UserImages"
import LoadingIndicator from "../components/LoadingIndicator";

class UserProfilePage extends React.Component {
  state = {
    isLoading: true
  }

  componentDidMount() {
   this.setState({isLoading: false})
  }

  render() {

    return (
      <div class="page-container">
        <div>
          { 
            this.state.isLoading ? 
            <LoadingIndicator src="loading.gif" /> : 
            <UserImages id={this.props.match.params.id}/>
          }
        </div>
      </div>
    )
  }
}

export default UserProfilePage