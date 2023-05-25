import "./Navbar.css";
import avatar from "../../assets/BallamPraveenKumar.jpg";
import { Link } from "react-router-dom";
import { FaBell,FaSignOutAlt } from "react-icons/fa";

const Navbar = ({ sidebarOpen, openSidebar }) => {

  
  
  return (
    <nav className="navbar">
      <div className="nav_icon" onClick={() => openSidebar()}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
      <div className="navbar__left">
      <form className="form-inline ml-3">
      
        <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
        
          <button className="btn btn-navbar" type="submit">
            <i className="fa fa-search" />
          </button>
        
      
    </form>
       
      </div>
      <div className="navbar__right">
        <div>
          <Link to="/search">
            <FaBell/>
          </Link>
        </div>
        <div className="name">
          <h5>Rajesh Kumar</h5>
          <h6>7th A</h6>
        </div>
        <div className="avatar">
        <Link to="/notifications" >
            <img width="30" src={avatar} alt="avatar" />
            </Link>
        </div>
        <div className="avatar">
          <Link to="/search" >
            <FaSignOutAlt className="logout" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
