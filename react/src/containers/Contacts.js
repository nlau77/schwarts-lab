import React, { Component } from 'react';
import Profile from '../components/Profile'

class Contacts extends Component {
  constructor(props){
    super(props);
    this.state = {
    profiles: [],
    pastMembers: []
    }
  }

  componentDidMount(){
    fetch(`/api/v1/profiles`)
    .then(response =>{
      if(response.ok){
        return response;
      }else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage)
        throw(error);
      }
    })
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({
        profiles: responseData.profiles,
        pastMembers: responseData.pastmembers
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){
    let profiles = this.state.profiles.map(profile => {
      return (
        <Profile
        key={profile.id}
        id={profile.id}
        name={profile.name}
        email={profile.email}
        description={profile.description}
        img_url={profile.img_url}
        />
      )
    })

    let past_members = this.state.pastMembers.map(pastMember => {
      return (
        <p>{pastMember.name} : {pastMember.email}</p>
      )
    })

    return (
      <div className="contacts-header">
        <div className="row">
          <h3 className="contact-title">PI</h3>
          <div className="columns small-4 small-offset-1">
          <img className="" src={assetHelper["cat.jpg"]}></img>
          </div>
          <div className="columns small-6">
            <ul className="PI-info">
              <li>Title: Yale PI </li>
              <li>email: @</li>
              <li>phone: 555-555-5555</li>
              <li>address: Yale </li>
            </ul>
          </div>
        </div>
        <div className="row members-header">
          <h3 className="contact-title">Members</h3>
          {profiles}
        </div>
        <div className="row past-member-header">
          <h3 className="contact-title">Past Members</h3>
          {past_members}
        </div>
      </div>
    )
  }
}

export default Contacts;
