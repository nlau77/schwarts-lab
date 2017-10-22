import React from 'react'

const Profile = (props) => {

  return (
    <div className='small-12 columns profile-section'>
      <img className="profile-picture" src={assetHelper[`profiles/${props.img_url}`]}></img>
      <div className="profile-info">
        <p>{props.name}</p>
        <p>email: {props.email}</p>
      </div>
      <p>{props.description}</p>
    </div>
  )
}

export default Profile
