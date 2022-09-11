import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from "react-router-dom";

const Profile = () => {

  //const [error, setError] = useState('');
  //const [userData, setUserData] = useState('')
  const { currentUser } = useAuth();

  // const getUserData = () => {
  //   fetch(`/api/v1/users/${currentUser.uid}`)
  //   .then(res => {
  //     if(!res.ok){
  //       throw Error('There is a server error');
  //     };
  //     return res.json();
  //    })
  //    .then(data => {
  //       setUserData(data);
  //     })
  //     .catch(err => {
  //       setError(err);
  //     }); 
  // }

  // useEffect(() => {
  //   getUserData();
  // }, [])

  return (
    <>
      <div className='profile-card'>
        <h3>Profile</h3>
        {/* {error && <p className="error-message">{error}</p>} */}
        <p><strong>User Id:</strong> {currentUser.uid}</p>
        { currentUser.displayName && <p><strong>Name:</strong> {currentUser.displayName}</p> }
        <p><strong>Email:</strong> {currentUser.email}</p>
        {/* <p> Intrests: 
          {userData[0].category.length === 0 ||  !userData[0].category 
          ? <Link to="/">Let us know your intrests</Link>
          : <ul className='categories'>
            {userData[0].category.map((data, index) => {
              return <li key={index}>{data},</li>
            })}
          </ul>}
        </p> */}
        {/* <p>Are you a content creator: Yes</p> */}
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