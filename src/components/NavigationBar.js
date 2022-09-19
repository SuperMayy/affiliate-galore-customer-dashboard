import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/images/logo.png'

const NavigationBar = () => {
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
    <Navbar bg="light" expand="lg" className="navigation-bar">
      {/* <div className='search-container desktop'>
        <form className="affiliate-search d-flex">
          <input
              className="affiliate-input-search" 
              type="text" 
              id="affiliate" 
              name="affiliate" 
              ref={searchRef}
              placeholder="Search for affiliate companies"
          />
          <button className="search-button">Search</button>
        </form>
      </div> */}
      <Container fluid>
        <Navbar.Brand href="https://www.affiliategalore.com">
          <div>
            <img src={logo} alt="logo" className='logo-style'/>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Dashboard</Nav.Link>
            <Nav.Link href="/my-affiliates">My Affiliates</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
            <Nav.Link href="https://www.affiliategalore.com/#contact-section">Contact Us</Nav.Link>
            {/* <div className='search-container'>
              <form className="affiliate-search d-flex">
                <input
                    className="affiliate-input-search" 
                    type="text" 
                    id="affiliate" 
                    name="affiliate" 
                    // ref={searchRef}
                    placeholder="Search for affiliate companies"
                />
                <button className="search-button">Search</button>
              </form>
            </div> */}
            <button onClick={handleLogOut} className="blue-button">
              Log Out
            </button>
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar;