import React from 'react';
import './ProfileCard.css';

function ProfileCard(props) {
  return (
    <div className="profile-card-container">
      <div className="profile-card">
        <img src={props.image} alt={props.name} className="profile-img" />
        <h2 className="profile-name">{props.name}</h2>
        <p className="profile-bio">{props.bio}</p>
      </div>
    </div>
  );
}

export default ProfileCard;