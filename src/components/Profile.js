import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from "react-router-dom";

const Profile = () => {

  const [error, setError] = useState('');
  const { currentUser } = useAuth();

  return (
    <>
      <div className='profile-card'>
        <h1>Profile</h1>
        {error && <p className="error-message">{error}</p>}
        { currentUser.displayName && <p><strong>Name:</strong> {currentUser.displayName}</p> }
        <p><strong>Email:</strong> {currentUser.email}</p>
        <p> Intrests: 
          <ul className='categories'>
            <li>Airline,</li>
            <li>High-Paying,</li>
            <li>Hotel,</li>
            <li>Travel</li>
          </ul>
        </p>
        <p>Are you a content creator: Yes</p>
        <Link to="/update-profile">
          <button className="blue-button">
            Update Profile
          </button>
        </Link>
      </div>
    </>
  )
}

export default Profile;