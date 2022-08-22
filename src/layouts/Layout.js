import { Outlet, Link } from "react-router-dom";
import React, { useRef} from "react";
// import SearchIcon from '../assets/svgs/search.svg'
import HamburgerIcon from '../assets/svgs/menu-icon.svg'
import SideNav from "../components/SideNav";
import NavigationBar from "../components/NavigationBar";

const Layout = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log('search functionality', searchRef.current.value);
        // 👇️ clear input field value
        searchRef.current.value = '';
    }

    const searchRef = useRef();
    
  return (
    <main className="App">
        <SideNav/>
        <div className="right-div">
            {/* <header>
                <div className="hamburger-menu">
                    <img alt="hamburger menu button" src={HamburgerIcon}></img>
                </div>
                <div className='search-container'>
                    <form className="affiliate-search" onSubmit={handleSubmit}>
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
                </div>
                <div className="help-icon">
                    <p>?</p>
                </div>
                <Link to="/profile">
                    <div className="profile-icon">
                        <div className="profile-image"></div>
                    </div>
                </Link>
            </header> */}
            <NavigationBar/>
            <div className="page-content">
                <Outlet />
            </div>
        </div>
    </main>
  )
}

export default Layout;