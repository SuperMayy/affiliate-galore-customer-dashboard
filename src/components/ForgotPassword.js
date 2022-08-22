import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.js";

const ForgotPassword = () => {
  const emailRef = useRef();

  const { resetPassword } = useAuth();

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
        setMessage('');
        setError('');
        setLoading(true);
        await resetPassword(emailRef.current.value);
        setMessage('Check your inbox for further instructions');
    } catch (err) {
        // 👇️ clear input field value
        emailRef.current.value = '';

        if(err.code === "auth/user-not-found"){
            return setError('This email does not exist in our database.')
        }
        if(err.code === "auth/wrong-password"){
            return setError('Incorrect password')
        }
            
        return setError('Failed to reset password.');
    }

    setLoading(false);
  }
  
  return (
    <div className="form-container">
            <h2 className="text-center mb-4 sign-up-text">Password Reset</h2>
            {error && <p className="error-message">{error}</p>}
            {message && <p className="success-message">{message}</p>}
        <div className="sign-up-form">
            <form onSubmit={handleSubmit}>
                <div id="email" className="input-div">
                    <label>Email</label>
                    <input type="email" ref={emailRef}  required />
                </div>
                <button disabled={loading} className="form-button" type="submit">
                  Reset Password
                </button>
            </form>
            <div className="already-have-account-container"><br/>
                <Link to="/login">Login</Link><br/>
                <p>Need an account? <Link to="/signup">Sign Up</Link></p>
            </div>
            <br/><br/><br/><br/>
        </div>
    </div>
  )
}

export default ForgotPassword;