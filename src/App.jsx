import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';

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
    
      <div>
       


    <Router>
          <Routes>
            <Route path="/" element={<Home />} />;
            <Route path="/Register" element={<Register/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path='/Navbar' element={<Navbar/>}/>
            <Route path="/UserData" element={<UserData/>}/>
            <Route path="/AdminLogin" element={<AdminLogin/>}/>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/userdashboard" element={<Userdashboard/>}/>
            <Route path="/Insert" element={<Insert/>}/>
            <Route path="/Crview" element={<Crview/>}/>
            
          </Routes>
        </Router>
      </div>
        
  )
}

export default App
