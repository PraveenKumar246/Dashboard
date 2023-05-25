import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Search from "./components/Search/Search";
import Notifications from "./components/Notifications/Notifications";
import Home from "./components/Home/Home";

const App = () => {
  
  const [sidebarOpen, setsidebarOpen] = useState(false);
  const openSidebar = () => {
    setsidebarOpen(true);
  };
  const closeSidebar = () => {
    setsidebarOpen(false);
  };

  return (
    <Router>
      <div className="container">
          <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
          <Main/>
          <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
      </div>

      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/search" element={<Search/>} />
        <Route path="/notifications" element={<Notifications/>}/>
      </Routes>
    </Router>
  );
};

export default App;