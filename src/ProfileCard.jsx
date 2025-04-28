import React from 'react';
import './ProfileCard.css';

const ProfileCard = ({ name, bio, imageUrl, bgColor }) => {
  return (
    <div className="profile-container">
      <div className="profile-card" style={{ backgroundColor: bgColor }}>
        <img src={imageUrl} alt={`${name} profile`} className="profile-img" />
        <h2 className="profile-name">{name}</h2>
        <p className="profile-bio">{bio}</p>
      </div>
    </div>
  );
};

export default ProfileCard;