import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.js";

const LogInForm = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const { login } = useAuth();

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
        setError('');
        setLoading(true);
        await login(emailRef.current.value, passwordRef.current.value);
        navigate('/');
    } catch (err) {
        // 👇️ clear input field value
        emailRef.current.value = '';
        passwordRef.current.value = '';

        if(err.code === "auth/user-not-found"){
            return setError('This email does not exist in our database.')
        }
        if(err.code === "auth/wrong-password"){
            return setError('Incorrect password')
        }
            
        return setError('Failed to log in');
    }

    setLoading(false);
  }
  
  return (
    <div className="form-container">
            <h2 className="text-center mb-4 sign-up-text">Log In</h2>
            {error && <p className="error-message">{error}</p>}
        <div className="sign-up-form">
            <form onSubmit={handleSubmit}>
                <div id="email" className="input-div">
                    <label>Email</label>
                    <input type="email" ref={emailRef}  required />
                </div>
                <div id="password" className="input-div">
                    <label>Password</label>
                    <input type="password" ref={passwordRef} required />
                </div>
                <button disabled={loading} className="form-button" type="submit">
                  Log In
                </button>
            </form>
            <div className="already-have-account-container">
                <p>Need an account? <Link to="/signup">Sign Up</Link></p>
                <Link to="/forgot-password">Forgot you password?</Link>
            </div>
            <br/><br/>
        </div>
    </div>
  )
}

export default LogInForm;