import React, { useRef, useState } from "react";
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const displayNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { currentUser, updatePassword, updateEmail, updateDisplayName } = useAuth()
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate ();

  function handleSubmit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    const promises = []
    setLoading(true)
    setError("")

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value))
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value))
    }
    if (displayNameRef.current.value) {
      promises.push(updateDisplayName(displayNameRef.current.value))
    }

    Promise.all(promises)
      .then(() => {
        navigate("/profile");
      })
      .catch((err) => {
        console.log(JSON.stringify(err));
        if(err.code === "auth/requires-recent-login"){
            setError("Your credentials are too old, log in again to update your details.");
        } else {
            setError("Failed to update account");
        }
      })
      .finally(() => {
        setLoading(false);
      })
  }

  return (
    <>
      <div className='profile-card'>
          <h2 className="text-center mb-4">Update Profile</h2>
          {error && <p className="error-message">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div id="display-name" className="input-div">
              <label>User Name</label>
              <input
                type="text"
                ref={displayNameRef}
                required
                defaultValue={currentUser.displayName}
                placeholder="Input User Name"
              />
            </div>
            <div id="email" className="input-div">
              <label>Email</label>
              <input
                type="email"
                ref={emailRef}
                required
                defaultValue={currentUser.email}
                placeholder="Email"
              />
            </div>
            <div id="password" className="input-div">
              <label>Password</label>
              <input
                type="password"
                ref={passwordRef}
                placeholder="Leave blank to keep the same."
              />
            </div>
            <div id="password-confirm" className="input-div">
              <label>Password Confirmation</label>
              <input
                type="password"
                ref={passwordConfirmRef}
                placeholder="Leave blank to keep the same."
              />
            </div>
            <button disabled={loading} className="blue-button update-button" type="submit">
              Update
            </button>
          </form>
      </div>
      <div className="cancel-link">
        <Link to="/">Cancel</Link>
      </div>
    </>
  )
}

export default UpdateProfile;