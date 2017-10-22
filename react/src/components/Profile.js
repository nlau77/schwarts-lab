import React from 'react'

const Profile = (props) => {

  return (
    <div className='small-12 columns profile-section'>
      <img className="profile-picture" src={assetHelper[`profiles/${props.img_url}`]}></img>
      <div className="profile-info">
        <h3>{props.name}</h3>
        <h5>email: {props.email}</h5>
      </div>
      <p>{props.description}</p>
    </div>
  )
}

export default Profile
