import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import api from '../api';
import dashboard from './dashboard';



function AdminLogin() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${api.defaults.baseURL}/admin/login/`, formData);
      const token = response.data.token;
      localStorage.setItem('token', token);
      console.log('Admin Login successful:', response.data);
      navigate('/dashboard');
      // Optionally, handle successful login here (e.g., redirect user)

    } catch (error) {
      console.error('Error logging in as admin:', error);
      // Optionally, handle login failure (e.g., display error message)
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6">Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username:</label>
            <input type="text" name="username" id="username" value={formData.username} onChange={handleChange} className="mt-1 p-2.5 w-full border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" required />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
            <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} className="mt-1 p-2.5 w-full border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" required />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2.5 rounded-md hover:bg-blue-600 transition duration-300">
            Login
          </button>
        </form>

      </div>
    </div>
  );
}

export default AdminLogin;
