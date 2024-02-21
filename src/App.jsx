import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './home';
import Register from './forms/register';
import Login from './forms/login';
import UserData from './admin/Userdata';
import AdminLogin from './admin/adminlogin';
import Dashboard from './admin/dashboard';
import Userdashboard from './user/userdashboard';
import Insert from './forms/insert';
import Crview from './user/crview';
import Profile from './user/profile';
import { Dashb } from './user/dashb';

// Sidebar component
import SideBar from './user/sidebar';

function App() {
  function handleComponentSelect(componentName) {
    setSelectedComponent(componentName);
  };
  return (
    <div>
      <Router>
        <ToastContainer />
        <Routes>
          {/* Home, Login, and Register routes without sidebar */}
          <Route path="/" element={<Home />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />

          {/* Routes with sidebar */}
          <Route
            path="/UserData"
            element={
              <>
                <SideBar handleComponentSelect={handleComponentSelect} />
                <UserData />
              </>
            }
          />
          <Route
            path="/AdminLogin"
            element={
              <>
                <SideBar handleComponentSelect={handleComponentSelect} />
                <AdminLogin />
              </>
            }
          />
          <Route
            path="/dashboard"
            element={
              <>
                <SideBar handleComponentSelect={handleComponentSelect} />
                <Dashboard />
              </>
            }
          />
          <Route
            path="/userdashboard"
            element={
              <>
                <SideBar handleComponentSelect={handleComponentSelect} />
                <Userdashboard />
              </>
            }
          />
          <Route
            path="/Insert"
            element={
              <>
                <SideBar handleComponentSelect={handleComponentSelect} />
                <Insert />
              </>
            }
          />
          <Route
            path="/Crview"
            element={
              <>
                <SideBar handleComponentSelect={handleComponentSelect} />
                <Crview />
              </>
            }
          />
          <Route
            path="/Profile"
            element={
              <>
                <SideBar handleComponentSelect={handleComponentSelect} />
                <Profile />
              </>
            }
          />
          <Route
            path="/dashb"
            element={
              <>
                <SideBar handleComponentSelect={handleComponentSelect} />
                <Dashb />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
