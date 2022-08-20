import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.js";

const SignUpForm = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef(); 

  const { signup } = useAuth();

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(passwordRef.current.value !== passwordConfirmRef.current.value){
        return setError('Passwords do not match');
    }

    try{
        setError('');
        setLoading(true);
        await signup(emailRef.current.value, passwordRef.current.value);
        navigate('/');
    } catch (err) {
        // 👇️ clear input field value
        emailRef.current.value = '';
        passwordRef.current.value = '';
        
        if(err.code === "auth/weak-password"){
            return setError('Your password should be at least 6 characters')
        }
        return setError('Passwords do not match');
    }

    setLoading(false);
  }
  
  return (
    <div className="form-container">
            <h2 className="text-center mb-4 sign-up-text">Sign Up</h2>
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
                <div id="password-confirm" className="input-div">
                    <label>Password Confirmation</label>
                    <input type="password" ref={passwordConfirmRef} required />
                </div>
                <button disabled={loading} className="form-button" type="submit">
                  Sign Up
                </button>
            </form>
            <div className="already-have-account-container">
                <p>Already have an account? <Link to="/login">Log In</Link></p>
            </div>
        </div>
    </div>
  )
}

export default SignUpForm;