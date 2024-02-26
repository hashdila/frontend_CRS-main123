// App.jsx
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SideBar from './user/sidebar'; // Import the Sidebar component
import Home from './home';
import Register from './forms/register';
import Login from './forms/login';
import UserData from './admin/Userdata';
import AdminLogin from './admin/adminlogin';
import Dashboard from './admin/dashboard';
import Userdashboard from './user/userdashboard';
import Insert from './forms/insert';
import Crview from './user/crview';

import Navbar from './component/navbar';


function App() {
  return (
    <Router>
      <ToastContainer />
      <AppRoutes />
    </Router>
  );
}

function AppRoutes() {
  const location = useLocation();
  const isPublicRoute =
    location.pathname === '/' || location.pathname === '/Login' || location.pathname === '/Register';

  return (
    <>
      {/* Render the Sidebar only if it's not a public route */}
      {!isPublicRoute && <SideBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/UserData" element={<UserData />} />
        <Route path="/AdminLogin" element={<AdminLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/userdashboard" element={<Userdashboard />} />
        <Route path="/Insert" element={<Insert />} />
        <Route path="/Crview" element={<Crview />} />
        <Route path="/Navbar" element={<Navbar />} />
      </Routes>
    </>
  );
}

export default App;
