import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from "react-router-dom";
import logo from '../assets/images/logo.png'

const SideNav = () => {

    const { logout } = useAuth();

    const [error, setError] = useState('');

    const navigate = useNavigate();
  
    const handleLogOut = async () => {
        setError('');
        try{
            await logout();
            navigate('/');
        } catch {
            setError('Failed to log out');
        }   
    };

  return (
    <div className="side-nav">
        <a href='https://www.affiliategalore.com'>
            <div className='nav-section logo'>
                <img src={logo} alt="logo" className='logo-style'/>
            </div>
        </a>
        <Link to="/">
            <div className='nav-section active'>
                DashBoard
            </div>
        </Link>
        <Link to="/my-affiliates">
            <div className='nav-section'>
                My Affiliates
            </div>
        </Link>
        <Link to="/profile">
            <div className='nav-section'>
                Profile
            </div>
        </Link>
        <a href='#'>
            <div className='nav-section'>
                Contact Us
            </div>
        </a>
        <button onClick={handleLogOut} className="blue-button">
          Log Out
        </button>
        { error && <div>{error}</div>}
    </div>
  )
}

export default SideNav;