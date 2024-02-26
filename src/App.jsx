// App.jsx
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SideBar from './user/sidebar';
import Home from './home';
import Register from './forms/register';
import Login from './forms/login';
import UserData from './admin/Userdata';
import Log from './admin/Log';
import Userdashboard from './user/userdashboard';
import Insert from './forms/insert';
import Crview from './user/crview';

function App() {
  return (
    <Router>
      <ToastContainer />
      <SideBar /> {/* Ensure that SideBar component is rendered outside Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/UserData" element={<UserData />} />
        <Route path="/Log" element={<Log />} />
        <Route path="/Userdashboard" element={<Userdashboard />} />
        <Route path="/Insert" element={<Insert />} />
        <Route path="/Crview" element={<Crview />} />
      </Routes>
    </Router>
  );
}

export default App;
