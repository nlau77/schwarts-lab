import React from 'react'

const Profile = (props) => {

  return (
    <div className='small-6 columns'>
      <p>{props.name}  :  {props.email}</p>
      <img className="profile-pictures" src={assetHelper[`profiles/${props.img_url}`]}></img>
      <p>{props.description}</p>
    </div>
  )
}

export default Profile
