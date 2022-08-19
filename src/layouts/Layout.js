import { Outlet, Link } from "react-router-dom";
import SearchIcon from '../assets/svgs/search.svg'
import HamburgerIcon from '../assets/svgs/menu-icon.svg'
import SideNav from "../components/SideNav";

const Layout = () => {
  return (
    <main className="App">
        <SideNav />
        <div className="right-div">
            <header>
                <div className="hamburger-menu">
                    <img alt="hamburger menu button" src={HamburgerIcon}></img>
                </div>
                <div className='search-container'>
                    <form className="affiliate-search">
                        <input
                            className="affiliate-input-search" 
                            type="text" 
                            id="affiliate" 
                            name="affiliate" 
                            value="Search for affiliate companies"
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
            </header>
            <div className="page-content">
                <Outlet />
            </div>
        </div>
    </main>
  )
}

export default Layout;