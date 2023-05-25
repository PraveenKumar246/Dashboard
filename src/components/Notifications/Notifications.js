import React, { useState }  from "react";
import "./Notification.css"
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";


const Notifications = () => {
  
  const [sidebarOpen, setsidebarOpen] = useState(false);
  const openSidebar = () => {
    setsidebarOpen(true);
  };
  const closeSidebar = () => {
    setsidebarOpen(false);
  };

  return (
    
    <div className="Notification">
      
        <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
        <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
        <h1>Notifications</h1>
       
    </div>
    
  );
};

export default Notifications;