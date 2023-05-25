import React, { useState } from "react"
import Navbar from "../navbar/Navbar"
import Main from "../main/Main"
import Sidebar from "../sidebar/Sidebar"
import "./Home.css"


function Home (){

    const [sidebarOpen, setsidebarOpen] = useState(false);
const openSidebar = () => {
  setsidebarOpen(true);
};
const closeSidebar = () => {
  setsidebarOpen(false);
};

return (
<div className="Home">
          <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
          <Main/>
          <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
          
          
      </div>

);
}

export default Home;