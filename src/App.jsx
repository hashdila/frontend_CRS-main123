import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
import SideBar from './user/sidebar';
import Profile from './user/profile';
import Navbar from './component/navbar';
import { Dashb } from './user/dashb';

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
        <Route path="/Profile" element={<Profile />} />
        <Route path="/dashb" element={<Dashb />} />
        <Route path='/Navbar' element={<Navbar/>}/>
      </Routes>
    </>
  );
}

export default App;
