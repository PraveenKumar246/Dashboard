import "./Sidebar.css";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={logo} alt="logo" />
          <h1>Paresh International School,Hyderabad</h1>
        </div>
        <i
          onClick={() => closeSidebar()}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>

      <div className="sidebar__menu">
        <div className= "sidebar__link active_menu_link active">
          
          <i className="fa fa-home"></i>
          <NavLink
                exact
                to="/home"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Dashboard
              </NavLink>
        </div>
        
        <h2>My Tools</h2>
        
      <ul className={click ? "sidebar__link active_menu_link active" : "sidebar__link"}>
        <li className= "sidebar__link">
          <i className="fa fa-user-secret" aria-hidden="true"></i>
          <NavLink
                exact
                to="/"
                activeClassName="active"
                className="sidebar__link"
                onClick={handleClick}
              >
                Home
              </NavLink>
        
        </li>
        <li className="sidebar__link">
          <i className="fa fa-building-o"></i>
          <NavLink
                exact
                to="/"
                activeClassName="active"
                className="sidebar__link"
                onClick={handleClick}
              >
                Home
              </NavLink>
        </li>
        <li className="sidebar__link">
          <i className="fa fa-wrench"></i>
          <a href="#">Grades</a>
        </li>
        <li className="sidebar__link">
          <i className="fa fa-archive"></i>
          <a href="#">Time Table</a>
        </li>
        <li className="sidebar__link">
          <i className="fa fa-handshake-o"></i>
          <a href="#">Fees</a>
        </li>
        
        <li className="sidebar__link">
          <i className="fa fa-question"></i>
          <a href="#">Profile</a>
        </li>
        <li className="sidebar__link">
          <i className="fa fa-sign-out"></i>
          <NavLink to="#about" activeClassName={"active"} className={"anything"}>About</NavLink>
        </li>
        <li className="sidebar__link">
          <i className="fa fa-calendar-check-o"></i>
          <a href="#">Change Password</a>
        </li>
        <li className="sidebar__link">
          <i className="fa fa-files-o"></i>
          <a href="#">Dairy</a>
        </li>
        
        <li className="sidebar__link">
          <i className="fa fa-money"></i>
          <a href="#">Transport</a>
        </li>
        <li className="sidebar__link">
          <i className="fa fa-briefcase"></i>
          <a href="#">School Gallery</a>
        </li>
        <li className="sidebar__logout">
          <i className="fa fa-power-off"></i>
          <a href="#">Help and Support</a>
       
        </li>
        </ul>
     </div>
    </div>
  );
};

export default Sidebar;
