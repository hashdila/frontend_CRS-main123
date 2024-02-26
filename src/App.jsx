import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'; // Import useLocation
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './home';
import Register from './forms/register';
import Login from './forms/login';
import UserData from './admin/Userdata';
import Userdashboard from './user/userdashboard';
import Insert from './forms/insert';
import Crview from './user/crview';
import SideBar from './user/sidebar';

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
  const isHomePage = location.pathname === '/';
  const isLoginPage = location.pathname === '/Login';
  const isRegisterPage = location.pathname === '/Register';

  const isPublicRoute = isHomePage || isLoginPage || isRegisterPage;

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

export default App;
