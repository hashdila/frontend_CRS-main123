import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './home';
import Register from './forms/register';
import Login from './forms/login';
import UserData from './admin/Userdata';
import Userdashboard from './user/userdashboard';
import Insert from './forms/insert';
import Crview from './user/crview';
import SideBar from './user/sidebar';

function AppRoutes() {
  const location = useLocation();
  const isPublicRoute = ['/', '/Register', '/Login'].includes(location.pathname);

  return (
    <>
      {!isPublicRoute && <SideBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/UserData" element={<UserData />} />
        <Route path="/Userdashboard" element={<Userdashboard />} />
        <Route path="/Insert" element={<Insert />} />
        <Route path="/Crview" element={<Crview />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
